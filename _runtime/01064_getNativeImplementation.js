// _runtime/01064_getNativeImplementation.js
import registerSpanErrorInstrumentation from "00814_registerSpanErrorInstrumentation.js";
import WINDOW from "01036_WINDOW.js";

require = arg1;
const dependencyMap = arg6;
function getNativeImplementation(fetch) {
  if (table[fetch]) {
    return tmp6;
  } else {
    const tmp9 = WINDOW.WINDOW[fetch];
    let obj = tmp9;
    if (obj2.isNativeFunction(tmp9)) {
      const bindResult = obj.bind(tmp7(1036).WINDOW);
      tmp5[fetch] = bindResult;
      return bindResult;
    } else {
      const _document = tmp7(1036).WINDOW.document;
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
              debug.warn(
                "Could not create sandbox iframe for " + tmp2 + " check, bailing to window." + tmp2 + ": ",
                tmp17,
              );
            }
          }
        }
      }
      if (obj) {
        const bindResult1 = obj.bind(tmp7(1036).WINDOW);
        tmp5[fetch] = bindResult1;
        let tmp24 = bindResult1;
      } else {
        tmp24 = obj;
      }
      return tmp24;
    }
    obj2 = registerSpanErrorInstrumentation;
  }
}
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
let closure_2 = {};
arg5.clearCachedImplementation = function clearCachedImplementation(fetch) {
  closure_2[fetch] = undefined;
};
arg5.fetch = function fetch() {
  const items = [...arguments];
  return getNativeImplementation("fetch")(...items);
};
arg5.getNativeImplementation = getNativeImplementation;
arg5.setTimeout = function setTimeout() {
  const items = [...arguments];
  return getNativeImplementation("setTimeout")(...items);
};
