// discord_app/modules/user_profile/experiments/BioMaxLengthExperiment.tsx
import Constants from "../../../Constants.tsx";
import ApexExperiment from "../../experiments/apex/index.tsx";
import size from "../../../../_runtime/metro/00002__.js";

({ BIO_MAX_LENGTH, BIO_MAX_LENGTH_INCREASED } = Constants);
const obj = {
  name: "2026-08-user-bio-max-length",
  kind: "user",
  defaultConfig: { maxLength: BIO_MAX_LENGTH },
  variations: { 0: { maxLength: BIO_MAX_LENGTH }, 1: { maxLength: BIO_MAX_LENGTH_INCREASED } },
};
let closure_0 = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/user_profile/experiments/BioMaxLengthExperiment.tsx");

export function useBioMaxLength(location) {
  return closure_0.useConfig({ location: location.location }).maxLength;
}
export function getBioMaxLength(location) {
  return closure_0.getConfig({ location: location.location }).maxLength;
}
