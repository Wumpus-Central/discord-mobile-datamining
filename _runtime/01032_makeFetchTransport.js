// === Module 1032: makeFetchTransport ===

// Module 1032 (makeFetchTransport)
import closure_2 from "asyncGeneratorStep" /* 5 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const makeFetchTransport = function makeFetchTransport(bufferSize) {
  const _require = bufferSize;
  let nativeImplementation = arg1;
  if (arg1 === undefined) {
    nativeImplementation = _require(nativeImplementation[1]).getNativeImplementation("fetch");
    let obj = _require(nativeImplementation[1]);
  }
  function _makeRequest() {
    const self = this;
    const tmp = v0((arg0) => {
      closure_0 = arg0;
      c5 = 0;
      c6 = 0;
      c4 = 0;
      return (function*(arg0) {
        if (c6 === 2) {
          c6 = 3;
          HermesBuiltin.throwTypeError();
        } else if (tmp8 === 3) {
          if (arg0 === 1) {
            throw arg1;
          } else if (arg0 === 2) {
            let obj = { value: null, done: true };
            obj[0] = arg1;
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
                throw arg1;
              } else if (arg0 === 2) {
                c6 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                closure_2 = tmp4;
                let config = tmp6;
                let length;
                config = undefined;
                length = length.body.length;
                closure_2 = closure_2 + length;
                closure_3 = closure_3 + 1;
                obj1 = { body: null, method: "POST", referrerPolicy: "strict-origin", headers: null, keepalive: null };
                obj1[0] = length.body;
                obj1[3] = lib.headers;
                let tmp31 = closure_2 <= 60000;
                if (tmp31) {
                  tmp31 = closure_3 < 15;
                }
                obj1[4] = tmp31;
                const merged = Object.assign(tmp55.fetchOptions);
                c4 = 2;
                c5 = 3;
                c6 = 1;
                let obj2 = { value: null, done: false };
                obj2[0] = closure_1_1(lib.url, obj1);
                return obj2;
              }
            } else if (1 === tmp9) {
              c4 = 0;
              closure_2 = closure_2 - lib;
              closure_3 = closure_3 - 1;
              throw closure_3;
            } else if (2 === tmp9) {
              c4 = 1;
              closure_2 = closure_3;
              obj2 = lib(closure_1_1[1]);
              const result = obj2.clearCachedImplementation("fetch");
              throw closure_2;
            } else if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 0;
              closure_2 = closure_2 - length;
              closure_3 = closure_3 - 1;
              c6 = 3;
              const obj3 = { value: null, done: true };
              obj3[0] = arg1;
              return obj3;
            } else {
              config = arg1;
              const obj4 = { statusCode: null, headers: null };
              obj4[0] = config.status;
              const obj5 = { "x-sentry-rate-limits": null, "retry-after": null };
              const headers = config.headers;
              obj5[0] = headers.get("X-Sentry-Rate-Limits");
              const headers2 = config.headers;
              obj5[1] = headers2.get("Retry-After");
              obj4[1] = obj5;
              c4 = 0;
              closure_2 = closure_2 - length;
              closure_3 = closure_3 - 1;
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = obj4;
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
      })();
    });
    closure_4 = tmp;
    const apply = tmp.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  c2 = 0;
  c3 = 0;
  let obj2 = _require(nativeImplementation[2]);
  let num = bufferSize.bufferSize;
  if (!num) {
    num = 40;
  }
  function makeRequest(arg0) {
    const self = this;
    const apply = _makeRequest.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  return obj2.createTransport(bufferSize, makeRequest, _require(nativeImplementation[2]).makePromiseBuffer(num));
};