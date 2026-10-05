// discord_app/modules/user_profile/experiments/BioMaxLengthExperiment.tsx
import react from "../../../../_runtime/00576_react.js";
import Constants from "../../../Constants.tsx";
import ApexExperiment from "../../experiments/apex/index.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let BIO_MAX_LENGTH;
let BIO_MAX_LENGTH_INCREASED;
let obj2;
({ BIO_MAX_LENGTH, BIO_MAX_LENGTH_INCREASED } = Constants);
let obj = {
  name: "2026-08-user-bio-max-length",
  kind: "user",
  defaultConfig: { maxLength: BIO_MAX_LENGTH },
  variations: obj2,
};
obj2 = { 0: { maxLength: BIO_MAX_LENGTH }, 1: { maxLength: BIO_MAX_LENGTH_INCREASED } };
let closure_2 = ApexExperiment.createApexExperiment(obj);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (location) => {
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
    }
  : (location) => {
      const obj = { location: location.location };
      return closure_2.useConfig(obj).maxLength;
    };
const result = size.fileFinishedImporting("modules/user_profile/experiments/BioMaxLengthExperiment.tsx");

export const useBioMaxLength = tmp3;
export const getBioMaxLength = function getBioMaxLength(location) {
  const obj = { location: location.location };
  return closure_2.getConfig(obj).maxLength;
};
