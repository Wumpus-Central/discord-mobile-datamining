// === Module 6077: GuildReadStateStore ===

// Module 6077 (GuildReadStateStore)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import _modDef12 from "module_12" /* 12 */;
import FavoritesUtils from "FavoritesUtils" /* 2090 */;
import ThreadActionUtils from "ThreadActionUtils" /* 4758 */;
import NSFWContentGate from "NSFWContentGate" /* 5943 */;
import isOptInEnabled from "isOptInEnabled" /* 6076 */;
import RecentMentionsStore from "RecentMentionsStore" /* 6078 */;
import NotificationCenterItemsStore from "NotificationCenterItemsStore" /* 6057 */;
import ActiveJoinedThreadsStore from "ActiveJoinedThreadsStore" /* 6034 */;
import JoinedThreadsStore from "JoinedThreadsStore" /* 4752 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 2065 */;
import GuildStore from "GuildStore" /* 2087 */;
import MobileCacheSnapshotStore from "MobileCacheSnapshotStore" /* 1084 */;
import PermissionStore from "PermissionStore" /* 4750 */;
import ReadStateStore from "ReadStateStore" /* 6035 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2116 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 5966 */;
import UserStore from "UserStore" /* 1390 */;

require = fn;
function updateGuildUnreadSentinel(NULL_STRING_GUILD_ID) {
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
  closure_26 = closure_26 + 1;
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
            let result2 = collapsed(channel.type);
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
        obj = SnowflakeUtilsDefault;
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
        obj = SnowflakeUtilsDefault;
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
      unreadByType.lowImportanceMentionCount = unreadByType.lowImportanceMentionCount + count;
    } else {
      unreadByType.highImportanceMentionCount = unreadByType.highImportanceMentionCount + count;
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
    closure_26 = closure_26 + 1;
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
      let obj = { unread: false, unreadByType: {}, unreadChannelId: null, lowImportanceMentionCount: 0, highImportanceMentionCount: 0, mentionCounts: {}, ncMentionCount: 0, sentinel: null };
      let num;
      if (guilds[tmp11] != null) {
        num = tmp12.sentinel;
      }
      if (num == null) {
        num = 0;
      }
      obj.sentinel = num;
      tmp9 = obj;
    }
    guilds[tmp6] = tmp9;
    let tmp14 = tmp;
    if (tmp == null) {
      tmp14 = NULL_STRING_GUILD_ID;
    }
    const obj2 = { unread: false, unreadByType: {}, unreadChannelId: null, lowImportanceMentionCount: 0, highImportanceMentionCount: 0, mentionCounts: {}, ncMentionCount: 0, sentinel: null };
    let num2;
    if (guilds[tmp14] != null) {
      num2 = tmp15.sentinel;
    }
    if (num2 == null) {
      num2 = 0;
    }
    obj2.sentinel = num2;
    const obj3 = {};
    const merged = Object.assign(tmp9.mentionCounts);
    obj2.mentionCounts = obj3;
    const obj4 = {};
    const merged1 = Object.assign(tmp9.unreadByType);
    obj2.unreadByType = obj4;
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
            hasUnreadResult = ReadStateStore.hasUnread(channel.id);
          }
          if (hasUnreadResult) {
            hasUnreadResult = isCountableChannel(channel, mentionCount, true);
          }
          if (hasUnreadResult) {
            c2 = true;
            obj2.unreadChannelId = channel.id;
          }
          if (mentionCount > 0) {
            if (isCountableChannel(channel, mentionCount)) {
              const obj = { count: mentionCount, isMentionLowImportance: ReadStateStore.getIsMentionLowImportance(item) };
              obj2.mentionCounts[channel.id] = obj;
            }
          }
          const mentionCounts2 = obj2.mentionCounts;
          const id = channel.id;
          delete tmp4[tmp];
        }
      } else {
        const mentionCounts = obj2.mentionCounts;
        delete tmp2[tmp3];
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
      const obj = { unread: false, unreadByType: {}, unreadChannelId: null, lowImportanceMentionCount: 0, highImportanceMentionCount: 0, mentionCounts: {}, ncMentionCount: 0, sentinel: null };
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
    const obj2 = { unread: false, unreadByType: {}, unreadChannelId: null, lowImportanceMentionCount: 0, highImportanceMentionCount: 0, mentionCounts: {}, ncMentionCount: 0, sentinel: null };
    let num2;
    if (guilds[tmp10] != null) {
      num2 = tmp11.sentinel;
    }
    if (num2 == null) {
      num2 = 0;
    }
    obj2.sentinel = num2;
    const obj3 = {};
    const merged = Object.assign(tmp5.mentionCounts);
    obj2.mentionCounts = obj3;
    const obj4 = {};
    const merged1 = Object.assign(tmp5.unreadByType);
    obj2.unreadByType = obj4;
    const hasUnreadResult = ReadStateStore.hasUnread(guild_id, GUILD_EVENT);
    let tmp20 = hasUnreadResult;
    if (GUILD_EVENT === constants.GUILD_EVENT) {
      const isMutedResult = UserGuildSettingsStore.isMuted(guild_id);
      let tmp22 = !isMutedResult;
      if (!isMutedResult) {
        const result = UserGuildSettingsStore.isMuteScheduledEventsEnabled(guild_id);
        let tmp24 = !result;
        if (!result) {
          tmp24 = hasUnreadResult;
        }
        tmp22 = tmp24;
      }
      tmp20 = tmp22;
    }
    obj2.unreadByType[constants.GUILD_EVENT] = tmp20;
    return aggregateGuildState(guild_id, obj2, tmp5);
  }
}
function recountGuild(guildId, hasItem) {
  let tmp2 = guildId;
  if (NULL_STRING_GUILD_ID !== guildId) {
    let tmp7 = tmp2;
    if (tmp2 == null) {
      tmp7 = tmp3;
    }
    const obj = { unread: false, unreadByType: {}, unreadChannelId: null, lowImportanceMentionCount: 0, highImportanceMentionCount: 0, mentionCounts: {}, ncMentionCount: 0, sentinel: null };
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
      for (const key10166 in mutablePrivateChannels) {
        let tmp107 = mutablePrivateChannels[key10166];
        let mentionCount1 = ReadStateStore.getMentionCount(key10166);
        let tmp81 = mentionCount1 > 0;
        if (tmp81) {
          tmp81 = isCountableChannel(tmp107, mentionCount1);
        }
        if (!tmp81) {
          continue;
        } else {
          obj.highImportanceMentionCount = obj.highImportanceMentionCount + mentionCount1;
          let obj2 = { count: mentionCount1, isMentionLowImportance: false };
          obj.mentionCounts[tmp107.id] = obj2;
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
      const result = isOptInEnabled.isOptInEnabledForGuild(tmp2);
      const result1 = NSFWContentGate.currentUserCanSeeNSFW();
      const obj5 = { userCanSeeNSFW: result1, guildIsNSFW: null };
      let tmp15 = !result1;
      if (!result1) {
        tmp15 = isGuildNSFW(GuildStore.getGuild(tmp2));
      }
      obj5.guildIsNSFW = tmp15;
      const mutableBasicGuildChannelsForGuild = ChannelStore.getMutableBasicGuildChannelsForGuild(tmp2);
      for (const key10044 in mutableBasicGuildChannelsForGuild) {
        let obj14 = mutableBasicGuildChannelsForGuild[key10044];
        hasItem = isMutedResult;
        if (!isMutedResult) {
          hasItem = mutedChannels.has(key10044);
        }
        if (!hasItem) {
          let hasItem1 = null != obj14.parent_id;
          if (hasItem1) {
            hasItem1 = mutedChannels.has(obj14.parent_id);
          }
          hasItem = hasItem1;
        }
        let tmp24 = obj.unreadByType[constants.CHANNEL];
        let guildChannelUnreadState = ReadStateStore.getGuildChannelUnreadState(obj14, result, channelOverrides, hasItem, tmp24, obj5);
        ({ mentionCount, isMentionLowImportance } = guildChannelUnreadState);
        let tmp35 = mentionCount > 0;
        if (tmp35) {
          let tmp37 = !tmp24;
          if (!tmp24) {
            let tmp38 = !hasItem;
            if (hasItem) {
              tmp38 = tmp35;
            }
            tmp37 = tmp38;
          }
          if (tmp37) {
            tmp37 = tmp34;
          }
          if (tmp37) {
            let tmp40 = options(obj14.type);
            let tmp41 = !tmp40;
            if (tmp40) {
              tmp41 = 0 !== mentionCount;
            }
            if (tmp41) {
              let canBasicChannelResult = PermissionStore.canBasicChannel(closure_1_8(obj14.type), obj14);
              if (canBasicChannelResult) {
                let tmp45 = null != obj14.guild_id;
                if (tmp45) {
                  let tmp46 = result;
                  if (result) {
                    let result2 = collapsed(obj14.type);
                    if (!result2) {
                      result2 = UserGuildSettingsStore.isChannelRecordOrParentOptedIn(obj14);
                    }
                    tmp46 = !result2;
                  }
                  if (tmp46) {
                    tmp46 = 0 === mentionCount;
                  }
                  tmp45 = tmp46;
                }
                let tmp50 = !tmp45;
                if (!tmp45) {
                  let tmp51 = "flags" in obj14;
                  let tmp52 = !tmp51;
                  if (tmp51) {
                    tmp52 = !obj14.hasFlag(ChannelFlags.IS_GUILD_RESOURCE_CHANNEL);
                  }
                  if (tmp52) {
                    let tmp54 = mentionCount > 0;
                    if (!tmp54) {
                      tmp54 = UserGuildSettingsStore.resolveUnreadSetting(obj14) === constants2.ALL_MESSAGES;
                    }
                    tmp52 = tmp54;
                  }
                  tmp50 = tmp52;
                }
                canBasicChannelResult = tmp50;
              }
              tmp41 = canBasicChannelResult;
            }
            if (!tmp41) {
              continue;
            } else {
              if (tmp37) {
                obj.unreadByType[constants.CHANNEL] = true;
                obj.unreadChannelId = key10044;
              }
              if (!tmp35) {
                continue;
              } else {
                if (isMentionLowImportance) {
                  obj.lowImportanceMentionCount = obj.lowImportanceMentionCount + mentionCount;
                } else {
                  obj.highImportanceMentionCount = obj.highImportanceMentionCount + mentionCount;
                }
                let obj6 = { count: mentionCount, isMentionLowImportance };
                obj.mentionCounts[obj14.id] = obj6;
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
      for (const key10119 in activeJoinedThreadsForGuild) {
        let keys = Object.keys();
        if (keys === undefined) {
          continue;
        } else {
          let tmp60 = keys[tmp];
          while (tmp60 !== undefined) {
            let isMutedResult1 = obj.unreadByType[constants.CHANNEL];
            if (!isMutedResult1) {
              isMutedResult1 = !ReadStateStore.hasUnread(tmp60);
            }
            if (!isMutedResult1) {
              isMutedResult1 = JoinedThreadsStore.isMuted(tmp60);
            }
            if (!isMutedResult1) {
              isMutedResult1 = isMutedResult;
            }
            if (!isMutedResult1) {
              obj.unreadByType[constants.CHANNEL] = true;
              obj.unreadChannelId = tmp60;
            }
            let mentionCount2 = ReadStateStore.getMentionCount(tmp60);
            let isMentionLowImportance1 = ReadStateStore.getIsMentionLowImportance(tmp60);
            if (mentionCount2 <= 0) {
              continue;
            } else {
              if (isMentionLowImportance1) {
                obj.lowImportanceMentionCount = obj.lowImportanceMentionCount + mentionCount2;
              } else {
                obj.highImportanceMentionCount = obj.highImportanceMentionCount + mentionCount2;
              }
              let obj7 = { count: mentionCount2, isMentionLowImportance: isMentionLowImportance1 };
              obj.mentionCounts[tmp60] = obj7;
              continue;
            }
            continue;
          }
        }
        continue;
      }
      let tmp69 = !tmp68;
      if (!obj.unreadByType[constants.GUILD_EVENT]) {
        const GUILD_EVENT = constants.GUILD_EVENT;
        const hasUnreadResult = ReadStateStore.hasUnread(tmp2, GUILD_EVENT);
        let tmp72 = hasUnreadResult;
        if (GUILD_EVENT === constants.GUILD_EVENT) {
          const isMutedResult2 = UserGuildSettingsStore.isMuted(tmp2);
          let tmp74 = !isMutedResult2;
          if (!isMutedResult2) {
            const result3 = UserGuildSettingsStore.isMuteScheduledEventsEnabled(tmp2);
            let tmp76 = !result3;
            if (!result3) {
              tmp76 = hasUnreadResult;
            }
            tmp74 = tmp76;
          }
          tmp72 = tmp74;
        }
        tmp69 = tmp72;
      }
      if (tmp69) {
        obj.unreadByType[constants.GUILD_EVENT] = true;
      }
    }
    const _Object = Object;
    const entries = Object.entries(obj.unreadByType);
    obj.unread = entries.some((item) => {
      [tmp, tmp2] = item;
      return Number(tmp) !== constants.GUILD_EVENT && tmp2;
    });
    let tmp84 = tmp2;
    if (tmp2 == null) {
      tmp84 = NULL_STRING_GUILD_ID;
    }
    let tmp86 = tmp2;
    if (tmp2 == null) {
      tmp86 = NULL_STRING_GUILD_ID;
    }
    let tmp87 = guilds[tmp86];
    if (tmp87 == null) {
      let tmp89 = tmp2;
      if (tmp2 == null) {
        tmp89 = NULL_STRING_GUILD_ID;
      }
      const obj9 = { unread: false, unreadByType: {}, unreadChannelId: null, lowImportanceMentionCount: 0, highImportanceMentionCount: 0, mentionCounts: {}, ncMentionCount: 0, sentinel: null };
      let num4;
      if (guilds[tmp89] != null) {
        num4 = tmp90.sentinel;
      }
      if (num4 == null) {
        num4 = 0;
      }
      obj9.sentinel = num4;
      tmp87 = obj9;
    }
    guilds[tmp84] = tmp87;
    let flag3 = obj.unread !== tmp87.unread || obj.highImportanceMentionCount !== tmp87.highImportanceMentionCount || obj.lowImportanceMentionCount !== tmp87.lowImportanceMentionCount;
    if (flag3) {
      let tmp92 = tmp2;
      if (tmp2 == null) {
        tmp92 = NULL_STRING_GUILD_ID;
      }
      guilds[tmp92] = obj;
      if (null != tmp2) {
        if (obj.unread) {
          set.add(tmp2);
        } else {
          set.delete(tmp2);
        }
      }
      closure_26 = closure_26 + 1;
      if (tmp2 == null) {
        tmp2 = NULL_STRING_GUILD_ID;
      }
      updateGuildUnreadSentinel(tmp2);
      updateNotificationCenterMentions(obj, tmp87);
      flag3 = true;
    }
    return flag3;
  }
  tmp2 = null;
}
function handleOverlayInitialize(guilds) {
  guilds = {};
  closure_26 = 0;
  new Set();
  recountGuild(null);
  for (let num = 0; num < length; num = num + 1) {
    let tmp3 = guilds[num];
    if (null != tmp3) {
      let tmp6 = recountGuild(tmp3.properties.id);
    }
  }
  length = guilds.length;
}
function handleConnectionOpen(arg0) {
  ({ guilds, readState } = arg0);
  let set1;
  closure_24 = {};
  c26 = 0;
  new Set();
  const currentUser = UserStore.getCurrentUser();
  nsfwAllowed = undefined;
  if (currentUser != null) {
    nsfwAllowed = currentUser.nsfwAllowed;
  }
  set1 = new Set();
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
  for (const item10037 of guilds) {
    let hasItem;
    if (tmp4) {
      hasItem = set1.has(tmp7.id);
    }
    let tmp8Result = recountGuild(item10037.id, hasItem);
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
    const id = guild.id;
    delete tmp2[tmp];
    set.delete(guild.id);
    closure_26 = closure_26 + 1;
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
          isMutedResult = JoinedThreadsStore.isMuted(channel.id);
        }
        let result = isMutedResult;
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
function handleGuildNSFWLevelUpdate(guild) {
  const result = NSFWContentGate.currentUserCanSeeNSFW();
  let tmp2 = !result;
  if (!result) {
    tmp2 = recountGuild(guild.guild.id);
  }
  return tmp2;
}
function handleCurrentUserNSFWAllowedUpdate() {
  const currentUser = UserStore.getCurrentUser();
  nsfwAllowed = undefined;
  if (currentUser != null) {
    nsfwAllowed = currentUser.nsfwAllowed;
  }
  let flag = nsfwAllowed !== nsfwAllowed;
  if (flag) {
    recomputeAllGuilds();
    flag = true;
  }
  return flag;
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
const ChannelRecord = fn(2069);
({ getBasicAccessPermissions: closure_8, isGuildVocalChannelType: closure_9, isThread: c10 } = ChannelRecord);
const isGuildNSFW = fn(2083).isGuildNSFW;
const ChannelFlags = fn(2072).ChannelFlags;
const ReadStateConstants = fn(5967);
({ ReadStateTypes: closure_21, UnreadSetting: closure_22 } = ReadStateConstants);
const NULL_STRING_GUILD_ID = fn(1085).NULL_STRING_GUILD_ID;
let guilds = {};
let set = new Set();
let closure_26 = 0;
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
      GUILD_UPDATE: handleGuildNSFWLevelUpdate,
      CURRENT_USER_UPDATE: handleCurrentUserNSFWAllowedUpdate,
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
    tmp1 = new tmp(obj, handleClearNotifCenterGuildMentions, handleGenericUpdate, new.target);
    closure_0 = tmp1;
    return tmp1;
  }
}
const prototype = GuildReadStateStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(ChannelStore, GuildStore, SelectedChannelStore, ReadStateStore, PermissionStore, AuthenticationStore, UserStore, UserGuildSettingsStore, ActiveJoinedThreadsStore, JoinedThreadsStore, RecentMentionsStore);
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
  const obj = { version: GuildReadStateStore.LATEST_SNAPSHOT_VERSION, data: { guilds, unreadGuilds: Array.from(set) } };
  return obj;
};
prototype["hasAnyUnread"] = function hasAnyUnread() {
  return set.size > 0;
};
prototype["getStoreChangeSentinel"] = function getStoreChangeSentinel() {
  return closure_26;
};
prototype["getMutableUnreadGuilds"] = function getMutableUnreadGuilds() {
  return set;
};
prototype["getMutableGuildStates"] = function getMutableGuildStates() {
  return guilds;
};
prototype["shouldCountChannelUnread"] = function shouldCountChannelUnread(channel) {
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