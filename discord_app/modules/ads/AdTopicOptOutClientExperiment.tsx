// discord_app/modules/ads/AdTopicOptOutClientExperiment.tsx
import ApexExperiment from "ApexExperiment";

const obj = { 1: null, 2: { enabled: false }, 3: { enabled: true }, 4: { enabled: true }, 5: { enabled: true } };
obj[5] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment({ kind: "user", name: "2026-08-ad-topic-opt-out-client", defaultConfig: { enabled: false }, variations: obj });
const result = require("set").fileFinishedImporting("modules/ads/AdTopicOptOutClientExperiment.tsx");

export const AdTopicOptOutClientExperiment = apexExperiment;
export const useIsAdTopicOptOutClientEnabled = function useIsAdTopicOptOutClientEnabled() {
  return apexExperiment.useConfig({ location: "useIsAdTopicOptOutClientEnabled" }).enabled;
};
export const isAdTopicOptOutClientEnabled = function isAdTopicOptOutClientEnabled() {
  return apexExperiment.getConfig({ location: "isAdTopicOptOutClientEnabled" }).enabled;
};