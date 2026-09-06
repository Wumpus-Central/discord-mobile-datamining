// === Module 4579: VoiceStateStore ===

// Module 4579 (VoiceStateStore)
import _modDef12 from "module_12" /* 12 */;
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import MetaQuestUtils from "MetaQuestUtils" /* 1608 */;
import _slicedToArray from "module_32" /* 32 */;
import VoiceStateRecord from "VoiceStateRecord" /* 4580 */;

require = fn;
function updateVoiceState(arg0, arg1, fn) {
  let tmp5 = arg0;
  let tmp7 = arg0;
  if (arg0 == null) {
    tmp7 = ME;
  }
  let tmp8 = tmp6[tmp7];
  if (null == tmp8) {
    let obj = {};
    tmp6[tmp7] = obj;
    tmp8 = obj;
  }
  const tmp10 = fn(tmp8[arg1]);
  if (tmp8[arg1] === tmp10) {
    const items = [false, tmp10, tmp9];
    let items1 = items;
  } else {
    if (null != tmp9) {
      delete tmp[tmp2];
      if (null != tmp9.channelId) {
        const channelId = tmp9.channelId;
        if (null == dependencyMap2[channelId]) {
          obj = {};
          tmp11[channelId] = obj;
        }
        delete tmp3[tmp2];
        const channelId2 = tmp9.channelId;
        if (null == dependencyMap3[channelId2]) {
          obj = {};
          tmp13[channelId2] = obj;
        }
        delete tmp3[tmp2];
      }
      if (null != tmp9.sessionId) {
        if (null == dependencyMap4[arg1]) {
          const obj1 = {};
          tmp15[arg1] = obj1;
        }
        sessionId = tmp9.sessionId;
        delete tmp4[tmp3];
      }
      let tmp17 = tmp5;
      if (tmp5 == null) {
        tmp17 = ME;
      }
      let obj4 = map;
      set = map.get(tmp17);
      if (set == null) {
        const _Set = Set;
        set = new Set();
      }
      if (set.has(arg1)) {
        const _Set2 = Set;
        set = new Set(tmp21);
        set.delete(arg1);
        if (0 === set.size) {
          obj4.delete(tmp17);
        } else {
          const result = obj4.set(tmp17, set);
        }
      }
    }
    if (null != tmp10) {
      tmp8[arg1] = tmp10;
      if (null != tmp10.channelId) {
        const channelId4 = tmp10.channelId;
        let tmp30 = dependencyMap2[channelId4];
        if (null == tmp30) {
          const obj2 = {};
          tmp48[channelId4] = obj2;
          tmp30 = obj2;
        }
        tmp30[arg1] = tmp10;
        if (tmp10.selfVideo) {
          const channelId3 = tmp10.channelId;
          let tmp32 = dependencyMap3[channelId3];
          if (null == tmp32) {
            const obj3 = {};
            tmp31[channelId3] = obj3;
            tmp32 = obj3;
          }
          tmp32[arg1] = tmp10;
          if (tmp5 == null) {
            tmp5 = ME;
          }
          value = map.get(tmp5);
          let set1 = value;
          if (value == null) {
            const _Set3 = Set;
            set1 = new Set();
          }
          if (!set1.has(arg1)) {
            const _Set4 = Set;
            const set2 = new Set(tmp38);
            set2.add(arg1);
            const result1 = obj10.set(tmp5, set2);
          }
          obj10 = map;
        }
      }
      if (null != tmp10.sessionId) {
        let tmp47 = dependencyMap4[arg1];
        if (null == tmp47) {
          obj4 = {};
          tmp46[arg1] = obj4;
          tmp47 = obj4;
        }
        tmp47[tmp10.sessionId] = tmp10;
      }
    }
    items1 = [true, tmp10, tmp9];
  }
  return items1;
}
function mergeVoiceState(guildId, userId) {
  closure_0 = userId;
  return updateVoiceState(guildId, userId.userId, (merge) => {
    if (null == guildId.channelId) {
      return null;
    } else {
      const obj = { channelId: null, deaf: null, mute: null, requestToSpeakTimestamp: null, selfDeaf: null, selfMute: null, selfStream: null, selfVideo: null, sessionId: null, suppress: null, userId: null, discoverable: null, connectedAt: null };
      ({ channelId: obj.channelId, deaf: obj.deaf, mute: obj.mute, requestToSpeakTimestamp: obj.requestToSpeakTimestamp, selfDeaf: obj.selfDeaf, selfMute: obj.selfMute, selfStream: obj.selfStream, selfVideo: obj.selfVideo, sessionId: obj.sessionId, suppress: obj.suppress, userId: obj.userId, discoverable: obj.discoverable, connectedAt: obj.connectedAt } = tmp);
      if (null != merge) {
        let mergeResult = merge.merge(obj);
      } else {
        mergeResult = new VoiceStateRecord(obj);
      }
      return mergeResult;
    }
    tmp = guildId;
  });
}
function handleGuildCreateOrDelete(guild) {
  guild = guild.guild;
  const item = _modDef12.forEach(dependencyMap[guild.id], (userId) => {
    updateVoiceState(guild.id, userId.userId, () => null);
  });
  delete tmp2[tmp];
}
const ME = fn(1074).ME;
const VoicePlatforms = fn(4581).VoicePlatforms;
let c9 = 0;
let closure_10 = 0;
const dependencyMap = {};
let set = new Set();
const map = new Map();
const dependencyMap2 = {};
const dependencyMap3 = {};
const dependencyMap4 = {};
let closure_17 = {};
const Store = initializeDefault.Store;
class VoiceStateStore extends Store {
}
const prototype = VoiceStateStore.prototype;
prototype["getAllVoiceStates"] = function getAllVoiceStates() {
  return closure_11;
};
prototype["getVoiceStateVersion"] = function getVoiceStateVersion() {
  return closure_10;
};
prototype["getVoiceStates"] = function getVoiceStates(arg0) {
  let tmp = arg0;
  if (arg0 == null) {
    tmp = ME;
  }
  let tmp3 = tmp2[tmp];
  if (null == tmp3) {
    const obj = {};
    tmp2[tmp] = obj;
    tmp3 = obj;
  }
  return tmp3;
};
prototype["getVoiceStatesForChannel"] = function getVoiceStatesForChannel(arg0) {
  let tmp2 = dependencyMap2[arg0];
  if (null == tmp2) {
    const obj = {};
    tmp[arg0] = obj;
    tmp2 = obj;
  }
  return tmp2;
};
prototype["getVideoVoiceStatesForChannel"] = function getVideoVoiceStatesForChannel(arg0) {
  let tmp2 = dependencyMap3[arg0];
  if (null == tmp2) {
    const obj = {};
    tmp[arg0] = obj;
    tmp2 = obj;
  }
  return tmp2;
};
prototype["getVoiceState"] = function getVoiceState(guildId, id) {
  return this.getVoiceStates(guildId)[id];
};
prototype["getDiscoverableVoiceState"] = function getDiscoverableVoiceState(guildId, userId) {
  const voiceState = this.getVoiceState(guildId, userId);
  let tmp2 = null;
  if (null != voiceState) {
    tmp2 = null;
    if (false !== voiceState.discoverable) {
      tmp2 = voiceState;
    }
  }
  return tmp2;
};
prototype["getVoiceStateForChannel"] = function getVoiceStateForChannel(channelId, userId) {
  let tmp = userId;
  if (userId === undefined) {
    tmp = id;
  }
  let tmp3 = dependencyMap2[channelId];
  if (null == tmp3) {
    const obj = {};
    tmp2[channelId] = obj;
    tmp3 = obj;
  }
  let tmp4;
  if (tmp3 != null) {
    tmp4 = tmp3[tmp];
  }
  return tmp4;
};
prototype["getVoiceStateForUser"] = function getVoiceStateForUser(id) {
  let tmp2 = dependencyMap4[id];
  if (null == tmp2) {
    const obj = {};
    tmp[id] = obj;
    tmp2 = obj;
  }
  return Object.values(tmp2)[0];
};
prototype["getDiscoverableVoiceStateForUser"] = function getDiscoverableVoiceStateForUser(userId) {
  let tmp2 = dependencyMap4[userId];
  if (null == tmp2) {
    const obj = {};
    tmp[userId] = obj;
    tmp2 = obj;
  }
  const values = Object.values(tmp2);
  return values.find((discoverable) => false !== discoverable.discoverable);
};
prototype["getVoiceStateForSession"] = function getVoiceStateForSession(id, remoteSessionId) {
  let tmp = null;
  if (null != remoteSessionId) {
    let tmp4 = dependencyMap4[id];
    if (null == tmp4) {
      const obj = {};
      tmp3[id] = obj;
      tmp4 = obj;
    }
    let tmp5;
    if (tmp4 != null) {
      tmp5 = tmp4[remoteSessionId];
    }
    tmp = tmp5;
  }
  return tmp;
};
prototype["getUserVoiceChannelId"] = function getUserVoiceChannelId(ME, id) {
  const voiceState = this.getVoiceState(ME, id);
  let channelId;
  if (voiceState != null) {
    channelId = voiceState.channelId;
  }
  return channelId;
};
prototype["getCurrentClientVoiceChannelId"] = function getCurrentClientVoiceChannelId(guildId) {
  const voiceState = this.getVoiceState(guildId, id);
  let channelId = null;
  if (null != voiceState) {
    channelId = null;
    if (null != sessionId) {
      channelId = null;
      if (voiceState.sessionId === sessionId) {
        channelId = voiceState.channelId;
      }
    }
  }
  return channelId;
};
prototype["getUsersWithVideo"] = function getUsersWithVideo(afkChannelId) {
  value = map.get(afkChannelId);
  if (value == null) {
    value = set;
  }
  return value;
};
prototype["isCurrentClientInVoiceChannel"] = function isCurrentClientInVoiceChannel() {
  let tmp = null != sessionId;
  if (tmp) {
    let tmp5;
    if (dependencyMap4[id] != null) {
      tmp5 = tmp4[sessionId];
    }
    tmp = null != tmp5;
  }
  return tmp;
};
prototype["isInChannel"] = function isInChannel(id, id2) {
  let tmp = id2;
  if (id2 === undefined) {
    tmp = id;
  }
  if (null == id) {
    return false;
  } else {
    const self = this;
    const voiceStateForChannel = this.getVoiceStateForChannel(id, tmp);
    let tmp3 = null != voiceStateForChannel;
    if (tmp3) {
      let tmp5 = tmp !== id;
      if (!tmp5) {
        let tmp7 = null != sessionId;
        if (tmp7) {
          tmp7 = voiceStateForChannel.sessionId === sessionId;
        }
        tmp5 = tmp7;
      }
      tmp3 = tmp5;
    }
    return tmp3;
  }
};
prototype["hasVideo"] = function hasVideo(arg0) {
  let tmp2 = dependencyMap3[arg0];
  if (null == tmp2) {
    const obj = {};
    tmp[arg0] = obj;
    tmp2 = obj;
  }
  return Object.values(tmp2).length > 0;
};
prototype["getVoicePlatformForChannel"] = function getVoicePlatformForChannel(channelId, id) {
  let tmp = null != sessionId;
  if (tmp) {
    channelId = undefined;
    if (dependencyMap4[id] != null) {
      if (tmp4[sessionId] != null) {
        channelId = tmp7.channelId;
      }
    }
    tmp = channelId;
  }
  if (id === id) {
    if (channelId === tmp) {
      MetaQuestUtils.isMetaQuest() ? VoicePlatforms.QUEST : VoicePlatforms.MOBILE;
    }
  }
  return closure_17["" + id + ":" + channelId];
};
Object.defineProperty(prototype, "userHasBeenMovedVersion", {
  get: function userHasBeenMovedVersion() {
    return c9;
  },
  set: undefined
});
VoiceStateStore.displayName = "VoiceStateStore";
const voiceStateStore = new VoiceStateStore(DispatcherDefault, {
  CONNECTION_OPEN: function handleConnectionOpen(user) {
    user = user.user;
    let tmp = null != id;
    if (tmp) {
      tmp = id !== user.id;
    }
    if (tmp) {
      closure_11 = {};
      closure_14 = {};
      closure_16 = {};
      closure_15 = {};
      map.clear();
    }
    id = user.id;
    sessionId = user.sessionId;
    return tmp;
  },
  CONNECTION_OPEN_SUPPLEMENTAL: function handleConnectionOpenSupplemental() {
    closure_11 = {};
    closure_14 = {};
    closure_16 = {};
    closure_15 = {};
    map.clear();
  },
  OVERLAY_INITIALIZE: function handleOverlayInitialize(voiceStates) {
    closure_0 = undefined;
    closure_1 = undefined;
    closure_11 = {};
    closure_14 = {};
    closure_16 = {};
    closure_15 = {};
    ({ user, sessionId } = voiceStates);
    const entries = Object.entries(voiceStates.voiceStates);
    while (tmp2 !== undefined) {
      let tmp5 = _slicedToArray(tmp3, 2);
      closure_0 = tmp5[0];
      function _loop(arg0) {
        closure_0 = arg0;
        updateVoiceState(closure_0, closure_1, () => new VoiceStateRecord(closure_0));
      }
      let _Object = Object;
      let entries1 = Object.entries(tmp5[1]);
      for (const item10031 of entries1) {
        let tmp10 = _slicedToArray(item10031, 2);
        closure_1 = tmp10[0];
        let _loopResult = _loop(tmp10[1]);
        continue;
      }
      continue;
    }
    id = user.id;
  },
  VOICE_CHANNEL_SELECT: function handleVoiceChannelSelect(channelId) {
    channelId = channelId.channelId;
    return _slicedToArray(updateVoiceState(channelId.guildId, id, (set) => {
      let result;
      if (set != null) {
        result = set.set("channelId", channelId);
      }
      return result;
    }), 1)[0];
  },
  VOICE_STATE_UPDATES: function handleVoiceStateUpdates(voiceStates) {
    voiceStates = voiceStates.voiceStates;
    return voiceStates.reduce((acc, guildId) => {
      let flag = acc;
      let tmp = closure_5(closure_18(guildId.guildId, guildId.userId, (merge) => {
        if (null == guildId.channelId) {
          return null;
        } else {
          const obj = { channelId: null, deaf: null, mute: null, requestToSpeakTimestamp: null, selfDeaf: null, selfMute: null, selfStream: null, selfVideo: null, sessionId: null, suppress: null, userId: null, discoverable: null, connectedAt: null };
          ({ channelId: obj.channelId, deaf: obj.deaf, mute: obj.mute, requestToSpeakTimestamp: obj.requestToSpeakTimestamp, selfDeaf: obj.selfDeaf, selfMute: obj.selfMute, selfStream: obj.selfStream, selfVideo: obj.selfVideo, sessionId: obj.sessionId, suppress: obj.suppress, userId: obj.userId, discoverable: obj.discoverable, connectedAt: obj.connectedAt } = tmp);
          if (null != merge) {
            let mergeResult = merge.merge(obj);
          } else {
            mergeResult = new VoiceStateRecord(obj);
          }
          return mergeResult;
        }
        tmp = guildId;
      }), 3);
      if (tmp[0]) {
        let tmp5 = guildId.sessionId === closure_4;
        if (tmp5) {
          tmp5 = null != tmp2;
        }
        if (tmp5) {
          tmp5 = null != tmp3;
        }
        if (tmp5) {
          tmp5 = tmp3.channelId !== tmp2.channelId;
        }
        if (tmp5) {
          closure_9 = closure_9 + 1;
        }
        closure_10 = closure_10 + 1;
        flag = true;
      }
      return flag;
    }, false);
  },
  GUILD_DELETE: handleGuildCreateOrDelete,
  GUILD_CREATE: handleGuildCreateOrDelete,
  CHANNEL_DELETE: function handleChannelDelete(channel) {
    id = channel.channel.id;
    let obj = dependencyMap[ME];
    if (obj == null) {
      obj = {};
    }
    _modDef12.each(obj, (channelId, arg1) => {
      if (channelId.channelId === channelId) {
        updateVoiceState(ME, arg1, () => null);
      }
    });
  },
  CALL_DELETE: function handleCallDelete(channelId) {
    channelId = channelId.channelId;
    let obj = dependencyMap[ME];
    if (obj == null) {
      obj = {};
    }
    _modDef12.each(obj, (channelId, arg1) => {
      if (channelId.channelId === channelId) {
        updateVoiceState(ME, arg1, () => null);
      }
    });
  },
  PASSIVE_UPDATE_V2: function handlePassiveUpdateV2(guildId) {
    let flag = false;
    while (tmp !== undefined) {
      let first = flag;
      if (!flag) {
        first = _slicedToArray(mergeVoiceState(guildId.guildId, tmp2), 1)[0];
      }
      flag = first;
      continue;
    }
    for (const item10024 of tmp6) {
      let tmp8 = updateVoiceState(arg0.guildId, item10024, () => null);
      flag = true;
      continue;
    }
    if (flag) {
      closure_10 = closure_10 + 1;
    }
    return flag;
  },
  RTC_CONNECTION_PLATFORM: function handleRTCConnectionPlatform(userId) {
    closure_17["" + userId.userId + ":" + userId.channelId] = userId.platform;
  }
});
const size = fn(2);
let result = size.fileFinishedImporting("stores/VoiceStateStore.tsx");

export default voiceStateStore;