// _runtime/metro/08490___INTERNAL_VIEW_CONFIG.js
import setRuntimeConfigProvider from "../00065_setRuntimeConfigProvider.js";

const obj = {
  uiViewClassName: "RNSVGFeBlend",
  validAttributes: { x: true, y: true, width: true, height: true, result: true, in1: true, in2: true, mode: true },
};

export default setRuntimeConfigProvider.get("RNSVGFeBlend", () => obj);
export const __INTERNAL_VIEW_CONFIG = obj;
