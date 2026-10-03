// === Module 7965: AndroidMediaViewerFullResolutionExperiment ===

// Module 7965 (AndroidMediaViewerFullResolutionExperiment)
import ApexExperiment from "ApexExperiment" /* 1440 */;
import size from "module_2" /* 2 */;

const obj = { name: "2026-10-android-media-viewer-full-resolution", kind: "user", defaultConfig: { enabled: false }, variations: null };
const obj2 = { 1: null };
obj2[1] = { enabled: true };
obj.variations = obj2;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/media_viewer/native/AndroidMediaViewerFullResolutionExperiment.tsx");

export const AndroidMediaViewerFullResolutionExperiment = apexExperiment;
export const getAndroidMediaViewerFullResolutionEnabled = function getAndroidMediaViewerFullResolutionEnabled(MediaModal) {
  return apexExperiment.getConfig({ location: MediaModal }).enabled;
};