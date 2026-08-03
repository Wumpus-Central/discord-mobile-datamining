// === Module 6340: enhancedFetch ===

// Module 6340 (enhancedFetch)
let closure_0 = require("asyncGeneratorStep")((arg0, arg1) => {
  let closure_0 = arg0;
  let closure_1 = arg1;
  let c4 = 0;
  let c5 = 0;
  return (function*(arg0, arg1) {
    if (c5 === 2) {
      c5 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp3 === 3) {
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
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c5 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let closure_3 = tmp4;
            let request = closure_1;
            let closure_0;
            let stringify = globalThis;
            let method;
            if (closure_1 != null) {
              method = request.method;
            }
            let GET = method;
            if (method == null) {
              GET = "GET";
            }
            let obj1 = { method: null, headers: null };
            obj1[0] = GET;
            obj1[1] = { Accept: "application/json", "Content-Type": "application/json" };
            let body;
            if (request != null) {
              body = request.body;
            }
            if (body) {
              const obj2 = { body: null };
              const _JSON = stringify.JSON;
              stringify = _JSON.stringify;
              request = stringify(request.body);
              obj2[0] = request;
              let obj3 = obj2;
            } else {
              obj3 = {};
            }
            const merged = Object.assign(obj3);
            obj1 = fetch(closure_0, obj1);
            c4 = 1;
            c5 = 1;
            const tmp28 = closure_0;
          }
        } else if (arg0 === 1) {
          c5 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj4 = { value: null, done: true };
          obj4[0] = arg1;
          return obj4;
        } else {
          closure_0 = arg1;
          if (closure_0.ok) {
            c5 = 3;
            const obj5 = { value: null, done: true };
            obj5[0] = closure_0.json();
            return obj5;
          } else {
            const _Object = Object;
            const _Error = Error;
            const error = new Error(closure_0.statusText);
            obj = { statusCode: null };
            obj[0] = closure_0.status;
            throw Object.assign(error, obj);
          }
        }
      } catch (tmp19) {
        c5 = tmp;
        throw tmp19;
      }
    }
  })();
});

export const enhancedFetch = function enhancedFetch(c4) {
  const self = this;
  const apply = closure_0.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};