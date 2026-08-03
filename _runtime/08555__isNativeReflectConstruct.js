import _classCallCheck from "_classCallCheck";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import importDefaultResult from "_createClass";
import "noop";
import { jsx } from "jsxProd";

let closure_0 = arg1;
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
class G {
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
      matrix = matrix.matrix;
      let tmp = !matrix;
      if (!matrix) {
        tmp = outer1_1(outer1_2[7])(matrix);
      }
      if (tmp) {
        matrix.matrix = tmp;
      }
      const root = _undefined.root;
      if (root != null) {
        root.setNativeProps(matrix);
      }
    };
    return tmp3Result;
  }
}
closure_0 = G;
require("_inherits")(G, require("_isNativeReflectConstruct"));
let items = [
  {
    key: "render",
    value: function render() {
      const self = this;
      const props = this.props;
      let obj = self(8556);
      const propsAndStylesResult = obj.propsAndStyles(props);
      const tmp5 = importDefault(8556)(propsAndStylesResult, this);
      const obj2 = self(8563);
      const tmp4 = importDefault;
      if (typeof hasProps !== "fileFinishedImporting") {
        HermesBuiltin.throwTypeError();
      }
      const keys = Object.keys();
      if (keys !== undefined) {
        let flag = true;
        if (flag) {
          tmp5.font = extractFontResult;
        }
        obj = { ref: null };
        obj[0] = function ref(arg0) {
          return self.refMethod(arg0);
        };
        const merged = Object.assign(tmp5);
        obj.children = props.children;
        return jsx(tmp4(8564), { ref: null });
      }
      flag = false;
    }
  }
];
const importDefaultResultResult = importDefaultResult(G, items);
importDefaultResultResult.displayName = "G";
function hasProps(arg0) {

}

export default importDefaultResultResult;