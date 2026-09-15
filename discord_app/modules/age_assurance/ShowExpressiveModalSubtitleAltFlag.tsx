// discord_app/modules/age_assurance/ShowExpressiveModalSubtitleAltFlag.tsx
import initialize from "../../../discord_common/js/packages/flux/index.tsx";
import SafetyHubUtils from "../safety_hub/SafetyHubUtils.tsx";
import SafetyHubStore from "../safety_hub/SafetyHubStore.tsx";

require = fn;
const ApexExperiment = fn(1434);
let obj2 = {
  kind: "user",
  name: "2026-08-show-expressive-modal-subtitle-alt",
  defaultConfig: { enabled: false },
  variations: null,
};
const obj3 = { 1: null };
obj3[1] = { enabled: true };
obj2.variations = obj3;
let closure_3 = ApexExperiment.createApexExperiment(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/age_assurance/ShowExpressiveModalSubtitleAltFlag.tsx");

export const useShouldShowExpressiveModalSubtitleAlt = function useShouldShowExpressiveModalSubtitleAlt(
  age_verification_expressive_v2_modal,
) {
  const isSuspendedUser = SafetyHubUtils.useIsSuspendedUser();
  const items = [SafetyHubStore];
  const stateFromStores = initialize.useStateFromStores(items, () =>
    showExpressiveModalSubtitleAlt.getShowExpressiveModalSubtitleAlt(),
  );
  let enabled = closure_3.useConfig({ location: age_verification_expressive_v2_modal }).enabled;
  if (isSuspendedUser) {
    enabled = stateFromStores;
  }
  return enabled;
};
export const shouldShowExpressiveModalSubtitleAlt = function shouldShowExpressiveModalSubtitleAlt(location) {
  if (obj.isCurrentUserSuspended()) {
    let enabled = SafetyHubStore.getShowExpressiveModalSubtitleAlt();
  } else {
    const obj2 = { location };
    enabled = closure_3.getConfig(obj2).enabled;
  }
  return enabled;
};
