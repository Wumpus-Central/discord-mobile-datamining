// discord_app/modules/gateway/GatewayAltEndpointExperiment.tsx
import c from "../../../_runtime/00576_c.js";
import GatewayAltEndpointCache from "GatewayAltEndpointCache.tsx";
import ApexExperiment from "../experiments/apex/index.tsx";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const obj = { name: "2026-07-aws-gateway", kind: "user", defaultConfig: { enableAltGateway: false }, variations: null };
let obj2 = { 1: null, 2: { enableAltGateway: false } };
obj2[2] = { enableAltGateway: true };
obj.variations = obj2;
let closure_2 = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/gateway/GatewayAltEndpointExperiment.tsx");

export const USE_ALT_GATEWAY_KEY = GatewayAltEndpointCache.USE_ALT_GATEWAY_KEY;
export const useShouldUseAltGateway = ReactCompilerGating.isReactCompilerEnabled()
  ? (location) => {
      const cResult = c.c(2);
      if (cResult[0] !== location) {
        const obj2 = { location };
        cResult[0] = location;
        cResult[1] = obj2;
        let tmp2 = obj2;
      } else {
        tmp2 = cResult[1];
      }
      return closure_2.useConfig(tmp2).enableAltGateway;
    }
  : (location) => closure_2.useConfig({ location }).enableAltGateway;
