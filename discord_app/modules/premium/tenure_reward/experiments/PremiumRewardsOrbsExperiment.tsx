// === Module 13557: PremiumRewardsOrbsExperiment ===

// Module 13557 (PremiumRewardsOrbsExperiment)
import react from "react" /* 576 */;
import apex_ApexExperimentDefault from "apex/ApexExperiment" /* 1441 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let obj3;
const PremiumRewardsOrbsTreatment = { CONTROL: "control", TREATMENT_A: "treatment_a", TREATMENT_B: "treatment_b", TREATMENT_C: "treatment_c", TREATMENT_D: "treatment_d" };
let closure_3 = { [PremiumRewardsOrbsTreatment.CONTROL]: 0, [PremiumRewardsOrbsTreatment.TREATMENT_A]: 250, [PremiumRewardsOrbsTreatment.TREATMENT_B]: 500, [PremiumRewardsOrbsTreatment.TREATMENT_C]: 250, [PremiumRewardsOrbsTreatment.TREATMENT_D]: 500 };
let obj2 = { name: "2025-12-nitro-s-rewards", kind: "user", defaultConfig: { treatment: PremiumRewardsOrbsTreatment.CONTROL }, variations: obj3 };
obj3 = { 0: { treatment: PremiumRewardsOrbsTreatment.CONTROL }, 1: { treatment: PremiumRewardsOrbsTreatment.TREATMENT_A }, 2: { treatment: PremiumRewardsOrbsTreatment.TREATMENT_B }, 3: { treatment: PremiumRewardsOrbsTreatment.TREATMENT_C }, 4: { treatment: PremiumRewardsOrbsTreatment.TREATMENT_D } };
let tmp2 = apex_ApexExperimentDefault(obj2);
let closure_4 = tmp2;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((location) => {
  let tmp2;
  const obj = react;
  const cResult = obj.c(6);
  if (cResult[0] !== location) {
    const obj2 = { location };
    cResult[0] = location;
    cResult[1] = obj2;
    tmp2 = obj2;
  } else {
    tmp2 = cResult[1];
  }
  let CONTROL = closure_4.useConfig(tmp2).treatment;
  if (CONTROL == null) {
    CONTROL = obj.CONTROL;
  }
  if (cResult[2] === CONTROL !== obj.CONTROL) {
    if (cResult[3] === closure_3[CONTROL]) {
      let tmp6;
      if (cResult[4] === CONTROL) {
        tmp6 = cResult[5];
      }
      return tmp6;
    }
  }
  const obj3 = { treatment: CONTROL, isInTreatment: CONTROL !== obj.CONTROL, orbsRewardAmount: closure_3[CONTROL] };
  cResult[2] = CONTROL !== obj.CONTROL;
  cResult[3] = closure_3[CONTROL];
  cResult[4] = CONTROL;
  cResult[5] = obj3;
  tmp6 = obj3;
}) : ((location) => {
  const obj = { location };
  let CONTROL = closure_4.useConfig(obj).treatment;
  if (CONTROL == null) {
    CONTROL = obj.CONTROL;
  }
  return { treatment: CONTROL, isInTreatment: CONTROL !== obj.CONTROL, orbsRewardAmount: closure_3[CONTROL] };
});
const result = size.fileFinishedImporting("modules/premium/tenure_reward/experiments/PremiumRewardsOrbsExperiment.tsx");

export default tmp2;
export { PremiumRewardsOrbsTreatment };
export const usePremiumRewardsOrbsExperiment = tmp3;
export const getPremiumRewardsOrbsExperiment = function getPremiumRewardsOrbsExperiment(ProgramRewardsUtils) {
  const obj = { location: ProgramRewardsUtils };
  let CONTROL = closure_4.getConfig(obj).treatment;
  if (CONTROL == null) {
    CONTROL = obj.CONTROL;
  }
  return { treatment: CONTROL, isInTreatment: CONTROL !== obj.CONTROL, orbsRewardAmount: closure_3[CONTROL] };
};