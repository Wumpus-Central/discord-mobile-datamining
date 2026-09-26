// === Module 9235: TinyBroncoExperiment ===

// Module 9235 (TinyBroncoExperiment)
import ApexExperiment from "ApexExperiment" /* 1435 */;
import size from "module_2" /* 2 */;

let closure_0 = ApexExperiment.createApexExperiment({ name: "2026-08-tiny-bronco", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
const result = size.fileFinishedImporting("modules/tiny_bronco/TinyBroncoExperiment.tsx");

export const useIsTinyBroncoEnabled = function useIsTinyBroncoEnabled(location) {
  return closure_0.useConfig({ location }).enabled;
};
export const isTinyBroncoEnabled = function isTinyBroncoEnabled(location) {
  return closure_0.getConfig({ location }).enabled;
};