// === Module 8158: GoogleWalletExperiment ===

// Module 8158 (GoogleWalletExperiment)
import ApexExperiment from "ApexExperiment" /* 1448 */;
import size from "module_2" /* 2 */;

const obj = { kind: "user", name: "2026-03-age-verification-google-wallet", defaultConfig: { enabled: false }, variations: null };
const obj2 = { 1: null };
obj2[1] = { enabled: true };
obj.variations = obj2;
let closure_0 = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/age_assurance/GoogleWalletExperiment.tsx");

export function useIsGoogleWalletEnabled(location) {
  return closure_0.useConfig({ location }).enabled;
}
export function isGoogleWalletEnabled(age_verification_methods) {
  return closure_0.getConfig({ location: age_verification_methods }).enabled;
}