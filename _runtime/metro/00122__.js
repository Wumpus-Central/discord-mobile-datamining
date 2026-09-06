// === Module 122: ? ===

// Module 122
import _mod27 from "module_27" /* 27 */;
import polyfillObjectProperty from "polyfillObjectProperty" /* 123 */;

const global = arg0;
require = arg1;
const dependencyMap = arg6;
let c3 = false;

export default function setUpDOM() {
  if (!c3) {
    c3 = true;
    polyfillObjectProperty.polyfillGlobal("DOMRect", () => require("module_124").default);
    polyfillObjectProperty.polyfillGlobal("DOMRectReadOnly", () => require("DOMRectReadOnly").default);
    polyfillObjectProperty.polyfillGlobal("DOMRectList", () => require("DOMRectList").default);
    polyfillObjectProperty.polyfillGlobal("HTMLCollection", () => require("HTMLCollection").default);
    polyfillObjectProperty.polyfillGlobal("NodeList", () => require("NodeList").default);
    polyfillObjectProperty.polyfillGlobal("Node", () => require("module_131").default);
    polyfillObjectProperty.polyfillGlobal("Document", () => require("module_140").default);
    polyfillObjectProperty.polyfillGlobal("CharacterData", () => require("module_150").default);
    polyfillObjectProperty.polyfillGlobal("Text", () => require("module_151").default);
    polyfillObjectProperty.polyfillGlobal("Element", () => require("module_141").default);
    polyfillObjectProperty.polyfillGlobal("HTMLElement", () => require("module_143").default);
    polyfillObjectProperty.polyfillGlobal("Event", () => require("Event").default);
    polyfillObjectProperty.polyfillGlobal("EventTarget", () => require("dispatch").default);
    polyfillObjectProperty.polyfillGlobal("CustomEvent", () => require("module_152").default);
    global.RN$isNativeEventTargetEventDispatchingEnabled = () => _mod27.enableNativeEventTargetEventDispatching();
  }
};