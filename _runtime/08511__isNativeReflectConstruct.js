// === Module 8511: _isNativeReflectConstruct ===

// Module 8511 (_isNativeReflectConstruct)
import _inheritsDefault from "_inherits" /* 98 */;
import _isNativeReflectConstructDefault from "_isNativeReflectConstruct" /* 8492 */;
import FeMergeNode from "_classCallCheck" /* 41 */;
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
class FeMergeNode {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = FeMergeNode(this, closure_0);
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
    tmp3Result.setNativeProps = () => {
      const parent = props.props.parent;
      if (parent) {
        parent.forceUpdate();
      }
    };
    return tmp3Result;
  }
}
_inheritsDefault(FeMergeNode, _isNativeReflectConstructDefault);
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