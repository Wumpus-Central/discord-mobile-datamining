// === Module 1817: SVG_POLYLINE_PROPERTIES_CONFIG ===

// Module 1817 (SVG_POLYLINE_PROPERTIES_CONFIG)
import SVG_COMMON_PROPERTIES_CONFIG from "SVG_COMMON_PROPERTIES_CONFIG" /* 1801 */;
import processSVGPath from "processSVGPath" /* 1802 */;

const obj = {};
const merged = Object.assign(SVG_COMMON_PROPERTIES_CONFIG.SVG_COMMON_PROPERTIES_CONFIG);
obj.points = { process: processSVGPath.processPolylinePoints };

export const SVG_POLYLINE_PROPERTIES_CONFIG = obj;