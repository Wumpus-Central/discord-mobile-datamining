// === Module 7893: ? ===

// Module 7893
import _possibleConstructorReturnDefault from "_possibleConstructorReturn" /* 93 */;
import _modDef7882 from "module_7882" /* 7882 */;
import _modDef7894 from "module_7894" /* 7894 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;
import noop from "module_19" /* 19 */;

const FeGaussianBlur = fn;
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
const jsx = fn(21).jsx;
class FeGaussianBlur {
  constructor() {
    self = this;
    tmp = closure_3(this, FeGaussianBlur);
    tmp2 = hasOwnProperty;
    obj = hasOwnProperty(FeGaussianBlur);
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
_inherits(FeGaussianBlur, _modDef7882);
const entry = {
  key: "render",
  value: function render() {
    const self = this;
    const obj = {
      ref(arg0) {
        return self.refMethod(arg0);
      }
    };
    const merged = Object.assign(FeGaussianBlur(7881).extractFilter(this.props));
    const obj2 = FeGaussianBlur(7881);
    const merged1 = Object.assign(FeGaussianBlur(7881).extractIn(this.props));
    const obj3 = FeGaussianBlur(7881);
    const merged2 = Object.assign(FeGaussianBlur(7881).extractFeGaussianBlur(this.props));
    return <tmp ref={function ref(arg0) {
      return self.refMethod(arg0);
    }} />;
  }
};
const items = [entry];
const importDefaultResultResult = _createClass(FeGaussianBlur, items);
importDefaultResultResult.displayName = "FeGaussianBlur";
let obj = {};
let merged = Object.assign(importDefaultResultResult.defaultPrimitiveProps);
obj.stdDeviation = 0;
obj.edgeMode = "none";
importDefaultResultResult.defaultProps = obj;

export default importDefaultResultResult;