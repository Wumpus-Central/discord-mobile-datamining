// discord_app/modules/calls/VideoStabilizationExperiment.tsx
import getUnitIdDefault from "../experiments/apex/ApexExperiment.tsx";

const obj = { 1: null, 2: { mode: "standard" } };
obj[2] = { mode: "low_latency" };
const tmp2 = getUnitIdDefault({ kind: "user", name: "2026-05-ios-video-stabilization", defaultConfig: { mode: "off" }, variations: obj });
const result = require("set").fileFinishedImporting("modules/calls/VideoStabilizationExperiment.tsx");

export default tmp2;