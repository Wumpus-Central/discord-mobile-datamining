// === Module 1820: SVG_RECT_PROPERTIES_CONFIG ===

// Module 1820 (SVG_RECT_PROPERTIES_CONFIG)
import SVG_COMMON_PROPERTIES_CONFIG from "SVG_COMMON_PROPERTIES_CONFIG" /* 1802 */;

const obj = {};
const merged = Object.assign(SVG_COMMON_PROPERTIES_CONFIG.SVG_COMMON_PROPERTIES_CONFIG);
obj.x = true;
obj.y = true;
obj.rx = true;
obj.ry = true;
obj.width = true;
obj.height = true;

export const SVG_RECT_PROPERTIES_CONFIG = obj;