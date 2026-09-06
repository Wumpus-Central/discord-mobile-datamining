// discord_app/modules/gateway/GatewayAltEndpointExperiment.tsx
import GatewayAltEndpointCache from "GatewayAltEndpointCache.tsx";
import ApexExperiment from "../experiments/apex/index.tsx";
import size from "../../../_runtime/metro/00002__.js";

let obj = { name: "2026-07-aws-gateway", kind: "user", defaultConfig: { enableAltGateway: false }, variations: null };
obj = { 1: null, 2: { enableAltGateway: false } };
obj[2] = { enableAltGateway: true };
obj.variations = obj;
let closure_0 = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/gateway/GatewayAltEndpointExperiment.tsx");

export const USE_ALT_GATEWAY_KEY = GatewayAltEndpointCache.USE_ALT_GATEWAY_KEY;
export const useShouldUseAltGateway = function useShouldUseAltGateway(App) {
  return closure_0.useConfig({ location: App }).enableAltGateway;
};
