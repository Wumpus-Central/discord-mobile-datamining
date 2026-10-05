// discord_app/modules/verification/native/isFullScreenVerificationModalRequired.tsx
import VerificationUtilsDefault from "../VerificationUtils.tsx";
import SafetyFlowsLegacyRequiredActionsExperiment from "../../safety_flows/SafetyFlowsLegacyRequiredActionsExperiment.tsx";
import AuthenticationStore from "../../../stores/AuthenticationStore.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let result = size.fileFinishedImporting("modules/verification/native/isFullScreenVerificationModalRequired.tsx");

export default function isFullScreenVerificationModalRequired(requiredAction, location) {
  const obj = VerificationUtilsDefault;
  let result = obj.isFullScreenVerification(requiredAction) && null != AuthenticationStore.getToken();
  if (result) {
    const obj3 = { location, requiredAction };
    const obj2 = SafetyFlowsLegacyRequiredActionsExperiment;
    result = !obj2.shouldUseSafetyFlowsForRequiredAction(obj3);
  }
  return result;
}
