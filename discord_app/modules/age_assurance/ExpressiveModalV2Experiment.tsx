// === Module 8550: ExpressiveModalV2Experiment ===

// Module 8550 (ExpressiveModalV2Experiment)
import initialize from "initialize" /* 504 */;
import SafetyHubUtils from "SafetyHubUtils" /* 8539 */;
import SafetyHubStore from "SafetyHubStore" /* 8551 */;

require = fn;
const ApexExperiment = fn(1434);
let obj2 = { kind: "user", name: "2026-07-expressive-modal-v2", defaultConfig: { enabled: false }, variations: null };
const obj3 = { 1: null, 2: { enabled: true } };
obj3[2] = { enabled: true };
obj2.variations = obj3;
let closure_3 = ApexExperiment.createApexExperiment(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/age_assurance/ExpressiveModalV2Experiment.tsx");

export const useIsExpressiveModalV2Enabled = function useIsExpressiveModalV2Enabled(AUTOMATED_UNDERAGE_APPEALS) {
  const isSuspendedUser = SafetyHubUtils.useIsSuspendedUser();
  const items = [SafetyHubStore];
  const stateFromStores = initialize.useStateFromStores(items, () => isExpressiveModalV2Enabled.getIsExpressiveModalV2Enabled());
  let enabled = closure_3.useConfig({ location: AUTOMATED_UNDERAGE_APPEALS }).enabled;
  if (isSuspendedUser) {
    enabled = stateFromStores;
  }
  return enabled;
};
export const isExpressiveModalV2Enabled = function isExpressiveModalV2Enabled(AUTOMATED_UNDERAGE_APPEALS) {
  if (obj.isCurrentUserSuspended()) {
    let enabled = SafetyHubStore.getIsExpressiveModalV2Enabled();
  } else {
    const obj2 = { location: AUTOMATED_UNDERAGE_APPEALS };
    enabled = closure_3.getConfig(obj2).enabled;
  }
  return enabled;
};