// === Module 17219: PhoenixSwitchEntrypointExperiment ===

// Module 17219 (PhoenixSwitchEntrypointExperiment)
import ApexExperiment from "ApexExperiment" /* 1450 */;
import size from "module_2" /* 2 */;

const obj = { name: "2026-11-phoenix-switch-entrypoint", kind: "user", defaultConfig: { enabled: false, requiresNitro: true }, variations: null };
const obj2 = { 1: null, 2: { enabled: true, requiresNitro: true } };
obj2[2] = { enabled: true, requiresNitro: false };
obj.variations = obj2;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/user_settings/phoenix_launch/native/PhoenixSwitchEntrypointExperiment.tsx");

export default apexExperiment;