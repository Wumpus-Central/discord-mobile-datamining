// === Module 5400: rebuild ===

// Module 5400 (rebuild)
import set from "set" /* 2 */;
import DISCORD_EPOCHDefault from "DISCORD_EPOCH" /* 11 */;
import applyDefault from "apply" /* 12 */;
import initializeDefault from "initialize" /* 589 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import set2 from "set" /* 1398 */;
import shouldShowAgeGateForVoiceChannel from "shouldShowAgeGateForVoiceChannel" /* 4684 */;
import getThreadAutoArchiveTimeOnceDefault from "getThreadAutoArchiveTimeOnce" /* 5402 */;
import createChannelRecord from "createChannelRecord" /* 1395 */;
import closure_5 from "ensureGuildLoaded" /* 1391 */;
import closure_6 from "createGuildRecordFromRust" /* 1910 */;
import closure_7 from "generateOldThreadCutoff" /* 4460 */;
import closure_8 from "handleConnectionOpen" /* 1981 */;
import closure_9 from "handleThreadCreateOrUpdate" /* 5401 */;
import closure_10 from "storeThread" /* 4091 */;

function rebuild() {
  closure_12 = {};
  closure_16 = {};
  closure_13 = {};
  const dependencyMap3 = {};
  closure_15 = {};
  const channelId = store3.getChannelId();
  for (const key10012 in closure_19) {
    let tmp4 = key10012;
    let _clearTimeout = clearTimeout;
    let tmp5 = dependencyMap7;
    let clearTimeoutResult = clearTimeout(dependencyMap7[key10012]);
    continue;
  }
  const dependencyMap7 = {};
  closure_9.forEachGuild((arg0) => {
    callback(arg0);
  });
  closure_17 = {};
  for (const key10022 in closure_14) {
    let tmp7 = key10022;
    let tmp8 = dependencyMap3;
    let keys = Object.keys();
    if (keys === undefined) {
      continue;
    } else {
      let tmp3 = keys[tmp];
      while (tmp3 !== undefined) {
        let tmp10 = tmp3;
        let tmp11 = recountParent;
        let tmp12 = recountParent(key10022, tmp3);
        continue;
      }
    }
    continue;
  }
}
function rebuildGuild_(guildId) {
  const threadsForGuild = closure_9.getThreadsForGuild(guildId);
  for (const key10011 in threadsForGuild) {
    let tmp52 = key10011;
    let keys = Object.keys();
    if (keys === undefined) {
      continue;
    } else {
      let tmp6 = keys[tmp];
      while (tmp6 !== undefined) {
        let tmp54 = tmp6;
        let tmp55 = dependencyMap7;
        if (tmp6 in dependencyMap7) {
          let _clearTimeout = clearTimeout;
          let tmp7 = dependencyMap7;
          let clearTimeoutResult = clearTimeout(dependencyMap7[tmp6]);
          let tmp9 = dependencyMap7;
          delete tmp2[tmp4];
        }
        let tmp10 = store;
        let channel = store.getChannel(tmp6);
        if (null == channel) {
          continue;
        } else {
          let tmp12 = closure_10;
          let joinTimestampResult = closure_10.joinTimestamp(tmp6);
          if (null != joinTimestampResult) {
            obj = { channel: null, joinTimestamp: null };
            obj[0] = channel;
            obj[1] = joinTimestampResult.getTime();
            let tmp25 = parseThreadState;
            let tmp26 = parseThreadState(channel);
            let tmp27 = updateIn;
            let tmp28 = closure_12;
            let num3 = 0;
            let tmp29 = channel;
            let tmp30 = obj;
            let flag3 = false;
            ({ isUnread, isRelevant, isTimedRelevant } = tmp26);
            let tmp31 = updateIn(closure_12, channel, obj, false);
            let tmp32 = closure_16;
            let tmp33 = null;
            if (isRelevant) {
              tmp33 = obj;
            }
            let num4 = 0;
            let tmp34 = tmp32;
            let tmp35 = channel;
            let tmp36 = tmp33;
            let flag4 = false;
            let tmp27Result = tmp27(tmp32, channel, tmp33, false);
            let tmp38 = closure_13;
            let tmp39 = null;
            if (isUnread) {
              tmp39 = obj;
            }
            let num5 = 0;
            let tmp40 = tmp38;
            let tmp41 = channel;
            let tmp42 = tmp39;
            let flag5 = false;
            tmp27Result = tmp27(tmp38, channel, tmp39, false);
            if (!isTimedRelevant) {
              continue;
            } else {
              let id = channel.id;
              let tmp44 = dependencyMap7;
              if (id in dependencyMap7) {
                let _clearTimeout2 = clearTimeout;
                let tmp45 = dependencyMap7;
                let clearTimeoutResult1 = clearTimeout(dependencyMap7[id]);
                let tmp47 = dependencyMap7;
                delete tmp2[tmp3];
              }
              let tmp48 = dependencyMap7;
              let _setTimeout = setTimeout;
              let tmp49 = importDefault;
              let tmp50 = dependencyMap;
              let _Date = Date;
              let tmp51 = getThreadAutoArchiveTimeOnceDefault(channel);
              dependencyMap7[channel.id] = setTimeout(() => {
                channel = closure_1_5.getChannel(channel.id);
                if (null != channel) {
                  obj = closure_1_1(closure_1_2[11]);
                  obj = { type: "THREAD_UPDATE", channel: null };
                  obj[1] = channel;
                  obj.dispatch(obj);
                }
              }, tmp51 - Date.now() + 1);
              continue;
            }
            continue;
          } else {
            let tmp14 = closure_14;
            let num = 0;
            let tmp15 = channel;
            let tmp16 = channel;
            let flag = false;
            let tmp13 = updateIn;
            let tmp17 = updateIn(closure_14, channel, channel, false);
            let tmp18 = store2;
            let tmp19 = closure_15;
            let tmp20 = null;
            if (store2.isForumPostUnread(channel.id)) {
              tmp20 = channel;
            }
            let num2 = 0;
            let tmp21 = tmp19;
            let tmp22 = channel;
            let tmp23 = tmp20;
            let flag2 = false;
            let tmp13Result = tmp13(tmp19, channel, tmp20, false);
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
  const channel = store.getChannel(id);
  if (null != channel) {
    if (channel.isForumLikeChannel()) {
      if (null == dependencyMap6[guild_id]) {
        dependencyMap6[guild_id] = {};
      }
      dependencyMap6[guild_id][id] = 0;
      if (null != dependencyMap3[guild_id]) {
        if (null != dependencyMap3[guild_id][id]) {
          guild = guild.getGuild(guild_id);
          if (null != guild) {
            let trackedAckMessageId = store2.getTrackedAckMessageId(id);
            if (null == trackedAckMessageId) {
              const _Date2 = Date;
              let timestamp = Date.now();
              if (null == guild.joinedAt) {
                trackedAckMessageId = DISCORD_EPOCHDefault.fromTimestamp(timestamp);
                const obj2 = DISCORD_EPOCHDefault;
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
              let tmp30 = key10034;
              let tmp31 = c18;
              if (arg1 === c18) {
                let tmp18 = store2;
                if (!store2.isNewForumThread(key10034, arg1, guild)) {
                  continue;
                } else {
                  let tmp19 = dependencyMap6;
                  let tmp20 = dependencyMap6[arg0];
                  tmp20[arg1] = tmp20[arg1] + 1;
                  continue;
                }
                continue;
              } else {
                let tmp12 = importDefault;
                let tmp13 = dependencyMap;
                let obj3 = DISCORD_EPOCHDefault;
                let tmp14 = obj3.compare(key10034, trackedAckMessageId) > 0;
                if (tmp14) {
                  let tmp15 = store2;
                  tmp14 = !store2.hasOpenedThread(key10034);
                }
                if (!tmp14) {
                  continue;
                } else {
                  let tmp16 = dependencyMap6;
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
    let clearTimeoutResult = guild_id;
    clearTimeoutResult = id;
    clearTimeoutResult = store;
    let _Date = store.getChannel(id);
    clearTimeoutResult = closure_10;
    let joinTimestampResult = closure_10.joinTimestamp(id);
    if (null != _Date) {
      if (closure_9.isActive(guild_id, parent_id, id)) {
        if (null != joinTimestampResult) {
          obj = { channel: null, joinTimestamp: null };
          obj[0] = _Date;
          obj[1] = joinTimestampResult.getTime();
          ({ isUnread, isRelevant, isTimedRelevant } = parseThreadState(_Date));
          updateIn(closure_12, _Date, obj, true);
          let tmp87 = null;
          if (isRelevant) {
            tmp87 = obj;
          }
          updateIn(closure_16, _Date, tmp87, true);
          let tmp93 = null;
          if (isUnread) {
            tmp93 = obj;
          }
          updateIn(closure_13, _Date, tmp93, true);
          clearTimeoutResult = null;
          clearTimeoutResult = tmp81(closure_14, _Date, null, true);
          clearTimeoutResult = closure_15;
          clearTimeoutResult = _Date;
          clearTimeoutResult = tmp81(closure_15, _Date, null, true);
          const id2 = _Date.id;
          joinTimestampResult = dependencyMap7;
          if (id2 in dependencyMap7) {
            clearTimeoutResult = globalThis;
            const _clearTimeout3 = clearTimeout;
            clearTimeoutResult = dependencyMap7;
            clearTimeoutResult = clearTimeout(dependencyMap7[id2]);
            joinTimestampResult = dependencyMap7;
            delete tmp3[tmp4];
          }
          if (isTimedRelevant) {
            clearTimeoutResult = dependencyMap7;
            clearTimeoutResult = globalThis;
            const _setTimeout = setTimeout;
            clearTimeoutResult = importDefault;
            clearTimeoutResult = dependencyMap;
            clearTimeoutResult = getThreadAutoArchiveTimeOnceDefault(_Date);
            _Date = Date;
            dependencyMap7[_Date.id] = setTimeout(() => {
              channel = closure_1_5.getChannel(channel.id);
              if (null != channel) {
                obj = closure_1_1(closure_1_2[11]);
                obj = { type: "THREAD_UPDATE", channel: null };
                obj[1] = channel;
                obj.dispatch(obj);
              }
            }, clearTimeoutResult - Date.now() + 1);
          }
          const tmp80 = parseThreadState(_Date);
        } else {
          clearTimeoutResult = store2;
          clearTimeoutResult = closure_12;
          clearTimeoutResult = _Date;
          clearTimeoutResult = null;
          clearTimeoutResult = store2.isForumPostUnread(_Date.id);
          clearTimeoutResult = updateIn;
          clearTimeoutResult = updateIn(closure_12, _Date, null, true);
          clearTimeoutResult = closure_13;
          clearTimeoutResult = _Date;
          clearTimeoutResult = updateIn(closure_13, _Date, null, true);
          clearTimeoutResult = closure_16;
          clearTimeoutResult = _Date;
          clearTimeoutResult = updateIn(closure_16, _Date, null, true);
          clearTimeoutResult = closure_14;
          clearTimeoutResult = _Date;
          clearTimeoutResult = _Date;
          clearTimeoutResult = updateIn(closure_14, _Date, _Date, true);
          clearTimeoutResult = closure_15;
          let tmp69 = null;
          if (clearTimeoutResult) {
            tmp69 = _Date;
          }
          clearTimeoutResult(clearTimeoutResult, _Date, tmp69, true);
          id = _Date.id;
          if (id in dependencyMap7) {
            const _clearTimeout2 = clearTimeout;
            clearTimeout(dependencyMap7[id]);
            delete tmp2[tmp4];
          }
        }
        clearTimeoutResult = recountParent;
        clearTimeoutResult = recountParent(guild_id, parent_id);
      }
    }
    let tmp8 = null != guild_id && null != parent_id && null != id;
    if (tmp8) {
      tmp8 = guild_id in tmp7 && parent_id in tmp7[guild_id] && id in tmp7[guild_id][parent_id];
      const tmp9 = guild_id in tmp7 && parent_id in tmp7[guild_id] && id in tmp7[guild_id][parent_id];
    }
    if (tmp8) {
      obj = {};
      const merged = Object.assign(tmp7[guild_id]);
      obj = {};
      const merged1 = Object.assign(tmp7[guild_id][parent_id]);
      obj[parent_id] = obj;
      tmp7[guild_id] = obj;
      delete tmp5[tmp4];
      let obj2 = applyDefault;
      if (obj2.isEmpty(tmp7[guild_id][parent_id])) {
        delete tmp2[tmp];
      }
    }
    let tmp19 = null != guild_id && null != parent_id && null != id;
    if (tmp19) {
      tmp19 = guild_id in tmp18 && parent_id in tmp18[guild_id] && id in tmp18[guild_id][parent_id];
      const tmp20 = guild_id in tmp18 && parent_id in tmp18[guild_id] && id in tmp18[guild_id][parent_id];
    }
    if (tmp19) {
      obj1 = {};
      const merged2 = Object.assign(tmp18[guild_id]);
      obj2 = {};
      const merged3 = Object.assign(tmp18[guild_id][parent_id]);
      obj1[parent_id] = obj2;
      tmp18[guild_id] = obj1;
      delete tmp5[tmp4];
      let obj5 = applyDefault;
      if (obj5.isEmpty(tmp18[guild_id][parent_id])) {
        delete tmp2[tmp];
      }
    }
    let tmp30 = null != guild_id && null != parent_id && null != id;
    if (tmp30) {
      tmp30 = guild_id in tmp29 && parent_id in tmp29[guild_id] && id in tmp29[guild_id][parent_id];
      const tmp31 = guild_id in tmp29 && parent_id in tmp29[guild_id] && id in tmp29[guild_id][parent_id];
    }
    if (tmp30) {
      const obj3 = {};
      const merged4 = Object.assign(tmp29[guild_id]);
      const obj4 = {};
      const merged5 = Object.assign(tmp29[guild_id][parent_id]);
      obj3[parent_id] = obj4;
      tmp29[guild_id] = obj3;
      delete tmp5[tmp4];
      let obj8 = applyDefault;
      if (obj8.isEmpty(tmp29[guild_id][parent_id])) {
        delete tmp2[tmp];
      }
    }
    let tmp41 = null != guild_id && null != parent_id && null != id;
    if (tmp41) {
      tmp41 = guild_id in tmp40 && parent_id in tmp40[guild_id] && id in tmp40[guild_id][parent_id];
      const tmp42 = guild_id in tmp40 && parent_id in tmp40[guild_id] && id in tmp40[guild_id][parent_id];
    }
    if (tmp41) {
      obj5 = {};
      const merged6 = Object.assign(tmp40[guild_id]);
      const obj6 = {};
      const merged7 = Object.assign(tmp40[guild_id][parent_id]);
      obj5[parent_id] = obj6;
      tmp40[guild_id] = obj5;
      delete tmp5[tmp4];
      if (obj12.isEmpty(tmp40[guild_id][parent_id])) {
        delete tmp2[tmp];
      }
      obj12 = applyDefault;
    }
    let tmp52 = null != guild_id && null != parent_id && null != id;
    if (tmp52) {
      tmp52 = guild_id in tmp51 && parent_id in tmp51[guild_id] && id in tmp51[guild_id][parent_id];
      const tmp53 = guild_id in tmp51 && parent_id in tmp51[guild_id] && id in tmp51[guild_id][parent_id];
    }
    if (tmp52) {
      const obj7 = {};
      const merged8 = Object.assign(tmp51[guild_id]);
      obj8 = {};
      const merged9 = Object.assign(tmp51[guild_id][parent_id]);
      obj7[parent_id] = obj8;
      tmp51[guild_id] = obj7;
      delete tmp5[tmp4];
      if (obj15.isEmpty(tmp51[guild_id][parent_id])) {
        delete tmp2[tmp];
      }
      obj15 = applyDefault;
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
        let tmp10 = key10006;
        let tmp11 = require;
        let tmp12 = dependencyMap;
        obj = shouldShowAgeGateForVoiceChannel;
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
        let tmp13 = key10015;
        let tmp14 = require;
        let tmp15 = dependencyMap;
        let obj2 = shouldShowAgeGateForVoiceChannel;
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
  const channel = store.getChannel(id.id);
  let tmp2 = null == channel;
  if (!tmp2) {
    tmp2 = !closure_9.isActive(id.guildId, channel.parent_id, id.id);
  }
  let tmp4 = !tmp2;
  if (!tmp2) {
    tmp4 = updateThread(channel.guild_id, channel.parent_id, channel.id);
  }
  return tmp4;
}
function handleReadStateChannelAction(channelId) {
  const channel = store.getChannel(channelId.channelId);
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
          tmp10 = parent_id5 in tmp57[guild_id5];
        }
        if (tmp10) {
          tmp10 = channel.id in tmp57[guild_id5][parent_id5];
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
            dependencyMap7[channel.id] = setTimeout(() => {
              channel = closure_1_5.getChannel(channel.id);
              if (null != channel) {
                obj = closure_1_1(closure_1_2[11]);
                obj = { type: "THREAD_UPDATE", channel: null };
                obj[1] = channel;
                obj.dispatch(obj);
              }
            }, getThreadAutoArchiveTimeOnceDefault(channel) - Date.now() + 1);
            const tmp33 = getThreadAutoArchiveTimeOnceDefault(channel);
          }
          ({ guild_id: guild_id2, parent_id: parent_id2 } = channel);
          let tmp35 = guild_id2 in closure_13;
          if (tmp35) {
            tmp35 = parent_id2 in tmp34[guild_id2];
          }
          if (tmp35) {
            tmp35 = channel.id in tmp34[guild_id2][parent_id2];
          }
          ({ guild_id: guild_id3, parent_id: parent_id3 } = channel);
          let tmp37 = guild_id3 in closure_16;
          if (tmp37) {
            tmp37 = parent_id3 in tmp36[guild_id3];
          }
          if (tmp37) {
            tmp37 = channel.id in tmp36[guild_id3][parent_id3];
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
          updateIn(closure_13, channel, tmp43, true);
          updateIn(closure_16, channel, tmp40, true);
          recountParent(guild_id4, parent_id4);
        } else {
          ({ guild_id, parent_id } = channel);
          let tmp12 = guild_id in closure_15;
          if (tmp12) {
            tmp12 = parent_id in tmp11[guild_id];
          }
          if (tmp12) {
            tmp12 = channel.id in tmp11[guild_id][parent_id];
          }
          const isForumPostUnreadResult = store2.isForumPostUnread(channel.id);
          if (isForumPostUnreadResult === tmp12) {
            return false;
          } else {
            let tmp17 = null;
            if (isForumPostUnreadResult) {
              tmp17 = channel;
            }
            updateIn(closure_15, channel, tmp17, true);
            const tmp15 = updateIn;
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
    let tmp31 = key10008;
    let tmp32 = dependencyMap;
    let keys = Object.keys();
    if (keys === undefined) {
      continue;
    } else {
      let tmp5 = keys[tmp2];
      while (tmp5 !== undefined) {
        let tmp34 = tmp5;
        let tmp35 = dependencyMap;
        let keys1 = Object.keys();
        if (keys1 === undefined) {
          continue;
        } else {
          let tmp6 = keys1[tmp];
          while (tmp6 !== undefined) {
            let tmp37 = tmp6;
            let tmp38 = dependencyMap;
            let tmp39 = dependencyMap[key10008][tmp5][tmp6];
            let tmp40 = parseThreadState;
            let tmp41 = parseThreadState(tmp39.channel);
            ({ isRelevant, isTimedRelevant } = tmp41);
            if (tmp41.isUnread) {
              let tmp7 = updateIn;
              let tmp8 = closure_13;
              let num = 0;
              let tmp9 = tmp39;
              let flag = false;
              let tmp10 = updateIn(closure_13, tmp39.channel, tmp39, false);
            }
            if (isRelevant) {
              let tmp11 = updateIn;
              let tmp12 = closure_16;
              let num2 = 0;
              let tmp13 = tmp39;
              let flag2 = false;
              let tmp14 = updateIn(closure_16, tmp39.channel, tmp39, false);
            }
            let channel = tmp39.channel;
            let id = channel.id;
            let tmp15 = dependencyMap7;
            if (id in dependencyMap7) {
              let _clearTimeout = clearTimeout;
              let tmp16 = dependencyMap7;
              let clearTimeoutResult = clearTimeout(dependencyMap7[id]);
              let tmp18 = dependencyMap7;
              delete tmp3[tmp4];
            }
            if (!isTimedRelevant) {
              continue;
            } else {
              let tmp19 = dependencyMap7;
              let _setTimeout = setTimeout;
              let tmp20 = importDefault;
              let tmp21 = dependencyMap;
              let _Date = Date;
              let tmp22 = getThreadAutoArchiveTimeOnceDefault(channel);
              dependencyMap7[channel.id] = setTimeout(() => {
                channel = closure_1_5.getChannel(channel.id);
                if (null != channel) {
                  obj = closure_1_1(closure_1_2[11]);
                  obj = { type: "THREAD_UPDATE", channel: null };
                  obj[1] = channel;
                  obj.dispatch(obj);
                }
              }, tmp22 - Date.now() + 1);
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
    let tmp42 = key10052;
    let tmp43 = dependencyMap3;
    let keys2 = Object.keys();
    if (keys2 === undefined) {
      continue;
    } else {
      let tmp23 = keys2[tmp2];
      while (tmp23 !== undefined) {
        let tmp45 = tmp23;
        let tmp46 = dependencyMap3;
        let keys3 = Object.keys();
        if (keys3 === undefined) {
          continue;
        } else {
          let tmp24 = keys3[tmp];
          while (tmp24 !== undefined) {
            let tmp48 = tmp24;
            let tmp49 = dependencyMap3;
            let tmp50 = dependencyMap3[key10052][tmp23][tmp24];
            let tmp51 = store2;
            if (!store2.isForumPostUnread(tmp24)) {
              continue;
            } else {
              let tmp25 = updateIn;
              let tmp26 = closure_15;
              let num3 = 0;
              let tmp27 = tmp50;
              let tmp28 = tmp50;
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
    let tmp52 = key10065;
    let tmp53 = dependencyMap3;
    let keys4 = Object.keys();
    if (keys4 === undefined) {
      continue;
    } else {
      let tmp30 = keys4[tmp];
      while (tmp30 !== undefined) {
        let tmp55 = tmp30;
        let tmp56 = recountParent;
        let tmp57 = recountParent(key10065, tmp30);
        continue;
      }
    }
    continue;
  }
}
function updateSelectedChannel() {
  const channelId = store3.getChannelId();
  if (channelId === channelId) {
    return false;
  } else {
    const basicChannel = store.getBasicChannel(tmp);
    let hasItem = null != basicChannel;
    if (hasItem) {
      hasItem = set.has(basicChannel.type);
    }
    if (hasItem) {
      recountParent(basicChannel.guild_id, basicChannel.id);
    }
    const basicChannel1 = store.getBasicChannel(channelId);
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
  const tmp = store2.getMentionCount(channel.id) > 0;
  let hasUnreadResult = store2.hasUnread(channel.id);
  if (hasUnreadResult) {
    hasUnreadResult = !closure_10.isMuted(channel.id);
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
  const voiceChannelId = store3.getVoiceChannelId();
  if (!isActiveThreadResult) {
    tmp12 = hasFlagResult;
  }
  if (tmp12) {
    tmp12 = hasUnreadResult;
  }
  if (!tmp12) {
    tmp12 = tmp;
  }
  obj = { isUnread: tmp12, isRelevant: null, isTimedRelevant: null };
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
  obj[1] = tmp13;
  obj[2] = tmp6;
  return obj;
}
function clearTimer(arg0) {
  if (arg0 in dependencyMap7) {
    const _clearTimeout = clearTimeout;
    clearTimeout(dependencyMap7[arg0]);
    delete tmp[tmp2];
  }
}
function updateIn(closure_12, _Date, _Date2, arg3) {
  ({ guild_id, parent_id, id } = _Date);
  if (tmp5) {
    if (!(guild_id in closure_12)) {
      closure_12[guild_id] = {};
    }
    if (!(parent_id in closure_12[guild_id])) {
      closure_12[guild_id][parent_id] = {};
    }
    if (arg3) {
      obj = {};
      const merged = Object.assign(closure_12[guild_id]);
      obj = {};
      const merged1 = Object.assign(closure_12[guild_id][parent_id]);
      obj[parent_id] = obj;
      closure_12[guild_id] = obj;
    }
    if (null === _Date2) {
      delete tmp3[tmp4];
      if (obj3.isEmpty(closure_12[guild_id][parent_id])) {
        delete tmp[tmp2];
      }
      obj3 = applyDefault;
    } else {
      closure_12[guild_id][parent_id][id] = _Date2;
    }
  }
}
({ THREADED_CHANNEL_TYPES: c3, THREAD_CHANNEL_TYPES: c4 } = createChannelRecord);
const ChannelFlags = set2.ChannelFlags;
let closure_12 = {};
let closure_13 = {};
let closure_14 = {};
let closure_15 = {};
let closure_16 = {};
let closure_17 = {};
let c18 = null;
let closure_19 = {};
let obj = {};
let closure_32 = {};
let closure_33 = {};
let closure_34 = {};
let closure_35 = {};
const Store = initializeDefault.Store;
class ActiveJoinedThreadsStore extends Store {
}
const prototype = ActiveJoinedThreadsStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(closure_9, closure_5, closure_6, closure_10, closure_7, closure_8);
  const items = [closure_8];
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
prototype["getActiveJoinedThreadsForGuild"] = function getActiveJoinedThreadsForGuild(closure_0) {
  let tmp = dependencyMap[closure_0];
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
prototype["getActiveUnjoinedThreadsForGuild"] = function getActiveUnjoinedThreadsForGuild(closure_0) {
  let tmp = dependencyMap3[closure_0];
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
prototype["getActiveUnjoinedUnreadThreadsForParent"] = function getActiveUnjoinedUnreadThreadsForParent(channel, arg1) {
  let tmp = this.getActiveUnjoinedUnreadThreadsForGuild(channel)[arg1];
  if (tmp == null) {
    tmp = closure_33;
  }
  return tmp;
};
prototype["getNewThreadCountsForGuild"] = function getNewThreadCountsForGuild(closure_0) {
  let tmp = dependencyMap6[closure_0];
  if (tmp == null) {
    tmp = closure_35;
  }
  return tmp;
};
prototype["computeAllActiveJoinedThreads"] = function computeAllActiveJoinedThreads(guildId) {
  const items = [];
  for (const key10005 in closure_12) {
    let tmp7 = key10005;
    if (key10005 === arg0) {
      let tmp3 = dependencyMap;
      let keys = Object.keys();
      if (keys === undefined) {
        continue;
      } else {
        let tmp5 = keys[tmp2];
        while (tmp5 !== undefined) {
          let tmp8 = tmp5;
          let tmp9 = dependencyMap;
          let keys1 = Object.keys();
          if (keys1 === undefined) {
            continue;
          } else {
            let tmp6 = keys1[tmp];
            while (tmp6 !== undefined) {
              let tmp11 = tmp6;
              let tmp12 = dependencyMap;
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
  obj = applyDefault;
  obj = undefined;
  if (dependencyMap[arg0] != null) {
    obj = tmp3[arg1];
  }
  if (obj == null) {
    obj = {};
  }
  const sizeResult = obj.size(obj);
  const tmp = importDefault;
  obj = undefined;
  if (dependencyMap3[arg0] != null) {
    obj = tmp5[arg1];
  }
  if (obj == null) {
    obj = {};
  }
  return sizeResult + applyDefault.size(obj);
};
ActiveJoinedThreadsStore.displayName = "ActiveJoinedThreadsStore";
obj = {
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
      let tmp4 = key10013;
      let tmp5 = recountParent;
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
      let tmp4 = key10014;
      let tmp5 = recountParent;
      let tmp6 = recountParent(id, key10014);
      continue;
    }
  },
  GUILD_DELETE: rebuild,
  CURRENT_USER_UPDATE: rebuild,
  VOICE_CHANNEL_SELECT: function handleVoiceChannelSelect(channelId) {
    const channel = store.getChannel(channelId.channelId);
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
      let tmp2 = require;
      let tmp3 = dependencyMap;
      obj = shouldShowAgeGateForVoiceChannel;
      let tmp5 = anyThreadsNSFW;
      let result = obj.isChannelContentGated(nextResult);
      if (result !== anyThreadsNSFW(nextResult.guild_id, nextResult.parent_id)) {
        let tmp6 = rebuild;
        let tmp7 = rebuild();
        let tmp8 = iter;
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
        const keys = DISCORD_EPOCHDefault.keys(dependencyMap5[channel.guild_id][channel.parent_id]);
        const item = keys.forEach(clearTimer);
        const parent_id3 = channel.parent_id;
        delete tmp2[tmp];
        flag2 = true;
        obj = DISCORD_EPOCHDefault;
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
    channelId = store3.getChannelId();
    if (channelId !== channelId) {
      const basicChannel = store.getBasicChannel(channelId);
      let hasItem = null != basicChannel;
      if (hasItem) {
        hasItem = set.has(basicChannel.type);
      }
      if (hasItem) {
        recountParent(basicChannel.guild_id, basicChannel.id);
      }
      const basicChannel1 = store.getBasicChannel(channelId);
      let hasItem1 = null != basicChannel1;
      if (hasItem1) {
        hasItem1 = set.has(basicChannel1.type);
      }
      if (hasItem1) {
        recountParent(basicChannel1.guild_id, basicChannel1.id);
      }
      obj = store;
    }
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
        let tmp11 = key10016;
        let tmp12 = recountParent;
        let tmp13 = recountParent(guildId, key10016);
        continue;
      }
    }
  },
  WINDOW_FOCUS: rebuildReadStates,
  UPDATE_CHANNEL_DIMENSIONS: function handleUpdateChannelDimensions(channelId) {
    const channel = store.getChannel(channelId.channelId);
    const tmp = null == channel || !channel.isThread();
    let tmp2 = !tmp;
    if (!tmp) {
      tmp2 = updateThread(channel.guild_id, channel.parent_id, channel.id);
    }
    return tmp2;
  },
  TRY_ACK: rebuildReadStates,
  BULK_ACK: rebuildReadStates
};
const activeJoinedThreadsStore = new ActiveJoinedThreadsStore(dispatcherDefault, obj);
let result = set.fileFinishedImporting("modules/threads/ActiveJoinedThreadsStore.tsx");

export default activeJoinedThreadsStore;
export const NO_GUILD_JOINED_THREADS = obj;