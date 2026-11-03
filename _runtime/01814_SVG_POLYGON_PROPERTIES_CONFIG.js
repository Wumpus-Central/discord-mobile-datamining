// _runtime/01814_SVG_POLYGON_PROPERTIES_CONFIG.js
import SVG_COMMON_PROPERTIES_CONFIG from "01799_SVG_COMMON_PROPERTIES_CONFIG.js";
import processSVGPath from "01800_processSVGPath.js";

const obj = {};
const merged = Object.assign(SVG_COMMON_PROPERTIES_CONFIG.SVG_COMMON_PROPERTIES_CONFIG);
obj.points = { process: processSVGPath.processPolygonPoints };

export const SVG_POLYGON_PROPERTIES_CONFIG = obj;
