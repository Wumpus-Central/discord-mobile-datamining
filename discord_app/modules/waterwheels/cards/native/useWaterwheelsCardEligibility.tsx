// === Module 18715: useWaterwheelsCardEligibility ===

// Module 18715 (useWaterwheelsCardEligibility)
import WaterwheelsCard from "WaterwheelsCard" /* 18716 */;
import noop from "module_19" /* 19 */;
import PushNotificationPermissionStore from "PushNotificationPermissionStore" /* 14104 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/waterwheels/cards/native/useWaterwheelsCardEligibility.tsx");

export default function useWaterwheelsCardEligibility() {
  items = [PushNotificationPermissionStore];
  stateFromStores = stateFromStores(504).useStateFromStores(items, () => authorizationStatus.authorizationStatus);
  const items1 = [stateFromStores];
  return noop.useCallback((clientEligibility) => WaterwheelsCard.getWaterwheelsCardEligible(clientEligibility, stateFromStores), items1);
};