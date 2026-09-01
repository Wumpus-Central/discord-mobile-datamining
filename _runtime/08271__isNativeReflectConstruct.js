// === Module 8271: _isNativeReflectConstruct ===

// Module 8271 (_isNativeReflectConstruct)
import noopAll from "noop" /* 19 */;
import _inheritsDefault from "_inherits" /* 98 */;
import _isNativeReflectConstructDefault from "_isNativeReflectConstruct" /* 8265 */;
import __INTERNAL_VIEW_CONFIGDefault from "__INTERNAL_VIEW_CONFIG" /* 8272 */;
import closure_3 from "_classCallCheck" /* 41 */;
import closure_4 from "_possibleConstructorReturn" /* 93 */;
import closure_5 from "_getPrototypeOf" /* 95 */;
import importDefaultResult from "_createClass" /* 42 */;
import { jsx } from "jsxProd" /* 21 */;

const ClipPath = arg1;
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
noopAll;
class ClipPath {
  constructor() {
    self = this;
    tmp = closure_3(this, ClipPath);
    tmp2 = closure_5;
    obj = closure_5(ClipPath);
    tmp3 = closure_4;
    if (_isNativeReflectConstruct()) {
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
_inheritsDefault(ClipPath, _isNativeReflectConstructDefault);
const items = [
  {
    key: "render",
    value: function render() {
      const props = this.props;
      const obj = { ref: this.refMethod };
      const tmp = __INTERNAL_VIEW_CONFIGDefault;
      const merged = Object.assign(ClipPath(8256).extract(this, props));
      obj.children = props.children;
      return <tmp ref={this.refMethod} />;
    }
  }
];
const importDefaultResultResult = importDefaultResult(ClipPath, items);
importDefaultResultResult.displayName = "ClipPath";

export default importDefaultResultResult;