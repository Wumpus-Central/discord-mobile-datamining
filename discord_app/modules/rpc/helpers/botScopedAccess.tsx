// === Module 14709: botScopedAccess ===

// Module 14709 (botScopedAccess)
import BigFlagUtilsAll from "BigFlagUtils" /* 1097 */;
import PermissionUtilsAll from "PermissionUtils" /* 4755 */;
import OAuth2Scopes from "OAuth2Scopes" /* 8457 */;
import RPCErrorDefault from "RPCError" /* 10936 */;
import getGuildIdForEmbeddedSurfaceDefault from "getGuildIdForEmbeddedSurface" /* 10943 */;
import isPostMessageSocketDefault from "isPostMessageSocket" /* 14696 */;
import validateScopeDefault from "validateScope" /* 14710 */;
import ChannelStore from "ChannelStore" /* 2065 */;
import PermissionStore from "PermissionStore" /* 4750 */;

require = fn;
const Constants = fn(1085);
({ ChannelTypes: metroRequire, Permissions: closure_7, RPCErrors: closure_8 } = Constants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/helpers/botScopedAccess.tsx");

export const isBotScopeOnly = function isBotScopeOnly(authorization, scope) {
  const scopes = authorization.authorization.scopes;
  if (scopes.has(OAuth2Scopes.OAuth2Scopes.BOT)) {
    const _Set = Set;
    const set = new Set(authorization.authorization.scopes);
    set.delete(OAuth2Scopes.OAuth2Scopes.BOT);
    return !validateScopeDefault(set, scope);
  } else {
    return false;
  }
};
export const botCanViewChannel = function botCanViewChannel(socket, context) {
  const bot = socket.application.bot;
  let id;
  if (bot != null) {
    id = bot.id;
  }
  if (null == id) {
    return false;
  } else {
    const obj2 = { user: id, context };
    const permissions = PermissionUtilsAll.computePermissions(obj2);
    return BigFlagUtilsAll.has(permissions, constants2.VIEW_CHANNEL);
  }
};
export const canBotScopeReadMessages = function canBotScopeReadMessages(socket, channel) {
  const scopes = socket.authorization.scopes;
  if (scopes.has(OAuth2Scopes.OAuth2Scopes.MESSAGES_READ)) {
    return true;
  } else {
    if (channel.isThread()) {
      channel = ChannelStore.getChannel(channel.parent_id);
    }
    let type;
    if (channel != null) {
      type = channel.type;
    }
    return type === constants.GUILD_APP && null != channel.application_id && channel.application_id === socket.application.id;
  }
};
export const validateBotScopeHasGuildAccess = function validateBotScopeHasGuildAccess(context, arg1) {
  if (isPostMessageSocketDefault(context)) {
    if (arg1 !== getGuildIdForEmbeddedSurfaceDefault(context.context.surface)) {
      const obj2 = { errorCode: constants3.INVALID_PERMISSIONS };
      const tmp14 = new RPCErrorDefault(obj2, "Guild not in embedded context");
      throw tmp14;
    }
  } else {
    const obj = { errorCode: constants3.INVALID_COMMAND };
    const tmp7 = new RPCErrorDefault(obj, "Access to guild data via BotScope only available for embedded apps");
    throw tmp7;
  }
};
export const validateBotScopeHasChannelAccess = function validateBotScopeHasChannelAccess(socket, arg1) {
  const channel = ChannelStore.getChannel(arg1);
  if (null == channel) {
    const obj = { errorCode: constants3.INVALID_CHANNEL };
    const _HermesInternal = HermesInternal;
    const tmp382 = new RPCErrorDefault(obj, "Invalid channel id: " + arg1);
    throw tmp382;
  } else {
    const guildId = channel.getGuildId();
    if (null == guildId) {
      const obj2 = { errorCode: constants3.INVALID_CHANNEL };
      const tmp34 = new RPCErrorDefault(obj2, "Access to channel data via BotScope only available for guild channels in embedded apps");
      throw tmp34;
    } else if (isPostMessageSocketDefault(socket)) {
      if (guildId !== getGuildIdForEmbeddedSurfaceDefault(socket.context.surface)) {
        const obj3 = { errorCode: constants3.INVALID_PERMISSIONS };
        const tmp26 = new RPCErrorDefault(obj3, "Guild not in embedded context");
        throw tmp26;
      } else if (PermissionStore.can(constants2.VIEW_CHANNEL, channel)) {
        const bot = socket.application.bot;
        let id;
        if (bot != null) {
          id = bot.id;
        }
        let flag = false;
        if (null != id) {
          const obj5 = { user: id, context: channel };
          const permissions = PermissionUtilsAll.computePermissions(obj5);
          flag = BigFlagUtilsAll.has(permissions, constants2.VIEW_CHANNEL);
        }
        if (!flag) {
          const obj7 = { errorCode: constants3.INVALID_PERMISSIONS };
          const tmp20 = new RPCErrorDefault(obj7, "Bot cannot view channel");
          throw tmp20;
        }
      } else {
        const obj8 = { errorCode: constants3.INVALID_PERMISSIONS };
        const tmp11 = new RPCErrorDefault(obj8, "User cannot view channel");
        throw tmp11;
      }
    } else {
      const obj9 = { errorCode: constants3.INVALID_COMMAND };
      const tmp5 = new RPCErrorDefault(obj9, "Access to guild data via BotScope only available for embedded apps");
      throw tmp5;
    }
  }
};