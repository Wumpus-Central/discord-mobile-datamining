// _runtime/00122_setUpDOM.js
import javaScriptFlagGetter from "00027_javaScriptFlagGetter.js";
import defineLazyObjectProperty from "00123_defineLazyObjectProperty.js";

const require = globalThis.__r;

let c3 = false;

export default function setUpDOM() {
  const tmp = c3;
  if (!tmp) {
    c3 = true;
    let obj = defineLazyObjectProperty;
    obj.polyfillGlobal("DOMRect", () => require("metro/00124__.js").default);
    const obj2 = defineLazyObjectProperty;
    obj2.polyfillGlobal("DOMRectReadOnly", () => require("metro/00125__.js").default);
    const obj3 = defineLazyObjectProperty;
    obj3.polyfillGlobal("DOMRectList", () => require("metro/00127__.js").default);
    const obj4 = defineLazyObjectProperty;
    obj4.polyfillGlobal("HTMLCollection", () => require("metro/00129__.js").default);
    const obj5 = defineLazyObjectProperty;
    obj5.polyfillGlobal("NodeList", () => require("metro/00130__.js").default);
    const obj6 = defineLazyObjectProperty;
    obj6.polyfillGlobal("Node", () => require("metro/00131__.js").default);
    const obj7 = defineLazyObjectProperty;
    obj7.polyfillGlobal("Document", () => require("metro/00140__.js").default);
    const obj8 = defineLazyObjectProperty;
    obj8.polyfillGlobal("CharacterData", () => require("metro/00150__.js").default);
    const obj9 = defineLazyObjectProperty;
    obj9.polyfillGlobal("Text", () => require("metro/00151__.js").default);
    const obj10 = defineLazyObjectProperty;
    obj10.polyfillGlobal("Element", () => require("_getBoundingClientRect").default);
    const obj11 = defineLazyObjectProperty;
    obj11.polyfillGlobal("HTMLElement", () => require("metro/00143__.js").default);
    const obj12 = defineLazyObjectProperty;
    obj12.polyfillGlobal("Event", () => require("metro/00133__.js").default);
    const obj13 = defineLazyObjectProperty;
    obj13.polyfillGlobal("EventTarget", () => require("metro/00132__.js").default);
    const obj14 = defineLazyObjectProperty;
    obj14.polyfillGlobal("CustomEvent", () => require("metro/00152__.js").default);
    global.RN$isNativeEventTargetEventDispatchingEnabled = () => {
      const obj = javaScriptFlagGetter;
      return obj.enableNativeEventTargetEventDispatching();
    };
  }
}
