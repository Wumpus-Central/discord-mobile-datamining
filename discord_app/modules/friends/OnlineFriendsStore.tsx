// === Module 13906: OnlineFriendsStore ===

// Module 13906 (OnlineFriendsStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import SetUtils from "SetUtils" /* 1975 */;
import PresenceStore from "PresenceStore" /* 4762 */;
import RelationshipStore from "RelationshipStore" /* 4371 */;

require = fn;
function upsert(id) {
  if (RelationshipStore.isFriend(id)) {
    if (PresenceStore.getStatus(id) !== StatusTypes.OFFLINE) {
      const hasItem = set.has(id);
      let flag = !hasItem;
      if (!hasItem) {
        set.add(id);
        flag = true;
      }
      let deleteResult = flag;
    }
    return deleteResult;
  }
  deleteResult = set.delete(id);
}
function rebuild() {
  set = new Set();
  const friendIDs = RelationshipStore.getFriendIDs();
  for (const item10014 of friendIDs) {
    if (PresenceStore.getStatus(item10014) !== StatusTypes.OFFLINE) {
      let addResult = set.add(item10014);
    }
    continue;
  }
  return !SetUtils.areSetsEqual(set, set);
}
const StatusTypes = fn(1074).StatusTypes;
let set = new Set();
const Store = initializeDefault.Store;
class OnlineFriendsStore extends Store {
}
const prototype = OnlineFriendsStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(PresenceStore, RelationshipStore);
};
prototype["getOnlineFriendCount"] = function getOnlineFriendCount() {
  return set.size;
};
OnlineFriendsStore.displayName = "OnlineFriendsStore";
const onlineFriendsStore = new OnlineFriendsStore(DispatcherDefault, {
  CONNECTION_OPEN: rebuild,
  CONNECTION_OPEN_SUPPLEMENTAL: rebuild,
  OVERLAY_INITIALIZE: rebuild,
  PRESENCES_REPLACE: rebuild,
  GUILD_CREATE: rebuild,
  GUILD_DELETE: rebuild,
  GUILD_MEMBER_REMOVE: function handleGuildMemberRemove(user) {
    const id = user.user.id;
    if (RelationshipStore.isFriend(id)) {
      if (PresenceStore.getStatus(id) !== StatusTypes.OFFLINE) {
        const hasItem = set.has(id);
        let flag = !hasItem;
        if (!hasItem) {
          set.add(id);
          flag = true;
        }
        let deleteResult = flag;
      }
      return deleteResult;
    }
    deleteResult = set.delete(id);
  },
  PRESENCE_UPDATES: function handlePresenceUpdates(arg0) {
    let flag = false;
    while (tmp !== undefined) {
      let tmp4 = upsert(tmp2.user.id) || flag;
      flag = tmp4;
      continue;
    }
    return flag;
  },
  RELATIONSHIP_ADD: function handleRelationshipAdd(relationship) {
    const id = relationship.relationship.id;
    if (RelationshipStore.isFriend(id)) {
      if (PresenceStore.getStatus(id) !== StatusTypes.OFFLINE) {
        const hasItem = set.has(id);
        let flag = !hasItem;
        if (!hasItem) {
          set.add(id);
          flag = true;
        }
        let deleteResult = flag;
      }
      return deleteResult;
    }
    deleteResult = set.delete(id);
  },
  RELATIONSHIP_REMOVE: function handleRelationshipRemove(relationship) {
    const id = relationship.relationship.id;
    if (RelationshipStore.isFriend(id)) {
      if (PresenceStore.getStatus(id) !== StatusTypes.OFFLINE) {
        const hasItem = set.has(id);
        let flag = !hasItem;
        if (!hasItem) {
          set.add(id);
          flag = true;
        }
        let deleteResult = flag;
      }
      return deleteResult;
    }
    deleteResult = set.delete(id);
  },
  RELATIONSHIP_UPDATE: function handleRelationshipUpdate(relationship) {
    const id = relationship.relationship.id;
    if (RelationshipStore.isFriend(id)) {
      if (PresenceStore.getStatus(id) !== StatusTypes.OFFLINE) {
        const hasItem = set.has(id);
        let flag = !hasItem;
        if (!hasItem) {
          set.add(id);
          flag = true;
        }
        let deleteResult = flag;
      }
      return deleteResult;
    }
    deleteResult = set.delete(id);
  },
  LOGOUT: function handleLogout() {
    set = new Set();
    return set.size > 0;
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/friends/OnlineFriendsStore.tsx");

export default onlineFriendsStore;