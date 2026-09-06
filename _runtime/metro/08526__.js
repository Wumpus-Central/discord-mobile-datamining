// _runtime/metro/08526__.js
import _possibleConstructorReturnDefault from "00093__possibleConstructorReturn.js";
import _modDef8477 from "08477__.js";
import _modDef8527 from "08527__.js";
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";
import _getPrototypeOf from "../00095__getPrototypeOf.js";
import _inherits from "../00098__inherits.js";
import noop from "00019__.js";

const Line = fn;
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
class Line {
  constructor() {
    self = this;
    tmp = closure_3(this, Line);
    tmp2 = hasOwnProperty;
    obj = hasOwnProperty(Line);
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
_inherits(Line, _modDef8477);
const entry = {
  key: "render",
  value: function render() {
    const self = this;
    const props = this.props;
    let obj = {};
    ({ x1, y1, x2, y2 } = props);
    const merged = Object.assign(Line(8468).extract(this, props));
    obj.x1 = x1;
    obj.y1 = y1;
    obj.x2 = x2;
    obj.y2 = y2;
    obj = {
      ref(arg0) {
        return self.refMethod(arg0);
      },
    };
    const obj2 = Line(8468);
    const merged1 = Object.assign(obj);
    return jsx(_modDef8527, {
      ref(arg0) {
        return self.refMethod(arg0);
      },
    });
  },
};
const items = [entry];
const importDefaultResultResult = _createClass(Line, items);
importDefaultResultResult.displayName = "Line";
importDefaultResultResult.defaultProps = { x1: 0, y1: 0, x2: 0, y2: 0 };

export default importDefaultResultResult;
