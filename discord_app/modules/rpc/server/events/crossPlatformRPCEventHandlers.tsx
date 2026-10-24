// === Module 15776: crossPlatformRPCEventHandlers ===

// Module 15776 (crossPlatformRPCEventHandlers)
import _modDef12 from "module_12" /* 12 */;
import discord_common_shallowEqualDefault from "discord_common/shallowEqual" /* 568 */;
import BigFlagUtilsAll from "BigFlagUtils" /* 1099 */;
import AgeGateUtils from "AgeGateUtils" /* 6662 */;
import frameDeepLinks from "frameDeepLinks" /* 7434 */;
import getSocketFrameDefault from "getSocketFrame" /* 9257 */;
import transformUserDefault from "transformUser" /* 9262 */;
import RPCErrorDefault from "RPCError" /* 9264 */;
import createRpcJoiSchemaObjectDefault from "createRpcJoiSchemaObject" /* 11472 */;
import RPCHelpers from "RPCHelpers" /* 11475 */;
import ConjureVoiceSessionCoordinatorDefault from "ConjureVoiceSessionCoordinator" /* 15703 */;
import validateConjureAppFrameDefault from "validateConjureAppFrame" /* 15704 */;
import transformGuildMemberDefault from "transformGuildMember" /* 15777 */;
import transformApplicationDefault from "transformApplication" /* 15778 */;
import ApplicationStore from "ApplicationStore" /* 2045 */;
import RunningGameStore from "RunningGameStore" /* 2021 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 6642 */;
import ChannelStore from "ChannelStore" /* 4823 */;
import GuildMemberStore from "GuildMemberStore" /* 4883 */;
import GuildStore from "GuildStore" /* 4845 */;
import MediaEngineStore from "MediaEngineStore" /* 2014 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5714 */;
import UserStore from "UserStore" /* 1392 */;
import VoiceStateStore from "VoiceStateStore" /* 5630 */;

require = fn;
function messageEventsValidation(string) {
  const obj = createRpcJoiSchemaObjectDefault(string);
  const obj2 = { channel_id: null };
  const requiredResult = createRpcJoiSchemaObjectDefault(string).required();
  obj2.channel_id = string.string().required();
  return requiredResult.keys(obj2);
}
function messageEvents(args) {
  const channel_id = args.args.channel_id;
  const socket = args.socket;
  const channel = ChannelStore.getChannel(channel_id);
  if (null != channel) {
    if (obj4.hasMessageReadPermission(channel, socket.application.id, socket.authorization.scopes)) {
      if (tmp13Result.userCannotSeeNSFWContent(channel)) {
        const obj = { errorCode: constants2.INVALID_CHANNEL };
        const _HermesInternal = HermesInternal;
        const tmp32 = new RPCErrorDefault(obj, "Invalid nsfw channel id: " + channel.id);
        throw tmp32;
      }
      tmp13Result = AgeGateUtils;
    }
    obj4 = RPCHelpers;
  }
  const obj2 = { errorCode: constants2.INVALID_CHANNEL };
  throw new RPCErrorDefault({ errorCode: constants2.INVALID_CHANNEL }, "Invalid channel id: " + channel_id);
}
function speakingEventsValidation(string) {
  const obj2 = { channel_id: null };
  const obj = createRpcJoiSchemaObjectDefault(string);
  obj2.channel_id = string.string().allow(null);
  return obj.keys(obj2);
}
function speakingEvents(args) {
  const channel_id = args.args.channel_id;
  if (null != channel_id) {
    if (null == ChannelStore.getChannel(channel_id)) {
      const obj = { errorCode: constants2.INVALID_CHANNEL };
      const _HermesInternal = HermesInternal;
      const tmp42 = new RPCErrorDefault(obj, "Invalid channel id: " + channel_id);
      throw tmp42;
    }
  }
}
function voiceSessionEventValidation(string) {
  const obj = createRpcJoiSchemaObjectDefault(string);
  const obj2 = { session_id: null };
  const requiredResult = createRpcJoiSchemaObjectDefault(string).required();
  obj2.session_id = string.string().required();
  return requiredResult.keys(obj2);
}
function voiceSessionEvent(socket) {
  const result = ConjureVoiceSessionCoordinatorDefault.validateEventSubscription(socket.socket, socket.args.session_id);
}
const getGuildIconURL = fn(4841).getGuildIconURL;
let Constants = fn(6378);
({ RPC_AUTHENTICATED_SCOPE, RPC_EMBEDDED_APP_SCOPE, RPC_LOCAL_SCOPE, RPC_SCOPE_CONFIG } = Constants);
Constants = fn(1087);
({ ApplicationFlags: closure_15, RPCErrors: closure_16, RPCEvents } = Constants);
let obj = { [RPC_SCOPE_CONFIG.ANY]: items };
items = [RPC_EMBEDDED_APP_SCOPE, RPC_AUTHENTICATED_SCOPE];
let obj2 = {};
obj2[RPCEvents.GUILD_STATUS] = {
  scope: fn(8827).OAuth2Scopes.RPC,
  validation(string) {
    const obj = createRpcJoiSchemaObjectDefault(string);
    const obj2 = { guild_id: null };
    const requiredResult = createRpcJoiSchemaObjectDefault(string).required();
    obj2.guild_id = string.string().required();
    return requiredResult.keys(obj2);
  },
  handler(args) {
    const guild_id = args.args.guild_id;
    if (null == GuildStore.getGuild(guild_id)) {
      let obj = { errorCode: constants2.INVALID_GUILD };
      const _HermesInternal = HermesInternal;
      const tmp32 = new RPCErrorDefault(obj, "Invalid guild id: " + guild_id);
      throw tmp32;
    } else {
      return (prevState) => {
        prevState = prevState.prevState;
        guild = GuildStore.getGuild(guild_id);
        if (null != guild) {
          if (null != prevState) {
            return prevState;
          }
          const obj = { id: null, name: null, icon_url: null };
          ({ id: obj.id, name: obj.name } = guild);
          let tmp3 = getGuildIconURL(guild, 128);
          if (tmp3 == null) {
            tmp3 = null;
          }
          const obj2 = { guild: null, online: 0 };
          obj.icon_url = tmp3;
          obj2.guild = obj;
          prevState.dispatch(obj2);
          ({ name: obj3.name, icon: obj3.icon } = guild);
          prevState = { name: null, icon: null };
          const obj5 = { name: null, icon: null };
        }
      };
    }
  }
};
let obj4 = { scope: null, validation: null, handler: null };
let obj5 = {};
const items1 = [fn(8827).OAuth2Scopes.RPC, fn(8827).OAuth2Scopes.RPC_VOICE_READ];
obj5[RPC_SCOPE_CONFIG.ANY] = items1;
obj4.scope = obj5;
obj4.validation = function validation(string) {
  const obj = createRpcJoiSchemaObjectDefault(string);
  const obj2 = { channel_id: null };
  const requiredResult = createRpcJoiSchemaObjectDefault(string).required();
  obj2.channel_id = string.string().required();
  return requiredResult.keys(obj2);
};
obj4.handler = function handler(args) {
  const channel_id = args.args.channel_id;
  if (null == ChannelStore.getChannel(channel_id)) {
    const obj = { errorCode: constants2.INVALID_CHANNEL };
    const _HermesInternal = HermesInternal;
    const tmp32 = new RPCErrorDefault(obj, "Invalid channel id: " + channel_id);
    throw tmp32;
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
obj2[RPCEvents.VOICE_STATE_CREATE] = obj4;
const obj6 = { scope: null, validation: null, handler: null };
const obj7 = {};
const items2 = [fn(8827).OAuth2Scopes.RPC, fn(8827).OAuth2Scopes.RPC_VOICE_READ];
obj7[RPC_SCOPE_CONFIG.ANY] = items2;
obj6.scope = obj7;
obj6.validation = function validation(string) {
  const obj = createRpcJoiSchemaObjectDefault(string);
  const obj2 = { channel_id: null };
  const requiredResult = createRpcJoiSchemaObjectDefault(string).required();
  obj2.channel_id = string.string().required();
  return requiredResult.keys(obj2);
};
obj6.handler = function handler(args) {
  const channel_id = args.args.channel_id;
  if (null == ChannelStore.getChannel(channel_id)) {
    const obj = { errorCode: constants2.INVALID_CHANNEL };
    const _HermesInternal = HermesInternal;
    const tmp32 = new RPCErrorDefault(obj, "Invalid channel id: " + channel_id);
    throw tmp32;
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
obj2[RPCEvents.VOICE_STATE_DELETE] = obj6;
const obj8 = { scope: null, validation: null, handler: null };
const obj9 = {};
const items3 = [fn(8827).OAuth2Scopes.RPC, fn(8827).OAuth2Scopes.RPC_VOICE_READ];
obj9[RPC_SCOPE_CONFIG.ANY] = items3;
obj8.scope = obj9;
obj8.validation = function validation(string) {
  const obj = createRpcJoiSchemaObjectDefault(string);
  const obj2 = { channel_id: null };
  const requiredResult = createRpcJoiSchemaObjectDefault(string).required();
  obj2.channel_id = string.string().required();
  return requiredResult.keys(obj2);
};
obj8.handler = function handler(args) {
  const channel_id = args.args.channel_id;
  if (null == ChannelStore.getChannel(channel_id)) {
    const obj = { errorCode: constants2.INVALID_CHANNEL };
    const _HermesInternal = HermesInternal;
    const tmp32 = new RPCErrorDefault(obj, "Invalid channel id: " + channel_id);
    throw tmp32;
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
obj2[RPCEvents.VOICE_STATE_UPDATE] = obj8;
const obj10 = { scope: null, handler: null };
const obj11 = {};
const items4 = [fn(8827).OAuth2Scopes.RPC, fn(8827).OAuth2Scopes.RPC_VOICE_READ];
obj11[RPC_SCOPE_CONFIG.ANY] = items4;
obj10.scope = obj11;
obj10.handler = function handler() {
  return (arg0) => {
    const obj = { state: RPCHelpers.getVoiceConnectionState(RTCConnectionStore.getState()), hostname: RTCConnectionStore.getHostname(), pings: RTCConnectionStore.getPings(), average_ping: RTCConnectionStore.getAveragePing(), last_ping: RTCConnectionStore.getLastPing() };
    ({ prevState, dispatch } = arg0);
    if (!obj3.isEqual(obj, prevState)) {
      dispatch(obj);
    }
    return obj;
  };
};
obj2[RPCEvents.VOICE_CONNECTION_STATUS] = obj10;
const obj3 = {
  scope: fn(8827).OAuth2Scopes.RPC,
  validation(string) {
    const obj = createRpcJoiSchemaObjectDefault(string);
    const obj2 = { guild_id: null };
    const requiredResult = createRpcJoiSchemaObjectDefault(string).required();
    obj2.guild_id = string.string().required();
    return requiredResult.keys(obj2);
  },
  handler(args) {
    const guild_id = args.args.guild_id;
    if (null == GuildStore.getGuild(guild_id)) {
      let obj = { errorCode: constants2.INVALID_GUILD };
      const _HermesInternal = HermesInternal;
      const tmp32 = new RPCErrorDefault(obj, "Invalid guild id: " + guild_id);
      throw tmp32;
    } else {
      return (prevState) => {
        prevState = prevState.prevState;
        guild = GuildStore.getGuild(guild_id);
        if (null != guild) {
          if (null != prevState) {
            return prevState;
          }
          const obj = { id: null, name: null, icon_url: null };
          ({ id: obj.id, name: obj.name } = guild);
          let tmp3 = getGuildIconURL(guild, 128);
          if (tmp3 == null) {
            tmp3 = null;
          }
          const obj2 = { guild: null, online: 0 };
          obj.icon_url = tmp3;
          obj2.guild = obj;
          prevState.dispatch(obj2);
          ({ name: obj3.name, icon: obj3.icon } = guild);
          prevState = { name: null, icon: null };
          const obj5 = { name: null, icon: null };
        }
      };
    }
  }
};
obj2[RPCEvents.MESSAGE_CREATE] = { scope: fn(8827).OAuth2Scopes.RPC, validation: messageEventsValidation, handler: messageEvents };
const obj12 = { scope: fn(8827).OAuth2Scopes.RPC, validation: messageEventsValidation, handler: messageEvents };
obj2[RPCEvents.MESSAGE_UPDATE] = { scope: fn(8827).OAuth2Scopes.RPC, validation: messageEventsValidation, handler: messageEvents };
const obj13 = { scope: fn(8827).OAuth2Scopes.RPC, validation: messageEventsValidation, handler: messageEvents };
obj2[RPCEvents.MESSAGE_DELETE] = { scope: fn(8827).OAuth2Scopes.RPC, validation: messageEventsValidation, handler: messageEvents };
const obj15 = { scope: null, validation: null, handler: null };
const obj16 = {};
const items5 = [fn(8827).OAuth2Scopes.RPC, fn(8827).OAuth2Scopes.RPC_VOICE_READ, RPC_LOCAL_SCOPE];
obj16[RPC_SCOPE_CONFIG.ANY] = items5;
obj15.scope = obj16;
obj15.validation = speakingEventsValidation;
obj15.handler = speakingEvents;
obj2[RPCEvents.SPEAKING_START] = obj15;
const obj17 = { scope: null, validation: null, handler: null };
const obj18 = {};
const items6 = [fn(8827).OAuth2Scopes.RPC, fn(8827).OAuth2Scopes.RPC_VOICE_READ, RPC_LOCAL_SCOPE];
obj18[RPC_SCOPE_CONFIG.ANY] = items6;
obj17.scope = obj18;
obj17.validation = speakingEventsValidation;
obj17.handler = speakingEvents;
obj2[RPCEvents.SPEAKING_STOP] = obj17;
obj2[RPCEvents.VOICE_SESSION_PARTICIPANTS_UPDATE] = {
  scope: obj,
  validation: voiceSessionEventValidation,
  handler(args) {
    const session_id = args.args.session_id;
    const socket = args.socket;
    const result = socket(15703).validateEventSubscription(socket, session_id);
    return (prevState) => {
      prevState = prevState.prevState;
      const participantsForEventSubscription = ConjureVoiceSessionCoordinatorDefault.getParticipantsForEventSubscription(socket, session_id);
      let tmp5 = prevState;
      if (null != participantsForEventSubscription) {
        let isEqualResult = null == prevState;
        if (!isEqualResult) {
          isEqualResult = _modDef12.isEqual(participantsForEventSubscription, prevState);
          const tmpResult = _modDef12;
        }
        tmp5 = participantsForEventSubscription;
        if (!isEqualResult) {
          const obj2 = { session_id, participants: participantsForEventSubscription };
          prevState.dispatch(obj2);
          tmp5 = participantsForEventSubscription;
        }
      }
      return tmp5;
    };
  }
};
obj2[RPCEvents.VOICE_SESSION_SPEAKING_START] = { scope: obj, validation: voiceSessionEventValidation, handler: voiceSessionEvent };
obj2[RPCEvents.VOICE_SESSION_SPEAKING_STOP] = { scope: obj, validation: voiceSessionEventValidation, handler: voiceSessionEvent };
const obj14 = { scope: fn(8827).OAuth2Scopes.RPC, validation: messageEventsValidation, handler: messageEvents };
obj2[RPCEvents.GUILD_CREATE] = {
  scope: fn(8827).OAuth2Scopes.RPC,
  handler() {

  }
};
const obj19 = {
  scope: fn(8827).OAuth2Scopes.RPC,
  handler() {

  }
};
obj2[RPCEvents.CHANNEL_CREATE] = {
  scope: fn(8827).OAuth2Scopes.RPC,
  handler() {

  }
};
const obj21 = { scope: null, handler: null };
const obj22 = {};
const items7 = [fn(8827).OAuth2Scopes.RPC, RPC_LOCAL_SCOPE];
obj22[RPC_SCOPE_CONFIG.ANY] = items7;
obj21.scope = obj22;
obj21.handler = function handler() {

};
obj2[RPCEvents.GAME_JOIN] = obj21;
const obj23 = { scope: null, handler: null };
const obj24 = {};
const items8 = [fn(8827).OAuth2Scopes.RPC, RPC_LOCAL_SCOPE];
obj24[RPC_SCOPE_CONFIG.ANY] = items8;
obj23.scope = obj24;
obj23.handler = function handler() {

};
obj2[RPCEvents.GAME_SPECTATE] = obj23;
const obj25 = { scope: null, handler: null };
const obj26 = {};
const items9 = [fn(8827).OAuth2Scopes.RPC, RPC_AUTHENTICATED_SCOPE, RPC_LOCAL_SCOPE, RPC_EMBEDDED_APP_SCOPE];
obj26[RPC_SCOPE_CONFIG.ANY] = items9;
obj25.scope = obj26;
obj25.handler = function handler() {

};
obj2[RPCEvents.ACTIVITY_JOIN] = obj25;
const obj27 = { scope: null, handler: null };
const obj28 = {};
const items10 = [fn(8827).OAuth2Scopes.RPC, RPC_LOCAL_SCOPE];
obj28[RPC_SCOPE_CONFIG.ANY] = items10;
obj27.scope = obj28;
obj27.handler = function handler() {

};
obj2[RPCEvents.ACTIVITY_JOIN_REQUEST] = obj27;
const obj29 = { scope: null, handler: null };
const obj30 = {};
const items11 = [fn(8827).OAuth2Scopes.RPC, RPC_AUTHENTICATED_SCOPE, RPC_LOCAL_SCOPE];
obj30[RPC_SCOPE_CONFIG.ANY] = items11;
obj29.scope = obj30;
obj29.handler = function handler() {

};
obj2[RPCEvents.ACTIVITY_SPECTATE] = obj29;
const obj31 = { scope: null, handler: null };
const obj32 = {};
const items12 = [fn(8827).OAuth2Scopes.RPC, RPC_LOCAL_SCOPE];
obj32[RPC_SCOPE_CONFIG.ANY] = items12;
obj31.scope = obj32;
obj31.handler = function handler() {

};
obj2[RPCEvents.ACTIVITY_INVITE] = obj31;
const obj33 = {
  scope: "Array",
  handler() {

  }
};
obj2[RPCEvents.ACTIVITY_PIP_MODE_UPDATE] = obj33;
const obj34 = {
  scope: "Array",
  handler() {

  }
};
obj2[RPCEvents.ACTIVITY_LAYOUT_MODE_UPDATE] = obj34;
const obj35 = {
  scope: "Array",
  handler() {

  }
};
obj2[RPCEvents.FRAME_LAYOUT_MODE_UPDATE] = obj35;
const obj36 = {
  scope: null,
  handler(socket) {
    socket = socket.socket;
    validateConjureAppFrameDefault(socket);
    return (prevState) => {
      prevState = prevState.prevState;
      if (null != prevState) {
        return prevState;
      } else {
        const tmp7 = getSocketFrameDefault(socket);
        const frameDeepLinkChannelId = frameDeepLinks.getFrameDeepLinkChannelId(tmp7);
        let takeFrameDeepLinkResult = null;
        if (null != tmp7) {
          takeFrameDeepLinkResult = null;
          if (null != frameDeepLinkChannelId) {
            takeFrameDeepLinkResult = frameDeepLinks.takeFrameDeepLink(frameDeepLinkChannelId, tmp7.applicationId);
            const tmp8Result = frameDeepLinks;
          }
        }
        if (null != takeFrameDeepLinkResult) {
          const obj = { hash: takeFrameDeepLinkResult };
          tmp(obj);
        }
        return true;
      }
    };
  }
};
const items13 = [RPC_EMBEDDED_APP_SCOPE, RPC_AUTHENTICATED_SCOPE];
obj36.scope = { [RPC_SCOPE_CONFIG.ANY]: items13 };
obj2[RPCEvents.FRAME_DEEP_LINK] = obj36;
obj2[RPCEvents.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE] = fn(15710).activityInstanceConnectedParticipantsUpdateEvent;
const obj37 = {
  scope: null,
  handler() {

  }
};
const items14 = [RPC_AUTHENTICATED_SCOPE];
obj37.scope = { [RPC_SCOPE_CONFIG.ANY]: items14 };
obj2[RPCEvents.THERMAL_STATE_UPDATE] = obj37;
const obj38 = {
  scope: null,
  handler() {

  }
};
const items15 = [RPC_AUTHENTICATED_SCOPE];
obj38.scope = { [RPC_SCOPE_CONFIG.ANY]: items15 };
obj2[RPCEvents.ORIENTATION_UPDATE] = obj38;
const obj20 = {
  scope: fn(8827).OAuth2Scopes.RPC,
  handler() {

  }
};
obj2[RPCEvents.VOICE_CHANNEL_SELECT] = {
  scope: fn(8827).OAuth2Scopes.RPC,
  handler() {

  }
};
const obj40 = { scope: null, handler: null };
const obj41 = {};
const items16 = [fn(8827).OAuth2Scopes.RPC, fn(8827).OAuth2Scopes.RPC_NOTIFICATIONS_READ];
obj41[RPC_SCOPE_CONFIG.ALL] = items16;
obj40.scope = obj41;
obj40.handler = function handler() {

};
obj2[RPCEvents.NOTIFICATION_CREATE] = obj40;
const obj39 = {
  scope: fn(8827).OAuth2Scopes.RPC,
  handler() {

  }
};
obj2[RPCEvents.RELATIONSHIP_UPDATE] = {
  scope: fn(8827).OAuth2Scopes.RELATIONSHIPS_READ,
  handler(socket) {
    const deserializer = BigFlagUtilsAll;
    let num = socket.socket.application.flags;
    if (num == null) {
      num = 0;
    }
    const obj = BigFlagUtilsAll;
    const deserializer2 = BigFlagUtilsAll;
    if (obj.has(deserializeResult, deserializer2.deserialize(constants.DISABLE_RELATIONSHIPS_ACCESS))) {
      const obj2 = { errorCode: constants2.INVALID_PERMISSIONS };
      const tmp9 = new RPCErrorDefault(obj2, "Missing Permissions");
      throw tmp9;
    }
    deserializeResult = deserializer.deserialize(num);
  }
};
const obj43 = { scope: null, handler: null };
const obj44 = {};
const items17 = [RPC_LOCAL_SCOPE, fn(8827).OAuth2Scopes.IDENTIFY];
obj44[RPC_SCOPE_CONFIG.ANY] = items17;
obj43.scope = obj44;
obj43.handler = function handler() {
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
obj2[RPCEvents.CURRENT_USER_UPDATE] = obj43;
const obj45 = { scope: null, handler: null };
const obj46 = {};
const items18 = [fn(8827).OAuth2Scopes.IDENTIFY, fn(8827).OAuth2Scopes.GUILDS_MEMBERS_READ];
obj46[RPC_SCOPE_CONFIG.ALL] = items18;
obj45.scope = obj46;
obj45.handler = function handler(args) {
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
obj2[RPCEvents.CURRENT_GUILD_MEMBER_UPDATE] = obj45;
const obj47 = {
  scope: null,
  handler() {

  }
};
const items19 = [RPC_LOCAL_SCOPE, RPC_AUTHENTICATED_SCOPE];
obj47.scope = { [RPC_SCOPE_CONFIG.ANY]: items19 };
obj2[RPCEvents.ENTITLEMENT_CREATE] = obj47;
const obj48 = {
  scope: null,
  handler() {

  }
};
const items20 = [RPC_LOCAL_SCOPE, RPC_AUTHENTICATED_SCOPE];
obj48.scope = { [RPC_SCOPE_CONFIG.ANY]: items20 };
obj2[RPCEvents.ENTITLEMENT_DELETE] = obj48;
const obj49 = { scope: null, handler: null };
const obj50 = {};
const items21 = [RPC_LOCAL_SCOPE, fn(8827).OAuth2Scopes.RPC_SCREENSHARE_READ];
obj50[RPC_SCOPE_CONFIG.ALL] = items21;
obj49.scope = obj50;
obj49.handler = function handler() {
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
    const obj = { active: null != streamerActiveStreamMetadata, pid: null, application: null };
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
      const obj2 = { name: sourceName };
      tmp12 = obj2;
    }
    obj.application = tmp12;
    if (!obj3.isEqual(obj, prevState)) {
      dispatch(obj);
    }
    return obj;
  };
};
obj2[RPCEvents.SCREENSHARE_STATE_UPDATE] = obj49;
const obj51 = { scope: null, handler: null };
const obj52 = {};
const items22 = [RPC_LOCAL_SCOPE, fn(8827).OAuth2Scopes.RPC_VIDEO_READ];
obj52[RPC_SCOPE_CONFIG.ALL] = items22;
obj51.scope = obj52;
obj51.handler = function handler() {
  return (arg0) => {
    const obj = { active: videoEnabled.isVideoEnabled() };
    ({ prevState, dispatch } = arg0);
    if (!obj2.isEqual(obj, prevState)) {
      dispatch(obj);
    }
    return obj;
  };
};
obj2[RPCEvents.VIDEO_STATE_UPDATE] = obj51;
const obj53 = {
  scope: "Array",
  handler() {

  }
};
obj2[RPCEvents.AUTHORIZE_REQUEST] = obj53;
const size = fn(2);
let result = size.fileFinishedImporting("modules/rpc/server/events/crossPlatformRPCEventHandlers.tsx");

export default obj2;