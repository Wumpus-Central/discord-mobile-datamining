// === Module 13701: FriendGroupsStore ===

// Module 13701 (FriendGroupsStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import UserAffinitiesV2Store from "UserAffinitiesV2Store" /* 7659 */;
import ConsentStore from "ConsentStore" /* 6595 */;
import RelationshipStore from "RelationshipStore" /* 4209 */;
import UserStore from "UserStore" /* 1371 */;

let items = [];
let c5 = false;
const PersistedStore = initializeDefault.PersistedStore;
class FriendGroupsStore extends PersistedStore {
}
const prototype = FriendGroupsStore.prototype;
prototype["initialize"] = function initialize(groups) {
  this.waitFor(ConsentStore, RelationshipStore, UserAffinitiesV2Store, UserStore);
  if (null != groups) {
    groups = groups.groups;
    if (groups == null) {
      groups = [];
    }
    items = groups;
    let flag = groups.isInitialized;
    if (flag == null) {
      flag = false;
    }
    c5 = flag;
  }
};
prototype["getGroups"] = function getGroups() {
  return items;
};
prototype["getGroup"] = function getGroup(arg0) {
  closure_0 = arg0;
  let found = items.find((id) => id.id === closure_0);
  if (found == null) {
    found = null;
  }
  return found;
};
prototype["getGroupIds"] = function getGroupIds() {
  return items.map((id) => id.id);
};
prototype["getUserGroups"] = function getUserGroups(arg0) {
  closure_0 = arg0;
  return items.filter((userIds) => {
    userIds = userIds.userIds;
    return userIds.includes(closure_0);
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
  return { groups: items, isInitialized };
};
FriendGroupsStore.displayName = "FriendGroupsStore";
FriendGroupsStore.persistKey = "FriendGroupsStoreV2";
const friendGroupsStore = new FriendGroupsStore(DispatcherDefault, {
  POST_CONNECTION_OPEN: function handleInitializeFriendGroups() {
    if (!c5) {
      if (items.length <= 0) {
        items = [];
        c5 = true;
      }
    }
    return false;
  },
  CREATE_FRIEND_GROUP: function handleCreateFriendGroup(groupId) {
    groupId = groupId.groupId;
    const someResult = items.some((id) => id.id === groupId);
    let flag = !someResult;
    if (!someResult) {
      const obj = { id: groupId, name: groupId.name, userIds: [] };
      items.push(obj);
      flag = true;
    }
    return flag;
  },
  UPDATE_FRIEND_GROUP: function handleUpdateFriendGroup(groupId) {
    groupId = groupId.groupId;
    const findIndexResult = items.findIndex((id) => id.id === groupId);
    let flag = -1 !== findIndexResult;
    if (flag) {
      const obj = {};
      const merged = Object.assign(items[findIndexResult]);
      obj.name = groupId.name;
      items[findIndexResult] = obj;
      flag = true;
    }
    return flag;
  },
  DELETE_FRIEND_GROUP: function handleDeleteFriendGroup(groupId) {
    groupId = groupId.groupId;
    const found = items.filter((id) => id.id !== groupId);
    items = found;
    return found.length !== items.length;
  },
  REORDER_FRIEND_GROUPS: function handleReorderFriendGroups(arg0) {
    items = [];
    const map = new Map(items.map((id) => {
      items = [id.id, id];
      return items;
    }));
    while (tmp !== undefined) {
      value = map.get(tmp2);
      if (null != value) {
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
    ({ groupId: UserAffinitiesV2Store, userIds } = arg0);
    let set;
    const findIndexResult = items.findIndex((id) => id.id === UserAffinitiesV2Store);
    if (-1 === findIndexResult) {
      return false;
    } else {
      const _Set = Set;
      set = new Set(tmp11.userIds);
      const found = userIds.filter((item) => !set.has(item));
      let flag = 0 !== found.length;
      if (flag) {
        const obj = {};
        const merged = Object.assign(tmp11);
        items = [];
        HermesBuiltin.arraySpread(found, HermesBuiltin.arraySpread(tmp11.userIds, 0));
        obj.userIds = items;
        items[findIndexResult] = obj;
        flag = true;
      }
      return flag;
    }
  },
  REMOVE_USERS_FROM_GROUP: function handleRemoveUsersFromGroup(arg0) {
    ({ groupId: UserAffinitiesV2Store, userIds } = arg0);
    let set;
    const findIndexResult = items.findIndex((id) => id.id === UserAffinitiesV2Store);
    if (-1 === findIndexResult) {
      return false;
    } else {
      const _Set = Set;
      set = new Set(userIds);
      userIds = tmp3.userIds;
      const found = userIds.filter((item) => !set.has(item));
      let flag = found.length !== tmp3.userIds.length;
      if (flag) {
        const obj = {};
        const merged = Object.assign(tmp3);
        obj.userIds = found;
        items[findIndexResult] = obj;
        flag = true;
      }
      return flag;
    }
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/friend_groups/FriendGroupsStore.tsx");

export default friendGroupsStore;