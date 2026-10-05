// === Module 943: fetch ===

// Module 943 (fetch)
import _mod693 from "module_693" /* 693 */;
import _mod911 from "module_911" /* 911 */;
import _mod915 from "module_915" /* 915 */;

function getNativeImplementation(fetch) {
  if (closure_2[fetch]) {
    return closure_2[fetch];
  } else {
    const tmp5 = _mod915.WINDOW[fetch];
    let obj = tmp5;
    const obj2 = _mod693;
    if (obj2.isNativeFunction(tmp5)) {
      const bindResult = obj.bind(_mod915.WINDOW);
      closure_2[fetch] = bindResult;
      return bindResult;
    } else {
      let tmp20;
      const _document = _mod915.WINDOW.document;
      if (_document) {
        if (typeof _document.createElement === "function") {
          try {
            const element = <iframe />;
            element.hidden = true;
            const head = _document.head;
            head.appendChild(element);
            const contentWindow = element.contentWindow;
            let tmp11;
            if (contentWindow != null) {
              tmp11 = contentWindow[fetch];
            }
            if (tmp11) {
              obj = contentWindow[fetch];
            }
            const head2 = _document.head;
            head2.removeChild(element);
          } catch (tmp13) {
            if (_mod911.DEBUG_BUILD) {
              const debug = _mod693.debug;
              const _HermesInternal = HermesInternal;
              debug.warn("Could not create sandbox iframe for " + fetch + " check, bailing to window." + fetch + ": ", tmp13);
            }
          }
        }
      }
      const tmp19 = obj;
      if (tmp19) {
        const bindResult1 = obj.bind(_mod915.WINDOW);
        closure_2[fetch] = bindResult1;
        tmp20 = bindResult1;
      } else {
        tmp20 = obj;
      }
      return tmp20;
    }
  }
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let closure_2 = {};

export const clearCachedImplementation = function clearCachedImplementation(fetch) {
  closure_2[fetch] = undefined;
};
export const fetch = function fetch() {
  const items = [...arguments];
  const tmp = getNativeImplementation("fetch");
  return tmp(...items);
};
export { getNativeImplementation };
export const setTimeout = function setTimeout() {
  const items = [...arguments];
  const tmp = getNativeImplementation("setTimeout");
  return tmp(...items);
};