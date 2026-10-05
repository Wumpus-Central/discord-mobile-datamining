// === Module 14311: channels ===

// Module 14311 (channels)
import _modDef12 from "module_12" /* 12 */;
import router_utils from "router_utils" /* 1112 */;
import ChannelUtils from "ChannelUtils" /* 5035 */;
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 5568 */;
import OAuth2Scopes from "OAuth2Scopes" /* 8015 */;
import InstantInviteActionCreatorsDefault from "InstantInviteActionCreators" /* 8054 */;
import RPCErrorDefault from "RPCError" /* 9026 */;
import createRpcJoiSchemaObjectDefault from "createRpcJoiSchemaObject" /* 9029 */;
import RPCHelpers from "RPCHelpers" /* 9031 */;
import getCurrentEmbeddedChannelDefault from "getCurrentEmbeddedChannel" /* 14312 */;
import ChannelRecord from "ChannelRecord" /* 2055 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import GuildStore from "GuildStore" /* 2074 */;
import PermissionStore from "PermissionStore" /* 4509 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2103 */;
import VoiceStateStore from "VoiceStateStore" /* 4909 */;
import Constants_mod from "Constants" /* 5316 */;
import Constants_mod2 from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

let RPCCommands;
let RPC_EMBEDDED_APP_SCOPE;
let RPC_SCOPE_CONFIG;
let c10;
let c3;
let closure_12;
let closure_4;
let obj10;
let obj3;
let obj6;
let obj8;
let unpackModuleId;
function validation(string) {
  let minResult;
  let stringResult;
  const obj = createRpcJoiSchemaObjectDefault(string);
  const obj2 = { channel_id: stringResult.allow(null), timeout: minResult.max(60) };
  const keys = obj.required().keys;
  obj.required();
  stringResult = string.string();
  const numberResult = string.number();
  minResult = numberResult.min(0);
  return keys(obj2);
}
function handler(args) {
  let nextPromise1;
  let server;
  let socket;
  ({ server, socket } = args);
  args = args.args;
  const channel_id = args.channel_id;
  let num = args.timeout;
  if (num === undefined) {
    num = 0;
  }
  if (channel_id) {
    const storeWaitResult = server.storeWait(socket, () => ChannelStore.getChannel(channel_id), num);
    const catchPromise = storeWaitResult.catch(() => {
      const obj = { errorCode: constants2.SELECT_CHANNEL_TIMED_OUT };
      const tmp = new channel_id(dependencyMap[9])(obj, "Request to select text channel timed out.");
      throw tmp;
    });
    const nextPromise = catchPromise.then(function(type) {
      if (null == type) {
        const _HermesInternal = HermesInternal;
        const self3 = this;
        const self4 = this;
        const obj3 = { errorCode: constants2.INVALID_CHANNEL };
        const tmp15 = RPCErrorDefault;
        const tmp152 = new tmp15(obj3, "Invalid channel id: " + channel_id);
        throw tmp152;
      } else if (React3(type.type)) {
        const items = [Promise.resolve(type), ];
        const transformChannel = RPCHelpers.transformChannel;
        RPCHelpers;
        const obj2 = RPCHelpers;
        items[1] = transformChannel(type, obj2.hasMessageReadPermission(type, socket.application.id, socket.authorization.scopes));
        return all(items);
      } else {
        const self = this;
        const self2 = this;
        const obj = { errorCode: constants2.INVALID_CHANNEL };
        const tmp5 = new RPCErrorDefault(obj, "Channel is not a text channel");
        throw tmp5;
      }
    });
    nextPromise1 = nextPromise.then(function(result) {
      let tmp;
      let tmp2;
      [tmp, tmp2] = result;
      if (tmp2.guild_id) {
        if (!PermissionStore.can(constants.VIEW_CHANNEL, tmp)) {
          const self = this;
          const self2 = this;
          const obj = { errorCode: constants2.INVALID_CHANNEL };
          const tmp9 = new channel_id(dependencyMap[9])(obj, "No permission to see channel");
          throw tmp9;
        }
      }
      if (tmp2.guild_id) {
        const obj3 = socket(dependencyMap[17]);
        obj3.replaceWith(closure_1_10.CHANNEL(tmp2.guild_id, tmp.id));
      } else {
        const obj2 = channel_id(dependencyMap[15]);
        const privateChannel = obj2.selectPrivateChannel(tmp.id);
      }
      return tmp2;
    });
  } else {
    let obj = socket(1112);
    obj.transitionTo(constants.ME);
    nextPromise1 = null;
  }
  return nextPromise1;
}
const handler2 = function handler(args) {
  args = args.args;
  const channel_id = args.channel_id;
  const merged = Object.assign(args, Object.assign({ channel_id: 0 }));
  let obj = InstantInviteActionCreatorsDefault;
  const invite = obj.createInvite(channel_id, merged, "RPC");
  return invite.catch(() => {
    const obj = { errorCode: constants.INVALID_PERMISSIONS };
    const tmp = RPCErrorDefault;
    const tmp2 = new tmp(obj, "Unable to generate an invite for " + channel_id + ". Does this user have permissions?");
    throw tmp2;
  });
};
({ isVoiceChannel: c3, isTextChannel: closure_4 } = ChannelRecord);
let Constants = Constants_mod2;
({ RPC_SCOPE_CONFIG, RPC_EMBEDDED_APP_SCOPE } = Constants);
Constants = Constants_mod2;
({ Routes: c10, Permissions: unpackModuleId, RPCCommands, RPCErrors: closure_12 } = Constants);
let obj = {};
let obj2 = {
  scope: obj3,
  handler(args) {
    const channel_id = args.args.channel_id;
    const socket = args.socket;
    const channel = ChannelStore.getChannel(channel_id);
    if (null == channel) {
      const _HermesInternal = HermesInternal;
      const self3 = this;
      const self4 = this;
      const obj = { errorCode: constants2.INVALID_CHANNEL };
      const tmp13 = RPCErrorDefault;
      const tmp132 = new tmp13(obj, "Invalid channel id: " + channel_id);
      throw tmp132;
    } else {
      if (channel.isPrivate()) {
        const scopes = socket.authorization.scopes;
        if (!scopes.includes(OAuth2Scopes.OAuth2Scopes.RPC)) {
          if (!scopes.includes(OAuth2Scopes.OAuth2Scopes.DM_CHANNELS_READ)) {
            const self = this;
            const self2 = this;
            const obj2 = { errorCode: constants2.INVALID_PERMISSIONS };
            const tmp6 = new RPCErrorDefault(obj2, "Invalid scope");
            throw tmp6;
          }
        }
      }
      const transformChannel = RPCHelpers.transformChannel;
      RPCHelpers;
      const obj3 = RPCHelpers;
      return transformChannel(channel, obj3.hasMessageReadPermission(channel, socket.application.id, socket.authorization.scopes));
    }
  }
};
obj3 = {};
const GET_CHANNEL = RPCCommands.GET_CHANNEL;
const ANY = RPC_SCOPE_CONFIG.ANY;
let items = [OAuth2Scopes.OAuth2Scopes.RPC, OAuth2Scopes.OAuth2Scopes.GUILDS, OAuth2Scopes.OAuth2Scopes.GUILDS_CHANNELS_READ];
obj3[ANY] = items;
obj[GET_CHANNEL] = obj2;
let obj4 = {
  scope: OAuth2Scopes.OAuth2Scopes.RPC,
  handler(args) {
    let found1;
    const guild_id = args.args.guild_id;
    let guild;
    const obj = _modDef12;
    const values = obj.values(ChannelStore.loadAllGuildAndPrivateChannelsFromDisk());
    let found = values;
    if (guild_id) {
      guild = GuildStore.getGuild(guild_id);
      if (null == guild) {
        const _HermesInternal = HermesInternal;
        const self = this;
        const self2 = this;
        const obj2 = { errorCode: constants2.INVALID_GUILD };
        const tmpResult = RPCErrorDefault;
        const tmpResult1 = new tmpResult(obj2, "Invalid guild id: " + guild_id);
        throw tmpResult1;
      } else {
        found = values.filter((guild_id) => guild_id.guild_id === guild.id);
      }
    }
    const obj3 = { channels: found1.map((id) => ({ id: id.id, name: id.name, type: id.type })) };
    found1 = found.filter((item) => PermissionStore.can(constants.VIEW_CHANNEL, item));
    return obj3;
  }
};
obj[RPCCommands.GET_CHANNELS] = obj4;
let obj5 = {
  scope: obj6,
  handler(socket) {
    const tmp3 = getCurrentEmbeddedChannelDefault(socket.socket);
    if (null == tmp3) {
      const self = this;
      const self2 = this;
      const obj2 = { errorCode: constants2.INVALID_CHANNEL };
      const tmp7 = new RPCErrorDefault(obj2, "Invalid channel");
      throw tmp7;
    } else {
      const obj = { permissions: PermissionStore.computePermissions(tmp3) };
      return obj;
    }
  }
};
obj6 = {};
const GET_CHANNEL_PERMISSIONS = RPCCommands.GET_CHANNEL_PERMISSIONS;
const ANY2 = RPC_SCOPE_CONFIG.ANY;
const items1 = [OAuth2Scopes.OAuth2Scopes.GUILDS_MEMBERS_READ, OAuth2Scopes.OAuth2Scopes.GUILDS_CHANNELS_READ];
obj6[ANY2] = items1;
obj[GET_CHANNEL_PERMISSIONS] = obj5;
const obj7 = {
  scope: obj8,
  validation(string) {
    let minResult;
    let stringResult;
    const obj = createRpcJoiSchemaObjectDefault(string);
    const obj2 = { channel_id: stringResult.allow(null), timeout: minResult.max(60), force: string.boolean(), navigate: string.boolean() };
    const keys = obj.required().keys;
    obj.required();
    stringResult = string.string();
    const numberResult = string.number();
    minResult = numberResult.min(0);
    return keys(obj2);
  },
  handler(args) {
    let server;
    let socket;
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
    const scopes = socket.authorization.scopes;
    let tmp = flag2;
    if (scopes.includes(socket(flag2[8]).OAuth2Scopes.RPC)) {
      if (channel_id) {
        const voiceChannelId = SelectedChannelStore.getVoiceChannelId();
        let tmp13 = null;
        if (null != voiceChannelId) {
          if (voiceChannelId !== channel_id) {
            if (false === flag) {
              let obj3 = { errorCode: constants2.SELECT_VOICE_FORCE_REQUIRED };
              let self3 = this;
              let self4 = this;
              const tmp17 = new channel_id(tmp[9])(obj3, "User is already joined to a voice channel.");
              throw tmp17;
            }
          }
        }
        const storeWaitResult = server.storeWait(socket, () => ChannelStore.getChannel(channel_id), num);
        const catchPromise = storeWaitResult.catch(() => {
          const obj = { errorCode: constants.SELECT_CHANNEL_TIMED_OUT };
          const tmp = new channel_id(flag2[9])(obj, "Request to select voice channel timed out.");
          throw tmp;
        });
        const nextPromise = catchPromise.then(function(type) {
          if (null == type) {
            const _HermesInternal = HermesInternal;
            const self3 = this;
            const self4 = this;
            const obj3 = { errorCode: constants.INVALID_CHANNEL };
            const tmp15 = RPCErrorDefault;
            const tmp152 = new tmp15(obj3, "Invalid channel id: " + channel_id);
            throw tmp152;
          } else if (_false(type.type)) {
            const items = [Promise.resolve(type), ];
            const transformChannel = RPCHelpers.transformChannel;
            RPCHelpers;
            const obj2 = RPCHelpers;
            items[1] = transformChannel(type, obj2.hasMessageReadPermission(type, socket.application.id, socket.authorization.scopes));
            return all(items);
          } else {
            const self = this;
            const self2 = this;
            const obj = { errorCode: constants.INVALID_CHANNEL };
            const tmp5 = new RPCErrorDefault(obj, "Channel is not a voice channel");
            throw tmp5;
          }
        });
        return nextPromise.then(function(result) {
          let tmp;
          let tmp2;
          [tmp, tmp2] = result;
          if (tmp2.guild_id) {
            const obj = ChannelUtils;
            if (obj.isChannelFull(tmp, VoiceStateStore, GuildStore)) {
              const self3 = this;
              const self4 = this;
              const obj2 = { errorCode: constants.INVALID_CHANNEL };
              const tmp25 = new RPCErrorDefault(obj2, "Channel is full");
              throw tmp25;
            } else if (!PermissionStore.can(unpackModuleId.CONNECT, tmp)) {
              const self = this;
              const self2 = this;
              const obj5 = { errorCode: constants.INVALID_PERMISSIONS };
              const tmp13 = new RPCErrorDefault(obj5, "Connect permission required to join channel");
              throw tmp13;
            }
          }
          const obj3 = SelectedChannelActionCreatorsDefault;
          const voiceChannel = obj3.selectVoiceChannel(tmp.id);
          if (flag2) {
            const obj4 = router_utils;
            obj4.replaceWith(authStore.CHANNEL(tmp.guild_id, tmp.id));
          }
          return tmp2;
        });
      } else {
        let obj2 = channel_id(tmp[15]);
        let voiceChannel = obj2.selectVoiceChannel(null);
        return null;
      }
    } else {
      const tmp2 = channel_id;
      channel_id(tmp[14])(socket);
      let obj = { errorCode: constants2.UNAUTHORIZED_FOR_APPLICATION };
      let self = this;
      let self2 = this;
      let tmp5 = obj;
      const tmp6 = new channel_id(tmp[9])(obj, "Embedded apps cannot select a voice channel");
      throw tmp6;
    }
  }
};
obj8 = {};
const SELECT_VOICE_CHANNEL = RPCCommands.SELECT_VOICE_CHANNEL;
const ANY3 = RPC_SCOPE_CONFIG.ANY;
const items2 = [OAuth2Scopes.OAuth2Scopes.RPC, RPC_EMBEDDED_APP_SCOPE];
obj8[ANY3] = items2;
obj[SELECT_VOICE_CHANNEL] = obj7;
const obj9 = {
  scope: obj10,
  handler(socket) {
    socket = socket.socket;
    const voiceChannelId = SelectedChannelStore.getVoiceChannelId();
    let channel = null;
    if (null != voiceChannelId) {
      channel = ChannelStore.getChannel(voiceChannelId);
    }
    let transformChannelResult = null;
    if (null != channel) {
      const transformChannel = RPCHelpers.transformChannel;
      RPCHelpers;
      const obj = RPCHelpers;
      transformChannelResult = transformChannel(channel, obj.hasMessageReadPermission(channel, socket.application.id, socket.authorization.scopes));
    }
    return transformChannelResult;
  }
};
obj10 = {};
const GET_SELECTED_VOICE_CHANNEL = RPCCommands.GET_SELECTED_VOICE_CHANNEL;
const ANY4 = RPC_SCOPE_CONFIG.ANY;
const items3 = [OAuth2Scopes.OAuth2Scopes.RPC, OAuth2Scopes.OAuth2Scopes.RPC_VOICE_READ];
obj10[ANY4] = items3;
obj[GET_SELECTED_VOICE_CHANNEL] = obj9;
obj[RPCCommands.SELECT_TEXT_CHANNEL] = { scope: OAuth2Scopes.OAuth2Scopes.RPC, validation, handler };
({ scope: OAuth2Scopes.OAuth2Scopes.RPC, validation, handler });
obj[RPCCommands.CREATE_CHANNEL_INVITE] = { scope: OAuth2Scopes.OAuth2Scopes.RPC, handler: handler2 };
({ scope: OAuth2Scopes.OAuth2Scopes.RPC, handler: handler2 });
const result = size.fileFinishedImporting("modules/rpc/server/commands/channels.tsx");

export default obj;