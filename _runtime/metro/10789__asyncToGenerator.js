// _runtime/metro/10789__asyncToGenerator.js
import _asyncToGeneratorDefault from "00005__asyncToGenerator.js";

let c4, c5;

let closure_0 = _asyncToGeneratorDefault(function* (arg0, arg1) {
  closure_0 = arg0;
  let closure_1 = arg1;
  if (c5 === 2) {
    c5 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp2 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "IconComponent", done: null };
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
          let obj6;
          let closure_3 = tmp3;
          const request = closure_1;
          closure_0 = undefined;
          let method;
          const _fetch = fetch;
          const tmp23 = closure_0;
          if (closure_1 != null) {
            method = request.method;
          }
          let GET = method;
          if (method == null) {
            GET = "GET";
          }
          const obj4 = { method: GET, headers: { Accept: "application/json", "Content-Type": "application/json" } };
          let body;
          if (request != null) {
            body = request.body;
          }
          if (body) {
            const obj5 = { body: JSON.stringify(request.body) };
            const _JSON = JSON;
            obj6 = obj5;
          } else {
            obj6 = {};
          }
          const merged = Object.assign(obj6);
          c4 = 1;
          c5 = 1;
          const obj7 = { value: _fetch(tmp23, obj4), done: false };
          return obj7;
        }
      } else if (arg0 === 1) {
        c5 = 3;
        throw value;
      } else if (arg0 === 2) {
        c5 = 3;
        const obj8 = { value, done: true };
        return obj8;
      } else {
        closure_0 = value;
        if (closure_0.ok) {
          c5 = 3;
          const obj9 = { value: closure_0.json(), done: true };
          return obj9;
        } else {
          const _Object = Object;
          const _Error = Error;
          const self = this;
          const self2 = this;
          const error = new Error(closure_0.statusText);
          const obj = { statusCode: closure_0.status };
          throw assign(error, obj);
        }
      }
    } catch (tmp16) {
      c5 = 3;
      throw tmp16;
    }
  }
});

export const enhancedFetch = function enhancedFetch(arg0, arg1) {
  return closure_0(...arguments);
};
