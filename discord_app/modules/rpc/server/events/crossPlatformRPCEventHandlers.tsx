// === Module 14519: crossPlatformRPCEventHandlers ===

// Module 14519 (crossPlatformRPCEventHandlers)
import _modDef12 from "module_12" /* 12 */;
import discord_common_shallowEqualDefault from "discord_common/shallowEqual" /* 558 */;
import BigFlagUtilsAll from "BigFlagUtils" /* 1086 */;
import AgeGateUtils from "AgeGateUtils" /* 4771 */;
import RPCErrorDefault from "RPCError" /* 9554 */;
import createRpcJoiSchemaObjectDefault from "createRpcJoiSchemaObject" /* 9557 */;
import RPCHelpers from "RPCHelpers" /* 9559 */;
import transformUserDefault from "transformUser" /* 9560 */;
import VibegrationsVoiceSessionCoordinatorDefault from "VibegrationsVoiceSessionCoordinator" /* 14459 */;
import transformGuildMemberDefault from "transformGuildMember" /* 14520 */;
import transformApplicationDefault from "transformApplication" /* 14521 */;
import ApplicationStore from "ApplicationStore" /* 4788 */;
import RunningGameStore from "RunningGameStore" /* 1915 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 4582 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import GuildMemberStore from "GuildMemberStore" /* 2021 */;
import GuildStore from "GuildStore" /* 1979 */;
import MediaEngineStore from "MediaEngineStore" /* 1908 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4583 */;
import UserStore from "UserStore" /* 1371 */;
import VoiceStateStore from "VoiceStateStore" /* 4579 */;

require = fn;
function messageEventsValidation(string) {
  createRpcJoiSchemaObjectDefault(string);
  const obj = { channel_id: null };
  const requiredResult = obj.required();
  obj.channel_id = string.string().required();
  return requiredResult.keys(obj);
}
function messageEvents(args) {
  const channel_id = args.args.channel_id;
  const socket = args.socket;
  const channel = ChannelStore.getChannel(channel_id);
  if (null != channel) {
    if (obj4.hasMessageReadPermission(channel, socket.application.id, socket.authorization.scopes)) {
      if (tmp13Result.userCannotSeeNSFWContent(channel)) {
        let obj = { errorCode: constants2.INVALID_CHANNEL };
        const _HermesInternal = HermesInternal;
        let tmp3 = RPCErrorDefault;
        tmp3 = new tmp3(obj, "Invalid nsfw channel id: " + channel.id);
        throw tmp3;
      }
      tmp13Result = AgeGateUtils;
    }
    obj4 = RPCHelpers;
  }
  obj = { errorCode: constants2.INVALID_CHANNEL };
  let tmp11 = RPCErrorDefault;
  tmp11 = new tmp11(obj, "Invalid channel id: " + channel_id);
  throw tmp11;
}
function speakingEventsValidation(string) {
  createRpcJoiSchemaObjectDefault(string);
  const obj = { channel_id: string.string().allow(null) };
  return obj.keys(obj);
}
function speakingEvents(args) {
  const channel_id = args.args.channel_id;
  if (null != channel_id) {
    if (null == ChannelStore.getChannel(channel_id)) {
      const obj = { errorCode: constants2.INVALID_CHANNEL };
      const _HermesInternal = HermesInternal;
      let tmp4 = RPCErrorDefault;
      tmp4 = new tmp4(obj, "Invalid channel id: " + channel_id);
      throw tmp4;
    }
  }
}
function voiceSessionEventValidation(string) {
  createRpcJoiSchemaObjectDefault(string);
  const obj = { session_id: null };
  const requiredResult = obj.required();
  obj.session_id = string.string().required();
  return requiredResult.keys(obj);
}
function voiceSessionEvent(socket) {
  const result = VibegrationsVoiceSessionCoordinatorDefault.validateEventSubscription(socket.socket, socket.args.session_id);
}
const getGuildIconURL = fn(1975).getGuildIconURL;
let Constants = fn(4465);
({ RPC_AUTHENTICATED_SCOPE, RPC_LOCAL_SCOPE, RPC_SCOPE_CONFIG, RPC_EMBEDDED_APP_SCOPE } = Constants);
Constants = fn(1074);
({ ApplicationFlags: closure_15, RPCErrors: closure_16, RPCEvents } = Constants);
let obj = { [RPC_SCOPE_CONFIG.ANY]: items };
items = [RPC_EMBEDDED_APP_SCOPE, RPC_AUTHENTICATED_SCOPE];
obj = {};
obj = {
  scope: fn(8339).OAuth2Scopes.RPC,
  validation(string) {
    createRpcJoiSchemaObjectDefault(string);
    const obj = { guild_id: null };
    const requiredResult = obj.required();
    obj.guild_id = string.string().required();
    return requiredResult.keys(obj);
  },
  handler(args) {
    const guild_id = args.args.guild_id;
    if (null == GuildStore.getGuild(guild_id)) {
      let obj = { errorCode: constants2.INVALID_GUILD };
      const _HermesInternal = HermesInternal;
      let tmp3 = RPCErrorDefault;
      tmp3 = new tmp3(obj, "Invalid guild id: " + guild_id);
      throw tmp3;
    } else {
      return (arg0) => {
        ({ prevState, dispatch } = arg0);
        const guild = GuildStore.getGuild(guild_id);
        if (null != guild) {
          let obj = { id: null, name: null, icon_url: null };
          ({ id: obj.id, name: obj.name } = guild);
          let tmp3 = getGuildIconURL(guild, 128);
          if (tmp3 == null) {
            tmp3 = null;
          }
          obj = { guild: null, online: 0, icon_url: tmp3 };
          obj.guild = obj;
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
const items1 = [fn(8339).OAuth2Scopes.RPC, fn(8339).OAuth2Scopes.RPC_VOICE_READ];
obj2[RPC_SCOPE_CONFIG.ANY] = items1;
obj1.scope = obj2;
obj1.validation = function validation(string) {
  createRpcJoiSchemaObjectDefault(string);
  const obj = { channel_id: null };
  const requiredResult = obj.required();
  obj.channel_id = string.string().required();
  return requiredResult.keys(obj);
};
obj1.handler = function handler(args) {
  const channel_id = args.args.channel_id;
  if (null == ChannelStore.getChannel(channel_id)) {
    const obj = { errorCode: constants2.INVALID_CHANNEL };
    const _HermesInternal = HermesInternal;
    let tmp3 = RPCErrorDefault;
    tmp3 = new tmp3(obj, "Invalid channel id: " + channel_id);
    throw tmp3;
  } else {
    return (arg0) => {
      ({ prevState, dispatch: channel_id } = arg0);
      let guildId;
      const channel = ChannelStore.getChannel(channel_id);
      if (null != channel) {
        guildId = channel.getGuildId();
        const _Object = Object;
        const values = Object.values(VoiceStateStore.getVoiceStatesForChannel(channel.id));
        if (prevState) {
          const item = _modDef12.differenceBy(values, prevState, (userId) => userId.userId).forEach((item) => closure_1_0(channel_id(dependencyMap[14]).transformVoiceState(closure_2, channel.id, item)));
          const differenceByResult = _modDef12.differenceBy(values, prevState, (userId) => userId.userId);
        }
        return values;
      }
    };
  }
};
obj[RPCEvents.VOICE_STATE_CREATE] = obj1;
const obj3 = { scope: null, validation: null, handler: null };
let obj4 = {};
const items2 = [fn(8339).OAuth2Scopes.RPC, fn(8339).OAuth2Scopes.RPC_VOICE_READ];
obj4[RPC_SCOPE_CONFIG.ANY] = items2;
obj3.scope = obj4;
obj3.validation = function validation(string) {
  createRpcJoiSchemaObjectDefault(string);
  const obj = { channel_id: null };
  const requiredResult = obj.required();
  obj.channel_id = string.string().required();
  return requiredResult.keys(obj);
};
obj3.handler = function handler(args) {
  const channel_id = args.args.channel_id;
  if (null == ChannelStore.getChannel(channel_id)) {
    const obj = { errorCode: constants2.INVALID_CHANNEL };
    const _HermesInternal = HermesInternal;
    let tmp3 = RPCErrorDefault;
    tmp3 = new tmp3(obj, "Invalid channel id: " + channel_id);
    throw tmp3;
  } else {
    return (dispatch) => {
      dispatch = dispatch.dispatch;
      let guildId;
      const channel = ChannelStore.getChannel(channel_id);
      if (null != channel) {
        guildId = channel.getGuildId();
        const _Object = Object;
        const values = Object.values(VoiceStateStore.getVoiceStatesForChannel(channel.id));
        const item = _modDef12.differenceBy(dispatch.prevState, values, (userId) => userId.userId).forEach((item) => dispatch(channel_id(dependencyMap[14]).transformVoiceState(closure_2, channel.id, item)));
        return values;
      }
    };
  }
};
obj[RPCEvents.VOICE_STATE_DELETE] = obj3;
const obj5 = { scope: null, validation: null, handler: null };
const obj6 = {};
const items3 = [fn(8339).OAuth2Scopes.RPC, fn(8339).OAuth2Scopes.RPC_VOICE_READ];
obj6[RPC_SCOPE_CONFIG.ANY] = items3;
obj5.scope = obj6;
obj5.validation = function validation(string) {
  createRpcJoiSchemaObjectDefault(string);
  const obj = { channel_id: null };
  const requiredResult = obj.required();
  obj.channel_id = string.string().required();
  return requiredResult.keys(obj);
};
obj5.handler = function handler(args) {
  const channel_id = args.args.channel_id;
  if (null == ChannelStore.getChannel(channel_id)) {
    const obj = { errorCode: constants2.INVALID_CHANNEL };
    const _HermesInternal = HermesInternal;
    let tmp3 = RPCErrorDefault;
    tmp3 = new tmp3(obj, "Invalid channel id: " + channel_id);
    throw tmp3;
  } else {
    return (dispatch) => {
      dispatch = dispatch.dispatch;
      let guildId;
      const channel = ChannelStore.getChannel(channel_id);
      if (null != channel) {
        guildId = channel.getGuildId();
        const _Object = Object;
        const values = Object.values(VoiceStateStore.getVoiceStatesForChannel(channel.id));
        const mapped = values.map((item) => channel_id(dependencyMap[14]).transformVoiceState(closure_2, channel.id, item));
        const item = _modDef12.differenceWith(mapped, dispatch.prevState, _modDef12.isEqual).forEach((item) => dispatch(item));
        return mapped;
      }
    };
  }
};
obj[RPCEvents.VOICE_STATE_UPDATE] = obj5;
const obj7 = { scope: null, handler: null };
const obj8 = {};
const items4 = [fn(8339).OAuth2Scopes.RPC, fn(8339).OAuth2Scopes.RPC_VOICE_READ];
obj8[RPC_SCOPE_CONFIG.ANY] = items4;
obj7.scope = obj8;
obj7.handler = function handler() {
  return (arg0) => {
    const obj = { state: RPCHelpers.getVoiceConnectionState(RTCConnectionStore.getState()), hostname: RTCConnectionStore.getHostname(), pings: RTCConnectionStore.getPings(), average_ping: RTCConnectionStore.getAveragePing(), last_ping: RTCConnectionStore.getLastPing() };
    ({ prevState, dispatch } = arg0);
    if (!obj3.isEqual(obj, prevState)) {
      dispatch(obj);
    }
    return obj;
  };
};
obj[RPCEvents.VOICE_CONNECTION_STATUS] = obj7;
obj[RPCEvents.MESSAGE_CREATE] = { scope: fn(8339).OAuth2Scopes.RPC, validation: messageEventsValidation, handler: messageEvents };
const obj9 = { scope: fn(8339).OAuth2Scopes.RPC, validation: messageEventsValidation, handler: messageEvents };
obj[RPCEvents.MESSAGE_UPDATE] = { scope: fn(8339).OAuth2Scopes.RPC, validation: messageEventsValidation, handler: messageEvents };
const obj10 = { scope: fn(8339).OAuth2Scopes.RPC, validation: messageEventsValidation, handler: messageEvents };
obj[RPCEvents.MESSAGE_DELETE] = { scope: fn(8339).OAuth2Scopes.RPC, validation: messageEventsValidation, handler: messageEvents };
const obj12 = { scope: null, validation: null, handler: null };
const obj13 = {};
const items5 = [fn(8339).OAuth2Scopes.RPC, fn(8339).OAuth2Scopes.RPC_VOICE_READ, RPC_LOCAL_SCOPE];
obj13[RPC_SCOPE_CONFIG.ANY] = items5;
obj12.scope = obj13;
obj12.validation = speakingEventsValidation;
obj12.handler = speakingEvents;
obj[RPCEvents.SPEAKING_START] = obj12;
const obj14 = { scope: null, validation: null, handler: null };
const obj15 = {};
const items6 = [fn(8339).OAuth2Scopes.RPC, fn(8339).OAuth2Scopes.RPC_VOICE_READ, RPC_LOCAL_SCOPE];
obj15[RPC_SCOPE_CONFIG.ANY] = items6;
obj14.scope = obj15;
obj14.validation = speakingEventsValidation;
obj14.handler = speakingEvents;
obj[RPCEvents.SPEAKING_STOP] = obj14;
obj[RPCEvents.VOICE_SESSION_PARTICIPANTS_UPDATE] = {
  scope: obj,
  validation: voiceSessionEventValidation,
  handler(args) {
    const session_id = args.args.session_id;
    const socket = args.socket;
    const result = socket(14459).validateEventSubscription(socket, session_id);
    return (prevState) => {
      prevState = prevState.prevState;
      let obj = VibegrationsVoiceSessionCoordinatorDefault;
      const participantsForEventSubscription = obj.getParticipantsForEventSubscription(socket, session_id);
      let tmp5 = prevState;
      if (null != participantsForEventSubscription) {
        let isEqualResult = null == prevState;
        if (!isEqualResult) {
          isEqualResult = _modDef12.isEqual(participantsForEventSubscription, prevState);
          const tmpResult = _modDef12;
        }
        tmp5 = participantsForEventSubscription;
        if (!isEqualResult) {
          obj = { session_id, participants: participantsForEventSubscription };
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
const obj11 = { scope: fn(8339).OAuth2Scopes.RPC, validation: messageEventsValidation, handler: messageEvents };
obj[RPCEvents.GUILD_CREATE] = {
  scope: fn(8339).OAuth2Scopes.RPC,
  handler() {

  }
};
const obj16 = {
  scope: fn(8339).OAuth2Scopes.RPC,
  handler() {

  }
};
obj[RPCEvents.CHANNEL_CREATE] = {
  scope: fn(8339).OAuth2Scopes.RPC,
  handler() {

  }
};
const obj18 = { scope: null, handler: null };
const obj19 = {};
const items7 = [fn(8339).OAuth2Scopes.RPC, RPC_LOCAL_SCOPE];
obj19[RPC_SCOPE_CONFIG.ANY] = items7;
obj18.scope = obj19;
obj18.handler = function handler() {

};
obj[RPCEvents.GAME_JOIN] = obj18;
const obj20 = { scope: null, handler: null };
const obj21 = {};
const items8 = [fn(8339).OAuth2Scopes.RPC, RPC_LOCAL_SCOPE];
obj21[RPC_SCOPE_CONFIG.ANY] = items8;
obj20.scope = obj21;
obj20.handler = function handler() {

};
obj[RPCEvents.GAME_SPECTATE] = obj20;
const obj22 = { scope: null, handler: null };
const obj23 = {};
const items9 = [fn(8339).OAuth2Scopes.RPC, RPC_AUTHENTICATED_SCOPE, RPC_LOCAL_SCOPE];
obj23[RPC_SCOPE_CONFIG.ANY] = items9;
obj22.scope = obj23;
obj22.handler = function handler() {

};
obj[RPCEvents.ACTIVITY_JOIN] = obj22;
const obj24 = { scope: null, handler: null };
const obj25 = {};
const items10 = [fn(8339).OAuth2Scopes.RPC, RPC_LOCAL_SCOPE];
obj25[RPC_SCOPE_CONFIG.ANY] = items10;
obj24.scope = obj25;
obj24.handler = function handler() {

};
obj[RPCEvents.ACTIVITY_JOIN_REQUEST] = obj24;
const obj26 = { scope: null, handler: null };
const obj27 = {};
const items11 = [fn(8339).OAuth2Scopes.RPC, RPC_AUTHENTICATED_SCOPE, RPC_LOCAL_SCOPE];
obj27[RPC_SCOPE_CONFIG.ANY] = items11;
obj26.scope = obj27;
obj26.handler = function handler() {

};
obj[RPCEvents.ACTIVITY_SPECTATE] = obj26;
const obj28 = { scope: null, handler: null };
const obj29 = {};
const items12 = [fn(8339).OAuth2Scopes.RPC, RPC_LOCAL_SCOPE];
obj29[RPC_SCOPE_CONFIG.ANY] = items12;
obj28.scope = obj29;
obj28.handler = function handler() {

};
obj[RPCEvents.ACTIVITY_INVITE] = obj28;
const obj30 = {
  scope: "Array",
  handler() {

  }
};
obj[RPCEvents.ACTIVITY_PIP_MODE_UPDATE] = obj30;
const obj31 = {
  scope: "Array",
  handler() {

  }
};
obj[RPCEvents.ACTIVITY_LAYOUT_MODE_UPDATE] = obj31;
const obj32 = {
  scope: "Array",
  handler() {

  }
};
obj[RPCEvents.FRAME_LAYOUT_MODE_UPDATE] = obj32;
obj[RPCEvents.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE] = fn(14464).activityInstanceConnectedParticipantsUpdateEvent;
const obj33 = {
  scope: null,
  handler() {

  }
};
const items13 = [RPC_AUTHENTICATED_SCOPE];
obj33.scope = { [RPC_SCOPE_CONFIG.ANY]: items13 };
obj[RPCEvents.THERMAL_STATE_UPDATE] = obj33;
const obj34 = {
  scope: null,
  handler() {

  }
};
const items14 = [RPC_AUTHENTICATED_SCOPE];
obj34.scope = { [RPC_SCOPE_CONFIG.ANY]: items14 };
obj[RPCEvents.ORIENTATION_UPDATE] = obj34;
const obj17 = {
  scope: fn(8339).OAuth2Scopes.RPC,
  handler() {

  }
};
obj[RPCEvents.VOICE_CHANNEL_SELECT] = {
  scope: fn(8339).OAuth2Scopes.RPC,
  handler() {

  }
};
const obj36 = { scope: null, handler: null };
const obj37 = {};
const items15 = [fn(8339).OAuth2Scopes.RPC, fn(8339).OAuth2Scopes.RPC_NOTIFICATIONS_READ];
obj37[RPC_SCOPE_CONFIG.ALL] = items15;
obj36.scope = obj37;
obj36.handler = function handler() {

};
obj[RPCEvents.NOTIFICATION_CREATE] = obj36;
const obj35 = {
  scope: fn(8339).OAuth2Scopes.RPC,
  handler() {

  }
};
obj[RPCEvents.RELATIONSHIP_UPDATE] = {
  scope: fn(8339).OAuth2Scopes.RELATIONSHIPS_READ,
  handler(socket) {
    let obj = BigFlagUtilsAll;
    const deserializer = BigFlagUtilsAll;
    let num = socket.socket.application.flags;
    if (num == null) {
      num = 0;
    }
    const deserializer2 = BigFlagUtilsAll;
    if (obj.has(deserializeResult, deserializer2.deserialize(constants.DISABLE_RELATIONSHIPS_ACCESS))) {
      obj = { errorCode: constants2.INVALID_PERMISSIONS };
      const tmp9 = new RPCErrorDefault(obj, "Missing Permissions");
      throw tmp9;
    }
    deserializeResult = deserializer.deserialize(num);
  }
};
const obj39 = { scope: null, handler: null };
const obj40 = {};
const items16 = [RPC_LOCAL_SCOPE, fn(8339).OAuth2Scopes.IDENTIFY];
obj40[RPC_SCOPE_CONFIG.ANY] = items16;
obj39.scope = obj40;
obj39.handler = function handler() {
  return (prevState) => {
    prevState = prevState.prevState;
    const obj = { currentUser: currentUser.getCurrentUser() };
    let tmp = null == obj.currentUser;
    if (!tmp) {
      let tmp2 = null != prevState;
      if (tmp2) {
        tmp2 = discord_common_shallowEqualDefault(obj, prevState);
      }
      tmp = tmp2;
    }
    if (!tmp) {
      prevState.dispatch(transformUserDefault(obj.currentUser));
    }
    return obj;
  };
};
obj[RPCEvents.CURRENT_USER_UPDATE] = obj39;
const obj41 = { scope: null, handler: null };
const obj42 = {};
const items17 = [fn(8339).OAuth2Scopes.IDENTIFY, fn(8339).OAuth2Scopes.GUILDS_MEMBERS_READ];
obj42[RPC_SCOPE_CONFIG.ALL] = items17;
obj41.scope = obj42;
obj41.handler = function handler(args) {
  const guild_id = args.args.guild_id;
  return (prevState) => {
    prevState = prevState.prevState;
    const obj = { currentGuildMember: GuildMemberStore.getSelfMember(guild_id) };
    let tmp = null == obj.currentGuildMember;
    if (!tmp) {
      let tmp2 = null != prevState;
      if (tmp2) {
        tmp2 = discord_common_shallowEqualDefault(obj, prevState);
      }
      tmp = tmp2;
    }
    if (!tmp) {
      prevState.dispatch(transformGuildMemberDefault(obj.currentGuildMember));
    }
    return obj;
  };
};
obj[RPCEvents.CURRENT_GUILD_MEMBER_UPDATE] = obj41;
const obj43 = {
  scope: null,
  handler() {

  }
};
const items18 = [RPC_LOCAL_SCOPE, RPC_AUTHENTICATED_SCOPE];
obj43.scope = { [RPC_SCOPE_CONFIG.ANY]: items18 };
obj[RPCEvents.ENTITLEMENT_CREATE] = obj43;
const obj44 = {
  scope: null,
  handler() {

  }
};
const items19 = [RPC_LOCAL_SCOPE, RPC_AUTHENTICATED_SCOPE];
obj44.scope = { [RPC_SCOPE_CONFIG.ANY]: items19 };
obj[RPCEvents.ENTITLEMENT_DELETE] = obj44;
const obj45 = { scope: null, handler: null };
const obj46 = {};
const items20 = [RPC_LOCAL_SCOPE, fn(8339).OAuth2Scopes.RPC_SCREENSHARE_READ];
obj46[RPC_SCOPE_CONFIG.ALL] = items20;
obj45.scope = obj46;
obj45.handler = function handler() {
  return (arg0) => {
    ({ prevState, dispatch } = arg0);
    streamerActiveStreamMetadata = streamerActiveStreamMetadata.getStreamerActiveStreamMetadata();
    let pid;
    if (streamerActiveStreamMetadata != null) {
      pid = streamerActiveStreamMetadata.pid;
    }
    gameForPID = null;
    if (null != pid) {
      gameForPID = gameForPID.getGameForPID(streamerActiveStreamMetadata.pid);
    }
    let id;
    if (gameForPID != null) {
      id = gameForPID.id;
    }
    application = null;
    if (null != id) {
      application = application.getApplication(gameForPID.id);
    }
    let tmp8 = null;
    if (null != application) {
      tmp8 = transformApplicationDefault(application);
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
    obj.pid = pid1;
    let tmp12 = null;
    if (null != tmp8) {
      obj = { name: sourceName };
      tmp12 = obj;
    }
    obj.application = tmp12;
    if (!obj3.isEqual(obj, prevState)) {
      dispatch(obj);
    }
    return obj;
  };
};
obj[RPCEvents.SCREENSHARE_STATE_UPDATE] = obj45;
const obj47 = { scope: null, handler: null };
const obj48 = {};
const items21 = [RPC_LOCAL_SCOPE, fn(8339).OAuth2Scopes.RPC_VIDEO_READ];
obj48[RPC_SCOPE_CONFIG.ALL] = items21;
obj47.scope = obj48;
obj47.handler = function handler() {
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
const obj49 = {
  scope: "Array",
  handler() {

  }
};
obj[RPCEvents.AUTHORIZE_REQUEST] = obj49;
const size = fn(2);
let result = size.fileFinishedImporting("modules/rpc/server/events/crossPlatformRPCEventHandlers.tsx");

export default obj;