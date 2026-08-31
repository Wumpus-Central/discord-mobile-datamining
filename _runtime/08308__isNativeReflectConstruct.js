// _runtime/08308__isNativeReflectConstruct.js
import noopAll from "00019_noop.js";
import _inheritsDefault from "00098__inherits.js";
import extractPropsDefault from "08224_extractProps.js";
import extractFontDefault from "08231_extractFont.js";
import _isNativeReflectConstructDefault from "08233__isNativeReflectConstruct.js";
import __INTERNAL_VIEW_CONFIGDefault from "metro/08309___INTERNAL_VIEW_CONFIG.js";
import closure_3 from "metro/00041__classCallCheck.js";
import closure_4 from "metro/00093__possibleConstructorReturn.js";
import closure_5 from "00095__getPrototypeOf.js";
import importDefaultResult from "metro/00042__createClass.js";
import { jsx } from "react/00021_jsxProd.js";
import extractFont from "08231_extractFont.js";

const TSpan = arg1;
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
class TSpan {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = closure_3(this, closure_0);
    items1 = [...items];
    tmp2 = closure_5;
    obj = closure_5(closure_0);
    tmp3 = closure_4;
    if (_isNativeReflectConstruct()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    tmp3Result = tmp3(self, constructResult);
    closure_0 = tmp3Result;
    tmp3Result.setNativeProps = (matrix) => {
      matrix = matrix.matrix;
      let tmp = !matrix;
      if (!matrix) {
        tmp = closure_1_1(closure_1_2[7])(matrix);
      }
      if (tmp) {
        matrix.matrix = tmp;
      }
      const propsAndStylesResult = lib(closure_1_2[8]).propsAndStyles(matrix);
      const obj = lib(closure_1_2[8]);
      const merged = Object.assign(propsAndStylesResult, lib(closure_1_2[9]).pickNotNil(closure_1_1(closure_1_2[10])(propsAndStylesResult, false)));
      if (lib.root) {
        const root = lib.root;
        root.setNativeProps(propsAndStylesResult);
      }
    };
    return tmp3Result;
  }
}
_inheritsDefault(TSpan, _isNativeReflectConstructDefault);
let items = [
  {
    key: "render",
    value: function render() {
      let obj = TSpan(8224);
      const propsAndStylesResult = obj.propsAndStyles(this.props);
      obj = {};
      const merged = Object.assign(propsAndStylesResult);
      obj.x = null;
      obj.y = null;
      const tmp2Result = extractPropsDefault(obj, this);
      const merged1 = Object.assign(tmp2Result, extractFontDefault(propsAndStylesResult, false));
      tmp2Result.ref = this.refMethod;
      obj = {};
      const tmp2 = extractPropsDefault;
      const merged2 = Object.assign(tmp2Result);
      return jsx(__INTERNAL_VIEW_CONFIGDefault, {});
    }
  }
];
const importDefaultResultResult = importDefaultResult(TSpan, items);
importDefaultResultResult.displayName = "TSpan";
extractFont.setTSpan(importDefaultResultResult);

export default importDefaultResultResult;