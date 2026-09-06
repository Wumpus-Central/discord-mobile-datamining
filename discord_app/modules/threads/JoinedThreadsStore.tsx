// discord_app/modules/threads/JoinedThreadsStore.tsx
import _modDef12 from "../../../_runtime/metro/00012__.js";
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import ChannelRecord from "../../records/ChannelRecord.tsx";
import MuteTimersDefault from "../../lib/MuteTimers.tsx";
import AuthenticationStore from "../../stores/AuthenticationStore.tsx";
import size from "../../../_runtime/metro/00002__.js";

function storeThread(channel) {
  let hasItem = ALL_CHANNEL_TYPES.has(channel.type);
  if (hasItem) {
    hasItem = null != channel.member;
  }
  if (hasItem) {
    obj = { threadId: null, guildId: null, flags: null, muted: null, muteConfig: null, joinTimestamp: null };
    ({ id: obj.threadId, guild_id: obj.guildId } = channel);
    obj.flags = channel.member.flags;
    obj.muted = channel.member.muted;
    obj.muteConfig = channel.member.muteConfig;
    const _Date = Date;
    const date = new Date(channel.member.joinTimestamp);
    obj.joinTimestamp = date;
    obj[channel.id] = obj;
    const id = channel.id;
    navigation.clearTimer(id);
    if (true === obj[id].muted) {
      const _Set2 = Set;
      const set = new Set(set2);
      set2 = set;
      set.add(id);
      if (
        obj2.setTimer(id, tmp10.muteConfig, () => {
          dependencyMap[id].muted = false;
          set = new Set(set);
          set.delete(id);
          closure_2_8.emitChange();
        })
      ) {
        obj[id].muted = false;
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
      obj = {
        threadId: id.id,
        guildId,
        flags: id.flags,
        muted: id.muted,
        muteConfig: id.muteConfig,
        joinTimestamp: new Date(id.joinTimestamp),
      };
      obj[id.id] = obj;
      id = id.id;
      closure_5.clearTimer(id);
      if (true === obj[id].muted) {
        const _Set2 = Set;
        const set = new Set(set2);
        set2 = set;
        set.add(id);
        if (
          closure_5.setTimer(id, tmp2.muteConfig, () => {
            dependencyMap[id].muted = false;
            set = new Set(set);
            set.delete(id);
            closure_2_8.emitChange();
          })
        ) {
          obj[id].muted = false;
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
        obj = {
          threadId: id.id,
          guildId,
          flags: id.flags,
          muted: id.muted,
          muteConfig: id.muteConfig,
          joinTimestamp: new Date(id.joinTimestamp),
        };
        dependencyMap[id.id] = obj;
        id = id.id;
        navigation.clearTimer(id);
        if (true === dependencyMap[id].muted) {
          const _Set2 = Set;
          set = new Set(set2);
          set2 = set;
          set.add(id);
          if (
            navigation.setTimer(id, tmp2.muteConfig, () => {
              dependencyMap[id].muted = false;
              set = new Set(set);
              set.delete(id);
              closure_2_8.emitChange();
            })
          ) {
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
      });
    });
  }
}
const ALL_CHANNEL_TYPES = ChannelRecord.ALL_CHANNEL_TYPES;
let obj = {};
const navigation = new MuteTimersDefault();
const tmp2 = new MuteTimersDefault();
const Store = initializeDefault.Store;
class JoinedThreadsStoreClass extends Store {}
const prototype = JoinedThreadsStoreClass.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(AuthenticationStore);
};
prototype["hasJoined"] = function hasJoined(id) {
  return id in obj;
};
prototype["joinTimestamp"] = function joinTimestamp(id) {
  let joinTimestamp;
  if (obj[id] != null) {
    joinTimestamp = tmp.joinTimestamp;
  }
  return joinTimestamp;
};
prototype["flags"] = function flags(arg0) {
  let flags;
  if (obj[arg0] != null) {
    flags = tmp.flags;
  }
  return flags;
};
prototype["getInitialOverlayState"] = function getInitialOverlayState() {
  return Object.values(obj);
};
prototype["getMuteConfig"] = function getMuteConfig(arg0) {
  let muteConfig;
  if (obj[arg0] != null) {
    muteConfig = tmp.muteConfig;
  }
  return muteConfig;
};
prototype["getMutedThreads"] = function getMutedThreads() {
  return set2;
};
prototype["isMuted"] = function isMuted(arg0) {
  return set2.has(arg0);
};
JoinedThreadsStoreClass.displayName = "JoinedThreadsStore";
obj = {
  CONNECTION_OPEN: function handleConnectionOpen(guilds) {
    navigation.reset();
    guilds = guilds.guilds;
    let item = guilds.forEach((threads) => {
      threads = threads.threads;
      if (threads != null) {
        const item = threads.forEach(storeThread);
      }
    });
  },
  OVERLAY_INITIALIZE: function handleOverlayInitialize(joinedThreads) {
    const mapped = _modDef12(joinedThreads.joinedThreads).map((joinTimestamp) => {
      obj = {};
      const merged = Object.assign(joinTimestamp);
      obj.joinTimestamp = new Date(joinTimestamp.joinTimestamp);
      return obj;
    });
    const arr = _modDef12(joinedThreads.joinedThreads);
    mapped.keyBy("threadId").value();
  },
  GUILD_CREATE: function handleGuildCreate(guild) {
    guild = guild.guild;
    const id = guild.id;
    obj = _modDef12(obj);
    const rejectResult = obj.reject((guildId) => guildId.guildId === id);
    obj = obj
      .reject((guildId) => guildId.guildId === id)
      .keyBy("threadId")
      .value();
    const threads = guild.threads;
    if (threads != null) {
      const item = threads.forEach(storeThread);
    }
  },
  GUILD_DELETE: function handleGuildDelete(guild) {
    const id = guild.guild.id;
    obj = _modDef12(obj);
    const rejectResult = obj.reject((guildId) => guildId.guildId === id);
    obj = obj
      .reject((guildId) => guildId.guildId === id)
      .keyBy("threadId")
      .value();
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
    if (AuthenticationStore.getId() !== userId.userId) {
      return false;
    } else {
      obj = { threadId: null, guildId: null, flags: null, muted: null, muteConfig: null, joinTimestamp: null };
      ({
        id: obj4.threadId,
        guildId: obj4.guildId,
        flags: obj4.flags,
        muted: obj4.muted,
        muteConfig: obj4.muteConfig,
      } = userId);
      const _Date = Date;
      const date = new Date(userId.joinTimestamp);
      obj.joinTimestamp = date;
      obj[userId.id] = obj;
      const id = userId.id;
      navigation.clearTimer(id);
      if (true === obj[id].muted) {
        const _Set2 = Set;
        const set = new Set(set2);
        set2 = set;
        set.add(id);
        if (
          navigation.setTimer(id, tmp24.muteConfig, () => {
            dependencyMap[id].muted = false;
            set = new Set(set);
            set.delete(id);
            closure_2_8.emitChange();
          })
        ) {
          obj[id].muted = false;
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
    let tmp3 = AuthenticationStore.getId() === userId;
    if (tmp3) {
      if (null === guildId) {
        tmp3 = tmp5;
      } else if (isJoining) {
        obj = { threadId: id, guildId, flags: 0, muted: true, muteConfig: { end_time: "Array" }, joinTimestamp: null };
        const _Date = Date;
        const date = new Date();
        guildId = date;
        obj.joinTimestamp = date;
        tmp6[id] = obj;
      } else {
        delete tmp[tmp2];
      }
    }
    return tmp3;
  },
  THREAD_MEMBERS_UPDATE: function handleThreadMembersUpdate(removedMemberIds) {
    const user = removedMemberIds;
    c1 = false;
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
      let id = removedMemberIds.id;
      delete tmp2[tmp];
      c1 = true;
    }
    const addedMembers = removedMemberIds.addedMembers;
    if (addedMembers != null) {
      const item = addedMembers.forEach((userId) => {
        if (userId.userId === AuthenticationStore.getId()) {
          obj = {};
          const merged = Object.assign(obj);
          obj = { threadId: null, guildId: null, flags: null, muted: null, muteConfig: null, joinTimestamp: null };
          ({ id: obj5.threadId, guildId: obj5.guildId } = user);
          ({ flags: obj5.flags, muted: obj5.muted, muteConfig: obj5.muteConfig } = userId);
          let tmp15 = globalThis;
          const _Date = Date;
          const date = new Date(userId.joinTimestamp);
          obj.joinTimestamp = date;
          obj[user.id] = obj;
          const id = user.id;
          let muteConfig = obj[id];
          closure_5.clearTimer(id);
          if (true === muteConfig.muted) {
            const set = new tmp15.Set(set2);
            set2 = set;
            set.add(id);
            muteConfig = muteConfig.muteConfig;
            if (
              obj6.setTimer(id, muteConfig, () => {
                dependencyMap[id].muted = false;
                set = new Set(set);
                set.delete(id);
                closure_2_8.emitChange();
              })
            ) {
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
          obj6 = closure_5;
        }
      });
    }
    return c1;
  },
};
const joinedThreadsStoreClass = new JoinedThreadsStoreClass(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/threads/JoinedThreadsStore.tsx");

export default joinedThreadsStoreClass;
