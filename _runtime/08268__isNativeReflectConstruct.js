// === Module 8268: _isNativeReflectConstruct ===

// Module 8268 (_isNativeReflectConstruct)
import noopAll from "noop" /* 19 */;
import _inheritsDefault from "_inherits" /* 98 */;
import extractPropsDefault from "extractProps" /* 8269 */;
import __INTERNAL_VIEW_CONFIGDefault from "__INTERNAL_VIEW_CONFIG" /* 8277 */;
import _isNativeReflectConstructDefault from "_isNativeReflectConstruct" /* 8278 */;
import closure_3 from "_classCallCheck" /* 41 */;
import closure_4 from "_possibleConstructorReturn" /* 93 */;
import closure_5 from "_getPrototypeOf" /* 95 */;
import importDefaultResult from "_createClass" /* 42 */;
import { jsx } from "jsxProd" /* 21 */;

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
    closure_0 = !callResult;
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {
  }
}
noopAll;
class G {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = closure_3(this, closure_0);
    items1 = [...items];
    tmp2 = closure_5;
    obj = closure_5(closure_0);
    tmp3 = closure_4;
    if (_isNativeReflectConstruct()) {
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
        tmp = closure_1_1(closure_1_2[7])(matrix);
      }
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
closure_0 = G;
_inheritsDefault(G, _isNativeReflectConstructDefault);
let items = [
  {
    key: "render",
    value: function render() {
      const self = this;
      const props = this.props;
      let obj = self(8269);
      const propsAndStylesResult = obj.propsAndStyles(props);
      const tmp5 = extractPropsDefault(propsAndStylesResult, this);
      const obj2 = self(8276);
      const tmp4 = importDefault;
      if (typeof hasProps !== "function") {
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
        return jsx(__INTERNAL_VIEW_CONFIGDefault, { ref: null });
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