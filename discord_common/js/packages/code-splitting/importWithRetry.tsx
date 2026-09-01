// === Module 4159: _importWithRetry ===

// Module 4159 (_importWithRetry)
import closure_1 from "asyncGeneratorStep" /* 5 */;

const require = arg1;
function _importWithRetry() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c5 = 0;
    c6 = 0;
    c4 = 0;
    const iter = (function*(arg0) {
      const callback = tmp3;
      ({ createPromise: c0, webpackId: c1, name: c2 } = lib);
      yield "PX_16";
      if (1 === tmp7) {
        if (arg0 === 1) {
          c6 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c6 = 3;
          obj1 = { value: null, done: true };
          obj1[0] = arg1;
          return obj1;
        } else {
          let callback2 = 500;
          closure_4 = 0;
          closure_4 = 1;
          const _performance = performance;
          const obj2 = { detail: null };
          const obj3 = { webpackId: null, name: null };
          obj3[0] = c1;
          obj3[1] = callback;
          obj2[0] = obj3;
          performance.mark("importWithRetry:start", obj2);
          lib();
          c5 = 3;
          c6 = 1;
        }
      } else if (2 === tmp7) {
        closure_4 = 0;
        c5 = callback2;
        if (c1 in lib.cache) {
          throw c5;
        } else if (closure_4 >= 50) {
          throw c5;
        } else {
          c5 = 4;
          c6 = 1;
          const obj4 = { value: null, done: false };
          obj4[0] = callback(callback2);
          return obj4;
        }
      } else if (3 === tmp7) {
        if (arg0 === 1) {
          c6 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          closure_4 = 0;
          c6 = 3;
          const obj5 = { value: null, done: true };
          obj5[0] = arg1;
          return obj5;
        } else {
          closure_4 = 0;
          c6 = 3;
          const obj6 = { value: null, done: true };
          obj6[0] = arg1;
          return obj6;
        }
      } else if (4 === tmp7) {
        if (arg0 === 1) {
          c6 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj7 = { value: null, done: true };
          obj7[0] = arg1;
          return obj7;
        } else {
          c5 = 5;
          c6 = 1;
          const obj8 = { value: null, done: false };
          obj8[0] = callback2();
          return obj8;
        }
      } else if (arg0 === 1) {
        c6 = 3;
        throw arg1;
      } else if (arg0 !== 2) {
        const _Math = Math;
        callback2 = Math.min(5000, 2 * callback2);
        closure_4 = closure_4 + 1;
      }
      return arg1;
    })();
    iter.next();
    return iter;
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
function pausedPromise(arg0) {
  closure_0 = arg0;
  return new Promise((arg0) => setTimeout(arg0, closure_0));
}
function awaitOnline() {
  return Promise.resolve();
}
const result = require("set").fileFinishedImporting("../discord_common/js/packages/code-splitting/importWithRetry.tsx");

export { awaitOnline };
export function setAwaitOnline(arg0) {
  closure_3 = arg0;
}
export { pausedPromise };
export const importWithRetry = function importWithRetry(arg0) {
  const self = this;
  const apply = _importWithRetry.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};