// === Module 13479: PrivateChannelHidingExperiment ===

// Module 13479 (PrivateChannelHidingExperiment)
import react from "react" /* 576 */;
import PrivateChannelHidingExperimentCache from "PrivateChannelHidingExperimentCache" /* 13480 */;
import ApexExperiment from "ApexExperiment" /* 1440 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let obj2;
let obj = { name: "2026-02-private-channel-hiding", kind: "user", defaultConfig: { enableObfuscation: false, enableIntegrityCheck: false }, variations: obj2 };
obj2 = { 1: null, 2: { enableObfuscation: true, enableIntegrityCheck: false }, 3: { enableObfuscation: true, enableIntegrityCheck: true } };
obj2[3] = { enableObfuscation: false, enableIntegrityCheck: false };
let closure_2 = ApexExperiment.createApexExperiment(obj);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((location) => {
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
  return closure_2.useConfig(tmp2).enableObfuscation;
}) : ((location) => {
  const obj = { location };
  return closure_2.useConfig(obj).enableObfuscation;
});
const result = size.fileFinishedImporting("modules/gateway/PrivateChannelHidingExperiment.tsx");

export const getCachedPrivateChannelObfuscation = PrivateChannelHidingExperimentCache.getCachedPrivateChannelObfuscation;
export const PRIVATE_CHANNEL_OBFUSCATION_KEY = PrivateChannelHidingExperimentCache.PRIVATE_CHANNEL_OBFUSCATION_KEY;
export const isChannelMetadataObfuscationEnabled = function isChannelMetadataObfuscationEnabled(dependencyMap) {
  const obj = { location: dependencyMap };
  return closure_2.getConfig(obj).enableObfuscation;
};
export const useIsChannelMetadataObfuscationEnabled = tmp2;
export const isChannelMetadataIntegrityCheckEnabled = function isChannelMetadataIntegrityCheckEnabled(scheduleIntegrityCheck) {
  const obj = { location: scheduleIntegrityCheck };
  return closure_2.getConfig(obj).enableIntegrityCheck;
};