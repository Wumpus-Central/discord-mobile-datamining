// _runtime/00122_setUpDOM.js
import polyfillObjectProperty from "00123_polyfillObjectProperty.js";

const global = arg0;
require = arg1;
const dependencyMap = arg6;
let c3 = false;
arg5.default = function setUpDOM() {
  if (!c3) {
    c3 = true;
    polyfillObjectProperty.polyfillGlobal("DOMRect", () => callback(124).default);
    const obj = polyfillObjectProperty;
    polyfillObjectProperty.polyfillGlobal("DOMRectReadOnly", () => callback(125).default);
    const obj2 = polyfillObjectProperty;
    polyfillObjectProperty.polyfillGlobal("DOMRectList", () => callback(127).default);
    const obj3 = polyfillObjectProperty;
    polyfillObjectProperty.polyfillGlobal("HTMLCollection", () => callback(129).default);
    const obj4 = polyfillObjectProperty;
    polyfillObjectProperty.polyfillGlobal("NodeList", () => callback(130).default);
    const obj5 = polyfillObjectProperty;
    polyfillObjectProperty.polyfillGlobal("Node", () => callback(131).default);
    const obj6 = polyfillObjectProperty;
    polyfillObjectProperty.polyfillGlobal("Document", () => callback(140).default);
    const obj7 = polyfillObjectProperty;
    polyfillObjectProperty.polyfillGlobal("CharacterData", () => callback(150).default);
    const obj8 = polyfillObjectProperty;
    polyfillObjectProperty.polyfillGlobal("Text", () => callback(151).default);
    const obj9 = polyfillObjectProperty;
    polyfillObjectProperty.polyfillGlobal("Element", () => callback(141).default);
    const obj10 = polyfillObjectProperty;
    polyfillObjectProperty.polyfillGlobal("HTMLElement", () => callback(143).default);
    const obj11 = polyfillObjectProperty;
    polyfillObjectProperty.polyfillGlobal("Event", () => callback(133).default);
    const obj12 = polyfillObjectProperty;
    polyfillObjectProperty.polyfillGlobal("EventTarget", () => callback(132).default);
    const obj13 = polyfillObjectProperty;
    polyfillObjectProperty.polyfillGlobal("CustomEvent", () => callback(152).default);
    global.RN$isNativeEventTargetEventDispatchingEnabled = () => callback(27).enableNativeEventTargetEventDispatching();
    const obj14 = polyfillObjectProperty;
  }
};