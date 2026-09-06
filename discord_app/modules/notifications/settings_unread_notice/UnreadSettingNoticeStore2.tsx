// discord_app/modules/notifications/settings_unread_notice/UnreadSettingNoticeStore2.tsx
import SnowflakeUtilsDefault from "../../../utils/SnowflakeUtils.tsx";
import initializeDefault from "../../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../../Dispatcher.tsx";
import DurationsDefault from "../../../utils/Durations.tsx";
import FlagUtils from "../../../../discord_common/js/shared/utils/FlagUtils.tsx";
import notficationSettingsChannelFlagUtils from "../settings/utils/notficationSettingsChannelFlagUtils.tsx";
import AuthenticationStore from "../../../stores/AuthenticationStore.tsx";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import GuildStore from "../../../stores/GuildStore.tsx";
import SelectedChannelStore from "../../../stores/SelectedChannelStore.tsx";
import UserGuildSettingsStore from "../../../stores/UserGuildSettingsStore.tsx";

require = fn;
function startInterval() {
  if (0 !== interval) {
    const _clearInterval = clearInterval;
    clearInterval(interval);
    interval = 0;
  }
  if (UserGuildSettingsStore.useNewNotifications) {
    const _setInterval = setInterval;
    interval = setInterval(() => {
      let flag = false;
      if (null != closure_16) {
        flag = false;
        if (shouldTrackChannel(closure_16)) {
          if (!(closure_16 in closure_1_14.channels)) {
            closure_1_14.channels[closure_16] = { lastActionTime: 0, viewDuration: 0, numSends: 0 };
          }
          const _Date = Date;
          const timestamp = Date.now();
          if (closure_1_14.channels[closure_16].lastActionTime <= timestamp - DurationsDefault.Millis.DAY) {
            const _Date2 = Date;
            timestamp1 = Date.now();
            tmp5.lastActionTime = timestamp1;
            tmp5.viewDuration = tmp5.viewDuration + (timestamp1 - timestamp1);
            flag = true;
          } else {
            flag = false;
          }
        }
      }
      if (flag) {
        unreadSettingNoticeStore2Class.emitChange();
      }
    }, 15 * DurationsDefault.Millis.SECOND);
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
                let tmp9 = null != tmp7.message_notifications;
                if (tmp9) {
                  tmp9 = tmp7.message_notifications !== UserNotificationSettings.NULL;
                }
                if (!tmp9) {
                  let tmp11 = null == tmp7.flags;
                  if (!tmp11) {
                    tmp11 = !FlagUtils.hasAnyFlag(
                      tmp7.flags,
                      constants.UNREADS_ALL_MESSAGES | constants.UNREADS_ONLY_MENTIONS,
                    );
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
                  let tmp18 = null != tmp16.message_notifications;
                  if (tmp18) {
                    tmp18 = tmp16.message_notifications !== UserNotificationSettings.NULL;
                  }
                  if (!tmp18) {
                    let tmp20 = null == tmp16.flags;
                    if (!tmp20) {
                      tmp20 = !FlagUtils.hasAnyFlag(
                        tmp16.flags,
                        constants.UNREADS_ALL_MESSAGES | constants.UNREADS_ONLY_MENTIONS,
                      );
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
                return (
                  UserGuildSettingsStore.getChannelUnreadSetting(basicChannel.guild_id, basicChannel.id) ===
                    UnreadSetting.UNSET && unreadSetting !== UnreadSetting.ALL_MESSAGES
                );
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
const UserNotificationSettings = fn(1074).UserNotificationSettings;
const UnreadSetting = fn(4742).UnreadSetting;
const constants = fn(1084).ChannelNotificationSettingsFlags;
let obj = { timeSinceJoin: DurationsDefault.Millis.HOUR, sends: 1, viewTime: DurationsDefault.Millis.MINUTE };
let items = [obj, , ,];
obj = { timeSinceJoin: DurationsDefault.Millis.DAY, sends: 2, viewTime: 2 * DurationsDefault.Millis.MINUTE };
items[1] = obj;
obj = { timeSinceJoin: DurationsDefault.Millis.WEEK, sends: 5, viewTime: 5 * DurationsDefault.Millis.MINUTE };
items[2] = obj;
items[3] = { timeSinceJoin: DurationsDefault.Millis.DAYS_30, sends: 10, viewTime: 30 * DurationsDefault.Millis.MINUTE };
let closure_12 = 5 * items[items.length - 1].viewTime;
const WEEK = DurationsDefault.Millis.WEEK;
let closure_14 = { channels: {} };
const set = new Set();
let closure_16 = null;
let closure_17 = 0;
let closure_18 = 0;
const PersistedStore = initializeDefault.PersistedStore;
class UnreadSettingNoticeStore2Class extends PersistedStore {}
const prototype = UnreadSettingNoticeStore2Class.prototype;
prototype["initialize"] = function initialize(channels) {
  if (null != channels) {
    closure_14.channels = channels.channels;
  }
  items = [UserGuildSettingsStore];
  this.syncWith(items, startInterval);
  this.waitFor(AuthenticationStore, ChannelStore, GuildStore, SelectedChannelStore, UserGuildSettingsStore);
};
prototype["getState"] = function getState() {
  return closure_14;
};
prototype["getLastActionTime"] = function getLastActionTime(id) {
  let num;
  if (closure_14.channels[id] != null) {
    num = tmp.lastActionTime;
  }
  if (num == null) {
    num = 0;
  }
  return num;
};
prototype["maybeAutoUpgradeChannel"] = function maybeAutoUpgradeChannel(id) {
  if (shouldTrackChannel(id)) {
    const basicChannel = ChannelStore.getBasicChannel(id);
    let tmp6 = null != basicChannel && null != basicChannel.guild_id;
    if (tmp6) {
      let flag2 = (function isChannelNewEnough(basicChannel) {
        guild = guild.getGuild(basicChannel.guild_id);
        let joinedAt;
        if (guild != null) {
          joinedAt = guild.joinedAt;
        }
        if (joinedAt == null) {
          const _Date = Date;
          joinedAt = new Date();
        }
        SnowflakeUtilsDefault.age(basicChannel.id);
        const timestamp = Date.now();
        if (null == channels.channels[basicChannel.id]) {
          return false;
        } else {
          const _Date2 = Date;
          if (tmp9.lastActionTime < Date.now() - WEEK) {
            return false;
          } else {
            for (const item10040 of closure_1_11) {
              if (tmp8 < item10040.timeSinceJoin) {
                obj2.return();
                let flag = true;
                return true;
              }
              continue;
            }
            return false;
          }
        }
      })(basicChannel);
      if (flag2) {
        channels = channels.channels;
        delete tmp[tmp2];
        set.add(id);
        const result = notficationSettingsChannelFlagUtils.updateChannelUnreadSetting(
          basicChannel.guild_id,
          basicChannel.id,
          UnreadSetting.ALL_MESSAGES,
        );
        flag2 = true;
      }
      tmp6 = flag2;
    }
    return tmp6;
  } else {
    return false;
  }
};
UnreadSettingNoticeStore2Class.displayName = "UnreadSettingNoticeStore2";
UnreadSettingNoticeStore2Class.persistKey = "UnreadSettingNoticeStore2";
const unreadSettingNoticeStore2Class = new UnreadSettingNoticeStore2Class(DispatcherDefault, {
  CHANNEL_SELECT: function handleChannelSelect() {
    let flag = false;
    if (null != channelId) {
      flag = false;
      if (shouldTrackChannel(channelId)) {
        if (!(channelId in closure_14.channels)) {
          closure_14.channels[tmp3] = { lastActionTime: 0, viewDuration: 0, numSends: 0 };
        }
        const _Date = Date;
        const timestamp = Date.now();
        if (closure_14.channels[channelId].lastActionTime <= timestamp - DurationsDefault.Millis.DAY) {
          const _Date2 = Date;
          const timestamp1 = Date.now();
          tmp5.lastActionTime = timestamp1;
          tmp5.viewDuration = tmp5.viewDuration + (timestamp1 - closure_17);
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
    const channelId = SelectedChannelStore.getChannelId();
    let timestamp1 = Date.now();
    if (0 !== interval) {
      const _clearInterval = clearInterval;
      clearInterval(interval);
      interval = 0;
    }
    if (UserGuildSettingsStore.useNewNotifications) {
      const _setInterval = setInterval;
      interval = setInterval(() => {
        let flag = false;
        if (null != closure_16) {
          flag = false;
          if (shouldTrackChannel(closure_16)) {
            if (!(closure_16 in closure_1_14.channels)) {
              closure_1_14.channels[closure_16] = { lastActionTime: 0, viewDuration: 0, numSends: 0 };
            }
            const _Date = Date;
            const timestamp = Date.now();
            if (closure_1_14.channels[closure_16].lastActionTime <= timestamp - DurationsDefault.Millis.DAY) {
              const _Date2 = Date;
              timestamp1 = Date.now();
              tmp5.lastActionTime = timestamp1;
              tmp5.viewDuration = tmp5.viewDuration + (timestamp1 - timestamp1);
              flag = true;
            } else {
              flag = false;
            }
          }
        }
        if (flag) {
          unreadSettingNoticeStore2Class.emitChange();
        }
      }, 15 * DurationsDefault.Millis.SECOND);
    }
    closure_0 = Date.now() - WEEK;
    const item = SnowflakeUtilsDefault.forEach(closure_14.channels, (lastActionTime, arg1) => {
      if (lastActionTime.lastActionTime < closure_0) {
        const channels = closure_14.channels;
        delete tmp[tmp2];
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
  },
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/notifications/settings_unread_notice/UnreadSettingNoticeStore2.tsx");

export default unreadSettingNoticeStore2Class;
