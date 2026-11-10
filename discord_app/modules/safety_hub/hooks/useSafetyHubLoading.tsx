// === Module 16988: useSafetyHubLoading ===

// Module 16988 (useSafetyHubLoading)
import initialize from "initialize" /* 504 */;
import SafetyHubStore from "SafetyHubStore" /* 8068 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/safety_hub/hooks/useSafetyHubLoading.tsx");

export default function useIsSafetyHubLoading() {
  items = [SafetyHubStore];
  return initialize.useStateFromStores(items, () => fetching.isFetching());
};