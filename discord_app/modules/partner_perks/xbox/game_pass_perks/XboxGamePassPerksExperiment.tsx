// === Module 7556: XboxGamePassPerksExperiment ===

// Module 7556 (XboxGamePassPerksExperiment)
import ApexExperiment from "ApexExperiment" /* 1433 */;
import size from "module_2" /* 2 */;

const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-03-crepe", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
const result = size.fileFinishedImporting("modules/partner_perks/xbox/game_pass_perks/XboxGamePassPerksExperiment.tsx");

export default apexExperiment;
export const useIsXboxGamePassPerksEnabled = function useIsXboxGamePassPerksEnabled(ProgramRewardsUtils) {
  return apexExperiment.useConfig({ location: ProgramRewardsUtils }).enabled;
};
export const getIsXboxGamePassPerksEnabled = function getIsXboxGamePassPerksEnabled(ProgramRewardsUtils) {
  return apexExperiment.getConfig({ location: ProgramRewardsUtils }).enabled;
};