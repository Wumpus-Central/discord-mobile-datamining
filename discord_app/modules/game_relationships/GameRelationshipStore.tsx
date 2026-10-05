// discord_app/modules/game_relationships/GameRelationshipStore.tsx
import get_initializedDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import Constants from "../../Constants.tsx";
import SecondaryIndexMap from "../../../discord_common/js/packages/secondary-index-map/SecondaryIndexMap.tsx";
import RelationshipStore from "../../stores/RelationshipStore.tsx";
import size from "../../../_runtime/metro/00002__.js";

let closure_2;

function recountRelationshipTypes() {
  let c0 = 0;
  let c1 = 0;
  let c2 = 0;
  const values = secondaryIndexMap.values();
  const item = values.forEach((item) => {
    let id;
    let type;
    ({ type, id } = item);
    if (type === RelationshipTypes.FRIEND) {
      closure_2 = closure_2 + 1;
    } else if (type === RelationshipTypes.PENDING_OUTGOING) {
      closure_1 = closure_1 + 1;
    } else if (type === RelationshipTypes.PENDING_INCOMING) {
      if (!RelationshipStore.isSpam(id)) {
        if (!RelationshipStore.isIgnored(id)) {
          closure_0 = closure_0 + 1;
        }
      }
    }
  });
  let closure_7 = c0;
  let closure_8 = c1;
  let closure_9 = c2;
}
function remove(arg0, arg1) {
  if (typeof GAME_RELATIONSHIP_KEY === "function") {
    const _HermesInternal = HermesInternal;
    tmp2("" + arg1 + "-" + arg0);
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}
const RelationshipTypes = Constants.RelationshipTypes;
function GAME_RELATIONSHIP_KEY(arg0, arg1) {}
function GameRelationshipIndexes_BY_APPLICATION_ID(nextResult) {
  return "application-id-" + nextResult;
}
function GameRelationshipIndexes_BY_USER_ID(arg0) {}
function GameRelationshipIndexes_BY_RELATIONSHIP_TYPE(arg0) {}
const secondaryIndexMap = new SecondaryIndexMap.SecondaryIndexMap(
  function gameRelationshipsIndex(arg0) {
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
  },
  (since) => "" + since.since,
);
let c7 = 0;
let c8 = 0;
let c9 = 0;
const Store = get_initializedDefault.Store;
class GameRelationshipStore extends Store {
  initialize() {
    this.waitFor(RelationshipStore);
  }
  getPendingIncomingCount() {
    return c7;
  }
  getPendingOutgoingCount() {
    return c8;
  }
  getGameFriendCount() {
    return c9;
  }
  getGameFriendsForApplication(arg0) {
    if (typeof GameRelationshipIndexes_BY_APPLICATION_ID === "function") {
      const _HermesInternal = HermesInternal;
      const tmp2Result = tmp2("application-id-" + arg0, true);
      return tmp2Result.filter((type) => type.type === constants.FRIEND);
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  getGameRelationshipsForUser(id) {
    if (typeof GameRelationshipIndexes_BY_USER_ID === "function") {
      const _HermesInternal = HermesInternal;
      return tmp2("user-id-" + id, true);
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  getGameRelationshipsForUserByType(id, FRIEND) {
    let closure_0 = FRIEND;
    const gameRelationshipsForUser = this.getGameRelationshipsForUser(id);
    return gameRelationshipsForUser.filter((type) => type.type === FRIEND);
  }
  getGameFriendsForUser(id) {
    return this.getGameRelationshipsForUserByType(id, RelationshipTypes.FRIEND);
  }
  getGameRelationshipCount() {
    return secondaryIndexMap.size();
  }
  getGameRelationships() {
    return secondaryIndexMap;
  }
  getGameRelationshipsByType(PENDING_INCOMING) {
    if (typeof GameRelationshipIndexes_BY_RELATIONSHIP_TYPE === "function") {
      const _HermesInternal = HermesInternal;
      return tmp2("relationship-type-" + PENDING_INCOMING, true);
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  getGameRelationshipsVersion() {
    return secondaryIndexMap.version;
  }
}
const prototype = GameRelationshipStore.prototype;
GameRelationshipStore.displayName = "GameRelationshipStore";
let obj = {
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
      if (typeof c2 === "function") {
        const _HermesInternal = HermesInternal;
        tmp2("" + tmp4 + "-" + tmp3, obj);
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    });
    let c0 = 0;
    let c1 = 0;
    let c2 = 0;
    const values = secondaryIndexMap.values();
    const item1 = values.forEach((item) => {
      let id;
      let type;
      ({ type, id } = item);
      if (type === RelationshipTypes.FRIEND) {
        closure_2 = closure_2 + 1;
      } else if (type === RelationshipTypes.PENDING_OUTGOING) {
        closure_1 = closure_1 + 1;
      } else if (type === RelationshipTypes.PENDING_INCOMING) {
        if (!RelationshipStore.isSpam(id)) {
          if (!RelationshipStore.isIgnored(id)) {
            closure_0 = closure_0 + 1;
          }
        }
      }
    });
    let closure_7 = c0;
    let closure_8 = c1;
    let closure_9 = c2;
  },
  GAME_RELATIONSHIP_ADD: function handleGameRelationshipAdd(gameRelationship) {
    gameRelationship = gameRelationship.gameRelationship;
    if (typeof c2 === "function") {
      const _HermesInternal = HermesInternal;
      tmp("" + tmp3 + "-" + tmp2, gameRelationship);
      let c0 = 0;
      let c1 = 0;
      c2 = 0;
      const values = secondaryIndexMap.values();
      const item = values.forEach((item) => {
        let id;
        let type;
        ({ type, id } = item);
        if (type === RelationshipTypes.FRIEND) {
          closure_2 = closure_2 + 1;
        } else if (type === RelationshipTypes.PENDING_OUTGOING) {
          closure_1 = closure_1 + 1;
        } else if (type === RelationshipTypes.PENDING_INCOMING) {
          if (!RelationshipStore.isSpam(id)) {
            if (!RelationshipStore.isIgnored(id)) {
              closure_0 = closure_0 + 1;
            }
          }
        }
      });
      let closure_7 = c0;
      let closure_8 = c1;
      let closure_9 = c2;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  },
  GAME_RELATIONSHIP_REMOVE: function handleGameRelationshipRemove(arg0) {
    if (typeof closure_2 === "function") {
      const _HermesInternal = HermesInternal;
      tmp3("" + tmp2 + "-" + tmp);
      let closure_0 = 0;
      let closure_1 = 0;
      closure_2 = 0;
      const values = secondaryIndexMap.values();
      const item = values.forEach((item) => {
        let id;
        let type;
        ({ type, id } = item);
        if (type === RelationshipTypes.FRIEND) {
          closure_2 = closure_2 + 1;
        } else if (type === RelationshipTypes.PENDING_OUTGOING) {
          closure_1 = closure_1 + 1;
        } else if (type === RelationshipTypes.PENDING_INCOMING) {
          if (!RelationshipStore.isSpam(id)) {
            if (!RelationshipStore.isIgnored(id)) {
              closure_0 = closure_0 + 1;
            }
          }
        }
      });
      let closure_7 = closure_0;
      let closure_8 = closure_1;
      let closure_9 = closure_2;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
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
          let tmp12 =
            item10018.type !== RelationshipTypes.PENDING_INCOMING && item10018.type !== tmp11.PENDING_OUTGOING;
          if (!tmp12) {
            let tmp17 = remove(item10018.id, tmp4);
          }
          continue;
        }
        continue;
      }
      recountRelationshipTypes();
    }
  },
};
const gameRelationshipStore = new GameRelationshipStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/game_relationships/GameRelationshipStore.tsx");

export default gameRelationshipStore;
