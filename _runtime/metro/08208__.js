// === Module 8208: ? ===

// Module 8208
import react from "react" /* 19 */;
import _createClass from "_createClass" /* 42 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import map from "_possibleConstructorReturn" /* 93 */;
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
class FilterPrimitive {
  constructor() {
    let constructResult;
    const self = this;
    const items = [...arguments];
    let closure_0;
    _classCallCheck(this, FilterPrimitive);
    const items1 = [...items];
    const obj = _getPrototypeOf(FilterPrimitive);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    const tmp3Result = map(self, constructResult);
    closure_0 = tmp3Result;
    tmp3Result.root = null;
    tmp3Result.refMethod = (root) => {
      root.root = root;
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
_inherits(FilterPrimitive, react.Component);
const importDefaultResultResult = _createClass(FilterPrimitive);
importDefaultResultResult.defaultPrimitiveProps = {};

export default importDefaultResultResult;