// discord_app/modules/waterwheels/cards/native/useWaterwheelsCardEligibility.tsx
import WaterwheelsCard from "WaterwheelsCard.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import ConnectedAccountsStore from "../../../../stores/ConnectedAccountsStore.tsx";
import PushNotificationPermissionStore from "../../../../stores/native/PushNotificationPermissionStore.tsx";

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/waterwheels/cards/native/useWaterwheelsCardEligibility.tsx");

export default function useWaterwheelsCardEligibility() {
  items = [PushNotificationPermissionStore];
  stateFromStores = stateFromStores(stateFromStores1[3]).useStateFromStores(
    items,
    () => authorizationStatus.authorizationStatus,
  );
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
}
