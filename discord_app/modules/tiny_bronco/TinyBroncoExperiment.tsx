// === Module 6732: TinyBroncoExperiment ===

// Module 6732 (TinyBroncoExperiment)
import ApexExperiment from "ApexExperiment" /* 1448 */;
import size from "module_2" /* 2 */;

let closure_0 = ApexExperiment.createApexExperiment({ name: "2026-08-tiny-bronco", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
const result = size.fileFinishedImporting("modules/tiny_bronco/TinyBroncoExperiment.tsx");

export function useIsTinyBroncoEnabled(location) {
  return closure_0.useConfig({ location }).enabled;
}
export function isTinyBroncoEnabled(location) {
  return closure_0.getConfig({ location }).enabled;
}