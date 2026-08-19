// === Module 10576: InappropriateConversationExperiment ===

// Module 10576 (InappropriateConversationExperiment)
import getUnitIdDefault from "getUnitId" /* 1368 */;

const tmp2 = getUnitIdDefault({ name: "2026-04-inappropriate-conversations-prescan", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
let closure_0 = tmp2;
const result = require("obj132").fileFinishedImporting("modules/self_mod/inappropriate_conversation/SelfModInappropriateConversationExperiment.tsx");

export const InappropriateConversationExperiment = tmp2;
export const isEligibleForInappropriateConversationWarning = function isEligibleForInappropriateConversationWarning(location) {
  return closure_0.getConfig({ location: location.location }).enabled;
};
export const useIsEligibleForInappropriateConversationWarning = function useIsEligibleForInappropriateConversationWarning(location) {
  return closure_0.useConfig({ location: location.location }).enabled;
};