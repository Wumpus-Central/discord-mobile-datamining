// === Module 8552: ? ===

// Module 8552
import _possibleConstructorReturnDefault from "_possibleConstructorReturn" /* 93 */;
import appendTransformPropsDefault from "appendTransformProps" /* 8461 */;
import extractPropsDefault from "extractProps" /* 8468 */;
import extractFontDefault from "extractFont" /* 8475 */;
import _modDef8477 from "module_8477" /* 8477 */;
import _modDef8553 from "module_8553" /* 8553 */;
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
      const propsAndStylesResult = TSpan(8468).propsAndStyles(matrix);
      const obj = TSpan(8468);
      const merged = Object.assign(propsAndStylesResult, TSpan(8469).pickNotNil(extractFontDefault(propsAndStylesResult, false)));
      if (closure_0.root) {
        const root = closure_0.root;
        root.setNativeProps(propsAndStylesResult);
      }
    };
    return tmp3Result;
  }
}
_inherits(TSpan, _modDef8477);
const entry = {
  key: "render",
  value: function render() {
    let obj = TSpan(8468);
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
    return jsx(_modDef8553, {});
  }
};
let items = [entry];
const importDefaultResultResult = _createClass(TSpan, items);
importDefaultResultResult.displayName = "TSpan";
const extractFont = fn(8475);
extractFont.setTSpan(importDefaultResultResult);

export default importDefaultResultResult;