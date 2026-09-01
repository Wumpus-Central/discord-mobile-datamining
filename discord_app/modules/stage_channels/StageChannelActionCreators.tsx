// discord_app/modules/stage_channels/StageChannelActionCreators.tsx
import _modDef38 from "../../../_runtime/metro/00038__.js";
import fromStringAll from "../../../discord_common/js/shared/utils/BigFlagUtils.tsx";
import sendRequest from "../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import PermissionOverwriteType from "../../flow/Server.tsx";
import applyOverwritesAll from "../../utils/PermissionUtils.tsx";
import _modDef4491 from "../../actions/ChannelActionCreators.tsx";
import useAudienceRequestToSpeakState from "useAudienceRequestToSpeakState.tsx";
import collectGuildAnalyticsMetadata from "../app_analytics/AppAnalyticsUtils.tsx";
import useIsStageSpeakingDisabledForCurrentUser from "useStageSpeakingForCurrentUser.tsx";
import showTooManyUserGuildsAlertDefault from "../../actions/GuildActionCreators.tsx";
import fillChunk from "StageChannelUtils.tsx";
import closure_4 from "../../../_runtime/00005_asyncGeneratorStep.js";
import closure_5 from "../../stores/SelectedChannelStore.tsx";
import closure_6 from "../../stores/VoiceStateStore.tsx";
import ME from "../../Constants.tsx";
import { SafetyToastType } from "../safety_common/Constants.tsx";

require = arg1;
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
  voiceStateForChannel = voiceStateForChannel.getVoiceStateForChannel(channel.id);
  obj1 = useAudienceRequestToSpeakState;
  const audienceRequestToSpeakState = obj1.getAudienceRequestToSpeakState(voiceStateForChannel);
  if (!suppress) {
    let objResult = useIsStageSpeakingDisabledForCurrentUser;
    if (objResult.shouldAgeVerifyToSpeakForCurrentUser()) {
      return Promise.resolve();
    }
  }
  if (!tmp7) {
    objResult = collectGuildAnalyticsMetadata;
    obj = {};
    const merged = Object.assign(fillChunk.getStageChannelMetadata(channel));
    objResult.trackWithMetadata(constants.PROMOTED_TO_SPEAKER, obj);
    const objResult1 = fillChunk;
  }
  const HTTP = sendRequest.HTTP;
  obj = { url: closure_9.UPDATE_VOICE_STATE(guildId), body: null, rejectWithError: null };
  obj1 = { suppress, request_to_speak_timestamp: null, channel_id: channel.id };
  if (flag) {
    const obj2 = { silent: null };
    obj2[0] = flag;
    let obj3 = obj2;
  } else {
    obj3 = {};
  }
  const merged1 = Object.assign(obj3);
  obj[1] = obj1;
  obj = sendRequest;
  result = obj.rejectWithMigratedError();
  obj[2] = result;
  HTTP.patch(obj);
}
function _startStage() {
  const self = this;
  const tmp = callback((arg0, arg1, arg2, arg3) => {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    closure_3 = arg3;
    c6 = 0;
    c7 = 0;
    return (function* (arg0, arg1, arg2, arg3) {
      if (c7 === 2) {
        c7 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp5 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
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
              throw arg1;
            } else if (arg0 === 2) {
              c7 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_5 = tmp2;
              closure_4 = tmp3;
              closure_1 = undefined;
              if ("" !== closure_1) {
                if (closure_1_5.getVoiceChannelId() !== tmp28.id) {
                  let obj2 = callback(8664);
                  obj2.connectToStage(tmp28);
                }
                const obj4 = callback(8677);
                c6 = 1;
                c7 = 1;
                obj1 = { value: null, done: false };
                obj1[0] = obj4.startStageInstance(tmp28.id, tmp29, tmp30, tmp31);
                return obj1;
              } else {
                c7 = 3;
                return { value: "HermesInternal", done: null };
              }
            }
          } else if (arg0 === 1) {
            c7 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c7 = 3;
            obj2 = { value: null, done: true };
            obj2[0] = arg1;
            return obj2;
          } else {
            closure_1 = arg1;
            callback2(callback, false, true);
            c7 = 3;
            obj = { value: null, done: true };
            obj[0] = closure_1;
            return obj;
          }
        } catch (tmp22) {
          c7 = tmp;
          throw tmp22;
        }
      }
    })();
  });
  closure_12 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _editStage() {
  const self = this;
  const tmp = callback((arg0, arg1, arg2) => {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    c4 = 0;
    c3 = 0;
    return (function* (arg0, arg1, arg2) {
      if (table === 2) {
        table = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          table = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              table = 3;
              throw arg1;
            } else if (arg0 === 2) {
              table = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else if ("" !== closure_1) {
              let obj2 = callback(table[18]);
              c4 = 1;
              table = 1;
              obj1 = { value: null, done: false };
              obj1[0] = obj2.updateStageInstance(tmp5.id, tmp6, tmp7);
              return obj1;
            } else {
              table = 3;
              return { value: "HermesInternal", done: null };
            }
          } else if (arg0 === 1) {
            table = 3;
            throw arg1;
          } else if (arg0 === 2) {
            table = 3;
            obj2 = { value: null, done: true };
            obj2[0] = arg1;
            return obj2;
          } else {
            table = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          }
        } catch (tmp10) {
          table = tmp;
          throw tmp10;
        }
      }
    })();
  });
  closure_13 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _endStage() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c2 = 0;
    c1 = 0;
    return (function* (arg0) {
      if (c1 === 2) {
        c1 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
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
              throw arg1;
            } else if (arg0 === 2) {
              c1 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              obj1 = lib(closure_1_3[18]);
              c2 = 1;
              c1 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = obj1.endStageInstance(lib.id);
              return obj1;
            }
          } else if (arg0 === 1) {
            c1 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c1 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
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
  });
  closure_14 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
({ AbortCodes: error, AnalyticEvents: closure_8, Endpoints: c9 } = ME);
let result = require("set").fileFinishedImporting("modules/stage_channels/StageChannelActionCreators.tsx");

export const toggleRequestToSpeak = function toggleRequestToSpeak(channel_id, arg1) {
  const guildId = channel_id.getGuildId();
  _modDef38(null != guildId, "This channel cannot be guildless.");
  if (arg1) {
    let obj = collectGuildAnalyticsMetadata;
    obj = {};
    const merged = Object.assign(fillChunk.getStageChannelMetadata(channel_id));
    obj.trackWithMetadata(constants.REQUEST_TO_SPEAK_INITIATED, obj);
    const obj3 = fillChunk;
  }
  const HTTP = sendRequest.HTTP;
  obj = { url: closure_9.UPDATE_VOICE_STATE(guildId), body: null, rejectWithError: null };
  let toISOStringResult = null;
  if (arg1) {
    const _Date = Date;
    const date = new Date();
    toISOStringResult = date.toISOString();
  }
  obj[1] = { request_to_speak_timestamp: toISOStringResult, channel_id: channel_id.id };
  obj[2] = sendRequest.rejectWithMigratedError();
  return HTTP.patch(obj);
};
export const inviteUserToStage = function inviteUserToStage(voiceChannel, id) {
  const guildId = voiceChannel.getGuildId();
  _modDef38(null != guildId, "This channel cannot be guildless.");
  const HTTP = sendRequest.HTTP;
  let obj = { url: closure_9.UPDATE_VOICE_STATE(guildId, id), body: null, rejectWithError: null };
  obj = { suppress: false, request_to_speak_timestamp: new Date().toISOString(), channel_id: voiceChannel.id };
  obj[1] = obj;
  const date = new Date();
  obj[2] = sendRequest.rejectWithMigratedError();
  const obj4 = sendRequest;
  return HTTP.patch(obj).catch((code) => {
    if (code.code === constants.STAGE_CHANNEL_USER_NOT_ALLOWED_TO_SPEAK) {
      callback(table[9]).showFailedToast(constants2.GENERIC_ERROR);
      const obj = callback(table[9]);
    }
    return code;
  });
};
export { audienceAckRequestToSpeak };
export const moveSelfToAudience = function moveSelfToAudience(channel_id) {
  let guildId;
  if (channel_id != null) {
    guildId = channel_id.getGuildId();
  }
  _modDef38(null != guildId, "This channel cannot be guildless.");
  const HTTP = sendRequest.HTTP;
  obj = { url: closure_9.UPDATE_VOICE_STATE(guildId), body: obj, rejectWithError: null };
  obj = { suppress: true, channel_id: channel_id.id, self_video: false, self_stream: false };
  obj[2] = sendRequest.rejectWithMigratedError();
  return HTTP.patch(obj);
};
export const setUserSuppress = function setUserSuppress(closure_0, id, suppress) {
  const guildId = closure_0.getGuildId();
  _modDef38(null != guildId, "This channel cannot be guildless.");
  const HTTP = sendRequest.HTTP;
  obj = { url: closure_9.UPDATE_VOICE_STATE(guildId, id), body: obj, rejectWithError: null };
  obj = { suppress, channel_id: closure_0.id };
  obj[2] = sendRequest.rejectWithMigratedError();
  const obj3 = sendRequest;
  return HTTP.patch(obj).catch((code) => {
    if (code.code === constants.STAGE_CHANNEL_USER_NOT_ALLOWED_TO_SPEAK) {
      callback(table[9]).showFailedToast(constants2.GENERIC_ERROR);
      const obj = callback(table[9]);
    }
    return code;
  });
};
export const moveUserToAudience = function moveUserToAudience(user, voiceChannel) {
  if (null != voiceChannel) {
    if (null != user) {
      const guildId = voiceChannel.getGuildId();
      _modDef38(null != guildId, "This channel cannot be guildless.");
      const guildId1 = voiceChannel.getGuildId();
      _modDef38(null != guildId1, "This channel cannot be guildless.");
      const HTTP = sendRequest.HTTP;
      let obj = { url: null, body: null, rejectWithError: null };
      obj[0] = closure_9.UPDATE_VOICE_STATE(guildId1, user.id);
      obj = { suppress: true, channel_id: null };
      obj[1] = voiceChannel.id;
      obj[1] = obj;
      obj[2] = sendRequest.rejectWithMigratedError();
      const obj3 = sendRequest;
      HTTP.patch(obj).catch((code) => {
        if (code.code === constants.STAGE_CHANNEL_USER_NOT_ALLOWED_TO_SPEAK) {
          callback(table[9]).showFailedToast(constants2.GENERIC_ERROR);
          const obj = callback(table[9]);
        }
        return code;
      });
      const HTTP2 = sendRequest.HTTP;
      obj = { url: null, body: null, rejectWithError: null };
      obj[0] = closure_9.UPDATE_VOICE_STATE(guildId, user.id);
      obj1 = { suppress: true, channel_id: null, self_video: false, self_stream: false };
      obj1[1] = voiceChannel.id;
      obj[1] = obj1;
      const patchResult = HTTP.patch(obj);
      obj[2] = sendRequest.rejectWithMigratedError();
      return HTTP2.patch(obj);
    }
  }
};
export const removeUserFromChannel = function removeUserFromChannel(id, getGuildId) {
  let guildId;
  if (getGuildId != null) {
    guildId = getGuildId.getGuildId();
  }
  if (tmp2) {
    showTooManyUserGuildsAlertDefault.setChannel(guildId, id.id, null);
    const obj = showTooManyUserGuildsAlertDefault;
  }
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
    type: PermissionOverwriteType.PermissionOverwriteType.ROLE,
    allow: applyOverwritesAll.NONE,
    deny: applyOverwritesAll.NONE,
  };
  const merged = Object.assign(getGuildId.permissionOverwrites[guildId]);
  const obj2 = fromStringAll;
  if (arg2) {
    obj.allow = obj2.add(obj.allow, REQUEST_TO_SPEAK);
    let tmp5Result = tmp5(506);
    obj.deny = tmp5Result.remove(obj.deny, REQUEST_TO_SPEAK);
  } else {
    obj.allow = obj2.remove(obj.allow, REQUEST_TO_SPEAK);
    tmp5Result = tmp5(506);
    obj.deny = tmp5Result.add(obj.deny, REQUEST_TO_SPEAK);
  }
  const result = _modDef4491.updatePermissionOverwrite(getGuildId.id, obj);
};
export const startStage = function startStage(closure_1_0, arg1, GUILD_ONLY, closure_1_11) {
  const self = this;
  const apply = _startStage.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const editStage = function editStage(closure_1_0, arg1, GUILD_ONLY) {
  const self = this;
  const apply = _editStage.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const endStage = function endStage(channel) {
  const self = this;
  const apply = _endStage.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
