import * as containerUtils from "./container";
export class Editor {
  editorElement: HTMLElement;
  rootContainerElement: HTMLElement;
  option: { initData: unknown[] };
  selection: { offsetLeft: number; offsetTop: number } = {
    offsetLeft: 8,
    offsetTop: 12,
  };
  constructor(editorElement: HTMLElement, options: { initData: unknown[] }) {
    this.editorElement = editorElement;
    this.option = options;
    const div = document.createElement("div");
    this.editorElement.appendChild(div);
    this.rootContainerElement = containerUtils.createContainer(this, div);
    this.loadDocument();
    this.loadCursor();
    this.bindBlockClick();
  }
  loadCursor() {
    const div = document.createElement("div");
    this.editorElement.appendChild(div);
    div.setAttribute("class", "cursor");
    div.setAttribute(
      "style",
      `left:${this.selection.offsetLeft}px; top:${this.selection.offsetTop}px`
    );
  }
  bindInput() {}
  bindBlockClick() {
    this.editorElement.addEventListener("click", (event) => {
      const path = (event as any).path;
      for (let target of path) {
        if (
          target.getAttribute &&
          (target as HTMLDivElement).getAttribute("data-id") === "block"
        ) {
          const rect = (target as HTMLDivElement).getBoundingClientRect();
          this.changeSelection(rect.left, rect.top + 2);
          this.moveCursor();
        }
      }
      // if(event.target)
    });
  }
  changeSelection(left: number, top: number) {
    this.selection.offsetLeft = left;
    this.selection.offsetTop = top;
  }
  moveCursor(target: HTMLDivElement) {
    target.setAttribute(
      "style",
      `left:${this.selection.offsetLeft}px; top:${this.selection.offsetTop}px`
    );
  }
  handleInput() {}
  loadDocument() {
    const data = this.option.initData;
    const div = document.createElement("div");
    div.setAttribute("class", "block");
    div.setAttribute("data-id", "block");
    this.editorElement.appendChild(div);
    // containerUtils.loadBlocks(this, this.rootContainerElement, data);
  }
}
