// discord_app/modules/safety_hub/hooks/useSafetyHubInitialized.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import closure_2 from "../SafetyHubStore.tsx";

require = arg1;
const result = require("set").fileFinishedImporting("modules/safety_hub/hooks/useSafetyHubInitialized.tsx");

export const useSafetyHubInitialized = function useSafetyHubInitialized() {
  const items = [closure_2];
  return initialize.useStateFromStores(items, () => initialized.isInitialized());
};
