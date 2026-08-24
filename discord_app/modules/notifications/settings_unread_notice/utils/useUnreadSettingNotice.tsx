// === Module 10663: useUnreadSettingNotice ===

// Module 10663 (useUnreadSettingNotice)
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import { CHANNEL_ELIGIBLE_FOR_UNREAD_SETTING as closure_5 } from "createChannelRecord" /* 1395 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/notifications/settings_unread_notice/utils/useUnreadSettingNotice.tsx");

export default function useUnreadSettingNotice(id) {
  const _require = id;
  let obj = _require(first[3]);
  const shouldUseNewNotificationSystem = obj.useShouldUseNewNotificationSystem("useShouldRenderBanner");
  const tmp2 = callback(React.useState(""), 2);
  first = tmp2[0];
  callback = tmp2[1];
  const items = [id.id];
  const effect = React.useEffect(() => {
    callback("");
  }, items);
  const items1 = [shouldUseNewNotificationSystem(first[5])];
  const items2 = [first, shouldUseNewNotificationSystem, _require(first[4]).useStateFromStores(items1, () => shouldUseNewNotificationSystem(first[5]).getLastActionTime(id.id)), id];
  const effect1 = React.useEffect(() => {
    let hasItem = closure_1_5.has(id.type);
    if (hasItem) {
      hasItem = first !== tmp.id;
    }
    if (hasItem) {
      hasItem = shouldUseNewNotificationSystem;
    }
    if (hasItem) {
      hasItem = shouldUseNewNotificationSystem(first[5]).maybeAutoUpgradeChannel(tmp.id);
      const obj = shouldUseNewNotificationSystem(first[5]);
    }
    if (hasItem) {
      callback(tmp.id);
    }
  }, items2);
  obj = { showUnreadsNotice: first === id.id, clearUnreadsNotice: React.useCallback(() => callback(""), []) };
  return obj;
};