// === Module 9792: SelfModInappropriateConversationExperiment ===

// Module 9792 (SelfModInappropriateConversationExperiment)
import react from "react" /* 576 */;
import apex_ApexExperimentDefault from "apex/ApexExperiment" /* 1441 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let obj = { name: "2026-04-inappropriate-conversations-prescan", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } };
let tmp2 = apex_ApexExperimentDefault(obj);
let closure_2 = tmp2;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((location) => {
  let tmp2;
  const obj = react;
  const cResult = obj.c(2);
  const _location = location.location;
  if (cResult[0] !== _location) {
    const obj2 = { location: _location };
    cResult[0] = _location;
    cResult[1] = obj2;
    tmp2 = obj2;
  } else {
    tmp2 = cResult[1];
  }
  return closure_2.useConfig(tmp2).enabled;
}) : ((location) => {
  const obj = { location: location.location };
  return closure_2.useConfig(obj).enabled;
});
const result = size.fileFinishedImporting("modules/self_mod/inappropriate_conversation/SelfModInappropriateConversationExperiment.tsx");

export const InappropriateConversationExperiment = tmp2;
export const isEligibleForInappropriateConversationWarning = function isEligibleForInappropriateConversationWarning(location) {
  const obj = { location: location.location };
  return closure_2.getConfig(obj).enabled;
};
export const useIsEligibleForInappropriateConversationWarning = tmp3;