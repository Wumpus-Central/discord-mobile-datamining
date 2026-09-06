// === Module 8429: useIsExpressiveModalV2Enabled ===

// Module 8429 (useIsExpressiveModalV2Enabled)
import initialize from "initialize" /* 504 */;
import parseMessageEmbedForProps from "parseMessageEmbedForProps" /* 8418 */;
import closure_2 from "handleSafetyHubRequestAgeVerificationResetModalAction" /* 8430 */;
import ApexExperiment from "ApexExperiment" /* 1433 */;

require = arg1;
ApexExperiment = { 1: null, 2: { enabled: true } };
ApexExperiment[2] = { enabled: true };
let closure_3 = ApexExperiment.createApexExperiment({ kind: "user", name: "2026-07-expressive-modal-v2", defaultConfig: { enabled: false }, variations: ApexExperiment });
const result = require("set").fileFinishedImporting("modules/age_assurance/ExpressiveModalV2Experiment.tsx");

export const useIsExpressiveModalV2Enabled = function useIsExpressiveModalV2Enabled(AUTOMATED_UNDERAGE_APPEALS) {
  let obj = parseMessageEmbedForProps;
  const isSuspendedUser = obj.useIsSuspendedUser();
  const items = [closure_2];
  obj = { location: AUTOMATED_UNDERAGE_APPEALS };
  const stateFromStores = initialize.useStateFromStores(items, () => isExpressiveModalV2Enabled.getIsExpressiveModalV2Enabled());
  let enabled = closure_3.useConfig(obj).enabled;
  if (isSuspendedUser) {
    enabled = stateFromStores;
  }
  return enabled;
};
export const isExpressiveModalV2Enabled = function isExpressiveModalV2Enabled(AUTOMATED_UNDERAGE_APPEALS) {
  let obj = parseMessageEmbedForProps;
  if (obj.isCurrentUserSuspended()) {
    let enabled = isExpressiveModalV2Enabled.getIsExpressiveModalV2Enabled();
  } else {
    obj = { location: null };
    obj[0] = AUTOMATED_UNDERAGE_APPEALS;
    enabled = closure_3.getConfig(obj).enabled;
  }
  return enabled;
};