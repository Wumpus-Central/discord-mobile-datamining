// discord_app/modules/badges/BadgeDirectoryUpdatesExperiment.tsx
import react from "../../../_runtime/00576_react.js";
import ApexExperiment from "../experiments/apex/index.tsx";
import ReactCompilerGating_mod from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

let obj = {
  name: "2026-10-badge-directory-updates",
  kind: "user",
  defaultConfig: { enabled: false, swipeBetweenBadges: false },
  variations: {
    0: { enabled: false, swipeBetweenBadges: false },
    1: { enabled: true, swipeBetweenBadges: false },
    2: { enabled: true, swipeBetweenBadges: true },
  },
};
let closure_2 = ApexExperiment.createApexExperiment(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (location) => {
      let tmp2;
      const obj = react;
      const cResult = obj.c(2);
      const _location = location.location;
      if (cResult[0] !== _location) {
        const obj2 = { location: _location };
        cResult[0] = _location;
        cResult[1] = obj2;
        tmp2 = obj2;
      } else {
        tmp2 = cResult[1];
      }
      return closure_2.useConfig(tmp2).enabled;
    }
  : (location) => {
      const obj = { location: location.location };
      return closure_2.useConfig(obj).enabled;
    };
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (location) => {
      let tmp2;
      const obj = react;
      const cResult = obj.c(2);
      const _location = location.location;
      if (cResult[0] !== _location) {
        const obj2 = { location: _location };
        cResult[0] = _location;
        cResult[1] = obj2;
        tmp2 = obj2;
      } else {
        tmp2 = cResult[1];
      }
      const config = closure_2.useConfig(tmp2);
      return config.enabled && config.swipeBetweenBadges;
    }
  : (location) => {
      const obj = { location: location.location };
      const config = closure_2.useConfig(obj);
      return config.enabled && config.swipeBetweenBadges;
    };
const result = size.fileFinishedImporting("modules/badges/BadgeDirectoryUpdatesExperiment.tsx");

export const useIsBadgeDirectoryUpdatesEnabled = tmp2;
export const useIsBadgeDetailsSwipeEnabled = tmp3;
