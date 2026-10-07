// discord_app/modules/premium/experiments/NitroFileUploadExperiments.tsx
import c from "../../../../_runtime/00576_c.js";
import PremiumConstants from "../PremiumConstants.tsx";
import ApexExperiment_mod from "../../experiments/apex/index.tsx";
import "ReactCompilerGating";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

({ MAX_PREMIUM_TIER_2_ATTACHMENT_SIZE: c2, MAX_PREMIUM_TIER_2_ATTACHMENT_SIZE_1GB: c3 } = PremiumConstants);
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
let closure_5 = ApexExperiment.createApexExperiment(obj);
let ApexExperiment = ApexExperiment_mod;
let closure_6 = ApexExperiment.createApexExperiment({
  name: "2026-09-non-nitro-file-upload-marketing",
  kind: "user",
  defaultConfig: { enabled: false },
  variations: { 0: { enabled: false }, 1: { enabled: true } },
});
const obj3 = {
  name: "2026-09-non-nitro-file-upload-marketing",
  kind: "user",
  defaultConfig: { enabled: false },
  variations: { 0: { enabled: false }, 1: { enabled: true } },
};
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let tmp = arg0;
      const cResult = c.c(2);
      if (arg0 == null) {
        tmp = NitroFileUploadRollout;
      }
      if (cResult[0] !== tmp) {
        const obj2 = { location: tmp };
        cResult[0] = tmp;
        cResult[1] = obj2;
        let tmp3 = obj2;
      } else {
        tmp3 = cResult[1];
      }
      return closure_5.useConfig(tmp3).enabled;
    }
  : (arg0) => {
      let _location = arg0;
      if (arg0 == null) {
        _location = NitroFileUploadRollout;
      }
      return closure_5.useConfig({ location: _location }).enabled;
    };
function getNitroFileUploadRolloutConfig(arg0) {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let _location = obj.location;
  if (_location == null) {
    _location = NitroFileUploadRollout;
  }
  return closure_5.getConfig({ location: _location });
}
const result = size.fileFinishedImporting("modules/premium/experiments/NitroFileUploadExperiments.tsx");

export const getNitroFileUploadLimitBytes = function getNitroFileUploadLimitBytes(arg0) {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let _location = { location: obj.location }.location;
  if (_location == null) {
    _location = NitroFileUploadRollout;
  }
  return closure_5.getConfig({ location: _location }).enabled ? React3 : React2;
};
export { getNitroFileUploadRolloutConfig };
export const getNitroFileUploadRolloutCopy = function getNitroFileUploadRolloutCopy(legacyCopy) {
  let rolloutCopy = legacyCopy.legacyCopy;
  let _location = {}.location;
  if (_location == null) {
    _location = NitroFileUploadRollout;
  }
  if (closure_5.getConfig({ location: _location }).enabled) {
    rolloutCopy = legacyCopy.rolloutCopy;
  }
  return rolloutCopy;
};
export const useNitroFileUploadRolloutEnabled = tmp3;
export const useNonNitroFileUploadMarketingEnabled = ReactCompilerGating.isReactCompilerEnabled()
  ? (location) => {
      const cResult = c.c(2);
      if (cResult[0] !== location) {
        const obj2 = { location };
        cResult[0] = location;
        cResult[1] = obj2;
        let tmp2 = obj2;
      } else {
        tmp2 = cResult[1];
      }
      return closure_6.useConfig(tmp2).enabled;
    }
  : (location) => closure_6.useConfig({ location }).enabled;
