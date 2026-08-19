// === Module 14108: useSafetyHubFetchError ===

// Module 14108 (useSafetyHubFetchError)
import initialize from "initialize" /* 589 */;
import handleSafetyHubRequestAgeVerificationResetModalAction from "handleSafetyHubRequestAgeVerificationResetModalAction" /* 11061 */;

require = fn;
const result = require("obj132").fileFinishedImporting("modules/safety_hub/hooks/useSafetyHubFetchError.tsx");

export const useSafetyHubFetchError = function useSafetyHubFetchError() {
  const items = [closure_2];
  return initialize.useStateFromStores(items, () => fetchError.getFetchError());
};