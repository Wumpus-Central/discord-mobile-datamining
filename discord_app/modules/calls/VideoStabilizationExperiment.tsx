// discord_app/modules/calls/VideoStabilizationExperiment.tsx
import apex_ApexExperimentDefault from "../experiments/apex/ApexExperiment.tsx";

let obj = { kind: "user", name: "2026-05-ios-video-stabilization", defaultConfig: { mode: "off" }, variations: null };
obj = { 1: null, 2: { mode: "standard" } };
obj[2] = { mode: "low_latency" };
obj.variations = obj;
const size = fn(2);
const result = size.fileFinishedImporting("modules/calls/VideoStabilizationExperiment.tsx");

export default apex_ApexExperimentDefault(obj);
