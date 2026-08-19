// _runtime/06669__isNativeReflectConstruct.js
import noopAll from "00019_noop.js";
import _inheritsDefault from "00098__inherits.js";
import appendTransformPropsDefault from "06579_appendTransformProps.js";
import extractPropsDefault from "06586_extractProps.js";
import extractFontDefault from "06593_extractFont.js";
import _isNativeReflectConstructDefault from "06595__isNativeReflectConstruct.js";
import __INTERNAL_VIEW_CONFIGDefault from "metro/06672___INTERNAL_VIEW_CONFIG.js";
import _classCallCheck from "metro/00041__classCallCheck.js";
import _possibleConstructorReturn from "metro/00093__possibleConstructorReturn.js";
import _getPrototypeOf from "00095__getPrototypeOf.js";
import importDefaultResult from "metro/00042__createClass.js";
import _isNativeReflectConstruct from "06670__isNativeReflectConstruct.js";
import { jsx } from "react/00021_jsxProd.js";

const Text = fn;
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
        tmp = appendTransformPropsDefault(matrix);
      }
      if (tmp) {
        matrix.matrix = tmp;
      }
      const propsAndStylesResult = lib(dependencyMap[9]).propsAndStyles(matrix);
      const obj = lib(dependencyMap[9]);
      const merged = Object.assign(propsAndStylesResult, lib(dependencyMap[10]).pickNotNil(extractFontDefault(propsAndStylesResult, true)));
      if (lib.root) {
        const root = lib.root;
        root.setNativeProps(propsAndStylesResult);
      }
      const obj2 = lib(dependencyMap[10]);
    };
    return tmp3Result;
  }
}
_inheritsDefault(Text, _isNativeReflectConstructDefault);
let items = [
  {
    key: "render",
    value: function render() {
      let obj = Text(6586);
      const propsAndStylesResult = obj.propsAndStyles(this.props);
      obj = {};
      const merged = Object.assign(propsAndStylesResult);
      obj.x = null;
      obj.y = null;
      const tmp2Result = extractPropsDefault(obj, this);
      const merged1 = Object.assign(tmp2Result, extractFontDefault(propsAndStylesResult, true));
      tmp2Result.ref = this.refMethod;
      obj = {};
      const merged2 = Object.assign(tmp2Result);
      return jsx(__INTERNAL_VIEW_CONFIGDefault, {});
    }
  }
];
const importDefaultResultResult = importDefaultResult(Text, items);
importDefaultResultResult.displayName = "Text";

export default importDefaultResultResult;