// _runtime/00945_httpContextIntegration.js
import ignoreNextOnError from "00893_ignoreNextOnError.js";
import registerSpanErrorInstrumentation from "metro/00682__.js";

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const httpContextIntegration = registerSpanErrorInstrumentation.defineIntegration(() => ({
  name: "HttpContext",
  preprocessEvent(request) {
    const httpRequestData = ignoreNextOnError.getHttpRequestData();
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
    const tmpResult = ignoreNextOnError;
  },
}));
