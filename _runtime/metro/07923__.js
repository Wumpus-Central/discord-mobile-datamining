// === Module 7923: ? ===

// Module 7923
import _possibleConstructorReturnDefault from "_possibleConstructorReturn" /* 93 */;
import appendTransformPropsDefault from "appendTransformProps" /* 7917 */;
import extractPropsDefault from "extractProps" /* 7924 */;
import _modDef7932 from "module_7932" /* 7932 */;
import _modDef7933 from "module_7933" /* 7933 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;
import noop from "module_19" /* 19 */;

const G = fn;
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
const jsx = fn(21).jsx;
class G {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = closure_3(this, G);
    items1 = [...items];
    tmp2 = hasOwnProperty;
    obj = hasOwnProperty(G);
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
      matrix = matrix.matrix;
      let tmp = !matrix;
      if (!matrix) {
        tmp = appendTransformPropsDefault(matrix);
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
_inherits(G, _modDef7933);
const entry = {
  key: "render",
  value: function render() {
    const self = this;
    const props = this.props;
    const propsAndStylesResult = G(7924).propsAndStyles(props);
    const tmp5 = extractPropsDefault(propsAndStylesResult, this);
    const obj = G(7924);
    const extractFontResult = G(7931).extractFont(propsAndStylesResult);
    if (typeof hasProps === "function") {
      const keys = Object.keys();
      if (keys !== undefined) {
        let flag = true;
        if (flag) {
          tmp5.font = extractFontResult;
        }
        const obj3 = {
          ref(arg0) {
                return self.refMethod(arg0);
              }
        };
        const merged = Object.assign(tmp5);
        obj3.children = props.children;
        return jsx(_modDef7932, {
          ref(arg0) {
                return self.refMethod(arg0);
              }
        });
      }
      flag = false;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
    const obj2 = G(7931);
  }
};
let items = [entry];
const importDefaultResultResult = _createClass(G, items);
importDefaultResultResult.displayName = "G";
function hasProps(arg0) {

}

export default importDefaultResultResult;