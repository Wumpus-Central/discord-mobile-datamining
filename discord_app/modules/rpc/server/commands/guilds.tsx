// discord_app/modules/rpc/server/commands/guilds.tsx
import GuildRecord from "../../../../records/GuildRecord.tsx";
import OAuth2Scopes from "../../../../../discord_common/js/shared/shared-constants/OAuth2Scopes.tsx";
import RPCErrorDefault from "../../RPCError.tsx";
import createRpcJoiSchemaObjectDefault from "../../helpers/createRpcJoiSchemaObject.tsx";
import GuildStore from "../../../../stores/GuildStore.tsx";
import Constants from "../../../../Constants.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const getGuildIconURL = GuildRecord.getGuildIconURL;
({ RPCCommands, RPCErrors: closure_4 } = Constants);
let obj = {};
obj = {
  scope: OAuth2Scopes.OAuth2Scopes.RPC,
  validation(string) {
    createRpcJoiSchemaObjectDefault(string);
    const obj = { guild_id: string.string(), timeout: null };
    const requiredResult = obj.required();
    const numberResult = string.number();
    obj.timeout = string.number().min(0).max(60);
    return requiredResult.keys(obj);
  },
  handler(socket) {
    ({ server, args } = socket);
    ({ guild_id: importDefault, timeout } = args);
    if (timeout === undefined) {
      timeout = 0;
    }
    const storeWaitResult = server.storeWait(socket.socket, () => GuildStore.getGuild(importDefault), timeout);
    return server
      .storeWait(socket.socket, () => GuildStore.getGuild(importDefault), timeout)
      .catch(() => {
        throw new RPCErrorDefault({ errorCode: constants.GET_GUILD_TIMED_OUT }, "Request to get guild timed out.");
      })
      .then((vanityURLCode) => {
        if (null == vanityURLCode) {
          let obj = { errorCode: constants.INVALID_GUILD };
          const _HermesInternal = HermesInternal;
          let tmp5 = RPCErrorDefault;
          tmp5 = new tmp5(obj, "Invalid guild id: " + closure_1_0);
          throw tmp5;
        } else {
          obj = { id: null, name: null, icon_url: null, members: null, vanity_url_code: null };
          ({ id: obj.id, name: obj.name } = vanityURLCode);
          let tmp2 = getGuildIconURL(vanityURLCode, 128);
          if (tmp2 == null) {
            tmp2 = null;
          }
          obj.icon_url = tmp2;
          obj.members = [];
          obj.vanity_url_code = vanityURLCode.vanityURLCode;
          return obj;
        }
      });
  },
};
obj[RPCCommands.GET_GUILD] = obj;
obj = {
  scope: OAuth2Scopes.OAuth2Scopes.RPC,
  handler() {
    let obj = { guilds: null };
    const guildsArray = GuildStore.getGuildsArray();
    obj.guilds = guildsArray.map((id) => {
      const obj = { id: id.id, name: id.name, icon_url: null };
      let tmp = getGuildIconURL(id, 128);
      if (tmp == null) {
        tmp = null;
      }
      obj.icon_url = tmp;
      return obj;
    });
    return obj;
  },
};
obj[RPCCommands.GET_GUILDS] = obj;
const result = size.fileFinishedImporting("modules/rpc/server/commands/guilds.tsx");

export default obj;
