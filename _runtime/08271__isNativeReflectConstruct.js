// _runtime/08271__isNativeReflectConstruct.js
import noopAll from "00019_noop.js";
import _inheritsDefault from "00098__inherits.js";
import extractPropsDefault from "08188_extractProps.js";
import extractFontDefault from "08195_extractFont.js";
import _isNativeReflectConstructDefault from "08197__isNativeReflectConstruct.js";
import __INTERNAL_VIEW_CONFIGDefault from "metro/08274___INTERNAL_VIEW_CONFIG.js";
import closure_3 from "metro/00041__classCallCheck.js";
import closure_4 from "metro/00093__possibleConstructorReturn.js";
import closure_5 from "00095__getPrototypeOf.js";
import importDefaultResult from "metro/00042__createClass.js";
import _isNativeReflectConstruct from "08272__isNativeReflectConstruct.js";
import { jsx } from "react/00021_jsxProd.js";

const Text = arg1;
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
class Text {
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
      let tmp = matrix;
      if (matrix) {
        tmp = !matrix.matrix;
      }
      if (tmp) {
        tmp = closure_1_1(closure_1_2[8])(matrix);
      }
      if (tmp) {
        matrix.matrix = tmp;
      }
      const propsAndStylesResult = lib(closure_1_2[9]).propsAndStyles(matrix);
      const obj = lib(closure_1_2[9]);
      const merged = Object.assign(propsAndStylesResult, lib(closure_1_2[10]).pickNotNil(closure_1_1(closure_1_2[11])(propsAndStylesResult, true)));
      if (lib.root) {
        const root = lib.root;
        root.setNativeProps(propsAndStylesResult);
      }
    };
    return tmp3Result;
  }
}
_inheritsDefault(Text, _isNativeReflectConstructDefault);
let items = [
  {
    key: "render",
    value: function render() {
      let obj = Text(8188);
      const propsAndStylesResult = obj.propsAndStyles(this.props);
      obj = {};
      const merged = Object.assign(propsAndStylesResult);
      obj.x = null;
      obj.y = null;
      const tmp2Result = extractPropsDefault(obj, this);
      const merged1 = Object.assign(tmp2Result, extractFontDefault(propsAndStylesResult, true));
      tmp2Result.ref = this.refMethod;
      obj = {};
      const tmp2 = extractPropsDefault;
      const merged2 = Object.assign(tmp2Result);
      return jsx(__INTERNAL_VIEW_CONFIGDefault, {});
    }
  }
];
const importDefaultResultResult = importDefaultResult(Text, items);
importDefaultResultResult.displayName = "Text";

export default importDefaultResultResult;