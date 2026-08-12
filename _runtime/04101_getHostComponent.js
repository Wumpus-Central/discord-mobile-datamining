// _runtime/04101_getHostComponent.js
import { Platform } from "get ActivityIndicator";


export const getHostComponent = function getHostComponent(RiveView, arg1) {
  const importAll = arg1;
  if (null == importAll(65)) {
    const _Error = Error;
    const error = new Error("NativeComponentRegistry is not available on android!");
    throw error;
  } else {
    return tmp(65).get(RiveView, () => {
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
  tmp = importAll;
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