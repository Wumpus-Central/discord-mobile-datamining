// === Module 8229: FeImage ===

// Module 8229 (FeImage)
import warnOnce from "warnOnce" /* 8185 */;
import _modDef8208 from "module_8208" /* 8208 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import c3 from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;

function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

    }));
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {
  }
}
class FeImage {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, FeImage);
    const obj = _getPrototypeOf(FeImage);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, arguments, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj(...arguments);
    }
    return c3(self, constructResult);
  }
}
_inherits(FeImage, _modDef8208);
const entry = {
  key: "render",
  value: function render() {
    const obj = warnOnce;
    const result = obj.warnUnimplementedFilter();
    return null;
  }
};
const items = [entry];
const importDefaultResultResult = _createClass(FeImage, items);
importDefaultResultResult.displayName = "FeImage";
let obj = {};
const merged = Object.assign(importDefaultResultResult.defaultPrimitiveProps);
importDefaultResultResult.defaultProps = obj;

export default importDefaultResultResult;