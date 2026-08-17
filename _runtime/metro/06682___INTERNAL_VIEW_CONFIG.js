// _runtime/metro/06682___INTERNAL_VIEW_CONFIG.js
import result from "../00026_result.js";
import setRuntimeConfigProvider from "../00065_setRuntimeConfigProvider.js";

let obj = { uiViewClassName: "RNSVGSvgView", validAttributes: null };
obj = { bbWidth: true, bbHeight: true, minX: true, minY: true, vbWidth: true, vbHeight: true, align: true, meetOrSlice: true, color: result.colorAttribute, pointerEvents: true, hitSlop: true };
obj[1] = obj;

export default setRuntimeConfigProvider.get("RNSVGSvgView", () => obj);
export const __INTERNAL_VIEW_CONFIG = obj;