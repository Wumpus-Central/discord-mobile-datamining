// discord_app/modules/rpc/server/commands/relationships.tsx
import BigFlagUtilsAll from "../../../../../discord_common/js/shared/utils/BigFlagUtils.tsx";
import RPCErrorDefault from "../../RPCError.tsx";
import RPCHelpers from "../../RPCHelpers.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import RelationshipStore from "../../../../stores/RelationshipStore.tsx";
import UserStore from "../../../../stores/UserStore.tsx";

require = fn;
const Constants = fn(1074);
({ ApplicationFlags: closure_7, RelationshipTypes: closure_8, RPCCommands, RPCErrors: closure_9 } = Constants);
let obj = {};
const CONTEXT_MENU_ICON_NAMES = fn(14476);
obj = { scope: null, handler: null };
obj = {};
let items = [fn(8339).OAuth2Scopes.RELATIONSHIPS_READ];
obj[fn(4465).RPC_SCOPE_CONFIG.ANY] = items;
obj.scope = obj;
obj.handler = function handler(socket) {
  let obj = BigFlagUtilsAll;
  const deserializer = BigFlagUtilsAll;
  let num = socket.socket.application.flags;
  if (num == null) {
    num = 0;
  }
  const deserializer2 = BigFlagUtilsAll;
  if (obj.has(deserializeResult, deserializer2.deserialize(constants.DISABLE_RELATIONSHIPS_ACCESS))) {
    obj = { errorCode: constants3.INVALID_PERMISSIONS };
    const tmp34 = new RPCErrorDefault(obj, "Missing Permissions");
    throw tmp34;
  } else {
    const items = [];
    const mutableRelationships = RelationshipStore.getMutableRelationships();
    const entries = mutableRelationships.entries();
    const tmp8 = entries[Symbol.iterator]();
    while (tmp8 !== undefined) {
      let tmp13 = _slicedToArray(tmp10, 2);
      [tmp14, tmp15] = tmp13;
      if (tmp15 !== constants2.NONE) {
        let user = UserStore.getUser(tmp14);
        if (null != user) {
          let obj3 = RPCHelpers;
          let result = obj3.transformBaseRelationship(tmp16, tmp21);
          let obj4 = RPCHelpers;
          let arr = items.push(obj4.transformApplicationRelationship(result, socket.socket.application.id));
        }
      }
      continue;
    }
    obj = { relationships: items };
    return obj;
  }
  deserializeResult = deserializer.deserialize(num);
};
obj[RPCCommands.GET_RELATIONSHIPS] = CONTEXT_MENU_ICON_NAMES.createRPCCommand(RPCCommands.GET_RELATIONSHIPS, obj);
const size = fn(2);
let result = size.fileFinishedImporting("modules/rpc/server/commands/relationships.tsx");

export default obj;
