// === Module 17057: PhoenixAppAccessExperiment ===

// Module 17057 (PhoenixAppAccessExperiment)
import ApexExperiment from "ApexExperiment" /* 1450 */;
import size from "module_2" /* 2 */;

const obj = { name: "2026-11-phoenix-app-access", kind: "user", defaultConfig: { enabled: false }, variations: null };
const obj2 = { 1: null };
obj2[1] = { enabled: true };
obj.variations = obj2;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/user_settings/phoenix_launch/native/PhoenixAppAccessExperiment.tsx");

export default apexExperiment;