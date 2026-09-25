// === Module 7805: MobileMediaViewerShareExperiment ===

// Module 7805 (MobileMediaViewerShareExperiment)
import ApexExperiment from "ApexExperiment" /* 1434 */;
import size from "module_2" /* 2 */;

const obj = { name: "2026-06-mobile-media-viewer-share", kind: "user", defaultConfig: { enabled: false }, variations: null };
const obj2 = { 1: null };
obj2[1] = { enabled: true };
obj.variations = obj2;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/media_viewer/native/MobileMediaViewerShareExperiment.tsx");

export const MobileMediaViewerShareExperiment = apexExperiment;
export const getMobileMediaViewerShareExperimentEnabled = function getMobileMediaViewerShareExperimentEnabled(shareMediaSource) {
  return apexExperiment.getConfig({ location: shareMediaSource }).enabled;
};
export const useMobileMediaViewerShareExperimentEnabled = function useMobileMediaViewerShareExperimentEnabled(mediaViewerCopyLink) {
  return apexExperiment.useConfig({ location: mediaViewerCopyLink }).enabled;
};