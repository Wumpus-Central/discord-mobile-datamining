// _runtime/01664_t.js
import closure_1 from "metro/00032__slicedToArray.js";

const fn = function t(arg0) {
  let str = "[Reanimated]";
  if (arg0) {
    const _HermesInternal = HermesInternal;
    str = "" + "[Reanimated]" + " " + arg0;
  }
  error = new Error(str);
  error.name = "ReanimatedError";
  return error;
};
fn.__closure = {};
fn.__workletHash = 17260882889510;
fn.__initData = {
  code: "function ReanimatedError_Pnpm_errorsTs1(message){const prefix='[Reanimated]';const errorInstance=new Error(message?prefix+\" \"+message:prefix);errorInstance.name='ReanimatedError';return errorInstance;}",
};
function registerReanimatedError() {
  if (globalThis._WORKLET) {
    global.ReanimatedError = fn;
  } else {
    const _Error = Error;
    error = new Error("[Reanimated] registerReanimatedError() must be called on Worklet runtime");
    throw error;
  }
}
registerReanimatedError.__closure = { ReanimatedErrorConstructor: fn };
registerReanimatedError.__workletHash = 12525509537607;
registerReanimatedError.__initData = {
  code: "function registerReanimatedError_Pnpm_errorsTs2(){const{ReanimatedErrorConstructor}=this.__closure;if(!_WORKLET){throw new Error('[Reanimated] registerReanimatedError() must be called on Worklet runtime');}global.ReanimatedError=ReanimatedErrorConstructor;}",
};
const map = new Map();

export const ReanimatedError = fn;
export { registerReanimatedError };
export const registerWorkletStackDetails = function registerWorkletStackDetails(arg0, arg1) {
  const result = map.set(arg0, arg1);
};
export const reportFatalErrorOnJS = function reportFatalErrorOnJS(stack) {
  let str = stack.stack;
  error = new Error();
  error.message = stack.message;
  let tmp2;
  if (str) {
    const match = str.match(/worklet_(\d+):(\d+):(\d+)/g);
    if (match != null) {
      const item = match.forEach((str) => {
        const parts = str.split(/:|_/);
        let replaced = globalThis;
        let concat = closure_1_1;
        const tmp = closure_1_1(parts.map(Number), 4);
        str = tmp[3];
        const value = closure_1_3.get(tmp[1]);
        if (value) {
          const combined = concat(value, 3);
          let first = combined[0];
          let tmp4 = combined[2];
          let first1;
          if (first.stack != null) {
            first = str2.split("\n");
            if (first != null) {
              first1 = first[0];
            }
          }
          if (!first1) {
            let items = ["unknown", 0, 0];
            const combined1 = concat(items, 3);
            const sum = str + combined1[2] + tmp4;
            tmp4 = replaced;
            concat = replaced.HermesInternal.concat;
            str = ":";
            replaced = replaced.replace(str, concat(combined1[0], ":", tmp[2] + combined1[1] + combined[1], ":", sum));
          } else {
            first = /@([^@]+):(\d+):(\d+)/.exec(first1);
            const obj2 = /@([^@]+):(\d+):(\d+)/;
          }
          const combined2 = concat(first, 4);
          first = [combined2[1], replaced.Number(combined2[2]), replaced.Number(combined2[3])];
          items = first;
        }
      });
    }
    tmp2 = str;
  }
  error.stack = tmp2;
  error.name = "ReanimatedError";
  error.jsEngine = "reanimated";
  const _ErrorUtils = str.ErrorUtils;
  _ErrorUtils.reportFatalError(error);
};
