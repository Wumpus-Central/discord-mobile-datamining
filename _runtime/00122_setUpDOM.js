// === Module 122: setUpDOM ===

// Module 122 (setUpDOM)
import polyfillObjectProperty from "polyfillObjectProperty" /* 123 */;

const global = arg0;
require = arg1;
const dependencyMap = arg6;
let c3 = false;
arg5.default = function setUpDOM() {
  if (!c3) {
    c3 = true;
    polyfillObjectProperty.polyfillGlobal("DOMRect", () => callback(124).default);
    polyfillObjectProperty.polyfillGlobal("DOMRectReadOnly", () => callback(125).default);
    polyfillObjectProperty.polyfillGlobal("DOMRectList", () => callback(127).default);
    polyfillObjectProperty.polyfillGlobal("HTMLCollection", () => callback(129).default);
    polyfillObjectProperty.polyfillGlobal("NodeList", () => callback(130).default);
    polyfillObjectProperty.polyfillGlobal("Node", () => callback(131).default);
    polyfillObjectProperty.polyfillGlobal("Document", () => callback(140).default);
    polyfillObjectProperty.polyfillGlobal("CharacterData", () => callback(150).default);
    polyfillObjectProperty.polyfillGlobal("Text", () => callback(151).default);
    polyfillObjectProperty.polyfillGlobal("Element", () => callback(141).default);
    polyfillObjectProperty.polyfillGlobal("HTMLElement", () => callback(143).default);
    polyfillObjectProperty.polyfillGlobal("Event", () => callback(133).default);
    polyfillObjectProperty.polyfillGlobal("EventTarget", () => callback(132).default);
    polyfillObjectProperty.polyfillGlobal("CustomEvent", () => callback(152).default);
    global.RN$isNativeEventTargetEventDispatchingEnabled = () => callback(27).enableNativeEventTargetEventDispatching();
  }
};