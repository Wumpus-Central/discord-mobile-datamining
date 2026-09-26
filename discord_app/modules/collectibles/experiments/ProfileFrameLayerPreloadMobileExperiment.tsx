// discord_app/modules/collectibles/experiments/ProfileFrameLayerPreloadMobileExperiment.tsx
import ApexExperiment from "../../experiments/apex/index.tsx";
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
export const useIsProfileFrameLayerPreloadEnabled = function useIsProfileFrameLayerPreloadEnabled(ProfileFrame) {
  return apexExperiment.useConfig({ location: ProfileFrame }).profileFrameLayerPreloadEnabled;
};
