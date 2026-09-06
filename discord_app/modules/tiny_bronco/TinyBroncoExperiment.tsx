// === Module 14684: useIsTinyBroncoEnabled ===

// Module 14684 (useIsTinyBroncoEnabled)
import set from "set" /* 2 */;
import TINY_BRONCO_DEV_ONLY from "TINY_BRONCO_DEV_ONLY" /* 14685 */;
import ApexExperiment from "ApexExperiment" /* 1433 */;

let closure_2 = ApexExperiment.createApexExperiment({ name: "2026-08-tiny-bronco", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
const result = set.fileFinishedImporting("modules/tiny_bronco/TinyBroncoExperiment.tsx");

export const useIsTinyBroncoEnabled = function useIsTinyBroncoEnabled(closure_2) {
  let enabled = TINY_BRONCO_DEV_ONLY.TINY_BRONCO_DEV_ONLY;
  if (enabled) {
    const obj = { location: null };
    obj[0] = closure_2;
    enabled = closure_2.useConfig(obj).enabled;
  }
  return enabled;
};
export const isTinyBroncoEnabled = function isTinyBroncoEnabled(closure_5) {
  let enabled = TINY_BRONCO_DEV_ONLY.TINY_BRONCO_DEV_ONLY;
  if (enabled) {
    const obj = { location: null };
    obj[0] = closure_5;
    enabled = closure_2.getConfig(obj).enabled;
  }
  return enabled;
};
export const useShouldShowTinyBroncoDismissibleContent = function useShouldShowTinyBroncoDismissibleContent(arg0) {
  let enabled = TINY_BRONCO_DEV_ONLY.TINY_BRONCO_DEV_ONLY;
  if (enabled) {
    const obj = { location: null };
    obj[0] = arg0;
    enabled = closure_2.useConfig(obj).enabled;
  }
  if (enabled) {
    enabled = !tmpResult.useIsVerifiedAdult();
  }
  return enabled;
};