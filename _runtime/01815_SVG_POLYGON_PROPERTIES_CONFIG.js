// _runtime/01815_SVG_POLYGON_PROPERTIES_CONFIG.js
import SVG_COMMON_PROPERTIES_CONFIG from "01800_SVG_COMMON_PROPERTIES_CONFIG.js";
import processSVGPath from "01801_processSVGPath.js";

const obj = {};
const merged = Object.assign(SVG_COMMON_PROPERTIES_CONFIG.SVG_COMMON_PROPERTIES_CONFIG);
obj.points = { process: processSVGPath.processPolygonPoints };

export const SVG_POLYGON_PROPERTIES_CONFIG = obj;
