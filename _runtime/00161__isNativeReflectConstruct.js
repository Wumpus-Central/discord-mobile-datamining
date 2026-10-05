// === Module 161: _isNativeReflectConstruct ===

// Module 161 (_isNativeReflectConstruct)

export default function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

    }));
    module.exports = function _isNativeReflectConstruct() {
      return closure_0;
    };
    const _exports = module.exports;
    module.exports.default = _exports;
    return _exports();
  } catch (err) {
  }
};