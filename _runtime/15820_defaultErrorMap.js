// === Module 15820: defaultErrorMap ===

// Module 15820 (defaultErrorMap)
import _mod15821 from "module_15821" /* 15821 */;

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
const _isNativeReflectConstruct = fn(_mod15821);
({ default: exports.defaultErrorMap, default: global } = _isNativeReflectConstruct);

export function setErrorMap(arg0) {
  global = arg0;
}
export function getErrorMap() {
  return global;
}