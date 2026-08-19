// discord_app/modules/media_engine/KrispCpuDisablementExperiment.tsx
import obj132 from "../../../_runtime/00002_obj132.js";
import ApexExperiment from "../experiments/apex/index.tsx";

const obj = { 1: null, 2: { consecutiveFailures: 3 }, 3: { consecutiveFailures: 5 } };
obj[3] = { consecutiveFailures: 10 };
let closure_0 = ApexExperiment.createApexExperiment({ kind: "user", name: "2026-07-krisp-cpu-disablement", defaultConfig: { consecutiveFailures: 1 }, variations: obj });
const result = obj132.fileFinishedImporting("modules/media_engine/KrispCpuDisablementExperiment.tsx");

export const getKrispCpuDisablementConfig = function getKrispCpuDisablementConfig(location) {
  return config.getConfig({ location: location.location });
};