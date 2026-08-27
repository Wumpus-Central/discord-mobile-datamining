// _runtime/08231__isNativeReflectConstruct.js
import _inheritsDefault from "00098__inherits.js";
import _isNativeReflectConstructDefault from "08212__isNativeReflectConstruct.js";
import FeMergeNode from "metro/00041__classCallCheck.js";
import closure_1 from "metro/00093__possibleConstructorReturn.js";
import closure_2 from "00095__getPrototypeOf.js";
import importDefaultResult from "metro/00042__createClass.js";

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