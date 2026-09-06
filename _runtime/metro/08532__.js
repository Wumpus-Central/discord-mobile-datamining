// === Module 8532: ? ===

// Module 8532
import _modDef8477 from "module_8477" /* 8477 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import c3 from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;
import noop from "module_19" /* 19 */;

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
    closure_0 = !callResult;
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {
  }
}
const jsx = fn(21).jsx;
class Marker {
  constructor() {
    self = this;
    tmp = c2(this, Marker);
    tmp2 = closure_4;
    obj = closure_4(Marker);
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
_inherits(Marker, _modDef8477);
const entry = {
  key: "render",
  value: function render() {
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
    const merged1 = Object.assign(Marker(8466)({ viewBox, preserveAspectRatio }));
    obj.children = children;
    return jsx(Marker(8533), {
      ref(arg0) {
        return self.refMethod(arg0);
      }
    });
  }
};
const items = [entry];
const importDefaultResultResult = _createClass(Marker, items);
importDefaultResultResult.displayName = "Marker";
importDefaultResultResult.defaultProps = { refX: 0, refY: 0, orient: "0", markerWidth: 3, markerHeight: 3, markerUnits: "strokeWidth" };

export default importDefaultResultResult;