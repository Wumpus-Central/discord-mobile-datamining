// === Module 932: fetch ===

// Module 932 (fetch)
import _mod682 from "module_682" /* 682 */;
import _mod904 from "module_904" /* 904 */;

require = arg1;
const dependencyMap = arg6;
function getNativeImplementation(fetch) {
  if (closure_2[fetch]) {
    return tmp6;
  } else {
    const tmp9 = _mod904.WINDOW[fetch];
    let obj = tmp9;
    if (obj2.isNativeFunction(tmp9)) {
      const bindResult = obj.bind(tmp7(904).WINDOW);
      tmp5[fetch] = bindResult;
      return bindResult;
    } else {
      const _document = tmp7(904).WINDOW.document;
      if (_document) {
        if (typeof _document.createElement === "function") {
          try {
            const element = <iframe />;
            element.hidden = true;
            const head = _document.head;
            head.appendChild(element);
            const contentWindow = element.contentWindow;
            let tmp15;
            if (contentWindow != null) {
              tmp15 = contentWindow[fetch];
            }
            if (tmp15) {
              obj = contentWindow[fetch];
            }
            const head2 = _document.head;
            head2.removeChild(element);
          } catch (tmp17) {
            if (tmp3(tmp[2]).DEBUG_BUILD) {
              const debug = tmp3(tmp[1]).debug;
              const _HermesInternal = HermesInternal;
              debug.warn("Could not create sandbox iframe for " + tmp2 + " check, bailing to window." + tmp2 + ": ", tmp17);
            }
          }
        }
      }
      if (obj) {
        const bindResult1 = obj.bind(tmp7(904).WINDOW);
        tmp5[fetch] = bindResult1;
        let tmp24 = bindResult1;
      } else {
        tmp24 = obj;
      }
      return tmp24;
    }
    obj2 = _mod682;
  }
}
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
let closure_2 = {};

export const clearCachedImplementation = function clearCachedImplementation(fetch) {
  closure_2[fetch] = undefined;
};
export const fetch = function fetch() {
  const items = [...arguments];
  return getNativeImplementation("fetch")(...items);
};
export { getNativeImplementation };
export const setTimeout = function setTimeout() {
  const items = [...arguments];
  return getNativeImplementation("setTimeout")(...items);
};