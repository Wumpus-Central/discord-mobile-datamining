// === Module 5075: ? ===

// Module 5075
import pointsDiffer_mod from "pointsDiffer" /* 78 */;
import processColorElement_mod from "processColorElement" /* 80 */;
import module_65 from "module_65" /* 65 */;

let pointsDiffer = pointsDiffer_mod;
if ("default" in pointsDiffer) {
  pointsDiffer = pointsDiffer.default;
}
const obj = { startPoint: { diff: pointsDiffer }, endPoint: null, colors: null, locations: true, useAngle: true, angleCenter: null, angle: true, borderRadii: true };
let pointsDiffer = pointsDiffer_mod;
if ("default" in pointsDiffer) {
  pointsDiffer = pointsDiffer.default;
}
obj.endPoint = { diff: pointsDiffer };
let processColorElement = processColorElement_mod;
if ("default" in processColorElement) {
  processColorElement = processColorElement.default;
}
obj.colors = { process: processColorElement };
let pointsDiffer = pointsDiffer_mod;
if ("default" in pointsDiffer) {
  pointsDiffer = pointsDiffer.default;
}
const obj2 = { uiViewClassName: "RNLinearGradient", validAttributes: obj };
obj.angleCenter = { diff: pointsDiffer };

export default module_65.get("RNLinearGradient", () => obj2);
export const __INTERNAL_VIEW_CONFIG = obj2;