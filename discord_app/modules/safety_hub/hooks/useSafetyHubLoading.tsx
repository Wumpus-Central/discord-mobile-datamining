// === Module 17306: useSafetyHubLoading ===

// Module 17306 (useSafetyHubLoading)
import initialize from "initialize" /* 504 */;
import SafetyHubStore from "SafetyHubStore" /* 8242 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/safety_hub/hooks/useSafetyHubLoading.tsx");

export default function useIsSafetyHubLoading() {
  items = [SafetyHubStore];
  return initialize.useStateFromStores(items, () => fetching.isFetching());
};