// === Module 8186: extractFill ===

// Module 8186 (extractFill)
import react_native from "react-native" /* 17 */;
import extractOpacityDefault from "extractOpacity" /* 8175 */;
import extractBrushDefault from "extractBrush" /* 8187 */;

let closure_2 = { evenodd: 0, nonzero: 1 };
const action = { type: 0, payload: react_native.processColor("black") };

export default function extractFill(arg0, arg1, arr) {
  let fill;
  let fillOpacity;
  let fillRule;
  ({ fill, fillRule, fillOpacity } = arg1);
  if (null != fill) {
    arr = arr.push("fill");
    if (!fill) {
      let tmp5;
      if (typeof fill !== "number") {
        tmp5 = action;
      }
      arg0.fill = tmp5;
    }
    tmp5 = extractBrushDefault(fill);
  } else {
    arg0.fill = action;
  }
  if (null != fillOpacity) {
    arr.push("fillOpacity");
    arg0.fillOpacity = extractOpacityDefault(fillOpacity);
  }
  if (null != fillRule) {
    arr.push("fillRule");
    let num2 = 1;
    if (fillRule) {
      num2 = 1;
      if (0 === closure_2[fillRule]) {
        num2 = 0;
      }
    }
    arg0.fillRule = num2;
  }
};