// _runtime/metro/08241__.js
import _mod26 from "00026__.js";
import resolveAssetSource_mod from "../00081_resolveAssetSource.js";
import DynamicallyInjectedByGestureHandler from "../00106_DynamicallyInjectedByGestureHandler.js";
import 00065__ from "00065__.js";

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