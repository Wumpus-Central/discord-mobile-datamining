// === Module 16367: YouBarActivityStatusExperiment ===

// Module 16367 (YouBarActivityStatusExperiment)
import apex_ApexExperimentDefault from "apex/ApexExperiment" /* 1434 */;

const tmp2 = apex_ApexExperimentDefault({ name: "2026-05-you-bar-activity-status", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
let closure_0 = tmp2;
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/you_bar/YouBarActivityStatusExperiment.tsx");

export const YouBarActivityStatusExperiment = tmp2;
export const useYouBarActivityStatusEnabled = function useYouBarActivityStatusEnabled(YouBar) {
  return closure_0.useConfig({ location: YouBar }).enabled;
};