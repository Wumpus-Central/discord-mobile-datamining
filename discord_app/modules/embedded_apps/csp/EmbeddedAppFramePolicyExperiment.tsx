// discord_app/modules/embedded_apps/csp/EmbeddedAppFramePolicyExperiment.tsx
import ApexExperiment from "../../experiments/apex/index.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const obj = {
  name: "2026-10-embedded-app-frame-policy",
  kind: "user",
  defaultConfig: { enabled: false },
  variations: null,
};
const obj2 = { 1: null };
obj2[1] = { enabled: true };
obj.variations = obj2;
let closure_0 = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/embedded_apps/csp/EmbeddedAppFramePolicyExperiment.tsx");

export const EMBEDDED_APP_FRAME_POLICY_EXPERIMENT = "2026-10-embedded-app-frame-policy";
export function useIsEmbeddedAppFramePolicyEnabled(useEmbeddedAppCSP) {
  return closure_0.useConfig({ location: useEmbeddedAppCSP }).enabled;
}
export function getIsEmbeddedAppFramePolicyEnabled(loadEmbeddedAppCSPForLaunch) {
  return closure_0.getConfig({ location: loadEmbeddedAppCSPForLaunch }).enabled;
}
