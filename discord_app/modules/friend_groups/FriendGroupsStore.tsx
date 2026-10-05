// discord_app/modules/friend_groups/FriendGroupsStore.tsx
import get_initializedDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import UserAffinitiesV2Store from "../user_affinities/UserAffinitiesV2Store.tsx";
import ConsentStore from "../../stores/ConsentStore.tsx";
import RelationshipStore from "../../stores/RelationshipStore.tsx";
import UserStore from "../../stores/UserStore.tsx";
import size from "../../../_runtime/metro/00002__.js";

let map, set;

let found = [];
const hasOwnProperty = false;
const PersistedStore = get_initializedDefault.PersistedStore;
class FriendGroupsStore extends PersistedStore {
  initialize(groups) {
    this.waitFor(ConsentStore, RelationshipStore, UserAffinitiesV2Store, UserStore);
    if (null != groups) {
      groups = groups.groups;
      if (groups == null) {
        groups = [];
      }
      found = groups;
      let flag = groups.isInitialized;
      if (flag == null) {
        flag = false;
      }
      let c5 = flag;
    }
  }
  getGroups() {
    return found;
  }
  getGroup(arg0) {
    let closure_0 = arg0;
    found = found.find((id) => id.id === closure_0);
    if (found == null) {
      found = null;
    }
    return found;
  }
  getGroupIds() {
    return found.map((id) => id.id);
  }
  getUserGroups(arg0) {
    let closure_0 = arg0;
    return found.filter((userIds) => {
      userIds = userIds.userIds;
      return userIds.includes(closure_0);
    });
  }
  isGroupEmpty(arg0) {
    const group = this.getGroup(arg0);
    return null == group || 0 === group.userIds.length;
  }
  isInitialized() {
    return c5;
  }
  getState() {
    return { groups: found, isInitialized };
  }
}
const prototype = FriendGroupsStore.prototype;
FriendGroupsStore.displayName = "FriendGroupsStore";
FriendGroupsStore.persistKey = "FriendGroupsStoreV2";
let obj = {
  POST_CONNECTION_OPEN: function handleInitializeFriendGroups() {
    const tmp = c5;
    if (!tmp) {
      if (found.length <= 0) {
        found = [];
        c5 = true;
      }
    }
    return false;
  },
  CREATE_FRIEND_GROUP: function handleCreateFriendGroup(groupId) {
    const f114910 = (id) => id.id === groupId;
    groupId = groupId.groupId;
    const name = groupId.name;
    let flag = !found.some(f114910);
    found.some(f114910);
    if (flag) {
      const obj = { id: groupId, name, userIds: [] };
      found.push(obj);
      flag = true;
    }
    return flag;
  },
  UPDATE_FRIEND_GROUP: function handleUpdateFriendGroup(groupId) {
    groupId = groupId.groupId;
    const name = groupId.name;
    const findIndexResult = found.findIndex((id) => id.id === groupId);
    let flag = -1 !== findIndexResult;
    if (flag) {
      const obj = { name };
      const merged = Object.assign(found[findIndexResult]);
      found[findIndexResult] = obj;
      flag = true;
    }
    return flag;
  },
  DELETE_FRIEND_GROUP: function handleDeleteFriendGroup(groupId) {
    groupId = groupId.groupId;
    const length = found.length;
    found = found.filter((id) => id.id !== groupId);
    return found.length !== length;
  },
  REORDER_FRIEND_GROUPS: function handleReorderFriendGroups(groupIds) {
    groupIds = groupIds.groupIds;
    let items = [];
    map = new Map(
      found.map((id) => {
        const items = [id.id, id];
        return items;
      }),
    );
    const tmp = groupIds[Symbol.iterator]();
    while (tmp !== undefined) {
      let value = map.get(tmp2);
      if (null != value) {
        let arr = items.push(tmp4);
      }
      continue;
    }
    let flag = items.length === found.length;
    if (flag) {
      found = items;
      flag = true;
    }
    return flag;
  },
  ADD_USERS_TO_GROUP: function handleAddUsersToGroup(arg0) {
    let closure_129_0;
    let items;
    let userIds;
    ({ groupId: closure_129_0, userIds } = arg0);
    set = undefined;
    const findIndexResult = found.findIndex((id) => id.id === closure_1_0);
    if (-1 === findIndexResult) {
      return false;
    } else {
      const _Set = Set;
      const self = this;
      const self2 = this;
      set = new Set(tmp11.userIds);
      found = userIds.filter((item) => !set.has(item));
      let flag = 0 !== found.length;
      if (flag) {
        const obj = { userIds: items };
        const merged = Object.assign(tmp11);
        items = [];
        HermesBuiltin.arraySpread(items, found, HermesBuiltin.arraySpread(items, found[findIndexResult].userIds, 0));
        found[findIndexResult] = obj;
        flag = true;
      }
      return flag;
    }
  },
  REMOVE_USERS_FROM_GROUP: function handleRemoveUsersFromGroup(arg0) {
    let closure_129_0;
    let userIds;
    ({ groupId: closure_129_0, userIds } = arg0);
    set = undefined;
    const findIndexResult = found.findIndex((id) => id.id === closure_1_0);
    if (-1 === findIndexResult) {
      return false;
    } else {
      const _Set = Set;
      const self = this;
      const self2 = this;
      set = new Set(userIds);
      const userIds1 = tmp3.userIds;
      found = userIds1.filter((item) => !set.has(item));
      let flag = found.length !== tmp3.userIds.length;
      if (flag) {
        const obj = { userIds: found };
        const merged = Object.assign(tmp3);
        found[findIndexResult] = obj;
        flag = true;
      }
      return flag;
    }
  },
};
const friendGroupsStore = new FriendGroupsStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/friend_groups/FriendGroupsStore.tsx");

export default friendGroupsStore;
