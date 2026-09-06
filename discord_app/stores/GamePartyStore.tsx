// === Module 13229: GamePartyStore ===

// Module 13229 (GamePartyStore)
import _modDef12 from "module_12" /* 12 */;
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import RelationshipStore from "RelationshipStore" /* 4209 */;
import SelfPresenceStore from "SelfPresenceStore" /* 5279 */;

function updateParty(id, id2, activities, status) {
  const found = activities.find((party) => {
    let BooleanResult = null != party.party;
    if (BooleanResult) {
      const _Boolean = Boolean;
      BooleanResult = Boolean(party.party.id);
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
  let obj = dependencyMap[id2];
  if (obj == null) {
    obj = {};
  }
  if (null != id) {
    if (status !== constants.OFFLINE) {
      if (null != tmp8) {
        if (tmp8 === id) {
          return false;
        } else {
          obj = dependencyMap[id2];
          if (obj == null) {
            obj = {};
          }
          if (null != obj[id]) {
            delete tmp5[tmp];
            if (obj3.isEmpty(dependencyMap[id2])) {
              delete tmp2[tmp3];
            }
            value = map.get(tmp9);
            if (null != value) {
              value.delete(id2);
              if (0 === value.size) {
                map.delete(tmp9);
              }
            }
            obj3 = _modDef12;
          }
        }
      }
      let tmp19 = dependencyMap[id2];
      if (null == tmp19) {
        obj = {};
        dependencyMap[id2] = obj;
        tmp19 = obj;
      }
      tmp19[id] = id;
      if (!RelationshipStore.isBlocked(id2)) {
        if (!RelationshipStore.isIgnored(id2)) {
          value = map.get(id);
          if (value == null) {
            const _Set = Set;
            value = new Set();
          }
          const result = map.set(id, value);
          value.add(id2);
        }
      }
      return true;
    }
  }
  let flag3 = null != tmp8;
  if (flag3) {
    let obj1 = dependencyMap[id2];
    if (obj1 == null) {
      obj1 = {};
    }
    flag3 = true;
    if (null != obj1[id]) {
      delete tmp4[tmp];
      if (obj9.isEmpty(dependencyMap[id2])) {
        delete tmp[tmp3];
      }
      const value1 = map.get(tmp29);
      flag3 = true;
      if (null != value1) {
        value1.delete(id2);
        flag3 = true;
        if (0 === value1.size) {
          map.delete(tmp29);
          flag3 = true;
        }
      }
      obj9 = _modDef12;
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
  const id = AuthenticationStore.getId();
  return updateParty(timestampProducer, id, SelfPresenceStore.getActivities());
}
function handleRelationshipAddOrUpdate(relationship) {
  relationship = relationship.relationship;
  if (!RelationshipStore.isBlocked(relationship.id)) {
    if (!obj.isIgnored(relationship.id)) {
      return false;
    }
  }
  if (null == dependencyMap[relationship.id]) {
    return false;
  } else {
    const values = _modDef12.values(tmp);
    for (const item10025 of values) {
      value = map.get(item10025);
      let obj3 = value;
      if (null != value) {
        let deleteResult = obj3.delete(relationship.id);
      }
      continue;
    }
  }
  obj = RelationshipStore;
}
const Constants = fn(1074);
({ StatusTypes: hasOwnProperty, ME: metroRequire } = Constants);
const dependencyMap = {};
let map = new Map();
const Store = initializeDefault.Store;
class GamePartyStore extends Store {
}
const prototype = GamePartyStore.prototype;
prototype["initialize"] = function initialize() {
  const items = [SelfPresenceStore];
  this.syncWith(items, handleLocalPresenceUpdate);
  this.waitFor(AuthenticationStore, RelationshipStore, SelfPresenceStore);
};
prototype["getParty"] = function getParty(id) {
  value = null;
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
const gamePartyStore = new GamePartyStore(DispatcherDefault, {
  CONNECTION_OPEN_SUPPLEMENTAL: function handleConnectionOpenSupplemental(arg0) {
    ({ guilds, presences } = arg0);
    let flag = false;
    const iter = presences[Symbol.iterator]();
    while (iter !== undefined) {
      ({ user, status, activities } = nextResult);
      let tmp3 = null != user;
      if (tmp3) {
        tmp3 = false !== updateParty(timestampProducer, tmp2.id, activities, status);
      }
      if (tmp3) {
        flag = true;
      }
      continue;
    }
    for (const item10032 of guilds) {
      let obj = { guild: item10032 };
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
    const obj = {};
    const merged = Object.assign(parties.userParties);
    const keys = Object.keys(parties);
    const item = keys.forEach((item) => map.set(item, new Set(parties[item])));
  },
  GUILD_CREATE: handleGuildCreate,
  PRESENCES_REPLACE: function handlePresenceReplace(arg0) {
    let flag = false;
    const iter = arg0.presences[Symbol.iterator]();
    while (iter !== undefined) {
      ({ user, activities } = nextResult);
      let tmp3 = null != user;
      if (tmp3) {
        tmp3 = false !== updateParty(timestampProducer, tmp2.id, activities);
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
    const mapped = updates.map((user) => {
      ({ guildId, status, activities } = user);
      if (guildId == null) {
        guildId = closure_1_6;
      }
      return updateParty(guildId, user.user.id, activities, status);
    });
    return mapped.some((item) => item);
  },
  THREAD_MEMBER_LIST_UPDATE: function handleThreadMemberListUpdate(members) {
    members = members.members;
    const mapped = members.map((presence) => presence.presence);
    const guildId = members.guildId;
    c1 = false;
    const item = mapped.forEach((user) => {
      let tmp = null != user;
      if (tmp) {
        tmp = updateParty(closure_0, user.user.id, user.activities, user.status);
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
      const mapped = addedMembers.map((presence) => presence.presence);
      importDefault = tmp;
      c1 = false;
      const item = mapped.forEach((user) => {
        let tmp = null != user;
        if (tmp) {
          tmp = updateParty(closure_0, user.user.id, user.activities, user.status);
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
      const values = _modDef12.values(tmp);
      for (const item10017 of values) {
        value = map.get(item10017);
        let obj2 = value;
        if (null != value) {
          let addResult = obj2.add(relationship.id);
        }
        continue;
      }
    }
  }
});
const size = fn(2);
let result = size.fileFinishedImporting("stores/GamePartyStore.tsx");

export default gamePartyStore;