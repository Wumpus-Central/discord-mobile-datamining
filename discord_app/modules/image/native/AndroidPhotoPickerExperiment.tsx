// discord_app/modules/image/native/AndroidPhotoPickerExperiment.tsx
import ApexExperiment from "../../experiments/apex/index.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const config = ApexExperiment.createApexExperiment({
  kind: "user",
  name: "2026-10-android-photo-picker",
  defaultConfig: { enabled: false },
  variations: { 0: { enabled: false }, 1: { enabled: true } },
});
const result = size.fileFinishedImporting("modules/image/native/AndroidPhotoPickerExperiment.tsx");

export const getAndroidPhotoPickerExperimentConfig = function getAndroidPhotoPickerExperimentConfig(location) {
  return config.getConfig({ location: location.location });
};
