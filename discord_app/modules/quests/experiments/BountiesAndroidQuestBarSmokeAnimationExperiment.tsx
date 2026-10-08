// discord_app/modules/quests/experiments/BountiesAndroidQuestBarSmokeAnimationExperiment.tsx
import c from "../../../../_runtime/00576_c.js";
import ApexExperiment from "../../experiments/apex/index.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const obj = {
  name: "2026-09-bounties-android-quest-bar-smoke-animation",
  kind: "user",
  defaultConfig: { enabled: false },
  variations: null,
};
let obj2 = { 1: null };
obj2[1] = { enabled: true };
obj.variations = obj2;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting(
  "modules/quests/experiments/BountiesAndroidQuestBarSmokeAnimationExperiment.tsx",
);

export const BountiesAndroidQuestBarSmokeAnimationExperiment = apexExperiment;
export const useIsBountiesAndroidQuestBarSmokeAnimationEnabled = ReactCompilerGating.isReactCompilerEnabled()
  ? function useIsBountiesAndroidQuestBarSmokeAnimationEnabled(location) {
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
    }
  : function useIsBountiesAndroidQuestBarSmokeAnimationEnabled(location) {
      return apexExperiment.useConfig({ location }).enabled;
    };
