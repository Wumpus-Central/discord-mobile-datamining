// === Module 4988: ? ===

// Module 4988
import _modDef4989 from "module_4989" /* 4989 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import metroRequire from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;
import noop from "module_19" /* 19 */;

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
let noop = fn(19);
({ createRef: closure_8, Component } = noop);
get_ActivityIndicator = fn(17);
({ processColor: closure_9, StyleSheet: c10, View: closure_11 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
function convertPoint(arg0, arg1) {

}
class LinearGradient {
  constructor() {
    self = this;
    items = [...arguments];
    tmp = hasOwnProperty(this, LinearGradient);
    items1 = [...items];
    tmp2 = closure_7;
    obj = closure_7(LinearGradient);
    tmp3 = metroRequire;
    if (closure_2_14()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    tmp3Result = tmp3(self, constructResult);
    tmp3Result.gradientRef = closure_8();
    return tmp3Result;
  }
}
_inherits(LinearGradient, Component);
const entry = {
  key: "setNativeProps",
  value: function setNativeProps(arg0) {
    const current = this.gradientRef.current;
    current.setNativeProps(arg0);
  }
};
let items = [
  entry,
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
      const tmp5 = closure_1_10.flatten(style) || {};
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
      const merged = Object.assign(_objectWithoutProperties(props, closure_3));
      obj.style = style;
      obj = { style: { position: "absolute", top: 0, left: 0, bottom: 0, right: 0 }, colors: null, startPoint: null, endPoint: null, locations: null, useAngle: null, angleCenter: null, angle: null, borderRadii: null };
      let mapped = colors;
      const tmp = _objectWithoutProperties(props, closure_3);
      const tmp14 = map1;
      const tmp15 = closure_1_11;
      const tmp17 = closure_1_12;
      if (!LinearGradient.RN$Bridgeless) {
        mapped = colors.map(React7);
      }
      obj.colors = mapped;
      if (typeof convertPoint === "function") {
        const _Array = Array;
        let tmp23 = start;
        if (Array.isArray(start)) {
          const _console2 = console;
          const _HermesInternal = HermesInternal;
          console.warn("LinearGradient '" + "start" + "' property should be an object with fields 'x' and 'y', Array type is deprecated.");
          const point = { x: null, y: null };
          [obj3.x, obj3.y] = start;
          tmp23 = point;
        }
        obj.startPoint = tmp23;
        if (typeof tmp21 === "function") {
          const _Array2 = Array;
          let tmp25 = end;
          if (Array.isArray(end)) {
            const _console3 = console;
            const _HermesInternal2 = HermesInternal;
            console.warn("LinearGradient '" + "end" + "' property should be an object with fields 'x' and 'y', Array type is deprecated.");
            const point1 = { x: null, y: null };
            [obj4.x, obj4.y] = end;
            tmp25 = point1;
          }
          obj.endPoint = tmp25;
          let substr = null;
          if (locations) {
            substr = locations.slice(0, colors.length);
          }
          obj.locations = substr;
          obj.useAngle = useAngle;
          if (typeof tmp21 === "function") {
            const _Array3 = Array;
            let tmp28 = angleCenter;
            if (Array.isArray(angleCenter)) {
              const _console4 = console;
              const _HermesInternal3 = HermesInternal;
              console.warn("LinearGradient '" + "angleCenter" + "' property should be an object with fields 'x' and 'y', Array type is deprecated.");
              const point2 = { x: null, y: null };
              [obj5.x, obj5.y] = angleCenter;
              tmp28 = point2;
            }
            obj.angleCenter = tmp28;
            obj.angle = angle;
            obj.borderRadii = items;
            const items1 = [tmp17(tmp18, obj), children];
            obj.children = items1;
            return tmp14(tmp15, obj);
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      } else {
        throw new TypeError("Trying to call a non-function");
      }
      tmp18 = _modDef4989;
    }
  }
];
const importDefaultResultResult = _createClass(LinearGradient, items);
importDefaultResultResult.defaultProps = { start: { x: 0.5, y: 0 }, end: { x: 0.5, y: 1 } };

export default importDefaultResultResult;