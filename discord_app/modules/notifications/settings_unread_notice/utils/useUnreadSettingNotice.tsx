// discord_app/modules/notifications/settings_unread_notice/utils/useUnreadSettingNotice.tsx
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import noop from "../../../../../_runtime/00019_noop.js";
import { CHANNEL_ELIGIBLE_FOR_UNREAD_SETTING as closure_5 } from "../../../../records/ChannelRecord.tsx";

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/notifications/settings_unread_notice/utils/useUnreadSettingNotice.tsx");

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
      hasItem = first !== id.id;
    }
    if (hasItem) {
      hasItem = shouldUseNewNotificationSystem;
    }
    if (hasItem) {
      hasItem = shouldUseNewNotificationSystem(first[5]).maybeAutoUpgradeChannel(id.id);
      const obj = shouldUseNewNotificationSystem(first[5]);
    }
    if (hasItem) {
      callback(id.id);
    }
  }, items2);
  obj = { showUnreadsNotice: first === id.id, clearUnreadsNotice: React.useCallback(() => callback(""), []) };
  return obj;
};