// _runtime/01803_processSVGPath.js
import _mod1808 from "metro/01808__.js";
import processSVGGradientStops from "01809_processSVGGradientStops.js";
import _mod1810 from "metro/01810__.js";

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

export const processSVGPath = _mod1808.processSVGPath;
export const processSVGGradientStops = processSVGGradientStops.processSVGGradientStops;
export const processStrokeDashArray = _mod1810.processStrokeDashArray;
