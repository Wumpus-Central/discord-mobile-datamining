// === Module 5314: getActiveStageChannelIds ===

// Module 5314 (getActiveStageChannelIds)
import applyDefault from "apply" /* 12 */;
import initializeDefault from "initialize" /* 589 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import sortKeyDefault from "sortKey" /* 5320 */;
import closure_3 from "reset" /* 4467 */;
import closure_4 from "fetchFingerprint" /* 1218 */;
import closure_5 from "ensureGuildLoaded" /* 1391 */;
import closure_6 from "createGuildRecordFromRust" /* 1910 */;
import closure_7 from "getUncachedChannelPermissions" /* 4089 */;
import closure_8 from "markAllUserIdListsStale" /* 4098 */;
import closure_9 from "anyoneHasFlagInContext" /* 5315 */;
import closure_10 from "mergeGuildAvatar" /* 1922 */;
import closure_11 from "updateVoiceState" /* 4464 */;
import closure_12 from "getVoiceStatesForGuild" /* 4520 */;
import closure_13 from "buildStageChannelUserRoles" /* 5317 */;
import closure_14 from "handleStageInstanceCreateOrUpdate" /* 1396 */;
import set from "set" /* 2 */;

const require = arg1;
function getActiveStageChannelIds(guildId) {
  const values = secondaryIndexMap.values(guildId, true);
  return values.map((id) => id.id);
}
function maybeGetParticipants(id) {
  if (null != dependencyMap[id]) {
    return tmp;
  } else {
    const channel = store.getChannel(id);
    let tmp2 = null;
    if (null != channel) {
      tmp2 = null;
      if (channel.isGuildStageVoice()) {
        const guild_id = channel.guild_id;
        if (!set.has(guild_id)) {
          obj.add(guild_id);
          const tmp6 = applyDefault;
          const values = applyDefault(store.getMutableGuildChannelsForGuild(guild_id)).values();
          const item = values.forEach((isGuildStageVoice) => {
            let tmp = null != isGuildStageVoice && isGuildStageVoice.isGuildStageVoice();
            if (tmp) {
              tmp = closure_12.countVoiceStatesForChannel(isGuildStageVoice.id) > 0;
            }
            if (tmp) {
              const result = closure_16.set(isGuildStageVoice.id, isGuildStageVoice);
            }
          });
          const tmp6Result = applyDefault(store.getMutableGuildChannelsForGuild(guild_id));
        }
        let tmp8 = null != channel && channel.isGuildStageVoice();
        if (tmp8) {
          tmp8 = closure_12.countVoiceStatesForChannel(channel.id) > 0;
        }
        let tmp10 = null;
        if (tmp8) {
          let tmp12 = dependencyMap[id];
          if (null == tmp12) {
            const obj3 = new sortKeyDefault(id);
            dependencyMap[id] = obj3;
            obj3.rebuild();
            tmp12 = obj3;
          }
          tmp10 = tmp12;
        }
        tmp2 = tmp10;
        obj = set;
      }
    }
    return tmp2;
  }
}
function getOrCreateParticipants(item10010) {
  let tmp = dependencyMap[item10010];
  if (null == tmp) {
    const obj = new sortKeyDefault(item10010);
    dependencyMap[item10010] = obj;
    obj.rebuild();
    tmp = obj;
  }
  return tmp;
}
function updateParticipant(arg0) {
  let f77711 = arg0;
  let mapped;
  {
    let values = secondaryIndexMap.values(undefined, true);
    mapped = values.map((id) => id.id);
  }
  f77711 = (updateParticipant) => updateParticipant.updateParticipant(f77711);
  if (mapped === undefined) {
    values = secondaryIndexMap.values(undefined, true);
    mapped = values.map((id) => id.id);
  }
  return mapped.reduce((arg0, arg1) => {
    let obj = closure_1_18[arg1];
    if (null == obj) {
      const obj2 = new closure_1_1(closure_1_2[14])(arg1);
      closure_1_18[arg1] = obj2;
      obj2.rebuild();
      obj = obj2;
    }
    let flag = arg0;
    if (f77711(obj)) {
      const channel = closure_1_5.getChannel(arg1);
      if (null != channel) {
        if (channel.isGuildStageVoice()) {
          if (0 === obj.size()) {
            const id = channel.id;
            flag = true;
            if (null != id) {
              delete tmp[tmp2];
              closure_1_16.delete(id);
              flag = true;
            }
          } else {
            flag = true;
            if (null == closure_1_16.get(channel.id)) {
              const result = obj4.set(channel.id, channel);
              flag = true;
            }
            obj4 = closure_1_16;
          }
        }
      }
      flag = true;
      if (null != arg1) {
        delete tmp2[tmp3];
        closure_1_16.delete(arg1);
        flag = true;
      }
    }
    return flag;
  }, false);
}
function handleRebuildActiveStageChannels() {
  set.clear();
  secondaryIndexMap.clear();
  closure_18 = {};
}
function handleUserUpdate(user) {
  let f77711 = user.user.id;
  let values = secondaryIndexMap.values(undefined, true);
  const mapped = values.map((id) => id.id);
  f77711 = (updateParticipant) => updateParticipant.updateParticipant(f77711);
  let mapped1 = mapped;
  if (mapped === undefined) {
    values = secondaryIndexMap.values(undefined, true);
    mapped1 = values.map((id) => id.id);
  }
  return mapped1.reduce((arg0, arg1) => {
    let obj = closure_1_18[arg1];
    if (null == obj) {
      const obj2 = new closure_1_1(closure_1_2[14])(arg1);
      closure_1_18[arg1] = obj2;
      obj2.rebuild();
      obj = obj2;
    }
    let flag = arg0;
    if (f77711(obj)) {
      const channel = closure_1_5.getChannel(arg1);
      if (null != channel) {
        if (channel.isGuildStageVoice()) {
          if (0 === obj.size()) {
            const id = channel.id;
            flag = true;
            if (null != id) {
              delete tmp[tmp2];
              closure_1_16.delete(id);
              flag = true;
            }
          } else {
            flag = true;
            if (null == closure_1_16.get(channel.id)) {
              const result = obj4.set(channel.id, channel);
              flag = true;
            }
            obj4 = closure_1_16;
          }
        }
      }
      flag = true;
      if (null != arg1) {
        delete tmp2[tmp3];
        closure_1_16.delete(arg1);
        flag = true;
      }
    }
    return flag;
  }, false);
}
function handleRelationshipUpdate(relationship) {
  let f77711 = relationship.relationship.id;
  let values = secondaryIndexMap.values(undefined, true);
  const mapped = values.map((id) => id.id);
  f77711 = (updateParticipant) => updateParticipant.updateParticipant(f77711);
  let mapped1 = mapped;
  if (mapped === undefined) {
    values = secondaryIndexMap.values(undefined, true);
    mapped1 = values.map((id) => id.id);
  }
  return mapped1.reduce((arg0, arg1) => {
    let obj = closure_1_18[arg1];
    if (null == obj) {
      const obj2 = new closure_1_1(closure_1_2[14])(arg1);
      closure_1_18[arg1] = obj2;
      obj2.rebuild();
      obj = obj2;
    }
    let flag = arg0;
    if (f77711(obj)) {
      const channel = closure_1_5.getChannel(arg1);
      if (null != channel) {
        if (channel.isGuildStageVoice()) {
          if (0 === obj.size()) {
            const id = channel.id;
            flag = true;
            if (null != id) {
              delete tmp[tmp2];
              closure_1_16.delete(id);
              flag = true;
            }
          } else {
            flag = true;
            if (null == closure_1_16.get(channel.id)) {
              const result = obj4.set(channel.id, channel);
              flag = true;
            }
            obj4 = closure_1_16;
          }
        }
      }
      flag = true;
      if (null != arg1) {
        delete tmp2[tmp3];
        closure_1_16.delete(arg1);
        flag = true;
      }
    }
    return flag;
  }, false);
}
function handleGuildCreateOrDelete(guild) {
  (function clearGuild(id) {
    const values = set.values(id);
    for (const item10008 of values) {
      let tmp4 = set;
      let deleteResult = set.delete(item10008.id);
      let tmp6 = closure_18;
      id = item10008.id;
      delete tmp2[tmp];
      continue;
    }
    set2.delete(id);
  })(guild.guild.id);
}
function handleStreamClose(streamKey) {
  const decodeStreamKeyResult = f77711(4511).decodeStreamKey(streamKey.streamKey);
  const guildId = decodeStreamKeyResult.guildId;
  let tmp2 = null == guildId;
  ({ channelId, ownerId } = decodeStreamKeyResult);
  if (!tmp2) {
    tmp2 = !set.has(guildId);
  }
  let reduced = !tmp2;
  if (!tmp2) {
    const items = [channelId];
    f77711 = ownerId;
    f77711 = (updateParticipant) => updateParticipant.updateParticipant(f77711);
    reduced = items.reduce((arg0, arg1) => {
      let obj = closure_1_18[arg1];
      if (null == obj) {
        const obj2 = new closure_1_1(closure_1_2[14])(arg1);
        closure_1_18[arg1] = obj2;
        obj2.rebuild();
        obj = obj2;
      }
      let flag = arg0;
      if (f77711(obj)) {
        const channel = closure_1_5.getChannel(arg1);
        if (null != channel) {
          if (channel.isGuildStageVoice()) {
            if (0 === obj.size()) {
              const id = channel.id;
              flag = true;
              if (null != id) {
                delete tmp[tmp2];
                closure_1_16.delete(id);
                flag = true;
              }
            } else {
              flag = true;
              if (null == closure_1_16.get(channel.id)) {
                const result = obj4.set(channel.id, channel);
                flag = true;
              }
              obj4 = closure_1_16;
            }
          }
        }
        flag = true;
        if (null != arg1) {
          delete tmp2[tmp3];
          closure_1_16.delete(arg1);
          flag = true;
        }
      }
      return flag;
    }, false);
  }
  return reduced;
}
const NO_GUILD = "NO_GUILD";
const secondaryIndexMap = new require("version").SecondaryIndexMap((getGuildId) => {
  let guildId = getGuildId.getGuildId();
  if (guildId == null) {
    guildId = NO_GUILD;
  }
  const items = [guildId];
  return items;
}, (id) => id.id);
let set = new Set();
let closure_18 = {};
let closure_23 = [];
const Store = initializeDefault.Store;
class StageChannelParticipantStore extends Store {
}
const prototype = StageChannelParticipantStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(closure_4, closure_10, closure_5, closure_9, closure_11, closure_7, closure_12, closure_6, closure_13, closure_8, closure_14, closure_3);
};
prototype["getParticipantsVersion"] = function getParticipantsVersion(id) {
  let num = -1;
  if (null != id) {
    const tmp2 = maybeGetParticipants(id);
    let num3;
    if (tmp2 != null) {
      num3 = tmp2.version;
    }
    if (num3 == null) {
      num3 = -1;
    }
    num = num3;
  }
  return num;
};
prototype["getMutableParticipants"] = function getMutableParticipants(closure_0, SPEAKER) {
  if (null == closure_0) {
    let toArrayResult = closure_23;
  } else {
    const obj = maybeGetParticipants(closure_0);
    toArrayResult = undefined;
    if (obj != null) {
      toArrayResult = obj.toArray(SPEAKER);
    }
    if (toArrayResult == null) {
      toArrayResult = closure_23;
    }
  }
  return toArrayResult;
};
prototype["getMutableRequestToSpeakParticipants"] = function getMutableRequestToSpeakParticipants(closure_0) {
  const obj = maybeGetParticipants(closure_0);
  let requestToSpeakParticipants;
  if (obj != null) {
    requestToSpeakParticipants = obj.getRequestToSpeakParticipants();
  }
  if (requestToSpeakParticipants == null) {
    requestToSpeakParticipants = closure_23;
  }
  return requestToSpeakParticipants;
};
prototype["getRequestToSpeakParticipantsVersion"] = function getRequestToSpeakParticipantsVersion(closure_0) {
  const tmp = maybeGetParticipants(closure_0);
  let num;
  if (tmp != null) {
    num = tmp.requestToSpeakVersion;
  }
  if (num == null) {
    num = -1;
  }
  return num;
};
prototype["getParticipantCount"] = function getParticipantCount(id, AUDIENCE) {
  const obj = maybeGetParticipants(id);
  let num;
  if (obj != null) {
    num = obj.size(AUDIENCE);
  }
  if (num == null) {
    num = 0;
  }
  return num;
};
prototype["getChannels"] = function getChannels(id) {
  let tmp = id;
  let tmp2 = id;
  if (id == null) {
    tmp2 = NO_GUILD;
  }
  if (!set.has(tmp2)) {
    set.add(tmp2);
    const tmp6 = applyDefault;
    const values = applyDefault(store.getMutableGuildChannelsForGuild(tmp2)).values();
    const item = values.forEach((isGuildStageVoice) => {
      let tmp = null != isGuildStageVoice && isGuildStageVoice.isGuildStageVoice();
      if (tmp) {
        tmp = closure_12.countVoiceStatesForChannel(isGuildStageVoice.id) > 0;
      }
      if (tmp) {
        const result = closure_16.set(isGuildStageVoice.id, isGuildStageVoice);
      }
    });
    const tmp6Result = applyDefault(store.getMutableGuildChannelsForGuild(tmp2));
  }
  if (tmp == null) {
    tmp = NO_GUILD;
  }
  return secondaryIndexMap.values(tmp);
};
prototype["getChannelsVersion"] = function getChannelsVersion() {
  return secondaryIndexMap.version;
};
prototype["getParticipant"] = function getParticipant(id) {
  const obj = maybeGetParticipants(id);
  let participant;
  if (obj != null) {
    participant = obj.getParticipant(arg1);
  }
  if (participant == null) {
    participant = null;
  }
  return participant;
};
StageChannelParticipantStore.displayName = "StageChannelParticipantStore";
const stageChannelParticipantStore = new StageChannelParticipantStore(dispatcherDefault, {
  CONNECTION_OPEN: handleRebuildActiveStageChannels,
  OVERLAY_INITIALIZE: handleRebuildActiveStageChannels,
  VOICE_CHANNEL_SELECT: function handleVoiceChannelSelect(currentVoiceChannelId) {
    currentVoiceChannelId = currentVoiceChannelId.currentVoiceChannelId;
    if (null == currentVoiceChannelId) {
      return false;
    } else {
      const channel = store.getChannel(currentVoiceChannelId);
      let isGuildStageVoiceResult;
      if (channel != null) {
        isGuildStageVoiceResult = channel.isGuildStageVoice();
      }
      if (isGuildStageVoiceResult) {
        if (set.has(channel.guild_id)) {
          id = id.getId();
          let reduced = null != id;
          if (reduced) {
            const items = [currentVoiceChannelId];
            let f77711 = id;
            f77711 = (updateParticipant) => updateParticipant.updateParticipant(f77711);
            reduced = items.reduce((arg0, arg1) => {
              let obj = closure_1_18[arg1];
              if (null == obj) {
                const obj2 = new closure_1_1(closure_1_2[14])(arg1);
                closure_1_18[arg1] = obj2;
                obj2.rebuild();
                obj = obj2;
              }
              let flag = arg0;
              if (f77711(obj)) {
                const channel = closure_1_5.getChannel(arg1);
                if (null != channel) {
                  if (channel.isGuildStageVoice()) {
                    if (0 === obj.size()) {
                      const id = channel.id;
                      flag = true;
                      if (null != id) {
                        delete tmp[tmp2];
                        closure_1_16.delete(id);
                        flag = true;
                      }
                    } else {
                      flag = true;
                      if (null == closure_1_16.get(channel.id)) {
                        const result = obj4.set(channel.id, channel);
                        flag = true;
                      }
                      obj4 = closure_1_16;
                    }
                  }
                }
                flag = true;
                if (null != arg1) {
                  delete tmp2[tmp3];
                  closure_1_16.delete(arg1);
                  flag = true;
                }
              }
              return flag;
            }, false);
          }
          return reduced;
        }
      }
      return false;
    }
  },
  VOICE_STATE_UPDATES: function handleVoiceStateUpdates(voiceStates) {
    voiceStates = voiceStates.voiceStates;
    set = undefined;
    set = new Set();
    return voiceStates.reduce((arg0, guildId) => {
      if (null != guildId.guildId) {
        if (closure_1_17.has(guildId.guildId)) {
          const _Set = Set;
          set = new Set();
          const oldChannelId = guildId.oldChannelId;
          if (null != oldChannelId) {
            if (!obj2.has(oldChannelId)) {
              let channel = closure_1_5.getChannel(oldChannelId);
              let isGuildStageVoiceResult;
              if (channel != null) {
                isGuildStageVoiceResult = channel.isGuildStageVoice();
              }
              if (isGuildStageVoiceResult) {
                set.add(oldChannelId);
                if (null == closure_1_18[oldChannelId]) {
                  obj2.add(oldChannelId);
                }
              }
            }
          }
          const channelId = guildId.channelId;
          if (null != channelId) {
            if (!obj2.has(channelId)) {
              const channel1 = closure_1_5.getChannel(channelId);
              let isGuildStageVoiceResult1;
              if (channel1 != null) {
                isGuildStageVoiceResult1 = channel1.isGuildStageVoice();
              }
              if (isGuildStageVoiceResult1) {
                set.add(channelId);
                if (null == closure_1_18[channelId]) {
                  obj2.add(channelId);
                }
              }
            }
          }
          let tmp15 = arg0;
          if (0 !== set.size) {
            const _Array = Array;
            const arr = Array.from(set);
            let f77711 = guildId.userId;
            let mapped = arr;
            if (arr === undefined) {
              let values = closure_1_16.values(undefined, true);
              mapped = values.map((id) => id.id);
            }
            f77711 = (updateParticipant) => updateParticipant.updateParticipant(f77711);
            if (mapped === undefined) {
              values = closure_1_16.values(undefined, true);
              mapped = values.map((id) => id.id);
            }
            tmp15 = mapped.reduce((arg0, arg1) => {
              let obj = closure_1_18[arg1];
              if (null == obj) {
                const obj2 = new closure_1_1(closure_1_2[14])(arg1);
                closure_1_18[arg1] = obj2;
                obj2.rebuild();
                obj = obj2;
              }
              let flag = arg0;
              if (f77711(obj)) {
                const channel = closure_1_5.getChannel(arg1);
                if (null != channel) {
                  if (channel.isGuildStageVoice()) {
                    if (0 === obj.size()) {
                      const id = channel.id;
                      flag = true;
                      if (null != id) {
                        delete tmp[tmp2];
                        closure_1_16.delete(id);
                        flag = true;
                      }
                    } else {
                      flag = true;
                      if (null == closure_1_16.get(channel.id)) {
                        const result = obj4.set(channel.id, channel);
                        flag = true;
                      }
                      obj4 = closure_1_16;
                    }
                  }
                }
                flag = true;
                if (null != arg1) {
                  delete tmp2[tmp3];
                  closure_1_16.delete(arg1);
                  flag = true;
                }
              }
              return flag;
            }, false) || arg0;
            const tmp18 = mapped.reduce((arg0, arg1) => {
              let obj = closure_1_18[arg1];
              if (null == obj) {
                const obj2 = new closure_1_1(closure_1_2[14])(arg1);
                closure_1_18[arg1] = obj2;
                obj2.rebuild();
                obj = obj2;
              }
              let flag = arg0;
              if (f77711(obj)) {
                const channel = closure_1_5.getChannel(arg1);
                if (null != channel) {
                  if (channel.isGuildStageVoice()) {
                    if (0 === obj.size()) {
                      const id = channel.id;
                      flag = true;
                      if (null != id) {
                        delete tmp[tmp2];
                        closure_1_16.delete(id);
                        flag = true;
                      }
                    } else {
                      flag = true;
                      if (null == closure_1_16.get(channel.id)) {
                        const result = obj4.set(channel.id, channel);
                        flag = true;
                      }
                      obj4 = closure_1_16;
                    }
                  }
                }
                flag = true;
                if (null != arg1) {
                  delete tmp2[tmp3];
                  closure_1_16.delete(arg1);
                  flag = true;
                }
              }
              return flag;
            }, false) || arg0;
          }
          return tmp15;
        }
      }
      return arg0;
    }, false);
  },
  CHANNEL_DELETE: function handleChannelDelete(channel) {
    const id = channel.channel.id;
    let flag = null != id;
    if (flag) {
      delete tmp[tmp2];
      secondaryIndexMap.delete(id);
      flag = true;
    }
    return flag;
  },
  GUILD_MEMBERS_CHUNK_BATCH: function handleGuildMembersChunkBatch(arg0) {
    let flag = false;
    const iter = arg0.chunks[Symbol.iterator]();
    while (iter !== undefined) {
      let members = iter.next().members;
      let tmp = members;
      let tmp2 = members;
      for (const item10014 of members) {
        let tmp3 = updateParticipant;
        let tmp4 = updateParticipant(item10014.user.id);
        if (!tmp4) {
          tmp4 = flag;
        }
        flag = tmp4;
        continue;
      }
      continue;
    }
    return flag;
  },
  USER_UPDATE: handleUserUpdate,
  GUILD_MEMBER_REMOVE: handleUserUpdate,
  GUILD_MEMBER_UPDATE: handleUserUpdate,
  CHANNEL_UPDATES: function handleChannelUpdate(channels) {
    channels = channels.channels;
    const reduced = channels.reduce((arr, isGuildStageVoice) => {
      if (isGuildStageVoice.isGuildStageVoice()) {
        if (set.has(isGuildStageVoice.guild_id)) {
          const value = closure_16.get(isGuildStageVoice.id);
          let tmp4 = null == value;
          if (!tmp4) {
            tmp4 = callback(table[16])(isGuildStageVoice.permissionOverwrites, value.permissionOverwrites);
          }
          if (!tmp4) {
            arr.push(isGuildStageVoice.id);
            const result = closure_16.set(isGuildStageVoice.id, isGuildStageVoice);
          }
          return arr;
        }
      }
      return arr;
    }, []);
    const f77715 = (rebuild) => rebuild.rebuild();
    let mapped = reduced;
    if (reduced === undefined) {
      const values = secondaryIndexMap.values(undefined, true);
      mapped = values.map((id) => id.id);
    }
    const reduced1 = mapped.reduce((arg0, arg1) => {
      let obj = closure_1_18[arg1];
      if (null == obj) {
        const obj2 = new closure_1_1(closure_1_2[14])(arg1);
        closure_1_18[arg1] = obj2;
        obj2.rebuild();
        obj = obj2;
      }
      let flag = arg0;
      if (f77711(obj)) {
        const channel = closure_1_5.getChannel(arg1);
        if (null != channel) {
          if (channel.isGuildStageVoice()) {
            if (0 === obj.size()) {
              const id = channel.id;
              flag = true;
              if (null != id) {
                delete tmp[tmp2];
                closure_1_16.delete(id);
                flag = true;
              }
            } else {
              flag = true;
              if (null == closure_1_16.get(channel.id)) {
                const result = obj4.set(channel.id, channel);
                flag = true;
              }
              obj4 = closure_1_16;
            }
          }
        }
        flag = true;
        if (null != arg1) {
          delete tmp2[tmp3];
          closure_1_16.delete(arg1);
          flag = true;
        }
      }
      return flag;
    }, false);
    return reduced.length > 0;
  },
  GUILD_ROLE_UPDATE: function handleGuildRoleUpdate(guildId) {
    guildId = guildId.guildId;
    if (set.has(guildId)) {
      const fn = (rebuild) => rebuild.rebuild();
      let values = secondaryIndexMap.values(guildId, true);
      const mapped = values.map((id) => id.id);
      let mapped1 = mapped;
      if (mapped === undefined) {
        values = secondaryIndexMap.values(undefined, true);
        mapped1 = values.map((id) => id.id);
      }
      return mapped1.reduce((arg0, arg1) => {
        let obj = closure_1_18[arg1];
        if (null == obj) {
          const obj2 = new closure_1_1(closure_1_2[14])(arg1);
          closure_1_18[arg1] = obj2;
          obj2.rebuild();
          obj = obj2;
        }
        let flag = arg0;
        if (f77711(obj)) {
          const channel = closure_1_5.getChannel(arg1);
          if (null != channel) {
            if (channel.isGuildStageVoice()) {
              if (0 === obj.size()) {
                const id = channel.id;
                flag = true;
                if (null != id) {
                  delete tmp[tmp2];
                  closure_1_16.delete(id);
                  flag = true;
                }
              } else {
                flag = true;
                if (null == closure_1_16.get(channel.id)) {
                  const result = obj4.set(channel.id, channel);
                  flag = true;
                }
                obj4 = closure_1_16;
              }
            }
          }
          flag = true;
          if (null != arg1) {
            delete tmp2[tmp3];
            closure_1_16.delete(arg1);
            flag = true;
          }
        }
        return flag;
      }, false);
    }
  },
  RTC_CONNECTION_VIDEO: function handleRTCConnectionVideo(guildId) {
    guildId = guildId.guildId;
    let tmp = null == guildId;
    ({ channelId, userId } = guildId);
    if (!tmp) {
      tmp = !set.has(guildId);
    }
    let reduced = !tmp;
    if (!tmp) {
      const items = [channelId];
      let f77711 = userId;
      f77711 = (updateParticipant) => updateParticipant.updateParticipant(f77711);
      reduced = items.reduce((arg0, arg1) => {
        let obj = closure_1_18[arg1];
        if (null == obj) {
          const obj2 = new closure_1_1(closure_1_2[14])(arg1);
          closure_1_18[arg1] = obj2;
          obj2.rebuild();
          obj = obj2;
        }
        let flag = arg0;
        if (f77711(obj)) {
          const channel = closure_1_5.getChannel(arg1);
          if (null != channel) {
            if (channel.isGuildStageVoice()) {
              if (0 === obj.size()) {
                const id = channel.id;
                flag = true;
                if (null != id) {
                  delete tmp[tmp2];
                  closure_1_16.delete(id);
                  flag = true;
                }
              } else {
                flag = true;
                if (null == closure_1_16.get(channel.id)) {
                  const result = obj4.set(channel.id, channel);
                  flag = true;
                }
                obj4 = closure_1_16;
              }
            }
          }
          flag = true;
          if (null != arg1) {
            delete tmp2[tmp3];
            closure_1_16.delete(arg1);
            flag = true;
          }
        }
        return flag;
      }, false);
    }
    return reduced;
  },
  STREAM_CLOSE: handleStreamClose,
  STREAM_DELETE: handleStreamClose,
  RELATIONSHIP_ADD: handleRelationshipUpdate,
  RELATIONSHIP_REMOVE: handleRelationshipUpdate,
  RELATIONSHIP_UPDATE: handleRelationshipUpdate,
  GUILD_CREATE: handleGuildCreateOrDelete,
  GUILD_DELETE: handleGuildCreateOrDelete,
  PASSIVE_UPDATE_V2: function handlePassiveUpdateV2(guildId) {
    let flag = false;
    for (const item10010 of tmp) {
      let tmp2 = getOrCreateParticipants;
      let obj = getOrCreateParticipants(item10010);
      let rebuildResult = obj.rebuild();
      if (!rebuildResult) {
        rebuildResult = flag;
      }
      flag = rebuildResult;
      continue;
    }
    return flag;
  }
});
let result = set.fileFinishedImporting("modules/stage_channels/StageChannelParticipantStore.tsx");

export default stageChannelParticipantStore;