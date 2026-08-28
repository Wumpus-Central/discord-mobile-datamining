// === Module 13398: getUnitId ===

// Module 13398 (getUnitId)
import getUnitIdDefault from "getUnitId" /* 1368 */;

const obj = { 1: null, 2: { mode: "standard" } };
obj[2] = { mode: "low_latency" };
const tmp2 = getUnitIdDefault({ kind: "user", name: "2026-05-ios-video-stabilization", defaultConfig: { mode: "off" }, variations: obj });
const result = require("set").fileFinishedImporting("modules/calls/VideoStabilizationExperiment.tsx");

export default tmp2;