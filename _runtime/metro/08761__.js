// _runtime/metro/08761__.js
import _possibleConstructorReturnDefault from "00093__possibleConstructorReturn.js";
import _modDef8751 from "08751__.js";
import _modDef8762 from "08762__.js";
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";
import _getPrototypeOf from "../00095__getPrototypeOf.js";
import _inherits from "../00098__inherits.js";
import noop from "00019__.js";

const Ellipse = fn;
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
_possibleConstructorReturnDefault;
const jsx = fn(21).jsx;
class Ellipse {
  constructor() {
    self = this;
    tmp = closure_3(this, Ellipse);
    tmp2 = hasOwnProperty;
    obj = hasOwnProperty(Ellipse);
    tmp3 = closure_4;
    if (closure_7()) {
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
_inherits(Ellipse, _modDef8751);
const entry = {
  key: "render",
  value: function render() {
    const self = this;
    const props = this.props;
    const obj = {};
    ({ cx, cy, rx, ry } = props);
    const merged = Object.assign(Ellipse(8742).extract(this, props));
    obj.cx = cx;
    obj.cy = cy;
    obj.rx = rx;
    obj.ry = ry;
    const obj2 = Ellipse(8742);
    const obj3 = {
      ref(arg0) {
        return self.refMethod(arg0);
      },
    };
    const merged1 = Object.assign(obj);
    return jsx(_modDef8762, {
      ref(arg0) {
        return self.refMethod(arg0);
      },
    });
  },
};
const items = [entry];
const importDefaultResultResult = _createClass(Ellipse, items);
importDefaultResultResult.displayName = "Ellipse";
importDefaultResultResult.defaultProps = { cx: 0, cy: 0, rx: 0, ry: 0 };

export default importDefaultResultResult;
