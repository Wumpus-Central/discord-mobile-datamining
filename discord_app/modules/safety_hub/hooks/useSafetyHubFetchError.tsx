// === Module 16035: useSafetyHubFetchError ===

// Module 16035 (useSafetyHubFetchError)
import initialize from "initialize" /* 504 */;
import SafetyHubStore from "SafetyHubStore" /* 7835 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/safety_hub/hooks/useSafetyHubFetchError.tsx");

export function useSafetyHubFetchError() {
  items = [SafetyHubStore];
  return initialize.useStateFromStores(items, () => fetchError.getFetchError());
}