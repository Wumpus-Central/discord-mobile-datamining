// === Module 4403: DcfNewUserCooldownExperiment ===

// Module 4403 (DcfNewUserCooldownExperiment)
import DurationsDefault from "Durations" /* 1090 */;
import ApexExperiment from "ApexExperiment" /* 1433 */;
import size from "module_2" /* 2 */;

let obj = { name: "2026-08-dcf-new-user-cooldown", kind: "user", defaultConfig: null, variations: null };
obj = { newUserCooldownMs: DurationsDefault.Millis.DAY };
obj.defaultConfig = obj;
const obj1 = { 1: null, 2: { newUserCooldownMs: 2 * DurationsDefault.Millis.DAY }, 3: null };
const obj2 = { newUserCooldownMs: 2 * DurationsDefault.Millis.DAY };
obj1[2] = { newUserCooldownMs: 3 * DurationsDefault.Millis.DAY };
const obj3 = { newUserCooldownMs: 3 * DurationsDefault.Millis.DAY };
obj1[3] = { newUserCooldownMs: 7 * DurationsDefault.Millis.DAY };
obj.variations = obj1;
let closure_0 = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/dismissible_content/DcfNewUserCooldownExperiment.tsx");

export const useDcfNewUserCooldown = function useDcfNewUserCooldown() {
  return closure_0.useConfig({ location: "useDcfNewUserCooldown" }).newUserCooldownMs;
};
export const getDcfNewUserCooldown = function getDcfNewUserCooldown() {
  return closure_0.getConfig({ location: "getDcfNewUserCooldown" }).newUserCooldownMs;
};