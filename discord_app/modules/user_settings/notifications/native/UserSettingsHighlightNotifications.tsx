// === Module 15347: UserSettingsHighlightNotifications ===

// Module 15347 (UserSettingsHighlightNotifications)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1085 */;
import GuildIconDefault from "GuildIcon" /* 5971 */;
import NotificationSettingsUtils from "NotificationSettingsUtils" /* 6609 */;
import NotificationSettingsModalActionCreatorsDefault from "NotificationSettingsModalActionCreators" /* 6614 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 2074 */;
import SortedGuildStore from "SortedGuildStore" /* 5616 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 5071 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const HighlightSettings = Constants.HighlightSettings;
const jsx = Fragment.jsx;
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  let guild;
  let isEnd;
  let isStart;
  let muted;
  let tmp4;
  let tmp5;
  let tmp8;
  let tmp9;
  let obj = guildId(576);
  const cResult = obj.c(15);
  guildId = guildId.guildId;
  ({ isStart, isEnd } = guildId);
  if (cResult[0] !== guildId) {
    const fn = function n(arg0) {
      const updateGuildNotificationSettings = NotificationSettingsModalActionCreatorsDefault.updateGuildNotificationSettings;
      const obj = { notify_highlights: arg0 ? HighlightSettings.ENABLED : HighlightSettings.DISABLED };
      NotificationSettingsModalActionCreatorsDefault;
      const NotificationLabel = NotificationSettingsUtils.NotificationLabel;
      const result = updateGuildNotificationSettings(guildId, obj, NotificationLabel.highlights(!arg0));
    };
    cResult[0] = guildId;
    cResult[1] = fn;
    tmp4 = fn;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserGuildSettingsStore, GuildStore];
    cResult[2] = items;
    tmp5 = items;
  } else {
    tmp5 = cResult[2];
  }
  if (cResult[3] !== guildId) {
    const fn2 = function b() {
      const obj = { guild: GuildStore.getGuild(guildId), muted: UserGuildSettingsStore.isMuted(guildId), notifyHighlights: UserGuildSettingsStore.getNotifyHighlights(guildId) };
      return obj;
    };
    const items1 = [guildId];
    cResult[3] = guildId;
    cResult[4] = fn2;
    cResult[5] = items1;
    tmp9 = items1;
    tmp8 = fn2;
  } else {
    tmp8 = cResult[4];
    tmp9 = cResult[5];
  }
  const tmpResult = guildId(504);
  const stateFromStoresObject = tmpResult.useStateFromStoresObject(tmp5, tmp8, tmp9);
  ({ guild, muted } = stateFromStoresObject);
  let name1;
  const notifyHighlights = stateFromStoresObject.notifyHighlights;
  if (guild != null) {
    name1 = guild.name;
  }
  if (null == name1) {
    return null;
  } else {
    let tmp14;
    const name = guild.name;
    if (!muted) {
      muted = notifyHighlights === HighlightSettings.DISABLED;
    }
    if (cResult[6] !== guild) {
      const tmp17 = jsx(GuildIconDefault, { guild });
      cResult[6] = guild;
      cResult[7] = tmp17;
      tmp14 = tmp17;
    } else {
      tmp14 = cResult[7];
    }
    if (cResult[8] === tmp14) {
      if (cResult[9] === isEnd) {
        if (cResult[10] === isStart) {
          if (cResult[11] === name) {
            if (cResult[12] === tmp4) {
              let tmp18;
              if (cResult[13] === !muted) {
                tmp18 = cResult[14];
              }
              return tmp18;
            }
          }
        }
      }
    }
    const tmp20 = jsx(guildId(6698).TableSwitchRow, { label: name, icon: tmp14, value: !muted, onValueChange: tmp4, start: isStart, end: isEnd });
    cResult[8] = tmp14;
    cResult[9] = isEnd;
    cResult[10] = isStart;
    cResult[11] = name;
    cResult[12] = tmp4;
    cResult[13] = !muted;
    cResult[14] = tmp20;
    tmp18 = tmp20;
  }
}) : ((guildId) => {
  let guild;
  let isEnd;
  let isStart;
  let muted;
  guildId = guildId.guildId;
  const items = [guildId];
  ({ isStart, isEnd } = guildId);
  const callback = react.useCallback((arg0) => {
    const updateGuildNotificationSettings = NotificationSettingsModalActionCreatorsDefault.updateGuildNotificationSettings;
    const obj = { notify_highlights: arg0 ? HighlightSettings.ENABLED : HighlightSettings.DISABLED };
    NotificationSettingsModalActionCreatorsDefault;
    const NotificationLabel = NotificationSettingsUtils.NotificationLabel;
    const result = updateGuildNotificationSettings(guildId, obj, NotificationLabel.highlights(!arg0));
  }, items);
  const tmp2 = guildId;
  let obj = guildId(504);
  const items1 = [UserGuildSettingsStore, GuildStore];
  const items2 = [guildId];
  const stateFromStoresObject = obj.useStateFromStoresObject(items1, () => {
    const obj = { guild: GuildStore.getGuild(guildId), muted: UserGuildSettingsStore.isMuted(guildId), notifyHighlights: UserGuildSettingsStore.getNotifyHighlights(guildId) };
    return obj;
  }, items2);
  ({ guild, muted } = stateFromStoresObject);
  let name1;
  const notifyHighlights = stateFromStoresObject.notifyHighlights;
  if (guild != null) {
    name1 = guild.name;
  }
  if (null == name1) {
    return null;
  } else {
    const name = guild.name;
    if (!muted) {
      muted = notifyHighlights === HighlightSettings.DISABLED;
    }
    const tmp7 = !muted;
    jsx(GuildIconDefault, { guild });
    return jsx(tmp2(6698).TableSwitchRow, { label: name, icon: jsx(GuildIconDefault, { guild }), value: tmp7, onValueChange: callback, start: isStart, end: isEnd });
  }
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let flattenedGuildIds;
  let stateFromStoresArray;
  let tmp4;
  let tmp5;
  let tmp7;
  const obj = stateFromStoresArray(576);
  const cResult = obj.c(8);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SortedGuildStore];
    const fn = function l() {
      return flattenedGuildIds.getFlattenedGuildIds();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = stateFromStoresArray(504);
  stateFromStoresArray = tmpResult.useStateFromStoresArray(tmp4, tmp5);
  if (cResult[2] !== stateFromStoresArray) {
    let tmp8;
    if (cResult[4] !== stateFromStoresArray.length) {
      const fn2 = function c(guildId, arg1) {
        return <closure_9 key={guildId} guildId={guildId} isStart={0 === arg1} isEnd={arg1 === stateFromStoresArray.length - 1} />;
      };
      cResult[4] = stateFromStoresArray.length;
      cResult[5] = fn2;
      tmp8 = fn2;
    } else {
      tmp8 = cResult[5];
    }
    const mapped = stateFromStoresArray.map(tmp8);
    cResult[2] = stateFromStoresArray;
    cResult[3] = mapped;
    tmp7 = mapped;
  } else {
    tmp7 = cResult[3];
  }
  let tmp10 = null;
  if (0 !== stateFromStoresArray.length) {
    let tmp11;
    if (cResult[6] !== tmp7) {
      const tmp13 = jsx(stateFromStoresArray(8895).Form, { children: tmp7 });
      cResult[6] = tmp7;
      cResult[7] = tmp13;
      tmp11 = tmp13;
    } else {
      tmp11 = cResult[7];
    }
    tmp10 = tmp11;
  }
  return tmp10;
}) : (() => {
  let flattenedGuildIds;
  let stateFromStoresArray;
  const items = [SortedGuildStore];
  const obj = stateFromStoresArray(504);
  const tmp = stateFromStoresArray;
  stateFromStoresArray = obj.useStateFromStoresArray(items, () => flattenedGuildIds.getFlattenedGuildIds());
  [][0] = stateFromStoresArray;
  let tmp4 = null;
  if (0 !== stateFromStoresArray.length) {
    tmp4 = jsx(tmp(8895).Form, { children: tmp3 });
  }
  return tmp4;
});
let result = size.fileFinishedImporting("modules/user_settings/notifications/native/UserSettingsHighlightNotifications.tsx");

export default tmp2;