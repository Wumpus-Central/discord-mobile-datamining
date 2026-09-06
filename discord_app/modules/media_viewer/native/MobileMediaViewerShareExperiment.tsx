// === Module 8365: MobileMediaViewerShareExperiment ===

// Module 8365 (MobileMediaViewerShareExperiment)
import ApexExperiment from "ApexExperiment" /* 1433 */;
import size from "module_2" /* 2 */;

let obj = { name: "2026-06-mobile-media-viewer-share", kind: "user", defaultConfig: { enabled: false }, variations: null };
obj = { 1: null };
obj[1] = { enabled: true };
obj.variations = obj;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/media_viewer/native/MobileMediaViewerShareExperiment.tsx");

export const MobileMediaViewerShareExperiment = apexExperiment;
export const getMobileMediaViewerShareExperimentEnabled = function getMobileMediaViewerShareExperimentEnabled(shareMediaSource) {
  return apexExperiment.getConfig({ location: shareMediaSource }).enabled;
};