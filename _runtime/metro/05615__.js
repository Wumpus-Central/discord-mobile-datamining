// === Module 5615: ? ===

// Module 5615
import pointsDiffer_mod from "pointsDiffer" /* 78 */;
import processColorArray_mod from "processColorArray" /* 80 */;
import module_65 from "module_65" /* 65 */;

let processColorArray;
let pointsDiffer = pointsDiffer_mod;
if ("default" in pointsDiffer) {
  pointsDiffer = pointsDiffer.default;
}
const obj = { startPoint: { diff: pointsDiffer }, endPoint: { diff: pointsDiffer }, colors: { process: processColorArray }, locations: true, useAngle: true, angleCenter: { diff: pointsDiffer }, angle: true, borderRadii: true };
pointsDiffer = pointsDiffer_mod;
if ("default" in pointsDiffer) {
  pointsDiffer = pointsDiffer.default;
}
processColorArray = processColorArray_mod;
if ("default" in processColorArray) {
  processColorArray = processColorArray.default;
}
pointsDiffer = pointsDiffer_mod;
if ("default" in pointsDiffer) {
  pointsDiffer = pointsDiffer.default;
}
const obj2 = { uiViewClassName: "RNLinearGradient", validAttributes: obj };

export default module_65.get("RNLinearGradient", () => obj2);
export const __INTERNAL_VIEW_CONFIG = obj2;