// === Module 13485: useSafetyHubInitialized ===

// Module 13485 (useSafetyHubInitialized)
import initialize from "initialize" /* 504 */;
import SafetyHubStore from "SafetyHubStore" /* 8118 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/safety_hub/hooks/useSafetyHubInitialized.tsx");

export function useSafetyHubInitialized() {
  items = [SafetyHubStore];
  return initialize.useStateFromStores(items, () => initialized.isInitialized());
}