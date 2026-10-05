// _runtime/00262_setUpIntersectionObserver.js
import defineLazyObjectProperty from "00123_defineLazyObjectProperty.js";

const require = globalThis.__r;

let c2 = false;

export default function setUpIntersectionObserver() {
  const tmp = c2;
  if (!tmp) {
    c2 = true;
    const obj = defineLazyObjectProperty;
    obj.polyfillGlobal("IntersectionObserver", () => require("metro/00263__.js").default);
  }
}
