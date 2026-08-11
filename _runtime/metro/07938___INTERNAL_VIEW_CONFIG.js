// _runtime/metro/07938___INTERNAL_VIEW_CONFIG.js
import weakSet from "weakSet";
import setRuntimeConfigProvider from "setRuntimeConfigProvider";

let obj = { uiViewClassName: "RNSVGText", directEventTypes: { topSvgLayout: { registrationName: "onSvgLayout" } }, validAttributes: null };
obj = { name: true, opacity: true, matrix: true, mask: true, markerStart: true, markerMid: true, markerEnd: true, clipPath: true, clipRule: true, responsible: true, display: true, pointerEvents: true, color: require("result").colorAttribute, fill: true, fillOpacity: true, fillRule: true, stroke: true, strokeOpacity: true, strokeWidth: true, strokeLinecap: true, strokeLinejoin: true, strokeDasharray: true, strokeDashoffset: true, strokeMiterlimit: true, vectorEffect: true, propList: true, filter: true, fontSize: true, fontWeight: true, font: true, dx: true, dy: true, x: true, y: true, rotate: true, inlineSize: true, textLength: true, baselineShift: true, lengthAdjust: true, alignmentBaseline: true, verticalAlign: true };
const merged = Object.assign(weakSet.ConditionallyIgnoredEventHandlers({ onSvgLayout: true }));
obj[2] = obj;

export default setRuntimeConfigProvider.get("RNSVGText", () => obj);
export const __INTERNAL_VIEW_CONFIG = obj;