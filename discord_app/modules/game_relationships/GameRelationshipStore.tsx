// === Module 7658: GameRelationshipStore ===

// Module 7658 (GameRelationshipStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import RelationshipStore from "RelationshipStore" /* 4209 */;

function recountRelationshipTypes() {
  c0 = 0;
  c1 = 0;
  c2 = 0;
  const values = secondaryIndexMap.values();
  const item = values.forEach((item) => {
    ({ type, id } = item);
    if (type === RelationshipTypes.FRIEND) {
      closure_2 = closure_2 + 1;
    } else if (type === tmp.PENDING_OUTGOING) {
      closure_1 = closure_1 + 1;
    } else if (type === tmp.PENDING_INCOMING) {
      if (!RelationshipStore.isSpam(id)) {
        if (!RelationshipStore.isIgnored(id)) {
          closure_0 = closure_0 + 1;
        }
      }
    }
  });
  closure_7 = c0;
  closure_8 = c1;
  closure_9 = c2;
}
function remove(arg0, arg1) {
  if (typeof GAME_RELATIONSHIP_KEY === "function") {
    const _HermesInternal = HermesInternal;
    tmp2("" + arg1 + "-" + arg0);
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}
const RelationshipTypes = fn(1074).RelationshipTypes;
function GAME_RELATIONSHIP_KEY(arg0, arg1) {

}
function GameRelationshipIndexes_BY_APPLICATION_ID(nextResult) {
  return "application-id-" + nextResult;
}
function GameRelationshipIndexes_BY_USER_ID(arg0) {

}
function GameRelationshipIndexes_BY_RELATIONSHIP_TYPE(arg0) {

}
const secondaryIndexMap = new fn(4195).SecondaryIndexMap(function gameRelationshipsIndex(arg0) {
  const items = [];
  if (typeof GameRelationshipIndexes_BY_APPLICATION_ID === "function") {
    const _HermesInternal = HermesInternal;
    tmp("application-id-" + tmp2);
    if (typeof GameRelationshipIndexes_BY_USER_ID === "function") {
      const _HermesInternal2 = HermesInternal;
      tmp5("user-id-" + tmp7);
      if (typeof GameRelationshipIndexes_BY_RELATIONSHIP_TYPE === "function") {
        const _HermesInternal3 = HermesInternal;
        tmp9("relationship-type-" + tmp11);
        return items;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}, (since) => "" + since.since);
let c7 = 0;
let c8 = 0;
let c9 = 0;
const Store = initializeDefault.Store;
class GameRelationshipStore extends Store {
}
const prototype = GameRelationshipStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(RelationshipStore);
};
prototype["getPendingIncomingCount"] = function getPendingIncomingCount() {
  return c7;
};
prototype["getPendingOutgoingCount"] = function getPendingOutgoingCount() {
  return c8;
};
prototype["getGameFriendCount"] = function getGameFriendCount() {
  return c9;
};
prototype["getGameFriendsForApplication"] = function getGameFriendsForApplication(arg0) {
  if (typeof GameRelationshipIndexes_BY_APPLICATION_ID === "function") {
    const _HermesInternal = HermesInternal;
    return tmp2("application-id-" + arg0, true).filter((type) => type.type === constants.FRIEND);
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
prototype["getGameRelationshipsForUser"] = function getGameRelationshipsForUser(id) {
  if (typeof GameRelationshipIndexes_BY_USER_ID === "function") {
    const _HermesInternal = HermesInternal;
    return tmp2("user-id-" + id, true);
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
prototype["getGameRelationshipsForUserByType"] = function getGameRelationshipsForUserByType(id, FRIEND) {
  closure_0 = FRIEND;
  const gameRelationshipsForUser = this.getGameRelationshipsForUser(id);
  return gameRelationshipsForUser.filter((type) => type.type === closure_0);
};
prototype["getGameFriendsForUser"] = function getGameFriendsForUser(id) {
  return this.getGameRelationshipsForUserByType(id, RelationshipTypes.FRIEND);
};
prototype["getGameRelationshipCount"] = function getGameRelationshipCount() {
  return secondaryIndexMap.size();
};
prototype["getGameRelationships"] = function getGameRelationships() {
  return secondaryIndexMap;
};
prototype["getGameRelationshipsByType"] = function getGameRelationshipsByType(PENDING_INCOMING) {
  if (typeof GameRelationshipIndexes_BY_RELATIONSHIP_TYPE === "function") {
    const _HermesInternal = HermesInternal;
    return tmp2("relationship-type-" + PENDING_INCOMING, true);
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
prototype["getGameRelationshipsVersion"] = function getGameRelationshipsVersion() {
  return secondaryIndexMap.version;
};
GameRelationshipStore.displayName = "GameRelationshipStore";
const gameRelationshipStore = new GameRelationshipStore(DispatcherDefault, {
  CONNECTION_OPEN: function handleConnectionOpen(gameRelationships) {
    secondaryIndexMap.clear();
    gameRelationships = gameRelationships.gameRelationships;
    const item = gameRelationships.forEach((id) => {
      if (typeof c2 === "function") {
        const _HermesInternal = HermesInternal;
        tmp2("" + tmp4 + "-" + tmp3, obj);
      } else {
        throw new TypeError("Trying to call a non-function");
      }
      obj = { id: id.id, applicationId: id.application_id, type: id.type, since: id.since, dmAccessType: id.dm_access_type };
    });
    c0 = 0;
    c1 = 0;
    c2 = 0;
    const values = secondaryIndexMap.values();
    const item1 = values.forEach((item) => {
      ({ type, id } = item);
      if (type === RelationshipTypes.FRIEND) {
        closure_2 = closure_2 + 1;
      } else if (type === tmp.PENDING_OUTGOING) {
        closure_1 = closure_1 + 1;
      } else if (type === tmp.PENDING_INCOMING) {
        if (!RelationshipStore.isSpam(id)) {
          if (!RelationshipStore.isIgnored(id)) {
            closure_0 = closure_0 + 1;
          }
        }
      }
    });
    closure_7 = c0;
    closure_8 = c1;
    closure_9 = c2;
  },
  GAME_RELATIONSHIP_ADD: function handleGameRelationshipAdd(gameRelationship) {
    if (typeof c2 === "function") {
      const _HermesInternal = HermesInternal;
      tmp("" + tmp3 + "-" + tmp2, gameRelationship.gameRelationship);
      c0 = 0;
      c1 = 0;
      c2 = 0;
      const values = obj.values();
      const item = values.forEach((item) => {
        ({ type, id } = item);
        if (type === RelationshipTypes.FRIEND) {
          closure_2 = closure_2 + 1;
        } else if (type === tmp.PENDING_OUTGOING) {
          closure_1 = closure_1 + 1;
        } else if (type === tmp.PENDING_INCOMING) {
          if (!RelationshipStore.isSpam(id)) {
            if (!RelationshipStore.isIgnored(id)) {
              closure_0 = closure_0 + 1;
            }
          }
        }
      });
      closure_7 = c0;
      closure_8 = c1;
      closure_9 = c2;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
    obj = secondaryIndexMap;
  },
  GAME_RELATIONSHIP_REMOVE: function handleGameRelationshipRemove(arg0) {
    if (typeof closure_2 === "function") {
      const _HermesInternal = HermesInternal;
      tmp3("" + tmp2 + "-" + tmp);
      closure_0 = 0;
      closure_1 = 0;
      closure_2 = 0;
      const values = obj.values();
      const item = values.forEach((item) => {
        ({ type, id } = item);
        if (type === RelationshipTypes.FRIEND) {
          closure_2 = closure_2 + 1;
        } else if (type === tmp.PENDING_OUTGOING) {
          closure_1 = closure_1 + 1;
        } else if (type === tmp.PENDING_INCOMING) {
          if (!RelationshipStore.isSpam(id)) {
            if (!RelationshipStore.isIgnored(id)) {
              closure_0 = closure_0 + 1;
            }
          }
        }
      });
      closure_7 = closure_0;
      closure_8 = closure_1;
      closure_9 = closure_2;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
    obj = secondaryIndexMap;
  },
  APPLICATIONS_FETCH_SUCCESS: function handleApplicationsFetchSuccess(unknownApplicationIds) {
    unknownApplicationIds = unknownApplicationIds.unknownApplicationIds;
    if (null != unknownApplicationIds) {
      const iter = unknownApplicationIds[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp4 = nextResult;
        let values = secondaryIndexMap.values(GameRelationshipIndexes_BY_APPLICATION_ID(nextResult));
        for (const item10018 of values) {
          let tmp10 = item10018;
          let tmp12 = item10018.type !== RelationshipTypes.PENDING_INCOMING;
          if (tmp12) {
            tmp12 = tmp10.type !== tmp11.PENDING_OUTGOING;
          }
          if (!tmp12) {
            let tmp17 = remove(tmp10.id, tmp4);
          }
          continue;
        }
        continue;
      }
      recountRelationshipTypes();
    }
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_relationships/GameRelationshipStore.tsx");

export default gameRelationshipStore;