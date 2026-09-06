// _runtime/metro/04990__.js
import pointsDiffer from "../00078_pointsDiffer.js";
import processColorElement from "../00080_processColorElement.js";
import 00065__ from "00065__.js";

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