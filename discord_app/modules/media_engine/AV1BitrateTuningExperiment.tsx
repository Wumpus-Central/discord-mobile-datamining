// discord_app/modules/media_engine/AV1BitrateTuningExperiment.tsx
import ApexExperiment from "../experiments/apex/index.tsx";
import size from "../../../_runtime/metro/00002__.js";

let obj = { name: "2026-05-av1-bitrate-tuning", kind: "user", defaultConfig: { bitrate: 3500000 }, variations: null };
obj = { 1: null, 2: { bitrate: 3000000 } };
obj[2] = { bitrate: 2500000 };
obj.variations = obj;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/media_engine/AV1BitrateTuningExperiment.tsx");

export const AV1StreamBitrateReductionExperiment = apexExperiment;
