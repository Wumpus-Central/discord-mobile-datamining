// discord_app/modules/rpc/server/commands/guilds.tsx
import { getGuildIconURL } from "GuildNSFWContentLevel";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import ME from "ME";
import { createRpcJoiSchemaObject } from "../../helpers/createRpcJoiSchemaObject.tsx";

let RPCCommands;
let c4;
({ RPCCommands, RPCErrors: c4 } = ME);
let obj = {};
obj = {
  scope: require("set").OAuth2Scopes.RPC,
  validation(string) {
    let obj = createRpcJoiSchemaObject(string);
    obj = { guild_id: string.string(), timeout: null };
    const requiredResult = obj.required();
    const numberResult = string.number();
    obj[1] = string.number().min(0).max(60);
    return requiredResult.keys(obj);
  },
  handler(socket) {
    let args;
    let importDefault;
    let server;
    let timeout;
    ({ server, args } = socket);
    ({ guild_id: importDefault, timeout } = args);
    if (timeout === undefined) {
      timeout = 0;
    }
    const storeWaitResult = server.storeWait(socket.socket, () => outer1_3.getGuild(closure_0), timeout);
    return server.storeWait(socket.socket, () => outer1_3.getGuild(closure_0), timeout).catch(() => {
      throw new callback(table[5])({ errorCode: constants.GET_GUILD_TIMED_OUT }, "Request to get guild timed out.");
    }).then((vanityURLCode) => {
      if (null == vanityURLCode) {
        let obj = { errorCode: null };
        obj[0] = outer1_4.INVALID_GUILD;
        const _HermesInternal = HermesInternal;
        let tmp5 = outer1_0(outer1_1[5]);
        tmp5 = new tmp5(obj, "Invalid guild id: " + closure_0);
        throw tmp5;
      } else {
        obj = { id: null, name: null, icon_url: null, members: null, vanity_url_code: null };
        ({ id: obj[0], name: obj[1] } = vanityURLCode);
        let tmp2 = outer1_2(vanityURLCode, 128);
        if (tmp2 == null) {
          tmp2 = null;
        }
        obj[2] = tmp2;
        obj[3] = [];
        obj[4] = vanityURLCode.vanityURLCode;
        return obj;
      }
    });
  }
};
obj[RPCCommands.GET_GUILD] = obj;
obj = {
  scope: require("set").OAuth2Scopes.RPC,
  handler() {
    let obj = { guilds: null };
    guildsArray = guildsArray.getGuildsArray();
    obj[0] = guildsArray.map((id) => {
      const obj = { id: id.id, name: id.name, icon_url: null };
      let tmp = callback(id, 128);
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
const result = require("ME").fileFinishedImporting("modules/rpc/server/commands/guilds.tsx");

export default obj;