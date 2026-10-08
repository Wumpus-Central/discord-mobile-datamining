// discord_app/modules/collectibles/experiments/ProfileFrameLayerPreloadMobileExperiment.tsx
import c from "../../../../_runtime/00576_c.js";
import ApexExperiment from "../../experiments/apex/index.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const apexExperiment = ApexExperiment.createApexExperiment({
  name: "2026-09-profile-frame-layer-preload-mobile",
  kind: "user",
  defaultConfig: { profileFrameLayerPreloadEnabled: false },
  variations: { 0: { profileFrameLayerPreloadEnabled: false }, 1: { profileFrameLayerPreloadEnabled: true } },
});
const result = size.fileFinishedImporting(
  "modules/collectibles/experiments/ProfileFrameLayerPreloadMobileExperiment.tsx",
);

export default apexExperiment;
export const useIsProfileFrameLayerPreloadEnabled = ReactCompilerGating.isReactCompilerEnabled()
  ? function useIsProfileFrameLayerPreloadEnabled(location) {
      const cResult = c.c(2);
      if (cResult[0] !== location) {
        const obj2 = { location };
        cResult[0] = location;
        cResult[1] = obj2;
        let tmp2 = obj2;
      } else {
        tmp2 = cResult[1];
      }
      return apexExperiment.useConfig(tmp2).profileFrameLayerPreloadEnabled;
    }
  : function useIsProfileFrameLayerPreloadEnabled(location) {
      return apexExperiment.useConfig({ location }).profileFrameLayerPreloadEnabled;
    };
