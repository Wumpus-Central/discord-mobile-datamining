// discord_app/stores/views/SortedVoiceStateStore.tsx
import _slicedToArray from "_slicedToArray";
import initializeFromUserSettings from "initializeFromUserSettings";
import createdAt from "createdAt";
import fetchFingerprint from "fetchFingerprint";
import ensureGuildLoaded from "ensureGuildLoaded";
import trackCommunicationDisabled from "trackCommunicationDisabled";
import mergeGuildAvatar from "mergeGuildAvatar";
import updateVoiceState from "updateVoiceState";
import { ME } from "ME";
import { Store } from "initialize";

const require = arg1;
function getVoiceStatesForGuild(guildId) {
  let tmp = dependencyMap[guildId];
  if (null == tmp) {
    if (typeof SortedVoiceStates !== "function") {
      HermesBuiltin.throwTypeError();
    }
    const obj = Object.create(SortedVoiceStates.prototype);
    const _Set = Set;
    const set = new Set();
    obj[0] = set;
    const secondaryIndexMap = new require(3909) /* version */.SecondaryIndexMap((voiceState) => {
      const channelId = voiceState.voiceState.channelId;
      if (null != channelId) {
        const items = [channelId];
        let items1 = items;
      } else {
        items1 = [];
      }
      return items1;
    }, (comparator) => comparator.comparator);
    obj[1] = secondaryIndexMap;
    obj.guildId = guildId;
    dependencyMap[guildId] = obj;
    tmp = obj;
    const tmp15 = SortedVoiceStates;
  }
  return tmp;
}
function makeSortedVoiceState(voiceState, guildId, arr) {
  const user = authStore.getUser(arr);
  let tmp3 = user;
  if (null == user) {
    let obj = { id: null, username: "...", discriminator: null };
    obj[0] = arr;
    obj[2] = arr.slice(-5, -1);
    tmp3 = new createdAt(obj);
  }
  const member = store.getMember(guildId, tmp3.id);
  let nick;
  if (member != null) {
    nick = member.nick;
  }
  if (nick == null) {
    nick = importDefault(4124).getName(tmp3);
    const obj2 = importDefault(4124);
  }
  let str = "\u0001";
  if (voiceState.selfStream) {
    str = "\0";
  }
  obj = { voiceState, user: tmp3, member, comparator: "" + str + nick.toLowerCase() + "\0" + voiceState.userId, nick: null, connectedOn: null };
  let nick1;
  if (member != null) {
    nick1 = member.nick;
  }
  obj[4] = nick1;
  let connectedOn;
  if (arg3 != null) {
    connectedOn = arg3.connectedOn;
  }
  if (connectedOn == null) {
    const _Date = Date;
    connectedOn = Date.now();
  }
  obj[5] = connectedOn;
  if (tmp2) {
    obj._isPlaceholder = true;
  }
  return obj;
}
function handleUpdateUsers() {
  return importDefault(12).reduce(closure_13, (arg0, updateUsers) => updateUsers.updateUsers() || arg0, false);
}
function handleFavoritesChange() {
  let c14 = null;
  return null != c14;
}
function handleFavoriteChannelAppeared() {
  let tmp = null == _null;
  if (!tmp) {
    const unknownChannels = _null.unknownChannels;
    tmp = !unknownChannels.some((arg0) => null != channel.getChannel(arg0));
  }
  let flag = !tmp;
  if (!tmp) {
    _null = null;
    flag = true;
  }
  return flag;
}
const frozen = Object.freeze([]);
let closure_13 = {};
let c14 = null;
class SortedVoiceStates {
  constructor(arg0) {
    obj = Object.create(new.target.prototype);
    set = new Set();
    obj[0] = set;
    secondaryIndexMap = new require("version").SecondaryIndexMap((voiceState) => {
      const channelId = voiceState.voiceState.channelId;
      if (null != channelId) {
        const items = [channelId];
        let items1 = items;
      } else {
        items1 = [];
      }
      return items1;
    }, (comparator) => comparator.comparator);
    obj[1] = secondaryIndexMap;
    obj.guildId = global;
    return obj;
  }
}
const prototype = SortedVoiceStates.prototype;
prototype["updateVoiceState"] = function updateVoiceState(id) {
  const self = this;
  if (null != this._pending) {
    const _pending = self._pending;
    _pending.add(id);
    return false;
  } else {
    const voiceState = store2.getVoiceState(self.guildId, id);
    const _voiceStates4 = self._voiceStates;
    const value = _voiceStates4.get(id);
    const user = authStore.getUser(id);
    if (null != voiceState) {
      if (null != user) {
        if (null == value) {
          const _voiceStates3 = self._voiceStates;
          const result = _voiceStates3.set(id, makeSortedVoiceState(voiceState, self.guildId, id));
          return true;
        } else if (value.voiceState !== voiceState) {
          const member = store.getMember(self.guildId, user.id);
          let nick;
          if (member != null) {
            nick = member.nick;
          }
          if (nick == null) {
            let obj = importDefault(4124);
            nick = obj.getName(user);
          }
          const _voiceStates2 = self._voiceStates;
          obj = {};
          const merged = Object.assign(value);
          obj.member = member;
          let str = "\u0001";
          if (voiceState.selfStream) {
            str = "\0";
          }
          const _HermesInternal = HermesInternal;
          obj.comparator = "" + str + nick.toLowerCase() + "\0" + voiceState.userId;
          obj.nick = nick;
          obj.voiceState = voiceState;
          const result1 = _voiceStates2.set(id, obj);
          return true;
        }
      }
      return false;
    }
    if (null != value) {
      const _voiceStates = self._voiceStates;
      _voiceStates.delete(id);
      return true;
    }
  }
};
prototype["updateMember"] = function updateMember(arg0) {
  const self = this;
  if (null != this._pending) {
    const _pending = self._pending;
    _pending.add(arg0);
    return false;
  } else {
    const _voiceStates2 = self._voiceStates;
    const value = _voiceStates2.get(arg0);
    const user = authStore.getUser(arg0);
    if (null != value) {
      if (null != user) {
        let member = store.getMember(self.guildId, user.id);
        let nick;
        if (member != null) {
          nick = member.nick;
        }
        member = value.member;
        let nick1;
        if (member != null) {
          nick1 = member.nick;
        }
        if (nick === nick1) {
          let avatar;
          if (member != null) {
            avatar = member.avatar;
          }
          const member2 = value.member;
          let avatar1;
          if (member2 != null) {
            avatar1 = member2.avatar;
          }
        }
        const voiceState = value.voiceState;
        let nick2;
        if (member != null) {
          nick2 = member.nick;
        }
        if (nick2 == null) {
          let obj = importDefault(4124);
          nick2 = obj.getName(user);
        }
        let str = "\u0001";
        if (voiceState.selfStream) {
          str = "\0";
        }
        const _HermesInternal = HermesInternal;
        const _voiceStates = self._voiceStates;
        obj = {};
        const combined = "" + str + nick2.toLowerCase() + "\0" + voiceState.userId;
        const merged = Object.assign(value);
        obj.member = member;
        obj.comparator = combined;
        let nick3;
        if (member != null) {
          nick3 = member.nick;
        }
        obj.nick = nick3;
        const result = _voiceStates.set(arg0, obj);
        return true;
      }
    }
    return false;
  }
};
prototype["updateUsers"] = function updateUsers() {
  const self = this;
  let reduced = null == this._pending;
  if (reduced) {
    let _voiceStates = this._voiceStates;
    const values = _voiceStates.values();
    reduced = values.reduce((arg0, user) => {
      user = outer1_9.getUser(user.user.id);
      let flag = arg0;
      if (null != user) {
        flag = arg0;
        if (user.user !== user) {
          const _voiceStates = self._voiceStates;
          const result = _voiceStates.set(user.id, outer1_16(user.voiceState, self.guildId, user.id, user));
          flag = true;
        }
      }
      return flag;
    }, false);
  }
  return reduced;
};
prototype["getUserIds"] = function getUserIds() {
  this.processPending();
  const _voiceStates = this._voiceStates;
  return _voiceStates.keys();
};
prototype["getVoiceStates"] = function getVoiceStates() {
  this.processPending();
  const _voiceStates = this._voiceStates;
  return _voiceStates.indexes();
};
prototype["getVoiceStatesForChannel"] = function getVoiceStatesForChannel(arg0) {
  this.processPending();
  const _voiceStates = this._voiceStates;
  let values = _voiceStates.values(arg0);
  if (0 === values.length) {
    values = frozen;
  }
  return values;
};
prototype["countVoiceStatesForChannel"] = function countVoiceStatesForChannel(arg0) {
  this.processPending();
  const _voiceStates = this._voiceStates;
  return _voiceStates.size(arg0);
};
prototype["getVersion"] = function getVersion() {
  this.processPending();
  return this._voiceStates.version;
};
prototype["processPending"] = function processPending() {
  let self = this;
  self = this;
  if (null != this._pending) {
    const _pending = self._pending;
    self._pending = undefined;
    const item = _pending.forEach((arg0) => self.updateVoiceState(arg0));
  }
};
class SortedVoiceStateStore extends Store {
}
const prototype2 = SortedVoiceStateStore.prototype;
prototype2["initialize"] = function initialize() {
  let closure_13 = {};
  let c14 = null;
  const allVoiceStates = store2.getAllVoiceStates();
  const keys = importDefault(11).keys(allVoiceStates);
  const item = keys.forEach((arg0) => {
    const allVoiceStates = arg0;
    const keys = Object.keys(allVoiceStates[arg0]);
    const item = keys.forEach((arg0) => {
      let tmp = callback;
      if (callback == null) {
        tmp = outer1_11;
      }
      let obj = outer1_13[tmp];
      if (null == obj) {
        if (typeof outer1_17 !== "function") {
          HermesBuiltin.throwTypeError();
        }
        obj = Object.create(outer1_17.prototype);
        const _Set = Set;
        const set = new Set();
        obj[0] = set;
        const secondaryIndexMap = new callback(outer1_2[10]).SecondaryIndexMap((voiceState) => {
          const channelId = voiceState.voiceState.channelId;
          if (null != channelId) {
            const items = [channelId];
            let items1 = items;
          } else {
            items1 = [];
          }
          return items1;
        }, (comparator) => comparator.comparator);
        obj[1] = secondaryIndexMap;
        obj.guildId = tmp;
        outer1_13[tmp] = obj;
        const tmp16 = outer1_17;
      }
      obj.updateVoiceState(arg0);
    });
  });
  this.waitFor(fetchFingerprint, ensureGuildLoaded, initializeFromUserSettings, trackCommunicationDisabled, mergeGuildAvatar, store2);
  const items = [mergeGuildAvatar];
  this.syncWith(items, handleUpdateUsers);
  const items1 = [initializeFromUserSettings];
  this.syncWith(items1, handleFavoritesChange);
  const items2 = [ensureGuildLoaded];
  this.syncWith(items2, handleFavoriteChannelAppeared);
};
prototype2["getVoiceStates"] = function getVoiceStates(guildId) {
  let obj = require(1865) /* getFavoritesAwareGuildName */;
  if (obj.isFavoritesGuildId(guildId)) {
    let voiceStates = (function getFavoritesVoiceStates() {
      if (null != result) {
        if ((function isFavoritesResultCurrent() {
          if (null == closure_14) {
            return false;
          } else if (tmp.favoriteChannels !== favoriteChannels.getFavoriteChannels()) {
            return false;
          } else {
            const unknownChannels = tmp.unknownChannels;
            if (unknownChannels.some((arg0) => null != channel.getChannel(arg0))) {
              return false;
            } else {
              const versions = tmp.versions;
              const obj = versions[Symbol.iterator]();
              while (obj !== undefined) {
                let tmp6 = callback;
                let tmp7 = callback(tmp4, 2);
                let tmp8 = tmp7[1];
                let tmp9 = table;
                let obj2 = table[tmp7[0]];
                let version;
                if (obj2 != null) {
                  version = obj2.getVersion();
                }
                let tmp11 = tmp8;
                if (version !== tmp8) {
                  let tmp12 = obj;
                  obj.return();
                  let flag = false;
                  return false;
                }
              }
              return true;
            }
          }
        })()) {
          return result.result;
        }
      }
      favoriteChannels = favoriteChannels.getFavoriteChannels();
      const map = new Map();
      const items = [];
      let obj = {};
      const keys = callback2(11).keys(favoriteChannels);
      const iter = keys[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp4 = nextResult;
        let tmp5 = callback;
        let tmp6 = dependencyMap;
        if (favoriteChannels[nextResult].type !== callback(1306).FavoriteChannelType.CATEGORY) {
          let tmp19 = channel;
          let tmp20 = nextResult;
          channel = channel.getChannel(tmp4);
          let obj5 = channel;
          if (null != channel) {
            let tmp9 = channel;
            if (obj5.isVocal()) {
              let tmp10 = channel;
              let guildId = obj5.getGuildId();
              if (guildId == null) {
                guildId = closure_11;
              }
              let tmp12 = callback3;
              let obj4 = callback3(guildId);
              result = map.set(guildId, obj4.getVersion());
              let tmp14 = nextResult;
              let voiceStatesForChannel = obj4.getVoiceStatesForChannel(tmp4);
              if (voiceStatesForChannel.length > 0) {
                let tmp16 = nextResult;
                let tmp17 = voiceStatesForChannel;
                obj[tmp4] = tmp15;
              }
            }
          } else {
            let tmp7 = nextResult;
            let arr = items.push(tmp4);
          }
        }
        continue;
      }
      result = { favoriteChannels, versions: map, unknownChannels: items, result: obj };
      return obj;
    })();
  } else {
    let tmp4 = guildId;
    if (guildId == null) {
      tmp4 = ME;
    }
    let obj2 = dependencyMap[tmp4];
    if (null == obj2) {
      if (typeof SortedVoiceStates !== "function") {
        HermesBuiltin.throwTypeError();
      }
      obj = Object.create(SortedVoiceStates.prototype);
      const _Set = Set;
      const set = new Set();
      obj[0] = set;
      const secondaryIndexMap = new require(3909) /* version */.SecondaryIndexMap((voiceState) => {
        const channelId = voiceState.voiceState.channelId;
        if (null != channelId) {
          const items = [channelId];
          let items1 = items;
        } else {
          items1 = [];
        }
        return items1;
      }, (comparator) => comparator.comparator);
      obj[1] = secondaryIndexMap;
      obj.guildId = tmp4;
      dependencyMap[tmp4] = obj;
      obj2 = obj;
      const tmp18 = SortedVoiceStates;
    }
    voiceStates = obj2.getVoiceStates();
  }
  return voiceStates;
};
prototype2["getAllVoiceStates"] = function getAllVoiceStates() {
  return closure_13;
};
prototype2["getVoiceStatesForChannel"] = function getVoiceStatesForChannel(getGuildId) {
  let guildId = getGuildId.getGuildId();
  if (guildId == null) {
    guildId = ME;
  }
  let obj = dependencyMap[guildId];
  if (null == obj) {
    if (typeof SortedVoiceStates !== "function") {
      HermesBuiltin.throwTypeError();
    }
    obj = Object.create(SortedVoiceStates.prototype);
    const _Set = Set;
    const set = new Set();
    obj[0] = set;
    const secondaryIndexMap = new require(3909) /* version */.SecondaryIndexMap((voiceState) => {
      const channelId = voiceState.voiceState.channelId;
      if (null != channelId) {
        const items = [channelId];
        let items1 = items;
      } else {
        items1 = [];
      }
      return items1;
    }, (comparator) => comparator.comparator);
    obj[1] = secondaryIndexMap;
    obj.guildId = guildId;
    dependencyMap[guildId] = obj;
    const tmp15 = SortedVoiceStates;
  }
  return obj.getVoiceStatesForChannel(getGuildId.id);
};
prototype2["getVoiceStatesForChannelAlt"] = function getVoiceStatesForChannelAlt(id, closure_0) {
  let tmp = closure_0;
  if (closure_0 == null) {
    tmp = ME;
  }
  let obj = dependencyMap[tmp];
  if (null == obj) {
    if (typeof SortedVoiceStates !== "function") {
      HermesBuiltin.throwTypeError();
    }
    obj = Object.create(SortedVoiceStates.prototype);
    const _Set = Set;
    const set = new Set();
    obj[0] = set;
    const secondaryIndexMap = new require(3909) /* version */.SecondaryIndexMap((voiceState) => {
      const channelId = voiceState.voiceState.channelId;
      if (null != channelId) {
        const items = [channelId];
        let items1 = items;
      } else {
        items1 = [];
      }
      return items1;
    }, (comparator) => comparator.comparator);
    obj[1] = secondaryIndexMap;
    obj.guildId = tmp;
    dependencyMap[tmp] = obj;
    const tmp15 = SortedVoiceStates;
  }
  return obj.getVoiceStatesForChannel(id);
};
prototype2["countVoiceStatesForChannel"] = function countVoiceStatesForChannel(arg0) {
  channel = channel.getChannel(arg0);
  let num = 0;
  if (null != channel) {
    let guildId = channel.getGuildId();
    if (guildId == null) {
      guildId = ME;
    }
    let obj2 = dependencyMap[guildId];
    if (null == obj2) {
      if (typeof SortedVoiceStates !== "function") {
        HermesBuiltin.throwTypeError();
      }
      const obj = Object.create(SortedVoiceStates.prototype);
      const _Set = Set;
      const set = new Set();
      obj[0] = set;
      const secondaryIndexMap = new require(3909) /* version */.SecondaryIndexMap((voiceState) => {
        const channelId = voiceState.voiceState.channelId;
        if (null != channelId) {
          const items = [channelId];
          let items1 = items;
        } else {
          items1 = [];
        }
        return items1;
      }, (comparator) => comparator.comparator);
      obj[1] = secondaryIndexMap;
      obj.guildId = guildId;
      dependencyMap[guildId] = obj;
      obj2 = obj;
      const tmp16 = SortedVoiceStates;
    }
    num = obj2.countVoiceStatesForChannel(arg0);
  }
  return num;
};
prototype2["getVoiceStateVersion"] = function getVoiceStateVersion(arg0) {
  let tmp = arg0;
  if (arg0 == null) {
    tmp = ME;
  }
  let obj = dependencyMap[tmp];
  if (null == obj) {
    if (typeof SortedVoiceStates !== "function") {
      HermesBuiltin.throwTypeError();
    }
    obj = Object.create(SortedVoiceStates.prototype);
    const _Set = Set;
    const set = new Set();
    obj[0] = set;
    const secondaryIndexMap = new require(3909) /* version */.SecondaryIndexMap((voiceState) => {
      const channelId = voiceState.voiceState.channelId;
      if (null != channelId) {
        const items = [channelId];
        let items1 = items;
      } else {
        items1 = [];
      }
      return items1;
    }, (comparator) => comparator.comparator);
    obj[1] = secondaryIndexMap;
    obj.guildId = tmp;
    dependencyMap[tmp] = obj;
    const tmp15 = SortedVoiceStates;
  }
  return obj.getVersion();
};
SortedVoiceStateStore.displayName = "SortedVoiceStateStore";
const sortedVoiceStateStore = new SortedVoiceStateStore(require("dispatcher"), {
  CONNECTION_OPEN: function handleConnectionOpen() {
    let closure_13 = {};
    let c14 = null;
  },
  OVERLAY_INITIALIZE: function handleOverlayInitialize() {
    let closure_13 = {};
    let c14 = null;
    let allVoiceStates = store2.getAllVoiceStates();
    let keys = importDefault(11).keys(allVoiceStates);
    let item = keys.forEach((arg0) => {
      const allVoiceStates = arg0;
      const keys = Object.keys(allVoiceStates[arg0]);
      const item = keys.forEach((arg0) => {
        let tmp = callback;
        if (callback == null) {
          tmp = outer1_11;
        }
        let obj = outer1_13[tmp];
        if (null == obj) {
          if (typeof outer1_17 !== "function") {
            HermesBuiltin.throwTypeError();
          }
          obj = Object.create(outer1_17.prototype);
          const _Set = Set;
          const set = new Set();
          obj[0] = set;
          const secondaryIndexMap = new callback(outer1_2[10]).SecondaryIndexMap((voiceState) => {
            const channelId = voiceState.voiceState.channelId;
            if (null != channelId) {
              const items = [channelId];
              let items1 = items;
            } else {
              items1 = [];
            }
            return items1;
          }, (comparator) => comparator.comparator);
          obj[1] = secondaryIndexMap;
          obj.guildId = tmp;
          outer1_13[tmp] = obj;
          const tmp16 = outer1_17;
        }
        obj.updateVoiceState(arg0);
      });
    });
  },
  VOICE_CHANNEL_SELECT: function handleVoiceChannelSelect(guildId) {
    guildId = guildId.guildId;
    id = id.getId();
    let updateVoiceStateResult = null != id;
    if (updateVoiceStateResult) {
      if (guildId == null) {
        guildId = ME;
      }
      let obj = dependencyMap[guildId];
      if (null == obj) {
        if (typeof SortedVoiceStates !== "function") {
          HermesBuiltin.throwTypeError();
        }
        obj = Object.create(SortedVoiceStates.prototype);
        const _Set = Set;
        const set = new Set();
        obj[0] = set;
        const secondaryIndexMap = new require(3909) /* version */.SecondaryIndexMap((voiceState) => {
          const channelId = voiceState.voiceState.channelId;
          if (null != channelId) {
            const items = [channelId];
            let items1 = items;
          } else {
            items1 = [];
          }
          return items1;
        }, (comparator) => comparator.comparator);
        obj[1] = secondaryIndexMap;
        obj.guildId = guildId;
        dependencyMap[guildId] = obj;
        const tmp17 = SortedVoiceStates;
      }
      updateVoiceStateResult = obj.updateVoiceState(id);
    }
    return updateVoiceStateResult;
  },
  VOICE_STATE_UPDATES: function handleVoiceStateUpdates(voiceStates) {
    voiceStates = voiceStates.voiceStates;
    return voiceStates.reduce((arg0, guildId) => {
      guildId = guildId.guildId;
      if (guildId == null) {
        guildId = closure_11;
      }
      let obj = table2[guildId];
      if (null == obj) {
        if (typeof closure_17 !== "function") {
          HermesBuiltin.throwTypeError();
        }
        obj = Object.create(closure_17.prototype);
        const _Set = Set;
        const set = new Set();
        obj[0] = set;
        const secondaryIndexMap = new callback(table[10]).SecondaryIndexMap((voiceState) => {
          const channelId = voiceState.voiceState.channelId;
          if (null != channelId) {
            const items = [channelId];
            let items1 = items;
          } else {
            items1 = [];
          }
          return items1;
        }, (comparator) => comparator.comparator);
        obj[1] = secondaryIndexMap;
        obj.guildId = guildId;
        table2[guildId] = obj;
        const tmp15 = closure_17;
      }
      return obj.updateVoiceState(guildId.userId) || arg0;
    }, false);
  },
  GUILD_MEMBER_UPDATE: function handleGuildMemberUpdate(guildId) {
    guildId = guildId.guildId;
    let obj = dependencyMap[guildId];
    if (null == obj) {
      if (typeof SortedVoiceStates !== "function") {
        HermesBuiltin.throwTypeError();
      }
      obj = Object.create(SortedVoiceStates.prototype);
      const _Set = Set;
      const set = new Set();
      obj[0] = set;
      const secondaryIndexMap = new require(3909) /* version */.SecondaryIndexMap((voiceState) => {
        const channelId = voiceState.voiceState.channelId;
        if (null != channelId) {
          const items = [channelId];
          let items1 = items;
        } else {
          items1 = [];
        }
        return items1;
      }, (comparator) => comparator.comparator);
      obj[1] = secondaryIndexMap;
      obj.guildId = guildId;
      dependencyMap[guildId] = obj;
      const tmp14 = SortedVoiceStates;
    }
    return obj.updateMember(guildId.user.id);
  },
  GUILD_CREATE: function handleGuildCreate(arg0) {
    delete tmp2[tmp];
  },
  GUILD_DELETE: function handleGuildDelete(arg0) {
    delete tmp2[tmp];
  },
  PASSIVE_UPDATE_V2: function handlePassiveUpdateV2(voiceStates) {
    let flag = false;
    let userIds;
    if (dependencyMap[voiceStates.guildId] != null) {
      userIds = obj.getUserIds();
    }
    voiceStates = voiceStates.voiceStates;
    let mapped;
    if (voiceStates != null) {
      mapped = voiceStates.map((userId) => userId.userId);
    }
    const set = new Set(userIds);
    const tmp4 = new Set(userIds);
    const set1 = new Set(mapped);
    const items = [...set1];
    const set2 = new Set(voiceStates.removedVoiceStateUsers);
    for (const item10051 of set3) {
      let tmp7 = getVoiceStatesForGuild;
      let obj3 = getVoiceStatesForGuild(arg0.guildId);
      let updateVoiceStateResult = obj3.updateVoiceState(item10051);
      if (!updateVoiceStateResult) {
        updateVoiceStateResult = flag;
      }
      flag = updateVoiceStateResult;
      continue;
    }
    for (const item10062 of tmp4) {
      let tmp9 = item10062;
      if (!set2.has(item10062)) {
        let tmp10 = getVoiceStatesForGuild;
        let obj4 = getVoiceStatesForGuild(arg0.guildId);
        let tmp11 = item10062;
        let updateMemberResult = obj4.updateMember(tmp9);
        if (!updateMemberResult) {
          updateMemberResult = flag;
        }
        flag = updateMemberResult;
      }
      continue;
    }
    return flag;
  }
});
let result = require("createdAt").fileFinishedImporting("stores/views/SortedVoiceStateStore.tsx");

export default sortedVoiceStateStore;
export const NO_VOICE_STATES = frozen;
export const makeMemberAndComparator = function makeMemberAndComparator(selfStream, member) {
  const obj = { member, comparator: null };
  let nick;
  if (member != null) {
    nick = member.nick;
  }
  if (nick == null) {
    nick = importDefault(4124).getName(arg2);
    const obj2 = importDefault(4124);
  }
  let str = "\u0001";
  if (selfStream.selfStream) {
    str = "\0";
  }
  obj[1] = "" + str + nick.toLowerCase() + "\0" + selfStream.userId;
  return obj;
};
export const getComparator = function getComparator(selfStream, str) {
  str = "\u0001";
  if (selfStream.selfStream) {
    str = "\0";
  }
  return "" + str + str.toLowerCase() + "\0" + selfStream.userId;
};
export { makeSortedVoiceState };