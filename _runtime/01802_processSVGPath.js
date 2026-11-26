// _runtime/01802_processSVGPath.js
import _mod1807 from "metro/01807__.js";
import processSVGGradientStops from "01808_processSVGGradientStops.js";
import _mod1809 from "metro/01809__.js";

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

export const processSVGPath = _mod1807.processSVGPath;
export const processSVGGradientStops = processSVGGradientStops.processSVGGradientStops;
export const processStrokeDashArray = _mod1809.processStrokeDashArray;
