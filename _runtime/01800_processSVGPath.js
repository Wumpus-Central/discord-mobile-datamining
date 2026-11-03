// === Module 1800: processSVGPath ===

// Module 1800 (processSVGPath)
import _mod1805 from "module_1805" /* 1805 */;
import processSVGGradientStops from "processSVGGradientStops" /* 1806 */;
import _mod1807 from "module_1807" /* 1807 */;

const require = globalThis.__r;

for (const key10013 in require("processColorSVG")) {
  arg5[key10013] = require("processColorSVG")[key10013];
  continue;
}
for (const key10017 in require("convertStringToNumber")) {
  arg5[key10017] = require("convertStringToNumber")[key10017];
  continue;
}
for (const key10021 in require("processPercentage")) {
  arg5[key10021] = require("processPercentage")[key10021];
  continue;
}
for (const key10025 in require("processPolylinePoints")) {
  arg5[key10025] = require("processPolylinePoints")[key10025];
  continue;
}

export const processSVGPath = _mod1805.processSVGPath;
export const processSVGGradientStops = processSVGGradientStops.processSVGGradientStops;
export const processStrokeDashArray = _mod1807.processStrokeDashArray;