// === Module 4764: __INTERNAL_VIEW_CONFIG ===

// Module 4764 (__INTERNAL_VIEW_CONFIG)
import pointsDiffer from "pointsDiffer" /* 78 */;
import processColorElement from "processColorElement" /* 80 */;
import setRuntimeConfigProvider from "setRuntimeConfigProvider" /* 65 */;

if ("default" in pointsDiffer) {
  pointsDiffer = pointsDiffer.default;
}
let obj = { startPoint: { diff: pointsDiffer }, endPoint: null, colors: null, locations: true, useAngle: true, angleCenter: null, angle: true, borderRadii: true };
if ("default" in pointsDiffer) {
  pointsDiffer = pointsDiffer.default;
}
obj[1] = { diff: pointsDiffer };
if ("default" in processColorElement) {
  processColorElement = processColorElement.default;
}
obj[2] = { process: processColorElement };
if ("default" in pointsDiffer) {
  pointsDiffer = pointsDiffer.default;
}
obj = { uiViewClassName: "RNLinearGradient", validAttributes: obj };
obj[5] = { diff: pointsDiffer };

export default setRuntimeConfigProvider.get("RNLinearGradient", () => obj);
export const __INTERNAL_VIEW_CONFIG = obj;