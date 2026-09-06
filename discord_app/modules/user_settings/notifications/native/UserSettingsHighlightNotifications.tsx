// === Module 15520: UserSettingsHighlightNotifications ===

// Module 15520 (UserSettingsHighlightNotifications)
import GuildIconDefault from "GuildIcon" /* 5584 */;
import NotificationSettingsUtils from "NotificationSettingsUtils" /* 7114 */;
import NotificationSettingsModalActionCreatorsDefault from "NotificationSettingsModalActionCreators" /* 7119 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 1979 */;
import SortedGuildStore from "SortedGuildStore" /* 5438 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 4741 */;

require = fn;
function Row(guildId) {
  guildId = guildId.guildId;
  const items = [guildId];
  ({ isStart, isEnd } = guildId);
  const callback = noop.useCallback((arg0) => {
    const obj = { notify_highlights: arg0 ? HighlightSettings.ENABLED : HighlightSettings.DISABLED };
    const NotificationLabel = NotificationSettingsUtils.NotificationLabel;
    const result = obj.updateGuildNotificationSettings(guildId, obj, NotificationLabel.highlights(!arg0));
  }, items);
  let obj = guildId(504);
  const items1 = [UserGuildSettingsStore, GuildStore];
  const items2 = [guildId];
  const stateFromStoresObject = obj.useStateFromStoresObject(items1, () => ({ guild: GuildStore.getGuild(guildId), muted: UserGuildSettingsStore.isMuted(guildId), notifyHighlights: UserGuildSettingsStore.getNotifyHighlights(guildId) }), items2);
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
    obj = { guild };
    obj = { label: guild.name, icon: null, value: null, onValueChange: null, start: null, end: null };
    obj.icon = jsx(GuildIconDefault, { label: guild.name, icon: null, value: null, onValueChange: null, start: null, end: null });
    obj.value = !muted;
    obj.onValueChange = callback;
    obj.start = isStart;
    obj.end = isEnd;
    return jsx(tmp2(7201).TableSwitchRow, { label: guild.name, icon: null, value: null, onValueChange: null, start: null, end: null });
  }
  tmp2 = guildId;
}
const HighlightSettings = fn(1074).HighlightSettings;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/notifications/native/UserSettingsHighlightNotifications.tsx");

export default function UserSettingsHighlightNotifications() {
  let obj = stateFromStoresArray(504);
  const items = [SortedGuildStore];
  stateFromStoresArray = obj.useStateFromStoresArray(items, () => flattenedGuildIds.getFlattenedGuildIds());
  [][0] = stateFromStoresArray;
  let tmp4 = null;
  if (0 !== stateFromStoresArray.length) {
    obj = { children: tmp3 };
    tmp4 = jsx(stateFromStoresArray(8593).Form, { children: tmp3 });
  }
  return tmp4;
};