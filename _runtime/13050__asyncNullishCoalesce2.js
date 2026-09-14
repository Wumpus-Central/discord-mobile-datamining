// === Module 13050: _asyncNullishCoalesce2 ===

// Module 13050 (_asyncNullishCoalesce2)
import _nullishCoalesce from "_nullishCoalesce" /* 13051 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

let closure_3 = async function _asyncNullishCoalesce2(arg0) {
  if (c2 === 2) {
    c2 = 3;
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
      c2 = 2;
      if (arg0 === 1) {
        c2 = 3;
        throw value;
      } else if (arg0 === 2) {
        c2 = 3;
        const obj3 = { value, done: true };
        return obj3;
      } else {
        c2 = 3;
        const obj4 = { value: _nullishCoalesce._nullishCoalesce(closure_0, closure_1), done: true };
        return obj4;
      }
    } catch (tmp8) {
      c2 = tmp;
      throw tmp8;
    }
  }
};

export const _asyncNullishCoalesce = function _asyncNullishCoalesce(arg0, arg1) {
  const self = this;
  const apply = closure_3.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};