// discord_app/modules/safety_hub/hooks/useSafetyHubAccountStanding.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import closure_2 from "../SafetyHubStore.tsx";

require = arg1;
const result = require("set").fileFinishedImporting("modules/safety_hub/hooks/useSafetyHubAccountStanding.tsx");

export const useSafetyHubAccountStanding = function useSafetyHubAccountStanding() {
  const items = [closure_2];
  return initialize.useStateFromStores(items, () => accountStanding.getAccountStanding());
};
