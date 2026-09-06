// _runtime/metro/15059__.js
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";
import c3 from "00093__possibleConstructorReturn.js";
import _getPrototypeOf from "../00095__getPrototypeOf.js";
import _inherits from "../00098__inherits.js";
import noop from "00019__.js";
import emptyFunction from "09875__.js";

const CircularProgress = fn;
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
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, Animated } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
class CircularProgress {
  constructor() {
    self = this;
    items = [...arguments];
    tmp = c2(this, CircularProgress);
    items1 = [...items];
    tmp2 = closure_4;
    obj = closure_4(CircularProgress);
    tmp3 = closure_3;
    if (closure_8()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    tmp3Result = tmp3(self, constructResult);
    tmp3Result.clampFill = (arg0) => Math.min(100, Math.max(0, arg0));
    return tmp3Result;
  }
}
_inherits(CircularProgress, noop.PureComponent);
const entry = {
  key: "polarToCartesian",
  value: function polarToCartesian(sum, sum2, diff, result5) {
    const result = ((result5 - 90) * Math.PI) / 180;
    const point = { x: sum + diff * Math.cos(result), y: sum2 + diff * Math.sin(result) };
    return point;
  },
};
let items = [
  entry,
  {
    key: "circlePath",
    value: function circlePath(sum, sum2, diff, result5, arcSweepAngle) {
      const polarToCartesianResult = this.polarToCartesian(sum, sum2, diff, 0.9999999 * arcSweepAngle);
      let str = "1";
      if (arcSweepAngle - result5 <= 180) {
        str = "0";
      }
      const items = ["M"];
      ({ x: arr[1], y: arr[2] } = polarToCartesianResult);
      items[3] = "A";
      items[4] = diff;
      items[5] = diff;
      items[6] = 0;
      items[7] = str;
      items[8] = 0;
      ({ x: arr[9], y: arr[10] } = this.polarToCartesian(sum, sum2, diff, result5));
      return items.join(" ");
    },
  },
  {
    key: "render",
    value: function render() {
      const self = this;
      const props = this.props;
      ({ size, width, backgroundWidth, backgroundColor, lineCap, fillLineCap } = props);
      ({ tintColor, tintTransparency, style, rotation } = props);
      if (undefined === fillLineCap) {
        fillLineCap = lineCap;
      }
      ({ arcSweepAngle, fill, children, childrenContainerStyle, padding, renderCap, dashedBackground, dashedTint } =
        props);
      let bound = width;
      if (backgroundWidth) {
        const _Math = Math;
        bound = Math.max(width, backgroundWidth);
      }
      const result = size / 2;
      const result1 = padding / 2;
      const result2 = size / 2;
      const result3 = bound / 2;
      const result4 = padding / 2;
      const result5 = (arcSweepAngle * self.clampFill(fill)) / 100;
      let num = 0;
      if (!tintTransparency) {
        num = result5;
      }
      const sum = result + result1;
      const diff = result2 - result3 - result4;
      const circlePathResult = self.circlePath(sum, sum, diff, num, arcSweepAngle);
      let renderCapResult = null;
      if (self.props.renderCap) {
        const props2 = self.props;
        let obj = { center: tmp13 };
        renderCapResult = props2.renderCap(obj);
      }
      const diff1 = size - 2 * bound;
      size = {
        position: "absolute",
        left: bound + padding / 2,
        top: bound + padding / 2,
        width: diff1,
        height: diff1,
        borderRadius: diff1 / 2,
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      };
      const merged = Object.assign(childrenContainerStyle);
      let mapped = null;
      if (dashedTint.gap > 0) {
        const _Object = Object;
        let values = Object.values(dashedTint);
        mapped = values.map((item) => parseInt(item));
      }
      let mapped1 = null;
      if (dashedBackground.gap > 0) {
        const _Object2 = Object;
        values = Object.values(dashedBackground);
        mapped1 = values.map((item) => parseInt(item));
      }
      obj = { style, children: null };
      const size1 = { width: size + padding, height: size + padding, children: null };
      obj = { rotation, originX: (size + padding) / 2, originY: (size + padding) / 2, children: null };
      let tmp23Result = backgroundColor;
      if (backgroundColor) {
        const obj1 = {
          d: circlePathResult,
          stroke: backgroundColor,
          strokeWidth: null,
          strokeLinecap: null,
          strokeDasharray: null,
          fill: "transparent",
        };
        if (!backgroundWidth) {
          backgroundWidth = width;
        }
        obj1.strokeWidth = backgroundWidth;
        obj1.strokeLinecap = lineCap;
        obj1.strokeDasharray = mapped1;
        tmp23Result = timestampProducer(CircularProgress(8453).Path, obj1);
      }
      const items = [tmp23Result, ,];
      tmp23Result = fill > 0;
      if (tmp23Result) {
        const obj2 = {
          d: circlePathResult1,
          stroke: tintColor,
          strokeWidth: width,
          strokeLinecap: fillLineCap,
          strokeDasharray: mapped,
          fill: "transparent",
        };
        tmp23Result = timestampProducer(CircularProgress(8453).Path, obj2);
      }
      items[1] = tmp23Result;
      items[2] = renderCapResult;
      obj.children = items;
      size1.children = React5(CircularProgress(8453).G, obj);
      const items1 = [timestampProducer(CircularProgress(8453).Svg, size1)];
      let tmp23Result1 = children;
      if (children) {
        const obj3 = { style: size, children: children(fill) };
        tmp23Result1 = timestampProducer(hasOwnProperty, obj3);
      }
      items1[1] = tmp23Result1;
      obj.children = items1;
      return React5(hasOwnProperty, obj);
    },
  },
];
const importDefaultResultResult = _createClass(CircularProgress, items);
let obj = {
  style: emptyFunction.object,
  size: null,
  fill: null,
  width: null,
  backgroundWidth: null,
  tintColor: null,
  tintTransparency: null,
  backgroundColor: null,
  rotation: null,
  lineCap: null,
  arcSweepAngle: null,
  children: null,
  childrenContainerStyle: null,
  padding: null,
  renderCap: null,
  dashedBackground: null,
  dashedTint: null,
};
let items1 = [emptyFunction.number];
items1[1] = emptyFunction.instanceOf(Animated.Value);
obj.size = emptyFunction.oneOfType(items1).isRequired;
obj.fill = emptyFunction.number.isRequired;
obj.width = emptyFunction.number.isRequired;
obj.backgroundWidth = emptyFunction.number;
obj.tintColor = emptyFunction.string;
obj.tintTransparency = emptyFunction.bool;
obj.backgroundColor = emptyFunction.string;
obj.rotation = emptyFunction.number;
obj.lineCap = emptyFunction.string;
obj.arcSweepAngle = emptyFunction.number;
obj.children = emptyFunction.func;
obj.childrenContainerStyle = emptyFunction.object;
obj.padding = emptyFunction.number;
obj.renderCap = emptyFunction.func;
obj.dashedBackground = emptyFunction.object;
obj.dashedTint = emptyFunction.object;
importDefaultResultResult.propTypes = obj;
importDefaultResultResult.defaultProps = {
  tintColor: "black",
  tintTransparency: true,
  rotation: 90,
  lineCap: "butt",
  arcSweepAngle: 360,
  padding: 0,
  dashedBackground: { width: 0, gap: 0 },
  dashedTint: { width: 0, gap: 0 },
};

export default importDefaultResultResult;
