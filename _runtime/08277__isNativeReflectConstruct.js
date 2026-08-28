// === Module 8277: _isNativeReflectConstruct ===

// Module 8277 (_isNativeReflectConstruct)
import noopAll from "noop" /* 19 */;
import _inheritsDefault from "_inherits" /* 98 */;
import _isNativeReflectConstructDefault from "_isNativeReflectConstruct" /* 8211 */;
import closure_2 from "_classCallCheck" /* 41 */;
import closure_3 from "_possibleConstructorReturn" /* 93 */;
import closure_4 from "_getPrototypeOf" /* 95 */;
import importDefaultResult from "_createClass" /* 42 */;
import { jsx } from "jsxProd" /* 21 */;

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
  } catch (err) {
  }
}
noopAll;
class Polyline {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = closure_2(this, closure_0);
    items1 = [...items];
    tmp2 = closure_4;
    obj = closure_4(closure_0);
    tmp3 = closure_3;
    if (_isNativeReflectConstruct()) {
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
        points.d = "M" + lib(closure_1_1[7])(points);
      }
      if (lib.root) {
        const root = lib.root;
        root.setNativeProps(points);
      }
    };
    return tmp3Result;
  }
}
_inheritsDefault(Polyline, _isNativeReflectConstructDefault);
let items = [
  {
    key: "render",
    value: function render() {
      const props = this.props;
      const points = props.points;
      const obj = { ref: this.refMethod, d: null };
      let combined = points;
      if (points) {
        const _HermesInternal = HermesInternal;
        combined = "M" + Polyline(8276)(points);
      }
      obj[1] = combined;
      const merged = Object.assign(props);
      return jsx(Polyline(8271), { ref: this.refMethod, d: null });
    }
  }
];
const importDefaultResultResult = importDefaultResult(Polyline, items);
importDefaultResultResult.displayName = "Polyline";
importDefaultResultResult.defaultProps = { points: "" };

export default importDefaultResultResult;