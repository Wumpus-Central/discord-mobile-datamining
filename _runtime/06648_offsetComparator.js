// === Module 6648: offsetComparator ===

// Module 6648 (offsetComparator)
import extractOpacityDefault from "extractOpacity" /* 6577 */;
import appendTransformPropsDefault from "appendTransformProps" /* 6579 */;
import _modDef6649 from "module_6649" /* 6649 */;
import closure_2 from "noop" /* 19 */;
import { Children } from "noop" /* 19 */;
import { processColor } from "get ActivityIndicator" /* 17 */;

const re5 = /^([+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)(%?)$/;
function offsetComparator(arg0, arg1) {
  return arg0[0] - arg1[0];
}

export default function extractGradient(arg0, arg1) {
  importDefault = arg1;
  ({ id, children, gradientTransform, gradientUnits } = arg0);
  if (id) {
    if (children) {
      let mapped = Children.map(children, (arg0) => closure_1_2.cloneElement(arg0, { parent: closure_0 }));
    } else {
      mapped = [];
    }
    const items = [];
    let num7 = 0;
    if (0 < mapped.length) {
      while (true) {
        let props = mapped[num7].props;
        ({ style, offset } = props);
        let tmp5 = num7;
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
            let tmp27 = closure_5;
            match = num8.match(closure_5);
          }
          if (match) {
            break;
          } else {
            let _console = console;
            let _HermesInternal = HermesInternal;
            let warnResult = console.warn("\"" + num8 + "\" is not a valid number or percentage string.");
            let num10 = 0;
            num9 = 0;
          }
        }
        let tmp10 = stopColor;
        if (stopColor) {
          let tmp11 = processColor;
          tmp10 = processColor(stopColor);
        }
        if (typeof tmp10 === "number") {
          let _isNaN = isNaN;
          if (!isNaN(num9)) {
            let _Math = Math;
            let tmp12 = importDefault;
            let tmp13 = dependencyMap;
            let items1 = [num9, 16777215 & tmp10 | Math.round(255 * extractOpacityDefault(stopOpacity)) << 24];
            let arr = items.push(items1);
          }
          num7 = num7 + 1;
        }
        let _console2 = console;
        let _HermesInternal2 = HermesInternal;
        let str7 = "\"";
        let tmp15 = stopColor;
        let str8 = "\" is not a valid color or \"";
        let tmp16 = offset;
        let str9 = "\" is not a valid offset";
        let warnResult1 = console.warn("\"" + stopColor + "\" is not a valid color or \"" + offset + "\" is not a valid offset");
      }
    }
    const sorted = items.sort(offsetComparator);
    const items2 = [];
    for (let num11 = 0; num11 < length2; num11 = num11 + 1) {
      let tmp20 = items[num11];
      arr = items2.push(tmp20[0], tmp20[1]);
    }
    const obj = { name: null, gradient: null, children: null, gradientUnits: null, gradientTransform: null };
    obj[0] = id;
    obj[1] = items2;
    obj[2] = mapped;
    let num12 = gradientUnits;
    if (gradientUnits) {
      num12 = _modDef6649[gradientUnits];
    }
    if (!num12) {
      num12 = 0;
    }
    obj[3] = num12;
    if (!gradientTransform) {
      gradientTransform = tmp;
    }
    if (!gradientTransform) {
      gradientTransform = arg0;
    }
    obj[4] = appendTransformPropsDefault(gradientTransform);
    return obj;
  } else {
    return null;
  }
};