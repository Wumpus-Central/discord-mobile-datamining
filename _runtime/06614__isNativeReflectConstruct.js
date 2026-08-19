// _runtime/06614__isNativeReflectConstruct.js
import noopDefault from "00019_noop.js";
import _inheritsDefault from "00098__inherits.js";
import _isNativeReflectConstructDefault from "06610__isNativeReflectConstruct.js";
import __INTERNAL_VIEW_CONFIGDefault from "metro/06615___INTERNAL_VIEW_CONFIG.js";
import _classCallCheck from "metro/00041__classCallCheck.js";
import _possibleConstructorReturn from "metro/00093__possibleConstructorReturn.js";
import _getPrototypeOf from "00095__getPrototypeOf.js";
import importDefaultResult from "metro/00042__createClass.js";
import { jsx } from "react/00021_jsxProd.js";

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