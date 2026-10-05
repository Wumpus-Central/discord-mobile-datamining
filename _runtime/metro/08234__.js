// === Module 8234: ? ===

// Module 8234
import Fragment from "Fragment" /* 21 */;
import extractProps from "extractProps" /* 8151 */;
import extractTextDefault from "extractText" /* 8158 */;
import multiplyMatricesDefault from "multiplyMatrices" /* 8160 */;
import _modDef8237 from "module_8237" /* 8237 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import _possibleConstructorReturn from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;
import react from "react" /* 19 */;
import TSpan from "TSpan" /* 8235 */;

const extractPropsDefault = extractProps;

function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

    }));
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {
  }
}
const jsx = Fragment.jsx;
class Text {
  constructor() {
    let constructResult;
    const self = this;
    const items = [...arguments];
    let closure_0;
    let tmp = _classCallCheck(this, Text);
    const items1 = [...items];
    let obj = _getPrototypeOf(Text);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    const tmp3Result = _possibleConstructorReturn(self, constructResult);
    closure_0 = tmp3Result;
    tmp3Result.setNativeProps = (matrix) => {
      const tmp = matrix && !matrix.matrix && closure_2_1(closure_2_2[8])(matrix);
      if (tmp) {
        matrix.matrix = tmp;
      }
      const obj = Text(closure_2_2[9]);
      const propsAndStylesResult = obj.propsAndStyles(matrix);
      const obj2 = Text(closure_2_2[10]);
      assign(propsAndStylesResult, obj2.pickNotNil(closure_2_1(closure_2_2[11])(propsAndStylesResult, true)));
      if (closure_0.root) {
        const root = closure_0.root;
        root.setNativeProps(propsAndStylesResult);
      }
    };
    return tmp3Result;
  }
}
_inherits(Text, multiplyMatricesDefault);
const entry = {
  key: "render",
  value: function render() {
    const obj = extractProps;
    const propsAndStylesResult = obj.propsAndStyles(this.props);
    const obj2 = { x: null, y: null };
    const tmp2 = extractPropsDefault;
    const merged = Object.assign(propsAndStylesResult);
    const tmp2Result = tmp2(obj2, this);
    const merged1 = Object.assign(tmp2Result, extractTextDefault(propsAndStylesResult, true));
    tmp2Result.ref = this.refMethod;
    _modDef8237;
    const merged2 = Object.assign(tmp2Result);
    return <tmp6 />;
  }
};
let items = [entry];
const importDefaultResultResult = _createClass(Text, items);
importDefaultResultResult.displayName = "Text";

export default importDefaultResultResult;