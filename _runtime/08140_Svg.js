// === Module 8140: Svg ===

// Module 8140 (Svg)
import Fragment from "Fragment" /* 21 */;
import extractOpacityDefault from "extractOpacity" /* 8142 */;
import extractResponderDefault from "extractResponder" /* 8143 */;
import extractTransform from "extractTransform" /* 8144 */;
import _modDef8148 from "module_8148" /* 8148 */;
import extractViewBoxDefault from "extractViewBox" /* 8149 */;
import _modDef8150 from "module_8150" /* 8150 */;
import multiplyMatricesDefault from "multiplyMatrices" /* 8160 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import metroRequire from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;

let Platform;
let StyleSheet;
let metroImportAll;
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
let closure_3 = ["style", "opacity", "viewBox", "children", "onLayout", "preserveAspectRatio"];
({ findNodeHandle: metroImportAll, Platform, StyleSheet } = react_native);
const jsx = Fragment.jsx;
const svg = StyleSheet.create({ svg: { backgroundColor: "transparent", borderWidth: 0 } }).svg;
class Svg {
  constructor() {
    let constructResult;
    const self = this;
    const items = [...arguments];
    let closure_0;
    let tmp = _classCallCheck(this, Svg);
    const items1 = [...items];
    const obj = _getPrototypeOf(Svg);
    if (_isNativeReflectConstruct()) {
      let tmp5 = globalThis;
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    const tmp3Result = metroRequire(self, constructResult);
    closure_0 = tmp3Result;
    tmp3Result.measureInWindow = (arg0) => {
      const root = closure_0.root;
      if (root) {
        root.measureInWindow(arg0);
      }
    };
    tmp3Result.measure = (arg0) => {
      const root = closure_0.root;
      if (root) {
        root.measure(arg0);
      }
    };
    tmp3Result.measureLayout = (arg0, arg1, arg2) => {
      const root = closure_0.root;
      if (root) {
        root.measureLayout(arg0, arg1, arg2);
      }
    };
    tmp3Result.setNativeProps = (arg0) => {
      const root = closure_0.root;
      if (root) {
        root.setNativeProps(arg0);
      }
    };
    tmp3Result.toDataURL = (arg0, arg1) => {
      const tmp = arg0;
      if (tmp) {
        const tmp5 = closure_2_8(closure_0.root);
        const _default = Svg(closure_2_2[9]).default;
        _default.toDataURL(tmp5, arg1, arg0);
      }
    };
    return tmp3Result;
  }
}
_inherits(Svg, multiplyMatricesDefault);
const entry = {
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
    const tmp2 = _objectWithoutProperties(props, closure_3);
    let applyResult = style;
    if (Array.isArray(style)) {
      const _Object = Object;
      const items = [{}];
      HermesBuiltin.arraySpread(items, style, 1);
      const _Object2 = Object;
      applyResult = HermesBuiltin.apply(assign, items, Object);
    }
    const obj = {};
    const merged = Object.assign(applyResult);
    const merged1 = Object.assign(tmp2);
    ({ width, height, focusable } = obj);
    let tmp11 = undefined === width;
    ({ transform, font, fill, fillOpacity, fillRule, stroke, strokeWidth, strokeOpacity, strokeDasharray, strokeDashoffset, strokeLinecap, strokeLinejoin, strokeMiterlimit, position } = obj);
    if (tmp11) {
      tmp11 = undefined === height;
    }
    if (tmp11) {
      tmp11 = "absolute" !== position;
    }
    if (tmp11) {
      height = "100%";
      width = "100%";
    }
    tmp2.focusable = Boolean(focusable) && "false" !== focusable;
    let items1 = [svg];
    const BooleanResult = Boolean(focusable) && "false" !== focusable;
    if (style) {
      items1.push(style);
    }
    let num2 = NaN;
    if (null != opacity) {
      num2 = extractOpacityDefault(opacity);
    }
    const obj2 = {};
    let flag = false;
    if (!isNaN(num2)) {
      obj2.opacity = num2;
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
        const _isNaN2 = isNaN;
        const isNaNResult = isNaN(parsed) || "%" === width[width.length - 1];
        const isNaNResult1 = isNaN(parsed1) || "%" === height[height.length - 1];
        if (isNaNResult) {
          parsed = width;
        }
        obj2.width = parsed;
        if (isNaNResult1) {
          parsed1 = height;
        }
        obj2.height = parsed1;
        obj2.flex = 0;
        flag2 = true;
      }
    }
    if (flag2) {
      items1.push(obj2);
    }
    if (items1.length <= 1) {
      items1 = svg;
    }
    tmp2.style = items1;
    if (null != width) {
      tmp2.bbWidth = width;
    }
    if (null != height) {
      tmp2.bbHeight = height;
    }
    extractResponderDefault(tmp2, tmp2, this);
    const merged2 = Object.assign({}, StyleSheet.flatten(style));
    if (transform) {
      if (merged2.transform) {
        tmp2.transform = merged2.transform;
        merged2.transform = undefined;
      }
      const obj3 = extractTransform;
      tmp2.transform = obj3.extractTransformSvgView(tmp2);
    }
    _modDef8148;
    const merged3 = Object.assign(tmp2);
    const merged4 = Object.assign(extractViewBoxDefault({ viewBox, preserveAspectRatio }));
    return <tmp22Result ref={function ref(arg0) {
      return self.refMethod(arg0);
    }}>{jsx(_modDef8150, { children, style: merged2, font, fill, fillOpacity, fillRule, stroke, strokeWidth, strokeOpacity, strokeDasharray, strokeDashoffset, strokeLinecap, strokeLinejoin, strokeMiterlimit, onLayout })}</tmp22Result>;
  }
};
let items = [entry];
const importDefaultResultResult = _createClass(Svg, items);
importDefaultResultResult.displayName = "Svg";
importDefaultResultResult.defaultProps = { preserveAspectRatio: "xMidYMid meet" };

export default importDefaultResultResult;