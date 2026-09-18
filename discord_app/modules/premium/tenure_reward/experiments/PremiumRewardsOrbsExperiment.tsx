// === Module 13939: PremiumRewardsOrbsExperiment ===

// Module 13939 (PremiumRewardsOrbsExperiment)
import apex_ApexExperimentDefault from "apex/ApexExperiment" /* 1435 */;

const PremiumRewardsOrbsTreatment = { CONTROL: "control", TREATMENT_A: "treatment_a", TREATMENT_B: "treatment_b", TREATMENT_C: "treatment_c", TREATMENT_D: "treatment_d" };
const dependencyMap = { [PremiumRewardsOrbsTreatment.CONTROL]: 0, [PremiumRewardsOrbsTreatment.TREATMENT_A]: 250, [PremiumRewardsOrbsTreatment.TREATMENT_B]: 500, [PremiumRewardsOrbsTreatment.TREATMENT_C]: 250, [PremiumRewardsOrbsTreatment.TREATMENT_D]: 500 };
const obj2 = { name: "2025-12-nitro-s-rewards", kind: "user", defaultConfig: { treatment: PremiumRewardsOrbsTreatment.CONTROL }, variations: { 0: { treatment: PremiumRewardsOrbsTreatment.CONTROL }, 1: { treatment: PremiumRewardsOrbsTreatment.TREATMENT_A }, 2: { treatment: PremiumRewardsOrbsTreatment.TREATMENT_B }, 3: { treatment: PremiumRewardsOrbsTreatment.TREATMENT_C }, 4: { treatment: PremiumRewardsOrbsTreatment.TREATMENT_D } } };
const tmp2 = apex_ApexExperimentDefault(obj2);
let closure_2 = tmp2;
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/tenure_reward/experiments/PremiumRewardsOrbsExperiment.tsx");

export default tmp2;
export { PremiumRewardsOrbsTreatment };
export const usePremiumRewardsOrbsExperiment = function usePremiumRewardsOrbsExperiment(ProgramRewardsUtils) {
  const obj = { location: ProgramRewardsUtils };
  let CONTROL = closure_2.useConfig(obj).treatment;
  if (CONTROL == null) {
    CONTROL = obj.CONTROL;
  }
  return { treatment: CONTROL, isInTreatment: CONTROL !== obj.CONTROL, orbsRewardAmount: dependencyMap[CONTROL] };
};
export const getPremiumRewardsOrbsExperiment = function getPremiumRewardsOrbsExperiment(ProgramRewardsUtils) {
  const obj = { location: ProgramRewardsUtils };
  let CONTROL = closure_2.getConfig(obj).treatment;
  if (CONTROL == null) {
    CONTROL = obj.CONTROL;
  }
  return { treatment: CONTROL, isInTreatment: CONTROL !== obj.CONTROL, orbsRewardAmount: dependencyMap[CONTROL] };
};