// === Module 122: setUpDOM ===

// Module 122 (setUpDOM)
import javaScriptFlagGetter from "javaScriptFlagGetter" /* 27 */;
import defineLazyObjectProperty from "defineLazyObjectProperty" /* 123 */;

const require = globalThis.__r;

let c3 = false;

export default function setUpDOM() {
  const tmp = c3;
  if (!tmp) {
    c3 = true;
    let obj = defineLazyObjectProperty;
    obj.polyfillGlobal("DOMRect", () => require("module_124").default);
    const obj2 = defineLazyObjectProperty;
    obj2.polyfillGlobal("DOMRectReadOnly", () => require("module_125").default);
    const obj3 = defineLazyObjectProperty;
    obj3.polyfillGlobal("DOMRectList", () => require("module_127").default);
    const obj4 = defineLazyObjectProperty;
    obj4.polyfillGlobal("HTMLCollection", () => require("module_129").default);
    const obj5 = defineLazyObjectProperty;
    obj5.polyfillGlobal("NodeList", () => require("module_130").default);
    const obj6 = defineLazyObjectProperty;
    obj6.polyfillGlobal("Node", () => require("module_131").default);
    const obj7 = defineLazyObjectProperty;
    obj7.polyfillGlobal("Document", () => require("module_140").default);
    const obj8 = defineLazyObjectProperty;
    obj8.polyfillGlobal("CharacterData", () => require("module_150").default);
    const obj9 = defineLazyObjectProperty;
    obj9.polyfillGlobal("Text", () => require("module_151").default);
    const obj10 = defineLazyObjectProperty;
    obj10.polyfillGlobal("Element", () => require("_getBoundingClientRect").default);
    const obj11 = defineLazyObjectProperty;
    obj11.polyfillGlobal("HTMLElement", () => require("module_143").default);
    const obj12 = defineLazyObjectProperty;
    obj12.polyfillGlobal("Event", () => require("module_133").default);
    const obj13 = defineLazyObjectProperty;
    obj13.polyfillGlobal("EventTarget", () => require("module_132").default);
    const obj14 = defineLazyObjectProperty;
    obj14.polyfillGlobal("CustomEvent", () => require("module_152").default);
    global.RN$isNativeEventTargetEventDispatchingEnabled = () => {
      const obj = javaScriptFlagGetter;
      return obj.enableNativeEventTargetEventDispatching();
    };
  }
};