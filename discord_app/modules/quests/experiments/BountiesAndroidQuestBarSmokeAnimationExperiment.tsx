// === Module 14736: BountiesAndroidQuestBarSmokeAnimationExperiment ===

// Module 14736 (BountiesAndroidQuestBarSmokeAnimationExperiment)
import ApexExperiment from "ApexExperiment" /* 1435 */;
import size from "module_2" /* 2 */;

const obj = { name: "2026-09-bounties-android-quest-bar-smoke-animation", kind: "user", defaultConfig: { enabled: false }, variations: null };
const obj2 = { 1: null };
obj2[1] = { enabled: true };
obj.variations = obj2;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/quests/experiments/BountiesAndroidQuestBarSmokeAnimationExperiment.tsx");

export const BountiesAndroidQuestBarSmokeAnimationExperiment = apexExperiment;
export const useIsBountiesAndroidQuestBarSmokeAnimationEnabled = function useIsBountiesAndroidQuestBarSmokeAnimationEnabled(QUESTS_BAR_MOBILE) {
  return apexExperiment.useConfig({ location: QUESTS_BAR_MOBILE }).enabled;
};