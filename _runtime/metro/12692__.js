// === Module 12692: ? ===

// Module 12692
import _mod12579 from "module_12579" /* 12579 */;
import _mod12580 from "module_12580" /* 12580 */;
import _mod12581 from "module_12581" /* 12581 */;

function supportsFetch() {
  if ("fetch" in _mod12581.GLOBAL_OBJ) {
    try {
      const _Headers = Headers;
      const self = this;
      const headers = new Headers();
      const _Request = Request;
      const self2 = this;
      const request = new Request("http://www.example.com");
      const _Response = Response;
      const self3 = this;
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
  if (isMatch) {
    const obj = /^function\s+\w+\(\)\s+\{\s+\[native code\]\s+\}$/;
    isMatch = obj.test(arg0.toString());
  }
  return isMatch;
}

export { isNativeFunction };
export const supportsDOMError = function supportsDOMError() {
  try {
    const self = this;
    const dOMError = new globalThis.DOMError("");
    return true;
  } catch (err) {
    return false;
  }
};
export const supportsDOMException = function supportsDOMException() {
  try {
    const self = this;
    const dOMException = new globalThis.DOMException("");
    return true;
  } catch (err) {
    return false;
  }
};
export const supportsErrorEvent = function supportsErrorEvent() {
  try {
    const self = this;
    const errorEvent = new globalThis.ErrorEvent("");
    return true;
  } catch (err) {
    return false;
  }
};
export { supportsFetch };
export const supportsNativeFetch = function supportsNativeFetch() {
  if (typeof globalThis.EdgeRuntime === "string") {
    return true;
  } else if (supportsFetch()) {
    if (isNativeFunction(_mod12581.GLOBAL_OBJ.fetch)) {
      return true;
    } else {
      let flag2 = false;
      const _document = _mod12581.GLOBAL_OBJ.document;
      if (_document) {
        if (typeof _document.createElement === "function") {
          try {
            const element = <iframe />;
            element.hidden = true;
            const head = _document.head;
            head.appendChild(element);
            const _fetch = element.contentWindow && tmp5.contentWindow.fetch;
            if (_fetch) {
              flag2 = isNativeFunction(tmp5.contentWindow.fetch);
            }
            const head2 = _document.head;
            head2.removeChild(element);
          } catch (tmp10) {
            if (_mod12579.DEBUG_BUILD) {
              const logger = _mod12580.logger;
              logger.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", tmp10);
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
  if (supportsFetch()) {
    try {
      const _Request = Request;
      const self = this;
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
  return "ReportingObserver" in _mod12581.GLOBAL_OBJ;
};