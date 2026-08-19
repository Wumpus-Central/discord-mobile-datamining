// === Module 15650: useNotificationsTabBadge ===

// Module 15650 (useNotificationsTabBadge)
import noop from "noop" /* 19 */;
import _validate from "_validate" /* 4801 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/main_tabs_v2/native/tabs/notifications/useNotificationsTabBadge.tsx");

export default function useNotificationsTabBadge() {
  let obj = stateFromStores(589);
  const items = [closure_3];
  stateFromStores = obj.useStateFromStores(items, () => localItems.localItems);
  const items1 = [stateFromStores];
  const memo = React.useMemo(() => stateFromStores.filter((item, index) => {
    let tmp3 = item.type === callback(table[3]).NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS;
    if (!tmp3) {
      tmp3 = item.type === callback(table[3]).NotificationCenterLocalItems.INCOMING_GAME_FRIEND_REQUESTS;
    }
    if (!tmp3) {
      tmp3 = item.type === callback(table[3]).NotificationCenterLocalItems.MOBILE_NATIVE_UPDATE_AVAILABLE;
    }
    return tmp3;
  }).length, items1);
  obj = { value: memo, showDot: memo > 0 };
  return obj;
};