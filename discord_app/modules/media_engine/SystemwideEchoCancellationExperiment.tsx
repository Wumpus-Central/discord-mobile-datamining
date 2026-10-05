// discord_app/modules/media_engine/SystemwideEchoCancellationExperiment.tsx
import ApexExperiment from "../experiments/apex/index.tsx";
import size from "../../../_runtime/metro/00002__.js";

let obj2;
let obj = {
  kind: "user",
  name: "2026-06-systemwide-echo-cancellation-for-people-who-refuse-to-wear-headphones",
  defaultConfig: { echoReferenceMode: "mix" },
  variations: obj2,
};
obj2 = { 1: null };
obj2[1] = { echoReferenceMode: "auto" };
const config = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/media_engine/SystemwideEchoCancellationExperiment.tsx");

export const getSystemwideEchoCancellationExperimentConfig = function getSystemwideEchoCancellationExperimentConfig(
  location,
) {
  const obj = { location: location.location };
  return config.getConfig(obj);
};
