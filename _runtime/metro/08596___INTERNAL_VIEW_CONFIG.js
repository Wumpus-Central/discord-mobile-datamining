// === Module 8596: __INTERNAL_VIEW_CONFIG ===

// Module 8596 (__INTERNAL_VIEW_CONFIG)
import setRuntimeConfigProvider from "setRuntimeConfigProvider";

const obj = { uiViewClassName: "RNSVGFeFlood", validAttributes: { x: true, y: true, width: true, height: true, result: true, floodColor: true, floodOpacity: true } };

export default setRuntimeConfigProvider.get("RNSVGFeFlood", () => obj);
export const __INTERNAL_VIEW_CONFIG = obj;