// === Module 14663: guilds ===

// Module 14663 (guilds)
import GuildRecord from "GuildRecord" /* 2082 */;
import Constants2 from "Constants" /* 5636 */;
import OAuth2Scopes from "OAuth2Scopes" /* 8441 */;
import RPCErrorDefault from "RPCError" /* 10896 */;
import createRpcJoiSchemaObjectDefault from "createRpcJoiSchemaObject" /* 10899 */;
import botScopedAccess from "botScopedAccess" /* 14655 */;
import GuildStore from "GuildStore" /* 2086 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

const getGuildIconURL = GuildRecord.getGuildIconURL;
({ RPCCommands, RPCErrors: hasOwnProperty } = Constants);
let obj = {};
let obj2 = { scope: null, validation: null, validateAccess: null, handler: null };
const obj3 = {};
const items = [OAuth2Scopes.OAuth2Scopes.RPC, OAuth2Scopes.OAuth2Scopes.BOT];
obj3[Constants2.RPC_SCOPE_CONFIG.ANY] = items;
obj2.scope = obj3;
obj2.validation = function validation(string) {
  const obj = createRpcJoiSchemaObjectDefault(string);
  const obj2 = { guild_id: string.string(), timeout: null };
  const requiredResult = createRpcJoiSchemaObjectDefault(string).required();
  const numberResult = string.number();
  obj2.timeout = string.number().min(0).max(60);
  return requiredResult.keys(obj2);
};
obj2.validateAccess = function validateAccess(botScopeOnly) {
  if (botScopeOnly.botScopeOnly) {
    return botScopedAccess.validateBotScopeHasGuildAccess(tmp2, tmp);
  }
};
obj2.handler = function handler(socket) {
  ({ server, args } = socket);
  ({ guild_id: require, timeout } = args);
  if (timeout === undefined) {
    timeout = 0;
  }
  const storeWaitResult = server.storeWait(socket.socket, () => GuildStore.getGuild(require), timeout);
  return server.storeWait(socket.socket, () => GuildStore.getGuild(require), timeout).catch(() => {
    throw new RPCErrorDefault({ errorCode: constants.GET_GUILD_TIMED_OUT }, "Request to get guild timed out.");
  }).then((vanityURLCode) => {
    if (null == vanityURLCode) {
      const obj2 = { errorCode: constants.INVALID_GUILD };
      const _HermesInternal = HermesInternal;
      const tmp52 = new RPCErrorDefault(obj2, "Invalid guild id: " + require);
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
};
obj[RPCCommands.GET_GUILD] = obj2;
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