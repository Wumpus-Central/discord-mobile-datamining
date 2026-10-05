// discord_app/stores/GamePartyStore.tsx
import _modDef12 from "../../_runtime/metro/00012__.js";
import get_initializedDefault from "../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../Dispatcher.tsx";
import AuthenticationStore from "AuthenticationStore.tsx";
import RelationshipStore from "RelationshipStore.tsx";
import SelfPresenceStore from "SelfPresenceStore.tsx";
import Constants from "../Constants.tsx";
import size from "../../_runtime/metro/00002__.js";

let importDefault, set;

let hasOwnProperty;
let metroRequire;
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
  let obj = closure_7[id2];
  if (obj == null) {
    obj = {};
  }
  if (null != id) {
    if (status !== hasOwnProperty.OFFLINE) {
      if (null != obj[id]) {
        if (obj[id] === id) {
          return false;
        } else {
          let obj2 = closure_7[id2];
          if (obj2 == null) {
            obj2 = {};
          }
          if (null != obj2[id]) {
            delete closure_7[id2][id];
            const obj3 = _modDef12;
            if (obj3.isEmpty(closure_7[id2])) {
              delete closure_7[id2];
            }
            const value = map.get(tmp6);
            if (null != value) {
              value.delete(id2);
              if (0 === value.size) {
                map.delete(obj2[id]);
              }
            }
          }
        }
      }
      let tmp16 = closure_7[id2];
      if (null == tmp16) {
        const obj4 = {};
        closure_7[id2] = obj4;
        tmp16 = obj4;
      }
      tmp16[id] = id;
      if (!RelationshipStore.isBlocked(id2)) {
        if (!RelationshipStore.isIgnored(id2)) {
          let value3 = map.get(id);
          if (value3 == null) {
            const _Set = Set;
            const self = this;
            const self2 = this;
            value3 = new Set();
          }
          const result = map.set(id, value3);
          value3.add(id2);
        }
      }
      return true;
    }
  }
  let flag3 = null != tmp5;
  if (flag3) {
    let obj5 = closure_7[id2];
    if (obj5 == null) {
      obj5 = {};
    }
    flag3 = true;
    if (null != obj5[id]) {
      delete closure_7[id2][id];
      const obj9 = _modDef12;
      if (obj9.isEmpty(closure_7[id2])) {
        delete closure_7[id2];
      }
      const value4 = map.get(tmp24);
      flag3 = true;
      if (null != value4) {
        value4.delete(id2);
        flag3 = true;
        if (0 === value4.size) {
          map.delete(obj5[id]);
          flag3 = true;
        }
      }
    }
  }
  return flag3;
}
function handleGuildCreate(guild) {
  guild = guild.guild;
  let flag = false;
  const presences = guild.presences;
  for (const item10009 of presences) {
    if (false !== updateParty(guild.id, item10009.user.id, item10009.activities, item10009.status)) {
      flag = true;
    }
    continue;
  }
  return flag;
}
function handleLocalPresenceUpdate() {
  const id = AuthenticationStore.getId();
  return updateParty(metroRequire, id, SelfPresenceStore.getActivities());
}
function handleRelationshipAddOrUpdate(relationship) {
  relationship = relationship.relationship;
  if (!RelationshipStore.isBlocked(relationship.id)) {
    if (!RelationshipStore.isIgnored(relationship.id)) {
      return false;
    }
  }
  if (null == closure_7[relationship.id]) {
    return false;
  } else {
    const obj2 = _modDef12;
    const values = obj2.values(tmp);
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
({ StatusTypes: hasOwnProperty, ME: metroRequire } = Constants);
let closure_7 = {};
let map = new Map();
const Store = get_initializedDefault.Store;
class GamePartyStore extends Store {
  initialize() {
    const items = [SelfPresenceStore];
    this.syncWith(items, handleLocalPresenceUpdate);
    this.waitFor(AuthenticationStore, RelationshipStore, SelfPresenceStore);
  }
  getParty(id) {
    let value = null;
    if (null != id) {
      value = null;
      if (map.has(id)) {
        value = map.get(id);
      }
    }
    return value;
  }
  getUserParties() {
    return closure_7;
  }
  getParties() {
    return map;
  }
}
const prototype = GamePartyStore.prototype;
GamePartyStore.displayName = "GamePartyStore";
let obj = {
  CONNECTION_OPEN_SUPPLEMENTAL: function handleConnectionOpenSupplemental(arg0) {
    let activities;
    let guilds;
    let presences;
    let status;
    let user;
    ({ guilds, presences } = arg0);
    let flag = false;
    const iter = presences[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      ({ user, status, activities } = nextResult);
      let tmp3 = null != user;
      if (tmp3) {
        tmp3 = false !== updateParty(metroRequire, tmp2.id, activities, status);
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
    const userParties = parties.userParties;
    map = new Map();
    const obj = {};
    const merged = Object.assign(userParties);
    const keys = Object.keys(parties);
    const item = keys.forEach((item) => {
      set = map.set;
      const set1 = new Set(parties[item]);
      return set(item, set1);
    });
  },
  GUILD_CREATE: handleGuildCreate,
  PRESENCES_REPLACE: function handlePresenceReplace(arg0) {
    let activities;
    let user;
    let flag = false;
    const iter = arg0.presences[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      ({ user, activities } = nextResult);
      let tmp3 = null != user && false !== updateParty(metroRequire, tmp2.id, activities);
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
      let activities;
      let guildId;
      let status;
      ({ guildId, status, activities } = user);
      user = user.user;
      if (guildId == null) {
        guildId = closure_1_6;
      }
      return updateParty(guildId, user.id, activities, status);
    });
    return mapped.some((item) => item);
  },
  THREAD_MEMBER_LIST_UPDATE: function handleThreadMemberListUpdate(members) {
    members = members.members;
    const guildId = members.guildId;
    const mapped = members.map((presence) => presence.presence);
    let c1 = false;
    const item = mapped.forEach((user) => {
      const tmp = null != user && updateParty(importDefault, user.user.id, user.activities, user.status);
      if (tmp) {
        c1 = true;
      }
    });
    return c1;
  },
  THREAD_MEMBERS_UPDATE: function handleThreadMembersUpdate(addedMembers) {
    let closure_0;
    let tmp;
    addedMembers = addedMembers.addedMembers;
    let tmp2 = null != addedMembers;
    if (tmp2) {
      const mapped = addedMembers.map((presence) => presence.presence);
      importDefault = tmp;
      let c1 = false;
      const item = mapped.forEach((user) => {
        const tmp = null != user && updateParty(importDefault, user.user.id, user.activities, user.status);
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
    if (null == closure_7[relationship.id]) {
      return false;
    } else {
      const obj = _modDef12;
      const values = obj.values(tmp);
      for (const item10017 of values) {
        let value = map.get(item10017);
        let obj2 = value;
        if (null != value) {
          let addResult = obj2.add(relationship.id);
        }
        continue;
      }
    }
  },
};
const gamePartyStore = new GamePartyStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("stores/GamePartyStore.tsx");

export default gamePartyStore;
