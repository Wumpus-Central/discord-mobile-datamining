// === Module 8116: ? ===

// Module 8116
import _possibleConstructorReturnDefault from "_possibleConstructorReturn" /* 93 */;
import appendTransformPropsDefault from "appendTransformProps" /* 8025 */;
import extractPropsDefault from "extractProps" /* 8032 */;
import extractFontDefault from "extractFont" /* 8039 */;
import _modDef8041 from "module_8041" /* 8041 */;
import _modDef8117 from "module_8117" /* 8117 */;
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
      const propsAndStylesResult = TSpan(8032).propsAndStyles(matrix);
      const obj = TSpan(8032);
      const merged = Object.assign(propsAndStylesResult, TSpan(8033).pickNotNil(extractFontDefault(propsAndStylesResult, false)));
      if (closure_0.root) {
        const root = closure_0.root;
        root.setNativeProps(propsAndStylesResult);
      }
      const obj2 = TSpan(8033);
    };
    return tmp3Result;
  }
}
_inherits(TSpan, _modDef8041);
const entry = {
  key: "render",
  value: function render() {
    const propsAndStylesResult = TSpan(8032).propsAndStyles(this.props);
    const obj2 = {};
    const obj = TSpan(8032);
    const merged = Object.assign(propsAndStylesResult);
    obj2.x = null;
    obj2.y = null;
    const tmp2Result = extractPropsDefault(obj2, this);
    const merged1 = Object.assign(tmp2Result, extractFontDefault(propsAndStylesResult, false));
    tmp2Result.ref = this.refMethod;
    const obj3 = {};
    const merged2 = Object.assign(tmp2Result);
    return jsx(_modDef8117, {});
  }
};
let items = [entry];
const importDefaultResultResult = _createClass(TSpan, items);
importDefaultResultResult.displayName = "TSpan";
const extractFont = fn(8039);
extractFont.setTSpan(importDefaultResultResult);

export default importDefaultResultResult;