// discord_app/modules/media_engine/SystemwideEchoCancellationExperiment.tsx
import set from "../../../_runtime/00002_set.js";
import ApexExperiment from "../experiments/apex/index.tsx";

const obj = { 1: null };
obj[1] = { echoReferenceMode: "auto" };
let closure_0 = ApexExperiment.createApexExperiment({
  kind: "user",
  name: "2026-06-systemwide-echo-cancellation-for-people-who-refuse-to-wear-headphones",
  defaultConfig: { echoReferenceMode: "mix" },
  variations: obj,
});
const result = set.fileFinishedImporting("modules/media_engine/SystemwideEchoCancellationExperiment.tsx");

export const getSystemwideEchoCancellationExperimentConfig = function getSystemwideEchoCancellationExperimentConfig(
  location,
) {
  return config.getConfig({ location: location.location });
};
