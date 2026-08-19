// === Module 5315: apexExperiment ===

// Module 5315 (apexExperiment)
import obj132 from "obj132" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1472 */;

const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-03-crepe", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
const result = obj132.fileFinishedImporting("modules/croissant/crepe/CrepeExperiment.tsx");

export default apexExperiment;
export const useIsCrepeEnabled = function useIsCrepeEnabled(ProgramRewardsUtils) {
  return apexExperiment.useConfig({ location: ProgramRewardsUtils }).enabled;
};
export const getIsCrepeEnabled = function getIsCrepeEnabled(ProgramRewardsUtils) {
  return apexExperiment.getConfig({ location: ProgramRewardsUtils }).enabled;
};