// discord_app/modules/gateway/PrivateChannelHidingExperiment.tsx
import c from "../../../_runtime/00576_c.js";
import PrivateChannelHidingExperimentCache from "PrivateChannelHidingExperimentCache.tsx";
import ApexExperiment from "../experiments/apex/index.tsx";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const obj = {
  name: "2026-02-private-channel-hiding",
  kind: "user",
  defaultConfig: { enableObfuscation: false, enableIntegrityCheck: false },
  variations: null,
};
let obj2 = {
  1: null,
  2: { enableObfuscation: true, enableIntegrityCheck: false },
  3: { enableObfuscation: true, enableIntegrityCheck: true },
};
obj2[3] = { enableObfuscation: false, enableIntegrityCheck: false };
obj.variations = obj2;
let closure_2 = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/gateway/PrivateChannelHidingExperiment.tsx");

export const getCachedPrivateChannelObfuscation =
  PrivateChannelHidingExperimentCache.getCachedPrivateChannelObfuscation;
export const PRIVATE_CHANNEL_OBFUSCATION_KEY = PrivateChannelHidingExperimentCache.PRIVATE_CHANNEL_OBFUSCATION_KEY;
export const isChannelMetadataObfuscationEnabled = function isChannelMetadataObfuscationEnabled(dependencyMap) {
  return closure_2.getConfig({ location: dependencyMap }).enableObfuscation;
};
export const useIsChannelMetadataObfuscationEnabled = ReactCompilerGating.isReactCompilerEnabled()
  ? function useIsChannelMetadataObfuscationEnabled(location) {
      const cResult = c.c(2);
      if (cResult[0] !== location) {
        const obj2 = { location };
        cResult[0] = location;
        cResult[1] = obj2;
        let tmp2 = obj2;
      } else {
        tmp2 = cResult[1];
      }
      return closure_2.useConfig(tmp2).enableObfuscation;
    }
  : function useIsChannelMetadataObfuscationEnabled(location) {
      return closure_2.useConfig({ location }).enableObfuscation;
    };
export const isChannelMetadataIntegrityCheckEnabled = function isChannelMetadataIntegrityCheckEnabled(
  scheduleIntegrityCheck,
) {
  return closure_2.getConfig({ location: scheduleIntegrityCheck }).enableIntegrityCheck;
};
