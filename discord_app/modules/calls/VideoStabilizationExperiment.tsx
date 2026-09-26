// === Module 13353: VideoStabilizationExperiment ===

// Module 13353 (VideoStabilizationExperiment)
import apex_ApexExperimentDefault from "apex/ApexExperiment" /* 1436 */;

const obj = { kind: "user", name: "2026-05-ios-video-stabilization", defaultConfig: { mode: "off" }, variations: null };
const obj2 = { 1: null, 2: { mode: "standard" } };
obj2[2] = { mode: "low_latency" };
obj.variations = obj2;
const size = fn(2);
const result = size.fileFinishedImporting("modules/calls/VideoStabilizationExperiment.tsx");

export default apex_ApexExperimentDefault(obj);