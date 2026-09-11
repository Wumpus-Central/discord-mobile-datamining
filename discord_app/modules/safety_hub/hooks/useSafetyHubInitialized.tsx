// === Module 12004: useSafetyHubInitialized ===

// Module 12004 (useSafetyHubInitialized)
import initialize from "initialize" /* 504 */;
import SafetyHubStore from "SafetyHubStore" /* 8516 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/safety_hub/hooks/useSafetyHubInitialized.tsx");

export const useSafetyHubInitialized = function useSafetyHubInitialized() {
  const items = [SafetyHubStore];
  return initialize.useStateFromStores(items, () => initialized.isInitialized());
};