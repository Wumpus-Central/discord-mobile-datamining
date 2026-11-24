// === Module 16074: useSafetyHubLoading ===

// Module 16074 (useSafetyHubLoading)
import initialize from "initialize" /* 504 */;
import SafetyHubStore from "SafetyHubStore" /* 7779 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/safety_hub/hooks/useSafetyHubLoading.tsx");

export default function useIsSafetyHubLoading() {
  items = [SafetyHubStore];
  return initialize.useStateFromStores(items, () => fetching.isFetching());
};