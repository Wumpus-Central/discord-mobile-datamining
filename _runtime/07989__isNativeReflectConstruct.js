// _runtime/07989__isNativeReflectConstruct.js
import noopAll from "00019_noop.js";
import _inheritsDefault from "00098__inherits.js";
import extractOpacityDefault from "07991_extractOpacity.js";
import keysDefault from "07992_keys.js";
import __INTERNAL_VIEW_CONFIGDefault from "metro/07997___INTERNAL_VIEW_CONFIG.js";
import _isNativeReflectConstructDefault from "07999__isNativeReflectConstruct.js";
import _isNativeReflectConstructDefault2 from "08009__isNativeReflectConstruct.js";
import closure_4 from "metro/00109__objectWithoutProperties.js";
import closure_5 from "metro/00041__classCallCheck.js";
import closure_6 from "metro/00093__possibleConstructorReturn.js";
import closure_7 from "00095__getPrototypeOf.js";
import importDefaultResult from "metro/00042__createClass.js";
import get_ActivityIndicator from "00017_get_ActivityIndicator.js";
import { jsx } from "react/00021_jsxProd.js";

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
    closure_0 = !callResult;
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {
  }
}
let closure_3 = ["style", "opacity", "viewBox", "children", "onLayout", "preserveAspectRatio"];
noopAll;
({ findNodeHandle: closure_8, Platform, StyleSheet } = get_ActivityIndicator);
const svg = StyleSheet.create({ svg: { backgroundColor: "transparent", borderWidth: 0 } }).svg;
class Svg {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = closure_5(this, closure_0);
    items1 = [...items];
    tmp2 = closure_7;
    obj = closure_7(closure_0);
    tmp3 = closure_6;
    if (_isNativeReflectConstruct()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    tmp3Result = tmp3(self, constructResult);
    closure_0 = tmp3Result;
    tmp3Result.measureInWindow = (arg0) => {
      const root = lib.root;
      if (root) {
        root.measureInWindow(arg0);
      }
    };
    tmp3Result.measure = (arg0) => {
      const root = lib.root;
      if (root) {
        root.measure(arg0);
      }
    };
    tmp3Result.measureLayout = (arg0, arg1, arg2) => {
      const root = lib.root;
      if (root) {
        root.measureLayout(arg0, arg1, arg2);
      }
    };
    tmp3Result.setNativeProps = (arg0) => {
      const root = lib.root;
      if (root) {
        root.setNativeProps(arg0);
      }
    };
    tmp3Result.toDataURL = (arg0, arg1) => {
      if (arg0) {
        const tmp4 = closure_1_8(lib.root);
        lib(closure_1_2[9]).default.toDataURL(tmp4, arg1, arg0);
        const _default = lib(closure_1_2[9]).default;
      }
    };
    return tmp3Result;
  }
}
_inheritsDefault(Svg, _isNativeReflectConstructDefault2);
let items = [
  {
    key: "render",
    value: function render() {
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
        num2 = extractOpacityDefault(opacity);
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
      keysDefault(tmp, tmp, this);
      const merged2 = Object.assign({}, StyleSheet.flatten(style));
      if (transform) {
        if (merged2.transform) {
          tmp.transform = merged2.transform;
          merged2.transform = undefined;
        }
        tmp.transform = self(7993).extractTransformSvgView(tmp);
        const obj3 = self(7993);
      }
      obj = {};
      const merged3 = Object.assign(tmp);
      obj.ref = function ref(arg0) {
        return self.refMethod(arg0);
      };
      const merged4 = Object.assign(tmp21(7998)({ viewBox, preserveAspectRatio }));
      obj.children = jsx(_isNativeReflectConstructDefault, { children, style: merged2, font, fill, fillOpacity, fillRule, stroke, strokeWidth, strokeOpacity, strokeDasharray, strokeDashoffset, strokeLinecap, strokeLinejoin, strokeMiterlimit, onLayout });
      return jsx(__INTERNAL_VIEW_CONFIGDefault, {});
    }
  }
];
const importDefaultResultResult = importDefaultResult(Svg, items);
importDefaultResultResult.displayName = "Svg";
importDefaultResultResult.defaultProps = { preserveAspectRatio: "xMidYMid meet" };

export default importDefaultResultResult;