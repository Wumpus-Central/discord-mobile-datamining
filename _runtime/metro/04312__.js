// === Module 4312: ? ===

// Module 4312
import _mod17 from "module_17" /* 17 */;
import _modAll65 from "module_65" /* 65 */;

const Platform = _mod17.Platform;

export const getHostComponent = function getHostComponent(RiveView, arg1) {
  closure_0 = arg1;
  if (null == _modAll65) {
    const _Error = Error;
    const error = new Error("NativeComponentRegistry is not available on android!");
    throw error;
  } else {
    return _modAll65.get(RiveView, () => {
      const tmp = closure_0();
      const validAttributes = tmp.validAttributes;
      (function wrapValidAttributes(validAttributes) {
        const keys = Object.keys(validAttributes);
        for (const item10009 of keys) {
          let obj = {
            diff(arg0, arg1) {
                return arg0 !== arg1;
              },
            process(arg0) {
                return arg0;
              }
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
};
export const callback = function callback(f) {
  let tmp = f;
  if (typeof f === "function") {
    const obj = { f };
    tmp = obj;
  }
  return tmp;
};