// === Module 10968: SelfModInappropriateConversationExperiment ===

// Module 10968 (SelfModInappropriateConversationExperiment)
import apex_ApexExperimentDefault from "apex/ApexExperiment" /* 1434 */;

const tmp2 = apex_ApexExperimentDefault({ name: "2026-04-inappropriate-conversations-prescan", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
let closure_0 = tmp2;
const size = fn(2);
const result = size.fileFinishedImporting("modules/self_mod/inappropriate_conversation/SelfModInappropriateConversationExperiment.tsx");

export const InappropriateConversationExperiment = tmp2;
export const isEligibleForInappropriateConversationWarning = function isEligibleForInappropriateConversationWarning(location) {
  return closure_0.getConfig({ location: location.location }).enabled;
};
export const useIsEligibleForInappropriateConversationWarning = function useIsEligibleForInappropriateConversationWarning(location) {
  return closure_0.useConfig({ location: location.location }).enabled;
};