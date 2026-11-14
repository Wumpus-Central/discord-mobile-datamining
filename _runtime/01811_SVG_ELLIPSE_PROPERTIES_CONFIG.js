// _runtime/01811_SVG_ELLIPSE_PROPERTIES_CONFIG.js
import SVG_COMMON_PROPERTIES_CONFIG from "01802_SVG_COMMON_PROPERTIES_CONFIG.js";

const obj = {};
const merged = Object.assign(SVG_COMMON_PROPERTIES_CONFIG.SVG_COMMON_PROPERTIES_CONFIG);
obj.cx = true;
obj.cy = true;
obj.rx = true;
obj.ry = true;

export const SVG_ELLIPSE_PROPERTIES_CONFIG = obj;
