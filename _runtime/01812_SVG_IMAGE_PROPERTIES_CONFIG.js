// _runtime/01812_SVG_IMAGE_PROPERTIES_CONFIG.js
import SVG_COMMON_PROPERTIES_CONFIG from "01802_SVG_COMMON_PROPERTIES_CONFIG.js";

const obj = {};
const merged = Object.assign(SVG_COMMON_PROPERTIES_CONFIG.SVG_COMMON_PROPERTIES_CONFIG);
obj.width = true;
obj.height = true;
obj.x = true;
obj.y = true;

export const SVG_IMAGE_PROPERTIES_CONFIG = obj;
