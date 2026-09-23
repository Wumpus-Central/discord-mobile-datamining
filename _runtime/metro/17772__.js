// === Module 17772: ? ===

// Module 17772
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import c3 from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;
import noop from "module_19" /* 19 */;
import emptyFunction_mod from "module_10217" /* 10217 */;

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
  } catch (err) {
  }
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
    const result = (result5 - 90) * Math.PI / 180;
    const point = { x: sum + diff * Math.cos(result), y: sum2 + diff * Math.sin(result) };
    return point;
  }
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
    }
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
      ({ arcSweepAngle, fill, children, childrenContainerStyle, padding, renderCap, dashedBackground, dashedTint } = props);
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
      const result5 = arcSweepAngle * self.clampFill(fill) / 100;
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
        const obj = { center: tmp13 };
        renderCapResult = props2.renderCap(obj);
      }
      const diff1 = size - 2 * bound;
      const size1 = { position: "absolute", left: bound + padding / 2, top: bound + padding / 2, width: diff1, height: diff1, borderRadius: diff1 / 2, alignItems: "center", justifyContent: "center", overflow: "hidden" };
      const merged = Object.assign(childrenContainerStyle);
      let mapped = null;
      if (dashedTint.gap > 0) {
        const _Object = Object;
        const values = Object.values(dashedTint);
        mapped = values.map((item) => parseInt(item));
      }
      let mapped1 = null;
      if (dashedBackground.gap > 0) {
        const _Object2 = Object;
        const values2 = Object.values(dashedBackground);
        mapped1 = values2.map((item) => parseInt(item));
      }
      const obj2 = { style, children: null };
      const size2 = { width: size + padding, height: size + padding, children: null };
      const obj3 = { rotation, originX: (size + padding) / 2, originY: (size + padding) / 2, children: null };
      let tmp23Result = backgroundColor;
      if (backgroundColor) {
        const obj4 = { d: circlePathResult, stroke: backgroundColor, strokeWidth: null, strokeLinecap: null, strokeDasharray: null, fill: "transparent" };
        if (!backgroundWidth) {
          backgroundWidth = width;
        }
        obj4.strokeWidth = backgroundWidth;
        obj4.strokeLinecap = lineCap;
        obj4.strokeDasharray = mapped1;
        tmp23Result = timestampProducer(CircularProgress(8803).Path, obj4);
      }
      const items = [tmp23Result, , ];
      let tmp23Result3 = fill > 0;
      if (tmp23Result3) {
        const obj5 = { d: circlePathResult1, stroke: tintColor, strokeWidth: width, strokeLinecap: fillLineCap, strokeDasharray: mapped, fill: "transparent" };
        tmp23Result3 = timestampProducer(CircularProgress(8803).Path, obj5);
      }
      items[1] = tmp23Result3;
      items[2] = renderCapResult;
      obj3.children = items;
      size2.children = React5(CircularProgress(8803).G, obj3);
      const items1 = [timestampProducer(CircularProgress(8803).Svg, size2), ];
      let tmp23Result4 = children;
      if (children) {
        const obj6 = { style: size1, children: children(fill) };
        tmp23Result4 = timestampProducer(hasOwnProperty, obj6);
      }
      items1[1] = tmp23Result4;
      obj2.children = items1;
      return React5(hasOwnProperty, obj2);
    }
  }
];
const importDefaultResultResult = _createClass(CircularProgress, items);
let obj = { style: emptyFunction.object, size: null, fill: null, width: null, backgroundWidth: null, tintColor: null, tintTransparency: null, backgroundColor: null, rotation: null, lineCap: null, arcSweepAngle: null, children: null, childrenContainerStyle: null, padding: null, renderCap: null, dashedBackground: null, dashedTint: null };
let emptyFunction = emptyFunction_mod;
let items1 = [emptyFunction.number, ];
let emptyFunction = emptyFunction_mod;
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
importDefaultResultResult.defaultProps = { tintColor: "black", tintTransparency: true, rotation: 90, lineCap: "butt", arcSweepAngle: 360, padding: 0, dashedBackground: { width: 0, gap: 0 }, dashedTint: { width: 0, gap: 0 } };

export default importDefaultResultResult;