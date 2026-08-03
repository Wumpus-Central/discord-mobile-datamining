import noop from "noop";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import insertUnsortedGuilds from "insertUnsortedGuilds";
import updateUserGuildSettingsInternal from "updateUserGuildSettingsInternal";
import { HighlightSettings } from "ME";
import { jsx } from "jsxProd";

const require = arg1;
function Row(guildId) {
  let guild;
  let isEnd;
  let isStart;
  let muted;
  guildId = guildId.guildId;
  const items = [guildId];
  ({ isStart, isEnd } = guildId);
  const callback = React.useCallback((arg0) => {
    let obj = outer1_1(outer1_2[6]);
    obj = { notify_highlights: arg0 ? tmp3.ENABLED : tmp3.DISABLED };
    const NotificationLabel = guildId(outer1_2[7]).NotificationLabel;
    const result = obj.updateGuildNotificationSettings(guildId, obj, NotificationLabel.highlights(!arg0));
  }, items);
  let obj = guildId(589);
  const items1 = [updateUserGuildSettingsInternal, createGuildRecordFromRust];
  const items2 = [guildId];
  const stateFromStoresObject = obj.useStateFromStoresObject(items1, () => ({ guild: outer1_4.getGuild(guildId), muted: outer1_6.isMuted(guildId), notifyHighlights: outer1_6.getNotifyHighlights(guildId) }), items2);
  ({ guild, muted } = stateFromStoresObject);
  let name;
  if (guild != null) {
    name = guild.name;
  }
  if (null == name) {
    return null;
  } else {
    if (!muted) {
      muted = stateFromStoresObject.notifyHighlights === HighlightSettings.DISABLED;
    }
    obj = { guild: null };
    obj[0] = guild;
    obj = { label: null, icon: null, value: null, onValueChange: null, start: null, end: null };
    obj[0] = guild.name;
    obj[1] = jsx(importDefault(5632), { label: null, icon: null, value: null, onValueChange: null, start: null, end: null });
    obj[2] = !muted;
    obj[3] = callback;
    obj[4] = isStart;
    obj[5] = isEnd;
    return jsx(tmp2(5621).TableSwitchRow, { label: null, icon: null, value: null, onValueChange: null, start: null, end: null });
  }
  tmp2 = guildId;
}
let result = require("insertUnsortedGuilds").fileFinishedImporting("modules/user_settings/notifications/native/UserSettingsHighlightNotifications.tsx");

export default function UserSettingsHighlightNotifications() {
  let obj = stateFromStoresArray(589);
  const items = [insertUnsortedGuilds];
  stateFromStoresArray = obj.useStateFromStoresArray(items, () => flattenedGuildIds.getFlattenedGuildIds());
  [][0] = stateFromStoresArray;
  let tmp4 = null;
  if (0 !== stateFromStoresArray.length) {
    obj = { children: null };
    obj[0] = tmp3;
    tmp4 = jsx(stateFromStoresArray(7765).Form, { children: null });
  }
  return tmp4;
};