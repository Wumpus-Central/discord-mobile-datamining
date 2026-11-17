// _runtime/16206_defaultErrorMap.js
import _mod16207 from "metro/16207__.js";

let fn = this;
if (this) {
  fn = this.__importDefault;
}
if (!fn) {
  fn = (__esModule) => {
    if (!__esModule) {
      const obj = { default: __esModule };
      let tmp = obj;
    } else {
      tmp = __esModule;
    }
    return tmp;
  };
}
const _isNativeReflectConstruct = fn(_mod16207);
({ default: exports.defaultErrorMap, default: global } = _isNativeReflectConstruct);

export function setErrorMap(arg0) {
  global = arg0;
}
export function getErrorMap() {
  return global;
}
