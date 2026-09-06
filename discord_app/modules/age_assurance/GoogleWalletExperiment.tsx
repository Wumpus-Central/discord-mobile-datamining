// discord_app/modules/age_assurance/GoogleWalletExperiment.tsx
import ApexExperiment from "../experiments/apex/index.tsx";
import size from "../../../_runtime/metro/00002__.js";

let obj = {
  kind: "user",
  name: "2026-03-age-verification-google-wallet",
  defaultConfig: { enabled: false },
  variations: null,
};
obj = { 1: null };
obj[1] = { enabled: true };
obj.variations = obj;
let closure_0 = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/age_assurance/GoogleWalletExperiment.tsx");

export const useIsGoogleWalletEnabled = function useIsGoogleWalletEnabled(location) {
  return closure_0.useConfig({ location }).enabled;
};
export const isGoogleWalletEnabled = function isGoogleWalletEnabled(age_verification_methods) {
  return closure_0.getConfig({ location: age_verification_methods }).enabled;
};
