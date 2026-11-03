// _runtime/01812_SVG_PATH_PROPERTIES_CONFIG.js
import SVG_COMMON_PROPERTIES_CONFIG from "01799_SVG_COMMON_PROPERTIES_CONFIG.js";
import processSVGPath from "01800_processSVGPath.js";

const obj = {};
const merged = Object.assign(SVG_COMMON_PROPERTIES_CONFIG.SVG_COMMON_PROPERTIES_CONFIG);
obj.d = { process: processSVGPath.processSVGPath };

export const SVG_PATH_PROPERTIES_CONFIG = obj;
