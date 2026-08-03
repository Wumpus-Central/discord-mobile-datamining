// === Module 8307: __INTERNAL_VIEW_CONFIG ===

// Module 8307 (__INTERNAL_VIEW_CONFIG)
import setRuntimeConfigProvider from "setRuntimeConfigProvider";

let obj = { uiViewClassName: "RNSVGSvgView", validAttributes: null };
obj = { bbWidth: true, bbHeight: true, minX: true, minY: true, vbWidth: true, vbHeight: true, align: true, meetOrSlice: true, color: require("result").colorAttribute, pointerEvents: true, hitSlop: true };
obj[1] = obj;

export default setRuntimeConfigProvider.get("RNSVGSvgView", () => obj);
export const __INTERNAL_VIEW_CONFIG = obj;