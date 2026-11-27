// === Module 18020: useWaterwheelsCardEligibility ===

// Module 18020 (useWaterwheelsCardEligibility)
import WaterwheelsCard from "WaterwheelsCard" /* 18021 */;
import noop from "module_19" /* 19 */;
import ConnectedAccountsStore from "ConnectedAccountsStore" /* 7462 */;
import PushNotificationPermissionStore from "PushNotificationPermissionStore" /* 13389 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/waterwheels/cards/native/useWaterwheelsCardEligibility.tsx");

export default function useWaterwheelsCardEligibility() {
  items = [PushNotificationPermissionStore];
  stateFromStores = stateFromStores(stateFromStores1[3]).useStateFromStores(items, () => authorizationStatus.authorizationStatus);
  const obj = stateFromStores(stateFromStores1[3]);
  const items1 = [ConnectedAccountsStore];
  stateFromStores1 = stateFromStores(stateFromStores1[3]).useStateFromStores(items1, () => {
    accounts = accounts.getAccounts();
    const found = accounts.filter((revoked) => !revoked.revoked);
    const mapped = found.map((type) => type.type);
    return JSON.stringify(mapped.sort());
  });
  const items2 = [stateFromStores1];
  memo = memo.useMemo(() => JSON.parse(stateFromStores1), items2);
  const items3 = [stateFromStores, memo];
  return memo.useCallback((card) => WaterwheelsCard.getWaterwheelsCardEligible(card, stateFromStores, memo), items3);
};