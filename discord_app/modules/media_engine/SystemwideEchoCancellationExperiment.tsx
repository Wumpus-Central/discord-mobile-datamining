// discord_app/modules/media_engine/SystemwideEchoCancellationExperiment.tsx
import ApexExperiment from "../experiments/apex/index.tsx";
import size from "../../../_runtime/metro/00002__.js";

const obj = {
  kind: "user",
  name: "2026-06-systemwide-echo-cancellation-for-people-who-refuse-to-wear-headphones",
  defaultConfig: { echoReferenceMode: "mix" },
  variations: null,
};
const obj2 = { 1: null };
obj2[1] = { echoReferenceMode: "auto" };
obj.variations = obj2;
const config = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/media_engine/SystemwideEchoCancellationExperiment.tsx");

export const getSystemwideEchoCancellationExperimentConfig = function getSystemwideEchoCancellationExperimentConfig(
  location,
) {
  return config.getConfig({ location: location.location });
};
