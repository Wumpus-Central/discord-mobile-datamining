// discord_app/modules/premium/tenure_reward/experiments/PremiumRewardsOrbsExperiment.tsx
import apex_ApexExperimentDefault from "../../../experiments/apex/ApexExperiment.tsx";

let PremiumRewardsOrbsTreatment = {
  CONTROL: "control",
  TREATMENT_A: "treatment_a",
  TREATMENT_B: "treatment_b",
  TREATMENT_C: "treatment_c",
  TREATMENT_D: "treatment_d",
};
const dependencyMap = {
  [PremiumRewardsOrbsTreatment.CONTROL]: 0,
  [PremiumRewardsOrbsTreatment.TREATMENT_A]: 250,
  [PremiumRewardsOrbsTreatment.TREATMENT_B]: 500,
  [PremiumRewardsOrbsTreatment.TREATMENT_C]: 250,
  [PremiumRewardsOrbsTreatment.TREATMENT_D]: 500,
};
PremiumRewardsOrbsTreatment = {
  name: "2025-12-nitro-s-rewards",
  kind: "user",
  defaultConfig: { treatment: PremiumRewardsOrbsTreatment.CONTROL },
  variations: null,
};
PremiumRewardsOrbsTreatment = {
  0: { treatment: PremiumRewardsOrbsTreatment.CONTROL },
  1: { treatment: PremiumRewardsOrbsTreatment.TREATMENT_A },
  2: { treatment: PremiumRewardsOrbsTreatment.TREATMENT_B },
  3: { treatment: PremiumRewardsOrbsTreatment.TREATMENT_C },
  4: { treatment: PremiumRewardsOrbsTreatment.TREATMENT_D },
};
PremiumRewardsOrbsTreatment.variations = PremiumRewardsOrbsTreatment;
const tmp2 = apex_ApexExperimentDefault(PremiumRewardsOrbsTreatment);
let closure_2 = tmp2;
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/tenure_reward/experiments/PremiumRewardsOrbsExperiment.tsx");

export default tmp2;
export { PremiumRewardsOrbsTreatment };
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
