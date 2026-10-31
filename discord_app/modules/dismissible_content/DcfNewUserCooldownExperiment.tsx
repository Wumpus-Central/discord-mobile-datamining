// === Module 5067: DcfNewUserCooldownExperiment ===

// Module 5067 (DcfNewUserCooldownExperiment)
import DurationsDefault from "Durations" /* 1089 */;
import ApexExperiment from "ApexExperiment" /* 1447 */;
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

export function useDcfNewUserCooldown() {
  return closure_0.useConfig({ location: "useDcfNewUserCooldown" }).newUserCooldownMs;
}
export function getDcfNewUserCooldown() {
  return closure_0.getConfig({ location: "getDcfNewUserCooldown" }).newUserCooldownMs;
}