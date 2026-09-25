// === Module 9590: MuteSettingsUtils ===

// Module 9590 (MuteSettingsUtils)
import util from "util" /* 1115 */;
import useChannelName from "useChannelName" /* 4982 */;
import NotificationSettingsUtils from "NotificationSettingsUtils" /* 6530 */;
import NotificationSettingsModalActionCreatorsDefault from "NotificationSettingsModalActionCreators" /* 6535 */;
import ThreadActionCreatorsDefault from "ThreadActionCreators" /* 7179 */;
import ChannelMuteUtilsAll from "ChannelMuteUtils" /* 9591 */;
import JoinedThreadsStore from "JoinedThreadsStore" /* 4468 */;
import ChannelStore from "ChannelStore" /* 2044 */;
import GuildStore from "GuildStore" /* 2066 */;
import RelationshipStore from "RelationshipStore" /* 4476 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 5010 */;
import UserStore from "UserStore" /* 1372 */;

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
      const result = ThreadActionCreatorsDefault.setNotificationSettings(channel, { muted: false });
      const tmp5Result = ThreadActionCreatorsDefault;
    } else {
      const obj = { guildId, channelId: channel.id, settings: { muted: false, mute_config: null }, label: NotificationSettingsUtils.NotificationLabels.Unmuted };
      const result1 = NotificationSettingsModalActionCreatorsDefault.updateChannelOverrideSettings(obj);
      const tmp5Result2 = NotificationSettingsModalActionCreatorsDefault;
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
      const result = ThreadActionCreatorsDefault.setNotificationSettings(channel, muteSettings);
      const tmp4Result = ThreadActionCreatorsDefault;
    } else {
      const obj2 = { guildId, channelId: channel.id, settings: muteSettings, label: NotificationSettingsUtils.NotificationLabels.Muted };
      const result1 = NotificationSettingsModalActionCreatorsDefault.updateChannelOverrideSettings(obj2);
      const tmp4Result2 = NotificationSettingsModalActionCreatorsDefault;
    }
  } else if (null != guild) {
    const result2 = NotificationSettingsModalActionCreatorsDefault.updateGuildNotificationSettings(guild.id, muteSettings, NotificationSettingsUtils.NotificationLabels.Muted);
  }
};
export const getMuteSettings = function getMuteSettings(channelId) {
  let id = ChannelStore.getChannel(channelId);
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
  } else if (constants2.ONLY_MENTIONS === messageNotifications) {
    const intl2 = util.intl;
    return intl2.string(util.t.xGICju);
  } else if (constants2.NO_MESSAGES === messageNotifications) {
    const intl = util.intl;
    return intl.string(util.t.CtVGyQ);
  } else {
    return null;
  }
};
export const getMuteOptions = function getMuteOptions() {
  const obj = { label: null, duration: null };
  const intl = util.intl;
  obj.label = intl.string(util.t["8ot6gv"]);
  obj.duration = MuteUntilSeconds.MINUTES_15;
  const items = [obj, , , , , ];
  const obj2 = { label: null, duration: null };
  const intl2 = util.intl;
  obj2.label = intl2.string(util.t.UMWBZr);
  obj2.duration = MuteUntilSeconds.HOURS_1;
  items[1] = obj2;
  const obj3 = { label: null, duration: null };
  const intl3 = util.intl;
  obj3.label = intl3.string(util.t.QmYWtu);
  obj3.duration = MuteUntilSeconds.HOURS_3;
  items[2] = obj3;
  const obj4 = { label: null, duration: null };
  const intl4 = util.intl;
  obj4.label = intl4.string(util.t.EpAXPC);
  obj4.duration = MuteUntilSeconds.HOURS_8;
  items[3] = obj4;
  const obj5 = { label: null, duration: null };
  const intl5 = util.intl;
  obj5.label = intl5.string(util.t["755t4q"]);
  obj5.duration = MuteUntilSeconds.HOURS_24;
  items[4] = obj5;
  const obj6 = { label: null, duration: null };
  const intl6 = util.intl;
  obj6.label = intl6.string(util.t.r3LawO);
  obj6.duration = MuteUntilSeconds.ALWAYS;
  items[5] = obj6;
  return items;
};