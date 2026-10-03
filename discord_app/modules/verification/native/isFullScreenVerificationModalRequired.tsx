// discord_app/modules/verification/native/isFullScreenVerificationModalRequired.tsx
import VerificationUtilsDefault from "../VerificationUtils.tsx";
import SafetyFlowsLegacyRequiredActionsExperiment from "../../safety_flows/SafetyFlowsLegacyRequiredActionsExperiment.tsx";
import AuthenticationStore from "../../../stores/AuthenticationStore.tsx";

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
}
