import { Editor } from "./editorIns";

export const initElement = (
  editor: Editor,
  textElement: HTMLElement,
  data: any
) => {

  // console.log(data.text);
  //   const vOldBlock = new VNode(textElement.tagName, {}, []);
  //   const vNewBlock = createVirtualNodeFromData(
  //     editor,
  //     textElement,
  //     data.text,
  //     [],
  //     -1,
  //     "",
  //     {}
  //   );
  // //   assert(vNewBlock);
  //   const patchObj = vDiff(vOldBlock, vNewBlock);
  // console.log(patchObj);
  //   patchTextElement(editor, textElement, patchObj);
  //
  //   (
  //     Array.from(textElement.querySelectorAll("img")) as HTMLImageElement[]
  //   ).forEach((img: HTMLImageElement) => {
  //     domUtils.addClass(img, "loading");
  //     // eslint-disable-next-line no-param-reassign, no-multi-assign
  //     img.onload = img.onerror = () => {
  //       domUtils.removeClass(img, "loading");
  //     };
  //   });
  
  if(Array.isArray(data.text)) {
    for(let op of data.text) {
        for(let key in op) {
            if(key === 'insert') {
                const span = document.createElement('span')
                span.innerText = op[key]
                textElement.appendChild(span)
            }
        }
    }
  }
};


