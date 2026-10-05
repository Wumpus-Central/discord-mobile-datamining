// _runtime/00267_setUpMutationObserver.js
import defineLazyObjectProperty from "00123_defineLazyObjectProperty.js";

const require = globalThis.__r;

let c2 = false;

export default function setUpMutationObserver() {
  const tmp = c2;
  if (!tmp) {
    c2 = true;
    const obj = defineLazyObjectProperty;
    obj.polyfillGlobal("MutationObserver", () => require("metro/00268__.js").default);
    const obj2 = defineLazyObjectProperty;
    obj2.polyfillGlobal("MutationRecord", () => require("metro/00270__.js").default);
  }
}
