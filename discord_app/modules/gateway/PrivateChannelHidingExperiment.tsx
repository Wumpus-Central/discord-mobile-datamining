// discord_app/modules/gateway/PrivateChannelHidingExperiment.tsx
import PrivateChannelHidingExperimentCache from "PrivateChannelHidingExperimentCache.tsx";
import ApexExperiment from "../experiments/apex/index.tsx";
import size from "../../../_runtime/metro/00002__.js";

let obj = {
  name: "2026-02-private-channel-hiding",
  kind: "user",
  defaultConfig: { enableObfuscation: false, enableIntegrityCheck: false },
  variations: null,
};
obj = {
  1: null,
  2: { enableObfuscation: true, enableIntegrityCheck: false },
  3: { enableObfuscation: true, enableIntegrityCheck: true },
};
obj[3] = { enableObfuscation: false, enableIntegrityCheck: false };
obj.variations = obj;
let closure_0 = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/gateway/PrivateChannelHidingExperiment.tsx");

export const getCachedPrivateChannelObfuscation =
  PrivateChannelHidingExperimentCache.getCachedPrivateChannelObfuscation;
export const PRIVATE_CHANNEL_OBFUSCATION_KEY = PrivateChannelHidingExperimentCache.PRIVATE_CHANNEL_OBFUSCATION_KEY;
export const isChannelMetadataObfuscationEnabled = function isChannelMetadataObfuscationEnabled(GatewaySocket) {
  return closure_0.getConfig({ location: GatewaySocket }).enableObfuscation;
};
export const useIsChannelMetadataObfuscationEnabled = function useIsChannelMetadataObfuscationEnabled(App) {
  return closure_0.useConfig({ location: App }).enableObfuscation;
};
export const isChannelMetadataIntegrityCheckEnabled = function isChannelMetadataIntegrityCheckEnabled(
  scheduleIntegrityCheck,
) {
  return closure_0.getConfig({ location: scheduleIntegrityCheck }).enableIntegrityCheck;
};
