// discord_app/modules/applications/isSocialLayerApplication.tsx
import { ApplicationFlags } from "ME";

const result = require("items").fileFinishedImporting("modules/applications/isSocialLayerApplication.tsx");

export default function isSocialLayerApplication(application) {
  let hasApplicationFlagResult = require("utils/ApplicationFlagUtils.tsx") /* getApplicationFlags */.hasApplicationFlag(application, ApplicationFlags.SOCIAL_LAYER_INTEGRATION_LIMITED);
  if (!hasApplicationFlagResult) {
    hasApplicationFlagResult = require("utils/ApplicationFlagUtils.tsx") /* getApplicationFlags */.hasApplicationFlag(application, ApplicationFlags.SOCIAL_LAYER_INTEGRATION);
    const tmpResult = require("utils/ApplicationFlagUtils.tsx") /* getApplicationFlags */;
  }
  return hasApplicationFlagResult;
};
export const isSocialLayerSDKAuthorization = function isSocialLayerSDKAuthorization(application, scopes) {
  let hasApplicationFlagResult = require("utils/ApplicationFlagUtils.tsx") /* getApplicationFlags */.hasApplicationFlag(application, ApplicationFlags.SOCIAL_LAYER_INTEGRATION_LIMITED);
  if (!hasApplicationFlagResult) {
    hasApplicationFlagResult = require("utils/ApplicationFlagUtils.tsx") /* getApplicationFlags */.hasApplicationFlag(application, ApplicationFlags.SOCIAL_LAYER_INTEGRATION);
    const tmpResult = require("utils/ApplicationFlagUtils.tsx") /* getApplicationFlags */;
  }
  if (hasApplicationFlagResult) {
    hasApplicationFlagResult = scopes.some((arg0) => callback(table[2]).isSocialLayerUmbrellaScope(arg0));
  }
  return hasApplicationFlagResult;
};