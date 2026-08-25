// discord_app/modules/rpc/server/events/crossPlatformRPCEventHandlers.tsx
import fromStringAll from "../../../../../discord_common/js/shared/utils/BigFlagUtils.tsx";
import prototypeDefault from "../../RPCError.tsx";
import createRpcJoiSchemaObjectDefault from "../../helpers/createRpcJoiSchemaObject.tsx";
import recurseReplaceContentTree from "../../RPCHelpers.tsx";
import getCapabilitiesForSocketDefault from "../../../vibegrations/voice/VibegrationsVoiceSessionCoordinator.tsx";
import closure_4 from "../../../applications/ApplicationStore.tsx";
import closure_5 from "../../../game_detection/RunningGameStore.native.tsx";
import { getGuildIconURL } from "../../../../records/GuildRecord.tsx";
import closure_7 from "../../../../stores/ApplicationStreamingStore.tsx";
import closure_8 from "../../../../stores/ChannelStore.tsx";
import closure_9 from "../../../../stores/GuildMemberStore.tsx";
import closure_10 from "../../../../stores/GuildStore.tsx";
import closure_11 from "../../../../stores/MediaEngineStore.tsx";
import closure_12 from "../../../../stores/RTCConnectionStore.tsx";
import closure_13 from "../../../../stores/UserStore.tsx";
import closure_14 from "../../../../stores/VoiceStateStore.tsx";
import RPC_SCOPE_CONFIG from "../../Constants.tsx";
import ME from "../../../../Constants.tsx";

require = arg1;
function messageEventsValidation(string) {
  let obj = createRpcJoiSchemaObjectDefault(string);
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
        let tmp3 = prototypeDefault;
        tmp3 = new tmp3(obj, "Invalid nsfw channel id: " + channel.id);
        throw tmp3;
      }
      tmp13Result = tmp13(4619);
    }
    obj4 = recurseReplaceContentTree;
    tmp13 = require;
  }
  obj = { errorCode: constants2.INVALID_CHANNEL };
  let tmp11 = prototypeDefault;
  tmp11 = new tmp11(obj, "Invalid channel id: " + channel_id);
  throw tmp11;
}
function speakingEventsValidation(string) {
  let obj = createRpcJoiSchemaObjectDefault(string);
  obj = { channel_id: string.string().allow(null) };
  return obj.keys(obj);
}
function speakingEvents(args) {
  const channel_id = args.args.channel_id;
  if (null != channel_id) {
    if (null == store.getChannel(channel_id)) {
      const obj = { errorCode: null };
      obj[0] = constants2.INVALID_CHANNEL;
      const _HermesInternal = HermesInternal;
      let tmp4 = prototypeDefault;
      tmp4 = new tmp4(obj, "Invalid channel id: " + channel_id);
      throw tmp4;
    }
  }
}
function voiceSessionEventValidation(string) {
  let obj = createRpcJoiSchemaObjectDefault(string);
  obj = { session_id: null };
  const requiredResult = obj.required();
  obj[0] = string.string().required();
  return requiredResult.keys(obj);
}
function voiceSessionEvent(socket) {
  const result = getCapabilitiesForSocketDefault.validateEventSubscription(socket.socket, socket.args.session_id);
}
({ RPC_AUTHENTICATED_SCOPE, RPC_LOCAL_SCOPE, RPC_SCOPE_CONFIG, RPC_EMBEDDED_APP_SCOPE } = RPC_SCOPE_CONFIG);
({ ApplicationFlags: closure_15, RPCErrors: closure_16, RPCEvents } = ME);
let obj = { [RPC_SCOPE_CONFIG.ANY]: items };
items = [RPC_EMBEDDED_APP_SCOPE, RPC_AUTHENTICATED_SCOPE];
obj = {};
obj = {
  scope: require("set").OAuth2Scopes.RPC,
  validation(string) {
    let obj = createRpcJoiSchemaObjectDefault(string);
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
      let tmp3 = prototypeDefault;
      tmp3 = new tmp3(obj, "Invalid guild id: " + guild_id);
      throw tmp3;
    } else {
      return (arg0) => {
        ({ prevState, dispatch } = arg0);
        const guild = closure_1_10.getGuild(guild_id);
        if (null != guild) {
          let obj = { id: null, name: null, icon_url: null };
          ({ id: obj[0], name: obj[1] } = guild);
          let tmp3 = closure_1_6(guild, 128);
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
const obj1 = { scope: null, validation: null, handler: null };
let obj2 = {};
const items1 = [require("set").OAuth2Scopes.RPC, require("set").OAuth2Scopes.RPC_VOICE_READ];
obj2[RPC_SCOPE_CONFIG.ANY] = items1;
obj1[0] = obj2;
obj1[1] = function validation(string) {
  let obj = createRpcJoiSchemaObjectDefault(string);
  obj = { channel_id: null };
  const requiredResult = obj.required();
  obj[0] = string.string().required();
  return requiredResult.keys(obj);
};
obj1[2] = function handler(args) {
  const channel_id = args.args.channel_id;
  if (null == store.getChannel(channel_id)) {
    const obj = { errorCode: null };
    obj[0] = constants2.INVALID_CHANNEL;
    const _HermesInternal = HermesInternal;
    let tmp3 = prototypeDefault;
    tmp3 = new tmp3(obj, "Invalid channel id: " + channel_id);
    throw tmp3;
  } else {
    return (arg0) => {
      ({ prevState, dispatch: channel_id } = arg0);
      let channel;
      let guildId;
      channel = closure_1_8.getChannel(channel_id);
      if (null != channel) {
        guildId = channel.getGuildId();
        const _Object = Object;
        const values = Object.values(closure_1_14.getVoiceStatesForChannel(channel.id));
        if (prevState) {
          const obj2 = closure_1_1(closure_1_3[19]);
          const item = closure_1_1(closure_1_3[19]).differenceBy(values, prevState, (userId) => userId.userId).forEach((userId) => callback(closure_1_0(closure_1_3[14]).transformVoiceState(closure_2, channel.id, userId)));
          const differenceByResult = closure_1_1(closure_1_3[19]).differenceBy(values, prevState, (userId) => userId.userId);
        }
        return values;
      }
    };
  }
};
obj[RPCEvents.VOICE_STATE_CREATE] = obj1;
const obj3 = { scope: null, validation: null, handler: null };
let obj4 = {};
const items2 = [require("set").OAuth2Scopes.RPC, require("set").OAuth2Scopes.RPC_VOICE_READ];
obj4[RPC_SCOPE_CONFIG.ANY] = items2;
obj3[0] = obj4;
obj3[1] = function validation(string) {
  let obj = createRpcJoiSchemaObjectDefault(string);
  obj = { channel_id: null };
  const requiredResult = obj.required();
  obj[0] = string.string().required();
  return requiredResult.keys(obj);
};
obj3[2] = function handler(args) {
  const channel_id = args.args.channel_id;
  if (null == store.getChannel(channel_id)) {
    const obj = { errorCode: null };
    obj[0] = constants2.INVALID_CHANNEL;
    const _HermesInternal = HermesInternal;
    let tmp3 = prototypeDefault;
    tmp3 = new tmp3(obj, "Invalid channel id: " + channel_id);
    throw tmp3;
  } else {
    return (dispatch) => {
      dispatch = dispatch.dispatch;
      let channel;
      let guildId;
      channel = closure_1_8.getChannel(dispatch);
      if (null != channel) {
        guildId = channel.getGuildId();
        const _Object = Object;
        const values = Object.values(closure_1_14.getVoiceStatesForChannel(channel.id));
        const obj2 = closure_1_1(closure_1_3[19]);
        const item = closure_1_1(closure_1_3[19]).differenceBy(dispatch.prevState, values, (userId) => userId.userId).forEach((userId) => dispatch(dispatch(closure_1_3[14]).transformVoiceState(closure_2, channel.id, userId)));
        return values;
      }
    };
  }
};
obj[RPCEvents.VOICE_STATE_DELETE] = obj3;
const obj5 = { scope: null, validation: null, handler: null };
const obj6 = {};
const items3 = [require("set").OAuth2Scopes.RPC, require("set").OAuth2Scopes.RPC_VOICE_READ];
obj6[RPC_SCOPE_CONFIG.ANY] = items3;
obj5[0] = obj6;
obj5[1] = function validation(string) {
  let obj = createRpcJoiSchemaObjectDefault(string);
  obj = { channel_id: null };
  const requiredResult = obj.required();
  obj[0] = string.string().required();
  return requiredResult.keys(obj);
};
obj5[2] = function handler(args) {
  const channel_id = args.args.channel_id;
  if (null == store.getChannel(channel_id)) {
    const obj = { errorCode: null };
    obj[0] = constants2.INVALID_CHANNEL;
    const _HermesInternal = HermesInternal;
    let tmp3 = prototypeDefault;
    tmp3 = new tmp3(obj, "Invalid channel id: " + channel_id);
    throw tmp3;
  } else {
    return (dispatch) => {
      dispatch = dispatch.dispatch;
      let channel;
      let guildId;
      channel = closure_1_8.getChannel(dispatch);
      if (null != channel) {
        guildId = channel.getGuildId();
        const _Object = Object;
        const values = Object.values(closure_1_14.getVoiceStatesForChannel(channel.id));
        const mapped = values.map((userId) => dispatch(closure_1_3[14]).transformVoiceState(closure_2, channel.id, userId));
        const obj2 = closure_1_1(closure_1_3[19]);
        const item = closure_1_1(closure_1_3[19]).differenceWith(mapped, dispatch.prevState, closure_1_1(closure_1_3[19]).isEqual).forEach((arg0) => dispatch(arg0));
        return mapped;
      }
    };
  }
};
obj[RPCEvents.VOICE_STATE_UPDATE] = obj5;
const obj7 = { scope: null, handler: null };
const obj8 = {};
const items4 = [require("set").OAuth2Scopes.RPC, require("set").OAuth2Scopes.RPC_VOICE_READ];
obj8[RPC_SCOPE_CONFIG.ANY] = items4;
obj7[0] = obj8;
obj7[1] = function handler() {
  return (arg0) => {
    const obj = { state: callback(10829).getVoiceConnectionState(store.getState()), hostname: store.getHostname(), pings: store.getPings(), average_ping: store.getAveragePing(), last_ping: store.getLastPing() };
    ({ prevState, dispatch } = arg0);
    const obj2 = callback(10829);
    if (!obj3.isEqual(obj, prevState)) {
      dispatch(obj);
    }
    return obj;
  };
};
obj[RPCEvents.VOICE_CONNECTION_STATUS] = obj7;
obj[RPCEvents.MESSAGE_CREATE] = { scope: require("set").OAuth2Scopes.RPC, validation: messageEventsValidation, handler: messageEvents };
const obj9 = { scope: require("set").OAuth2Scopes.RPC, validation: messageEventsValidation, handler: messageEvents };
obj[RPCEvents.MESSAGE_UPDATE] = { scope: require("set").OAuth2Scopes.RPC, validation: messageEventsValidation, handler: messageEvents };
const obj10 = { scope: require("set").OAuth2Scopes.RPC, validation: messageEventsValidation, handler: messageEvents };
obj[RPCEvents.MESSAGE_DELETE] = { scope: require("set").OAuth2Scopes.RPC, validation: messageEventsValidation, handler: messageEvents };
const obj12 = { scope: null, validation: null, handler: null };
const obj13 = {};
const items5 = [require("set").OAuth2Scopes.RPC, require("set").OAuth2Scopes.RPC_VOICE_READ, RPC_LOCAL_SCOPE];
obj13[RPC_SCOPE_CONFIG.ANY] = items5;
obj12[0] = obj13;
obj12[1] = speakingEventsValidation;
obj12[2] = speakingEvents;
obj[RPCEvents.SPEAKING_START] = obj12;
const obj14 = { scope: null, validation: null, handler: null };
const obj15 = {};
const items6 = [require("set").OAuth2Scopes.RPC, require("set").OAuth2Scopes.RPC_VOICE_READ, RPC_LOCAL_SCOPE];
obj15[RPC_SCOPE_CONFIG.ANY] = items6;
obj14[0] = obj15;
obj14[1] = speakingEventsValidation;
obj14[2] = speakingEvents;
obj[RPCEvents.SPEAKING_STOP] = obj14;
obj[RPCEvents.VOICE_SESSION_PARTICIPANTS_UPDATE] = {
  scope: obj,
  validation: voiceSessionEventValidation,
  handler(args) {
    const session_id = args.args.session_id;
    const socket = args.socket;
    const result = socket(13927).validateEventSubscription(socket, session_id);
    return (prevState) => {
      prevState = prevState.prevState;
      let obj = socket(closure_1_3[17]);
      const participantsForEventSubscription = obj.getParticipantsForEventSubscription(socket, session_id);
      let tmp5 = prevState;
      if (null != participantsForEventSubscription) {
        let isEqualResult = null == prevState;
        if (!isEqualResult) {
          isEqualResult = socket(closure_1_3[19]).isEqual(participantsForEventSubscription, prevState);
          const tmpResult = socket(closure_1_3[19]);
        }
        tmp5 = participantsForEventSubscription;
        if (!isEqualResult) {
          obj = { session_id: null, participants: null };
          obj[0] = session_id;
          obj[1] = participantsForEventSubscription;
          prevState.dispatch(obj);
          tmp5 = participantsForEventSubscription;
        }
      }
      return tmp5;
    };
  }
};
obj[RPCEvents.VOICE_SESSION_SPEAKING_START] = { scope: obj, validation: voiceSessionEventValidation, handler: voiceSessionEvent };
obj[RPCEvents.VOICE_SESSION_SPEAKING_STOP] = { scope: obj, validation: voiceSessionEventValidation, handler: voiceSessionEvent };
const obj11 = { scope: require("set").OAuth2Scopes.RPC, validation: messageEventsValidation, handler: messageEvents };
obj[RPCEvents.GUILD_CREATE] = {
  scope: require("set").OAuth2Scopes.RPC,
  handler() {

  }
};
const obj16 = {
  scope: require("set").OAuth2Scopes.RPC,
  handler() {

  }
};
obj[RPCEvents.CHANNEL_CREATE] = {
  scope: require("set").OAuth2Scopes.RPC,
  handler() {

  }
};
const obj18 = { scope: null, handler: null };
const obj19 = {};
const items7 = [require("set").OAuth2Scopes.RPC, RPC_LOCAL_SCOPE];
obj19[RPC_SCOPE_CONFIG.ANY] = items7;
obj18[0] = obj19;
obj18[1] = function handler() {

};
obj[RPCEvents.GAME_JOIN] = obj18;
const obj20 = { scope: null, handler: null };
const obj21 = {};
const items8 = [require("set").OAuth2Scopes.RPC, RPC_LOCAL_SCOPE];
obj21[RPC_SCOPE_CONFIG.ANY] = items8;
obj20[0] = obj21;
obj20[1] = function handler() {

};
obj[RPCEvents.GAME_SPECTATE] = obj20;
const obj22 = { scope: null, handler: null };
const obj23 = {};
const items9 = [require("set").OAuth2Scopes.RPC, RPC_AUTHENTICATED_SCOPE, RPC_LOCAL_SCOPE];
obj23[RPC_SCOPE_CONFIG.ANY] = items9;
obj22[0] = obj23;
obj22[1] = function handler() {

};
obj[RPCEvents.ACTIVITY_JOIN] = obj22;
const obj24 = { scope: null, handler: null };
const obj25 = {};
const items10 = [require("set").OAuth2Scopes.RPC, RPC_LOCAL_SCOPE];
obj25[RPC_SCOPE_CONFIG.ANY] = items10;
obj24[0] = obj25;
obj24[1] = function handler() {

};
obj[RPCEvents.ACTIVITY_JOIN_REQUEST] = obj24;
const obj26 = { scope: null, handler: null };
const obj27 = {};
const items11 = [require("set").OAuth2Scopes.RPC, RPC_AUTHENTICATED_SCOPE, RPC_LOCAL_SCOPE];
obj27[RPC_SCOPE_CONFIG.ANY] = items11;
obj26[0] = obj27;
obj26[1] = function handler() {

};
obj[RPCEvents.ACTIVITY_SPECTATE] = obj26;
const obj28 = { scope: null, handler: null };
const obj29 = {};
const items12 = [require("set").OAuth2Scopes.RPC, RPC_LOCAL_SCOPE];
obj29[RPC_SCOPE_CONFIG.ANY] = items12;
obj28[0] = obj29;
obj28[1] = function handler() {

};
obj[RPCEvents.ACTIVITY_INVITE] = obj28;
const obj30 = { scope: "Array", handler: 0 };
obj30[1] = function handler() {

};
obj[RPCEvents.ACTIVITY_PIP_MODE_UPDATE] = obj30;
const obj31 = { scope: "Array", handler: 0 };
obj31[1] = function handler() {

};
obj[RPCEvents.ACTIVITY_LAYOUT_MODE_UPDATE] = obj31;
const obj32 = { scope: "Array", handler: 0 };
obj32[1] = function handler() {

};
obj[RPCEvents.FRAME_LAYOUT_MODE_UPDATE] = obj32;
obj[RPCEvents.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE] = require("activityInstanceConnectedParticipants").activityInstanceConnectedParticipantsUpdateEvent;
const items13 = [RPC_AUTHENTICATED_SCOPE];
obj[RPCEvents.THERMAL_STATE_UPDATE] = {
  scope: { [RPC_SCOPE_CONFIG.ANY]: items13 },
  handler() {

  }
};
const items14 = [RPC_AUTHENTICATED_SCOPE];
obj[RPCEvents.ORIENTATION_UPDATE] = {
  scope: { [RPC_SCOPE_CONFIG.ANY]: items14 },
  handler() {

  }
};
const obj17 = {
  scope: require("set").OAuth2Scopes.RPC,
  handler() {

  }
};
const obj33 = {
  scope: { [RPC_SCOPE_CONFIG.ANY]: items13 },
  handler() {

  }
};
const obj34 = {
  scope: { [RPC_SCOPE_CONFIG.ANY]: items14 },
  handler() {

  }
};
obj[RPCEvents.VOICE_CHANNEL_SELECT] = {
  scope: require("set").OAuth2Scopes.RPC,
  handler() {

  }
};
const obj36 = { scope: null, handler: null };
const obj37 = {};
const items15 = [require("set").OAuth2Scopes.RPC, require("set").OAuth2Scopes.RPC_NOTIFICATIONS_READ];
obj37[RPC_SCOPE_CONFIG.ALL] = items15;
obj36[0] = obj37;
obj36[1] = function handler() {

};
obj[RPCEvents.NOTIFICATION_CREATE] = obj36;
const obj35 = {
  scope: require("set").OAuth2Scopes.RPC,
  handler() {

  }
};
obj[RPCEvents.RELATIONSHIP_UPDATE] = {
  scope: require("set").OAuth2Scopes.RELATIONSHIPS_READ,
  handler(socket) {
    let obj = fromStringAll;
    let num = socket.socket.application.flags;
    if (num == null) {
      num = 0;
    }
    const obj2 = fromStringAll;
    const tmp = importAll;
    const deserializeResult = fromStringAll.deserialize(num);
    if (obj.has(deserializeResult, tmpResult.deserialize(constants.DISABLE_RELATIONSHIPS_ACCESS))) {
      obj = { errorCode: null };
      obj[0] = constants2.INVALID_PERMISSIONS;
      const tmp9 = new prototypeDefault(obj, "Missing Permissions");
      throw tmp9;
    }
    tmpResult = fromStringAll;
  }
};
const obj39 = { scope: null, handler: null };
const obj40 = {};
const items16 = [RPC_LOCAL_SCOPE, require("set").OAuth2Scopes.IDENTIFY];
obj40[RPC_SCOPE_CONFIG.ANY] = items16;
obj39[0] = obj40;
obj39[1] = function handler() {
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
      prevState.dispatch(callback(10830)(obj.currentUser));
    }
    return obj;
  };
};
obj[RPCEvents.CURRENT_USER_UPDATE] = obj39;
const obj41 = { scope: null, handler: null };
const obj42 = {};
const items17 = [require("set").OAuth2Scopes.IDENTIFY, require("set").OAuth2Scopes.GUILDS_MEMBERS_READ];
obj42[RPC_SCOPE_CONFIG.ALL] = items17;
obj41[0] = obj42;
obj41[1] = function handler(args) {
  const guild_id = args.args.guild_id;
  return (prevState) => {
    prevState = prevState.prevState;
    const obj = { currentGuildMember: closure_1_9.getSelfMember(guild_id) };
    let tmp = null == obj.currentGuildMember;
    if (!tmp) {
      let tmp2 = null != prevState;
      if (tmp2) {
        tmp2 = closure_1_1(closure_1_3[22])(obj, prevState);
      }
      tmp = tmp2;
    }
    if (!tmp) {
      prevState.dispatch(closure_1_1(closure_1_3[24])(obj.currentGuildMember));
    }
    return obj;
  };
};
obj[RPCEvents.CURRENT_GUILD_MEMBER_UPDATE] = obj41;
const items18 = [RPC_LOCAL_SCOPE, RPC_AUTHENTICATED_SCOPE];
obj[RPCEvents.ENTITLEMENT_CREATE] = {
  scope: { [RPC_SCOPE_CONFIG.ANY]: items18 },
  handler() {

  }
};
const items19 = [RPC_LOCAL_SCOPE, RPC_AUTHENTICATED_SCOPE];
obj[RPCEvents.ENTITLEMENT_DELETE] = {
  scope: { [RPC_SCOPE_CONFIG.ANY]: items19 },
  handler() {

  }
};
const obj45 = { scope: null, handler: null };
const obj46 = {};
const items20 = [RPC_LOCAL_SCOPE, require("set").OAuth2Scopes.RPC_SCREENSHARE_READ];
obj46[RPC_SCOPE_CONFIG.ALL] = items20;
obj45[0] = obj46;
obj45[1] = function handler() {
  return (arg0) => {
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
      tmp8 = callback(13989)(application);
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
obj[RPCEvents.SCREENSHARE_STATE_UPDATE] = obj45;
const obj47 = { scope: null, handler: null };
const obj48 = {};
const items21 = [RPC_LOCAL_SCOPE, require("set").OAuth2Scopes.RPC_VIDEO_READ];
obj48[RPC_SCOPE_CONFIG.ALL] = items21;
obj47[0] = obj48;
obj47[1] = function handler() {
  return (arg0) => {
    const obj = { active: videoEnabled.isVideoEnabled() };
    ({ prevState, dispatch } = arg0);
    if (!obj2.isEqual(obj, prevState)) {
      dispatch(obj);
    }
    return obj;
  };
};
obj[RPCEvents.VIDEO_STATE_UPDATE] = obj47;
const obj49 = { scope: "Array", handler: 0 };
obj49[1] = function handler() {

};
obj[RPCEvents.AUTHORIZE_REQUEST] = obj49;
const obj38 = {
  scope: require("set").OAuth2Scopes.RELATIONSHIPS_READ,
  handler(socket) {
    let obj = fromStringAll;
    let num = socket.socket.application.flags;
    if (num == null) {
      num = 0;
    }
    const obj2 = fromStringAll;
    const tmp = importAll;
    const deserializeResult = fromStringAll.deserialize(num);
    if (obj.has(deserializeResult, tmpResult.deserialize(constants.DISABLE_RELATIONSHIPS_ACCESS))) {
      obj = { errorCode: null };
      obj[0] = constants2.INVALID_PERMISSIONS;
      const tmp9 = new prototypeDefault(obj, "Missing Permissions");
      throw tmp9;
    }
    tmpResult = fromStringAll;
  }
};
const obj43 = {
  scope: { [RPC_SCOPE_CONFIG.ANY]: items18 },
  handler() {

  }
};
const obj44 = {
  scope: { [RPC_SCOPE_CONFIG.ANY]: items19 },
  handler() {

  }
};
let result = require("set").fileFinishedImporting("modules/rpc/server/events/crossPlatformRPCEventHandlers.tsx");

export default obj;