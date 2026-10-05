// _runtime/08235_TSpan.js
import Fragment from "react/00021_Fragment.js";
import extractProps from "08151_extractProps.js";
import extractTextDefault from "08158_extractText.js";
import multiplyMatricesDefault from "08160_multiplyMatrices.js";
import _modDef8236 from "metro/08236__.js";
import _classCallCheck from "metro/00041__classCallCheck.js";
import _createClass from "metro/00042__createClass.js";
import _possibleConstructorReturn from "metro/00093__possibleConstructorReturn.js";
import _getPrototypeOf from "00095__getPrototypeOf.js";
import _inherits from "00098__inherits.js";
import react from "00019_react.js";

const extractPropsDefault = extractProps;
const extractText = extractTextDefault;

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
class TSpan {
  constructor() {
    let constructResult;
    const self = this;
    const items = [...arguments];
    let closure_0;
    let tmp = _classCallCheck(this, TSpan);
    const items1 = [...items];
    let obj = _getPrototypeOf(TSpan);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    const tmp3Result = _possibleConstructorReturn(self, constructResult);
    closure_0 = tmp3Result;
    tmp3Result.setNativeProps = (matrix) => {
      const tmp = !matrix.matrix && closure_2_1(closure_2_2[7])(matrix);
      if (tmp) {
        matrix.matrix = tmp;
      }
      const obj = TSpan(closure_2_2[8]);
      const propsAndStylesResult = obj.propsAndStyles(matrix);
      const obj2 = TSpan(closure_2_2[9]);
      assign(propsAndStylesResult, obj2.pickNotNil(closure_2_1(closure_2_2[10])(propsAndStylesResult, false)));
      if (closure_0.root) {
        const root = closure_0.root;
        root.setNativeProps(propsAndStylesResult);
      }
    };
    return tmp3Result;
  }
}
_inherits(TSpan, multiplyMatricesDefault);
const entry = {
  key: "render",
  value: function render() {
    const obj = extractProps;
    const propsAndStylesResult = obj.propsAndStyles(this.props);
    const obj2 = { x: null, y: null };
    const tmp2 = extractPropsDefault;
    const merged = Object.assign(propsAndStylesResult);
    const tmp2Result = tmp2(obj2, this);
    const merged1 = Object.assign(tmp2Result, extractTextDefault(propsAndStylesResult, false));
    tmp2Result.ref = this.refMethod;
    _modDef8236;
    const merged2 = Object.assign(tmp2Result);
    return <tmp6 />;
  },
};
let items = [entry];
const importDefaultResultResult = _createClass(TSpan, items);
importDefaultResultResult.displayName = "TSpan";
extractText.setTSpan(importDefaultResultResult);

export default importDefaultResultResult;
