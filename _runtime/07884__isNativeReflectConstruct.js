// _runtime/07884__isNativeReflectConstruct.js
import _classCallCheck from "_classCallCheck";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import importDefaultResult from "_createClass";
import noop from "noop";
import jsxProd from "jsxProd";

let closure_6;
let error;
const FeDropShadow = importDefault;
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
({ jsx: closure_6, jsxs: error } = jsxProd);
class FeDropShadow {
  constructor() {
    self = this;
    tmp = _isNativeReflectConstruct(this, FeDropShadow);
    tmp2 = __esModule;
    obj = __esModule(FeDropShadow);
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
require("_inherits")(FeDropShadow, require("_isNativeReflectConstruct"));
let obj = {
  key: "render",
  value: function render() {
    let dx;
    let dy;
    let result;
    const self = this;
    const props = this.props;
    const _in = props.in;
    let str = "SourceGraphic";
    if (undefined !== _in) {
      str = _in;
    }
    let obj = { children: null };
    ({ dx, dy, result } = props);
    const items = [callback3(FeDropShadow(7885), { in: str, stdDeviation: props.stdDeviation }), callback3(FeDropShadow(7887), { dx, dy, result: "offsetblur" }), , , ];
    obj = { floodColor: self.props.floodColor, floodOpacity: self.props.floodOpacity };
    items[2] = callback3(FeDropShadow(7889), obj);
    items[3] = callback3(FeDropShadow(7878), { in2: "offsetblur", operator: "in" });
    obj = { result, children: null };
    const items1 = [callback3(FeDropShadow(7893), {}), callback3(FeDropShadow(7893), { in: str })];
    obj[1] = items1;
    items[4] = callback4(FeDropShadow(7891), obj);
    obj[0] = items;
    return callback4(React.Fragment, obj);
  }
};
let items = [obj];
const importDefaultResultResult = importDefaultResult(FeDropShadow, items);
importDefaultResultResult.displayName = "FeDropShadow";
obj = {};
const merged = Object.assign(importDefaultResultResult.defaultPrimitiveProps);
importDefaultResultResult.defaultProps = obj;

export default importDefaultResultResult;