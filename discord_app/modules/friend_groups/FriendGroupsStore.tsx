// === Module 12837: initialize ===

// Module 12837 (initialize)
import recomputeAffinities from "recomputeAffinities";
import hasConsented from "hasConsented";
import upsertRelationship from "upsertRelationship";
import mergeGuildAvatar from "mergeGuildAvatar";
import { PersistedStore } from "initialize";

let closure_4 = [];
let c5 = false;
class FriendGroupsStore extends PersistedStore {
}
const prototype = FriendGroupsStore.prototype;
prototype["initialize"] = function initialize(groups) {
  this.waitFor(hasConsented, upsertRelationship, recomputeAffinities, mergeGuildAvatar);
  if (null != groups) {
    groups = groups.groups;
    if (groups == null) {
      groups = [];
    }
    let flag = groups.isInitialized;
    if (flag == null) {
      flag = false;
    }
  }
};
prototype["getGroups"] = function getGroups() {
  return closure_4;
};
prototype["getGroup"] = function getGroup(arg0) {
  let recomputeAffinities = arg0;
  let found = arr.find((id) => id.id === recomputeAffinities);
  if (found == null) {
    found = null;
  }
  return found;
};
prototype["getGroupIds"] = function getGroupIds() {
  return arr.map((id) => id.id);
};
prototype["getUserGroups"] = function getUserGroups(arg0) {
  let recomputeAffinities = arg0;
  return arr.filter((userIds) => {
    userIds = userIds.userIds;
    return userIds.includes(recomputeAffinities);
  });
};
prototype["isGroupEmpty"] = function isGroupEmpty(arg0) {
  const group = this.getGroup(arg0);
  let tmp2 = null == group;
  if (!tmp2) {
    tmp2 = 0 === group.userIds.length;
  }
  return tmp2;
};
prototype["isInitialized"] = function isInitialized() {
  return c5;
};
prototype["getState"] = function getState() {
  return { groups: closure_4, isInitialized: c5 };
};
FriendGroupsStore.displayName = "FriendGroupsStore";
FriendGroupsStore.persistKey = "FriendGroupsStoreV2";
const friendGroupsStore = new FriendGroupsStore(require("dispatcher"), {
  POST_CONNECTION_OPEN: function handleInitializeFriendGroups() {
    if (!c5) {
      if (arr.length <= 0) {
        arr = [];
        c5 = true;
      }
    }
    return false;
  },
  CREATE_FRIEND_GROUP: function handleCreateFriendGroup(groupId) {
    groupId = groupId.groupId;
    const someResult = arr.some((id) => id.id === groupId);
    let flag = !someResult;
    if (!someResult) {
      const obj = { id: null, name: null, userIds: null };
      obj[0] = groupId;
      obj[1] = groupId.name;
      obj[2] = [];
      arr = arr.push(obj);
      flag = true;
    }
    return flag;
  },
  UPDATE_FRIEND_GROUP: function handleUpdateFriendGroup(groupId) {
    groupId = groupId.groupId;
    const findIndexResult = arr.findIndex((id) => id.id === groupId);
    let flag = -1 !== findIndexResult;
    if (flag) {
      const obj = {};
      const merged = Object.assign(arr[findIndexResult]);
      obj.name = groupId.name;
      arr[findIndexResult] = obj;
      flag = true;
    }
    return flag;
  },
  DELETE_FRIEND_GROUP: function handleDeleteFriendGroup(groupId) {
    groupId = groupId.groupId;
    found = found.filter((id) => id.id !== groupId);
    return found.length !== found.length;
  },
  REORDER_FRIEND_GROUPS: function handleReorderFriendGroups(arg0) {
    let items = [];
    const map = new Map(items.map((id) => {
      const items = [id.id, id];
      return items;
    }));
    while (tmp !== undefined) {
      let value = map.get(tmp2);
      if (null != value) {
        let tmp5 = value;
        let arr = items.push(tmp4);
      }
      continue;
    }
    let flag = items.length === items.length;
    if (flag) {
      flag = true;
    }
    return flag;
  },
  ADD_USERS_TO_GROUP: function handleAddUsersToGroup(arg0) {
    let recomputeAffinities;
    let userIds;
    ({ groupId: recomputeAffinities, userIds } = arg0);
    let set;
    const findIndexResult = arr.findIndex((id) => id.id === recomputeAffinities);
    if (-1 === findIndexResult) {
      return false;
    } else {
      const _Set = Set;
      set = new Set(tmp11.userIds);
      const found = userIds.filter((arg0) => !set.has(arg0));
      let flag = 0 !== found.length;
      if (flag) {
        const obj = {};
        const merged = Object.assign(tmp11);
        const items = [];
        HermesBuiltin.arraySpread(found, HermesBuiltin.arraySpread(tmp11.userIds, 0));
        obj.userIds = items;
        arr[findIndexResult] = obj;
        flag = true;
      }
      return flag;
    }
  },
  REMOVE_USERS_FROM_GROUP: function handleRemoveUsersFromGroup(arg0) {
    let recomputeAffinities;
    let userIds;
    ({ groupId: recomputeAffinities, userIds } = arg0);
    let set;
    const findIndexResult = arr.findIndex((id) => id.id === recomputeAffinities);
    if (-1 === findIndexResult) {
      return false;
    } else {
      const _Set = Set;
      set = new Set(userIds);
      userIds = tmp3.userIds;
      const found = userIds.filter((arg0) => !set.has(arg0));
      let flag = found.length !== tmp3.userIds.length;
      if (flag) {
        const obj = {};
        const merged = Object.assign(tmp3);
        obj.userIds = found;
        arr[findIndexResult] = obj;
        flag = true;
      }
      return flag;
    }
  }
});
const result = require("upsertRelationship").fileFinishedImporting("modules/friend_groups/FriendGroupsStore.tsx");

export default friendGroupsStore;