// discord_app/modules/threads/ActiveJoinedThreadsStore.tsx
import SnowflakeUtilsDefault from "../../utils/SnowflakeUtils.tsx";
import _modDef12 from "../../../_runtime/metro/00012__.js";
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
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
import size from "../../../_runtime/metro/00002__.js";

function rebuild() {
  closure_12 = {};
  closure_16 = {};
  closure_13 = {};
  dependencyMap3 = {};
  closure_15 = {};
  channelId = SelectedChannelStore.getChannelId();
  for (const key10012 in closure_19) {
    let _clearTimeout = clearTimeout;
    let clearTimeoutResult = clearTimeout(dependencyMap7[key10012]);
    continue;
  }
  dependencyMap7 = {};
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
  const threadsForGuild = ActiveThreadsStore.getThreadsForGuild(guildId);
  for (const key10011 in threadsForGuild) {
    let keys = Object.keys();
    if (keys === undefined) {
      continue;
    } else {
      let tmp6 = keys[tmp];
      while (tmp6 !== undefined) {
        if (tmp6 in dependencyMap7) {
          let _clearTimeout = clearTimeout;
          let clearTimeoutResult = clearTimeout(dependencyMap7[tmp6]);
          delete tmp2[tmp4];
        }
        let channel = ChannelStore.getChannel(tmp6);
        if (null == channel) {
          continue;
        } else {
          let joinTimestampResult = JoinedThreadsStore.joinTimestamp(tmp6);
          if (null != joinTimestampResult) {
            let obj = { channel, joinTimestamp: joinTimestampResult.getTime() };
            let tmp26 = parseThreadState(channel);
            let flag3 = false;
            ({ isUnread, isRelevant, isTimedRelevant } = tmp26);
            let tmp31 = updateIn(closure_12, channel, obj, false);
            let tmp33 = null;
            if (isRelevant) {
              tmp33 = obj;
            }
            let flag4 = false;
            let tmp27Result = updateIn(closure_16, channel, tmp33, false);
            let tmp39 = null;
            if (isUnread) {
              tmp39 = obj;
            }
            let flag5 = false;
            tmp27Result = updateIn(closure_13, channel, tmp39, false);
            if (!isTimedRelevant) {
              continue;
            } else {
              let id = channel.id;
              if (id in dependencyMap7) {
                let _clearTimeout2 = clearTimeout;
                let clearTimeoutResult1 = clearTimeout(dependencyMap7[id]);
                delete tmp2[tmp3];
              }
              let _setTimeout = setTimeout;
              let _Date = Date;
              let tmp51 = getThreadAutoArchiveTimeOnceDefault(channel);
              dependencyMap7[channel.id] = setTimeout(
                () => {
                  channel = ChannelStore.getChannel(channel.id);
                  if (null != channel) {
                    const obj = { type: "THREAD_UPDATE", channel };
                    obj.dispatch(obj);
                  }
                },
                tmp51 - Date.now() + 1,
              );
              continue;
            }
            continue;
          } else {
            let flag = false;
            let tmp17 = updateIn(closure_14, channel, channel, false);
            let tmp20 = null;
            if (ReadStateStore.isForumPostUnread(channel.id)) {
              tmp20 = channel;
            }
            let flag2 = false;
            let tmp13Result = updateIn(closure_15, channel, tmp20, false);
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
      if (null == dependencyMap6[guild_id]) {
        dependencyMap6[guild_id] = {};
      }
      dependencyMap6[guild_id][id] = 0;
      if (null != dependencyMap3[guild_id]) {
        if (null != dependencyMap3[guild_id][id]) {
          const guild = GuildStore.getGuild(guild_id);
          if (null != guild) {
            let trackedAckMessageId = ReadStateStore.getTrackedAckMessageId(id);
            if (null == trackedAckMessageId) {
              const _Date2 = Date;
              let timestamp = Date.now();
              if (null == guild.joinedAt) {
                trackedAckMessageId = SnowflakeUtilsDefault.fromTimestamp(timestamp);
              } else {
                const _Date = Date;
                const joinedAt = guild.joinedAt;
                if (guild.joinedAt instanceof Date) {
                  timestamp = joinedAt.getTime();
                } else if (typeof joinedAt === "string") {
                  const _Date3 = Date;
                  const date = new Date(guild.joinedAt);
                  timestamp = date.getTime();
                }
              }
            }
            for (const key10034 in closure_14[arg0][arg1]) {
              if (arg1 === channelId) {
                if (!ReadStateStore.isNewForumThread(key10034, arg1, guild)) {
                  continue;
                } else {
                  let tmp20 = dependencyMap6[arg0];
                  tmp20[arg1] = tmp20[arg1] + 1;
                  continue;
                }
                continue;
              } else {
                let obj3 = SnowflakeUtilsDefault;
                let tmp14 = obj3.compare(key10034, trackedAckMessageId) > 0;
                if (tmp14) {
                  tmp14 = !ReadStateStore.hasOpenedThread(key10034);
                }
                if (!tmp14) {
                  continue;
                } else {
                  let tmp17 = dependencyMap6[arg0];
                  tmp17[arg1] = tmp17[arg1] + 1;
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
  if (null == parent_id) {
    return false;
  } else {
    let _Date = ChannelStore.getChannel(id);
    let joinTimestampResult = JoinedThreadsStore.joinTimestamp(id);
    if (null != _Date) {
      if (ActiveThreadsStore.isActive(guild_id, parent_id, id)) {
        if (null != joinTimestampResult) {
          let obj = { channel: _Date, joinTimestamp: joinTimestampResult.getTime() };
          ({ isUnread, isRelevant, isTimedRelevant } = parseThreadState(_Date));
          updateIn(dependencyMap, _Date, obj, true);
          let tmp87 = null;
          if (isRelevant) {
            tmp87 = obj;
          }
          updateIn(dependencyMap5, _Date, tmp87, true);
          let tmp93 = null;
          if (isUnread) {
            tmp93 = obj;
          }
          updateIn(dependencyMap2, _Date, tmp93, true);
          updateIn(dependencyMap3, _Date, null, true);
          updateIn(dependencyMap4, _Date, null, true);
          const id2 = _Date.id;
          joinTimestampResult = dependencyMap7;
          if (id2 in dependencyMap7) {
            const _clearTimeout3 = clearTimeout;
            clearTimeout(dependencyMap7[id2]);
            joinTimestampResult = dependencyMap7;
            delete tmp3[tmp4];
          }
          if (isTimedRelevant) {
            const _setTimeout = setTimeout;
            _Date = Date;
            dependencyMap7[_Date.id] = setTimeout(
              () => {
                channel = ChannelStore.getChannel(channel.id);
                if (null != channel) {
                  const obj = { type: "THREAD_UPDATE", channel };
                  obj.dispatch(obj);
                }
              },
              getThreadAutoArchiveTimeOnceDefault(_Date) - Date.now() + 1,
            );
            const tmp112 = getThreadAutoArchiveTimeOnceDefault(_Date);
          }
          const tmp80 = parseThreadState(_Date);
        } else {
          updateIn(dependencyMap, _Date, null, true);
          updateIn(dependencyMap2, _Date, null, true);
          updateIn(dependencyMap5, _Date, null, true);
          updateIn(dependencyMap3, _Date, _Date, true);
          let tmp69 = null;
          if (isForumPostUnreadResult) {
            tmp69 = _Date;
          }
          updateIn(dependencyMap4, _Date, tmp69, true);
          id = _Date.id;
          if (id in dependencyMap7) {
            const _clearTimeout2 = clearTimeout;
            clearTimeout(dependencyMap7[id]);
            delete tmp2[tmp4];
          }
          isForumPostUnreadResult = ReadStateStore.isForumPostUnread(_Date.id);
        }
        recountParent(guild_id, parent_id);
      }
    }
    let tmp8 = null != guild_id && null != parent_id && null != id;
    if (tmp8) {
      tmp8 =
        guild_id in dependencyMap && parent_id in dependencyMap[guild_id] && id in dependencyMap[guild_id][parent_id];
      const tmp9 =
        guild_id in dependencyMap && parent_id in dependencyMap[guild_id] && id in dependencyMap[guild_id][parent_id];
    }
    if (tmp8) {
      obj = {};
      const merged = Object.assign(dependencyMap[guild_id]);
      obj = {};
      const merged1 = Object.assign(dependencyMap[guild_id][parent_id]);
      obj[parent_id] = obj;
      dependencyMap[guild_id] = obj;
      delete tmp5[tmp4];
      let obj2 = _modDef12;
      if (obj2.isEmpty(dependencyMap[guild_id][parent_id])) {
        delete tmp2[tmp];
      }
    }
    let tmp19 = null != guild_id && null != parent_id && null != id;
    if (tmp19) {
      tmp19 =
        guild_id in dependencyMap5 &&
        parent_id in dependencyMap5[guild_id] &&
        id in dependencyMap5[guild_id][parent_id];
      const tmp20 =
        guild_id in dependencyMap5 &&
        parent_id in dependencyMap5[guild_id] &&
        id in dependencyMap5[guild_id][parent_id];
    }
    if (tmp19) {
      const obj1 = {};
      const merged2 = Object.assign(dependencyMap5[guild_id]);
      obj2 = {};
      const merged3 = Object.assign(dependencyMap5[guild_id][parent_id]);
      obj1[parent_id] = obj2;
      dependencyMap5[guild_id] = obj1;
      delete tmp5[tmp4];
      let obj5 = _modDef12;
      if (obj5.isEmpty(dependencyMap5[guild_id][parent_id])) {
        delete tmp2[tmp];
      }
    }
    let tmp30 = null != guild_id && null != parent_id && null != id;
    if (tmp30) {
      tmp30 =
        guild_id in dependencyMap2 &&
        parent_id in dependencyMap2[guild_id] &&
        id in dependencyMap2[guild_id][parent_id];
      const tmp31 =
        guild_id in dependencyMap2 &&
        parent_id in dependencyMap2[guild_id] &&
        id in dependencyMap2[guild_id][parent_id];
    }
    if (tmp30) {
      const obj3 = {};
      const merged4 = Object.assign(dependencyMap2[guild_id]);
      const obj4 = {};
      const merged5 = Object.assign(dependencyMap2[guild_id][parent_id]);
      obj3[parent_id] = obj4;
      dependencyMap2[guild_id] = obj3;
      delete tmp5[tmp4];
      let obj8 = _modDef12;
      if (obj8.isEmpty(dependencyMap2[guild_id][parent_id])) {
        delete tmp2[tmp];
      }
    }
    let tmp41 = null != guild_id && null != parent_id && null != id;
    if (tmp41) {
      tmp41 =
        guild_id in dependencyMap3 &&
        parent_id in dependencyMap3[guild_id] &&
        id in dependencyMap3[guild_id][parent_id];
      const tmp42 =
        guild_id in dependencyMap3 &&
        parent_id in dependencyMap3[guild_id] &&
        id in dependencyMap3[guild_id][parent_id];
    }
    if (tmp41) {
      obj5 = {};
      const merged6 = Object.assign(dependencyMap3[guild_id]);
      const obj6 = {};
      const merged7 = Object.assign(dependencyMap3[guild_id][parent_id]);
      obj5[parent_id] = obj6;
      dependencyMap3[guild_id] = obj5;
      delete tmp5[tmp4];
      if (obj12.isEmpty(dependencyMap3[guild_id][parent_id])) {
        delete tmp2[tmp];
      }
      obj12 = _modDef12;
    }
    let tmp52 = null != guild_id && null != parent_id && null != id;
    if (tmp52) {
      tmp52 =
        guild_id in dependencyMap4 &&
        parent_id in dependencyMap4[guild_id] &&
        id in dependencyMap4[guild_id][parent_id];
      const tmp53 =
        guild_id in dependencyMap4 &&
        parent_id in dependencyMap4[guild_id] &&
        id in dependencyMap4[guild_id][parent_id];
    }
    if (tmp52) {
      const obj7 = {};
      const merged8 = Object.assign(dependencyMap4[guild_id]);
      obj8 = {};
      const merged9 = Object.assign(dependencyMap4[guild_id][parent_id]);
      obj7[parent_id] = obj8;
      dependencyMap4[guild_id] = obj7;
      delete tmp5[tmp4];
      if (obj15.isEmpty(dependencyMap4[guild_id][parent_id])) {
        delete tmp2[tmp];
      }
      obj15 = _modDef12;
    }
    if (id in dependencyMap7) {
      const _clearTimeout = clearTimeout;
      clearTimeout(dependencyMap7[id]);
      delete tmp2[tmp4];
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
    if (null != dependencyMap[guild_id]) {
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
    if (null != dependencyMap3[guild_id]) {
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
  let tmp2 = null == channel;
  if (!tmp2) {
    tmp2 = !ActiveThreadsStore.isActive(id.guildId, channel.parent_id, id.id);
  }
  let tmp4 = !tmp2;
  if (!tmp2) {
    tmp4 = updateThread(channel.guild_id, channel.parent_id, channel.id);
  }
  return tmp4;
}
function handleReadStateChannelAction(channelId) {
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
        let tmp10 = guild_id5 in dependencyMap;
        if (tmp10) {
          tmp10 = parent_id5 in dependencyMap[guild_id5];
        }
        if (tmp10) {
          tmp10 = channel.id in dependencyMap[guild_id5][parent_id5];
        }
        if (tmp10) {
          const tmp23 = parseThreadState(channel);
          ({ isUnread, isRelevant } = tmp23);
          const id = channel.id;
          if (id in dependencyMap7) {
            const _clearTimeout = clearTimeout;
            clearTimeout(dependencyMap7[id]);
            delete tmp[tmp2];
          }
          if (tmp23.isTimedRelevant) {
            const _setTimeout = setTimeout;
            const _Date = Date;
            dependencyMap7[channel.id] = setTimeout(
              () => {
                channel = ChannelStore.getChannel(channel.id);
                if (null != channel) {
                  const obj = { type: "THREAD_UPDATE", channel };
                  obj.dispatch(obj);
                }
              },
              getThreadAutoArchiveTimeOnceDefault(channel) - Date.now() + 1,
            );
            const tmp33 = getThreadAutoArchiveTimeOnceDefault(channel);
          }
          ({ guild_id: guild_id2, parent_id: parent_id2 } = channel);
          let tmp35 = guild_id2 in dependencyMap2;
          if (tmp35) {
            tmp35 = parent_id2 in dependencyMap2[guild_id2];
          }
          if (tmp35) {
            tmp35 = channel.id in dependencyMap2[guild_id2][parent_id2];
          }
          ({ guild_id: guild_id3, parent_id: parent_id3 } = channel);
          let tmp37 = guild_id3 in dependencyMap5;
          if (tmp37) {
            tmp37 = parent_id3 in dependencyMap5[guild_id3];
          }
          if (tmp37) {
            tmp37 = channel.id in dependencyMap5[guild_id3][parent_id3];
          }
          if (isUnread === tmp35) {
            if (isRelevant === tmp37) {
              return false;
            }
          }
          let tmp40 = null;
          if (isRelevant) {
            tmp40 = tmp39;
          }
          let tmp43 = null;
          if (isUnread) {
            tmp43 = tmp39;
          }
          updateIn(dependencyMap2, channel, tmp43, true);
          updateIn(dependencyMap5, channel, tmp40, true);
          recountParent(guild_id4, parent_id4);
        } else {
          ({ guild_id, parent_id } = channel);
          let tmp12 = guild_id in dependencyMap4;
          if (tmp12) {
            tmp12 = parent_id in dependencyMap4[guild_id];
          }
          if (tmp12) {
            tmp12 = channel.id in dependencyMap4[guild_id][parent_id];
          }
          const isForumPostUnreadResult = ReadStateStore.isForumPostUnread(channel.id);
          if (isForumPostUnreadResult === tmp12) {
            return false;
          } else {
            let tmp17 = null;
            if (isForumPostUnreadResult) {
              tmp17 = channel;
            }
            updateIn(dependencyMap4, channel, tmp17, true);
          }
        }
      }
    } else {
      let tmp7;
      if (dependencyMap6[guild_id4] != null) {
        tmp7 = tmp6[channel.id];
      }
      let flag = Number(tmp7) > 0;
      if (flag) {
        recountParent(guild_id4, channel.id);
        flag = true;
      }
      return flag;
    }
  }
}
function rebuildReadStates() {
  closure_13 = {};
  closure_16 = {};
  for (const key10008 in closure_12) {
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
            let tmp39 = dependencyMap[key10008][tmp5][tmp6];
            let tmp41 = parseThreadState(tmp39.channel);
            ({ isRelevant, isTimedRelevant } = tmp41);
            if (tmp41.isUnread) {
              let flag = false;
              let tmp10 = updateIn(closure_13, tmp39.channel, tmp39, false);
            }
            if (isRelevant) {
              let flag2 = false;
              let tmp14 = updateIn(closure_16, tmp39.channel, tmp39, false);
            }
            let channel = tmp39.channel;
            let id = channel.id;
            if (id in dependencyMap7) {
              let _clearTimeout = clearTimeout;
              let clearTimeoutResult = clearTimeout(dependencyMap7[id]);
              delete tmp3[tmp4];
            }
            if (!isTimedRelevant) {
              continue;
            } else {
              let _setTimeout = setTimeout;
              let _Date = Date;
              let tmp22 = getThreadAutoArchiveTimeOnceDefault(channel);
              dependencyMap7[channel.id] = setTimeout(
                () => {
                  channel = ChannelStore.getChannel(channel.id);
                  if (null != channel) {
                    const obj = { type: "THREAD_UPDATE", channel };
                    obj.dispatch(obj);
                  }
                },
                tmp22 - Date.now() + 1,
              );
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
      let tmp23 = keys2[tmp2];
      while (tmp23 !== undefined) {
        let keys3 = Object.keys();
        if (keys3 === undefined) {
          continue;
        } else {
          let tmp24 = keys3[tmp];
          while (tmp24 !== undefined) {
            let tmp50 = dependencyMap3[key10052][tmp23][tmp24];
            if (!ReadStateStore.isForumPostUnread(tmp24)) {
              continue;
            } else {
              let flag3 = false;
              let tmp29 = updateIn(closure_15, tmp50, tmp50, false);
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
      let tmp30 = keys4[tmp];
      while (tmp30 !== undefined) {
        let tmp57 = recountParent(key10065, tmp30);
        continue;
      }
    }
    continue;
  }
}
function updateSelectedChannel() {
  channelId = SelectedChannelStore.getChannelId();
  if (channelId === channelId) {
    return false;
  } else {
    const basicChannel = ChannelStore.getBasicChannel(tmp);
    let hasItem = null != basicChannel;
    if (hasItem) {
      hasItem = set.has(basicChannel.type);
    }
    if (hasItem) {
      recountParent(basicChannel.guild_id, basicChannel.id);
    }
    const basicChannel1 = ChannelStore.getBasicChannel(channelId);
    let hasItem1 = null != basicChannel1;
    if (hasItem1) {
      hasItem1 = set.has(basicChannel1.type);
    }
    if (hasItem1) {
      recountParent(basicChannel1.guild_id, basicChannel1.id);
    }
  }
  tmp = channelId;
}
function parseThreadState(channel) {
  const tmp = ReadStateStore.getMentionCount(channel.id) > 0;
  let hasUnreadResult = ReadStateStore.hasUnread(channel.id);
  if (hasUnreadResult) {
    hasUnreadResult = !JoinedThreadsStore.isMuted(channel.id);
  }
  const hasFlagResult = channel.hasFlag(ChannelFlags.PINNED);
  const isActiveThreadResult = channel.isActiveThread();
  let tmp6 = isActiveThreadResult;
  if (isActiveThreadResult) {
    const _Date = Date;
    tmp6 = getThreadAutoArchiveTimeOnceDefault(channel) > Date.now();
    const tmp9 = getThreadAutoArchiveTimeOnceDefault(channel);
  }
  let tmp12 = isActiveThreadResult;
  const voiceChannelId = SelectedChannelStore.getVoiceChannelId();
  if (!isActiveThreadResult) {
    tmp12 = hasFlagResult;
  }
  if (tmp12) {
    tmp12 = hasUnreadResult;
  }
  if (!tmp12) {
    tmp12 = tmp;
  }
  const obj = { isUnread: tmp12, isRelevant: null, isTimedRelevant: null };
  let tmp13 = tmp6;
  if (!tmp6) {
    tmp13 = hasFlagResult;
  }
  if (!tmp13) {
    tmp13 = hasUnreadResult;
  }
  if (!tmp13) {
    tmp13 = tmp;
  }
  if (!tmp13) {
    tmp13 = voiceChannelId === channel.id;
  }
  obj.isRelevant = tmp13;
  obj.isTimedRelevant = tmp6;
  return obj;
}
function clearTimer(arg0) {
  if (arg0 in dependencyMap7) {
    const _clearTimeout = clearTimeout;
    clearTimeout(dependencyMap7[arg0]);
    delete tmp[tmp2];
  }
}
function updateIn(dependencyMap2, _Date, _Date2, arg3) {
  ({ guild_id, parent_id, id } = _Date);
  if (tmp5) {
    if (!(guild_id in dependencyMap2)) {
      dependencyMap2[guild_id] = {};
    }
    if (!(parent_id in dependencyMap2[guild_id])) {
      dependencyMap2[guild_id][parent_id] = {};
    }
    if (arg3) {
      let obj = {};
      const merged = Object.assign(dependencyMap2[guild_id]);
      obj = {};
      const merged1 = Object.assign(dependencyMap2[guild_id][parent_id]);
      obj[parent_id] = obj;
      dependencyMap2[guild_id] = obj;
    }
    if (null === _Date2) {
      delete tmp3[tmp4];
      if (obj3.isEmpty(dependencyMap2[guild_id][parent_id])) {
        delete tmp[tmp2];
      }
      obj3 = _modDef12;
    } else {
      dependencyMap2[guild_id][parent_id][id] = _Date2;
    }
  }
  tmp5 = null != guild_id && null != parent_id && null != id;
}
({ THREADED_CHANNEL_TYPES: c3, THREAD_CHANNEL_TYPES: closure_4 } = ChannelRecord);
const ChannelFlags = ChannelConstants.ChannelFlags;
const dependencyMap = {};
const dependencyMap2 = {};
let dependencyMap3 = {};
const dependencyMap4 = {};
const dependencyMap5 = {};
const dependencyMap6 = {};
let channelId = null;
let dependencyMap7 = {};
let NO_GUILD_JOINED_THREADS = {};
let closure_32 = {};
let closure_33 = {};
let closure_34 = {};
let closure_35 = {};
const Store = initializeDefault.Store;
class ActiveJoinedThreadsStore extends Store {}
const prototype = ActiveJoinedThreadsStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(ActiveThreadsStore, ChannelStore, GuildStore, JoinedThreadsStore, ReadStateStore, SelectedChannelStore);
  const items = [SelectedChannelStore];
  this.syncWith(items, updateSelectedChannel);
};
prototype["hasActiveJoinedUnreadThreads"] = function hasActiveJoinedUnreadThreads(arg0, arg1) {
  let tmp = arg0 in dependencyMap2;
  if (tmp) {
    tmp = arg1 in dependencyMap2[arg0];
  }
  return tmp;
};
prototype["getActiveUnjoinedThreadsForParent"] = function getActiveUnjoinedThreadsForParent(guild_id, id) {
  if (guild_id in dependencyMap3) {
    let tmp4 = dependencyMap3[guild_id][id];
    if (tmp4 == null) {
      tmp4 = closure_34;
    }
    let tmp = tmp4;
  } else {
    tmp = closure_34;
  }
  return tmp;
};
prototype["getActiveJoinedThreadsForParent"] = function getActiveJoinedThreadsForParent(guild_id, id) {
  if (guild_id in dependencyMap) {
    let tmp4 = dependencyMap[guild_id][id];
    if (tmp4 == null) {
      tmp4 = closure_33;
    }
    let tmp = tmp4;
  } else {
    tmp = closure_33;
  }
  return tmp;
};
prototype["getAllActiveJoinedThreads"] = function getAllActiveJoinedThreads() {
  return closure_12;
};
prototype["getActiveJoinedThreadsForGuild"] = function getActiveJoinedThreadsForGuild(id) {
  let tmp = dependencyMap[id];
  if (tmp == null) {
    tmp = obj;
  }
  return tmp;
};
prototype["getActiveJoinedUnreadThreadsForGuild"] = function getActiveJoinedUnreadThreadsForGuild(guildId) {
  let tmp = dependencyMap2[guildId];
  if (tmp == null) {
    tmp = obj;
  }
  return tmp;
};
prototype["getActiveJoinedUnreadThreadsForParent"] = function getActiveJoinedUnreadThreadsForParent(channel, id) {
  let tmp = this.getActiveJoinedUnreadThreadsForGuild(channel)[id];
  if (tmp == null) {
    tmp = closure_33;
  }
  return tmp;
};
prototype["getActiveJoinedRelevantThreadsForGuild"] = function getActiveJoinedRelevantThreadsForGuild(id) {
  let tmp = dependencyMap5[id];
  if (tmp == null) {
    tmp = obj;
  }
  return tmp;
};
prototype["getActiveJoinedRelevantThreadsForParent"] = function getActiveJoinedRelevantThreadsForParent(guild_id, id) {
  let tmp = this.getActiveJoinedRelevantThreadsForGuild(guild_id)[id];
  if (tmp == null) {
    tmp = closure_33;
  }
  return tmp;
};
prototype["getActiveUnjoinedThreadsForGuild"] = function getActiveUnjoinedThreadsForGuild(arg0) {
  let tmp = dependencyMap3[arg0];
  if (tmp == null) {
    tmp = closure_32;
  }
  return tmp;
};
prototype["getActiveUnjoinedUnreadThreadsForGuild"] = function getActiveUnjoinedUnreadThreadsForGuild(channel) {
  let tmp = dependencyMap4[channel];
  if (tmp == null) {
    tmp = obj;
  }
  return tmp;
};
prototype["getActiveUnjoinedUnreadThreadsForParent"] = function getActiveUnjoinedUnreadThreadsForParent(
  channel,
  importDefault,
) {
  let tmp = this.getActiveUnjoinedUnreadThreadsForGuild(channel)[importDefault];
  if (tmp == null) {
    tmp = closure_33;
  }
  return tmp;
};
prototype["getNewThreadCountsForGuild"] = function getNewThreadCountsForGuild(arg0) {
  let tmp = dependencyMap6[arg0];
  if (tmp == null) {
    tmp = closure_35;
  }
  return tmp;
};
prototype["computeAllActiveJoinedThreads"] = function computeAllActiveJoinedThreads(guildId) {
  const items = [];
  for (const key10005 in closure_12) {
    if (key10005 === arg0) {
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
              let arr = items.push(dependencyMap[key10005][tmp5][tmp6].channel);
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
};
prototype["getNewThreadCount"] = function getNewThreadCount(arg0, arg1) {
  let num;
  if (dependencyMap6[arg0] != null) {
    num = tmp[arg1];
  }
  if (num == null) {
    num = 0;
  }
  return num;
};
prototype["getActiveThreadCount"] = function getActiveThreadCount(arg0, arg1) {
  let obj;
  if (dependencyMap[arg0] != null) {
    obj = tmp3[arg1];
  }
  if (obj == null) {
    obj = {};
  }
  const sizeResult = obj.size(obj);
  obj = undefined;
  if (dependencyMap3[arg0] != null) {
    obj = tmp5[arg1];
  }
  if (obj == null) {
    obj = {};
  }
  return sizeResult + _modDef12.size(obj);
};
ActiveJoinedThreadsStore.displayName = "ActiveJoinedThreadsStore";
NO_GUILD_JOINED_THREADS = {
  CONNECTION_OPEN: rebuild,
  OVERLAY_INITIALIZE: rebuild,
  THREAD_LIST_SYNC: function handleThreadListSync(guildId) {
    guildId = guildId.guildId;
    delete tmp[tmp2];
    delete tmp[tmp2];
    delete tmp[tmp2];
    delete tmp[tmp2];
    delete tmp[tmp2];
    rebuildGuild_(guildId);
    for (const key10013 in closure_14[guildId]) {
      let tmp6 = recountParent(guildId, key10013);
      continue;
    }
  },
  LOAD_THREADS_SUCCESS: rebuild,
  LOAD_ARCHIVED_THREADS_SUCCESS: rebuild,
  SEARCH_MESSAGES_SUCCESS: rebuild,
  MOD_VIEW_SEARCH_MESSAGES_SUCCESS: rebuild,
  GUILD_CREATE: function handleGuildCreate(guild) {
    const id = guild.guild.id;
    delete tmp[tmp2];
    delete tmp[tmp2];
    delete tmp[tmp2];
    delete tmp[tmp2];
    delete tmp[tmp2];
    rebuildGuild_(id);
    for (const key10014 in closure_14[id]) {
      let tmp6 = recountParent(id, key10014);
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
    if (tmp3) {
      let tmp5 = channel.guild_id in dependencyMap;
      if (tmp5) {
        tmp5 = channel.parent_id in dependencyMap[channel.guild_id];
      }
      let flag2 = false;
      if (tmp5) {
        const parent_id = channel.parent_id;
        delete tmp2[tmp];
        flag2 = true;
      }
      let tmp10 = channel.guild_id in dependencyMap2;
      if (tmp10) {
        tmp10 = channel.parent_id in dependencyMap2[channel.guild_id];
      }
      if (tmp10) {
        const parent_id2 = channel.parent_id;
        delete tmp2[tmp];
        flag2 = true;
      }
      let tmp15 = channel.guild_id in dependencyMap5;
      if (tmp15) {
        tmp15 = channel.parent_id in dependencyMap5[channel.guild_id];
      }
      if (tmp15) {
        const keys = SnowflakeUtilsDefault.keys(dependencyMap5[channel.guild_id][channel.parent_id]);
        const item = keys.forEach(clearTimer);
        const parent_id3 = channel.parent_id;
        delete tmp2[tmp];
        flag2 = true;
      }
      let tmp25 = channel.guild_id in dependencyMap3;
      if (tmp25) {
        tmp25 = channel.parent_id in dependencyMap3[channel.guild_id];
      }
      if (tmp25) {
        const parent_id4 = channel.parent_id;
        delete tmp2[tmp];
        flag2 = true;
      }
      let tmp30 = channel.guild_id in dependencyMap4;
      if (tmp30) {
        tmp30 = channel.parent_id in dependencyMap4[channel.guild_id];
      }
      if (tmp30) {
        const parent_id5 = channel.parent_id;
        delete tmp2[tmp];
        flag2 = true;
      }
      flag = flag2;
      if (flag2) {
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
    channelId = SelectedChannelStore.getChannelId();
    if (channelId !== channelId) {
      const basicChannel = ChannelStore.getBasicChannel(tmp2);
      let hasItem = null != basicChannel;
      if (hasItem) {
        hasItem = set.has(basicChannel.type);
      }
      if (hasItem) {
        recountParent(basicChannel.guild_id, basicChannel.id);
      }
      const basicChannel1 = ChannelStore.getBasicChannel(channelId);
      let hasItem1 = null != basicChannel1;
      if (hasItem1) {
        hasItem1 = set.has(basicChannel1.type);
      }
      if (hasItem1) {
        recountParent(basicChannel1.guild_id, basicChannel1.id);
      }
    }
    tmp2 = channelId;
  },
  PASSIVE_UPDATE_V2: function handlePassiveUpdateV2(channels) {
    if (channels.channels.length > 0) {
      const guildId = channels.guildId;
      delete tmp[tmp2];
      delete tmp[tmp2];
      delete tmp[tmp2];
      delete tmp[tmp2];
      delete tmp[tmp2];
      rebuildGuild_(guildId);
      for (const key10016 in closure_14[guildId]) {
        let tmp13 = recountParent(guildId, key10016);
        continue;
      }
    }
  },
  WINDOW_FOCUS: rebuildReadStates,
  UPDATE_CHANNEL_DIMENSIONS: function handleUpdateChannelDimensions(channelId) {
    const channel = ChannelStore.getChannel(channelId.channelId);
    const tmp = null == channel || !channel.isThread();
    let tmp2 = !tmp;
    if (!tmp) {
      tmp2 = updateThread(channel.guild_id, channel.parent_id, channel.id);
    }
    return tmp2;
  },
  TRY_ACK: rebuildReadStates,
  BULK_ACK: rebuildReadStates,
};
const activeJoinedThreadsStore = new ActiveJoinedThreadsStore(DispatcherDefault, NO_GUILD_JOINED_THREADS);
let result = size.fileFinishedImporting("modules/threads/ActiveJoinedThreadsStore.tsx");

export default activeJoinedThreadsStore;
export { NO_GUILD_JOINED_THREADS };
