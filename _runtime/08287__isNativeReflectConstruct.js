import _classCallCheck from "_classCallCheck";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import importDefaultResult from "_createClass";
import "noop";
import { jsx } from "jsxProd";

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
    let closure_0 = !callResult;
    function _isNativeReflectConstruct() {
      return closure_0;
    }
    return _isNativeReflectConstruct();
  } catch (err) {
  }
}
class RadialGradient {
  constructor() {
    self = this;
    tmp = _isNativeReflectConstruct(this, RadialGradient);
    tmp2 = __esModule;
    obj = __esModule(RadialGradient);
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
require("_inherits")(RadialGradient, require("_isNativeReflectConstruct"));
const items = [
  {
    key: "render",
    value: function render() {
      let cx;
      let cy;
      let fx;
      let r;
      let rx;
      let ry;
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
      const merged1 = Object.assign(self(8273)(props, this));
      return jsx(self(8288), {
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