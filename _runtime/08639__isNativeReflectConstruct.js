// _runtime/08639__isNativeReflectConstruct.js
import _classCallCheck from "_classCallCheck";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import importDefaultResult from "_createClass";
import "noop";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { jsx } from "jsxProd";

const Text = arg1;
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
    let closure_0 = !callResult;
    function _isNativeReflectConstruct() {
      return closure_0;
    }
    return _isNativeReflectConstruct();
  } catch (err) {
  }
}
class Text {
  constructor() {
    self = this;
    items = [...arguments];
    apply = undefined;
    tmp = _isNativeReflectConstruct(this, apply);
    items1 = [...items];
    tmp2 = __esModule;
    obj = __esModule(apply);
    tmp3 = __esModule;
    if (_isNativeReflectConstruct()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    tmp3Result = tmp3(self, constructResult);
    apply = tmp3Result;
    tmp3Result.setNativeProps = (matrix) => {
      let tmp = matrix;
      if (matrix) {
        tmp = !matrix.matrix;
      }
      if (tmp) {
        tmp = outer1_1(outer1_2[8])(matrix);
      }
      if (tmp) {
        matrix.matrix = tmp;
      }
      const propsAndStylesResult = _undefined(outer1_2[9]).propsAndStyles(matrix);
      const obj = _undefined(outer1_2[9]);
      const merged = Object.assign(propsAndStylesResult, _undefined(outer1_2[10]).pickNotNil(outer1_1(outer1_2[11])(propsAndStylesResult, true)));
      if (_undefined.root) {
        const root = _undefined.root;
        root.setNativeProps(propsAndStylesResult);
      }
    };
    return tmp3Result;
  }
}
require("_inherits")(Text, require("_isNativeReflectConstruct"));
let items = [
  {
    key: "render",
    value: function render() {
      let obj = Text(8556);
      const propsAndStylesResult = obj.propsAndStyles(this.props);
      obj = {};
      const merged = Object.assign(propsAndStylesResult);
      obj.x = null;
      obj.y = null;
      const tmp2Result = importDefault(8556)(obj, this);
      const merged1 = Object.assign(tmp2Result, importDefault(8563)(propsAndStylesResult, true));
      tmp2Result.ref = this.refMethod;
      obj = {};
      const tmp2 = importDefault(8556);
      const merged2 = Object.assign(tmp2Result);
      return jsx(importDefault(8642), {});
    }
  }
];
const importDefaultResultResult = importDefaultResult(Text, items);
importDefaultResultResult.displayName = "Text";

export default importDefaultResultResult;