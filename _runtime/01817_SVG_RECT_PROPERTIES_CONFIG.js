// _runtime/01817_SVG_RECT_PROPERTIES_CONFIG.js
import SVG_COMMON_PROPERTIES_CONFIG from "01799_SVG_COMMON_PROPERTIES_CONFIG.js";

const obj = {};
const merged = Object.assign(SVG_COMMON_PROPERTIES_CONFIG.SVG_COMMON_PROPERTIES_CONFIG);
obj.x = true;
obj.y = true;
obj.rx = true;
obj.ry = true;
obj.width = true;
obj.height = true;

export const SVG_RECT_PROPERTIES_CONFIG = obj;
