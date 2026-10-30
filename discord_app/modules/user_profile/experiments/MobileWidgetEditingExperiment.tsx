// === Module 16406: MobileWidgetEditingExperiment ===

// Module 16406 (MobileWidgetEditingExperiment)
import ApexExperiment from "ApexExperiment" /* 1448 */;
import size from "module_2" /* 2 */;

const obj = { name: "2026-10-mobile-widget-editing", kind: "user", defaultConfig: { enabled: false }, variations: null };
const obj2 = { 1: null };
obj2[1] = { enabled: true };
obj.variations = obj2;
let closure_0 = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/user_profile/experiments/MobileWidgetEditingExperiment.tsx");

export function useIsMobileWidgetEditingEnabled(ProfileCustomizationSettingScreen) {
  return closure_0.useConfig({ location: ProfileCustomizationSettingScreen }).enabled;
}