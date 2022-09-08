import { Editor } from "./editorIns";
import { BLOCK_TYPE } from "./index.type";
import * as blockUtils from "./block";

export function createContainer(editor: Editor, parentElement: HTMLElement) {
  const rootElement = document.createElement("div");
  rootElement.contentEditable = "true";
  rootElement.setAttribute("class", "root-editor");
  rootElement.setAttribute(
    "style",
    `left:${editor.selection.offsetLeft + 2}px; top:${
      editor.selection.offsetTop
    }px;`
  );
  parentElement.appendChild(rootElement);
  return rootElement;
}

export function loadBlocks(
  editor: Editor,
  container: HTMLElement,
  blocks: unknown[]
) {
  blocks.forEach((block: any) => {
    const { id, type, text, ...rest } = block;
    let richTextData = text;
    if (text) {
      // richTextData = new RichTextDocument(text);
    }
    const blockElement = createBlock(editor, id, type, {
      text: richTextData,
      ...rest,
      id,
      type,
    });
    insertBlock(container, -1, blockElement);
  });
}

export function createBlock(
  editor: Editor,
  id: string,
  type: BLOCK_TYPE,
  data: any
): HTMLElement {
  const blockElement = blockUtils.createBlock(editor, id, type, data);
  return blockElement;
}

export function insertBlock(
  container: HTMLElement,
  index: number,
  block: HTMLElement
): HTMLElement {
  if (index === -1) {
    container.appendChild(block);
  } else {
    if (index === container.children.length) {
      container.insertAdjacentElement("beforeend", block);
    } else {
      container.children[index].insertAdjacentElement("beforebegin", block);
    }
  }
  return block;
}
