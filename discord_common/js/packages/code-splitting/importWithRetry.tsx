// discord_common/js/packages/code-splitting/importWithRetry.tsx
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";

const require = fn;
let closure_4 = async function _importWithRetry(arg0) {
  closure_2 = tmp3;
  ({ createPromise: closure_129_0, webpackId: closure_129_1, name: closure_129_2 } = closure_0);
  await "PX_16";
  if (1 === tmp7) {
    if (arg0 === 1) {
      c6 = 3;
      throw value;
    } else if (arg0 === 2) {
      c6 = 3;
      return { value, done: true };
    } else {
      closure_129_3 = 500;
      closure_129_4 = 0;
      c4 = 1;
      const _performance = performance;
      const obj2 = { detail: null };
      obj2.detail = { webpackId: closure_129_1, name: closure_129_2 };
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
      return { value: closure_130_2(closure_129_3), done: false };
    }
  } else if (3 === tmp7) {
    if (arg0 === 1) {
      c6 = 3;
      throw value;
    } else if (arg0 === 2) {
      c4 = 0;
      c6 = 3;
      return { value, done: true };
    } else {
      c4 = 0;
      c6 = 3;
      return { value, done: true };
    }
  } else if (4 === tmp7) {
    if (arg0 === 1) {
      c6 = 3;
      throw value;
    } else if (arg0 === 2) {
      c6 = 3;
      return { value, done: true };
    } else {
      c5 = 5;
      c6 = 1;
      return { value: closure_130_3(), done: false };
    }
  } else if (arg0 === 1) {
    c6 = 3;
    throw value;
  } else if (arg0 !== 2) {
    const _Math = Math;
    closure_129_3 = Math.min(5000, 2 * closure_129_3);
    closure_129_4 = closure_129_4 + 1;
  }
  return value;
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
