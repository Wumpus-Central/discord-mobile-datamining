// === Module 4209: RelationshipStore ===

// Module 4209 (RelationshipStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import _slicedToArray from "module_32" /* 32 */;
import MessageRecord from "MessageRecord" /* 4210 */;
import UserStore from "UserStore" /* 1371 */;

function markAllUserIdListsStale() {
  set3.add("friends");
  set3.add("blocked");
  set3.add("ignored");
  set3.add("blockedOrIgnored");
}
function flushStaleUserIdLists() {
  for (const item10005 of set3) {
    closure_19[item10005] = undefined;
    continue;
  }
  set3.clear();
}
function upsertRelationship(id, type) {
  value = map.get(id);
  if (value !== type) {
    if (null != value) {
      value = map1.get(value);
      if (value != null) {
        value.delete(id);
      }
    }
    const result = map.set(id, type);
    const value1 = map1.get(type);
    if (null != value1) {
      value1.add(id);
    } else {
      const _Set = Set;
      const items = [id];
      set = new Set(items);
      const result1 = obj3.set(type, set);
    }
    if (value === RelationshipTypes.FRIEND) {
      set3.add("friends");
    } else if (value === tmp13.BLOCKED) {
      set3.add("blocked");
      set3.add("ignored");
      set3.add("blockedOrIgnored");
    }
    if (type === RelationshipTypes.FRIEND) {
      set3.add("friends");
    } else if (type === tmp13.BLOCKED) {
      set3.add("blocked");
      set3.add("ignored");
      set3.add("blockedOrIgnored");
    }
    obj3 = map1;
  }
}
function removeRelationship(arg0) {
  value = map.get(arg0);
  if (null != value) {
    map.delete(arg0);
    value = map1.get(value);
    if (value != null) {
      value.delete(arg0);
    }
    if (value === RelationshipTypes.FRIEND) {
      set3.add("friends");
    } else if (value === tmp3.BLOCKED) {
      set3.add("blocked");
      set3.add("ignored");
      set3.add("blockedOrIgnored");
    }
  }
}
function recountPending() {
  size = set2.size;
  value = map1.get(RelationshipTypes.PENDING_INCOMING);
  let num;
  if (value != null) {
    num = value.size;
  }
  if (num == null) {
    num = 0;
  }
  closure_16 = Math.max(num - size - size, 0);
  closure_14 = closure_14 + 1;
}
const RelationshipTypes = fn(1074).RelationshipTypes;
const map = new Map();
let obj = {};
obj = {};
let set = new Set();
const set1 = new Set();
const set2 = new Set();
let closure_14 = 0;
const dependencyMap = {};
let closure_16 = 0;
let size = 0;
let closure_19 = { friends: "Array", blocked: "flexDirection", ignored: "y", blockedOrIgnored: "HermesInternal" };
const set3 = new Set();
const map1 = new Map();
const Store = initializeDefault.Store;
class RelationshipStore extends Store {
}
const prototype = RelationshipStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(UserStore);
};
prototype["isFriend"] = function isFriend(id) {
  let tmp = null != id;
  if (tmp) {
    tmp = map.get(id) === RelationshipTypes.FRIEND;
  }
  return tmp;
};
prototype["isBlockedOrIgnored"] = function isBlockedOrIgnored(id) {
  const self = this;
  return this.isBlocked(id) || self.isIgnored(id);
};
prototype["isBlockedOrIgnoredForMessage"] = function isBlockedOrIgnoredForMessage(message) {
  const self = this;
  return this.isBlockedForMessage(message) || self.isIgnoredForMessage(message);
};
prototype["isBlocked"] = function isBlocked(arg0) {
  let tmp = null != arg0;
  if (tmp) {
    tmp = map.get(arg0) === RelationshipTypes.BLOCKED;
  }
  return tmp;
};
prototype["isBlockedForMessage"] = function isBlockedForMessage(message) {
  if (null != message.author) {
    if (map.get(message.author.id) === RelationshipTypes.BLOCKED) {
      return true;
    }
  }
  const self = this;
  const isBlocked = this.isBlocked;
  if (message instanceof MessageRecord) {
    const interactionMetadata = message.interactionMetadata;
    let id;
    if (interactionMetadata != null) {
      const user2 = interactionMetadata.user;
      if (user2 != null) {
        id = user2.id;
      }
    }
    if (isBlocked(id)) {
      return true;
    }
  } else {
    const interaction_metadata = message.interaction_metadata;
    let id1;
    if (interaction_metadata != null) {
      const user = interaction_metadata.user;
      if (user != null) {
        id1 = user.id;
      }
    }
    if (isBlocked(id1)) {
      return true;
    }
  }
  return false;
};
prototype["isIgnored"] = function isIgnored(arg0) {
  let tmp = null != arg0;
  if (tmp) {
    let hasItem = map.get(arg0) !== RelationshipTypes.BLOCKED;
    if (hasItem) {
      hasItem = set1.has(arg0);
    }
    tmp = hasItem;
  }
  return tmp;
};
prototype["isIgnoredForMessage"] = function isIgnoredForMessage(message) {
  const self = this;
  if (null != message.author) {
    if (self.isIgnored(message.author.id)) {
      return true;
    }
  }
  const isIgnored = self.isIgnored;
  if (message instanceof MessageRecord) {
    const interactionMetadata = message.interactionMetadata;
    let id;
    if (interactionMetadata != null) {
      const user2 = interactionMetadata.user;
      if (user2 != null) {
        id = user2.id;
      }
    }
    if (isIgnored(id)) {
      return true;
    }
  } else {
    const interaction_metadata = message.interaction_metadata;
    let id1;
    if (interaction_metadata != null) {
      const user = interaction_metadata.user;
      if (user != null) {
        id1 = user.id;
      }
    }
    if (isIgnored(id1)) {
      return true;
    }
  }
  return false;
};
prototype["isUnfilteredPendingIncoming"] = function isUnfilteredPendingIncoming(nextResult) {
  const self = this;
  return map.get(nextResult) === RelationshipTypes.PENDING_INCOMING && !self.isSpam(nextResult) && !self.isIgnored(nextResult);
};
prototype["getPendingCount"] = function getPendingCount() {
  return closure_16;
};
prototype["getSpamCount"] = function getSpamCount() {
  return size;
};
prototype["getPendingIgnoredCount"] = function getPendingIgnoredCount() {
  return size;
};
prototype["getOutgoingCount"] = function getOutgoingCount() {
  value = map1.get(RelationshipTypes.PENDING_OUTGOING);
  let num;
  if (value != null) {
    num = value.size;
  }
  if (num == null) {
    num = 0;
  }
  return num;
};
prototype["getFriendCount"] = function getFriendCount() {
  value = map1.get(RelationshipTypes.FRIEND);
  let num;
  if (value != null) {
    num = value.size;
  }
  if (num == null) {
    num = 0;
  }
  return num;
};
prototype["getRelationshipCount"] = function getRelationshipCount() {
  return map.size;
};
prototype["getMutableRelationships"] = function getMutableRelationships() {
  return map;
};
prototype["getVersion"] = function getVersion() {
  return closure_14;
};
prototype["isSpam"] = function isSpam(arg0) {
  return set.has(arg0);
};
prototype["getRelationshipType"] = function getRelationshipType(arg0) {
  let NONE = map.get(arg0);
  if (null == NONE) {
    NONE = RelationshipTypes.NONE;
  }
  return NONE;
};
prototype["getNickname"] = function getNickname(arg0) {
  return obj[arg0];
};
prototype["getSince"] = function getSince(userId) {
  return obj[userId];
};
prototype["getSinces"] = function getSinces() {
  return obj;
};
prototype["getNote"] = function getNote(arg0) {
  return obj1[arg0];
};
prototype["getFriendIDs"] = function getFriendIDs() {
  if (null == closure_19.friends) {
    let items = map1.get(RelationshipTypes.FRIEND);
    if (items == null) {
      items = [];
    }
    tmp.friends = Array.from(items);
  }
  return closure_19.friends;
};
prototype["getBlockedIDs"] = function getBlockedIDs() {
  if (null == closure_19.blocked) {
    let items = map1.get(RelationshipTypes.BLOCKED);
    if (items == null) {
      items = [];
    }
    tmp.blocked = Array.from(items);
  }
  return closure_19.blocked;
};
prototype["getIgnoredIDs"] = function getIgnoredIDs() {
  const self = this;
  if (null == closure_19.ignored) {
    const _Array = Array;
    tmp.ignored = Array.from(set1.values()).filter((item) => self.isIgnored(item));
    const arr = Array.from(set1.values());
  }
  return closure_19.ignored;
};
prototype["getBlockedOrIgnoredIDs"] = function getBlockedOrIgnoredIDs() {
  let tmp = closure_19;
  if (null == closure_19.blockedOrIgnored) {
    const _Set = Set;
    set = new Set(set1);
    value = map1.get(RelationshipTypes.BLOCKED);
    if (null != value) {
      for (const item10019 of value) {
        let addResult = set.add(item10019);
        continue;
      }
    }
    closure_19.blockedOrIgnored = set;
    tmp = closure_19;
  }
  return tmp.blockedOrIgnored;
};
prototype["getOriginApplicationId"] = function getOriginApplicationId(id) {
  return obj2[id];
};
prototype["isStranger"] = function isStranger(userId) {
  if (null != dependencyMap[userId]) {
    const _Date = Date;
    if (dependencyMap[userId].expiry < Date.now()) {
      delete tmp[tmp2];
    } else {
      return dependencyMap[userId].isStranger;
    }
  }
};
RelationshipStore.displayName = "RelationshipStore";
obj = {
  CONNECTION_OPEN: function handleConnectionOpen(relationships) {
    map.clear();
    map1.clear();
    set1.clear();
    set.clear();
    set2.clear();
    set3.add("friends");
    set3.add("blocked");
    set3.add("ignored");
    set3.add("blockedOrIgnored");
    closure_15 = {};
    relationships = relationships.relationships;
    const item = relationships.forEach((id) => {
      upsertRelationship(id.id, id.type);
      if (null != id.nickname) {
        closure_1_7[id.id] = id.nickname;
      }
      if (null != id.since) {
        closure_1_8[id.id] = id.since;
      }
      if (null != id.note) {
        obj1[id.id] = id.note;
      }
      if (id.is_spam_request) {
        set.add(id.id);
      }
      if (null != id.origin_application_id) {
        obj2[id.id] = id.origin_application_id;
      }
      if (id.user_ignored) {
        id = id.id;
        if (!set2.has(id)) {
          obj.add(id);
          set4.add("ignored");
          set4.add("blockedOrIgnored");
        }
        if (id.type === constants.PENDING_INCOMING) {
          set3.add(id.id);
        }
        obj = set2;
      }
    });
    flushStaleUserIdLists();
    size = set2.size;
    value = map1.get(RelationshipTypes.PENDING_INCOMING);
    let num;
    if (value != null) {
      num = value.size;
    }
    if (num == null) {
      num = 0;
    }
    closure_16 = Math.max(num - size - size, 0);
    closure_14 = closure_14 + 1;
  },
  OVERLAY_INITIALIZE: function handleOverlayInitialize(arg0) {
    map.clear();
    map1.clear();
    markAllUserIdListsStale();
    while (tmp4 !== undefined) {
      let tmp7 = _slicedToArray(tmp5, 2);
      let tmp9 = upsertRelationship(tmp7[0], tmp7[1]);
      continue;
    }
    flushStaleUserIdLists();
    recountPending();
  },
  RELATIONSHIP_ADD: function handleRelationshipAdd(relationship) {
    value = map.get(relationship.relationship.id);
    upsertRelationship(relationship.relationship.id, relationship.relationship.type);
    if (null != relationship.relationship.nickname) {
      obj = {};
      const merged = Object.assign(obj);
      obj[relationship.relationship.id] = relationship.relationship.nickname;
    }
    if (null != relationship.relationship.since) {
      obj = {};
      const merged1 = Object.assign(obj);
      obj[relationship.relationship.id] = relationship.relationship.since;
    }
    if (null != relationship.relationship.note) {
      obj = {};
      const merged2 = Object.assign(obj1);
      obj[relationship.relationship.id] = relationship.relationship.note;
      obj1 = obj;
    }
    if (null != relationship.relationship.originApplicationId) {
      obj1 = {};
      const merged3 = Object.assign(obj2);
      obj1[relationship.relationship.id] = relationship.relationship.originApplicationId;
      obj2 = obj1;
    }
    if (relationship.relationship.isSpamRequest) {
      obj5.add(relationship.relationship.id);
    } else {
      obj5.delete(relationship.relationship.id);
    }
    const id = relationship.relationship.id;
    if (relationship.relationship.userIgnored) {
      if (!obj6.has(id)) {
        obj6.add(id);
        set3.add("ignored");
        set3.add("blockedOrIgnored");
      }
      if (relationship.relationship.type === RelationshipTypes.PENDING_INCOMING) {
        set2.add(relationship.relationship.id);
      } else if (relationship.relationship.type === tmp27.FRIEND) {
        set2.delete(relationship.relationship.id);
      }
    } else {
      if (obj6.delete(id)) {
        set3.add("ignored");
        set3.add("blockedOrIgnored");
      }
      set2.delete(relationship.relationship.id);
    }
    flushStaleUserIdLists();
    size = set2.size;
    value = map1.get(RelationshipTypes.PENDING_INCOMING);
    let num;
    if (value != null) {
      num = value.size;
    }
    if (num == null) {
      num = 0;
    }
    closure_16 = Math.max(num - size - size, 0);
    closure_14 = closure_14 + 1;
    if (tmp35) {
      obj2 = { type: "FRIEND_REQUEST_ACCEPTED", user: relationship.relationship.user };
      DispatcherDefault.dispatch(obj2);
    }
  },
  RELATIONSHIP_REMOVE: function handleRelationshipRemove(relationship) {
    const id = relationship.relationship.id;
    obj = map;
    value = map.get(id);
    if (null != value) {
      obj.delete(id);
      value = map1.get(value);
      if (value != null) {
        value.delete(id);
      }
      if (value === RelationshipTypes.FRIEND) {
        set3.add("friends");
      } else if (value === tmp5.BLOCKED) {
        set3.add("blocked");
        set3.add("ignored");
        set3.add("blockedOrIgnored");
      }
    }
    if (null != obj[relationship.relationship.id]) {
      obj = {};
      const merged = Object.assign(obj);
      const id2 = relationship.relationship.id;
      delete tmp2[tmp];
    }
    if (null != obj[relationship.relationship.id]) {
      obj = {};
      const merged1 = Object.assign(obj);
      const id3 = relationship.relationship.id;
      delete tmp2[tmp];
    }
    if (null != obj1[relationship.relationship.id]) {
      obj1 = {};
      const merged2 = Object.assign(obj1);
      const id4 = relationship.relationship.id;
      delete tmp2[tmp];
    }
    if (null != obj2[relationship.relationship.id]) {
      obj2 = {};
      const merged3 = Object.assign(obj2);
      const id5 = relationship.relationship.id;
      delete tmp2[tmp];
    }
    if (!relationship.relationship.userIgnored) {
      if (set1.delete(relationship.relationship.id)) {
        set3.add("ignored");
        set3.add("blockedOrIgnored");
      }
    }
    set2.delete(relationship.relationship.id);
    set.delete(relationship.relationship.id);
    flushStaleUserIdLists();
    size = set2.size;
    const value1 = map1.get(RelationshipTypes.PENDING_INCOMING);
    let num;
    if (value1 != null) {
      num = value1.size;
    }
    if (num == null) {
      num = 0;
    }
    closure_16 = Math.max(num - size - size, 0);
    closure_14 = closure_14 + 1;
  },
  RELATIONSHIP_UPDATE: function handleRelationshipUpdate(relationship) {
    relationship = relationship.relationship;
    upsertRelationship(relationship.id, relationship.type);
    if (null == relationship.since) {
      const id = relationship.id;
      delete tmp2[tmp];
    } else {
      obj[relationship.id] = relationship.since;
    }
    if (null == relationship.nickname) {
      const id2 = relationship.id;
      delete tmp2[tmp];
    } else {
      obj[relationship.id] = relationship.nickname;
    }
    if (null == relationship.note) {
      const id3 = relationship.id;
      delete tmp2[tmp];
    } else {
      obj1[relationship.id] = relationship.note;
    }
    if (relationship.isSpamRequest) {
      obj.add(relationship.id);
    } else {
      obj.delete(relationship.id);
    }
    if (null != dependencyMap[relationship.id]) {
      const id4 = relationship.id;
      delete tmp3[tmp2];
    }
    if (null == relationship.originApplicationId) {
      const id5 = relationship.id;
      delete tmp3[tmp2];
    } else {
      obj2[relationship.id] = relationship.originApplicationId;
    }
    const id6 = relationship.id;
    if (relationship.userIgnored) {
      if (!obj2.has(id6)) {
        obj2.add(id6);
        set3.add("ignored");
        set3.add("blockedOrIgnored");
      }
      if (relationship.type === RelationshipTypes.PENDING_INCOMING) {
        set2.add(relationship.id);
      }
    } else {
      if (obj2.delete(id6)) {
        set3.add("ignored");
        set3.add("blockedOrIgnored");
      }
      set2.delete(relationship.id);
    }
    flushStaleUserIdLists();
    size = set2.size;
    value = map1.get(RelationshipTypes.PENDING_INCOMING);
    let num;
    if (value != null) {
      num = value.size;
    }
    if (num == null) {
      num = 0;
    }
    closure_16 = Math.max(num - size - size, 0);
    closure_14 = closure_14 + 1;
  },
  RELATIONSHIP_PENDING_INCOMING_REMOVED: function handlePendingIncomingRemoved() {
    const keys = map.keys();
    const iter = keys[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp5 = nextResult;
      if (map.get(nextResult) === RelationshipTypes.PENDING_INCOMING) {
        let tmp10 = removeRelationship(tmp5);
        let deleteResult = set.delete(tmp5);
        let deleteResult1 = set2.delete(tmp5);
        delete tmp[tmp2];
      }
      continue;
    }
    flushStaleUserIdLists();
    recountPending();
  },
  UPDATE_STRANGER_STATUS: function handleUpdateStrangerStatus(isStranger) {
    closure_15[isStranger.userId] = { expiry: Date.now() + 300000, isStranger: isStranger.isStranger };
  }
};
const relationshipStore = new RelationshipStore(DispatcherDefault, obj);
size = fn(2);
let result = size.fileFinishedImporting("stores/RelationshipStore.tsx");

export default relationshipStore;