// === Module 11095: useSafetyHubInitialized ===

// Module 11095 (useSafetyHubInitialized)
import initialize from "initialize" /* 589 */;
import handleSafetyHubRequestAgeVerificationResetModalAction from "handleSafetyHubRequestAgeVerificationResetModalAction" /* 11061 */;

require = fn;
const result = require("obj132").fileFinishedImporting("modules/safety_hub/hooks/useSafetyHubInitialized.tsx");

export const useSafetyHubInitialized = function useSafetyHubInitialized() {
  const items = [closure_2];
  return initialize.useStateFromStores(items, () => initialized.isInitialized());
};