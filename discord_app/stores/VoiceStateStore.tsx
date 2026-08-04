// discord_app/stores/VoiceStateStore.tsx
import _slicedToArray from "_slicedToArray";
import isVoiceMuted from "isVoiceMuted";
import { ME } from "ME";
import { VoicePlatforms } from "ParticipantTypes";
import { Store } from "initialize";
import set from "ME";

const require = arg1;
function updateVoiceState(arg0, arg1, arg2) {
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
  const tmp10 = arg2(tmp8[arg1]);
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
        const sessionId = tmp9.sessionId;
        delete tmp4[tmp3];
      }
      let tmp17 = tmp5;
      if (tmp5 == null) {
        tmp17 = ME;
      }
      let obj4 = map;
      let set = map.get(tmp17);
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
          const value = map.get(tmp5);
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
  let closure_0 = userId;
  return updateVoiceState(guildId, userId.userId, (merge) => {
    if (null == guildId.channelId) {
      return null;
    } else {
      const obj = { channelId: null, deaf: null, mute: null, requestToSpeakTimestamp: null, selfDeaf: null, selfMute: null, selfStream: null, selfVideo: null, sessionId: null, suppress: null, userId: null, discoverable: null, connectedAt: null };
      ({ channelId: obj[0], deaf: obj[1], mute: obj[2], requestToSpeakTimestamp: obj[3], selfDeaf: obj[4], selfMute: obj[5], selfStream: obj[6], selfVideo: obj[7], sessionId: obj[8], suppress: obj[9], userId: obj[10], discoverable: obj[11], connectedAt: obj[12] } = tmp);
      if (null != merge) {
        let mergeResult = merge.merge(obj);
      } else {
        mergeResult = new outer1_6(obj);
      }
      return mergeResult;
    }
    tmp = guildId;
  });
}
function handleGuildCreateOrDelete(guild) {
  guild = guild.guild;
  const item = importDefault(12).forEach(dependencyMap[guild.id], (userId) => {
    outer1_18(guild.id, userId.userId, () => null);
  });
  delete tmp2[tmp];
}
let c9 = 0;
let c10 = 0;
let closure_11 = {};
let set = new Set();
const map = new Map();
let closure_14 = {};
let closure_15 = {};
let closure_16 = {};
let closure_17 = {};
class VoiceStateStore extends Store {
}
const prototype = VoiceStateStore.prototype;
prototype["getAllVoiceStates"] = function getAllVoiceStates() {
  return closure_11;
};
prototype["getVoiceStateVersion"] = function getVoiceStateVersion() {
  return c10;
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
    tmp = closure_3;
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
  const voiceState = this.getVoiceState(guildId, closure_3);
  let channelId = null;
  if (null != voiceState) {
    channelId = null;
    if (null != closure_4) {
      channelId = null;
      if (voiceState.sessionId === closure_4) {
        channelId = voiceState.channelId;
      }
    }
  }
  return channelId;
};
prototype["getUsersWithVideo"] = function getUsersWithVideo(arg0) {
  let value = map.get(arg0);
  if (value == null) {
    value = set;
  }
  return value;
};
prototype["isCurrentClientInVoiceChannel"] = function isCurrentClientInVoiceChannel() {
  let tmp = null != closure_4;
  if (tmp) {
    let tmp5;
    if (dependencyMap4[closure_3] != null) {
      tmp5 = tmp4[closure_4];
    }
    tmp = null != tmp5;
  }
  return tmp;
};
prototype["isInChannel"] = function isInChannel(id, id2) {
  let tmp = id2;
  if (id2 === undefined) {
    tmp = closure_3;
  }
  if (null == id) {
    return false;
  } else {
    const self = this;
    const voiceStateForChannel = this.getVoiceStateForChannel(id, tmp);
    let tmp3 = null != voiceStateForChannel;
    if (tmp3) {
      let tmp5 = tmp !== closure_3;
      if (!tmp5) {
        let tmp7 = null != closure_4;
        if (tmp7) {
          tmp7 = voiceStateForChannel.sessionId === closure_4;
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
  let tmp = null != closure_4;
  if (tmp) {
    channelId = undefined;
    if (dependencyMap4[closure_3] != null) {
      if (tmp4[closure_4] != null) {
        channelId = tmp7.channelId;
      }
    }
    tmp = channelId;
  }
  if (id === closure_3) {
    if (channelId === tmp) {
      require(1577) /* isMetaQuest */.isMetaQuest() ? VoicePlatforms.QUEST : VoicePlatforms.MOBILE;
      const obj = require(1577) /* isMetaQuest */;
    }
  }
  return table["" + id + ":" + channelId];
};
Object.defineProperty(prototype, "userHasBeenMovedVersion", {
  get: function userHasBeenMovedVersion() {
    return c9;
  },
  set: undefined
});
VoiceStateStore.displayName = "VoiceStateStore";
const voiceStateStore = new VoiceStateStore(require("dispatcher"), {
  CONNECTION_OPEN: function handleConnectionOpen(user) {
    user = user.user;
    let tmp = null != id;
    if (tmp) {
      tmp = id !== user.id;
    }
    if (tmp) {
      let closure_11 = {};
      let closure_14 = {};
      let closure_16 = {};
      let closure_15 = {};
      map.clear();
    }
    id = user.id;
    const sessionId = user.sessionId;
    return tmp;
  },
  CONNECTION_OPEN_SUPPLEMENTAL: function handleConnectionOpenSupplemental() {
    let closure_11 = {};
    let closure_14 = {};
    let closure_16 = {};
    let closure_15 = {};
    map.clear();
  },
  OVERLAY_INITIALIZE: function handleOverlayInitialize(voiceStates) {
    let sessionId;
    let user;
    let closure_0;
    let c1;
    let closure_11 = {};
    let closure_14 = {};
    let closure_16 = {};
    let closure_15 = {};
    ({ user, sessionId } = voiceStates);
    const entries = Object.entries(voiceStates.voiceStates);
    while (tmp2 !== undefined) {
      let tmp4 = callback;
      let tmp5 = callback(tmp3, 2);
      closure_0 = tmp5[0];
      function _loop(arg0) {
        let closure_0 = arg0;
        outer1_18(closure_0, c1, () => new outer1_6(closure_0));
      }
      let _Object = Object;
      let entries1 = Object.entries(tmp5[1]);
      let tmp7 = entries1;
      let tmp8 = entries1;
      for (const item10031 of entries1) {
        let tmp9 = callback;
        let tmp10 = callback(item10031, 2);
        c1 = tmp10[0];
        let tmp11 = _loop;
        let _loopResult = _loop(tmp10[1]);
        continue;
      }
      continue;
    }
    const id = user.id;
  },
  VOICE_CHANNEL_SELECT: function handleVoiceChannelSelect(channelId) {
    channelId = channelId.channelId;
    return callback(updateVoiceState(channelId.guildId, closure_3, (set) => {
      let result;
      if (set != null) {
        result = set.set("channelId", channelId);
      }
      return result;
    }), 1)[0];
  },
  VOICE_STATE_UPDATES: function handleVoiceStateUpdates(voiceStates) {
    voiceStates = voiceStates.voiceStates;
    return voiceStates.reduce((arg0, guildId) => {
      let flag = arg0;
      let closure_0 = guildId;
      let tmp = callback(callback2(guildId.guildId, guildId.userId, (merge) => {
        if (null == guildId.channelId) {
          return null;
        } else {
          const obj = { channelId: null, deaf: null, mute: null, requestToSpeakTimestamp: null, selfDeaf: null, selfMute: null, selfStream: null, selfVideo: null, sessionId: null, suppress: null, userId: null, discoverable: null, connectedAt: null };
          ({ channelId: obj[0], deaf: obj[1], mute: obj[2], requestToSpeakTimestamp: obj[3], selfDeaf: obj[4], selfMute: obj[5], selfStream: obj[6], selfVideo: obj[7], sessionId: obj[8], suppress: obj[9], userId: obj[10], discoverable: obj[11], connectedAt: obj[12] } = tmp);
          if (null != merge) {
            let mergeResult = merge.merge(obj);
          } else {
            mergeResult = new outer1_6(obj);
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
    const id = channel.channel.id;
    let obj = dependencyMap[ME];
    if (obj == null) {
      obj = {};
    }
    importDefault(12).each(obj, (channelId) => {
      if (channelId.channelId === channelId) {
        outer1_18(outer1_7, arg1, () => null);
      }
    });
  },
  CALL_DELETE: function handleCallDelete(channelId) {
    channelId = channelId.channelId;
    let obj = dependencyMap[ME];
    if (obj == null) {
      obj = {};
    }
    importDefault(12).each(obj, (channelId) => {
      if (channelId.channelId === channelId) {
        outer1_18(outer1_7, arg1, () => null);
      }
    });
  },
  PASSIVE_UPDATE_V2: function handlePassiveUpdateV2(guildId) {
    let flag = false;
    while (tmp !== undefined) {
      let tmp3 = mergeVoiceState;
      let tmp4 = callback;
      let first = flag;
      if (!flag) {
        first = callback(mergeVoiceState(guildId.guildId, tmp2), 1)[0];
      }
      flag = first;
      continue;
    }
    for (const item10024 of tmp6) {
      let tmp7 = updateVoiceState;
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
let result = set.fileFinishedImporting("stores/VoiceStateStore.tsx");

export default voiceStateStore;