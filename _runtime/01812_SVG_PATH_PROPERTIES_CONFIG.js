// === Module 1812: SVG_PATH_PROPERTIES_CONFIG ===

// Module 1812 (SVG_PATH_PROPERTIES_CONFIG)
import SVG_COMMON_PROPERTIES_CONFIG from "SVG_COMMON_PROPERTIES_CONFIG" /* 1799 */;
import processSVGPath from "processSVGPath" /* 1800 */;

const obj = {};
const merged = Object.assign(SVG_COMMON_PROPERTIES_CONFIG.SVG_COMMON_PROPERTIES_CONFIG);
obj.d = { process: processSVGPath.processSVGPath };

export const SVG_PATH_PROPERTIES_CONFIG = obj;