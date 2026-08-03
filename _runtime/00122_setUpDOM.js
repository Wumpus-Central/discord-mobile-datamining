const global = arg0;
const require = arg1;
const dependencyMap = arg6;
let c3 = false;
arg5.default = function setUpDOM() {
  if (!c3) {
    c3 = true;
    require(123) /* polyfillObjectProperty */.polyfillGlobal("DOMRect", () => callback(124).default);
    const obj = require(123) /* polyfillObjectProperty */;
    require(123) /* polyfillObjectProperty */.polyfillGlobal("DOMRectReadOnly", () => callback(125).default);
    const obj2 = require(123) /* polyfillObjectProperty */;
    require(123) /* polyfillObjectProperty */.polyfillGlobal("DOMRectList", () => callback(127).default);
    const obj3 = require(123) /* polyfillObjectProperty */;
    require(123) /* polyfillObjectProperty */.polyfillGlobal("HTMLCollection", () => callback(129).default);
    const obj4 = require(123) /* polyfillObjectProperty */;
    require(123) /* polyfillObjectProperty */.polyfillGlobal("NodeList", () => callback(130).default);
    const obj5 = require(123) /* polyfillObjectProperty */;
    require(123) /* polyfillObjectProperty */.polyfillGlobal("Node", () => callback(131).default);
    const obj6 = require(123) /* polyfillObjectProperty */;
    require(123) /* polyfillObjectProperty */.polyfillGlobal("Document", () => callback(140).default);
    const obj7 = require(123) /* polyfillObjectProperty */;
    require(123) /* polyfillObjectProperty */.polyfillGlobal("CharacterData", () => callback(150).default);
    const obj8 = require(123) /* polyfillObjectProperty */;
    require(123) /* polyfillObjectProperty */.polyfillGlobal("Text", () => callback(151).default);
    const obj9 = require(123) /* polyfillObjectProperty */;
    require(123) /* polyfillObjectProperty */.polyfillGlobal("Element", () => callback(141).default);
    const obj10 = require(123) /* polyfillObjectProperty */;
    require(123) /* polyfillObjectProperty */.polyfillGlobal("HTMLElement", () => callback(143).default);
    const obj11 = require(123) /* polyfillObjectProperty */;
    require(123) /* polyfillObjectProperty */.polyfillGlobal("Event", () => callback(133).default);
    const obj12 = require(123) /* polyfillObjectProperty */;
    require(123) /* polyfillObjectProperty */.polyfillGlobal("EventTarget", () => callback(132).default);
    const obj13 = require(123) /* polyfillObjectProperty */;
    require(123) /* polyfillObjectProperty */.polyfillGlobal("CustomEvent", () => callback(152).default);
    global.RN$isNativeEventTargetEventDispatchingEnabled = () => callback(27).enableNativeEventTargetEventDispatching();
    const obj14 = require(123) /* polyfillObjectProperty */;
  }
};