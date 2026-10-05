// === Module 7141: UserSearchItems ===

// Module 7141 (UserSearchItems)
import LoggerDefault from "Logger" /* 3 */;
import Constants from "Constants" /* 1085 */;
import DatabaseDaosDefault from "DatabaseDaos" /* 2078 */;
import UserSearchUtils from "UserSearchUtils" /* 7145 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import GameRelationshipStore from "GameRelationshipStore" /* 7142 */;
import UserAffinitiesV2Store from "UserAffinitiesV2Store" /* 7143 */;
import RelationshipStore from "RelationshipStore" /* 4519 */;
import UserStore from "UserStore" /* 1377 */;
import size from "module_2" /* 2 */;

const RelationshipTypes = Constants.RelationshipTypes;
let closure_9 = new LoggerDefault("UserSearchItems");
let c10 = false;
new LoggerDefault("UserSearchItems");
class UserSearchItems {
  constructor() {
    const obj = Object.create(new.target.prototype);
    obj.actions = {
      POST_CONNECTION_OPEN: obj.handlePostConnectionOpen,
      WRITE_CACHES(arg0, arg1) {
        return obj.handleWriteCaches(arg1);
      }
    };
    return obj;
  }
  getAll() {
    return (async () => {
      let c2;
      let c3;
      const value = tmp4;
      const _performance2 = performance;
      let closure_0 = performance.now();
      const obj7 = DatabaseDaosDefault;
      const userSearchItemsResult = obj7.userSearchItems();
      if (null == userSearchItemsResult) {
        return [];
      }
      await userSearchItemsResult.getMany();
      const _performance = performance;
      let closure_2 = performance.now();
      const _HermesInternal = HermesInternal;
      closure_129_9.log("asynchronously loaded in " + closure_2 - closure_0 + "ms (userSearchItems: " + value.length + ")");
      return value;
    })();
  }
  resetInMemoryState() {

  }
  handlePostConnectionOpen() {
    c10 = true;
  }
  handleWriteCaches(database) {
    let num;
    const friendIDs = RelationshipStore.getFriendIDs();
    const obj = {};
    const iter = friendIDs[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp3 = nextResult;
      let user = UserStore.getUser(nextResult);
      let tmp6 = user;
      if (null != user) {
        let obj5 = UserSearchUtils;
        let names = obj5.getNames(tmp6);
        let obj2 = { id: tmp3, type: RelationshipTypes.FRIEND, user: tmp6, names: null, nick: null, affinity: num };
        ({ names: obj6.names, nick: obj6.nick } = names);
        let userAffinity = UserAffinitiesV2Store.getUserAffinity(tmp3);
        num = undefined;
        if (userAffinity != null) {
          num = userAffinity.communicationProbability;
        }
        if (num == null) {
          num = 0;
        }
        obj[tmp3] = obj2;
      }
      continue;
    }
    const gameRelationships = GameRelationshipStore.getGameRelationships();
    const values = gameRelationships.values();
    const found = values.filter((type) => type.type === constants.FRIEND);
    for (const item10033 of found) {
      let user1 = UserStore.getUser(item10033.id);
      let tmp11 = user1;
      if (null != user1) {
        let obj7 = UserSearchUtils;
        let names1 = obj7.getNames(tmp11);
        let obj4 = { id: item10033.id, type: RelationshipTypes.FRIEND, user: tmp11, names: null, nick: null, affinity: num2 };
        ({ names: obj8.names, nick: obj8.nick } = names1);
        let id = item10033.id;
        let userAffinity1 = UserAffinitiesV2Store.getUserAffinity(item10033.id);
        let num2;
        if (userAffinity1 != null) {
          num2 = userAffinity1.communicationProbability;
        }
        if (num2 == null) {
          num2 = 0;
        }
        obj[id] = obj4;
      }
      continue;
    }
    const obj3 = DatabaseDaosDefault;
    const result = obj3.userSearchItemsTransaction(database);
    result.delete();
    result.putAll(Object.values(obj));
  }
}
Object.defineProperty(UserSearchItems.prototype, "shouldUseCache", {
  get: function shouldUseCache() {
    return !c10;
  },
  set: undefined
});
let obj = Object.create(UserSearchItems.prototype);
obj.actions = {
  POST_CONNECTION_OPEN: obj.handlePostConnectionOpen,
  WRITE_CACHES(arg0, arg1) {
    return obj.handleWriteCaches(arg1);
  }
};
let result = size.fileFinishedImporting("modules/app_database/modules/UserSearchItems.tsx");

export default obj;