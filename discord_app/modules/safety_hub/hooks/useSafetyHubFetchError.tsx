// === Module 14580: useSafetyHubFetchError ===

// Module 14580 (useSafetyHubFetchError)
import initialize from "initialize" /* 586 */;
import closure_2 from "handleSafetyHubRequestAgeVerificationResetModalAction" /* 8716 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/safety_hub/hooks/useSafetyHubFetchError.tsx");

export const useSafetyHubFetchError = function useSafetyHubFetchError() {
  const items = [closure_2];
  return initialize.useStateFromStores(items, () => fetchError.getFetchError());
};