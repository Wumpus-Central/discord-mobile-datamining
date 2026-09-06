// _runtime/metro/08543__.js
import _modDef8477 from "08477__.js";
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";
import c3 from "00093__possibleConstructorReturn.js";
import _getPrototypeOf from "../00095__getPrototypeOf.js";
import _inherits from "../00098__inherits.js";
import noop from "00019__.js";

const Polyline = importDefault;
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
class Polyline {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = c2(this, Polyline);
    items1 = [...items];
    tmp2 = closure_4;
    obj = closure_4(Polyline);
    tmp3 = closure_3;
    if (metroRequire()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    tmp3Result = tmp3(self, constructResult);
    closure_0 = tmp3Result;
    tmp3Result.setNativeProps = (points) => {
      points = points.points;
      if (points) {
        const _HermesInternal = HermesInternal;
        points.d = "M" + Polyline(8542)(points);
      }
      if (closure_0.root) {
        const root = closure_0.root;
        root.setNativeProps(points);
      }
    };
    return tmp3Result;
  }
}
_inherits(Polyline, _modDef8477);
const entry = {
  key: "render",
  value: function render() {
    const props = this.props;
    const points = props.points;
    const obj = { ref: this.refMethod, d: null };
    let combined = points;
    if (points) {
      const _HermesInternal = HermesInternal;
      combined = "M" + Polyline(8542)(points);
    }
    obj.d = combined;
    const merged = Object.assign(props);
    return jsx(Polyline(8537), { ref: this.refMethod, d: null });
  },
};
let items = [entry];
const importDefaultResultResult = _createClass(Polyline, items);
importDefaultResultResult.displayName = "Polyline";
importDefaultResultResult.defaultProps = { points: "" };

export default importDefaultResultResult;
