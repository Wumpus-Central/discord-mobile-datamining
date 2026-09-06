// === Module 5418: StageChannelParticipantStore ===

// Module 5418 (StageChannelParticipantStore)
import _modDef12 from "module_12" /* 12 */;
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import _modDef1332 from "module_1332" /* 1332 */;
import StageChannelParticipantsDefault from "StageChannelParticipants" /* 5425 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 4582 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import GuildStore from "GuildStore" /* 1979 */;
import PermissionStore from "PermissionStore" /* 4199 */;
import RelationshipStore from "RelationshipStore" /* 4209 */;
import SpeakingStore from "SpeakingStore" /* 5419 */;
import UserStore from "UserStore" /* 1371 */;
import VoiceStateStore from "VoiceStateStore" /* 4579 */;
import SortedVoiceStateStore from "SortedVoiceStateStore" /* 4584 */;
import StageChannelRoleStore from "StageChannelRoleStore" /* 5421 */;
import StageInstanceStore from "StageInstanceStore" /* 1962 */;

const require = fn;
function getActiveStageChannelIds(guildId) {
  const values = secondaryIndexMap.values(guildId, true);
  return values.map((id) => id.id);
}
function maybeGetParticipants(id) {
  if (null != dependencyMap[id]) {
    return tmp;
  } else {
    const channel = ChannelStore.getChannel(id);
    let tmp2 = null;
    if (null != channel) {
      tmp2 = null;
      if (channel.isGuildStageVoice()) {
        const guild_id = channel.guild_id;
        if (!set.has(guild_id)) {
          set.add(guild_id);
          const values = _modDef12(ChannelStore.getMutableGuildChannelsForGuild(guild_id)).values();
          const item = values.forEach((isGuildStageVoice) => {
            let tmp = null != isGuildStageVoice && isGuildStageVoice.isGuildStageVoice();
            if (tmp) {
              tmp = SortedVoiceStateStore.countVoiceStatesForChannel(isGuildStageVoice.id) > 0;
            }
            if (tmp) {
              const result = secondaryIndexMap.set(isGuildStageVoice.id, isGuildStageVoice);
            }
          });
          const tmp6Result = _modDef12(ChannelStore.getMutableGuildChannelsForGuild(guild_id));
        }
        let tmp8 = null != channel && channel.isGuildStageVoice();
        if (tmp8) {
          tmp8 = SortedVoiceStateStore.countVoiceStatesForChannel(channel.id) > 0;
        }
        let tmp10 = null;
        if (tmp8) {
          let tmp12 = dependencyMap[id];
          if (null == tmp12) {
            const obj3 = new StageChannelParticipantsDefault(id);
            dependencyMap[id] = obj3;
            obj3.rebuild();
            tmp12 = obj3;
          }
          tmp10 = tmp12;
        }
        tmp2 = tmp10;
      }
    }
    return tmp2;
  }
}
function getOrCreateParticipants(item10010) {
  let tmp = dependencyMap[item10010];
  if (null == tmp) {
    const obj = new StageChannelParticipantsDefault(item10010);
    dependencyMap[item10010] = obj;
    obj.rebuild();
    tmp = obj;
  }
  return tmp;
}
function updateParticipant(arg0) {
  let f79532 = arg0;
  let mapped;
  {
    let values = secondaryIndexMap.values(undefined, true);
    mapped = values.map((id) => id.id);
  }
  f79532 = (dependencyMap) => dependencyMap.updateParticipant(f79532);
  if (mapped === undefined) {
    values = secondaryIndexMap.values(undefined, true);
    mapped = values.map((id) => id.id);
  }
  return mapped.reduce((acc, item) => {
    let obj = dependencyMap[item];
    if (null == obj) {
      const obj2 = new require("StageChannelParticipants")(item);
      dependencyMap[item] = obj2;
      obj2.rebuild();
      obj = obj2;
    }
    let flag = acc;
    if (f79532(obj)) {
      channel = channel.getChannel(item);
      if (null != channel) {
        if (channel.isGuildStageVoice()) {
          if (0 === obj.size()) {
            const id = channel.id;
            flag = true;
            if (null != id) {
              delete tmp[tmp2];
              map.delete(id);
              flag = true;
            }
          } else {
            flag = true;
            if (null == map.get(channel.id)) {
              const result = map.set(channel.id, channel);
              flag = true;
            }
          }
        }
      }
      flag = true;
      if (null != item) {
        delete tmp2[tmp3];
        map.delete(item);
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
  let values = secondaryIndexMap.values(undefined, true);
  const mapped = values.map((id) => id.id);
  const f79532 = (dependencyMap) => dependencyMap.updateParticipant(f79532);
  let mapped1 = mapped;
  if (mapped === undefined) {
    values = secondaryIndexMap.values(undefined, true);
    mapped1 = values.map((id) => id.id);
  }
  return mapped1.reduce((acc, item) => {
    let obj = dependencyMap[item];
    if (null == obj) {
      const obj2 = new require("StageChannelParticipants")(item);
      dependencyMap[item] = obj2;
      obj2.rebuild();
      obj = obj2;
    }
    let flag = acc;
    if (f79532(obj)) {
      channel = channel.getChannel(item);
      if (null != channel) {
        if (channel.isGuildStageVoice()) {
          if (0 === obj.size()) {
            const id = channel.id;
            flag = true;
            if (null != id) {
              delete tmp[tmp2];
              map.delete(id);
              flag = true;
            }
          } else {
            flag = true;
            if (null == map.get(channel.id)) {
              const result = map.set(channel.id, channel);
              flag = true;
            }
          }
        }
      }
      flag = true;
      if (null != item) {
        delete tmp2[tmp3];
        map.delete(item);
        flag = true;
      }
    }
    return flag;
  }, false);
}
function handleRelationshipUpdate(relationship) {
  let values = secondaryIndexMap.values(undefined, true);
  const mapped = values.map((id) => id.id);
  const f79532 = (dependencyMap) => dependencyMap.updateParticipant(f79532);
  let mapped1 = mapped;
  if (mapped === undefined) {
    values = secondaryIndexMap.values(undefined, true);
    mapped1 = values.map((id) => id.id);
  }
  return mapped1.reduce((acc, item) => {
    let obj = dependencyMap[item];
    if (null == obj) {
      const obj2 = new require("StageChannelParticipants")(item);
      dependencyMap[item] = obj2;
      obj2.rebuild();
      obj = obj2;
    }
    let flag = acc;
    if (f79532(obj)) {
      channel = channel.getChannel(item);
      if (null != channel) {
        if (channel.isGuildStageVoice()) {
          if (0 === obj.size()) {
            const id = channel.id;
            flag = true;
            if (null != id) {
              delete tmp[tmp2];
              map.delete(id);
              flag = true;
            }
          } else {
            flag = true;
            if (null == map.get(channel.id)) {
              const result = map.set(channel.id, channel);
              flag = true;
            }
          }
        }
      }
      flag = true;
      if (null != item) {
        delete tmp2[tmp3];
        map.delete(item);
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
      let deleteResult = set.delete(item10008.id);
      id = item10008.id;
      delete tmp2[tmp];
      continue;
    }
    set2.delete(id);
  })(guild.guild.id);
}
function handleStreamClose(streamKey) {
  const decodeStreamKeyResult = f79532(4612).decodeStreamKey(streamKey.streamKey);
  const guildId = decodeStreamKeyResult.guildId;
  let tmp2 = null == guildId;
  ({ channelId, ownerId } = decodeStreamKeyResult);
  if (!tmp2) {
    tmp2 = !set.has(guildId);
  }
  let reduced = !tmp2;
  if (!tmp2) {
    const items = [channelId];
    f79532 = (dependencyMap) => dependencyMap.updateParticipant(f79532);
    reduced = items.reduce((acc, item) => {
      let obj = dependencyMap[item];
      if (null == obj) {
        const obj2 = new require("StageChannelParticipants")(item);
        dependencyMap[item] = obj2;
        obj2.rebuild();
        obj = obj2;
      }
      let flag = acc;
      if (f79532(obj)) {
        channel = channel.getChannel(item);
        if (null != channel) {
          if (channel.isGuildStageVoice()) {
            if (0 === obj.size()) {
              const id = channel.id;
              flag = true;
              if (null != id) {
                delete tmp[tmp2];
                map.delete(id);
                flag = true;
              }
            } else {
              flag = true;
              if (null == map.get(channel.id)) {
                const result = map.set(channel.id, channel);
                flag = true;
              }
            }
          }
        }
        flag = true;
        if (null != item) {
          delete tmp2[tmp3];
          map.delete(item);
          flag = true;
        }
      }
      return flag;
    }, false);
  }
  return reduced;
}
const NO_GUILD = "NO_GUILD";
const secondaryIndexMap = new fn(4195).SecondaryIndexMap((getGuildId) => {
  let guildId = getGuildId.getGuildId();
  if (guildId == null) {
    guildId = NO_GUILD;
  }
  const items = [guildId];
  return items;
}, (id) => id.id);
let set = new Set();
const dependencyMap = {};
let closure_23 = [];
const Store = initializeDefault.Store;
class StageChannelParticipantStore extends Store {
}
const prototype = StageChannelParticipantStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(AuthenticationStore, UserStore, ChannelStore, SpeakingStore, VoiceStateStore, PermissionStore, SortedVoiceStateStore, GuildStore, StageChannelRoleStore, RelationshipStore, StageInstanceStore, ApplicationStreamingStore);
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
prototype["getMutableParticipants"] = function getMutableParticipants(id, SPEAKER) {
  if (null == id) {
    let toArrayResult = closure_23;
  } else {
    const obj = maybeGetParticipants(id);
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
prototype["getMutableRequestToSpeakParticipants"] = function getMutableRequestToSpeakParticipants(id) {
  const obj = maybeGetParticipants(id);
  let requestToSpeakParticipants;
  if (obj != null) {
    requestToSpeakParticipants = obj.getRequestToSpeakParticipants();
  }
  if (requestToSpeakParticipants == null) {
    requestToSpeakParticipants = closure_23;
  }
  return requestToSpeakParticipants;
};
prototype["getRequestToSpeakParticipantsVersion"] = function getRequestToSpeakParticipantsVersion(id) {
  const tmp = maybeGetParticipants(id);
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
    const values = _modDef12(ChannelStore.getMutableGuildChannelsForGuild(tmp2)).values();
    const item = values.forEach((isGuildStageVoice) => {
      let tmp = null != isGuildStageVoice && isGuildStageVoice.isGuildStageVoice();
      if (tmp) {
        tmp = SortedVoiceStateStore.countVoiceStatesForChannel(isGuildStageVoice.id) > 0;
      }
      if (tmp) {
        const result = secondaryIndexMap.set(isGuildStageVoice.id, isGuildStageVoice);
      }
    });
    const tmp6Result = _modDef12(ChannelStore.getMutableGuildChannelsForGuild(tmp2));
  }
  if (tmp == null) {
    tmp = NO_GUILD;
  }
  return secondaryIndexMap.values(tmp);
};
prototype["getChannelsVersion"] = function getChannelsVersion() {
  return secondaryIndexMap.version;
};
prototype["getParticipant"] = function getParticipant(id, arg1) {
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
const stageChannelParticipantStore = new StageChannelParticipantStore(DispatcherDefault, {
  CONNECTION_OPEN: handleRebuildActiveStageChannels,
  OVERLAY_INITIALIZE: handleRebuildActiveStageChannels,
  VOICE_CHANNEL_SELECT: function handleVoiceChannelSelect(currentVoiceChannelId) {
    currentVoiceChannelId = currentVoiceChannelId.currentVoiceChannelId;
    if (null == currentVoiceChannelId) {
      return false;
    } else {
      const channel = ChannelStore.getChannel(currentVoiceChannelId);
      let isGuildStageVoiceResult;
      if (channel != null) {
        isGuildStageVoiceResult = channel.isGuildStageVoice();
      }
      if (isGuildStageVoiceResult) {
        if (set.has(channel.guild_id)) {
          const id = AuthenticationStore.getId();
          let reduced = null != id;
          if (reduced) {
            const items = [currentVoiceChannelId];
            const f79532 = (dependencyMap) => dependencyMap.updateParticipant(f79532);
            reduced = items.reduce((acc, item) => {
              let obj = dependencyMap[item];
              if (null == obj) {
                const obj2 = new require("StageChannelParticipants")(item);
                dependencyMap[item] = obj2;
                obj2.rebuild();
                obj = obj2;
              }
              let flag = acc;
              if (f79532(obj)) {
                channel = channel.getChannel(item);
                if (null != channel) {
                  if (channel.isGuildStageVoice()) {
                    if (0 === obj.size()) {
                      const id = channel.id;
                      flag = true;
                      if (null != id) {
                        delete tmp[tmp2];
                        map.delete(id);
                        flag = true;
                      }
                    } else {
                      flag = true;
                      if (null == map.get(channel.id)) {
                        const result = map.set(channel.id, channel);
                        flag = true;
                      }
                    }
                  }
                }
                flag = true;
                if (null != item) {
                  delete tmp2[tmp3];
                  map.delete(item);
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
    set = new Set();
    return voiceStates.reduce((acc, guildId) => {
      if (null != guildId.guildId) {
        if (set.has(guildId.guildId)) {
          const _Set = Set;
          set = new Set();
          const oldChannelId = guildId.oldChannelId;
          if (null != oldChannelId) {
            if (!obj2.has(oldChannelId)) {
              channel = ChannelStore.getChannel(oldChannelId);
              let isGuildStageVoiceResult;
              if (channel != null) {
                isGuildStageVoiceResult = channel.isGuildStageVoice();
              }
              if (isGuildStageVoiceResult) {
                set.add(oldChannelId);
                if (null == dependencyMap[oldChannelId]) {
                  obj2.add(oldChannelId);
                }
              }
            }
          }
          const channelId = guildId.channelId;
          if (null != channelId) {
            if (!obj2.has(channelId)) {
              const channel1 = ChannelStore.getChannel(channelId);
              let isGuildStageVoiceResult1;
              if (channel1 != null) {
                isGuildStageVoiceResult1 = channel1.isGuildStageVoice();
              }
              if (isGuildStageVoiceResult1) {
                set.add(channelId);
                if (null == dependencyMap[channelId]) {
                  obj2.add(channelId);
                }
              }
            }
          }
          let tmp15 = acc;
          if (0 !== set.size) {
            const _Array = Array;
            const arr = Array.from(set);
            let f79532 = guildId.userId;
            let mapped = arr;
            if (arr === undefined) {
              let values = secondaryIndexMap.values(undefined, true);
              mapped = values.map((id) => id.id);
            }
            f79532 = (dependencyMap) => dependencyMap.updateParticipant(f79532);
            if (mapped === undefined) {
              values = secondaryIndexMap.values(undefined, true);
              mapped = values.map((id) => id.id);
            }
            tmp15 = mapped.reduce((acc, item) => {
              let obj = dependencyMap[item];
              if (null == obj) {
                const obj2 = new require("StageChannelParticipants")(item);
                dependencyMap[item] = obj2;
                obj2.rebuild();
                obj = obj2;
              }
              let flag = acc;
              if (f79532(obj)) {
                channel = channel.getChannel(item);
                if (null != channel) {
                  if (channel.isGuildStageVoice()) {
                    if (0 === obj.size()) {
                      const id = channel.id;
                      flag = true;
                      if (null != id) {
                        delete tmp[tmp2];
                        map.delete(id);
                        flag = true;
                      }
                    } else {
                      flag = true;
                      if (null == map.get(channel.id)) {
                        const result = map.set(channel.id, channel);
                        flag = true;
                      }
                    }
                  }
                }
                flag = true;
                if (null != item) {
                  delete tmp2[tmp3];
                  map.delete(item);
                  flag = true;
                }
              }
              return flag;
            }, false) || acc;
            const tmp18 = mapped.reduce((acc, item) => {
              let obj = dependencyMap[item];
              if (null == obj) {
                const obj2 = new require("StageChannelParticipants")(item);
                dependencyMap[item] = obj2;
                obj2.rebuild();
                obj = obj2;
              }
              let flag = acc;
              if (f79532(obj)) {
                channel = channel.getChannel(item);
                if (null != channel) {
                  if (channel.isGuildStageVoice()) {
                    if (0 === obj.size()) {
                      const id = channel.id;
                      flag = true;
                      if (null != id) {
                        delete tmp[tmp2];
                        map.delete(id);
                        flag = true;
                      }
                    } else {
                      flag = true;
                      if (null == map.get(channel.id)) {
                        const result = map.set(channel.id, channel);
                        flag = true;
                      }
                    }
                  }
                }
                flag = true;
                if (null != item) {
                  delete tmp2[tmp3];
                  map.delete(item);
                  flag = true;
                }
              }
              return flag;
            }, false) || acc;
          }
          return tmp15;
        }
      }
      return acc;
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
      for (const item10014 of members) {
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
          value = secondaryIndexMap.get(isGuildStageVoice.id);
          let tmp4 = null == value;
          if (!tmp4) {
            tmp4 = _modDef1332(isGuildStageVoice.permissionOverwrites, value.permissionOverwrites);
          }
          if (!tmp4) {
            arr = arr.push(isGuildStageVoice.id);
            const result = secondaryIndexMap.set(isGuildStageVoice.id, isGuildStageVoice);
          }
          return arr;
        }
      }
      return arr;
    }, []);
    const f79536 = (rebuild) => rebuild.rebuild();
    let mapped = reduced;
    if (reduced === undefined) {
      const values = secondaryIndexMap.values(undefined, true);
      mapped = values.map((id) => id.id);
    }
    const reduced1 = mapped.reduce((acc, item) => {
      let obj = dependencyMap[item];
      if (null == obj) {
        const obj2 = new require("StageChannelParticipants")(item);
        dependencyMap[item] = obj2;
        obj2.rebuild();
        obj = obj2;
      }
      let flag = acc;
      if (f79532(obj)) {
        channel = channel.getChannel(item);
        if (null != channel) {
          if (channel.isGuildStageVoice()) {
            if (0 === obj.size()) {
              const id = channel.id;
              flag = true;
              if (null != id) {
                delete tmp[tmp2];
                map.delete(id);
                flag = true;
              }
            } else {
              flag = true;
              if (null == map.get(channel.id)) {
                const result = map.set(channel.id, channel);
                flag = true;
              }
            }
          }
        }
        flag = true;
        if (null != item) {
          delete tmp2[tmp3];
          map.delete(item);
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
      return mapped1.reduce((acc, item) => {
        let obj = dependencyMap[item];
        if (null == obj) {
          const obj2 = new require("StageChannelParticipants")(item);
          dependencyMap[item] = obj2;
          obj2.rebuild();
          obj = obj2;
        }
        let flag = acc;
        if (f79532(obj)) {
          channel = channel.getChannel(item);
          if (null != channel) {
            if (channel.isGuildStageVoice()) {
              if (0 === obj.size()) {
                const id = channel.id;
                flag = true;
                if (null != id) {
                  delete tmp[tmp2];
                  map.delete(id);
                  flag = true;
                }
              } else {
                flag = true;
                if (null == map.get(channel.id)) {
                  const result = map.set(channel.id, channel);
                  flag = true;
                }
              }
            }
          }
          flag = true;
          if (null != item) {
            delete tmp2[tmp3];
            map.delete(item);
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
      const f79532 = (dependencyMap) => dependencyMap.updateParticipant(f79532);
      reduced = items.reduce((acc, item) => {
        let obj = dependencyMap[item];
        if (null == obj) {
          const obj2 = new require("StageChannelParticipants")(item);
          dependencyMap[item] = obj2;
          obj2.rebuild();
          obj = obj2;
        }
        let flag = acc;
        if (f79532(obj)) {
          channel = channel.getChannel(item);
          if (null != channel) {
            if (channel.isGuildStageVoice()) {
              if (0 === obj.size()) {
                const id = channel.id;
                flag = true;
                if (null != id) {
                  delete tmp[tmp2];
                  map.delete(id);
                  flag = true;
                }
              } else {
                flag = true;
                if (null == map.get(channel.id)) {
                  const result = map.set(channel.id, channel);
                  flag = true;
                }
              }
            }
          }
          flag = true;
          if (null != item) {
            delete tmp2[tmp3];
            map.delete(item);
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
const size = fn(2);
let result = size.fileFinishedImporting("modules/stage_channels/StageChannelParticipantStore.tsx");

export default stageChannelParticipantStore;