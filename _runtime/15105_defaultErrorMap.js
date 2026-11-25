// === Module 15105: defaultErrorMap ===

// Module 15105 (defaultErrorMap)
import _mod15106 from "module_15106" /* 15106 */;

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
const _isNativeReflectConstruct = fn(_mod15106);
({ default: exports.defaultErrorMap, default: global } = _isNativeReflectConstruct);

export function setErrorMap(arg0) {
  global = arg0;
}
export function getErrorMap() {
  return global;
}