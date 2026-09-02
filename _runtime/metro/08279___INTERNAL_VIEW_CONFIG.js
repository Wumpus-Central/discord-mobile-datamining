// === Module 8279: __INTERNAL_VIEW_CONFIG ===

// Module 8279 (__INTERNAL_VIEW_CONFIG)
import result from "result" /* 26 */;
import weakSet from "weakSet" /* 106 */;
import setRuntimeConfigProvider from "setRuntimeConfigProvider" /* 65 */;

let obj = { uiViewClassName: "RNSVGCircle", directEventTypes: { topSvgLayout: { registrationName: "onSvgLayout" } }, validAttributes: null };
obj = { name: true, opacity: true, matrix: true, mask: true, markerStart: true, markerMid: true, markerEnd: true, clipPath: true, clipRule: true, responsible: true, display: true, pointerEvents: true, color: result.colorAttribute, fill: true, fillOpacity: true, fillRule: true, stroke: true, strokeOpacity: true, strokeWidth: true, strokeLinecap: true, strokeLinejoin: true, strokeDasharray: true, strokeDashoffset: true, strokeMiterlimit: true, vectorEffect: true, propList: true, filter: true, cx: true, cy: true, r: true };
const merged = Object.assign(weakSet.ConditionallyIgnoredEventHandlers({ onSvgLayout: true }));
obj[2] = obj;

export default setRuntimeConfigProvider.get("RNSVGCircle", () => obj);
export const __INTERNAL_VIEW_CONFIG = obj;