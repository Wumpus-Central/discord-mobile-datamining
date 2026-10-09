// discord_app/modules/game_profile/experiments/GameProfileCommunitiesMobileExperiment.tsx
import c from "../../../../_runtime/00576_c.js";
import ApexExperiment from "../../experiments/apex/index.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const obj = { enabled: false };
let closure_2 = ApexExperiment.createApexExperiment({
  name: "2026-10-game-profiles-v3-communities-tab-mobile",
  kind: "user",
  defaultConfig: obj,
  variations: { 0: obj, 1: { enabled: true } },
});
const result = size.fileFinishedImporting(
  "modules/game_profile/experiments/GameProfileCommunitiesMobileExperiment.tsx",
);

export const useIsGameProfileCommunitiesMobileEnabled = ReactCompilerGating.isReactCompilerEnabled()
  ? function useIsGameProfileCommunitiesMobileEnabled(location) {
      const cResult = c.c(2);
      const _location = location.location;
      if (cResult[0] !== _location) {
        const obj2 = { location: _location };
        cResult[0] = _location;
        cResult[1] = obj2;
        let tmp2 = obj2;
      } else {
        tmp2 = cResult[1];
      }
      return closure_2.useConfig(tmp2).enabled;
    }
  : function useIsGameProfileCommunitiesMobileEnabled(location) {
      return closure_2.useConfig({ location: location.location }).enabled;
    };
