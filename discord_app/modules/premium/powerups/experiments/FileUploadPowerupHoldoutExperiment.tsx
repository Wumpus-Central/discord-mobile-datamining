// discord_app/modules/premium/powerups/experiments/FileUploadPowerupHoldoutExperiment.tsx
import ApexExperiment from "../../../experiments/apex/index.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let obj = {
  kind: "user",
  name: "2026-03-file-upload-powerup-holdout",
  defaultConfig: { enabled: false },
  variations: null,
};
obj = { 1: null };
obj[1] = { enabled: true };
obj.variations = obj;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting(
  "modules/premium/powerups/experiments/FileUploadPowerupHoldoutExperiment.tsx",
);

export const FileUploadPowerupHoldoutExperiment = apexExperiment;
