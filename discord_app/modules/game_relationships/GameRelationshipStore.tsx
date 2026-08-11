// discord_app/modules/game_relationships/GameRelationshipStore.tsx
import markAllUserIdListsStale from "markAllUserIdListsStale";
import { RelationshipTypes } from "ME";
import { Store } from "initialize";

function recountRelationshipTypes() {
  let c0 = 0;
  let c1 = 0;
  let c2 = 0;
  const values = secondaryIndexMap.values();
  const item = values.forEach((arg0) => {
    let id;
    let type;
    ({ type, id } = arg0);
    if (type === constants.FRIEND) {
      closure_2 = closure_2 + 1;
    } else if (type === tmp.PENDING_OUTGOING) {
      closure_1 = closure_1 + 1;
    } else if (type === tmp.PENDING_INCOMING) {
      if (!spam.isSpam(id)) {
        if (!spam.isIgnored(id)) {
          markAllUserIdListsStale = markAllUserIdListsStale + 1;
        }
      }
    }
  });
  let closure_7 = c0;
  let closure_8 = c1;
  let closure_9 = c2;
}
function remove(arg0, arg1) {
  if (typeof GAME_RELATIONSHIP_KEY !== "function") {
    HermesBuiltin.throwTypeError();
  }
  secondaryIndexMap.delete("" + arg1 + "-" + arg0);
}
function GAME_RELATIONSHIP_KEY(arg0, arg1) {

}
function GameRelationshipIndexes_BY_APPLICATION_ID(nextResult) {
  return "application-id-" + nextResult;
}
function GameRelationshipIndexes_BY_USER_ID(arg0) {

}
function GameRelationshipIndexes_BY_RELATIONSHIP_TYPE(arg0) {

}
const secondaryIndexMap = new require("version").SecondaryIndexMap(function gameRelationshipsIndex(applicationId) {
  const items = [];
  if (typeof GameRelationshipIndexes_BY_APPLICATION_ID !== "function") {
    HermesBuiltin.throwTypeError();
  }
  items.push("application-id-" + applicationId.applicationId);
  if (typeof GameRelationshipIndexes_BY_USER_ID !== "function") {
    HermesBuiltin.throwTypeError();
  }
  items.push("user-id-" + applicationId.id);
  if (typeof GameRelationshipIndexes_BY_RELATIONSHIP_TYPE !== "function") {
    HermesBuiltin.throwTypeError();
  }
  items.push("relationship-type-" + applicationId.type);
  return items;
}, (since) => "" + since.since);
let c7 = 0;
let c8 = 0;
let c9 = 0;
class GameRelationshipStore extends Store {
}
const prototype = GameRelationshipStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(markAllUserIdListsStale);
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
  if (typeof GameRelationshipIndexes_BY_APPLICATION_ID !== "function") {
    HermesBuiltin.throwTypeError();
  }
  const values = secondaryIndexMap.values("application-id-" + arg0, true);
  return values.filter((type) => type.type === constants.FRIEND);
};
prototype["getGameRelationshipsForUser"] = function getGameRelationshipsForUser(markAllUserIdListsStale) {
  if (typeof GameRelationshipIndexes_BY_USER_ID !== "function") {
    HermesBuiltin.throwTypeError();
  }
  return secondaryIndexMap.values("user-id-" + markAllUserIdListsStale, true);
};
prototype["getGameRelationshipsForUserByType"] = function getGameRelationshipsForUserByType(markAllUserIdListsStale, FRIEND) {
  markAllUserIdListsStale = FRIEND;
  const gameRelationshipsForUser = this.getGameRelationshipsForUser(markAllUserIdListsStale);
  return gameRelationshipsForUser.filter((type) => type.type === markAllUserIdListsStale);
};
prototype["getGameFriendsForUser"] = function getGameFriendsForUser(markAllUserIdListsStale) {
  return this.getGameRelationshipsForUserByType(markAllUserIdListsStale, RelationshipTypes.FRIEND);
};
prototype["getGameRelationshipCount"] = function getGameRelationshipCount() {
  return secondaryIndexMap.size();
};
prototype["getGameRelationships"] = function getGameRelationships() {
  return secondaryIndexMap;
};
prototype["getGameRelationshipsByType"] = function getGameRelationshipsByType(PENDING_INCOMING) {
  if (typeof GameRelationshipIndexes_BY_RELATIONSHIP_TYPE !== "function") {
    HermesBuiltin.throwTypeError();
  }
  return secondaryIndexMap.values("relationship-type-" + PENDING_INCOMING, true);
};
prototype["getGameRelationshipsVersion"] = function getGameRelationshipsVersion() {
  return secondaryIndexMap.version;
};
GameRelationshipStore.displayName = "GameRelationshipStore";
const gameRelationshipStore = new GameRelationshipStore(require("dispatcher"), {
  CONNECTION_OPEN: function handleConnectionOpen(gameRelationships) {
    secondaryIndexMap.clear();
    gameRelationships = gameRelationships.gameRelationships;
    const item = gameRelationships.forEach((id) => {
      let applicationId;
      const obj = { id: id.id, applicationId: id.application_id, type: id.type, since: id.since, dmAccessType: id.dm_access_type };
      ({ id, applicationId } = obj);
      if (typeof c2 !== "function") {
        HermesBuiltin.throwTypeError();
      }
      const result = closure_6.set("" + applicationId + "-" + id, obj);
    });
    let c0 = 0;
    let c1 = 0;
    let c2 = 0;
    const values = secondaryIndexMap.values();
    const item1 = values.forEach((arg0) => {
      let id;
      let type;
      ({ type, id } = arg0);
      if (type === constants.FRIEND) {
        closure_2 = closure_2 + 1;
      } else if (type === tmp.PENDING_OUTGOING) {
        closure_1 = closure_1 + 1;
      } else if (type === tmp.PENDING_INCOMING) {
        if (!spam.isSpam(id)) {
          if (!spam.isIgnored(id)) {
            markAllUserIdListsStale = markAllUserIdListsStale + 1;
          }
        }
      }
    });
    let closure_7 = c0;
    let closure_8 = c1;
    let closure_9 = c2;
  },
  GAME_RELATIONSHIP_ADD: function handleGameRelationshipAdd(gameRelationship) {
    let applicationId;
    let id;
    gameRelationship = gameRelationship.gameRelationship;
    ({ id, applicationId } = gameRelationship);
    if (typeof c2 !== "function") {
      HermesBuiltin.throwTypeError();
    }
    const result = secondaryIndexMap.set("" + applicationId + "-" + id, gameRelationship);
    let c0 = 0;
    let c1 = 0;
    c2 = 0;
    const values = secondaryIndexMap.values();
    const item = values.forEach((arg0) => {
      let id;
      let type;
      ({ type, id } = arg0);
      if (type === constants.FRIEND) {
        closure_2 = closure_2 + 1;
      } else if (type === tmp.PENDING_OUTGOING) {
        closure_1 = closure_1 + 1;
      } else if (type === tmp.PENDING_INCOMING) {
        if (!spam.isSpam(id)) {
          if (!spam.isIgnored(id)) {
            markAllUserIdListsStale = markAllUserIdListsStale + 1;
          }
        }
      }
    });
    let closure_7 = c0;
    let closure_8 = c1;
    let closure_9 = c2;
  },
  GAME_RELATIONSHIP_REMOVE: function handleGameRelationshipRemove(arg0) {
    let applicationId;
    let userId;
    ({ userId, applicationId } = arg0);
    if (typeof c2 !== "function") {
      HermesBuiltin.throwTypeError();
    }
    secondaryIndexMap.delete("" + applicationId + "-" + userId);
    let c0 = 0;
    let c1 = 0;
    c2 = 0;
    const values = secondaryIndexMap.values();
    const item = values.forEach((arg0) => {
      let id;
      let type;
      ({ type, id } = arg0);
      if (type === constants.FRIEND) {
        closure_2 = closure_2 + 1;
      } else if (type === tmp.PENDING_OUTGOING) {
        closure_1 = closure_1 + 1;
      } else if (type === tmp.PENDING_INCOMING) {
        if (!spam.isSpam(id)) {
          if (!spam.isIgnored(id)) {
            markAllUserIdListsStale = markAllUserIdListsStale + 1;
          }
        }
      }
    });
    let closure_7 = c0;
    let closure_8 = c1;
    let closure_9 = c2;
  },
  APPLICATIONS_FETCH_SUCCESS: function handleApplicationsFetchSuccess(unknownApplicationIds) {
    unknownApplicationIds = unknownApplicationIds.unknownApplicationIds;
    if (null != unknownApplicationIds) {
      const iter = unknownApplicationIds[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp5 = secondaryIndexMap;
        let tmp6 = GameRelationshipIndexes_BY_APPLICATION_ID;
        let tmp4 = nextResult;
        let values = secondaryIndexMap.values(GameRelationshipIndexes_BY_APPLICATION_ID(nextResult));
        let tmp8 = values;
        let tmp9 = values;
        for (const item10018 of values) {
          let tmp10 = item10018;
          let tmp12 = item10018.type !== RelationshipTypes.PENDING_INCOMING;
          if (tmp12) {
            let tmp13 = item10018;
            tmp12 = tmp10.type !== tmp11.PENDING_OUTGOING;
          }
          if (!tmp12) {
            let tmp14 = remove;
            let tmp15 = item10018;
            let tmp16 = nextResult;
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
let result = require("version").fileFinishedImporting("modules/game_relationships/GameRelationshipStore.tsx");

export default gameRelationshipStore;