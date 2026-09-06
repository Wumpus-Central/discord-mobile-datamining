// _runtime/metro/00122__.js
import _mod27 from "00027__.js";
import polyfillObjectProperty from "../00123_polyfillObjectProperty.js";

const global = arg0;
require = arg1;
const dependencyMap = arg6;
let c3 = false;

export default function setUpDOM() {
  if (!c3) {
    c3 = true;
    polyfillObjectProperty.polyfillGlobal("DOMRect", () => require("00124__.js").default);
    polyfillObjectProperty.polyfillGlobal("DOMRectReadOnly", () => require("DOMRectReadOnly").default);
    polyfillObjectProperty.polyfillGlobal("DOMRectList", () => require("DOMRectList").default);
    polyfillObjectProperty.polyfillGlobal("HTMLCollection", () => require("HTMLCollection").default);
    polyfillObjectProperty.polyfillGlobal("NodeList", () => require("NodeList").default);
    polyfillObjectProperty.polyfillGlobal("Node", () => require("00131__.js").default);
    polyfillObjectProperty.polyfillGlobal("Document", () => require("00140__.js").default);
    polyfillObjectProperty.polyfillGlobal("CharacterData", () => require("00150__.js").default);
    polyfillObjectProperty.polyfillGlobal("Text", () => require("00151__.js").default);
    polyfillObjectProperty.polyfillGlobal("Element", () => require("00141__.js").default);
    polyfillObjectProperty.polyfillGlobal("HTMLElement", () => require("00143__.js").default);
    polyfillObjectProperty.polyfillGlobal("Event", () => require("Event").default);
    polyfillObjectProperty.polyfillGlobal("EventTarget", () => require("dispatch").default);
    polyfillObjectProperty.polyfillGlobal("CustomEvent", () => require("00152__.js").default);
    global.RN$isNativeEventTargetEventDispatchingEnabled = () => _mod27.enableNativeEventTargetEventDispatching();
  }
}
