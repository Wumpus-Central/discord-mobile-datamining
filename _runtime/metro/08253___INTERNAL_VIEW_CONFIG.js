// === Module 8253: __INTERNAL_VIEW_CONFIG ===

// Module 8253 (__INTERNAL_VIEW_CONFIG)
import setRuntimeConfigProvider from "setRuntimeConfigProvider";

const obj = { uiViewClassName: "RNSVGFeMerge", validAttributes: { x: true, y: true, width: true, height: true, result: true, nodes: true } };

export default setRuntimeConfigProvider.get("RNSVGFeMerge", () => obj);
export const __INTERNAL_VIEW_CONFIG = obj;