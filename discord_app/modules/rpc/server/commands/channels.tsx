// discord_app/modules/rpc/server/commands/channels.tsx
import getChannelIdForEmbeddedSurfaceDefault from "../../../embedded_apps/utils/getChannelIdForEmbeddedSurface.tsx";
import OAuth2Scopes from "../../../../../discord_common/js/shared/shared-constants/OAuth2Scopes.tsx";
import InstantInviteActionCreatorsDefault from "../../../../actions/InstantInviteActionCreators.tsx";
import isPostMessageSocketDefault from "../../helpers/isPostMessageSocket.tsx";
import RPCErrorDefault from "../../RPCError.tsx";
import botScopedAccess from "../../helpers/botScopedAccess.tsx";
import RPCHelpers from "../../RPCHelpers.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import ChannelStore from "../../../../stores/ChannelStore.tsx";
import GuildStore from "../../../../stores/GuildStore.tsx";
import PermissionStore from "../../../../stores/PermissionStore.tsx";
import SelectedChannelStore from "../../../../stores/SelectedChannelStore.tsx";
import VoiceStateStore from "../../../../stores/VoiceStateStore.tsx";

require = fn;
let closure_15 = async function _validateUserAllowsJoiningVoice(arg0) {
  if (c4 === 2) {
    c4 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "IconComponent", done: "+352" };
    }
  } else {
    try {
      c4 = 2;
      if (0 === c3) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_2 = tmp5;
          closure_1 = tmp2;
          closure_129_0 = undefined;
          closure_129_1 = undefined;
          ({ frame: closure_129_0, iframeId: closure_129_1 } = closure_0);
          closure_129_2 = undefined;
          closure_129_3 = undefined;
          c3 = 1;
          c4 = 1;
          return { value: "Reflect", done: null };
        }
      } else if (1 === tmp5) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          const obj5 = {
            applicationId: closure_129_0.applicationId,
            iframeId: closure_129_1,
            permissions: ["connect_user_to_voice"],
          };
          c3 = 2;
          c4 = 1;
          const obj6 = { value: closure_130_1(closure_130_2[13])(obj5), done: false };
          return obj6;
        }
      } else if (arg0 === 1) {
        c4 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 3;
        const obj7 = { value, done: true };
        return obj7;
      } else {
        closure_129_2 = value;
        closure_129_3 = closure_130_3(closure_129_2, 1)[0];
        let state;
        if (closure_129_3 != null) {
          state = closure_129_3.state;
        }
        if ("granted" !== state) {
          const obj = { errorCode: closure_130_14.UNAUTHORIZED_FOR_APPLICATION };
          const tmp14 = new closure_130_1(closure_130_2[12])(
            obj,
            "The user has not allowed this app to join voice channels",
          );
          throw tmp14;
        } else {
          c4 = 3;
          return { value: "IconComponent", done: "+352" };
        }
      }
    } catch (tmp23) {
      c4 = tmp;
      throw tmp23;
    }
  }
};
const ChannelRecord = fn(4827);
({ isVoiceChannel: hasOwnProperty, isTextChannel: metroRequire } = ChannelRecord);
let Constants = fn(6378);
({ RPC_SCOPE_CONFIG, RPC_EMBEDDED_APP_SCOPE } = Constants);
Constants = fn(1087);
({ Routes: closure_12, Permissions: map1, RPCCommands, RPCErrors: closure_14 } = Constants);
let obj = {};
let CONTEXT_MENU_ICON_NAMES = fn(15724);
let obj3 = { scope: null, validateAccess: null, handler: null };
let obj4 = {};
let items = [
  fn(8827).OAuth2Scopes.RPC,
  fn(8827).OAuth2Scopes.GUILDS,
  fn(8827).OAuth2Scopes.GUILDS_CHANNELS_READ,
  fn(8827).OAuth2Scopes.BOT,
];
obj4[RPC_SCOPE_CONFIG.ANY] = items;
obj3.scope = obj4;
obj3.validateAccess = function validateAccess(botScopeOnly) {
  if (botScopeOnly.botScopeOnly) {
    return botScopedAccess.validateBotScopeHasChannelAccess(tmp2, tmp);
  }
};
obj3.handler = function handler(args) {
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
obj[RPCCommands.GET_CHANNEL] = CONTEXT_MENU_ICON_NAMES.createRPCCommand(RPCCommands.GET_CHANNEL, obj3);
CONTEXT_MENU_ICON_NAMES = fn(15724);
let obj6 = { scope: null, validateAccess: null, handler: null };
let obj7 = {};
const items1 = [fn(8827).OAuth2Scopes.RPC, fn(8827).OAuth2Scopes.BOT];
obj7[RPC_SCOPE_CONFIG.ANY] = items1;
obj6.scope = obj7;
obj6.validateAccess = function validateAccess(args) {
  const guild_id = args.args.guild_id;
  if (args.botScopeOnly) {
    if (null != guild_id) {
      if ("" !== guild_id) {
        return botScopedAccess.validateBotScopeHasGuildAccess(tmp, guild_id);
      }
    }
    const obj2 = { errorCode: constants2.INVALID_PERMISSIONS };
    const tmp11 = new RPCErrorDefault(
      obj2,
      "Access to channel data via BotScope is only available for a guild in embedded apps",
    );
    throw tmp11;
  }
};
obj6.handler = function handler(args) {
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
        const tmpResult1 = new guild(9264)(obj2, "Invalid guild id: " + guild_id);
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
obj[RPCCommands.GET_CHANNELS] = CONTEXT_MENU_ICON_NAMES.createRPCCommand(RPCCommands.GET_CHANNELS, obj6);
CONTEXT_MENU_ICON_NAMES = fn(15724);
let obj9 = { scope: null, validateAccess: null, handler: null };
const obj10 = {};
const items2 = [
  fn(8827).OAuth2Scopes.GUILDS_MEMBERS_READ,
  fn(8827).OAuth2Scopes.GUILDS_CHANNELS_READ,
  fn(8827).OAuth2Scopes.BOT,
];
obj10[RPC_SCOPE_CONFIG.ANY] = items2;
obj9.scope = obj10;
obj9.validateAccess = function validateAccess(socket) {
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
    const tmp7 = new RPCErrorDefault(
      obj,
      "Access to the current user's permissions within the embedded context's associated channel is only available for embedded apps",
    );
    throw tmp7;
  }
};
obj9.handler = function handler(socket) {
  socket = socket.socket;
  let tmp3;
  if (isPostMessageSocketDefault(socket)) {
    tmp3 = getChannelIdForEmbeddedSurfaceDefault(socket.context.surface);
  }
  const channel = ChannelStore.getChannel(tmp3);
  if (null == channel) {
    const obj3 = { errorCode: constants2.INVALID_CHANNEL };
    const tmp11 = new RPCErrorDefault(obj3, "Invalid channel");
    throw tmp11;
  } else {
    const obj = { permissions: RPCHelpers.transformBigFlag(PermissionStore.computePermissions(channel)) };
    return obj;
  }
};
obj[RPCCommands.GET_CHANNEL_PERMISSIONS] = CONTEXT_MENU_ICON_NAMES.createRPCCommand(
  RPCCommands.GET_CHANNEL_PERMISSIONS,
  obj9,
);
CONTEXT_MENU_ICON_NAMES = fn(15724);
let obj12 = { scope: null, handler: null };
const obj13 = {};
const items3 = [fn(8827).OAuth2Scopes.RPC, RPC_EMBEDDED_APP_SCOPE];
obj13[RPC_SCOPE_CONFIG.ANY] = items3;
obj12.scope = obj13;
obj12.handler = function handler(args) {
  ({ server, socket } = args);
  _require = socket;
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
  closure_3 = undefined;
  let obj;
  const scopes = socket.authorization.scopes;
  let tmp3 = null;
  if (!scopes.has(require("OAuth2Scopes").OAuth2Scopes.RPC)) {
    tmp3 = channel_id(tmp2[10])(socket);
  }
  closure_3 = tmp3;
  if (null != tmp3) {
    const frame = tmp3.frame;
    if (tmpResult.isUserScopedConjureApplication(frame.applicationId)) {
      let obj2 = { kind: "any" };
    } else {
      let guildId;
      if (frame.surface.type !== tmp(tmp2[11]).EmbeddedSurfaceType.OVERLAY) {
        guildId = frame.surface.guildId;
      }
      if (null != guildId) {
        obj2 = { kind: "guild", guildId };
      }
    }
    const obj3 = { errorCode: constants2.UNAUTHORIZED_FOR_APPLICATION };
    const tmp11 = new channel_id(tmp2[12])(
      obj3,
      "This app can only select a voice channel in the server it is installed in",
    );
    throw tmp11;
  } else {
    obj = { kind: "any" };
    const voiceChannelId = SelectedChannelStore.getVoiceChannelId();
    if (null == channel_id) {
      if (null != voiceChannelId) {
        const channel = ChannelStore.getChannel(voiceChannelId);
        if (channel != null) {
          const guildId1 = channel.getGuildId();
        }
        if ("guild" === obj.kind) {
          if (guildId1 !== obj.guildId) {
            let obj4 = { errorCode: constants2.INVALID_CHANNEL };
            const tmp42 = new channel_id(tmp2[12])(
              obj4,
              "This app can only select a voice channel in the server it is installed in",
            );
            throw tmp42;
          }
        }
      }
      let voiceChannel = channel_id(tmp2[21]).selectVoiceChannel(null);
      return null;
    } else {
      if (null != voiceChannelId) {
        if (voiceChannelId !== channel_id) {
          if (false === flag) {
            let obj5 = { errorCode: constants2.SELECT_VOICE_FORCE_REQUIRED };
            const tmp31 = new channel_id(tmp2[12])(obj5, "User is already joined to a voice channel.");
            throw tmp31;
          } else if (null != voiceChannelId) {
            const channel1 = ChannelStore.getChannel(voiceChannelId);
            if (channel1 != null) {
              const guildId2 = channel1.getGuildId();
            }
            if ("guild" === obj.kind) {
              if (guildId2 !== obj.guildId) {
                const obj6 = { errorCode: constants2.INVALID_CHANNEL };
                const tmp24 = new channel_id(tmp2[12])(
                  obj6,
                  "This app can only select a voice channel in the server it is installed in",
                );
                throw tmp24;
              }
            }
          }
        }
      }
      const storeWaitResult = server.storeWait(socket, () => ChannelStore.getChannel(channel_id), num);
      const catchPromise = server
        .storeWait(socket, () => ChannelStore.getChannel(channel_id), num)
        .catch(() => {
          throw new channel_id(flag2[12])(
            { errorCode: constants2.SELECT_CHANNEL_TIMED_OUT },
            "Request to select voice channel timed out.",
          );
        });
      _require = obj((arg0) => {
        dependencyMap = arg0;
        c5 = 0;
        c6 = 0;
        let iter = (function* (arg0) {
          closure_3 = tmp2;
          const iter = dependencyMap[Symbol.iterator]();
          closure_1 = dependencyMap;
          let tmp54 = iter === undefined;
          if (!tmp54) {
            closure_2 = iter.next();
          }
          closure_131_0 = closure_2;
          let obj9 = tmp73;
          if (!tmp54) {
            tmp54 = tmp53;
            obj9 = iter2;
            if (iter2 !== undefined) {
              closure_2 = iter2.next();
              tmp54 = tmp53;
              obj9 = iter2;
            }
          }
          closure_131_1 = closure_2;
          if (!tmp54) {
            obj9.return();
          }
          yield "Reflect";
          if (1 === tmp5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              return { value, done: true };
            } else {
              if (null != closure_131_1.guild_id) {
                if (obj12.isChannelFull(closure_131_0, VoiceStateStore, GuildStore)) {
                  throw new channel_id(flag2[12])({ errorCode: constants2.INVALID_CHANNEL }, "Channel is full");
                } else if (!PermissionStore.can(constants.CONNECT, closure_131_0)) {
                  throw new channel_id(flag2[12])(
                    { errorCode: constants2.INVALID_PERMISSIONS },
                    "Connect permission required to join channel",
                  );
                }
                obj12 = dependencyMap(flag2[22]);
              }
              if (null != closure_3) {
                c5 = 2;
                c6 = 1;
                return {
                  value: (function validateUserAllowsJoiningVoice() {
                    const self = this;
                    const apply = closure_1_15.apply;
                    if (typeof apply === "unknown") {
                      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                    } else {
                      applyArgumentsResult = apply(self, arguments);
                    }
                    return applyArgumentsResult;
                  })(closure_3),
                  done: false,
                };
              }
            }
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            return { value, done: true };
          }
          const voiceChannel = channel_id(flag2[21]).selectVoiceChannel(closure_131_0.id);
          if (closure_2) {
            dependencyMap(flag2[23]).replaceWith(closure_2_12.CHANNEL(closure_131_0.guild_id, closure_131_0.id));
            dependencyMap(flag2[23]);
          }
          return closure_131_1;
        })();
        iter.next();
        return iter;
      });
      return server
        .storeWait(socket, () => ChannelStore.getChannel(channel_id), num)
        .catch(() => {
          throw new channel_id(flag2[12])(
            { errorCode: constants2.SELECT_CHANNEL_TIMED_OUT },
            "Request to select voice channel timed out.",
          );
        })
        .then((type) => {
          if (null == type) {
            const obj4 = { errorCode: constants2.INVALID_CHANNEL };
            const _HermesInternal = HermesInternal;
            const tmp262 = new RPCErrorDefault(obj4, "Invalid channel id: " + channel_id);
            throw tmp262;
          } else if (hasOwnProperty(type.type)) {
            if ("guild" === obj.kind) {
              if (tmp10 !== tmp9.guildId) {
                const obj5 = { errorCode: constants2.INVALID_CHANNEL };
                const tmp22 = new RPCErrorDefault(
                  obj5,
                  "This app can only select a voice channel in the server it is installed in",
                );
                throw tmp22;
              }
            }
            const items = [Promise.resolve(type)];
            const obj2 = RPCHelpers;
            tmp9 = obj;
            items[1] = obj2.transformChannel(
              type,
              RPCHelpers.hasMessageReadPermission(type, closure_0.application.id, closure_0.authorization.scopes),
            );
            return Promise.all(items);
          } else {
            obj = { errorCode: constants2.INVALID_CHANNEL };
            const tmp7 = new RPCErrorDefault(obj, "Channel is not a voice channel");
            throw tmp7;
          }
        })
        .then(function () {
          const self = this;
          const apply = closure_0.apply;
          if (typeof apply === "unknown") {
            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
          } else {
            applyArgumentsResult = apply(self, arguments);
          }
          return applyArgumentsResult;
        });
    }
  }
};
obj[RPCCommands.SELECT_VOICE_CHANNEL] = CONTEXT_MENU_ICON_NAMES.createRPCCommand(
  RPCCommands.SELECT_VOICE_CHANNEL,
  obj12,
);
CONTEXT_MENU_ICON_NAMES = fn(15724);
const obj15 = { scope: null, handler: null };
const obj16 = {};
const items4 = [fn(8827).OAuth2Scopes.RPC, fn(8827).OAuth2Scopes.RPC_VOICE_READ];
obj16[RPC_SCOPE_CONFIG.ANY] = items4;
obj15.scope = obj16;
obj15.handler = function handler(socket) {
  socket = socket.socket;
  const voiceChannelId = SelectedChannelStore.getVoiceChannelId();
  let channel = null;
  if (null != voiceChannelId) {
    channel = ChannelStore.getChannel(voiceChannelId);
  }
  let transformChannelResult = null;
  if (null != channel) {
    const obj = RPCHelpers;
    transformChannelResult = obj.transformChannel(
      channel,
      RPCHelpers.hasMessageReadPermission(channel, socket.application.id, socket.authorization.scopes),
    );
  }
  return transformChannelResult;
};
obj[RPCCommands.GET_SELECTED_VOICE_CHANNEL] = CONTEXT_MENU_ICON_NAMES.createRPCCommand(
  RPCCommands.GET_SELECTED_VOICE_CHANNEL,
  obj15,
);
CONTEXT_MENU_ICON_NAMES = fn(15724);
obj[RPCCommands.SELECT_TEXT_CHANNEL] = CONTEXT_MENU_ICON_NAMES.createRPCCommand(RPCCommands.SELECT_TEXT_CHANNEL, {
  scope: fn(8827).OAuth2Scopes.RPC,
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
      const catchPromise = server
        .storeWait(socket, () => ChannelStore.getChannel(channel_id), num)
        .catch(() => {
          throw new channel_id(9264)(
            { errorCode: constants2.SELECT_CHANNEL_TIMED_OUT },
            "Request to select text channel timed out.",
          );
        });
      nextPromise1 = server
        .storeWait(socket, () => ChannelStore.getChannel(channel_id), num)
        .catch(() => {
          throw new channel_id(9264)(
            { errorCode: constants2.SELECT_CHANNEL_TIMED_OUT },
            "Request to select text channel timed out.",
          );
        })
        .then((type) => {
          if (null == type) {
            const obj4 = { errorCode: constants2.INVALID_CHANNEL };
            const _HermesInternal = HermesInternal;
            const tmp162 = new RPCErrorDefault(obj4, "Invalid channel id: " + channel_id);
            throw tmp162;
          } else if (timestampProducer(type.type)) {
            const items = [Promise.resolve(type)];
            const obj2 = RPCHelpers;
            items[1] = obj2.transformChannel(
              type,
              RPCHelpers.hasMessageReadPermission(type, socket.application.id, socket.authorization.scopes),
            );
            return Promise.all(items);
          } else {
            const obj = { errorCode: constants2.INVALID_CHANNEL };
            const tmp7 = new RPCErrorDefault(obj, "Channel is not a text channel");
            throw tmp7;
          }
        })
        .then((result) => {
          [tmp, tmp2] = result;
          if (null == tmp2.guild_id) {
            const privateChannel = channel_id(6634).selectPrivateChannel(tmp.id);
            const obj3 = channel_id(6634);
          } else if (PermissionStore.can(constants.VIEW_CHANNEL, tmp)) {
            socket(1114).replaceWith(closure_1_12.CHANNEL(tmp2.guild_id, tmp.id));
            const obj2 = socket(1114);
          } else {
            const obj = { errorCode: constants2.INVALID_CHANNEL };
            const tmp9 = new channel_id(9264)(obj, "No permission to see channel");
            throw tmp9;
          }
          return tmp2;
        });
      const nextPromise = server
        .storeWait(socket, () => ChannelStore.getChannel(channel_id), num)
        .catch(() => {
          throw new channel_id(9264)(
            { errorCode: constants2.SELECT_CHANNEL_TIMED_OUT },
            "Request to select text channel timed out.",
          );
        })
        .then((type) => {
          if (null == type) {
            const obj4 = { errorCode: constants2.INVALID_CHANNEL };
            const _HermesInternal = HermesInternal;
            const tmp162 = new RPCErrorDefault(obj4, "Invalid channel id: " + channel_id);
            throw tmp162;
          } else if (timestampProducer(type.type)) {
            const items = [Promise.resolve(type)];
            const obj2 = RPCHelpers;
            items[1] = obj2.transformChannel(
              type,
              RPCHelpers.hasMessageReadPermission(type, socket.application.id, socket.authorization.scopes),
            );
            return Promise.all(items);
          } else {
            const obj = { errorCode: constants2.INVALID_CHANNEL };
            const tmp7 = new RPCErrorDefault(obj, "Channel is not a text channel");
            throw tmp7;
          }
        });
    }
    return nextPromise1;
  },
});
CONTEXT_MENU_ICON_NAMES = fn(15724);
const obj18 = {
  scope: fn(8827).OAuth2Scopes.RPC,
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
      const catchPromise = server
        .storeWait(socket, () => ChannelStore.getChannel(channel_id), num)
        .catch(() => {
          throw new channel_id(9264)(
            { errorCode: constants2.SELECT_CHANNEL_TIMED_OUT },
            "Request to select text channel timed out.",
          );
        });
      nextPromise1 = server
        .storeWait(socket, () => ChannelStore.getChannel(channel_id), num)
        .catch(() => {
          throw new channel_id(9264)(
            { errorCode: constants2.SELECT_CHANNEL_TIMED_OUT },
            "Request to select text channel timed out.",
          );
        })
        .then((type) => {
          if (null == type) {
            const obj4 = { errorCode: constants2.INVALID_CHANNEL };
            const _HermesInternal = HermesInternal;
            const tmp162 = new RPCErrorDefault(obj4, "Invalid channel id: " + channel_id);
            throw tmp162;
          } else if (timestampProducer(type.type)) {
            const items = [Promise.resolve(type)];
            const obj2 = RPCHelpers;
            items[1] = obj2.transformChannel(
              type,
              RPCHelpers.hasMessageReadPermission(type, socket.application.id, socket.authorization.scopes),
            );
            return Promise.all(items);
          } else {
            const obj = { errorCode: constants2.INVALID_CHANNEL };
            const tmp7 = new RPCErrorDefault(obj, "Channel is not a text channel");
            throw tmp7;
          }
        })
        .then((result) => {
          [tmp, tmp2] = result;
          if (null == tmp2.guild_id) {
            const privateChannel = channel_id(6634).selectPrivateChannel(tmp.id);
            const obj3 = channel_id(6634);
          } else if (PermissionStore.can(constants.VIEW_CHANNEL, tmp)) {
            socket(1114).replaceWith(closure_1_12.CHANNEL(tmp2.guild_id, tmp.id));
            const obj2 = socket(1114);
          } else {
            const obj = { errorCode: constants2.INVALID_CHANNEL };
            const tmp9 = new channel_id(9264)(obj, "No permission to see channel");
            throw tmp9;
          }
          return tmp2;
        });
      const nextPromise = server
        .storeWait(socket, () => ChannelStore.getChannel(channel_id), num)
        .catch(() => {
          throw new channel_id(9264)(
            { errorCode: constants2.SELECT_CHANNEL_TIMED_OUT },
            "Request to select text channel timed out.",
          );
        })
        .then((type) => {
          if (null == type) {
            const obj4 = { errorCode: constants2.INVALID_CHANNEL };
            const _HermesInternal = HermesInternal;
            const tmp162 = new RPCErrorDefault(obj4, "Invalid channel id: " + channel_id);
            throw tmp162;
          } else if (timestampProducer(type.type)) {
            const items = [Promise.resolve(type)];
            const obj2 = RPCHelpers;
            items[1] = obj2.transformChannel(
              type,
              RPCHelpers.hasMessageReadPermission(type, socket.application.id, socket.authorization.scopes),
            );
            return Promise.all(items);
          } else {
            const obj = { errorCode: constants2.INVALID_CHANNEL };
            const tmp7 = new RPCErrorDefault(obj, "Channel is not a text channel");
            throw tmp7;
          }
        });
    }
    return nextPromise1;
  },
};
obj[RPCCommands.CREATE_CHANNEL_INVITE] = CONTEXT_MENU_ICON_NAMES.createRPCCommand(RPCCommands.CREATE_CHANNEL_INVITE, {
  scope: fn(8827).OAuth2Scopes.RPC,
  handler(args) {
    args = args.args;
    const channel_id = args.channel_id;
    const merged = Object.assign(args, Object.assign({ channel_id: 0 }));
    const invite = InstantInviteActionCreatorsDefault.createInvite(channel_id, merged, "RPC");
    return invite.catch(() => {
      const obj = { errorCode: constants2.INVALID_PERMISSIONS };
      throw new RPCErrorDefault(
        { errorCode: constants2.INVALID_PERMISSIONS },
        "Unable to generate an invite for " + channel_id + ". Does this user have permissions?",
      );
    });
  },
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/rpc/server/commands/channels.tsx");

export default obj;
