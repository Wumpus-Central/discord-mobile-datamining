// discord_app/modules/media_engine/VideoHookDX12Experiment.tsx
import ApexExperiment from "../experiments/apex/index.tsx";
import size from "../../../_runtime/metro/00002__.js";

let obj = { name: "2026-04-video-hook-dx12", kind: "user", defaultConfig: { enabled: false }, variations: null };
obj = { 1: null };
obj[1] = { enabled: true };
obj.variations = obj;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/media_engine/VideoHookDX12Experiment.tsx");

export const VideoHookDX12Experiment = apexExperiment;
