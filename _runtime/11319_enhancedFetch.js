// _runtime/11319_enhancedFetch.js
import asyncGeneratorStepDefault from "00005_asyncGeneratorStep.js";

let closure_0 = asyncGeneratorStepDefault(function* (arg0, arg1) {
  if (c5 === 2) {
    c5 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c5 = 2;
      if (0 === c4) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_3 = tmp4;
          let request = closure_1;
          closure_131_0 = undefined;
          let stringify = globalThis;
          let method;
          if (closure_1 != null) {
            method = request.method;
          }
          let GET = method;
          if (method == null) {
            GET = "GET";
          }
          let obj4 = { method: GET, headers: { Accept: "application/json", "Content-Type": "application/json" } };
          let body;
          if (request != null) {
            body = request.body;
          }
          if (body) {
            const obj5 = { body: null };
            const _JSON = stringify.JSON;
            stringify = _JSON.stringify;
            request = stringify(request.body);
            obj5.body = request;
            let obj6 = obj5;
          } else {
            obj6 = {};
          }
          const merged = Object.assign(obj6);
          obj4 = fetch(closure_0, obj4);
          c4 = 1;
          c5 = 1;
        }
      } else if (arg0 === 1) {
        c5 = 3;
        throw value;
      } else if (arg0 === 2) {
        c5 = 3;
        const obj7 = { value, done: true };
        return obj7;
      } else {
        closure_131_0 = value;
        if (closure_131_0.ok) {
          c5 = 3;
          const obj8 = { value: closure_131_0.json(), done: true };
          return obj8;
        } else {
          const _Object = Object;
          const _Error = Error;
          const error = new Error(closure_131_0.statusText);
          const obj = { statusCode: closure_131_0.status };
          throw Object.assign(error, obj);
        }
      }
    } catch (tmp19) {
      c5 = tmp;
      throw tmp19;
    }
  }
});

export const enhancedFetch = function enhancedFetch(arg0, arg1) {
  const self = this;
  const apply = closure_0.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
