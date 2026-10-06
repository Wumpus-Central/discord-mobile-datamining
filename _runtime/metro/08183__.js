// _runtime/metro/08183__.js
import Fragment from "../react/00021_Fragment.js";
import extractProps from "../08184_extractProps.js";
import extractText from "../08191_extractText.js";
import _modDef8192 from "08192__.js";
import multiplyMatricesDefault from "../08193_multiplyMatrices.js";
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";
import _possibleConstructorReturn from "00093__possibleConstructorReturn.js";
import _getPrototypeOf from "../00095__getPrototypeOf.js";
import _inherits from "../00098__inherits.js";
import react from "../00019_react.js";

const extractPropsDefault = extractProps;
let root;

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
class G {
  constructor() {
    let constructResult;
    const self = this;
    const items = [...arguments];
    let closure_0;
    let tmp = _classCallCheck(this, G);
    const items1 = [...items];
    const obj = _getPrototypeOf(G);
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
      root = root.root;
      if (root != null) {
        root.setNativeProps(matrix);
      }
    };
    return tmp3Result;
  }
}
_inherits(G, multiplyMatricesDefault);
const entry = {
  key: "render",
  value: function render() {
    const self = this;
    const props = this.props;
    const obj = extractProps;
    const propsAndStylesResult = obj.propsAndStyles(props);
    const tmp5 = extractPropsDefault(propsAndStylesResult, this);
    const obj2 = extractText;
    const extractFontResult = obj2.extractFont(propsAndStylesResult);
    if (typeof hasProps === "function") {
      const keys = Object.keys();
      if (keys !== undefined) {
        let flag = true;
        if (flag) {
          tmp5.font = extractFontResult;
        }
        _modDef8192;
        const merged = Object.assign(tmp5);
        return (
          <tmp4Result
            ref={function ref(arg0) {
              return self.refMethod(arg0);
            }}
          >
            {props.children}
          </tmp4Result>
        );
      }
      flag = false;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  },
};
let items = [entry];
const importDefaultResultResult = _createClass(G, items);
importDefaultResultResult.displayName = "G";
function hasProps(arg0) {}

export default importDefaultResultResult;
