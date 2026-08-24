// _runtime/06647__isNativeReflectConstruct.js
import noopDefault from "00019_noop.js";
import _inheritsDefault from "00098__inherits.js";
import _isNativeReflectConstructDefault from "06646__isNativeReflectConstruct.js";
import __INTERNAL_VIEW_CONFIGDefault from "metro/06648___INTERNAL_VIEW_CONFIG.js";
import closure_3 from "metro/00041__classCallCheck.js";
import closure_4 from "metro/00093__possibleConstructorReturn.js";
import closure_5 from "00095__getPrototypeOf.js";
import importDefaultResult from "metro/00042__createClass.js";
import { jsx } from "react/00021_jsxProd.js";

const FeColorMatrix = arg1;
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
class FeColorMatrix {
  constructor() {
    self = this;
    tmp = closure_3(this, FeColorMatrix);
    tmp2 = closure_5;
    obj = closure_5(FeColorMatrix);
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
_inheritsDefault(FeColorMatrix, _isNativeReflectConstructDefault);
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
    const merged = Object.assign(self(6645).extractFilter(this.props));
    const obj2 = self(6645);
    const merged1 = Object.assign(self(6645).extractIn(this.props));
    const obj3 = self(6645);
    const merged2 = Object.assign(self(6645).extractFeColorMatrix(this.props));
    return <tmp ref={function ref(arg0) {
      return self.refMethod(arg0);
    }} />;
  }
};
const items = [obj];
const importDefaultResultResult = importDefaultResult(FeColorMatrix, items);
importDefaultResultResult.displayName = "FeColorMatrix";
obj = {};
let merged = Object.assign(importDefaultResultResult.defaultPrimitiveProps);
obj.type = "matrix";
obj.values = "";
importDefaultResultResult.defaultProps = obj;

export default importDefaultResultResult;