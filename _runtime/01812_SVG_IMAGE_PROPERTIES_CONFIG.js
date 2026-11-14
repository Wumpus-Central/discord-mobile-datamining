// === Module 1812: SVG_IMAGE_PROPERTIES_CONFIG ===

// Module 1812 (SVG_IMAGE_PROPERTIES_CONFIG)
import SVG_COMMON_PROPERTIES_CONFIG from "SVG_COMMON_PROPERTIES_CONFIG" /* 1802 */;

const obj = {};
const merged = Object.assign(SVG_COMMON_PROPERTIES_CONFIG.SVG_COMMON_PROPERTIES_CONFIG);
obj.width = true;
obj.height = true;
obj.x = true;
obj.y = true;

export const SVG_IMAGE_PROPERTIES_CONFIG = obj;