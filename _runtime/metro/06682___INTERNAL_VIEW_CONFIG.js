// === Module 6682: __INTERNAL_VIEW_CONFIG ===

// Module 6682 (__INTERNAL_VIEW_CONFIG)
import result from "result" /* 26 */;
import setRuntimeConfigProvider from "setRuntimeConfigProvider" /* 65 */;

const obj = { bbWidth: true, bbHeight: true, minX: true, minY: true, vbWidth: true, vbHeight: true, align: true, meetOrSlice: true, color: result.colorAttribute, pointerEvents: true, hitSlop: true };
obj[1] = obj;

export default setRuntimeConfigProvider.get("RNSVGSvgView", () => obj);
export const __INTERNAL_VIEW_CONFIG = obj;