// === Module 14290: useSafetyHubFetchError ===

// Module 14290 (useSafetyHubFetchError)
import initialize from "initialize" /* 589 */;
import closure_2 from "handleSafetyHubRequestAgeVerificationResetModalAction" /* 11387 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/safety_hub/hooks/useSafetyHubFetchError.tsx");

export const useSafetyHubFetchError = function useSafetyHubFetchError() {
  const items = [closure_2];
  return initialize.useStateFromStores(items, () => fetchError.getFetchError());
};