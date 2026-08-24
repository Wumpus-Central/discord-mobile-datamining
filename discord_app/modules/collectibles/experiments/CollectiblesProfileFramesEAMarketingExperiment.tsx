// discord_app/modules/collectibles/experiments/CollectiblesProfileFramesEAMarketingExperiment.tsx
import set from "../../../../_runtime/00002_set.js";
import ApexExperiment from "../../experiments/apex/index.tsx";

const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-04-profile-frames-ea-marketing", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
const result = set.fileFinishedImporting("modules/collectibles/experiments/CollectiblesProfileFramesEAMarketingExperiment.tsx");

export default apexExperiment;
export const getIsProfileFramesEAMarketingEnabled = function getIsProfileFramesEAMarketingEnabled(location) {
  return apexExperiment.getConfig({ location }).enabled;
};
export const useIsProfileFramesEAMarketingEnabled = function useIsProfileFramesEAMarketingEnabled(location) {
  return apexExperiment.useConfig({ location }).enabled;
};