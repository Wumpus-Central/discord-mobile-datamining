// discord_app/modules/rpc/server/events/crossPlatformRPCEventHandlers.tsx
import addApplication from "addApplication";
import initialize from "initialize";
import { getGuildIconURL } from "GuildNSFWContentLevel";
import reset from "reset";
import ensureGuildLoaded from "ensureGuildLoaded";
import trackCommunicationDisabled from "trackCommunicationDisabled";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import _detectH265HardwareDecode from "_detectH265HardwareDecode";
import createRTCConnection from "createRTCConnection";
import mergeGuildAvatar from "mergeGuildAvatar";
import updateVoiceState from "updateVoiceState";
import RPC_SCOPE_CONFIG from "RPC_SCOPE_CONFIG";
import ME from "ME";
import { createRpcJoiSchemaObject } from "../../helpers/createRpcJoiSchemaObject.tsx";
import { prototype } from "../../RPCError.tsx";
import { recurseReplaceContentTree } from "../../RPCHelpers.tsx";

let RPCEvents;
let RPC_AUTHENTICATED_SCOPE;
let RPC_LOCAL_SCOPE;
let RPC_SCOPE_CONFIG;
let closure_15;
let closure_16;
const require = arg1;
function messageEventsValidation(string) {
  let obj = createRpcJoiSchemaObject(string);
  obj = { channel_id: null };
  const requiredResult = obj.required();
  obj[0] = string.string().required();
  return requiredResult.keys(obj);
}
function messageEvents(args) {
  const channel_id = args.args.channel_id;
  const socket = args.socket;
  const channel = store.getChannel(channel_id);
  if (null != channel) {
    if (obj4.hasMessageReadPermission(channel, socket.application.id, socket.authorization.scopes)) {
      if (tmp13Result.userCannotSeeNSFWContent(channel)) {
        let obj = { errorCode: null };
        obj[0] = constants2.INVALID_CHANNEL;
        const _HermesInternal = HermesInternal;
        let tmp3 = prototype;
        tmp3 = new tmp3(obj, "Invalid nsfw channel id: " + channel.id);
        throw tmp3;
      }
      tmp13Result = tmp13(4517);
    }
    obj4 = recurseReplaceContentTree;
    tmp13 = require;
  }
  obj = { errorCode: constants2.INVALID_CHANNEL };
  let tmp11 = prototype;
  tmp11 = new tmp11(obj, "Invalid channel id: " + channel_id);
  throw tmp11;
}
function speakingEventsValidation(string) {
  let obj = createRpcJoiSchemaObject(string);
  obj = { channel_id: null };
  obj[0] = string.string().allow(null);
  return obj.keys(obj);
}
function speakingEvents(args) {
  const channel_id = args.args.channel_id;
  if (null != channel_id) {
    if (null == store.getChannel(channel_id)) {
      const obj = { errorCode: null };
      obj[0] = constants2.INVALID_CHANNEL;
      const _HermesInternal = HermesInternal;
      let tmp4 = prototype;
      tmp4 = new tmp4(obj, "Invalid channel id: " + channel_id);
      throw tmp4;
    }
  }
}
({ RPC_AUTHENTICATED_SCOPE, RPC_LOCAL_SCOPE, RPC_SCOPE_CONFIG } = RPC_SCOPE_CONFIG);
({ ApplicationFlags: closure_15, RPCErrors: closure_16, RPCEvents } = ME);
let obj = {};
obj = {
  scope: require("set").OAuth2Scopes.RPC,
  validation(string) {
    let obj = createRpcJoiSchemaObject(string);
    obj = { guild_id: null };
    const requiredResult = obj.required();
    obj[0] = string.string().required();
    return requiredResult.keys(obj);
  },
  handler(args) {
    const guild_id = args.args.guild_id;
    if (null == guild.getGuild(guild_id)) {
      let obj = { errorCode: null };
      obj[0] = constants2.INVALID_GUILD;
      const _HermesInternal = HermesInternal;
      let tmp3 = prototype;
      tmp3 = new tmp3(obj, "Invalid guild id: " + guild_id);
      throw tmp3;
    } else {
      return (arg0) => {
        let dispatch;
        let prevState;
        ({ prevState, dispatch } = arg0);
        const guild = outer1_10.getGuild(guild_id);
        if (null != guild) {
          let obj = { id: null, name: null, icon_url: null };
          ({ id: obj[0], name: obj[1] } = guild);
          let tmp3 = outer1_6(guild, 128);
          if (tmp3 == null) {
            tmp3 = null;
          }
          obj = { guild: null, online: 0 };
          obj[2] = tmp3;
          obj[0] = obj;
          if (!obj3.isEqual(prevState, obj)) {
            dispatch(obj);
          }
          return obj;
        }
      };
    }
  }
};
obj[RPCEvents.GUILD_STATUS] = obj;
obj = { scope: null, validation: null, handler: null };
const obj1 = {};
const items = [require("set").OAuth2Scopes.RPC, require("set").OAuth2Scopes.RPC_VOICE_READ];
obj1[RPC_SCOPE_CONFIG.ANY] = items;
obj[0] = obj1;
obj[1] = function validation(string) {
  let obj = createRpcJoiSchemaObject(string);
  obj = { channel_id: null };
  const requiredResult = obj.required();
  obj[0] = string.string().required();
  return requiredResult.keys(obj);
};
obj[2] = function handler(args) {
  const channel_id = args.args.channel_id;
  if (null == store.getChannel(channel_id)) {
    const obj = { errorCode: null };
    obj[0] = constants2.INVALID_CHANNEL;
    const _HermesInternal = HermesInternal;
    let tmp3 = prototype;
    tmp3 = new tmp3(obj, "Invalid channel id: " + channel_id);
    throw tmp3;
  } else {
    return (arg0) => {
      let channel_id;
      let prevState;
      ({ prevState, dispatch: channel_id } = arg0);
      let channel;
      let guildId;
      channel = outer1_8.getChannel(channel_id);
      if (null != channel) {
        guildId = channel.getGuildId();
        const _Object = Object;
        const values = Object.values(outer1_14.getVoiceStatesForChannel(channel.id));
        if (prevState) {
          const obj2 = outer1_1(outer1_3[18]);
          const item = outer1_1(outer1_3[18]).differenceBy(values, prevState, (userId) => userId.userId).forEach((userId) => callback(outer1_0(outer1_3[14]).transformVoiceState(closure_2, channel.id, userId)));
          const differenceByResult = outer1_1(outer1_3[18]).differenceBy(values, prevState, (userId) => userId.userId);
        }
        return values;
      }
    };
  }
};
obj[RPCEvents.VOICE_STATE_CREATE] = obj;
let obj2 = { scope: null, validation: null, handler: null };
const obj3 = {};
const items1 = [require("set").OAuth2Scopes.RPC, require("set").OAuth2Scopes.RPC_VOICE_READ];
obj3[RPC_SCOPE_CONFIG.ANY] = items1;
obj2[0] = obj3;
obj2[1] = function validation(string) {
  let obj = createRpcJoiSchemaObject(string);
  obj = { channel_id: null };
  const requiredResult = obj.required();
  obj[0] = string.string().required();
  return requiredResult.keys(obj);
};
obj2[2] = function handler(args) {
  const channel_id = args.args.channel_id;
  if (null == store.getChannel(channel_id)) {
    const obj = { errorCode: null };
    obj[0] = constants2.INVALID_CHANNEL;
    const _HermesInternal = HermesInternal;
    let tmp3 = prototype;
    tmp3 = new tmp3(obj, "Invalid channel id: " + channel_id);
    throw tmp3;
  } else {
    return (dispatch) => {
      dispatch = dispatch.dispatch;
      let channel;
      let guildId;
      channel = outer1_8.getChannel(dispatch);
      if (null != channel) {
        guildId = channel.getGuildId();
        const _Object = Object;
        const values = Object.values(outer1_14.getVoiceStatesForChannel(channel.id));
        const obj2 = outer1_1(outer1_3[18]);
        const item = outer1_1(outer1_3[18]).differenceBy(dispatch.prevState, values, (userId) => userId.userId).forEach((userId) => dispatch(dispatch(outer1_3[14]).transformVoiceState(closure_2, channel.id, userId)));
        return values;
      }
    };
  }
};
obj[RPCEvents.VOICE_STATE_DELETE] = obj2;
let obj4 = { scope: null, validation: null, handler: null };
const obj5 = {};
const items2 = [require("set").OAuth2Scopes.RPC, require("set").OAuth2Scopes.RPC_VOICE_READ];
obj5[RPC_SCOPE_CONFIG.ANY] = items2;
obj4[0] = obj5;
obj4[1] = function validation(string) {
  let obj = createRpcJoiSchemaObject(string);
  obj = { channel_id: null };
  const requiredResult = obj.required();
  obj[0] = string.string().required();
  return requiredResult.keys(obj);
};
obj4[2] = function handler(args) {
  const channel_id = args.args.channel_id;
  if (null == store.getChannel(channel_id)) {
    const obj = { errorCode: null };
    obj[0] = constants2.INVALID_CHANNEL;
    const _HermesInternal = HermesInternal;
    let tmp3 = prototype;
    tmp3 = new tmp3(obj, "Invalid channel id: " + channel_id);
    throw tmp3;
  } else {
    return (dispatch) => {
      dispatch = dispatch.dispatch;
      let channel;
      let guildId;
      channel = outer1_8.getChannel(dispatch);
      if (null != channel) {
        guildId = channel.getGuildId();
        const _Object = Object;
        const values = Object.values(outer1_14.getVoiceStatesForChannel(channel.id));
        const mapped = values.map((userId) => dispatch(outer1_3[14]).transformVoiceState(closure_2, channel.id, userId));
        const obj2 = outer1_1(outer1_3[18]);
        const item = outer1_1(outer1_3[18]).differenceWith(mapped, dispatch.prevState, outer1_1(outer1_3[18]).isEqual).forEach((arg0) => dispatch(arg0));
        return mapped;
      }
    };
  }
};
obj[RPCEvents.VOICE_STATE_UPDATE] = obj4;
const obj6 = { scope: null, handler: null };
const obj7 = {};
const items3 = [require("set").OAuth2Scopes.RPC, require("set").OAuth2Scopes.RPC_VOICE_READ];
obj7[RPC_SCOPE_CONFIG.ANY] = items3;
obj6[0] = obj7;
obj6[1] = function handler() {
  return (arg0) => {
    let dispatch;
    let prevState;
    const obj = { state: null, hostname: null, pings: null, average_ping: null, last_ping: null };
    ({ prevState, dispatch } = arg0);
    obj[0] = callback(10747).getVoiceConnectionState(store.getState());
    obj[1] = store.getHostname();
    obj[2] = store.getPings();
    obj[3] = store.getAveragePing();
    obj[4] = store.getLastPing();
    const obj2 = callback(10747);
    if (!obj3.isEqual(obj, prevState)) {
      dispatch(obj);
    }
    return obj;
  };
};
obj[RPCEvents.VOICE_CONNECTION_STATUS] = obj6;
obj[RPCEvents.MESSAGE_CREATE] = { scope: require("set").OAuth2Scopes.RPC, validation: messageEventsValidation, handler: messageEvents };
const obj8 = { scope: require("set").OAuth2Scopes.RPC, validation: messageEventsValidation, handler: messageEvents };
obj[RPCEvents.MESSAGE_UPDATE] = { scope: require("set").OAuth2Scopes.RPC, validation: messageEventsValidation, handler: messageEvents };
const obj9 = { scope: require("set").OAuth2Scopes.RPC, validation: messageEventsValidation, handler: messageEvents };
obj[RPCEvents.MESSAGE_DELETE] = { scope: require("set").OAuth2Scopes.RPC, validation: messageEventsValidation, handler: messageEvents };
const obj11 = { scope: null, validation: null, handler: null };
const obj12 = {};
const items4 = [require("set").OAuth2Scopes.RPC, require("set").OAuth2Scopes.RPC_VOICE_READ, RPC_LOCAL_SCOPE];
obj12[RPC_SCOPE_CONFIG.ANY] = items4;
obj11[0] = obj12;
obj11[1] = speakingEventsValidation;
obj11[2] = speakingEvents;
obj[RPCEvents.SPEAKING_START] = obj11;
const obj13 = { scope: null, validation: null, handler: null };
const obj14 = {};
const items5 = [require("set").OAuth2Scopes.RPC, require("set").OAuth2Scopes.RPC_VOICE_READ, RPC_LOCAL_SCOPE];
obj14[RPC_SCOPE_CONFIG.ANY] = items5;
obj13[0] = obj14;
obj13[1] = speakingEventsValidation;
obj13[2] = speakingEvents;
obj[RPCEvents.SPEAKING_STOP] = obj13;
const obj10 = { scope: require("set").OAuth2Scopes.RPC, validation: messageEventsValidation, handler: messageEvents };
obj[RPCEvents.GUILD_CREATE] = {
  scope: require("set").OAuth2Scopes.RPC,
  handler() {

  }
};
const obj15 = {
  scope: require("set").OAuth2Scopes.RPC,
  handler() {

  }
};
obj[RPCEvents.CHANNEL_CREATE] = {
  scope: require("set").OAuth2Scopes.RPC,
  handler() {

  }
};
const obj17 = { scope: null, handler: null };
const obj18 = {};
const items6 = [require("set").OAuth2Scopes.RPC, RPC_LOCAL_SCOPE];
obj18[RPC_SCOPE_CONFIG.ANY] = items6;
obj17[0] = obj18;
obj17[1] = function handler() {

};
obj[RPCEvents.GAME_JOIN] = obj17;
const obj19 = { scope: null, handler: null };
const obj20 = {};
const items7 = [require("set").OAuth2Scopes.RPC, RPC_LOCAL_SCOPE];
obj20[RPC_SCOPE_CONFIG.ANY] = items7;
obj19[0] = obj20;
obj19[1] = function handler() {

};
obj[RPCEvents.GAME_SPECTATE] = obj19;
const obj21 = { scope: null, handler: null };
const obj22 = {};
const items8 = [require("set").OAuth2Scopes.RPC, RPC_AUTHENTICATED_SCOPE, RPC_LOCAL_SCOPE];
obj22[RPC_SCOPE_CONFIG.ANY] = items8;
obj21[0] = obj22;
obj21[1] = function handler() {

};
obj[RPCEvents.ACTIVITY_JOIN] = obj21;
const obj23 = { scope: null, handler: null };
const obj24 = {};
const items9 = [require("set").OAuth2Scopes.RPC, RPC_LOCAL_SCOPE];
obj24[RPC_SCOPE_CONFIG.ANY] = items9;
obj23[0] = obj24;
obj23[1] = function handler() {

};
obj[RPCEvents.ACTIVITY_JOIN_REQUEST] = obj23;
const obj25 = { scope: null, handler: null };
const obj26 = {};
const items10 = [require("set").OAuth2Scopes.RPC, RPC_AUTHENTICATED_SCOPE, RPC_LOCAL_SCOPE];
obj26[RPC_SCOPE_CONFIG.ANY] = items10;
obj25[0] = obj26;
obj25[1] = function handler() {

};
obj[RPCEvents.ACTIVITY_SPECTATE] = obj25;
const obj27 = { scope: null, handler: null };
const obj28 = {};
const items11 = [require("set").OAuth2Scopes.RPC, RPC_LOCAL_SCOPE];
obj28[RPC_SCOPE_CONFIG.ANY] = items11;
obj27[0] = obj28;
obj27[1] = function handler() {

};
obj[RPCEvents.ACTIVITY_INVITE] = obj27;
const obj29 = { scope: "Array", handler: 0 };
obj29[1] = function handler() {

};
obj[RPCEvents.ACTIVITY_PIP_MODE_UPDATE] = obj29;
const obj30 = { scope: "Array", handler: 0 };
obj30[1] = function handler() {

};
obj[RPCEvents.ACTIVITY_LAYOUT_MODE_UPDATE] = obj30;
const obj31 = { scope: "Array", handler: 0 };
obj31[1] = function handler() {

};
obj[RPCEvents.FRAME_LAYOUT_MODE_UPDATE] = obj31;
obj[RPCEvents.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE] = require("activityInstanceConnectedParticipants").activityInstanceConnectedParticipantsUpdateEvent;
const items12 = [RPC_AUTHENTICATED_SCOPE];
obj[RPCEvents.THERMAL_STATE_UPDATE] = {
  scope: { [RPC_SCOPE_CONFIG.ANY]: items12 },
  handler() {

  }
};
const items13 = [RPC_AUTHENTICATED_SCOPE];
obj[RPCEvents.ORIENTATION_UPDATE] = {
  scope: { [RPC_SCOPE_CONFIG.ANY]: items13 },
  handler() {

  }
};
const obj16 = {
  scope: require("set").OAuth2Scopes.RPC,
  handler() {

  }
};
const obj32 = {
  scope: { [RPC_SCOPE_CONFIG.ANY]: items12 },
  handler() {

  }
};
const obj33 = {
  scope: { [RPC_SCOPE_CONFIG.ANY]: items13 },
  handler() {

  }
};
obj[RPCEvents.VOICE_CHANNEL_SELECT] = {
  scope: require("set").OAuth2Scopes.RPC,
  handler() {

  }
};
const obj35 = { scope: null, handler: null };
const obj36 = {};
const items14 = [require("set").OAuth2Scopes.RPC, require("set").OAuth2Scopes.RPC_NOTIFICATIONS_READ];
obj36[RPC_SCOPE_CONFIG.ALL] = items14;
obj35[0] = obj36;
obj35[1] = function handler() {

};
obj[RPCEvents.NOTIFICATION_CREATE] = obj35;
const obj34 = {
  scope: require("set").OAuth2Scopes.RPC,
  handler() {

  }
};
obj[RPCEvents.RELATIONSHIP_UPDATE] = {
  scope: require("set").OAuth2Scopes.RELATIONSHIPS_READ,
  handler(socket) {
    let obj = importAll(506);
    let num = socket.socket.application.flags;
    if (num == null) {
      num = 0;
    }
    const obj2 = importAll(506);
    const tmp = importAll;
    const deserializeResult = importAll(506).deserialize(num);
    if (obj.has(deserializeResult, tmpResult.deserialize(constants.DISABLE_RELATIONSHIPS_ACCESS))) {
      obj = { errorCode: null };
      obj[0] = constants2.INVALID_PERMISSIONS;
      const tmp9 = new prototype(obj, "Missing Permissions");
      throw tmp9;
    }
    tmpResult = tmp(506);
  }
};
const obj38 = { scope: null, handler: null };
const obj39 = {};
const items15 = [RPC_LOCAL_SCOPE, require("set").OAuth2Scopes.IDENTIFY];
obj39[RPC_SCOPE_CONFIG.ANY] = items15;
obj38[0] = obj39;
obj38[1] = function handler() {
  return (prevState) => {
    prevState = prevState.prevState;
    const obj = { currentUser: currentUser.getCurrentUser() };
    let tmp = null == obj.currentUser;
    if (!tmp) {
      let tmp2 = null != prevState;
      if (tmp2) {
        tmp2 = callback(643)(obj, prevState);
      }
      tmp = tmp2;
    }
    if (!tmp) {
      prevState.dispatch(callback(10748)(obj.currentUser));
    }
    return obj;
  };
};
obj[RPCEvents.CURRENT_USER_UPDATE] = obj38;
const obj40 = { scope: null, handler: null };
const obj41 = {};
const items16 = [require("set").OAuth2Scopes.IDENTIFY, require("set").OAuth2Scopes.GUILDS_MEMBERS_READ];
obj41[RPC_SCOPE_CONFIG.ALL] = items16;
obj40[0] = obj41;
obj40[1] = function handler(args) {
  const guild_id = args.args.guild_id;
  return (prevState) => {
    prevState = prevState.prevState;
    const obj = { currentGuildMember: outer1_9.getSelfMember(guild_id) };
    let tmp = null == obj.currentGuildMember;
    if (!tmp) {
      let tmp2 = null != prevState;
      if (tmp2) {
        tmp2 = outer1_1(outer1_3[21])(obj, prevState);
      }
      tmp = tmp2;
    }
    if (!tmp) {
      prevState.dispatch(outer1_1(outer1_3[23])(obj.currentGuildMember));
    }
    return obj;
  };
};
obj[RPCEvents.CURRENT_GUILD_MEMBER_UPDATE] = obj40;
const items17 = [RPC_LOCAL_SCOPE, RPC_AUTHENTICATED_SCOPE];
obj[RPCEvents.ENTITLEMENT_CREATE] = {
  scope: { [RPC_SCOPE_CONFIG.ANY]: items17 },
  handler() {

  }
};
const items18 = [RPC_LOCAL_SCOPE, RPC_AUTHENTICATED_SCOPE];
obj[RPCEvents.ENTITLEMENT_DELETE] = {
  scope: { [RPC_SCOPE_CONFIG.ANY]: items18 },
  handler() {

  }
};
const obj44 = { scope: null, handler: null };
const obj45 = {};
const items19 = [RPC_LOCAL_SCOPE, require("set").OAuth2Scopes.RPC_SCREENSHARE_READ];
obj45[RPC_SCOPE_CONFIG.ALL] = items19;
obj44[0] = obj45;
obj44[1] = function handler() {
  return (arg0) => {
    let dispatch;
    let prevState;
    ({ prevState, dispatch } = arg0);
    streamerActiveStreamMetadata = streamerActiveStreamMetadata.getStreamerActiveStreamMetadata();
    let pid;
    if (streamerActiveStreamMetadata != null) {
      pid = streamerActiveStreamMetadata.pid;
    }
    let gameForPID = null;
    if (null != pid) {
      gameForPID = gameForPID.getGameForPID(streamerActiveStreamMetadata.pid);
    }
    let id;
    if (gameForPID != null) {
      id = gameForPID.id;
    }
    let application = null;
    if (null != id) {
      application = application.getApplication(gameForPID.id);
    }
    let tmp8 = null;
    if (null != application) {
      tmp8 = callback(13795)(application);
    }
    if (streamerActiveStreamMetadata != null) {
      const sourceName = streamerActiveStreamMetadata.sourceName;
    }
    let obj = { active: null != streamerActiveStreamMetadata, pid: null, application: null };
    let pid1;
    if (streamerActiveStreamMetadata != null) {
      pid1 = streamerActiveStreamMetadata.pid;
    }
    if (pid1 == null) {
      pid1 = null;
    }
    obj[1] = pid1;
    let tmp12 = null;
    if (null != tmp8) {
      obj = { name: null };
      obj[0] = sourceName;
      tmp12 = obj;
    }
    obj[2] = tmp12;
    if (!obj3.isEqual(obj, prevState)) {
      dispatch(obj);
    }
    return obj;
  };
};
obj[RPCEvents.SCREENSHARE_STATE_UPDATE] = obj44;
const obj46 = { scope: null, handler: null };
const obj47 = {};
const items20 = [RPC_LOCAL_SCOPE, require("set").OAuth2Scopes.RPC_VIDEO_READ];
obj47[RPC_SCOPE_CONFIG.ALL] = items20;
obj46[0] = obj47;
obj46[1] = function handler() {
  return (arg0) => {
    let dispatch;
    let prevState;
    const obj = { active: videoEnabled.isVideoEnabled() };
    ({ prevState, dispatch } = arg0);
    if (!obj2.isEqual(obj, prevState)) {
      dispatch(obj);
    }
    return obj;
  };
};
obj[RPCEvents.VIDEO_STATE_UPDATE] = obj46;
const obj48 = { scope: "Array", handler: 0 };
obj48[1] = function handler() {

};
obj[RPCEvents.AUTHORIZE_REQUEST] = obj48;
const obj37 = {
  scope: require("set").OAuth2Scopes.RELATIONSHIPS_READ,
  handler(socket) {
    let obj = importAll(506);
    let num = socket.socket.application.flags;
    if (num == null) {
      num = 0;
    }
    const obj2 = importAll(506);
    const tmp = importAll;
    const deserializeResult = importAll(506).deserialize(num);
    if (obj.has(deserializeResult, tmpResult.deserialize(constants.DISABLE_RELATIONSHIPS_ACCESS))) {
      obj = { errorCode: null };
      obj[0] = constants2.INVALID_PERMISSIONS;
      const tmp9 = new prototype(obj, "Missing Permissions");
      throw tmp9;
    }
    tmpResult = tmp(506);
  }
};
const obj42 = {
  scope: { [RPC_SCOPE_CONFIG.ANY]: items17 },
  handler() {

  }
};
const obj43 = {
  scope: { [RPC_SCOPE_CONFIG.ANY]: items18 },
  handler() {

  }
};
const result = require("GuildNSFWContentLevel").fileFinishedImporting("modules/rpc/server/events/crossPlatformRPCEventHandlers.tsx");

export default obj;