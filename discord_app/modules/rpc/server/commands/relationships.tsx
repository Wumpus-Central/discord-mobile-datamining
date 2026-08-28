// === Module 14078: items ===

// Module 14078 (items)
import fromStringAll from "fromString" /* 506 */;
import prototypeDefault from "prototype" /* 9442 */;
import recurseReplaceContentTree from "recurseReplaceContentTree" /* 9447 */;
import closure_4 from "_slicedToArray" /* 32 */;
import closure_5 from "markAllUserIdListsStale" /* 4099 */;
import closure_6 from "mergeGuildAvatar" /* 1923 */;
import ME from "ME" /* 676 */;
import CONTEXT_MENU_ICON_NAMES from "CONTEXT_MENU_ICON_NAMES" /* 14063 */;

require = arg1;
({ ApplicationFlags: error, RelationshipTypes: closure_8, RPCCommands, RPCErrors: c9 } = ME);
let obj = {};
obj = { scope: null, handler: null };
obj = {};
let items = [require("set").OAuth2Scopes.RELATIONSHIPS_READ];
obj[require("RPC_SCOPE_CONFIG").RPC_SCOPE_CONFIG.ANY] = items;
obj[0] = obj;
obj[1] = function handler(socket) {
  let obj = fromStringAll;
  let num = socket.socket.application.flags;
  if (num == null) {
    num = 0;
  }
  const obj2 = fromStringAll;
  const tmp = importAll;
  const deserializeResult = fromStringAll.deserialize(num);
  if (obj.has(deserializeResult, tmpResult.deserialize(constants.DISABLE_RELATIONSHIPS_ACCESS))) {
    obj = { errorCode: null };
    obj[0] = constants3.INVALID_PERMISSIONS;
    const tmp34 = new prototypeDefault(obj, "Missing Permissions");
    throw tmp34;
  } else {
    const items = [];
    mutableRelationships = mutableRelationships.getMutableRelationships();
    const entries = mutableRelationships.entries();
    const tmp8 = entries[Symbol.iterator]();
    while (tmp8 !== undefined) {
      let tmp12 = callback;
      let tmp13 = callback(tmp10, 2);
      [tmp14, tmp15] = tmp13;
      let tmp17 = constants2;
      if (tmp15 !== constants2.NONE) {
        let tmp18 = user;
        let tmp19 = tmp14;
        user = user.getUser(tmp14);
        if (null != user) {
          let tmp22 = require;
          let tmp23 = dependencyMap;
          let tmp24 = dependencyMap;
          let obj5 = recurseReplaceContentTree;
          let tmp25 = tmp15;
          let tmp26 = user;
          let result = obj5.transformBaseRelationship(tmp16, tmp21);
          let obj6 = recurseReplaceContentTree;
          let arr = items.push(obj6.transformApplicationRelationship(result, socket.socket.application.id));
        }
      }
      continue;
    }
    obj = { relationships: null };
    obj[0] = items;
    return obj;
  }
  tmpResult = fromStringAll;
};
obj[RPCCommands.GET_RELATIONSHIPS] = CONTEXT_MENU_ICON_NAMES.createRPCCommand(RPCCommands.GET_RELATIONSHIPS, obj);
let result = require("set").fileFinishedImporting("modules/rpc/server/commands/relationships.tsx");

export default obj;