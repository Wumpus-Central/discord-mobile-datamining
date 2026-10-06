// === Module 9863: UnreadSettingNoticeStore2 ===

// Module 9863 (UnreadSettingNoticeStore2)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1085 */;
import UserSettingsConstants from "UserSettingsConstants" /* 1095 */;
import DurationsDefault from "Durations" /* 1102 */;
import FlagUtils from "FlagUtils" /* 1390 */;
import ReadStateConstants from "ReadStateConstants" /* 5078 */;
import notficationSettingsChannelFlagUtils from "notficationSettingsChannelFlagUtils" /* 9864 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import GuildStore from "GuildStore" /* 2074 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2103 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 5077 */;
import size from "module_2" /* 2 */;

let guild;

const f102008 = () => {
  let flag = false;
  if (null != closure_16) {
    flag = false;
    if (shouldTrackChannel(closure_16)) {
      if (!(closure_16 in channels.channels)) {
        channels.channels[closure_16] = { lastActionTime: 0, viewDuration: 0, numSends: 0 };
      }
      const _Date = Date;
      const lastActionTime = tmp5.lastActionTime;
      const timestamp = Date.now();
      if (lastActionTime <= timestamp - DurationsDefault.Millis.DAY) {
        const _Date2 = Date;
        timestamp1 = Date.now();
        channels.channels[closure_16].lastActionTime = timestamp1;
        channels.channels[closure_16].viewDuration = channels.channels[closure_16].viewDuration + (timestamp1 - timestamp1);
        flag = true;
      } else {
        flag = false;
      }
    }
  }
  if (flag) {
    unreadSettingNoticeStore2Class.emitChange();
  }
};
function startInterval() {
  let interval;
  if (0 !== interval) {
    const _clearInterval = clearInterval;
    clearInterval(interval);
    interval = 0;
  }
  if (UserGuildSettingsStore.useNewNotifications) {
    const _setInterval = setInterval;
    interval = setInterval(f102008, 15 * DurationsDefault.Millis.SECOND);
  }
  return false;
}
function shouldTrackChannel(channelId) {
  if (UserGuildSettingsStore.useNewNotifications) {
    if (set.has(channelId)) {
      return false;
    } else {
      const basicChannel = ChannelStore.getBasicChannel(channelId);
      if (null != basicChannel) {
        if (null != basicChannel.guild_id) {
          if (UserGuildSettingsStore.isGuildOrCategoryOrChannelMuted(basicChannel.guild_id, basicChannel.id)) {
            return false;
          } else {
            const id = basicChannel.id;
            let flag2 = false;
            if (null != id) {
              const tmp7 = UserGuildSettingsStore.getChannelOverrides(tmp6)[id];
              let tmp8 = null != tmp7;
              if (tmp8) {
                let tmp9 = null != tmp7.message_notifications && tmp7.message_notifications !== UserNotificationSettings.NULL;
                if (!tmp9) {
                  let tmp11 = null == tmp7.flags;
                  if (!tmp11) {
                    const obj2 = FlagUtils;
                    tmp11 = !obj2.hasAnyFlag(tmp7.flags, constants.UNREADS_ALL_MESSAGES | constants.UNREADS_ONLY_MENTIONS);
                  }
                  tmp9 = !tmp11;
                }
                tmp8 = tmp9;
              }
              flag2 = tmp8;
            }
            if (flag2) {
              return false;
            } else {
              const parent_id = basicChannel.parent_id;
              let flag3 = false;
              if (null != parent_id) {
                const tmp16 = UserGuildSettingsStore.getChannelOverrides(tmp15)[parent_id];
                let tmp17 = null != tmp16;
                if (tmp17) {
                  let tmp18 = null != tmp16.message_notifications && tmp16.message_notifications !== UserNotificationSettings.NULL;
                  if (!tmp18) {
                    let tmp20 = null == tmp16.flags;
                    if (!tmp20) {
                      const obj3 = FlagUtils;
                      tmp20 = !obj3.hasAnyFlag(tmp16.flags, constants.UNREADS_ALL_MESSAGES | constants.UNREADS_ONLY_MENTIONS);
                    }
                    tmp18 = !tmp20;
                  }
                  tmp17 = tmp18;
                }
                flag3 = tmp17;
              }
              if (flag3) {
                return false;
              } else {
                const unreadSetting = UserGuildSettingsStore.resolveUnreadSetting(basicChannel);
                const tmp25 = UserGuildSettingsStore.getChannelUnreadSetting(basicChannel.guild_id, basicChannel.id) === UnreadSetting.UNSET && unreadSetting !== UnreadSetting.ALL_MESSAGES;
                return tmp25;
              }
            }
          }
        }
      }
      return false;
    }
  } else {
    return false;
  }
}
const UserNotificationSettings = Constants.UserNotificationSettings;
const UnreadSetting = ReadStateConstants.UnreadSetting;
const constants = UserSettingsConstants.ChannelNotificationSettingsFlags;
let obj = { timeSinceJoin: DurationsDefault.Millis.HOUR, sends: 1, viewTime: DurationsDefault.Millis.MINUTE };
let items = [obj, , , ];
let obj2 = { timeSinceJoin: DurationsDefault.Millis.DAY, sends: 2, viewTime: 2 * DurationsDefault.Millis.MINUTE };
items[1] = obj2;
let obj3 = { timeSinceJoin: DurationsDefault.Millis.WEEK, sends: 5, viewTime: 5 * DurationsDefault.Millis.MINUTE };
items[2] = obj3;
items[3] = { timeSinceJoin: DurationsDefault.Millis.DAYS_30, sends: 10, viewTime: 30 * DurationsDefault.Millis.MINUTE };
let closure_12 = 5 * items[items.length - 1].viewTime;
({ timeSinceJoin: DurationsDefault.Millis.DAYS_30, sends: 10, viewTime: 30 * DurationsDefault.Millis.MINUTE });
const WEEK = DurationsDefault.Millis.WEEK;
const authStore2 = { channels: {} };
const set = new Set();
let closure_16 = null;
let closure_17 = 0;
let closure_18 = 0;
const PersistedStore = get_initializedDefault.PersistedStore;
class UnreadSettingNoticeStore2Class extends PersistedStore {
  initialize(channels) {
    if (null != channels) {
      closure_14.channels = channels.channels;
    }
    items = [UserGuildSettingsStore];
    this.syncWith(items, startInterval);
    this.waitFor(AuthenticationStore, ChannelStore, GuildStore, SelectedChannelStore, UserGuildSettingsStore);
  }
  getState() {
    return closure_14;
  }
  getLastActionTime(id) {
    let num;
    if (closure_14.channels[id] != null) {
      num = tmp.lastActionTime;
    }
    if (num == null) {
      num = 0;
    }
    return num;
  }
  maybeAutoUpgradeChannel(id) {
    let channels;
    function isChannelNewEnough(basicChannel) {
      guild = guild.getGuild(basicChannel.guild_id);
      let joinedAt;
      if (guild != null) {
        joinedAt = guild.joinedAt;
      }
      if (joinedAt == null) {
        const _Date = Date;
        const self = this;
        const self2 = this;
        joinedAt = new Date();
      }
      const obj = SnowflakeUtilsDefault;
      obj.age(basicChannel.id);
      const timestamp = Date.now();
      if (null == channels.channels[basicChannel.id]) {
        return false;
      } else {
        const _Date2 = Date;
        if (channels.channels[basicChannel.id].lastActionTime < Date.now() - WEEK) {
          return false;
        } else {
          for (const item10040 of items) {
            if (tmp6 < item10040.timeSinceJoin) {
              obj2.return();
              let flag = true;
              return true;
            }
            continue;
          }
          return false;
        }
      }
    }
    const tmp = id;
    if (shouldTrackChannel(id)) {
      const basicChannel = ChannelStore.getBasicChannel(id);
      let tmp5 = null != basicChannel && null != basicChannel.guild_id;
      if (tmp5) {
        let flag2 = isChannelNewEnough(basicChannel);
        if (flag2) {
          delete channels.channels[tmp];
          set.add(id);
          let obj = notficationSettingsChannelFlagUtils;
          const result = obj.updateChannelUnreadSetting(basicChannel.guild_id, basicChannel.id, UnreadSetting.ALL_MESSAGES);
          flag2 = true;
        }
        tmp5 = flag2;
      }
      return tmp5;
    } else {
      let flag = false;
      return false;
    }
  }
}
const prototype = UnreadSettingNoticeStore2Class.prototype;
UnreadSettingNoticeStore2Class.displayName = "UnreadSettingNoticeStore2";
UnreadSettingNoticeStore2Class.persistKey = "UnreadSettingNoticeStore2";
const obj5 = {
  CHANNEL_SELECT: function handleChannelSelect() {
    let channelId;
    let flag = false;
    if (null != channelId) {
      flag = false;
      if (shouldTrackChannel(channelId)) {
        if (!(channelId in closure_14.channels)) {
          closure_14.channels[channelId] = { lastActionTime: 0, viewDuration: 0, numSends: 0 };
        }
        const _Date = Date;
        const lastActionTime = tmp5.lastActionTime;
        const timestamp = Date.now();
        if (lastActionTime <= timestamp - DurationsDefault.Millis.DAY) {
          const _Date2 = Date;
          const timestamp1 = Date.now();
          closure_14.channels[channelId].lastActionTime = timestamp1;
          closure_14.channels[channelId].viewDuration = closure_14.channels[channelId].viewDuration + (timestamp1 - closure_17);
          closure_17 = timestamp1;
          flag = true;
        } else {
          flag = false;
        }
      }
    }
    channelId = SelectedChannelStore.getChannelId();
    closure_17 = Date.now();
    return flag;
  },
  CONNECTION_OPEN: function handleConnectionOpen() {
    let interval;
    const channelId = SelectedChannelStore.getChannelId();
    let timestamp1 = Date.now();
    if (0 !== interval) {
      const _clearInterval = clearInterval;
      clearInterval(interval);
      interval = 0;
    }
    if (UserGuildSettingsStore.useNewNotifications) {
      const _setInterval = setInterval;
      interval = setInterval(f102008, 15 * DurationsDefault.Millis.SECOND);
    }
    let closure_0 = Date.now() - WEEK;
    const arr = SnowflakeUtilsDefault;
    const item = arr.forEach(channels.channels, (lastActionTime, arg1) => {
      if (lastActionTime.lastActionTime < closure_0) {
        delete closure_14.channels[arg1];
      }
    });
  },
  MESSAGE_CREATE: function handleMessageCreate(optimistic) {
    if (!optimistic.optimistic) {
      if (!optimistic.isPushNotification) {
        const author = optimistic.message.author;
        let id;
        if (author != null) {
          id = author.id;
        }
        if (id !== AuthenticationStore.getId()) {
          return false;
        } else if (shouldTrackChannel(optimistic.channelId)) {
          const channelId = optimistic.channelId;
          if (!(channelId in closure_14.channels)) {
            closure_14.channels[channelId] = { lastActionTime: 0, viewDuration: 0, numSends: 0 };
          }
          const _Date = Date;
          closure_14.channels[channelId].lastActionTime = Date.now();
          closure_14.channels[channelId].numSends = closure_14.channels[channelId].numSends + 1;
        } else {
          return false;
        }
      }
    }
    return false;
  }
};
const unreadSettingNoticeStore2Class = new UnreadSettingNoticeStore2Class(DispatcherDefault, obj5);
let result = size.fileFinishedImporting("modules/notifications/settings_unread_notice/UnreadSettingNoticeStore2.tsx");

export default unreadSettingNoticeStore2Class;