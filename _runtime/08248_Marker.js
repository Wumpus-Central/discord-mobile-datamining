// _runtime/08248_Marker.js
import Fragment from "react/00021_Fragment.js";
import extractViewBoxDefault from "08182_extractViewBox.js";
import multiplyMatricesDefault from "08193_multiplyMatrices.js";
import _modDef8249 from "metro/08249__.js";
import _classCallCheck from "metro/00041__classCallCheck.js";
import _createClass from "metro/00042__createClass.js";
import c3 from "metro/00093__possibleConstructorReturn.js";
import _getPrototypeOf from "00095__getPrototypeOf.js";
import _inherits from "00098__inherits.js";
import react from "00019_react.js";

function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {}));
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {}
}
const jsx = Fragment.jsx;
class Marker {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, Marker);
    const obj = _getPrototypeOf(Marker);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, arguments, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj(...arguments);
    }
    return c3(self, constructResult);
  }
}
_inherits(Marker, multiplyMatricesDefault);
const entry = {
  key: "render",
  value: function render() {
    let children;
    let markerHeight;
    let markerWidth;
    let preserveAspectRatio;
    let viewBox;
    const self = this;
    const props = this.props;
    const obj = {
      name: props.id,
      refX: props.refX,
      refY: props.refY,
      markerUnits: props.markerUnits,
      orient: String(props.orient),
      markerWidth,
      markerHeight,
    };
    ({ viewBox, preserveAspectRatio, markerWidth, markerHeight, children } = props);
    _modDef8249;
    const merged = Object.assign(obj);
    const merged1 = Object.assign(extractViewBoxDefault({ viewBox, preserveAspectRatio }));
    return (
      <tmp
        ref={function ref(arg0) {
          return self.refMethod(arg0);
        }}
      >
        {children}
      </tmp>
    );
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
