// discord_app/modules/threads/ActiveJoinedThreadsStore.tsx
import SnowflakeUtilsDefault from "../../utils/SnowflakeUtils.tsx";
import _modDef12 from "../../../_runtime/metro/00012__.js";
import get_initializedDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import ChannelConstants from "../channel/ChannelConstants.tsx";
import AgeGateUtils from "../age_gate/AgeGateUtils.tsx";
import getThreadAutoArchiveTimeOnceDefault from "getThreadAutoArchiveTimeOnce.tsx";
import ChannelRecord from "../../records/ChannelRecord.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import GuildStore from "../../stores/GuildStore.tsx";
import ReadStateStore from "../../stores/ReadStateStore.tsx";
import SelectedChannelStore from "../../stores/SelectedChannelStore.tsx";
import ActiveThreadsStore from "ActiveThreadsStore.tsx";
import JoinedThreadsStore from "JoinedThreadsStore.tsx";
import size_mod from "../../../_runtime/metro/00002__.js";

let closure_13, closure_14, closure_16;

let c3;
let closure_4;
const f137091 = () => {
  channel = ChannelStore.getChannel(channel.id);
  if (null != channel) {
    const obj2 = { type: "THREAD_UPDATE", channel };
    const obj = DispatcherDefault;
    obj.dispatch(obj2);
  }
};
function rebuild() {
  closure_12 = {};
  closure_16 = {};
  closure_13 = {};
  closure_14 = {};
  closure_15 = {};
  channelId = SelectedChannelStore.getChannelId();
  for (const key10012 in closure_19) {
    let _clearTimeout = clearTimeout;
    let clearTimeoutResult = clearTimeout(closure_19[key10012]);
    continue;
  }
  closure_19 = {};
  ActiveThreadsStore.forEachGuild((guildId) => {
    rebuildGuild_(guildId);
  });
  closure_17 = {};
  for (const key10022 in closure_14) {
    let keys = Object.keys();
    if (keys === undefined) {
      continue;
    } else {
      let tmp3 = keys[tmp];
      while (tmp3 !== undefined) {
        let tmp12 = recountParent(key10022, tmp3);
        continue;
      }
    }
    continue;
  }
}
function rebuildGuild_(guildId) {
  let isRelevant;
  let isTimedRelevant;
  let isUnread;
  const threadsForGuild = ActiveThreadsStore.getThreadsForGuild(guildId);
  for (const key10011 in threadsForGuild) {
    let keys = Object.keys();
    if (keys === undefined) {
      continue;
    } else {
      let tmp3 = keys[tmp];
      while (tmp3 !== undefined) {
        if (tmp3 in closure_19) {
          let _clearTimeout = clearTimeout;
          let clearTimeoutResult = clearTimeout(closure_19[tmp3]);
          delete closure_19[tmp49];
        }
        let channel = ChannelStore.getChannel(tmp3);
        if (null == channel) {
          continue;
        } else {
          let joinTimestampResult = JoinedThreadsStore.joinTimestamp(tmp3);
          if (null != joinTimestampResult) {
            let obj = { channel, joinTimestamp: joinTimestampResult.getTime() };
            let tmp22 = parseThreadState(channel);
            let flag3 = false;
            ({ isUnread, isRelevant, isTimedRelevant } = tmp22);
            let tmp27 = updateIn(closure_12, channel, obj, false);
            let tmp29 = null;
            if (isRelevant) {
              tmp29 = obj;
            }
            let flag4 = false;
            let tmp23Result = updateIn(closure_16, channel, tmp29, false);
            let tmp35 = null;
            if (isUnread) {
              tmp35 = obj;
            }
            let flag5 = false;
            let tmp23Result2 = updateIn(closure_13, channel, tmp35, false);
            if (!isTimedRelevant) {
              continue;
            } else {
              let id = channel.id;
              if (id in closure_19) {
                let _clearTimeout2 = clearTimeout;
                let clearTimeoutResult1 = clearTimeout(closure_19[id]);
                delete closure_19[id];
              }
              let _setTimeout = setTimeout;
              let id2 = channel.id;
              let _Date = Date;
              let tmp46 = getThreadAutoArchiveTimeOnceDefault(channel);
              closure_19[id2] = setTimeout(f137091, tmp46 - Date.now() + 1);
              continue;
            }
            continue;
          } else {
            let flag = false;
            let tmp13 = updateIn(closure_14, channel, channel, false);
            let tmp16 = null;
            if (ReadStateStore.isForumPostUnread(channel.id)) {
              tmp16 = channel;
            }
            let flag2 = false;
            let tmp9Result = updateIn(closure_15, channel, tmp16, false);
            continue;
          }
          continue;
        }
        continue;
      }
    }
    continue;
  }
}
function recountParent(guild_id, id) {
  const channel = ChannelStore.getChannel(id);
  if (null != channel) {
    if (channel.isForumLikeChannel()) {
      if (null == closure_17[guild_id]) {
        closure_17[guild_id] = {};
      }
      closure_17[guild_id][id] = 0;
      if (null != closure_14[guild_id]) {
        if (null != closure_14[guild_id][id]) {
          const guild = GuildStore.getGuild(guild_id);
          if (null != guild) {
            let trackedAckMessageId = ReadStateStore.getTrackedAckMessageId(id);
            if (null == trackedAckMessageId) {
              const _Date2 = Date;
              let timestamp = Date.now();
              let tmp7 = timestamp;
              if (null != guild.joinedAt) {
                const _Date = Date;
                const joinedAt = guild.joinedAt;
                if (guild.joinedAt instanceof Date) {
                  timestamp = joinedAt.getTime();
                } else if (typeof joinedAt === "string") {
                  const _Date3 = Date;
                  const self = this;
                  const self2 = this;
                  const date = new Date(guild.joinedAt);
                  timestamp = date.getTime();
                }
                tmp7 = timestamp;
              }
              const obj2 = SnowflakeUtilsDefault;
              trackedAckMessageId = obj2.fromTimestamp(tmp7);
            }
            for (const key10034 in closure_14[guild_id][id]) {
              if (id === channelId) {
                if (!ReadStateStore.isNewForumThread(key10034, id, guild)) {
                  continue;
                } else {
                  let tmp20 = closure_17[guild_id];
                  tmp20[id] = tmp20[id] + 1;
                  continue;
                }
                continue;
              } else {
                let obj3 = SnowflakeUtilsDefault;
                let tmp14 =
                  obj3.compare(key10034, trackedAckMessageId) > 0 && !ReadStateStore.hasOpenedThread(key10034);
                if (!tmp14) {
                  continue;
                } else {
                  let tmp17 = closure_17[guild_id];
                  tmp17[id] = tmp17[id] + 1;
                  continue;
                }
                continue;
              }
              continue;
            }
          }
        }
      }
    }
  }
}
function updateThread(guild_id, parent_id, id) {
  let isRelevant;
  let isTimedRelevant;
  let isUnread;
  if (null == parent_id) {
    return false;
  } else {
    const channel = ChannelStore.getChannel(id);
    const joinTimestampResult = JoinedThreadsStore.joinTimestamp(id);
    if (null != channel) {
      if (ActiveThreadsStore.isActive(guild_id, parent_id, id)) {
        if (null != joinTimestampResult) {
          const obj2 = { channel, joinTimestamp: joinTimestampResult.getTime() };
          ({ isUnread, isRelevant, isTimedRelevant } = parseThreadState(channel));
          parseThreadState(channel);
          updateIn(closure_12, channel, obj2, true);
          let tmp71 = null;
          if (isRelevant) {
            tmp71 = obj2;
          }
          updateIn(closure_16, channel, tmp71, true);
          let tmp77 = null;
          if (isUnread) {
            tmp77 = obj2;
          }
          updateIn(closure_13, channel, tmp77, true);
          updateIn(closure_14, channel, null, true);
          updateIn(closure_15, channel, null, true);
          const id2 = channel.id;
          if (id2 in closure_19) {
            const _clearTimeout3 = clearTimeout;
            clearTimeout(closure_19[id2]);
            delete closure_19[id2];
          }
          if (isTimedRelevant) {
            const _setTimeout = setTimeout;
            const id3 = channel.id;
            const _Date = Date;
            const tmp97 = getThreadAutoArchiveTimeOnceDefault(channel);
            closure_19[id3] = setTimeout(f137091, tmp97 - Date.now() + 1);
          }
        } else {
          const isForumPostUnreadResult = ReadStateStore.isForumPostUnread(channel.id);
          updateIn(closure_12, channel, null, true);
          updateIn(closure_13, channel, null, true);
          updateIn(closure_16, channel, null, true);
          updateIn(closure_14, channel, channel, true);
          let tmp54 = null;
          if (isForumPostUnreadResult) {
            tmp54 = channel;
          }
          updateIn(closure_15, channel, tmp54, true);
          id = channel.id;
          if (id in closure_19) {
            const _clearTimeout2 = clearTimeout;
            clearTimeout(closure_19[id]);
            delete closure_19[id];
          }
        }
        recountParent(guild_id, parent_id);
      }
    }
    let tmp4 = null != guild_id && null != parent_id && null != id;
    if (tmp4) {
      tmp4 = guild_id in closure_12 && parent_id in closure_12[guild_id] && id in closure_12[guild_id][parent_id];
    }
    if (tmp4) {
      const obj = {};
      const merged = Object.assign(closure_12[guild_id]);
      const obj4 = {};
      const merged1 = Object.assign(closure_12[guild_id][parent_id]);
      obj[parent_id] = obj4;
      closure_12[guild_id] = obj;
      delete closure_12[guild_id][parent_id][id];
      const obj3 = _modDef12;
      if (obj3.isEmpty(closure_12[guild_id][parent_id])) {
        delete closure_12[guild_id][parent_id];
      }
    }
    let tmp13 = null != guild_id && null != parent_id && null != id;
    if (tmp13) {
      tmp13 = guild_id in closure_16 && parent_id in closure_16[guild_id] && id in closure_16[guild_id][parent_id];
    }
    if (tmp13) {
      const obj5 = {};
      const merged2 = Object.assign(closure_16[guild_id]);
      const obj7 = {};
      const merged3 = Object.assign(closure_16[guild_id][parent_id]);
      obj5[parent_id] = obj7;
      closure_16[guild_id] = obj5;
      delete closure_16[guild_id][parent_id][id];
      const obj6 = _modDef12;
      if (obj6.isEmpty(closure_16[guild_id][parent_id])) {
        delete closure_16[guild_id][parent_id];
      }
    }
    let tmp22 = null != guild_id && null != parent_id && null != id;
    if (tmp22) {
      tmp22 = guild_id in closure_13 && parent_id in closure_13[guild_id] && id in closure_13[guild_id][parent_id];
    }
    if (tmp22) {
      const obj8 = {};
      const merged4 = Object.assign(closure_13[guild_id]);
      const obj10 = {};
      const merged5 = Object.assign(closure_13[guild_id][parent_id]);
      obj8[parent_id] = obj10;
      closure_13[guild_id] = obj8;
      delete closure_13[guild_id][parent_id][id];
      const obj9 = _modDef12;
      if (obj9.isEmpty(closure_13[guild_id][parent_id])) {
        delete closure_13[guild_id][parent_id];
      }
    }
    let tmp31 = null != guild_id && null != parent_id && null != id;
    if (tmp31) {
      tmp31 = guild_id in closure_14 && parent_id in closure_14[guild_id] && id in closure_14[guild_id][parent_id];
    }
    if (tmp31) {
      const obj11 = {};
      const merged6 = Object.assign(closure_14[guild_id]);
      const obj13 = {};
      const merged7 = Object.assign(closure_14[guild_id][parent_id]);
      obj11[parent_id] = obj13;
      closure_14[guild_id] = obj11;
      delete closure_14[guild_id][parent_id][id];
      const obj12 = _modDef12;
      if (obj12.isEmpty(closure_14[guild_id][parent_id])) {
        delete closure_14[guild_id][parent_id];
      }
    }
    let tmp40 = null != guild_id && null != parent_id && null != id;
    if (tmp40) {
      tmp40 = guild_id in closure_15 && parent_id in closure_15[guild_id] && id in closure_15[guild_id][parent_id];
    }
    if (tmp40) {
      const obj14 = {};
      const merged8 = Object.assign(closure_15[guild_id]);
      const obj16 = {};
      const merged9 = Object.assign(closure_15[guild_id][parent_id]);
      obj14[parent_id] = obj16;
      closure_15[guild_id] = obj14;
      delete closure_15[guild_id][parent_id][id];
      const obj15 = _modDef12;
      if (obj15.isEmpty(closure_15[guild_id][parent_id])) {
        delete closure_15[guild_id][parent_id];
      }
    }
    if (id in closure_19) {
      const _clearTimeout = clearTimeout;
      clearTimeout(closure_19[id]);
      delete closure_19[id];
    }
    recountParent(guild_id, parent_id);
  }
}
function handleThreadUpdate(channel) {
  return updateThread(channel.channel.guild_id, channel.channel.parent_id, channel.channel.id);
}
function anyThreadsNSFW(guild_id, parent_id) {
  if (null == parent_id) {
    return false;
  } else {
    let tmp = null;
    if (null != closure_12[guild_id]) {
      tmp = tmp9[parent_id];
    }
    if (null != tmp) {
      for (const key10006 in tmp) {
        let obj = AgeGateUtils;
        if (!obj.isChannelContentGated(tmp[key10006].channel)) {
          continue;
        } else {
          let flag = true;
          return true;
        }
      }
    }
    let tmp5 = null;
    if (null != closure_14[guild_id]) {
      tmp5 = tmp4[parent_id];
    }
    if (null != tmp5) {
      for (const key10015 in tmp5) {
        let obj2 = AgeGateUtils;
        if (!obj2.isChannelContentGated(tmp5[key10015])) {
          continue;
        } else {
          let flag2 = true;
          return true;
        }
      }
    }
    return false;
  }
}
function handleThreadMemberUpdate(id) {
  const channel = ChannelStore.getChannel(id.id);
  const tmp2 = null == channel || !ActiveThreadsStore.isActive(id.guildId, channel.parent_id, id.id);
  const tmp4 = !tmp2 && updateThread(channel.guild_id, channel.parent_id, channel.id);
  return tmp4;
}
function handleReadStateChannelAction(channelId) {
  let guild_id;
  let guild_id2;
  let guild_id3;
  let guild_id4;
  let guild_id5;
  let isRelevant;
  let isUnread;
  let parent_id;
  let parent_id2;
  let parent_id3;
  let parent_id4;
  let parent_id5;
  const channel = ChannelStore.getChannel(channelId.channelId);
  if (null == channel) {
    rebuildReadStates();
  } else {
    ({ guild_id: guild_id4, parent_id: parent_id4 } = channel);
    if (set2.has(channel.type)) {
      if (null == parent_id4) {
        return false;
      } else {
        ({ guild_id: guild_id5, parent_id: parent_id5 } = channel);
        let tmp8 = guild_id5 in closure_12;
        const id6 = channel.id;
        if (tmp8) {
          tmp8 = parent_id5 in closure_12[guild_id5];
        }
        if (tmp8) {
          tmp8 = id6 in closure_12[guild_id5][parent_id5];
        }
        if (tmp8) {
          const tmp21 = parseThreadState(channel);
          ({ isUnread, isRelevant } = tmp21);
          const id2 = channel.id;
          const isTimedRelevant = tmp21.isTimedRelevant;
          if (id2 in closure_19) {
            const _clearTimeout = clearTimeout;
            clearTimeout(closure_19[id2]);
            delete closure_19[id2];
          }
          if (isTimedRelevant) {
            const _setTimeout = setTimeout;
            const id3 = channel.id;
            const _Date = Date;
            const tmp30 = getThreadAutoArchiveTimeOnceDefault(channel);
            closure_19[id3] = setTimeout(f137091, tmp30 - Date.now() + 1);
          }
          ({ guild_id: guild_id2, parent_id: parent_id2 } = channel);
          let tmp32 = guild_id2 in closure_13;
          const id4 = channel.id;
          if (tmp32) {
            tmp32 = parent_id2 in closure_13[guild_id2];
          }
          if (tmp32) {
            tmp32 = id4 in closure_13[guild_id2][parent_id2];
          }
          ({ guild_id: guild_id3, parent_id: parent_id3 } = channel);
          let tmp34 = guild_id3 in closure_16;
          const id5 = channel.id;
          if (tmp34) {
            tmp34 = parent_id3 in closure_16[guild_id3];
          }
          if (tmp34) {
            tmp34 = id5 in closure_16[guild_id3][parent_id3];
          }
          if (isUnread === tmp32) {
            if (isRelevant === tmp34) {
              return false;
            }
          }
          let tmp37 = null;
          if (isRelevant) {
            tmp37 = tmp36;
          }
          let tmp40 = null;
          if (isUnread) {
            tmp40 = tmp36;
          }
          updateIn(closure_13, channel, tmp40, true);
          updateIn(closure_16, channel, tmp37, true);
          recountParent(guild_id4, parent_id4);
        } else {
          ({ guild_id, parent_id } = channel);
          let tmp10 = guild_id in closure_15;
          const id = channel.id;
          if (tmp10) {
            tmp10 = parent_id in closure_15[guild_id];
          }
          if (tmp10) {
            tmp10 = id in closure_15[guild_id][parent_id];
          }
          const isForumPostUnreadResult = ReadStateStore.isForumPostUnread(channel.id);
          if (isForumPostUnreadResult === tmp10) {
            return false;
          } else {
            let tmp15 = null;
            if (isForumPostUnreadResult) {
              tmp15 = channel;
            }
            updateIn(closure_15, channel, tmp15, true);
          }
        }
      }
    } else {
      let tmp5;
      const _Number = Number;
      if (closure_17[guild_id4] != null) {
        tmp5 = tmp4[channel.id];
      }
      let flag = _Number(tmp5) > 0;
      if (flag) {
        recountParent(guild_id4, channel.id);
        flag = true;
      }
      return flag;
    }
  }
}
function rebuildReadStates() {
  let isRelevant;
  let isTimedRelevant;
  closure_13 = {};
  closure_16 = {};
  for (const key10008 in closure_12) {
    let keys = Object.keys();
    if (keys === undefined) {
      continue;
    } else {
      let tmp3 = keys[tmp2];
      while (tmp3 !== undefined) {
        let keys1 = Object.keys();
        if (keys1 === undefined) {
          continue;
        } else {
          let tmp4 = keys1[tmp];
          while (tmp4 !== undefined) {
            let tmp36 = closure_12[key10008][tmp3][tmp4];
            let tmp38 = parseThreadState(tmp36.channel);
            ({ isRelevant, isTimedRelevant } = tmp38);
            if (tmp38.isUnread) {
              let flag = false;
              let tmp8 = updateIn(closure_13, tmp36.channel, tmp36, false);
            }
            if (isRelevant) {
              let flag2 = false;
              let tmp12 = updateIn(closure_16, tmp36.channel, tmp36, false);
            }
            let channel = tmp36.channel;
            let id = channel.id;
            if (id in closure_19) {
              let _clearTimeout = clearTimeout;
              let clearTimeoutResult = clearTimeout(closure_19[id]);
              delete closure_19[id];
            }
            if (!isTimedRelevant) {
              continue;
            } else {
              let _setTimeout = setTimeout;
              let id2 = channel.id;
              let _Date = Date;
              let tmp19 = getThreadAutoArchiveTimeOnceDefault(channel);
              closure_19[id2] = setTimeout(f137091, tmp19 - Date.now() + 1);
              continue;
            }
            continue;
          }
        }
        continue;
      }
    }
    continue;
  }
  closure_15 = {};
  for (const key10052 in closure_14) {
    let keys2 = Object.keys();
    if (keys2 === undefined) {
      continue;
    } else {
      let tmp20 = keys2[tmp2];
      while (tmp20 !== undefined) {
        let keys3 = Object.keys();
        if (keys3 === undefined) {
          continue;
        } else {
          let tmp21 = keys3[tmp];
          while (tmp21 !== undefined) {
            let tmp47 = closure_14[key10052][tmp20][tmp21];
            if (!ReadStateStore.isForumPostUnread(tmp21)) {
              continue;
            } else {
              let flag3 = false;
              let tmp26 = updateIn(closure_15, tmp47, tmp47, false);
              continue;
            }
            continue;
          }
        }
        continue;
      }
    }
    continue;
  }
  closure_17 = {};
  for (const key10065 in closure_14) {
    let keys4 = Object.keys();
    if (keys4 === undefined) {
      continue;
    } else {
      let tmp27 = keys4[tmp];
      while (tmp27 !== undefined) {
        let tmp54 = recountParent(key10065, tmp27);
        continue;
      }
    }
    continue;
  }
}
function updateSelectedChannel() {
  const tmp = channelId;
  channelId = SelectedChannelStore.getChannelId();
  if (channelId === channelId) {
    return false;
  } else {
    const basicChannel = ChannelStore.getBasicChannel(tmp);
    const hasItem = null != basicChannel && set.has(basicChannel.type);
    if (hasItem) {
      recountParent(basicChannel.guild_id, basicChannel.id);
    }
    const basicChannel1 = ChannelStore.getBasicChannel(channelId);
    const hasItem1 = null != basicChannel1 && set.has(basicChannel1.type);
    if (hasItem1) {
      recountParent(basicChannel1.guild_id, basicChannel1.id);
    }
  }
}
function parseThreadState(channel) {
  const tmp = ReadStateStore.getMentionCount(channel.id) > 0;
  const hasUnreadResult = ReadStateStore.hasUnread(channel.id) && !JoinedThreadsStore.isMuted(channel.id);
  const hasFlagResult = channel.hasFlag(ChannelFlags.PINNED);
  const isActiveThreadResult = channel.isActiveThread();
  let tmp6 = isActiveThreadResult;
  if (tmp6) {
    const _Date = Date;
    const tmp9 = getThreadAutoArchiveTimeOnceDefault(channel);
    tmp6 = tmp9 > Date.now();
  }
  let tmp12 = isActiveThreadResult;
  const voiceChannelId = SelectedChannelStore.getVoiceChannelId();
  const id = channel.id;
  if (!isActiveThreadResult) {
    tmp12 = hasFlagResult;
  }
  if (tmp12) {
    tmp12 = hasUnreadResult;
  }
  if (!tmp12) {
    tmp12 = tmp;
  }
  return {
    isUnread: tmp12,
    isRelevant: tmp6 || hasFlagResult || hasUnreadResult || tmp || voiceChannelId === id,
    isTimedRelevant: tmp6,
  };
}
function clearTimer(arg0) {
  if (arg0 in closure_19) {
    const _clearTimeout = clearTimeout;
    clearTimeout(closure_19[arg0]);
    delete closure_19[tmp];
  }
}
function updateIn(arg0, channel, channel2, arg3) {
  let guild_id;
  let id;
  let parent_id;
  ({ guild_id, parent_id, id } = channel);
  const tmp = null != guild_id && null != parent_id && null != id;
  if (tmp) {
    if (!(guild_id in arg0)) {
      arg0[guild_id] = {};
    }
    if (!(parent_id in arg0[guild_id])) {
      arg0[guild_id][parent_id] = {};
    }
    const tmp3 = arg3;
    if (tmp3) {
      const obj = {};
      const merged = Object.assign(arg0[guild_id]);
      const obj2 = {};
      const merged1 = Object.assign(arg0[guild_id][parent_id]);
      obj[parent_id] = obj2;
      arg0[guild_id] = obj;
    }
    if (null === channel2) {
      delete arg0[guild_id][parent_id][id];
      const obj3 = _modDef12;
      if (obj3.isEmpty(arg0[guild_id][parent_id])) {
        delete arg0[guild_id][parent_id];
      }
    } else {
      arg0[guild_id][parent_id][id] = channel2;
    }
  }
}
({ THREADED_CHANNEL_TYPES: c3, THREAD_CHANNEL_TYPES: closure_4 } = ChannelRecord);
const ChannelFlags = ChannelConstants.ChannelFlags;
let closure_12 = {};
const authStore2 = {};
let closure_15 = {};
const authStore3 = {};
let closure_17 = {};
let channelId = null;
let closure_19 = {};
const NO_GUILD_JOINED_THREADS = {};
let closure_32 = {};
let closure_33 = {};
let closure_34 = {};
let closure_35 = {};
const Store = get_initializedDefault.Store;
class ActiveJoinedThreadsStore extends Store {
  initialize() {
    this.waitFor(
      ActiveThreadsStore,
      ChannelStore,
      GuildStore,
      JoinedThreadsStore,
      ReadStateStore,
      SelectedChannelStore,
    );
    const items = [SelectedChannelStore];
    this.syncWith(items, updateSelectedChannel);
  }
  hasActiveJoinedUnreadThreads(arg0, arg1) {
    return arg0 in closure_13 && arg1 in closure_13[arg0];
  }
  getActiveUnjoinedThreadsForParent(guild_id, id) {
    let tmp;
    if (guild_id in closure_14) {
      let tmp4 = closure_14[guild_id][id];
      if (tmp4 == null) {
        tmp4 = closure_34;
      }
      tmp = tmp4;
    } else {
      tmp = closure_34;
    }
    return tmp;
  }
  getActiveJoinedThreadsForParent(guild_id, id) {
    let tmp;
    if (guild_id in closure_12) {
      let tmp4 = closure_12[guild_id][id];
      if (tmp4 == null) {
        tmp4 = closure_33;
      }
      tmp = tmp4;
    } else {
      tmp = closure_33;
    }
    return tmp;
  }
  getAllActiveJoinedThreads() {
    return closure_12;
  }
  getActiveJoinedThreadsForGuild(id5) {
    let tmp = closure_12[id5];
    if (tmp == null) {
      tmp = obj;
    }
    return tmp;
  }
  getActiveJoinedUnreadThreadsForGuild(guildId) {
    let tmp = closure_13[guildId];
    if (tmp == null) {
      tmp = obj;
    }
    return tmp;
  }
  getActiveJoinedUnreadThreadsForParent(guild_id, id) {
    let tmp = this.getActiveJoinedUnreadThreadsForGuild(guild_id)[id];
    if (tmp == null) {
      tmp = closure_33;
    }
    return tmp;
  }
  getActiveJoinedRelevantThreadsForGuild(id) {
    let tmp = closure_16[id];
    if (tmp == null) {
      tmp = obj;
    }
    return tmp;
  }
  getActiveJoinedRelevantThreadsForParent(guild_id, id) {
    let tmp = this.getActiveJoinedRelevantThreadsForGuild(guild_id)[id];
    if (tmp == null) {
      tmp = closure_33;
    }
    return tmp;
  }
  getActiveUnjoinedThreadsForGuild(arg0) {
    let tmp = closure_14[arg0];
    if (tmp == null) {
      tmp = closure_32;
    }
    return tmp;
  }
  getActiveUnjoinedUnreadThreadsForGuild(arg0) {
    let tmp = closure_15[arg0];
    if (tmp == null) {
      tmp = obj;
    }
    return tmp;
  }
  getActiveUnjoinedUnreadThreadsForParent(arg0, arg1) {
    let tmp = this.getActiveUnjoinedUnreadThreadsForGuild(arg0)[arg1];
    if (tmp == null) {
      tmp = closure_33;
    }
    return tmp;
  }
  getNewThreadCountsForGuild(arg0) {
    let tmp = closure_17[arg0];
    if (tmp == null) {
      tmp = closure_35;
    }
    return tmp;
  }
  computeAllActiveJoinedThreads(guildId) {
    const items = [];
    for (const key10005 in closure_12) {
      if (key10005 === guildId) {
        let keys = Object.keys();
        if (keys === undefined) {
          continue;
        } else {
          let tmp5 = keys[tmp2];
          while (tmp5 !== undefined) {
            let keys1 = Object.keys();
            if (keys1 === undefined) {
              continue;
            } else {
              let tmp6 = keys1[tmp];
              while (tmp6 !== undefined) {
                let arr = items.push(closure_12[key10005][tmp5][tmp6].channel);
                continue;
              }
            }
            continue;
          }
        }
        continue;
      }
      continue;
    }
    return items;
  }
  getNewThreadCount(arg0, arg1) {
    let num;
    if (closure_17[arg0] != null) {
      num = tmp[arg1];
    }
    if (num == null) {
      num = 0;
    }
    return num;
  }
  getActiveThreadCount(arg0, arg1) {
    let obj;
    size = _modDef12.size;
    _modDef12;
    if (closure_12[arg0] != null) {
      obj = tmp4[arg1];
    }
    if (obj == null) {
      obj = {};
    }
    let obj2;
    const sizeResult = size(obj);
    const size2 = _modDef12.size;
    _modDef12;
    if (closure_14[arg0] != null) {
      obj2 = tmp7[arg1];
    }
    if (obj2 == null) {
      obj2 = {};
    }
    return sizeResult + size2(obj2);
  }
}
const prototype = ActiveJoinedThreadsStore.prototype;
ActiveJoinedThreadsStore.displayName = "ActiveJoinedThreadsStore";
let obj2 = {
  CONNECTION_OPEN: rebuild,
  OVERLAY_INITIALIZE: rebuild,
  THREAD_LIST_SYNC: function handleThreadListSync(guildId) {
    guildId = guildId.guildId;
    delete closure_12[guildId];
    delete closure_16[guildId];
    delete closure_13[guildId];
    delete closure_14[guildId];
    delete closure_15[guildId];
    rebuildGuild_(guildId);
    for (const key10013 in closure_14[guildId]) {
      let tmp4 = recountParent(guildId, key10013);
      continue;
    }
  },
  LOAD_THREADS_SUCCESS: rebuild,
  LOAD_ARCHIVED_THREADS_SUCCESS: rebuild,
  SEARCH_MESSAGES_SUCCESS: rebuild,
  MOD_VIEW_SEARCH_MESSAGES_SUCCESS: rebuild,
  GUILD_CREATE: function handleGuildCreate(guild) {
    const id = guild.guild.id;
    delete closure_12[id];
    delete closure_16[id];
    delete closure_13[id];
    delete closure_14[id];
    delete closure_15[id];
    rebuildGuild_(id);
    for (const key10014 in closure_14[id]) {
      let tmp4 = recountParent(id, key10014);
      continue;
    }
  },
  GUILD_DELETE: rebuild,
  CURRENT_USER_UPDATE: rebuild,
  VOICE_CHANNEL_SELECT: function handleVoiceChannelSelect(channelId) {
    const channel = ChannelStore.getChannel(channelId.channelId);
    let isThreadResult;
    if (channel != null) {
      isThreadResult = channel.isThread();
    }
    if (isThreadResult) {
      updateThread(channel.guild_id, channel.parent_id, channel.id);
    } else {
      return false;
    }
  },
  THREAD_CREATE: handleThreadUpdate,
  THREAD_UPDATE: handleThreadUpdate,
  THREAD_DELETE: handleThreadUpdate,
  CHANNEL_UPDATES: function handleChannelUpdates(arg0) {
    const iter = arg0.channels[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let obj = AgeGateUtils;
      let result = obj.isChannelContentGated(nextResult);
      if (result !== anyThreadsNSFW(nextResult.guild_id, nextResult.parent_id)) {
        let tmp7 = rebuild();
        iter.return();
      }
    }
    return false;
  },
  CHANNEL_DELETE: function handleChannelDelete(channel) {
    channel = channel.channel;
    let flag = false;
    const tmp = null != channel.guild_id && null != channel.parent_id;
    if (tmp) {
      let flag2 = false;
      const tmp3 = channel.guild_id in closure_12 && channel.parent_id in closure_12[channel.guild_id];
      if (tmp3) {
        delete closure_12[channel.guild_id][channel.parent_id];
        flag2 = true;
      }
      const tmp7 = channel.guild_id in closure_13 && channel.parent_id in closure_13[channel.guild_id];
      if (tmp7) {
        delete closure_13[channel.guild_id][channel.parent_id];
        flag2 = true;
      }
      const tmp11 = channel.guild_id in closure_16 && channel.parent_id in closure_16[channel.guild_id];
      if (tmp11) {
        const obj = SnowflakeUtilsDefault;
        const keys = obj.keys(closure_16[channel.guild_id][channel.parent_id]);
        const item = keys.forEach(clearTimer);
        delete closure_16[channel.guild_id][channel.parent_id];
        flag2 = true;
      }
      const tmp20 = channel.guild_id in closure_14 && channel.parent_id in closure_14[channel.guild_id];
      if (tmp20) {
        delete closure_14[channel.guild_id][channel.parent_id];
        flag2 = true;
      }
      const tmp24 = channel.guild_id in closure_15 && channel.parent_id in closure_15[channel.guild_id];
      if (tmp24) {
        delete closure_15[channel.guild_id][channel.parent_id];
        flag2 = true;
      }
      flag = flag2;
      if (flag) {
        recountParent(channel.guild_id, channel.parent_id);
        flag = flag2;
      }
    }
    return flag;
  },
  THREAD_MEMBER_UPDATE: handleThreadMemberUpdate,
  THREAD_MEMBERS_UPDATE: handleThreadMemberUpdate,
  LOAD_MESSAGES_SUCCESS: handleReadStateChannelAction,
  MESSAGE_CREATE: handleReadStateChannelAction,
  MESSAGE_DELETE: handleReadStateChannelAction,
  MESSAGE_DELETE_BULK: handleReadStateChannelAction,
  MESSAGE_ACK: handleReadStateChannelAction,
  CHANNEL_ACK: handleReadStateChannelAction,
  CHANNEL_LOCAL_ACK: handleReadStateChannelAction,
  CHANNEL_SELECT: function handleChannelSelect(channelId) {
    handleReadStateChannelAction(channelId);
    const tmp2 = channelId;
    channelId = SelectedChannelStore.getChannelId();
    if (channelId !== channelId) {
      const basicChannel = ChannelStore.getBasicChannel(tmp2);
      const hasItem = null != basicChannel && set.has(basicChannel.type);
      if (hasItem) {
        recountParent(basicChannel.guild_id, basicChannel.id);
      }
      const basicChannel1 = ChannelStore.getBasicChannel(channelId);
      const hasItem1 = null != basicChannel1 && set.has(basicChannel1.type);
      if (hasItem1) {
        recountParent(basicChannel1.guild_id, basicChannel1.id);
      }
    }
  },
  PASSIVE_UPDATE_V2: function handlePassiveUpdateV2(channels) {
    if (channels.channels.length > 0) {
      const guildId = channels.guildId;
      delete closure_12[guildId];
      delete closure_16[guildId];
      delete closure_13[guildId];
      delete closure_14[guildId];
      delete closure_15[guildId];
      rebuildGuild_(guildId);
      for (const key10016 in closure_14[guildId]) {
        let tmp6 = recountParent(guildId, key10016);
        continue;
      }
    }
  },
  WINDOW_FOCUS: rebuildReadStates,
  UPDATE_CHANNEL_DIMENSIONS: function handleUpdateChannelDimensions(channelId) {
    const channel = ChannelStore.getChannel(channelId.channelId);
    let tmp2 = !(null == channel || !channel.isThread());
    null == channel || !channel.isThread();
    if (tmp2) {
      tmp2 = updateThread(channel.guild_id, channel.parent_id, channel.id);
    }
    return tmp2;
  },
  TRY_ACK: rebuildReadStates,
  BULK_ACK: rebuildReadStates,
};
const activeJoinedThreadsStore = new ActiveJoinedThreadsStore(DispatcherDefault, obj2);
let size = size_mod;
let result = size.fileFinishedImporting("modules/threads/ActiveJoinedThreadsStore.tsx");

export default activeJoinedThreadsStore;
export { NO_GUILD_JOINED_THREADS };
