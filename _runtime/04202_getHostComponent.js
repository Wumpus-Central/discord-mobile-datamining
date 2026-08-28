// _runtime/04202_getHostComponent.js
import get_ActivityIndicator from "00017_get_ActivityIndicator.js";
import setRuntimeConfigProviderAll from "00065_setRuntimeConfigProvider.js";

const Platform = get_ActivityIndicator.Platform;

export const getHostComponent = function getHostComponent(RiveView, arg1) {
  importAll = arg1;
  if (null == setRuntimeConfigProviderAll) {
    const _Error = Error;
    error = new Error("NativeComponentRegistry is not available on android!");
    throw error;
  } else {
    return setRuntimeConfigProviderAll.get(RiveView, () => {
      const tmp = callback();
      const validAttributes = tmp.validAttributes;
      (function wrapValidAttributes(validAttributes) {
        const keys = Object.keys(validAttributes);
        for (const item10009 of keys) {
          let obj = { diff: null, process: null };
          obj[0] = function diff(arg0, arg1) {
            return arg0 !== arg1;
          };
          obj[1] = function process(arg0) {
            return arg0;
          };
          arg0[item10009] = obj;
          continue;
        }
        return validAttributes;
      })(validAttributes);
      tmp.validAttributes = validAttributes;
      return tmp;
    });
  }
  let tmp = importAll;
};
export const callback = function callback(fn) {
  let tmp = fn;
  if (typeof fn === "function") {
    const obj = { f: null };
    obj[0] = fn;
    tmp = obj;
  }
  return tmp;
};