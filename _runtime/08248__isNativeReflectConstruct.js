// === Module 8248: _isNativeReflectConstruct ===

// Module 8248 (_isNativeReflectConstruct)
import _inheritsDefault from "_inherits" /* 98 */;
import FilterPrimitive from "_classCallCheck" /* 41 */;
import closure_1 from "_possibleConstructorReturn" /* 93 */;
import closure_2 from "_getPrototypeOf" /* 95 */;
import importDefaultResult from "_createClass" /* 42 */;

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
class FilterPrimitive {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = FilterPrimitive(this, closure_0);
    items1 = [...items];
    tmp2 = closure_2;
    obj = closure_2(closure_0);
    tmp3 = closure_1;
    if (_isNativeReflectConstruct()) {
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
_inheritsDefault(FilterPrimitive, require("noop").Component);
const importDefaultResultResult = importDefaultResult(FilterPrimitive);
importDefaultResultResult.defaultPrimitiveProps = {};

export default importDefaultResultResult;