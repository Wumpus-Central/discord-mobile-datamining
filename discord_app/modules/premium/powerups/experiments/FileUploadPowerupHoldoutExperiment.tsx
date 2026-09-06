// === Module 4486: FileUploadPowerupHoldoutExperiment ===

// Module 4486 (FileUploadPowerupHoldoutExperiment)
import ApexExperiment from "ApexExperiment" /* 1433 */;
import size from "module_2" /* 2 */;

let obj = { kind: "user", name: "2026-03-file-upload-powerup-holdout", defaultConfig: { enabled: false }, variations: null };
obj = { 1: null };
obj[1] = { enabled: true };
obj.variations = obj;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/premium/powerups/experiments/FileUploadPowerupHoldoutExperiment.tsx");

export const FileUploadPowerupHoldoutExperiment = apexExperiment;