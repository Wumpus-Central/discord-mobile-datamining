// === Module 7633: handleUserUpdate ===

// Module 7633 (handleUserUpdate)
import applyDefault from "apply" /* 12 */;
import initializeDefault from "initialize" /* 589 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import isDiscordFrontendDevelopment from "isDiscordFrontendDevelopment" /* 1370 */;
import applyOverwritesAll from "applyOverwrites" /* 4029 */;
import nameFromUserDefault from "nameFromUser" /* 4223 */;
import closure_4 from "_slicedToArray" /* 32 */;
import closure_5 from "ensureGuildLoaded" /* 1391 */;
import closure_6 from "trackCommunicationDisabled" /* 1991 */;
import closure_7 from "handleConnectionOpenOrResumed" /* 7278 */;
import closure_8 from "sortActivity" /* 4564 */;
import closure_9 from "filterPlayingActivities" /* 7288 */;
import closure_10 from "mergeGuildAvatar" /* 1922 */;
import ME from "ME" /* 676 */;

require = arg1;
function handleUserUpdate(user) {
  const id = user.user.id;
  let flag = false;
  if (null != id) {
    let flag2 = false;
    let flag3 = false;
    const keys = Object.keys();
    if (keys !== undefined) {
      flag3 = flag2;
      while (keys[tmp] !== undefined) {
        let tmp6 = tmp5;
        let tmp7 = dependencyMap;
        let obj = dependencyMap[tmp5];
        if (!obj.updateUserId(id)) {
          continue;
        } else {
          flag2 = true;
          continue;
        }
        continue;
      }
    }
    flag = flag3;
  }
  return flag;
}
function handleGuildRoleUpdateOrDelete(arg0) {
  let flag = false;
  let flag2 = false;
  const keys = Object.keys();
  if (keys !== undefined) {
    flag2 = flag;
    while (keys[tmp] !== undefined) {
      let tmp8 = tmp5;
      let tmp9 = dependencyMap;
      if (dependencyMap[tmp5].guildId !== tmp2) {
        continue;
      } else {
        let tmp6 = dependencyMap;
        let obj = dependencyMap[tmp5];
        let rebuildResult = obj.rebuild();
        flag = true;
        continue;
      }
      continue;
    }
  }
  return flag2;
}
({ StatusTypes: unpackModuleId, Permissions: closure_12 } = ME);
let closure_13 = {};
class MemberList {
  constructor(arg0, arg1, arg2) {
    obj = Object.create(new.target.prototype);
    obj[1] = {};
    set = new Set();
    obj[2] = set;
    obj.guildId = global;
    obj.parentId = arg1;
    obj.threadId = importDefault;
    return obj;
  }
}
const prototype = MemberList.prototype;
prototype["rebuild"] = function rebuild(items) {
  let self = this;
  self = this;
  this.version = this.version + 1;
  this.sections = {};
  if (null != items) {
    const _Set = Set;
    const set = new Set(items);
    self.allUserIds = set;
  }
  const channel = store.getChannel(self.parentId);
  const tmp7 = self(12);
  const mapped = self(12)(Array.from(self.allUserIds)).map((userId) => {
    const tmp = closure_1_4(self.calculateNewState(userId, closure_0), 3);
    return { userId, sectionId: tmp[0], displayName: tmp[1], canViewChannel: tmp[2] };
  });
  const sorted = mapped.sort((userId, userId2) => self(table[9]).compare(userId.userId, userId2.userId));
  const tmp7Result = self(12)(Array.from(self.allUserIds));
  const item = sorted.sortBy((displayName) => displayName.displayName).forEach((userId) => {
    self.addUser(userId.userId, userId.sectionId, userId.displayName, userId.canViewChannel, true);
  });
};
prototype["updateMultipleUserIds"] = function updateMultipleUserIds(mapped, guildId) {
  let self = this;
  self = this;
  if (!(null == guildId || self.guildId === guildId)) {
    return tmp;
  } else {
    const found = mapped.filter((arg0) => {
      const allUserIds = self.allUserIds;
      return allUserIds.has(arg0);
    });
    let flag = 0 !== found.length;
    if (flag) {
      if (found.length <= 50) {
        const item = found.forEach((id) => self.updateUserId(id));
        flag = true;
      }
    }
    self.rebuild();
    flag = true;
  }
};
prototype["updateUserId"] = function updateUserId(id) {
  const self = this;
  const allUserIds = this.allUserIds;
  if (allUserIds.has(id)) {
    const tmp2 = callback(self.findOldState(id), 3);
    const first = tmp2[0];
    [tmp6, tmp7, tmp8] = callback(self.calculateNewState(id, store.getChannel(self.parentId)), 3);
    let flag2 = first !== tmp6 || tmp2[1] !== tmp7 || tmp2[2] !== tmp8;
    if (flag2) {
      self.removeUserId(id, first);
      self.addUser(id, tmp6, tmp7, tmp8);
      flag2 = true;
    }
    return flag2;
  } else {
    return false;
  }
};
prototype["addUserId"] = function addUserId(userId) {
  const tmp = callback(this.calculateNewState(userId, store.getChannel(this.parentId)), 3);
  this.addUser(userId, tmp[0], tmp[1], tmp[2]);
};
prototype["removeUserId"] = function removeUserId(id, first) {
  const self = this;
  const allUserIds = this.allUserIds;
  allUserIds.delete(id);
  if (null != first) {
    if (self.removeUserIdFromSection(id, first)) {
      return true;
    }
  }
  for (const key10011 in self.sections) {
    let tmp2 = key10011;
    if (!self.removeUserIdFromSection(arg0, key10011)) {
      continue;
    } else {
      let flag = true;
      return true;
    }
  }
  return false;
};
prototype["addUser"] = function addUser(arg0, arg1, arg2, arg3, arg4) {
  const self = this;
  const allUserIds = this.allUserIds;
  allUserIds.add(arg0);
  const user = authStore.getUser(arg0);
  if (null != user) {
    if ("" !== user.username) {
      if (!(arg1 in self.sections)) {
        let obj = { sectionId: null, usersById: null, userIds: null };
        obj[0] = arg1;
        obj[1] = {};
        obj[2] = [];
        self.sections[arg1] = obj;
      }
      let sum = self.sections[arg1];
      obj = { userId: null, displayName: null, canViewChannel: null };
      obj[0] = arg0;
      obj[1] = arg2;
      obj[2] = arg3;
      sum.usersById[arg0] = obj;
      if (arg4) {
        const userIds = sum.userIds;
        userIds.push(arg0);
      } else {
        const userIds1 = sum.userIds;
        userIds1.splice(self.findUserIdSortedPosition(sum, arg0, arg2), 0, arg0);
      }
      sum = self.version + 1;
      self.version = sum;
    }
  }
};
prototype["findUserIdSortedPosition"] = function findUserIdSortedPosition(sum, arg1, arg2) {
  const userIds = sum.userIds;
  let num = 0;
  if (0 < userIds.length) {
    while (true) {
      let tmp2 = userIds[num];
      let displayName = tmp[tmp2].displayName;
      let tmp3 = num;
      if (displayName === arg2) {
        if (arg1 < tmp2) {
          return num;
        }
      } else if (null == displayName) {
        if (null != arg2) {
          return num;
        }
      } else if (null != arg2) {
        if (arg2 < displayName) {
          break;
        }
      }
      num = num + 1;
    }
    return num;
  }
  return userIds.length;
};
prototype["removeUserIdFromSection"] = function removeUserIdFromSection(id, key10011) {
  const self = this;
  closure_0 = id;
  let tmp4 = null != key10011;
  if (tmp4) {
    let flag = id in tmp3.usersById;
    if (flag) {
      const usersById = tmp3.usersById;
      delete tmp[tmp2];
      const userIds = tmp3.userIds;
      tmp3.userIds = userIds.filter((arg0) => arg0 !== closure_0);
      self.version = self.version + 1;
      flag = true;
    }
    tmp4 = flag;
  }
  return tmp4;
};
prototype["findOldState"] = function findOldState(id) {
  for (const key10004 in this.sections) {
    let tmp2 = key10004;
    let tmp3 = tmp.sections[key10004];
    if (!(arg0 in tmp3.usersById)) {
      continue;
    } else {
      let items = [key10004, , ];
      ({ displayName: arr[1], canViewChannel: arr[2] } = tmp3.usersById[arg0]);
      return items;
    }
  }
  const items1 = [undefined, undefined, false];
  return items1;
};
prototype["calculateNewState"] = function calculateNewState(userId, channel) {
  member = member.getMember(this.guildId, userId);
  const user = authStore.getUser(userId);
  const currentUser = authStore.getCurrentUser();
  let id;
  if (user != null) {
    id = user.id;
  }
  let id1;
  if (currentUser != null) {
    id1 = currentUser.id;
  }
  if (id === id1) {
    let status = status2.getStatus();
  } else {
    status = status.getStatus(userId, this.guildId);
  }
  let canResult = null != user && null != channel;
  if (canResult) {
    let obj = applyOverwritesAll;
    obj = { permission: null, user: null, context: null };
    obj[0] = constants2.VIEW_CHANNEL;
    obj[1] = user;
    obj[2] = channel;
    canResult = obj.can(obj);
  }
  let str = "offline";
  if (status !== constants.OFFLINE) {
    str = "offline";
    if (status !== constants.INVISIBLE) {
      let str2;
      if (member != null) {
        str2 = member.hoistRoleId;
      }
      if (str2 == null) {
        str2 = "online";
      }
      str = str2;
    }
  }
  let nick;
  if (member != null) {
    nick = member.nick;
  }
  if (nick == null) {
    nick = nameFromUserDefault.getName(user);
    const obj3 = nameFromUserDefault;
  }
  const items = [str, , ];
  let formatted;
  if (nick != null) {
    formatted = nick.toLowerCase();
  }
  items[1] = formatted;
  items[2] = canResult;
  return items;
};
const Store = initializeDefault.Store;
class ThreadMemberListStore extends Store {
}
const prototype2 = ThreadMemberListStore.prototype;
prototype2["initialize"] = function initialize() {
  this.waitFor(closure_5, closure_6, closure_7, closure_8, closure_9, closure_10);
  const items = [closure_7];
  this.syncWith(items, () => {
    subscribedThreadIds = subscribedThreadIds.getSubscribedThreadIds();
    let flag = false;
    let flag2 = false;
    const keys = Object.keys();
    if (keys !== undefined) {
      flag2 = flag;
      while (keys[tmp] !== undefined) {
        let tmp8 = tmp6;
        if (subscribedThreadIds.has(tmp6)) {
          continue;
        } else {
          let tmp7 = closure_13;
          delete tmp2[tmp3];
          flag = true;
          continue;
        }
        continue;
      }
    }
    return flag2;
  });
  const items1 = [closure_9];
  this.syncWith(items1, () => {
    currentUser = currentUser.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    let flag = false;
    if (null != id) {
      let flag2 = false;
      let flag3 = false;
      const keys = Object.keys();
      if (keys !== undefined) {
        flag3 = flag2;
        while (keys[tmp] !== undefined) {
          let tmp8 = tmp7;
          let tmp9 = table;
          let obj = table[tmp7];
          if (!obj.updateUserId(id)) {
            continue;
          } else {
            flag2 = true;
            continue;
          }
          continue;
        }
      }
      flag = flag3;
    }
    return flag;
  });
};
prototype2["getMemberListVersion"] = function getMemberListVersion(closure_0) {
  let version;
  if (dependencyMap[closure_0] != null) {
    version = tmp.version;
  }
  return version;
};
prototype2["getMemberListSections"] = function getMemberListSections(closure_0) {
  let sections;
  if (dependencyMap[closure_0] != null) {
    sections = tmp.sections;
  }
  return sections;
};
prototype2["canUserViewChannel"] = function canUserViewChannel(arg0, arg1, arg2) {
  if (null == dependencyMap[arg0]) {
    return false;
  } else {
    let tmp4;
    if (tmp.sections[arg1] != null) {
      tmp4 = tmp3.usersById[arg2];
    }
    let flag;
    if (tmp4 != null) {
      flag = tmp4.canViewChannel;
    }
    if (flag == null) {
      flag = false;
    }
    return flag;
  }
};
ThreadMemberListStore.displayName = "ThreadMemberListStore";
const threadMemberListStore = new ThreadMemberListStore(dispatcherDefault, {
  CONNECTION_OPEN: function handleConnectionOpen() {
    closure_13 = {};
  },
  THREAD_MEMBERS_UPDATE: function handleThreadMembersUpdate(id) {
    closure_0 = id;
    if (id.id in closure_13) {
      const addedMembers = id.addedMembers;
      if (addedMembers != null) {
        const item = addedMembers.forEach((userId) => closure_1_13[user.id].addUserId(userId.userId));
      }
      const removedMemberIds = id.removedMemberIds;
      if (removedMemberIds != null) {
        const item1 = removedMemberIds.forEach((id) => closure_1_13[user.id].removeUserId(id));
      }
    } else {
      return false;
    }
  },
  THREAD_UPDATE: function handleThreadUpdate(channel) {
    channel = channel.channel;
    if (channel.id in closure_13) {
      const threadMetadata = channel.threadMetadata;
      let archived;
      if (threadMetadata != null) {
        archived = threadMetadata.archived;
      }
      if (true === archived) {
        const id = channel.id;
        delete tmp2[tmp];
      }
    }
    return false;
  },
  THREAD_DELETE: function handleThreadDelete(channel) {
    channel = channel.channel;
    if (channel.id in closure_13) {
      const id = channel.id;
      delete tmp2[tmp];
    } else {
      return false;
    }
  },
  CHANNEL_UPDATES: function handleChannelUpdates(channels) {
    channels = channels.channels;
    let flag = false;
    let flag2 = false;
    const keys = Object.keys();
    if (keys !== undefined) {
      flag2 = flag;
      while (keys[tmp] !== undefined) {
        let tmp7 = tmp4;
        let tmp8 = dependencyMap;
        if (!set.has(dependencyMap[tmp4].parentId)) {
          continue;
        } else {
          let tmp5 = dependencyMap;
          let obj2 = dependencyMap[tmp4];
          let rebuildResult = obj2.rebuild();
          flag = true;
          continue;
        }
        continue;
      }
    }
    return flag2;
  },
  THREAD_MEMBER_LIST_UPDATE: function handleThreadMemberListUpdate(guildId) {
    ({ threadId, members } = guildId);
    const channel = store.getChannel(threadId);
    let parent_id;
    if (channel != null) {
      parent_id = channel.parent_id;
    }
    if (null != parent_id) {
      if (typeof MemberList !== "function") {
        HermesBuiltin.throwTypeError();
      }
      let obj = Object.create(MemberList.prototype);
      obj[1] = {};
      const _Set = Set;
      const set = new Set();
      obj[2] = set;
      obj.guildId = guildId.guildId;
      obj.parentId = parent_id;
      obj.threadId = threadId;
      dependencyMap[threadId] = obj;
      obj = dependencyMap[threadId];
      obj.rebuild(members.map((user_id) => user_id.user_id));
      const tmp11 = dependencyMap;
      const tmp12 = MemberList;
    }
  },
  USER_UPDATE: handleUserUpdate,
  PRESENCE_UPDATES: function handleUserUpdates(updates) {
    updates = updates.updates;
    const mapped = updates.map((user) => {
      const id = user.user.id;
      let flag = false;
      if (null != id) {
        let flag2 = false;
        let flag3 = false;
        const keys = Object.keys();
        if (keys !== undefined) {
          flag3 = flag2;
          while (keys[tmp] !== undefined) {
            let tmp6 = tmp5;
            let tmp7 = table;
            let obj = table[tmp5];
            if (!obj.updateUserId(id)) {
              continue;
            } else {
              flag2 = true;
              continue;
            }
            continue;
          }
        }
        flag = flag3;
      }
      return flag;
    });
    return mapped.some((arg0) => arg0);
  },
  GUILD_MEMBER_ADD: handleUserUpdate,
  GUILD_MEMBER_UPDATE: handleUserUpdate,
  GUILD_MEMBER_REMOVE: handleUserUpdate,
  PRESENCES_REPLACE: function handlePresenceReplace(presences) {
    const mapped = applyDefault(presences.presences).map((user) => {
      user = user.user;
      let id;
      if (user != null) {
        id = user.id;
      }
      return id;
    });
    const found = mapped.filter(isDiscordFrontendDevelopment.isNotNullish);
    const arr = applyDefault(presences.presences);
    let flag = false;
    let flag2 = false;
    const iter = found.uniq();
    const keys = Object.keys();
    if (keys !== undefined) {
      flag2 = flag;
      while (keys[tmp] !== undefined) {
        let tmp6 = tmp5;
        let tmp7 = dependencyMap;
        let obj2 = dependencyMap[tmp5];
        if (!obj2.updateMultipleUserIds(valueResult)) {
          continue;
        } else {
          flag = true;
          continue;
        }
        continue;
      }
    }
    return flag2;
  },
  GUILD_MEMBERS_CHUNK_BATCH: function handleGuildMembersChunkBatch(arg0) {
    let flag = false;
    for (const item10009 of tmp) {
      ({ guildId, members } = item10009);
      let mapped = members.map((user) => user.user.id);
      let tmp3 = dependencyMap;
      for (const key10018 in closure_13) {
        let tmp4 = key10018;
        let tmp5 = dependencyMap;
        let obj = dependencyMap[key10018];
        let tmp6 = mapped;
        let tmp7 = guildId;
        if (!obj.updateMultipleUserIds(mapped, guildId)) {
          continue;
        } else {
          flag = true;
          continue;
        }
        continue;
      }
      continue;
    }
    return flag;
  },
  GUILD_ROLE_UPDATE: handleGuildRoleUpdateOrDelete,
  GUILD_ROLE_DELETE: handleGuildRoleUpdateOrDelete,
  PASSIVE_UPDATE_V2: function handlePassiveUpdateV2(members) {
    members = members.members;
    return members.reduce((arg0, user) => {
      const id = user.user.id;
      let flag = false;
      if (null != id) {
        let flag2 = false;
        let flag3 = false;
        const keys = Object.keys();
        if (keys !== undefined) {
          flag3 = flag2;
          while (keys[tmp] !== undefined) {
            let tmp6 = tmp5;
            let tmp7 = table;
            let obj = table[tmp5];
            if (!obj.updateUserId(id)) {
              continue;
            } else {
              flag2 = true;
              continue;
            }
            continue;
          }
        }
        flag = flag3;
      }
      if (!flag) {
        flag = arg0;
      }
      return flag;
    }, false);
  }
});
const result = require("set").fileFinishedImporting("modules/threads/ThreadMemberListStore.tsx");

export default threadMemberListStore;