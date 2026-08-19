// === Module 6670: _isNativeReflectConstruct ===

// Module 6670 (_isNativeReflectConstruct)
import noopAll from "noop" /* 19 */;
import _inheritsDefault from "_inherits" /* 98 */;
import appendTransformPropsDefault from "appendTransformProps" /* 6579 */;
import extractPropsDefault from "extractProps" /* 6586 */;
import extractFontDefault from "extractFont" /* 6593 */;
import _isNativeReflectConstructDefault from "_isNativeReflectConstruct" /* 6595 */;
import __INTERNAL_VIEW_CONFIGDefault from "__INTERNAL_VIEW_CONFIG" /* 6671 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _possibleConstructorReturn from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import importDefaultResult from "_createClass" /* 42 */;
import { jsx } from "jsxProd" /* 21 */;
import extractFont from "extractFont" /* 6593 */;

const TSpan = fn;
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
        tmp = appendTransformPropsDefault(matrix);
      }
      if (tmp) {
        matrix.matrix = tmp;
      }
      const propsAndStylesResult = lib(dependencyMap[8]).propsAndStyles(matrix);
      const obj = lib(dependencyMap[8]);
      const merged = Object.assign(propsAndStylesResult, lib(dependencyMap[9]).pickNotNil(extractFontDefault(propsAndStylesResult, false)));
      if (lib.root) {
        const root = lib.root;
        root.setNativeProps(propsAndStylesResult);
      }
      const obj2 = lib(dependencyMap[9]);
    };
    return tmp3Result;
  }
}
_inheritsDefault(TSpan, _isNativeReflectConstructDefault);
let items = [
  {
    key: "render",
    value: function render() {
      let obj = TSpan(6586);
      const propsAndStylesResult = obj.propsAndStyles(this.props);
      obj = {};
      const merged = Object.assign(propsAndStylesResult);
      obj.x = null;
      obj.y = null;
      const tmp2Result = extractPropsDefault(obj, this);
      const merged1 = Object.assign(tmp2Result, extractFontDefault(propsAndStylesResult, false));
      tmp2Result.ref = this.refMethod;
      obj = {};
      const merged2 = Object.assign(tmp2Result);
      return jsx(__INTERNAL_VIEW_CONFIGDefault, {});
    }
  }
];
const importDefaultResultResult = importDefaultResult(TSpan, items);
importDefaultResultResult.displayName = "TSpan";
extractFont.setTSpan(importDefaultResultResult);

export default importDefaultResultResult;