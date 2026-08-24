// === Module 15650: useNotificationsTabBadge ===

// Module 15650 (useNotificationsTabBadge)
import closure_2 from "noop" /* 19 */;
import closure_3 from "_validate" /* 4801 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/tabs/notifications/useNotificationsTabBadge.tsx");

export default function useNotificationsTabBadge() {
  let obj = stateFromStores(589);
  const items = [closure_3];
  stateFromStores = obj.useStateFromStores(items, () => localItems.localItems);
  const items1 = [stateFromStores];
  const memo = React.useMemo(() => stateFromStores.filter((type) => {
    let tmp3 = type.type === callback(table[3]).NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS;
    if (!tmp3) {
      tmp3 = type.type === tmp(tmp2[3]).NotificationCenterLocalItems.INCOMING_GAME_FRIEND_REQUESTS;
    }
    if (!tmp3) {
      tmp3 = type.type === tmp(tmp2[3]).NotificationCenterLocalItems.MOBILE_NATIVE_UPDATE_AVAILABLE;
    }
    return tmp3;
  }).length, items1);
  obj = { value: memo, showDot: memo > 0 };
  return obj;
};