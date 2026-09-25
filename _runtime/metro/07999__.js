// === Module 7999: ? ===

// Module 7999
import _possibleConstructorReturnDefault from "_possibleConstructorReturn" /* 93 */;
import appendTransformPropsDefault from "appendTransformProps" /* 7909 */;
import extractPropsDefault from "extractProps" /* 7916 */;
import extractFontDefault from "extractFont" /* 7923 */;
import _modDef7925 from "module_7925" /* 7925 */;
import _modDef8002 from "module_8002" /* 8002 */;
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
_isNativeReflectConstruct = fn(8000);
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
      const propsAndStylesResult = Text(7916).propsAndStyles(matrix);
      const obj = Text(7916);
      const merged = Object.assign(propsAndStylesResult, Text(7917).pickNotNil(extractFontDefault(propsAndStylesResult, true)));
      if (closure_0.root) {
        const root = closure_0.root;
        root.setNativeProps(propsAndStylesResult);
      }
      const obj2 = Text(7917);
    };
    return tmp3Result;
  }
}
_inherits(Text, _modDef7925);
const entry = {
  key: "render",
  value: function render() {
    const propsAndStylesResult = Text(7916).propsAndStyles(this.props);
    const obj2 = {};
    const obj = Text(7916);
    const merged = Object.assign(propsAndStylesResult);
    obj2.x = null;
    obj2.y = null;
    const tmp2Result = extractPropsDefault(obj2, this);
    const merged1 = Object.assign(tmp2Result, extractFontDefault(propsAndStylesResult, true));
    tmp2Result.ref = this.refMethod;
    const obj3 = {};
    const merged2 = Object.assign(tmp2Result);
    return jsx(_modDef8002, {});
  }
};
let items = [entry];
const importDefaultResultResult = _createClass(Text, items);
importDefaultResultResult.displayName = "Text";

export default importDefaultResultResult;