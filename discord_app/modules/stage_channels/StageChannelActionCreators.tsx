// discord_app/modules/stage_channels/StageChannelActionCreators.tsx
import _modDef38 from "../../../_runtime/metro/00038__.js";
import BigFlagUtilsAll from "../../../discord_common/js/shared/utils/BigFlagUtils.tsx";
import Server from "../../flow/Server.tsx";
import PermissionUtilsAll from "../../utils/PermissionUtils.tsx";
import ChannelActionCreatorsDefault from "../../actions/ChannelActionCreators.tsx";
import useAudienceRequestToSpeakState from "useAudienceRequestToSpeakState.tsx";
import GuildActionCreatorsDefault from "../../actions/GuildActionCreators.tsx";
import StageChannelModalActionCreators from "StageChannelModalActionCreators.tsx";
import SafetyToastsActionCreatorsDefault from "../safety_common/SafetyToastsActionCreators.native.tsx";
import StageInstanceActionCreators from "StageInstanceActionCreators.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import SelectedChannelStore from "../../stores/SelectedChannelStore.tsx";
import VoiceStateStore from "../../stores/VoiceStateStore.tsx";

const HTTPUtils = obj(1272);
const AppAnalyticsUtils = obj(4740);
const useStageSpeakingForCurrentUser = obj(5422);
const StageChannelUtils = obj(8400);
require = fn;
function audienceAckRequestToSpeak(channel, suppress) {
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  let guildId;
  if (channel != null) {
    guildId = channel.getGuildId();
  }
  let result = dependencyMap;
  _modDef38(null != guildId, "This channel cannot be guildless.");
  let obj = require;
  const voiceStateForChannel = VoiceStateStore.getVoiceStateForChannel(channel.id);
  let obj1 = useAudienceRequestToSpeakState;
  const audienceRequestToSpeakState = obj1.getAudienceRequestToSpeakState(voiceStateForChannel);
  if (!suppress) {
    let objResult = useStageSpeakingForCurrentUser;
    if (objResult.shouldAgeVerifyToSpeakForCurrentUser()) {
      return Promise.resolve();
    }
  }
  if (!tmp7) {
    objResult = AppAnalyticsUtils;
    obj = {};
    const merged = Object.assign(StageChannelUtils.getStageChannelMetadata(channel));
    objResult.trackWithMetadata(constants.PROMOTED_TO_SPEAKER, obj);
    const objResult1 = StageChannelUtils;
  }
  const HTTP = HTTPUtils.HTTP;
  const request = { url: React7.UPDATE_VOICE_STATE(guildId), body: null, rejectWithError: null };
  obj = { suppress, request_to_speak_timestamp: null, channel_id: channel.id };
  if (flag) {
    obj1 = { silent: flag };
    let obj2 = obj1;
  } else {
    obj2 = {};
  }
  const merged1 = Object.assign(obj2);
  request.body = obj;
  obj = HTTPUtils;
  result = obj.rejectWithMigratedError();
  request.rejectWithError = result;
  HTTP.patch(request);
  tmp7 =
    audienceRequestToSpeakState !==
      useAudienceRequestToSpeakState.RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK || suppress;
}
let closure_12 = async function _startStage(arg0, arg1, arg2, arg3) {
  let user = arg0;
  closure_1 = arg1;
  closure_2 = arg2;
  closure_3 = arg3;
  c6 = 0;
  c7 = 0;
  return (async (arg0, value, arg2, arg3) => {
    if (c7 === 2) {
      c7 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp5 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c7 = 2;
        if (0 === c6) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_5 = tmp2;
            closure_4 = tmp3;
            closure_132_0 = user;
            closure_132_1 = undefined;
            if ("" !== closure_1) {
              if (voiceChannelId.getVoiceChannelId() !== user.id) {
                let obj2 = StageChannelModalActionCreators;
                obj2.connectToStage(user);
              }
              const obj4 = StageInstanceActionCreators;
              c6 = 1;
              c7 = 1;
              const obj1 = { value: obj4.startStageInstance(user.id, closure_1, closure_2, closure_3), done: false };
              return obj1;
            } else {
              c7 = 3;
              return { value: "HermesInternal", done: null };
            }
          }
        } else if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 3;
          obj2 = { value, done: true };
          return obj2;
        } else {
          closure_132_1 = value;
          closure_133_11(closure_132_0, false, true);
          c7 = 3;
          obj = { value: closure_132_1, done: true };
          return obj;
        }
      } catch (tmp22) {
        c7 = tmp;
        throw tmp22;
      }
    }
  })();
};
let closure_13 = async function _editStage(arg0) {
  if (c3 === 2) {
    c3 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
      return obj;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c3 = 2;
      if (0 === c4) {
        if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          obj = { value, done: true };
          return obj;
        } else if ("" !== closure_1) {
          let obj2 = StageInstanceActionCreators;
          c4 = 1;
          c3 = 1;
          const obj1 = { value: obj2.updateStageInstance(tmp5.id, tmp6, tmp7), done: false };
          return obj1;
        } else {
          c3 = 3;
          return { value: "HermesInternal", done: null };
        }
      } else if (arg0 === 1) {
        c3 = 3;
        throw value;
      } else if (arg0 === 2) {
        c3 = 3;
        obj2 = { value, done: true };
        return obj2;
      } else {
        c3 = 3;
        obj = { value, done: true };
        return obj;
      }
    } catch (tmp10) {
      c3 = tmp;
      throw tmp10;
    }
  }
};
let closure_14 = async function _endStage(arg0) {
  let id = arg0;
  c2 = 0;
  c1 = 0;
  return (async (arg0) => {
    if (c1 === 2) {
      c1 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c1 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c1 = 3;
            throw value;
          } else if (arg0 === 2) {
            c1 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            let obj1 = StageInstanceActionCreators;
            c2 = 1;
            c1 = 1;
            obj1 = { value: null, done: false };
            obj1.value = obj1.endStageInstance(id.id);
            return obj1;
          }
        } else if (arg0 === 1) {
          c1 = 3;
          throw value;
        } else if (arg0 === 2) {
          c1 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          c1 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp8) {
        c1 = tmp;
        throw tmp8;
      }
    }
  })();
};
const Constants = fn(1074);
({ AbortCodes: closure_7, AnalyticEvents: closure_8, Endpoints: closure_9 } = Constants);
const SafetyToastType = fn(8399).SafetyToastType;
const size = fn(2);
let result = size.fileFinishedImporting("modules/stage_channels/StageChannelActionCreators.tsx");

export const toggleRequestToSpeak = function toggleRequestToSpeak(channel_id, arg1) {
  const guildId = channel_id.getGuildId();
  _modDef38(null != guildId, "This channel cannot be guildless.");
  if (arg1) {
    const obj = {};
    const merged = Object.assign(StageChannelUtils.getStageChannelMetadata(channel_id));
    obj.trackWithMetadata(constants.REQUEST_TO_SPEAK_INITIATED, obj);
  }
  const HTTP = HTTPUtils.HTTP;
  const request = { url: React7.UPDATE_VOICE_STATE(guildId), body: null, rejectWithError: null };
  let toISOStringResult = null;
  if (arg1) {
    const _Date = Date;
    const date = new Date();
    toISOStringResult = date.toISOString();
  }
  request.body = { request_to_speak_timestamp: toISOStringResult, channel_id: channel_id.id };
  request.rejectWithError = HTTPUtils.rejectWithMigratedError();
  return HTTP.patch(request);
};
export const inviteUserToStage = function inviteUserToStage(voiceChannel, id) {
  const guildId = voiceChannel.getGuildId();
  _modDef38(null != guildId, "This channel cannot be guildless.");
  const HTTP = HTTPUtils.HTTP;
  const request = { url: React7.UPDATE_VOICE_STATE(guildId, id), body: null, rejectWithError: null };
  let obj = { suppress: false, request_to_speak_timestamp: new Date().toISOString(), channel_id: voiceChannel.id };
  request.body = obj;
  const date = new Date();
  request.rejectWithError = HTTPUtils.rejectWithMigratedError();
  return HTTP.patch(request).catch((error) => {
    if (error.code === constants.STAGE_CHANNEL_USER_NOT_ALLOWED_TO_SPEAK) {
      SafetyToastsActionCreatorsDefault.showFailedToast(constants2.GENERIC_ERROR);
    }
    return error;
  });
};
export { audienceAckRequestToSpeak };
export const moveSelfToAudience = function moveSelfToAudience(channel_id) {
  let guildId;
  if (channel_id != null) {
    guildId = channel_id.getGuildId();
  }
  _modDef38(null != guildId, "This channel cannot be guildless.");
  const HTTP = HTTPUtils.HTTP;
  const request = {
    url: React7.UPDATE_VOICE_STATE(guildId),
    body: { suppress: true, channel_id: channel_id.id, self_video: false, self_stream: false },
    rejectWithError: HTTPUtils.rejectWithMigratedError(),
  };
  return HTTP.patch(request);
};
export const setUserSuppress = function setUserSuppress(channel, id, suppress) {
  const guildId = channel.getGuildId();
  _modDef38(null != guildId, "This channel cannot be guildless.");
  const HTTP = HTTPUtils.HTTP;
  const request = {
    url: React7.UPDATE_VOICE_STATE(guildId, id),
    body: { suppress, channel_id: channel.id },
    rejectWithError: HTTPUtils.rejectWithMigratedError(),
  };
  const obj = { suppress, channel_id: channel.id };
  return HTTP.patch(request).catch((error) => {
    if (error.code === constants.STAGE_CHANNEL_USER_NOT_ALLOWED_TO_SPEAK) {
      SafetyToastsActionCreatorsDefault.showFailedToast(constants2.GENERIC_ERROR);
    }
    return error;
  });
};
export const moveUserToAudience = function moveUserToAudience(user, voiceChannel) {
  if (null != voiceChannel) {
    if (null != user) {
      const guildId = voiceChannel.getGuildId();
      _modDef38(null != guildId, "This channel cannot be guildless.");
      const guildId1 = voiceChannel.getGuildId();
      _modDef38(null != guildId1, "This channel cannot be guildless.");
      const HTTP = HTTPUtils.HTTP;
      const request = { url: React7.UPDATE_VOICE_STATE(guildId1, user.id), body: null, rejectWithError: null };
      let obj = { suppress: true, channel_id: voiceChannel.id };
      request.body = obj;
      request.rejectWithError = HTTPUtils.rejectWithMigratedError();
      HTTP.patch(request).catch((error) => {
        if (error.code === constants.STAGE_CHANNEL_USER_NOT_ALLOWED_TO_SPEAK) {
          SafetyToastsActionCreatorsDefault.showFailedToast(constants2.GENERIC_ERROR);
        }
        return error;
      });
      const HTTP2 = HTTPUtils.HTTP;
      const request1 = { url: React7.UPDATE_VOICE_STATE(guildId, user.id), body: null, rejectWithError: null };
      obj = { suppress: true, channel_id: voiceChannel.id, self_video: false, self_stream: false };
      request1.body = obj;
      const patchResult = HTTP.patch(request);
      request1.rejectWithError = HTTPUtils.rejectWithMigratedError();
      return HTTP2.patch(request1);
    }
  }
};
export const removeUserFromChannel = function removeUserFromChannel(id, getGuildId) {
  let guildId;
  if (getGuildId != null) {
    guildId = getGuildId.getGuildId();
  }
  if (tmp2) {
    GuildActionCreatorsDefault.setChannel(guildId, id.id, null);
  }
  tmp2 = null != guildId && null != id;
};
export const setEveryoneRolePermissionAllowed = function setEveryoneRolePermissionAllowed(
  getGuildId,
  REQUEST_TO_SPEAK,
  arg2,
) {
  const guildId = getGuildId.getGuildId();
  _modDef38(null != guildId, "Channel cannot be guildless");
  const obj = {
    id: guildId,
    type: Server.PermissionOverwriteType.ROLE,
    allow: PermissionUtilsAll.NONE,
    deny: PermissionUtilsAll.NONE,
  };
  const merged = Object.assign(getGuildId.permissionOverwrites[guildId]);
  const obj2 = BigFlagUtilsAll;
  if (arg2) {
    obj.allow = obj2.add(obj.allow, REQUEST_TO_SPEAK);
    let tmp5Result = BigFlagUtilsAll;
    obj.deny = tmp5Result.remove(obj.deny, REQUEST_TO_SPEAK);
  } else {
    obj.allow = obj2.remove(obj.allow, REQUEST_TO_SPEAK);
    tmp5Result = BigFlagUtilsAll;
    obj.deny = tmp5Result.add(obj.deny, REQUEST_TO_SPEAK);
  }
  const result = ChannelActionCreatorsDefault.updatePermissionOverwrite(getGuildId.id, obj);
  const tmp2Result = ChannelActionCreatorsDefault;
};
export const startStage = function startStage() {
  const self = this;
  const apply = closure_12.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const editStage = function editStage() {
  const self = this;
  const apply = closure_13.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const endStage = function endStage() {
  const self = this;
  const apply = closure_14.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
