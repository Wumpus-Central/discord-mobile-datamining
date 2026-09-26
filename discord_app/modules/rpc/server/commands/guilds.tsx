// === Module 14036: guilds ===

// Module 14036 (guilds)
import GuildRecord from "GuildRecord" /* 2063 */;
import OAuth2Scopes from "OAuth2Scopes" /* 7787 */;
import RPCErrorDefault from "RPCError" /* 8770 */;
import createRpcJoiSchemaObjectDefault from "createRpcJoiSchemaObject" /* 8773 */;
import GuildStore from "GuildStore" /* 2067 */;
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

const getGuildIconURL = GuildRecord.getGuildIconURL;
({ RPCCommands, RPCErrors: closure_4 } = Constants);
let obj = {};
obj[RPCCommands.GET_GUILD] = {
  scope: OAuth2Scopes.OAuth2Scopes.RPC,
  validation(string) {
    const obj = createRpcJoiSchemaObjectDefault(string);
    const obj2 = { guild_id: string.string(), timeout: null };
    const requiredResult = createRpcJoiSchemaObjectDefault(string).required();
    const numberResult = string.number();
    obj2.timeout = string.number().min(0).max(60);
    return requiredResult.keys(obj2);
  },
  handler(socket) {
    ({ server, args } = socket);
    ({ guild_id: importDefault, timeout } = args);
    if (timeout === undefined) {
      timeout = 0;
    }
    const storeWaitResult = server.storeWait(socket.socket, () => GuildStore.getGuild(importDefault), timeout);
    return server.storeWait(socket.socket, () => GuildStore.getGuild(importDefault), timeout).catch(() => {
      throw new RPCErrorDefault({ errorCode: constants.GET_GUILD_TIMED_OUT }, "Request to get guild timed out.");
    }).then((vanityURLCode) => {
      if (null == vanityURLCode) {
        const obj2 = { errorCode: constants.INVALID_GUILD };
        const _HermesInternal = HermesInternal;
        const tmp52 = new RPCErrorDefault(obj2, "Invalid guild id: " + closure_1_0);
        throw tmp52;
      } else {
        const obj = { id: null, name: null, icon_url: null, members: null, vanity_url_code: null };
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
  }
};
let obj2 = {
  scope: OAuth2Scopes.OAuth2Scopes.RPC,
  validation(string) {
    const obj = createRpcJoiSchemaObjectDefault(string);
    const obj2 = { guild_id: string.string(), timeout: null };
    const requiredResult = createRpcJoiSchemaObjectDefault(string).required();
    const numberResult = string.number();
    obj2.timeout = string.number().min(0).max(60);
    return requiredResult.keys(obj2);
  },
  handler(socket) {
    ({ server, args } = socket);
    ({ guild_id: importDefault, timeout } = args);
    if (timeout === undefined) {
      timeout = 0;
    }
    const storeWaitResult = server.storeWait(socket.socket, () => GuildStore.getGuild(importDefault), timeout);
    return server.storeWait(socket.socket, () => GuildStore.getGuild(importDefault), timeout).catch(() => {
      throw new RPCErrorDefault({ errorCode: constants.GET_GUILD_TIMED_OUT }, "Request to get guild timed out.");
    }).then((vanityURLCode) => {
      if (null == vanityURLCode) {
        const obj2 = { errorCode: constants.INVALID_GUILD };
        const _HermesInternal = HermesInternal;
        const tmp52 = new RPCErrorDefault(obj2, "Invalid guild id: " + closure_1_0);
        throw tmp52;
      } else {
        const obj = { id: null, name: null, icon_url: null, members: null, vanity_url_code: null };
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
  }
};
obj[RPCCommands.GET_GUILDS] = {
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
  }
};
const result = size.fileFinishedImporting("modules/rpc/server/commands/guilds.tsx");

export default obj;