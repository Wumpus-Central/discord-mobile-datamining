// === Module 10646: InappropriateConversationsDefaultOn ===

// Module 10646 (InappropriateConversationsDefaultOn)
import getUnitIdDefault from "getUnitId" /* 1368 */;

const tmp2 = getUnitIdDefault({ name: "2026-04-inappropriate-conversations-default-on", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
let closure_0 = tmp2;
const result = require("set").fileFinishedImporting("modules/self_mod/inappropriate_conversation/InappropriateConversationsDefaultOn.tsx");

export const InappropriateConversationsDefaultOn = tmp2;
export const isEligibleForInappropriateConversationDefaultOn = function isEligibleForInappropriateConversationDefaultOn(location) {
  return closure_0.getConfig({ location: location.location }).enabled;
};
export const useIsEligibleForInappropriateConversationDefaultOn = function useIsEligibleForInappropriateConversationDefaultOn(location) {
  return closure_0.useConfig({ location: location.location }).enabled;
};