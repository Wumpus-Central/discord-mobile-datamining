// === Module 11411: useUnreadSettingNotice ===

// Module 11411 (useUnreadSettingNotice)
import UnreadSettingNoticeStore2Default from "UnreadSettingNoticeStore2" /* 11412 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = fn;
let closure_5 = fn(1961).CHANNEL_ELIGIBLE_FOR_UNREAD_SETTING;
const size = fn(2);
const result = size.fileFinishedImporting("modules/notifications/settings_unread_notice/utils/useUnreadSettingNotice.tsx");

export default function useUnreadSettingNotice(id) {
  _require = id;
  let obj = require("notifications/NotificationUtils");
  const shouldUseNewNotificationSystem = obj.useShouldUseNewNotificationSystem("useShouldRenderBanner");
  const tmp2 = _slicedToArray(noop.useState(""), 2);
  first = tmp2[0];
  _slicedToArray = tmp2[1];
  const items = [id.id];
  const effect = noop.useEffect(() => {
    closure_3("");
  }, items);
  const items1 = [shouldUseNewNotificationSystem(first[5])];
  const items2 = [first, shouldUseNewNotificationSystem, require("initialize").useStateFromStores(items1, () => UnreadSettingNoticeStore2Default.getLastActionTime(id.id)), id];
  const effect1 = noop.useEffect(() => {
    let hasItem = set.has(id.type);
    if (hasItem) {
      hasItem = first !== tmp.id;
    }
    if (hasItem) {
      hasItem = shouldUseNewNotificationSystem;
    }
    if (hasItem) {
      hasItem = UnreadSettingNoticeStore2Default.maybeAutoUpgradeChannel(tmp.id);
    }
    if (hasItem) {
      closure_3(tmp.id);
    }
  }, items2);
  obj = { showUnreadsNotice: first === id.id, clearUnreadsNotice: noop.useCallback(() => closure_3(""), []) };
  return obj;
};