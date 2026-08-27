// _runtime/metro/08214___INTERNAL_VIEW_CONFIG.js
import setRuntimeConfigProvider from "../00065_setRuntimeConfigProvider.js";

const obj = { uiViewClassName: "RNSVGFeColorMatrix", validAttributes: { x: true, y: true, width: true, height: true, result: true, in1: true, type: true, values: true } };

export default setRuntimeConfigProvider.get("RNSVGFeColorMatrix", () => obj);
export const __INTERNAL_VIEW_CONFIG = obj;