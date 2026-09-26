// discord_app/modules/quests/experiments/BountiesAndroidQuestBarSmokeAnimationExperiment.tsx
import ApexExperiment from "../../experiments/apex/index.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const obj = {
  name: "2026-09-bounties-android-quest-bar-smoke-animation",
  kind: "user",
  defaultConfig: { enabled: false },
  variations: null,
};
const obj2 = { 1: null };
obj2[1] = { enabled: true };
obj.variations = obj2;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting(
  "modules/quests/experiments/BountiesAndroidQuestBarSmokeAnimationExperiment.tsx",
);

export const BountiesAndroidQuestBarSmokeAnimationExperiment = apexExperiment;
export const useIsBountiesAndroidQuestBarSmokeAnimationEnabled =
  function useIsBountiesAndroidQuestBarSmokeAnimationEnabled(QUESTS_BAR_MOBILE) {
    return apexExperiment.useConfig({ location: QUESTS_BAR_MOBILE }).enabled;
  };
