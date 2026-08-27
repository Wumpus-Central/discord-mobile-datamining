// discord_app/modules/user_settings/notifications/native/UserSettingsHighlightNotifications.tsx
import GuildIconSizesDefault from "../../../guild/native/GuildIcon.tsx";
import closure_3 from "../../../../../_runtime/00019_noop.js";
import closure_4 from "../../../../stores/GuildStore.tsx";
import closure_5 from "../../../../stores/SortedGuildStore.tsx";
import closure_6 from "../../../../stores/UserGuildSettingsStore.tsx";
import { HighlightSettings } from "../../../../Constants.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";

const require = arg1;
function Row(guildId) {
  guildId = guildId.guildId;
  const items = [guildId];
  ({ isStart, isEnd } = guildId);
  const callback = React.useCallback((arg0) => {
    let obj = closure_1_1(closure_1_2[6]);
    obj = { notify_highlights: arg0 ? tmp3.ENABLED : tmp3.DISABLED };
    const NotificationLabel = guildId(closure_1_2[7]).NotificationLabel;
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
    return jsx(tmp2(5945).TableSwitchRow, { label: null, icon: null, value: null, onValueChange: null, start: null, end: null });
  }
  tmp2 = guildId;
}
let result = require("set").fileFinishedImporting("modules/user_settings/notifications/native/UserSettingsHighlightNotifications.tsx");

export default function UserSettingsHighlightNotifications() {
  let obj = stateFromStoresArray(589);
  const items = [closure_5];
  stateFromStoresArray = obj.useStateFromStoresArray(items, () => flattenedGuildIds.getFlattenedGuildIds());
  [][0] = stateFromStoresArray;
  let tmp4 = null;
  if (0 !== stateFromStoresArray.length) {
    obj = { children: null };
    obj[0] = tmp3;
    tmp4 = jsx(stateFromStoresArray(8295).Form, { children: null });
  }
  return tmp4;
};