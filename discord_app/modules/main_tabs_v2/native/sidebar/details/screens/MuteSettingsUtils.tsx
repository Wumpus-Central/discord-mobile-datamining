// === Module 10187: getMuteSettingLabel ===

// Module 10187 (getMuteSettingLabel)
import getSystemLocale from "getSystemLocale" /* 1236 */;
import computeChannelName from "computeChannelName" /* 4642 */;
import UserNotificationSettings from "UserNotificationSettings" /* 5450 */;
import _modDef5455 from "module_5455" /* 5455 */;
import getMuteSettingsAll from "getMuteSettings" /* 10188 */;
import closure_4 from "storeThread" /* 4093 */;
import closure_5 from "ensureGuildLoaded" /* 1387 */;
import closure_6 from "createGuildRecordFromRust" /* 1909 */;
import closure_7 from "markAllUserIdListsStale" /* 4100 */;
import closure_8 from "updateUserGuildSettingsInternal" /* 4669 */;
import closure_9 from "mergeGuildAvatar" /* 1922 */;
import ME from "ME" /* 676 */;
import { MuteUntilSeconds } from "MAX_FAVORITES" /* 685 */;

require = arg1;
({ ChannelTypes: c10, UserNotificationSettings: unpackModuleId } = ME);
let result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/sidebar/details/screens/MuteSettingsUtils.tsx");

export const getMuteSettingLabel = function getMuteSettingLabel(channel, guild) {
  if (null != channel) {
    if (channel.isPrivate()) {
      const intl5 = getSystemLocale.intl;
      let stringResult = intl5.string(getSystemLocale.t["Z/uD9+"]);
    } else if (channel.type === constants.GUILD_CATEGORY) {
      const intl4 = getSystemLocale.intl;
      stringResult = intl4.string(getSystemLocale.t.Z33kYz);
    } else if (channel.isForumPost()) {
      const intl3 = getSystemLocale.intl;
      stringResult = intl3.string(getSystemLocale.t.lbN8mz);
    } else {
      const intl2 = getSystemLocale.intl;
      const string = intl2.string;
      const t = getSystemLocale.t;
      if (isThreadResult) {
        stringResult = string(t["wR+Fuo"]);
      } else {
        stringResult = string(t.OsNx14);
      }
      isThreadResult = channel.isThread();
    }
  } else {
    let stringResult1;
    if (null != guild) {
      const intl = getSystemLocale.intl;
      stringResult1 = intl.string(getSystemLocale.t.mvxGko);
    }
    return stringResult1;
  }
};
export const getMuteSettingSublabel = function getMuteSettingSublabel(channel, guild) {
  if (null != channel) {
    const obj = computeChannelName;
    let name = obj.computeChannelName(channel, closure_9, closure_7, true);
  } else if (null != guild) {
    name = guild.name;
  }
  return name;
};
export const handleUnmutePress = function handleUnmutePress(channelId, guildId) {
  const channel = store.getChannel(channelId);
  if (null != channel) {
    if (channel.isThread()) {
      let tmp7Result = tmp7(7477);
      const result = tmp7Result.setNotificationSettings(channel, { muted: false });
    } else {
      tmp7Result = tmp7(5455);
      const result1 = tmp7Result.updateChannelOverrideSettings(guildId, channel.id, { muted: false, mute_config: null }, UserNotificationSettings.NotificationLabels.Unmuted);
    }
  }
};
export const handleMuteSettingPress = function handleMuteSettingPress(arg0) {
  ({ guildId, onOptionPress } = arg0);
  ({ channelId, muteDurationSeconds } = arg0);
  const muteSettings = getMuteSettingsAll.getMuteSettings(muteDurationSeconds);
  const channel = store.getChannel(channelId);
  guild = guild.getGuild(guildId);
  if (null != onOptionPress) {
    onOptionPress(muteSettings);
  } else if (null != channel) {
    if (channel.isThread()) {
      let tmp4Result = tmp4(7477);
      const result = tmp4Result.setNotificationSettings(channel, muteSettings);
    } else {
      tmp4Result = tmp4(5455);
      const result1 = tmp4Result.updateChannelOverrideSettings(guildId, channel.id, muteSettings, UserNotificationSettings.NotificationLabels.Muted);
    }
  } else if (null != guild) {
    const result2 = _modDef5455.updateGuildNotificationSettings(guild.id, muteSettings, UserNotificationSettings.NotificationLabels.Muted);
    const obj5 = _modDef5455;
  }
};
export const getMuteSettings = function getMuteSettings(arg0) {
  let id = store.getChannel(arg0);
  if (null == id) {
    const obj = { muteConfig: null, muted: null, messageNotifications: null, guildMuted: null, guildMessageNotifications: null };
    obj[0] = undefined;
    obj[1] = undefined;
    obj[2] = undefined;
    obj[3] = undefined;
    obj[4] = undefined;
    return obj;
  } else {
    const guildId = id.getGuildId();
    if (id.isThread()) {
      let muteConfig = closure_4.getMuteConfig(id.id);
      let isMutedResult = closure_4.isMuted(id.id);
    } else {
      muteConfig = store2.getChannelMuteConfig(guildId, id.id);
      isMutedResult = store2.isChannelMuted(guildId, id.id);
    }
    id = id.id;
    const channelMessageNotifications = store2.getChannelMessageNotifications(guildId, id);
    store2.isMuted(guildId);
    const messageNotifications = store2.getMessageNotifications(guildId);
  }
};
export const getMessageNotificationsText = function getMessageNotificationsText(messageNotifications) {
  if (constants2.ALL_MESSAGES === messageNotifications) {
    const intl3 = getSystemLocale.intl;
    return intl3.string(getSystemLocale.t.DZi15z);
  } else if (tmp.ONLY_MENTIONS === messageNotifications) {
    const intl2 = getSystemLocale.intl;
    return intl2.string(getSystemLocale.t.xGICju);
  } else if (tmp.NO_MESSAGES === messageNotifications) {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.CtVGyQ);
  } else {
    return null;
  }
};
export const getMuteOptions = function getMuteOptions() {
  let obj = { label: null, duration: null };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t["8ot6gv"]);
  obj[1] = MuteUntilSeconds.MINUTES_15;
  const items = [obj, , , , , ];
  obj = { label: null, duration: null };
  const intl2 = getSystemLocale.intl;
  obj[0] = intl2.string(getSystemLocale.t.UMWBZr);
  obj[1] = MuteUntilSeconds.HOURS_1;
  items[1] = obj;
  obj = { label: null, duration: null };
  const intl3 = getSystemLocale.intl;
  obj[0] = intl3.string(getSystemLocale.t.QmYWtu);
  obj[1] = MuteUntilSeconds.HOURS_3;
  items[2] = obj;
  obj1 = { label: null, duration: null };
  const intl4 = getSystemLocale.intl;
  obj1[0] = intl4.string(getSystemLocale.t.EpAXPC);
  obj1[1] = MuteUntilSeconds.HOURS_8;
  items[3] = obj1;
  const obj2 = { label: null, duration: null };
  const intl5 = getSystemLocale.intl;
  obj2[0] = intl5.string(getSystemLocale.t["755t4q"]);
  obj2[1] = MuteUntilSeconds.HOURS_24;
  items[4] = obj2;
  const obj3 = { label: null, duration: null };
  const intl6 = getSystemLocale.intl;
  obj3[0] = intl6.string(getSystemLocale.t.r3LawO);
  obj3[1] = MuteUntilSeconds.ALWAYS;
  items[5] = obj3;
  return items;
};