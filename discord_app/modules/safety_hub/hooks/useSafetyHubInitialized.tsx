// discord_app/modules/safety_hub/hooks/useSafetyHubInitialized.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import handleSafetyHubRequestAgeVerificationResetModalAction from "../SafetyHubStore.tsx";

require = fn;
const result = require("obj132").fileFinishedImporting("modules/safety_hub/hooks/useSafetyHubInitialized.tsx");

export const useSafetyHubInitialized = function useSafetyHubInitialized() {
  const items = [closure_2];
  return initialize.useStateFromStores(items, () => initialized.isInitialized());
};