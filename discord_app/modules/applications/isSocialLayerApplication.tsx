// === Module 13402: isSocialLayerApplication ===

// Module 13402 (isSocialLayerApplication)
import Constants from "Constants" /* 1072 */;
import ApplicationFlagUtils from "ApplicationFlagUtils" /* 6540 */;
import scopes2 from "scopes" /* 6886 */;
import size from "module_2" /* 2 */;

const ApplicationFlags = Constants.ApplicationFlags;
const result = size.fileFinishedImporting("modules/applications/isSocialLayerApplication.tsx");

export default function isSocialLayerApplication(application) {
  let hasApplicationFlagResult = ApplicationFlagUtils.hasApplicationFlag(application, ApplicationFlags.SOCIAL_LAYER_INTEGRATION_LIMITED);
  if (!hasApplicationFlagResult) {
    hasApplicationFlagResult = ApplicationFlagUtils.hasApplicationFlag(application, ApplicationFlags.SOCIAL_LAYER_INTEGRATION);
    const tmpResult = ApplicationFlagUtils;
  }
  return hasApplicationFlagResult;
};
export function isSocialLayerSDKAuthorization(application, scopes) {
  let hasApplicationFlagResult = ApplicationFlagUtils.hasApplicationFlag(application, ApplicationFlags.SOCIAL_LAYER_INTEGRATION_LIMITED);
  if (!hasApplicationFlagResult) {
    hasApplicationFlagResult = ApplicationFlagUtils.hasApplicationFlag(application, ApplicationFlags.SOCIAL_LAYER_INTEGRATION);
    const tmpResult = ApplicationFlagUtils;
  }
  if (hasApplicationFlagResult) {
    hasApplicationFlagResult = scopes.some((item) => scopes2.isSocialLayerUmbrellaScope(item));
  }
  return hasApplicationFlagResult;
}