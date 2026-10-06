// === Module 8241: ? ===

// Module 8241
import _mod26 from "module_26" /* 26 */;
import resolveAssetSource_mod from "resolveAssetSource" /* 81 */;
import DynamicallyInjectedByGestureHandler from "DynamicallyInjectedByGestureHandler" /* 106 */;
import module_65 from "module_65" /* 65 */;

let resolveAssetSource;
let size;
const __INTERNAL_VIEW_CONFIG = { uiViewClassName: "RNSVGImage", directEventTypes: { topLoad: { registrationName: "onLoad" }, topSvgLayout: { registrationName: "onSvgLayout" } }, validAttributes: size };
size = { name: true, opacity: true, matrix: true, mask: true, markerStart: true, markerMid: true, markerEnd: true, clipPath: true, clipRule: true, responsible: true, display: true, pointerEvents: true, color: _mod26.colorAttribute, fill: true, fillOpacity: true, fillRule: true, stroke: true, strokeOpacity: true, strokeWidth: true, strokeLinecap: true, strokeLinejoin: true, strokeDasharray: true, strokeDashoffset: true, strokeMiterlimit: true, vectorEffect: true, propList: true, filter: true, x: true, y: true, width: true, height: true, src: { process: resolveAssetSource }, align: true, meetOrSlice: true };
resolveAssetSource = resolveAssetSource_mod;
if ("default" in resolveAssetSource) {
  resolveAssetSource = resolveAssetSource.default;
}
const merged = Object.assign(DynamicallyInjectedByGestureHandler.ConditionallyIgnoredEventHandlers({ onLoad: true, onSvgLayout: true }));

export default module_65.get("RNSVGImage", () => obj);
export { __INTERNAL_VIEW_CONFIG };