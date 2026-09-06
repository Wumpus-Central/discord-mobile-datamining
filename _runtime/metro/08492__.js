// === Module 8492: ? ===

// Module 8492
import _possibleConstructorReturnDefault from "_possibleConstructorReturn" /* 93 */;
import _createClass from "_createClass" /* 42 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;

function _isNativeReflectConstruct() {
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
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {
  }
}
_possibleConstructorReturnDefault;
class FilterPrimitive {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = closure_0(this, FilterPrimitive);
    items1 = [...items];
    tmp2 = c2;
    obj = c2(FilterPrimitive);
    tmp3 = closure_1;
    if (closure_3()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    tmp3Result = tmp3(self, constructResult);
    closure_0 = tmp3Result;
    tmp3Result.root = null;
    tmp3Result.refMethod = (root) => {
      closure_0.root = root;
    };
    tmp3Result.setNativeProps = (arg0) => {
      root = root.root;
      if (root != null) {
        root.setNativeProps(arg0);
      }
    };
    return tmp3Result;
  }
}
_classCallCheck = FilterPrimitive;
_inherits(FilterPrimitive, fn(19).Component);
const importDefaultResultResult = _createClass(FilterPrimitive);
importDefaultResultResult.defaultPrimitiveProps = {};

export default importDefaultResultResult;