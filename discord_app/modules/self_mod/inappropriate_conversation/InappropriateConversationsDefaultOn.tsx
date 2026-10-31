// === Module 11265: InappropriateConversationsDefaultOn ===

// Module 11265 (InappropriateConversationsDefaultOn)
import apex_ApexExperimentDefault from "apex/ApexExperiment" /* 1448 */;

const tmp2 = apex_ApexExperimentDefault({ name: "2026-04-inappropriate-conversations-default-on", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
let closure_0 = tmp2;
const size = fn(2);
const result = size.fileFinishedImporting("modules/self_mod/inappropriate_conversation/InappropriateConversationsDefaultOn.tsx");

export const InappropriateConversationsDefaultOn = tmp2;
export function isEligibleForInappropriateConversationDefaultOn(location) {
  return closure_0.getConfig({ location: location.location }).enabled;
}
export function useIsEligibleForInappropriateConversationDefaultOn(location) {
  return closure_0.useConfig({ location: location.location }).enabled;
}