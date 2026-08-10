// _runtime/14302__isNativeReflectConstruct.js
import _classCallCheck from "_classCallCheck";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import importDefaultResult from "_createClass";
import importDefaultResult1 from "_inherits";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import importDefaultResult2 from "noop";
import importDefaultResult3 from "emptyFunction";

let Animated;
let c5;
let closure_6;
let error;
const CircularProgress = arg1;
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
({ View: c5, Animated } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: error } = jsxProd);
class CircularProgress {
  constructor() {
    self = this;
    items = [...arguments];
    tmp = _isNativeReflectConstruct(this, CircularProgress);
    items1 = [...items];
    tmp2 = _isNativeReflectConstruct;
    obj = _isNativeReflectConstruct(CircularProgress);
    tmp3 = _isNativeReflectConstruct;
    if (_isNativeReflectConstruct()) {
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
importDefaultResult1(CircularProgress, require("noop").PureComponent);
let obj = {
  key: "polarToCartesian",
  value: function polarToCartesian(sum, sum2, diff, arg3) {
    const result = (arg3 - 90) * Math.PI / 180;
    return { x: sum + diff * Math.cos(result), y: sum2 + diff * Math.sin(result) };
  }
};
let items = [
  obj,
  {
    key: "circlePath",
    value: function circlePath(sum, sum2, diff, arg3, arcSweepAngle) {
      const polarToCartesianResult = this.polarToCartesian(sum, sum2, diff, 0.9999999 * arcSweepAngle);
      let str = "1";
      if (arcSweepAngle - arg3 <= 180) {
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
      ({ x: arr[9], y: arr[10] } = this.polarToCartesian(sum, sum2, diff, arg3));
      return items.join(" ");
    }
  },
  {
    key: "render",
    value: function render() {
      let arcSweepAngle;
      let backgroundColor;
      let backgroundWidth;
      let children;
      let childrenContainerStyle;
      let dashedBackground;
      let dashedTint;
      let fill;
      let fillLineCap;
      let lineCap;
      let padding;
      let renderCap;
      let rotation;
      let size;
      let style;
      let tintColor;
      let tintTransparency;
      let width;
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
        let obj = { center: null };
        obj[0] = tmp13;
        renderCapResult = props2.renderCap(obj);
      }
      const diff1 = size - 2 * bound;
      obj = { position: "absolute", left: bound + padding / 2, top: bound + padding / 2, width: diff1, height: diff1, borderRadius: diff1 / 2, alignItems: "center", justifyContent: "center", overflow: "hidden" };
      const merged = Object.assign(childrenContainerStyle);
      let mapped = null;
      if (dashedTint.gap > 0) {
        const _Object = Object;
        let values = Object.values(dashedTint);
        mapped = values.map((joined) => parseInt(joined));
      }
      let mapped1 = null;
      if (dashedBackground.gap > 0) {
        const _Object2 = Object;
        values = Object.values(dashedBackground);
        mapped1 = values.map((joined) => parseInt(joined));
      }
      obj = { style, children: null };
      const obj1 = { width: size + padding, height: size + padding, children: null };
      const obj2 = { rotation, originX: (size + padding) / 2, originY: (size + padding) / 2, children: null };
      let tmp23Result = backgroundColor;
      if (backgroundColor) {
        const obj3 = { d: null, stroke: null, strokeWidth: null, strokeLinecap: null, strokeDasharray: null, fill: "transparent" };
        obj3[0] = circlePathResult;
        obj3[1] = backgroundColor;
        if (!backgroundWidth) {
          backgroundWidth = width;
        }
        obj3[2] = backgroundWidth;
        obj3[3] = lineCap;
        obj3[4] = mapped1;
        tmp23Result = tmp23(tmp24(7835).Path, obj3);
      }
      const items = [tmp23Result, , ];
      tmp23Result = fill > 0;
      if (tmp23Result) {
        const obj4 = { d: null, stroke: null, strokeWidth: null, strokeLinecap: null, strokeDasharray: null, fill: "transparent" };
        obj4[0] = circlePathResult1;
        obj4[1] = tintColor;
        obj4[2] = width;
        obj4[3] = fillLineCap;
        obj4[4] = mapped;
        tmp23Result = tmp23(tmp24(7835).Path, obj4);
      }
      items[1] = tmp23Result;
      items[2] = renderCapResult;
      obj2[3] = items;
      obj1[2] = closure_7(CircularProgress(7835).G, obj2);
      const items1 = [closure_6(CircularProgress(7835).Svg, obj1), ];
      let tmp23Result1 = children;
      if (children) {
        const obj5 = { style: null, children: null };
        obj5[0] = obj;
        obj5[1] = children(fill);
        tmp23Result1 = tmp23(tmp22, obj5);
      }
      items1[1] = tmp23Result1;
      obj[1] = items1;
      return closure_7(closure_5, obj);
    }
  }
];
const importDefaultResultResult = importDefaultResult(CircularProgress, items);
obj = { style: require("emptyFunction").object, size: null, fill: null, width: null, backgroundWidth: null, tintColor: null, tintTransparency: null, backgroundColor: null, rotation: null, lineCap: null, arcSweepAngle: null, children: null, childrenContainerStyle: null, padding: null, renderCap: null, dashedBackground: null, dashedTint: null };
let items1 = [require("emptyFunction").number, ];
items1[1] = require("emptyFunction").instanceOf(Animated.Value);
obj[1] = importDefaultResult3.oneOfType(items1).isRequired;
obj[2] = require("emptyFunction").number.isRequired;
obj[3] = require("emptyFunction").number.isRequired;
obj[4] = require("emptyFunction").number;
obj[5] = require("emptyFunction").string;
obj[6] = require("emptyFunction").bool;
obj[7] = require("emptyFunction").string;
obj[8] = require("emptyFunction").number;
obj[9] = require("emptyFunction").string;
obj[10] = require("emptyFunction").number;
obj[11] = require("emptyFunction").func;
obj[12] = require("emptyFunction").object;
obj[13] = require("emptyFunction").number;
obj[14] = require("emptyFunction").func;
obj[15] = require("emptyFunction").object;
obj[16] = require("emptyFunction").object;
importDefaultResultResult.propTypes = obj;
importDefaultResultResult.defaultProps = { tintColor: "black", tintTransparency: true, rotation: 90, lineCap: "butt", arcSweepAngle: 360, padding: 0, dashedBackground: { width: 0, gap: 0 }, dashedTint: { width: 0, gap: 0 } };

export default importDefaultResultResult;