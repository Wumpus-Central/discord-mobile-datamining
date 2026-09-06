// discord_app/modules/age_assurance/ShowExpressiveModalSubtitleAltFlag.tsx
import initialize from "../../../discord_common/js/packages/flux/index.tsx";
import parseMessageEmbedForProps from "../safety_hub/SafetyHubUtils.tsx";
import closure_2 from "../safety_hub/SafetyHubStore.tsx";
import ApexExperiment from "../experiments/apex/index.tsx";

require = arg1;
ApexExperiment = { 1: null };
ApexExperiment[1] = { enabled: true };
let closure_3 = ApexExperiment.createApexExperiment({
  kind: "user",
  name: "2026-08-show-expressive-modal-subtitle-alt",
  defaultConfig: { enabled: false },
  variations: ApexExperiment,
});
const result = require("set").fileFinishedImporting("modules/age_assurance/ShowExpressiveModalSubtitleAltFlag.tsx");

export const useShouldShowExpressiveModalSubtitleAlt = function useShouldShowExpressiveModalSubtitleAlt(
  age_verification_expressive_v2_modal,
) {
  let obj = parseMessageEmbedForProps;
  const isSuspendedUser = obj.useIsSuspendedUser();
  const items = [closure_2];
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
