import { extractProps } from "08452_extractProps.js";
import { extractFont } from "08459_extractFont.js";
import { __INTERNAL_VIEW_CONFIG } from "metro/08537___INTERNAL_VIEW_CONFIG.js";
// _runtime/08536__isNativeReflectConstruct.js
import _classCallCheck from "_classCallCheck";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import importDefaultResult from "_createClass";
import "noop";
import { jsx } from "jsxProd";
import extractFont from "extractFont";

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
    let closure_0 = !callResult;
    function _isNativeReflectConstruct() {
      return closure_0;
    }
    return _isNativeReflectConstruct();
  } catch (err) {
  }
}
class TSpan {
  constructor() {
    self = this;
    items = [...arguments];
    apply = undefined;
    tmp = _isNativeReflectConstruct(this, apply);
    items1 = [...items];
    tmp2 = _isNativeReflectConstruct;
    obj = _isNativeReflectConstruct(apply);
    tmp3 = _isNativeReflectConstruct;
    if (_isNativeReflectConstruct()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    tmp3Result = tmp3(self, constructResult);
    apply = tmp3Result;
    tmp3Result.setNativeProps = (matrix) => {
      matrix = matrix.matrix;
      let tmp = !matrix;
      if (!matrix) {
        tmp = outer1_1(outer1_2[7])(matrix);
      }
      if (tmp) {
        matrix.matrix = tmp;
      }
      const propsAndStylesResult = _undefined(outer1_2[8]).propsAndStyles(matrix);
      const obj = _undefined(outer1_2[8]);
      const merged = Object.assign(propsAndStylesResult, _undefined(outer1_2[9]).pickNotNil(outer1_1(outer1_2[10])(propsAndStylesResult, false)));
      if (_undefined.root) {
        const root = _undefined.root;
        root.setNativeProps(propsAndStylesResult);
      }
    };
    return tmp3Result;
  }
}
require("_inherits")(TSpan, require("_isNativeReflectConstruct"));
let items = [
  {
    key: "render",
    value: function render() {
      let obj = TSpan(8452);
      const propsAndStylesResult = obj.propsAndStyles(this.props);
      obj = {};
      const merged = Object.assign(propsAndStylesResult);
      obj.x = null;
      obj.y = null;
      const tmp2Result = extractProps(obj, this);
      const merged1 = Object.assign(tmp2Result, extractFont(propsAndStylesResult, false));
      tmp2Result.ref = this.refMethod;
      obj = {};
      const tmp2 = extractProps;
      const merged2 = Object.assign(tmp2Result);
      return jsx(__INTERNAL_VIEW_CONFIG, {});
    }
  }
];
const importDefaultResultResult = importDefaultResult(TSpan, items);
importDefaultResultResult.displayName = "TSpan";
extractFont.setTSpan(importDefaultResultResult);

export default importDefaultResultResult;