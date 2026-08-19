// discord_app/modules/app_database/modules/UserSearchItems.tsx
import timestampDefault from "../../debug/Logger.tsx";
import itemsDefault from "../DatabaseDaos.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import recountRelationshipTypes from "../../game_relationships/GameRelationshipStore.tsx";
import recomputeAffinities from "../../user_affinities/UserAffinitiesV2Store.tsx";
import markAllUserIdListsStale from "../../../stores/RelationshipStore.tsx";
import mergeGuildAvatar from "../../../stores/UserStore.tsx";
import { RelationshipTypes } from "../../../Constants.tsx";
import obj132 from "../../../../_runtime/00002_obj132.js";

let obj132 = fn;
let closure_9 = new timestampDefault("UserSearchItems");
let c10 = false;
class UserSearchItems {
  constructor() {
    obj = Object.create(new.target.prototype);
    closure_0 = obj;
    obj.actions = {
      POST_CONNECTION_OPEN: obj.handlePostConnectionOpen,
      WRITE_CACHES(arg0, arg1) {
            return obj.handleWriteCaches(arg1);
          }
    };
    return obj;
  }
}
const prototype = UserSearchItems.prototype;
prototype["getAll"] = function getAll() {
  return callback(function*() {
    if (c3 === 2) {
      c3 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      try {
        c3 = 2;
        if (0 === closure_2) {
          if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let length = tmp5;
            closure_0 = tmp2;
            closure_0 = undefined;
            length = undefined;
            closure_2 = undefined;
            const _performance2 = performance;
            closure_0 = performance.now();
            const userSearchItemsResult = closure_1_1(table[7]).userSearchItems();
            if (null == userSearchItemsResult) {
              c3 = 3;
              obj1 = { value: null, done: true };
              obj1[0] = [];
              return obj1;
            } else {
              closure_2 = 1;
              c3 = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = userSearchItemsResult.getMany();
              return obj2;
            }
            const obj7 = closure_1_1(table[7]);
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj3 = { value: null, done: true };
          obj3[0] = arg1;
          return obj3;
        } else {
          length = arg1;
          const _performance = performance;
          closure_2 = performance.now();
          const _HermesInternal = HermesInternal;
          logger.log("asynchronously loaded in " + closure_2 - closure_0 + "ms (userSearchItems: " + length.length + ")");
          c3 = 3;
          obj = { value: null, done: true };
          obj[0] = length;
          return obj;
        }
      } catch (tmp6) {
        c3 = tmp;
        throw tmp6;
      }
    }
  })();
};
prototype["resetInMemoryState"] = function resetInMemoryState() {

};
Object.defineProperty(prototype, "shouldUseCache", {
  get: function shouldUseCache() {
    return !c10;
  },
  set: undefined
});
prototype["handlePostConnectionOpen"] = function handlePostConnectionOpen() {
  c10 = true;
};
prototype["handleWriteCaches"] = function handleWriteCaches(database) {
  friendIDs = friendIDs.getFriendIDs();
  let obj = {};
  const iter = friendIDs[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp3 = nextResult;
    let user = authStore2.getUser(nextResult);
    let tmp6 = user;
    if (null != user) {
      let obj5 = obj132(5409);
      let names = obj5.getNames(tmp6);
      obj = { id: null, type: null, user: null, names: null, nick: null, affinity: null };
      obj[0] = tmp3;
      obj[1] = RelationshipTypes.FRIEND;
      obj[2] = tmp6;
      ({ names: obj6[3], nick: obj6[4] } = names);
      let userAffinity = authStore.getUserAffinity(tmp3);
      let num;
      if (userAffinity != null) {
        num = userAffinity.communicationProbability;
      }
      if (num == null) {
        num = 0;
      }
      obj[5] = num;
      obj[tmp3] = obj;
    }
    continue;
  }
  gameRelationships = gameRelationships.getGameRelationships();
  const values = gameRelationships.values();
  const found = values.filter((item, index) => item.type === constants.FRIEND);
  for (const item10033 of found) {
    let user1 = authStore2.getUser(item10033.id);
    let tmp11 = user1;
    if (null != user1) {
      let obj7 = obj132(5409);
      let names1 = obj7.getNames(tmp11);
      obj = { id: null, type: null, user: null, names: null, nick: null, affinity: null };
      obj[0] = item10033.id;
      obj[1] = RelationshipTypes.FRIEND;
      obj[2] = tmp11;
      ({ names: obj8[3], nick: obj8[4] } = names1);
      let userAffinity1 = authStore.getUserAffinity(item10033.id);
      let num2;
      if (userAffinity1 != null) {
        num2 = userAffinity1.communicationProbability;
      }
      if (num2 == null) {
        num2 = 0;
      }
      obj[5] = num2;
      obj[item10033.id] = obj;
    }
    continue;
  }
  const result = itemsDefault.userSearchItemsTransaction(database);
  result.delete();
  result.putAll(Object.values(obj));
};
obj132 = Object.create(UserSearchItems.prototype);
obj132.actions = {
  POST_CONNECTION_OPEN: obj132.handlePostConnectionOpen,
  WRITE_CACHES(arg0, arg1) {
    return obj.handleWriteCaches(arg1);
  }
};
let result = obj132.fileFinishedImporting("modules/app_database/modules/UserSearchItems.tsx");

export default obj132;