// discord_app/modules/premium/powerups/experiments/FileUploadPowerupHoldoutExperiment.tsx
import obj132 from "../../../../../_runtime/00002_obj132.js";
import ApexExperiment from "../../../experiments/apex/index.tsx";

const obj = { 1: null };
obj[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment({ kind: "user", name: "2026-03-file-upload-powerup-holdout", defaultConfig: { enabled: false }, variations: obj });
const result = obj132.fileFinishedImporting("modules/premium/powerups/experiments/FileUploadPowerupHoldoutExperiment.tsx");

export const FileUploadPowerupHoldoutExperiment = apexExperiment;