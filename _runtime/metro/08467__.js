// === Module 8467: ? ===

// Module 8467
import _possibleConstructorReturnDefault from "_possibleConstructorReturn" /* 93 */;
import appendTransformPropsDefault from "appendTransformProps" /* 8461 */;
import extractPropsDefault from "extractProps" /* 8468 */;
import _modDef8476 from "module_8476" /* 8476 */;
import _modDef8477 from "module_8477" /* 8477 */;
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
_inherits(G, _modDef8477);
const entry = {
  key: "render",
  value: function render() {
    const self = this;
    const props = this.props;
    let obj = G(8468);
    const propsAndStylesResult = obj.propsAndStyles(props);
    const tmp5 = extractPropsDefault(propsAndStylesResult, this);
    const extractFontResult = G(8475).extractFont(propsAndStylesResult);
    if (typeof hasProps === "function") {
      const keys = Object.keys();
      if (keys !== undefined) {
        let flag = true;
        if (flag) {
          tmp5.font = extractFontResult;
        }
        obj = {
          ref(arg0) {
                return self.refMethod(arg0);
              }
        };
        const merged = Object.assign(tmp5);
        obj.children = props.children;
        return jsx(_modDef8476, {
          ref(arg0) {
                return self.refMethod(arg0);
              }
        });
      }
      flag = false;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
    const obj2 = G(8475);
  }
};
let items = [entry];
const importDefaultResultResult = _createClass(G, items);
importDefaultResultResult.displayName = "G";
function hasProps(arg0) {

}

export default importDefaultResultResult;