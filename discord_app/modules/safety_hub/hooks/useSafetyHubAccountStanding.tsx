// discord_app/modules/safety_hub/hooks/useSafetyHubAccountStanding.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import SafetyHubStore from "../SafetyHubStore.tsx";

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/safety_hub/hooks/useSafetyHubAccountStanding.tsx");

export function useSafetyHubAccountStanding() {
  const items = [SafetyHubStore];
  return initialize.useStateFromStores(items, () => accountStanding.getAccountStanding());
}
