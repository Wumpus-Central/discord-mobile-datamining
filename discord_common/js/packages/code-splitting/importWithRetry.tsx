// discord_common/js/packages/code-splitting/importWithRetry.tsx
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";

const require = fn;
let closure_4 = async function _importWithRetry(arg0) {
  if (c6 === 2) {
    c6 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
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
          closure_2 = tmp3;
          closure_1 = tmp7;
          closure_129_0 = undefined;
          closure_129_1 = undefined;
          closure_129_2 = undefined;
          ({ createPromise: closure_129_0, webpackId: closure_129_1, name: closure_129_2 } = closure_0);
          closure_129_3 = undefined;
          closure_129_4 = undefined;
          c5 = 1;
          c6 = 1;
          return { value: "PX_16", done: true };
        }
      } else {
        if (1 === tmp7) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj1 = { value, done: true };
            return obj1;
          } else {
            closure_129_3 = 500;
            closure_129_4 = 0;
            c4 = 1;
            const _performance = performance;
            const obj2 = { detail: null };
            const obj3 = { webpackId: closure_129_1, name: closure_129_2 };
            obj2.detail = obj3;
            performance.mark("importWithRetry:start", obj2);
            closure_129_0();
            c5 = 3;
            c6 = 1;
          }
        } else if (2 === tmp7) {
          c4 = 0;
          closure_129_5 = closure_3;
          if (closure_129_1 in closure_130_0.cache) {
            throw closure_129_5;
          } else if (closure_129_4 >= 50) {
            throw closure_129_5;
          } else {
            c5 = 4;
            c6 = 1;
            const obj4 = { value: closure_130_2(closure_129_3), done: false };
            return obj4;
          }
        } else if (3 === tmp7) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            c4 = 0;
            c6 = 3;
            const obj6 = { value, done: true };
            return obj6;
          }
        } else if (4 === tmp7) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj7 = { value, done: true };
            return obj7;
          } else {
            c5 = 5;
            c6 = 1;
            const obj8 = { value: closure_130_3(), done: false };
            return obj8;
          }
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 !== 2) {
          const _Math = Math;
          closure_129_3 = Math.min(5000, 2 * closure_129_3);
          closure_129_4 = closure_129_4 + 1;
        }
        c6 = 3;
        obj = { value, done: true };
        return obj;
      }
    } catch (tmp34) {
      closure_3 = tmp34;
      if (tmp4 === c4) {
        c6 = tmp2;
        throw tmp34;
      } else {
        c5 = tmp;
      }
    }
  }
};
function pausedPromise(arg0) {
  closure_0 = arg0;
  return new Promise((arg0) => setTimeout(arg0, closure_0));
}
let global = function awaitOnline() {
  return Promise.resolve();
};
const size = fn(2);
const result = size.fileFinishedImporting("../discord_common/js/packages/code-splitting/importWithRetry.tsx");

export const awaitOnline = global;
export function setAwaitOnline(arg0) {
  global = arg0;
}
export { pausedPromise };
export const importWithRetry = function importWithRetry() {
  const self = this;
  const apply = closure_4.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
