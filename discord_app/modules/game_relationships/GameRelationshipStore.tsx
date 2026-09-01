// discord_app/modules/game_relationships/GameRelationshipStore.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import dispatcherDefault from "../../Dispatcher.tsx";
import closure_0 from "../../stores/RelationshipStore.tsx";
import { RelationshipTypes } from "../../Constants.tsx";

function recountRelationshipTypes() {
  c0 = 0;
  c1 = 0;
  c2 = 0;
  const values = secondaryIndexMap.values();
  const item = values.forEach((arg0) => {
    ({ type, id } = arg0);
    if (type === constants.FRIEND) {
      closure_2 = closure_2 + 1;
    } else if (type === tmp.PENDING_OUTGOING) {
      closure_1 = closure_1 + 1;
    } else if (type === tmp.PENDING_INCOMING) {
      if (!spam.isSpam(id)) {
        if (!spam.isIgnored(id)) {
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
  if (typeof GAME_RELATIONSHIP_KEY !== "function") {
    HermesBuiltin.throwTypeError();
  }
  secondaryIndexMap.delete("" + arg1 + "-" + arg0);
}
function GAME_RELATIONSHIP_KEY(arg0, arg1) {}
function GameRelationshipIndexes_BY_APPLICATION_ID(nextResult) {
  return "application-id-" + nextResult;
}
function GameRelationshipIndexes_BY_USER_ID(arg0) {}
function GameRelationshipIndexes_BY_RELATIONSHIP_TYPE(arg0) {}
const secondaryIndexMap = new require("version").SecondaryIndexMap(
  function gameRelationshipsIndex(applicationId) {
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
  },
  (since) => "" + since.since,
);
let c7 = 0;
let c8 = 0;
let c9 = 0;
const Store = initializeDefault.Store;
class GameRelationshipStore extends Store {}
const prototype = GameRelationshipStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(closure_0);
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
prototype["getGameRelationshipsForUser"] = function getGameRelationshipsForUser(closure_0) {
  if (typeof GameRelationshipIndexes_BY_USER_ID !== "function") {
    HermesBuiltin.throwTypeError();
  }
  return secondaryIndexMap.values("user-id-" + closure_0, true);
};
prototype["getGameRelationshipsForUserByType"] = function getGameRelationshipsForUserByType(closure_0, FRIEND) {
  closure_0 = FRIEND;
  const gameRelationshipsForUser = this.getGameRelationshipsForUser(closure_0);
  return gameRelationshipsForUser.filter((type) => type.type === closure_0);
};
prototype["getGameFriendsForUser"] = function getGameFriendsForUser(closure_0) {
  return this.getGameRelationshipsForUserByType(closure_0, RelationshipTypes.FRIEND);
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
const gameRelationshipStore = new GameRelationshipStore(dispatcherDefault, {
  CONNECTION_OPEN: function handleConnectionOpen(gameRelationships) {
    secondaryIndexMap.clear();
    gameRelationships = gameRelationships.gameRelationships;
    const item = gameRelationships.forEach((id) => {
      const obj = {
        id: id.id,
        applicationId: id.application_id,
        type: id.type,
        since: id.since,
        dmAccessType: id.dm_access_type,
      };
      ({ id, applicationId } = obj);
      if (typeof c2 !== "function") {
        HermesBuiltin.throwTypeError();
      }
      const result = closure_6.set("" + applicationId + "-" + id, obj);
    });
    c0 = 0;
    c1 = 0;
    c2 = 0;
    const values = secondaryIndexMap.values();
    const item1 = values.forEach((arg0) => {
      ({ type, id } = arg0);
      if (type === constants.FRIEND) {
        closure_2 = closure_2 + 1;
      } else if (type === tmp.PENDING_OUTGOING) {
        closure_1 = closure_1 + 1;
      } else if (type === tmp.PENDING_INCOMING) {
        if (!spam.isSpam(id)) {
          if (!spam.isIgnored(id)) {
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
    gameRelationship = gameRelationship.gameRelationship;
    ({ id, applicationId } = gameRelationship);
    if (typeof c2 !== "function") {
      HermesBuiltin.throwTypeError();
    }
    const result = secondaryIndexMap.set("" + applicationId + "-" + id, gameRelationship);
    c0 = 0;
    c1 = 0;
    c2 = 0;
    const values = secondaryIndexMap.values();
    const item = values.forEach((arg0) => {
      ({ type, id } = arg0);
      if (type === constants.FRIEND) {
        closure_2 = closure_2 + 1;
      } else if (type === tmp.PENDING_OUTGOING) {
        closure_1 = closure_1 + 1;
      } else if (type === tmp.PENDING_INCOMING) {
        if (!spam.isSpam(id)) {
          if (!spam.isIgnored(id)) {
            closure_0 = closure_0 + 1;
          }
        }
      }
    });
    closure_7 = c0;
    closure_8 = c1;
    closure_9 = c2;
  },
  GAME_RELATIONSHIP_REMOVE: function handleGameRelationshipRemove(arg0) {
    ({ userId, applicationId } = arg0);
    if (typeof c2 !== "function") {
      HermesBuiltin.throwTypeError();
    }
    secondaryIndexMap.delete("" + applicationId + "-" + userId);
    c0 = 0;
    c1 = 0;
    c2 = 0;
    const values = secondaryIndexMap.values();
    const item = values.forEach((arg0) => {
      ({ type, id } = arg0);
      if (type === constants.FRIEND) {
        closure_2 = closure_2 + 1;
      } else if (type === tmp.PENDING_OUTGOING) {
        closure_1 = closure_1 + 1;
      } else if (type === tmp.PENDING_INCOMING) {
        if (!spam.isSpam(id)) {
          if (!spam.isIgnored(id)) {
            closure_0 = closure_0 + 1;
          }
        }
      }
    });
    closure_7 = c0;
    closure_8 = c1;
    closure_9 = c2;
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
  },
});
let result = require("set").fileFinishedImporting("modules/game_relationships/GameRelationshipStore.tsx");

export default gameRelationshipStore;
