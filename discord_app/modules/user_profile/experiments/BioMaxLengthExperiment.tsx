// === Module 7833: BioMaxLengthExperiment ===

// Module 7833 (BioMaxLengthExperiment)
import react from "react" /* 576 */;
import Constants from "Constants" /* 1085 */;
import ApexExperiment from "ApexExperiment" /* 1440 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let BIO_MAX_LENGTH;
let BIO_MAX_LENGTH_INCREASED;
let obj2;
({ BIO_MAX_LENGTH, BIO_MAX_LENGTH_INCREASED } = Constants);
let obj = { name: "2026-08-user-bio-max-length", kind: "user", defaultConfig: { maxLength: BIO_MAX_LENGTH }, variations: obj2 };
obj2 = { 0: { maxLength: BIO_MAX_LENGTH }, 1: { maxLength: BIO_MAX_LENGTH_INCREASED } };
let closure_2 = ApexExperiment.createApexExperiment(obj);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((location) => {
  let tmp2;
  const obj = react;
  const cResult = obj.c(2);
  const _location = location.location;
  if (cResult[0] !== _location) {
    const obj2 = { location: _location };
    cResult[0] = _location;
    cResult[1] = obj2;
    tmp2 = obj2;
  } else {
    tmp2 = cResult[1];
  }
  return closure_2.useConfig(tmp2).maxLength;
}) : ((location) => {
  const obj = { location: location.location };
  return closure_2.useConfig(obj).maxLength;
});
const result = size.fileFinishedImporting("modules/user_profile/experiments/BioMaxLengthExperiment.tsx");

export const useBioMaxLength = tmp3;
export const getBioMaxLength = function getBioMaxLength(location) {
  const obj = { location: location.location };
  return closure_2.getConfig(obj).maxLength;
};