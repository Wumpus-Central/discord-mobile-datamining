// _runtime/metro/08234__.js
import Fragment from "../react/00021_Fragment.js";
import extractProps from "../08151_extractProps.js";
import extractTextDefault from "../08158_extractText.js";
import multiplyMatricesDefault from "../08160_multiplyMatrices.js";
import _modDef8237 from "08237__.js";
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";
import _possibleConstructorReturn from "00093__possibleConstructorReturn.js";
import _getPrototypeOf from "../00095__getPrototypeOf.js";
import _inherits from "../00098__inherits.js";
import react from "../00019_react.js";
import TSpan from "../08235_TSpan.js";

const extractPropsDefault = extractProps;

function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {}));
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {}
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
  },
};
let items = [entry];
const importDefaultResultResult = _createClass(Text, items);
importDefaultResultResult.displayName = "Text";

export default importDefaultResultResult;
