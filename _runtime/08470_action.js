// _runtime/08470_action.js
import extractOpacityDefault from "08459_extractOpacity.js";
import extractBrushDefault from "08471_extractBrush.js";

importDefault = arg2;
const dependencyMap = arg6;
let closure_2 = { evenodd: 0, nonzero: 1 };
const action = { type: 0, payload: fn(17).processColor("black") };

export default function extractFill(arg0, arg1, arr) {
  ({ fill, fillRule, fillOpacity } = arg1);
  if (null != fill) {
    arr = arr.push("fill");
    if (!fill) {
      if (typeof fill !== "number") {
        let tmp5 = action;
      }
      arg0.fill = tmp5;
    }
    tmp5 = extractBrushDefault(fill);
  } else {
    arg0.fill = action;
    if (null != fillOpacity) {
      arr = arr.push("fillOpacity");
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
  }
}
