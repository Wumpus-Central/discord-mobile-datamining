// === Module 908: ? ===

// Module 908
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;

const require = globalThis.__r;
let _require, c5, c6, closure_2, closure_3, headers;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const makeFetchTransport = function makeFetchTransport(bufferSize) {
  _require = bufferSize;
  let nativeImplementation = arg1;
  if (arg1 === undefined) {
    const tmp3 = nativeImplementation;
    let obj = require("_addMeasureSpans");
    nativeImplementation = obj.getNativeImplementation("fetch");
  }
  obj = function _makeRequest() {
    obj = _asyncToGenerator(async (arg0) => {
      let closure_0;
      let headers2;
      let obj7;
      headers = arg0;
      if (c6 === 2) {
        c6 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        let c4;
        try {
          let diff;
          let length;
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              closure_2 = tmp;
              diff = undefined;
              length = headers.body.length;
              closure_2 = closure_2 + length;
              closure_3 = closure_3 + 1;
              const request = { body: headers.body, method: "POST", referrerPolicy: "strict-origin", headers: headers.headers, keepalive: diff };
              diff = closure_2 <= 60000 && closure_3 < 15;
              const merged = Object.assign(tmp46.fetchOptions);
              c4 = 2;
              diff = nativeImplementation(tmp46.url, request);
              c5 = 3;
              c6 = 1;
              const obj5 = { value: diff, done: false };
              return obj5;
            }
          } else if (1 === c5) {
            c4 = 0;
            closure_2 = closure_2 - length;
            diff = closure_3 - 1;
            closure_3 = diff;
            throw closure_3;
          } else if (2 === c5) {
            c4 = 1;
            closure_2 = closure_3;
            const obj3 = headers(diff[1]);
            diff = obj3.clearCachedImplementation("fetch");
            throw closure_2;
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            diff = closure_2;
            closure_2 = closure_2 - length;
            closure_3 = closure_3 - 1;
            c6 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            diff = value;
            const response = { statusCode: diff.status, headers: obj7 };
            obj7 = { "x-sentry-rate-limits": headers.get("X-Sentry-Rate-Limits"), "retry-after": headers2.get("Retry-After") };
            headers = diff.headers;
            headers2 = diff.headers;
            c4 = 0;
            closure_2 = closure_2 - length;
            closure_3 = closure_3 - 1;
            c6 = 3;
            obj = { value: response, done: true };
            return obj;
          }
        } catch (tmp28) {
          closure_3 = tmp28;
          if (0 === c4) {
            c6 = 3;
            throw tmp28;
          } else if (1 === tmp30) {
            c5 = 1;
          } else {
            c5 = 2;
          }
        }
      }
    });
    return obj(...arguments);
  };
  let c2 = 0;
  let c3 = 0;
  const createTransport = require("module_693").createTransport;
  const tmp4 = require("module_693");
  let num = bufferSize.bufferSize;
  const makePromiseBuffer = require("module_693").makePromiseBuffer;
  if (!num) {
    num = 40;
  }
  function makeRequest(arg0) {
    return obj(...arguments);
  }
  return createTransport(bufferSize, makeRequest, makePromiseBuffer(num));
};