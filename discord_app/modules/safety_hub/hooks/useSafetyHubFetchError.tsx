// === Module 14817: useSafetyHubFetchError ===

// Module 14817 (useSafetyHubFetchError)
import initialize from "initialize" /* 504 */;
import SafetyHubStore from "SafetyHubStore" /* 8516 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/safety_hub/hooks/useSafetyHubFetchError.tsx");

export const useSafetyHubFetchError = function useSafetyHubFetchError() {
  const items = [SafetyHubStore];
  return initialize.useStateFromStores(items, () => fetchError.getFetchError());
};