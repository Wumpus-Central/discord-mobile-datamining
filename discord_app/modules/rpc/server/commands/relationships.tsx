// === Module 13859: items ===

// Module 13859 (items)
import fromStringAll from "fromString" /* 506 */;
import prototypeDefault from "prototype" /* 8752 */;
import recurseReplaceContentTree from "recurseReplaceContentTree" /* 8757 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import markAllUserIdListsStale from "markAllUserIdListsStale" /* 4030 */;
import mergeGuildAvatar from "mergeGuildAvatar" /* 1922 */;
import ME from "ME" /* 676 */;
import createRPCCommand from "createRPCCommand" /* 13846 */;

require = fn;
({ ApplicationFlags: error, RelationshipTypes: closure_8, RPCCommands, RPCErrors: c9 } = ME);
let obj = {};
let items = [require("set").OAuth2Scopes.RELATIONSHIPS_READ];
obj[require("RPC_SCOPE_CONFIG").RPC_SCOPE_CONFIG.ANY] = items;
obj[0] = obj;
obj[1] = function handler(socket) {
  let obj = fromStringAll;
  const deserializer = fromStringAll;
  let num = socket.socket.application.flags;
  if (num == null) {
    num = 0;
  }
  const deserializer2 = fromStringAll;
  if (obj.has(deserializeResult, deserializer2.deserialize(constants.DISABLE_RELATIONSHIPS_ACCESS))) {
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
      let tmp13 = callback(tmp10, 2);
      [tmp14, tmp15] = tmp13;
      if (tmp15 !== constants2.NONE) {
        user = user.getUser(tmp14);
        if (null != user) {
          let obj3 = recurseReplaceContentTree;
          let result = obj3.transformBaseRelationship(tmp16, tmp21);
          let obj4 = recurseReplaceContentTree;
          let arr = items.push(obj4.transformApplicationRelationship(result, socket.socket.application.id));
        }
      }
      continue;
    }
    obj = { relationships: null };
    obj[0] = items;
    return obj;
  }
  deserializeResult = deserializer.deserialize(num);
};
obj[RPCCommands.GET_RELATIONSHIPS] = createRPCCommand.createRPCCommand(RPCCommands.GET_RELATIONSHIPS, obj);
let result = require("obj132").fileFinishedImporting("modules/rpc/server/commands/relationships.tsx");

export default obj;