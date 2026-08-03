// === Module 8282: _isNativeReflectConstruct ===

// Module 8282 (_isNativeReflectConstruct)
import _classCallCheck from "_classCallCheck";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import importDefaultResult from "_createClass";
import "noop";
import { jsx } from "jsxProd";

const Pattern = importDefault;
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
class Pattern {
  constructor() {
    self = this;
    tmp = _isNativeReflectConstruct(this, Pattern);
    tmp2 = __esModule;
    obj = __esModule(Pattern);
    tmp3 = __esModule;
    if (_isNativeReflectConstruct()) {
      tmp7 = globalThis;
      _Reflect = Reflect;
      tmp8 = arguments;
      constructResult = Reflect.construct(obj, arguments, tmp2(self).constructor);
    } else {
      tmp4 = arguments;
      tmp5 = arguments;
      constructResult = obj(...arguments);
    }
    return tmp3(self, constructResult);
  }
}
require("_inherits")(Pattern, require("_isNativeReflectConstruct"));
const items = [
  {
    key: "render",
    value: function render() {
      let children;
      let height;
      let id;
      let patternContentUnits;
      let patternTransform;
      let patternUnits;
      let preserveAspectRatio;
      let transform;
      let viewBox;
      let width;
      let x;
      let y;
      const self = this;
      const props = this.props;
      ({ patternTransform, patternUnits, patternContentUnits } = props);
      ({ transform, id, x, y, width, height, children, viewBox, preserveAspectRatio } = props);
      if (!patternTransform) {
        patternTransform = transform;
      }
      if (!patternTransform) {
        patternTransform = props;
      }
      const tmp3Result = self(8204)(patternTransform);
      let obj = { x, y, width, height, name: id, matrix: tmp3Result, patternTransform: tmp3Result, patternUnits: null, patternContentUnits: null };
      let num = patternUnits;
      if (patternUnits) {
        num = tmp(8274)[patternUnits];
      }
      if (!num) {
        num = 0;
      }
      obj[7] = num;
      let num2 = 1;
      if (patternContentUnits) {
        num2 = tmp(8274)[patternContentUnits];
      }
      obj[8] = num2;
      obj = {
        ref(arg0) {
          return self.refMethod(arg0);
        }
      };
      const tmp3 = self(8204);
      const merged = Object.assign(obj);
      const merged1 = Object.assign(tmp(8209)({ viewBox, preserveAspectRatio }));
      obj.children = children;
      return jsx(self(8283), {
        ref(arg0) {
          return self.refMethod(arg0);
        }
      });
    }
  }
];
const importDefaultResultResult = importDefaultResult(Pattern, items);
importDefaultResultResult.displayName = "Pattern";
importDefaultResultResult.defaultProps = { x: "0%", y: "0%", width: "100%", height: "100%" };

export default importDefaultResultResult;