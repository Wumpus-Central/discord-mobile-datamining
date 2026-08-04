// discord_app/modules/gateway/GatewayAltEndpointExperiment.tsx
import ApexExperiment from "ApexExperiment";

const obj = { 1: null, 2: { enableAltGateway: false } };
obj[2] = { enableAltGateway: true };
let closure_0 = ApexExperiment.createApexExperiment({ name: "2026-07-aws-gateway", kind: "user", defaultConfig: { enableAltGateway: false }, variations: obj });
const result = require("USE_ALT_GATEWAY_KEY").fileFinishedImporting("modules/gateway/GatewayAltEndpointExperiment.tsx");

export const USE_ALT_GATEWAY_KEY = require("USE_ALT_GATEWAY_KEY").USE_ALT_GATEWAY_KEY;
export const useShouldUseAltGateway = function useShouldUseAltGateway(App) {
  return closure_0.useConfig({ location: App }).enableAltGateway;
};