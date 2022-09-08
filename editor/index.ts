import { Editor } from "./editorIns";
import './index.css';
export default function createEditor() {
  const initData = [
    {
      text: [
        {
          insert: "Enable Real-Time Co-Editing in Applications.",
        },
      ],
      id: "_FKwwsdEJ",
      type: "text",
      heading: 1,
    },
  ];
  new Editor(root, { initData });
}

const root = document.createElement("div");
root.setAttribute('class','editor')
window.document.body.appendChild(root);
createEditor();
