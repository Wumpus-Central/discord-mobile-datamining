// _runtime/04762__isNativeReflectConstruct.js
import noopDefault from "00019_noop.js";
import _inheritsDefault from "00098__inherits.js";
import LinearGradientDefault from "04763_LinearGradient.js";
import closure_4 from "metro/00109__objectWithoutProperties.js";
import closure_5 from "metro/00041__classCallCheck.js";
import closure_6 from "metro/00093__possibleConstructorReturn.js";
import closure_7 from "00095__getPrototypeOf.js";
import importDefaultResult from "metro/00042__createClass.js";
import noop from "00019_noop.js";
import get_ActivityIndicator from "00017_get_ActivityIndicator.js";
import jsxProd from "react/00021_jsxProd.js";

const LinearGradient = global;
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
let closure_3 = ["children", "colors", "end", "locations", "useAngle", "angleCenter", "angle", "start", "style"];
({ createRef: closure_8, Component } = noop);
noopDefault;
({ processColor: c9, StyleSheet: c10, View: unpackModuleId } = get_ActivityIndicator);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
function convertPoint(arg0, arg1) {

}
class LinearGradient {
  constructor() {
    self = this;
    items = [...arguments];
    tmp = closure_5(this, LinearGradient);
    items1 = [...items];
    tmp2 = closure_7;
    obj = closure_7(LinearGradient);
    tmp3 = closure_6;
    if (_isNativeReflectConstruct()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    tmp3Result = tmp3(self, constructResult);
    tmp3Result.gradientRef = createRef();
    return tmp3Result;
  }
}
_inheritsDefault(LinearGradient, Component);
let items = [
  {
    key: "setNativeProps",
    value: function setNativeProps(arg0) {
      const current = this.gradientRef.current;
      current.setNativeProps(arg0);
    }
  },
  {
    key: "render",
    value: function render() {
      const props = this.props;
      ({ colors, end, locations, angleCenter, start, style } = props);
      ({ children, useAngle, angle } = props);
      let tmp2 = colors;
      if (colors) {
        tmp2 = locations;
      }
      if (tmp2) {
        tmp2 = colors.length !== locations.length;
      }
      if (tmp2) {
        const _console = console;
        console.warn("LinearGradient colors and locations props should be arrays of the same length");
      }
      const tmp5 = closure_10.flatten(style) || {};
      let tmp6 = tmp5.borderRadius || 0;
      const borderTopLeftRadius = tmp5.borderTopLeftRadius;
      let tmp7 = tmp6;
      if (typeof borderTopLeftRadius === "number") {
        tmp7 = borderTopLeftRadius;
      }
      const items = [tmp7, , , , , , , ];
      const borderTopLeftRadius2 = tmp5.borderTopLeftRadius;
      let tmp8 = tmp6;
      if (typeof borderTopLeftRadius2 === "number") {
        tmp8 = borderTopLeftRadius2;
      }
      items[1] = tmp8;
      const borderTopRightRadius = tmp5.borderTopRightRadius;
      let tmp9 = tmp6;
      if (typeof borderTopRightRadius === "number") {
        tmp9 = borderTopRightRadius;
      }
      items[2] = tmp9;
      const borderTopRightRadius2 = tmp5.borderTopRightRadius;
      let tmp10 = tmp6;
      if (typeof borderTopRightRadius2 === "number") {
        tmp10 = borderTopRightRadius2;
      }
      items[3] = tmp10;
      const borderBottomRightRadius = tmp5.borderBottomRightRadius;
      let tmp11 = tmp6;
      if (typeof borderBottomRightRadius === "number") {
        tmp11 = borderBottomRightRadius;
      }
      items[4] = tmp11;
      const borderBottomRightRadius2 = tmp5.borderBottomRightRadius;
      let tmp12 = tmp6;
      if (typeof borderBottomRightRadius2 === "number") {
        tmp12 = borderBottomRightRadius2;
      }
      items[5] = tmp12;
      const borderBottomLeftRadius = tmp5.borderBottomLeftRadius;
      let tmp13 = tmp6;
      if (typeof borderBottomLeftRadius === "number") {
        tmp13 = borderBottomLeftRadius;
      }
      items[6] = tmp13;
      const borderBottomLeftRadius2 = tmp5.borderBottomLeftRadius;
      if (typeof borderBottomLeftRadius2 === "number") {
        tmp6 = borderBottomLeftRadius2;
      }
      items[7] = tmp6;
      let obj = { ref: this.gradientRef };
      const merged = Object.assign(callback(props, closure_3));
      obj.style = style;
      obj = { style: { position: "absolute", top: 0, left: 0, bottom: 0, right: 0 }, colors: null, startPoint: null, endPoint: null, locations: null, useAngle: null, angleCenter: null, angle: null, borderRadii: null };
      let mapped = colors;
      const tmp = callback(props, closure_3);
      const tmp14 = closure_13;
      const tmp15 = closure_11;
      const tmp17 = closure_12;
      if (!LinearGradient.RN$Bridgeless) {
        mapped = colors.map(closure_9);
      }
      obj[1] = mapped;
      if (typeof convertPoint !== "function") {
        HermesBuiltin.throwTypeError();
      }
      let tmp22 = start;
      if (Array.isArray(start)) {
        const _console2 = console;
        const _HermesInternal = HermesInternal;
        console.warn("LinearGradient '" + "start" + "' property should be an object with fields 'x' and 'y', Array type is deprecated.");
        obj = { x: null, y: null };
        [obj3[0], obj3[1]] = start;
        tmp22 = obj;
      }
      obj[2] = tmp22;
      if (typeof convertPoint !== "function") {
        HermesBuiltin.throwTypeError();
      }
      let tmp24 = end;
      if (Array.isArray(end)) {
        const _console3 = console;
        const _HermesInternal2 = HermesInternal;
        console.warn("LinearGradient '" + "end" + "' property should be an object with fields 'x' and 'y', Array type is deprecated.");
        [obj4[0], obj4[1]] = end;
        tmp24 = { x: null, y: null };
        obj1 = { x: null, y: null };
      }
      obj[3] = tmp24;
      let substr = null;
      if (locations) {
        substr = locations.slice(0, colors.length);
      }
      obj[4] = substr;
      obj[5] = useAngle;
      if (typeof convertPoint !== "function") {
        HermesBuiltin.throwTypeError();
      }
      let tmp27 = angleCenter;
      if (Array.isArray(angleCenter)) {
        const _console4 = console;
        const _HermesInternal3 = HermesInternal;
        console.warn("LinearGradient '" + "angleCenter" + "' property should be an object with fields 'x' and 'y', Array type is deprecated.");
        [obj5[0], obj5[1]] = angleCenter;
        tmp27 = { x: null, y: null };
        const obj2 = { x: null, y: null };
      }
      obj[6] = tmp27;
      obj[7] = angle;
      obj[8] = items;
      const items1 = [tmp17(LinearGradientDefault, obj), children];
      obj.children = items1;
      return tmp14(tmp15, obj);
    }
  }
];
const importDefaultResultResult = importDefaultResult(LinearGradient, items);
importDefaultResultResult.defaultProps = { start: { x: 0.5, y: 0 }, end: { x: 0.5, y: 1 } };

export default importDefaultResultResult;