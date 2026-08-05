import { NotificationSettingsModalActionCreators } from "../../../../../../actions/NotificationSettingsModalActionCreators.tsx";
import { getSystemLocale } from "../../../../../../intl/index.native.tsx";
import { UserNotificationSettings } from "../../../../../../utils/NotificationSettingsUtils.tsx";
import { computeChannelName } from "../../../../../channel/useChannelName.tsx";
// discord_app/modules/main_tabs_v2/native/sidebar/details/screens/MuteSettingsUtils.tsx
import storeThread from "storeThread";
import ensureGuildLoaded from "ensureGuildLoaded";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import upsertRelationship from "upsertRelationship";
import updateUserGuildSettingsInternal from "updateUserGuildSettingsInternal";
import mergeGuildAvatar from "mergeGuildAvatar";
import ME from "ME";
import { MuteUntilSeconds } from "MAX_FAVORITES";

let c10;
let unpackModuleId;
const require = arg1;
({ ChannelTypes: c10, UserNotificationSettings: unpackModuleId } = ME);
let result = require("createGuildRecordFromRust").fileFinishedImporting("modules/main_tabs_v2/native/sidebar/details/screens/MuteSettingsUtils.tsx");

export const getMuteSettingLabel = function getMuteSettingLabel(channel, guild) {
  if (null != channel) {
    if (channel.isPrivate()) {
      const intl5 = getSystemLocale /* getSystemLocale */.intl;
      let stringResult = intl5.string(getSystemLocale /* getSystemLocale */.t["Z/uD9+"]);
    } else if (channel.type === constants.GUILD_CATEGORY) {
      const intl4 = getSystemLocale /* getSystemLocale */.intl;
      stringResult = intl4.string(getSystemLocale /* getSystemLocale */.t.Z33kYz);
    } else if (channel.isForumPost()) {
      const intl3 = getSystemLocale /* getSystemLocale */.intl;
      stringResult = intl3.string(getSystemLocale /* getSystemLocale */.t.lbN8mz);
    } else {
      const intl2 = getSystemLocale /* getSystemLocale */.intl;
      const string = intl2.string;
      const t = getSystemLocale /* getSystemLocale */.t;
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
      const intl = getSystemLocale /* getSystemLocale */.intl;
      stringResult1 = intl.string(getSystemLocale /* getSystemLocale */.t.mvxGko);
    }
    return stringResult1;
  }
};
export const getMuteSettingSublabel = function getMuteSettingSublabel(channel, guild) {
  if (null != channel) {
    const obj = computeChannelName /* computeChannelName */;
    let name = obj.computeChannelName(channel, mergeGuildAvatar, upsertRelationship, true);
  } else if (null != guild) {
    name = guild.name;
  }
  return name;
};
export const handleUnmutePress = function handleUnmutePress(channelId, guildId) {
  const channel = store.getChannel(channelId);
  if (null != channel) {
    if (channel.isThread()) {
      let tmp7Result = tmp7(7144);
      const result = tmp7Result.setNotificationSettings(channel, { muted: false });
    } else {
      tmp7Result = tmp7(5230);
      const result1 = tmp7Result.updateChannelOverrideSettings(guildId, channel.id, { muted: false, mute_config: null }, UserNotificationSettings /* UserNotificationSettings */.NotificationLabels.Unmuted);
    }
  }
};
export const handleMuteSettingPress = function handleMuteSettingPress(arg0) {
  let channelId;
  let guildId;
  let muteDurationSeconds;
  let onOptionPress;
  ({ guildId, onOptionPress } = arg0);
  ({ channelId, muteDurationSeconds } = arg0);
  const muteSettings = importAll(9736).getMuteSettings(muteDurationSeconds);
  const channel = store.getChannel(channelId);
  guild = guild.getGuild(guildId);
  if (null != onOptionPress) {
    onOptionPress(muteSettings);
  } else if (null != channel) {
    if (channel.isThread()) {
      let tmp4Result = tmp4(7144);
      const result = tmp4Result.setNotificationSettings(channel, muteSettings);
    } else {
      tmp4Result = tmp4(5230);
      const result1 = tmp4Result.updateChannelOverrideSettings(guildId, channel.id, muteSettings, UserNotificationSettings /* UserNotificationSettings */.NotificationLabels.Muted);
    }
  } else if (null != guild) {
    const result2 = NotificationSettingsModalActionCreators.updateGuildNotificationSettings(guild.id, muteSettings, UserNotificationSettings /* UserNotificationSettings */.NotificationLabels.Muted);
    const obj5 = NotificationSettingsModalActionCreators;
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
      let muteConfig = storeThread.getMuteConfig(id.id);
      let isMutedResult = storeThread.isMuted(id.id);
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
    const intl3 = getSystemLocale /* getSystemLocale */.intl;
    return intl3.string(getSystemLocale /* getSystemLocale */.t.DZi15z);
  } else if (tmp.ONLY_MENTIONS === messageNotifications) {
    const intl2 = getSystemLocale /* getSystemLocale */.intl;
    return intl2.string(getSystemLocale /* getSystemLocale */.t.xGICju);
  } else if (tmp.NO_MESSAGES === messageNotifications) {
    const intl = getSystemLocale /* getSystemLocale */.intl;
    return intl.string(getSystemLocale /* getSystemLocale */.t.CtVGyQ);
  } else {
    return null;
  }
};
export const getMuteOptions = function getMuteOptions() {
  let obj = { label: null, duration: null };
  const intl = getSystemLocale /* getSystemLocale */.intl;
  obj[0] = intl.string(getSystemLocale /* getSystemLocale */.t["8ot6gv"]);
  obj[1] = MuteUntilSeconds.MINUTES_15;
  const items = [obj, , , , , ];
  obj = { label: null, duration: null };
  const intl2 = getSystemLocale /* getSystemLocale */.intl;
  obj[0] = intl2.string(getSystemLocale /* getSystemLocale */.t.UMWBZr);
  obj[1] = MuteUntilSeconds.HOURS_1;
  items[1] = obj;
  obj = { label: null, duration: null };
  const intl3 = getSystemLocale /* getSystemLocale */.intl;
  obj[0] = intl3.string(getSystemLocale /* getSystemLocale */.t.QmYWtu);
  obj[1] = MuteUntilSeconds.HOURS_3;
  items[2] = obj;
  const obj1 = { label: null, duration: null };
  const intl4 = getSystemLocale /* getSystemLocale */.intl;
  obj1[0] = intl4.string(getSystemLocale /* getSystemLocale */.t.EpAXPC);
  obj1[1] = MuteUntilSeconds.HOURS_8;
  items[3] = obj1;
  const obj2 = { label: null, duration: null };
  const intl5 = getSystemLocale /* getSystemLocale */.intl;
  obj2[0] = intl5.string(getSystemLocale /* getSystemLocale */.t["755t4q"]);
  obj2[1] = MuteUntilSeconds.HOURS_24;
  items[4] = obj2;
  const obj3 = { label: null, duration: null };
  const intl6 = getSystemLocale /* getSystemLocale */.intl;
  obj3[0] = intl6.string(getSystemLocale /* getSystemLocale */.t.r3LawO);
  obj3[1] = MuteUntilSeconds.ALWAYS;
  items[5] = obj3;
  return items;
};