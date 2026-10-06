// _runtime/metro/12706__asyncToGenerator.js
import _asyncToGenerator2 from "12705__asyncToGenerator.js";
import _asyncToGenerator from "00005__asyncToGenerator.js";

let c2, c3;

let obj = function _asyncOptionalChainDelete2() {
  obj = _asyncToGenerator(async (arg0) => {
    let obj3;
    let closure_0 = arg0;
    if (c3 === 2) {
      c3 = 3;
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
      try {
        c3 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let closure_1 = tmp;
            closure_0 = undefined;
            c2 = 1;
            c3 = 1;
            const obj5 = { value: obj3._asyncOptionalChain(closure_0), done: false };
            obj3 = _asyncToGenerator2;
            return obj5;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          closure_0 = value;
          const tmp8 = null == closure_0 || closure_0;
          c3 = 3;
          obj = { value: tmp8, done: true };
          return obj;
        }
      } catch (tmp13) {
        c3 = 3;
        throw tmp13;
      }
    }
  });
  return obj(...arguments);
};

export const _asyncOptionalChainDelete = function _asyncOptionalChainDelete(arg0) {
  return obj(...arguments);
};
