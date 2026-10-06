// === Module 5613: ? ===

// Module 5613
import _modDef5614 from "module_5614" /* 5614 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import metroRequire from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;

let Component;
let c10;
let c9;
let closure_12;
let map1;
let metroImportAll;
let unpackModuleId;
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
let closure_3 = ["children", "colors", "end", "locations", "useAngle", "angleCenter", "angle", "start", "style"];
let react = react_mod;
({ createRef: metroImportAll, Component } = react);
react = react_mod;
({ processColor: c9, StyleSheet: c10, View: unpackModuleId } = react_native);
({ jsx: closure_12, jsxs: map1 } = Fragment);
function convertPoint(arg0, arg1) {

}
class LinearGradient {
  constructor() {
    let constructResult;
    const self = this;
    const items = [...arguments];
    _classCallCheck(this, LinearGradient);
    const items1 = [...items];
    const obj = _getPrototypeOf(LinearGradient);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    const tmp3Result = metroRequire(self, constructResult);
    tmp3Result.gradientRef = metroImportAll();
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
      let angle;
      let angleCenter;
      let children;
      let colors;
      let end;
      let locations;
      let mapped;
      let start;
      let style;
      let useAngle;
      const props = this.props;
      ({ colors, end, locations, angleCenter, start, style } = props);
      ({ children, useAngle, angle } = props);
      const tmp = _objectWithoutProperties(props, closure_3);
      const tmp2 = colors && locations && colors.length !== locations.length;
      if (tmp2) {
        const _console = console;
        console.warn("LinearGradient colors and locations props should be arrays of the same length");
      }
      const tmp5 = authStore.flatten(style) || {};
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
      const obj = { ref: this.gradientRef, style };
      const merged = Object.assign(tmp);
      const obj2 = { style: { position: "absolute", top: 0, left: 0, bottom: 0, right: 0 }, colors: mapped, startPoint: null, endPoint: null, locations: null, useAngle: null, angleCenter: null, angle: null, borderRadii: null };
      mapped = colors;
      const tmp18 = _modDef5614;
      if (!global.RN$Bridgeless) {
        mapped = colors.map(React4);
      }
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
        obj2.startPoint = tmp23;
        if (typeof convertPoint === "function") {
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
          obj2.endPoint = tmp25;
          let substr = null;
          if (locations) {
            substr = locations.slice(0, colors.length);
          }
          obj2.locations = substr;
          obj2.useAngle = useAngle;
          if (typeof convertPoint === "function") {
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
            obj2.angleCenter = tmp28;
            obj2.angle = angle;
            obj2.borderRadii = items;
            const items1 = [closure_12(tmp18, obj2), children];
            obj.children = items1;
            return map1(unpackModuleId, obj);
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
  }
];
const importDefaultResultResult = _createClass(LinearGradient, items);
importDefaultResultResult.defaultProps = { start: { x: 0.5, y: 0 }, end: { x: 0.5, y: 1 } };

export default importDefaultResultResult;