// === Module 8486: useBioMaxLength ===

// Module 8486 (useBioMaxLength)
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import ApexExperiment from "ApexExperiment" /* 1472 */;

({ BIO_MAX_LENGTH, BIO_MAX_LENGTH_INCREASED } = ME);
let closure_0 = ApexExperiment.createApexExperiment({ name: "2026-08-user-bio-max-length", kind: "user", defaultConfig: { maxLength: BIO_MAX_LENGTH }, variations: { 0: { maxLength: BIO_MAX_LENGTH }, 1: { maxLength: BIO_MAX_LENGTH_INCREASED } } });
const result = set.fileFinishedImporting("modules/user_profile/experiments/BioMaxLengthExperiment.tsx");

export const useBioMaxLength = function useBioMaxLength(location) {
  return closure_0.useConfig({ location: location.location }).maxLength;
};
export const getBioMaxLength = function getBioMaxLength(location) {
  return closure_0.getConfig({ location: location.location }).maxLength;
};