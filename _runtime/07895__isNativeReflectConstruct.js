// _runtime/07895__isNativeReflectConstruct.js
import FeMergeNode from "_classCallCheck";
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
class FeMergeNode {
  constructor() {
    self = this;
    items = [...arguments];
    apply = undefined;
    tmp = FeMergeNode(this, apply);
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
    tmp3Result.setNativeProps = () => {
      const parent = _undefined.props.parent;
      if (parent) {
        parent.forceUpdate();
      }
    };
    return tmp3Result;
  }
}
require("_inherits")(FeMergeNode, require("_isNativeReflectConstruct"));
let items = [
  {
    key: "render",
    value: function render() {
      return null;
    }
  }
];
const importDefaultResultResult = importDefaultResult(FeMergeNode, items);
importDefaultResultResult.displayName = "FeMergeNode";

export default importDefaultResultResult;