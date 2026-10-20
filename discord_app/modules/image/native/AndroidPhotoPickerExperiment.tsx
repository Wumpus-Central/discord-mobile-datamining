// === Module 8105: AndroidPhotoPickerExperiment ===

// Module 8105 (AndroidPhotoPickerExperiment)
import ApexExperiment from "ApexExperiment" /* 1455 */;
import size from "module_2" /* 2 */;

const config = ApexExperiment.createApexExperiment({ kind: "user", name: "2026-10-android-photo-picker", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
const result = size.fileFinishedImporting("modules/image/native/AndroidPhotoPickerExperiment.tsx");

export const getAndroidPhotoPickerExperimentConfig = function getAndroidPhotoPickerExperimentConfig(location) {
  return config.getConfig({ location: location.location });
};