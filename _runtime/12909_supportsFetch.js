// === Module 12909: supportsFetch ===

// Module 12909 (supportsFetch)
import getGlobalSingleton from "getGlobalSingleton" /* 12798 */;

require = arg1;
const dependencyMap = arg6;
function supportsFetch() {
  if ("fetch" in getGlobalSingleton.GLOBAL_OBJ) {
    try {
      const _Headers = Headers;
      const headers = new Headers();
      const _Request = Request;
      const request = new Request("http://www.example.com");
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
arg5.isNativeFunction = isNativeFunction;
arg5.supportsDOMError = function supportsDOMError() {
  try {
    const dOMError = new globalThis.DOMError("");
    return true;
  } catch (err) {
    return false;
  }
};
arg5.supportsDOMException = function supportsDOMException() {
  try {
    const dOMException = new globalThis.DOMException("");
    return true;
  } catch (err) {
    return false;
  }
};
arg5.supportsErrorEvent = function supportsErrorEvent() {
  try {
    const errorEvent = new globalThis.ErrorEvent("");
    return true;
  } catch (err) {
    return false;
  }
};
arg5.supportsFetch = supportsFetch;
arg5.supportsNativeFetch = function supportsNativeFetch() {
  if (typeof globalThis.EdgeRuntime === "string") {
    return true;
  } else if (supportsFetch()) {
    if (isNativeFunction(getGlobalSingleton.GLOBAL_OBJ.fetch)) {
      return true;
    } else {
      let flag2 = false;
      const _document = tmp5(12798).GLOBAL_OBJ.document;
      if (_document) {
        if (typeof _document.createElement === "function") {
          try {
            const element = <iframe />;
            element.hidden = true;
            const head = _document.head;
            head.appendChild(element);
            let _fetch = element.contentWindow;
            if (_fetch) {
              _fetch = tmp8.contentWindow.fetch;
            }
            if (_fetch) {
              flag2 = tmp4(tmp8.contentWindow.fetch);
            }
            const head2 = _document.head;
            head2.removeChild(element);
          } catch (tmp13) {
            if (tmp2(tmp[1]).DEBUG_BUILD) {
              const logger = tmp2(tmp[2]).logger;
              logger.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", tmp13);
            }
          }
        }
      }
      return flag2;
    }
    tmp4 = isNativeFunction;
    tmp5 = require;
  } else {
    return false;
  }
};
arg5.supportsReferrerPolicy = function supportsReferrerPolicy() {
  if (supportsFetch()) {
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
arg5.supportsReportingObserver = function supportsReportingObserver() {
  return "ReportingObserver" in getGlobalSingleton.GLOBAL_OBJ;
};