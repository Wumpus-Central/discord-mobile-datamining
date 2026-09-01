// discord_app/modules/age_assurance/ShowExpressiveModalSubtitleAltFlag.tsx
import set from "../../../_runtime/00002_set.js";
import ApexExperiment from "../experiments/apex/index.tsx";

const obj = { 1: null };
obj[1] = { enabled: true };
let closure_0 = ApexExperiment.createApexExperiment({
  kind: "user",
  name: "2026-08-show-expressive-modal-subtitle-alt",
  defaultConfig: { enabled: false },
  variations: obj,
});
const result = set.fileFinishedImporting("modules/age_assurance/ShowExpressiveModalSubtitleAltFlag.tsx");

export const useShouldShowExpressiveModalSubtitleAlt = function useShouldShowExpressiveModalSubtitleAlt(
  age_verification_expressive_v2_modal,
) {
  return closure_0.useConfig({ location: age_verification_expressive_v2_modal }).enabled;
};
export const shouldShowExpressiveModalSubtitleAlt = function shouldShowExpressiveModalSubtitleAlt(location) {
  return closure_0.getConfig({ location }).enabled;
};
