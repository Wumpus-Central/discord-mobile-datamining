// === Module 10984: startInterval ===

// Module 10984 (startInterval)
import DISCORD_EPOCHDefault from "DISCORD_EPOCH" /* 11 */;
import initializeDefault from "initialize" /* 589 */;
import setDefault from "set" /* 687 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import hasFlag from "hasFlag" /* 1403 */;
import useChannelPresetSettings from "useChannelPresetSettings" /* 10170 */;
import closure_3 from "fetchFingerprint" /* 1218 */;
import closure_4 from "ensureGuildLoaded" /* 1391 */;
import closure_5 from "createGuildRecordFromRust" /* 1910 */;
import closure_6 from "handleConnectionOpen" /* 1982 */;
import closure_7 from "updateUserGuildSettingsInternal" /* 4667 */;
import { UserNotificationSettings } from "ME" /* 676 */;
import { UnreadSetting } from "ReadStateTypes" /* 4668 */;
import { ChannelNotificationSettingsFlags as closure_10 } from "MAX_FAVORITES" /* 685 */;
import set from "set" /* 2 */;

require = arg1;
function startInterval() {
  if (0 !== interval) {
    const _clearInterval = clearInterval;
    clearInterval(interval);
    interval = 0;
  }
  if (closure_7.useNewNotifications) {
    const _setInterval = setInterval;
    interval = setInterval(() => {
      let flag = false;
      if (null != closure_16) {
        flag = false;
        if (callback2(closure_16)) {
          if (!(closure_16 in channels.channels)) {
            tmp4.channels[tmp3] = { lastActionTime: 0, viewDuration: 0, numSends: 0 };
          }
          const _Date = Date;
          const timestamp = Date.now();
          if (channels.channels[closure_16].lastActionTime <= timestamp - callback(table[8]).Millis.DAY) {
            const _Date2 = Date;
            const timestamp1 = Date.now();
            tmp5.lastActionTime = timestamp1;
            tmp5.viewDuration = tmp5.viewDuration + (timestamp1 - timestamp1);
            flag = true;
          } else {
            flag = false;
          }
        }
      }
      if (flag) {
        closure_21.emitChange();
      }
    }, 15 * setDefault.Millis.SECOND);
  }
  return false;
}
function shouldTrackChannel(channelId) {
  if (closure_7.useNewNotifications) {
    if (set.has(channelId)) {
      return false;
    } else {
      const basicChannel = store.getBasicChannel(channelId);
      if (null != basicChannel) {
        if (null != basicChannel.guild_id) {
          if (obj.isGuildOrCategoryOrChannelMuted(basicChannel.guild_id, basicChannel.id)) {
            return false;
          } else {
            const id = basicChannel.id;
            let flag2 = false;
            if (null != id) {
              const tmp7 = obj.getChannelOverrides(tmp6)[id];
              let tmp8 = null != tmp7;
              if (tmp8) {
                let tmp9 = null != tmp7.message_notifications;
                if (tmp9) {
                  tmp9 = tmp7.message_notifications !== UserNotificationSettings.NULL;
                }
                if (!tmp9) {
                  let tmp11 = null == tmp7.flags;
                  if (!tmp11) {
                    tmp11 = !hasFlag.hasAnyFlag(tmp7.flags, constants.UNREADS_ALL_MESSAGES | constants.UNREADS_ONLY_MENTIONS);
                    const obj2 = hasFlag;
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
                const tmp16 = obj.getChannelOverrides(tmp15)[parent_id];
                let tmp17 = null != tmp16;
                if (tmp17) {
                  let tmp18 = null != tmp16.message_notifications;
                  if (tmp18) {
                    tmp18 = tmp16.message_notifications !== UserNotificationSettings.NULL;
                  }
                  if (!tmp18) {
                    let tmp20 = null == tmp16.flags;
                    if (!tmp20) {
                      tmp20 = !hasFlag.hasAnyFlag(tmp16.flags, constants.UNREADS_ALL_MESSAGES | constants.UNREADS_ONLY_MENTIONS);
                      const obj3 = hasFlag;
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
                const unreadSetting = obj.resolveUnreadSetting(basicChannel);
                return obj.getChannelUnreadSetting(basicChannel.guild_id, basicChannel.id) === UnreadSetting.UNSET && unreadSetting !== UnreadSetting.ALL_MESSAGES;
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
let obj = { timeSinceJoin: setDefault.Millis.HOUR, sends: 1, viewTime: setDefault.Millis.MINUTE };
let items = [obj, , , ];
obj = { timeSinceJoin: setDefault.Millis.DAY, sends: 2, viewTime: 2 * setDefault.Millis.MINUTE };
items[1] = obj;
obj = { timeSinceJoin: setDefault.Millis.WEEK, sends: 5, viewTime: 5 * setDefault.Millis.MINUTE };
items[2] = obj;
items[3] = { timeSinceJoin: setDefault.Millis.DAYS_30, sends: 10, viewTime: 30 * setDefault.Millis.MINUTE };
let closure_12 = 5 * items[items.length - 1].viewTime;
const WEEK = setDefault.Millis.WEEK;
let closure_14 = { channels: {} };
let set = new Set();
let c16 = null;
let c17 = 0;
let c18 = 0;
const PersistedStore = initializeDefault.PersistedStore;
class UnreadSettingNoticeStore2Class extends PersistedStore {
}
const prototype = UnreadSettingNoticeStore2Class.prototype;
prototype["initialize"] = function initialize(channels) {
  if (null != channels) {
    closure_14.channels = channels.channels;
  }
  items = [closure_7];
  this.syncWith(items, startInterval);
  this.waitFor(closure_3, closure_4, closure_5, closure_6, closure_7);
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
    const basicChannel = store.getBasicChannel(id);
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
        callback(table[9]).age(basicChannel.id);
        const timestamp = Date.now();
        if (null == channels.channels[basicChannel.id]) {
          return false;
        } else {
          const _Date2 = Date;
          if (tmp9.lastActionTime < Date.now() - closure_13) {
            return false;
          } else {
            for (const item10040 of closure_11) {
              let tmp12 = item10040;
              if (tmp8 < item10040.timeSinceJoin) {
                let tmp13 = item10040;
                if (tmp9.numSends < tmp12.sends) {
                  let tmp14 = item10040;
                }
                let tmp15 = obj2;
                obj2.return();
                let flag = true;
                return true;
              }
              continue;
            }
            return false;
          }
        }
        const obj = callback(table[9]);
      })(basicChannel);
      if (flag2) {
        const channels = closure_14.channels;
        delete tmp[tmp2];
        set.add(id);
        const result = useChannelPresetSettings.updateChannelUnreadSetting(basicChannel.guild_id, basicChannel.id, UnreadSetting.ALL_MESSAGES);
        flag2 = true;
        let obj = useChannelPresetSettings;
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
const unreadSettingNoticeStore2Class = new UnreadSettingNoticeStore2Class(dispatcherDefault, {
  CHANNEL_SELECT: function handleChannelSelect() {
    let flag = false;
    if (null != channelId) {
      flag = false;
      if (shouldTrackChannel(channelId)) {
        if (!(channelId in closure_14.channels)) {
          tmp4.channels[tmp3] = { lastActionTime: 0, viewDuration: 0, numSends: 0 };
        }
        const _Date = Date;
        const timestamp = Date.now();
        if (closure_14.channels[channelId].lastActionTime <= timestamp - setDefault.Millis.DAY) {
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
    channelId = store2.getChannelId();
    closure_17 = Date.now();
    return flag;
  },
  CONNECTION_OPEN: function handleConnectionOpen() {
    const channelId = store2.getChannelId();
    closure_17 = Date.now();
    if (0 !== interval) {
      const _clearInterval = clearInterval;
      clearInterval(interval);
      interval = 0;
    }
    if (closure_7.useNewNotifications) {
      const _setInterval = setInterval;
      interval = setInterval(() => {
        let flag = false;
        if (null != closure_16) {
          flag = false;
          if (callback2(closure_16)) {
            if (!(closure_16 in channels.channels)) {
              tmp4.channels[tmp3] = { lastActionTime: 0, viewDuration: 0, numSends: 0 };
            }
            const _Date = Date;
            const timestamp = Date.now();
            if (channels.channels[closure_16].lastActionTime <= timestamp - callback(table[8]).Millis.DAY) {
              const _Date2 = Date;
              const timestamp1 = Date.now();
              tmp5.lastActionTime = timestamp1;
              tmp5.viewDuration = tmp5.viewDuration + (timestamp1 - timestamp1);
              flag = true;
            } else {
              flag = false;
            }
          }
        }
        if (flag) {
          closure_21.emitChange();
        }
      }, 15 * setDefault.Millis.SECOND);
    }
    closure_0 = Date.now() - WEEK;
    const item = DISCORD_EPOCHDefault.forEach(closure_14.channels, (lastActionTime) => {
      if (lastActionTime.lastActionTime < closure_0) {
        const channels = closure_1_14.channels;
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
        if (id !== id.getId()) {
          return false;
        } else if (shouldTrackChannel(optimistic.channelId)) {
          const channelId = optimistic.channelId;
          if (!(channelId in closure_14.channels)) {
            tmp5.channels[channelId] = { lastActionTime: 0, viewDuration: 0, numSends: 0 };
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
});
let result = set.fileFinishedImporting("modules/notifications/settings_unread_notice/UnreadSettingNoticeStore2.tsx");

export default unreadSettingNoticeStore2Class;