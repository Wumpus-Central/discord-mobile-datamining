// === Module 11148: isSocialLayerApplication ===

// Module 11148 (isSocialLayerApplication)
import Constants from "Constants" /* 1085 */;
import scopes2 from "scopes" /* 8720 */;
import ApplicationFlagUtils from "ApplicationFlagUtils" /* 8726 */;
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
export const isSocialLayerSDKAuthorization = function isSocialLayerSDKAuthorization(application, scopes) {
  let hasApplicationFlagResult = ApplicationFlagUtils.hasApplicationFlag(application, ApplicationFlags.SOCIAL_LAYER_INTEGRATION_LIMITED);
  if (!hasApplicationFlagResult) {
    hasApplicationFlagResult = ApplicationFlagUtils.hasApplicationFlag(application, ApplicationFlags.SOCIAL_LAYER_INTEGRATION);
    const tmpResult = ApplicationFlagUtils;
  }
  if (hasApplicationFlagResult) {
    hasApplicationFlagResult = scopes.some((item) => scopes2.isSocialLayerUmbrellaScope(item));
  }
  return hasApplicationFlagResult;
};