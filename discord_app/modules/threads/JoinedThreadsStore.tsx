// === Module 4122: storeThread ===

// Module 4122 (storeThread)
import applyDefault from "apply" /* 12 */;
import initializeDefault from "initialize" /* 586 */;
import dispatcherDefault from "dispatcher" /* 706 */;
import createChannelRecord from "createChannelRecord" /* 1390 */;
import resetDefault from "reset" /* 4123 */;
import closure_3 from "fetchFingerprint" /* 1215 */;
import set from "set" /* 2 */;

function storeThread(channel) {
  let hasItem = ALL_CHANNEL_TYPES.has(channel.type);
  if (hasItem) {
    hasItem = null != channel.member;
  }
  if (hasItem) {
    const obj = { threadId: null, guildId: null, flags: null, muted: null, muteConfig: null, joinTimestamp: null };
    ({ id: obj[0], guild_id: obj[1] } = channel);
    obj[2] = channel.member.flags;
    obj[3] = channel.member.muted;
    obj[4] = channel.member.muteConfig;
    const _Date = Date;
    const date = new Date(channel.member.joinTimestamp);
    obj[5] = date;
    dependencyMap[channel.id] = obj;
    const id = channel.id;
    navigation.clearTimer(id);
    if (true === dependencyMap[id].muted) {
      const _Set2 = Set;
      set = new Set(set2);
      set2 = set;
      set.add(id);
      if (obj2.setTimer(id, tmp10.muteConfig, () => {
        closure_1_4[id].muted = false;
        set = new Set(set);
        set.delete(id);
        closure_1_8.emitChange();
      })) {
        dependencyMap[id].muted = false;
        const _Set3 = Set;
        const set1 = new Set(set2);
        set2 = set1;
        set1.delete(id);
      }
    } else {
      const _Set = Set;
      set2 = new Set(set2);
      set2.delete(id);
    }
    obj2 = navigation;
  }
}
function handleThreadListSyncOrSearchFinish(guildId) {
  guildId = guildId.guildId;
  const members = guildId.members;
  if (tmp) {
    const item = members.forEach((id) => {
      const obj = { threadId: id.id, guildId: id, flags: id.flags, muted: id.muted, muteConfig: id.muteConfig, joinTimestamp: new Date(id.joinTimestamp) };
      closure_1_4[id.id] = obj;
      id = id.id;
      closure_1_5.clearTimer(id);
      if (true === closure_1_4[id].muted) {
        const _Set2 = Set;
        set = new Set(set2);
        set2 = set;
        set.add(id);
        if (closure_1_5.setTimer(id, tmp2.muteConfig, () => {
          closure_1_4[id].muted = false;
          set = new Set(set);
          set.delete(id);
          closure_1_8.emitChange();
        })) {
          closure_1_4[id].muted = false;
          const _Set3 = Set;
          const set1 = new Set(set2);
          set2 = set1;
          set1.delete(id);
        }
      } else {
        const _Set = Set;
        set2 = new Set(set2);
        set2.delete(id);
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
      const item = members.forEach((id) => {
        const obj = { threadId: id.id, guildId: id, flags: id.flags, muted: id.muted, muteConfig: id.muteConfig, joinTimestamp: new Date(id.joinTimestamp) };
        closure_1_4[id.id] = obj;
        id = id.id;
        closure_1_5.clearTimer(id);
        if (true === closure_1_4[id].muted) {
          const _Set2 = Set;
          set = new Set(set2);
          set2 = set;
          set.add(id);
          if (closure_1_5.setTimer(id, tmp2.muteConfig, () => {
            closure_1_4[id].muted = false;
            set = new Set(set);
            set.delete(id);
            closure_1_8.emitChange();
          })) {
            closure_1_4[id].muted = false;
            const _Set3 = Set;
            const set1 = new Set(set2);
            set2 = set1;
            set1.delete(id);
          }
        } else {
          const _Set = Set;
          set2 = new Set(set2);
          set2.delete(id);
        }
      });
    });
  }
}
const ALL_CHANNEL_TYPES = createChannelRecord.ALL_CHANNEL_TYPES;
let closure_4 = {};
let closure_5 = new resetDefault();
let set = new Set();
const Store = initializeDefault.Store;
class JoinedThreadsStoreClass extends Store {
}
const prototype = JoinedThreadsStoreClass.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(closure_3);
};
prototype["hasJoined"] = function hasJoined(id) {
  return id in closure_4;
};
prototype["joinTimestamp"] = function joinTimestamp(id) {
  let joinTimestamp;
  if (dependencyMap[id] != null) {
    joinTimestamp = tmp.joinTimestamp;
  }
  return joinTimestamp;
};
prototype["flags"] = function flags(arg0) {
  let flags;
  if (dependencyMap[arg0] != null) {
    flags = tmp.flags;
  }
  return flags;
};
prototype["getInitialOverlayState"] = function getInitialOverlayState() {
  return Object.values(closure_4);
};
prototype["getMuteConfig"] = function getMuteConfig(arg0) {
  let muteConfig;
  if (dependencyMap[arg0] != null) {
    muteConfig = tmp.muteConfig;
  }
  return muteConfig;
};
prototype["getMutedThreads"] = function getMutedThreads() {
  return set;
};
prototype["isMuted"] = function isMuted(arg0) {
  return set.has(arg0);
};
JoinedThreadsStoreClass.displayName = "JoinedThreadsStore";
const joinedThreadsStoreClass = new JoinedThreadsStoreClass(dispatcherDefault, {
  CONNECTION_OPEN: function handleConnectionOpen(guilds) {
    navigation.reset();
    set = new Set();
    closure_4 = {};
    guilds = guilds.guilds;
    let item = guilds.forEach((threads) => {
      threads = threads.threads;
      if (threads != null) {
        const item = threads.forEach(closure_7);
      }
    });
  },
  OVERLAY_INITIALIZE: function handleOverlayInitialize(joinedThreads) {
    const mapped = applyDefault(joinedThreads.joinedThreads).map((joinTimestamp) => {
      const obj = {};
      const merged = Object.assign(joinTimestamp);
      obj.joinTimestamp = new Date(joinTimestamp.joinTimestamp);
      return obj;
    });
    const arr = applyDefault(joinedThreads.joinedThreads);
    closure_4 = mapped.keyBy("threadId").value();
  },
  GUILD_CREATE: function handleGuildCreate(guild) {
    guild = guild.guild;
    const id = guild.id;
    const obj = id(12)(closure_4);
    const rejectResult = id(12)(closure_4).reject((guildId) => guildId.guildId === id);
    closure_4 = id(12)(closure_4).reject((guildId) => guildId.guildId === id).keyBy("threadId").value();
    const threads = guild.threads;
    if (threads != null) {
      const item = threads.forEach(storeThread);
    }
  },
  GUILD_DELETE: function handleGuildDelete(guild) {
    const id = guild.guild.id;
    const obj = id(12)(closure_4);
    const rejectResult = id(12)(closure_4).reject((guildId) => guildId.guildId === id);
    closure_4 = id(12)(closure_4).reject((guildId) => guildId.guildId === id).keyBy("threadId").value();
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
      const id = channel.id;
      delete tmp2[tmp];
    } else {
      return false;
    }
  },
  THREAD_MEMBER_UPDATE: function handleThreadMemberUpdate(userId) {
    if (store.getId() !== userId.userId) {
      return false;
    } else {
      const obj = { threadId: null, guildId: null, flags: null, muted: null, muteConfig: null, joinTimestamp: null };
      ({ id: obj4[0], guildId: obj4[1], flags: obj4[2], muted: obj4[3], muteConfig: obj4[4] } = userId);
      const _Date = Date;
      const date = new Date(userId.joinTimestamp);
      obj[5] = date;
      dependencyMap[userId.id] = obj;
      const id = userId.id;
      navigation.clearTimer(id);
      if (true === dependencyMap[id].muted) {
        const _Set2 = Set;
        set = new Set(set2);
        set2 = set;
        set.add(id);
        if (navigation.setTimer(id, tmp24.muteConfig, () => {
          closure_1_4[id].muted = false;
          set = new Set(set);
          set.delete(id);
          closure_1_8.emitChange();
        })) {
          dependencyMap[id].muted = false;
          const _Set3 = Set;
          const set1 = new Set(set2);
          set2 = set1;
          set1.delete(id);
        }
      } else {
        const _Set = Set;
        set2 = new Set(set2);
        set2.delete(id);
      }
    }
  },
  THREAD_MEMBER_LOCAL_UPDATE: function handleThreadMemberLocalUpdate(arg0) {
    ({ id, guildId } = arg0);
    ({ userId, isJoining } = arg0);
    let tmp3 = store.getId() === userId;
    if (tmp3) {
      if (null === guildId) {
        tmp3 = tmp5;
      } else if (isJoining) {
        const obj = { threadId: null, guildId: null, flags: 0, muted: true, muteConfig: null, joinTimestamp: null };
        obj[0] = id;
        obj[1] = guildId;
        obj[4] = { end_time: "Array" };
        const _Date = Date;
        const date = new Date();
        guildId = date;
        obj[5] = date;
        tmp6[id] = obj;
      } else {
        delete tmp[tmp2];
      }
    }
    return tmp3;
  },
  THREAD_MEMBERS_UPDATE: function handleThreadMembersUpdate(removedMemberIds) {
    closure_0 = removedMemberIds;
    c1 = false;
    removedMemberIds = removedMemberIds.removedMemberIds;
    let hasItem;
    if (removedMemberIds != null) {
      hasItem = removedMemberIds.includes(store.getId());
    }
    if (hasItem) {
      hasItem = removedMemberIds.id in obj;
    }
    if (hasItem) {
      obj = {};
      let merged = Object.assign(obj);
      let id = removedMemberIds.id;
      delete tmp2[tmp];
      c1 = true;
    }
    const addedMembers = removedMemberIds.addedMembers;
    if (addedMembers != null) {
      const item = addedMembers.forEach((userId) => {
        if (userId.userId === closure_1_3.getId()) {
          obj = {};
          const merged = Object.assign(obj);
          obj = { threadId: null, guildId: null, flags: null, muted: null, muteConfig: null, joinTimestamp: null };
          ({ id: obj5[0], guildId: obj5[1] } = id);
          ({ flags: obj5[2], muted: obj5[3], muteConfig: obj5[4] } = userId);
          let tmp15 = globalThis;
          const _Date = Date;
          const date = new Date(userId.joinTimestamp);
          obj[5] = date;
          obj[id.id] = obj;
          id = id.id;
          let muteConfig = obj[id];
          closure_1_5.clearTimer(id);
          if (true === muteConfig.muted) {
            set = new tmp15.Set(set2);
            set2 = set;
            set.add(id);
            muteConfig = muteConfig.muteConfig;
            if (obj6.setTimer(id, muteConfig, () => {
              closure_1_4[id].muted = false;
              set = new Set(set);
              set.delete(id);
              closure_1_8.emitChange();
            })) {
              obj[id].muted = false;
              const set1 = new tmp15.Set(set2);
              tmp15 = set1;
              set2 = set1;
              set1.delete(id);
            }
          } else {
            const _Set = Set;
            set2 = new Set(set2);
            set2.delete(id);
          }
          c1 = true;
          obj6 = closure_1_5;
        }
      });
    }
    return c1;
  }
});
const result = set.fileFinishedImporting("modules/threads/JoinedThreadsStore.tsx");

export default joinedThreadsStoreClass;