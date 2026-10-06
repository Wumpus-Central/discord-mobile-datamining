// === Module 4554: importWithRetry ===

// Module 4554 (importWithRetry)
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

let c5;

let obj = function _importWithRetry() {
  obj = _asyncToGenerator(async (arg0) => {
    let c0;
    let c1;
    let c2;
    let closure_3;
    let closure_4;
    let obj11;
    let closure_0 = arg0;
    if (1 === c5) {
      if (arg0 === 1) {
        let c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c6 = 3;
        const obj4 = { value, done: true };
        return obj4;
      } else {
        closure_3 = 500;
        closure_4 = 0;
      }
    } else if (2 === c5) {
      let c4 = 0;
      let closure_5 = closure_3;
      if (webpackId in closure_130_0.cache) {
        throw closure_5;
      } else if (closure_4 >= 50) {
        throw closure_5;
      } else {
        c5 = 4;
        c6 = 1;
        const obj5 = { value: closure_130_2(closure_3), done: false };
        return obj5;
      }
    } else if (3 === c5) {
      if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 0;
        c6 = 3;
        const obj6 = { value, done: true };
        return obj6;
      } else {
        c4 = 0;
        c6 = 3;
        const obj7 = { value, done: true };
        return obj7;
      }
    } else if (4 === c5) {
      if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c6 = 3;
        const obj8 = { value, done: true };
        return obj8;
      } else {
        c5 = 5;
        c6 = 1;
        const obj9 = { value: closure_130_3(), done: false };
        return obj9;
      }
    } else if (arg0 === 1) {
      c6 = 3;
      throw value;
    } else if (arg0 === 2) {
      c6 = 3;
      obj = { value, done: true };
      return obj;
    } else {
      const _Math = Math;
      closure_3 = Math.min(5000, 2 * closure_3);
      closure_4 = closure_4 + 1;
    }
    const _performance = performance;
    const obj10 = { detail: obj11 };
    obj11 = { webpackId, name };
    performance.mark("importWithRetry:start", obj10);
    await c0();
    ({ createPromise: c0, webpackId: c1, name: c2 } = closure_0);
    return "Reflect";
  });
  return obj(...arguments);
};
function pausedPromise(arg0) {
  let closure_0 = arg0;
  const promise = new Promise((arg0) => setTimeout(arg0, closure_0));
  return promise;
}
function awaitOnline() {
  return Promise.resolve();
}
const result = size.fileFinishedImporting("../discord_common/js/packages/code-splitting/importWithRetry.tsx");

export { awaitOnline };
export function setAwaitOnline(arg0) {
  awaitOnline = arg0;
}
export { pausedPromise };
export const importWithRetry = function importWithRetry() {
  return obj(...arguments);
};