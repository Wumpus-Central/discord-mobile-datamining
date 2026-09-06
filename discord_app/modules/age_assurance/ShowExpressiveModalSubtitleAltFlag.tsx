// === Module 8444: useShouldShowExpressiveModalSubtitleAlt ===

// Module 8444 (useShouldShowExpressiveModalSubtitleAlt)
import initialize from "initialize" /* 504 */;
import parseMessageEmbedForProps from "parseMessageEmbedForProps" /* 8418 */;
import closure_2 from "handleSafetyHubRequestAgeVerificationResetModalAction" /* 8430 */;
import ApexExperiment from "ApexExperiment" /* 1433 */;

require = arg1;
ApexExperiment = { 1: null };
ApexExperiment[1] = { enabled: true };
let closure_3 = ApexExperiment.createApexExperiment({ kind: "user", name: "2026-08-show-expressive-modal-subtitle-alt", defaultConfig: { enabled: false }, variations: ApexExperiment });
const result = require("set").fileFinishedImporting("modules/age_assurance/ShowExpressiveModalSubtitleAltFlag.tsx");

export const useShouldShowExpressiveModalSubtitleAlt = function useShouldShowExpressiveModalSubtitleAlt(age_verification_expressive_v2_modal) {
  let obj = parseMessageEmbedForProps;
  const isSuspendedUser = obj.useIsSuspendedUser();
  const items = [closure_2];
  obj = { location: age_verification_expressive_v2_modal };
  const stateFromStores = initialize.useStateFromStores(items, () => showExpressiveModalSubtitleAlt.getShowExpressiveModalSubtitleAlt());
  let enabled = closure_3.useConfig(obj).enabled;
  if (isSuspendedUser) {
    enabled = stateFromStores;
  }
  return enabled;
};
export const shouldShowExpressiveModalSubtitleAlt = function shouldShowExpressiveModalSubtitleAlt(arg0) {
  let obj = parseMessageEmbedForProps;
  if (obj.isCurrentUserSuspended()) {
    let enabled = showExpressiveModalSubtitleAlt.getShowExpressiveModalSubtitleAlt();
  } else {
    obj = { location: null };
    obj[0] = arg0;
    enabled = closure_3.getConfig(obj).enabled;
  }
  return enabled;
};