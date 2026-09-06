// === Module 7636: GuildReadStateStore ===

// Module 7636 (GuildReadStateStore)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import _modDef12 from "module_12" /* 12 */;
import FavoritesUtils from "FavoritesUtils" /* 1982 */;
import ThreadActionUtils from "ThreadActionUtils" /* 4207 */;
import isOptInEnabled from "isOptInEnabled" /* 7535 */;
import RecentMentionsStore from "RecentMentionsStore" /* 7637 */;
import NotificationCenterItemsStore from "NotificationCenterItemsStore" /* 7639 */;
import ActiveJoinedThreadsStore from "ActiveJoinedThreadsStore" /* 5506 */;
import JoinedThreadsStore from "JoinedThreadsStore" /* 4201 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import GuildStore from "GuildStore" /* 1979 */;
import MobileCacheSnapshotStore from "MobileCacheSnapshotStore" /* 1073 */;
import PermissionStore from "PermissionStore" /* 4199 */;
import ReadStateStore from "ReadStateStore" /* 4575 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2011 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 4741 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
function updateGuildUnreadSentinel(arg0) {
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
    const obj = { unread: false, unreadByType: {}, unreadChannelId: null, lowImportanceMentionCount: 0, highImportanceMentionCount: 0, mentionCounts: {}, ncMentionCount: 0, sentinel: null };
    let num;
    if (guilds[tmp] != null) {
      num = tmp8.sentinel;
    }
    if (num == null) {
      num = 0;
    }
    obj.sentinel = num;
    tmp6 = obj;
  }
  guilds[tmp3] = tmp6;
  tmp6.sentinel = tmp6.sentinel + 1;
  closure_24 = closure_24 + 1;
}
function isCountableChannel(channel, mentionCount, arg2) {
  let num = mentionCount;
  if (mentionCount === undefined) {
    num = 0;
  }
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
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
        if (channel.isThread()) {
          let isMutedResult = JoinedThreadsStore.isMuted(channel.id);
          if (!isMutedResult) {
            isMutedResult = UserGuildSettingsStore.isGuildOrCategoryOrChannelMuted(channel.guild_id, channel.parent_id);
          }
          let result = isMutedResult;
        } else {
          result = UserGuildSettingsStore.isGuildOrCategoryOrChannelMuted(channel.guild_id, channel.id);
        }
        if (result) {
          return false;
        }
      }
      if (!channel.isPrivate()) {
        let result1 = isOptInEnabled.isOptInEnabledForGuild(channel.guild_id);
        let tmp11 = null != channel.guild_id;
        if (tmp11) {
          if (result1) {
            let result2 = React7(channel.type);
            if (!result2) {
              result2 = UserGuildSettingsStore.isChannelRecordOrParentOptedIn(channel);
            }
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
      let tmp16 = num > 0;
      if (!tmp16) {
        tmp16 = UserGuildSettingsStore.resolveUnreadSetting(channel) === constants2.ALL_MESSAGES;
      }
      return tmp16;
    }
  }
}
function updateNotificationCenterMentions(mentionCounts, mentionCounts2) {
  if (!NotificationCenterItemsStore.tabFocused) {
    importDefault = 0;
    const currentUser = UserStore.getCurrentUser();
    let notifCenterReadState;
    if (null != currentUser) {
      notifCenterReadState = ReadStateStore.getNotifCenterReadState(currentUser.id);
    }
    if (null != notifCenterReadState) {
      const keys = require("SnowflakeUtils").keys(mentionCounts.mentionCounts);
      const item = keys.forEach((item) => {
        const lastMessageIdResult = ReadStateStore.lastMessageId(item);
        if (obj.compare(lastMessageIdResult, notifCenterReadState._ackMessageId) > 0) {
          closure_1 = closure_1 + mentionCounts.mentionCounts[item].count;
        }
      });
      const obj2 = require("SnowflakeUtils");
    }
    closure_129_0 = mentionCounts2;
    closure_129_1 = 0;
    const currentUser1 = UserStore.getCurrentUser();
    let notifCenterReadState1;
    if (null != currentUser1) {
      notifCenterReadState1 = ReadStateStore.getNotifCenterReadState(currentUser1.id);
    }
    closure_129_2 = notifCenterReadState1;
    if (!tmp14) {
      const keys1 = require("SnowflakeUtils").keys(mentionCounts2.mentionCounts);
      const item1 = keys1.forEach((item) => {
        const lastMessageIdResult = ReadStateStore.lastMessageId(item);
        if (obj.compare(lastMessageIdResult, notifCenterReadState._ackMessageId) > 0) {
          closure_1 = closure_1 + mentionCounts.mentionCounts[item].count;
        }
      });
      const obj3 = require("SnowflakeUtils");
    }
    let num2;
    if (mentionCounts2 != null) {
      num2 = mentionCounts2.ncMentionCount;
    }
    if (num2 == null) {
      num2 = 0;
    }
    mentionCounts.ncMentionCount = Math.max(num2 + (importDefault - closure_129_1), 0);
    tmp14 = null == mentionCounts2 || null == notifCenterReadState1;
  }
}
function aggregateGuildState(guild_id, unreadByType, unread) {
  closure_0 = unreadByType;
  const entries = Object.entries(unreadByType.unreadByType);
  unreadByType.unread = entries.some((item) => {
    [tmp, tmp2] = item;
    return Number(tmp) !== constants.GUILD_EVENT && tmp2;
  });
  unreadByType.lowImportanceMentionCount = 0;
  unreadByType.highImportanceMentionCount = 0;
  const item = SnowflakeUtilsDefault.forEach(unreadByType.mentionCounts, (count) => {
    count = count.count;
    if (count.isMentionLowImportance) {
      tmp.lowImportanceMentionCount = tmp.lowImportanceMentionCount + count;
    } else {
      tmp.highImportanceMentionCount = tmp.highImportanceMentionCount + count;
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
        obj2.add(tmp2);
      } else {
        obj2.delete(tmp2);
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
  let tmp = guildId;
  if (NULL_STRING_GUILD_ID !== guildId) {
    closure_0 = tmp;
    let tmp6 = tmp;
    if (tmp == null) {
      tmp6 = tmp2;
    }
    let tmp8 = tmp;
    if (tmp == null) {
      tmp8 = tmp2;
    }
    let tmp9 = guilds[tmp8];
    if (tmp9 == null) {
      let tmp11 = tmp;
      if (tmp == null) {
        tmp11 = tmp2;
      }
      let mentionCounts = { unread: false, unreadByType: {}, unreadChannelId: null, lowImportanceMentionCount: 0, highImportanceMentionCount: 0, mentionCounts: {}, ncMentionCount: 0, sentinel: null };
      let num;
      if (guilds[tmp11] != null) {
        num = tmp12.sentinel;
      }
      if (num == null) {
        num = 0;
      }
      mentionCounts.sentinel = num;
      tmp9 = mentionCounts;
    }
    guilds[tmp6] = tmp9;
    let tmp14 = tmp;
    if (tmp == null) {
      tmp14 = tmp2;
    }
    mentionCounts = { unread: false, unreadByType: {}, unreadChannelId: null, lowImportanceMentionCount: 0, highImportanceMentionCount: 0, mentionCounts: {}, ncMentionCount: 0, sentinel: null };
    let num2;
    if (guilds[tmp14] != null) {
      num2 = tmp15.sentinel;
    }
    if (num2 == null) {
      num2 = 0;
    }
    mentionCounts.sentinel = num2;
    mentionCounts = {};
    const merged = Object.assign(tmp9.mentionCounts);
    mentionCounts.mentionCounts = mentionCounts;
    const obj1 = {};
    const merged1 = Object.assign(tmp9.unreadByType);
    mentionCounts.unreadByType = obj1;
    c2 = false;
    const item = items.forEach((item) => {
      const channel = ChannelStore.getChannel(item);
      if (null != channel) {
        if (channel.getGuildId() === closure_0) {
          const mentionCount = ReadStateStore.getMentionCount(item);
          let hasUnreadResult = null !== tmp6;
          if (hasUnreadResult) {
            hasUnreadResult = !c2;
          }
          if (hasUnreadResult) {
            hasUnreadResult = obj3.hasUnread(channel.id);
          }
          if (hasUnreadResult) {
            hasUnreadResult = isCountableChannel(channel, mentionCount, true);
          }
          if (hasUnreadResult) {
            c2 = true;
            obj.unreadChannelId = channel.id;
          }
          if (mentionCount > 0) {
            if (isCountableChannel(channel, mentionCount)) {
              obj = { count: mentionCount, isMentionLowImportance: obj3.getIsMentionLowImportance(item) };
              obj.mentionCounts[channel.id] = obj;
            }
          }
          const mentionCounts2 = obj.mentionCounts;
          const id = channel.id;
          delete tmp4[tmp];
        }
      } else {
        mentionCounts = obj.mentionCounts;
        delete tmp2[tmp3];
      }
    });
    mentionCounts.unreadByType[constants.CHANNEL] = c2;
    if (mentionCounts.unreadByType[constants.CHANNEL] !== tmp9.unreadByType[constants.CHANNEL]) {
      if (!mentionCounts.unreadByType[tmp22.CHANNEL]) {
        let channel = ChannelStore.getChannel(tmp9.unreadChannelId);
        if (null != channel) {
          if (!items.includes(channel.id)) {
            if (ReadStateStore.hasUnread(channel.id)) {
              if (isCountableChannel(channel)) {
                if (null != tmp) {
                  set.add(tmp);
                }
                mentionCounts.unreadByType[tmp22.CHANNEL] = true;
              }
            }
          }
        }
        return recountGuild(tmp);
      }
    }
    return aggregateGuildState(tmp, mentionCounts, tmp9);
  }
  tmp = null;
}
function updateNonChannel(guild_id, GUILD_EVENT) {
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
      let obj = { unread: false, unreadByType: {}, unreadChannelId: null, lowImportanceMentionCount: 0, highImportanceMentionCount: 0, mentionCounts: {}, ncMentionCount: 0, sentinel: null };
      let num;
      if (guilds[tmp7] != null) {
        num = tmp8.sentinel;
      }
      if (num == null) {
        num = 0;
      }
      obj.sentinel = num;
      tmp5 = obj;
    }
    guilds[tmp2] = tmp5;
    let tmp10 = guild_id;
    if (guild_id == null) {
      tmp10 = NULL_STRING_GUILD_ID;
    }
    obj = { unread: false, unreadByType: {}, unreadChannelId: null, lowImportanceMentionCount: 0, highImportanceMentionCount: 0, mentionCounts: {}, ncMentionCount: 0, sentinel: null };
    let num2;
    if (guilds[tmp10] != null) {
      num2 = tmp11.sentinel;
    }
    if (num2 == null) {
      num2 = 0;
    }
    obj.sentinel = num2;
    obj = {};
    const merged = Object.assign(tmp5.mentionCounts);
    obj.mentionCounts = obj;
    const obj1 = {};
    const merged1 = Object.assign(tmp5.unreadByType);
    obj.unreadByType = obj1;
    const hasUnreadResult = ReadStateStore.hasUnread(guild_id, GUILD_EVENT);
    let tmp20 = hasUnreadResult;
    if (GUILD_EVENT === constants.GUILD_EVENT) {
      const isMutedResult = UserGuildSettingsStore.isMuted(guild_id);
      let tmp22 = !isMutedResult;
      if (!isMutedResult) {
        const result = obj5.isMuteScheduledEventsEnabled(guild_id);
        let tmp24 = !result;
        if (!result) {
          tmp24 = hasUnreadResult;
        }
        tmp22 = tmp24;
      }
      tmp20 = tmp22;
      obj5 = UserGuildSettingsStore;
    }
    obj.unreadByType[constants.GUILD_EVENT] = tmp20;
    return aggregateGuildState(guild_id, obj, tmp5);
  }
}
function recountGuild(guildId, arg1) {
  let tmp2 = guildId;
  if (NULL_STRING_GUILD_ID !== guildId) {
    let tmp7 = tmp2;
    if (tmp2 == null) {
      tmp7 = tmp3;
    }
    let obj = { unread: false, unreadByType: {}, unreadChannelId: null, lowImportanceMentionCount: 0, highImportanceMentionCount: 0, mentionCounts: {}, ncMentionCount: 0, sentinel: null };
    let num;
    if (guilds[tmp7] != null) {
      num = tmp8.sentinel;
    }
    if (num == null) {
      num = 0;
    }
    obj.sentinel = num;
    if (null == tmp2) {
      const mutablePrivateChannels = ChannelStore.getMutablePrivateChannels();
      for (const key10155 in mutablePrivateChannels) {
        let tmp102 = mutablePrivateChannels[key10155];
        mentionCount = ReadStateStore.getMentionCount(key10155);
        let tmp76 = mentionCount > 0;
        if (tmp76) {
          tmp76 = isCountableChannel(tmp102, mentionCount);
        }
        if (!tmp76) {
          continue;
        } else {
          obj.highImportanceMentionCount = obj.highImportanceMentionCount + mentionCount;
          obj = { count: mentionCount, isMentionLowImportance: false };
          obj.mentionCounts[tmp102.id] = obj;
          continue;
        }
        continue;
      }
    } else {
      const isMutedResult = UserGuildSettingsStore.isMuted(tmp2);
      if (isMutedResult) {
        if (false === arg1) {
          return false;
        }
      }
      const mutedChannels = obj11.getMutedChannels(tmp2);
      const channelOverrides = obj11.getChannelOverrides(tmp2);
      let obj2 = isOptInEnabled;
      const result = obj2.isOptInEnabledForGuild(tmp2);
      const mutableBasicGuildChannelsForGuild = ChannelStore.getMutableBasicGuildChannelsForGuild(tmp2);
      for (const key10034 in mutableBasicGuildChannelsForGuild) {
        let obj12 = mutableBasicGuildChannelsForGuild[key10034];
        let hasItem = isMutedResult;
        if (!isMutedResult) {
          hasItem = mutedChannels.has(key10034);
        }
        if (!hasItem) {
          let hasItem1 = null != obj12.parent_id;
          if (hasItem1) {
            hasItem1 = mutedChannels.has(obj12.parent_id);
          }
          hasItem = hasItem1;
        }
        let tmp20 = obj.unreadByType[constants.CHANNEL];
        let tmp19 = constants;
        let guildChannelUnreadState = ReadStateStore.getGuildChannelUnreadState(obj12, result, channelOverrides, hasItem, tmp20);
        ({ mentionCount, isMentionLowImportance } = guildChannelUnreadState);
        let tmp30 = mentionCount > 0;
        if (tmp30) {
          let tmp32 = !tmp20;
          if (!tmp20) {
            let tmp33 = !hasItem;
            if (hasItem) {
              tmp33 = tmp30;
            }
            tmp32 = tmp33;
          }
          if (tmp32) {
            tmp32 = tmp29;
          }
          if (tmp32) {
            let tmp35 = React6(obj12.type);
            let tmp36 = !tmp35;
            if (tmp35) {
              tmp36 = 0 !== mentionCount;
            }
            if (tmp36) {
              let canBasicChannelResult = PermissionStore.canBasicChannel(React5(obj12.type), obj12);
              if (canBasicChannelResult) {
                let tmp40 = null != obj12.guild_id;
                if (tmp40) {
                  let tmp41 = result;
                  if (result) {
                    let result1 = React7(obj12.type);
                    if (!result1) {
                      result1 = UserGuildSettingsStore.isChannelRecordOrParentOptedIn(obj12);
                    }
                    tmp41 = !result1;
                  }
                  if (tmp41) {
                    tmp41 = 0 === mentionCount;
                  }
                  tmp40 = tmp41;
                }
                let tmp45 = !tmp40;
                if (!tmp40) {
                  let tmp46 = "flags" in obj12;
                  let tmp47 = !tmp46;
                  if (tmp46) {
                    tmp47 = !obj12.hasFlag(ChannelFlags.IS_GUILD_RESOURCE_CHANNEL);
                  }
                  if (tmp47) {
                    let tmp49 = mentionCount > 0;
                    if (!tmp49) {
                      tmp49 = UserGuildSettingsStore.resolveUnreadSetting(obj12) === constants2.ALL_MESSAGES;
                    }
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
                obj.unreadByType[tmp19.CHANNEL] = true;
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
                obj = { count: mentionCount, isMentionLowImportance };
                obj.mentionCounts[obj12.id] = obj;
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
            let isMutedResult1 = obj.unreadByType[constants.CHANNEL];
            let tmp100 = constants;
            if (!isMutedResult1) {
              isMutedResult1 = !ReadStateStore.hasUnread(tmp55);
            }
            if (!isMutedResult1) {
              isMutedResult1 = JoinedThreadsStore.isMuted(tmp55);
            }
            if (!isMutedResult1) {
              isMutedResult1 = isMutedResult;
            }
            if (!isMutedResult1) {
              obj.unreadByType[tmp100.CHANNEL] = true;
              obj.unreadChannelId = tmp55;
            }
            let mentionCount1 = ReadStateStore.getMentionCount(tmp55);
            isMentionLowImportance = ReadStateStore.getIsMentionLowImportance(tmp55);
            if (mentionCount1 <= 0) {
              continue;
            } else {
              if (isMentionLowImportance) {
                obj.lowImportanceMentionCount = obj.lowImportanceMentionCount + mentionCount1;
              } else {
                obj.highImportanceMentionCount = obj.highImportanceMentionCount + mentionCount1;
              }
              let obj1 = { count: mentionCount1, isMentionLowImportance };
              obj.mentionCounts[tmp55] = obj1;
              continue;
            }
            continue;
          }
        }
        continue;
      }
      let tmp64 = !tmp63;
      if (!obj.unreadByType[constants.GUILD_EVENT]) {
        const GUILD_EVENT = tmp62.GUILD_EVENT;
        const hasUnreadResult = ReadStateStore.hasUnread(tmp2, GUILD_EVENT);
        let tmp67 = hasUnreadResult;
        if (GUILD_EVENT === tmp62.GUILD_EVENT) {
          const isMutedResult2 = UserGuildSettingsStore.isMuted(tmp2);
          let tmp69 = !isMutedResult2;
          if (!isMutedResult2) {
            const result2 = obj6.isMuteScheduledEventsEnabled(tmp2);
            let tmp71 = !result2;
            if (!result2) {
              tmp71 = hasUnreadResult;
            }
            tmp69 = tmp71;
          }
          tmp67 = tmp69;
          obj6 = UserGuildSettingsStore;
        }
        tmp64 = tmp67;
      }
      if (tmp64) {
        obj.unreadByType[tmp62.GUILD_EVENT] = true;
      }
    }
    const _Object = Object;
    const entries = Object.entries(obj.unreadByType);
    obj.unread = entries.some((item) => {
      [tmp, tmp2] = item;
      return Number(tmp) !== constants.GUILD_EVENT && tmp2;
    });
    let tmp79 = tmp2;
    if (tmp2 == null) {
      tmp79 = NULL_STRING_GUILD_ID;
    }
    let tmp81 = tmp2;
    if (tmp2 == null) {
      tmp81 = NULL_STRING_GUILD_ID;
    }
    let tmp82 = guilds[tmp81];
    if (tmp82 == null) {
      let tmp84 = tmp2;
      if (tmp2 == null) {
        tmp84 = NULL_STRING_GUILD_ID;
      }
      obj2 = { unread: false, unreadByType: {}, unreadChannelId: null, lowImportanceMentionCount: 0, highImportanceMentionCount: 0, mentionCounts: {}, ncMentionCount: 0, sentinel: null };
      let num4;
      if (guilds[tmp84] != null) {
        num4 = tmp85.sentinel;
      }
      if (num4 == null) {
        num4 = 0;
      }
      obj2.sentinel = num4;
      tmp82 = obj2;
    }
    guilds[tmp79] = tmp82;
    let flag3 = obj.unread !== tmp82.unread || obj.highImportanceMentionCount !== tmp82.highImportanceMentionCount || obj.lowImportanceMentionCount !== tmp82.lowImportanceMentionCount;
    if (flag3) {
      let tmp87 = tmp2;
      if (tmp2 == null) {
        tmp87 = NULL_STRING_GUILD_ID;
      }
      guilds[tmp87] = obj;
      if (null != tmp2) {
        if (obj.unread) {
          obj10.add(tmp2);
        } else {
          obj10.delete(tmp2);
        }
      }
      closure_24 = closure_24 + 1;
      if (tmp2 == null) {
        tmp2 = NULL_STRING_GUILD_ID;
      }
      updateGuildUnreadSentinel(tmp2);
      updateNotificationCenterMentions(obj, tmp82);
      flag3 = true;
    }
    return flag3;
  }
  tmp2 = null;
}
function handleOverlayInitialize(guilds) {
  guilds = {};
  closure_24 = 0;
  set = new Set();
  recountGuild(null);
  for (let num = 0; num < length; num = num + 1) {
    let tmp3 = guilds[num];
    if (null != tmp3) {
      let tmp6 = recountGuild(tmp3.properties.id);
    }
  }
}
function handleConnectionOpen(arg0) {
  ({ guilds, readState } = arg0);
  closure_22 = {};
  c24 = 0;
  set = new Set();
  const set1 = new Set();
  if (readState.entries.length < 500) {
    const entries = readState.entries;
    const item = entries.forEach((mention_count) => {
      let tmp = null != mention_count.mention_count;
      if (tmp) {
        tmp = mention_count.mention_count > 0;
      }
      if (tmp) {
        if (null != mention_count.read_state_type) {
          if (mention_count.read_state_type !== constants.CHANNEL) {
            set1.add(mention_count.id);
          }
        }
        const channel = ChannelStore.getChannel(mention_count.id);
        let guild_id;
        if (channel != null) {
          guild_id = channel.guild_id;
        }
        set1.add(guild_id);
      }
    });
  }
  recountGuild(null);
  for (const item10032 of guilds) {
    let hasItem;
    let tmp6 = recountGuild;
    if (tmp2) {
      hasItem = set1.has(tmp5.id);
    }
    let tmp6Result = tmp6(item10032.id, hasItem);
    continue;
  }
}
function recomputeAllGuilds() {
  guilds = {};
  set = new Set();
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
    const id = guild.id;
    delete tmp2[tmp];
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
function handleGuildMemberUpdate(user) {
  let tmp = user.user.id === AuthenticationStore.getId();
  if (tmp) {
    tmp = recountGuild(user.guildId);
  }
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
  channelId = channelId.channelId;
  const channel = ChannelStore.getChannel(channelId);
  if (null == channel) {
    return false;
  } else {
    if (null != channel.guild_id) {
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
        const obj = { unread: false, unreadByType: {}, unreadChannelId: null, lowImportanceMentionCount: 0, highImportanceMentionCount: 0, mentionCounts: {}, ncMentionCount: 0, sentinel: null };
        let num;
        if (guilds[guild_id] != null) {
          num = tmp6.sentinel;
        }
        if (num == null) {
          num = 0;
        }
        obj.sentinel = num;
        tmp4 = obj;
      }
      guilds[tmp] = tmp4;
      if (channel.isThread()) {
        const hasJoinedResult = JoinedThreadsStore.hasJoined(channel.id);
        let isMutedResult = !hasJoinedResult;
        if (hasJoinedResult) {
          isMutedResult = obj3.isMuted(channel.id);
        }
        let result = isMutedResult;
        obj3 = JoinedThreadsStore;
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
  ({ channelId, guildId } = arg0);
  const isFavoritesGuildIdResult = FavoritesUtils.isFavoritesGuildId(guildId);
  let tmp2 = !isFavoritesGuildIdResult;
  if (!isFavoritesGuildIdResult) {
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
  return _modDef12(channels.channels).groupBy((getGuildId) => getGuildId.getGuildId()).reduce((acc, arr, index) => recountChannels(index, arr.map((id) => id.id)) || acc, false);
}
function handleBulkAck(channels) {
  const mapped = _modDef12(channels.channels).map((channelId) => channelId.channelId);
  const found = mapped.filter((item) => null != ChannelStore.getChannel(item));
  const arr = _modDef12(channels.channels);
  return found.groupBy((arg0) => {
    const channel = ChannelStore.getChannel(arg0);
    let guildId;
    if (channel != null) {
      guildId = channel.getGuildId();
    }
    return guildId;
  }).reduce((acc, item, index) => recountChannels(index, item) || acc, false);
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
  let result = ThreadActionUtils.doesThreadMembersActionAffectMe(id);
  if (result) {
    const items = [id.id];
    result = recountChannels(id.guildId, items);
  }
  return result;
}
function handleThreadListSync(threads) {
  threads = threads.threads;
  const found = threads.filter((id) => JoinedThreadsStore.hasJoined(id.id));
  return recountChannels(threads.guildId, found.map((id) => id.id));
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
  const keys = SnowflakeUtilsDefault.keys(guilds);
  return keys.reduce((acc, item) => {
    let hasItem = set.has(item);
    if (hasItem) {
      hasItem = recountGuild(item);
    }
    if (!hasItem) {
      hasItem = acc;
    }
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
  const item = new Set(messages.map((channel_id) => channel_id.channel_id)).forEach((item) => {
    channel = channel.getChannel(item);
    if (null != channel) {
      const items = [item];
      recountChannels(channel.getGuildId(), items);
    }
  });
}
const ChannelRecord = fn(1961);
({ getBasicAccessPermissions: closure_7, isGuildVocalChannelType: closure_8, isThread: closure_9 } = ChannelRecord);
const ChannelFlags = fn(1964).ChannelFlags;
const ReadStateConstants = fn(4742);
({ ReadStateTypes: closure_19, UnreadSetting: closure_20 } = ReadStateConstants);
const NULL_STRING_GUILD_ID = fn(1074).NULL_STRING_GUILD_ID;
let guilds = {};
let set = new Set();
let closure_24 = 0;
let GuildReadStateStore;
class GuildReadStateStore extends tmp3 {
  constructor() {
    closure_0 = undefined;
    obj = {
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
    tmp = new tmp(obj, handleClearNotifCenterGuildMentions, handleGenericUpdate, new.target);
    closure_0 = tmp;
    return tmp;
  }
}
const prototype = GuildReadStateStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(ChannelStore, SelectedChannelStore, ReadStateStore, PermissionStore, AuthenticationStore, UserStore, UserGuildSettingsStore, ActiveJoinedThreadsStore, JoinedThreadsStore, RecentMentionsStore);
};
prototype["loadCache"] = function loadCache() {
  const snapshot = this.readSnapshot(GuildReadStateStore.LATEST_SNAPSHOT_VERSION);
  if (null != snapshot) {
    guilds = snapshot.guilds;
    const _Set = Set;
    set = new Set(snapshot.unreadGuilds);
  }
};
prototype["takeSnapshot"] = function takeSnapshot() {
  let obj = { version: GuildReadStateStore.LATEST_SNAPSHOT_VERSION, data: null };
  obj = { guilds, unreadGuilds: Array.from(set) };
  obj.data = obj;
  return obj;
};
prototype["hasAnyUnread"] = function hasAnyUnread() {
  return set.size > 0;
};
prototype["getStoreChangeSentinel"] = function getStoreChangeSentinel() {
  return closure_24;
};
prototype["getMutableUnreadGuilds"] = function getMutableUnreadGuilds() {
  return set;
};
prototype["getMutableGuildStates"] = function getMutableGuildStates() {
  return guilds;
};
prototype["shouldCountChannelUnread"] = function shouldCountChannelUnread(channel, mentionCount) {
  let num = mentionCount;
  if (mentionCount === undefined) {
    num = 0;
  }
  return isCountableChannel(channel, num, true);
};
prototype["hasUnread"] = function hasUnread(arg0) {
  return set.has(arg0);
};
prototype["getMentionCount"] = function getMentionCount(arg0) {
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
    const obj = { unread: false, unreadByType: {}, unreadChannelId: null, lowImportanceMentionCount: 0, highImportanceMentionCount: 0, mentionCounts: {}, ncMentionCount: 0, sentinel: null };
    let num;
    if (guilds[tmp] != null) {
      num = tmp8.sentinel;
    }
    if (num == null) {
      num = 0;
    }
    obj.sentinel = num;
    tmp6 = obj;
  }
  guilds[tmp3] = tmp6;
  return tmp6.highImportanceMentionCount + tmp6.lowImportanceMentionCount;
};
prototype["getIsMentionLowImportance"] = function getIsMentionLowImportance(arg0) {
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
    const obj = { unread: false, unreadByType: {}, unreadChannelId: null, lowImportanceMentionCount: 0, highImportanceMentionCount: 0, mentionCounts: {}, ncMentionCount: 0, sentinel: null };
    let num;
    if (guilds[tmp] != null) {
      num = tmp8.sentinel;
    }
    if (num == null) {
      num = 0;
    }
    obj.sentinel = num;
    tmp6 = obj;
  }
  guilds[tmp3] = tmp6;
  return 0 === tmp6.highImportanceMentionCount;
};
prototype["getGuildHasUnreadIgnoreMuted"] = function getGuildHasUnreadIgnoreMuted(id) {
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
};
prototype["getTotalMentionCount"] = function getTotalMentionCount(arg0) {
  let num = 0;
  let num2 = 0;
  const keys = Object.keys();
  if (keys !== undefined) {
    num2 = num;
    while (keys[tmp] !== undefined) {
      let tmp7 = tmp2;
      if (tmp2) {
        tmp7 = tmp5 === NULL_STRING_GUILD_ID;
      }
      if (tmp7) {
        continue;
      } else {
        num = tmp4 + guilds[tmp5].highImportanceMentionCount;
        continue;
      }
      continue;
    }
  }
  return num2;
};
prototype["getTotalNotificationsMentionCount"] = function getTotalNotificationsMentionCount(arg0) {
  let num = 0;
  let num2 = 0;
  const keys = Object.keys();
  if (keys !== undefined) {
    num2 = num;
    while (keys[tmp] !== undefined) {
      let tmp7 = tmp2;
      if (tmp2) {
        tmp7 = tmp5 === NULL_STRING_GUILD_ID;
      }
      if (tmp7) {
        continue;
      } else {
        num = tmp4 + guilds[tmp5].ncMentionCount;
        continue;
      }
      continue;
    }
  }
  return num2;
};
prototype["getPrivateChannelMentionCount"] = function getPrivateChannelMentionCount() {
  let num;
  if (guilds[NULL_STRING_GUILD_ID] != null) {
    num = tmp.highImportanceMentionCount;
  }
  if (num == null) {
    num = 0;
  }
  return num;
};
prototype["getMentionCountForPrivateChannel"] = function getMentionCountForPrivateChannel(channelId) {
  let num;
  if (guilds[NULL_STRING_GUILD_ID] != null) {
    num = tmp.mentionCounts[channelId];
  }
  if (num == null) {
    num = 0;
  }
  return num;
};
prototype["getHighImportanceMentionCountForChannel"] = function getHighImportanceMentionCountForChannel(guild_id, currentlySelectedChannelId) {
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
};
prototype["getGuildChangeSentinel"] = function getGuildChangeSentinel(arg0) {
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
    const obj = { unread: false, unreadByType: {}, unreadChannelId: null, lowImportanceMentionCount: 0, highImportanceMentionCount: 0, mentionCounts: {}, ncMentionCount: 0, sentinel: null };
    let num;
    if (guilds[tmp] != null) {
      num = tmp8.sentinel;
    }
    if (num == null) {
      num = 0;
    }
    obj.sentinel = num;
    tmp6 = obj;
  }
  guilds[tmp3] = tmp6;
  return tmp6.sentinel;
};
GuildReadStateStore.displayName = "GuildReadStateStore";
GuildReadStateStore.LATEST_SNAPSHOT_VERSION = 1;
const guildReadStateStore = new GuildReadStateStore();
const size = fn(2);
let result = size.fileFinishedImporting("stores/GuildReadStateStore.tsx");

export default guildReadStateStore;