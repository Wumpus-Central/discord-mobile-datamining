// discord_app/modules/rpc/server/commands/guilds.tsx
import obj132 from "../../../../../_runtime/00002_obj132.js";
import GuildNSFWContentLevel from "../../../../records/GuildRecord.tsx";
import set from "../../../../../discord_common/js/shared/shared-constants/OAuth2Scopes.tsx";
import prototypeDefault from "../../RPCError.tsx";
import createRpcJoiSchemaObjectDefault from "../../helpers/createRpcJoiSchemaObject.tsx";
import createGuildRecordFromRust from "../../../../stores/GuildStore.tsx";
import ME from "../../../../Constants.tsx";

const getGuildIconURL = GuildNSFWContentLevel.getGuildIconURL;
({ RPCCommands, RPCErrors: c4 } = ME);
let obj = {
  scope: set.OAuth2Scopes.RPC,
  validation(string) {
    createRpcJoiSchemaObjectDefault(string);
    const obj = { guild_id: string.string(), timeout: null };
    const requiredResult = obj.required();
    const numberResult = string.number();
    obj[1] = string.number().min(0).max(60);
    return requiredResult.keys(obj);
  },
  handler(socket) {
    ({ server, args } = socket);
    ({ guild_id: importDefault, timeout } = args);
    if (timeout === undefined) {
      timeout = 0;
    }
    const storeWaitResult = server.storeWait(socket.socket, () => closure_1_3.getGuild(closure_0), timeout);
    return server.storeWait(socket.socket, () => closure_1_3.getGuild(closure_0), timeout).catch((error) => {
      throw new callback(table[5])({ errorCode: constants.GET_GUILD_TIMED_OUT }, "Request to get guild timed out.");
    }).then((result) => {
      if (null == result) {
        let obj = { errorCode: null };
        obj[0] = closure_1_4.INVALID_GUILD;
        const _HermesInternal = HermesInternal;
        let tmp5 = prototypeDefault;
        tmp5 = new tmp5(obj, "Invalid guild id: " + closure_0);
        throw tmp5;
      } else {
        obj = { id: null, name: null, icon_url: null, members: null, vanity_url_code: null };
        ({ id: obj[0], name: obj[1] } = result);
        let tmp2 = getGuildIconURL(result, 128);
        if (tmp2 == null) {
          tmp2 = null;
        }
        obj[2] = tmp2;
        obj[3] = [];
        obj[4] = result.vanityURLCode;
        return obj;
      }
    });
  }
};
obj[RPCCommands.GET_GUILD] = obj;
obj = {
  scope: set.OAuth2Scopes.RPC,
  handler() {
    let obj = { guilds: null };
    guildsArray = guildsArray.getGuildsArray();
    obj[0] = guildsArray.map((item, index) => {
      const obj = { id: item.id, name: item.name, icon_url: null };
      let tmp = callback(item, 128);
      if (tmp == null) {
        tmp = null;
      }
      obj[2] = tmp;
      return obj;
    });
    return obj;
  }
};
obj[RPCCommands.GET_GUILDS] = obj;
const result = obj132.fileFinishedImporting("modules/rpc/server/commands/guilds.tsx");

export default obj;