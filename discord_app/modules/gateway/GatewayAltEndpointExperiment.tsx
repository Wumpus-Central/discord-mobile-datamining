// === Module 14677: GatewayAltEndpointExperiment ===

// Module 14677 (GatewayAltEndpointExperiment)
import GatewayAltEndpointCache from "GatewayAltEndpointCache" /* 14678 */;
import ApexExperiment from "ApexExperiment" /* 1434 */;
import size from "module_2" /* 2 */;

const obj = { name: "2026-07-aws-gateway", kind: "user", defaultConfig: { enableAltGateway: false }, variations: null };
const obj2 = { 1: null, 2: { enableAltGateway: false } };
obj2[2] = { enableAltGateway: true };
obj.variations = obj2;
let closure_0 = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/gateway/GatewayAltEndpointExperiment.tsx");

export const USE_ALT_GATEWAY_KEY = GatewayAltEndpointCache.USE_ALT_GATEWAY_KEY;
export const useShouldUseAltGateway = function useShouldUseAltGateway(App) {
  return closure_0.useConfig({ location: App }).enableAltGateway;
};