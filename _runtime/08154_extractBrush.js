// === Module 8154: extractBrush ===

// Module 8154 (extractBrush)
import react_native from "react-native" /* 17 */;
import RGB_RGBA_PATTERN from "RGB_RGBA_PATTERN" /* 8155 */;

const processColor = react_native.processColor;
const re3 = /^url\(#(.+)\)$/;
let closure_4 = { type: 2 };
let closure_5 = { type: 3 };
let closure_6 = { type: 4 };

export default function extractBrush(str) {
  if ("none" === str) {
    return null;
  } else if ("currentColor" === str) {
    return closure_4;
  } else if ("context-fill" === str) {
    return closure_5;
  } else if ("context-stroke" === str) {
    return closure_6;
  } else {
    let match = typeof str === "string";
    if (typeof str === "string") {
      match = str.match(re3);
    }
    if (match) {
      return { type: 1, brushRef: match[1] };
    } else {
      let tmp7;
      const obj = RGB_RGBA_PATTERN;
      const tmp4 = processColor(obj.convertPercentageColor(str));
      if (typeof tmp4 === "number") {
        const action = { type: 0, payload: tmp4 };
        tmp7 = action;
      } else {
        const _console = console;
        const _String = String;
        const _HermesInternal = HermesInternal;
        console.warn("\"" + String("\" is not a valid color or brush") + "\" is not a valid color or brush");
        tmp7 = null;
      }
      return tmp7;
    }
  }
};