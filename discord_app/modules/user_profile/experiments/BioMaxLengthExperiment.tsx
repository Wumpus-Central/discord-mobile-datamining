// discord_app/modules/user_profile/experiments/BioMaxLengthExperiment.tsx
import c from "../../../../_runtime/00576_c.js";
import Constants from "../../../Constants.tsx";
import ApexExperiment from "../../experiments/apex/index.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

({ BIO_MAX_LENGTH, BIO_MAX_LENGTH_INCREASED } = Constants);
const obj = {
  name: "2026-08-user-bio-max-length",
  kind: "user",
  defaultConfig: { maxLength: BIO_MAX_LENGTH },
  variations: { 0: { maxLength: BIO_MAX_LENGTH }, 1: { maxLength: BIO_MAX_LENGTH_INCREASED } },
};
let closure_2 = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/user_profile/experiments/BioMaxLengthExperiment.tsx");

export const useBioMaxLength = ReactCompilerGating.isReactCompilerEnabled()
  ? (location) => {
      const cResult = c.c(2);
      const _location = location.location;
      if (cResult[0] !== _location) {
        const obj2 = { location: _location };
        cResult[0] = _location;
        cResult[1] = obj2;
        let tmp2 = obj2;
      } else {
        tmp2 = cResult[1];
      }
      return closure_2.useConfig(tmp2).maxLength;
    }
  : (location) => closure_2.useConfig({ location: location.location }).maxLength;
export const getBioMaxLength = function getBioMaxLength(location) {
  return closure_2.getConfig({ location: location.location }).maxLength;
};
