// === Module 15799: UserSettingsHighlightNotifications ===

// Module 15799 (UserSettingsHighlightNotifications)
import GuildIconDefault from "GuildIcon" /* 6158 */;
import NotificationSettingsUtils from "NotificationSettingsUtils" /* 6803 */;
import NotificationSettingsModalActionCreatorsDefault from "NotificationSettingsModalActionCreators" /* 6808 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 2087 */;
import SortedGuildStore from "SortedGuildStore" /* 5963 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 5966 */;

require = fn;
const HighlightSettings = fn(1085).HighlightSettings;
const jsx = fn(21).jsx;
let ReactCompilerGating = fn(558);
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? (function Row(guildId) {
  const cResult = guildId(576).c(15);
  guildId = guildId.guildId;
  ({ isStart, isEnd } = guildId);
  if (cResult[0] !== guildId) {
    const fn = function l(arg0) {
      const NotificationLabel = NotificationSettingsUtils.NotificationLabel;
      const result = NotificationSettingsModalActionCreatorsDefault.updateGuildNotificationSettings(guildId, { notify_highlights: arg0 ? HighlightSettings.ENABLED : HighlightSettings.DISABLED }, NotificationLabel.highlights(!arg0));
      const obj2 = { notify_highlights: arg0 ? HighlightSettings.ENABLED : HighlightSettings.DISABLED };
    };
    cResult[0] = guildId;
    cResult[1] = fn;
    let tmp4 = fn;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserGuildSettingsStore, GuildStore];
    cResult[2] = items;
    let tmp5 = items;
  } else {
    tmp5 = cResult[2];
  }
  if (cResult[3] !== guildId) {
    const fn2 = function b() {
      return { guild: GuildStore.getGuild(guildId), muted: UserGuildSettingsStore.isMuted(guildId), notifyHighlights: UserGuildSettingsStore.getNotifyHighlights(guildId) };
    };
    const items1 = [guildId];
    cResult[3] = guildId;
    cResult[4] = fn2;
    cResult[5] = items1;
    let tmp9 = items1;
    let tmp8 = fn2;
  } else {
    tmp8 = cResult[4];
    tmp9 = cResult[5];
  }
  let obj = guildId(576);
  const stateFromStoresObject = guildId(504).useStateFromStoresObject(tmp5, tmp8, tmp9);
  ({ guild, muted } = stateFromStoresObject);
  let name1;
  if (guild != null) {
    name1 = guild.name;
  }
  if (null == name1) {
    return null;
  } else {
    const name = guild.name;
    if (!muted) {
      muted = stateFromStoresObject.notifyHighlights === HighlightSettings.DISABLED;
    }
    if (cResult[6] !== guild) {
      let obj2 = { guild };
      const tmp17 = jsx(GuildIconDefault, { guild });
      cResult[6] = guild;
      cResult[7] = tmp17;
      let tmp14 = tmp17;
    } else {
      tmp14 = cResult[7];
    }
    if (cResult[8] === tmp14) {
      if (cResult[9] === isEnd) {
        if (cResult[10] === isStart) {
          if (cResult[11] === name) {
            if (cResult[12] === tmp4) {
              if (cResult[13] === tmp13) {
                let tmp18 = cResult[14];
              }
              return tmp18;
            }
          }
        }
      }
    }
    const obj3 = { label: name, icon: tmp14, value: !muted, onValueChange: tmp4, start: isStart, end: isEnd };
    const tmp20 = jsx(tmp(6895).TableSwitchRow, { label: name, icon: tmp14, value: !muted, onValueChange: tmp4, start: isStart, end: isEnd });
    cResult[8] = tmp14;
    cResult[9] = isEnd;
    cResult[10] = isStart;
    cResult[11] = name;
    cResult[12] = tmp4;
    cResult[13] = !muted;
    cResult[14] = tmp20;
    tmp18 = tmp20;
  }
  const tmpResult = guildId(504);
}) : (function Row(guildId) {
  guildId = guildId.guildId;
  const items = [guildId];
  ({ isStart, isEnd } = guildId);
  const callback = noop.useCallback((arg0) => {
    const NotificationLabel = NotificationSettingsUtils.NotificationLabel;
    const result = NotificationSettingsModalActionCreatorsDefault.updateGuildNotificationSettings(guildId, { notify_highlights: arg0 ? HighlightSettings.ENABLED : HighlightSettings.DISABLED }, NotificationLabel.highlights(!arg0));
    const obj2 = { notify_highlights: arg0 ? HighlightSettings.ENABLED : HighlightSettings.DISABLED };
  }, items);
  const items1 = [UserGuildSettingsStore, GuildStore];
  const items2 = [guildId];
  const stateFromStoresObject = guildId(504).useStateFromStoresObject(items1, () => ({ guild: GuildStore.getGuild(guildId), muted: UserGuildSettingsStore.isMuted(guildId), notifyHighlights: UserGuildSettingsStore.getNotifyHighlights(guildId) }), items2);
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
    const obj3 = { label: guild.name, icon: jsx(GuildIconDefault, { guild }), value: !muted, onValueChange: callback, start: isStart, end: isEnd };
    return jsx(tmp2(6895).TableSwitchRow, { label: guild.name, icon: jsx(GuildIconDefault, { guild }), value: !muted, onValueChange: callback, start: isStart, end: isEnd });
  }
  let obj = guildId(504);
  tmp2 = guildId;
});
ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/notifications/native/UserSettingsHighlightNotifications.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function UserSettingsHighlightNotifications() {
  let Form = stateFromStoresArray;
  let tmp = dependencyMap;
  const cResult = stateFromStoresArray(576).c(8);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SortedGuildStore];
    const fn = function n() {
      return flattenedGuildIds.getFlattenedGuildIds();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp3 = items;
    tmp4 = fn;
  } else {
    [tmp3, tmp4] = cResult;
  }
  const obj = stateFromStoresArray(576);
  stateFromStoresArray = Form(504).useStateFromStoresArray(tmp3, tmp4);
  if (cResult[2] !== stateFromStoresArray) {
    if (cResult[4] !== stateFromStoresArray.length) {
      const fn2 = function c(guildId, arg1) {
        return <closure_9 key={guildId} guildId={guildId} isStart={0 === arg1} isEnd={arg1 === stateFromStoresArray.length - 1} />;
      };
      cResult[4] = stateFromStoresArray.length;
      cResult[5] = fn2;
      let tmp7 = fn2;
    } else {
      tmp7 = cResult[5];
    }
    const mapped = stateFromStoresArray.map(tmp7);
    cResult[2] = stateFromStoresArray;
    cResult[3] = mapped;
  } else if (0 === stateFromStoresArray.length) {
    return null;
  } else if (cResult[6] !== tmp6) {
    Form = Form(8579).Form;
    const obj2 = { children: tmp6 };
    tmp = <Form>{tmp6}</Form>;
    cResult[6] = tmp6;
    cResult[7] = tmp;
  }
  const FormResult = Form(504);
}) : (function UserSettingsHighlightNotifications() {
  const items = [SortedGuildStore];
  stateFromStoresArray = stateFromStoresArray(504).useStateFromStoresArray(items, () => flattenedGuildIds.getFlattenedGuildIds());
  [][0] = stateFromStoresArray;
  let tmp4 = null;
  if (0 !== stateFromStoresArray.length) {
    const obj2 = { children: tmp3 };
    tmp4 = jsx(stateFromStoresArray(8579).Form, { children: tmp3 });
  }
  return tmp4;
});