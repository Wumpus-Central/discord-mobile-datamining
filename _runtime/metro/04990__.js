// === Module 4990: ? ===

// Module 4990
import pointsDiffer from "pointsDiffer" /* 78 */;
import processColorElement from "processColorElement" /* 80 */;
import module_65 from "module_65" /* 65 */;

if ("default" in pointsDiffer) {
  pointsDiffer = pointsDiffer.default;
}
let __INTERNAL_VIEW_CONFIG = { startPoint: { diff: pointsDiffer }, endPoint: null, colors: null, locations: true, useAngle: true, angleCenter: null, angle: true, borderRadii: true };
if ("default" in pointsDiffer) {
  pointsDiffer = pointsDiffer.default;
}
__INTERNAL_VIEW_CONFIG.endPoint = { diff: pointsDiffer };
if ("default" in processColorElement) {
  processColorElement = processColorElement.default;
}
__INTERNAL_VIEW_CONFIG.colors = { process: processColorElement };
if ("default" in pointsDiffer) {
  pointsDiffer = pointsDiffer.default;
}
__INTERNAL_VIEW_CONFIG = { uiViewClassName: "RNLinearGradient", validAttributes: __INTERNAL_VIEW_CONFIG, angleCenter: { diff: pointsDiffer } };

export default module_65.get("RNLinearGradient", () => obj);
export { __INTERNAL_VIEW_CONFIG };