// discord_app/modules/tti_analytics/native/navigation/NavigationTTIExperiment.tsx
import ApexExperiment from "../../../experiments/apex/index.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let obj2;
const obj = {
  name: "2026-09-mobile-interaction-tti",
  kind: "user",
  defaultConfig: { enabled: false },
  variations: obj2,
};
obj2 = { 1: null };
obj2[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/tti_analytics/native/navigation/NavigationTTIExperiment.tsx");

export const NavigationTTIExperiment = apexExperiment;
