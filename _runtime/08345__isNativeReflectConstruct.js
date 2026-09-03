// === Module 8345: _isNativeReflectConstruct ===

// Module 8345 (_isNativeReflectConstruct)
import noopAll from "noop" /* 19 */;
import _inheritsDefault from "_inherits" /* 98 */;
import _isNativeReflectConstructDefault from "_isNativeReflectConstruct" /* 8278 */;
import closure_2 from "_classCallCheck" /* 41 */;
import closure_3 from "_possibleConstructorReturn" /* 93 */;
import closure_4 from "_getPrototypeOf" /* 95 */;
import importDefaultResult from "_createClass" /* 42 */;
import { jsx } from "jsxProd" /* 21 */;

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
  } catch (err) {
  }
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
        }
      };
      const merged = Object.assign(obj);
      const merged1 = Object.assign(self(8331)(props, this));
      return jsx(self(8346), {
        ref(arg0) {
          return self.refMethod(arg0);
        }
      });
    }
  }
];
const importDefaultResultResult = importDefaultResult(RadialGradient, items);
importDefaultResultResult.displayName = "RadialGradient";
importDefaultResultResult.defaultProps = { cx: "50%", cy: "50%", r: "50%" };

export default importDefaultResultResult;