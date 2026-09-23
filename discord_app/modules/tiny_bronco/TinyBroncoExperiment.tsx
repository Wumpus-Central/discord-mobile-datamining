// discord_app/modules/tiny_bronco/TinyBroncoExperiment.tsx
import ApexExperiment from "../experiments/apex/index.tsx";
import size from "../../../_runtime/metro/00002__.js";

let closure_0 = ApexExperiment.createApexExperiment({
  name: "2026-08-tiny-bronco",
  kind: "user",
  defaultConfig: { enabled: false },
  variations: { 0: { enabled: false }, 1: { enabled: true } },
});
const result = size.fileFinishedImporting("modules/tiny_bronco/TinyBroncoExperiment.tsx");

export const useIsTinyBroncoEnabled = function useIsTinyBroncoEnabled(location) {
  return closure_0.useConfig({ location }).enabled;
};
export const isTinyBroncoEnabled = function isTinyBroncoEnabled(location) {
  return closure_0.getConfig({ location }).enabled;
};
