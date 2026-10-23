// === Module 11448: EmbeddedAppShimExperiment ===

// Module 11448 (EmbeddedAppShimExperiment)
import ApexExperiment from "ApexExperiment" /* 1455 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const obj = { name: "2026-10-embedded-app-shim-v2", kind: "user", defaultConfig: { enabled: false }, variations: null };
const obj2 = { 1: null };
obj2[1] = { enabled: true };
obj.variations = obj2;
let closure_0 = ApexExperiment.createApexExperiment(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const result1 = size.fileFinishedImporting("modules/activities/experiments/EmbeddedAppShimExperiment.tsx");

export const EMBEDDED_APP_SHIM_EXPERIMENT = "2026-10-embedded-app-shim-v2";
export const useEmbeddedAppShimVersion = function useEmbeddedAppShimVersion(BaseEmbeddedAppWebView) {
  let num = 1;
  if (closure_0.useConfig(obj).enabled) {
    num = 2;
  }
  return num;
};
export const getEmbeddedAppShimVersion = function getEmbeddedAppShimVersion(location) {
  let num = 1;
  if (closure_0.getConfig(obj).enabled) {
    num = 2;
  }
  return num;
};