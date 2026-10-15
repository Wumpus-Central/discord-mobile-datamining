// discord_app/modules/applications/isSocialLayerApplication.tsx
import Constants from "../../Constants.tsx";
import ApplicationFlagUtils from "utils/ApplicationFlagUtils.tsx";
import scopes2 from "../oauth2/scopes.tsx";
import size from "../../../_runtime/metro/00002__.js";

const ApplicationFlags = Constants.ApplicationFlags;
const result = size.fileFinishedImporting("modules/applications/isSocialLayerApplication.tsx");

export default function isSocialLayerApplication(application) {
  let hasApplicationFlagResult = ApplicationFlagUtils.hasApplicationFlag(
    application,
    ApplicationFlags.SOCIAL_LAYER_INTEGRATION_LIMITED,
  );
  if (!hasApplicationFlagResult) {
    hasApplicationFlagResult = ApplicationFlagUtils.hasApplicationFlag(
      application,
      ApplicationFlags.SOCIAL_LAYER_INTEGRATION,
    );
    const tmpResult = ApplicationFlagUtils;
  }
  return hasApplicationFlagResult;
}
export const isSocialLayerSDKAuthorization = function isSocialLayerSDKAuthorization(application, scopes) {
  let hasApplicationFlagResult = ApplicationFlagUtils.hasApplicationFlag(
    application,
    ApplicationFlags.SOCIAL_LAYER_INTEGRATION_LIMITED,
  );
  if (!hasApplicationFlagResult) {
    hasApplicationFlagResult = ApplicationFlagUtils.hasApplicationFlag(
      application,
      ApplicationFlags.SOCIAL_LAYER_INTEGRATION,
    );
    const tmpResult = ApplicationFlagUtils;
  }
  if (hasApplicationFlagResult) {
    hasApplicationFlagResult = scopes.some((item) => scopes2.isSocialLayerUmbrellaScope(item));
  }
  return hasApplicationFlagResult;
};
