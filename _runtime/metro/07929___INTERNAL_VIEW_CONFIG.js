// _runtime/metro/07929___INTERNAL_VIEW_CONFIG.js
import setRuntimeConfigProvider from "setRuntimeConfigProvider";

const obj = { uiViewClassName: "RNSVGFeOffset", validAttributes: { x: true, y: true, width: true, height: true, result: true, in1: true, dx: true, dy: true } };

export default setRuntimeConfigProvider.get("RNSVGFeOffset", () => obj);
export const __INTERNAL_VIEW_CONFIG = obj;