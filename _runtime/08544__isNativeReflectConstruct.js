// _runtime/08544__isNativeReflectConstruct.js
import noopAll from "00019_noop.js";
import _inheritsDefault from "00098__inherits.js";
import _isNativeReflectConstructDefault from "08477__isNativeReflectConstruct.js";
import closure_2 from "metro/00041__classCallCheck.js";
import closure_3 from "metro/00093__possibleConstructorReturn.js";
import closure_4 from "00095__getPrototypeOf.js";
import importDefaultResult from "metro/00042__createClass.js";
import { jsx } from "react/00021_jsxProd.js";

const RadialGradient = importDefault;
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
  } catch (err) {}
}
noopAll;
class RadialGradient {
  constructor() {
    self = this;
    tmp = closure_2(this, RadialGradient);
    tmp2 = closure_4;
    obj = closure_4(RadialGradient);
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
_inheritsDefault(RadialGradient, _isNativeReflectConstructDefault);
const items = [
  {
    key: "render",
    value: function render() {
      const self = this;
      const props = this.props;
      ({ rx, ry, r, cx, cy, fx } = props);
      if (undefined === fx) {
        fx = cx;
      }
      let fy = props.fy;
      let obj = { fx, fy: null, rx: null, ry: null, cx: null, cy: null };
      if (undefined === fy) {
        fy = cy;
      }
      obj[1] = fy;
      if (!rx) {
        rx = r;
      }
      obj[2] = rx;
      if (!ry) {
        ry = r;
      }
      obj[3] = ry;
      obj[4] = cx;
      obj[5] = cy;
      obj = {
        ref(arg0) {
          return self.refMethod(arg0);
        },
      };
      const merged = Object.assign(obj);
      const merged1 = Object.assign(self(8530)(props, this));
      return jsx(self(8545), {
        ref(arg0) {
          return self.refMethod(arg0);
        },
      });
    },
  },
];
const importDefaultResultResult = importDefaultResult(RadialGradient, items);
importDefaultResultResult.displayName = "RadialGradient";
importDefaultResultResult.defaultProps = { cx: "50%", cy: "50%", r: "50%" };

export default importDefaultResultResult;
