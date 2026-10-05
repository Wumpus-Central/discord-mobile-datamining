// discord_app/modules/friends/OnlineFriendsStore.tsx
import get_initializedDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import Constants from "../../Constants.tsx";
import ApexExperiment from "../experiments/apex/index.tsx";
import SetUtils from "../../../discord_common/js/shared/utils/SetUtils.tsx";
import FriendsSidebarExperimentDefault from "FriendsSidebarExperiment.tsx";
import PresenceStore from "../../stores/PresenceStore.tsx";
import RelationshipStore from "../../stores/RelationshipStore.tsx";
import size from "../../../_runtime/metro/00002__.js";

function isEnabled() {
  const obj = FriendsSidebarExperimentDefault;
  return obj.getConfig({ location: "OnlineFriendsStore" }).appBarToggleEnabled;
}
function upsert(id) {
  if (RelationshipStore.isFriend(id)) {
    let deleteResult;
    if (PresenceStore.getStatus(id) !== StatusTypes.OFFLINE) {
      const hasItem = set.has(id);
      let flag = !hasItem;
      if (flag) {
        set.add(id);
        flag = true;
      }
      deleteResult = flag;
    }
    return deleteResult;
  }
  deleteResult = set.delete(id);
}
function rebuild() {
  closure_7 = isEnabled();
  const tmp = isEnabled();
  if (closure_7) {
    const _Set = Set;
    const self = this;
    const self2 = this;
    set = new Set();
    const friendIDs = RelationshipStore.getFriendIDs();
    for (const item10019 of friendIDs) {
      if (PresenceStore.getStatus(item10019) !== StatusTypes.OFFLINE) {
        let addResult = set.add(item10019);
      }
      continue;
    }
    const obj2 = SetUtils;
    return !obj2.areSetsEqual(set, set);
  } else {
    return clear();
  }
}
function handleExperimentChange() {
  const obj = FriendsSidebarExperimentDefault;
  const tmp = obj.getConfig({ location: "OnlineFriendsStore" }).appBarToggleEnabled !== closure_7 && rebuild();
  return tmp;
}
function clear() {
  const tmp = set.size > 0;
  set = new Set();
  return tmp;
}
const StatusTypes = Constants.StatusTypes;
let set = new Set();
let closure_7 = false;
const Store = get_initializedDefault.Store;
class OnlineFriendsStore extends Store {
  initialize() {
    this.waitFor(ApexExperiment.ApexExperimentStore, PresenceStore, RelationshipStore);
  }
  getOnlineFriendCount() {
    return set.size;
  }
}
const prototype = OnlineFriendsStore.prototype;
OnlineFriendsStore.displayName = "OnlineFriendsStore";
let obj = {
  CONNECTION_OPEN: rebuild,
  CONNECTION_OPEN_SUPPLEMENTAL: rebuild,
  OVERLAY_INITIALIZE: rebuild,
  PRESENCES_REPLACE: rebuild,
  GUILD_CREATE: rebuild,
  GUILD_DELETE: rebuild,
  GUILD_MEMBER_REMOVE: function handleGuildMemberRemove(user) {
    user = user.user;
    const obj = FriendsSidebarExperimentDefault;
    let appBarToggleEnabled = obj.getConfig({ location: "OnlineFriendsStore" }).appBarToggleEnabled;
    if (appBarToggleEnabled) {
      const id = user.id;
      if (RelationshipStore.isFriend(id)) {
        let deleteResult;
        if (PresenceStore.getStatus(id) !== StatusTypes.OFFLINE) {
          const hasItem = set.has(id);
          let flag = !hasItem;
          if (flag) {
            set.add(id);
            flag = true;
          }
          deleteResult = flag;
        }
        appBarToggleEnabled = deleteResult;
      }
      deleteResult = set.delete(id);
    }
    return appBarToggleEnabled;
  },
  PRESENCE_UPDATES: function handlePresenceUpdates(updates) {
    updates = updates.updates;
    if (isEnabled()) {
      let flag = false;
      for (const item10012 of updates) {
        let tmp4 = upsert(item10012.user.id) || flag;
        flag = tmp4;
        continue;
      }
      return flag;
    } else {
      return false;
    }
  },
  RELATIONSHIP_ADD: function handleRelationshipAdd(relationship) {
    relationship = relationship.relationship;
    const obj = FriendsSidebarExperimentDefault;
    let appBarToggleEnabled = obj.getConfig({ location: "OnlineFriendsStore" }).appBarToggleEnabled;
    if (appBarToggleEnabled) {
      const id = relationship.id;
      if (RelationshipStore.isFriend(id)) {
        let deleteResult;
        if (PresenceStore.getStatus(id) !== StatusTypes.OFFLINE) {
          const hasItem = set.has(id);
          let flag = !hasItem;
          if (flag) {
            set.add(id);
            flag = true;
          }
          deleteResult = flag;
        }
        appBarToggleEnabled = deleteResult;
      }
      deleteResult = set.delete(id);
    }
    return appBarToggleEnabled;
  },
  RELATIONSHIP_REMOVE: function handleRelationshipRemove(relationship) {
    relationship = relationship.relationship;
    const obj = FriendsSidebarExperimentDefault;
    let appBarToggleEnabled = obj.getConfig({ location: "OnlineFriendsStore" }).appBarToggleEnabled;
    if (appBarToggleEnabled) {
      const id = relationship.id;
      if (RelationshipStore.isFriend(id)) {
        let deleteResult;
        if (PresenceStore.getStatus(id) !== StatusTypes.OFFLINE) {
          const hasItem = set.has(id);
          let flag = !hasItem;
          if (flag) {
            set.add(id);
            flag = true;
          }
          deleteResult = flag;
        }
        appBarToggleEnabled = deleteResult;
      }
      deleteResult = set.delete(id);
    }
    return appBarToggleEnabled;
  },
  RELATIONSHIP_UPDATE: function handleRelationshipUpdate(relationship) {
    relationship = relationship.relationship;
    const obj = FriendsSidebarExperimentDefault;
    let appBarToggleEnabled = obj.getConfig({ location: "OnlineFriendsStore" }).appBarToggleEnabled;
    if (appBarToggleEnabled) {
      const id = relationship.id;
      if (RelationshipStore.isFriend(id)) {
        let deleteResult;
        if (PresenceStore.getStatus(id) !== StatusTypes.OFFLINE) {
          const hasItem = set.has(id);
          let flag = !hasItem;
          if (flag) {
            set.add(id);
            flag = true;
          }
          deleteResult = flag;
        }
        appBarToggleEnabled = deleteResult;
      }
      deleteResult = set.delete(id);
    }
    return appBarToggleEnabled;
  },
  CONNECTION_OPEN_STATE_UPDATE: function handleConnectionOpenStateUpdate(apexExperiments) {
    let tmp = null != apexExperiments.apexExperiments;
    if (tmp) {
      const obj = FriendsSidebarExperimentDefault;
      tmp = obj.getConfig({ location: "OnlineFriendsStore" }).appBarToggleEnabled !== closure_7 && rebuild();
      const tmp5 = obj.getConfig({ location: "OnlineFriendsStore" }).appBarToggleEnabled !== closure_7 && rebuild();
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
};
const onlineFriendsStore = new OnlineFriendsStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/friends/OnlineFriendsStore.tsx");

export default onlineFriendsStore;
