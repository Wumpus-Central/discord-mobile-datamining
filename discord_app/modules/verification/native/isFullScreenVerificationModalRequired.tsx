// === Module 18727: isFullScreenVerificationModalRequired ===

// Module 18727 (isFullScreenVerificationModalRequired)
import VerificationUtilsDefault from "VerificationUtils" /* 6976 */;
import SafetyFlowsLegacyRequiredActionsExperiment from "SafetyFlowsLegacyRequiredActionsExperiment" /* 18728 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/verification/native/isFullScreenVerificationModalRequired.tsx");

export default function isFullScreenVerificationModalRequired(requiredAction, location) {
  let result = VerificationUtilsDefault.isFullScreenVerification(requiredAction);
  if (result) {
    result = null != AuthenticationStore.getToken();
  }
  if (result) {
    const obj3 = { location, requiredAction };
    result = !SafetyFlowsLegacyRequiredActionsExperiment.shouldUseSafetyFlowsForRequiredAction(obj3);
  }
  return result;
};