// === Module 13547: getCachedPrivateChannelObfuscation ===

// Module 13547 (getCachedPrivateChannelObfuscation)
import set from "set" /* 2 */;
import PRIVATE_CHANNEL_OBFUSCATION_KEY from "PRIVATE_CHANNEL_OBFUSCATION_KEY" /* 13548 */;
import ApexExperiment from "ApexExperiment" /* 1467 */;

const obj = { 1: null, 2: { enableObfuscation: true, enableIntegrityCheck: false }, 3: { enableObfuscation: true, enableIntegrityCheck: true } };
obj[3] = { enableObfuscation: false, enableIntegrityCheck: false };
let closure_0 = ApexExperiment.createApexExperiment({ name: "2026-02-private-channel-hiding", kind: "user", defaultConfig: { enableObfuscation: false, enableIntegrityCheck: false }, variations: obj });
const result = set.fileFinishedImporting("modules/gateway/PrivateChannelHidingExperiment.tsx");

export const getCachedPrivateChannelObfuscation = PRIVATE_CHANNEL_OBFUSCATION_KEY.getCachedPrivateChannelObfuscation;
export const PRIVATE_CHANNEL_OBFUSCATION_KEY = PRIVATE_CHANNEL_OBFUSCATION_KEY.PRIVATE_CHANNEL_OBFUSCATION_KEY;
export const isChannelMetadataObfuscationEnabled = function isChannelMetadataObfuscationEnabled(GatewaySocket) {
  return store.getConfig({ location: GatewaySocket }).enableObfuscation;
};
export const useIsChannelMetadataObfuscationEnabled = function useIsChannelMetadataObfuscationEnabled(App) {
  return store.useConfig({ location: App }).enableObfuscation;
};
export const isChannelMetadataIntegrityCheckEnabled = function isChannelMetadataIntegrityCheckEnabled(scheduleIntegrityCheck) {
  return store.getConfig({ location: scheduleIntegrityCheck }).enableIntegrityCheck;
};