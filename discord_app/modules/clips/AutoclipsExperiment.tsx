// discord_app/modules/clips/AutoclipsExperiment.tsx
import ApexExperiment from "../experiments/apex/index.tsx";
import size from "../../../_runtime/metro/00002__.js";

const obj = { kind: "user", name: "2026-09-autoclips", defaultConfig: { enabled: false }, variations: null };
const obj2 = { 1: null, 2: { enabled: true } };
obj2[2] = { enabled: true };
obj.variations = obj2;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/clips/AutoclipsExperiment.tsx");

export default apexExperiment;
