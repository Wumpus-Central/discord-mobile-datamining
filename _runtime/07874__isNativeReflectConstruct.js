// _runtime/07874__isNativeReflectConstruct.js
import FilterPrimitive from "_classCallCheck";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import importDefaultResult from "_createClass";

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
    let closure_0 = !callResult;
    function _isNativeReflectConstruct() {
      return closure_0;
    }
    return _isNativeReflectConstruct();
  } catch (err) {
  }
}
class FilterPrimitive {
  constructor() {
    self = this;
    items = [...arguments];
    apply = undefined;
    tmp = FilterPrimitive(this, apply);
    items1 = [...items];
    tmp2 = __esModule;
    obj = __esModule(apply);
    tmp3 = __esModule;
    if (_isNativeReflectConstruct()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    tmp3Result = tmp3(self, constructResult);
    apply = tmp3Result;
    tmp3Result.root = null;
    tmp3Result.refMethod = (root) => {
      c0.root = root;
    };
    tmp3Result.setNativeProps = (arg0) => {
      const root = _undefined.root;
      if (root != null) {
        root.setNativeProps(arg0);
      }
    };
    return tmp3Result;
  }
}
require("_inherits")(FilterPrimitive, require("noop").Component);
const importDefaultResultResult = importDefaultResult(FilterPrimitive);
importDefaultResultResult.defaultPrimitiveProps = {};

export default importDefaultResultResult;