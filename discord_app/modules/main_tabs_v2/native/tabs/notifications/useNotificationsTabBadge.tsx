// discord_app/modules/main_tabs_v2/native/tabs/notifications/useNotificationsTabBadge.tsx
import noop from "../../../../../../_runtime/metro/00019__.js";
import NotificationCenterItemsStore from "../../../../notification_center/NotificationCenterItemsStore.tsx";

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/main_tabs_v2/native/tabs/notifications/useNotificationsTabBadge.tsx",
);

export default function useNotificationsTabBadge() {
  let obj = stateFromStores(504);
  const items = [NotificationCenterItemsStore];
  stateFromStores = obj.useStateFromStores(items, () => localItems.localItems);
  const items1 = [stateFromStores];
  const memo = noop.useMemo(
    () =>
      stateFromStores.filter((type) => {
        let tmp3 = type.type === stateFromStores(closure_1_1[3]).NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS;
        if (!tmp3) {
          tmp3 = type.type === tmp(tmp2[3]).NotificationCenterLocalItems.INCOMING_GAME_FRIEND_REQUESTS;
        }
        if (!tmp3) {
          tmp3 = type.type === tmp(tmp2[3]).NotificationCenterLocalItems.MOBILE_NATIVE_UPDATE_AVAILABLE;
        }
        return tmp3;
      }).length,
    items1,
  );
  obj = { value: memo, showDot: memo > 0 };
  return obj;
}
