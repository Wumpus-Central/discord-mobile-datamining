// discord_app/modules/safety_hub/hooks/useSafetyHubInitialized.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import SafetyHubStore from "../SafetyHubStore.tsx";

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/safety_hub/hooks/useSafetyHubInitialized.tsx");

export const useSafetyHubInitialized = function useSafetyHubInitialized() {
  const items = [SafetyHubStore];
  return initialize.useStateFromStores(items, () => initialized.isInitialized());
};
