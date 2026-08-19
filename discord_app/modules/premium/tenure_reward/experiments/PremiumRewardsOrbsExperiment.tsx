// === Module 13278: PremiumRewardsOrbsTreatment ===

// Module 13278 (PremiumRewardsOrbsTreatment)
import getUnitIdDefault from "getUnitId" /* 1368 */;

let obj = { CONTROL: "control", TREATMENT_A: "treatment_a", TREATMENT_B: "treatment_b", TREATMENT_C: "treatment_c", TREATMENT_D: "treatment_d" };
let closure_1 = { [obj.CONTROL]: 0, [obj.TREATMENT_A]: 250, [obj.TREATMENT_B]: 500, [obj.TREATMENT_C]: 250, [obj.TREATMENT_D]: 500 };
obj = { treatment: obj.CONTROL };
obj = { treatment: obj.CONTROL };
const tmp2 = getUnitIdDefault({ name: "2025-12-nitro-s-rewards", kind: "user", defaultConfig: obj, variations: { 0: obj, 1: { treatment: obj.TREATMENT_A }, 2: { treatment: obj.TREATMENT_B }, 3: { treatment: obj.TREATMENT_C }, 4: { treatment: obj.TREATMENT_D } } });
let closure_2 = tmp2;
const result = require("obj132").fileFinishedImporting("modules/premium/tenure_reward/experiments/PremiumRewardsOrbsExperiment.tsx");

export default tmp2;
export const PremiumRewardsOrbsTreatment = obj;
export const usePremiumRewardsOrbsExperiment = function usePremiumRewardsOrbsExperiment(ProgramRewardsUtils) {
  obj = { location: ProgramRewardsUtils };
  let CONTROL = closure_2.useConfig(obj).treatment;
  if (CONTROL == null) {
    CONTROL = obj.CONTROL;
  }
  obj = { treatment: CONTROL, isInTreatment: CONTROL !== obj.CONTROL, orbsRewardAmount: dependencyMap[CONTROL] };
  return obj;
};
export const getPremiumRewardsOrbsExperiment = function getPremiumRewardsOrbsExperiment(ProgramRewardsUtils) {
  obj = { location: ProgramRewardsUtils };
  let CONTROL = closure_2.getConfig(obj).treatment;
  if (CONTROL == null) {
    CONTROL = obj.CONTROL;
  }
  obj = { treatment: CONTROL, isInTreatment: CONTROL !== obj.CONTROL, orbsRewardAmount: dependencyMap[CONTROL] };
  return obj;
};