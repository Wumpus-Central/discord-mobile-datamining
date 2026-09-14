// discord_app/modules/premium/powerups/experiments/FileUploadPowerupHoldoutExperiment.tsx
import ApexExperiment from "../../../experiments/apex/index.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const obj = {
  kind: "user",
  name: "2026-03-file-upload-powerup-holdout",
  defaultConfig: { enabled: false },
  variations: null,
};
const obj2 = { 1: null };
obj2[1] = { enabled: true };
obj.variations = obj2;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting(
  "modules/premium/powerups/experiments/FileUploadPowerupHoldoutExperiment.tsx",
);

export const FileUploadPowerupHoldoutExperiment = apexExperiment;
