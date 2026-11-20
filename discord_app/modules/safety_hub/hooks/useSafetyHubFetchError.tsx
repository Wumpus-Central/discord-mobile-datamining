// === Module 15912: useSafetyHubFetchError ===

// Module 15912 (useSafetyHubFetchError)
import initialize from "initialize" /* 504 */;
import SafetyHubStore from "SafetyHubStore" /* 7715 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/safety_hub/hooks/useSafetyHubFetchError.tsx");

export function useSafetyHubFetchError() {
  items = [SafetyHubStore];
  return initialize.useStateFromStores(items, () => fetchError.getFetchError());
}