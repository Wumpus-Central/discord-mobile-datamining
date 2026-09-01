// discord_app/modules/age_assurance/ExpressiveModalV2Experiment.tsx
import initialize from "../../../discord_common/js/packages/flux/index.tsx";
import parseMessageEmbedForProps from "../safety_hub/SafetyHubUtils.tsx";
import closure_2 from "../safety_hub/SafetyHubStore.tsx";
import ApexExperiment from "../experiments/apex/index.tsx";

require = arg1;
ApexExperiment = { 1: null, 2: { enabled: true } };
ApexExperiment[2] = { enabled: true };
let closure_3 = ApexExperiment.createApexExperiment({ kind: "user", name: "2026-07-expressive-modal-v2", defaultConfig: { enabled: false }, variations: ApexExperiment });
const result = require("set").fileFinishedImporting("modules/age_assurance/ExpressiveModalV2Experiment.tsx");

export const useIsExpressiveModalV2Enabled = function useIsExpressiveModalV2Enabled(location) {
  let obj = parseMessageEmbedForProps;
  const isSuspendedUser = obj.useIsSuspendedUser();
  const items = [closure_2];
  obj = { location };
  const stateFromStores = initialize.useStateFromStores(items, () => isExpressiveModalV2Enabled.getIsExpressiveModalV2Enabled());
  let enabled = closure_3.useConfig(obj).enabled;
  if (isSuspendedUser) {
    enabled = stateFromStores;
  }
  return enabled;
};
export const isExpressiveModalV2Enabled = function isExpressiveModalV2Enabled(entryPoint) {
  let obj = parseMessageEmbedForProps;
  if (obj.isCurrentUserSuspended()) {
    let enabled = isExpressiveModalV2Enabled.getIsExpressiveModalV2Enabled();
  } else {
    obj = { location: null };
    obj[0] = entryPoint;
    enabled = closure_3.getConfig(obj).enabled;
  }
  return enabled;
};