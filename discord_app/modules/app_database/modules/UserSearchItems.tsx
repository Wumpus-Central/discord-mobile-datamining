// === Module 7657: UserSearchItems ===

// Module 7657 (UserSearchItems)
import LoggerDefault from "Logger" /* 3 */;
import DatabaseDaosDefault from "DatabaseDaos" /* 1986 */;
import UserSearchUtils from "UserSearchUtils" /* 7661 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import GameRelationshipStore from "GameRelationshipStore" /* 7658 */;
import UserAffinitiesV2Store from "UserAffinitiesV2Store" /* 7659 */;
import RelationshipStore from "RelationshipStore" /* 4209 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
const RelationshipTypes = fn(1074).RelationshipTypes;
let closure_9 = new LoggerDefault("UserSearchItems");
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
  return (async (arg0, value) => {
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c3 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_1 = tmp5;
            closure_0 = tmp2;
            closure_128_0 = undefined;
            closure_128_1 = undefined;
            closure_128_2 = undefined;
            const _performance2 = performance;
            closure_128_0 = performance.now();
            const userSearchItemsResult = DatabaseDaosDefault.userSearchItems();
            if (null == userSearchItemsResult) {
              c3 = 3;
              const obj1 = { value: [], done: true };
              return obj1;
            } else {
              c2 = 1;
              c3 = 1;
              const obj2 = { value: userSearchItemsResult.getMany(), done: false };
              return obj2;
            }
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_128_1 = value;
          const _performance = performance;
          closure_128_2 = performance.now();
          const _HermesInternal = HermesInternal;
          closure_129_9.log("asynchronously loaded in " + closure_128_2 - closure_128_0 + "ms (userSearchItems: " + closure_128_1.length + ")");
          c3 = 3;
          obj = { value: closure_128_1, done: true };
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
  const friendIDs = RelationshipStore.getFriendIDs();
  let obj = {};
  const iter = friendIDs[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp3 = nextResult;
    let user = UserStore.getUser(nextResult);
    let tmp6 = user;
    if (null != user) {
      let obj5 = UserSearchUtils;
      let names = obj5.getNames(tmp6);
      obj = { id: tmp3, type: null, user: null, names: null, nick: null, affinity: null };
      obj.type = RelationshipTypes.FRIEND;
      obj.user = tmp6;
      ({ names: obj6.names, nick: obj6.nick } = names);
      let userAffinity = UserAffinitiesV2Store.getUserAffinity(tmp3);
      let num;
      if (userAffinity != null) {
        num = userAffinity.communicationProbability;
      }
      if (num == null) {
        num = 0;
      }
      obj.affinity = num;
      obj[tmp3] = obj;
    }
    continue;
  }
  const gameRelationships = GameRelationshipStore.getGameRelationships();
  const values = gameRelationships.values();
  const found = values.filter((type) => type.type === constants.FRIEND);
  for (const item10033 of found) {
    let tmp8 = item10033;
    let user1 = UserStore.getUser(item10033.id);
    let tmp11 = user1;
    if (null != user1) {
      let obj7 = UserSearchUtils;
      let names1 = obj7.getNames(tmp11);
      obj = { id: tmp8.id, type: null, user: null, names: null, nick: null, affinity: null };
      obj.type = RelationshipTypes.FRIEND;
      obj.user = tmp11;
      ({ names: obj8.names, nick: obj8.nick } = names1);
      let userAffinity1 = UserAffinitiesV2Store.getUserAffinity(tmp8.id);
      let num2;
      if (userAffinity1 != null) {
        num2 = userAffinity1.communicationProbability;
      }
      if (num2 == null) {
        num2 = 0;
      }
      obj.affinity = num2;
      obj[tmp8.id] = obj;
    }
    continue;
  }
  const result = DatabaseDaosDefault.userSearchItemsTransaction(database);
  result.delete();
  result.putAll(Object.values(obj));
};
let size = Object.create(UserSearchItems.prototype);
let closure_129_0 = size;
size.actions = {
  POST_CONNECTION_OPEN: size.handlePostConnectionOpen,
  WRITE_CACHES(arg0, arg1) {
    return obj.handleWriteCaches(arg1);
  }
};
size = fn(2);
let result = size.fileFinishedImporting("modules/app_database/modules/UserSearchItems.tsx");

export default size;