import { Editor } from "./editorIns";
import { BLOCK_TYPE } from "./index.type";
import * as textUtils from "./text";

function createBlockContent(editor: Editor, id: string, data: any): HTMLElement {
    //
    const elem = document.createElement('div');
    textUtils.initElement(editor, elem as HTMLElement, data);
    const content = elem ;
    return content;
  }

export function createBlock(editor: Editor,
    id: string, type: BLOCK_TYPE, data: any): HTMLElement {
    //
    let tagName = 'div';
    // eslint-disable-next-line no-use-before-define
    if (type === 'text') {
      if (data.heading) {
        if (data.heading >= 1 && data.heading <= 6) {
          tagName = `h${data.heading}`;
        }
      }
    }
    const blockElement = document.createElement(tagName) as HTMLElement;
    //
    const blockContent = createBlockContent(editor, id, data);
    // domUtils.addClass(blockContent, EDITOR_CLASS.BLOCK_CONTENT);
    //
    blockElement.appendChild(blockContent);
    blockElement.id = id;
    // blockElement.setAttribute(BLOCK_ATTR.NODE_TYPE, NODE_TYPE.BLOCK);
    // blockElement.setAttribute(BLOCK_ATTR.BLOCK_TYPE, type);

    // domUtils.addClass(blockElement, EDITOR_CLASS.BLOCK, `${type}-block`);
    // if (data.heading) {
    //   domUtils.addClass(blockElement, `editor-heading-${data.heading}`);
    // }
    // //
    // if (type === BLOCK_TYPE.EMBED) {
    //   const embedType = (data as any).embedType;
    //   domUtils.addClass(blockElement, EDITOR_CLASS.BLOCK, `${embedType}-embed`);
    // }
    // //
    // if (data.align) {
    //   // eslint-disable-next-line no-use-before-define
    //   updateBlockAlign(blockElement, data.align);
    // }
    // //
    // if (data.lock) {
    //   // eslint-disable-next-line no-use-before-define
    //   updateBlockLockStatus(editor, blockElement, data.lock);
    // }
    // if (data.markerData) {
    //   assert(data.markerWidth !== undefined);
    //   assert(data.markerExpired !== undefined);
    //   // eslint-disable-next-line no-use-before-define
    //   updateBlockMarker(blockElement, data.markerData, data.markerWidth, data.markerExpired);
    // }
    // //
    // if (data.quoted) {
    //   // eslint-disable-next-line no-use-before-define
    //   setBlockQuoted(blockElement, true);
    // }
    // //
    // if (data.padding) {
    //   // eslint-disable-next-line no-use-before-define
    //   setBlockPadding(blockElement, data.padding);
    // }
    // //
    // if (data.styles) {
    //   domUtils.addClass(blockElement, ...data.styles);
    // }
    // //
    // if (data.comments && data.comments.length > 0) {
    //   data.comments.forEach((commentId) => {
    //     // eslint-disable-next-line no-use-before-define
    //     addBlockComment(blockElement, commentId);
    //   });
    //   domUtils.addClass(blockElement, EDITOR_CLASS.COMMENT);
    // }
    // //
    // const block = blockElement;
    // replaceBlockRichText(block, RichTextDocument.from(data.text));
    // //
    // if (blockClass.getBlockOptions && blockClass.getBlockOptions().textBlock) {
    //   // eslint-disable-next-line no-use-before-define
    //   const textElement = getTextElement(block);
    //   domUtils.addClass(textElement, 'text-element');
    // }
    // //
    // if (data.text && data.text.getLength() === 0) {
    //   domUtils.addClass(blockElement, EDITOR_CLASS.EMPTY_BLOCK);
    // }
    // //
    // if (data.inlineStyle) {
    //   // eslint-disable-next-line no-use-before-define
    //   addBlockInlineStyle(block, data.inlineStyle ?? '');
    // }
    // // eslint-disable-next-line no-use-before-define
    // if (isTextTypeBlock(block)) {
    //   headingBlockUtils.initExpandButton(editor, block);
    // }
    //
    return blockElement;
  }