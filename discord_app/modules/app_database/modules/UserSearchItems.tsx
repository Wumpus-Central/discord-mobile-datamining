// discord_app/modules/app_database/modules/UserSearchItems.tsx
import ME from "ME";
import recountRelationshipTypes from "recountRelationshipTypes";
import recomputeAffinities from "recomputeAffinities";
import markAllUserIdListsStale from "markAllUserIdListsStale";
import mergeGuildAvatar from "mergeGuildAvatar";
import { RelationshipTypes } from "ME";
import set from "recomputeAffinities";
import { items } from "../DatabaseDaos.tsx";

let c9 = new require("markAllUserIdListsStale")("UserSearchItems");
let c10 = false;
class UserSearchItems {
  constructor() {
    obj = Object.create(new.target.prototype);
    UserSearchItems = obj;
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
        return { value: "HermesInternal", done: null };
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
            let closure_0 = tmp2;
            closure_0 = undefined;
            length = undefined;
            closure_2 = undefined;
            const _performance2 = performance;
            closure_0 = performance.now();
            const userSearchItemsResult = outer1_1(table[7]).userSearchItems();
            if (null == userSearchItemsResult) {
              c3 = 3;
              const obj1 = { value: null, done: true };
              obj1[0] = [];
              return obj1;
            } else {
              closure_2 = 1;
              c3 = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = userSearchItemsResult.getMany();
              return obj2;
            }
            const obj7 = outer1_1(table[7]);
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
  let c10 = true;
};
prototype["handleWriteCaches"] = function handleWriteCaches(database) {
  friendIDs = friendIDs.getFriendIDs();
  let obj = {};
  const iter = friendIDs[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp3 = nextResult;
    let tmp4 = authStore2;
    let user = authStore2.getUser(nextResult);
    let tmp6 = user;
    if (null != user) {
      let tmp14 = obj;
      let tmp15 = dependencyMap;
      let obj5 = obj(7168);
      let tmp16 = user;
      let names = obj5.getNames(tmp6);
      let tmp18 = nextResult;
      obj = { id: null, type: null, user: null, names: null, nick: null, affinity: null };
      obj[0] = tmp3;
      let tmp19 = RelationshipTypes;
      obj[1] = RelationshipTypes.FRIEND;
      obj[2] = tmp6;
      ({ names: obj6[3], nick: obj6[4] } = names);
      let tmp20 = authStore;
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
  const found = values.filter((type) => type.type === constants.FRIEND);
  for (const item10033 of found) {
    let tmp8 = item10033;
    let tmp9 = authStore2;
    let user1 = authStore2.getUser(item10033.id);
    let tmp11 = user1;
    if (null != user1) {
      let tmp22 = obj;
      let tmp23 = dependencyMap;
      let obj7 = obj(7168);
      let tmp24 = user1;
      let names1 = obj7.getNames(tmp11);
      let tmp26 = item10033;
      obj = { id: null, type: null, user: null, names: null, nick: null, affinity: null };
      obj[0] = tmp8.id;
      let tmp27 = RelationshipTypes;
      obj[1] = RelationshipTypes.FRIEND;
      obj[2] = tmp11;
      ({ names: obj8[3], nick: obj8[4] } = names1);
      let tmp28 = authStore;
      let userAffinity1 = authStore.getUserAffinity(tmp8.id);
      let num2;
      if (userAffinity1 != null) {
        num2 = userAffinity1.communicationProbability;
      }
      if (num2 == null) {
        num2 = 0;
      }
      obj[5] = num2;
      obj[tmp8.id] = obj;
    }
    continue;
  }
  const result = items.userSearchItemsTransaction(database);
  result.delete();
  result.putAll(Object.values(obj));
};
let set = Object.create(UserSearchItems.prototype);
set.actions = {
  POST_CONNECTION_OPEN: set.handlePostConnectionOpen,
  WRITE_CACHES(arg0, arg1) {
    return obj.handleWriteCaches(arg1);
  }
};
let result = set.fileFinishedImporting("modules/app_database/modules/UserSearchItems.tsx");

export default set;