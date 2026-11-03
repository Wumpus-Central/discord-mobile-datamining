// === Module 1815: SVG_POLYLINE_PROPERTIES_CONFIG ===

// Module 1815 (SVG_POLYLINE_PROPERTIES_CONFIG)
import SVG_COMMON_PROPERTIES_CONFIG from "SVG_COMMON_PROPERTIES_CONFIG" /* 1799 */;
import processSVGPath from "processSVGPath" /* 1800 */;

const obj = {};
const merged = Object.assign(SVG_COMMON_PROPERTIES_CONFIG.SVG_COMMON_PROPERTIES_CONFIG);
obj.points = { process: processSVGPath.processPolylinePoints };

export const SVG_POLYLINE_PROPERTIES_CONFIG = obj;