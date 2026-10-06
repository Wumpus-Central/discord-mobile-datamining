// === Module 8107: StageChannelActionCreators ===

// Module 8107 (StageChannelActionCreators)
import _modDef38 from "module_38" /* 38 */;
import BigFlagUtilsAll from "BigFlagUtils" /* 1097 */;
import HTTPUtils from "HTTPUtils" /* 1282 */;
import Server from "Server" /* 1985 */;
import PermissionUtilsAll from "PermissionUtils" /* 4520 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 4909 */;
import useAudienceRequestToSpeakState from "useAudienceRequestToSpeakState" /* 5043 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5076 */;
import useStageSpeakingForCurrentUser from "useStageSpeakingForCurrentUser" /* 5586 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 5712 */;
import StageChannelModalActionCreators from "StageChannelModalActionCreators" /* 8102 */;
import Constants2 from "Constants" /* 8108 */;
import StageChannelUtils from "StageChannelUtils" /* 8109 */;
import SafetyToastsActionCreatorsDefault from "SafetyToastsActionCreators" /* 8113 */;
import StageInstanceActionCreators from "StageInstanceActionCreators" /* 8115 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2103 */;
import VoiceStateStore from "VoiceStateStore" /* 4915 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

let c3, c4, closure_4, closure_5;

let c9;
let metroImportAll;
let metroImportDefault;
const f96473 = (error) => {
  if (error.code === constants.STAGE_CHANNEL_USER_NOT_ALLOWED_TO_SPEAK) {
    obj = SafetyToastsActionCreatorsDefault;
    obj.showFailedToast(constants2.GENERIC_ERROR);
  }
  return error;
};
function audienceAckRequestToSpeak(channel, suppress) {
  let obj3;
  let obj5;
  let tmp5Result6;
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  let guildId;
  if (channel != null) {
    guildId = channel.getGuildId();
  }
  _modDef38(null != guildId, "This channel cannot be guildless.");
  const voiceStateForChannel = VoiceStateStore.getVoiceStateForChannel(channel.id);
  obj = useAudienceRequestToSpeakState;
  const audienceRequestToSpeakState = obj.getAudienceRequestToSpeakState(voiceStateForChannel);
  if (!suppress) {
    let resolved;
    const tmp5Result = useStageSpeakingForCurrentUser;
    if (tmp5Result.shouldAgeVerifyToSpeakForCurrentUser()) {
      resolved = Promise.resolve();
    }
    return resolved;
  }
  const tmp9 = audienceRequestToSpeakState !== useAudienceRequestToSpeakState.RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK || suppress;
  if (!tmp9) {
    const obj2 = {};
    const trackWithMetadata = AppAnalyticsUtils.trackWithMetadata;
    const PROMOTED_TO_SPEAKER = metroImportAll.PROMOTED_TO_SPEAKER;
    AppAnalyticsUtils;
    const tmp5Result5 = StageChannelUtils;
    const merged = Object.assign(tmp5Result5.getStageChannelMetadata(channel));
    trackWithMetadata(PROMOTED_TO_SPEAKER, obj2);
  }
  const HTTP = HTTPUtils.HTTP;
  const request = { url: React4.UPDATE_VOICE_STATE(guildId), body: obj3, rejectWithError: tmp5Result6.rejectWithMigratedError() };
  const patch = HTTP.patch;
  obj3 = { suppress, request_to_speak_timestamp: null, channel_id: channel.id };
  if (flag) {
    obj5 = { silent: flag };
    const obj4 = { silent: flag };
  } else {
    obj5 = {};
  }
  const merged1 = Object.assign(obj5);
  tmp5Result6 = HTTPUtils;
  resolved = patch(request);
}
let obj = function _startStage() {
  let voiceChannelId;
  obj = _asyncToGenerator(async (arg0, value, arg2, arg3) => {
    const user = arg0;
    let closure_2 = arg2;
    let closure_3 = arg3;
    let c6 = 0;
    let c7 = 0;
    return (async (arg0, value, arg2, arg3) => {
      if (c7 === 2) {
        c7 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
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
              return { value, done: true };
            } else {
              closure_5 = tmp;
              closure_4 = tmp2;
              value = undefined;
              if ("" !== value) {
                if (voiceChannelId.getVoiceChannelId() !== user.id) {
                  const obj3 = StageChannelModalActionCreators;
                  obj3.connectToStage(user);
                }
                c6 = 1;
                c7 = 1;
                const obj4 = StageInstanceActionCreators;
                const obj6 = { value: obj4.startStageInstance(user.id, value, closure_2, closure_3), done: false };
                return obj6;
              } else {
                c7 = 3;
                return { value: "IconComponent", done: null };
              }
            }
          } else if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            return { value, done: true };
          } else {
            closure_133_11(user, false, true);
            c7 = 3;
            return { value, done: true };
          }
        } catch (tmp21) {
          c7 = 3;
          throw tmp21;
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _editStage() {
  obj = _asyncToGenerator(async (arg0, arg1, arg2) => {
    let closure_0;
    let closure_2;
    let obj3;
    let closure_1 = arg1;
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
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
            const obj4 = { value, done: true };
            return obj4;
          } else if ("" !== closure_1) {
            c4 = 1;
            c3 = 1;
            const obj5 = { value: obj3.updateStageInstance(tmp4.id, tmp5, tmp6), done: false };
            obj3 = StageInstanceActionCreators;
            return obj5;
          } else {
            c3 = 3;
            return { value: "IconComponent", done: null };
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          c3 = 3;
          obj = { value, done: true };
          return obj;
        }
      } catch (tmp9) {
        c3 = 3;
        throw tmp9;
      }
    }
  });
  return obj(...arguments);
};
obj = function _endStage() {
  obj = _asyncToGenerator(async (arg0) => {
    const id = arg0;
    let c2 = 0;
    let c1 = 0;
    return (async (arg0) => {
      let obj2;
      if (c1 === 2) {
        c1 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
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
              return { value, done: true };
            } else {
              c2 = 1;
              c1 = 1;
              const obj5 = { value: obj2.endStageInstance(id.id), done: false };
              obj2 = StageInstanceActionCreators;
              return obj5;
            }
          } else if (arg0 === 1) {
            c1 = 3;
            throw value;
          } else if (arg0 === 2) {
            c1 = 3;
            return { value, done: true };
          } else {
            c1 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp7) {
          c1 = 3;
          throw tmp7;
        }
      }
    })();
  });
  return obj(...arguments);
};
({ AbortCodes: metroImportDefault, AnalyticEvents: metroImportAll, Endpoints: c9 } = Constants);
const SafetyToastType = Constants2.SafetyToastType;
let result = size.fileFinishedImporting("modules/stage_channels/StageChannelActionCreators.tsx");

export const toggleRequestToSpeak = function toggleRequestToSpeak(channel_id, arg1) {
  let tmp10Result;
  let toISOStringResult;
  const guildId = channel_id.getGuildId();
  _modDef38(null != guildId, "This channel cannot be guildless.");
  if (arg1) {
    obj = {};
    const trackWithMetadata = AppAnalyticsUtils.trackWithMetadata;
    const REQUEST_TO_SPEAK_INITIATED = metroImportAll.REQUEST_TO_SPEAK_INITIATED;
    AppAnalyticsUtils;
    const obj2 = StageChannelUtils;
    const merged = Object.assign(obj2.getStageChannelMetadata(channel_id));
    trackWithMetadata(REQUEST_TO_SPEAK_INITIATED, obj);
  }
  const HTTP = HTTPUtils.HTTP;
  const request = { url: React4.UPDATE_VOICE_STATE(guildId), body: { request_to_speak_timestamp: toISOStringResult, channel_id: channel_id.id }, rejectWithError: tmp10Result.rejectWithMigratedError() };
  const patch = HTTP.patch;
  toISOStringResult = null;
  if (arg1) {
    const _Date = Date;
    const self = this;
    const self2 = this;
    const date = new Date();
    toISOStringResult = date.toISOString();
  }
  tmp10Result = HTTPUtils;
  return patch(request);
};
export const inviteUserToStage = function inviteUserToStage(voiceChannel, id) {
  let constants2;
  let date;
  let obj4;
  const guildId = voiceChannel.getGuildId();
  _modDef38(null != guildId, "This channel cannot be guildless.");
  const HTTP = HTTPUtils.HTTP;
  const request = { url: React4.UPDATE_VOICE_STATE(guildId, id), body: obj, rejectWithError: obj4.rejectWithMigratedError() };
  const patch = HTTP.patch;
  obj = { suppress: false, request_to_speak_timestamp: date.toISOString(), channel_id: voiceChannel.id };
  date = new Date();
  obj4 = HTTPUtils;
  const patchResult = patch(request);
  return patchResult.catch((error) => {
    if (error.code === constants.STAGE_CHANNEL_USER_NOT_ALLOWED_TO_SPEAK) {
      obj = SafetyToastsActionCreatorsDefault;
      obj.showFailedToast(constants2.GENERIC_ERROR);
    }
    return error;
  });
};
export { audienceAckRequestToSpeak };
export const moveSelfToAudience = function moveSelfToAudience(channel_id) {
  let obj2;
  let guildId;
  if (channel_id != null) {
    guildId = channel_id.getGuildId();
  }
  _modDef38(null != guildId, "This channel cannot be guildless.");
  const HTTP = HTTPUtils.HTTP;
  const request = { url: React4.UPDATE_VOICE_STATE(guildId), body: { suppress: true, channel_id: channel_id.id, self_video: false, self_stream: false }, rejectWithError: obj2.rejectWithMigratedError() };
  const patch = HTTP.patch;
  obj2 = HTTPUtils;
  return patch(request);
};
export const setUserSuppress = function setUserSuppress(channel, id, suppress) {
  let obj3;
  const guildId = channel.getGuildId();
  _modDef38(null != guildId, "This channel cannot be guildless.");
  const HTTP = HTTPUtils.HTTP;
  const request = { url: React4.UPDATE_VOICE_STATE(guildId, id), body: obj, rejectWithError: obj3.rejectWithMigratedError() };
  const patch = HTTP.patch;
  obj = { suppress, channel_id: channel.id };
  obj3 = HTTPUtils;
  const patchResult = patch(request);
  return patchResult.catch(f96473);
};
export const moveUserToAudience = function moveUserToAudience(user, voiceChannel) {
  let constants2;
  let obj2;
  let obj3;
  let obj6;
  if (null != voiceChannel) {
    if (null != user) {
      const guildId = voiceChannel.getGuildId();
      _modDef38(null != guildId, "This channel cannot be guildless.");
      const id = user.id;
      const guildId1 = voiceChannel.getGuildId();
      _modDef38(null != guildId1, "This channel cannot be guildless.");
      const HTTP = HTTPUtils.HTTP;
      const request = { url: React4.UPDATE_VOICE_STATE(guildId1, id), body: obj, rejectWithError: obj3.rejectWithMigratedError() };
      const patch = HTTP.patch;
      obj = { suppress: true, channel_id: voiceChannel.id };
      obj3 = HTTPUtils;
      const patchResult = patch(request);
      patchResult.catch(f96473);
      const HTTP2 = HTTPUtils.HTTP;
      const request1 = { url: React4.UPDATE_VOICE_STATE(guildId, user.id), body: obj2, rejectWithError: obj6.rejectWithMigratedError() };
      const patch2 = HTTP2.patch;
      obj2 = { suppress: true, channel_id: voiceChannel.id, self_video: false, self_stream: false };
      obj6 = HTTPUtils;
      return patch2(request1);
    }
  }
};
export const removeUserFromChannel = function removeUserFromChannel(id, getGuildId) {
  let guildId;
  if (getGuildId != null) {
    guildId = getGuildId.getGuildId();
  }
  const tmp2 = null != guildId && null != id;
  if (tmp2) {
    obj = GuildActionCreatorsDefault;
    obj.setChannel(guildId, id.id, null);
  }
};
export const setEveryoneRolePermissionAllowed = function setEveryoneRolePermissionAllowed(getGuildId, REQUEST_TO_SPEAK, arg2) {
  const guildId = getGuildId.getGuildId();
  _modDef38(null != guildId, "Channel cannot be guildless");
  obj = { id: guildId, type: Server.PermissionOverwriteType.ROLE, allow: PermissionUtilsAll.NONE, deny: PermissionUtilsAll.NONE };
  const merged = Object.assign(getGuildId.permissionOverwrites[guildId]);
  const obj2 = BigFlagUtilsAll;
  const tmp7 = arg2;
  if (tmp7) {
    obj.allow = obj2.add(obj.allow, REQUEST_TO_SPEAK);
    const tmp5Result = BigFlagUtilsAll;
    obj.deny = tmp5Result.remove(obj.deny, REQUEST_TO_SPEAK);
  } else {
    obj.allow = obj2.remove(obj.allow, REQUEST_TO_SPEAK);
    const tmp5Result2 = BigFlagUtilsAll;
    obj.deny = tmp5Result2.add(obj.deny, REQUEST_TO_SPEAK);
  }
  const tmp2Result = ChannelActionCreatorsDefault;
  const result = tmp2Result.updatePermissionOverwrite(getGuildId.id, obj);
};
export const startStage = function startStage() {
  return obj(...arguments);
};
export const editStage = function editStage() {
  return obj(...arguments);
};
export const endStage = function endStage() {
  return obj(...arguments);
};