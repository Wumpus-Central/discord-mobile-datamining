// _runtime/metro/08528__.js
import _modDef8477 from "08477__.js";
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";
import c3 from "00093__possibleConstructorReturn.js";
import _getPrototypeOf from "../00095__getPrototypeOf.js";
import _inherits from "../00098__inherits.js";
import noop from "00019__.js";

const LinearGradient = importDefault;
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
class LinearGradient {
  constructor() {
    self = this;
    tmp = c2(this, LinearGradient);
    tmp2 = closure_4;
    obj = closure_4(LinearGradient);
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
_inherits(LinearGradient, _modDef8477);
const entry = {
  key: "render",
  value: function render() {
    const self = this;
    const props = this.props;
    let obj = { x1: props.x1, y1: props.y1, x2: props.x2, y2: props.y2 };
    obj = {
      ref(arg0) {
        return self.refMethod(arg0);
      },
    };
    const merged = Object.assign(obj);
    const merged1 = Object.assign(LinearGradient(8530)(props, this));
    return jsx(LinearGradient(8529), {
      ref(arg0) {
        return self.refMethod(arg0);
      },
    });
  },
};
const items = [entry];
const importDefaultResultResult = _createClass(LinearGradient, items);
importDefaultResultResult.displayName = "LinearGradient";
importDefaultResultResult.defaultProps = { x1: "0%", y1: "0%", x2: "100%", y2: "0%" };

export default importDefaultResultResult;
