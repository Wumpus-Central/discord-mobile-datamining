// discord_app/modules/premium/experiments/NitroFileUploadExperiments.tsx
import PremiumConstants from "../PremiumConstants.tsx";
import ApexExperiment_mod from "../../experiments/apex/index.tsx";
import size from "../../../../_runtime/metro/00002__.js";

({ MAX_PREMIUM_TIER_2_ATTACHMENT_SIZE: closure_0, MAX_PREMIUM_TIER_2_ATTACHMENT_SIZE_1GB: closure_1 } =
  PremiumConstants);
const NitroFileUploadRollout = "NitroFileUploadRollout";
let ApexExperiment = ApexExperiment_mod;
let obj = {
  name: "2026-09-nitro-file-upload-rollout",
  kind: "user",
  defaultConfig: { enabled: false },
  variations: null,
};
let obj2 = { 1: null };
obj2[1] = { enabled: true };
obj.variations = obj2;
let closure_3 = ApexExperiment.createApexExperiment(obj);
let ApexExperiment = ApexExperiment_mod;
let closure_4 = ApexExperiment.createApexExperiment({
  name: "2026-09-non-nitro-file-upload-marketing",
  kind: "user",
  defaultConfig: { enabled: false },
  variations: { 0: { enabled: false }, 1: { enabled: true } },
});
const result = size.fileFinishedImporting("modules/premium/experiments/NitroFileUploadExperiments.tsx");

export function getNitroFileUploadLimitBytes(arg0) {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const obj2 = { location: obj.location, autoTrackExposure: obj.autoTrackExposure };
  let _location = obj2.location;
  if (_location == null) {
    _location = NitroFileUploadRollout;
  }
  return closure_3.getConfig({ location: _location }, { autoTrackExposure: obj2.autoTrackExposure }).enabled
    ? framebus
    : React;
}
export function getNitroFileUploadRolloutConfig(arg0) {
  let autoTrackExposure = arg0;
  if (arg0 === undefined) {
    autoTrackExposure = {};
  }
  let _location = autoTrackExposure.location;
  if (_location == null) {
    _location = NitroFileUploadRollout;
  }
  return closure_3.getConfig({ location: _location }, { autoTrackExposure: autoTrackExposure.autoTrackExposure });
}
export function getNitroFileUploadRolloutCopy(legacyCopy) {
  let rolloutCopy = legacyCopy.legacyCopy;
  const autoTrackExposure = {};
  let _location = autoTrackExposure.location;
  if (_location == null) {
    _location = NitroFileUploadRollout;
  }
  if (
    closure_3.getConfig({ location: _location }, { autoTrackExposure: autoTrackExposure.autoTrackExposure }).enabled
  ) {
    rolloutCopy = legacyCopy.rolloutCopy;
  }
  return rolloutCopy;
}
export function useNitroFileUploadRolloutEnabled(MainViewTooltipActionSheets) {
  let _location = MainViewTooltipActionSheets;
  if (MainViewTooltipActionSheets == null) {
    _location = NitroFileUploadRollout;
  }
  return closure_3.useConfig({ location: _location }).enabled;
}
export function useNonNitroFileUploadMarketingEnabled(location) {
  return closure_4.useConfig({ location }).enabled;
}
