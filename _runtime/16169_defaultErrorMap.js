// === Module 16169: defaultErrorMap ===

// Module 16169 (defaultErrorMap)
import _mod16170 from "module_16170" /* 16170 */;

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
const _isNativeReflectConstruct = fn(_mod16170);
({ default: exports.defaultErrorMap, default: global } = _isNativeReflectConstruct);

export function setErrorMap(arg0) {
  global = arg0;
}
export function getErrorMap() {
  return global;
}