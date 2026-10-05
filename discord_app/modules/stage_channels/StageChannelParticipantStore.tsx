// discord_app/modules/stage_channels/StageChannelParticipantStore.tsx
import _modDef12 from "../../../_runtime/metro/00012__.js";
import get_initializedDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import _modDef1342 from "../../../_runtime/metro/01342__.js";
import SecondaryIndexMap from "../../../discord_common/js/packages/secondary-index-map/SecondaryIndexMap.tsx";
import StageChannelParticipantsDefault from "StageChannelParticipants.tsx";
import ApplicationStreamingStore from "../../stores/ApplicationStreamingStore.tsx";
import AuthenticationStore from "../../stores/AuthenticationStore.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import GuildStore from "../../stores/GuildStore.tsx";
import PermissionStore from "../../stores/PermissionStore.tsx";
import RelationshipStore from "../../stores/RelationshipStore.tsx";
import SpeakingStore from "../../stores/SpeakingStore.tsx";
import UserStore from "../../stores/UserStore.tsx";
import VoiceStateStore from "../../stores/VoiceStateStore.tsx";
import SortedVoiceStateStore from "../../stores/views/SortedVoiceStateStore.tsx";
import StageChannelRoleStore from "StageChannelRoleStore.tsx";
import StageInstanceStore from "StageInstanceStore.tsx";
import size from "../../../_runtime/metro/00002__.js";

const f90462 = (isGuildStageVoice) => {
  const tmp =
    null != isGuildStageVoice &&
    isGuildStageVoice.isGuildStageVoice() &&
    SortedVoiceStateStore.countVoiceStatesForChannel(isGuildStageVoice.id) > 0;
  if (tmp) {
    const result = secondaryIndexMap.set(isGuildStageVoice.id, isGuildStageVoice);
  }
};
function getActiveStageChannelIds(guildId) {
  const values = secondaryIndexMap.values;
  const values2 = values(guildId, true);
  return values2.map((id) => id.id);
}
function maybeGetParticipants(id) {
  if (null != closure_18[id]) {
    return closure_18[id];
  } else {
    const channel = ChannelStore.getChannel(id);
    let tmp2 = null;
    if (null != channel) {
      tmp2 = null;
      if (channel.isGuildStageVoice()) {
        const guild_id = channel.guild_id;
        if (!set.has(guild_id)) {
          set.add(guild_id);
          const tmp6 = _modDef12;
          const tmp6Result = tmp6(ChannelStore.getMutableGuildChannelsForGuild(guild_id));
          const values = tmp6Result.values();
          const item = values.forEach(f90462);
        }
        let tmp10 = null;
        const tmp8 =
          null != channel &&
          channel.isGuildStageVoice() &&
          SortedVoiceStateStore.countVoiceStatesForChannel(channel.id) > 0;
        if (tmp8) {
          let tmp12 = closure_18[id];
          if (null == tmp12) {
            const self = this;
            const self2 = this;
            const obj3 = new StageChannelParticipantsDefault(id);
            closure_18[id] = obj3;
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
  let tmp = closure_18[item10010];
  if (null == tmp) {
    const self = this;
    const self2 = this;
    const obj = new StageChannelParticipantsDefault(item10010);
    closure_18[item10010] = obj;
    obj.rebuild();
    tmp = obj;
  }
  return tmp;
}
function updateParticipant(arg0) {
  let closure_0 = arg0;
  let mapped;
  {
    const values = secondaryIndexMap.values(undefined, true);
    mapped = values.map((id) => id.id);
  }
  const f90464 = (dependencyMap) => dependencyMap.updateParticipant(f90464);
  if (mapped === undefined) {
    const values2 = secondaryIndexMap.values(undefined, true);
    mapped = values2.map((id) => id.id);
  }
  return mapped.reduce(function (acc, item) {
    let obj = closure_2_18[item];
    const tmp = item;
    if (null == obj) {
      const self = this;
      const self2 = this;
      const obj2 = new closure_2_1(closure_2_2[14])(item);
      closure_2_18[item] = obj2;
      obj2.rebuild();
      obj = obj2;
    }
    let flag = acc;
    if (f90464(obj)) {
      channel = channel.getChannel(item);
      if (null != channel) {
        if (channel.isGuildStageVoice()) {
          if (0 === obj.size()) {
            const id = channel.id;
            flag = true;
            if (null != id) {
              delete closure_2_18[id];
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
        delete closure_2_18[tmp];
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
  const id = user.user.id;
  const values = secondaryIndexMap.values(undefined, true);
  const mapped = values.map((id) => id.id);
  const f90464 = (dependencyMap) => dependencyMap.updateParticipant(f90464);
  let mapped1 = mapped;
  if (mapped === undefined) {
    const values2 = secondaryIndexMap.values(undefined, true);
    mapped1 = values2.map((id) => id.id);
  }
  return mapped1.reduce(function (acc, item) {
    let obj = closure_2_18[item];
    const tmp = item;
    if (null == obj) {
      const self = this;
      const self2 = this;
      const obj2 = new closure_2_1(closure_2_2[14])(item);
      closure_2_18[item] = obj2;
      obj2.rebuild();
      obj = obj2;
    }
    let flag = acc;
    if (f90464(obj)) {
      channel = channel.getChannel(item);
      if (null != channel) {
        if (channel.isGuildStageVoice()) {
          if (0 === obj.size()) {
            const id = channel.id;
            flag = true;
            if (null != id) {
              delete closure_2_18[id];
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
        delete closure_2_18[tmp];
        map.delete(item);
        flag = true;
      }
    }
    return flag;
  }, false);
}
function handleRelationshipUpdate(relationship) {
  const id = relationship.relationship.id;
  const values = secondaryIndexMap.values(undefined, true);
  const mapped = values.map((id) => id.id);
  const f90464 = (dependencyMap) => dependencyMap.updateParticipant(f90464);
  let mapped1 = mapped;
  if (mapped === undefined) {
    const values2 = secondaryIndexMap.values(undefined, true);
    mapped1 = values2.map((id) => id.id);
  }
  return mapped1.reduce(function (acc, item) {
    let obj = closure_2_18[item];
    const tmp = item;
    if (null == obj) {
      const self = this;
      const self2 = this;
      const obj2 = new closure_2_1(closure_2_2[14])(item);
      closure_2_18[item] = obj2;
      obj2.rebuild();
      obj = obj2;
    }
    let flag = acc;
    if (f90464(obj)) {
      channel = channel.getChannel(item);
      if (null != channel) {
        if (channel.isGuildStageVoice()) {
          if (0 === obj.size()) {
            const id = channel.id;
            flag = true;
            if (null != id) {
              delete closure_2_18[id];
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
        delete closure_2_18[tmp];
        map.delete(item);
        flag = true;
      }
    }
    return flag;
  }, false);
}
function handleGuildCreateOrDelete(guild) {
  function clearGuild(id) {
    const values = set.values(id);
    for (const item10008 of values) {
      let deleteResult = set.delete(item10008.id);
      delete closure_1_18[item10008.id];
      continue;
    }
    set2.delete(id);
  }
  clearGuild(guild.guild.id);
}
function handleStreamClose(streamKey) {
  let channelId;
  let f90464;
  let ownerId;
  streamKey = streamKey.streamKey;
  const obj = f90464(4942);
  const decodeStreamKeyResult = obj.decodeStreamKey(streamKey);
  const guildId = decodeStreamKeyResult.guildId;
  let tmp2 = null == guildId;
  ({ channelId, ownerId } = decodeStreamKeyResult);
  if (!tmp2) {
    tmp2 = !set.has(guildId);
  }
  let reduced = !tmp2;
  if (reduced) {
    const items = [channelId];
    f90464 = (dependencyMap) => dependencyMap.updateParticipant(f90464);
    reduced = items.reduce(function (acc, item) {
      let obj = closure_2_18[item];
      const tmp = item;
      if (null == obj) {
        const self = this;
        const self2 = this;
        const obj2 = new closure_2_1(closure_2_2[14])(item);
        closure_2_18[item] = obj2;
        obj2.rebuild();
        obj = obj2;
      }
      let flag = acc;
      if (f90464(obj)) {
        channel = channel.getChannel(item);
        if (null != channel) {
          if (channel.isGuildStageVoice()) {
            if (0 === obj.size()) {
              const id = channel.id;
              flag = true;
              if (null != id) {
                delete closure_2_18[id];
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
          delete closure_2_18[tmp];
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
const secondaryIndexMap = new SecondaryIndexMap.SecondaryIndexMap(
  (getGuildId) => {
    let guildId = getGuildId.getGuildId();
    if (guildId == null) {
      guildId = NO_GUILD;
    }
    const items = [guildId];
    return items;
  },
  (id) => id.id,
);
let set = new Set();
let closure_18 = {};
let closure_23 = [];
const Store = get_initializedDefault.Store;
class StageChannelParticipantStore extends Store {
  initialize() {
    this.waitFor(
      AuthenticationStore,
      UserStore,
      ChannelStore,
      SpeakingStore,
      VoiceStateStore,
      PermissionStore,
      SortedVoiceStateStore,
      GuildStore,
      StageChannelRoleStore,
      RelationshipStore,
      StageInstanceStore,
      ApplicationStreamingStore,
    );
  }
  getParticipantsVersion(id) {
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
  }
  getMutableParticipants(id, SPEAKER) {
    let toArrayResult;
    if (null == id) {
      toArrayResult = closure_23;
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
  }
  getMutableRequestToSpeakParticipants(id) {
    const obj = maybeGetParticipants(id);
    let requestToSpeakParticipants;
    if (obj != null) {
      requestToSpeakParticipants = obj.getRequestToSpeakParticipants();
    }
    if (requestToSpeakParticipants == null) {
      requestToSpeakParticipants = closure_23;
    }
    return requestToSpeakParticipants;
  }
  getRequestToSpeakParticipantsVersion(id) {
    const tmp = maybeGetParticipants(id);
    let num;
    if (tmp != null) {
      num = tmp.requestToSpeakVersion;
    }
    if (num == null) {
      num = -1;
    }
    return num;
  }
  getParticipantCount(id, AUDIENCE) {
    const obj = maybeGetParticipants(id);
    let num;
    if (obj != null) {
      num = obj.size(AUDIENCE);
    }
    if (num == null) {
      num = 0;
    }
    return num;
  }
  getChannels(id) {
    let tmp = id;
    let tmp2 = id;
    if (id == null) {
      tmp2 = NO_GUILD;
    }
    if (!set.has(tmp2)) {
      set.add(tmp2);
      const tmp6 = _modDef12;
      const tmp6Result = tmp6(ChannelStore.getMutableGuildChannelsForGuild(tmp2));
      const values2 = tmp6Result.values();
      const item = values2.forEach(f90462);
    }
    const values = secondaryIndexMap.values;
    if (tmp == null) {
      tmp = NO_GUILD;
    }
    return values(tmp);
  }
  getChannelsVersion() {
    return secondaryIndexMap.version;
  }
  getParticipant(id, arg1) {
    const obj = maybeGetParticipants(id);
    let participant;
    if (obj != null) {
      participant = obj.getParticipant(arg1);
    }
    if (participant == null) {
      participant = null;
    }
    return participant;
  }
}
const prototype = StageChannelParticipantStore.prototype;
StageChannelParticipantStore.displayName = "StageChannelParticipantStore";
let obj = {
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
            const f90464 = (dependencyMap) => dependencyMap.updateParticipant(f90464);
            reduced = items.reduce(function (acc, item) {
              let obj = closure_2_18[item];
              const tmp = item;
              if (null == obj) {
                const self = this;
                const self2 = this;
                const obj2 = new closure_2_1(closure_2_2[14])(item);
                closure_2_18[item] = obj2;
                obj2.rebuild();
                obj = obj2;
              }
              let flag = acc;
              if (f90464(obj)) {
                channel = channel.getChannel(item);
                if (null != channel) {
                  if (channel.isGuildStageVoice()) {
                    if (0 === obj.size()) {
                      const id = channel.id;
                      flag = true;
                      if (null != id) {
                        delete closure_2_18[id];
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
                  delete closure_2_18[tmp];
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
    return voiceStates.reduce(function (acc, guildId) {
      if (null != guildId.guildId) {
        if (set.has(guildId.guildId)) {
          let tmp = globalThis;
          const _Set = Set;
          let self = this;
          let self2 = this;
          set = new Set();
          let obj2 = set;
          const oldChannelId = guildId.oldChannelId;
          if (null != oldChannelId) {
            if (!obj2.has(oldChannelId)) {
              let channel = ChannelStore.getChannel(oldChannelId);
              let isGuildStageVoiceResult;
              if (channel != null) {
                isGuildStageVoiceResult = channel.isGuildStageVoice();
              }
              if (isGuildStageVoiceResult) {
                set.add(oldChannelId);
                if (null == closure_18[oldChannelId]) {
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
                if (null == closure_18[channelId]) {
                  obj2.add(channelId);
                }
              }
            }
          }
          let tmp13 = acc;
          if (0 !== set.size) {
            const _Array = Array;
            const userId = guildId.userId;
            const arr = Array.from(set);
            let mapped = arr;
            if (arr === undefined) {
              let flag = true;
              const values = secondaryIndexMap.values(undefined, true);
              mapped = values.map((id) => id.id);
            }
            const f90464 = (dependencyMap) => dependencyMap.updateParticipant(f90464);
            if (mapped === undefined) {
              const values2 = secondaryIndexMap.values(undefined, true);
              mapped = values2.map((id) => id.id);
            }
            tmp13 =
              mapped.reduce(function (acc, item) {
                let obj = closure_2_18[item];
                const tmp = item;
                if (null == obj) {
                  const self = this;
                  const self2 = this;
                  const obj2 = new closure_2_1(closure_2_2[14])(item);
                  closure_2_18[item] = obj2;
                  obj2.rebuild();
                  obj = obj2;
                }
                let flag = acc;
                if (f90464(obj)) {
                  channel = channel.getChannel(item);
                  if (null != channel) {
                    if (channel.isGuildStageVoice()) {
                      if (0 === obj.size()) {
                        const id = channel.id;
                        flag = true;
                        if (null != id) {
                          delete closure_2_18[id];
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
                    delete closure_2_18[tmp];
                    map.delete(item);
                    flag = true;
                  }
                }
                return flag;
              }, false) || acc;
            mapped.reduce(function (acc, item) {
              let obj = closure_2_18[item];
              const tmp = item;
              if (null == obj) {
                const self = this;
                const self2 = this;
                const obj2 = new closure_2_1(closure_2_2[14])(item);
                closure_2_18[item] = obj2;
                obj2.rebuild();
                obj = obj2;
              }
              let flag = acc;
              if (f90464(obj)) {
                channel = channel.getChannel(item);
                if (null != channel) {
                  if (channel.isGuildStageVoice()) {
                    if (0 === obj.size()) {
                      const id = channel.id;
                      flag = true;
                      if (null != id) {
                        delete closure_2_18[id];
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
                  delete closure_2_18[tmp];
                  map.delete(item);
                  flag = true;
                }
              }
              return flag;
            }, false) || acc;
          }
          return tmp13;
        }
      }
      return acc;
    }, false);
  },
  CHANNEL_DELETE: function handleChannelDelete(channel) {
    const id = channel.channel.id;
    let flag = null != id;
    if (flag) {
      delete closure_18[id];
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
        let tmp4 = updateParticipant(item10014.user.id) || flag;
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
          const value = secondaryIndexMap.get(isGuildStageVoice.id);
          const tmp4 = null == value || _modDef1342(isGuildStageVoice.permissionOverwrites, value.permissionOverwrites);
          if (!tmp4) {
            arr = arr.push(isGuildStageVoice.id);
            const result = secondaryIndexMap.set(isGuildStageVoice.id, isGuildStageVoice);
          }
          return arr;
        }
      }
      return arr;
    }, []);
    const f90468 = (rebuild) => rebuild.rebuild();
    let mapped = reduced;
    if (reduced === undefined) {
      const values = secondaryIndexMap.values(undefined, true);
      mapped = values.map((id) => id.id);
    }
    const reduced1 = mapped.reduce(function (acc, item) {
      let obj = closure_2_18[item];
      const tmp = item;
      if (null == obj) {
        const self = this;
        const self2 = this;
        const obj2 = new closure_2_1(closure_2_2[14])(item);
        closure_2_18[item] = obj2;
        obj2.rebuild();
        obj = obj2;
      }
      let flag = acc;
      if (f90464(obj)) {
        channel = channel.getChannel(item);
        if (null != channel) {
          if (channel.isGuildStageVoice()) {
            if (0 === obj.size()) {
              const id = channel.id;
              flag = true;
              if (null != id) {
                delete closure_2_18[id];
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
          delete closure_2_18[tmp];
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
      const values = secondaryIndexMap.values;
      const fn = (rebuild) => rebuild.rebuild();
      const values3 = values(guildId, true);
      const mapped = values3.map((id) => id.id);
      let mapped1 = mapped;
      if (mapped === undefined) {
        const values4 = secondaryIndexMap.values(undefined, true);
        mapped1 = values4.map((id) => id.id);
      }
      return mapped1.reduce(function (acc, item) {
        let obj = closure_2_18[item];
        const tmp = item;
        if (null == obj) {
          const self = this;
          const self2 = this;
          const obj2 = new closure_2_1(closure_2_2[14])(item);
          closure_2_18[item] = obj2;
          obj2.rebuild();
          obj = obj2;
        }
        let flag = acc;
        if (f90464(obj)) {
          channel = channel.getChannel(item);
          if (null != channel) {
            if (channel.isGuildStageVoice()) {
              if (0 === obj.size()) {
                const id = channel.id;
                flag = true;
                if (null != id) {
                  delete closure_2_18[id];
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
            delete closure_2_18[tmp];
            map.delete(item);
            flag = true;
          }
        }
        return flag;
      }, false);
    }
  },
  RTC_CONNECTION_VIDEO: function handleRTCConnectionVideo(guildId) {
    let channelId;
    let userId;
    guildId = guildId.guildId;
    let tmp = null == guildId;
    ({ channelId, userId } = guildId);
    if (!tmp) {
      tmp = !set.has(guildId);
    }
    let reduced = !tmp;
    if (reduced) {
      const items = [channelId];
      const f90464 = (dependencyMap) => dependencyMap.updateParticipant(f90464);
      reduced = items.reduce(function (acc, item) {
        let obj = closure_2_18[item];
        const tmp = item;
        if (null == obj) {
          const self = this;
          const self2 = this;
          const obj2 = new closure_2_1(closure_2_2[14])(item);
          closure_2_18[item] = obj2;
          obj2.rebuild();
          obj = obj2;
        }
        let flag = acc;
        if (f90464(obj)) {
          channel = channel.getChannel(item);
          if (null != channel) {
            if (channel.isGuildStageVoice()) {
              if (0 === obj.size()) {
                const id = channel.id;
                flag = true;
                if (null != id) {
                  delete closure_2_18[id];
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
            delete closure_2_18[tmp];
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
    const tmp = getActiveStageChannelIds(guildId.guildId);
    for (const item10010 of tmp) {
      let obj = getOrCreateParticipants(item10010);
      let rebuildResult = obj.rebuild() || flag;
      flag = rebuildResult;
      continue;
    }
    return flag;
  },
};
const stageChannelParticipantStore = new StageChannelParticipantStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("modules/stage_channels/StageChannelParticipantStore.tsx");

export default stageChannelParticipantStore;
