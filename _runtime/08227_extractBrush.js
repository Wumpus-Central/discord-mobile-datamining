// === Module 8227: extractBrush ===

// Module 8227 (extractBrush)
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import percentTo255 from "percentTo255" /* 8228 */;

const processColor = get_ActivityIndicator.processColor;
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
      match = str.match(closure_3);
    }
    if (match) {
      let obj = { type: 1, brushRef: null };
      obj[1] = match[1];
      return obj;
    } else {
      obj = percentTo255;
      const tmp4 = processColor(obj.convertPercentageColor(str));
      if (typeof tmp4 === "number") {
        obj = { type: 0, payload: null };
        obj[1] = tmp4;
        let tmp7 = obj;
      } else {
        const _console = console;
        const _String = String;
        const _HermesInternal = HermesInternal;
        console.warn("\"" + String(str) + "\" is not a valid color or brush");
        tmp7 = null;
      }
      return tmp7;
    }
  }
};