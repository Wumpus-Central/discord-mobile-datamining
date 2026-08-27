// _runtime/metro/08278___INTERNAL_VIEW_CONFIG.js
import result from "../00026_result.js";
import weakSet from "../00106_weakSet.js";
import setRuntimeConfigProvider from "../00065_setRuntimeConfigProvider.js";

let obj = { uiViewClassName: "RNSVGUse", directEventTypes: { topSvgLayout: { registrationName: "onSvgLayout" } }, validAttributes: null };
obj = { name: true, opacity: true, matrix: true, mask: true, markerStart: true, markerMid: true, markerEnd: true, clipPath: true, clipRule: true, responsible: true, display: true, pointerEvents: true, color: result.colorAttribute, fill: true, fillOpacity: true, fillRule: true, stroke: true, strokeOpacity: true, strokeWidth: true, strokeLinecap: true, strokeLinejoin: true, strokeDasharray: true, strokeDashoffset: true, strokeMiterlimit: true, vectorEffect: true, propList: true, filter: true, href: true, x: true, y: true, height: true, width: true };
const merged = Object.assign(weakSet.ConditionallyIgnoredEventHandlers({ onSvgLayout: true }));
obj[2] = obj;

export default setRuntimeConfigProvider.get("RNSVGUse", () => obj);
export const __INTERNAL_VIEW_CONFIG = obj;