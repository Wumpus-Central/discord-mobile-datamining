// discord_app/modules/media_viewer/native/AndroidMediaViewerFullResolutionExperiment.tsx
import ApexExperiment from "../../experiments/apex/index.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let obj2;
let obj = {
  name: "2026-10-android-media-viewer-full-resolution",
  kind: "user",
  defaultConfig: { enabled: false },
  variations: obj2,
};
obj2 = { 1: null };
obj2[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/media_viewer/native/AndroidMediaViewerFullResolutionExperiment.tsx");

export const AndroidMediaViewerFullResolutionExperiment = apexExperiment;
export const getAndroidMediaViewerFullResolutionEnabled = function getAndroidMediaViewerFullResolutionEnabled(
  MediaModal,
) {
  const obj = { location: MediaModal };
  return apexExperiment.getConfig(obj).enabled;
};
