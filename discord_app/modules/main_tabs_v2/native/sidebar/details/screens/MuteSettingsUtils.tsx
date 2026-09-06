// === Module 9057: MuteSettingsUtils ===

// Module 9057 (MuteSettingsUtils)
import util from "util" /* 1114 */;
import useChannelName from "useChannelName" /* 4713 */;
import NotificationSettingsUtils from "NotificationSettingsUtils" /* 7114 */;
import NotificationSettingsModalActionCreatorsDefault from "NotificationSettingsModalActionCreators" /* 7119 */;
import ChannelMuteUtilsAll from "ChannelMuteUtils" /* 9058 */;
import JoinedThreadsStore from "JoinedThreadsStore" /* 4201 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import GuildStore from "GuildStore" /* 1979 */;
import RelationshipStore from "RelationshipStore" /* 4209 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 4741 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
const Constants = fn(1074);
({ ChannelTypes: c10, UserNotificationSettings: closure_11 } = Constants);
const MuteUntilSeconds = fn(1084).MuteUntilSeconds;
const size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/sidebar/details/screens/MuteSettingsUtils.tsx");

export const getMuteSettingLabel = function getMuteSettingLabel(channel, guild) {
  if (null != channel) {
    if (channel.isPrivate()) {
      const intl5 = util.intl;
      let stringResult = intl5.string(util.t["Z/uD9+"]);
    } else if (channel.type === constants.GUILD_CATEGORY) {
      const intl4 = util.intl;
      stringResult = intl4.string(util.t.Z33kYz);
    } else if (channel.isForumPost()) {
      const intl3 = util.intl;
      stringResult = intl3.string(util.t.lbN8mz);
    } else {
      const intl2 = util.intl;
      const string = intl2.string;
      const t = util.t;
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
      const intl = util.intl;
      stringResult1 = intl.string(util.t.mvxGko);
    }
    return stringResult1;
  }
};
export const getMuteSettingSublabel = function getMuteSettingSublabel(channel, guild) {
  if (null != channel) {
    const obj = useChannelName;
    let name = obj.computeChannelName(channel, UserStore, RelationshipStore, true);
  } else if (null != guild) {
    name = guild.name;
  }
  return name;
};
export const handleUnmutePress = function handleUnmutePress(channelId, guildId) {
  const channel = ChannelStore.getChannel(channelId);
  if (null != channel) {
    if (channel.isThread()) {
      let tmp7Result = tmp7(7765);
      const result = tmp7Result.setNotificationSettings(channel, { muted: false });
    } else {
      tmp7Result = tmp7(7119);
      const result1 = tmp7Result.updateChannelOverrideSettings(guildId, channel.id, { muted: false, mute_config: null }, NotificationSettingsUtils.NotificationLabels.Unmuted);
    }
  }
};
export const handleMuteSettingPress = function handleMuteSettingPress(arg0) {
  ({ guildId, onOptionPress } = arg0);
  ({ channelId, muteDurationSeconds } = arg0);
  const muteSettings = ChannelMuteUtilsAll.getMuteSettings(muteDurationSeconds);
  const channel = ChannelStore.getChannel(channelId);
  const guild = GuildStore.getGuild(guildId);
  if (null != onOptionPress) {
    onOptionPress(muteSettings);
  } else if (null != channel) {
    if (channel.isThread()) {
      let tmp4Result = tmp4(7765);
      const result = tmp4Result.setNotificationSettings(channel, muteSettings);
    } else {
      tmp4Result = tmp4(7119);
      const result1 = tmp4Result.updateChannelOverrideSettings(guildId, channel.id, muteSettings, NotificationSettingsUtils.NotificationLabels.Muted);
    }
  } else if (null != guild) {
    const result2 = NotificationSettingsModalActionCreatorsDefault.updateGuildNotificationSettings(guild.id, muteSettings, NotificationSettingsUtils.NotificationLabels.Muted);
  }
};
export const getMuteSettings = function getMuteSettings(arg0) {
  let id = ChannelStore.getChannel(arg0);
  if (null == id) {
    const obj = { muteConfig: undefined, muted: undefined, messageNotifications: undefined, guildMuted: undefined, guildMessageNotifications: undefined };
    return obj;
  } else {
    const guildId = id.getGuildId();
    if (id.isThread()) {
      let muteConfig = JoinedThreadsStore.getMuteConfig(id.id);
      let isMutedResult = JoinedThreadsStore.isMuted(id.id);
    } else {
      muteConfig = UserGuildSettingsStore.getChannelMuteConfig(guildId, id.id);
      isMutedResult = UserGuildSettingsStore.isChannelMuted(guildId, id.id);
    }
    id = id.id;
    const channelMessageNotifications = UserGuildSettingsStore.getChannelMessageNotifications(guildId, id);
    UserGuildSettingsStore.isMuted(guildId);
    const messageNotifications = UserGuildSettingsStore.getMessageNotifications(guildId);
  }
};
export const getMessageNotificationsText = function getMessageNotificationsText(messageNotifications) {
  if (constants2.ALL_MESSAGES === messageNotifications) {
    const intl3 = util.intl;
    return intl3.string(util.t.DZi15z);
  } else if (tmp.ONLY_MENTIONS === messageNotifications) {
    const intl2 = util.intl;
    return intl2.string(util.t.xGICju);
  } else if (tmp.NO_MESSAGES === messageNotifications) {
    const intl = util.intl;
    return intl.string(util.t.CtVGyQ);
  } else {
    return null;
  }
};
export const getMuteOptions = function getMuteOptions() {
  let obj = { label: null, duration: null };
  const intl = util.intl;
  obj.label = intl.string(util.t["8ot6gv"]);
  obj.duration = MuteUntilSeconds.MINUTES_15;
  const items = [obj, , , , , ];
  obj = { label: null, duration: null };
  const intl2 = util.intl;
  obj.label = intl2.string(util.t.UMWBZr);
  obj.duration = MuteUntilSeconds.HOURS_1;
  items[1] = obj;
  obj = { label: null, duration: null };
  const intl3 = util.intl;
  obj.label = intl3.string(util.t.QmYWtu);
  obj.duration = MuteUntilSeconds.HOURS_3;
  items[2] = obj;
  const obj1 = { label: null, duration: null };
  const intl4 = util.intl;
  obj1.label = intl4.string(util.t.EpAXPC);
  obj1.duration = MuteUntilSeconds.HOURS_8;
  items[3] = obj1;
  const obj2 = { label: null, duration: null };
  const intl5 = util.intl;
  obj2.label = intl5.string(util.t["755t4q"]);
  obj2.duration = MuteUntilSeconds.HOURS_24;
  items[4] = obj2;
  const obj3 = { label: null, duration: null };
  const intl6 = util.intl;
  obj3.label = intl6.string(util.t.r3LawO);
  obj3.duration = MuteUntilSeconds.ALWAYS;
  items[5] = obj3;
  return items;
};