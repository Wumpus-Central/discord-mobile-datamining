// === Module 8008: ? ===

// Module 8008
import _possibleConstructorReturnDefault from "_possibleConstructorReturn" /* 93 */;
import appendTransformPropsDefault from "appendTransformProps" /* 7917 */;
import extractPropsDefault from "extractProps" /* 7924 */;
import extractFontDefault from "extractFont" /* 7931 */;
import _modDef7933 from "module_7933" /* 7933 */;
import _modDef8009 from "module_8009" /* 8009 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;
import noop from "module_19" /* 19 */;

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
_possibleConstructorReturnDefault;
const jsx = fn(21).jsx;
class TSpan {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = closure_3(this, TSpan);
    items1 = [...items];
    tmp2 = hasOwnProperty;
    obj = hasOwnProperty(TSpan);
    tmp3 = closure_4;
    if (closure_7()) {
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
      const propsAndStylesResult = TSpan(7924).propsAndStyles(matrix);
      const obj = TSpan(7924);
      const merged = Object.assign(propsAndStylesResult, TSpan(7925).pickNotNil(extractFontDefault(propsAndStylesResult, false)));
      if (closure_0.root) {
        const root = closure_0.root;
        root.setNativeProps(propsAndStylesResult);
      }
      const obj2 = TSpan(7925);
    };
    return tmp3Result;
  }
}
_inherits(TSpan, _modDef7933);
const entry = {
  key: "render",
  value: function render() {
    const propsAndStylesResult = TSpan(7924).propsAndStyles(this.props);
    const obj2 = {};
    const obj = TSpan(7924);
    const merged = Object.assign(propsAndStylesResult);
    obj2.x = null;
    obj2.y = null;
    const tmp2Result = extractPropsDefault(obj2, this);
    const merged1 = Object.assign(tmp2Result, extractFontDefault(propsAndStylesResult, false));
    tmp2Result.ref = this.refMethod;
    const obj3 = {};
    const merged2 = Object.assign(tmp2Result);
    return jsx(_modDef8009, {});
  }
};
let items = [entry];
const importDefaultResultResult = _createClass(TSpan, items);
importDefaultResultResult.displayName = "TSpan";
const extractFont = fn(7931);
extractFont.setTSpan(importDefaultResultResult);

export default importDefaultResultResult;