// discord_app/modules/applications/isSocialLayerApplication.tsx
import obj132 from "../../../_runtime/00002_obj132.js";
import ME from "../../Constants.tsx";
import getApplicationFlags from "utils/ApplicationFlagUtils.tsx";

const ApplicationFlags = ME.ApplicationFlags;
const result = obj132.fileFinishedImporting("modules/applications/isSocialLayerApplication.tsx");

export default function isSocialLayerApplication(application) {
  let hasApplicationFlagResult = getApplicationFlags.hasApplicationFlag(application, ApplicationFlags.SOCIAL_LAYER_INTEGRATION_LIMITED);
  if (!hasApplicationFlagResult) {
    hasApplicationFlagResult = getApplicationFlags.hasApplicationFlag(application, ApplicationFlags.SOCIAL_LAYER_INTEGRATION);
    const tmpResult = getApplicationFlags;
  }
  return hasApplicationFlagResult;
};
export const isSocialLayerSDKAuthorization = function isSocialLayerSDKAuthorization(application, scopes) {
  let hasApplicationFlagResult = getApplicationFlags.hasApplicationFlag(application, ApplicationFlags.SOCIAL_LAYER_INTEGRATION_LIMITED);
  if (!hasApplicationFlagResult) {
    hasApplicationFlagResult = getApplicationFlags.hasApplicationFlag(application, ApplicationFlags.SOCIAL_LAYER_INTEGRATION);
    const tmpResult = getApplicationFlags;
  }
  if (hasApplicationFlagResult) {
    hasApplicationFlagResult = scopes.some((item, index) => callback(table[2]).isSocialLayerUmbrellaScope(item));
  }
  return hasApplicationFlagResult;
};