// === Module 15293: BountiesModalTransitionsRefactorExperiment ===

// Module 15293 (BountiesModalTransitionsRefactorExperiment)
import ApexExperiment from "ApexExperiment" /* 1434 */;
import size from "module_2" /* 2 */;

const obj = { name: "2026-07-bounties-modal-transitions-refactor", kind: "user", defaultConfig: { enabled: false }, variations: null };
const obj2 = { 1: null };
obj2[1] = { enabled: true };
obj.variations = obj2;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/quests/experiments/BountiesModalTransitionsRefactorExperiment.tsx");

export const BountiesModalTransitionsRefactorExperiment = apexExperiment;
export const useIsBountiesModalTransitionsRefactorEnabled = function useIsBountiesModalTransitionsRefactorEnabled(VIDEO_MODAL_MOBILE) {
  return apexExperiment.useConfig({ location: VIDEO_MODAL_MOBILE }).enabled;
};