// === Module 17179: PhoenixSwitchEntrypointExperiment ===

// Module 17179 (PhoenixSwitchEntrypointExperiment)
import ApexExperiment from "ApexExperiment" /* 1450 */;
import size from "module_2" /* 2 */;

const obj = { name: "2026-11-phoenix-switch-entrypoint", kind: "user", defaultConfig: { enabled: false }, variations: null };
const obj2 = { 1: null };
obj2[1] = { enabled: true };
obj.variations = obj2;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/user_settings/phoenix_launch/native/PhoenixSwitchEntrypointExperiment.tsx");

export default apexExperiment;