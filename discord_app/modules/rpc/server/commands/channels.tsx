// discord_app/modules/rpc/server/commands/channels.tsx
import _modDef12 from "../../../../../_runtime/metro/00012__.js";
import router_utils from "../../../routing/router_utils.tsx";
import ChannelUtils from "../../../../utils/ChannelUtils.tsx";
import SelectedChannelActionCreatorsDefault from "../../../../actions/SelectedChannelActionCreators.tsx";
import OAuth2Scopes from "../../../../../discord_common/js/shared/shared-constants/OAuth2Scopes.tsx";
import InstantInviteActionCreatorsDefault from "../../../../actions/InstantInviteActionCreators.tsx";
import RPCErrorDefault from "../../RPCError.tsx";
import createRpcJoiSchemaObjectDefault from "../../helpers/createRpcJoiSchemaObject.tsx";
import RPCHelpers from "../../RPCHelpers.tsx";
import getCurrentEmbeddedActivityChannelDefault from "../../helpers/getCurrentEmbeddedActivityChannel.tsx";
import ChannelRecord from "../../../../records/ChannelRecord.tsx";
import ChannelStore from "../../../../stores/ChannelStore.tsx";
import GuildStore from "../../../../stores/GuildStore.tsx";
import PermissionStore from "../../../../stores/PermissionStore.tsx";
import SelectedChannelStore from "../../../../stores/SelectedChannelStore.tsx";
import VoiceStateStore from "../../../../stores/VoiceStateStore.tsx";
import Constants from "../../Constants.tsx";
import Constants from "../../../../Constants.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

({ isVoiceChannel: c3, isTextChannel: closure_4 } = ChannelRecord);
({ RPC_SCOPE_CONFIG, RPC_EMBEDDED_APP_SCOPE } = Constants);
({ Routes: c10, Permissions: closure_11, RPCCommands, RPCErrors: closure_12 } = Constants);
let obj = {};
obj = { scope: null, handler: null };
obj = {};
let items = [
  OAuth2Scopes.OAuth2Scopes.RPC,
  OAuth2Scopes.OAuth2Scopes.GUILDS,
  OAuth2Scopes.OAuth2Scopes.GUILDS_CHANNELS_READ,
];
obj[RPC_SCOPE_CONFIG.ANY] = items;
obj.scope = obj;
obj.handler = function handler(args) {
  const channel_id = args.args.channel_id;
  const socket = args.socket;
  const channel = ChannelStore.getChannel(channel_id);
  if (null == channel) {
    let obj = { errorCode: constants2.INVALID_CHANNEL };
    const _HermesInternal = HermesInternal;
    let tmp14 = RPCErrorDefault;
    tmp14 = new tmp14(obj, "Invalid channel id: " + channel_id);
    throw tmp14;
  } else {
    if (channel.isPrivate()) {
      const scopes = socket.authorization.scopes;
      if (!scopes.includes(OAuth2Scopes.OAuth2Scopes.RPC)) {
        if (!scopes.includes(OAuth2Scopes.OAuth2Scopes.DM_CHANNELS_READ)) {
          obj = { errorCode: constants2.INVALID_PERMISSIONS };
          const tmp8 = new RPCErrorDefault(obj, "Invalid scope");
          throw tmp8;
        }
      }
    }
    const obj3 = RPCHelpers;
    return obj3.transformChannel(
      channel,
      RPCHelpers.hasMessageReadPermission(channel, socket.application.id, socket.authorization.scopes),
    );
  }
};
obj[RPCCommands.GET_CHANNEL] = obj;
obj[RPCCommands.GET_CHANNELS] = {
  scope: OAuth2Scopes.OAuth2Scopes.RPC,
  handler(args) {
    const guild_id = args.args.guild_id;
    let guild;
    let obj = _modDef12;
    const values = obj.values(ChannelStore.loadAllGuildAndPrivateChannelsFromDisk());
    let found = values;
    if (guild_id) {
      guild = GuildStore.getGuild(guild_id);
      if (null == guild) {
        obj = { errorCode: constants2.INVALID_GUILD };
        const _HermesInternal = HermesInternal;
        let tmpResult = RPCErrorDefault;
        tmpResult = new tmpResult(obj, "Invalid guild id: " + guild_id);
        throw tmpResult;
      } else {
        found = values.filter((guild_id) => guild_id.guild_id === guild.id);
      }
    }
    obj = { channels: null };
    const found1 = found.filter((item) => PermissionStore.can(constants.VIEW_CHANNEL, item));
    obj.channels = found1.map((id) => ({ id: id.id, name: id.name, type: id.type }));
    return obj;
  },
};
let obj2 = { scope: null, handler: null };
let obj3 = {};
const items1 = [OAuth2Scopes.OAuth2Scopes.GUILDS_MEMBERS_READ, OAuth2Scopes.OAuth2Scopes.GUILDS_CHANNELS_READ];
obj3[RPC_SCOPE_CONFIG.ANY] = items1;
obj2.scope = obj3;
obj2.handler = function handler() {
  const tmp3 = getCurrentEmbeddedActivityChannelDefault();
  if (null == tmp3) {
    let obj = { errorCode: constants2.INVALID_CHANNEL };
    const tmp9 = new RPCErrorDefault(obj, "Invalid channel");
    throw tmp9;
  } else {
    obj = { permissions: PermissionStore.computePermissions(tmp3) };
    return obj;
  }
};
obj[RPCCommands.GET_CHANNEL_PERMISSIONS] = obj2;
let obj4 = { scope: null, validation: null, handler: null };
const obj5 = {};
const items2 = [OAuth2Scopes.OAuth2Scopes.RPC, RPC_EMBEDDED_APP_SCOPE];
obj5[RPC_SCOPE_CONFIG.ANY] = items2;
obj4.scope = obj5;
obj4.validation = function validation(string) {
  createRpcJoiSchemaObjectDefault(string);
  const obj = { channel_id: null, timeout: null, force: null, navigate: null };
  const requiredResult = obj.required();
  obj.channel_id = string.string().allow(null);
  const stringResult = string.string();
  const numberResult = string.number();
  obj.timeout = string.number().min(0).max(60);
  obj.force = string.boolean();
  obj.navigate = string.boolean();
  return requiredResult.keys(obj);
};
obj4.handler = function handler(args) {
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
  if (!scopes.includes(socket(flag2[8]).OAuth2Scopes.RPC)) {
    channel_id(tmp[14])(socket);
  }
  if (channel_id) {
    const voiceChannelId = SelectedChannelStore.getVoiceChannelId();
    if (null != voiceChannelId) {
      if (voiceChannelId !== channel_id) {
        if (false === flag) {
          let obj = { errorCode: constants2.SELECT_VOICE_FORCE_REQUIRED };
          let tmp15 = new channel_id(tmp[9])(obj, "User is already joined to a voice channel.");
          throw tmp15;
        }
      }
    }
    const storeWaitResult = server.storeWait(socket, () => ChannelStore.getChannel(channel_id), num);
    const catchPromise = server
      .storeWait(socket, () => ChannelStore.getChannel(channel_id), num)
      .catch(() => {
        throw new channel_id(flag2[9])(
          { errorCode: constants.SELECT_CHANNEL_TIMED_OUT },
          "Request to select voice channel timed out.",
        );
      });
    return server
      .storeWait(socket, () => ChannelStore.getChannel(channel_id), num)
      .catch(() => {
        throw new channel_id(flag2[9])(
          { errorCode: constants.SELECT_CHANNEL_TIMED_OUT },
          "Request to select voice channel timed out.",
        );
      })
      .then((type) => {
        if (null == type) {
          let obj = { errorCode: constants2.INVALID_CHANNEL };
          const _HermesInternal = HermesInternal;
          let tmp16 = RPCErrorDefault;
          tmp16 = new tmp16(obj, "Invalid channel id: " + channel_id);
          throw tmp16;
        } else if (React3(type.type)) {
          const items = [Promise.resolve(type)];
          const obj2 = RPCHelpers;
          items[1] = obj2.transformChannel(
            type,
            RPCHelpers.hasMessageReadPermission(type, socket.application.id, socket.authorization.scopes),
          );
          return Promise.all(items);
        } else {
          obj = { errorCode: constants2.INVALID_CHANNEL };
          const tmp7 = new RPCErrorDefault(obj, "Channel is not a voice channel");
          throw tmp7;
        }
      })
      .then((result) => {
        [tmp, tmp2] = result;
        if (tmp2.guild_id) {
          let obj = ChannelUtils;
          if (obj.isChannelFull(tmp, VoiceStateStore, GuildStore)) {
            obj = { errorCode: constants2.INVALID_CHANNEL };
            const tmp28 = new RPCErrorDefault(obj, "Channel is full");
            throw tmp28;
          } else if (!PermissionStore.can(constants.CONNECT, tmp)) {
            obj = { errorCode: constants2.INVALID_PERMISSIONS };
            const tmp15 = new RPCErrorDefault(obj, "Connect permission required to join channel");
            throw tmp15;
          }
        }
        const voiceChannel = SelectedChannelActionCreatorsDefault.selectVoiceChannel(tmp.id);
        if (flag2) {
          router_utils.replaceWith(closure_2_10.CHANNEL(tmp.guild_id, tmp.id));
        }
        return tmp2;
      });
  } else {
    obj = channel_id(tmp[15]);
    let voiceChannel = obj.selectVoiceChannel(null);
    return null;
  }
};
obj[RPCCommands.SELECT_VOICE_CHANNEL] = obj4;
const obj6 = { scope: null, handler: null };
const obj7 = {};
const items3 = [OAuth2Scopes.OAuth2Scopes.RPC, OAuth2Scopes.OAuth2Scopes.RPC_VOICE_READ];
obj7[RPC_SCOPE_CONFIG.ANY] = items3;
obj6.scope = obj7;
obj6.handler = function handler(socket) {
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
obj[RPCCommands.GET_SELECTED_VOICE_CHANNEL] = obj6;
const obj1 = {
  scope: OAuth2Scopes.OAuth2Scopes.RPC,
  handler(args) {
    const guild_id = args.args.guild_id;
    let guild;
    let obj = _modDef12;
    const values = obj.values(ChannelStore.loadAllGuildAndPrivateChannelsFromDisk());
    let found = values;
    if (guild_id) {
      guild = GuildStore.getGuild(guild_id);
      if (null == guild) {
        obj = { errorCode: constants2.INVALID_GUILD };
        const _HermesInternal = HermesInternal;
        let tmpResult = RPCErrorDefault;
        tmpResult = new tmpResult(obj, "Invalid guild id: " + guild_id);
        throw tmpResult;
      } else {
        found = values.filter((guild_id) => guild_id.guild_id === guild.id);
      }
    }
    obj = { channels: null };
    const found1 = found.filter((item) => PermissionStore.can(constants.VIEW_CHANNEL, item));
    obj.channels = found1.map((id) => ({ id: id.id, name: id.name, type: id.type }));
    return obj;
  },
};
obj[RPCCommands.SELECT_TEXT_CHANNEL] = {
  scope: OAuth2Scopes.OAuth2Scopes.RPC,
  validation(string) {
    createRpcJoiSchemaObjectDefault(string);
    const obj = { channel_id: null, timeout: null };
    const requiredResult = obj.required();
    obj.channel_id = string.string().allow(null);
    const stringResult = string.string();
    const numberResult = string.number();
    obj.timeout = string.number().min(0).max(60);
    return requiredResult.keys(obj);
  },
  handler(args) {
    ({ server, socket } = args);
    args = args.args;
    const channel_id = args.channel_id;
    let num = args.timeout;
    if (num === undefined) {
      num = 0;
    }
    if (channel_id) {
      const storeWaitResult = server.storeWait(socket, () => ChannelStore.getChannel(channel_id), num);
      const catchPromise = server
        .storeWait(socket, () => ChannelStore.getChannel(channel_id), num)
        .catch(() => {
          throw new channel_id(9554)(
            { errorCode: constants2.SELECT_CHANNEL_TIMED_OUT },
            "Request to select text channel timed out.",
          );
        });
      let nextPromise1 = server
        .storeWait(socket, () => ChannelStore.getChannel(channel_id), num)
        .catch(() => {
          throw new channel_id(9554)(
            { errorCode: constants2.SELECT_CHANNEL_TIMED_OUT },
            "Request to select text channel timed out.",
          );
        })
        .then((type) => {
          if (null == type) {
            let obj = { errorCode: constants2.INVALID_CHANNEL };
            const _HermesInternal = HermesInternal;
            let tmp16 = RPCErrorDefault;
            tmp16 = new tmp16(obj, "Invalid channel id: " + channel_id);
            throw tmp16;
          } else if (React4(type.type)) {
            const items = [Promise.resolve(type)];
            const obj2 = RPCHelpers;
            items[1] = obj2.transformChannel(
              type,
              RPCHelpers.hasMessageReadPermission(type, socket.application.id, socket.authorization.scopes),
            );
            return Promise.all(items);
          } else {
            obj = { errorCode: constants2.INVALID_CHANNEL };
            const tmp7 = new RPCErrorDefault(obj, "Channel is not a text channel");
            throw tmp7;
          }
        })
        .then((result) => {
          [tmp, tmp2] = result;
          if (tmp2.guild_id) {
            if (!PermissionStore.can(constants.VIEW_CHANNEL, tmp)) {
              const obj = { errorCode: constants2.INVALID_CHANNEL };
              const tmp11 = new channel_id(9554)(obj, "No permission to see channel");
              throw tmp11;
            }
          }
          if (tmp2.guild_id) {
            socket(1100).replaceWith(closure_1_10.CHANNEL(tmp2.guild_id, tmp.id));
            const obj3 = socket(1100);
          } else {
            const privateChannel = channel_id(5411).selectPrivateChannel(tmp.id);
            const obj2 = channel_id(5411);
          }
          return tmp2;
        });
      const nextPromise = server
        .storeWait(socket, () => ChannelStore.getChannel(channel_id), num)
        .catch(() => {
          throw new channel_id(9554)(
            { errorCode: constants2.SELECT_CHANNEL_TIMED_OUT },
            "Request to select text channel timed out.",
          );
        })
        .then((type) => {
          if (null == type) {
            let obj = { errorCode: constants2.INVALID_CHANNEL };
            const _HermesInternal = HermesInternal;
            let tmp16 = RPCErrorDefault;
            tmp16 = new tmp16(obj, "Invalid channel id: " + channel_id);
            throw tmp16;
          } else if (React4(type.type)) {
            const items = [Promise.resolve(type)];
            const obj2 = RPCHelpers;
            items[1] = obj2.transformChannel(
              type,
              RPCHelpers.hasMessageReadPermission(type, socket.application.id, socket.authorization.scopes),
            );
            return Promise.all(items);
          } else {
            obj = { errorCode: constants2.INVALID_CHANNEL };
            const tmp7 = new RPCErrorDefault(obj, "Channel is not a text channel");
            throw tmp7;
          }
        });
    } else {
      socket(1100).transitionTo(closure_10.ME);
      nextPromise1 = null;
      let obj = socket(1100);
    }
    return nextPromise1;
  },
};
const obj8 = {
  scope: OAuth2Scopes.OAuth2Scopes.RPC,
  validation(string) {
    createRpcJoiSchemaObjectDefault(string);
    const obj = { channel_id: null, timeout: null };
    const requiredResult = obj.required();
    obj.channel_id = string.string().allow(null);
    const stringResult = string.string();
    const numberResult = string.number();
    obj.timeout = string.number().min(0).max(60);
    return requiredResult.keys(obj);
  },
  handler(args) {
    ({ server, socket } = args);
    args = args.args;
    const channel_id = args.channel_id;
    let num = args.timeout;
    if (num === undefined) {
      num = 0;
    }
    if (channel_id) {
      const storeWaitResult = server.storeWait(socket, () => ChannelStore.getChannel(channel_id), num);
      const catchPromise = server
        .storeWait(socket, () => ChannelStore.getChannel(channel_id), num)
        .catch(() => {
          throw new channel_id(9554)(
            { errorCode: constants2.SELECT_CHANNEL_TIMED_OUT },
            "Request to select text channel timed out.",
          );
        });
      let nextPromise1 = server
        .storeWait(socket, () => ChannelStore.getChannel(channel_id), num)
        .catch(() => {
          throw new channel_id(9554)(
            { errorCode: constants2.SELECT_CHANNEL_TIMED_OUT },
            "Request to select text channel timed out.",
          );
        })
        .then((type) => {
          if (null == type) {
            let obj = { errorCode: constants2.INVALID_CHANNEL };
            const _HermesInternal = HermesInternal;
            let tmp16 = RPCErrorDefault;
            tmp16 = new tmp16(obj, "Invalid channel id: " + channel_id);
            throw tmp16;
          } else if (React4(type.type)) {
            const items = [Promise.resolve(type)];
            const obj2 = RPCHelpers;
            items[1] = obj2.transformChannel(
              type,
              RPCHelpers.hasMessageReadPermission(type, socket.application.id, socket.authorization.scopes),
            );
            return Promise.all(items);
          } else {
            obj = { errorCode: constants2.INVALID_CHANNEL };
            const tmp7 = new RPCErrorDefault(obj, "Channel is not a text channel");
            throw tmp7;
          }
        })
        .then((result) => {
          [tmp, tmp2] = result;
          if (tmp2.guild_id) {
            if (!PermissionStore.can(constants.VIEW_CHANNEL, tmp)) {
              const obj = { errorCode: constants2.INVALID_CHANNEL };
              const tmp11 = new channel_id(9554)(obj, "No permission to see channel");
              throw tmp11;
            }
          }
          if (tmp2.guild_id) {
            socket(1100).replaceWith(closure_1_10.CHANNEL(tmp2.guild_id, tmp.id));
            const obj3 = socket(1100);
          } else {
            const privateChannel = channel_id(5411).selectPrivateChannel(tmp.id);
            const obj2 = channel_id(5411);
          }
          return tmp2;
        });
      const nextPromise = server
        .storeWait(socket, () => ChannelStore.getChannel(channel_id), num)
        .catch(() => {
          throw new channel_id(9554)(
            { errorCode: constants2.SELECT_CHANNEL_TIMED_OUT },
            "Request to select text channel timed out.",
          );
        })
        .then((type) => {
          if (null == type) {
            let obj = { errorCode: constants2.INVALID_CHANNEL };
            const _HermesInternal = HermesInternal;
            let tmp16 = RPCErrorDefault;
            tmp16 = new tmp16(obj, "Invalid channel id: " + channel_id);
            throw tmp16;
          } else if (React4(type.type)) {
            const items = [Promise.resolve(type)];
            const obj2 = RPCHelpers;
            items[1] = obj2.transformChannel(
              type,
              RPCHelpers.hasMessageReadPermission(type, socket.application.id, socket.authorization.scopes),
            );
            return Promise.all(items);
          } else {
            obj = { errorCode: constants2.INVALID_CHANNEL };
            const tmp7 = new RPCErrorDefault(obj, "Channel is not a text channel");
            throw tmp7;
          }
        });
    } else {
      socket(1100).transitionTo(closure_10.ME);
      nextPromise1 = null;
      let obj = socket(1100);
    }
    return nextPromise1;
  },
};
obj[RPCCommands.CREATE_CHANNEL_INVITE] = {
  scope: OAuth2Scopes.OAuth2Scopes.RPC,
  handler(args) {
    args = args.args;
    const channel_id = args.channel_id;
    const merged = Object.assign(args, Object.assign({ channel_id: 0 }));
    const invite = InstantInviteActionCreatorsDefault.createInvite(channel_id, merged, "RPC");
    return invite.catch(() => {
      let tmp = RPCErrorDefault;
      tmp = new tmp(
        { errorCode: constants2.INVALID_PERMISSIONS },
        "Unable to generate an invite for " + channel_id + ". Does this user have permissions?",
      );
      throw tmp;
    });
  },
};
const result = size.fileFinishedImporting("modules/rpc/server/commands/channels.tsx");

export default obj;
