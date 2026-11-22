// === Module 17178: PhoenixRolloutExperiment ===

// Module 17178 (PhoenixRolloutExperiment)
import LaunchClient from "LaunchClient" /* 17179 */;
import ApexExperiment from "ApexExperiment" /* 1450 */;
import size from "module_2" /* 2 */;

const obj = { name: "2026-11-phoenix-rollout", kind: "user", defaultConfig: { forcedClient: null }, variations: null };
const obj2 = { 0: { forcedClient: null }, 1: { forcedClient: LaunchClient.LaunchClient.PHOENIX }, 2: null };
const obj3 = { forcedClient: LaunchClient.LaunchClient.PHOENIX };
obj2[2] = { forcedClient: LaunchClient.LaunchClient.LEGACY };
obj.variations = obj2;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/user_settings/phoenix_launch/native/PhoenixRolloutExperiment.tsx");

export default apexExperiment;