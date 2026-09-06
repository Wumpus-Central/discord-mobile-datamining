// _runtime/00851__isFetchSupported.js
import _mod686 from "metro/00686__.js";

require = arg1;
const dependencyMap = arg6;
function _isFetchSupported() {
  if ("fetch" in _mod686.GLOBAL_OBJ) {
    try {
      const _Headers = Headers;
      const headers = new Headers();
      const _Request = Request;
      const request = new Request("data:,");
      const _Response = Response;
      const response = new Response();
      return true;
    } catch (err) {
      return false;
    }
  } else {
    return false;
  }
}
function isNativeFunction(arg0) {
  let isMatch = arg0;
  if (arg0) {
    isMatch = /^function\s+\w+\(\)\s+\{\s+\[native code\]\s+\}$/.test(arg0.toString());
    const obj = /^function\s+\w+\(\)\s+\{\s+\[native code\]\s+\}$/;
  }
  return isMatch;
}
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export { isNativeFunction };
export const supportsDOMError = function supportsDOMError() {
  try {
    const dOMError = new globalThis.DOMError("");
    return true;
  } catch (err) {
    return false;
  }
};
export const supportsDOMException = function supportsDOMException() {
  try {
    const dOMException = new globalThis.DOMException("");
    return true;
  } catch (err) {
    return false;
  }
};
export const supportsErrorEvent = function supportsErrorEvent() {
  try {
    const errorEvent = new globalThis.ErrorEvent("");
    return true;
  } catch (err) {
    return false;
  }
};
export const supportsFetch = _isFetchSupported;
export const supportsHistory = function supportsHistory() {
  return "history" in _mod686.GLOBAL_OBJ && _mod686.GLOBAL_OBJ.history;
};
export const supportsNativeFetch = function supportsNativeFetch() {
  if (typeof globalThis.EdgeRuntime === "string") {
    return true;
  } else if (_isFetchSupported()) {
    if (isNativeFunction(_mod686.GLOBAL_OBJ.fetch)) {
      return true;
    } else {
      let flag2 = false;
      const _document = _mod686.GLOBAL_OBJ.document;
      if (_document) {
        if (typeof _document.createElement === "function") {
          try {
            const element = <iframe />;
            element.hidden = true;
            const head = _document.head;
            head.appendChild(element);
            const contentWindow = element.contentWindow;
            let _fetch;
            if (contentWindow != null) {
              _fetch = contentWindow.fetch;
            }
            if (_fetch) {
              flag2 = isNativeFunction(tmp8.contentWindow.fetch);
            }
            const head2 = _document.head;
            head2.removeChild(element);
            tmp8 = element;
          } catch (tmp14) {
            if (tmp2(tmp[1]).DEBUG_BUILD) {
              const debug = tmp2(tmp[2]).debug;
              debug.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", tmp14);
            }
          }
        }
      }
      return flag2;
    }
  } else {
    return false;
  }
};
export const supportsReferrerPolicy = function supportsReferrerPolicy() {
  if (_isFetchSupported()) {
    try {
      const _Request = Request;
      const request = new Request("_", { referrerPolicy: "origin" });
      return true;
    } catch (err) {
      return false;
    }
  } else {
    return false;
  }
};
export const supportsReportingObserver = function supportsReportingObserver() {
  return "ReportingObserver" in _mod686.GLOBAL_OBJ;
};
