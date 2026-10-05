// discord_app/modules/threads/ThreadMemberListStore.tsx
import _modDef12 from "../../../_runtime/metro/00012__.js";
import get_initializedDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import GlobalUtils from "../../utils/GlobalUtils.tsx";
import PermissionUtilsAll from "../../utils/PermissionUtils.tsx";
import UserUtilsDefault from "../../utils/UserUtils.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__slicedToArray.js";
import ChannelStore from "../../stores/ChannelStore.tsx";
import GuildMemberStore from "../../stores/GuildMemberStore.tsx";
import GuildSubscriptionsStore from "../../stores/GuildSubscriptionsStore.tsx";
import PresenceStore from "../../stores/PresenceStore.tsx";
import SelfPresenceStore from "../../stores/SelfPresenceStore.tsx";
import UserStore from "../../stores/UserStore.tsx";
import Constants from "../../Constants.tsx";
import size from "../../../_runtime/metro/00002__.js";

let closure_13, set, subscribedThreadIds;

let closure_12;
let unpackModuleId;
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
        let obj = closure_13[tmp5];
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
function handleGuildRoleUpdateOrDelete(guildId) {
  let flag = false;
  let flag2 = false;
  guildId = guildId.guildId;
  const keys = Object.keys();
  if (keys !== undefined) {
    flag2 = flag;
    while (keys[tmp] !== undefined) {
      if (closure_13[tmp4].guildId !== guildId) {
        continue;
      } else {
        let obj = closure_13[tmp4];
        let rebuildResult = obj.rebuild();
        flag = true;
        continue;
      }
      continue;
    }
  }
  return flag2;
}
({ StatusTypes: unpackModuleId, Permissions: closure_12 } = Constants);
class MemberList {
  constructor(guildId, parentId, threadId) {
    const merged = Object.assign({ version: 0, sections: null, allUserIds: null });
    merged[1] = {};
    merged[2] = new Set();
    merged.guildId = guildId;
    merged.parentId = parentId;
    merged.threadId = threadId;
    new Set();
    return merged;
  }
  rebuild(items) {
    let closure_0;
    const self = this;
    this.version = this.version + 1;
    this.sections = {};
    if (null != items) {
      let tmp = globalThis;
      const _Set = Set;
      const self2 = this;
      const self3 = this;
      self.allUserIds = new Set(items);
      set = new Set(items);
    }
    const channel = ChannelStore.getChannel(self.parentId);
    const tmp5 = self(12);
    const tmp5Result = tmp5(Array.from(self.allUserIds));
    const mapped = tmp5Result.map((userId) => {
      const tmp = _slicedToArray(self.calculateNewState(userId, closure_0), 3);
      return { userId, sectionId: tmp[0], displayName: tmp[1], canViewChannel: tmp[2] };
    });
    const sorted = mapped.sort((userId, userId2) => {
      const obj = self(dependencyMap[9]);
      return obj.compare(userId.userId, userId2.userId);
    });
    const sortByResult = sorted.sortBy((displayName) => displayName.displayName);
    const item = sortByResult.forEach((userId) => {
      self.addUser(userId.userId, userId.sectionId, userId.displayName, userId.canViewChannel, true);
    });
  }
  updateMultipleUserIds(mapped, guildId) {
    const self = this;
    let tmp = null == guildId || self.guildId === guildId;
    if (tmp) {
      const found = mapped.filter((item) => {
        const allUserIds = self.allUserIds;
        return allUserIds.has(item);
      });
      let flag = 0 !== found.length;
      if (flag) {
        if (found.length > 50) {
          self.rebuild();
          flag = true;
        } else {
          const item = found.forEach((item) => self.updateUserId(item));
          flag = true;
        }
      }
      tmp = flag;
    }
    return tmp;
  }
  updateUserId(id) {
    let first;
    let tmp10;
    let tmp4;
    let tmp5;
    let tmp8;
    let tmp9;
    const self = this;
    const allUserIds = this.allUserIds;
    if (allUserIds.has(id)) {
      [first, tmp4, tmp5] = self.findOldState(id);
      [tmp8, tmp9, tmp10] = self.calculateNewState(id, ChannelStore.getChannel(self.parentId));
      let flag2 = first !== tmp8 || tmp4 !== tmp9 || tmp5 !== tmp10;
      _slicedToArray(self.calculateNewState(id, ChannelStore.getChannel(self.parentId)), 3);
      if (flag2) {
        self.removeUserId(id, first);
        self.addUser(id, tmp8, tmp9, tmp10);
        flag2 = true;
      }
      return flag2;
    } else {
      return false;
    }
  }
  addUserId(userId) {
    const tmp = _slicedToArray(this.calculateNewState(userId, ChannelStore.getChannel(this.parentId)), 3);
    this.addUser(userId, tmp[0], tmp[1], tmp[2]);
  }
  removeUserId(item, key10011) {
    const self = this;
    const allUserIds = this.allUserIds;
    allUserIds.delete(item);
    if (null != key10011) {
      if (self.removeUserIdFromSection(item, key10011)) {
        return true;
      }
    }
    for (const key10011 in self.sections) {
      if (!self.removeUserIdFromSection(item, key10011)) {
        continue;
      } else {
        let flag = true;
        return true;
      }
    }
    return false;
  }
  addUser(userId, sectionId, displayName, canViewChannel, arg4) {
    const self = this;
    const allUserIds = this.allUserIds;
    allUserIds.add(userId);
    const user = UserStore.getUser(userId);
    if (null != user) {
      if ("" !== user.username) {
        if (!(sectionId in self.sections)) {
          const obj = { sectionId, usersById: {}, userIds: [] };
          self.sections[sectionId] = obj;
        }
        const obj2 = { userId, displayName, canViewChannel };
        self.sections[sectionId].usersById[userId] = obj2;
        if (arg4) {
          const userIds = tmp6.userIds;
          userIds.push(userId);
        } else {
          const userIds1 = tmp6.userIds;
          userIds1.splice(self.findUserIdSortedPosition(self.sections[sectionId], userId, displayName), 0, userId);
        }
        self.version = self.version + 1;
      }
    }
  }
  findUserIdSortedPosition(userIds, userId, displayName) {
    userIds = userIds.userIds;
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
  }
  removeUserIdFromSection(item, key10011) {
    const self = this;
    let closure_0 = item;
    let tmp3 = null != key10011;
    if (tmp3) {
      let flag = item in tmp2.usersById;
      if (flag) {
        delete this.sections[key10011].usersById[tmp];
        const userIds = tmp2.userIds;
        this.sections[key10011].userIds = userIds.filter((item) => item !== closure_0);
        self.version = self.version + 1;
        flag = true;
      }
      tmp3 = flag;
    }
    return tmp3;
  }
  findOldState(id) {
    for (const key10004 in this.sections) {
      let tmp3 = tmp.sections[key10004];
      if (!(id in tmp3.usersById)) {
        continue;
      } else {
        let items = [key10004, ,];
        ({ displayName: arr[1], canViewChannel: arr[2] } = tmp3.usersById[id]);
        return items;
      }
    }
    const items1 = [undefined, undefined, false];
    return items1;
  }
  calculateNewState(userId, channel) {
    let status;
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
      status = SelfPresenceStore.getStatus();
    } else {
      status = PresenceStore.getStatus(userId, this.guildId);
    }
    let canResult = null != user && null != channel;
    if (canResult) {
      const obj2 = { permission: constants2.VIEW_CHANNEL, user, context: channel };
      const obj = PermissionUtilsAll;
      canResult = obj.can(obj2);
    }
    let str = "offline";
    if (status !== unpackModuleId.OFFLINE) {
      str = "offline";
      if (status !== unpackModuleId.INVISIBLE) {
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
      const obj3 = UserUtilsDefault;
      nick = obj3.getName(user);
    }
    const items = [str, ,];
    let formatted;
    if (nick != null) {
      formatted = nick.toLowerCase();
    }
    items[1] = formatted;
    items[2] = canResult;
    return items;
  }
}
const prototype = MemberList.prototype;
const Store = get_initializedDefault.Store;
class ThreadMemberListStore extends Store {
  initialize() {
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
          let tmp5 = tmp4;
          if (subscribedThreadIds.has(tmp4)) {
            continue;
          } else {
            delete closure_1_13[tmp5];
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
            let obj = closure_1_13[tmp7];
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
  }
  getMemberListVersion(arg0) {
    let version;
    if (closure_13[arg0] != null) {
      version = tmp.version;
    }
    return version;
  }
  getMemberListSections(thread) {
    let sections;
    if (closure_13[thread] != null) {
      sections = tmp.sections;
    }
    return sections;
  }
  canUserViewChannel(arg0, arg1, arg2) {
    if (null == closure_13[arg0]) {
      return false;
    } else {
      let tmp4;
      if (closure_13[arg0].sections[arg1] != null) {
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
  }
}
const prototype2 = ThreadMemberListStore.prototype;
ThreadMemberListStore.displayName = "ThreadMemberListStore";
let obj = {
  CONNECTION_OPEN: function handleConnectionOpen() {
    closure_13 = {};
  },
  THREAD_MEMBERS_UPDATE: function handleThreadMembersUpdate(id) {
    const user = id;
    if (id.id in closure_13) {
      const addedMembers = id.addedMembers;
      if (addedMembers != null) {
        const item = addedMembers.forEach((userId) => {
          const obj = closure_13[user.id];
          return obj.addUserId(userId.userId);
        });
      }
      const removedMemberIds = id.removedMemberIds;
      if (removedMemberIds != null) {
        const item1 = removedMemberIds.forEach((item) => {
          const obj = closure_13[user.id];
          return obj.removeUserId(item);
        });
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
        delete closure_13[channel.id];
      }
    }
    return false;
  },
  THREAD_DELETE: function handleThreadDelete(channel) {
    channel = channel.channel;
    if (channel.id in closure_13) {
      delete closure_13[channel.id];
    } else {
      return false;
    }
  },
  CHANNEL_UPDATES: function handleChannelUpdates(channels) {
    channels = channels.channels;
    let flag = false;
    let flag2 = false;
    set = new Set(channels.map((id) => id.id));
    const keys = Object.keys();
    if (keys !== undefined) {
      flag2 = flag;
      while (keys[tmp] !== undefined) {
        if (!set.has(closure_13[tmp4].parentId)) {
          continue;
        } else {
          let obj2 = closure_13[tmp4];
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
    let members;
    let threadId;
    ({ threadId, members } = guildId);
    guildId = guildId.guildId;
    const channel = ChannelStore.getChannel(threadId);
    let parent_id;
    if (channel != null) {
      parent_id = channel.parent_id;
    }
    if (null != parent_id) {
      const self3 = this;
      if (typeof MemberList === "function") {
        const merged = Object.assign({ version: 0, sections: null, allUserIds: null });
        merged[1] = {};
        const _Set = Set;
        const self = this;
        const self2 = this;
        merged[2] = new Set();
        merged.guildId = guildId;
        merged.parentId = parent_id;
        merged.threadId = threadId;
        tmp9[threadId] = merged;
        const obj = closure_13[threadId];
        set = new Set();
        obj.rebuild(members.map((user_id) => user_id.user_id));
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
            let obj = closure_1_13[tmp5];
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
    const arr = _modDef12(presences.presences);
    const mapped = arr.map((user) => {
      user = user.user;
      let id;
      if (user != null) {
        id = user.id;
      }
      return id;
    });
    const found = mapped.filter(GlobalUtils.isNotNullish);
    let flag = false;
    let flag2 = false;
    const iter = found.uniq();
    const valueResult = iter.value();
    const keys = Object.keys();
    if (keys !== undefined) {
      flag2 = flag;
      while (keys[tmp] !== undefined) {
        let obj2 = closure_13[tmp5];
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
  GUILD_MEMBERS_CHUNK_BATCH: function handleGuildMembersChunkBatch(chunks) {
    let guildId;
    let members;
    chunks = chunks.chunks;
    let flag = false;
    for (const item10009 of chunks) {
      ({ guildId, members } = item10009);
      let mapped = members.map((user) => user.user.id);
      for (const key10018 in closure_13) {
        let obj = closure_13[key10018];
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
            let obj = closure_1_13[tmp5];
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
};
const threadMemberListStore = new ThreadMemberListStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/threads/ThreadMemberListStore.tsx");

export default threadMemberListStore;
