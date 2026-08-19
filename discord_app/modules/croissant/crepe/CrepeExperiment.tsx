// discord_app/modules/croissant/crepe/CrepeExperiment.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import ApexExperiment from "../../experiments/apex/index.tsx";

const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-03-crepe", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
const result = obj132.fileFinishedImporting("modules/croissant/crepe/CrepeExperiment.tsx");

export default apexExperiment;
export const useIsCrepeEnabled = function useIsCrepeEnabled(ProgramRewardsUtils) {
  return apexExperiment.useConfig({ location: ProgramRewardsUtils }).enabled;
};
export const getIsCrepeEnabled = function getIsCrepeEnabled(ProgramRewardsUtils) {
  return apexExperiment.getConfig({ location: ProgramRewardsUtils }).enabled;
};