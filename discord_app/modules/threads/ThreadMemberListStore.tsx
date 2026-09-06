// discord_app/modules/threads/ThreadMemberListStore.tsx
import _modDef12 from "../../../_runtime/metro/00012__.js";
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import GlobalUtils from "../../utils/GlobalUtils.tsx";
import PermissionUtilsAll from "../../utils/PermissionUtils.tsx";
import UserUtilsDefault from "../../utils/UserUtils.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import ChannelStore from "../../stores/ChannelStore.tsx";
import GuildMemberStore from "../../stores/GuildMemberStore.tsx";
import GuildSubscriptionsStore from "../../stores/GuildSubscriptionsStore.tsx";
import PresenceStore from "../../stores/PresenceStore.tsx";
import SelfPresenceStore from "../../stores/SelfPresenceStore.tsx";
import UserStore from "../../stores/UserStore.tsx";

require = fn;
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
      if (dependencyMap[tmp5].guildId !== tmp2) {
        continue;
      } else {
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
const Constants = fn(1074);
({ StatusTypes: closure_11, Permissions: closure_12 } = Constants);
const dependencyMap = {};
class MemberList {
  constructor(arg0, arg1, arg2) {
    merged = Object.assign({ version: 0, sections: null, allUserIds: null });
    merged[1] = {};
    set = new Set();
    merged[2] = set;
    merged.guildId = global;
    merged.parentId = fn;
    merged.threadId = importDefault;
    return merged;
  }
}
const prototype = MemberList.prototype;
prototype["rebuild"] = function rebuild(items) {
  const self = this;
  this.version = this.version + 1;
  this.sections = {};
  if (null != items) {
    const _Set = Set;
    const set = new Set(items);
    self.allUserIds = set;
  }
  const channel = ChannelStore.getChannel(self.parentId);
  const tmp7 = self(12);
  const mapped = self(12)(Array.from(self.allUserIds)).map((userId) => {
    const tmp = _slicedToArray(self.calculateNewState(userId, closure_0), 3);
    return { userId, sectionId: tmp[0], displayName: tmp[1], canViewChannel: tmp[2] };
  });
  const sorted = mapped.sort((userId, userId2) => self(dependencyMap[9]).compare(userId.userId, userId2.userId));
  const tmp7Result = self(12)(Array.from(self.allUserIds));
  const item = sorted
    .sortBy((displayName) => displayName.displayName)
    .forEach((userId) => {
      self.addUser(userId.userId, userId.sectionId, userId.displayName, userId.canViewChannel, true);
    });
};
prototype["updateMultipleUserIds"] = function updateMultipleUserIds(mapped, guildId) {
  const self = this;
  if (!(null == guildId || self.guildId === guildId)) {
    return tmp;
  } else {
    const found = mapped.filter((item) => {
      const allUserIds = self.allUserIds;
      return allUserIds.has(item);
    });
    let flag = 0 !== found.length;
    if (flag) {
      if (found.length <= 50) {
        const item = found.forEach((item) => self.updateUserId(item));
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
    const tmp2 = _slicedToArray(self.findOldState(id), 3);
    const first = tmp2[0];
    [tmp6, tmp7, tmp8] = _slicedToArray(self.calculateNewState(id, ChannelStore.getChannel(self.parentId)), 3);
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
  const tmp = _slicedToArray(this.calculateNewState(userId, ChannelStore.getChannel(this.parentId)), 3);
  this.addUser(userId, tmp[0], tmp[1], tmp[2]);
};
prototype["removeUserId"] = function removeUserId(item, key10011) {
  const self = this;
  const allUserIds = this.allUserIds;
  allUserIds.delete(item);
  if (null != key10011) {
    if (self.removeUserIdFromSection(item, key10011)) {
      return true;
    }
  }
  for (const key10011 in self.sections) {
    if (!self.removeUserIdFromSection(arg0, key10011)) {
      continue;
    } else {
      let flag = true;
      return true;
    }
  }
  return false;
};
prototype["addUser"] = function addUser(userId, sectionId, displayName, canViewChannel, arg4) {
  const self = this;
  const allUserIds = this.allUserIds;
  allUserIds.add(userId);
  const user = UserStore.getUser(userId);
  if (null != user) {
    if ("" !== user.username) {
      if (!(sectionId in self.sections)) {
        let obj = { sectionId, usersById: {}, userIds: [] };
        self.sections[sectionId] = obj;
      }
      let sum = self.sections[sectionId];
      obj = { userId, displayName, canViewChannel };
      sum.usersById[userId] = obj;
      if (arg4) {
        const userIds = sum.userIds;
        userIds.push(userId);
      } else {
        const userIds1 = sum.userIds;
        userIds1.splice(self.findUserIdSortedPosition(sum, userId, displayName), 0, userId);
      }
      sum = self.version + 1;
      self.version = sum;
    }
  }
};
prototype["findUserIdSortedPosition"] = function findUserIdSortedPosition(sum, userId, displayName) {
  const userIds = sum.userIds;
  let num = 0;
  if (0 < userIds.length) {
    while (true) {
      let tmp2 = userIds[num];
      displayName = tmp[tmp2].displayName;
      if (displayName === displayName) {
        if (userId < tmp2) {
          return num;
        }
      } else if (null == displayName) {
        if (null != displayName) {
          return num;
        }
      } else if (null != displayName) {
        if (displayName < displayName) {
          break;
        }
      }
      num = num + 1;
    }
    return num;
  }
  return userIds.length;
};
prototype["removeUserIdFromSection"] = function removeUserIdFromSection(item, key10011) {
  const self = this;
  closure_0 = item;
  let tmp4 = null != key10011;
  if (tmp4) {
    let flag = item in tmp3.usersById;
    if (flag) {
      const usersById = tmp3.usersById;
      delete tmp[tmp2];
      const userIds = tmp3.userIds;
      tmp3.userIds = userIds.filter((item) => item !== closure_0);
      self.version = self.version + 1;
      flag = true;
    }
    tmp4 = flag;
  }
  return tmp4;
};
prototype["findOldState"] = function findOldState(id) {
  for (const key10004 in this.sections) {
    let tmp3 = tmp.sections[key10004];
    if (!(arg0 in tmp3.usersById)) {
      continue;
    } else {
      let items = [key10004, ,];
      ({ displayName: arr[1], canViewChannel: arr[2] } = tmp3.usersById[arg0]);
      return items;
    }
  }
  const items1 = [undefined, undefined, false];
  return items1;
};
prototype["calculateNewState"] = function calculateNewState(userId, channel) {
  const member = GuildMemberStore.getMember(this.guildId, userId);
  const user = UserStore.getUser(userId);
  const currentUser = UserStore.getCurrentUser();
  let id;
  if (user != null) {
    id = user.id;
  }
  let id1;
  if (currentUser != null) {
    id1 = currentUser.id;
  }
  if (id === id1) {
    let status = SelfPresenceStore.getStatus();
  } else {
    status = PresenceStore.getStatus(userId, this.guildId);
  }
  let canResult = null != user && null != channel;
  if (canResult) {
    const obj = { permission: constants2.VIEW_CHANNEL, user, context: channel };
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
    nick = UserUtilsDefault.getName(user);
  }
  const items = [str, ,];
  let formatted;
  if (nick != null) {
    formatted = nick.toLowerCase();
  }
  items[1] = formatted;
  items[2] = canResult;
  return items;
};
const Store = initializeDefault.Store;
class ThreadMemberListStore extends Store {}
const prototype2 = ThreadMemberListStore.prototype;
prototype2["initialize"] = function initialize() {
  this.waitFor(ChannelStore, GuildMemberStore, GuildSubscriptionsStore, PresenceStore, SelfPresenceStore, UserStore);
  const items = [GuildSubscriptionsStore];
  this.syncWith(items, () => {
    subscribedThreadIds = subscribedThreadIds.getSubscribedThreadIds();
    let flag = false;
    let flag2 = false;
    const keys = Object.keys();
    if (keys !== undefined) {
      flag2 = flag;
      while (keys[tmp] !== undefined) {
        if (subscribedThreadIds.has(tmp6)) {
          continue;
        } else {
          delete tmp2[tmp3];
          flag = true;
          continue;
        }
        continue;
      }
    }
    return flag2;
  });
  const items1 = [SelfPresenceStore];
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
          let obj = dependencyMap[tmp7];
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
prototype2["getMemberListVersion"] = function getMemberListVersion(arg0) {
  let version;
  if (dependencyMap[arg0] != null) {
    version = tmp.version;
  }
  return version;
};
prototype2["getMemberListSections"] = function getMemberListSections(thread) {
  let sections;
  if (dependencyMap[thread] != null) {
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
const threadMemberListStore = new ThreadMemberListStore(DispatcherDefault, {
  CONNECTION_OPEN: function handleConnectionOpen() {
    closure_13 = {};
  },
  THREAD_MEMBERS_UPDATE: function handleThreadMembersUpdate(id) {
    const user = id;
    if (id.id in dependencyMap) {
      const addedMembers = id.addedMembers;
      if (addedMembers != null) {
        const item = addedMembers.forEach((userId) => dependencyMap[user.id].addUserId(userId.userId));
      }
      const removedMemberIds = id.removedMemberIds;
      if (removedMemberIds != null) {
        const item1 = removedMemberIds.forEach((item) => dependencyMap[user.id].removeUserId(item));
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
        if (!set.has(dependencyMap[tmp4].parentId)) {
          continue;
        } else {
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
    const channel = ChannelStore.getChannel(threadId);
    let parent_id;
    if (channel != null) {
      parent_id = channel.parent_id;
    }
    if (null != parent_id) {
      if (typeof MemberList === "function") {
        const merged = Object.assign({ version: 0, sections: null, allUserIds: null });
        merged[1] = {};
        const _Set = Set;
        const set = new Set();
        merged[2] = set;
        merged.guildId = guildId.guildId;
        merged.parentId = parent_id;
        merged.threadId = threadId;
        tmp11[threadId] = merged;
        dependencyMap[threadId].rebuild(members.map((user_id) => user_id.user_id));
      } else {
        throw new TypeError("Trying to call a non-function");
      }
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
    });
    return mapped.some((item) => item);
  },
  GUILD_MEMBER_ADD: handleUserUpdate,
  GUILD_MEMBER_UPDATE: handleUserUpdate,
  GUILD_MEMBER_REMOVE: handleUserUpdate,
  PRESENCES_REPLACE: function handlePresenceReplace(presences) {
    const mapped = _modDef12(presences.presences).map((user) => {
      user = user.user;
      let id;
      if (user != null) {
        id = user.id;
      }
      return id;
    });
    const found = mapped.filter(GlobalUtils.isNotNullish);
    const arr = _modDef12(presences.presences);
    let flag = false;
    let flag2 = false;
    const iter = found.uniq();
    const keys = Object.keys();
    if (keys !== undefined) {
      flag2 = flag;
      while (keys[tmp] !== undefined) {
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
      for (const key10018 in closure_13) {
        let obj = dependencyMap[key10018];
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
    return members.reduce((acc, user) => {
      const id = user.user.id;
      let flag = false;
      if (null != id) {
        let flag2 = false;
        let flag3 = false;
        const keys = Object.keys();
        if (keys !== undefined) {
          flag3 = flag2;
          while (keys[tmp] !== undefined) {
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
      if (!flag) {
        flag = acc;
      }
      return flag;
    }, false);
  },
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/threads/ThreadMemberListStore.tsx");

export default threadMemberListStore;
