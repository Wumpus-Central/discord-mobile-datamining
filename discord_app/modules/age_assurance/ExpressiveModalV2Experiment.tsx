// discord_app/modules/age_assurance/ExpressiveModalV2Experiment.tsx
import initialize from "../../../discord_common/js/packages/flux/index.tsx";
import SafetyHubUtils from "../safety_hub/SafetyHubUtils.tsx";
import SafetyHubStore from "../safety_hub/SafetyHubStore.tsx";

require = fn;
fn(1433);
let ApexExperiment = {
  kind: "user",
  name: "2026-07-expressive-modal-v2",
  defaultConfig: { enabled: false },
  variations: null,
};
ApexExperiment = { 1: null, 2: { enabled: true } };
ApexExperiment[2] = { enabled: true };
ApexExperiment.variations = ApexExperiment;
let closure_3 = ApexExperiment.createApexExperiment(ApexExperiment);
const size = fn(2);
const result = size.fileFinishedImporting("modules/age_assurance/ExpressiveModalV2Experiment.tsx");

export const useIsExpressiveModalV2Enabled = function useIsExpressiveModalV2Enabled(AUTOMATED_UNDERAGE_APPEALS) {
  let obj = SafetyHubUtils;
  const isSuspendedUser = obj.useIsSuspendedUser();
  const items = [SafetyHubStore];
  obj = { location: AUTOMATED_UNDERAGE_APPEALS };
  const stateFromStores = initialize.useStateFromStores(items, () =>
    isExpressiveModalV2Enabled.getIsExpressiveModalV2Enabled(),
  );
  let enabled = closure_3.useConfig(obj).enabled;
  if (isSuspendedUser) {
    enabled = stateFromStores;
  }
  return enabled;
};
export const isExpressiveModalV2Enabled = function isExpressiveModalV2Enabled(AUTOMATED_UNDERAGE_APPEALS) {
  let obj = SafetyHubUtils;
  if (obj.isCurrentUserSuspended()) {
    let enabled = SafetyHubStore.getIsExpressiveModalV2Enabled();
  } else {
    obj = { location: AUTOMATED_UNDERAGE_APPEALS };
    enabled = closure_3.getConfig(obj).enabled;
  }
  return enabled;
};
