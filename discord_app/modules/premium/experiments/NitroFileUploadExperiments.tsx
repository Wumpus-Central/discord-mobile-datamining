// === Module 7244: NitroFileUploadExperiments ===

// Module 7244 (NitroFileUploadExperiments)
import react from "react" /* 576 */;
import PremiumConstants from "PremiumConstants" /* 1379 */;
import ApexExperiment_mod from "ApexExperiment" /* 1440 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c2;
let c3;
let obj2;
({ MAX_PREMIUM_TIER_2_ATTACHMENT_SIZE: c2, MAX_PREMIUM_TIER_2_ATTACHMENT_SIZE_1GB: c3 } = PremiumConstants);
const NitroFileUploadRollout = "NitroFileUploadRollout";
let ApexExperiment = ApexExperiment_mod;
let obj = { name: "2026-09-nitro-file-upload-rollout", kind: "user", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enabled: true };
let closure_5 = ApexExperiment.createApexExperiment(obj);
ApexExperiment = ApexExperiment_mod;
const obj3 = { name: "2026-09-non-nitro-file-upload-marketing", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } };
let closure_6 = ApexExperiment.createApexExperiment(obj3);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let tmp3;
  let tmp = arg0;
  const obj = react;
  const cResult = obj.c(2);
  if (arg0 == null) {
    tmp = NitroFileUploadRollout;
  }
  if (cResult[0] !== tmp) {
    const obj2 = { location: tmp };
    cResult[0] = tmp;
    cResult[1] = obj2;
    tmp3 = obj2;
  } else {
    tmp3 = cResult[1];
  }
  return closure_5.useConfig(tmp3).enabled;
}) : ((arg0) => {
  let _location = arg0;
  const useConfig = closure_5.useConfig;
  if (arg0 == null) {
    _location = NitroFileUploadRollout;
  }
  return useConfig({ location: _location }).enabled;
});
ReactCompilerGating = ReactCompilerGating_mod;
function getNitroFileUploadRolloutConfig(arg0) {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let _location = obj.location;
  const getConfig = closure_5.getConfig;
  if (_location == null) {
    _location = NitroFileUploadRollout;
  }
  return getConfig({ location: _location });
}
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((location) => {
  let tmp2;
  const obj = react;
  const cResult = obj.c(2);
  if (cResult[0] !== location) {
    const obj2 = { location };
    cResult[0] = location;
    cResult[1] = obj2;
    tmp2 = obj2;
  } else {
    tmp2 = cResult[1];
  }
  return closure_6.useConfig(tmp2).enabled;
}) : ((location) => {
  const obj = { location };
  return closure_6.useConfig(obj).enabled;
});
const result = size.fileFinishedImporting("modules/premium/experiments/NitroFileUploadExperiments.tsx");

export const getNitroFileUploadLimitBytes = function getNitroFileUploadLimitBytes(arg0) {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let _location = { location: obj.location }.location;
  const getConfig = closure_5.getConfig;
  if (_location == null) {
    _location = NitroFileUploadRollout;
  }
  return getConfig({ location: _location }).enabled ? _false : React2;
};
export { getNitroFileUploadRolloutConfig };
export const getNitroFileUploadRolloutCopy = function getNitroFileUploadRolloutCopy(legacyCopy) {
  legacyCopy = legacyCopy.legacyCopy;
  let _location = {}.location;
  const rolloutCopy = legacyCopy.rolloutCopy;
  const getConfig = closure_5.getConfig;
  if (_location == null) {
    _location = NitroFileUploadRollout;
  }
  if (getConfig({ location: _location }).enabled) {
    legacyCopy = rolloutCopy;
  }
  return legacyCopy;
};
export const useNitroFileUploadRolloutEnabled = tmp3;
export const useNonNitroFileUploadMarketingEnabled = tmp4;