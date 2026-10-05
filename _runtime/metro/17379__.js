// === Module 17379: ? ===

// Module 17379
import inlineStyles from "inlineStyles" /* 8136 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import c3 from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import module_9536_mod from "module_9536" /* 9536 */;

let Animated;
let hasOwnProperty;
let items1;
let metroImportDefault;
let metroRequire;
let module_9536;
let oneOfType;
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
({ View: hasOwnProperty, Animated } = react_native);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
class CircularProgress {
  constructor() {
    let constructResult;
    const self = this;
    const items = [...arguments];
    _classCallCheck(this, CircularProgress);
    const items1 = [...items];
    const obj = _getPrototypeOf(CircularProgress);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    const tmp3Result = c3(self, constructResult);
    tmp3Result.clampFill = (arg0) => Math.min(100, Math.max(0, arg0));
    return tmp3Result;
  }
}
_inherits(CircularProgress, react.PureComponent);
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
      let str = "1";
      const polarToCartesianResult = this.polarToCartesian(sum, sum2, diff, 0.9999999 * arcSweepAngle);
      const polarToCartesianResult1 = this.polarToCartesian(sum, sum2, diff, result5);
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
      ({ x: arr[9], y: arr[10] } = polarToCartesianResult1);
      return items.join(" ");
    }
  },
  {
    key: "render",
    value: function render() {
      let G;
      let arcSweepAngle;
      let backgroundColor;
      let backgroundWidth;
      let children;
      let childrenContainerStyle;
      let dashedBackground;
      let dashedTint;
      let fill;
      let fillLineCap;
      let items;
      let items1;
      let lineCap;
      let obj3;
      let padding;
      let renderCap;
      let rotation;
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
      const circlePath = self.circlePath;
      if (!tintTransparency) {
        num = result5;
      }
      const sum = result + result1;
      const diff = result2 - result3 - result4;
      let renderCapResult = null;
      const circlePathResult = circlePath(sum, sum, diff, num, arcSweepAngle);
      const circlePathResult1 = self.circlePath(sum, sum, diff, 0, result5);
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
      const obj2 = { style, children: items1 };
      const size2 = { width: size + padding, height: size + padding, children: metroImportDefault(G, obj3) };
      const Svg = inlineStyles.Svg;
      let tmp23Result = backgroundColor;
      obj3 = { rotation, originX: (size + padding) / 2, originY: (size + padding) / 2, children: items };
      G = inlineStyles.G;
      if (backgroundColor) {
        const obj4 = { d: circlePathResult, stroke: backgroundColor, strokeWidth: backgroundWidth, strokeLinecap: lineCap, strokeDasharray: mapped1, fill: "transparent" };
        const Path = inlineStyles.Path;
        if (!backgroundWidth) {
          backgroundWidth = width;
        }
        tmp23Result = metroRequire(Path, obj4);
      }
      items = [tmp23Result, , ];
      let tmp23Result3 = fill > 0;
      if (tmp23Result3) {
        const obj5 = { d: circlePathResult1, stroke: tintColor, strokeWidth: width, strokeLinecap: fillLineCap, strokeDasharray: mapped, fill: "transparent" };
        tmp23Result3 = metroRequire(inlineStyles.Path, obj5);
      }
      items[1] = tmp23Result3;
      items[2] = renderCapResult;
      items1 = [metroRequire(Svg, size2), ];
      let tmp23Result4 = children;
      if (tmp23Result4) {
        const obj6 = { style: size1, children: children(fill) };
        tmp23Result4 = metroRequire(hasOwnProperty, obj6);
      }
      items1[1] = tmp23Result4;
      return metroImportDefault(hasOwnProperty, obj2);
    }
  }
];
const importDefaultResultResult = _createClass(CircularProgress, items);
let obj = { style: module_9536.object, size: oneOfType(items1).isRequired, fill: module_9536.number.isRequired, width: module_9536.number.isRequired, backgroundWidth: module_9536.number, tintColor: module_9536.string, tintTransparency: module_9536.bool, backgroundColor: module_9536.string, rotation: module_9536.number, lineCap: module_9536.string, arcSweepAngle: module_9536.number, children: module_9536.func, childrenContainerStyle: module_9536.object, padding: module_9536.number, renderCap: module_9536.func, dashedBackground: module_9536.object, dashedTint: module_9536.object };
module_9536 = module_9536_mod;
oneOfType = module_9536.oneOfType;
items1 = [module_9536.number, ];
module_9536 = module_9536_mod;
items1[1] = module_9536.instanceOf(Animated.Value);
importDefaultResultResult.propTypes = obj;
importDefaultResultResult.defaultProps = { tintColor: "black", tintTransparency: true, rotation: 90, lineCap: "butt", arcSweepAngle: 360, padding: 0, dashedBackground: { width: 0, gap: 0 }, dashedTint: { width: 0, gap: 0 } };

export default importDefaultResultResult;