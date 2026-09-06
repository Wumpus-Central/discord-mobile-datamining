// discord_app/modules/media_viewer/native/MobileMediaViewerShareExperiment.tsx
import ApexExperiment from "../../experiments/apex/index.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let obj = {
  name: "2026-06-mobile-media-viewer-share",
  kind: "user",
  defaultConfig: { enabled: false },
  variations: null,
};
obj = { 1: null };
obj[1] = { enabled: true };
obj.variations = obj;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/media_viewer/native/MobileMediaViewerShareExperiment.tsx");

export const MobileMediaViewerShareExperiment = apexExperiment;
export const getMobileMediaViewerShareExperimentEnabled = function getMobileMediaViewerShareExperimentEnabled(
  shareMediaSource,
) {
  return apexExperiment.getConfig({ location: shareMediaSource }).enabled;
};
