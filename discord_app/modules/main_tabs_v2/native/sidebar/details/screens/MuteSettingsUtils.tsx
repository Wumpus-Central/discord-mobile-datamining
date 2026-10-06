// === Module 9813: MuteSettingsUtils ===

// Module 9813 (MuteSettingsUtils)
import UserSettingsConstants from "UserSettingsConstants" /* 1095 */;
import intl7 from "intl" /* 1126 */;
import useChannelName from "useChannelName" /* 5049 */;
import NotificationSettingsUtils from "NotificationSettingsUtils" /* 6616 */;
import NotificationSettingsModalActionCreatorsDefault from "NotificationSettingsModalActionCreators" /* 6621 */;
import ThreadActionCreatorsDefault from "ThreadActionCreators" /* 7274 */;
import ChannelMuteUtilsAll from "ChannelMuteUtils" /* 9814 */;
import JoinedThreadsStore from "JoinedThreadsStore" /* 4517 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import GuildStore from "GuildStore" /* 2074 */;
import RelationshipStore from "RelationshipStore" /* 4525 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 5077 */;
import UserStore from "UserStore" /* 1377 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

let c10;
let unpackModuleId;
({ ChannelTypes: c10, UserNotificationSettings: unpackModuleId } = Constants);
const MuteUntilSeconds = UserSettingsConstants.MuteUntilSeconds;
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/sidebar/details/screens/MuteSettingsUtils.tsx");

export const getMuteSettingLabel = function getMuteSettingLabel(stateFromStores, stateFromStores1) {
  let stringResult1;
  if (null != stateFromStores) {
    let stringResult;
    if (stateFromStores.isPrivate()) {
      const intl5 = intl7.intl;
      stringResult = intl5.string(intl7.t["Z/uD9+"]);
    } else if (stateFromStores.type === constants.GUILD_CATEGORY) {
      const intl4 = intl7.intl;
      stringResult = intl4.string(intl7.t.Z33kYz);
    } else if (stateFromStores.isForumPost()) {
      const intl3 = intl7.intl;
      stringResult = intl3.string(intl7.t.lbN8mz);
    } else {
      const isThreadResult = stateFromStores.isThread();
      const intl2 = intl7.intl;
      const string = intl2.string;
      const t = intl7.t;
      if (isThreadResult) {
        stringResult = string(t["wR+Fuo"]);
      } else {
        stringResult = string(t.OsNx14);
      }
    }
    stringResult1 = stringResult;
  } else if (null != stateFromStores1) {
    const intl = intl7.intl;
    stringResult1 = intl.string(intl7.t.mvxGko);
  }
  return stringResult1;
};
export const getMuteSettingSublabel = function getMuteSettingSublabel(stateFromStores, stateFromStores1) {
  let name;
  if (null != stateFromStores) {
    const obj = useChannelName;
    name = obj.computeChannelName(stateFromStores, UserStore, RelationshipStore, true);
  } else if (null != stateFromStores1) {
    name = stateFromStores1.name;
  }
  return name;
};
export const handleUnmutePress = function handleUnmutePress(channelId, guildId) {
  const channel = ChannelStore.getChannel(channelId);
  if (null != channel) {
    if (channel.isThread()) {
      const tmp6Result = ThreadActionCreatorsDefault;
      const result = tmp6Result.setNotificationSettings(channel, { muted: false });
    } else {
      const obj = { guildId, channelId: channel.id, settings: { muted: false, mute_config: null }, label: NotificationSettingsUtils.NotificationLabels.Unmuted };
      const updateChannelOverrideSettings = NotificationSettingsModalActionCreatorsDefault.updateChannelOverrideSettings;
      NotificationSettingsModalActionCreatorsDefault;
      const result1 = updateChannelOverrideSettings(obj);
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
  const obj = ChannelMuteUtilsAll;
  const muteSettings = obj.getMuteSettings(muteDurationSeconds);
  const channel = ChannelStore.getChannel(channelId);
  const guild = GuildStore.getGuild(guildId);
  if (null != onOptionPress) {
    onOptionPress(muteSettings);
  } else if (null != channel) {
    if (channel.isThread()) {
      const tmp4Result = ThreadActionCreatorsDefault;
      const result = tmp4Result.setNotificationSettings(channel, muteSettings);
    } else {
      const obj2 = { guildId, channelId: channel.id, settings: muteSettings, label: NotificationSettingsUtils.NotificationLabels.Muted };
      const updateChannelOverrideSettings = NotificationSettingsModalActionCreatorsDefault.updateChannelOverrideSettings;
      NotificationSettingsModalActionCreatorsDefault;
      const result1 = updateChannelOverrideSettings(obj2);
    }
  } else if (null != guild) {
    const obj5 = NotificationSettingsModalActionCreatorsDefault;
    const result2 = obj5.updateGuildNotificationSettings(guild.id, muteSettings, NotificationSettingsUtils.NotificationLabels.Muted);
  }
};
export const getMuteSettings = function getMuteSettings(channelId) {
  const channel = ChannelStore.getChannel(channelId);
  let guildMessageNotifications;
  let guildMuted;
  let messageNotifications1;
  let muted;
  let muteConfig2;
  if (null != channel) {
    let muteConfig;
    let isMutedResult;
    const guildId = channel.getGuildId();
    if (channel.isThread()) {
      muteConfig = JoinedThreadsStore.getMuteConfig(channel.id);
      isMutedResult = JoinedThreadsStore.isMuted(channel.id);
    } else {
      muteConfig = UserGuildSettingsStore.getChannelMuteConfig(guildId, channel.id);
      isMutedResult = UserGuildSettingsStore.isChannelMuted(guildId, channel.id);
    }
    messageNotifications1 = UserGuildSettingsStore.getChannelMessageNotifications(guildId, channel.id);
    guildMuted = UserGuildSettingsStore.isMuted(guildId);
    guildMessageNotifications = UserGuildSettingsStore.getMessageNotifications(guildId);
    muted = isMutedResult;
    muteConfig2 = muteConfig;
  }
  return { muteConfig: muteConfig2, muted, messageNotifications: messageNotifications1, guildMuted, guildMessageNotifications };
};
export const getMessageNotificationsText = function getMessageNotificationsText(messageNotifications) {
  if (unpackModuleId.ALL_MESSAGES === messageNotifications) {
    const intl3 = intl7.intl;
    return intl3.string(intl7.t.DZi15z);
  } else if (unpackModuleId.ONLY_MENTIONS === messageNotifications) {
    const intl2 = intl7.intl;
    return intl2.string(intl7.t.xGICju);
  } else if (unpackModuleId.NO_MESSAGES === messageNotifications) {
    const intl = intl7.intl;
    return intl.string(intl7.t.CtVGyQ);
  } else {
    return null;
  }
};
export const getMuteOptions = function getMuteOptions() {
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  const obj = { label: intl.string(intl7.t["8ot6gv"]), duration: MuteUntilSeconds.MINUTES_15 };
  intl = intl7.intl;
  const items = [obj, , , , , ];
  const obj2 = { label: intl2.string(intl7.t.UMWBZr), duration: MuteUntilSeconds.HOURS_1 };
  intl2 = intl7.intl;
  items[1] = obj2;
  const obj3 = { label: intl3.string(intl7.t.QmYWtu), duration: MuteUntilSeconds.HOURS_3 };
  intl3 = intl7.intl;
  items[2] = obj3;
  const obj4 = { label: intl4.string(intl7.t.EpAXPC), duration: MuteUntilSeconds.HOURS_8 };
  intl4 = intl7.intl;
  items[3] = obj4;
  const obj5 = { label: intl5.string(intl7.t["755t4q"]), duration: MuteUntilSeconds.HOURS_24 };
  intl5 = intl7.intl;
  items[4] = obj5;
  const obj6 = { label: intl6.string(intl7.t.r3LawO), duration: MuteUntilSeconds.ALWAYS };
  intl6 = intl7.intl;
  items[5] = obj6;
  return items;
};