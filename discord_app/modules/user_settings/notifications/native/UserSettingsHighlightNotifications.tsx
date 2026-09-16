// discord_app/modules/user_settings/notifications/native/UserSettingsHighlightNotifications.tsx
import GuildIconDefault from "../../../guild/native/GuildIcon.tsx";
import NotificationSettingsUtils from "../../../../utils/NotificationSettingsUtils.tsx";
import NotificationSettingsModalActionCreatorsDefault from "../../../../actions/NotificationSettingsModalActionCreators.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import GuildStore from "../../../../stores/GuildStore.tsx";
import SortedGuildStore from "../../../../stores/SortedGuildStore.tsx";
import UserGuildSettingsStore from "../../../../stores/UserGuildSettingsStore.tsx";

require = fn;
function Row(guildId) {
  guildId = guildId.guildId;
  const items = [guildId];
  ({ isStart, isEnd } = guildId);
  const callback = noop.useCallback((arg0) => {
    const NotificationLabel = NotificationSettingsUtils.NotificationLabel;
    const result = NotificationSettingsModalActionCreatorsDefault.updateGuildNotificationSettings(
      guildId,
      { notify_highlights: arg0 ? HighlightSettings.ENABLED : HighlightSettings.DISABLED },
      NotificationLabel.highlights(!arg0),
    );
    const obj2 = { notify_highlights: arg0 ? HighlightSettings.ENABLED : HighlightSettings.DISABLED };
  }, items);
  const items1 = [UserGuildSettingsStore, GuildStore];
  const items2 = [guildId];
  const stateFromStoresObject = guildId(504).useStateFromStoresObject(
    items1,
    () => ({
      guild: GuildStore.getGuild(guildId),
      muted: UserGuildSettingsStore.isMuted(guildId),
      notifyHighlights: UserGuildSettingsStore.getNotifyHighlights(guildId),
    }),
    items2,
  );
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
    let obj2 = { guild };
    const obj3 = {
      label: guild.name,
      icon: jsx(GuildIconDefault, { guild }),
      value: !muted,
      onValueChange: callback,
      start: isStart,
      end: isEnd,
    };
    return jsx(tmp2(7310).TableSwitchRow, {
      label: guild.name,
      icon: jsx(GuildIconDefault, { guild }),
      value: !muted,
      onValueChange: callback,
      start: isStart,
      end: isEnd,
    });
  }
  let obj = guildId(504);
  tmp2 = guildId;
}
const HighlightSettings = fn(1074).HighlightSettings;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting(
  "modules/user_settings/notifications/native/UserSettingsHighlightNotifications.tsx",
);

export default function UserSettingsHighlightNotifications() {
  const items = [SortedGuildStore];
  stateFromStoresArray = stateFromStoresArray(504).useStateFromStoresArray(items, () =>
    flattenedGuildIds.getFlattenedGuildIds(),
  );
  [][0] = stateFromStoresArray;
  let tmp4 = null;
  if (0 !== stateFromStoresArray.length) {
    const obj2 = { children: tmp3 };
    tmp4 = jsx(stateFromStoresArray(8728).Form, { children: tmp3 });
  }
  return tmp4;
}
