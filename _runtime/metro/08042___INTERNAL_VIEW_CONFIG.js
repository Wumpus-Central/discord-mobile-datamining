// _runtime/metro/08042___INTERNAL_VIEW_CONFIG.js
import setRuntimeConfigProvider from "../00065_setRuntimeConfigProvider.js";

const obj = { uiViewClassName: "RNSVGFeMerge", validAttributes: { x: true, y: true, width: true, height: true, result: true, nodes: true } };

export default setRuntimeConfigProvider.get("RNSVGFeMerge", () => obj);
export const __INTERNAL_VIEW_CONFIG = obj;