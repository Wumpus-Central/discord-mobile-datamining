// discord_app/modules/age_assurance/ShowExpressiveModalSubtitleAltFlag.tsx
import initialize from "../../../discord_common/js/packages/flux/index.tsx";
import SafetyHubUtils from "../safety_hub/SafetyHubUtils.tsx";
import SafetyHubStore from "../safety_hub/SafetyHubStore.tsx";

require = fn;
fn(1433);
let ApexExperiment = {
  kind: "user",
  name: "2026-08-show-expressive-modal-subtitle-alt",
  defaultConfig: { enabled: false },
  variations: null,
};
ApexExperiment = { 1: null };
ApexExperiment[1] = { enabled: true };
ApexExperiment.variations = ApexExperiment;
let closure_3 = ApexExperiment.createApexExperiment(ApexExperiment);
const size = fn(2);
const result = size.fileFinishedImporting("modules/age_assurance/ShowExpressiveModalSubtitleAltFlag.tsx");

export const useShouldShowExpressiveModalSubtitleAlt = function useShouldShowExpressiveModalSubtitleAlt(
  age_verification_expressive_v2_modal,
) {
  let obj = SafetyHubUtils;
  const isSuspendedUser = obj.useIsSuspendedUser();
  const items = [SafetyHubStore];
  obj = { location: age_verification_expressive_v2_modal };
  const stateFromStores = initialize.useStateFromStores(items, () =>
    showExpressiveModalSubtitleAlt.getShowExpressiveModalSubtitleAlt(),
  );
  let enabled = closure_3.useConfig(obj).enabled;
  if (isSuspendedUser) {
    enabled = stateFromStores;
  }
  return enabled;
};
export const shouldShowExpressiveModalSubtitleAlt = function shouldShowExpressiveModalSubtitleAlt(location) {
  let obj = SafetyHubUtils;
  if (obj.isCurrentUserSuspended()) {
    let enabled = SafetyHubStore.getShowExpressiveModalSubtitleAlt();
  } else {
    obj = { location };
    enabled = closure_3.getConfig(obj).enabled;
  }
  return enabled;
};
