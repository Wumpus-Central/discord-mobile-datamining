// === Module 4565: DcfNewUserCooldownExperiment ===

// Module 4565 (DcfNewUserCooldownExperiment)
import DurationsDefault from "Durations" /* 1091 */;
import ApexExperiment from "ApexExperiment" /* 1434 */;
import size from "module_2" /* 2 */;

const obj = { name: "2026-08-dcf-new-user-cooldown", kind: "user", defaultConfig: { newUserCooldownMs: DurationsDefault.Millis.DAY }, variations: null };
const obj3 = { 1: null, 2: null, 3: null };
const obj2 = { newUserCooldownMs: DurationsDefault.Millis.DAY };
obj3[1] = { newUserCooldownMs: 2 * DurationsDefault.Millis.DAY };
const obj4 = { newUserCooldownMs: 2 * DurationsDefault.Millis.DAY };
obj3[2] = { newUserCooldownMs: 3 * DurationsDefault.Millis.DAY };
const obj5 = { newUserCooldownMs: 3 * DurationsDefault.Millis.DAY };
obj3[3] = { newUserCooldownMs: 7 * DurationsDefault.Millis.DAY };
obj.variations = obj3;
let closure_0 = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/dismissible_content/DcfNewUserCooldownExperiment.tsx");

export const useDcfNewUserCooldown = function useDcfNewUserCooldown() {
  return closure_0.useConfig({ location: "useDcfNewUserCooldown" }).newUserCooldownMs;
};
export const getDcfNewUserCooldown = function getDcfNewUserCooldown() {
  return closure_0.getConfig({ location: "getDcfNewUserCooldown" }).newUserCooldownMs;
};