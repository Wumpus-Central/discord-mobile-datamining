// === Module 8541: ? ===

// Module 8541
import _modDef8477 from "module_8477" /* 8477 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import c3 from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;
import noop from "module_19" /* 19 */;

const Polygon = importDefault;
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
const jsx = fn(21).jsx;
class Polygon {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = c2(this, Polygon);
    items1 = [...items];
    tmp2 = closure_4;
    obj = closure_4(Polygon);
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
        points.d = "M" + Polygon(8542)(points) + "z";
      }
      if (closure_0.root) {
        const root = closure_0.root;
        root.setNativeProps(points);
      }
    };
    return tmp3Result;
  }
}
_inherits(Polygon, _modDef8477);
const entry = {
  key: "render",
  value: function render() {
    const props = this.props;
    const points = props.points;
    const obj = { ref: this.refMethod, d: null };
    let combined = points;
    if (points) {
      const _HermesInternal = HermesInternal;
      combined = "M" + Polygon(8542)(points) + "z";
    }
    obj.d = combined;
    const merged = Object.assign(props);
    return jsx(Polygon(8537), { ref: this.refMethod, d: null });
  }
};
let items = [entry];
const importDefaultResultResult = _createClass(Polygon, items);
importDefaultResultResult.displayName = "Polygon";
importDefaultResultResult.defaultProps = { points: "" };

export default importDefaultResultResult;