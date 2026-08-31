// _runtime/08295__isNativeReflectConstruct.js
import noopAll from "00019_noop.js";
import _inheritsDefault from "00098__inherits.js";
import _isNativeReflectConstructDefault from "08233__isNativeReflectConstruct.js";
import closure_2 from "metro/00041__classCallCheck.js";
import closure_3 from "metro/00093__possibleConstructorReturn.js";
import closure_4 from "00095__getPrototypeOf.js";
import importDefaultResult from "metro/00042__createClass.js";
import { jsx } from "react/00021_jsxProd.js";

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
    closure_0 = !callResult;
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {
  }
}
noopAll;
class Pattern {
  constructor() {
    self = this;
    tmp = closure_2(this, Pattern);
    tmp2 = closure_4;
    obj = closure_4(Pattern);
    tmp3 = closure_3;
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
_inheritsDefault(Pattern, _isNativeReflectConstructDefault);
const items = [
  {
    key: "render",
    value: function render() {
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
      const tmp3Result = self(8217)(patternTransform);
      let obj = { x, y, width, height, name: id, matrix: tmp3Result, patternTransform: tmp3Result, patternUnits: null, patternContentUnits: null };
      let num = patternUnits;
      if (patternUnits) {
        num = tmp(8287)[patternUnits];
      }
      if (!num) {
        num = 0;
      }
      obj[7] = num;
      let num2 = 1;
      if (patternContentUnits) {
        num2 = tmp(8287)[patternContentUnits];
      }
      obj[8] = num2;
      obj = {
        ref(arg0) {
          return self.refMethod(arg0);
        }
      };
      const tmp3 = self(8217);
      const merged = Object.assign(obj);
      const merged1 = Object.assign(tmp(8222)({ viewBox, preserveAspectRatio }));
      obj.children = children;
      return jsx(self(8296), {
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