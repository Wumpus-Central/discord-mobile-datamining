// discord_app/modules/safety_hub/hooks/useSafetyHubAccountStanding.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import handleSafetyHubRequestAgeVerificationResetModalAction from "../SafetyHubStore.tsx";

require = fn;
const result = require("obj132").fileFinishedImporting("modules/safety_hub/hooks/useSafetyHubAccountStanding.tsx");

export const useSafetyHubAccountStanding = function useSafetyHubAccountStanding() {
  const items = [closure_2];
  return initialize.useStateFromStores(items, () => accountStanding.getAccountStanding());
};