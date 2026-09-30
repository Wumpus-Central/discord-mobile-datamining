// === Module 14503: useSafetyHubFetchError ===

// Module 14503 (useSafetyHubFetchError)
import initialize from "initialize" /* 504 */;
import SafetyHubStore from "SafetyHubStore" /* 8076 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/safety_hub/hooks/useSafetyHubFetchError.tsx");

export const useSafetyHubFetchError = function useSafetyHubFetchError() {
  const items = [SafetyHubStore];
  return initialize.useStateFromStores(items, () => fetchError.getFetchError());
};