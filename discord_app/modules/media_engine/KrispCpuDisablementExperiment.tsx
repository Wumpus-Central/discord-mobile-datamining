// discord_app/modules/media_engine/KrispCpuDisablementExperiment.tsx
import ApexExperiment from "../experiments/apex/index.tsx";
import size from "../../../_runtime/metro/00002__.js";

let obj = {
  kind: "user",
  name: "2026-07-krisp-cpu-disablement",
  defaultConfig: { consecutiveFailures: 1 },
  variations: null,
};
obj = { 1: null, 2: { consecutiveFailures: 3 }, 3: { consecutiveFailures: 5 } };
obj[3] = { consecutiveFailures: 10 };
obj.variations = obj;
const config = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/media_engine/KrispCpuDisablementExperiment.tsx");

export const getKrispCpuDisablementConfig = function getKrispCpuDisablementConfig(location) {
  return config.getConfig({ location: location.location });
};
