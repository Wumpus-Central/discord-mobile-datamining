// === Module 897: ? ===

// Module 897
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const makeFetchTransport = function makeFetchTransport(bufferSize) {
  _require = bufferSize;
  let nativeImplementation = arg1;
  if (arg1 === undefined) {
    nativeImplementation = require("triggerHandlers").getNativeImplementation("fetch");
    let obj = require("triggerHandlers");
  }
  closure_4 = async function _makeRequest(arg0) {
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp8 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_2 = tmp4;
            closure_129_0 = undefined;
            closure_129_1 = undefined;
            closure_129_0 = length;
            closure_2 = closure_2 + length;
            closure_3 = closure_3 + 1;
            const request = { body: bufferSize.body, method: "POST", referrerPolicy: "strict-origin", headers: headers.headers, keepalive: null };
            let tmp31 = closure_2 <= 60000;
            if (tmp31) {
              tmp31 = closure_3 < 15;
            }
            request.keepalive = tmp31;
            const merged = Object.assign(tmp54.fetchOptions);
            c4 = 2;
            c5 = 3;
            c6 = 1;
            const obj1 = { value: nativeImplementation(headers.url, request), done: false };
            return obj1;
          }
        } else if (1 === tmp9) {
          c4 = 0;
          closure_130_2 = closure_130_2 - closure_129_0;
          closure_130_3 = closure_130_3 - 1;
          throw closure_3;
        } else if (2 === tmp9) {
          c4 = 1;
          closure_129_2 = closure_3;
          let obj2 = bufferSize(tmp6[1]);
          const result = obj2.clearCachedImplementation("fetch");
          throw closure_129_2;
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 0;
          closure_130_2 = closure_130_2 - closure_129_0;
          closure_130_3 = closure_130_3 - 1;
          c6 = 3;
          obj2 = { value, done: true };
          return obj2;
        } else {
          closure_129_1 = value;
          const response = { statusCode: closure_129_1.status, headers: null };
          const obj3 = { "x-sentry-rate-limits": null, "retry-after": null };
          headers = closure_129_1.headers;
          obj3["x-sentry-rate-limits"] = headers.get("X-Sentry-Rate-Limits");
          const headers2 = closure_129_1.headers;
          obj3["retry-after"] = headers2.get("Retry-After");
          response.headers = obj3;
          c4 = 0;
          closure_130_2 = closure_130_2 - closure_129_0;
          closure_130_3 = closure_130_3 - 1;
          c6 = 3;
          obj = { value: response, done: true };
          return obj;
        }
      } catch (tmp35) {
        closure_3 = tmp35;
        if (tmp5 === c4) {
          c6 = tmp3;
          throw tmp35;
        } else if (tmp2 === tmp37) {
          c5 = tmp2;
        } else {
          c5 = tmp;
        }
      }
    }
  };
  c2 = 0;
  c3 = 0;
  let obj2 = require("module_682");
  let num = bufferSize.bufferSize;
  if (!num) {
    num = 40;
  }
  function makeRequest(arg0) {
    const self = this;
    const apply = closure_4.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  return obj2.createTransport(bufferSize, makeRequest, require("module_682").makePromiseBuffer(num));
};