// _runtime/metro/06658___INTERNAL_VIEW_CONFIG.js
import setRuntimeConfigProvider from "../00065_setRuntimeConfigProvider.js";

const obj = { uiViewClassName: "RNSVGFeGaussianBlur", validAttributes: { x: true, y: true, width: true, height: true, result: true, in1: true, stdDeviationX: true, stdDeviationY: true, edgeMode: true } };

export default setRuntimeConfigProvider.get("RNSVGFeGaussianBlur", () => obj);
export const __INTERNAL_VIEW_CONFIG = obj;