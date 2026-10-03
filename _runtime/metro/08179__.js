// === Module 8179: ? ===

// Module 8179
import _possibleConstructorReturnDefault from "_possibleConstructorReturn" /* 93 */;
import _modDef8175 from "module_8175" /* 8175 */;
import _modDef8180 from "module_8180" /* 8180 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;
import noop from "module_19" /* 19 */;

const FeComposite = fn;
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
class FeComposite {
  constructor() {
    self = this;
    tmp = closure_3(this, FeComposite);
    tmp2 = hasOwnProperty;
    obj = hasOwnProperty(FeComposite);
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
_inherits(FeComposite, _modDef8175);
const entry = {
  key: "render",
  value: function render() {
    const self = this;
    const obj = {
      ref(arg0) {
        return self.refMethod(arg0);
      }
    };
    const merged = Object.assign(FeComposite(8174).extractFilter(this.props));
    const obj2 = FeComposite(8174);
    const merged1 = Object.assign(FeComposite(8174).extractFeComposite(this.props));
    return <tmp ref={function ref(arg0) {
      return self.refMethod(arg0);
    }} />;
  }
};
const items = [entry];
const importDefaultResultResult = _createClass(FeComposite, items);
importDefaultResultResult.displayName = "FeComposite";
let obj = {};
let merged = Object.assign(importDefaultResultResult.defaultPrimitiveProps);
obj.k1 = 0;
obj.k2 = 0;
obj.k3 = 0;
obj.k4 = 0;
importDefaultResultResult.defaultProps = obj;

export default importDefaultResultResult;