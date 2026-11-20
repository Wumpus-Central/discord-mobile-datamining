// === Module 1815: SVG_POLYGON_PROPERTIES_CONFIG ===

// Module 1815 (SVG_POLYGON_PROPERTIES_CONFIG)
import SVG_COMMON_PROPERTIES_CONFIG from "SVG_COMMON_PROPERTIES_CONFIG" /* 1800 */;
import processSVGPath from "processSVGPath" /* 1801 */;

const obj = {};
const merged = Object.assign(SVG_COMMON_PROPERTIES_CONFIG.SVG_COMMON_PROPERTIES_CONFIG);
obj.points = { process: processSVGPath.processPolygonPoints };

export const SVG_POLYGON_PROPERTIES_CONFIG = obj;