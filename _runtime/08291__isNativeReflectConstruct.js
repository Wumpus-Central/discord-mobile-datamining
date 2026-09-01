// === Module 8291: _isNativeReflectConstruct ===

// Module 8291 (_isNativeReflectConstruct)
import noopDefault from "noop" /* 19 */;
import _inheritsDefault from "_inherits" /* 98 */;
import _isNativeReflectConstructDefault from "_isNativeReflectConstruct" /* 8280 */;
import __INTERNAL_VIEW_CONFIGDefault from "__INTERNAL_VIEW_CONFIG" /* 8292 */;
import closure_3 from "_classCallCheck" /* 41 */;
import closure_4 from "_possibleConstructorReturn" /* 93 */;
import closure_5 from "_getPrototypeOf" /* 95 */;
import importDefaultResult from "_createClass" /* 42 */;
import { jsx } from "jsxProd" /* 21 */;

const FeGaussianBlur = arg1;
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
class FeGaussianBlur {
  constructor() {
    self = this;
    tmp = closure_3(this, FeGaussianBlur);
    tmp2 = closure_5;
    obj = closure_5(FeGaussianBlur);
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
_inheritsDefault(FeGaussianBlur, _isNativeReflectConstructDefault);
let obj = {
  key: "render",
  value: function render() {
    const self = this;
    const obj = {
      ref(arg0) {
        return self.refMethod(arg0);
      }
    };
    const tmp = __INTERNAL_VIEW_CONFIGDefault;
    const merged = Object.assign(self(8279).extractFilter(this.props));
    const obj2 = self(8279);
    const merged1 = Object.assign(self(8279).extractIn(this.props));
    const obj3 = self(8279);
    const merged2 = Object.assign(self(8279).extractFeGaussianBlur(this.props));
    return <tmp ref={function ref(arg0) {
      return self.refMethod(arg0);
    }} />;
  }
};
const items = [obj];
const importDefaultResultResult = importDefaultResult(FeGaussianBlur, items);
importDefaultResultResult.displayName = "FeGaussianBlur";
obj = {};
let merged = Object.assign(importDefaultResultResult.defaultPrimitiveProps);
obj.stdDeviation = 0;
obj.edgeMode = "none";
importDefaultResultResult.defaultProps = obj;

export default importDefaultResultResult;