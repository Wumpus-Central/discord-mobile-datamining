// === Module 6614: _isNativeReflectConstruct ===

// Module 6614 (_isNativeReflectConstruct)
import noopDefault from "noop" /* 19 */;
import _inheritsDefault from "_inherits" /* 98 */;
import _isNativeReflectConstructDefault from "_isNativeReflectConstruct" /* 6610 */;
import __INTERNAL_VIEW_CONFIGDefault from "__INTERNAL_VIEW_CONFIG" /* 6615 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _possibleConstructorReturn from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import importDefaultResult from "_createClass" /* 42 */;
import { jsx } from "jsxProd" /* 21 */;

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
noopDefault;
class FeComposite {
  constructor() {
    self = this;
    tmp = closure_3(this, FeComposite);
    tmp2 = closure_5;
    obj = closure_5(FeComposite);
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
_inheritsDefault(FeComposite, _isNativeReflectConstructDefault);
let obj = {
  key: "render",
  value: function render() {
    const self = this;
    const merged = Object.assign(self(6609).extractFilter(this.props));
    const obj2 = self(6609);
    const merged1 = Object.assign(self(6609).extractFeComposite(this.props));
    return <tmp ref={function ref(arg0) {
      return self.refMethod(arg0);
    }} />;
  }
};
const items = [obj];
const importDefaultResultResult = importDefaultResult(FeComposite, items);
importDefaultResultResult.displayName = "FeComposite";
obj = {};
let merged = Object.assign(importDefaultResultResult.defaultPrimitiveProps);
obj.k1 = 0;
obj.k2 = 0;
obj.k3 = 0;
obj.k4 = 0;
importDefaultResultResult.defaultProps = obj;

export default importDefaultResultResult;