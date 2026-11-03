// _runtime/01810_SVG_LINE_PROPERTIES_CONFIG.js
import SVG_COMMON_PROPERTIES_CONFIG from "01799_SVG_COMMON_PROPERTIES_CONFIG.js";

const obj = {};
const merged = Object.assign(SVG_COMMON_PROPERTIES_CONFIG.SVG_COMMON_PROPERTIES_CONFIG);
obj.x1 = true;
obj.y1 = true;
obj.x2 = true;
obj.y2 = true;

export const SVG_LINE_PROPERTIES_CONFIG = obj;
