// _runtime/metro/08547__.js
import _mod26 from "00026__.js";
import weakSet from "../00106_weakSet.js";
import 00065__ from "00065__.js";

const __INTERNAL_VIEW_CONFIG = { uiViewClassName: "RNSVGRect", directEventTypes: { topSvgLayout: { registrationName: "onSvgLayout" } }, validAttributes: null };
const size = { name: true, opacity: true, matrix: true, mask: true, markerStart: true, markerMid: true, markerEnd: true, clipPath: true, clipRule: true, responsible: true, display: true, pointerEvents: true, color: _mod26.colorAttribute, fill: true, fillOpacity: true, fillRule: true, stroke: true, strokeOpacity: true, strokeWidth: true, strokeLinecap: true, strokeLinejoin: true, strokeDasharray: true, strokeDashoffset: true, strokeMiterlimit: true, vectorEffect: true, propList: true, filter: true, x: true, y: true, height: true, width: true, rx: true, ry: true };
const merged = Object.assign(weakSet.ConditionallyIgnoredEventHandlers({ onSvgLayout: true }));
__INTERNAL_VIEW_CONFIG.validAttributes = size;

export default module_65.get("RNSVGRect", () => obj);
export { __INTERNAL_VIEW_CONFIG };