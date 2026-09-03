// === Module 8732: useShouldShowExpressiveModalSubtitleAlt ===

// Module 8732 (useShouldShowExpressiveModalSubtitleAlt)
import set from "set" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1467 */;

const obj = { 1: null };
obj[1] = { enabled: true };
let closure_0 = ApexExperiment.createApexExperiment({ kind: "user", name: "2026-08-show-expressive-modal-subtitle-alt", defaultConfig: { enabled: false }, variations: obj });
const result = set.fileFinishedImporting("modules/age_assurance/ShowExpressiveModalSubtitleAltFlag.tsx");

export const useShouldShowExpressiveModalSubtitleAlt = function useShouldShowExpressiveModalSubtitleAlt(age_verification_expressive_v2_modal) {
  return closure_0.useConfig({ location: age_verification_expressive_v2_modal }).enabled;
};
export const shouldShowExpressiveModalSubtitleAlt = function shouldShowExpressiveModalSubtitleAlt(location) {
  return closure_0.getConfig({ location }).enabled;
};