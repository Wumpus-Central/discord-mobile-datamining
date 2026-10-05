// === Module 11148: isSocialLayerApplication ===

// Module 11148 (isSocialLayerApplication)
import Constants from "Constants" /* 1085 */;
import scopes2 from "scopes" /* 8720 */;
import ApplicationFlagUtils from "ApplicationFlagUtils" /* 8726 */;
import size from "module_2" /* 2 */;

const ApplicationFlags = Constants.ApplicationFlags;
const result = size.fileFinishedImporting("modules/applications/isSocialLayerApplication.tsx");

export default function isSocialLayerApplication(application) {
  const obj = ApplicationFlagUtils;
  let hasApplicationFlagResult = obj.hasApplicationFlag(application, ApplicationFlags.SOCIAL_LAYER_INTEGRATION_LIMITED);
  if (!hasApplicationFlagResult) {
    const tmpResult = ApplicationFlagUtils;
    hasApplicationFlagResult = tmpResult.hasApplicationFlag(application, ApplicationFlags.SOCIAL_LAYER_INTEGRATION);
  }
  return hasApplicationFlagResult;
};
export const isSocialLayerSDKAuthorization = function isSocialLayerSDKAuthorization(application, scopes) {
  let obj = ApplicationFlagUtils;
  let hasApplicationFlagResult = obj.hasApplicationFlag(application, ApplicationFlags.SOCIAL_LAYER_INTEGRATION_LIMITED);
  if (!hasApplicationFlagResult) {
    const tmpResult = ApplicationFlagUtils;
    hasApplicationFlagResult = tmpResult.hasApplicationFlag(application, ApplicationFlags.SOCIAL_LAYER_INTEGRATION);
  }
  if (hasApplicationFlagResult) {
    hasApplicationFlagResult = scopes.some((item) => {
      const obj = scopes2;
      return obj.isSocialLayerUmbrellaScope(item);
    });
  }
  return hasApplicationFlagResult;
};