// === Module 16821: useNotificationsTabBadge ===

// Module 16821 (useNotificationsTabBadge)
import noop from "module_19" /* 19 */;
import NotificationCenterItemsStore from "NotificationCenterItemsStore" /* 7963 */;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/notifications/useNotificationsTabBadge.tsx");

export default function useNotificationsTabBadge() {
  const items = [NotificationCenterItemsStore];
  stateFromStores = stateFromStores(504).useStateFromStores(items, () => localItems.localItems);
  const items1 = [stateFromStores];
  const memo = noop.useMemo(() => stateFromStores.filter((type) => {
    let tmp3 = type.type === stateFromStores(dependencyMap[3]).NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS;
    if (!tmp3) {
      tmp3 = type.type === stateFromStores(dependencyMap[3]).NotificationCenterLocalItems.INCOMING_GAME_FRIEND_REQUESTS;
    }
    if (!tmp3) {
      tmp3 = type.type === stateFromStores(dependencyMap[3]).NotificationCenterLocalItems.MOBILE_NATIVE_UPDATE_AVAILABLE;
    }
    return tmp3;
  }).length, items1);
  return { value: memo, showDot: memo > 0 };
};