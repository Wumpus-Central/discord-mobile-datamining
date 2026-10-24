// === Module 15848: MobileWidgetEditingExperiment ===

// Module 15848 (MobileWidgetEditingExperiment)
import c from "c" /* 576 */;
import ApexExperiment from "ApexExperiment" /* 1455 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const obj = { name: "2026-10-mobile-widget-editing", kind: "user", defaultConfig: { enabled: false }, variations: null };
let obj2 = { 1: null };
obj2[1] = { enabled: true };
obj.variations = obj2;
let closure_2 = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/user_profile/experiments/MobileWidgetEditingExperiment.tsx");

export const useIsMobileWidgetEditingEnabled = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsMobileWidgetEditingEnabled(location) {
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
}) : (function useIsMobileWidgetEditingEnabled(location) {
  return closure_2.useConfig({ location }).enabled;
});