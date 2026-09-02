// === Module 11706: useSafetyHubInitialized ===

// Module 11706 (useSafetyHubInitialized)
import initialize from "initialize" /* 586 */;
import closure_2 from "handleSafetyHubRequestAgeVerificationResetModalAction" /* 8716 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/safety_hub/hooks/useSafetyHubInitialized.tsx");

export const useSafetyHubInitialized = function useSafetyHubInitialized() {
  const items = [closure_2];
  return initialize.useStateFromStores(items, () => initialized.isInitialized());
};