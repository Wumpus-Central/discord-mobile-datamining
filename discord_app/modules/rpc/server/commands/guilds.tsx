// discord_app/modules/rpc/server/commands/guilds.tsx
import GuildRecord from "../../../../records/GuildRecord.tsx";
import OAuth2Scopes from "../../../../../discord_common/js/shared/shared-constants/OAuth2Scopes.tsx";
import RPCErrorDefault from "../../RPCError.tsx";
import createRpcJoiSchemaObjectDefault from "../../helpers/createRpcJoiSchemaObject.tsx";
import GuildStore from "../../../../stores/GuildStore.tsx";
import Constants from "../../../../Constants.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let RPCCommands;
let closure_4;
function handler() {
  let guildsArray;
  let obj = {
    guilds: guildsArray.map((id) => {
      let tmp;
      const obj = { id: id.id, name: id.name, icon_url: tmp };
      tmp = getGuildIconURL(id, 128);
      if (tmp == null) {
        tmp = null;
      }
      return obj;
    }),
  };
  guildsArray = GuildStore.getGuildsArray();
  return obj;
}
const getGuildIconURL = GuildRecord.getGuildIconURL;
({ RPCCommands, RPCErrors: closure_4 } = Constants);
let obj = {};
let obj2 = {
  scope: OAuth2Scopes.OAuth2Scopes.RPC,
  validation(string) {
    let minResult;
    const obj = createRpcJoiSchemaObjectDefault(string);
    const requiredResult = obj.required();
    const keys = requiredResult.keys;
    const obj2 = { guild_id: string.string(), timeout: minResult.max(60) };
    const numberResult = string.number();
    minResult = numberResult.min(0);
    return keys(obj2);
  },
  handler(socket) {
    let args;
    let server;
    let timeout;
    ({ server, args } = socket);
    ({ guild_id: importDefault, timeout } = args);
    socket = socket.socket;
    if (timeout === undefined) {
      timeout = 0;
    }
    const storeWaitResult = server.storeWait(socket, () => GuildStore.getGuild(importDefault), timeout);
    const catchPromise = storeWaitResult.catch(() => {
      const obj = { errorCode: constants.GET_GUILD_TIMED_OUT };
      const tmp = new RPCErrorDefault(obj, "Request to get guild timed out.");
      throw tmp;
    });
    return catchPromise.then(function (vanityURLCode) {
      let tmp2;
      if (null == vanityURLCode) {
        const _HermesInternal = HermesInternal;
        const self = this;
        const self2 = this;
        const obj2 = { errorCode: constants.INVALID_GUILD };
        const tmp5 = RPCErrorDefault;
        const tmp52 = new tmp5(obj2, "Invalid guild id: " + importDefault);
        throw tmp52;
      } else {
        const obj = { id: null, name: null, icon_url: tmp2, members: [], vanity_url_code: vanityURLCode.vanityURLCode };
        ({ id: obj.id, name: obj.name } = vanityURLCode);
        tmp2 = getGuildIconURL(vanityURLCode, 128);
        if (tmp2 == null) {
          tmp2 = null;
        }
        return obj;
      }
    });
  },
};
obj[RPCCommands.GET_GUILD] = obj2;
obj[RPCCommands.GET_GUILDS] = { scope: OAuth2Scopes.OAuth2Scopes.RPC, handler };
({ scope: OAuth2Scopes.OAuth2Scopes.RPC, handler });
const result = size.fileFinishedImporting("modules/rpc/server/commands/guilds.tsx");

export default obj;
