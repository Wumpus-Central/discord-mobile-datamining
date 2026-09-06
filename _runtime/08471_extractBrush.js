// _runtime/08471_extractBrush.js
import _mod17 from "metro/00017__.js";
import percentTo255 from "08472_percentTo255.js";

const processColor = _mod17.processColor;
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
      let obj = { type: 1, brushRef: match[1] };
      return obj;
    } else {
      obj = percentTo255;
      const tmp4 = processColor(obj.convertPercentageColor(str));
      if (typeof tmp4 === "number") {
        const action = { type: 0, payload: tmp4 };
        let tmp7 = action;
      } else {
        const _console = console;
        const _String = String;
        const _HermesInternal = HermesInternal;
        console.warn('"' + String(str) + '" is not a valid color or brush');
        tmp7 = null;
      }
      return tmp7;
    }
  }
}
