// === Module 8392: BioMaxLengthExperiment ===

// Module 8392 (BioMaxLengthExperiment)
import Constants from "Constants" /* 1074 */;
import ApexExperiment from "ApexExperiment" /* 1434 */;
import size from "module_2" /* 2 */;

({ BIO_MAX_LENGTH, BIO_MAX_LENGTH_INCREASED } = Constants);
const obj = { name: "2026-08-user-bio-max-length", kind: "user", defaultConfig: { maxLength: BIO_MAX_LENGTH }, variations: { 0: { maxLength: BIO_MAX_LENGTH }, 1: { maxLength: BIO_MAX_LENGTH_INCREASED } } };
let closure_0 = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/user_profile/experiments/BioMaxLengthExperiment.tsx");

export const useBioMaxLength = function useBioMaxLength(location) {
  return closure_0.useConfig({ location: location.location }).maxLength;
};
export const getBioMaxLength = function getBioMaxLength(location) {
  return closure_0.getConfig({ location: location.location }).maxLength;
};