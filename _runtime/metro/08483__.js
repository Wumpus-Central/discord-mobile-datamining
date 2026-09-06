// _runtime/metro/08483__.js
import _possibleConstructorReturnDefault from "00093__possibleConstructorReturn.js";
import _modDef8477 from "08477__.js";
import _modDef8484 from "08484__.js";
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";
import _getPrototypeOf from "../00095__getPrototypeOf.js";
import _inherits from "../00098__inherits.js";
import noop from "00019__.js";

const ClipPath = fn;
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
const jsx = fn(21).jsx;
class ClipPath {
  constructor() {
    self = this;
    tmp = closure_3(this, ClipPath);
    tmp2 = hasOwnProperty;
    obj = hasOwnProperty(ClipPath);
    tmp3 = closure_4;
    if (closure_7()) {
      tmp7 = globalThis;
      _Reflect = Reflect;
      tmp8 = arguments;
      constructResult = Reflect.construct(obj, arguments, tmp2(self).constructor);
    } else {
      tmp4 = arguments;
      tmp5 = arguments;
      constructResult = obj(...arguments);
    }
    return tmp3(self, constructResult);
  }
}
_inherits(ClipPath, _modDef8477);
const entry = {
  key: "render",
  value: function render() {
    const props = this.props;
    const obj = { ref: this.refMethod };
    const merged = Object.assign(ClipPath(8468).extract(this, props));
    obj.children = props.children;
    return <tmp ref={this.refMethod} />;
  },
};
const items = [entry];
const importDefaultResultResult = _createClass(ClipPath, items);
importDefaultResultResult.displayName = "ClipPath";

export default importDefaultResultResult;
