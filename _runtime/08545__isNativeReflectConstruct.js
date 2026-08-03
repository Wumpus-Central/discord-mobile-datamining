import _objectWithoutProperties from "_objectWithoutProperties";
import _classCallCheck from "_classCallCheck";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import importDefaultResult from "_createClass";
import "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import { jsx } from "jsxProd";

let Platform;
let StyleSheet;
let metroImportAll;
const Svg = arg1;
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
let closure_3 = ["style", "opacity", "viewBox", "children", "onLayout", "preserveAspectRatio"];
({ findNodeHandle: metroImportAll, Platform, StyleSheet } = get_ActivityIndicator);
const svg = StyleSheet.create({ svg: { backgroundColor: "transparent", borderWidth: 0 } }).svg;
class Svg {
  constructor() {
    self = this;
    items = [...arguments];
    apply = undefined;
    tmp = _isNativeReflectConstruct(this, apply);
    items1 = [...items];
    tmp2 = __esModule;
    obj = __esModule(apply);
    tmp3 = __esModule;
    if (_isNativeReflectConstruct()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    tmp3Result = tmp3(self, constructResult);
    apply = tmp3Result;
    tmp3Result.measureInWindow = (arg0) => {
      const root = _undefined.root;
      if (root) {
        root.measureInWindow(arg0);
      }
    };
    tmp3Result.measure = (arg0) => {
      const root = _undefined.root;
      if (root) {
        root.measure(arg0);
      }
    };
    tmp3Result.measureLayout = (arg0, arg1, arg2) => {
      const root = _undefined.root;
      if (root) {
        root.measureLayout(arg0, arg1, arg2);
      }
    };
    tmp3Result.setNativeProps = (arg0) => {
      const root = _undefined.root;
      if (root) {
        root.setNativeProps(arg0);
      }
    };
    tmp3Result.toDataURL = (arg0, arg1) => {
      if (arg0) {
        const tmp4 = outer1_8(_undefined.root);
        _undefined(outer1_2[9]).default.toDataURL(tmp4, arg1, arg0);
        const _default = _undefined(outer1_2[9]).default;
      }
    };
    return tmp3Result;
  }
}
require("_inherits")(Svg, require("_isNativeReflectConstruct"));
let items = [
  {
    key: "render",
    value: function render() {
      let children;
      let fill;
      let fillOpacity;
      let fillRule;
      let focusable;
      let font;
      let height;
      let onLayout;
      let opacity;
      let position;
      let preserveAspectRatio;
      let stroke;
      let strokeDasharray;
      let strokeDashoffset;
      let strokeLinecap;
      let strokeLinejoin;
      let strokeMiterlimit;
      let strokeOpacity;
      let strokeWidth;
      let style;
      let transform;
      let viewBox;
      let width;
      const self = this;
      const props = this.props;
      ({ style, opacity } = props);
      ({ viewBox, children, onLayout, preserveAspectRatio } = props);
      const tmp = callback(props, closure_3);
      let applyResult = style;
      if (Array.isArray(style)) {
        const _Object = Object;
        const items = [{}];
        HermesBuiltin.arraySpread(style, 1);
        const _Object2 = Object;
        applyResult = HermesBuiltin.apply(items, Object);
      }
      let obj = {};
      const merged = Object.assign(applyResult);
      const merged1 = Object.assign(tmp);
      ({ width, height, focusable } = obj);
      let tmp10 = undefined === width;
      ({ transform, font, fill, fillOpacity, fillRule, stroke, strokeWidth, strokeOpacity, strokeDasharray, strokeDashoffset, strokeLinecap, strokeLinejoin, strokeMiterlimit, position } = obj);
      if (tmp10) {
        tmp10 = undefined === height;
      }
      if (tmp10) {
        tmp10 = "absolute" !== position;
      }
      if (tmp10) {
        height = "100%";
        width = "100%";
      }
      let BooleanResult = Boolean(focusable);
      if (BooleanResult) {
        BooleanResult = "false" !== focusable;
      }
      tmp.focusable = BooleanResult;
      let items1 = [svg];
      if (style) {
        items1.push(style);
      }
      let num2 = NaN;
      if (null != opacity) {
        num2 = importDefault(8547)(opacity);
      }
      obj = {};
      let flag = false;
      if (!isNaN(num2)) {
        obj.opacity = num2;
        flag = true;
      }
      let flag2 = flag;
      if (width) {
        flag2 = flag;
        if (height) {
          const _parseInt = parseInt;
          let parsed = parseInt(width, 10);
          const _parseInt2 = parseInt;
          let parsed1 = parseInt(height, 10);
          const _isNaN = isNaN;
          let isNaNResult = isNaN(parsed);
          if (!isNaNResult) {
            isNaNResult = "%" === width[width.length - 1];
          }
          const _isNaN2 = isNaN;
          let isNaNResult1 = isNaN(parsed1);
          if (!isNaNResult1) {
            isNaNResult1 = "%" === height[height.length - 1];
          }
          if (isNaNResult) {
            parsed = width;
          }
          obj.width = parsed;
          if (isNaNResult1) {
            parsed1 = height;
          }
          obj.height = parsed1;
          obj.flex = 0;
          flag2 = true;
        }
      }
      if (flag2) {
        items1.push(obj);
      }
      if (items1.length <= 1) {
        items1 = svg;
      }
      tmp.style = items1;
      if (null != width) {
        tmp.bbWidth = width;
      }
      if (null != height) {
        tmp.bbHeight = height;
      }
      importDefault(8548)(tmp, tmp, this);
      const merged2 = Object.assign({}, StyleSheet.flatten(style));
      if (transform) {
        if (merged2.transform) {
          tmp.transform = merged2.transform;
          merged2.transform = undefined;
        }
        tmp.transform = self(8549).extractTransformSvgView(tmp);
        const obj3 = self(8549);
      }
      obj = {};
      const merged3 = Object.assign(tmp);
      obj.ref = function ref(arg0) {
        return self.refMethod(arg0);
      };
      const merged4 = Object.assign(tmp21(8554)({ viewBox, preserveAspectRatio }));
      obj.children = jsx(importDefault(8555), { children, style: merged2, font, fill, fillOpacity, fillRule, stroke, strokeWidth, strokeOpacity, strokeDasharray, strokeDashoffset, strokeLinecap, strokeLinejoin, strokeMiterlimit, onLayout });
      return jsx(importDefault(8553), {});
    }
  }
];
const importDefaultResultResult = importDefaultResult(Svg, items);
importDefaultResultResult.displayName = "Svg";
importDefaultResultResult.defaultProps = { preserveAspectRatio: "xMidYMid meet" };

export default importDefaultResultResult;