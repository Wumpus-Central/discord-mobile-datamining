// === Module 11976: useSafetyHubAccountStanding ===

// Module 11976 (useSafetyHubAccountStanding)
import initialize from "initialize" /* 504 */;
import SafetyHubStore from "SafetyHubStore" /* 8516 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/safety_hub/hooks/useSafetyHubAccountStanding.tsx");

export const useSafetyHubAccountStanding = function useSafetyHubAccountStanding() {
  const items = [SafetyHubStore];
  return initialize.useStateFromStores(items, () => accountStanding.getAccountStanding());
};