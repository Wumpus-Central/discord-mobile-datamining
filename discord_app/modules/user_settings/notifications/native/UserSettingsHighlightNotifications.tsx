// === Module 14830: Row ===

// Module 14830 (Row)
import _modDef6798 from "module_6798" /* 6798 */;
import GuildIconSizesDefault from "GuildIconSizes" /* 7188 */;
import noop from "noop" /* 19 */;
import createGuildRecordFromRust from "createGuildRecordFromRust" /* 1910 */;
import insertUnsortedGuilds from "insertUnsortedGuilds" /* 5078 */;
import updateUserGuildSettingsInternal from "updateUserGuildSettingsInternal" /* 5043 */;
import { HighlightSettings } from "ME" /* 676 */;
import { jsx } from "jsxProd" /* 21 */;

const require = fn;
function Row(guildId) {
  guildId = guildId.guildId;
  const items = [guildId];
  ({ isStart, isEnd } = guildId);
  const callback = React.useCallback((arg0) => {
    const obj = { notify_highlights: arg0 ? HighlightSettings.ENABLED : HighlightSettings.DISABLED };
    const NotificationLabel = guildId(dependencyMap[7]).NotificationLabel;
    const result = obj.updateGuildNotificationSettings(guildId, obj, NotificationLabel.highlights(!arg0));
  }, items);
  let obj = guildId(589);
  const items1 = [closure_6, closure_4];
  const items2 = [guildId];
  const stateFromStoresObject = obj.useStateFromStoresObject(items1, () => ({ guild: closure_1_4.getGuild(guildId), muted: closure_1_6.isMuted(guildId), notifyHighlights: closure_1_6.getNotifyHighlights(guildId) }), items2);
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
    obj[1] = jsx(GuildIconSizesDefault, { label: null, icon: null, value: null, onValueChange: null, start: null, end: null });
    obj[2] = !muted;
    obj[3] = callback;
    obj[4] = isStart;
    obj[5] = isEnd;
    return jsx(tmp2(7178).TableSwitchRow, { label: null, icon: null, value: null, onValueChange: null, start: null, end: null });
  }
  tmp2 = guildId;
}
let result = require("obj132").fileFinishedImporting("modules/user_settings/notifications/native/UserSettingsHighlightNotifications.tsx");

export default function UserSettingsHighlightNotifications() {
  let obj = stateFromStoresArray(589);
  const items = [closure_5];
  stateFromStoresArray = obj.useStateFromStoresArray(items, () => flattenedGuildIds.getFlattenedGuildIds());
  [][0] = stateFromStoresArray;
  let tmp4 = null;
  if (0 !== stateFromStoresArray.length) {
    obj = { children: null };
    obj[0] = tmp3;
    tmp4 = jsx(stateFromStoresArray(8083).Form, { children: null });
  }
  return tmp4;
};