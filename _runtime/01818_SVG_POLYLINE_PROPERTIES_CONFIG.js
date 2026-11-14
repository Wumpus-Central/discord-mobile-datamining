// _runtime/01818_SVG_POLYLINE_PROPERTIES_CONFIG.js
import SVG_COMMON_PROPERTIES_CONFIG from "01802_SVG_COMMON_PROPERTIES_CONFIG.js";
import processSVGPath from "01803_processSVGPath.js";

const obj = {};
const merged = Object.assign(SVG_COMMON_PROPERTIES_CONFIG.SVG_COMMON_PROPERTIES_CONFIG);
obj.points = { process: processSVGPath.processPolylinePoints };

export const SVG_POLYLINE_PROPERTIES_CONFIG = obj;
