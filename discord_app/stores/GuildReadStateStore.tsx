// === Module 7328: updateGuildUnreadSentinel ===

// Module 7328 (updateGuildUnreadSentinel)
import DISCORD_EPOCHDefault from "DISCORD_EPOCH" /* 11 */;
import applyDefault from "apply" /* 12 */;
import clearAllDefault from "clearAll" /* 1220 */;
import getFavoritesAwareGuildName from "getFavoritesAwareGuildName" /* 1913 */;
import doesThreadMembersActionAffectMe from "doesThreadMembersActionAffectMe" /* 4097 */;
import useOptInEnabledForGuild from "useOptInEnabledForGuild" /* 7227 */;
import closure_3 from "findOrCreateMessageRecord" /* 7329 */;
import closure_4 from "_validate" /* 7331 */;
import closure_5 from "rebuild" /* 5413 */;
import closure_6 from "storeThread" /* 4092 */;
import createChannelRecord from "createChannelRecord" /* 1395 */;
import closure_10 from "fetchFingerprint" /* 1218 */;
import closure_11 from "ensureGuildLoaded" /* 1391 */;
import closure_12 from "createGuildRecordFromRust" /* 1910 */;
import closure_13 from "getUncachedChannelPermissions" /* 4090 */;
import closure_14 from "generateOldThreadCutoff" /* 4461 */;
import closure_15 from "handleConnectionOpen" /* 1982 */;
import closure_16 from "updateUserGuildSettingsInternal" /* 4667 */;
import closure_17 from "mergeGuildAvatar" /* 1923 */;
import { ChannelFlags } from "set" /* 1398 */;
import ReadStateTypes from "ReadStateTypes" /* 4668 */;
import { NULL_STRING_GUILD_ID } from "ME" /* 676 */;
import set from "set" /* 2 */;

require = arg1;
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
  let tmp6 = closure_22[tmp5];
  if (tmp6 == null) {
    if (tmp == null) {
      tmp = NULL_STRING_GUILD_ID;
    }
    const obj = { unread: false, unreadByType: null, unreadChannelId: null, lowImportanceMentionCount: 0, highImportanceMentionCount: 0, mentionCounts: null, ncMentionCount: 0, sentinel: null };
    obj[1] = {};
    obj[5] = {};
    let num;
    if (closure_22[tmp] != null) {
      num = tmp8.sentinel;
    }
    if (num == null) {
      num = 0;
    }
    obj[7] = num;
    tmp6 = obj;
    const tmp7 = closure_22;
  }
  closure_22[tmp3] = tmp6;
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
          let isMutedResult = closure_6.isMuted(channel.id);
          if (!isMutedResult) {
            isMutedResult = closure_16.isGuildOrCategoryOrChannelMuted(channel.guild_id, channel.parent_id);
          }
          let result = isMutedResult;
        } else {
          result = closure_16.isGuildOrCategoryOrChannelMuted(channel.guild_id, channel.id);
        }
        if (result) {
          return false;
        }
      }
      if (!channel.isPrivate()) {
        let result1 = useOptInEnabledForGuild.isOptInEnabledForGuild(channel.guild_id);
        let tmp11 = null != channel.guild_id;
        if (tmp11) {
          if (result1) {
            let result2 = callback3(channel.type);
            if (!result2) {
              result2 = closure_16.isChannelRecordOrParentOptedIn(channel);
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
        } else if (!closure_13.can(channel.accessPermissions, channel)) {
          return false;
        }
        const obj = useOptInEnabledForGuild;
      }
      let tmp16 = num > 0;
      if (!tmp16) {
        tmp16 = closure_16.resolveUnreadSetting(channel) === constants2.ALL_MESSAGES;
      }
      return tmp16;
    }
  }
}
function updateNotificationCenterMentions(mentionCounts, mentionCounts2) {
  if (!tabFocused.tabFocused) {
    closure_0 = mentionCounts;
    importDefault = 0;
    currentUser = currentUser.getCurrentUser();
    let notifCenterReadState;
    if (null != currentUser) {
      notifCenterReadState = store3.getNotifCenterReadState(currentUser.id);
    }
    let notifCenterReadState1 = notifCenterReadState;
    if (null != notifCenterReadState) {
      const keys = importDefault(notifCenterReadState1[18]).keys(mentionCounts.mentionCounts);
      const item = keys.forEach((arg0) => {
        const lastMessageIdResult = closure_1_14.lastMessageId(arg0);
        if (obj.compare(lastMessageIdResult, notifCenterReadState1._ackMessageId) > 0) {
          closure_1 = closure_1 + mentionCounts2.mentionCounts[arg0].count;
        }
      });
      const obj2 = importDefault(notifCenterReadState1[18]);
    }
    closure_0 = mentionCounts2;
    importDefault = 0;
    const currentUser1 = currentUser.getCurrentUser();
    notifCenterReadState1 = undefined;
    if (null != currentUser1) {
      notifCenterReadState1 = store3.getNotifCenterReadState(currentUser1.id);
    }
    if (!tmp14) {
      const keys1 = importDefault(notifCenterReadState1[18]).keys(mentionCounts2.mentionCounts);
      const item1 = keys1.forEach((arg0) => {
        const lastMessageIdResult = closure_1_14.lastMessageId(arg0);
        if (obj.compare(lastMessageIdResult, notifCenterReadState1._ackMessageId) > 0) {
          closure_1 = closure_1 + mentionCounts2.mentionCounts[arg0].count;
        }
      });
      const obj3 = importDefault(notifCenterReadState1[18]);
    }
    let num2;
    if (mentionCounts2 != null) {
      num2 = mentionCounts2.ncMentionCount;
    }
    if (num2 == null) {
      num2 = 0;
    }
    mentionCounts.ncMentionCount = Math.max(num2 + (importDefault - importDefault), 0);
    const obj = currentUser;
    const tmp10 = importDefault;
    tmp14 = null == mentionCounts2 || null == notifCenterReadState1;
    const tmp18 = importDefault;
  }
}
function aggregateGuildState(guild_id, unreadByType, unread) {
  closure_0 = unreadByType;
  const entries = Object.entries(unreadByType.unreadByType);
  unreadByType.unread = entries.some((arg0) => {
    [tmp, tmp2] = arg0;
    return Number(tmp) !== constants.GUILD_EVENT && tmp2;
  });
  unreadByType.lowImportanceMentionCount = 0;
  unreadByType.highImportanceMentionCount = 0;
  const item = DISCORD_EPOCHDefault.forEach(unreadByType.mentionCounts, (count) => {
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
    closure_22[tmp5] = unreadByType;
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
    const tmp3 = closure_22;
    const tmp9 = updateGuildUnreadSentinel;
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
    let tmp9 = closure_22[tmp8];
    if (tmp9 == null) {
      let tmp11 = tmp;
      if (tmp == null) {
        tmp11 = tmp2;
      }
      let obj = { unread: false, unreadByType: null, unreadChannelId: null, lowImportanceMentionCount: 0, highImportanceMentionCount: 0, mentionCounts: null, ncMentionCount: 0, sentinel: null };
      obj[1] = {};
      obj[5] = {};
      let num;
      if (closure_22[tmp11] != null) {
        num = tmp12.sentinel;
      }
      if (num == null) {
        num = 0;
      }
      obj[7] = num;
      tmp9 = obj;
      const tmp10 = closure_22;
    }
    closure_22[tmp6] = tmp9;
    let tmp14 = tmp;
    if (tmp == null) {
      tmp14 = tmp2;
    }
    obj = { unread: false, unreadByType: null, unreadChannelId: null, lowImportanceMentionCount: 0, highImportanceMentionCount: 0, mentionCounts: null, ncMentionCount: 0, sentinel: null };
    obj[1] = {};
    obj[5] = {};
    let num2;
    if (closure_22[tmp14] != null) {
      num2 = tmp15.sentinel;
    }
    if (num2 == null) {
      num2 = 0;
    }
    obj[7] = num2;
    obj = {};
    const merged = Object.assign(tmp9.mentionCounts);
    obj.mentionCounts = obj;
    obj1 = {};
    const merged1 = Object.assign(tmp9.unreadByType);
    obj.unreadByType = obj1;
    c2 = false;
    const item = items.forEach((arg0) => {
      const channel = closure_1_11.getChannel(arg0);
      if (null != channel) {
        if (channel.getGuildId() === closure_0) {
          const mentionCount = closure_1_14.getMentionCount(arg0);
          let hasUnreadResult = null !== tmp6;
          if (hasUnreadResult) {
            hasUnreadResult = !c2;
          }
          if (hasUnreadResult) {
            hasUnreadResult = obj3.hasUnread(channel.id);
          }
          if (hasUnreadResult) {
            hasUnreadResult = closure_1_26(channel, mentionCount, true);
          }
          if (hasUnreadResult) {
            c2 = true;
            obj.unreadChannelId = channel.id;
          }
          if (mentionCount > 0) {
            if (closure_1_26(channel, mentionCount)) {
              obj = { count: null, isMentionLowImportance: null };
              obj[0] = mentionCount;
              obj[1] = obj3.getIsMentionLowImportance(arg0);
              obj.mentionCounts[channel.id] = obj;
            }
          }
          const mentionCounts2 = obj.mentionCounts;
          const id = channel.id;
          delete tmp4[tmp];
        }
      } else {
        const mentionCounts = obj.mentionCounts;
        delete tmp2[tmp3];
      }
    });
    obj.unreadByType[constants.CHANNEL] = c2;
    if (obj.unreadByType[constants.CHANNEL] !== tmp9.unreadByType[constants.CHANNEL]) {
      if (!obj.unreadByType[tmp22.CHANNEL]) {
        let channel = store2.getChannel(tmp9.unreadChannelId);
        if (null != channel) {
          if (!items.includes(channel.id)) {
            if (store3.hasUnread(channel.id)) {
              if (isCountableChannel(channel)) {
                if (null != tmp) {
                  set.add(tmp);
                }
                obj.unreadByType[tmp22.CHANNEL] = true;
              }
            }
          }
        }
        return recountGuild(tmp);
      }
    }
    return aggregateGuildState(tmp, obj, tmp9);
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
    let tmp5 = closure_22[tmp4];
    if (tmp5 == null) {
      let tmp7 = guild_id;
      if (guild_id == null) {
        tmp7 = NULL_STRING_GUILD_ID;
      }
      let obj = { unread: false, unreadByType: null, unreadChannelId: null, lowImportanceMentionCount: 0, highImportanceMentionCount: 0, mentionCounts: null, ncMentionCount: 0, sentinel: null };
      obj[1] = {};
      obj[5] = {};
      let num;
      if (closure_22[tmp7] != null) {
        num = tmp8.sentinel;
      }
      if (num == null) {
        num = 0;
      }
      obj[7] = num;
      tmp5 = obj;
      const tmp6 = closure_22;
    }
    closure_22[tmp2] = tmp5;
    let tmp10 = guild_id;
    if (guild_id == null) {
      tmp10 = NULL_STRING_GUILD_ID;
    }
    obj = { unread: false, unreadByType: null, unreadChannelId: null, lowImportanceMentionCount: 0, highImportanceMentionCount: 0, mentionCounts: null, ncMentionCount: 0, sentinel: null };
    obj[1] = {};
    obj[5] = {};
    let num2;
    if (closure_22[tmp10] != null) {
      num2 = tmp11.sentinel;
    }
    if (num2 == null) {
      num2 = 0;
    }
    obj[7] = num2;
    obj = {};
    const merged = Object.assign(tmp5.mentionCounts);
    obj.mentionCounts = obj;
    obj1 = {};
    const merged1 = Object.assign(tmp5.unreadByType);
    obj.unreadByType = obj1;
    const hasUnreadResult = store3.hasUnread(guild_id, GUILD_EVENT);
    let tmp20 = hasUnreadResult;
    if (GUILD_EVENT === constants.GUILD_EVENT) {
      const isMutedResult = closure_16.isMuted(guild_id);
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
      obj5 = closure_16;
    }
    obj.unreadByType[constants.GUILD_EVENT] = tmp20;
    return aggregateGuildState(guild_id, obj, tmp5);
  }
}
function recountGuild(guildId) {
  let tmp2 = guildId;
  if (NULL_STRING_GUILD_ID !== guildId) {
    let tmp7 = tmp2;
    if (tmp2 == null) {
      tmp7 = tmp3;
    }
    let obj = { unread: false, unreadByType: null, unreadChannelId: null, lowImportanceMentionCount: 0, highImportanceMentionCount: 0, mentionCounts: null, ncMentionCount: 0, sentinel: null };
    obj[1] = {};
    obj[5] = {};
    let num;
    if (closure_22[tmp7] != null) {
      num = tmp8.sentinel;
    }
    if (num == null) {
      num = 0;
    }
    obj[7] = num;
    if (null == tmp2) {
      const mutablePrivateChannels = store2.getMutablePrivateChannels();
      for (const key10155 in mutablePrivateChannels) {
        mentionCount = key10155;
        mentionCount = mutablePrivateChannels[key10155];
        mentionCount = store3;
        mentionCount = store3.getMentionCount(key10155);
        let tmp76 = mentionCount > 0;
        if (tmp76) {
          let tmp75 = isCountableChannel;
          tmp76 = isCountableChannel(mentionCount, mentionCount);
        }
        if (!tmp76) {
          continue;
        } else {
          obj.highImportanceMentionCount = obj.highImportanceMentionCount + mentionCount;
          obj = { count: null, isMentionLowImportance: false };
          obj[0] = mentionCount;
          obj.mentionCounts[mentionCount.id] = obj;
          continue;
        }
        continue;
      }
    } else {
      const isMutedResult = closure_16.isMuted(tmp2);
      if (isMutedResult) {
        if (false === arg1) {
          return false;
        }
      }
      const mutedChannels = obj11.getMutedChannels(tmp2);
      const channelOverrides = obj11.getChannelOverrides(tmp2);
      let obj2 = useOptInEnabledForGuild;
      const result = obj2.isOptInEnabledForGuild(tmp2);
      const mutableBasicGuildChannelsForGuild = store2.getMutableBasicGuildChannelsForGuild(tmp2);
      for (const key10034 in mutableBasicGuildChannelsForGuild) {
        let tmp96 = key10034;
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
        let tmp21 = store3;
        let tmp22 = store3;
        let tmp23 = obj12;
        let tmp24 = result;
        let tmp25 = channelOverrides;
        let tmp26 = hasItem;
        let tmp27 = tmp20;
        let tmp19 = constants;
        let guildChannelUnreadState = store3.getGuildChannelUnreadState(obj12, result, channelOverrides, hasItem, tmp20);
        ({ mentionCount, isMentionLowImportance } = guildChannelUnreadState);
        let tmp30 = mentionCount > 0;
        let tmp31 = hasItem;
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
            let tmp34 = callback2;
            let tmp35 = callback2(obj12.type);
            let tmp36 = !tmp35;
            if (tmp35) {
              tmp36 = 0 !== mentionCount;
            }
            if (tmp36) {
              let tmp37 = closure_13;
              let tmp38 = callback;
              let canBasicChannelResult = closure_13.canBasicChannel(callback(obj12.type), obj12);
              if (canBasicChannelResult) {
                let tmp40 = null != obj12.guild_id;
                if (tmp40) {
                  let tmp41 = result;
                  if (result) {
                    let tmp42 = callback3;
                    let result1 = callback3(obj12.type);
                    if (!result1) {
                      let tmp44 = closure_16;
                      result1 = closure_16.isChannelRecordOrParentOptedIn(obj12);
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
                    let tmp48 = ChannelFlags;
                    tmp47 = !obj12.hasFlag(ChannelFlags.IS_GUILD_RESOURCE_CHANNEL);
                  }
                  if (tmp47) {
                    let tmp49 = mentionCount > 0;
                    if (!tmp49) {
                      let tmp50 = closure_16;
                      let tmp51 = constants2;
                      tmp49 = closure_16.resolveUnreadSetting(obj12) === constants2.ALL_MESSAGES;
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
                obj = { count: null, isMentionLowImportance: null };
                obj[0] = mentionCount;
                obj[1] = isMentionLowImportance;
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
      const activeJoinedThreadsForGuild = store.getActiveJoinedThreadsForGuild(tmp2);
      for (const key10108 in activeJoinedThreadsForGuild) {
        let tmp97 = key10108;
        let keys = Object.keys();
        if (keys === undefined) {
          continue;
        } else {
          let tmp55 = keys[mentionCount];
          while (tmp55 !== undefined) {
            let tmp99 = tmp55;
            let isMutedResult1 = obj.unreadByType[constants.CHANNEL];
            mentionCount = constants;
            if (!isMutedResult1) {
              let tmp56 = store3;
              isMutedResult1 = !store3.hasUnread(tmp55);
            }
            if (!isMutedResult1) {
              let tmp58 = closure_6;
              isMutedResult1 = closure_6.isMuted(tmp55);
            }
            if (!isMutedResult1) {
              isMutedResult1 = isMutedResult;
            }
            if (!isMutedResult1) {
              obj.unreadByType[mentionCount.CHANNEL] = true;
              obj.unreadChannelId = tmp55;
            }
            let tmp59 = store3;
            let mentionCount1 = store3.getMentionCount(tmp55);
            isMentionLowImportance = store3.getIsMentionLowImportance(tmp55);
            if (mentionCount1 <= 0) {
              continue;
            } else {
              if (isMentionLowImportance) {
                obj.lowImportanceMentionCount = obj.lowImportanceMentionCount + mentionCount1;
              } else {
                obj.highImportanceMentionCount = obj.highImportanceMentionCount + mentionCount1;
              }
              obj1 = { count: null, isMentionLowImportance: null };
              obj1[0] = mentionCount1;
              obj1[1] = isMentionLowImportance;
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
        const hasUnreadResult = store3.hasUnread(tmp2, GUILD_EVENT);
        let tmp67 = hasUnreadResult;
        if (GUILD_EVENT === tmp62.GUILD_EVENT) {
          const isMutedResult2 = closure_16.isMuted(tmp2);
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
          obj6 = closure_16;
        }
        tmp64 = tmp67;
      }
      if (tmp64) {
        obj.unreadByType[tmp62.GUILD_EVENT] = true;
      }
    }
    const _Object = Object;
    const entries = Object.entries(obj.unreadByType);
    obj.unread = entries.some((arg0) => {
      [tmp, tmp2] = arg0;
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
    let tmp82 = closure_22[tmp81];
    if (tmp82 == null) {
      let tmp84 = tmp2;
      if (tmp2 == null) {
        tmp84 = NULL_STRING_GUILD_ID;
      }
      obj2 = { unread: false, unreadByType: null, unreadChannelId: null, lowImportanceMentionCount: 0, highImportanceMentionCount: 0, mentionCounts: null, ncMentionCount: 0, sentinel: null };
      obj2[1] = {};
      obj2[5] = {};
      let num4;
      if (closure_22[tmp84] != null) {
        num4 = tmp85.sentinel;
      }
      if (num4 == null) {
        num4 = 0;
      }
      obj2[7] = num4;
      tmp82 = obj2;
      const tmp83 = closure_22;
    }
    closure_22[tmp79] = tmp82;
    let flag3 = obj.unread !== tmp82.unread || obj.highImportanceMentionCount !== tmp82.highImportanceMentionCount || obj.lowImportanceMentionCount !== tmp82.lowImportanceMentionCount;
    if (flag3) {
      let tmp87 = tmp2;
      if (tmp2 == null) {
        tmp87 = NULL_STRING_GUILD_ID;
      }
      closure_22[tmp87] = obj;
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
      const tmp86 = closure_22;
      const tmp91 = updateGuildUnreadSentinel;
    }
    return flag3;
  }
  tmp2 = null;
}
function handleOverlayInitialize(guilds) {
  guilds = guilds.guilds;
  closure_22 = {};
  c24 = 0;
  set = new Set();
  recountGuild(null);
  for (let num = 0; num < length; num = num + 1) {
    let tmp3 = guilds[num];
    let tmp4 = num;
    if (null != tmp3) {
      let tmp5 = recountGuild;
      let tmp6 = recountGuild(tmp3.properties.id);
    }
  }
}
function handleConnectionOpen(arg0) {
  ({ guilds, readState } = arg0);
  let set1;
  closure_22 = {};
  c24 = 0;
  set = new Set();
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
          if (mention_count.read_state_type !== closure_1_19.CHANNEL) {
            set1.add(mention_count.id);
          }
        }
        const channel = closure_1_11.getChannel(mention_count.id);
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
      let tmp8 = item10032;
      hasItem = set1.has(tmp5.id);
    }
    let tmp6Result = tmp6(item10032.id, hasItem);
    continue;
  }
}
function recomputeAllGuilds() {
  closure_22 = {};
  set = new Set();
  recountGuild(null);
  const values = Object.values(guildIds.getGuildIds());
  for (const item10021 of values) {
    let tmp4 = recountGuild;
    let tmp5 = recountGuild(item10021);
    continue;
  }
}
function handleGuildCreate(guild) {
  return recountGuild(guild.guild.id);
}
function handleGuildDelete(guild) {
  guild = guild.guild;
  let flag = null != dependencyMap[guild.id];
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
  const channel = store2.getChannel(channelId.getChannelId());
  let tmp = null != channel;
  if (tmp) {
    const items = [channel.id];
    tmp = recountChannels(channel.getGuildId(), items);
  }
  return tmp;
}
function handleGuildMemberUpdate(user) {
  let tmp = user.user.id === id.getId();
  if (tmp) {
    tmp = recountGuild(user.guildId);
  }
  return tmp;
}
function handleGenericUpdate(channelId) {
  const channel = store2.getChannel(channelId.channelId);
  let tmp = null != channel;
  if (tmp) {
    const items = [channel.id];
    tmp = recountChannels(channel.getGuildId(), items);
  }
  return tmp;
}
function handleMessageCreate(channelId) {
  channelId = channelId.channelId;
  const channel = store2.getChannel(channelId);
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
      let tmp4 = closure_22[tmp3];
      if (tmp4 == null) {
        if (guild_id == null) {
          guild_id = NULL_STRING_GUILD_ID;
        }
        const obj = { unread: false, unreadByType: null, unreadChannelId: null, lowImportanceMentionCount: 0, highImportanceMentionCount: 0, mentionCounts: null, ncMentionCount: 0, sentinel: null };
        obj[1] = {};
        obj[5] = {};
        let num;
        if (closure_22[guild_id] != null) {
          num = tmp6.sentinel;
        }
        if (num == null) {
          num = 0;
        }
        obj[7] = num;
        tmp4 = obj;
        const tmp5 = closure_22;
      }
      closure_22[tmp] = tmp4;
      if (channel.isThread()) {
        const hasJoinedResult = closure_6.hasJoined(channel.id);
        let isMutedResult = !hasJoinedResult;
        if (hasJoinedResult) {
          isMutedResult = obj3.isMuted(channel.id);
        }
        let result = isMutedResult;
        obj3 = closure_6;
      } else {
        result = closure_16.isGuildOrCategoryOrChannelMuted(channel.guild_id, channel.id);
      }
      if (result) {
        if (0 === store3.getMentionCount(channelId)) {
          return false;
        }
      }
      const tmp14 = closure_22;
      const tmp2 = closure_22;
    }
    const items = [channel.id];
    return recountChannels(channel.getGuildId(), items);
  }
}
function handleChannelSelect(arg0) {
  ({ channelId, guildId } = arg0);
  const isFavoritesGuildIdResult = getFavoritesAwareGuildName.isFavoritesGuildId(guildId);
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
  const obj = applyDefault(channels.channels);
  return applyDefault(channels.channels).groupBy((getGuildId) => getGuildId.getGuildId()).reduce((arg0, arr) => callback(arg2, arr.map((id) => id.id)) || arg0, false);
}
function handleBulkAck(channels) {
  const mapped = applyDefault(channels.channels).map((channelId) => channelId.channelId);
  const found = mapped.filter((arg0) => null != store.getChannel(arg0));
  const arr = applyDefault(channels.channels);
  return found.groupBy((arg0) => {
    const channel = store.getChannel(arg0);
    let guildId;
    if (channel != null) {
      guildId = channel.getGuildId();
    }
    return guildId;
  }).reduce((arg0, arg1, arg2) => callback(arg2, arg1) || arg0, false);
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
  let result = doesThreadMembersActionAffectMe.doesThreadMembersActionAffectMe(id);
  if (result) {
    const items = [id.id];
    result = recountChannels(id.guildId, items);
  }
  return result;
}
function handleThreadListSync(threads) {
  threads = threads.threads;
  const found = threads.filter((id) => closure_6.hasJoined(id.id));
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
  set = undefined;
  set = new Set(userGuildSettings.map((guild_id) => {
    guild_id = guild_id.guild_id;
    if (guild_id == null) {
      guild_id = closure_21;
    }
    return guild_id;
  }));
  const keys = DISCORD_EPOCHDefault.keys(closure_22);
  return keys.reduce((arg0, arg1) => {
    let hasItem = set.has(arg1);
    if (hasItem) {
      hasItem = closure_1_31(arg1);
    }
    if (!hasItem) {
      hasItem = arg0;
    }
    return hasItem;
  }, false);
}
function handleClearNotifCenterGuildMentions() {
  for (const key10003 in closure_22) {
    let tmp = key10003;
    let tmp2 = dependencyMap;
    dependencyMap[key10003].ncMentionCount = 0;
    continue;
  }
}
function handleUserGuildSettingsUpdate(guildId) {
  return recountGuild(guildId.guildId);
}
function handleRecentMentionsSuccess(messages) {
  messages = messages.messages;
  const item = new Set(messages.map((channel_id) => channel_id.channel_id)).forEach((arg0) => {
    channel = channel.getChannel(arg0);
    if (null != channel) {
      const items = [arg0];
      callback(channel.getGuildId(), items);
    }
  });
}
({ getBasicAccessPermissions: error, isGuildVocalChannelType: closure_8, isThread: c9 } = createChannelRecord);
clearAllDefault;
({ ReadStateTypes: closure_19, UnreadSetting: closure_20 } = ReadStateTypes);
let closure_22 = {};
let set = new Set();
let c24 = 0;
let GuildReadStateStore;
class GuildReadStateStore extends tmp3 {
  constructor() {
    closure_0 = undefined;
    obj = {
      CONNECTION_OPEN: handleConnectionOpen,
      OVERLAY_INITIALIZE: handleOverlayInitialize,
      CACHE_LOADED_LAZY() {
            return obj.loadCache();
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
    // ThrowIfThisInitialized (0x7c)
    closure_0 = tmp;
    return tmp;
  }
}
const prototype = GuildReadStateStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(closure_11, closure_15, closure_14, closure_13, closure_10, closure_17, closure_16, closure_5, closure_6, closure_3);
};
prototype["loadCache"] = function loadCache() {
  const snapshot = this.readSnapshot(GuildReadStateStore.LATEST_SNAPSHOT_VERSION);
  if (null != snapshot) {
    const guilds = snapshot.guilds;
    const _Set = Set;
    set = new Set(snapshot.unreadGuilds);
  }
};
prototype["takeSnapshot"] = function takeSnapshot() {
  let obj = { version: GuildReadStateStore.LATEST_SNAPSHOT_VERSION, data: null };
  obj = { guilds: closure_22, unreadGuilds: Array.from(set) };
  obj[1] = obj;
  return obj;
};
prototype["hasAnyUnread"] = function hasAnyUnread() {
  return set.size > 0;
};
prototype["getStoreChangeSentinel"] = function getStoreChangeSentinel() {
  return c24;
};
prototype["getMutableUnreadGuilds"] = function getMutableUnreadGuilds() {
  return set;
};
prototype["getMutableGuildStates"] = function getMutableGuildStates() {
  return closure_22;
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
  let tmp6 = closure_22[tmp5];
  if (tmp6 == null) {
    if (tmp == null) {
      tmp = NULL_STRING_GUILD_ID;
    }
    const obj = { unread: false, unreadByType: null, unreadChannelId: null, lowImportanceMentionCount: 0, highImportanceMentionCount: 0, mentionCounts: null, ncMentionCount: 0, sentinel: null };
    obj[1] = {};
    obj[5] = {};
    let num;
    if (closure_22[tmp] != null) {
      num = tmp8.sentinel;
    }
    if (num == null) {
      num = 0;
    }
    obj[7] = num;
    tmp6 = obj;
    const tmp7 = closure_22;
  }
  closure_22[tmp3] = tmp6;
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
  let tmp6 = closure_22[tmp5];
  if (tmp6 == null) {
    if (tmp == null) {
      tmp = NULL_STRING_GUILD_ID;
    }
    const obj = { unread: false, unreadByType: null, unreadChannelId: null, lowImportanceMentionCount: 0, highImportanceMentionCount: 0, mentionCounts: null, ncMentionCount: 0, sentinel: null };
    obj[1] = {};
    obj[5] = {};
    let num;
    if (closure_22[tmp] != null) {
      num = tmp8.sentinel;
    }
    if (num == null) {
      num = 0;
    }
    obj[7] = num;
    tmp6 = obj;
    const tmp7 = closure_22;
  }
  closure_22[tmp3] = tmp6;
  return 0 === tmp6.highImportanceMentionCount;
};
prototype["getGuildHasUnreadIgnoreMuted"] = function getGuildHasUnreadIgnoreMuted(id) {
  const mutableGuildChannelsForGuild = store2.getMutableGuildChannelsForGuild(id);
  for (const key10008 in mutableGuildChannelsForGuild) {
    let tmp9 = key10008;
    let obj = mutableGuildChannelsForGuild[key10008];
    if (null == obj) {
      continue;
    } else {
      if (!obj.isGuildVocal()) {
        let tmp4 = closure_13;
        if (!closure_13.can(obj.accessPermissions, obj)) {
          continue;
        } else {
          let tmp5 = store3;
          if (!store3.hasUnreadOrMentions(key10008)) {
            continue;
          } else {
            let flag = true;
            return true;
          }
        }
        continue;
      } else {
        let tmp3 = store3;
      }
      continue;
    }
    continue;
  }
  const activeJoinedThreadsForGuild = store.getActiveJoinedThreadsForGuild(id);
  for (const key10027 in activeJoinedThreadsForGuild) {
    let tmp10 = key10027;
    let tmp11 = store2;
    if (null == store2.getChannel(key10027)) {
      continue;
    } else {
      let keys = Object.keys();
      if (keys === undefined) {
        continue;
      } else {
        let tmp8 = keys[tmp];
        while (tmp8 !== undefined) {
          let tmp12 = tmp8;
          let tmp13 = store3;
          if (!store3.hasUnreadOrMentions(tmp8)) {
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
  return store3.hasUnreadOrMentions(id, constants.GUILD_EVENT);
};
prototype["getTotalMentionCount"] = function getTotalMentionCount(arg0) {
  let num = 0;
  let num2 = 0;
  const keys = Object.keys();
  if (keys !== undefined) {
    num2 = num;
    while (keys[tmp] !== undefined) {
      let tmp8 = tmp5;
      let tmp9 = dependencyMap;
      let tmp7 = tmp2;
      if (tmp2) {
        let tmp6 = NULL_STRING_GUILD_ID;
        tmp7 = tmp5 === NULL_STRING_GUILD_ID;
      }
      if (tmp7) {
        continue;
      } else {
        num = tmp4 + dependencyMap[tmp5].highImportanceMentionCount;
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
      let tmp8 = tmp5;
      let tmp9 = dependencyMap;
      let tmp7 = tmp2;
      if (tmp2) {
        let tmp6 = NULL_STRING_GUILD_ID;
        tmp7 = tmp5 === NULL_STRING_GUILD_ID;
      }
      if (tmp7) {
        continue;
      } else {
        num = tmp4 + dependencyMap[tmp5].ncMentionCount;
        continue;
      }
      continue;
    }
  }
  return num2;
};
prototype["getPrivateChannelMentionCount"] = function getPrivateChannelMentionCount() {
  let num;
  if (dependencyMap[NULL_STRING_GUILD_ID] != null) {
    num = tmp.highImportanceMentionCount;
  }
  if (num == null) {
    num = 0;
  }
  return num;
};
prototype["getMentionCountForPrivateChannel"] = function getMentionCountForPrivateChannel(channelId) {
  let num;
  if (dependencyMap[NULL_STRING_GUILD_ID] != null) {
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
  if (closure_22[tmp] != null) {
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
  let tmp6 = closure_22[tmp5];
  if (tmp6 == null) {
    if (tmp == null) {
      tmp = NULL_STRING_GUILD_ID;
    }
    const obj = { unread: false, unreadByType: null, unreadChannelId: null, lowImportanceMentionCount: 0, highImportanceMentionCount: 0, mentionCounts: null, ncMentionCount: 0, sentinel: null };
    obj[1] = {};
    obj[5] = {};
    let num;
    if (closure_22[tmp] != null) {
      num = tmp8.sentinel;
    }
    if (num == null) {
      num = 0;
    }
    obj[7] = num;
    tmp6 = obj;
    const tmp7 = closure_22;
  }
  closure_22[tmp3] = tmp6;
  return tmp6.sentinel;
};
GuildReadStateStore.displayName = "GuildReadStateStore";
GuildReadStateStore.LATEST_SNAPSHOT_VERSION = 1;
const guildReadStateStore = new GuildReadStateStore();
let result = set.fileFinishedImporting("stores/GuildReadStateStore.tsx");

export default guildReadStateStore;