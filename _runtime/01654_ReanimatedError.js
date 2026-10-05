// === Module 1654: ReanimatedError ===

// Module 1654 (ReanimatedError)
import _slicedToArray from "_slicedToArray" /* 32 */;

let _global, closure_0;

const ReanimatedError = function t(arg0) {
  let str = "[Reanimated]";
  const _Error = Error;
  if (arg0) {
    const _HermesInternal = HermesInternal;
    str = "" + "[Reanimated]" + " " + arg0;
  }
  const _Error1 = new _Error(str);
  _Error1.name = "ReanimatedError";
  return _Error1;
};
ReanimatedError.__closure = {};
ReanimatedError.__workletHash = 17260882889510;
ReanimatedError.__initData = { code: "function ReanimatedError_Pnpm_errorsTs1(message){const prefix='[Reanimated]';const errorInstance=new Error(message?prefix+\" \"+message:prefix);errorInstance.name='ReanimatedError';return errorInstance;}" };
function registerReanimatedError() {
  if (globalThis._WORKLET) {
    global.ReanimatedError = ReanimatedError;
  } else {
    const _Error = Error;
    const self = this;
    const self2 = this;
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
  const str = stack.stack;
  const message = stack.message;
  const error = new Error();
  error.message = message;
  let tmp2;
  if (str) {
    let match = str.match(/worklet_(\d+):(\d+):(\d+)/g);
    _global = str;
    let tmp3 = null;
    if (match != null) {
      const item = match.forEach((item) => {
        const parts = item.split(/:|_/);
        const tmp2 = _slicedToArray(parts.map(Number), 4);
        const tmp3 = tmp2[2];
        const tmp4 = tmp2[3];
        const value = map.get(tmp2[1]);
        if (value) {
          const tmpResult = _slicedToArray(value, 3);
          let first;
          const tmp7 = tmpResult[1];
          const tmp8 = tmpResult[2];
          if (tmpResult[0].stack != null) {
            const parts1 = str.split("\n");
            if (parts1 != null) {
              first = parts1[0];
            }
          }
          if (first) {
            let items1;
            const obj = /@([^@]+):(\d+):(\d+)/;
            const match = obj.exec(first);
            if (match) {
              const tmpResult3 = _slicedToArray(match, 4);
              const items = [tmpResult3[1], , ];
              const _Number = Number;
              const tmp14 = tmpResult3[3];
              items[1] = Number(tmpResult3[2]);
              const _Number2 = Number;
              items[2] = Number(tmp14);
              items1 = items;
            }
            const tmpResult4 = _slicedToArray(items1, 3);
            const _HermesInternal = HermesInternal;
            closure_0 = closure_0.replace(item, "" + tmpResult4[0] + ":" + tmp3 + tmpResult4[1] + tmp7 + ":" + tmp4 + tmpResult4[2] + tmp8);
          }
          items1 = ["unknown", 0, 0];
        }
      });
    }
    tmp2 = _global;
  }
  error.stack = tmp2;
  error.name = "ReanimatedError";
  error.jsEngine = "reanimated";
  const _ErrorUtils = _global.ErrorUtils;
  _ErrorUtils.reportFatalError(error);
};