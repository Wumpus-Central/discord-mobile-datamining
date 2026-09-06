// === Module 14769: useSafetyHubLoading ===

// Module 14769 (useSafetyHubLoading)
import initialize from "initialize" /* 504 */;
import SafetyHubStore from "SafetyHubStore" /* 8430 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/safety_hub/hooks/useSafetyHubLoading.tsx");

export default function useIsSafetyHubLoading() {
  const items = [SafetyHubStore];
  return initialize.useStateFromStores(items, () => fetching.isFetching());
};