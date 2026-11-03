// discord_app/modules/waterwheels/cards/native/useWaterwheelsCardEligibility.tsx
import WaterwheelsCard from "WaterwheelsCard.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import PushNotificationPermissionStore from "../../../../stores/native/PushNotificationPermissionStore.tsx";

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/waterwheels/cards/native/useWaterwheelsCardEligibility.tsx");

export default function useWaterwheelsCardEligibility() {
  items = [PushNotificationPermissionStore];
  stateFromStores = stateFromStores(504).useStateFromStores(items, () => authorizationStatus.authorizationStatus);
  const items1 = [stateFromStores];
  return noop.useCallback(
    (clientEligibility) => WaterwheelsCard.getWaterwheelsCardEligible(clientEligibility, stateFromStores),
    items1,
  );
}
