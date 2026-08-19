// discord_app/stores/GamePartyStore.tsx
import applyDefault from "../../_runtime/00012_apply.js";
import initializeDefault from "../../discord_common/js/packages/flux/index.tsx";
import dispatcherDefault from "../Dispatcher.tsx";
import fetchFingerprint from "AuthenticationStore.tsx";
import markAllUserIdListsStale from "RelationshipStore.tsx";
import filterPlayingActivities from "SelfPresenceStore.tsx";
import ME from "../Constants.tsx";

function updateParty(closure_6, id, activities, status) {
  const found = activities.find((item, index) => {
    let BooleanResult = null != item.party;
    if (BooleanResult) {
      const _Boolean = Boolean;
      BooleanResult = Boolean(item.party.id);
    }
    return BooleanResult;
  });
  id = null;
  if (null != found) {
    id = null;
    if (null != found.party) {
      id = found.party.id;
    }
  }
  let obj = dependencyMap[id];
  if (obj == null) {
    obj = {};
  }
  if (null != id) {
    if (status !== constants.OFFLINE) {
      if (null != tmp8) {
        if (tmp8 === id) {
          return false;
        } else {
          obj = dependencyMap[id];
          if (obj == null) {
            obj = {};
          }
          if (null != obj[closure_6]) {
            delete tmp5[tmp];
            if (obj3.isEmpty(dependencyMap[id])) {
              delete tmp2[tmp3];
            }
            let value = map.get(tmp9);
            if (null != value) {
              value.delete(id);
              if (0 === value.size) {
                map.delete(tmp9);
              }
            }
            obj3 = applyDefault;
          }
        }
      }
      let tmp19 = dependencyMap[id];
      if (null == tmp19) {
        obj = {};
        dependencyMap[id] = obj;
        tmp19 = obj;
      }
      tmp19[closure_6] = id;
      if (!closure_3.isBlocked(id)) {
        if (!closure_3.isIgnored(id)) {
          value = map.get(id);
          if (value == null) {
            const _Set = Set;
            value = new Set();
          }
          const result = map.set(id, value);
          value.add(id);
        }
      }
      return true;
    }
  }
  let flag3 = null != tmp8;
  if (flag3) {
    obj1 = dependencyMap[id];
    if (obj1 == null) {
      obj1 = {};
    }
    flag3 = true;
    if (null != obj1[closure_6]) {
      delete tmp4[tmp];
      if (obj9.isEmpty(dependencyMap[id])) {
        delete tmp[tmp3];
      }
      const value1 = map.get(tmp29);
      flag3 = true;
      if (null != value1) {
        value1.delete(id);
        flag3 = true;
        if (0 === value1.size) {
          map.delete(tmp29);
          flag3 = true;
        }
      }
      obj9 = applyDefault;
    }
  }
  return flag3;
}
function handleGuildCreate(guild) {
  guild = guild.guild;
  let flag = false;
  for (const item10009 of tmp) {
    if (false !== updateParty(guild.id, item10009.user.id, item10009.activities, item10009.status)) {
      flag = true;
    }
    continue;
  }
  return flag;
}
function handleLocalPresenceUpdate() {
  id = id.getId();
  return updateParty(closure_6, id, activities.getActivities());
}
function handleRelationshipAddOrUpdate(relationship) {
  relationship = relationship.relationship;
  if (!closure_3.isBlocked(relationship.id)) {
    if (!closure_3.isIgnored(relationship.id)) {
      return false;
    }
  }
  if (null == dependencyMap[relationship.id]) {
    return false;
  } else {
    const values = applyDefault.values(tmp);
    for (const item10025 of values) {
      let value = map.get(item10025);
      let obj3 = value;
      if (null != value) {
        let deleteResult = obj3.delete(relationship.id);
      }
      continue;
    }
  }
}
({ StatusTypes: c5, ME: closure_6 } = ME);
let closure_7 = {};
let map = new Map();
const Store = initializeDefault.Store;
class GamePartyStore extends Store {
}
const prototype = GamePartyStore.prototype;
prototype["initialize"] = function initialize() {
  const items = [closure_4];
  this.syncWith(items, handleLocalPresenceUpdate);
  this.waitFor(closure_2, closure_3, closure_4);
};
prototype["getParty"] = function getParty(id) {
  let value = null;
  if (null != id) {
    value = null;
    if (map.has(id)) {
      value = map.get(id);
    }
  }
  return value;
};
prototype["getUserParties"] = function getUserParties() {
  return closure_7;
};
prototype["getParties"] = function getParties() {
  return map;
};
GamePartyStore.displayName = "GamePartyStore";
const gamePartyStore = new GamePartyStore(dispatcherDefault, {
  CONNECTION_OPEN_SUPPLEMENTAL: function handleConnectionOpenSupplemental(arg0) {
    ({ guilds, presences } = arg0);
    let flag = false;
    const iter = presences[Symbol.iterator]();
    while (iter !== undefined) {
      ({ user, status, activities } = nextResult);
      let tmp3 = null != user;
      if (tmp3) {
        tmp3 = false !== updateParty(closure_6, tmp2.id, activities, status);
      }
      if (tmp3) {
        flag = true;
      }
      continue;
    }
    for (const item10032 of guilds) {
      let obj = { guild: null };
      obj[0] = item10032;
      if (false !== handleGuildCreate(obj)) {
        flag = true;
      }
      continue;
    }
    return flag;
  },
  OVERLAY_INITIALIZE: function handleOverlayInitialize(parties) {
    parties = parties.parties;
    map = new Map();
    const merged = Object.assign(parties.userParties);
    const keys = Object.keys(parties);
    const item = keys.forEach((item, index) => map.set(item, new Set(parties[item])));
  },
  GUILD_CREATE: handleGuildCreate,
  PRESENCES_REPLACE: function handlePresenceReplace(arg0) {
    let flag = false;
    const iter = arg0.presences[Symbol.iterator]();
    while (iter !== undefined) {
      ({ user, activities } = nextResult);
      let tmp3 = null != user;
      if (tmp3) {
        tmp3 = false !== updateParty(closure_6, tmp2.id, activities);
      }
      if (tmp3) {
        flag = true;
      }
      continue;
    }
    return flag;
  },
  PRESENCE_UPDATES: function handlePresenceUpdates(updates) {
    updates = updates.updates;
    const mapped = updates.map((item, index) => {
      ({ guildId, status, activities } = item);
      if (guildId == null) {
        guildId = closure_6;
      }
      return callback(guildId, item.user.id, activities, status);
    });
    return mapped.some((item, index) => item);
  },
  THREAD_MEMBER_LIST_UPDATE: function handleThreadMemberListUpdate(members) {
    members = members.members;
    const mapped = members.map((item, index) => item.presence);
    const guildId = members.guildId;
    c1 = false;
    const item = mapped.forEach((item, index) => {
      let tmp = null != item;
      if (tmp) {
        tmp = updateParty(closure_0, item.user.id, item.activities, item.status);
      }
      if (tmp) {
        c1 = true;
      }
    });
    return c1;
  },
  THREAD_MEMBERS_UPDATE: function handleThreadMembersUpdate(addedMembers) {
    addedMembers = addedMembers.addedMembers;
    let tmp2 = null != addedMembers;
    if (tmp2) {
      const mapped = addedMembers.map((item, index) => item.presence);
      importDefault = tmp;
      c1 = false;
      const item = mapped.forEach((item, index) => {
        let tmp = null != item;
        if (tmp) {
          tmp = updateParty(closure_0, item.user.id, item.activities, item.status);
        }
        if (tmp) {
          c1 = true;
        }
      });
      tmp2 = c1;
    }
    return tmp2;
  },
  RELATIONSHIP_ADD: handleRelationshipAddOrUpdate,
  RELATIONSHIP_UPDATE: handleRelationshipAddOrUpdate,
  RELATIONSHIP_REMOVE: function handleRelationshipRemove(relationship) {
    relationship = relationship.relationship;
    if (null == dependencyMap[relationship.id]) {
      return false;
    } else {
      const values = applyDefault.values(tmp);
      for (const item10017 of values) {
        let value = map.get(item10017);
        let obj2 = value;
        if (null != value) {
          let addResult = obj2.add(relationship.id);
        }
        continue;
      }
    }
  }
});
let result = require("obj132").fileFinishedImporting("stores/GamePartyStore.tsx");

export default gamePartyStore;