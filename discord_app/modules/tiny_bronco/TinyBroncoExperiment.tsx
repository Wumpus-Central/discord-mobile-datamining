// discord_app/modules/tiny_bronco/TinyBroncoExperiment.tsx
import TinyBroncoGate from "TinyBroncoGate.tsx";
import ApexExperiment from "../experiments/apex/index.tsx";
import size from "../../../_runtime/metro/00002__.js";

let closure_2 = ApexExperiment.createApexExperiment({
  name: "2026-08-tiny-bronco",
  kind: "user",
  defaultConfig: { enabled: false },
  variations: { 0: { enabled: false }, 1: { enabled: true } },
});
const result = size.fileFinishedImporting("modules/tiny_bronco/TinyBroncoExperiment.tsx");

export const useIsTinyBroncoEnabled = function useIsTinyBroncoEnabled(location) {
  let enabled = TinyBroncoGate.TINY_BRONCO_DEV_ONLY;
  if (enabled) {
    const obj = { location };
    enabled = closure_2.useConfig(obj).enabled;
  }
  return enabled;
};
export const isTinyBroncoEnabled = function isTinyBroncoEnabled(stateFromStores) {
  let enabled = TinyBroncoGate.TINY_BRONCO_DEV_ONLY;
  if (enabled) {
    const obj = { location: stateFromStores };
    enabled = closure_2.getConfig(obj).enabled;
  }
  return enabled;
};
export const useShouldShowTinyBroncoDismissibleContent = function useShouldShowTinyBroncoDismissibleContent(location) {
  let enabled = TinyBroncoGate.TINY_BRONCO_DEV_ONLY;
  if (enabled) {
    const obj = { location };
    enabled = closure_2.useConfig(obj).enabled;
  }
  if (enabled) {
    enabled = !tmpResult.useIsVerifiedAdult();
  }
  return enabled;
};
