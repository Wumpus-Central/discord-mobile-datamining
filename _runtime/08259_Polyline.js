// _runtime/08259_Polyline.js
import Fragment from "react/00021_Fragment.js";
import multiplyMatricesDefault from "08193_multiplyMatrices.js";
import PathDefault from "08253_Path.js";
import extractPolyPointsDefault from "08258_extractPolyPoints.js";
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
class Polyline {
  constructor() {
    let constructResult;
    const self = this;
    const items = [...arguments];
    let closure_0;
    _classCallCheck(this, Polyline);
    const items1 = [...items];
    const obj = _getPrototypeOf(Polyline);
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
        points.d = "M" + Polyline(closure_2_1[7])(points);
      }
      if (closure_0.root) {
        const root = closure_0.root;
        root.setNativeProps(points);
      }
    };
    return tmp3Result;
  }
}
_inherits(Polyline, multiplyMatricesDefault);
const entry = {
  key: "render",
  value: function render() {
    const props = this.props;
    const points = props.points;
    let combined = points;
    PathDefault;
    if (points) {
      const _HermesInternal = HermesInternal;
      combined = "M" + extractPolyPointsDefault(points);
    }
    const merged = Object.assign(props);
    return <tmp4 ref={this.refMethod} d={combined} />;
  },
};
let items = [entry];
const importDefaultResultResult = _createClass(Polyline, items);
importDefaultResultResult.displayName = "Polyline";
importDefaultResultResult.defaultProps = { points: "" };

export default importDefaultResultResult;
