// === Module 13904: items ===

// Module 13904 (items)
import set from "set" /* 2 */;
import applyDefault from "apply" /* 12 */;
import set2 from "set" /* 4379 */;
import generateAcceptInviteOptionsDefault from "generateAcceptInviteOptions" /* 8081 */;
import prototypeDefault from "prototype" /* 8789 */;
import createRpcJoiSchemaObjectDefault from "createRpcJoiSchemaObject" /* 8792 */;
import recurseReplaceContentTree from "recurseReplaceContentTree" /* 8794 */;
import getCurrentEmbeddedActivityChannelDefault from "getCurrentEmbeddedActivityChannel" /* 13901 */;
import createChannelRecord from "createChannelRecord" /* 1395 */;
import closure_5 from "ensureGuildLoaded" /* 1391 */;
import closure_6 from "createGuildRecordFromRust" /* 1910 */;
import closure_7 from "getUncachedChannelPermissions" /* 4024 */;
import closure_8 from "handleConnectionOpen" /* 1980 */;
import closure_9 from "updateVoiceState" /* 4547 */;
import RPC_SCOPE_CONFIG from "RPC_SCOPE_CONFIG" /* 4281 */;
import ME from "ME" /* 676 */;

({ isVoiceChannel: c3, isTextChannel: c4 } = createChannelRecord);
({ RPC_SCOPE_CONFIG, RPC_EMBEDDED_APP_SCOPE } = RPC_SCOPE_CONFIG);
({ Routes: c10, Permissions: unpackModuleId, RPCCommands, RPCErrors: closure_12 } = ME);
let obj = {};
obj = { scope: null, handler: null };
obj = {};
let items = [set2.OAuth2Scopes.RPC, set2.OAuth2Scopes.GUILDS, set2.OAuth2Scopes.GUILDS_CHANNELS_READ];
obj[RPC_SCOPE_CONFIG.ANY] = items;
obj[0] = obj;
obj[1] = function handler(args) {
  const channel_id = args.args.channel_id;
  const socket = args.socket;
  const channel = store.getChannel(channel_id);
  if (null == channel) {
    let obj = { errorCode: null };
    obj[0] = constants2.INVALID_CHANNEL;
    const _HermesInternal = HermesInternal;
    let tmp14 = prototypeDefault;
    tmp14 = new tmp14(obj, "Invalid channel id: " + channel_id);
    throw tmp14;
  } else {
    if (channel.isPrivate()) {
      const scopes = socket.authorization.scopes;
      if (!scopes.includes(set2.OAuth2Scopes.RPC)) {
        if (!scopes.includes(tmp(4379).OAuth2Scopes.DM_CHANNELS_READ)) {
          obj = { errorCode: null };
          obj[0] = constants2.INVALID_PERMISSIONS;
          const tmp8 = new prototypeDefault(obj, "Invalid scope");
          throw tmp8;
        }
      }
      tmp = require;
    }
    const obj3 = recurseReplaceContentTree;
    return obj3.transformChannel(channel, recurseReplaceContentTree.hasMessageReadPermission(channel, socket.application.id, socket.authorization.scopes));
  }
};
obj[RPCCommands.GET_CHANNEL] = obj;
obj[RPCCommands.GET_CHANNELS] = {
  scope: set2.OAuth2Scopes.RPC,
  handler(args) {
    const guild_id = args.args.guild_id;
    let guild;
    let obj = applyDefault;
    const values = obj.values(store.loadAllGuildAndPrivateChannelsFromDisk());
    let found = values;
    if (guild_id) {
      guild = guild.getGuild(guild_id);
      if (null == guild) {
        obj = { errorCode: null };
        obj[0] = constants2.INVALID_GUILD;
        const _HermesInternal = HermesInternal;
        let tmpResult = prototypeDefault;
        tmpResult = new tmpResult(obj, "Invalid guild id: " + guild_id);
        throw tmpResult;
      } else {
        found = values.filter((guild_id) => guild_id.guild_id === guild.id);
      }
    }
    obj = { channels: null };
    const found1 = found.filter((arg0) => closure_7.can(constants.VIEW_CHANNEL, arg0));
    obj[0] = found1.map((id) => ({ id: id.id, name: id.name, type: id.type }));
    return obj;
  }
};
let obj2 = { scope: null, handler: null };
let obj3 = {};
const items1 = [set2.OAuth2Scopes.GUILDS_MEMBERS_READ, set2.OAuth2Scopes.GUILDS_CHANNELS_READ];
obj3[RPC_SCOPE_CONFIG.ANY] = items1;
obj2[0] = obj3;
obj2[1] = function handler() {
  const tmp3 = getCurrentEmbeddedActivityChannelDefault();
  if (null == tmp3) {
    let obj = { errorCode: null };
    obj[0] = constants2.INVALID_CHANNEL;
    const tmp9 = new prototypeDefault(obj, "Invalid channel");
    throw tmp9;
  } else {
    obj = { permissions: null };
    obj[0] = closure_7.computePermissions(tmp3);
    return obj;
  }
  const tmp = importDefault;
};
obj[RPCCommands.GET_CHANNEL_PERMISSIONS] = obj2;
let obj4 = { scope: null, validation: null, handler: null };
const obj5 = {};
const items2 = [set2.OAuth2Scopes.RPC, RPC_EMBEDDED_APP_SCOPE];
obj5[RPC_SCOPE_CONFIG.ANY] = items2;
obj4[0] = obj5;
obj4[1] = function validation(string) {
  let obj = createRpcJoiSchemaObjectDefault(string);
  obj = { channel_id: null, timeout: null, force: null, navigate: null };
  const requiredResult = obj.required();
  obj[0] = string.string().allow(null);
  const stringResult = string.string();
  const numberResult = string.number();
  obj[1] = string.number().min(0).max(60);
  obj[2] = string.boolean();
  obj[3] = string.boolean();
  return requiredResult.keys(obj);
};
obj4[2] = function handler(args) {
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
    const voiceChannelId = store2.getVoiceChannelId();
    if (null != voiceChannelId) {
      if (voiceChannelId !== channel_id) {
        if (false === flag) {
          let obj = { errorCode: null };
          obj[0] = constants2.SELECT_VOICE_FORCE_REQUIRED;
          let tmp15 = new channel_id(tmp[9])(obj, "User is already joined to a voice channel.");
          throw tmp15;
        }
      }
    }
    const storeWaitResult = server.storeWait(socket, () => closure_1_5.getChannel(channel_id), num);
    const catchPromise = server.storeWait(socket, () => closure_1_5.getChannel(channel_id), num).catch(() => {
      throw new channel_id(flag2[9])({ errorCode: constants.SELECT_CHANNEL_TIMED_OUT }, "Request to select voice channel timed out.");
    });
    return server.storeWait(socket, () => closure_1_5.getChannel(channel_id), num).catch(() => {
      throw new channel_id(flag2[9])({ errorCode: constants.SELECT_CHANNEL_TIMED_OUT }, "Request to select voice channel timed out.");
    }).then((type) => {
      if (null == type) {
        let obj = { errorCode: null };
        obj[0] = closure_1_12.INVALID_CHANNEL;
        const _HermesInternal = HermesInternal;
        let tmp16 = channel_id(flag2[9]);
        tmp16 = new tmp16(obj, "Invalid channel id: " + channel_id);
        throw tmp16;
      } else if (closure_1_3(type.type)) {
        const items = [Promise.resolve(type), ];
        const obj2 = socket(flag2[10]);
        items[1] = obj2.transformChannel(type, socket(flag2[10]).hasMessageReadPermission(type, socket.application.id, socket.authorization.scopes));
        return Promise.all(items);
      } else {
        obj = { errorCode: null };
        obj[0] = closure_1_12.INVALID_CHANNEL;
        const tmp7 = new channel_id(flag2[9])(obj, "Channel is not a voice channel");
        throw tmp7;
      }
    }).then((arg0) => {
      [tmp, tmp2] = arg0;
      if (tmp2.guild_id) {
        let obj = socket(flag2[16]);
        if (obj.isChannelFull(tmp, closure_1_9, closure_1_6)) {
          obj = { errorCode: null };
          obj[0] = closure_1_12.INVALID_CHANNEL;
          const tmp28 = new channel_id(flag2[9])(obj, "Channel is full");
          throw tmp28;
        } else if (!closure_1_7.can(closure_1_11.CONNECT, tmp)) {
          obj = { errorCode: null };
          obj[0] = closure_1_12.INVALID_PERMISSIONS;
          const tmp15 = new channel_id(flag2[9])(obj, "Connect permission required to join channel");
          throw tmp15;
        }
      }
      const voiceChannel = channel_id(flag2[15]).selectVoiceChannel(tmp.id);
      if (flag2) {
        socket(flag2[17]).replaceWith(closure_1_10.CHANNEL(tmp.guild_id, tmp.id));
        const obj4 = socket(flag2[17]);
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
const items3 = [set2.OAuth2Scopes.RPC, set2.OAuth2Scopes.RPC_VOICE_READ];
obj7[RPC_SCOPE_CONFIG.ANY] = items3;
obj6[0] = obj7;
obj6[1] = function handler(socket) {
  socket = socket.socket;
  const voiceChannelId = store2.getVoiceChannelId();
  let channel = null;
  if (null != voiceChannelId) {
    channel = store.getChannel(voiceChannelId);
  }
  let transformChannelResult = null;
  if (null != channel) {
    const obj = recurseReplaceContentTree;
    transformChannelResult = obj.transformChannel(channel, recurseReplaceContentTree.hasMessageReadPermission(channel, socket.application.id, socket.authorization.scopes));
    const obj2 = recurseReplaceContentTree;
  }
  return transformChannelResult;
};
obj[RPCCommands.GET_SELECTED_VOICE_CHANNEL] = obj6;
const obj1 = {
  scope: set2.OAuth2Scopes.RPC,
  handler(args) {
    const guild_id = args.args.guild_id;
    let guild;
    let obj = applyDefault;
    const values = obj.values(store.loadAllGuildAndPrivateChannelsFromDisk());
    let found = values;
    if (guild_id) {
      guild = guild.getGuild(guild_id);
      if (null == guild) {
        obj = { errorCode: null };
        obj[0] = constants2.INVALID_GUILD;
        const _HermesInternal = HermesInternal;
        let tmpResult = prototypeDefault;
        tmpResult = new tmpResult(obj, "Invalid guild id: " + guild_id);
        throw tmpResult;
      } else {
        found = values.filter((guild_id) => guild_id.guild_id === guild.id);
      }
    }
    obj = { channels: null };
    const found1 = found.filter((arg0) => closure_7.can(constants.VIEW_CHANNEL, arg0));
    obj[0] = found1.map((id) => ({ id: id.id, name: id.name, type: id.type }));
    return obj;
  }
};
obj[RPCCommands.SELECT_TEXT_CHANNEL] = {
  scope: set2.OAuth2Scopes.RPC,
  validation(string) {
    let obj = createRpcJoiSchemaObjectDefault(string);
    obj = { channel_id: null, timeout: null };
    const requiredResult = obj.required();
    obj[0] = string.string().allow(null);
    const stringResult = string.string();
    const numberResult = string.number();
    obj[1] = string.number().min(0).max(60);
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
      const storeWaitResult = server.storeWait(socket, () => closure_1_5.getChannel(channel_id), num);
      const catchPromise = server.storeWait(socket, () => closure_1_5.getChannel(channel_id), num).catch(() => {
        throw new channel_id(8789)({ errorCode: constants2.SELECT_CHANNEL_TIMED_OUT }, "Request to select text channel timed out.");
      });
      let nextPromise1 = server.storeWait(socket, () => closure_1_5.getChannel(channel_id), num).catch(() => {
        throw new channel_id(8789)({ errorCode: constants2.SELECT_CHANNEL_TIMED_OUT }, "Request to select text channel timed out.");
      }).then((type) => {
        if (null == type) {
          let obj = { errorCode: null };
          obj[0] = closure_1_12.INVALID_CHANNEL;
          const _HermesInternal = HermesInternal;
          let tmp16 = channel_id(closure_1_2[9]);
          tmp16 = new tmp16(obj, "Invalid channel id: " + channel_id);
          throw tmp16;
        } else if (closure_1_4(type.type)) {
          const items = [Promise.resolve(type), ];
          const obj2 = socket(closure_1_2[10]);
          items[1] = obj2.transformChannel(type, socket(closure_1_2[10]).hasMessageReadPermission(type, socket.application.id, socket.authorization.scopes));
          return Promise.all(items);
        } else {
          obj = { errorCode: null };
          obj[0] = closure_1_12.INVALID_CHANNEL;
          const tmp7 = new channel_id(closure_1_2[9])(obj, "Channel is not a text channel");
          throw tmp7;
        }
      }).then((arg0) => {
        [tmp, tmp2] = arg0;
        if (tmp2.guild_id) {
          if (!closure_7.can(constants.VIEW_CHANNEL, tmp)) {
            const obj = { errorCode: null };
            obj[0] = constants2.INVALID_CHANNEL;
            const tmp11 = new channel_id(8789)(obj, "No permission to see channel");
            throw tmp11;
          }
        }
        if (tmp2.guild_id) {
          socket(1222).replaceWith(closure_10.CHANNEL(tmp2.guild_id, tmp.id));
          const obj3 = socket(1222);
        } else {
          const privateChannel = channel_id(4980).selectPrivateChannel(tmp.id);
          const obj2 = channel_id(4980);
        }
        return tmp2;
      });
      const nextPromise = server.storeWait(socket, () => closure_1_5.getChannel(channel_id), num).catch(() => {
        throw new channel_id(8789)({ errorCode: constants2.SELECT_CHANNEL_TIMED_OUT }, "Request to select text channel timed out.");
      }).then((type) => {
        if (null == type) {
          let obj = { errorCode: null };
          obj[0] = closure_1_12.INVALID_CHANNEL;
          const _HermesInternal = HermesInternal;
          let tmp16 = channel_id(closure_1_2[9]);
          tmp16 = new tmp16(obj, "Invalid channel id: " + channel_id);
          throw tmp16;
        } else if (closure_1_4(type.type)) {
          const items = [Promise.resolve(type), ];
          const obj2 = socket(closure_1_2[10]);
          items[1] = obj2.transformChannel(type, socket(closure_1_2[10]).hasMessageReadPermission(type, socket.application.id, socket.authorization.scopes));
          return Promise.all(items);
        } else {
          obj = { errorCode: null };
          obj[0] = closure_1_12.INVALID_CHANNEL;
          const tmp7 = new channel_id(closure_1_2[9])(obj, "Channel is not a text channel");
          throw tmp7;
        }
      });
    } else {
      socket(1222).transitionTo(constants.ME);
      nextPromise1 = null;
      let obj = socket(1222);
    }
    return nextPromise1;
  }
};
const obj8 = {
  scope: set2.OAuth2Scopes.RPC,
  validation(string) {
    let obj = createRpcJoiSchemaObjectDefault(string);
    obj = { channel_id: null, timeout: null };
    const requiredResult = obj.required();
    obj[0] = string.string().allow(null);
    const stringResult = string.string();
    const numberResult = string.number();
    obj[1] = string.number().min(0).max(60);
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
      const storeWaitResult = server.storeWait(socket, () => closure_1_5.getChannel(channel_id), num);
      const catchPromise = server.storeWait(socket, () => closure_1_5.getChannel(channel_id), num).catch(() => {
        throw new channel_id(8789)({ errorCode: constants2.SELECT_CHANNEL_TIMED_OUT }, "Request to select text channel timed out.");
      });
      let nextPromise1 = server.storeWait(socket, () => closure_1_5.getChannel(channel_id), num).catch(() => {
        throw new channel_id(8789)({ errorCode: constants2.SELECT_CHANNEL_TIMED_OUT }, "Request to select text channel timed out.");
      }).then((type) => {
        if (null == type) {
          let obj = { errorCode: null };
          obj[0] = closure_1_12.INVALID_CHANNEL;
          const _HermesInternal = HermesInternal;
          let tmp16 = channel_id(closure_1_2[9]);
          tmp16 = new tmp16(obj, "Invalid channel id: " + channel_id);
          throw tmp16;
        } else if (closure_1_4(type.type)) {
          const items = [Promise.resolve(type), ];
          const obj2 = socket(closure_1_2[10]);
          items[1] = obj2.transformChannel(type, socket(closure_1_2[10]).hasMessageReadPermission(type, socket.application.id, socket.authorization.scopes));
          return Promise.all(items);
        } else {
          obj = { errorCode: null };
          obj[0] = closure_1_12.INVALID_CHANNEL;
          const tmp7 = new channel_id(closure_1_2[9])(obj, "Channel is not a text channel");
          throw tmp7;
        }
      }).then((arg0) => {
        [tmp, tmp2] = arg0;
        if (tmp2.guild_id) {
          if (!closure_7.can(constants.VIEW_CHANNEL, tmp)) {
            const obj = { errorCode: null };
            obj[0] = constants2.INVALID_CHANNEL;
            const tmp11 = new channel_id(8789)(obj, "No permission to see channel");
            throw tmp11;
          }
        }
        if (tmp2.guild_id) {
          socket(1222).replaceWith(closure_10.CHANNEL(tmp2.guild_id, tmp.id));
          const obj3 = socket(1222);
        } else {
          const privateChannel = channel_id(4980).selectPrivateChannel(tmp.id);
          const obj2 = channel_id(4980);
        }
        return tmp2;
      });
      const nextPromise = server.storeWait(socket, () => closure_1_5.getChannel(channel_id), num).catch(() => {
        throw new channel_id(8789)({ errorCode: constants2.SELECT_CHANNEL_TIMED_OUT }, "Request to select text channel timed out.");
      }).then((type) => {
        if (null == type) {
          let obj = { errorCode: null };
          obj[0] = closure_1_12.INVALID_CHANNEL;
          const _HermesInternal = HermesInternal;
          let tmp16 = channel_id(closure_1_2[9]);
          tmp16 = new tmp16(obj, "Invalid channel id: " + channel_id);
          throw tmp16;
        } else if (closure_1_4(type.type)) {
          const items = [Promise.resolve(type), ];
          const obj2 = socket(closure_1_2[10]);
          items[1] = obj2.transformChannel(type, socket(closure_1_2[10]).hasMessageReadPermission(type, socket.application.id, socket.authorization.scopes));
          return Promise.all(items);
        } else {
          obj = { errorCode: null };
          obj[0] = closure_1_12.INVALID_CHANNEL;
          const tmp7 = new channel_id(closure_1_2[9])(obj, "Channel is not a text channel");
          throw tmp7;
        }
      });
    } else {
      socket(1222).transitionTo(constants.ME);
      nextPromise1 = null;
      let obj = socket(1222);
    }
    return nextPromise1;
  }
};
obj[RPCCommands.CREATE_CHANNEL_INVITE] = {
  scope: set2.OAuth2Scopes.RPC,
  handler(args) {
    args = args.args;
    const channel_id = args.channel_id;
    const merged = Object.assign(args, Object.create(null));
    const invite = generateAcceptInviteOptionsDefault.createInvite(channel_id, merged, "RPC");
    return invite.catch(() => {
      let tmp = closure_1_1(closure_1_2[9]);
      tmp = new tmp({ errorCode: closure_1_12.INVALID_PERMISSIONS }, "Unable to generate an invite for " + channel_id + ". Does this user have permissions?");
      throw tmp;
    });
  }
};
const obj9 = {
  scope: set2.OAuth2Scopes.RPC,
  handler(args) {
    args = args.args;
    const channel_id = args.channel_id;
    const merged = Object.assign(args, Object.create(null));
    const invite = generateAcceptInviteOptionsDefault.createInvite(channel_id, merged, "RPC");
    return invite.catch(() => {
      let tmp = closure_1_1(closure_1_2[9]);
      tmp = new tmp({ errorCode: closure_1_12.INVALID_PERMISSIONS }, "Unable to generate an invite for " + channel_id + ". Does this user have permissions?");
      throw tmp;
    });
  }
};
const result = set.fileFinishedImporting("modules/rpc/server/commands/channels.tsx");

export default obj;