// _runtime/01798_SVG_CIRCLE_PROPERTIES_CONFIG.js
import SVG_COMMON_PROPERTIES_CONFIG from "01799_SVG_COMMON_PROPERTIES_CONFIG.js";

const obj = {};
const merged = Object.assign(SVG_COMMON_PROPERTIES_CONFIG.SVG_COMMON_PROPERTIES_CONFIG);
obj.cx = true;
obj.cy = true;
obj.r = true;

export const SVG_CIRCLE_PROPERTIES_CONFIG = obj;
