// === Module 15530: channels ===

// Module 15530 (channels)
import router_utils from "router_utils" /* 1114 */;
import ChannelUtils from "ChannelUtils" /* 5949 */;
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 6582 */;
import getChannelIdForEmbeddedSurfaceDefault from "getChannelIdForEmbeddedSurface" /* 6726 */;
import OAuth2Scopes from "OAuth2Scopes" /* 8747 */;
import InstantInviteActionCreatorsDefault from "InstantInviteActionCreators" /* 8786 */;
import isPostMessageSocketDefault from "isPostMessageSocket" /* 9179 */;
import RPCErrorDefault from "RPCError" /* 9185 */;
import botScopedAccess from "botScopedAccess" /* 9188 */;
import RPCHelpers from "RPCHelpers" /* 11352 */;
import ChannelRecord from "ChannelRecord" /* 4804 */;
import ChannelStore from "ChannelStore" /* 4800 */;
import GuildStore from "GuildStore" /* 4822 */;
import PermissionStore from "PermissionStore" /* 4880 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4851 */;
import VoiceStateStore from "VoiceStateStore" /* 5591 */;
import Constants_mod from "Constants" /* 6332 */;
import Constants_mod from "Constants" /* 1087 */;
import CONTEXT_MENU_ICON_NAMES_mod from "CONTEXT_MENU_ICON_NAMES" /* 15531 */;
import size from "module_2" /* 2 */;

({ isVoiceChannel: c3, isTextChannel: closure_4 } = ChannelRecord);
let Constants = Constants_mod;
({ RPC_SCOPE_CONFIG, RPC_EMBEDDED_APP_SCOPE } = Constants);
let Constants = Constants_mod;
({ Routes: c10, Permissions: closure_11, RPCCommands, RPCErrors: closure_12 } = Constants);
let obj = {};
let CONTEXT_MENU_ICON_NAMES = CONTEXT_MENU_ICON_NAMES_mod;
let obj2 = { scope: null, validateAccess: null, handler: null };
let obj3 = {};
let items = [OAuth2Scopes.OAuth2Scopes.RPC, OAuth2Scopes.OAuth2Scopes.GUILDS, OAuth2Scopes.OAuth2Scopes.GUILDS_CHANNELS_READ, OAuth2Scopes.OAuth2Scopes.BOT];
obj3[RPC_SCOPE_CONFIG.ANY] = items;
obj2.scope = obj3;
obj2.validateAccess = function validateAccess(botScopeOnly) {
  if (botScopeOnly.botScopeOnly) {
    return botScopedAccess.validateBotScopeHasChannelAccess(tmp2, tmp);
  }
};
obj2.handler = function handler(args) {
  const channel_id = args.args.channel_id;
  const socket = args.socket;
  const channel = ChannelStore.getChannel(channel_id);
  if (null == channel) {
    const obj = { errorCode: constants2.INVALID_CHANNEL };
    const _HermesInternal = HermesInternal;
    const tmp152 = new RPCErrorDefault(obj, "Invalid channel id: " + channel_id);
    throw tmp152;
  } else {
    if (channel.isPrivate()) {
      const scopes = socket.authorization.scopes;
      if (!scopes.has(OAuth2Scopes.OAuth2Scopes.RPC)) {
        if (!scopes.has(OAuth2Scopes.OAuth2Scopes.DM_CHANNELS_READ)) {
          const obj2 = { errorCode: constants2.INVALID_PERMISSIONS };
          const tmp8 = new RPCErrorDefault(obj2, "Invalid scope");
          throw tmp8;
        }
      }
    }
    if (args.botScopeOnly) {
      let result = botScopedAccess.canBotScopeReadMessages(socket, channel);
      const tmp10Result = botScopedAccess;
    } else {
      result = RPCHelpers.hasMessageReadPermission(channel, socket.application.id, socket.authorization.scopes);
      const tmp10Result2 = RPCHelpers;
    }
    return RPCHelpers.transformChannel(channel, result);
  }
};
obj[RPCCommands.GET_CHANNEL] = CONTEXT_MENU_ICON_NAMES.createRPCCommand(RPCCommands.GET_CHANNEL, obj2);
let CONTEXT_MENU_ICON_NAMES = CONTEXT_MENU_ICON_NAMES_mod;
let obj4 = { scope: null, validateAccess: null, handler: null };
let obj5 = {};
const items1 = [OAuth2Scopes.OAuth2Scopes.RPC, OAuth2Scopes.OAuth2Scopes.BOT];
obj5[RPC_SCOPE_CONFIG.ANY] = items1;
obj4.scope = obj5;
obj4.validateAccess = function validateAccess(args) {
  const guild_id = args.args.guild_id;
  if (args.botScopeOnly) {
    if (null != guild_id) {
      if ("" !== guild_id) {
        return botScopedAccess.validateBotScopeHasGuildAccess(tmp, guild_id);
      }
    }
    const obj2 = { errorCode: constants2.INVALID_PERMISSIONS };
    const tmp11 = new RPCErrorDefault(obj2, "Access to channel data via BotScope is only available for a guild in embedded apps");
    throw tmp11;
  }
};
obj4.handler = function handler(args) {
  const guild_id = args.args.guild_id;
  const socket = args.socket;
  guild = undefined;
  const values = guild(12).values(ChannelStore.loadAllGuildAndPrivateChannelsFromDisk());
  let found = values;
  if (null != guild_id) {
    found = values;
    if ("" !== guild_id) {
      guild = GuildStore.getGuild(guild_id);
      if (null == guild) {
        const obj2 = { errorCode: constants2.INVALID_GUILD };
        const _HermesInternal = HermesInternal;
        const tmpResult1 = new guild(9185)(obj2, "Invalid guild id: " + guild_id);
        throw tmpResult1;
      } else {
        found = values.filter((guild_id) => guild_id.guild_id === guild.id);
      }
    }
  }
  let found1 = found;
  if (args.botScopeOnly) {
    found1 = found.filter((item) => botScopedAccess.botCanViewChannel(socket, item));
  }
  const obj3 = { channels: null };
  const found2 = found1.filter((item) => PermissionStore.can(constants.VIEW_CHANNEL, item));
  obj3.channels = found2.map((id) => ({ id: id.id, name: id.name, type: id.type }));
  return obj3;
};
obj[RPCCommands.GET_CHANNELS] = CONTEXT_MENU_ICON_NAMES.createRPCCommand(RPCCommands.GET_CHANNELS, obj4);
let CONTEXT_MENU_ICON_NAMES = CONTEXT_MENU_ICON_NAMES_mod;
const obj6 = { scope: null, validateAccess: null, handler: null };
const obj7 = {};
const items2 = [OAuth2Scopes.OAuth2Scopes.GUILDS_MEMBERS_READ, OAuth2Scopes.OAuth2Scopes.GUILDS_CHANNELS_READ, OAuth2Scopes.OAuth2Scopes.BOT];
obj7[RPC_SCOPE_CONFIG.ANY] = items2;
obj6.scope = obj7;
obj6.validateAccess = function validateAccess(socket) {
  socket = socket.socket;
  if (isPostMessageSocketDefault(socket)) {
    const tmp9 = getChannelIdForEmbeddedSurfaceDefault(socket.context.surface);
    if (null == tmp9) {
      const obj3 = { errorCode: constants2.INVALID_COMMAND };
      const tmp17 = new RPCErrorDefault(obj3, "Current embedded context not associated to a channel");
      throw tmp17;
    } else if (socket.botScopeOnly) {
      const result = botScopedAccess.validateBotScopeHasChannelAccess(socket, tmp9);
    }
  } else {
    const obj = { errorCode: constants2.INVALID_COMMAND };
    const tmp7 = new RPCErrorDefault(obj, "Access to the current user's permissions within the embedded context's associated channel is only available for embedded apps");
    throw tmp7;
  }
};
obj6.handler = function handler(socket) {
  socket = socket.socket;
  let tmp3;
  if (isPostMessageSocketDefault(socket)) {
    tmp3 = getChannelIdForEmbeddedSurfaceDefault(socket.context.surface);
  }
  const channel = ChannelStore.getChannel(tmp3);
  if (null == channel) {
    const obj2 = { errorCode: constants2.INVALID_CHANNEL };
    const tmp11 = new RPCErrorDefault(obj2, "Invalid channel");
    throw tmp11;
  } else {
    const str = PermissionStore.computePermissions(channel);
    let str1 = str;
    if (typeof str !== "bigint") {
      str1 = str.toString();
    }
    const obj = { permissions: str1 };
    return obj;
  }
};
obj[RPCCommands.GET_CHANNEL_PERMISSIONS] = CONTEXT_MENU_ICON_NAMES.createRPCCommand(RPCCommands.GET_CHANNEL_PERMISSIONS, obj6);
let CONTEXT_MENU_ICON_NAMES = CONTEXT_MENU_ICON_NAMES_mod;
const obj8 = { scope: null, handler: null };
const obj9 = {};
const items3 = [OAuth2Scopes.OAuth2Scopes.RPC, RPC_EMBEDDED_APP_SCOPE];
obj9[RPC_SCOPE_CONFIG.ANY] = items3;
obj8.scope = obj9;
obj8.handler = function handler(args) {
  ({ server, socket } = args);
  args = args.args;
  const channel_id = args.channel_id;
  let num = args.timeout;
  if (num === undefined) {
    num = 0;
  }
  let flag = args.force;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = args.navigate;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let obj;
  const scopes = socket.authorization.scopes;
  if (scopes.has(socket(flag2[12]).OAuth2Scopes.RPC)) {
    obj = { kind: "any" };
  } else {
    const frame = channel_id(tmp2[8])(socket).frame;
    if (tmpResult.isUserScopedConjureApplication(frame.applicationId)) {
      obj = { kind: "any" };
    } else {
      let guildId;
      if (frame.surface.type !== socket(tmp2[9]).EmbeddedSurfaceType.OVERLAY) {
        guildId = frame.surface.guildId;
      }
      if (null == guildId) {
        let obj2 = { errorCode: constants2.UNAUTHORIZED_FOR_APPLICATION };
        const tmp10 = new tmp3(tmp2[10])(obj2, "This app can only select a voice channel in the server it is installed in");
        throw tmp10;
      } else {
        obj = { kind: "guild", guildId };
      }
    }
    tmp3 = channel_id;
    tmpResult = socket(tmp2[8]);
  }
  const voiceChannelId = SelectedChannelStore.getVoiceChannelId();
  if (null == channel_id) {
    if (null != voiceChannelId) {
      const channel = ChannelStore.getChannel(voiceChannelId);
      if (channel != null) {
        const guildId1 = channel.getGuildId();
      }
      if ("guild" === obj.kind) {
        if (guildId1 !== obj.guildId) {
          let obj3 = { errorCode: constants2.INVALID_CHANNEL };
          const tmp38 = new channel_id(tmp2[10])(obj3, "This app can only select a voice channel in the server it is installed in");
          throw tmp38;
        }
      }
    }
    let voiceChannel = channel_id(tmp2[18]).selectVoiceChannel(null);
    return null;
  } else {
    if (null != voiceChannelId) {
      if (voiceChannelId !== channel_id) {
        if (false === flag) {
          let obj4 = { errorCode: constants2.SELECT_VOICE_FORCE_REQUIRED };
          const tmp27 = new channel_id(tmp2[10])(obj4, "User is already joined to a voice channel.");
          throw tmp27;
        } else if (null != voiceChannelId) {
          const channel1 = ChannelStore.getChannel(voiceChannelId);
          if (channel1 != null) {
            const guildId2 = channel1.getGuildId();
          }
          if ("guild" === obj.kind) {
            if (guildId2 !== obj.guildId) {
              let obj5 = { errorCode: constants2.INVALID_CHANNEL };
              const tmp20 = new channel_id(tmp2[10])(obj5, "This app can only select a voice channel in the server it is installed in");
              throw tmp20;
            }
          }
        }
      }
    }
    const storeWaitResult = server.storeWait(socket, () => ChannelStore.getChannel(channel_id), num);
    const catchPromise = server.storeWait(socket, () => ChannelStore.getChannel(channel_id), num).catch(() => {
      throw new channel_id(flag2[10])({ errorCode: constants.SELECT_CHANNEL_TIMED_OUT }, "Request to select voice channel timed out.");
    });
    return server.storeWait(socket, () => ChannelStore.getChannel(channel_id), num).catch(() => {
      throw new channel_id(flag2[10])({ errorCode: constants.SELECT_CHANNEL_TIMED_OUT }, "Request to select voice channel timed out.");
    }).then((type) => {
      if (null == type) {
        const obj4 = { errorCode: constants2.INVALID_CHANNEL };
        const _HermesInternal = HermesInternal;
        const tmp262 = new RPCErrorDefault(obj4, "Invalid channel id: " + channel_id);
        throw tmp262;
      } else if (React3(type.type)) {
        if ("guild" === obj.kind) {
          if (tmp10 !== tmp9.guildId) {
            const obj5 = { errorCode: constants2.INVALID_CHANNEL };
            const tmp22 = new RPCErrorDefault(obj5, "This app can only select a voice channel in the server it is installed in");
            throw tmp22;
          }
        }
        const items = [Promise.resolve(type), ];
        const obj2 = RPCHelpers;
        tmp9 = obj;
        items[1] = obj2.transformChannel(type, RPCHelpers.hasMessageReadPermission(type, socket.application.id, socket.authorization.scopes));
        return Promise.all(items);
      } else {
        obj = { errorCode: constants2.INVALID_CHANNEL };
        const tmp7 = new RPCErrorDefault(obj, "Channel is not a voice channel");
        throw tmp7;
      }
    }).then((result) => {
      [tmp, tmp2] = result;
      if (null != tmp2.guild_id) {
        if (obj5.isChannelFull(tmp, VoiceStateStore, GuildStore)) {
          const obj4 = { errorCode: constants2.INVALID_CHANNEL };
          const tmp24 = new RPCErrorDefault(obj4, "Channel is full");
          throw tmp24;
        } else if (!PermissionStore.can(constants.CONNECT, tmp)) {
          obj = { errorCode: constants2.INVALID_PERMISSIONS };
          const tmp11 = new RPCErrorDefault(obj, "Connect permission required to join channel");
          throw tmp11;
        }
        obj5 = ChannelUtils;
      }
      const voiceChannel = SelectedChannelActionCreatorsDefault.selectVoiceChannel(tmp.id);
      if (flag2) {
        router_utils.replaceWith(collapsed.CHANNEL(tmp.guild_id, tmp.id));
      }
      return tmp2;
    });
  }
};
obj[RPCCommands.SELECT_VOICE_CHANNEL] = CONTEXT_MENU_ICON_NAMES.createRPCCommand(RPCCommands.SELECT_VOICE_CHANNEL, obj8);
let CONTEXT_MENU_ICON_NAMES = CONTEXT_MENU_ICON_NAMES_mod;
const obj10 = { scope: null, handler: null };
const obj11 = {};
const items4 = [OAuth2Scopes.OAuth2Scopes.RPC, OAuth2Scopes.OAuth2Scopes.RPC_VOICE_READ];
obj11[RPC_SCOPE_CONFIG.ANY] = items4;
obj10.scope = obj11;
obj10.handler = function handler(socket) {
  socket = socket.socket;
  const voiceChannelId = SelectedChannelStore.getVoiceChannelId();
  let channel = null;
  if (null != voiceChannelId) {
    channel = ChannelStore.getChannel(voiceChannelId);
  }
  let transformChannelResult = null;
  if (null != channel) {
    const obj = RPCHelpers;
    transformChannelResult = obj.transformChannel(channel, RPCHelpers.hasMessageReadPermission(channel, socket.application.id, socket.authorization.scopes));
  }
  return transformChannelResult;
};
obj[RPCCommands.GET_SELECTED_VOICE_CHANNEL] = CONTEXT_MENU_ICON_NAMES.createRPCCommand(RPCCommands.GET_SELECTED_VOICE_CHANNEL, obj10);
let CONTEXT_MENU_ICON_NAMES = CONTEXT_MENU_ICON_NAMES_mod;
obj[RPCCommands.SELECT_TEXT_CHANNEL] = CONTEXT_MENU_ICON_NAMES.createRPCCommand(RPCCommands.SELECT_TEXT_CHANNEL, {
  scope: OAuth2Scopes.OAuth2Scopes.RPC,
  handler(args) {
    ({ server, socket } = args);
    args = args.args;
    const channel_id = args.channel_id;
    let num = args.timeout;
    if (num === undefined) {
      num = 0;
    }
    if (null == channel_id) {
      socket(1114).transitionTo(constants.ME);
      let nextPromise1 = null;
      let obj = socket(1114);
    } else {
      const storeWaitResult = server.storeWait(socket, () => ChannelStore.getChannel(channel_id), num);
      const catchPromise = server.storeWait(socket, () => ChannelStore.getChannel(channel_id), num).catch(() => {
        throw new channel_id(9185)({ errorCode: constants2.SELECT_CHANNEL_TIMED_OUT }, "Request to select text channel timed out.");
      });
      nextPromise1 = server.storeWait(socket, () => ChannelStore.getChannel(channel_id), num).catch(() => {
        throw new channel_id(9185)({ errorCode: constants2.SELECT_CHANNEL_TIMED_OUT }, "Request to select text channel timed out.");
      }).then((type) => {
        if (null == type) {
          const obj4 = { errorCode: constants2.INVALID_CHANNEL };
          const _HermesInternal = HermesInternal;
          const tmp162 = new RPCErrorDefault(obj4, "Invalid channel id: " + channel_id);
          throw tmp162;
        } else if (React4(type.type)) {
          const items = [Promise.resolve(type), ];
          const obj2 = RPCHelpers;
          items[1] = obj2.transformChannel(type, RPCHelpers.hasMessageReadPermission(type, socket.application.id, socket.authorization.scopes));
          return Promise.all(items);
        } else {
          const obj = { errorCode: constants2.INVALID_CHANNEL };
          const tmp7 = new RPCErrorDefault(obj, "Channel is not a text channel");
          throw tmp7;
        }
      }).then((result) => {
        [tmp, tmp2] = result;
        if (null == tmp2.guild_id) {
          const privateChannel = channel_id(6582).selectPrivateChannel(tmp.id);
          const obj3 = channel_id(6582);
        } else if (PermissionStore.can(constants.VIEW_CHANNEL, tmp)) {
          socket(1114).replaceWith(closure_1_10.CHANNEL(tmp2.guild_id, tmp.id));
          const obj2 = socket(1114);
        } else {
          const obj = { errorCode: constants2.INVALID_CHANNEL };
          const tmp9 = new channel_id(9185)(obj, "No permission to see channel");
          throw tmp9;
        }
        return tmp2;
      });
      const nextPromise = server.storeWait(socket, () => ChannelStore.getChannel(channel_id), num).catch(() => {
        throw new channel_id(9185)({ errorCode: constants2.SELECT_CHANNEL_TIMED_OUT }, "Request to select text channel timed out.");
      }).then((type) => {
        if (null == type) {
          const obj4 = { errorCode: constants2.INVALID_CHANNEL };
          const _HermesInternal = HermesInternal;
          const tmp162 = new RPCErrorDefault(obj4, "Invalid channel id: " + channel_id);
          throw tmp162;
        } else if (React4(type.type)) {
          const items = [Promise.resolve(type), ];
          const obj2 = RPCHelpers;
          items[1] = obj2.transformChannel(type, RPCHelpers.hasMessageReadPermission(type, socket.application.id, socket.authorization.scopes));
          return Promise.all(items);
        } else {
          const obj = { errorCode: constants2.INVALID_CHANNEL };
          const tmp7 = new RPCErrorDefault(obj, "Channel is not a text channel");
          throw tmp7;
        }
      });
    }
    return nextPromise1;
  }
});
let CONTEXT_MENU_ICON_NAMES = CONTEXT_MENU_ICON_NAMES_mod;
const obj12 = {
  scope: OAuth2Scopes.OAuth2Scopes.RPC,
  handler(args) {
    ({ server, socket } = args);
    args = args.args;
    const channel_id = args.channel_id;
    let num = args.timeout;
    if (num === undefined) {
      num = 0;
    }
    if (null == channel_id) {
      socket(1114).transitionTo(constants.ME);
      let nextPromise1 = null;
      let obj = socket(1114);
    } else {
      const storeWaitResult = server.storeWait(socket, () => ChannelStore.getChannel(channel_id), num);
      const catchPromise = server.storeWait(socket, () => ChannelStore.getChannel(channel_id), num).catch(() => {
        throw new channel_id(9185)({ errorCode: constants2.SELECT_CHANNEL_TIMED_OUT }, "Request to select text channel timed out.");
      });
      nextPromise1 = server.storeWait(socket, () => ChannelStore.getChannel(channel_id), num).catch(() => {
        throw new channel_id(9185)({ errorCode: constants2.SELECT_CHANNEL_TIMED_OUT }, "Request to select text channel timed out.");
      }).then((type) => {
        if (null == type) {
          const obj4 = { errorCode: constants2.INVALID_CHANNEL };
          const _HermesInternal = HermesInternal;
          const tmp162 = new RPCErrorDefault(obj4, "Invalid channel id: " + channel_id);
          throw tmp162;
        } else if (React4(type.type)) {
          const items = [Promise.resolve(type), ];
          const obj2 = RPCHelpers;
          items[1] = obj2.transformChannel(type, RPCHelpers.hasMessageReadPermission(type, socket.application.id, socket.authorization.scopes));
          return Promise.all(items);
        } else {
          const obj = { errorCode: constants2.INVALID_CHANNEL };
          const tmp7 = new RPCErrorDefault(obj, "Channel is not a text channel");
          throw tmp7;
        }
      }).then((result) => {
        [tmp, tmp2] = result;
        if (null == tmp2.guild_id) {
          const privateChannel = channel_id(6582).selectPrivateChannel(tmp.id);
          const obj3 = channel_id(6582);
        } else if (PermissionStore.can(constants.VIEW_CHANNEL, tmp)) {
          socket(1114).replaceWith(closure_1_10.CHANNEL(tmp2.guild_id, tmp.id));
          const obj2 = socket(1114);
        } else {
          const obj = { errorCode: constants2.INVALID_CHANNEL };
          const tmp9 = new channel_id(9185)(obj, "No permission to see channel");
          throw tmp9;
        }
        return tmp2;
      });
      const nextPromise = server.storeWait(socket, () => ChannelStore.getChannel(channel_id), num).catch(() => {
        throw new channel_id(9185)({ errorCode: constants2.SELECT_CHANNEL_TIMED_OUT }, "Request to select text channel timed out.");
      }).then((type) => {
        if (null == type) {
          const obj4 = { errorCode: constants2.INVALID_CHANNEL };
          const _HermesInternal = HermesInternal;
          const tmp162 = new RPCErrorDefault(obj4, "Invalid channel id: " + channel_id);
          throw tmp162;
        } else if (React4(type.type)) {
          const items = [Promise.resolve(type), ];
          const obj2 = RPCHelpers;
          items[1] = obj2.transformChannel(type, RPCHelpers.hasMessageReadPermission(type, socket.application.id, socket.authorization.scopes));
          return Promise.all(items);
        } else {
          const obj = { errorCode: constants2.INVALID_CHANNEL };
          const tmp7 = new RPCErrorDefault(obj, "Channel is not a text channel");
          throw tmp7;
        }
      });
    }
    return nextPromise1;
  }
};
obj[RPCCommands.CREATE_CHANNEL_INVITE] = CONTEXT_MENU_ICON_NAMES.createRPCCommand(RPCCommands.CREATE_CHANNEL_INVITE, {
  scope: OAuth2Scopes.OAuth2Scopes.RPC,
  handler(args) {
    args = args.args;
    const channel_id = args.channel_id;
    const merged = Object.assign(args, Object.assign({ channel_id: 0 }));
    const invite = InstantInviteActionCreatorsDefault.createInvite(channel_id, merged, "RPC");
    return invite.catch(() => {
      const obj = { errorCode: constants2.INVALID_PERMISSIONS };
      throw new RPCErrorDefault({ errorCode: constants2.INVALID_PERMISSIONS }, "Unable to generate an invite for " + channel_id + ". Does this user have permissions?");
    });
  }
});
let result = size.fileFinishedImporting("modules/rpc/server/commands/channels.tsx");

export default obj;