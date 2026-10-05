// === Module 8224: Polygon ===

// Module 8224 (Polygon)
import Fragment from "Fragment" /* 21 */;
import multiplyMatricesDefault from "multiplyMatrices" /* 8160 */;
import PathDefault from "Path" /* 8220 */;
import extractPolyPointsDefault from "extractPolyPoints" /* 8225 */;
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
class Polygon {
  constructor() {
    let constructResult;
    const self = this;
    const items = [...arguments];
    let closure_0;
    _classCallCheck(this, Polygon);
    const items1 = [...items];
    const obj = _getPrototypeOf(Polygon);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    const tmp3Result = c3(self, constructResult);
    closure_0 = tmp3Result;
    tmp3Result.setNativeProps = (points) => {
      points = points.points;
      if (points) {
        const _HermesInternal = HermesInternal;
        points.d = "M" + Polygon(closure_2_1[7])(points) + "z";
      }
      if (closure_0.root) {
        const root = closure_0.root;
        root.setNativeProps(points);
      }
    };
    return tmp3Result;
  }
}
_inherits(Polygon, multiplyMatricesDefault);
const entry = {
  key: "render",
  value: function render() {
    const props = this.props;
    const points = props.points;
    let combined = points;
    PathDefault;
    if (points) {
      const _HermesInternal = HermesInternal;
      combined = "M" + extractPolyPointsDefault(points) + "z";
    }
    const merged = Object.assign(props);
    return <tmp4 ref={this.refMethod} d={combined} />;
  }
};
let items = [entry];
const importDefaultResultResult = _createClass(Polygon, items);
importDefaultResultResult.displayName = "Polygon";
importDefaultResultResult.defaultProps = { points: "" };

export default importDefaultResultResult;