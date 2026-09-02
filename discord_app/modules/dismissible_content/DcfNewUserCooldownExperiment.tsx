// === Module 4321: useDcfNewUserCooldown ===

// Module 4321 (useDcfNewUserCooldown)
import set from "set" /* 2 */;
import setDefault from "set" /* 684 */;
import ApexExperiment from "ApexExperiment" /* 1467 */;

let obj = { name: "2026-08-dcf-new-user-cooldown", kind: "user", defaultConfig: null, variations: null };
obj = { newUserCooldownMs: setDefault.Millis.DAY };
obj[2] = obj;
const obj1 = { 1: null, 2: { newUserCooldownMs: 2 * setDefault.Millis.DAY }, 3: null };
const obj2 = { newUserCooldownMs: 2 * setDefault.Millis.DAY };
obj1[2] = { newUserCooldownMs: 3 * setDefault.Millis.DAY };
const obj3 = { newUserCooldownMs: 3 * setDefault.Millis.DAY };
obj1[3] = { newUserCooldownMs: 7 * setDefault.Millis.DAY };
obj[3] = obj1;
let closure_0 = ApexExperiment.createApexExperiment(obj);
const obj4 = { newUserCooldownMs: 7 * setDefault.Millis.DAY };
const result = set.fileFinishedImporting("modules/dismissible_content/DcfNewUserCooldownExperiment.tsx");

export const useDcfNewUserCooldown = function useDcfNewUserCooldown() {
  return closure_0.useConfig({ location: "useDcfNewUserCooldown" }).newUserCooldownMs;
};
export const getDcfNewUserCooldown = function getDcfNewUserCooldown() {
  return closure_0.getConfig({ location: "getDcfNewUserCooldown" }).newUserCooldownMs;
};