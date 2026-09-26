// === Module 7945: ? ===

// Module 7945
import _possibleConstructorReturnDefault from "_possibleConstructorReturn" /* 93 */;
import _modDef7946 from "module_7946" /* 7946 */;
import _modDef7948 from "module_7948" /* 7948 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;
import noop from "module_19" /* 19 */;

const FeBlend = fn;
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
class FeBlend {
  constructor() {
    self = this;
    tmp = closure_3(this, FeBlend);
    tmp2 = hasOwnProperty;
    obj = hasOwnProperty(FeBlend);
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
_inherits(FeBlend, _modDef7948);
const entry = {
  key: "render",
  value: function render() {
    const self = this;
    const obj = {
      ref(arg0) {
        return self.refMethod(arg0);
      }
    };
    const merged = Object.assign(FeBlend(7947).extractFilter(this.props));
    const obj2 = FeBlend(7947);
    const merged1 = Object.assign(FeBlend(7947).extractIn(this.props));
    const obj3 = FeBlend(7947);
    const merged2 = Object.assign(FeBlend(7947).extractFeBlend(this.props));
    return <tmp ref={function ref(arg0) {
      return self.refMethod(arg0);
    }} />;
  }
};
const items = [entry];
const importDefaultResultResult = _createClass(FeBlend, items);
importDefaultResultResult.displayName = "FeBlend";
let obj = {};
let merged = Object.assign(importDefaultResultResult.defaultPrimitiveProps);
obj.mode = "normal";
importDefaultResultResult.defaultProps = obj;

export default importDefaultResultResult;