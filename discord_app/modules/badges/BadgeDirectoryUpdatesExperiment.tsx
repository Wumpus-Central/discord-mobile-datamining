// discord_app/modules/badges/BadgeDirectoryUpdatesExperiment.tsx
import c from "../../../_runtime/00576_c.js";
import ApexExperiment from "../experiments/apex/index.tsx";
import "ReactCompilerGating";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

let closure_2 = ApexExperiment.createApexExperiment({
  name: "2026-10-badge-directory-updates",
  kind: "user",
  defaultConfig: { enabled: false, swipeBetweenBadges: false },
  variations: {
    0: { enabled: false, swipeBetweenBadges: false },
    1: { enabled: true, swipeBetweenBadges: false },
    2: { enabled: true, swipeBetweenBadges: true },
  },
});
const obj = {
  name: "2026-10-badge-directory-updates",
  kind: "user",
  defaultConfig: { enabled: false, swipeBetweenBadges: false },
  variations: {
    0: { enabled: false, swipeBetweenBadges: false },
    1: { enabled: true, swipeBetweenBadges: false },
    2: { enabled: true, swipeBetweenBadges: true },
  },
};
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (location) => {
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
  : (location) => closure_2.useConfig({ location: location.location }).enabled;
const result = size.fileFinishedImporting("modules/badges/BadgeDirectoryUpdatesExperiment.tsx");

export const useIsBadgeDirectoryUpdatesEnabled = tmp2;
export const useIsBadgeDetailsSwipeEnabled = ReactCompilerGating.isReactCompilerEnabled()
  ? (location) => {
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
      const config = closure_2.useConfig(tmp2);
      return config.enabled && config.swipeBetweenBadges;
    }
  : (location) => {
      const config = closure_2.useConfig({ location: location.location });
      return config.enabled && config.swipeBetweenBadges;
    };
