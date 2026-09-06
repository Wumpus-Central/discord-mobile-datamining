// _runtime/metro/08544__.js
import _modDef8477 from "08477__.js";
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";
import c3 from "00093__possibleConstructorReturn.js";
import _getPrototypeOf from "../00095__getPrototypeOf.js";
import _inherits from "../00098__inherits.js";
import noop from "00019__.js";

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
const jsx = fn(21).jsx;
class RadialGradient {
  constructor() {
    self = this;
    tmp = c2(this, RadialGradient);
    tmp2 = closure_4;
    obj = closure_4(RadialGradient);
    tmp3 = closure_3;
    if (metroRequire()) {
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
_inherits(RadialGradient, _modDef8477);
const entry = {
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
    obj.fy = fy;
    if (!rx) {
      rx = r;
    }
    obj.rx = rx;
    if (!ry) {
      ry = r;
    }
    obj.ry = ry;
    obj.cx = cx;
    obj.cy = cy;
    obj = {
      ref(arg0) {
        return self.refMethod(arg0);
      },
    };
    const merged = Object.assign(obj);
    const merged1 = Object.assign(RadialGradient(8530)(props, this));
    return jsx(RadialGradient(8545), {
      ref(arg0) {
        return self.refMethod(arg0);
      },
    });
  },
};
const items = [entry];
const importDefaultResultResult = _createClass(RadialGradient, items);
importDefaultResultResult.displayName = "RadialGradient";
importDefaultResultResult.defaultProps = { cx: "50%", cy: "50%", r: "50%" };

export default importDefaultResultResult;
