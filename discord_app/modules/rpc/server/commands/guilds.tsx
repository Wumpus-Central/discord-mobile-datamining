// === Module 16231: guilds ===

// Module 16231 (guilds)
import GuildRecord from "GuildRecord" /* 4875 */;
import Constants2 from "Constants" /* 6437 */;
import OAuth2Scopes from "OAuth2Scopes" /* 8867 */;
import RPCErrorDefault from "RPCError" /* 9300 */;
import botScopedAccess from "botScopedAccess" /* 9303 */;
import RPCHelpers from "RPCHelpers" /* 11574 */;
import GuildMemberStore from "GuildMemberStore" /* 4917 */;
import GuildRoleStore from "GuildRoleStore" /* 4911 */;
import GuildStore from "GuildStore" /* 4879 */;
import Constants from "Constants" /* 1084 */;
import CONTEXT_MENU_ICON_NAMES_mod from "CONTEXT_MENU_ICON_NAMES" /* 16215 */;
import size from "module_2" /* 2 */;

const getGuildIconURL = GuildRecord.getGuildIconURL;
const RPC_SCOPE_CONFIG = Constants2.RPC_SCOPE_CONFIG;
({ RPCCommands, RPCErrors: closure_7 } = Constants);
let obj = {};
let CONTEXT_MENU_ICON_NAMES = CONTEXT_MENU_ICON_NAMES_mod;
let obj2 = { scope: null, validateAccess: null, handler: null };
const obj3 = {};
const items = [OAuth2Scopes.OAuth2Scopes.RPC, OAuth2Scopes.OAuth2Scopes.BOT];
obj3[RPC_SCOPE_CONFIG.ANY] = items;
obj2.scope = obj3;
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
obj[RPCCommands.GET_GUILD] = CONTEXT_MENU_ICON_NAMES.createRPCCommand(RPCCommands.GET_GUILD, obj2);
let CONTEXT_MENU_ICON_NAMES = CONTEXT_MENU_ICON_NAMES_mod;
obj[RPCCommands.GET_GUILDS] = CONTEXT_MENU_ICON_NAMES.createRPCCommand(RPCCommands.GET_GUILDS, {
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
});
let CONTEXT_MENU_ICON_NAMES = CONTEXT_MENU_ICON_NAMES_mod;
const obj4 = {
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
obj[RPCCommands.GET_ROLES] = CONTEXT_MENU_ICON_NAMES.createRPCCommand(RPCCommands.GET_ROLES, {
  scope: OAuth2Scopes.OAuth2Scopes.BOT,
  validateAccess(socket) {
    return botScopedAccess.validateBotScopeHasGuildAccess(socket.socket, socket.args.guild_id);
  },
  handler(args) {
    const guild_id = args.args.guild_id;
    if (null == GuildStore.getGuild(guild_id)) {
      const obj2 = { errorCode: constants.INVALID_GUILD };
      const _HermesInternal = HermesInternal;
      const tmp62 = new RPCErrorDefault(obj2, "Invalid guild id: " + guild_id);
      throw tmp62;
    } else {
      const obj = { roles: null };
      const sortedRoles = GuildRoleStore.getSortedRoles(guild_id);
      obj.roles = sortedRoles.map(RPCHelpers.transformRole);
      return obj;
    }
  }
});
let CONTEXT_MENU_ICON_NAMES = CONTEXT_MENU_ICON_NAMES_mod;
const obj6 = { scope: null, validateAccess: null, handler: null };
const obj7 = {};
const items1 = [OAuth2Scopes.OAuth2Scopes.GUILDS_MEMBERS_READ, OAuth2Scopes.OAuth2Scopes.BOT];
obj7[RPC_SCOPE_CONFIG.ANY] = items1;
obj6.scope = obj7;
obj6.validateAccess = function validateAccess(botScopeOnly) {
  if (botScopeOnly.botScopeOnly) {
    return botScopedAccess.validateBotScopeHasGuildAccess(tmp2, tmp);
  }
};
obj6.handler = function handler(args) {
  const guild_id = args.args.guild_id;
  if (null == GuildStore.getGuild(guild_id)) {
    const obj2 = { errorCode: constants.INVALID_GUILD };
    const _HermesInternal = HermesInternal;
    const tmp82 = new RPCErrorDefault(obj2, "Invalid guild id: " + guild_id);
    throw tmp82;
  } else {
    const selfMember = GuildMemberStore.getSelfMember(guild_id);
    let transformGuildMemberResult = null;
    if (null != selfMember) {
      transformGuildMemberResult = RPCHelpers.transformGuildMember(selfMember);
    }
    return transformGuildMemberResult;
  }
};
obj[RPCCommands.GET_CURRENT_USER_GUILD_MEMBER] = CONTEXT_MENU_ICON_NAMES.createRPCCommand(RPCCommands.GET_CURRENT_USER_GUILD_MEMBER, obj6);
let CONTEXT_MENU_ICON_NAMES = CONTEXT_MENU_ICON_NAMES_mod;
const obj5 = {
  scope: OAuth2Scopes.OAuth2Scopes.BOT,
  validateAccess(socket) {
    return botScopedAccess.validateBotScopeHasGuildAccess(socket.socket, socket.args.guild_id);
  },
  handler(args) {
    const guild_id = args.args.guild_id;
    if (null == GuildStore.getGuild(guild_id)) {
      const obj2 = { errorCode: constants.INVALID_GUILD };
      const _HermesInternal = HermesInternal;
      const tmp62 = new RPCErrorDefault(obj2, "Invalid guild id: " + guild_id);
      throw tmp62;
    } else {
      const obj = { roles: null };
      const sortedRoles = GuildRoleStore.getSortedRoles(guild_id);
      obj.roles = sortedRoles.map(RPCHelpers.transformRole);
      return obj;
    }
  }
};
obj[RPCCommands.GET_GUILD_MEMBER] = CONTEXT_MENU_ICON_NAMES.createRPCCommand(RPCCommands.GET_GUILD_MEMBER, {
  scope: OAuth2Scopes.OAuth2Scopes.BOT,
  validateAccess(socket) {
    return botScopedAccess.validateBotScopeHasGuildAccess(socket.socket, socket.args.guild_id);
  },
  handler(args) {
    args = args.args;
    const guild_id = args.guild_id;
    if (null == GuildStore.getGuild(guild_id)) {
      const obj2 = { errorCode: constants.INVALID_GUILD };
      const _HermesInternal = HermesInternal;
      const tmp82 = new RPCErrorDefault(obj2, "Invalid guild id: " + guild_id);
      throw tmp82;
    } else {
      const member = GuildMemberStore.getMember(guild_id, args.user_id);
      let transformGuildMemberResult = null;
      if (null != member) {
        transformGuildMemberResult = RPCHelpers.transformGuildMember(member);
      }
      return transformGuildMemberResult;
    }
  }
});
const result = size.fileFinishedImporting("modules/rpc/server/commands/guilds.tsx");

export default obj;