// === Module 1647: ? ===

// Module 1647
import _slicedToArray from "module_32" /* 32 */;

const ReanimatedError = function t(arg0) {
  let str = "[Reanimated]";
  if (arg0) {
    const _HermesInternal = HermesInternal;
    str = "" + "[Reanimated]" + " " + arg0;
  }
  const error = new Error(str);
  error.name = "ReanimatedError";
  return error;
};
ReanimatedError.__closure = {};
ReanimatedError.__workletHash = 17260882889510;
ReanimatedError.__initData = { code: "function ReanimatedError_Pnpm_errorsTs1(message){const prefix='[Reanimated]';const errorInstance=new Error(message?prefix+\" \"+message:prefix);errorInstance.name='ReanimatedError';return errorInstance;}" };
function registerReanimatedError() {
  if (globalThis._WORKLET) {
    global.ReanimatedError = ReanimatedError;
  } else {
    const _Error = Error;
    const error = new Error("[Reanimated] registerReanimatedError() must be called on Worklet runtime");
    throw error;
  }
}
registerReanimatedError.__closure = { ReanimatedErrorConstructor: ReanimatedError };
registerReanimatedError.__workletHash = 12525509537607;
registerReanimatedError.__initData = { code: "function registerReanimatedError_Pnpm_errorsTs2(){const{ReanimatedErrorConstructor}=this.__closure;if(!_WORKLET){throw new Error('[Reanimated] registerReanimatedError() must be called on Worklet runtime');}global.ReanimatedError=ReanimatedErrorConstructor;}" };
const map = new Map();

export { ReanimatedError };
export { registerReanimatedError };
export const registerWorkletStackDetails = function registerWorkletStackDetails(arg0, arg1) {
  const result = map.set(arg0, arg1);
};
export const reportFatalErrorOnJS = function reportFatalErrorOnJS(stack) {
  const error = new Error();
  error.message = stack.message;
  let tmp2;
  if (stack.stack) {
    const match = str.match(/worklet_(\d+):(\d+):(\d+)/g);
    let replaced = str;
    if (match != null) {
      const item = match.forEach((item) => {
        const parts = item.split(/:|_/);
        replaced = globalThis;
        let concat = _slicedToArray;
        const tmp = _slicedToArray(parts.map(Number), 4);
        let str = tmp[3];
        value = map.get(tmp[1]);
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
            replaced = replaced.replace(item, concat(combined1[0], ":", tmp[2] + combined1[1] + combined[1], ":", sum));
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
    tmp2 = replaced;
  }
  error.stack = tmp2;
  error.name = "ReanimatedError";
  error.jsEngine = "reanimated";
  const _ErrorUtils = replaced.ErrorUtils;
  _ErrorUtils.reportFatalError(error);
};