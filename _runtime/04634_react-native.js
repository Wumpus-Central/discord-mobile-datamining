// _runtime/04634_react-native.js
import react_native from "00017_react-native.js";
import _modAll65 from "metro/00065__.js";

const Platform = react_native.Platform;

export const getHostComponent = function getHostComponent(RiveView, arg1) {
  let closure_0 = arg1;
  if (null == _modAll65) {
    const _Error = Error;
    const self = this;
    const self2 = this;
    const error = new Error("NativeComponentRegistry is not available on android!");
    throw error;
  } else {
    const tmpResult = _modAll65;
    return tmpResult.get(RiveView, () => {
      function wrapValidAttributes(validAttributes) {
        const keys = Object.keys(validAttributes);
        for (const item10009 of keys) {
          let obj = {
            diff(arg0, arg1) {
              return arg0 !== arg1;
            },
            process(arg0) {
              return arg0;
            },
          };
          validAttributes[item10009] = obj;
          continue;
        }
        return validAttributes;
      }
      const tmp = closure_0();
      const validAttributes = tmp.validAttributes;
      wrapValidAttributes(validAttributes);
      tmp.validAttributes = validAttributes;
      return tmp;
    });
  }
};
export const callback = function callback(f) {
  let tmp = f;
  if (typeof f === "function") {
    tmp = { f };
    const obj = { f };
  }
  return tmp;
};
