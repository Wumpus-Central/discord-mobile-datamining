// === Module 4914: SortedVoiceStateStore ===

// Module 4914 (SortedVoiceStateStore)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import _modDef12 from "module_12" /* 12 */;
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1085 */;
import preloaded_user_settings from "preloaded_user_settings" /* 1197 */;
import FavoritesUtils from "FavoritesUtils" /* 2077 */;
import SecondaryIndexMap from "SecondaryIndexMap" /* 4504 */;
import UserUtilsDefault from "UserUtils" /* 4722 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import FavoriteStore from "FavoriteStore" /* 2054 */;
import UserRecord from "UserRecord" /* 1391 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import GuildMemberStore from "GuildMemberStore" /* 2112 */;
import UserStore from "UserStore" /* 1377 */;
import VoiceStateStore from "VoiceStateStore" /* 4909 */;
import size from "module_2" /* 2 */;

let favoriteChannels, map, set, unknownChannels;

const f89584 = (voiceState) => {
  let items1;
  const channelId = voiceState.voiceState.channelId;
  if (null != channelId) {
    const items = [channelId];
    items1 = items;
  } else {
    items1 = [];
  }
  return items1;
};
const f89585 = (comparator) => comparator.comparator;
function getVoiceStatesForGuild(guildId) {
  let tmp = closure_13[guildId];
  if (null == tmp) {
    const self5 = this;
    if (typeof SortedVoiceStates === "function") {
      const merged = Object.assign({ _pending: null, _voiceStates: null });
      const _Set = Set;
      const self = this;
      const self2 = this;
      merged[0] = new Set();
      const self3 = this;
      const self4 = this;
      set = new Set();
      const secondaryIndexMap = new SecondaryIndexMap.SecondaryIndexMap(f89584, f89585);
      merged[1] = secondaryIndexMap;
      merged.guildId = guildId;
      closure_13[guildId] = merged;
      tmp = merged;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  return tmp;
}
function makeSortedVoiceState(voiceState, guildId, id, connectedOn) {
  let nick1;
  const user = UserStore.getUser(id);
  let tmp3 = user;
  const tmp2 = null == user;
  if (null == user) {
    const self = this;
    const self2 = this;
    const obj = { id, username: "...", discriminator: id.slice(-5, -1) };
    tmp3 = new UserRecord(obj);
  }
  const member = GuildMemberStore.getMember(guildId, tmp3.id);
  let nick;
  if (member != null) {
    nick = member.nick;
  }
  if (nick == null) {
    const obj2 = UserUtilsDefault;
    nick = obj2.getName(tmp3);
  }
  let str = "\u0001";
  if (voiceState.selfStream) {
    str = "\0";
  }
  const obj3 = { voiceState, user: tmp3, member, comparator: "" + str + nick.toLowerCase() + "\0" + voiceState.userId, nick: nick1, connectedOn };
  nick1 = undefined;
  if (member != null) {
    nick1 = member.nick;
  }
  connectedOn = undefined;
  if (connectedOn != null) {
    connectedOn = connectedOn.connectedOn;
  }
  if (connectedOn == null) {
    const _Date = Date;
    connectedOn = Date.now();
  }
  if (tmp2) {
    obj3._isPlaceholder = true;
  }
  return obj3;
}
function handleUpdateUsers() {
  const arr = _modDef12;
  return arr.reduce(closure_13, (arg0, updateUsers) => {
    const tmp = updateUsers.updateUsers() || arg0;
    return tmp;
  }, false);
}
function handleFavoritesChange() {
  let c14 = null;
  return null != c14;
}
function handleFavoriteChannelAppeared() {
  let channel;
  let tmp = null == unknownChannels;
  if (!tmp) {
    unknownChannels = unknownChannels.unknownChannels;
    tmp = !unknownChannels.some((item) => null != channel.getChannel(item));
  }
  let flag = !tmp;
  if (flag) {
    unknownChannels = null;
    flag = true;
  }
  return flag;
}
const ME = Constants.ME;
const frozen = Object.freeze([]);
let c14 = null;
class SortedVoiceStates {
  constructor(guildId) {
    const merged = Object.assign({ _pending: null, _voiceStates: null });
    merged[0] = new Set();
    new Set();
    const secondaryIndexMap = new SecondaryIndexMap.SecondaryIndexMap(f89584, f89585);
    merged[1] = secondaryIndexMap;
    merged.guildId = guildId;
    return merged;
  }
  updateVoiceState(id) {
    let str;
    const self = this;
    if (null != this._pending) {
      const _pending = self._pending;
      _pending.add(id);
      return false;
    } else {
      const voiceState = VoiceStateStore.getVoiceState(self.guildId, id);
      const _voiceStates4 = self._voiceStates;
      const value = _voiceStates4.get(id);
      const user = UserStore.getUser(id);
      if (null != voiceState) {
        if (null != user) {
          if (null == value) {
            const _voiceStates3 = self._voiceStates;
            const result = _voiceStates3.set(id, makeSortedVoiceState(voiceState, self.guildId, id));
            return true;
          } else if (value.voiceState !== voiceState) {
            const member = GuildMemberStore.getMember(self.guildId, user.id);
            let nick;
            if (member != null) {
              nick = member.nick;
            }
            if (nick == null) {
              const obj = UserUtilsDefault;
              nick = obj.getName(user);
            }
            const _voiceStates2 = self._voiceStates;
            const obj2 = { member, comparator: "" + str + nick.toLowerCase() + "\0" + voiceState.userId, nick, voiceState };
            set = _voiceStates2.set;
            const merged = Object.assign(value);
            str = "\u0001";
            if (voiceState.selfStream) {
              str = "\0";
            }
            const _HermesInternal = HermesInternal;
            const result1 = set(id, obj2);
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
  }
  updateMember(arg0) {
    let combined;
    let nick3;
    const self = this;
    if (null != this._pending) {
      const _pending = self._pending;
      _pending.add(arg0);
      return false;
    } else {
      const _voiceStates2 = self._voiceStates;
      const value = _voiceStates2.get(arg0);
      const user = UserStore.getUser(arg0);
      if (null != value) {
        if (null != user) {
          const member1 = GuildMemberStore.getMember(self.guildId, user.id);
          let nick;
          if (member1 != null) {
            nick = member1.nick;
          }
          const member = value.member;
          let nick1;
          if (member != null) {
            nick1 = member.nick;
          }
          if (nick === nick1) {
            let avatar;
            if (member1 != null) {
              avatar = member1.avatar;
            }
            const member2 = value.member;
            let avatar1;
            if (member2 != null) {
              avatar1 = member2.avatar;
            }
          }
          const voiceState = value.voiceState;
          let nick2;
          if (member1 != null) {
            nick2 = member1.nick;
          }
          if (nick2 == null) {
            const obj = UserUtilsDefault;
            nick2 = obj.getName(user);
          }
          let str = "\u0001";
          if (voiceState.selfStream) {
            str = "\0";
          }
          const _HermesInternal = HermesInternal;
          const _voiceStates = self._voiceStates;
          const obj2 = { member: member1, comparator: combined, nick: nick3 };
          combined = "" + str + nick2.toLowerCase() + "\0" + voiceState.userId;
          set = _voiceStates.set;
          const merged = Object.assign(value);
          nick3 = undefined;
          if (member1 != null) {
            nick3 = member1.nick;
          }
          const result = set(arg0, obj2);
          return true;
        }
      }
      return false;
    }
  }
  updateUsers() {
    const self = this;
    let reduced = null == this._pending;
    if (reduced) {
      let _voiceStates = this._voiceStates;
      const values = _voiceStates.values();
      let flag = false;
      reduced = values.reduce((acc, user) => {
        user = UserStore.getUser(user.user.id);
        let flag = acc;
        if (null != user) {
          flag = acc;
          if (user.user !== user) {
            const _voiceStates = self._voiceStates;
            const result = _voiceStates.set(user.id, makeSortedVoiceState(user.voiceState, self.guildId, user.id, user));
            flag = true;
          }
        }
        return flag;
      }, false);
    }
    return reduced;
  }
  getUserIds() {
    this.processPending();
    const _voiceStates = this._voiceStates;
    return _voiceStates.keys();
  }
  getVoiceStates() {
    this.processPending();
    const _voiceStates = this._voiceStates;
    return _voiceStates.indexes();
  }
  getVoiceStatesForChannel(arg0) {
    this.processPending();
    const _voiceStates = this._voiceStates;
    let values = _voiceStates.values(arg0);
    if (0 === values.length) {
      values = frozen;
    }
    return values;
  }
  countVoiceStatesForChannel(arg0) {
    this.processPending();
    const _voiceStates = this._voiceStates;
    return _voiceStates.size(arg0);
  }
  getVersion() {
    this.processPending();
    return this._voiceStates.version;
  }
  processPending() {
    const self = this;
    if (null != this._pending) {
      const _pending = self._pending;
      self._pending = undefined;
      const item = _pending.forEach((item) => self.updateVoiceState(item));
    }
  }
}
const prototype = SortedVoiceStates.prototype;
const Store = get_initializedDefault.Store;
class SortedVoiceStateStore extends Store {
  initialize() {
    closure_13 = {};
    let c14 = null;
    const allVoiceStates = VoiceStateStore.getAllVoiceStates();
    const obj = SnowflakeUtilsDefault;
    const keys = obj.keys(allVoiceStates);
    const item = keys.forEach((item) => {
      let closure_0 = item;
      const keys = Object.keys(allVoiceStates[item]);
      item = keys.forEach(function(item) {
        let tmp = closure_0;
        if (closure_0 == null) {
          tmp = closure_2_11;
        }
        let obj = closure_2_13[tmp];
        if (null == obj) {
          const self5 = this;
          if (typeof closure_2_17 === "function") {
            const merged = Object.assign({ _pending: null, _voiceStates: null });
            const _Set = Set;
            const self = this;
            const self2 = this;
            merged[0] = new Set();
            const self3 = this;
            const self4 = this;
            set = new Set();
            const secondaryIndexMap = new allVoiceStates(closure_2_2[10]).SecondaryIndexMap(f89584, f89585);
            merged[1] = secondaryIndexMap;
            merged.guildId = tmp;
            closure_2_13[tmp] = merged;
            obj = merged;
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        }
        obj.updateVoiceState(item);
      });
    });
    this.waitFor(AuthenticationStore, ChannelStore, FavoriteStore, GuildMemberStore, UserStore, VoiceStateStore);
    const items = [UserStore];
    this.syncWith(items, handleUpdateUsers);
    const items1 = [FavoriteStore];
    this.syncWith(items1, handleFavoritesChange);
    const items2 = [ChannelStore];
    this.syncWith(items2, handleFavoriteChannelAppeared);
  }
  getVoiceStates(guildId) {
    let voiceStates;
    function getFavoritesVoiceStates() {
      function isFavoritesResultCurrent() {
        if (null == closure_1_14) {
          return false;
        } else if (closure_1_14.favoriteChannels !== favoriteChannels.getFavoriteChannels()) {
          return false;
        } else {
          unknownChannels = closure_1_14.unknownChannels;
          if (unknownChannels.some((item) => null != channel.getChannel(item))) {
            return false;
          } else {
            const versions = closure_1_14.versions;
            const obj = versions[Symbol.iterator]();
            while (obj !== undefined) {
              let tmp7 = closure_1_3(tmp4, 2);
              let tmp8 = tmp7[1];
              let obj2 = closure_1_13[tmp7[0]];
              let version;
              if (obj2 != null) {
                version = obj2.getVersion();
              }
              if (version !== tmp8) {
                obj.return();
                let flag = false;
                return false;
              }
            }
            return true;
          }
        }
      }
      if (null != result) {
        if (isFavoritesResultCurrent()) {
          return result.result;
        }
      }
      favoriteChannels = favoriteChannels.getFavoriteChannels();
      map = new Map();
      const items = [];
      let obj = {};
      const obj3 = SnowflakeUtilsDefault;
      const keys = obj3.keys(favoriteChannels);
      const iter = keys[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp4 = nextResult;
        if (favoriteChannels[nextResult].type !== preloaded_user_settings.FavoriteChannelType.CATEGORY) {
          channel = channel.getChannel(tmp4);
          let obj5 = channel;
          if (null != channel) {
            if (obj5.isVocal()) {
              let guildId = obj5.getGuildId();
              if (guildId == null) {
                guildId = ME;
              }
              let obj4 = getVoiceStatesForGuild(guildId);
              result = map.set(guildId, obj4.getVersion());
              let voiceStatesForChannel = obj4.getVoiceStatesForChannel(tmp4);
              if (voiceStatesForChannel.length > 0) {
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
    }
    let obj = FavoritesUtils;
    if (obj.isFavoritesGuildId(guildId)) {
      voiceStates = getFavoritesVoiceStates();
    } else {
      let tmp4 = guildId;
      if (guildId == null) {
        tmp4 = ME;
      }
      let obj2 = closure_13[tmp4];
      if (null == obj2) {
        const self5 = this;
        if (typeof SortedVoiceStates === "function") {
          const merged = Object.assign({ _pending: null, _voiceStates: null });
          let tmp7 = globalThis;
          const _Set = Set;
          const self = this;
          const self2 = this;
          set = new Set();
          let tmp9 = set;
          merged[0] = set;
          const self3 = this;
          const self4 = this;
          const secondaryIndexMap = new SecondaryIndexMap.SecondaryIndexMap(f89584, f89585);
          let tmp11 = secondaryIndexMap;
          merged[1] = secondaryIndexMap;
          merged.guildId = tmp4;
          closure_13[tmp4] = merged;
          obj2 = merged;
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }
      voiceStates = obj2.getVoiceStates();
    }
    return voiceStates;
  }
  getAllVoiceStates() {
    return closure_13;
  }
  getVoiceStatesForChannel(getGuildId) {
    let guildId = getGuildId.getGuildId();
    const id = getGuildId.id;
    if (guildId == null) {
      guildId = ME;
    }
    let obj = closure_13[guildId];
    if (null == obj) {
      const self5 = this;
      if (typeof SortedVoiceStates === "function") {
        const merged = Object.assign({ _pending: null, _voiceStates: null });
        const _Set = Set;
        const self = this;
        const self2 = this;
        merged[0] = new Set();
        const self3 = this;
        const self4 = this;
        set = new Set();
        const secondaryIndexMap = new SecondaryIndexMap.SecondaryIndexMap(f89584, f89585);
        merged[1] = secondaryIndexMap;
        merged.guildId = guildId;
        closure_13[guildId] = merged;
        obj = merged;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
    return obj.getVoiceStatesForChannel(id);
  }
  getVoiceStatesForChannelAlt(id, guildId) {
    let tmp = guildId;
    if (guildId == null) {
      tmp = ME;
    }
    let obj = closure_13[tmp];
    if (null == obj) {
      const self5 = this;
      if (typeof SortedVoiceStates === "function") {
        const merged = Object.assign({ _pending: null, _voiceStates: null });
        const _Set = Set;
        const self = this;
        const self2 = this;
        merged[0] = new Set();
        const self3 = this;
        const self4 = this;
        set = new Set();
        const secondaryIndexMap = new SecondaryIndexMap.SecondaryIndexMap(f89584, f89585);
        merged[1] = secondaryIndexMap;
        merged.guildId = tmp;
        closure_13[tmp] = merged;
        obj = merged;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
    return obj.getVoiceStatesForChannel(id);
  }
  countVoiceStatesForChannel(arg0) {
    const channel = ChannelStore.getChannel(arg0);
    let num = 0;
    if (null != channel) {
      let guildId = channel.getGuildId();
      if (guildId == null) {
        guildId = ME;
      }
      let obj2 = closure_13[guildId];
      if (null == obj2) {
        const self5 = this;
        if (typeof SortedVoiceStates === "function") {
          const merged = Object.assign({ _pending: null, _voiceStates: null });
          const _Set = Set;
          const self = this;
          const self2 = this;
          merged[0] = new Set();
          const self3 = this;
          const self4 = this;
          set = new Set();
          const secondaryIndexMap = new SecondaryIndexMap.SecondaryIndexMap(f89584, f89585);
          merged[1] = secondaryIndexMap;
          merged.guildId = guildId;
          closure_13[guildId] = merged;
          obj2 = merged;
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }
      num = obj2.countVoiceStatesForChannel(arg0);
    }
    return num;
  }
  getVoiceStateVersion(arg0) {
    let tmp = arg0;
    if (arg0 == null) {
      tmp = ME;
    }
    let obj = closure_13[tmp];
    if (null == obj) {
      const self5 = this;
      if (typeof SortedVoiceStates === "function") {
        const merged = Object.assign({ _pending: null, _voiceStates: null });
        const _Set = Set;
        const self = this;
        const self2 = this;
        merged[0] = new Set();
        const self3 = this;
        const self4 = this;
        set = new Set();
        const secondaryIndexMap = new SecondaryIndexMap.SecondaryIndexMap(f89584, f89585);
        merged[1] = secondaryIndexMap;
        merged.guildId = tmp;
        closure_13[tmp] = merged;
        obj = merged;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
    return obj.getVersion();
  }
}
const prototype2 = SortedVoiceStateStore.prototype;
SortedVoiceStateStore.displayName = "SortedVoiceStateStore";
let obj = {
  CONNECTION_OPEN: function handleConnectionOpen() {
    closure_13 = {};
    let c14 = null;
  },
  OVERLAY_INITIALIZE: function handleOverlayInitialize() {
    closure_13 = {};
    let c14 = null;
    const allVoiceStates = VoiceStateStore.getAllVoiceStates();
    let obj = SnowflakeUtilsDefault;
    let keys = obj.keys(allVoiceStates);
    let item = keys.forEach((item) => {
      let closure_0 = item;
      const keys = Object.keys(allVoiceStates[item]);
      item = keys.forEach(function(item) {
        let tmp = closure_0;
        if (closure_0 == null) {
          tmp = closure_2_11;
        }
        let obj = closure_2_13[tmp];
        if (null == obj) {
          const self5 = this;
          if (typeof closure_2_17 === "function") {
            const merged = Object.assign({ _pending: null, _voiceStates: null });
            const _Set = Set;
            const self = this;
            const self2 = this;
            merged[0] = new Set();
            const self3 = this;
            const self4 = this;
            set = new Set();
            const secondaryIndexMap = new allVoiceStates(closure_2_2[10]).SecondaryIndexMap(f89584, f89585);
            merged[1] = secondaryIndexMap;
            merged.guildId = tmp;
            closure_2_13[tmp] = merged;
            obj = merged;
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        }
        obj.updateVoiceState(item);
      });
    });
  },
  VOICE_CHANNEL_SELECT: function handleVoiceChannelSelect(guildId) {
    guildId = guildId.guildId;
    const id = AuthenticationStore.getId();
    let updateVoiceStateResult = null != id;
    if (updateVoiceStateResult) {
      if (guildId == null) {
        guildId = ME;
      }
      let obj = closure_13[guildId];
      if (null == obj) {
        const self5 = this;
        if (typeof SortedVoiceStates === "function") {
          const merged = Object.assign({ _pending: null, _voiceStates: null });
          const _Set = Set;
          const self = this;
          const self2 = this;
          merged[0] = new Set();
          const self3 = this;
          const self4 = this;
          set = new Set();
          const secondaryIndexMap = new SecondaryIndexMap.SecondaryIndexMap(f89584, f89585);
          merged[1] = secondaryIndexMap;
          merged.guildId = guildId;
          closure_13[guildId] = merged;
          obj = merged;
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }
      updateVoiceStateResult = obj.updateVoiceState(id);
    }
    return updateVoiceStateResult;
  },
  VOICE_STATE_UPDATES: function handleVoiceStateUpdates(voiceStates) {
    voiceStates = voiceStates.voiceStates;
    return voiceStates.reduce(function(acc, guildId) {
      guildId = guildId.guildId;
      const userId = guildId.userId;
      if (guildId == null) {
        guildId = ME;
      }
      let obj = closure_1_13[guildId];
      if (null == obj) {
        const self5 = this;
        if (typeof SortedVoiceStates === "function") {
          const merged = Object.assign({ _pending: null, _voiceStates: null });
          const _Set = Set;
          const self = this;
          const self2 = this;
          merged[0] = new Set();
          const self3 = this;
          const self4 = this;
          set = new Set();
          const secondaryIndexMap = new SecondaryIndexMap.SecondaryIndexMap(f89584, f89585);
          merged[1] = secondaryIndexMap;
          merged.guildId = guildId;
          closure_1_13[guildId] = merged;
          obj = merged;
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }
      const tmp10 = obj.updateVoiceState(userId) || acc;
      return tmp10;
    }, false);
  },
  GUILD_MEMBER_UPDATE: function handleGuildMemberUpdate(guildId) {
    guildId = guildId.guildId;
    let obj = closure_13[guildId];
    const user = guildId.user;
    if (null == obj) {
      const self5 = this;
      if (typeof SortedVoiceStates === "function") {
        const merged = Object.assign({ _pending: null, _voiceStates: null });
        const _Set = Set;
        const self = this;
        const self2 = this;
        merged[0] = new Set();
        const self3 = this;
        const self4 = this;
        set = new Set();
        const secondaryIndexMap = new SecondaryIndexMap.SecondaryIndexMap(f89584, f89585);
        merged[1] = secondaryIndexMap;
        merged.guildId = guildId;
        closure_13[guildId] = merged;
        obj = merged;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
    return obj.updateMember(user.id);
  },
  GUILD_CREATE: function handleGuildCreate(arg0) {
    delete closure_13[arg0.guild.id];
  },
  GUILD_DELETE: function handleGuildDelete(arg0) {
    delete closure_13[arg0.guild.id];
  },
  PASSIVE_UPDATE_V2: function handlePassiveUpdateV2(voiceStates) {
    let flag = false;
    let userIds;
    const _Set = Set;
    if (closure_13[voiceStates.guildId] != null) {
      userIds = obj.getUserIds();
    }
    const _Set1 = new _Set(userIds);
    voiceStates = voiceStates.voiceStates;
    let mapped;
    const _Set2 = Set;
    if (voiceStates != null) {
      mapped = voiceStates.map((userId) => userId.userId);
    }
    const _Set21 = new _Set2(mapped);
    const items = [..._Set21];
    set = new Set(voiceStates.removedVoiceStateUsers);
    const set1 = new Set(items);
    const tmp4 = _Set1;
    for (const item10051 of set1) {
      let obj3 = getVoiceStatesForGuild(voiceStates.guildId);
      let updateVoiceStateResult = obj3.updateVoiceState(item10051) || flag;
      flag = updateVoiceStateResult;
      continue;
    }
    for (const item10062 of tmp4) {
      if (!set.has(item10062)) {
        let obj4 = getVoiceStatesForGuild(voiceStates.guildId);
        let updateMemberResult = obj4.updateMember(item10062) || flag;
        flag = updateMemberResult;
      }
      continue;
    }
    return flag;
  }
};
const sortedVoiceStateStore = new SortedVoiceStateStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("stores/views/SortedVoiceStateStore.tsx");

export default sortedVoiceStateStore;
export const NO_VOICE_STATES = frozen;
export const makeMemberAndComparator = function makeMemberAndComparator(selfStream, member, user) {
  let nick;
  let str;
  const obj = { member, comparator: "" + str + nick.toLowerCase() + "\0" + selfStream.userId };
  nick = undefined;
  if (member != null) {
    nick = member.nick;
  }
  if (nick == null) {
    const obj2 = UserUtilsDefault;
    nick = obj2.getName(user);
  }
  str = "\u0001";
  if (selfStream.selfStream) {
    str = "\0";
  }
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