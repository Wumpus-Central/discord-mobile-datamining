// === Module 8582: ? ===

// Module 8582
import _possibleConstructorReturnDefault from "_possibleConstructorReturn" /* 93 */;
import appendTransformPropsDefault from "appendTransformProps" /* 8492 */;
import extractPropsDefault from "extractProps" /* 8499 */;
import extractFontDefault from "extractFont" /* 8506 */;
import _modDef8508 from "module_8508" /* 8508 */;
import _modDef8585 from "module_8585" /* 8585 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;
import noop from "module_19" /* 19 */;

const Text = fn;
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
_isNativeReflectConstruct = fn(8583);
const jsx = fn(21).jsx;
class Text {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = closure_3(this, Text);
    items1 = [...items];
    tmp2 = hasOwnProperty;
    obj = hasOwnProperty(Text);
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
      const propsAndStylesResult = Text(8499).propsAndStyles(matrix);
      const obj = Text(8499);
      const merged = Object.assign(propsAndStylesResult, Text(8500).pickNotNil(extractFontDefault(propsAndStylesResult, true)));
      if (closure_0.root) {
        const root = closure_0.root;
        root.setNativeProps(propsAndStylesResult);
      }
      const obj2 = Text(8500);
    };
    return tmp3Result;
  }
}
_inherits(Text, _modDef8508);
const entry = {
  key: "render",
  value: function render() {
    let obj = Text(8499);
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
    return jsx(_modDef8585, {});
  }
};
let items = [entry];
const importDefaultResultResult = _createClass(Text, items);
importDefaultResultResult.displayName = "Text";

export default importDefaultResultResult;