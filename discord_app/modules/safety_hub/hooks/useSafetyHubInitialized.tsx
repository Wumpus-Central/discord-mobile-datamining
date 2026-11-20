// === Module 12331: useSafetyHubInitialized ===

// Module 12331 (useSafetyHubInitialized)
import initialize from "initialize" /* 504 */;
import SafetyHubStore from "SafetyHubStore" /* 7715 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/safety_hub/hooks/useSafetyHubInitialized.tsx");

export function useSafetyHubInitialized() {
  items = [SafetyHubStore];
  return initialize.useStateFromStores(items, () => initialized.isInitialized());
}