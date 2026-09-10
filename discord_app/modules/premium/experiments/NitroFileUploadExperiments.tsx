// discord_app/modules/premium/experiments/NitroFileUploadExperiments.tsx
import PremiumConstants from "../PremiumConstants.tsx";
import ApexExperiment from "../../experiments/apex/index.tsx";
import size from "../../../../_runtime/metro/00002__.js";

({ MAX_PREMIUM_TIER_2_ATTACHMENT_SIZE: closure_0, MAX_PREMIUM_TIER_2_ATTACHMENT_SIZE_1GB: closure_1 } =
  PremiumConstants);
const NitroFileUploadRollout = "NitroFileUploadRollout";
let obj = {
  name: "2026-09-nitro-file-upload-rollout",
  kind: "user",
  defaultConfig: { enabled: false },
  variations: null,
};
obj = { 1: null };
obj[1] = { enabled: true };
obj.variations = obj;
let closure_3 = ApexExperiment.createApexExperiment(obj);
let closure_4 = ApexExperiment.createApexExperiment({
  name: "2026-09-non-nitro-file-upload-marketing",
  kind: "user",
  defaultConfig: { enabled: false },
  variations: { 0: { enabled: false }, 1: { enabled: true } },
});
const result = size.fileFinishedImporting("modules/premium/experiments/NitroFileUploadExperiments.tsx");

export const getNitroFileUploadLimitBytes = function getNitroFileUploadLimitBytes(arg0) {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  obj = { location: obj.location };
  let _location = obj.location;
  if (_location == null) {
    _location = NitroFileUploadRollout;
  }
  return closure_3.getConfig({ location: _location }).enabled ? framebus : React;
};
export const getNitroFileUploadRolloutConfig = function getNitroFileUploadRolloutConfig(arg0) {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let _location = obj.location;
  if (_location == null) {
    _location = NitroFileUploadRollout;
  }
  return closure_3.getConfig({ location: _location });
};
export const getNitroFileUploadRolloutCopy = function getNitroFileUploadRolloutCopy(legacyCopy) {
  let rolloutCopy = legacyCopy.legacyCopy;
  let _location = {}.location;
  if (_location == null) {
    _location = NitroFileUploadRollout;
  }
  if (closure_3.getConfig({ location: _location }).enabled) {
    rolloutCopy = legacyCopy.rolloutCopy;
  }
  return rolloutCopy;
};
export const useNitroFileUploadRolloutEnabled = function useNitroFileUploadRolloutEnabled(MainViewTooltipActionSheets) {
  let _location = MainViewTooltipActionSheets;
  if (MainViewTooltipActionSheets == null) {
    _location = NitroFileUploadRollout;
  }
  return closure_3.useConfig({ location: _location }).enabled;
};
export const getNonNitroFileUploadMarketingConfig = function getNonNitroFileUploadMarketingConfig(location) {
  return closure_4.getConfig({ location: location.location });
};
export const useNonNitroFileUploadMarketingEnabled = function useNonNitroFileUploadMarketingEnabled(location) {
  return closure_4.useConfig({ location }).enabled;
};
