// === Module 161: ? ===

// Module 161

export default function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const call = valueOf.call;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    if (typeof call === "unknown") {
      let callResult = valueOf();
    } else {
      callResult = call(constructResult);
    }
    closure_0 = !callResult;
    module.exports = function _isNativeReflectConstruct() {
      return closure_0;
    };
    const _exports = module.exports;
    module.exports.default = _exports;
    return _exports();
  } catch (err) {
  }
};