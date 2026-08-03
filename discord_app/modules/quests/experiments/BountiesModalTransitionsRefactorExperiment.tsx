// === Module 14056: apexExperiment ===

// Module 14056 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { 1: null };
obj[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-07-bounties-modal-transitions-refactor", kind: "user", defaultConfig: { enabled: false }, variations: obj });
const result = require("set").fileFinishedImporting("modules/quests/experiments/BountiesModalTransitionsRefactorExperiment.tsx");

export const BountiesModalTransitionsRefactorExperiment = apexExperiment;
export const useIsBountiesModalTransitionsRefactorEnabled = function useIsBountiesModalTransitionsRefactorEnabled(VIDEO_MODAL_MOBILE) {
  return apexExperiment.useConfig({ location: VIDEO_MODAL_MOBILE }).enabled;
};