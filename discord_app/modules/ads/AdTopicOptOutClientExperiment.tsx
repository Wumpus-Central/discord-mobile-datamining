// discord_app/modules/ads/AdTopicOptOutClientExperiment.tsx
import ApexExperiment from "../experiments/apex/index.tsx";
import size from "../../../_runtime/metro/00002__.js";

let obj = {
  kind: "user",
  name: "2026-08-ad-topic-opt-out-client",
  defaultConfig: { enabled: false },
  variations: null,
};
obj = { 1: null, 2: { enabled: false }, 3: { enabled: true }, 4: { enabled: true }, 5: { enabled: true } };
obj[5] = { enabled: true };
obj.variations = obj;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/ads/AdTopicOptOutClientExperiment.tsx");

export const AdTopicOptOutClientExperiment = apexExperiment;
export const useIsAdTopicOptOutClientEnabled = function useIsAdTopicOptOutClientEnabled() {
  return apexExperiment.useConfig({ location: "useIsAdTopicOptOutClientEnabled" }).enabled;
};
export const isAdTopicOptOutClientEnabled = function isAdTopicOptOutClientEnabled() {
  return apexExperiment.getConfig({ location: "isAdTopicOptOutClientEnabled" }).enabled;
};
