// discord_app/modules/rpc/server/commands/channels.tsx
import getChannelIdForEmbeddedSurfaceDefault from "../../../embedded_apps/utils/getChannelIdForEmbeddedSurface.tsx";
import OAuth2Scopes from "../../../../../discord_common/js/shared/shared-constants/OAuth2Scopes.tsx";
import InstantInviteActionCreatorsDefault from "../../../../actions/InstantInviteActionCreators.tsx";
import isPostMessageSocketDefault from "../../helpers/isPostMessageSocket.tsx";
import RPCErrorDefault from "../../RPCError.tsx";
import botScopedAccess from "../../helpers/botScopedAccess.tsx";
import RPCHelpers from "../../RPCHelpers.tsx";
import guildVoice from "../../helpers/guildVoice.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import ChannelStore from "../../../../stores/ChannelStore.tsx";
import GuildStore from "../../../../stores/GuildStore.tsx";
import PermissionStore from "../../../../stores/PermissionStore.tsx";
import RTCConnectionStore from "../../../../stores/RTCConnectionStore.tsx";
import SelectedChannelStore from "../../../../stores/SelectedChannelStore.tsx";
import SpeakingStore from "../../../../stores/SpeakingStore.tsx";
import VoiceStateStore from "../../../../stores/VoiceStateStore.tsx";

require = fn;
let closure_18 = async function _validateUserAllowsJoiningVoice() {
  await closure_130_1(closure_130_2[15])({
    applicationId: closure_129_0.applicationId,
    iframeId: closure_129_1,
    permissions: ["connect_user_to_voice"],
  });
  closure_129_2 = value;
  closure_129_3 = closure_130_3(closure_129_2, 1)[0];
  if (closure_129_3 != null) {
    const state = closure_129_3.state;
  }
  if ("granted" !== state) {
    throw new closure_130_1(closure_130_2[14])(
      { errorCode: closure_130_16.UNAUTHORIZED_FOR_APPLICATION },
      "The user has not allowed this app to join voice channels",
    );
  }
  await "HermesInternal";
  closure_1 = tmp2;
  ({ frame: closure_129_0, iframeId: closure_129_1 } = closure_0);
  return "flexDirection";
};
let closure_19 = async function _getGuildVoiceSnapshot() {
  closure_2 = tmp5;
  closure_1 = tmp2;
  closure_129_0 = closure_0;
  const guildVoiceChannel = require("guildVoice").getGuildVoiceChannel(closure_0);
  await require("RPCHelpers").transformChannel(guildVoiceChannel, false);
  closure_129_1 = value;
  closure_129_2 = closure_130_11.getVoiceChannelId() === closure_129_0;
  let isConnectedResult = closure_129_2;
  if (closure_129_2) {
    isConnectedResult = closure_130_10.isConnected();
  }
  closure_129_3 = isConnectedResult;
  let obj = {};
  let merged = Object.assign(closure_129_1);
  obj.selected = closure_129_2;
  obj.speaking_available = closure_129_3;
  const voice_states = closure_129_1.voice_states;
  obj.voice_states = voice_states.map((user) => {
    const obj = {};
    const merged = Object.assign(user);
    let isSpeakingResult = null;
    if (closure_1_3) {
      isSpeakingResult = speaking.isSpeaking(user.user.id);
    }
    obj.speaking = isSpeakingResult;
    return obj;
  });
  return obj;
};
const ChannelRecord = fn(4867);
({ isVoiceChannel: hasOwnProperty, isTextChannel: metroRequire } = ChannelRecord);
let Constants = fn(6450);
({ RPC_SCOPE_CONFIG, RPC_EMBEDDED_APP_SCOPE } = Constants);
Constants = fn(1072);
({
  Routes: closure_14,
  Permissions: closure_15,
  RPCCommands,
  RPCErrors: closure_16,
  ChannelTypes: closure_17,
} = Constants);
let obj = {};
let CONTEXT_MENU_ICON_NAMES = fn(16297);
let obj3 = { scope: null, validateAccess: null, handler: null };
let obj4 = {};
let items = [
  fn(8910).OAuth2Scopes.RPC,
  fn(8910).OAuth2Scopes.GUILDS,
  fn(8910).OAuth2Scopes.GUILDS_CHANNELS_READ,
  fn(8910).OAuth2Scopes.BOT,
  fn(8910).OAuth2Scopes.SDK_SOCIAL_LAYER,
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
  if (obj2.isGuildVoiceSocket(socket)) {
    if (null != channel) {
      if (null != channel.getGuildId()) {
        if (null != GuildStore.getGuild(channel.guild_id)) {
          if (PermissionStore.can(constants2.VIEW_CHANNEL, channel)) {
            if (channel.type === constants4.GUILD_VOICE) {
              let transformChannelResult = (function getGuildVoiceSnapshot() {
                const self = this;
                const apply = closure_1_19.apply;
                if (typeof apply === "unknown") {
                  let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                } else {
                  applyArgumentsResult = apply(self, arguments);
                }
                return applyArgumentsResult;
              })(channel_id);
            } else {
              transformChannelResult = RPCHelpers.transformChannel(channel, false, false);
              const tmpResult = RPCHelpers;
            }
            return transformChannelResult;
          }
        }
      }
    }
    const obj = { errorCode: constants3.INVALID_CHANNEL };
    const tmp30 = new RPCErrorDefault(obj, "Guild channel is unavailable");
    throw tmp30;
  } else if (null == channel) {
    const obj3 = { errorCode: constants3.INVALID_CHANNEL };
    const _HermesInternal = HermesInternal;
    const tmp122 = new RPCErrorDefault(obj3, "Invalid channel id: " + channel_id);
    throw tmp122;
  } else {
    if (channel.isPrivate()) {
      const scopes = socket.authorization.scopes;
      if (!scopes.has(OAuth2Scopes.OAuth2Scopes.RPC)) {
        if (!scopes.has(OAuth2Scopes.OAuth2Scopes.DM_CHANNELS_READ)) {
          const obj4 = { errorCode: constants3.INVALID_PERMISSIONS };
          const tmp8 = new RPCErrorDefault(obj4, "Invalid scope");
          throw tmp8;
        }
      }
    }
    if (args.botScopeOnly) {
      let result = botScopedAccess.canBotScopeReadMessages(socket, channel);
      const tmpResult5 = botScopedAccess;
    } else {
      result = RPCHelpers.hasMessageReadPermission(channel, socket.application.id, socket.authorization.scopes);
      const tmpResult6 = RPCHelpers;
    }
    return RPCHelpers.transformChannel(channel, result);
  }
  obj2 = guildVoice;
};
obj[RPCCommands.GET_CHANNEL] = CONTEXT_MENU_ICON_NAMES.createRPCCommand(RPCCommands.GET_CHANNEL, obj3);
CONTEXT_MENU_ICON_NAMES = fn(16297);
let obj6 = { scope: null, validateAccess: null, handler: null };
let obj7 = {};
const items1 = [fn(8910).OAuth2Scopes.RPC, fn(8910).OAuth2Scopes.BOT, fn(8910).OAuth2Scopes.SDK_SOCIAL_LAYER];
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
    const obj2 = { errorCode: constants3.INVALID_PERMISSIONS };
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
  let guild;
  if (obj.isGuildVoiceSocket(socket)) {
    const obj3 = { errorCode: constants3.INVALID_GUILD };
    const tmp19 = new guild(9333)(obj3, "Invalid guild");
    throw tmp19;
  }
  obj = socket(16293);
  const tmp3 = guild;
  const values = guild(12).values(ChannelStore.loadAllGuildAndPrivateChannelsFromDisk());
  let found = values;
  if (null != guild_id) {
    found = values;
    if ("" !== guild_id) {
      guild = GuildStore.getGuild(guild_id);
      if (null == guild) {
        const obj4 = { errorCode: constants3.INVALID_GUILD };
        const _HermesInternal = HermesInternal;
        const tmp3Result1 = new tmp3(9333)(obj4, "Invalid guild id: " + guild_id);
        throw tmp3Result1;
      } else {
        found = values.filter((guild_id) => guild_id.guild_id === guild.id);
      }
    }
  }
  let found1 = found;
  if (args.botScopeOnly) {
    found1 = found.filter((item) => botScopedAccess.botCanViewChannel(socket, item));
  }
  const obj5 = { channels: null };
  const found2 = found1.filter((type) => {
    let canResult = PermissionStore.can(constants2.VIEW_CHANNEL, type);
    if (canResult) {
      const isGuildVoiceSocketResult = guildVoice.isGuildVoiceSocket(socket);
      let tmp6 = !isGuildVoiceSocketResult;
      if (isGuildVoiceSocketResult) {
        tmp6 = type.type === constants4.GUILD_VOICE;
      }
      canResult = tmp6;
    }
    return canResult;
  });
  obj5.channels = found2.map((id) => ({ id: id.id, name: id.name, type: id.type }));
  return obj5;
};
obj[RPCCommands.GET_CHANNELS] = CONTEXT_MENU_ICON_NAMES.createRPCCommand(RPCCommands.GET_CHANNELS, obj6);
CONTEXT_MENU_ICON_NAMES = fn(16297);
let obj9 = { scope: null, validateAccess: null, handler: null };
let obj10 = {};
const items2 = [
  fn(8910).OAuth2Scopes.GUILDS_MEMBERS_READ,
  fn(8910).OAuth2Scopes.GUILDS_CHANNELS_READ,
  fn(8910).OAuth2Scopes.BOT,
];
obj10[RPC_SCOPE_CONFIG.ANY] = items2;
obj9.scope = obj10;
obj9.validateAccess = function validateAccess(socket) {
  socket = socket.socket;
  if (isPostMessageSocketDefault(socket)) {
    const tmp9 = getChannelIdForEmbeddedSurfaceDefault(socket.context.surface);
    if (null == tmp9) {
      const obj3 = { errorCode: constants3.INVALID_COMMAND };
      const tmp17 = new RPCErrorDefault(obj3, "Current embedded context not associated to a channel");
      throw tmp17;
    } else if (socket.botScopeOnly) {
      const result = botScopedAccess.validateBotScopeHasChannelAccess(socket, tmp9);
    }
  } else {
    const obj = { errorCode: constants3.INVALID_COMMAND };
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
    const obj3 = { errorCode: constants3.INVALID_CHANNEL };
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
CONTEXT_MENU_ICON_NAMES = fn(16297);
let obj12 = { scope: null, handler: null };
let obj13 = {};
const items3 = [fn(8910).OAuth2Scopes.RPC, RPC_EMBEDDED_APP_SCOPE, fn(8910).OAuth2Scopes.SDK_SOCIAL_LAYER];
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
  let obj9;
  if (obj.isGuildVoiceSocket(socket)) {
    const voiceChannelId = SelectedChannelStore.getVoiceChannelId();
    if (null == channel_id) {
      if (null == voiceChannelId) {
        return null;
      } else if (args.expected_channel_id !== voiceChannelId) {
        let obj2 = { errorCode: constants3.INVALID_PERMISSIONS };
        const tmp94 = new channel_id(tmp2[14])(obj2, "Cannot leave an unrelated call");
        throw tmp94;
      } else {
        const guildVoiceChannel = tmp(tmp2[16]).getGuildVoiceChannel(voiceChannelId);
        const tmpResult = tmp(tmp2[16]);
        let voiceChannel = channel_id(tmp2[24]).selectVoiceChannel(null);
        return null;
      }
    } else {
      const guildVoiceChannel1 = tmp(tmp2[16]).getGuildVoiceChannel(channel_id);
      if (null != voiceChannelId) {
        const channel = ChannelStore.getChannel(voiceChannelId);
        let type;
        if (channel != null) {
          type = channel.type;
        }
        if (type !== constants4.GUILD_VOICE) {
          const obj3 = { errorCode: constants3.INVALID_PERMISSIONS };
          const tmp84 = new channel_id(tmp2[14])(obj3, "Cannot leave an unrelated call");
          throw tmp84;
        }
      }
      if (null != voiceChannelId) {
        if (voiceChannelId !== guildVoiceChannel1.id) {
          if (!flag) {
            let obj4 = { errorCode: constants3.SELECT_VOICE_FORCE_REQUIRED };
            const tmp57 = new channel_id(tmp2[14])(obj4, "User is already joined to a voice channel");
            throw tmp57;
          }
        }
      }
      if (PermissionStore.can(constants2.CONNECT, guildVoiceChannel1)) {
        if (voiceChannelId !== guildVoiceChannel1.id) {
          if (tmpResult5.isChannelFull(guildVoiceChannel1, VoiceStateStore, GuildStore)) {
            let obj5 = { errorCode: constants3.INVALID_CHANNEL };
            const tmp77 = new channel_id(tmp2[14])(obj5, "Channel is full");
            throw tmp77;
          }
          tmpResult5 = tmp(tmp2[25]);
        }
        const voiceChannel1 = channel_id(tmp2[24]).selectVoiceChannel(guildVoiceChannel1.id);
        return null;
      } else {
        let obj6 = { errorCode: constants3.INVALID_PERMISSIONS };
        const tmp66 = new channel_id(tmp2[14])(obj6, "Connect permission required to join channel");
        throw tmp66;
      }
      const tmpResult4 = tmp(tmp2[16]);
    }
  } else {
    const scopes = socket.authorization.scopes;
    let tmp4 = null;
    if (!scopes.has(tmp(tmp2[19]).OAuth2Scopes.RPC)) {
      tmp4 = channel_id(tmp2[12])(socket);
    }
    closure_3 = tmp4;
    if (null != tmp4) {
      const frame = tmp4.frame;
      if (tmpResult6.isUserScopedConjureApplication(frame.applicationId)) {
        let obj7 = { kind: "any" };
      } else {
        let guildId;
        if (frame.surface.type !== tmp(tmp2[13]).EmbeddedSurfaceType.OVERLAY) {
          guildId = frame.surface.guildId;
        }
        if (null != guildId) {
          obj7 = { kind: "guild", guildId };
        }
      }
      let obj8 = { errorCode: constants3.UNAUTHORIZED_FOR_APPLICATION };
      const tmp12 = new channel_id(tmp2[14])(
        obj8,
        "This app can only select a voice channel in the server it is installed in",
      );
      throw tmp12;
    } else {
      obj9 = { kind: "any" };
      const voiceChannelId1 = SelectedChannelStore.getVoiceChannelId();
      if (null == channel_id) {
        if (null != voiceChannelId1) {
          const channel1 = ChannelStore.getChannel(voiceChannelId1);
          if (channel1 != null) {
            const guildId1 = channel1.getGuildId();
          }
          if ("guild" === obj9.kind) {
            if (guildId1 !== obj9.guildId) {
              let obj11 = { errorCode: constants3.INVALID_CHANNEL };
              const tmp43 = new channel_id(tmp2[14])(
                obj11,
                "This app can only select a voice channel in the server it is installed in",
              );
              throw tmp43;
            }
          }
        }
        const voiceChannel2 = channel_id(tmp2[24]).selectVoiceChannel(null);
        return null;
      } else {
        if (null != voiceChannelId1) {
          if (voiceChannelId1 !== channel_id) {
            if (false === flag) {
              let obj12 = { errorCode: constants3.SELECT_VOICE_FORCE_REQUIRED };
              const tmp32 = new channel_id(tmp2[14])(obj12, "User is already joined to a voice channel.");
              throw tmp32;
            } else if (null != voiceChannelId1) {
              const channel2 = ChannelStore.getChannel(voiceChannelId1);
              if (channel2 != null) {
                const guildId2 = channel2.getGuildId();
              }
              if ("guild" === obj9.kind) {
                if (guildId2 !== obj9.guildId) {
                  const obj13 = { errorCode: constants3.INVALID_CHANNEL };
                  const tmp25 = new channel_id(tmp2[14])(
                    obj13,
                    "This app can only select a voice channel in the server it is installed in",
                  );
                  throw tmp25;
                }
              }
            }
          }
        }
        const storeWaitResult = server.storeWait(socket, () => ChannelStore.getChannel(channel_id), num);
        const catchPromise = server
          .storeWait(socket, () => ChannelStore.getChannel(channel_id), num)
          .catch(() => {
            throw new channel_id(flag2[14])(
              { errorCode: constants2.SELECT_CHANNEL_TIMED_OUT },
              "Request to select voice channel timed out.",
            );
          });
        _require = obj9((arg0) => {
          dependencyMap = arg0;
          c5 = 0;
          c6 = 0;
          let iter = (function* (arg0) {
            if (c6 === 2) {
              c6 = 3;
              throw new TypeError("Generator functions may not be called on executing generators");
            } else if (tmp4 === 3) {
              if (arg0 === 1) {
                throw value;
              } else if (arg0 === 2) {
                const obj2 = { value, done: true };
                return obj2;
              } else {
                return { value: "HermesInternal", done: "HermesInternal" };
              }
            } else {
              try {
                c6 = 2;
                if (0 === c5) {
                  if (arg0 === 1) {
                    c6 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c6 = 3;
                    const obj5 = { value, done: true };
                    return obj5;
                  } else {
                    closure_4 = tmp5;
                    closure_3 = tmp2;
                    closure_131_0 = undefined;
                    closure_131_1 = undefined;
                    closure_1 = dependencyMap;
                    const iter = dependencyMap[Symbol.iterator]();
                    closure_1 = dependencyMap;
                    closure_2 = undefined;
                    let tmp54 = iter === undefined;
                    if (!tmp54) {
                      closure_2 = iter.next();
                    }
                    closure_131_0 = closure_2;
                    closure_2 = undefined;
                    obj9 = tmp73;
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
                    c5 = 1;
                    c6 = 1;
                    return { value: "flexDirection", done: true };
                  }
                } else {
                  if (1 === tmp5) {
                    if (arg0 === 1) {
                      c6 = 3;
                      throw value;
                    } else if (arg0 === 2) {
                      c6 = 3;
                      const obj6 = { value, done: true };
                      return obj6;
                    } else {
                      if (null != closure_131_1.guild_id) {
                        if (obj12.isChannelFull(closure_131_0, VoiceStateStore, GuildStore)) {
                          const obj7 = { errorCode: constants2.INVALID_CHANNEL };
                          const tmp48 = new channel_id(flag2[14])(obj7, "Channel is full");
                          throw tmp48;
                        } else if (!PermissionStore.can(constants.CONNECT, closure_131_0)) {
                          const obj8 = { errorCode: constants2.INVALID_PERMISSIONS };
                          const tmp18 = new channel_id(flag2[14])(obj8, "Connect permission required to join channel");
                          throw tmp18;
                        }
                        obj12 = dependencyMap(flag2[25]);
                      }
                      if (null != closure_3) {
                        c5 = 2;
                        c6 = 1;
                        const obj10 = {
                          value: (function validateUserAllowsJoiningVoice() {
                            const self = this;
                            const apply = closure_1_18.apply;
                            if (typeof apply === "unknown") {
                              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                            } else {
                              applyArgumentsResult = apply(self, arguments);
                            }
                            return applyArgumentsResult;
                          })(closure_3),
                          done: false,
                        };
                        return obj10;
                      }
                    }
                  } else if (arg0 === 1) {
                    c6 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c6 = 3;
                    const obj = { value, done: true };
                    return obj;
                  }
                  const voiceChannel = channel_id(flag2[24]).selectVoiceChannel(closure_131_0.id);
                  if (closure_2) {
                    dependencyMap(flag2[26]).replaceWith(
                      closure_2_14.CHANNEL(closure_131_0.guild_id, closure_131_0.id),
                    );
                    const obj4 = dependencyMap(flag2[26]);
                  }
                  c6 = 3;
                  const obj11 = { value: closure_131_1, done: true };
                  return obj11;
                }
              } catch (tmp56) {
                c6 = tmp;
                throw tmp56;
              }
            }
          })();
          iter.next();
          return iter;
        });
        return server
          .storeWait(socket, () => ChannelStore.getChannel(channel_id), num)
          .catch(() => {
            throw new channel_id(flag2[14])(
              { errorCode: constants2.SELECT_CHANNEL_TIMED_OUT },
              "Request to select voice channel timed out.",
            );
          })
          .then((type) => {
            if (null == type) {
              const obj4 = { errorCode: constants3.INVALID_CHANNEL };
              const _HermesInternal = HermesInternal;
              const tmp262 = new RPCErrorDefault(obj4, "Invalid channel id: " + channel_id);
              throw tmp262;
            } else if (hasOwnProperty(type.type)) {
              if ("guild" === obj9.kind) {
                if (tmp10 !== obj9.guildId) {
                  const obj5 = { errorCode: constants3.INVALID_CHANNEL };
                  const tmp22 = new RPCErrorDefault(
                    obj5,
                    "This app can only select a voice channel in the server it is installed in",
                  );
                  throw tmp22;
                }
              }
              const items = [Promise.resolve(type)];
              const obj2 = RPCHelpers;
              items[1] = obj2.transformChannel(
                type,
                RPCHelpers.hasMessageReadPermission(type, closure_0.application.id, closure_0.authorization.scopes),
              );
              return Promise.all(items);
            } else {
              const obj = { errorCode: constants3.INVALID_CHANNEL };
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
  }
  obj = require("guildVoice");
};
obj[RPCCommands.SELECT_VOICE_CHANNEL] = CONTEXT_MENU_ICON_NAMES.createRPCCommand(
  RPCCommands.SELECT_VOICE_CHANNEL,
  obj12,
);
CONTEXT_MENU_ICON_NAMES = fn(16297);
const obj15 = { scope: null, handler: null };
const obj16 = {};
const items4 = [fn(8910).OAuth2Scopes.RPC, fn(8910).OAuth2Scopes.RPC_VOICE_READ];
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
CONTEXT_MENU_ICON_NAMES = fn(16297);
obj[RPCCommands.SELECT_TEXT_CHANNEL] = CONTEXT_MENU_ICON_NAMES.createRPCCommand(RPCCommands.SELECT_TEXT_CHANNEL, {
  scope: fn(8910).OAuth2Scopes.RPC,
  handler(args) {
    ({ server, socket } = args);
    args = args.args;
    const channel_id = args.channel_id;
    let num = args.timeout;
    if (num === undefined) {
      num = 0;
    }
    if (null == channel_id) {
      socket(1099).transitionTo(constants.ME);
      let nextPromise1 = null;
      let obj = socket(1099);
    } else {
      const storeWaitResult = server.storeWait(socket, () => ChannelStore.getChannel(channel_id), num);
      const catchPromise = server
        .storeWait(socket, () => ChannelStore.getChannel(channel_id), num)
        .catch(() => {
          throw new channel_id(9333)(
            { errorCode: constants2.SELECT_CHANNEL_TIMED_OUT },
            "Request to select text channel timed out.",
          );
        });
      nextPromise1 = server
        .storeWait(socket, () => ChannelStore.getChannel(channel_id), num)
        .catch(() => {
          throw new channel_id(9333)(
            { errorCode: constants2.SELECT_CHANNEL_TIMED_OUT },
            "Request to select text channel timed out.",
          );
        })
        .then((type) => {
          if (null == type) {
            const obj4 = { errorCode: constants3.INVALID_CHANNEL };
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
            const obj = { errorCode: constants3.INVALID_CHANNEL };
            const tmp7 = new RPCErrorDefault(obj, "Channel is not a text channel");
            throw tmp7;
          }
        })
        .then((result) => {
          [tmp, tmp2] = result;
          if (null == tmp2.guild_id) {
            const privateChannel = channel_id(6706).selectPrivateChannel(tmp.id);
            const obj3 = channel_id(6706);
          } else if (PermissionStore.can(constants.VIEW_CHANNEL, tmp)) {
            socket(1099).replaceWith(closure_1_14.CHANNEL(tmp2.guild_id, tmp.id));
            const obj2 = socket(1099);
          } else {
            const obj = { errorCode: constants2.INVALID_CHANNEL };
            const tmp9 = new channel_id(9333)(obj, "No permission to see channel");
            throw tmp9;
          }
          return tmp2;
        });
      const nextPromise = server
        .storeWait(socket, () => ChannelStore.getChannel(channel_id), num)
        .catch(() => {
          throw new channel_id(9333)(
            { errorCode: constants2.SELECT_CHANNEL_TIMED_OUT },
            "Request to select text channel timed out.",
          );
        })
        .then((type) => {
          if (null == type) {
            const obj4 = { errorCode: constants3.INVALID_CHANNEL };
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
            const obj = { errorCode: constants3.INVALID_CHANNEL };
            const tmp7 = new RPCErrorDefault(obj, "Channel is not a text channel");
            throw tmp7;
          }
        });
    }
    return nextPromise1;
  },
});
CONTEXT_MENU_ICON_NAMES = fn(16297);
const obj18 = {
  scope: fn(8910).OAuth2Scopes.RPC,
  handler(args) {
    ({ server, socket } = args);
    args = args.args;
    const channel_id = args.channel_id;
    let num = args.timeout;
    if (num === undefined) {
      num = 0;
    }
    if (null == channel_id) {
      socket(1099).transitionTo(constants.ME);
      let nextPromise1 = null;
      let obj = socket(1099);
    } else {
      const storeWaitResult = server.storeWait(socket, () => ChannelStore.getChannel(channel_id), num);
      const catchPromise = server
        .storeWait(socket, () => ChannelStore.getChannel(channel_id), num)
        .catch(() => {
          throw new channel_id(9333)(
            { errorCode: constants2.SELECT_CHANNEL_TIMED_OUT },
            "Request to select text channel timed out.",
          );
        });
      nextPromise1 = server
        .storeWait(socket, () => ChannelStore.getChannel(channel_id), num)
        .catch(() => {
          throw new channel_id(9333)(
            { errorCode: constants2.SELECT_CHANNEL_TIMED_OUT },
            "Request to select text channel timed out.",
          );
        })
        .then((type) => {
          if (null == type) {
            const obj4 = { errorCode: constants3.INVALID_CHANNEL };
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
            const obj = { errorCode: constants3.INVALID_CHANNEL };
            const tmp7 = new RPCErrorDefault(obj, "Channel is not a text channel");
            throw tmp7;
          }
        })
        .then((result) => {
          [tmp, tmp2] = result;
          if (null == tmp2.guild_id) {
            const privateChannel = channel_id(6706).selectPrivateChannel(tmp.id);
            const obj3 = channel_id(6706);
          } else if (PermissionStore.can(constants.VIEW_CHANNEL, tmp)) {
            socket(1099).replaceWith(closure_1_14.CHANNEL(tmp2.guild_id, tmp.id));
            const obj2 = socket(1099);
          } else {
            const obj = { errorCode: constants2.INVALID_CHANNEL };
            const tmp9 = new channel_id(9333)(obj, "No permission to see channel");
            throw tmp9;
          }
          return tmp2;
        });
      const nextPromise = server
        .storeWait(socket, () => ChannelStore.getChannel(channel_id), num)
        .catch(() => {
          throw new channel_id(9333)(
            { errorCode: constants2.SELECT_CHANNEL_TIMED_OUT },
            "Request to select text channel timed out.",
          );
        })
        .then((type) => {
          if (null == type) {
            const obj4 = { errorCode: constants3.INVALID_CHANNEL };
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
            const obj = { errorCode: constants3.INVALID_CHANNEL };
            const tmp7 = new RPCErrorDefault(obj, "Channel is not a text channel");
            throw tmp7;
          }
        });
    }
    return nextPromise1;
  },
};
obj[RPCCommands.CREATE_CHANNEL_INVITE] = CONTEXT_MENU_ICON_NAMES.createRPCCommand(RPCCommands.CREATE_CHANNEL_INVITE, {
  scope: fn(8910).OAuth2Scopes.RPC,
  handler(args) {
    args = args.args;
    const channel_id = args.channel_id;
    const merged = Object.assign(args, Object.assign({ channel_id: 0 }));
    const invite = InstantInviteActionCreatorsDefault.createInvite(channel_id, merged, "RPC");
    return invite.catch(() => {
      const obj = { errorCode: constants3.INVALID_PERMISSIONS };
      throw new RPCErrorDefault(
        { errorCode: constants3.INVALID_PERMISSIONS },
        "Unable to generate an invite for " + channel_id + ". Does this user have permissions?",
      );
    });
  },
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/rpc/server/commands/channels.tsx");

export default obj;
