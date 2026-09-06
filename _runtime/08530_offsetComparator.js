// _runtime/08530_offsetComparator.js
import extractOpacityDefault from "08459_extractOpacity.js";
import appendTransformPropsDefault from "08461_appendTransformProps.js";
import unitsDefault from "08531_units.js";
import noop from "metro/00019__.js";

const Children = fn(19).Children;
const processColor = fn(17).processColor;
const re5 = /^([+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)(%?)$/;
function offsetComparator(arg0, arg1) {
  return arg0[0] - arg1[0];
}

export default function extractGradient(gradientTransform, parent) {
  importDefault = parent;
  ({ id, children, gradientTransform, gradientUnits } = gradientTransform);
  if (id) {
    if (children) {
      let mapped = Children.map(children, (onlyResult) => noop.cloneElement(onlyResult, { parent }));
    } else {
      mapped = [];
    }
    const items = [];
    let num7 = 0;
    if (0 < length) {
      while (true) {
        let props = mapped[num7].props;
        ({ style, offset } = props);
        if (undefined === offset) {
          let offset2 = style;
          if (style) {
            offset2 = style.offset;
          }
          offset = offset2;
        }
        let stopColor = props.stopColor;
        if (undefined === stopColor) {
          let str6 = style;
          if (style) {
            str6 = style.stopColor;
          }
          if (!str6) {
            str6 = "#000";
          }
          stopColor = str6;
        }
        let stopOpacity = props.stopOpacity;
        if (undefined === stopOpacity) {
          let stopOpacity2 = style;
          if (style) {
            stopOpacity2 = style.stopOpacity;
          }
          stopOpacity = stopOpacity2;
        }
        let num8 = offset;
        if (!offset) {
          num8 = 0;
        }
        let num9 = num8;
        if (typeof num8 !== "number") {
          if (typeof num8 === "object") {
            if (typeof num8.__getAnimatedValue === "function") {
              num9 = num8.__getAnimatedValue();
            }
          }
          let match = typeof num8 === "string";
          if (typeof num8 === "string") {
            match = num8.match(closure_5);
          }
          if (match) {
            break;
          } else {
            let _console = console;
            let _HermesInternal = HermesInternal;
            let warnResult = console.warn('"' + num8 + '" is not a valid number or percentage string.');
            num9 = 0;
          }
        }
        let tmp10 = stopColor;
        if (stopColor) {
          tmp10 = processColor(stopColor);
        }
        if (typeof tmp10 === "number") {
          let _isNaN = isNaN;
          if (!isNaN(num9)) {
            let _Math = Math;
            let items1 = [num9, (16777215 & tmp10) | (Math.round(255 * extractOpacityDefault(stopOpacity)) << 24)];
            let arr = items.push(items1);
          }
          num7 = num7 + 1;
        }
        let _console2 = console;
        let _HermesInternal2 = HermesInternal;
        let str7 = '"';
        let str8 = '" is not a valid color or "';
        let str9 = '" is not a valid offset';
        let warnResult1 = console.warn(
          '"' + stopColor + '" is not a valid color or "' + offset + '" is not a valid offset',
        );
      }
    }
    const sorted = items.sort(offsetComparator);
    const items2 = [];
    for (let num11 = 0; num11 < length2; num11 = num11 + 1) {
      let tmp20 = items[num11];
      arr = items2.push(tmp20[0], tmp20[1]);
    }
    const obj = { name: id, gradient: items2, children: mapped, gradientUnits: null, gradientTransform: null };
    let num12 = gradientUnits;
    if (gradientUnits) {
      num12 = unitsDefault[gradientUnits];
    }
    if (!num12) {
      num12 = 0;
    }
    obj.gradientUnits = num12;
    if (!gradientTransform) {
      gradientTransform = tmp;
    }
    obj.gradientTransform = appendTransformPropsDefault(gradientTransform);
    return obj;
  } else {
    return null;
  }
}
