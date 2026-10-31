// === Module 15558: PrivateChannelHidingExperiment ===

// Module 15558 (PrivateChannelHidingExperiment)
import PrivateChannelHidingExperimentCache from "PrivateChannelHidingExperimentCache" /* 15559 */;
import ApexExperiment from "ApexExperiment" /* 1447 */;
import size from "module_2" /* 2 */;

const obj = { name: "2026-02-private-channel-hiding", kind: "user", defaultConfig: { enableObfuscation: false, enableIntegrityCheck: false }, variations: null };
const obj2 = { 1: null, 2: { enableObfuscation: true, enableIntegrityCheck: false }, 3: { enableObfuscation: true, enableIntegrityCheck: true } };
obj2[3] = { enableObfuscation: false, enableIntegrityCheck: false };
obj.variations = obj2;
let closure_0 = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/gateway/PrivateChannelHidingExperiment.tsx");

export const getCachedPrivateChannelObfuscation = PrivateChannelHidingExperimentCache.getCachedPrivateChannelObfuscation;
export const PRIVATE_CHANNEL_OBFUSCATION_KEY = PrivateChannelHidingExperimentCache.PRIVATE_CHANNEL_OBFUSCATION_KEY;
export function isChannelMetadataObfuscationEnabled(GatewaySocket) {
  return closure_0.getConfig({ location: GatewaySocket }).enableObfuscation;
}
export function useIsChannelMetadataObfuscationEnabled(App) {
  return closure_0.useConfig({ location: App }).enableObfuscation;
}
export function isChannelMetadataIntegrityCheckEnabled(scheduleIntegrityCheck) {
  return closure_0.getConfig({ location: scheduleIntegrityCheck }).enableIntegrityCheck;
}