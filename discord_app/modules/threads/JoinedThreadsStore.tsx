// === Module 4517: JoinedThreadsStore ===

// Module 4517 (JoinedThreadsStore)
import _modDef12 from "module_12" /* 12 */;
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import ChannelRecord from "ChannelRecord" /* 2055 */;
import MuteTimersDefault from "MuteTimers" /* 4518 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import size from "module_2" /* 2 */;

function storeThread(channel) {
  let date;
  const hasItem = ALL_CHANNEL_TYPES.has(channel.type) && null != channel.member;
  if (hasItem) {
    obj = { threadId: null, guildId: null, flags: channel.member.flags, muted: channel.member.muted, muteConfig: channel.member.muteConfig, joinTimestamp: date };
    ({ id: obj.threadId, guild_id: obj.guildId } = channel);
    const _Date = Date;
    const self = this;
    const self2 = this;
    const id = channel.id;
    obj[id] = obj;
    const id2 = channel.id;
    date = new Date(channel.member.joinTimestamp);
    navigation.clearTimer(id2);
    if (true === obj[id2].muted) {
      const _Set2 = Set;
      const self5 = this;
      const self6 = this;
      set = new Set(set2);
      set2 = set;
      set.add(id2);
      if (navigation.setTimer(id2, obj[id2].muteConfig, () => {
        closure_2_4[id2].muted = false;
        set = new Set(set);
        set.delete(id2);
        closure_2_8.emitChange();
      })) {
        obj[id2].muted = false;
        const _Set3 = Set;
        const self7 = this;
        const self8 = this;
        const set1 = new Set(set2);
        set2 = set1;
        set1.delete(id2);
      }
    } else {
      const _Set = Set;
      const self3 = this;
      const self4 = this;
      set2 = new Set(set2);
      set2.delete(id2);
    }
  }
}
function handleThreadListSyncOrSearchFinish(guildId) {
  guildId = guildId.guildId;
  const members = guildId.members;
  const tmp = null != guildId && null != members;
  if (tmp) {
    const item = members.forEach(function(id) {
      obj = { threadId: id.id, guildId, flags: id.flags, muted: id.muted, muteConfig: id.muteConfig, joinTimestamp: new Date(id.joinTimestamp) };
      id = id.id;
      obj[id] = obj;
      const id2 = id.id;
      new Date(id.joinTimestamp);
      navigation.clearTimer(id2);
      if (true === obj[id2].muted) {
        const _Set2 = Set;
        const self3 = this;
        const self4 = this;
        set = new Set(set2);
        set2 = set;
        set.add(id2);
        if (navigation.setTimer(id2, obj[id2].muteConfig, () => {
          closure_2_4[id2].muted = false;
          set = new Set(set);
          set.delete(id2);
          closure_2_8.emitChange();
        })) {
          obj[id2].muted = false;
          const _Set3 = Set;
          const self5 = this;
          const self6 = this;
          const set1 = new Set(set2);
          set2 = set1;
          set1.delete(id2);
        }
      } else {
        const _Set = Set;
        const self = this;
        const self2 = this;
        set2 = new Set(set2);
        set2.delete(id2);
      }
    });
  }
}
function handleSearchMessagesSuccess(guildId) {
  guildId = guildId.guildId;
  const data = guildId.data;
  if (null != guildId) {
    let item = data.forEach((members) => {
      members = members.members;
      const item = members.forEach(function(id) {
        obj = { threadId: id.id, guildId, flags: id.flags, muted: id.muted, muteConfig: id.muteConfig, joinTimestamp: new Date(id.joinTimestamp) };
        id = id.id;
        closure_2_4[id] = obj;
        const id2 = id.id;
        new Date(id.joinTimestamp);
        navigation.clearTimer(id2);
        if (true === closure_2_4[id2].muted) {
          const _Set2 = Set;
          const self3 = this;
          const self4 = this;
          set = new Set(set2);
          set2 = set;
          set.add(id2);
          if (navigation.setTimer(id2, closure_2_4[id2].muteConfig, () => {
            closure_2_4[id2].muted = false;
            set = new Set(set);
            set.delete(id2);
            closure_2_8.emitChange();
          })) {
            closure_2_4[id2].muted = false;
            const _Set3 = Set;
            const self5 = this;
            const self6 = this;
            const set1 = new Set(set2);
            set2 = set1;
            set1.delete(id2);
          }
        } else {
          const _Set = Set;
          const self = this;
          const self2 = this;
          set2 = new Set(set2);
          set2.delete(id2);
        }
      });
    });
  }
}
const ALL_CHANNEL_TYPES = ChannelRecord.ALL_CHANNEL_TYPES;
let obj = {};
const navigation = new MuteTimersDefault();
const tmp2 = new MuteTimersDefault();
let set = new Set();
let set2 = set;
const Store = get_initializedDefault.Store;
class JoinedThreadsStoreClass extends Store {
  initialize() {
    this.waitFor(AuthenticationStore);
  }
  hasJoined(id) {
    return id in obj;
  }
  joinTimestamp(id) {
    let joinTimestamp;
    if (obj[id] != null) {
      joinTimestamp = tmp.joinTimestamp;
    }
    return joinTimestamp;
  }
  flags(arg0) {
    let flags;
    if (obj[arg0] != null) {
      flags = tmp.flags;
    }
    return flags;
  }
  getInitialOverlayState() {
    return Object.values(obj);
  }
  getMuteConfig(arg0) {
    let muteConfig;
    if (obj[arg0] != null) {
      muteConfig = tmp.muteConfig;
    }
    return muteConfig;
  }
  getMutedThreads() {
    return set2;
  }
  isMuted(arg0) {
    return set2.has(arg0);
  }
}
const prototype = JoinedThreadsStoreClass.prototype;
JoinedThreadsStoreClass.displayName = "JoinedThreadsStore";
obj = {
  CONNECTION_OPEN: function handleConnectionOpen(guilds) {
    navigation.reset();
    guilds = guilds.guilds;
    new Set();
    let item = guilds.forEach((threads) => {
      threads = threads.threads;
      if (threads != null) {
        const item = threads.forEach(storeThread);
      }
    });
  },
  OVERLAY_INITIALIZE: function handleOverlayInitialize(joinedThreads) {
    const arr = _modDef12(joinedThreads.joinedThreads);
    const mapped = arr.map((joinTimestamp) => {
      obj = { joinTimestamp: new Date(joinTimestamp.joinTimestamp) };
      const merged = Object.assign(joinTimestamp);
      new Date(joinTimestamp.joinTimestamp);
      return obj;
    });
    const iter = mapped.keyBy("threadId");
    obj = iter.value();
  },
  GUILD_CREATE: function handleGuildCreate(guild) {
    guild = guild.guild;
    const id = guild.id;
    obj = _modDef12(obj);
    const rejectResult = obj.reject((guildId) => guildId.guildId === id);
    const iter = rejectResult.keyBy("threadId");
    obj = iter.value();
    const threads = guild.threads;
    if (threads != null) {
      const item = threads.forEach(storeThread);
    }
  },
  GUILD_DELETE: function handleGuildDelete(guild) {
    const id = guild.guild.id;
    obj = _modDef12(obj);
    const rejectResult = obj.reject((guildId) => guildId.guildId === id);
    const iter = rejectResult.keyBy("threadId");
    obj = iter.value();
  },
  THREAD_CREATE: function handleThreadCreate(channel) {
    storeThread(channel.channel);
  },
  THREAD_LIST_SYNC: handleThreadListSyncOrSearchFinish,
  SEARCH_MESSAGES_SUCCESS: handleSearchMessagesSuccess,
  MOD_VIEW_SEARCH_MESSAGES_SUCCESS: handleSearchMessagesSuccess,
  LOAD_THREADS_SUCCESS: handleThreadListSyncOrSearchFinish,
  LOAD_ARCHIVED_THREADS_SUCCESS: handleThreadListSyncOrSearchFinish,
  THREAD_DELETE: function handleThreadDelete(channel) {
    channel = channel.channel;
    if (channel.id in obj) {
      obj = {};
      const merged = Object.assign(obj);
      delete obj[channel.id];
    } else {
      return false;
    }
  },
  THREAD_MEMBER_UPDATE: function handleThreadMemberUpdate(userId) {
    let date;
    if (AuthenticationStore.getId() !== userId.userId) {
      return false;
    } else {
      obj = { threadId: null, guildId: null, flags: null, muted: null, muteConfig: null, joinTimestamp: date };
      ({ id: obj4.threadId, guildId: obj4.guildId, flags: obj4.flags, muted: obj4.muted, muteConfig: obj4.muteConfig } = userId);
      const _Date = Date;
      const self7 = this;
      const self8 = this;
      const id = userId.id;
      obj[id] = obj;
      const id2 = userId.id;
      date = new Date(userId.joinTimestamp);
      navigation.clearTimer(id2);
      if (true === obj[id2].muted) {
        const _Set2 = Set;
        const self3 = this;
        const self4 = this;
        set = new Set(set2);
        set2 = set;
        set.add(id2);
        if (navigation.setTimer(id2, obj[id2].muteConfig, () => {
          closure_2_4[id2].muted = false;
          set = new Set(set);
          set.delete(id2);
          closure_2_8.emitChange();
        })) {
          obj[id2].muted = false;
          const _Set3 = Set;
          const self5 = this;
          const self6 = this;
          const set1 = new Set(set2);
          set2 = set1;
          set1.delete(id2);
        }
      } else {
        const _Set = Set;
        const self = this;
        const self2 = this;
        set2 = new Set(set2);
        set2.delete(id2);
      }
    }
  },
  THREAD_MEMBER_LOCAL_UPDATE: function handleThreadMemberLocalUpdate(arg0) {
    let date;
    let guildId;
    let id;
    let isJoining;
    let userId;
    ({ id, guildId } = arg0);
    ({ userId, isJoining } = arg0);
    let tmp = AuthenticationStore.getId() === userId;
    if (tmp) {
      if (null !== guildId) {
        if (isJoining) {
          obj = { threadId: id, guildId, flags: 0, muted: true, muteConfig: { end_time: "r" }, joinTimestamp: date };
          const _Date = Date;
          const self = this;
          const self2 = this;
          obj[id] = obj;
          date = new Date();
        } else {
          delete obj[id];
        }
      }
      tmp = tmp3;
    }
    return tmp;
  },
  THREAD_MEMBERS_UPDATE: function handleThreadMembersUpdate(removedMemberIds) {
    let c1 = false;
    removedMemberIds = removedMemberIds.removedMemberIds;
    let hasItem;
    if (removedMemberIds != null) {
      hasItem = removedMemberIds.includes(AuthenticationStore.getId());
    }
    if (hasItem) {
      hasItem = removedMemberIds.id in obj;
    }
    if (hasItem) {
      obj = {};
      let merged = Object.assign(obj);
      delete obj[removedMemberIds.id];
      c1 = true;
    }
    const addedMembers = removedMemberIds.addedMembers;
    if (addedMembers != null) {
      const item = addedMembers.forEach(function(userId) {
        let date;
        if (userId.userId === AuthenticationStore.getId()) {
          obj = {};
          const merged = Object.assign(obj);
          const obj2 = { threadId: null, guildId: null, flags: null, muted: null, muteConfig: null, joinTimestamp: date };
          ({ id: obj5.threadId, guildId: obj5.guildId } = removedMemberIds);
          ({ flags: obj5.flags, muted: obj5.muted, muteConfig: obj5.muteConfig } = userId);
          const _Date = Date;
          const self7 = this;
          const self8 = this;
          const id = removedMemberIds.id;
          obj[id] = obj2;
          const id2 = removedMemberIds.id;
          date = new Date(userId.joinTimestamp);
          navigation.clearTimer(id2);
          if (true === obj[id2].muted) {
            const _Set2 = Set;
            const self3 = this;
            const self4 = this;
            set = new Set(set2);
            set2 = set;
            set.add(id2);
            if (navigation.setTimer(id2, obj[id2].muteConfig, () => {
              closure_2_4[id2].muted = false;
              set = new Set(set);
              set.delete(id2);
              closure_2_8.emitChange();
            })) {
              obj[id2].muted = false;
              const _Set3 = Set;
              const self5 = this;
              const self6 = this;
              const set1 = new Set(set2);
              set2 = set1;
              set1.delete(id2);
            }
          } else {
            const _Set = Set;
            const self = this;
            const self2 = this;
            set2 = new Set(set2);
            set2.delete(id2);
          }
          c1 = true;
        }
      });
    }
    return c1;
  }
};
const joinedThreadsStoreClass = new JoinedThreadsStoreClass(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/threads/JoinedThreadsStore.tsx");

export default joinedThreadsStoreClass;