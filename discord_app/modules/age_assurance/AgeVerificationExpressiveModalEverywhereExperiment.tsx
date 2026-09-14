// discord_app/modules/age_assurance/AgeVerificationExpressiveModalEverywhereExperiment.tsx
import ApexExperiment from "../experiments/apex/index.tsx";
import size from "../../../_runtime/metro/00002__.js";

const obj = {
  kind: "user",
  name: "2025-11-age-verification-expressive-everywhere",
  defaultConfig: { enabled: false },
  variations: null,
};
const obj2 = { 1: null };
obj2[1] = { enabled: true };
obj.variations = obj2;
let closure_0 = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting(
  "modules/age_assurance/AgeVerificationExpressiveModalEverywhereExperiment.tsx",
);

export const useIsAgeVerificationExpressiveModalEverywhereEnabled =
  function useIsAgeVerificationExpressiveModalEverywhereEnabled(location) {
    return closure_0.useConfig({ location }).enabled;
  };
export const isAgeVerificationExpressiveModalEverywhereEnabled =
  function isAgeVerificationExpressiveModalEverywhereEnabled(entryPoint) {
    return closure_0.getConfig({ location: entryPoint }).enabled;
  };
