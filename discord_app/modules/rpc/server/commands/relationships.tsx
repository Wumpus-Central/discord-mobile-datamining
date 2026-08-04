import _slicedToArray from "_slicedToArray";
import upsertRelationship from "upsertRelationship";
import mergeGuildAvatar from "mergeGuildAvatar";
import ME from "ME";
import createRPCCommand from "createRPCCommand";

let RPCCommands;
let c9;
let error;
let metroImportAll;
const require = arg1;
({ ApplicationFlags: error, RelationshipTypes: metroImportAll, RPCCommands, RPCErrors: c9 } = ME);
let obj = {};
obj = { scope: null, handler: null };
obj = {};
let items = [require("set").OAuth2Scopes.RELATIONSHIPS_READ];
obj[require("RPC_SCOPE_CONFIG").RPC_SCOPE_CONFIG.ANY] = items;
obj[0] = obj;
obj[1] = function handler(socket) {
  let tmp14;
  let tmp15;
  let obj = importAll(506);
  let num = socket.socket.application.flags;
  if (num == null) {
    num = 0;
  }
  const obj2 = importAll(506);
  const tmp = importAll;
  const deserializeResult = importAll(506).deserialize(num);
  if (obj.has(deserializeResult, tmpResult.deserialize(constants.DISABLE_RELATIONSHIPS_ACCESS))) {
    obj = { errorCode: null };
    obj[0] = constants3.INVALID_PERMISSIONS;
    const tmp34 = new importDefault(10543)(obj, "Missing Permissions");
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
          let obj5 = require(10548) /* recurseReplaceContentTree */;
          let tmp25 = tmp15;
          let tmp26 = user;
          let result = obj5.transformBaseRelationship(tmp16, tmp21);
          let obj6 = require(10548) /* recurseReplaceContentTree */;
          let arr = items.push(obj6.transformApplicationRelationship(result, socket.socket.application.id));
        }
      }
      continue;
    }
    obj = { relationships: null };
    obj[0] = items;
    return obj;
  }
  tmpResult = tmp(506);
};
obj[RPCCommands.GET_RELATIONSHIPS] = createRPCCommand.createRPCCommand(RPCCommands.GET_RELATIONSHIPS, obj);
let result = require("mergeGuildAvatar").fileFinishedImporting("modules/rpc/server/commands/relationships.tsx");

export default obj;