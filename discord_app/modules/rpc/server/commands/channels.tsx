// discord_app/modules/rpc/server/commands/channels.tsx
import createChannelRecord from "createChannelRecord";
import ensureGuildLoaded from "ensureGuildLoaded";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import handleConnectionOpen from "handleConnectionOpen";
import updateVoiceState from "updateVoiceState";
import { RPC_SCOPE_CONFIG } from "RPC_SCOPE_CONFIG";
import ME from "ME";

let RPCCommands;
let c10;
let c3;
let c4;
let closure_12;
let unpackModuleId;
({ isVoiceChannel: c3, isTextChannel: c4 } = createChannelRecord);
({ Routes: c10, Permissions: unpackModuleId, RPCCommands, RPCErrors: closure_12 } = ME);
let obj = {};
obj = { scope: null, handler: null };
obj = {};
let items = [require("set").OAuth2Scopes.RPC, require("set").OAuth2Scopes.GUILDS, require("set").OAuth2Scopes.GUILDS_CHANNELS_READ];
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
    let tmp14 = importDefault(10543);
    tmp14 = new tmp14(obj, "Invalid channel id: " + channel_id);
    throw tmp14;
  } else {
    if (channel.isPrivate()) {
      const scopes = socket.authorization.scopes;
      if (!scopes.includes(require(8824) /* set */.OAuth2Scopes.RPC)) {
        if (!scopes.includes(tmp(8824).OAuth2Scopes.DM_CHANNELS_READ)) {
          obj = { errorCode: null };
          obj[0] = constants2.INVALID_PERMISSIONS;
          const tmp8 = new importDefault(10543)(obj, "Invalid scope");
          throw tmp8;
        }
      }
      tmp = require;
    }
    const obj3 = require(10548) /* recurseReplaceContentTree */;
    return obj3.transformChannel(channel, require(10548) /* recurseReplaceContentTree */.hasMessageReadPermission(channel, socket.application.id, socket.authorization.scopes));
  }
};
obj[RPCCommands.GET_CHANNEL] = obj;
obj[RPCCommands.GET_CHANNELS] = {
  scope: require("set").OAuth2Scopes.RPC,
  handler(args) {
    const guild_id = args.args.guild_id;
    let guild;
    let obj = importDefault(12);
    const values = obj.values(store.loadAllGuildAndPrivateChannelsFromDisk());
    let found = values;
    if (guild_id) {
      guild = guild.getGuild(guild_id);
      if (null == guild) {
        obj = { errorCode: null };
        obj[0] = constants2.INVALID_GUILD;
        const _HermesInternal = HermesInternal;
        let tmpResult = importDefault(10543);
        tmpResult = new tmpResult(obj, "Invalid guild id: " + guild_id);
        throw tmpResult;
      } else {
        found = values.filter((guild_id) => guild_id.guild_id === guild.id);
      }
    }
    obj = { channels: null };
    const found1 = found.filter((arg0) => getUncachedChannelPermissions.can(constants.VIEW_CHANNEL, arg0));
    obj[0] = found1.map((id) => ({ id: id.id, name: id.name, type: id.type }));
    return obj;
  }
};
let obj2 = { scope: null, handler: null };
let obj3 = {};
const items1 = [require("set").OAuth2Scopes.GUILDS_MEMBERS_READ, require("set").OAuth2Scopes.GUILDS_CHANNELS_READ];
obj3[RPC_SCOPE_CONFIG.ANY] = items1;
obj2[0] = obj3;
obj2[1] = function handler() {
  const tmp3 = importDefault(13642)();
  if (null == tmp3) {
    let obj = { errorCode: null };
    obj[0] = constants2.INVALID_CHANNEL;
    const tmp9 = new tmp(10543)(obj, "Invalid channel");
    throw tmp9;
  } else {
    obj = { permissions: null };
    obj[0] = getUncachedChannelPermissions.computePermissions(tmp3);
    return obj;
  }
  tmp = importDefault;
};
obj[RPCCommands.GET_CHANNEL_PERMISSIONS] = obj2;
const obj1 = {
  scope: require("set").OAuth2Scopes.RPC,
  handler(args) {
    const guild_id = args.args.guild_id;
    let guild;
    let obj = importDefault(12);
    const values = obj.values(store.loadAllGuildAndPrivateChannelsFromDisk());
    let found = values;
    if (guild_id) {
      guild = guild.getGuild(guild_id);
      if (null == guild) {
        obj = { errorCode: null };
        obj[0] = constants2.INVALID_GUILD;
        const _HermesInternal = HermesInternal;
        let tmpResult = importDefault(10543);
        tmpResult = new tmpResult(obj, "Invalid guild id: " + guild_id);
        throw tmpResult;
      } else {
        found = values.filter((guild_id) => guild_id.guild_id === guild.id);
      }
    }
    obj = { channels: null };
    const found1 = found.filter((arg0) => getUncachedChannelPermissions.can(constants.VIEW_CHANNEL, arg0));
    obj[0] = found1.map((id) => ({ id: id.id, name: id.name, type: id.type }));
    return obj;
  }
};
obj[RPCCommands.SELECT_VOICE_CHANNEL] = {
  scope: require("set").OAuth2Scopes.RPC,
  validation(string) {
    let obj = importDefault(10546)(string);
    obj = { channel_id: null, timeout: null, force: null, navigate: null };
    const requiredResult = obj.required();
    obj[0] = string.string().allow(null);
    const stringResult = string.string();
    const numberResult = string.number();
    obj[1] = string.number().min(0).max(60);
    obj[2] = string.boolean();
    obj[3] = string.boolean();
    return requiredResult.keys(obj);
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
    if (channel_id) {
      const voiceChannelId = store2.getVoiceChannelId();
      if (null != voiceChannelId) {
        if (voiceChannelId !== channel_id) {
          if (false === flag) {
            let obj = { errorCode: null };
            obj[0] = constants2.SELECT_VOICE_FORCE_REQUIRED;
            const tmp14 = new channel_id(flag2[9])(obj, "User is already joined to a voice channel.");
            throw tmp14;
          }
        }
      }
      const storeWaitResult = server.storeWait(socket, () => outer1_5.getChannel(channel_id), num);
      const catchPromise = server.storeWait(socket, () => outer1_5.getChannel(channel_id), num).catch(() => {
        throw new channel_id(flag2[9])({ errorCode: constants.SELECT_CHANNEL_TIMED_OUT }, "Request to select voice channel timed out.");
      });
      return server.storeWait(socket, () => outer1_5.getChannel(channel_id), num).catch(() => {
        throw new channel_id(flag2[9])({ errorCode: constants.SELECT_CHANNEL_TIMED_OUT }, "Request to select voice channel timed out.");
      }).then((type) => {
        if (null == type) {
          let obj = { errorCode: null };
          obj[0] = outer1_12.INVALID_CHANNEL;
          const _HermesInternal = HermesInternal;
          let tmp16 = channel_id(flag2[9]);
          tmp16 = new tmp16(obj, "Invalid channel id: " + channel_id);
          throw tmp16;
        } else if (outer1_3(type.type)) {
          const items = [Promise.resolve(type), ];
          const obj2 = socket(flag2[10]);
          items[1] = obj2.transformChannel(type, socket(flag2[10]).hasMessageReadPermission(type, socket.application.id, socket.authorization.scopes));
          return Promise.all(items);
        } else {
          obj = { errorCode: null };
          obj[0] = outer1_12.INVALID_CHANNEL;
          const tmp7 = new channel_id(flag2[9])(obj, "Channel is not a voice channel");
          throw tmp7;
        }
      }).then((arg0) => {
        let tmp;
        let tmp2;
        [tmp, tmp2] = arg0;
        if (tmp2.guild_id) {
          let obj = socket(flag2[15]);
          if (obj.isChannelFull(tmp, outer1_9, outer1_6)) {
            obj = { errorCode: null };
            obj[0] = outer1_12.INVALID_CHANNEL;
            const tmp28 = new channel_id(flag2[9])(obj, "Channel is full");
            throw tmp28;
          } else if (!outer1_7.can(outer1_11.CONNECT, tmp)) {
            obj = { errorCode: null };
            obj[0] = outer1_12.INVALID_PERMISSIONS;
            const tmp15 = new channel_id(flag2[9])(obj, "Connect permission required to join channel");
            throw tmp15;
          }
        }
        const voiceChannel = channel_id(flag2[14]).selectVoiceChannel(tmp.id);
        if (flag2) {
          socket(flag2[16]).replaceWith(outer1_10.CHANNEL(tmp.guild_id, tmp.id));
          const obj4 = socket(flag2[16]);
        }
        return tmp2;
      });
    } else {
      obj = channel_id(flag2[14]);
      let voiceChannel = obj.selectVoiceChannel(null);
      return null;
    }
  }
};
const obj5 = { scope: null, handler: null };
const obj6 = {};
const items2 = [require("set").OAuth2Scopes.RPC, require("set").OAuth2Scopes.RPC_VOICE_READ];
obj6[RPC_SCOPE_CONFIG.ANY] = items2;
obj5[0] = obj6;
obj5[1] = function handler(socket) {
  socket = socket.socket;
  const voiceChannelId = store2.getVoiceChannelId();
  let channel = null;
  if (null != voiceChannelId) {
    channel = store.getChannel(voiceChannelId);
  }
  let transformChannelResult = null;
  if (null != channel) {
    const obj = require(10548) /* recurseReplaceContentTree */;
    transformChannelResult = obj.transformChannel(channel, require(10548) /* recurseReplaceContentTree */.hasMessageReadPermission(channel, socket.application.id, socket.authorization.scopes));
    const obj2 = require(10548) /* recurseReplaceContentTree */;
  }
  return transformChannelResult;
};
obj[RPCCommands.GET_SELECTED_VOICE_CHANNEL] = obj5;
let obj4 = {
  scope: require("set").OAuth2Scopes.RPC,
  validation(string) {
    let obj = importDefault(10546)(string);
    obj = { channel_id: null, timeout: null, force: null, navigate: null };
    const requiredResult = obj.required();
    obj[0] = string.string().allow(null);
    const stringResult = string.string();
    const numberResult = string.number();
    obj[1] = string.number().min(0).max(60);
    obj[2] = string.boolean();
    obj[3] = string.boolean();
    return requiredResult.keys(obj);
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
    if (channel_id) {
      const voiceChannelId = store2.getVoiceChannelId();
      if (null != voiceChannelId) {
        if (voiceChannelId !== channel_id) {
          if (false === flag) {
            let obj = { errorCode: null };
            obj[0] = constants2.SELECT_VOICE_FORCE_REQUIRED;
            const tmp14 = new channel_id(flag2[9])(obj, "User is already joined to a voice channel.");
            throw tmp14;
          }
        }
      }
      const storeWaitResult = server.storeWait(socket, () => outer1_5.getChannel(channel_id), num);
      const catchPromise = server.storeWait(socket, () => outer1_5.getChannel(channel_id), num).catch(() => {
        throw new channel_id(flag2[9])({ errorCode: constants.SELECT_CHANNEL_TIMED_OUT }, "Request to select voice channel timed out.");
      });
      return server.storeWait(socket, () => outer1_5.getChannel(channel_id), num).catch(() => {
        throw new channel_id(flag2[9])({ errorCode: constants.SELECT_CHANNEL_TIMED_OUT }, "Request to select voice channel timed out.");
      }).then((type) => {
        if (null == type) {
          let obj = { errorCode: null };
          obj[0] = outer1_12.INVALID_CHANNEL;
          const _HermesInternal = HermesInternal;
          let tmp16 = channel_id(flag2[9]);
          tmp16 = new tmp16(obj, "Invalid channel id: " + channel_id);
          throw tmp16;
        } else if (outer1_3(type.type)) {
          const items = [Promise.resolve(type), ];
          const obj2 = socket(flag2[10]);
          items[1] = obj2.transformChannel(type, socket(flag2[10]).hasMessageReadPermission(type, socket.application.id, socket.authorization.scopes));
          return Promise.all(items);
        } else {
          obj = { errorCode: null };
          obj[0] = outer1_12.INVALID_CHANNEL;
          const tmp7 = new channel_id(flag2[9])(obj, "Channel is not a voice channel");
          throw tmp7;
        }
      }).then((arg0) => {
        let tmp;
        let tmp2;
        [tmp, tmp2] = arg0;
        if (tmp2.guild_id) {
          let obj = socket(flag2[15]);
          if (obj.isChannelFull(tmp, outer1_9, outer1_6)) {
            obj = { errorCode: null };
            obj[0] = outer1_12.INVALID_CHANNEL;
            const tmp28 = new channel_id(flag2[9])(obj, "Channel is full");
            throw tmp28;
          } else if (!outer1_7.can(outer1_11.CONNECT, tmp)) {
            obj = { errorCode: null };
            obj[0] = outer1_12.INVALID_PERMISSIONS;
            const tmp15 = new channel_id(flag2[9])(obj, "Connect permission required to join channel");
            throw tmp15;
          }
        }
        const voiceChannel = channel_id(flag2[14]).selectVoiceChannel(tmp.id);
        if (flag2) {
          socket(flag2[16]).replaceWith(outer1_10.CHANNEL(tmp.guild_id, tmp.id));
          const obj4 = socket(flag2[16]);
        }
        return tmp2;
      });
    } else {
      obj = channel_id(flag2[14]);
      let voiceChannel = obj.selectVoiceChannel(null);
      return null;
    }
  }
};
obj[RPCCommands.SELECT_TEXT_CHANNEL] = {
  scope: require("set").OAuth2Scopes.RPC,
  validation(string) {
    let obj = importDefault(10546)(string);
    obj = { channel_id: null, timeout: null };
    const requiredResult = obj.required();
    obj[0] = string.string().allow(null);
    const stringResult = string.string();
    const numberResult = string.number();
    obj[1] = string.number().min(0).max(60);
    return requiredResult.keys(obj);
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
    if (channel_id) {
      const storeWaitResult = server.storeWait(socket, () => outer1_5.getChannel(channel_id), num);
      const catchPromise = server.storeWait(socket, () => outer1_5.getChannel(channel_id), num).catch(() => {
        throw new channel_id(10543)({ errorCode: constants2.SELECT_CHANNEL_TIMED_OUT }, "Request to select text channel timed out.");
      });
      let nextPromise1 = server.storeWait(socket, () => outer1_5.getChannel(channel_id), num).catch(() => {
        throw new channel_id(10543)({ errorCode: constants2.SELECT_CHANNEL_TIMED_OUT }, "Request to select text channel timed out.");
      }).then((type) => {
        if (null == type) {
          let obj = { errorCode: null };
          obj[0] = outer1_12.INVALID_CHANNEL;
          const _HermesInternal = HermesInternal;
          let tmp16 = channel_id(outer1_2[9]);
          tmp16 = new tmp16(obj, "Invalid channel id: " + channel_id);
          throw tmp16;
        } else if (outer1_4(type.type)) {
          const items = [Promise.resolve(type), ];
          const obj2 = socket(outer1_2[10]);
          items[1] = obj2.transformChannel(type, socket(outer1_2[10]).hasMessageReadPermission(type, socket.application.id, socket.authorization.scopes));
          return Promise.all(items);
        } else {
          obj = { errorCode: null };
          obj[0] = outer1_12.INVALID_CHANNEL;
          const tmp7 = new channel_id(outer1_2[9])(obj, "Channel is not a text channel");
          throw tmp7;
        }
      }).then((arg0) => {
        let tmp;
        let tmp2;
        [tmp, tmp2] = arg0;
        if (tmp2.guild_id) {
          if (!getUncachedChannelPermissions.can(constants.VIEW_CHANNEL, tmp)) {
            const obj = { errorCode: null };
            obj[0] = constants2.INVALID_CHANNEL;
            const tmp11 = new channel_id(10543)(obj, "No permission to see channel");
            throw tmp11;
          }
        }
        if (tmp2.guild_id) {
          socket(1222).replaceWith(closure_10.CHANNEL(tmp2.guild_id, tmp.id));
          const obj3 = socket(1222);
        } else {
          const privateChannel = channel_id(5096).selectPrivateChannel(tmp.id);
          const obj2 = channel_id(5096);
        }
        return tmp2;
      });
      const nextPromise = server.storeWait(socket, () => outer1_5.getChannel(channel_id), num).catch(() => {
        throw new channel_id(10543)({ errorCode: constants2.SELECT_CHANNEL_TIMED_OUT }, "Request to select text channel timed out.");
      }).then((type) => {
        if (null == type) {
          let obj = { errorCode: null };
          obj[0] = outer1_12.INVALID_CHANNEL;
          const _HermesInternal = HermesInternal;
          let tmp16 = channel_id(outer1_2[9]);
          tmp16 = new tmp16(obj, "Invalid channel id: " + channel_id);
          throw tmp16;
        } else if (outer1_4(type.type)) {
          const items = [Promise.resolve(type), ];
          const obj2 = socket(outer1_2[10]);
          items[1] = obj2.transformChannel(type, socket(outer1_2[10]).hasMessageReadPermission(type, socket.application.id, socket.authorization.scopes));
          return Promise.all(items);
        } else {
          obj = { errorCode: null };
          obj[0] = outer1_12.INVALID_CHANNEL;
          const tmp7 = new channel_id(outer1_2[9])(obj, "Channel is not a text channel");
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
const obj7 = {
  scope: require("set").OAuth2Scopes.RPC,
  validation(string) {
    let obj = importDefault(10546)(string);
    obj = { channel_id: null, timeout: null };
    const requiredResult = obj.required();
    obj[0] = string.string().allow(null);
    const stringResult = string.string();
    const numberResult = string.number();
    obj[1] = string.number().min(0).max(60);
    return requiredResult.keys(obj);
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
    if (channel_id) {
      const storeWaitResult = server.storeWait(socket, () => outer1_5.getChannel(channel_id), num);
      const catchPromise = server.storeWait(socket, () => outer1_5.getChannel(channel_id), num).catch(() => {
        throw new channel_id(10543)({ errorCode: constants2.SELECT_CHANNEL_TIMED_OUT }, "Request to select text channel timed out.");
      });
      let nextPromise1 = server.storeWait(socket, () => outer1_5.getChannel(channel_id), num).catch(() => {
        throw new channel_id(10543)({ errorCode: constants2.SELECT_CHANNEL_TIMED_OUT }, "Request to select text channel timed out.");
      }).then((type) => {
        if (null == type) {
          let obj = { errorCode: null };
          obj[0] = outer1_12.INVALID_CHANNEL;
          const _HermesInternal = HermesInternal;
          let tmp16 = channel_id(outer1_2[9]);
          tmp16 = new tmp16(obj, "Invalid channel id: " + channel_id);
          throw tmp16;
        } else if (outer1_4(type.type)) {
          const items = [Promise.resolve(type), ];
          const obj2 = socket(outer1_2[10]);
          items[1] = obj2.transformChannel(type, socket(outer1_2[10]).hasMessageReadPermission(type, socket.application.id, socket.authorization.scopes));
          return Promise.all(items);
        } else {
          obj = { errorCode: null };
          obj[0] = outer1_12.INVALID_CHANNEL;
          const tmp7 = new channel_id(outer1_2[9])(obj, "Channel is not a text channel");
          throw tmp7;
        }
      }).then((arg0) => {
        let tmp;
        let tmp2;
        [tmp, tmp2] = arg0;
        if (tmp2.guild_id) {
          if (!getUncachedChannelPermissions.can(constants.VIEW_CHANNEL, tmp)) {
            const obj = { errorCode: null };
            obj[0] = constants2.INVALID_CHANNEL;
            const tmp11 = new channel_id(10543)(obj, "No permission to see channel");
            throw tmp11;
          }
        }
        if (tmp2.guild_id) {
          socket(1222).replaceWith(closure_10.CHANNEL(tmp2.guild_id, tmp.id));
          const obj3 = socket(1222);
        } else {
          const privateChannel = channel_id(5096).selectPrivateChannel(tmp.id);
          const obj2 = channel_id(5096);
        }
        return tmp2;
      });
      const nextPromise = server.storeWait(socket, () => outer1_5.getChannel(channel_id), num).catch(() => {
        throw new channel_id(10543)({ errorCode: constants2.SELECT_CHANNEL_TIMED_OUT }, "Request to select text channel timed out.");
      }).then((type) => {
        if (null == type) {
          let obj = { errorCode: null };
          obj[0] = outer1_12.INVALID_CHANNEL;
          const _HermesInternal = HermesInternal;
          let tmp16 = channel_id(outer1_2[9]);
          tmp16 = new tmp16(obj, "Invalid channel id: " + channel_id);
          throw tmp16;
        } else if (outer1_4(type.type)) {
          const items = [Promise.resolve(type), ];
          const obj2 = socket(outer1_2[10]);
          items[1] = obj2.transformChannel(type, socket(outer1_2[10]).hasMessageReadPermission(type, socket.application.id, socket.authorization.scopes));
          return Promise.all(items);
        } else {
          obj = { errorCode: null };
          obj[0] = outer1_12.INVALID_CHANNEL;
          const tmp7 = new channel_id(outer1_2[9])(obj, "Channel is not a text channel");
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
  scope: require("set").OAuth2Scopes.RPC,
  handler(args) {
    args = args.args;
    const channel_id = args.channel_id;
    const merged = Object.assign(args, Object.create(null));
    const invite = importDefault(7679).createInvite(channel_id, merged, "RPC");
    return invite.catch(() => {
      let tmp = outer1_1(outer1_2[9]);
      tmp = new tmp({ errorCode: outer1_12.INVALID_PERMISSIONS }, "Unable to generate an invite for " + channel_id + ". Does this user have permissions?");
      throw tmp;
    });
  }
};
const obj8 = {
  scope: require("set").OAuth2Scopes.RPC,
  handler(args) {
    args = args.args;
    const channel_id = args.channel_id;
    const merged = Object.assign(args, Object.create(null));
    const invite = importDefault(7679).createInvite(channel_id, merged, "RPC");
    return invite.catch(() => {
      let tmp = outer1_1(outer1_2[9]);
      tmp = new tmp({ errorCode: outer1_12.INVALID_PERMISSIONS }, "Unable to generate an invite for " + channel_id + ". Does this user have permissions?");
      throw tmp;
    });
  }
};
const result = require("createGuildRecordFromRust").fileFinishedImporting("modules/rpc/server/commands/channels.tsx");

export default obj;