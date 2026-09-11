// === Module 8591: ? ===

// Module 8591
import _modDef8581 from "module_8581" /* 8581 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import c3 from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;
import noop from "module_19" /* 19 */;

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
    closure_0 = !callResult;
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {
  }
}
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
class FeDropShadow {
  constructor() {
    self = this;
    tmp = c2(this, FeDropShadow);
    tmp2 = closure_4;
    obj = closure_4(FeDropShadow);
    tmp3 = closure_3;
    if (closure_8()) {
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
_inherits(FeDropShadow, _modDef8581);
const entry = {
  key: "render",
  value: function render() {
    const self = this;
    const props = this.props;
    const _in = props.in;
    let str = "SourceGraphic";
    if (undefined !== _in) {
      str = _in;
    }
    let obj = { children: null };
    ({ dx, dy, result } = props);
    const items = [timestampProducer(FeDropShadow(8592), { in: str, stdDeviation: props.stdDeviation }), timestampProducer(FeDropShadow(8594), { dx, dy, result: "offsetblur" }), , , ];
    obj = { floodColor: self.props.floodColor, floodOpacity: self.props.floodOpacity };
    items[2] = timestampProducer(FeDropShadow(8596), obj);
    items[3] = timestampProducer(FeDropShadow(8585), { in2: "offsetblur", operator: "in" });
    obj = { result, children: null };
    const items1 = [timestampProducer(FeDropShadow(8600), {}), timestampProducer(FeDropShadow(8600), { in: str })];
    obj.children = items1;
    items[4] = React5(FeDropShadow(8598), obj);
    obj.children = items;
    return React5(noop.Fragment, obj);
  }
};
let items = [entry];
const importDefaultResultResult = _createClass(FeDropShadow, items);
importDefaultResultResult.displayName = "FeDropShadow";
const merged = Object.assign(importDefaultResultResult.defaultPrimitiveProps);
importDefaultResultResult.defaultProps = {};

export default importDefaultResultResult;