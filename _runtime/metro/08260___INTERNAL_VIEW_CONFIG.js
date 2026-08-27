// _runtime/metro/08260___INTERNAL_VIEW_CONFIG.js
import result from "../00026_result.js";
import setRuntimeConfigProvider from "../00065_setRuntimeConfigProvider.js";

let obj = { uiViewClassName: "RNSVGPattern", validAttributes: null };
obj = { name: true, opacity: true, matrix: true, mask: true, markerStart: true, markerMid: true, markerEnd: true, clipPath: true, clipRule: true, responsible: true, display: true, pointerEvents: true, color: result.colorAttribute, fill: true, fillOpacity: true, fillRule: true, stroke: true, strokeOpacity: true, strokeWidth: true, strokeLinecap: true, strokeLinejoin: true, strokeDasharray: true, strokeDashoffset: true, strokeMiterlimit: true, vectorEffect: true, propList: true, filter: true, fontSize: true, fontWeight: true, font: true, x: true, y: true, height: true, width: true, patternUnits: true, patternContentUnits: true, patternTransform: true, minX: true, minY: true, vbWidth: true, vbHeight: true, align: true, meetOrSlice: true };
obj[1] = obj;

export default setRuntimeConfigProvider.get("RNSVGPattern", () => obj);
export const __INTERNAL_VIEW_CONFIG = obj;