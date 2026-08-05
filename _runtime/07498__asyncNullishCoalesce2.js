// _runtime/07498__asyncNullishCoalesce2.js
import asyncGeneratorStep from "asyncGeneratorStep";

function _asyncNullishCoalesce2() {
  const self = this;
  const tmp = asyncGeneratorStep((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let c2 = 0;
    return (function*(arg0, arg1) {
      if (c2 === 2) {
        c2 = 3;
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
          c2 = 2;
          if (arg0 === 1) {
            c2 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c2 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            obj = callback(table[1]);
            c2 = 3;
            const obj1 = { value: null, done: true };
            obj1[0] = obj._nullishCoalesce(callback, table);
            return obj1;
          }
        } catch (tmp8) {
          c2 = tmp;
          throw tmp8;
        }
      }
    })();
  });
  const _asyncNullishCoalesce2 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}

export const _asyncNullishCoalesce = function _asyncNullishCoalesce(arg0, arg1) {
  const self = this;
  const apply = _asyncNullishCoalesce2.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};