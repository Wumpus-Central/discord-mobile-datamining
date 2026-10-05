// discord_app/stores/VoiceStateStore.tsx
import _modDef12 from "../../_runtime/metro/00012__.js";
import get_initializedDefault from "../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../Dispatcher.tsx";
import Constants from "../Constants.tsx";
import MetaQuestUtils from "../modules/device/MetaQuestUtils.android.tsx";
import CallConstants from "../modules/calls/CallConstants.tsx";
import _slicedToArray from "../../_runtime/metro/00032__slicedToArray.js";
import VoiceStateRecord from "../records/VoiceStateRecord.tsx";
import size from "../../_runtime/metro/00002__.js";

let closure_14, closure_16, closure_9, sessionId, set2, set3;

const f89546 = function (merge) {
  if (null == guildId.channelId) {
    return null;
  } else {
    let mergeResult;
    const obj = {
      channelId: null,
      deaf: null,
      mute: null,
      requestToSpeakTimestamp: null,
      selfDeaf: null,
      selfMute: null,
      selfStream: null,
      selfVideo: null,
      sessionId: null,
      suppress: null,
      userId: null,
      discoverable: null,
      connectedAt: null,
    };
    ({
      channelId: obj.channelId,
      deaf: obj.deaf,
      mute: obj.mute,
      requestToSpeakTimestamp: obj.requestToSpeakTimestamp,
      selfDeaf: obj.selfDeaf,
      selfMute: obj.selfMute,
      selfStream: obj.selfStream,
      selfVideo: obj.selfVideo,
      sessionId: obj.sessionId,
      suppress: obj.suppress,
      userId: obj.userId,
      discoverable: obj.discoverable,
      connectedAt: obj.connectedAt,
    } = guildId);
    if (null != merge) {
      mergeResult = merge.merge(obj);
    } else {
      const self = this;
      const self2 = this;
      mergeResult = new VoiceStateRecord(obj);
    }
    return mergeResult;
  }
};
function updateVoiceState(arg0, arg1, fn) {
  let items1;
  let tmp = arg0;
  let tmp3 = arg0;
  if (arg0 == null) {
    tmp3 = ME;
  }
  let tmp4 = closure_11[tmp3];
  if (null == tmp4) {
    const obj = {};
    closure_11[tmp3] = obj;
    tmp4 = obj;
  }
  const tmp7 = fn(tmp4[arg1]);
  if (tmp4[arg1] === tmp7) {
    const items = [false, tmp7, tmp4[arg1]];
    items1 = items;
  } else {
    if (null != tmp4[arg1]) {
      delete tmp4[arg1];
      if (null != tmp4[arg1].channelId) {
        const channelId = tmp6.channelId;
        let tmp9 = closure_14[channelId];
        if (null == tmp9) {
          const obj2 = {};
          tmp8[channelId] = obj2;
          tmp9 = obj2;
        }
        delete tmp9[arg1];
        const channelId2 = tmp6.channelId;
        let tmp11 = closure_15[channelId2];
        if (null == tmp11) {
          const obj3 = {};
          tmp10[channelId2] = obj3;
          tmp11 = obj3;
        }
        delete tmp11[arg1];
      }
      if (null != tmp4[arg1].sessionId) {
        let tmp13 = closure_16[arg1];
        if (null == tmp13) {
          const obj4 = {};
          tmp12[arg1] = obj4;
          tmp13 = obj4;
        }
        delete tmp13[tmp4[arg1].sessionId];
      }
      let tmp14 = tmp;
      if (tmp == null) {
        tmp14 = ME;
      }
      set3 = map.get(tmp14);
      if (set3 == null) {
        const _Set = Set;
        const self = this;
        const self2 = this;
        set3 = new Set();
      }
      if (set3.has(arg1)) {
        const _Set2 = Set;
        const self3 = this;
        const self4 = this;
        set = new Set(tmp16);
        set.delete(arg1);
        if (0 === set.size) {
          map.delete(tmp14);
        } else {
          const result = map.set(tmp14, set);
        }
      }
    }
    if (null != tmp7) {
      tmp4[arg1] = tmp7;
      if (null != tmp7.channelId) {
        const channelId4 = tmp7.channelId;
        let tmp23 = closure_14[channelId4];
        if (null == tmp23) {
          const obj6 = {};
          tmp37[channelId4] = obj6;
          tmp23 = obj6;
        }
        tmp23[arg1] = tmp7;
        if (tmp7.selfVideo) {
          const channelId3 = tmp7.channelId;
          let tmp25 = closure_15[channelId3];
          if (null == tmp25) {
            const obj7 = {};
            tmp24[channelId3] = obj7;
            tmp25 = obj7;
          }
          tmp25[arg1] = tmp7;
          if (tmp == null) {
            tmp = ME;
          }
          const value2 = map.get(tmp);
          let set1 = value2;
          if (value2 == null) {
            const _Set3 = Set;
            const self5 = this;
            const self6 = this;
            set1 = new Set();
          }
          if (!set1.has(arg1)) {
            const _Set4 = Set;
            const self7 = this;
            const self8 = this;
            set2 = new Set(tmp29);
            set2.add(arg1);
            const result1 = map.set(tmp, set2);
          }
        }
      }
      if (null != tmp7.sessionId) {
        let tmp36 = closure_16[arg1];
        if (null == tmp36) {
          const obj8 = {};
          tmp35[arg1] = obj8;
          tmp36 = obj8;
        }
        tmp36[tmp7.sessionId] = tmp7;
      }
    }
    items1 = [true, tmp7, tmp4[arg1]];
  }
  return items1;
}
function mergeVoiceState(guildId, userId) {
  let closure_0 = userId;
  return updateVoiceState(guildId, userId.userId, f89546);
}
function handleGuildCreateOrDelete(guild) {
  guild = guild.guild;
  const arr = _modDef12;
  const item = arr.forEach(closure_11[guild.id], (userId) => {
    updateVoiceState(guild.id, userId.userId, () => null);
  });
  delete closure_11[guild.id];
}
const ME = Constants.ME;
const VoicePlatforms = CallConstants.VoicePlatforms;
let c9 = 0;
let closure_10 = 0;
let closure_11 = {};
let set = new Set();
const map = new Map();
const authStore2 = {};
let closure_15 = {};
const authStore3 = {};
let closure_17 = {};
const Store = get_initializedDefault.Store;
class VoiceStateStore extends Store {
  getAllVoiceStates() {
    return closure_11;
  }
  getVoiceStateVersion() {
    return closure_10;
  }
  getVoiceStates(arg0) {
    let tmp = arg0;
    if (arg0 == null) {
      tmp = ME;
    }
    let tmp3 = closure_11[tmp];
    if (null == tmp3) {
      const obj = {};
      closure_11[tmp] = obj;
      tmp3 = obj;
    }
    return tmp3;
  }
  getVoiceStatesForChannel(arg0) {
    let tmp2 = closure_14[arg0];
    if (null == tmp2) {
      const obj = {};
      tmp[arg0] = obj;
      tmp2 = obj;
    }
    return tmp2;
  }
  getVideoVoiceStatesForChannel(arg0) {
    let tmp2 = closure_15[arg0];
    if (null == tmp2) {
      const obj = {};
      tmp[arg0] = obj;
      tmp2 = obj;
    }
    return tmp2;
  }
  getVoiceState(guildId, id) {
    return this.getVoiceStates(guildId)[id];
  }
  getDiscoverableVoiceState(guildId, userId) {
    const voiceState = this.getVoiceState(guildId, userId);
    let tmp2 = null;
    if (null != voiceState) {
      tmp2 = null;
      if (false !== voiceState.discoverable) {
        tmp2 = voiceState;
      }
    }
    return tmp2;
  }
  getVoiceStateForChannel(channelId) {
    let tmp = userId;
    if (userId === undefined) {
      tmp = id;
    }
    let tmp3 = closure_14[channelId];
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
  }
  getVoiceStateForUser(userId) {
    let tmp2 = closure_16[userId];
    const _Object = Object;
    if (null == tmp2) {
      const obj = {};
      tmp[userId] = obj;
      tmp2 = obj;
    }
    return values(tmp2)[0];
  }
  getDiscoverableVoiceStateForUser(userId) {
    let tmp2 = closure_16[userId];
    const _Object = Object;
    if (null == tmp2) {
      const obj = {};
      tmp[userId] = obj;
      tmp2 = obj;
    }
    const values2 = values(tmp2);
    return values2.find((discoverable) => false !== discoverable.discoverable);
  }
  getVoiceStateForSession(id, remoteSessionId) {
    let tmp = null;
    if (null != remoteSessionId) {
      let tmp4 = closure_16[id];
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
  }
  getUserVoiceChannelId(ME, id) {
    const voiceState = this.getVoiceState(ME, id);
    let channelId;
    if (voiceState != null) {
      channelId = voiceState.channelId;
    }
    return channelId;
  }
  getCurrentClientVoiceChannelId(guildId) {
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
  }
  getUsersWithVideo(afkChannelId) {
    let value = map.get(afkChannelId);
    if (value == null) {
      value = set;
    }
    return value;
  }
  isCurrentClientInVoiceChannel() {
    let tmp = null != sessionId;
    if (tmp) {
      let tmp5;
      if (closure_16[id] != null) {
        tmp5 = tmp4[sessionId];
      }
      tmp = null != tmp5;
    }
    return tmp;
  }
  isInChannel(id) {
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
          tmp5 = null != sessionId && voiceStateForChannel.sessionId === sessionId;
          const tmp7 = null != sessionId && voiceStateForChannel.sessionId === sessionId;
        }
        tmp3 = tmp5;
      }
      return tmp3;
    }
  }
  hasVideo(arg0) {
    let tmp2 = closure_15[arg0];
    const _Object = Object;
    if (null == tmp2) {
      const obj = {};
      tmp[arg0] = obj;
      tmp2 = obj;
    }
    return values(tmp2).length > 0;
  }
  getVoicePlatformForChannel(id, id2) {
    let tmp = null != sessionId;
    if (tmp) {
      let channelId;
      if (closure_16[id] != null) {
        if (closure_16[id][sessionId] != null) {
          channelId = tmp7.channelId;
        }
      }
      tmp = channelId;
    }
    if (id2 === id) {
      let tmp8;
      if (id === tmp) {
        const obj = MetaQuestUtils;
        tmp8 = obj.isMetaQuest() ? VoicePlatforms.QUEST : VoicePlatforms.MOBILE;
      }
      return tmp8;
    }
    tmp8 = closure_17["" + id2 + ":" + id];
  }
}
Object.defineProperty(VoiceStateStore.prototype, "userHasBeenMovedVersion", {
  get: function userHasBeenMovedVersion() {
    return c9;
  },
  set: undefined,
});
VoiceStateStore.displayName = "VoiceStateStore";
let obj = {
  CONNECTION_OPEN: function handleConnectionOpen(user) {
    user = user.user;
    let tmp = null != id;
    sessionId = user.sessionId;
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
    let user;
    let closure_0;
    let closure_1;
    closure_11 = {};
    closure_14 = {};
    closure_16 = {};
    closure_15 = {};
    ({ user, sessionId } = voiceStates);
    const entries = Object.entries(voiceStates.voiceStates);
    const tmp2 = entries[Symbol.iterator]();
    while (tmp2 !== undefined) {
      let tmp5 = _slicedToArray(tmp3, 2);
      closure_0 = tmp5[0];
      function _loop(arg0) {
        closure_0 = arg0;
        let tmp = updateVoiceState(closure_0, closure_1, () => {
          const tmp = new closure_2_6(closure_0);
          return tmp;
        });
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
    return _slicedToArray(
      updateVoiceState(channelId.guildId, id, (set) => {
        let result;
        if (set != null) {
          result = set.set("channelId", channelId);
        }
        return result;
      }),
      1,
    )[0];
  },
  VOICE_STATE_UPDATES: function handleVoiceStateUpdates(voiceStates) {
    voiceStates = voiceStates.voiceStates;
    return voiceStates.reduce((acc, guildId) => {
      let flag = acc;
      const tmp = closure_5(closure_18(guildId.guildId, guildId.userId, f89546), 3);
      if (tmp[0]) {
        const tmp5 =
          guildId.sessionId === closure_4 && null != tmp2 && null != tmp[2] && tmp[2].channelId !== tmp2.channelId;
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
    let obj = closure_11[ME];
    if (obj == null) {
      obj = {};
    }
    const obj2 = _modDef12;
    obj2.each(obj, (channelId, arg1) => {
      if (channelId.channelId === channelId) {
        updateVoiceState(ME, arg1, () => null);
      }
    });
  },
  CALL_DELETE: function handleCallDelete(channelId) {
    channelId = channelId.channelId;
    let obj = closure_11[ME];
    if (obj == null) {
      obj = {};
    }
    const obj2 = _modDef12;
    obj2.each(obj, (channelId, arg1) => {
      if (channelId.channelId === channelId) {
        updateVoiceState(ME, arg1, () => null);
      }
    });
  },
  PASSIVE_UPDATE_V2: function handlePassiveUpdateV2(removedVoiceStateUsers) {
    let flag = false;
    const tmp = removedVoiceStateUsers.voiceStates[Symbol.iterator]();
    while (tmp !== undefined) {
      let tmp5 = flag || _slicedToArray(mergeVoiceState(removedVoiceStateUsers.guildId, tmp2), 1)[0];
      flag = tmp5;
      continue;
    }
    removedVoiceStateUsers = removedVoiceStateUsers.removedVoiceStateUsers;
    for (const item10024 of removedVoiceStateUsers) {
      let tmp7 = updateVoiceState(removedVoiceStateUsers.guildId, item10024, () => null);
      flag = true;
      continue;
    }
    const tmp8 = flag;
    if (tmp8) {
      closure_10 = closure_10 + 1;
    }
    return flag;
  },
  RTC_CONNECTION_PLATFORM: function handleRTCConnectionPlatform(userId) {
    closure_17["" + userId.userId + ":" + userId.channelId] = userId.platform;
  },
};
const voiceStateStore = new VoiceStateStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("stores/VoiceStateStore.tsx");

export default voiceStateStore;
