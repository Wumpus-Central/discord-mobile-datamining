// === Module 8215: Marker ===

// Module 8215 (Marker)
import Fragment from "Fragment" /* 21 */;
import extractViewBoxDefault from "extractViewBox" /* 8149 */;
import multiplyMatricesDefault from "multiplyMatrices" /* 8160 */;
import _modDef8216 from "module_8216" /* 8216 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import c3 from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;
import react from "react" /* 19 */;

function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

    }));
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {
  }
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
    const obj = { name: props.id, refX: props.refX, refY: props.refY, markerUnits: props.markerUnits, orient: String(props.orient), markerWidth, markerHeight };
    ({ viewBox, preserveAspectRatio, markerWidth, markerHeight, children } = props);
    _modDef8216;
    const merged = Object.assign(obj);
    const merged1 = Object.assign(extractViewBoxDefault({ viewBox, preserveAspectRatio }));
    return <tmp ref={function ref(arg0) {
      return self.refMethod(arg0);
    }}>{children}</tmp>;
  }
};
const items = [entry];
const importDefaultResultResult = _createClass(Marker, items);
importDefaultResultResult.displayName = "Marker";
importDefaultResultResult.defaultProps = { refX: 0, refY: 0, orient: "0", markerWidth: 3, markerHeight: 3, markerUnits: "strokeWidth" };

export default importDefaultResultResult;