// === Module 12298: useSafetyHubAccountStanding ===

// Module 12298 (useSafetyHubAccountStanding)
import initialize from "initialize" /* 504 */;
import SafetyHubStore from "SafetyHubStore" /* 7715 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/safety_hub/hooks/useSafetyHubAccountStanding.tsx");

export function useSafetyHubAccountStanding() {
  items = [SafetyHubStore];
  return initialize.useStateFromStores(items, () => accountStanding.getAccountStanding());
}