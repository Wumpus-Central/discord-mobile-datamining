// === Module 8525: ? ===

// Module 8525
import _mod26 from "module_26" /* 26 */;
import resolveAssetSource from "resolveAssetSource" /* 81 */;
import weakSet from "weakSet" /* 106 */;
import module_65 from "module_65" /* 65 */;

const __INTERNAL_VIEW_CONFIG = { uiViewClassName: "RNSVGImage", directEventTypes: { topLoad: { registrationName: "onLoad" }, topSvgLayout: { registrationName: "onSvgLayout" } }, validAttributes: null };
const size = { name: true, opacity: true, matrix: true, mask: true, markerStart: true, markerMid: true, markerEnd: true, clipPath: true, clipRule: true, responsible: true, display: true, pointerEvents: true, color: _mod26.colorAttribute, fill: true, fillOpacity: true, fillRule: true, stroke: true, strokeOpacity: true, strokeWidth: true, strokeLinecap: true, strokeLinejoin: true, strokeDasharray: true, strokeDashoffset: true, strokeMiterlimit: true, vectorEffect: true, propList: true, filter: true, x: true, y: true, width: true, height: true, src: null, align: true, meetOrSlice: true };
if ("default" in resolveAssetSource) {
  resolveAssetSource = resolveAssetSource.default;
}
size.src = { process: resolveAssetSource };
const merged = Object.assign(weakSet.ConditionallyIgnoredEventHandlers({ onLoad: true, onSvgLayout: true }));
__INTERNAL_VIEW_CONFIG.validAttributes = size;

export default module_65.get("RNSVGImage", () => obj);
export { __INTERNAL_VIEW_CONFIG };