// === Module 13809: VideoStabilizationExperiment ===

// Module 13809 (VideoStabilizationExperiment)
import apex_ApexExperimentDefault from "apex/ApexExperiment" /* 1434 */;

let obj = { kind: "user", name: "2026-05-ios-video-stabilization", defaultConfig: { mode: "off" }, variations: null };
obj = { 1: null, 2: { mode: "standard" } };
obj[2] = { mode: "low_latency" };
obj.variations = obj;
const size = fn(2);
const result = size.fileFinishedImporting("modules/calls/VideoStabilizationExperiment.tsx");

export default apex_ApexExperimentDefault(obj);