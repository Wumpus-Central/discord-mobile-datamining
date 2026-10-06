// === Module 8246: extractGradient ===

// Module 8246 (extractGradient)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 19 */;
import extractOpacityDefault from "extractOpacity" /* 8175 */;
import extractTransformDefault from "extractTransform" /* 8177 */;
import unitsDefault from "units" /* 8247 */;

const react = react2;
let importDefault;

const Children = react2.Children;
const processColor = react_native.processColor;
const re5 = /^([+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)(%?)$/;
function offsetComparator(arg0, arg1) {
  return arg0[0] - arg1[0];
}

export default function extractGradient(gradientTransform, parent) {
  let children;
  let gradientUnits;
  let id;
  let num10;
  let offset;
  let style;
  let tmp29;
  importDefault = parent;
  ({ id, children, gradientTransform, gradientUnits } = gradientTransform);
  if (id) {
    let mapped;
    let num9;
    if (children) {
      mapped = Children.map(children, (onlyResult) => {
        const obj = { parent };
        return react.cloneElement(onlyResult, obj);
      });
    } else {
      mapped = [];
    }
    const items = [];
    let num7 = 0;
    if (0 < mapped.length) {
      while (true) {
        let props = mapped[num7].props;
        ({ style, offset } = props);
        if (undefined === offset) {
          let tmp6 = style && style.offset;
          offset = tmp6;
        }
        let stopColor = props.stopColor;
        if (undefined === stopColor) {
          let tmp7 = style && style.stopColor || "#000";
          stopColor = tmp7;
        }
        let stopOpacity = props.stopOpacity;
        if (undefined === stopOpacity) {
          let tmp8 = style && style.stopOpacity;
          stopOpacity = tmp8;
        }
        let str6 = offset || 0;
        let __getAnimatedValueResult = str6;
        if (typeof str6 !== "number") {
          let num8;
          if (typeof str6 === "object") {
            if (typeof str6.__getAnimatedValue === "function") {
              __getAnimatedValueResult = str6.__getAnimatedValue();
            }
          }
          let match = typeof str6 === "string";
          if (typeof str6 === "string") {
            match = str6.match(closure_5);
          }
          if (match) {
            let tmp12 = +match[1];
            num8 = match[2] ? tmp12 / 100 : tmp12;
          } else {
            let _console = console;
            let _HermesInternal = HermesInternal;
            let warnResult = console.warn("\"" + str6 + "\" is not a valid number or percentage string.");
            num8 = 0;
          }
          __getAnimatedValueResult = num8;
        }
        let tmp13 = stopColor && processColor(stopColor);
        if (typeof tmp13 === "number") {
          let _isNaN = isNaN;
          if (!isNaN(__getAnimatedValueResult)) {
            let _Math = Math;
            let items1 = [__getAnimatedValueResult, 16777215 & tmp13 | Math.round(255 * extractOpacityDefault(stopOpacity)) << 24];
            let arr = items.push(items1);
          }
          num7 = num7 + 1;
          if (num7 >= length) {
            break;
          }
        }
        let _console2 = console;
        let _HermesInternal2 = HermesInternal;
        let str7 = "\"";
        let str8 = "\" is not a valid color or \"";
        let str9 = "\" is not a valid offset";
        let warnResult1 = console.warn("\"" + stopColor + "\" is not a valid color or \"" + offset + "\" is not a valid offset");
      }
    }
    const sorted = items.sort(offsetComparator);
    const items2 = [];
    const length2 = items.length;
    for (let num9 = 0; num9 < length2; num9 = num9 + 1) {
      let tmp23 = items[num9];
      let arr2 = items2.push(tmp23[0], tmp23[1]);
    }
    let obj = { name: id, gradient: items2, children: mapped, gradientUnits: num10, gradientTransform: tmp29(gradientTransform) };
    num10 = gradientUnits && unitsDefault[gradientUnits] || 0;
    tmp29 = extractTransformDefault;
    if (!gradientTransform) {
      gradientTransform = tmp;
    }
    return obj;
  } else {
    return null;
  }
};