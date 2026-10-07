// discord_app/modules/quests/experiments/NoFillExperiment.tsx
import ApexExperiment from "../../experiments/apex/index.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const obj = { name: "2026-08-no-fill-logging", kind: "user", defaultConfig: { enableNoFill: false }, variations: null };
const obj2 = { 1: null, 2: { enableNoFill: false } };
obj2[2] = { enableNoFill: true };
obj.variations = obj2;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/quests/experiments/NoFillExperiment.tsx");

export default apexExperiment;
