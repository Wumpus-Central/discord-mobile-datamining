// _runtime/00161__isNativeReflectConstruct.js

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
    const _module = !callResult;
    _module.exports = function _isNativeReflectConstruct() {
      return closure_0;
    };
    const _exports = _module.exports;
    _module.exports.default = _exports;
    return _exports();
  } catch (err) {
  }
};