// _runtime/metro/08511__.js
import _possibleConstructorReturnDefault from "00093__possibleConstructorReturn.js";
import _modDef8492 from "08492__.js";
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";
import _getPrototypeOf from "../00095__getPrototypeOf.js";
import _inherits from "../00098__inherits.js";

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
  } catch (err) {}
}
_possibleConstructorReturnDefault;
class FeMergeNode {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = closure_0(this, FeMergeNode);
    items1 = [...items];
    tmp2 = c2;
    obj = c2(FeMergeNode);
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
    tmp3Result.setNativeProps = () => {
      const parent = props.props.parent;
      if (parent) {
        parent.forceUpdate();
      }
    };
    return tmp3Result;
  }
}
_classCallCheck = FeMergeNode;
_inherits(FeMergeNode, _modDef8492);
const entry = {
  key: "render",
  value: function render() {
    return null;
  },
};
let items = [entry];
const importDefaultResultResult = _createClass(FeMergeNode, items);
importDefaultResultResult.displayName = "FeMergeNode";

export default importDefaultResultResult;
