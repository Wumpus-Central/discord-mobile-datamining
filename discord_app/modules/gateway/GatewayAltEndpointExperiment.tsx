// discord_app/modules/gateway/GatewayAltEndpointExperiment.tsx
import set from "../../../_runtime/00002_set.js";
import USE_ALT_GATEWAY_KEY from "GatewayAltEndpointCache.tsx";
import ApexExperiment from "../experiments/apex/index.tsx";

const obj = { 1: null, 2: { enableAltGateway: false } };
obj[2] = { enableAltGateway: true };
let closure_0 = ApexExperiment.createApexExperiment({ name: "2026-07-aws-gateway", kind: "user", defaultConfig: { enableAltGateway: false }, variations: obj });
const result = set.fileFinishedImporting("modules/gateway/GatewayAltEndpointExperiment.tsx");

export const USE_ALT_GATEWAY_KEY = USE_ALT_GATEWAY_KEY.USE_ALT_GATEWAY_KEY;
export const useShouldUseAltGateway = function useShouldUseAltGateway(App) {
  return closure_0.useConfig({ location: App }).enableAltGateway;
};