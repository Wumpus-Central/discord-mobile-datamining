// _runtime/metro/05608__.js
import pointsDiffer_mod from "../00078_pointsDiffer.js";
import processColorArray_mod from "../00080_processColorArray.js";
import 00065__ from "00065__.js";

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