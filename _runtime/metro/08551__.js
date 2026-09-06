// _runtime/metro/08551__.js
import _possibleConstructorReturnDefault from "00093__possibleConstructorReturn.js";
import appendTransformPropsDefault from "../08461_appendTransformProps.js";
import extractPropsDefault from "../08468_extractProps.js";
import extractFontDefault from "../08475_extractFont.js";
import _modDef8477 from "08477__.js";
import _modDef8554 from "08554__.js";
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";
import _getPrototypeOf from "../00095__getPrototypeOf.js";
import _inherits from "../00098__inherits.js";
import noop from "00019__.js";

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
  } catch (err) {}
}
_possibleConstructorReturnDefault;
_isNativeReflectConstruct = fn(8552);
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
      const propsAndStylesResult = Text(8468).propsAndStyles(matrix);
      const obj = Text(8468);
      const merged = Object.assign(
        propsAndStylesResult,
        Text(8469).pickNotNil(extractFontDefault(propsAndStylesResult, true)),
      );
      if (closure_0.root) {
        const root = closure_0.root;
        root.setNativeProps(propsAndStylesResult);
      }
      const obj2 = Text(8469);
    };
    return tmp3Result;
  }
}
_inherits(Text, _modDef8477);
const entry = {
  key: "render",
  value: function render() {
    let obj = Text(8468);
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
    return jsx(_modDef8554, {});
  },
};
let items = [entry];
const importDefaultResultResult = _createClass(Text, items);
importDefaultResultResult.displayName = "Text";

export default importDefaultResultResult;
