// === Module 10388: SelfModInappropriateConversationExperiment ===

// Module 10388 (SelfModInappropriateConversationExperiment)
import c from "c" /* 576 */;
import apex_ApexExperimentDefault from "apex/ApexExperiment" /* 1454 */;

require = fn;
let tmp2 = apex_ApexExperimentDefault({ name: "2026-04-inappropriate-conversations-prescan", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
let closure_2 = tmp2;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/self_mod/inappropriate_conversation/SelfModInappropriateConversationExperiment.tsx");

export const InappropriateConversationExperiment = tmp2;
export const isEligibleForInappropriateConversationWarning = function isEligibleForInappropriateConversationWarning(location) {
  return closure_2.getConfig({ location: location.location }).enabled;
};
export const useIsEligibleForInappropriateConversationWarning = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsEligibleForInappropriateConversationWarning(location) {
  const cResult = c.c(2);
  const _location = location.location;
  if (cResult[0] !== _location) {
    const obj2 = { location: _location };
    cResult[0] = _location;
    cResult[1] = obj2;
    let tmp2 = obj2;
  } else {
    tmp2 = cResult[1];
  }
  return closure_2.useConfig(tmp2).enabled;
}) : (function useIsEligibleForInappropriateConversationWarning(location) {
  return closure_2.useConfig({ location: location.location }).enabled;
});