// _runtime/metro/07870___INTERNAL_VIEW_CONFIG.js
import setRuntimeConfigProvider from "setRuntimeConfigProvider";

const obj = { uiViewClassName: "RNSVGDefs", validAttributes: { name: true, opacity: true, matrix: true, mask: true, markerStart: true, markerMid: true, markerEnd: true, clipPath: true, clipRule: true, responsible: true, display: true, pointerEvents: true } };

export default setRuntimeConfigProvider.get("RNSVGDefs", () => obj);
export const __INTERNAL_VIEW_CONFIG = obj;