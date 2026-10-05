// _runtime/00956_httpContextIntegration.js
import _mod904 from "metro/00904__.js";
import registerSpanErrorInstrumentation from "metro/00693__.js";

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const httpContextIntegration = registerSpanErrorInstrumentation.defineIntegration(() => {
  let obj = {
    name: "HttpContext",
    preprocessEvent(request) {
      const tmpResult = _mod904;
      const httpRequestData = tmpResult.getHttpRequestData();
      const obj = {};
      const merged = Object.assign(httpRequestData.headers);
      request = request.request;
      let headers;
      if (request != null) {
        headers = request.headers;
      }
      const merged1 = Object.assign(headers);
      const obj2 = { headers: obj };
      const merged2 = Object.assign(httpRequestData);
      const merged3 = Object.assign(request.request);
      request.request = obj2;
    },
  };
  return obj;
});
