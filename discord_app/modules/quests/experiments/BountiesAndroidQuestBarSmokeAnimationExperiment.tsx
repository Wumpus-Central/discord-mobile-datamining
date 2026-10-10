// === Module 15459: BountiesAndroidQuestBarSmokeAnimationExperiment ===

// Module 15459 (BountiesAndroidQuestBarSmokeAnimationExperiment)
import c from "c" /* 576 */;
import ApexExperiment from "ApexExperiment" /* 1453 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const obj = { name: "2026-09-bounties-android-quest-bar-smoke-animation", kind: "user", defaultConfig: { enabled: false }, variations: null };
let obj2 = { 1: null };
obj2[1] = { enabled: true };
obj.variations = obj2;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/quests/experiments/BountiesAndroidQuestBarSmokeAnimationExperiment.tsx");

export const BountiesAndroidQuestBarSmokeAnimationExperiment = apexExperiment;
export const useIsBountiesAndroidQuestBarSmokeAnimationEnabled = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsBountiesAndroidQuestBarSmokeAnimationEnabled(location) {
  const cResult = c.c(2);
  if (cResult[0] !== location) {
    const obj2 = { location };
    cResult[0] = location;
    cResult[1] = obj2;
    let tmp2 = obj2;
  } else {
    tmp2 = cResult[1];
  }
  return apexExperiment.useConfig(tmp2).enabled;
}) : (function useIsBountiesAndroidQuestBarSmokeAnimationEnabled(location) {
  return apexExperiment.useConfig({ location }).enabled;
});