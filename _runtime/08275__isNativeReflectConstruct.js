import _classCallCheck from "_classCallCheck";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import importDefaultResult from "_createClass";
import "noop";
import { jsx } from "jsxProd";

const Marker = importDefault;
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
class Marker {
  constructor() {
    self = this;
    tmp = _isNativeReflectConstruct(this, Marker);
    tmp2 = __esModule;
    obj = __esModule(Marker);
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
require("_inherits")(Marker, require("_isNativeReflectConstruct"));
const items = [
  {
    key: "render",
    value: function render() {
      let children;
      let markerHeight;
      let markerWidth;
      let preserveAspectRatio;
      let viewBox;
      const self = this;
      const props = this.props;
      let obj = { name: props.id, refX: props.refX, refY: props.refY, markerUnits: props.markerUnits, orient: String(props.orient), markerWidth, markerHeight };
      ({ viewBox, preserveAspectRatio, markerWidth, markerHeight, children } = props);
      obj = {
        ref(arg0) {
          return self.refMethod(arg0);
        }
      };
      const merged = Object.assign(obj);
      const merged1 = Object.assign(self(8209)({ viewBox, preserveAspectRatio }));
      obj.children = children;
      return jsx(self(8276), {
        ref(arg0) {
          return self.refMethod(arg0);
        }
      });
    }
  }
];
const importDefaultResultResult = importDefaultResult(Marker, items);
importDefaultResultResult.displayName = "Marker";
importDefaultResultResult.defaultProps = { refX: 0, refY: 0, orient: "0", markerWidth: 3, markerHeight: 3, markerUnits: "strokeWidth" };

export default importDefaultResultResult;