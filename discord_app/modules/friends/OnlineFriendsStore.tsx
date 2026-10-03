// discord_app/modules/friends/OnlineFriendsStore.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import ApexExperiment from "../experiments/apex/index.tsx";
import SetUtils from "../../../discord_common/js/shared/utils/SetUtils.tsx";
import FriendsSidebarExperimentDefault from "FriendsSidebarExperiment.tsx";
import PresenceStore from "../../stores/PresenceStore.tsx";
import RelationshipStore from "../../stores/RelationshipStore.tsx";

require = fn;
function isEnabled() {
  return FriendsSidebarExperimentDefault.getConfig({ location: "OnlineFriendsStore" }).appBarToggleEnabled;
}
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
  const tmp = isEnabled();
  closure_7 = tmp;
  if (tmp) {
    const _Set = Set;
    set = new Set();
    const friendIDs = RelationshipStore.getFriendIDs();
    for (const item10019 of friendIDs) {
      if (PresenceStore.getStatus(item10019) !== StatusTypes.OFFLINE) {
        let addResult = set.add(item10019);
      }
      continue;
    }
    return !SetUtils.areSetsEqual(set, set);
  } else {
    return clear();
  }
}
function handleExperimentChange() {
  let tmp =
    FriendsSidebarExperimentDefault.getConfig({ location: "OnlineFriendsStore" }).appBarToggleEnabled !== closure_7;
  if (tmp) {
    tmp = rebuild();
  }
  return tmp;
}
function clear() {
  set = new Set();
  return set.size > 0;
}
const StatusTypes = fn(1085).StatusTypes;
let set = new Set();
let closure_7 = false;
const Store = initializeDefault.Store;
class OnlineFriendsStore extends Store {}
const prototype = OnlineFriendsStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(ApexExperiment.ApexExperimentStore, PresenceStore, RelationshipStore);
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
    const appBarToggleEnabled = FriendsSidebarExperimentDefault.getConfig({
      location: "OnlineFriendsStore",
    }).appBarToggleEnabled;
    if (!appBarToggleEnabled) {
      return appBarToggleEnabled;
    } else {
      const id = user.user.id;
      if (!RelationshipStore.isFriend(id)) {
        let deleteResult = set.delete(id);
      }
      const hasItem = set.has(id);
      let flag = !hasItem;
      if (!hasItem) {
        set.add(id);
        flag = true;
      }
      deleteResult = flag;
    }
  },
  PRESENCE_UPDATES: function handlePresenceUpdates(updates) {
    updates = updates.updates;
    if (isEnabled()) {
      let flag = false;
      for (const item10012 of updates) {
        let tmp4 = upsert(item10012.user.id);
        if (!tmp4) {
          tmp4 = flag;
        }
        flag = tmp4;
        continue;
      }
      return flag;
    } else {
      return false;
    }
  },
  RELATIONSHIP_ADD: function handleRelationshipAdd(relationship) {
    const appBarToggleEnabled = FriendsSidebarExperimentDefault.getConfig({
      location: "OnlineFriendsStore",
    }).appBarToggleEnabled;
    if (!appBarToggleEnabled) {
      return appBarToggleEnabled;
    } else {
      const id = relationship.relationship.id;
      if (!RelationshipStore.isFriend(id)) {
        let deleteResult = set.delete(id);
      }
      const hasItem = set.has(id);
      let flag = !hasItem;
      if (!hasItem) {
        set.add(id);
        flag = true;
      }
      deleteResult = flag;
    }
  },
  RELATIONSHIP_REMOVE: function handleRelationshipRemove(relationship) {
    const appBarToggleEnabled = FriendsSidebarExperimentDefault.getConfig({
      location: "OnlineFriendsStore",
    }).appBarToggleEnabled;
    if (!appBarToggleEnabled) {
      return appBarToggleEnabled;
    } else {
      const id = relationship.relationship.id;
      if (!RelationshipStore.isFriend(id)) {
        let deleteResult = set.delete(id);
      }
      const hasItem = set.has(id);
      let flag = !hasItem;
      if (!hasItem) {
        set.add(id);
        flag = true;
      }
      deleteResult = flag;
    }
  },
  RELATIONSHIP_UPDATE: function handleRelationshipUpdate(relationship) {
    const appBarToggleEnabled = FriendsSidebarExperimentDefault.getConfig({
      location: "OnlineFriendsStore",
    }).appBarToggleEnabled;
    if (!appBarToggleEnabled) {
      return appBarToggleEnabled;
    } else {
      const id = relationship.relationship.id;
      if (!RelationshipStore.isFriend(id)) {
        let deleteResult = set.delete(id);
      }
      const hasItem = set.has(id);
      let flag = !hasItem;
      if (!hasItem) {
        set.add(id);
        flag = true;
      }
      deleteResult = flag;
    }
  },
  CONNECTION_OPEN_STATE_UPDATE: function handleConnectionOpenStateUpdate(apexExperiments) {
    let tmp = null != apexExperiments.apexExperiments;
    if (tmp) {
      let tmp5 =
        FriendsSidebarExperimentDefault.getConfig({ location: "OnlineFriendsStore" }).appBarToggleEnabled !== closure_7;
      if (tmp5) {
        tmp5 = rebuild();
      }
      tmp = tmp5;
    }
    return tmp;
  },
  APEX_EXPERIMENTS_FETCH_SUCCESS: handleExperimentChange,
  APEX_EXPERIMENT_OVERRIDE_CREATE: handleExperimentChange,
  APEX_EXPERIMENT_OVERRIDE_DELETE: handleExperimentChange,
  APEX_EXPERIMENT_OVERRIDE_CLEAR: handleExperimentChange,
  APEX_EXPERIMENT_SESSION_OVERRIDE_CREATE: handleExperimentChange,
  APEX_EXPERIMENT_SESSION_OVERRIDE_DELETE: handleExperimentChange,
  LOGOUT: clear,
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/friends/OnlineFriendsStore.tsx");

export default onlineFriendsStore;
