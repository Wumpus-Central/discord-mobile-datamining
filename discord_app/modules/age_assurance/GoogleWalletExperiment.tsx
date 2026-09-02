// === Module 8748: useIsGoogleWalletEnabled ===

// Module 8748 (useIsGoogleWalletEnabled)
import set from "set" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1467 */;

const obj = { 1: null };
obj[1] = { enabled: true };
let closure_0 = ApexExperiment.createApexExperiment({ kind: "user", name: "2026-03-age-verification-google-wallet", defaultConfig: { enabled: false }, variations: obj });
const result = set.fileFinishedImporting("modules/age_assurance/GoogleWalletExperiment.tsx");

export const useIsGoogleWalletEnabled = function useIsGoogleWalletEnabled(location) {
  return closure_0.useConfig({ location }).enabled;
};
export const isGoogleWalletEnabled = function isGoogleWalletEnabled(age_verification_methods) {
  return closure_0.getConfig({ location: age_verification_methods }).enabled;
};