// === Module 10731: EmbeddedAppFramePolicyExperiment ===

// Module 10731 (EmbeddedAppFramePolicyExperiment)
import c from "c" /* 576 */;
import ApexExperiment from "ApexExperiment" /* 1455 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const obj = { name: "2026-10-embedded-app-frame-policy", kind: "user", defaultConfig: { enabled: false }, variations: null };
let obj2 = { 1: null };
obj2[1] = { enabled: true };
obj.variations = obj2;
let closure_2 = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/embedded_apps/csp/EmbeddedAppFramePolicyExperiment.tsx");

export const EMBEDDED_APP_FRAME_POLICY_EXPERIMENT = "2026-10-embedded-app-frame-policy";
export const useIsEmbeddedAppFramePolicyEnabled = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsEmbeddedAppFramePolicyEnabled(location) {
  const cResult = c.c(2);
  if (cResult[0] !== location) {
    const obj2 = { location };
    cResult[0] = location;
    cResult[1] = obj2;
    let tmp2 = obj2;
  } else {
    tmp2 = cResult[1];
  }
  return closure_2.useConfig(tmp2).enabled;
}) : (function useIsEmbeddedAppFramePolicyEnabled(location) {
  return closure_2.useConfig({ location }).enabled;
});
export const getIsEmbeddedAppFramePolicyEnabled = function getIsEmbeddedAppFramePolicyEnabled(loadEmbeddedAppCSPForLaunch) {
  return closure_2.getConfig({ location: loadEmbeddedAppCSPForLaunch }).enabled;
};