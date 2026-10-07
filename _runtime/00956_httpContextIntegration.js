// === Module 956: httpContextIntegration ===

// Module 956 (httpContextIntegration)
import ignoreNextOnError from "ignoreNextOnError" /* 904 */;
import registerSpanErrorInstrumentation from "module_693" /* 693 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const httpContextIntegration = registerSpanErrorInstrumentation.defineIntegration(() => ({
  name: "HttpContext",
  preprocessEvent(request) {
    const httpRequestData = ignoreNextOnError.getHttpRequestData();
    const merged = Object.assign(httpRequestData.headers);
    request = request.request;
    let headers;
    if (request != null) {
      headers = request.headers;
    }
    const merged1 = Object.assign(headers);
    const obj2 = {};
    const merged2 = Object.assign(httpRequestData);
    const merged3 = Object.assign(request.request);
    obj2.headers = {};
    request.request = obj2;
    const obj = {};
    const tmpResult = ignoreNextOnError;
  }
}));