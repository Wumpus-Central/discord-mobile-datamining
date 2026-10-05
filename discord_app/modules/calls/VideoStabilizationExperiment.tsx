// discord_app/modules/calls/VideoStabilizationExperiment.tsx
import apex_ApexExperimentDefault from "../experiments/apex/ApexExperiment.tsx";
import size from "../../../_runtime/metro/00002__.js";

let obj2;
const obj = { kind: "user", name: "2026-05-ios-video-stabilization", defaultConfig: { mode: "off" }, variations: obj2 };
obj2 = { 1: null, 2: { mode: "standard" } };
obj2[2] = { mode: "low_latency" };
const tmp2 = apex_ApexExperimentDefault(obj);
const result = size.fileFinishedImporting("modules/calls/VideoStabilizationExperiment.tsx");

export default tmp2;
