// discord_app/modules/age_assurance/AgeVerificationExpressiveModalEverywhereExperiment.tsx
import ApexExperiment from "../experiments/apex/index.tsx";
import size from "../../../_runtime/metro/00002__.js";

let obj = {
  kind: "user",
  name: "2025-11-age-verification-expressive-everywhere",
  defaultConfig: { enabled: false },
  variations: null,
};
obj = { 1: null };
obj[1] = { enabled: true };
obj.variations = obj;
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
