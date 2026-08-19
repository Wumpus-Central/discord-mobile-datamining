// === Module 1080: httpContextIntegration ===

// Module 1080 (httpContextIntegration)
import registerSpanErrorInstrumentation from "registerSpanErrorInstrumentation" /* 817 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const httpContextIntegration = registerSpanErrorInstrumentation.defineIntegration(() => ({
  name: "HttpContext",
  preprocessEvent(request) {
    const httpRequestData = callback(table[1]).getHttpRequestData();
    let obj = {};
    const merged = Object.assign(httpRequestData.headers);
    request = request.request;
    let headers;
    if (request != null) {
      headers = request.headers;
    }
    const merged1 = Object.assign(headers);
    obj = {};
    const merged2 = Object.assign(httpRequestData);
    const merged3 = Object.assign(request.request);
    obj.headers = obj;
    request.request = obj;
  }
}));