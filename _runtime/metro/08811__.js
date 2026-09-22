// _runtime/metro/08811__.js
import _modDef8756 from "08756__.js";
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";
import c3 from "00093__possibleConstructorReturn.js";
import _getPrototypeOf from "../00095__getPrototypeOf.js";
import _inherits from "../00098__inherits.js";
import noop from "00019__.js";

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
  } catch (err) {}
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
_inherits(Marker, _modDef8756);
const entry = {
  key: "render",
  value: function render() {
    const self = this;
    const props = this.props;
    ({ viewBox, preserveAspectRatio, markerWidth, markerHeight, children } = props);
    const obj2 = {
      ref(arg0) {
        return self.refMethod(arg0);
      },
    };
    const obj = {
      name: props.id,
      refX: props.refX,
      refY: props.refY,
      markerUnits: props.markerUnits,
      orient: String(props.orient),
      markerWidth,
      markerHeight,
    };
    const merged = Object.assign(obj);
    const merged1 = Object.assign(Marker(8745)({ viewBox, preserveAspectRatio }));
    obj2.children = children;
    return jsx(Marker(8812), {
      ref(arg0) {
        return self.refMethod(arg0);
      },
    });
  },
};
const items = [entry];
const importDefaultResultResult = _createClass(Marker, items);
importDefaultResultResult.displayName = "Marker";
importDefaultResultResult.defaultProps = {
  refX: 0,
  refY: 0,
  orient: "0",
  markerWidth: 3,
  markerHeight: 3,
  markerUnits: "strokeWidth",
};

export default importDefaultResultResult;
