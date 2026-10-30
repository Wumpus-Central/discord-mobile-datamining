// === Module 8788: ProfileFrameLayerPreloadMobileExperiment ===

// Module 8788 (ProfileFrameLayerPreloadMobileExperiment)
import ApexExperiment from "ApexExperiment" /* 1448 */;
import size from "module_2" /* 2 */;

const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-09-profile-frame-layer-preload-mobile", kind: "user", defaultConfig: { profileFrameLayerPreloadEnabled: false }, variations: { 0: { profileFrameLayerPreloadEnabled: false }, 1: { profileFrameLayerPreloadEnabled: true } } });
const result = size.fileFinishedImporting("modules/collectibles/experiments/ProfileFrameLayerPreloadMobileExperiment.tsx");

export default apexExperiment;
export function useIsProfileFrameLayerPreloadEnabled(usePreloadLayerImages) {
  return apexExperiment.useConfig({ location: usePreloadLayerImages }).profileFrameLayerPreloadEnabled;
}