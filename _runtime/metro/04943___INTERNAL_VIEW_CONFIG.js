// _runtime/metro/04943___INTERNAL_VIEW_CONFIG.js
import pointsDiffer from "../00078_pointsDiffer.js";
import processColorElement from "../00080_processColorElement.js";
import setRuntimeConfigProvider from "../00065_setRuntimeConfigProvider.js";

if ("default" in pointsDiffer) {
  pointsDiffer = pointsDiffer.default;
}
let obj = {
  startPoint: { diff: pointsDiffer },
  endPoint: null,
  colors: null,
  locations: true,
  useAngle: true,
  angleCenter: null,
  angle: true,
  borderRadii: true,
};
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
