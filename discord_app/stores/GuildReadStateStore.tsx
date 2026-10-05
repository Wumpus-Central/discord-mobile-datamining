// === Module 7121: GuildReadStateStore ===

// Module 7121 (GuildReadStateStore)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import _modDef12 from "module_12" /* 12 */;
import Constants from "Constants" /* 1085 */;
import ChannelConstants from "ChannelConstants" /* 2058 */;
import FavoritesUtils from "FavoritesUtils" /* 2077 */;
import ThreadActionUtils from "ThreadActionUtils" /* 4517 */;
import isOptInEnabled from "isOptInEnabled" /* 7046 */;
import RecentMentionsStore from "RecentMentionsStore" /* 7122 */;
import NotificationCenterItemsStore from "NotificationCenterItemsStore" /* 7124 */;
import ActiveJoinedThreadsStore from "ActiveJoinedThreadsStore" /* 5691 */;
import JoinedThreadsStore from "JoinedThreadsStore" /* 4511 */;
import ChannelRecord from "ChannelRecord" /* 2055 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import GuildStore from "GuildStore" /* 2074 */;
import MobileCacheSnapshotStore from "MobileCacheSnapshotStore" /* 1084 */;
import PermissionStore from "PermissionStore" /* 4509 */;
import ReadStateStore from "ReadStateStore" /* 4905 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2103 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 5071 */;
import UserStore from "UserStore" /* 1377 */;
import ReadStateConstants from "ReadStateConstants" /* 5072 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let count, importDefault;

let c9;
let closure_19;
let closure_20;
let metroImportAll;
let metroImportDefault;
function updateGuildUnreadSentinel(NULL_STRING_GUILD_ID) {
  let num;
  let tmp = NULL_STRING_GUILD_ID;
  let tmp3 = NULL_STRING_GUILD_ID;
  if (NULL_STRING_GUILD_ID == null) {
    tmp3 = NULL_STRING_GUILD_ID;
  }
  let tmp5 = tmp;
  if (tmp == null) {
    tmp5 = NULL_STRING_GUILD_ID;
  }
  let tmp6 = guilds[tmp5];
  if (tmp6 == null) {
    if (tmp == null) {
      tmp = NULL_STRING_GUILD_ID;
    }
    const obj = { unread: false, unreadByType: {}, unreadChannelId: null, lowImportanceMentionCount: 0, highImportanceMentionCount: 0, mentionCounts: {}, ncMentionCount: 0, sentinel: num };
    num = undefined;
    if (guilds[tmp] != null) {
      num = tmp8.sentinel;
    }
    if (num == null) {
      num = 0;
    }
    tmp6 = obj;
  }
  guilds[tmp3] = tmp6;
  tmp6.sentinel = tmp6.sentinel + 1;
  closure_24 = closure_24 + 1;
}
function isCountableChannel(channel) {
  let num = mentionCount;
  if (mentionCount === undefined) {
    num = 0;
  }
  if (null == channel) {
    return false;
  } else {
    if (channel.isGuildVocal()) {
      if (0 === num) {
        return false;
      }
    }
    if (channel.hasFlag(ChannelFlags.IS_GUILD_RESOURCE_CHANNEL)) {
      return false;
    } else {
      if (0 === num) {
        let result;
        if (channel.isThread()) {
          result = JoinedThreadsStore.isMuted(channel.id) || UserGuildSettingsStore.isGuildOrCategoryOrChannelMuted(channel.guild_id, channel.parent_id);
          const isMutedResult = JoinedThreadsStore.isMuted(channel.id) || UserGuildSettingsStore.isGuildOrCategoryOrChannelMuted(channel.guild_id, channel.parent_id);
        } else {
          result = UserGuildSettingsStore.isGuildOrCategoryOrChannelMuted(channel.guild_id, channel.id);
        }
        if (result) {
          return false;
        }
      }
      if (!channel.isPrivate()) {
        const obj = isOptInEnabled;
        let result1 = obj.isOptInEnabledForGuild(channel.guild_id);
        let tmp11 = null != channel.guild_id;
        if (tmp11) {
          if (result1) {
            const result2 = React4(channel.type) || UserGuildSettingsStore.isChannelRecordOrParentOptedIn(channel);
            result1 = !result2;
          }
          if (result1) {
            result1 = tmp2;
          }
          tmp11 = result1;
        }
        if (tmp11) {
          return false;
        } else if (!PermissionStore.can(channel.accessPermissions, channel)) {
          return false;
        }
      }
      const tmp16 = num > 0 || UserGuildSettingsStore.resolveUnreadSetting(channel) === constants2.ALL_MESSAGES;
      return tmp16;
    }
  }
}
function updateNotificationCenterMentions(mentionCounts, mentionCounts2) {
  let c1;
  const f94258 = (item) => {
    const _ackMessageId = notifCenterReadState1._ackMessageId;
    const lastMessageIdResult = ReadStateStore.lastMessageId(item);
    const obj = c1(notifCenterReadState[18]);
    if (obj.compare(lastMessageIdResult, _ackMessageId) > 0) {
      closure_1 = closure_1 + mentionCounts.mentionCounts[item].count;
    }
  };
  if (!NotificationCenterItemsStore.tabFocused) {
    let closure_0 = mentionCounts;
    importDefault = 0;
    const currentUser = UserStore.getCurrentUser();
    let notifCenterReadState;
    if (null != currentUser) {
      notifCenterReadState = ReadStateStore.getNotifCenterReadState(currentUser.id);
    }
    if (null != notifCenterReadState) {
      const obj2 = require("SnowflakeUtils");
      const keys = obj2.keys(mentionCounts.mentionCounts);
      const item = keys.forEach(f94258);
    }
    closure_0 = mentionCounts2;
    let closure_1 = 0;
    const currentUser1 = UserStore.getCurrentUser();
    let notifCenterReadState1;
    const tmp10 = importDefault;
    if (null != currentUser1) {
      notifCenterReadState1 = ReadStateStore.getNotifCenterReadState(currentUser1.id);
    }
    const tmp14 = null == mentionCounts2 || null == notifCenterReadState1;
    if (!tmp14) {
      const obj3 = require("SnowflakeUtils");
      const keys1 = obj3.keys(mentionCounts2.mentionCounts);
      const item1 = keys1.forEach(f94258);
    }
    let num2;
    const _Math = Math;
    const tmp18 = closure_1;
    if (mentionCounts2 != null) {
      num2 = mentionCounts2.ncMentionCount;
    }
    if (num2 == null) {
      num2 = 0;
    }
    mentionCounts.ncMentionCount = max(num2 + (tmp10 - tmp18), 0);
  }
}
function aggregateGuildState(guild_id, unreadByType, unread) {
  let closure_0 = unreadByType;
  const entries = Object.entries(unreadByType.unreadByType);
  unreadByType.unread = entries.some((item) => {
    let tmp;
    let tmp2;
    [tmp, tmp2] = item;
    const tmp3 = Number(tmp) !== constants.GUILD_EVENT && tmp2;
    return tmp3;
  });
  unreadByType.lowImportanceMentionCount = 0;
  unreadByType.highImportanceMentionCount = 0;
  const arr = SnowflakeUtilsDefault;
  const item = arr.forEach(unreadByType.mentionCounts, (count) => {
    count = count.count;
    if (count.isMentionLowImportance) {
      closure_0.lowImportanceMentionCount = closure_0.lowImportanceMentionCount + count;
    } else {
      closure_0.highImportanceMentionCount = closure_0.highImportanceMentionCount + count;
    }
  });
  let flag = unreadByType.unread !== unread.unread || unreadByType.lowImportanceMentionCount !== unread.lowImportanceMentionCount || unreadByType.highImportanceMentionCount !== unread.highImportanceMentionCount;
  if (flag) {
    let tmp2 = guild_id;
    let tmp5 = guild_id;
    if (guild_id == null) {
      tmp5 = NULL_STRING_GUILD_ID;
    }
    guilds[tmp5] = unreadByType;
    if (null != tmp2) {
      if (unreadByType.unread) {
        set.add(tmp2);
      } else {
        set.delete(tmp2);
      }
    }
    closure_24 = closure_24 + 1;
    if (tmp2 == null) {
      tmp2 = NULL_STRING_GUILD_ID;
    }
    updateGuildUnreadSentinel(tmp2);
    updateNotificationCenterMentions(unreadByType, unread);
    flag = true;
  }
  return flag;
}
function recountChannels(guildId, items) {
  let num;
  let num2;
  let obj3;
  let obj4;
  let tmp = guildId;
  if (NULL_STRING_GUILD_ID !== guildId) {
    const tmp3 = null;
    let closure_0 = tmp;
    let tmp6 = tmp;
    if (tmp == null) {
      tmp6 = NULL_STRING_GUILD_ID;
    }
    let tmp8 = tmp;
    if (tmp == null) {
      tmp8 = NULL_STRING_GUILD_ID;
    }
    let tmp9 = guilds[tmp8];
    if (tmp9 == null) {
      let tmp11 = tmp;
      if (tmp == null) {
        tmp11 = NULL_STRING_GUILD_ID;
      }
      const obj = { unread: false, unreadByType: {}, unreadChannelId: null, lowImportanceMentionCount: 0, highImportanceMentionCount: 0, mentionCounts: {}, ncMentionCount: 0, sentinel: num };
      num = undefined;
      if (guilds[tmp11] != null) {
        num = tmp12.sentinel;
      }
      if (num == null) {
        num = 0;
      }
      tmp9 = obj;
    }
    guilds[tmp6] = tmp9;
    let tmp14 = tmp;
    if (tmp == null) {
      tmp14 = NULL_STRING_GUILD_ID;
    }
    let obj2 = { unread: false, unreadByType: obj4, unreadChannelId: null, lowImportanceMentionCount: 0, highImportanceMentionCount: 0, mentionCounts: obj3, ncMentionCount: 0, sentinel: num2 };
    num2 = undefined;
    if (guilds[tmp14] != null) {
      num2 = tmp15.sentinel;
    }
    if (num2 == null) {
      num2 = 0;
    }
    obj3 = {};
    const merged = Object.assign(tmp9.mentionCounts);
    obj4 = {};
    const merged1 = Object.assign(tmp9.unreadByType);
    let c2 = false;
    const item = items.forEach((item) => {
      const channel = ChannelStore.getChannel(item);
      const tmp = item;
      if (null != channel) {
        if (channel.getGuildId() === guildId) {
          const mentionCount = ReadStateStore.getMentionCount(item);
          const hasUnreadResult = null !== tmp3 && !c2 && ReadStateStore.hasUnread(channel.id) && isCountableChannel(channel, mentionCount, true);
          if (hasUnreadResult) {
            c2 = true;
            obj2.unreadChannelId = channel.id;
          }
          if (mentionCount > 0) {
            if (isCountableChannel(channel, mentionCount)) {
              obj2 = { count: mentionCount, isMentionLowImportance: ReadStateStore.getIsMentionLowImportance(item) };
              const mentionCounts = obj2.mentionCounts;
              const id = channel.id;
              mentionCounts[id] = obj2;
            }
          }
          delete obj2.mentionCounts[obj.id];
        }
      } else {
        delete obj2.mentionCounts[tmp];
      }
    });
    obj2.unreadByType[constants.CHANNEL] = c2;
    if (obj2.unreadByType[constants.CHANNEL] !== tmp9.unreadByType[constants.CHANNEL]) {
      if (!obj2.unreadByType[constants.CHANNEL]) {
        let channel = ChannelStore.getChannel(tmp9.unreadChannelId);
        if (null != channel) {
          if (!items.includes(channel.id)) {
            if (ReadStateStore.hasUnread(channel.id)) {
              if (isCountableChannel(channel)) {
                if (null != tmp) {
                  set.add(tmp);
                }
                obj2.unreadByType[constants.CHANNEL] = true;
              }
            }
          }
        }
        return recountGuild(tmp);
      }
    }
    return aggregateGuildState(tmp, obj2, tmp9);
  }
  tmp = null;
}
function updateNonChannel(guild_id, GUILD_EVENT) {
  let num;
  let num2;
  let obj3;
  let obj4;
  if (null != guild_id) {
    let tmp2 = guild_id;
    if (guild_id == null) {
      tmp2 = NULL_STRING_GUILD_ID;
    }
    let tmp4 = guild_id;
    if (guild_id == null) {
      tmp4 = NULL_STRING_GUILD_ID;
    }
    let tmp5 = guilds[tmp4];
    if (tmp5 == null) {
      let tmp7 = guild_id;
      if (guild_id == null) {
        tmp7 = NULL_STRING_GUILD_ID;
      }
      const obj = { unread: false, unreadByType: {}, unreadChannelId: null, lowImportanceMentionCount: 0, highImportanceMentionCount: 0, mentionCounts: {}, ncMentionCount: 0, sentinel: num };
      num = undefined;
      if (guilds[tmp7] != null) {
        num = tmp8.sentinel;
      }
      if (num == null) {
        num = 0;
      }
      tmp5 = obj;
    }
    guilds[tmp2] = tmp5;
    let tmp10 = guild_id;
    if (guild_id == null) {
      tmp10 = NULL_STRING_GUILD_ID;
    }
    const obj2 = { unread: false, unreadByType: obj4, unreadChannelId: null, lowImportanceMentionCount: 0, highImportanceMentionCount: 0, mentionCounts: obj3, ncMentionCount: 0, sentinel: num2 };
    num2 = undefined;
    if (guilds[tmp10] != null) {
      num2 = tmp11.sentinel;
    }
    if (num2 == null) {
      num2 = 0;
    }
    obj3 = {};
    const merged = Object.assign(tmp5.mentionCounts);
    obj4 = {};
    const merged1 = Object.assign(tmp5.unreadByType);
    const unreadByType = obj2.unreadByType;
    GUILD_EVENT = constants.GUILD_EVENT;
    const hasUnreadResult = ReadStateStore.hasUnread(guild_id, GUILD_EVENT);
    let tmp20 = hasUnreadResult;
    if (GUILD_EVENT === constants.GUILD_EVENT) {
      let tmp22 = !UserGuildSettingsStore.isMuted(guild_id);
      UserGuildSettingsStore.isMuted(guild_id);
      if (tmp22) {
        const result = UserGuildSettingsStore.isMuteScheduledEventsEnabled(guild_id);
        tmp22 = !result && hasUnreadResult;
      }
      tmp20 = tmp22;
    }
    unreadByType[GUILD_EVENT] = tmp20;
    return aggregateGuildState(guild_id, obj2, tmp5);
  }
}
function recountGuild(guildId, hasItem) {
  let entries;
  let isMentionLowImportance;
  let mentionCount;
  let num;
  let num4;
  let tmp3;
  let tmp2 = guildId;
  if (NULL_STRING_GUILD_ID !== guildId) {
    let tmp7 = tmp2;
    if (tmp2 == null) {
      tmp7 = tmp3;
    }
    const obj = {
      unread: entries.some((item) => {
          let tmp;
          let tmp2;
          [tmp, tmp2] = item;
          const tmp3 = Number(tmp) !== constants.GUILD_EVENT && tmp2;
          return tmp3;
        }),
      unreadByType: {},
      unreadChannelId: null,
      lowImportanceMentionCount: 0,
      highImportanceMentionCount: 0,
      mentionCounts: {},
      ncMentionCount: 0,
      sentinel: num
    };
    num = undefined;
    if (guilds[tmp7] != null) {
      num = tmp8.sentinel;
    }
    if (num == null) {
      num = 0;
    }
    if (null == tmp2) {
      const mutablePrivateChannels = ChannelStore.getMutablePrivateChannels();
      for (const key10155 in mutablePrivateChannels) {
        let tmp101 = mutablePrivateChannels[key10155];
        let mentionCount1 = ReadStateStore.getMentionCount(key10155);
        let tmp75 = mentionCount1 > 0 && isCountableChannel(tmp101, mentionCount1);
        if (!tmp75) {
          continue;
        } else {
          obj.highImportanceMentionCount = obj.highImportanceMentionCount + mentionCount1;
          let obj2 = { count: mentionCount1, isMentionLowImportance: false };
          obj.mentionCounts[tmp101.id] = obj2;
          continue;
        }
        continue;
      }
    } else {
      const isMutedResult = UserGuildSettingsStore.isMuted(tmp2);
      if (isMutedResult) {
        if (false === hasItem) {
          return false;
        }
      }
      const mutedChannels = UserGuildSettingsStore.getMutedChannels(tmp2);
      const channelOverrides = UserGuildSettingsStore.getChannelOverrides(tmp2);
      const obj3 = isOptInEnabled;
      const result = obj3.isOptInEnabledForGuild(tmp2);
      const mutableBasicGuildChannelsForGuild = ChannelStore.getMutableBasicGuildChannelsForGuild(tmp2);
      for (const key10034 in mutableBasicGuildChannelsForGuild) {
        let obj12 = mutableBasicGuildChannelsForGuild[key10034];
        hasItem = isMutedResult || mutedChannels.has(key10034);
        if (!hasItem) {
          let hasItem1 = null != obj12.parent_id && mutedChannels.has(obj12.parent_id);
          hasItem = hasItem1;
        }
        let tmp20 = obj.unreadByType[constants.CHANNEL];
        let guildChannelUnreadState = ReadStateStore.getGuildChannelUnreadState(obj12, result, channelOverrides, hasItem, tmp20);
        ({ mentionCount, isMentionLowImportance } = guildChannelUnreadState);
        let tmp30 = mentionCount > 0;
        if (tmp30) {
          let tmp32 = !tmp20;
          if (tmp32) {
            let tmp33 = !hasItem || tmp30;
            tmp32 = tmp33;
          }
          if (tmp32) {
            tmp32 = tmp29;
          }
          if (tmp32) {
            let tmp35 = metroImportAll(obj12.type);
            let tmp36 = !tmp35 || 0 !== mentionCount;
            if (tmp36) {
              let canBasicChannelResult = PermissionStore.canBasicChannel(metroImportDefault(obj12.type), obj12);
              if (canBasicChannelResult) {
                let tmp40 = null != obj12.guild_id;
                if (tmp40) {
                  let tmp41 = result;
                  if (tmp41) {
                    let result1 = React4(obj12.type) || UserGuildSettingsStore.isChannelRecordOrParentOptedIn(obj12);
                    tmp41 = !result1;
                  }
                  if (tmp41) {
                    tmp41 = 0 === mentionCount;
                  }
                  tmp40 = tmp41;
                }
                let tmp45 = !tmp40;
                if (tmp45) {
                  let tmp46 = "flags" in obj12;
                  let tmp47 = !tmp46 || !obj12.hasFlag(ChannelFlags.IS_GUILD_RESOURCE_CHANNEL);
                  if (tmp47) {
                    let tmp49 = mentionCount > 0 || UserGuildSettingsStore.resolveUnreadSetting(obj12) === constants2.ALL_MESSAGES;
                    tmp47 = tmp49;
                  }
                  tmp45 = tmp47;
                }
                canBasicChannelResult = tmp45;
              }
              tmp36 = canBasicChannelResult;
            }
            if (!tmp36) {
              continue;
            } else {
              if (tmp32) {
                obj.unreadByType[constants.CHANNEL] = true;
                obj.unreadChannelId = key10034;
              }
              if (!tmp30) {
                continue;
              } else {
                if (isMentionLowImportance) {
                  obj.lowImportanceMentionCount = obj.lowImportanceMentionCount + mentionCount;
                } else {
                  obj.highImportanceMentionCount = obj.highImportanceMentionCount + mentionCount;
                }
                let obj4 = { count: mentionCount, isMentionLowImportance };
                obj.mentionCounts[obj12.id] = obj4;
                continue;
              }
              continue;
            }
            continue;
          }
          continue;
        }
        continue;
      }
      const activeJoinedThreadsForGuild = ActiveJoinedThreadsStore.getActiveJoinedThreadsForGuild(tmp2);
      for (const key10108 in activeJoinedThreadsForGuild) {
        let keys = Object.keys();
        if (keys === undefined) {
          continue;
        } else {
          let tmp55 = keys[tmp];
          while (tmp55 !== undefined) {
            let isMutedResult1 = obj.unreadByType[constants.CHANNEL] || !ReadStateStore.hasUnread(tmp55) || JoinedThreadsStore.isMuted(tmp55) || isMutedResult;
            if (!isMutedResult1) {
              obj.unreadByType[constants.CHANNEL] = true;
              obj.unreadChannelId = tmp55;
            }
            let mentionCount2 = ReadStateStore.getMentionCount(tmp55);
            let isMentionLowImportance1 = ReadStateStore.getIsMentionLowImportance(tmp55);
            if (mentionCount2 <= 0) {
              continue;
            } else {
              if (isMentionLowImportance1) {
                obj.lowImportanceMentionCount = obj.lowImportanceMentionCount + mentionCount2;
              } else {
                obj.highImportanceMentionCount = obj.highImportanceMentionCount + mentionCount2;
              }
              let obj5 = { count: mentionCount2, isMentionLowImportance: isMentionLowImportance1 };
              obj.mentionCounts[tmp55] = obj5;
              continue;
            }
            continue;
          }
        }
        continue;
      }
      let tmp63 = !obj.unreadByType[constants.GUILD_EVENT];
      if (tmp63) {
        const GUILD_EVENT = constants.GUILD_EVENT;
        const hasUnreadResult = ReadStateStore.hasUnread(tmp2, GUILD_EVENT);
        let tmp66 = hasUnreadResult;
        if (GUILD_EVENT === constants.GUILD_EVENT) {
          let tmp68 = !UserGuildSettingsStore.isMuted(tmp2);
          UserGuildSettingsStore.isMuted(tmp2);
          if (tmp68) {
            const result2 = UserGuildSettingsStore.isMuteScheduledEventsEnabled(tmp2);
            tmp68 = !result2 && hasUnreadResult;
          }
          tmp66 = tmp68;
        }
        tmp63 = tmp66;
      }
      if (tmp63) {
        obj.unreadByType[constants.GUILD_EVENT] = true;
      }
    }
    const _Object = Object;
    entries = Object.entries(obj.unreadByType);
    let tmp78 = tmp2;
    if (tmp2 == null) {
      tmp78 = NULL_STRING_GUILD_ID;
    }
    let tmp80 = tmp2;
    if (tmp2 == null) {
      tmp80 = NULL_STRING_GUILD_ID;
    }
    let tmp81 = guilds[tmp80];
    if (tmp81 == null) {
      let tmp83 = tmp2;
      if (tmp2 == null) {
        tmp83 = NULL_STRING_GUILD_ID;
      }
      const obj7 = { unread: false, unreadByType: {}, unreadChannelId: null, lowImportanceMentionCount: 0, highImportanceMentionCount: 0, mentionCounts: {}, ncMentionCount: 0, sentinel: num4 };
      num4 = undefined;
      if (guilds[tmp83] != null) {
        num4 = tmp84.sentinel;
      }
      if (num4 == null) {
        num4 = 0;
      }
      tmp81 = obj7;
    }
    guilds[tmp78] = tmp81;
    let flag3 = obj.unread !== tmp81.unread || obj.highImportanceMentionCount !== tmp81.highImportanceMentionCount || obj.lowImportanceMentionCount !== tmp81.lowImportanceMentionCount;
    if (flag3) {
      let tmp86 = tmp2;
      if (tmp2 == null) {
        tmp86 = NULL_STRING_GUILD_ID;
      }
      guilds[tmp86] = obj;
      if (null != tmp2) {
        if (obj.unread) {
          set.add(tmp2);
        } else {
          set.delete(tmp2);
        }
      }
      closure_24 = closure_24 + 1;
      if (tmp2 == null) {
        tmp2 = NULL_STRING_GUILD_ID;
      }
      updateGuildUnreadSentinel(tmp2);
      updateNotificationCenterMentions(obj, tmp81);
      flag3 = true;
    }
    return flag3;
  }
  tmp2 = null;
}
function handleOverlayInitialize(guilds) {
  let num;
  guilds = {};
  closure_24 = 0;
  new Set();
  recountGuild(null);
  const length = guilds.length;
  for (let num = 0; num < length; num = num + 1) {
    let tmp3 = guilds[num];
    if (null != tmp3) {
      let tmp6 = recountGuild(tmp3.properties.id);
    }
  }
}
function handleConnectionOpen(arg0) {
  let readState;
  ({ guilds, readState } = arg0);
  let closure_22 = {};
  let c24 = 0;
  new Set();
  const set1 = new Set();
  if (readState.entries.length < 500) {
    const entries = readState.entries;
    const item = entries.forEach((mention_count) => {
      const tmp = null != mention_count.mention_count && mention_count.mention_count > 0;
      if (tmp) {
        if (null != mention_count.read_state_type) {
          if (mention_count.read_state_type !== constants.CHANNEL) {
            set1.add(mention_count.id);
          }
        }
        const add = set1.add;
        const channel = ChannelStore.getChannel(mention_count.id);
        let guild_id;
        if (channel != null) {
          guild_id = channel.guild_id;
        }
        add(guild_id);
      }
    });
  }
  recountGuild(null);
  for (const item10032 of guilds) {
    let hasItem;
    let id = item10032.id;
    if (tmp2) {
      hasItem = set1.has(tmp5.id);
    }
    let tmp6Result = recountGuild(id, hasItem);
    continue;
  }
}
function recomputeAllGuilds() {
  guilds = {};
  new Set();
  recountGuild(null);
  const values = Object.values(GuildStore.getGuildIds());
  for (const item10021 of values) {
    let tmp5 = recountGuild(item10021);
    continue;
  }
}
function handleGuildCreate(guild) {
  return recountGuild(guild.guild.id);
}
function handleGuildDelete(guild) {
  guild = guild.guild;
  let flag = null != guilds[guild.id];
  if (flag) {
    delete guilds[guild.id];
    set.delete(guild.id);
    closure_24 = closure_24 + 1;
    flag = true;
  }
  return flag;
}
function handleChannelDelete(channel) {
  channel = channel.channel;
  const items = [channel.id];
  return recountChannels(channel.guild_id, items);
}
function handleWindowFocus() {
  const channel = ChannelStore.getChannel(SelectedChannelStore.getChannelId());
  let tmp = null != channel;
  if (tmp) {
    const items = [channel.id];
    tmp = recountChannels(channel.getGuildId(), items);
  }
  return tmp;
}
function handleGuildMemberUpdate(guildId) {
  guildId = guildId.guildId;
  const tmp = guildId.user.id === AuthenticationStore.getId() && recountGuild(guildId);
  return tmp;
}
function handleGenericUpdate(channelId) {
  const channel = ChannelStore.getChannel(channelId.channelId);
  let tmp = null != channel;
  if (tmp) {
    const items = [channel.id];
    tmp = recountChannels(channel.getGuildId(), items);
  }
  return tmp;
}
function handleMessageCreate(channelId) {
  let num;
  channelId = channelId.channelId;
  const channel = ChannelStore.getChannel(channelId);
  if (null == channel) {
    return false;
  } else {
    if (null != channel.guild_id) {
      let result;
      let guild_id = channel.guild_id;
      let tmp = guild_id;
      if (guild_id == null) {
        tmp = NULL_STRING_GUILD_ID;
      }
      let tmp3 = guild_id;
      if (guild_id == null) {
        tmp3 = NULL_STRING_GUILD_ID;
      }
      let tmp4 = guilds[tmp3];
      if (tmp4 == null) {
        if (guild_id == null) {
          guild_id = NULL_STRING_GUILD_ID;
        }
        const obj = { unread: false, unreadByType: {}, unreadChannelId: null, lowImportanceMentionCount: 0, highImportanceMentionCount: 0, mentionCounts: {}, ncMentionCount: 0, sentinel: num };
        num = undefined;
        if (guilds[guild_id] != null) {
          num = tmp6.sentinel;
        }
        if (num == null) {
          num = 0;
        }
        tmp4 = obj;
      }
      guilds[tmp] = tmp4;
      if (channel.isThread()) {
        const hasJoinedResult = JoinedThreadsStore.hasJoined(channel.id);
        let isMutedResult = !hasJoinedResult;
        if (hasJoinedResult) {
          isMutedResult = JoinedThreadsStore.isMuted(channel.id);
        }
        result = isMutedResult;
      } else {
        result = UserGuildSettingsStore.isGuildOrCategoryOrChannelMuted(channel.guild_id, channel.id);
      }
      if (result) {
        if (0 === ReadStateStore.getMentionCount(channelId)) {
          return false;
        }
      }
    }
    const items = [channel.id];
    return recountChannels(channel.getGuildId(), items);
  }
}
function handleChannelSelect(arg0) {
  let channelId;
  let guildId;
  ({ channelId, guildId } = arg0);
  const obj = FavoritesUtils;
  let tmp2 = !obj.isFavoritesGuildId(guildId);
  obj.isFavoritesGuildId(guildId);
  if (tmp2) {
    let tmp4 = null != channelId;
    if (tmp4) {
      const items = [channelId];
      tmp4 = recountChannels(guildId, items);
    }
    tmp2 = tmp4;
  }
  return tmp2;
}
function handleChannelUpdate(channel) {
  channel = channel.channel;
  const items = [channel.id];
  return recountChannels(channel.getGuildId(), items);
}
function handleChannelUpdates(channels) {
  const obj = _modDef12(channels.channels);
  const groupByResult = obj.groupBy((getGuildId) => getGuildId.getGuildId());
  return groupByResult.reduce((acc, arr, index) => {
    const tmp = recountChannels(index, arr.map((id) => id.id)) || acc;
    return tmp;
  }, false);
}
function handleBulkAck(channels) {
  const arr = _modDef12(channels.channels);
  const mapped = arr.map((channelId) => channelId.channelId);
  const found = mapped.filter((item) => null != ChannelStore.getChannel(item));
  const groupByResult = found.groupBy((arg0) => {
    const channel = ChannelStore.getChannel(arg0);
    let guildId;
    if (channel != null) {
      guildId = channel.getGuildId();
    }
    return guildId;
  });
  return groupByResult.reduce((acc, item, index) => {
    const tmp = recountChannels(index, item) || acc;
    return tmp;
  }, false);
}
function handleThreadUpdate(channel) {
  channel = channel.channel;
  const items = [, ];
  ({ id: arr[0], parent_id: arr[1] } = channel);
  return recountChannels(channel.getGuildId(), items);
}
function handleGuildEventUpdate(guildScheduledEvent) {
  return updateNonChannel(guildScheduledEvent.guildScheduledEvent.guild_id, constants.GUILD_EVENT);
}
function handleGuildEventDelete(guildScheduledEvent) {
  return updateNonChannel(guildScheduledEvent.guildScheduledEvent.guild_id, constants.GUILD_EVENT);
}
function handleGuildFeatureAck(id) {
  return updateNonChannel(id.id, id.ackType);
}
function handleThreadMemberUpdate(id) {
  const items = [id.id];
  return recountChannels(id.guildId, items);
}
function handleThreadMembersUpdate(id) {
  const obj = ThreadActionUtils;
  let result = obj.doesThreadMembersActionAffectMe(id);
  if (result) {
    const items = [id.id];
    result = recountChannels(id.guildId, items);
  }
  return result;
}
function handleThreadListSync(threads) {
  threads = threads.threads;
  const guildId = threads.guildId;
  const found = threads.filter((id) => JoinedThreadsStore.hasJoined(id.id));
  return recountChannels(guildId, found.map((id) => id.id));
}
function handlePassiveUpdateV2(channels) {
  let tmp = channels.channels.length > 0;
  if (tmp) {
    channels = channels.channels;
    tmp = recountChannels(channels.guildId, channels.map((id) => id.id));
  }
  return tmp;
}
function handleMarkGuildAsRead(guildId) {
  return recountGuild(guildId.guildId);
}
function handleGuildUpdate(guildId) {
  return recountGuild(guildId.guildId);
}
function handleUserGuildSettingsFullUpdate(userGuildSettings) {
  userGuildSettings = userGuildSettings.userGuildSettings;
  set = new Set(userGuildSettings.map((guild_id) => {
    guild_id = guild_id.guild_id;
    if (guild_id == null) {
      guild_id = NULL_STRING_GUILD_ID;
    }
    return guild_id;
  }));
  const obj = SnowflakeUtilsDefault;
  const keys = obj.keys(guilds);
  return keys.reduce((acc, item) => {
    const hasItem = set.has(item) && recountGuild(item) || acc;
    return hasItem;
  }, false);
}
function handleClearNotifCenterGuildMentions() {
  for (const key10003 in guilds) {
    guilds[key10003].ncMentionCount = 0;
    continue;
  }
}
function handleUserGuildSettingsUpdate(guildId) {
  return recountGuild(guildId.guildId);
}
function handleRecentMentionsSuccess(messages) {
  messages = messages.messages;
  set = new Set(messages.map((channel_id) => channel_id.channel_id));
  const item = set.forEach((item) => {
    channel = channel.getChannel(item);
    if (null != channel) {
      const items = [item];
      recountChannels(channel.getGuildId(), items);
    }
  });
}
({ getBasicAccessPermissions: metroImportDefault, isGuildVocalChannelType: metroImportAll, isThread: c9 } = ChannelRecord);
const NULL_STRING_GUILD_ID = Constants.NULL_STRING_GUILD_ID;
const ChannelFlags = ChannelConstants.ChannelFlags;
({ ReadStateTypes: closure_19, UnreadSetting: closure_20 } = ReadStateConstants);
let guilds = {};
let set = new Set();
let closure_24 = 0;
class GuildReadStateStore extends MobileCacheSnapshotStore {
  constructor() {
    const obj = {
      CONNECTION_OPEN: handleConnectionOpen,
      OVERLAY_INITIALIZE: handleOverlayInitialize,
      CACHE_LOADED_LAZY() {
        return closure_0.loadCache();
      },
      GUILD_CREATE: handleGuildCreate,
      GUILD_DELETE: handleGuildDelete,
      MESSAGE_CREATE: handleMessageCreate,
      MESSAGE_ACK: handleGenericUpdate,
      BULK_ACK: handleBulkAck,
      UPDATE_CHANNEL_DIMENSIONS: handleGenericUpdate,
      CHANNEL_SELECT: handleChannelSelect,
      CHANNEL_DELETE: handleChannelDelete,
      WINDOW_FOCUS: handleWindowFocus,
      GUILD_ACK: handleMarkGuildAsRead,
      GUILD_ROLE_CREATE: handleGuildUpdate,
      GUILD_ROLE_DELETE: handleGuildUpdate,
      GUILD_ROLE_UPDATE: handleGuildUpdate,
      CHANNEL_CREATE: handleChannelUpdate,
      CHANNEL_UPDATES: handleChannelUpdates,
      THREAD_CREATE: handleThreadUpdate,
      THREAD_UPDATE: handleThreadUpdate,
      THREAD_DELETE: handleThreadUpdate,
      THREAD_LIST_SYNC: handleThreadListSync,
      THREAD_MEMBER_UPDATE: handleThreadMemberUpdate,
      THREAD_MEMBERS_UPDATE: handleThreadMembersUpdate,
      PASSIVE_UPDATE_V2: handlePassiveUpdateV2,
      GUILD_MEMBER_UPDATE: handleGuildMemberUpdate,
      USER_GUILD_SETTINGS_FULL_UPDATE: handleUserGuildSettingsFullUpdate,
      USER_GUILD_SETTINGS_CHANNEL_UPDATE: handleUserGuildSettingsUpdate,
      USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: handleUserGuildSettingsUpdate,
      USER_GUILD_SETTINGS_GUILD_UPDATE: handleUserGuildSettingsUpdate,
      USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: handleUserGuildSettingsUpdate,
      GUILD_FEATURE_ACK: handleGuildFeatureAck,
      GUILD_SCHEDULED_EVENT_CREATE: handleGuildEventUpdate,
      GUILD_SCHEDULED_EVENT_UPDATE: handleGuildEventUpdate,
      GUILD_SCHEDULED_EVENT_DELETE: handleGuildEventDelete,
      CHANNEL_RTC_UPDATE_CHAT_OPEN: handleGenericUpdate,
      LOAD_MESSAGES_SUCCESS: handleGenericUpdate,
      CHANNEL_ACK: handleGenericUpdate,
      CHANNEL_LOCAL_ACK: handleGenericUpdate,
      NOTIFICATION_SETTINGS_UPDATE: recomputeAllGuilds,
      RECOMPUTE_READ_STATES: recomputeAllGuilds,
      VOICE_CHANNEL_SELECT: handleGenericUpdate,
      ENABLE_AUTOMATIC_ACK: handleGenericUpdate,
      RESORT_THREADS: handleGenericUpdate,
      NOTIFICATION_CENTER_CLEAR_GUILD_MENTIONS: handleClearNotifCenterGuildMentions,
      TRY_ACK: handleGenericUpdate,
      LOAD_RECENT_MENTIONS_SUCCESS: handleRecentMentionsSuccess
    };
    const tmp2 = new tmp(obj, handleClearNotifCenterGuildMentions, handleGenericUpdate, new.target);
    let closure_0 = tmp2;
    return tmp2;
  }
  initialize() {
    this.waitFor(ChannelStore, SelectedChannelStore, ReadStateStore, PermissionStore, AuthenticationStore, UserStore, UserGuildSettingsStore, ActiveJoinedThreadsStore, JoinedThreadsStore, RecentMentionsStore);
  }
  loadCache() {
    const snapshot = this.readSnapshot(GuildReadStateStore.LATEST_SNAPSHOT_VERSION);
    if (null != snapshot) {
      guilds = snapshot.guilds;
      const _Set = Set;
      const self = this;
      const self2 = this;
      new Set(snapshot.unreadGuilds);
    }
  }
  takeSnapshot() {
    const obj = { version: GuildReadStateStore.LATEST_SNAPSHOT_VERSION, data: { guilds, unreadGuilds: Array.from(set) } };
    ({ guilds, unreadGuilds: Array.from(set) });
    return obj;
  }
  hasAnyUnread() {
    return set.size > 0;
  }
  getStoreChangeSentinel() {
    return closure_24;
  }
  getMutableUnreadGuilds() {
    return set;
  }
  getMutableGuildStates() {
    return guilds;
  }
  shouldCountChannelUnread(channel) {
    let num = mentionCount;
    if (mentionCount === undefined) {
      num = 0;
    }
    return isCountableChannel(channel, num, true);
  }
  hasUnread(arg0) {
    return set.has(arg0);
  }
  getMentionCount(arg0) {
    let num;
    let tmp = arg0;
    let tmp3 = arg0;
    if (arg0 == null) {
      tmp3 = NULL_STRING_GUILD_ID;
    }
    let tmp5 = tmp;
    if (tmp == null) {
      tmp5 = NULL_STRING_GUILD_ID;
    }
    let tmp6 = guilds[tmp5];
    if (tmp6 == null) {
      if (tmp == null) {
        tmp = NULL_STRING_GUILD_ID;
      }
      const obj = { unread: false, unreadByType: {}, unreadChannelId: null, lowImportanceMentionCount: 0, highImportanceMentionCount: 0, mentionCounts: {}, ncMentionCount: 0, sentinel: num };
      num = undefined;
      if (guilds[tmp] != null) {
        num = tmp8.sentinel;
      }
      if (num == null) {
        num = 0;
      }
      tmp6 = obj;
    }
    guilds[tmp3] = tmp6;
    return tmp6.highImportanceMentionCount + tmp6.lowImportanceMentionCount;
  }
  getIsMentionLowImportance(arg0) {
    let num;
    let tmp = arg0;
    let tmp3 = arg0;
    if (arg0 == null) {
      tmp3 = NULL_STRING_GUILD_ID;
    }
    let tmp5 = tmp;
    if (tmp == null) {
      tmp5 = NULL_STRING_GUILD_ID;
    }
    let tmp6 = guilds[tmp5];
    if (tmp6 == null) {
      if (tmp == null) {
        tmp = NULL_STRING_GUILD_ID;
      }
      const obj = { unread: false, unreadByType: {}, unreadChannelId: null, lowImportanceMentionCount: 0, highImportanceMentionCount: 0, mentionCounts: {}, ncMentionCount: 0, sentinel: num };
      num = undefined;
      if (guilds[tmp] != null) {
        num = tmp8.sentinel;
      }
      if (num == null) {
        num = 0;
      }
      tmp6 = obj;
    }
    guilds[tmp3] = tmp6;
    return 0 === tmp6.highImportanceMentionCount;
  }
  getGuildHasUnreadIgnoreMuted(id) {
    const mutableGuildChannelsForGuild = ChannelStore.getMutableGuildChannelsForGuild(id);
    for (const key10008 in mutableGuildChannelsForGuild) {
      let obj = mutableGuildChannelsForGuild[key10008];
      if (null == obj) {
        continue;
      } else {
        if (!obj.isGuildVocal()) {
          if (!PermissionStore.can(obj.accessPermissions, obj)) {
            continue;
          } else if (!ReadStateStore.hasUnreadOrMentions(key10008)) {
            continue;
          } else {
            let flag = true;
            return true;
          }
          continue;
        }
        continue;
      }
      continue;
    }
    const activeJoinedThreadsForGuild = ActiveJoinedThreadsStore.getActiveJoinedThreadsForGuild(id);
    for (const key10027 in activeJoinedThreadsForGuild) {
      if (null == ChannelStore.getChannel(key10027)) {
        continue;
      } else {
        let keys = Object.keys();
        if (keys === undefined) {
          continue;
        } else {
          let tmp8 = keys[tmp];
          while (tmp8 !== undefined) {
            if (!ReadStateStore.hasUnreadOrMentions(tmp8)) {
              continue;
            } else {
              let flag2 = true;
              return true;
            }
          }
        }
        continue;
      }
      continue;
    }
    return ReadStateStore.hasUnreadOrMentions(id, constants.GUILD_EVENT);
  }
  getTotalMentionCount(arg0) {
    let num = 0;
    let num2 = 0;
    const keys = Object.keys();
    if (keys !== undefined) {
      num2 = num;
      while (keys[tmp] !== undefined) {
        let tmp7 = tmp2;
        let tmp10 = guilds[tmp5];
        if (tmp2) {
          tmp7 = tmp5 === NULL_STRING_GUILD_ID;
        }
        if (tmp7) {
          continue;
        } else {
          num = tmp4 + tmp10.highImportanceMentionCount;
          continue;
        }
        continue;
      }
    }
    return num2;
  }
  getTotalNotificationsMentionCount(arg0) {
    let num = 0;
    let num2 = 0;
    const keys = Object.keys();
    if (keys !== undefined) {
      num2 = num;
      while (keys[tmp] !== undefined) {
        let tmp7 = tmp2;
        let tmp10 = guilds[tmp5];
        if (tmp2) {
          tmp7 = tmp5 === NULL_STRING_GUILD_ID;
        }
        if (tmp7) {
          continue;
        } else {
          num = tmp4 + tmp10.ncMentionCount;
          continue;
        }
        continue;
      }
    }
    return num2;
  }
  getPrivateChannelMentionCount() {
    let num;
    if (guilds[NULL_STRING_GUILD_ID] != null) {
      num = tmp.highImportanceMentionCount;
    }
    if (num == null) {
      num = 0;
    }
    return num;
  }
  getMentionCountForPrivateChannel(channelId) {
    let num;
    if (guilds[NULL_STRING_GUILD_ID] != null) {
      num = tmp.mentionCounts[channelId];
    }
    if (num == null) {
      num = 0;
    }
    return num;
  }
  getHighImportanceMentionCountForChannel(guild_id, currentlySelectedChannelId) {
    let tmp = guild_id;
    if (guild_id == null) {
      tmp = NULL_STRING_GUILD_ID;
    }
    let tmp4;
    if (guilds[tmp] != null) {
      tmp4 = tmp3.mentionCounts[currentlySelectedChannelId];
    }
    let num = 0;
    if (null != tmp4) {
      num = 0;
      if (!tmp4.isMentionLowImportance) {
        num = tmp4.count;
      }
    }
    return num;
  }
  getGuildChangeSentinel(arg0) {
    let num;
    let tmp = arg0;
    let tmp3 = arg0;
    if (arg0 == null) {
      tmp3 = NULL_STRING_GUILD_ID;
    }
    let tmp5 = tmp;
    if (tmp == null) {
      tmp5 = NULL_STRING_GUILD_ID;
    }
    let tmp6 = guilds[tmp5];
    if (tmp6 == null) {
      if (tmp == null) {
        tmp = NULL_STRING_GUILD_ID;
      }
      const obj = { unread: false, unreadByType: {}, unreadChannelId: null, lowImportanceMentionCount: 0, highImportanceMentionCount: 0, mentionCounts: {}, ncMentionCount: 0, sentinel: num };
      num = undefined;
      if (guilds[tmp] != null) {
        num = tmp8.sentinel;
      }
      if (num == null) {
        num = 0;
      }
      tmp6 = obj;
    }
    guilds[tmp3] = tmp6;
    return tmp6.sentinel;
  }
}
const prototype = GuildReadStateStore.prototype;
GuildReadStateStore.displayName = "GuildReadStateStore";
GuildReadStateStore.LATEST_SNAPSHOT_VERSION = 1;
const guildReadStateStore = new GuildReadStateStore();
let result = size.fileFinishedImporting("stores/GuildReadStateStore.tsx");

export default guildReadStateStore;