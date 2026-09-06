// === Module 9518: EmbeddedActivitiesManager ===

// Module 9518 (EmbeddedActivitiesManager)
import DispatcherDefault from "Dispatcher" /* 573 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1109 */;
import PlatformUtils from "PlatformUtils" /* 1115 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import v1 from "v1" /* 1256 */;
import StringUtils from "StringUtils" /* 1925 */;
import embeddedActivityLocationUtils from "embeddedActivityLocationUtils" /* 4189 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 4761 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7182 */;
import CommandPermissionContext from "CommandPermissionContext" /* 9295 */;
import getPlatformDefault from "getPlatform" /* 9410 */;
import FramesActionCreatorsDefault from "FramesActionCreators" /* 9507 */;
import getURLForApplication from "getURLForApplication" /* 9512 */;
import getShelfItemDataDefault from "getShelfItemData" /* 9520 */;
import ThermalUtilsDefault from "ThermalUtils" /* 9521 */;
import tryLaunchAsFrame from "tryLaunchAsFrame" /* 9523 */;
import pendingFrameLaunch from "pendingFrameLaunch" /* 9524 */;
import EmbeddedActivityLocationKind from "EmbeddedActivityLocationKind" /* 9525 */;
import isVoiceEmbeddedActivityDefault from "isVoiceEmbeddedActivity" /* 9526 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import ChannelRTCStore from "ChannelRTCStore" /* 4576 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4583 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2011 */;
import UserStore from "UserStore" /* 1371 */;
import ActivityShelfStore from "ActivityShelfStore" /* 9519 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 1956 */;
import LifecycleManager from "LifecycleManager" /* 1898 */;

require = fn;
function getShelfItemTrackingProperties(activity) {
  let releasePhase;
  if (activity != null) {
    activity = activity.activity;
    if (activity != null) {
      const obj = PlatformUtils;
      releasePhase = activity.client_platform_config[getPlatformDefault(undefined, obj.getOS(obj))].release_phase;
    }
  }
  return { releasePhase };
}
function clearAwaitingAnalyticsContextImmediate(arg0, arg1) {
  if (null != dependencyMap2[arg0]) {
    if (tmp3.nonce === arg1) {
      delete tmp[tmp2];
      return tmp3;
    }
  }
}
function handleActivityLaunchStart(arg0) {
  ({ analyticsLocations, source } = arg0);
  ({ applicationId, nonce } = arg0);
  if (tmp) {
    const obj = { nonce, locations: analyticsLocations, source };
    closure_19[applicationId] = obj;
  }
  tmp = null != analyticsLocations || null != source;
}
function handleActivityClose() {
  const self = this;
  const apply = closure_25.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_25 = async function _handleActivityClose(arg0) {
  if (1 === tmp6) {
    if (arg0 === 1) {
      c4 = 3;
      throw value;
    } else if (arg0 === 2) {
      c4 = 3;
      let obj1 = { value, done: true };
      return obj1;
    } else {
      const embeddedActivityDurationMs = closure_130_12.getEmbeddedActivityDurationMs(closure_129_1.id, closure_129_0);
      const sessionId = closure_130_6.getSessionId();
      let tmp9 = null != closure_129_2;
      if (tmp9) {
        tmp9 = null != sessionId;
      }
      if (tmp9) {
        const HTTP = closure_130_0(closure_130_2[13]).HTTP;
        const request = { url: closure_130_15.ACTIVITY_LEAVE(closure_129_0, closure_129_1.id, closure_129_2), body: null, retries: 2, rejectWithError: false };
        let obj2 = { session_id: sessionId };
        request.body = obj2;
        c3 = 2;
        c4 = 1;
        let obj3 = { value: HTTP.post(request), done: false };
        return obj3;
      }
    }
  } else if (arg0 === 1) {
    c4 = 3;
    throw value;
  } else if (arg0 === 2) {
    c4 = 3;
    return { value, done: true };
  }
  closure_129_5 = closure_130_18[closure_129_0];
  obj1 = closure_130_0(closure_130_2[14]);
  const embeddedActivityLocationChannelId = obj1.getEmbeddedActivityLocationChannelId(closure_129_1);
  obj2 = closure_130_0(closure_130_2[14]);
  const embeddedActivityLocationGuildId = obj2.getEmbeddedActivityLocationGuildId(closure_129_1);
  const channel = closure_130_7.getChannel(embeddedActivityLocationChannelId);
  const currentUser = closure_130_10.getCurrentUser();
  if (null != closure_129_5) {
    if (null != currentUser) {
      if (null == closure_129_5.connectedSince) {
        const shelfActivities = closure_130_12.getShelfActivities(embeddedActivityLocationGuildId);
        closure_129_11 = closure_130_1(closure_130_2[15])({ applicationId: closure_129_0, activityConfigs: shelfActivities });
        const releasePhase = closure_130_21(closure_129_11).releasePhase;
        const rawThermalState = closure_130_1(closure_130_2[16]).getRawThermalState();
        closure_130_1(closure_130_2[16]);
        const obj5 = { channel_id: embeddedActivityLocationChannelId, guild_id: embeddedActivityLocationGuildId, media_session_id: closure_129_5.mediaSessionIds[0], activity_session_id: closure_129_5.activitySessionId, application_id: closure_129_0, duration_ms: embeddedActivityDurationMs, user_premium_tier: currentUser.premiumType, raw_thermal_state: rawThermalState, release_phase: releasePhase, shelf_rank: null, activity_user_session_id: null, channel_type: null, media_session_ids: null, embedded_activity_location_kind: null };
        let shelf_rank;
        if (closure_129_11 != null) {
          const activity = closure_129_11.activity;
          if (activity != null) {
            shelf_rank = activity.shelf_rank;
          }
        }
        obj5.shelf_rank = shelf_rank;
        obj5.activity_user_session_id = closure_129_5.activityUserSessionId;
        let type;
        if (channel != null) {
          type = channel.type;
        }
        obj5.channel_type = type;
        obj5.media_session_ids = closure_129_5.mediaSessionIds;
        obj5.embedded_activity_location_kind = closure_129_1.kind;
        closure_130_1(closure_130_2[17]).track(closure_130_13.ACTIVITY_SESSION_LEFT, obj5);
        obj3 = closure_130_1(closure_130_2[17]);
        const obj6 = { channel_id: embeddedActivityLocationChannelId, guild_id: embeddedActivityLocationGuildId, application_id: closure_129_0, instance_ids: null, media_session_ids: null, activity_user_session_id: null, raw_thermal_state: null, duration_ms: null, embedded_activity_location_kind: null };
        let tmp41;
        if (null != closure_129_5.launchId) {
          const items = [closure_129_5.launchId];
          tmp41 = items;
        }
        obj6.instance_ids = tmp41;
        obj6.media_session_ids = closure_129_5.mediaSessionIds;
        obj6.activity_user_session_id = closure_129_5.activityUserSessionId;
        obj6.raw_thermal_state = rawThermalState;
        obj6.duration_ms = embeddedActivityDurationMs;
        obj6.embedded_activity_location_kind = closure_129_1.kind;
        obj3.track(closure_130_13.ACTIVITY_IFRAME_UNMOUNT, obj6);
        delete tmp3[tmp2];
        closure_130_1(closure_130_2[17]);
      }
    }
  }
  await "HermesInternal";
  closure_1 = tmp3;
  ({ applicationId: closure_129_0, location: closure_129_1, instanceId: closure_129_2 } = closure_0);
  return "PX_16";
};
function handleOpenEmbeddedActivity(applicationId) {
  applicationId = applicationId.applicationId;
  ({ isStart, participants, embeddedActivity, location: _location, inviterUserId } = applicationId);
  if (true !== embeddedActivity.renderInFramePool) {
    let obj = FramesActionCreatorsDefault;
    obj.clearMainFrameSlot();
  }
  let obj1 = tryLaunchAsFrame;
  if (obj1.tryLaunchAsFrame({ applicationId })) {
    obj = { isStart, inviterUserId, channelId: null, guildId: null, locationKind: null, launchId: null, compositeInstanceId: null, activitiesInfraVersion: null };
    const tmp4Result = embeddedActivityLocationUtils;
    obj.channelId = tmp4Result.getEmbeddedActivityLocationChannelId(_location);
    obj.guildId = embeddedActivityLocationUtils.getEmbeddedActivityLocationGuildId(_location);
    obj.locationKind = _location.kind;
    ({ launchId: obj18.launchId, compositeInstanceId: obj18.compositeInstanceId } = embeddedActivity);
    let num4 = 1;
    if ("location" in embeddedActivity) {
      num4 = 2;
    }
    obj.activitiesInfraVersion = num4;
    const result = tmp4Result.stashPendingFrameLaunch(applicationId, obj);
    const tmp4Result1 = embeddedActivityLocationUtils;
  } else {
    const id = AuthenticationStore.getId();
    const found = participants.find((userId) => userId.userId === closure_1);
    const embeddedActivityLocationChannelId = embeddedActivityLocationUtils.getEmbeddedActivityLocationChannelId(_location);
    const tmp4Result2 = embeddedActivityLocationUtils;
    const embeddedActivityLocationGuildId = embeddedActivityLocationUtils.getEmbeddedActivityLocationGuildId(_location);
    const channel = ChannelStore.getChannel(embeddedActivityLocationChannelId);
    let isFirstActivityInChannel = isStart;
    if (isStart) {
      isFirstActivityInChannel = null != channel;
    }
    if (isFirstActivityInChannel) {
      isFirstActivityInChannel = channel.isPrivate();
    }
    if (isFirstActivityInChannel) {
      isFirstActivityInChannel = applicationId.isFirstActivityInChannel;
    }
    if (isFirstActivityInChannel) {
      isFirstActivityInChannel = null == found;
    }
    if (isFirstActivityInChannel) {
      const participant = ChannelRTCActionCreatorsDefault.selectParticipant(channel.id, null);
    }
    if (null != found) {
      const mediaSessionId = RTCConnectionStore.getMediaSessionId();
      const compositeInstanceId = embeddedActivity.compositeInstanceId;
      let tmp18 = null == mediaSessionId;
      if (tmp18) {
        let isVocalResult;
        if (channel != null) {
          isVocalResult = channel.isVocal();
        }
        tmp18 = true === isVocalResult;
      }
      if (tmp18) {
        let isPrivateResult;
        if (channel != null) {
          isPrivateResult = channel.isPrivate();
        }
        tmp18 = false === isPrivateResult;
      }
      if (null != compositeInstanceId) {
        if (!tmp18) {
          const v4Result = v1.v4();
          let num2 = 1;
          if ("location" in embeddedActivity) {
            num2 = 2;
          }
          const currentUser = UserStore.getCurrentUser();
          if (null != currentUser) {
            const shelfActivities = EmbeddedActivitiesStore.getShelfActivities(embeddedActivityLocationGuildId);
            const shelfOrder = ActivityShelfStore.getState().shelfOrder;
            obj = { applicationId, activityConfigs: shelfActivities };
            const tmp55 = getShelfItemDataDefault(obj);
            const sum = 1 + shelfOrder.findIndex((item) => item === applicationId);
            let release_phase;
            if (tmp55 != null) {
              const activity = tmp55.activity;
              if (activity != null) {
                let tmp54Result = getPlatformDefault;
                const tmp4Result5 = PlatformUtils;
                release_phase = activity.client_platform_config[tmp54Result(undefined, tmp4Result5.getOS(tmp4Result5))].release_phase;
              }
            }
            tmp54Result = ThermalUtilsDefault;
            const rawThermalState = tmp54Result.getRawThermalState();
            if (null != mediaSessionId) {
              const items = [mediaSessionId];
              let items1 = items;
            } else {
              items1 = [];
            }
            obj1 = { activitySessionId: compositeInstanceId, activityUserSessionId: v4Result, launchId: embeddedActivity.launchId, mediaSessionIds: items1, activitiesInfraVersion: num2 };
            closure_18[applicationId] = obj1;
            let isNullOrEmptyResult = StringUtils.isNullOrEmpty(found.nonce);
            if (!isNullOrEmptyResult) {
              let nonce;
              if (tmp28 != null) {
                nonce = tmp28.nonce;
              }
              isNullOrEmptyResult = found.nonce === nonce;
            }
            const tmp4Result6 = StringUtils;
            const obj2 = { channel_id: embeddedActivityLocationChannelId, guild_id: embeddedActivityLocationGuildId, media_session_id: items1[0], activity_session_id: compositeInstanceId, application_id: applicationId, location_stack: null, user_premium_tier: null, raw_thermal_state: null, n_participants: null, is_activity_start: null, release_phase: null, shelf_rank: null, shelf_sorted_rank: null, activity_user_session_id: null, channel_type: null, source: null, command_context_type: null, invite_inviter_id: null, interaction_id: null, embedded_activity_location_kind: null };
            let locations;
            if (dependencyMap2[applicationId] != null) {
              locations = tmp28.locations;
            }
            obj2.location_stack = locations;
            obj2.user_premium_tier = currentUser.premiumType;
            obj2.raw_thermal_state = rawThermalState;
            let userParticipantCount = null;
            if (null != channel) {
              userParticipantCount = ChannelRTCStore.getUserParticipantCount(channel.id);
            }
            obj2.n_participants = userParticipantCount;
            obj2.is_activity_start = isStart;
            obj2.release_phase = release_phase;
            let shelf_rank;
            if (tmp55 != null) {
              const activity2 = tmp55.activity;
              if (activity2 != null) {
                shelf_rank = activity2.shelf_rank;
              }
            }
            obj2.shelf_rank = shelf_rank;
            let tmp37 = null;
            if (sum > 0) {
              tmp37 = sum;
            }
            obj2.shelf_sorted_rank = tmp37;
            obj2.activity_user_session_id = v4Result;
            let type;
            if (channel != null) {
              type = channel.type;
            }
            obj2.channel_type = type;
            let source;
            if (dependencyMap2[applicationId] != null) {
              source = tmp28.source;
            }
            obj2.source = source;
            let commandContextType = null;
            if (null != channel) {
              commandContextType = CommandPermissionContext.computeCommandContextType(channel, applicationId);
              const tmp4Result7 = CommandPermissionContext;
            }
            obj2.command_context_type = commandContextType;
            obj2.invite_inviter_id = inviterUserId;
            let interactionId;
            if (dependencyMap2[applicationId] != null) {
              interactionId = tmp28.interactionId;
            }
            obj2.interaction_id = interactionId;
            obj2.embedded_activity_location_kind = _location.kind;
            AnalyticsUtilsDefault.track(constants.ACTIVITY_SESSION_JOINED, obj2);
            const tmp54Result1 = AnalyticsUtilsDefault;
            let locations1;
            if (dependencyMap2[applicationId] != null) {
              locations1 = tmp28.locations;
            }
            const obj3 = { location_stack: locations1, channel_id: embeddedActivityLocationChannelId, channel_type: null, guild_id: null, application_id: null, instance_id: null, initial_media_session_id: null, activity_user_session_id: null, raw_thermal_state: null, is_activity_start: null, shelf_rank: null, shelf_sorted_rank: null, activities_infra_version: null, embedded_activity_location_kind: null };
            let type1;
            if (channel != null) {
              type1 = channel.type;
            }
            obj3.channel_type = type1;
            obj3.guild_id = embeddedActivityLocationGuildId;
            obj3.application_id = applicationId;
            obj3.instance_id = embeddedActivity.launchId;
            obj3.initial_media_session_id = items1[0];
            obj3.activity_user_session_id = v4Result;
            obj3.raw_thermal_state = rawThermalState;
            obj3.is_activity_start = isStart;
            let shelf_rank1;
            if (tmp55 != null) {
              const activity3 = tmp55.activity;
              if (activity3 != null) {
                shelf_rank1 = activity3.shelf_rank;
              }
            }
            obj3.shelf_rank = shelf_rank1;
            let tmp46 = null;
            if (sum > 0) {
              tmp46 = sum;
            }
            obj3.shelf_sorted_rank = tmp46;
            obj3.activities_infra_version = num2;
            obj3.embedded_activity_location_kind = _location.kind;
            AnalyticsUtilsDefault.track(constants.ACTIVITY_IFRAME_MOUNT, obj3);
            const tmp54Result2 = AnalyticsUtilsDefault;
          }
          const tmp4Result4 = v1;
        }
      }
    }
    const tmp4Result3 = embeddedActivityLocationUtils;
  }
}
const GUILD_VOCAL_CHANNEL_TYPES = fn(1961).GUILD_VOCAL_CHANNEL_TYPES;
const Constants = fn(1074);
({ AnalyticEvents: map1, RPCCloseCodes: closure_14, Endpoints: closure_15, RTCConnectionStates: closure_16, ComponentActions: closure_17 } = Constants);
let dependencyMap = {};
const dependencyMap2 = {};
let closure_20 = {};
let c27;
class EmbeddedActivitiesManager extends tmp3 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    applyArgumentsResult.handleSelectedChannelUpdate = function handleSelectedChannelUpdate() {
      voiceChannelId = voiceChannelId.getVoiceChannelId();
      const selfEmbeddedActivities = EmbeddedActivitiesStore.getSelfEmbeddedActivities();
      const values = selfEmbeddedActivities.values();
      const iter = values[Symbol.iterator]();
      while (iter !== undefined) {
        ({ location: _location, applicationId } = nextResult);
        let obj2 = applyArgumentsResult(4189);
        let embeddedActivityLocationChannelId = obj2.getEmbeddedActivityLocationChannelId(_location);
        let tmp8 = embeddedActivityLocationChannelId;
        let tmp9 = null != embeddedActivityLocationChannelId;
        if (tmp9) {
          tmp9 = isVoiceEmbeddedActivityDefault(tmp8);
        }
        if (tmp9) {
          tmp9 = tmp8 !== voiceChannelId;
        }
        if (tmp9) {
          let obj = { location: _location, applicationId };
          let leaveActivityResult = applyArgumentsResult.leaveActivity(obj);
        }
        continue;
      }
      if (null != voiceChannelId) {
        const embeddedActivitiesForChannel = EmbeddedActivitiesStore.getEmbeddedActivitiesForChannel(voiceChannelId);
        applyArgumentsResult = id.getId();
        const item = embeddedActivitiesForChannel.forEach((userIds) => {
          userIds = userIds.userIds;
          if (userIds.has(closure_0)) {
            let obj = embeddedActivityLocationUtils;
            const selfEmbeddedActivityForChannel = EmbeddedActivitiesStore.getSelfEmbeddedActivityForChannel(obj.getEmbeddedActivityLocationChannelId(userIds.location));
            if (null == selfEmbeddedActivityForChannel) {
              obj = { location: null, applicationId: null };
              ({ location: obj3.location, applicationId: obj3.applicationId } = userIds);
              applyArgumentsResult.leaveActivity(obj);
            } else if (null == c27) {
              obj = { location: null, applicationId: null };
              ({ location: obj2.location, applicationId: obj2.applicationId } = selfEmbeddedActivityForChannel);
              applyArgumentsResult.hidePIPEmbed(obj);
            }
          }
        });
      }
      nextResult = iter.next();
    };
    applyArgumentsResult.handleActivityWebViewRelease = function handleActivityWebViewRelease() {
      applyArgumentsResult.releaseWebView();
    };
    applyArgumentsResult.handleActivityLaunchSuccess = function handleActivityLaunchSuccess(arg0) {
      ({ applicationId: closure_0, nonce: closure_1 } = arg0);
      const timerId = setTimeout(() => {
        let tmp5;
        if (null != dependencyMap2[closure_0]) {
          if (tmp4.nonce === tmp3) {
            delete tmp[tmp2];
            tmp5 = tmp4;
          }
        }
        return tmp5;
      }, 2000);
      if (obj.isUsingDevShelfActivityUrlOverride()) {
        const result = applyArgumentsResult.showDevShelfOverrideEnabled();
      }
      obj = getURLForApplication;
    };
    closure_129_0 = undefined;
    closure_129_1 = applyArgumentsResult;
    closure_129_0 = closure_3(async (arg0) => {
      closure_130_7 = clearAwaitingAnalyticsContextImmediate(closure_130_4, closure_130_1);
      await closure_0(tmp2[31]).getActivityLaunchErrorInfo(closure_130_0, closure_130_4);
      closure_130_8 = value;
      closure_131_1.showLaunchErrorModal(closure_130_8.message);
      const channel2 = channel.getChannel(closure_130_2);
      const rawThermalState = guildId(tmp2[16]).getRawThermalState();
      guildId(tmp2[16]);
      const obj4 = { channel_id: closure_130_2, guild_id: null, application_id: null, raw_thermal_state: null, is_activity_start: null, channel_type: null, location_stack: null, error_type: null, error_status: null, error_code: null, source: null, embedded_activity_location_kind: null };
      guildId = closure_130_3;
      if (closure_130_3 == null) {
        guildId = undefined;
        if (channel2 != null) {
          guildId = obj.getGuildId();
        }
        obj = channel2;
      }
      obj4.guild_id = guildId;
      obj4.application_id = closure_130_4;
      obj4.raw_thermal_state = rawThermalState;
      obj4.is_activity_start = closure_130_5;
      if (channel2 != null) {
        const type = channel2.type;
      }
      obj4.channel_type = type;
      if (closure_130_7 != null) {
        const locations = closure_130_7.locations;
      }
      obj4.location_stack = locations;
      obj4.error_type = closure_130_8.errorType;
      obj4.error_status = closure_130_8.errorStatus;
      obj4.error_code = closure_130_8.errorCode;
      if (closure_130_7 != null) {
        const source = closure_130_7.source;
      }
      obj4.source = source;
      obj4.embedded_activity_location_kind = closure_130_6;
      guildId(tmp2[17]).track(constants.ACTIVITY_SESSION_JOIN_FAILED, obj4);
      await "HermesInternal";
      ({ error: closure_130_0, nonce: closure_130_1, channelId: closure_130_2, guildId: closure_130_3, applicationId: closure_130_4, isStart: closure_130_5, locationKind: closure_130_6 } = applyArgumentsResult);
      return "PX_16";
    });
    applyArgumentsResult.handleActivityLaunchFail = function() {
      const self = this;
      const apply = applyArgumentsResult.apply;
      if (typeof apply === "unknown") {
        applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    applyArgumentsResult.handleActivityLaunchCancel = function handleActivityLaunchCancel(arg0) {
      if (null != dependencyMap2[arg0.applicationId]) {
        if (tmp4.nonce === tmp3) {
          delete tmp[tmp2];
        }
      }
    };
    applyArgumentsResult.superHandleRPCDisconnect = function superHandleRPCDisconnect(reason) {
      reason = reason.reason;
      id = reason.application.id;
      if (null != id) {
        if (null != reason) {
          const selfEmbeddedActivities = EmbeddedActivitiesStore.getSelfEmbeddedActivities();
          const values = selfEmbeddedActivities.values();
          for (const item10008 of values) {
            let _location = item10008.location;
            if (item10008.applicationId === id) {
              let obj = { location: null, applicationId: null };
              obj.location = _location;
              obj.applicationId = id;
              let leaveActivityResult = applyArgumentsResult.leaveActivity(obj);
            }
            continue;
          }
          if (reason.code !== constants2.CLOSE_NORMAL) {
            obj = { rpc_close_code: null, rpc_message: null, application_id: null };
            ({ code: obj3.rpc_close_code, message: obj3.rpc_message } = reason);
            obj.application_id = id;
            AnalyticsUtilsDefault.track(constants.ACTIVITY_CLOSED_RPC_ERROR, obj);
            applyArgumentsResult.showErrorModal(reason, id);
          }
        }
      }
    };
    applyArgumentsResult.handleCallDelete = function handleCallDelete(channelId) {
      channelId = channelId.channelId;
      voiceChannelId = SelectedChannelStore.getVoiceChannelId();
      if (tmp2) {
        applyArgumentsResult.handleCallEnded(channelId);
      }
      tmp2 = null != voiceChannelId && voiceChannelId === channelId;
    };
    applyArgumentsResult.handleRTCConnectionState = function handleRTCConnectionState(state) {
      if (state.state === constants3.DISCONNECTED) {
        applyArgumentsResult.handleCallEnded(state.channelId);
      }
    };
    applyArgumentsResult.handleCallEnded = function handleCallEnded(channelId) {
      const selfEmbeddedActivityForChannel = EmbeddedActivitiesStore.getSelfEmbeddedActivityForChannel(channelId);
      if (null != selfEmbeddedActivityForChannel) {
        const obj = { location: null, applicationId: null };
        ({ location: obj.location, applicationId: obj.applicationId } = selfEmbeddedActivityForChannel);
        applyArgumentsResult.leaveActivity(obj);
      }
    };
    closure_130_0 = undefined;
    closure_130_1 = applyArgumentsResult;
    closure_130_0 = closure_3(async (arg0) => {
      if (c6 === 2) {
        c6 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
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
          c6 = 2;
          let getChannel = set;
          if (0 === set) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              closure_4 = tmp2;
              c3 = 0;
              closure_131_0 = undefined;
              closure_131_1 = undefined;
              closure_131_2 = undefined;
              closure_131_3 = undefined;
              closure_131_4 = undefined;
              ({ channelId: closure_131_0, applicationId: closure_131_1, analyticsLocations: closure_131_2, commandOrigin: closure_131_3, inviterUserId: closure_131_4 } = applyArgumentsResult);
              closure_131_5 = undefined;
              let selfEmbeddedActivityForChannel;
              closure_131_7 = undefined;
              closure_131_8 = undefined;
              closure_131_9 = undefined;
              let activityConfigs;
              let applications;
              closure_131_12 = undefined;
              closure_131_13 = undefined;
              set = 1;
              c6 = 1;
              return { value: "PX_16", done: true };
            }
          } else {
            if (1 === getChannel) {
              if (arg0 === 1) {
                c6 = 3;
                throw value;
              } else if (arg0 === 2) {
                c6 = 3;
                const obj1 = { value, done: true };
                return obj1;
              } else {
                getChannel = getChannel.getChannel;
                closure_131_5 = getChannel(closure_131_0);
                if (undefined !== closure_131_5) {
                  let type;
                  if (closure_131_5 != null) {
                    type = closure_131_5.type;
                  }
                  if (!set.has(type)) {
                    selfEmbeddedActivityForChannel = EmbeddedActivitiesStore.getSelfEmbeddedActivityForChannel(closure_131_0);
                    getChannel = undefined;
                    if (selfEmbeddedActivityForChannel != null) {
                      getChannel = selfEmbeddedActivityForChannel.applicationId;
                    }
                    if (getChannel !== closure_131_1) {
                      set = 2;
                      c6 = 1;
                      const obj2 = { value: getChannel(7163).fetchApplication(closure_131_1), done: false };
                      return obj2;
                    }
                  } else {
                    getChannel = voiceChannelId.getVoiceChannelId();
                  }
                }
                c6 = 3;
              }
            } else if (2 === getChannel) {
              if (arg0 === 1) {
                c6 = 3;
                throw value;
              } else if (arg0 === 2) {
                c6 = 3;
                const obj3 = { value, done: true };
                return obj3;
              } else {
                closure_131_7 = value;
                if (!obj25.getIsActivitiesEnabledForCurrentPlatform()) {
                  const intl = applyArgumentsResult(1114).intl;
                  closure_132_1.showLaunchErrorModal(intl.string(applyArgumentsResult(1114).t.UXoQTp));
                }
                obj25 = applyArgumentsResult(9502);
              }
            } else {
              if (3 === getChannel) {
                if (arg0 === 1) {
                  c6 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c6 = 3;
                  const obj4 = { value, done: true };
                  return obj4;
                } else {
                  closure_131_9 = value;
                  activityConfigs = closure_131_9.activityConfigs;
                  applications = closure_131_9.applications;
                  const obj5 = { applicationId: closure_131_1, activityConfigs, applications };
                  if (null == getChannel(9520)(obj5)) {
                    let obj9 = applyArgumentsResult(9504);
                    let obj6 = { guildId: closure_131_8, force: true };
                    set = 4;
                    c6 = 1;
                    const obj7 = { value: obj9.fetchShelf(obj6), done: false };
                    return obj7;
                  }
                }
              } else if (4 === getChannel) {
                if (arg0 === 1) {
                  c6 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c6 = 3;
                  const obj8 = { value, done: true };
                  return obj8;
                } else {
                  closure_131_12 = value;
                  obj9 = { applicationId: closure_131_1, activityConfigs: closure_131_12.activityConfigs, applications: closure_131_12.applications };
                  getChannel(9520)(obj9);
                }
              } else if (5 === getChannel) {
                if (arg0 === 1) {
                  c6 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c6 = 3;
                  const obj10 = { value, done: true };
                  return obj10;
                }
              } else if (arg0 === 1) {
                c6 = 3;
                throw value;
              } else if (arg0 === 2) {
                c6 = 3;
                obj = { value, done: true };
                return obj;
              }
              const embeddedActivitiesForChannel = EmbeddedActivitiesStore.getEmbeddedActivitiesForChannel(closure_131_0);
              closure_131_13 = embeddedActivitiesForChannel.find((applicationId) => applicationId.applicationId === getChannel);
              let size;
              if (closure_131_13 != null) {
                size = closure_131_13.userIds.size;
              }
              dependencyMap = size;
              if (size == null) {
                dependencyMap = 0;
              }
              if (dependencyMap > 0) {
                obj6 = applyArgumentsResult(9530);
                const obj11 = { channelId: closure_131_0, applicationId: closure_131_1, launchId: null, inputApplication: null, analyticsLocations: null, inviterUserId: null };
                let launchId;
                if (closure_131_13 != null) {
                  launchId = closure_131_13.launchId;
                }
                obj11.launchId = launchId;
                obj11.analyticsLocations = closure_131_2;
                obj11.inviterUserId = closure_131_4;
                set = 6;
                c6 = 1;
                const obj12 = { value: obj6.maybeJoinEmbeddedActivity(obj11), done: false };
                return obj12;
              } else {
                let obj13 = { targetApplicationId: closure_131_1, channelId: closure_131_0, analyticsLocations: closure_131_2, commandOrigin: closure_131_3, inviterUserId: closure_131_4 };
                set = 5;
                c6 = 1;
                let obj14 = { value: getChannel(9548)(obj13), done: false };
                return obj14;
              }
            }
            let supported_platforms;
            if (closure_131_7 != null) {
              const embedded_activity_config = closure_131_7.embedded_activity_config;
              if (embedded_activity_config != null) {
                supported_platforms = embedded_activity_config.supported_platforms;
              }
            }
            if (tmp56(supported_platforms)) {
              obj13 = closure_131_5;
              let guildId;
              if (closure_131_5 != null) {
                guildId = obj13.getGuildId();
              }
              getChannel = guildId;
              closure_131_8 = getChannel;
              obj14 = applyArgumentsResult(9504);
              const obj15 = { guildId: closure_131_8 };
              set = 3;
              c6 = 1;
              const obj16 = { value: obj14.fetchShelf(obj15), done: false };
              return obj16;
            } else {
              const intl2 = applyArgumentsResult(1114).intl;
              closure_132_1.showLaunchErrorModal(intl2.string(applyArgumentsResult(1114).t.uGDCcw));
            }
            tmp56 = getChannel(9529);
          }
        } catch (tmp89) {
          c6 = tmp;
          throw tmp89;
        }
      }
    });
    applyArgumentsResult.handleDeferredOpen = function() {
      const self = this;
      const apply = applyArgumentsResult.apply;
      if (typeof apply === "unknown") {
        applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    applyArgumentsResult.handleGuildDelete = function handleGuildDelete(guild) {
      guild = guild.guild;
      const selfEmbeddedActivities = EmbeddedActivitiesStore.getSelfEmbeddedActivities();
      const item = selfEmbeddedActivities.forEach((location) => {
        const _location = location.location;
        let obj = embeddedActivityLocationUtils;
        if (guild.id === obj.getEmbeddedActivityLocationGuildId(_location)) {
          obj = { location: _location, applicationId: location.applicationId };
          applyArgumentsResult.leaveActivity(obj);
        }
      });
    };
    applyArgumentsResult.handleChannelDelete = function handleChannelDelete(channel) {
      const selfEmbeddedActivityForChannel = EmbeddedActivitiesStore.getSelfEmbeddedActivityForChannel(channel.channel.id);
      if (null != selfEmbeddedActivityForChannel) {
        const obj = { location: null, applicationId: null };
        ({ location: obj.location, applicationId: obj.applicationId } = selfEmbeddedActivityForChannel);
        applyArgumentsResult.leaveActivity(obj);
      }
    };
    applyArgumentsResult.handleInteractionQueue = function handleInteractionQueue(arg0) {
      ({ nonce, data } = arg0);
      if (null == dependencyMap2[data.applicationId]) {
        if (data.interactionType === applyArgumentsResult(1894).InteractionTypes.APPLICATION_COMMAND) {
          const items = [AnalyticsLocationDefault.INTERACTION_APPLICATION_COMMAND];
          let tmp2 = items;
        } else if (data.interactionType === applyArgumentsResult(1894).InteractionTypes.MESSAGE_COMPONENT) {
          const items1 = [AnalyticsLocationDefault.INTERACTION_MESSAGE_COMPONENT];
          tmp2 = items1;
        } else if (data.interactionType === applyArgumentsResult(1894).InteractionTypes.MODAL_SUBMIT) {
          const items2 = [AnalyticsLocationDefault.INTERACTION_MODAL_SUBMIT];
          tmp2 = items2;
        }
        let obj = { applicationId: data.applicationId, nonce, locations: tmp2 };
        ({ locations, source } = obj);
        let flag = null != locations;
        ({ applicationId, nonce: nonce2 } = obj);
        if (!flag) {
          flag = null != source;
        }
        if (flag) {
          obj = { nonce: nonce2, locations, source };
          tmp[applicationId] = obj;
          flag = true;
        }
        if (flag) {
          dependencyMap3[nonce] = data.applicationId;
        }
      }
    };
    applyArgumentsResult.handleInteractionCreate = function handleInteractionCreate(nonce) {
      nonce = nonce.nonce;
      if (null != nonce) {
        if (null != dependencyMap3[nonce]) {
          if (null != dependencyMap2[tmp3]) {
            tmp5.interactionId = tmp;
          }
        }
      }
    };
    applyArgumentsResult.handleInteractionSuccess = function handleInteractionSuccess(nonce) {
      nonce = nonce.nonce;
      if (null != nonce) {
        if (null != dependencyMap3[nonce]) {
          delete tmp[tmp2];
          closure_0 = tmp4;
          const _setTimeout = setTimeout;
          const timerId = setTimeout(() => {
            let tmp5;
            if (null != dependencyMap2[closure_0]) {
              if (tmp4.nonce === tmp3) {
                delete tmp[tmp2];
                tmp5 = tmp4;
              }
            }
            return tmp5;
          }, 2000);
        }
      }
    };
    applyArgumentsResult.handleInteractionFailure = function handleInteractionFailure(nonce) {
      nonce = nonce.nonce;
      if (null != nonce) {
        if (null != dependencyMap3[nonce]) {
          delete tmp3[tmp4];
          if (null != dependencyMap2[tmp6]) {
            if (tmp8.nonce === nonce) {
              delete tmp[tmp2];
            }
          }
        }
      }
    };
    return applyArgumentsResult;
  }
}
const prototype = EmbeddedActivitiesManager.prototype;
prototype["_initialize"] = function _initialize() {
  SelectedChannelStore.addChangeListener(this.handleSelectedChannelUpdate);
  const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
  const subscription = ComponentDispatch.subscribe(constants4.RELEASE_ACTIVITY_WEB_VIEW, this.handleActivityWebViewRelease);
  const ComponentDispatch2 = ComponentDispatchUtils.ComponentDispatch;
  const subscription1 = ComponentDispatch2.subscribe(constants4.OPEN_EMBEDDED_ACTIVITY, handleOpenEmbeddedActivity);
  const subscription2 = DispatcherDefault.subscribe("EMBEDDED_ACTIVITY_LAUNCH_START", handleActivityLaunchStart);
  const subscription3 = DispatcherDefault.subscribe("EMBEDDED_ACTIVITY_LAUNCH_SUCCESS", this.handleActivityLaunchSuccess);
  const subscription4 = DispatcherDefault.subscribe("EMBEDDED_ACTIVITY_LAUNCH_FAIL", this.handleActivityLaunchFail);
  const subscription5 = DispatcherDefault.subscribe("EMBEDDED_ACTIVITY_LAUNCH_CANCEL", this.handleActivityLaunchCancel);
  const subscription6 = DispatcherDefault.subscribe("EMBEDDED_ACTIVITY_CLOSE", handleActivityClose);
  const subscription7 = DispatcherDefault.subscribe("EMBEDDED_ACTIVITY_DEFERRED_OPEN", this.handleDeferredOpen);
  const subscription8 = DispatcherDefault.subscribe("RPC_APP_DISCONNECTED", this.handleRPCDisconnect);
  const subscription9 = DispatcherDefault.subscribe("CALL_DELETE", this.handleCallDelete);
  const subscription10 = DispatcherDefault.subscribe("RTC_CONNECTION_STATE", this.handleRTCConnectionState);
  const subscription11 = DispatcherDefault.subscribe("GUILD_DELETE", this.handleGuildDelete);
  const subscription12 = DispatcherDefault.subscribe("CHANNEL_DELETE", this.handleChannelDelete);
  const subscription13 = DispatcherDefault.subscribe("INTERACTION_QUEUE", this.handleInteractionQueue);
  const subscription14 = DispatcherDefault.subscribe("INTERACTION_CREATE", this.handleInteractionCreate);
  const subscription15 = DispatcherDefault.subscribe("INTERACTION_SUCCESS", this.handleInteractionSuccess);
  const subscription16 = DispatcherDefault.subscribe("INTERACTION_FAILURE", this.handleInteractionFailure);
};
prototype["_terminate"] = function _terminate() {
  SelectedChannelStore.removeChangeListener(this.handleSelectedChannelUpdate);
  const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
  ComponentDispatch.unsubscribe(constants4.RELEASE_ACTIVITY_WEB_VIEW, this.handleActivityWebViewRelease);
  const ComponentDispatch2 = ComponentDispatchUtils.ComponentDispatch;
  ComponentDispatch2.unsubscribe(constants4.OPEN_EMBEDDED_ACTIVITY, handleOpenEmbeddedActivity);
  DispatcherDefault.unsubscribe("EMBEDDED_ACTIVITY_LAUNCH_START", handleActivityLaunchStart);
  DispatcherDefault.unsubscribe("EMBEDDED_ACTIVITY_LAUNCH_SUCCESS", this.handleActivityLaunchSuccess);
  DispatcherDefault.unsubscribe("EMBEDDED_ACTIVITY_LAUNCH_FAIL", this.handleActivityLaunchFail);
  DispatcherDefault.unsubscribe("EMBEDDED_ACTIVITY_LAUNCH_CANCEL", this.handleActivityLaunchCancel);
  DispatcherDefault.unsubscribe("EMBEDDED_ACTIVITY_CLOSE", handleActivityClose);
  DispatcherDefault.unsubscribe("EMBEDDED_ACTIVITY_DEFERRED_OPEN", this.handleDeferredOpen);
  DispatcherDefault.unsubscribe("RPC_APP_DISCONNECTED", this.handleRPCDisconnect);
  DispatcherDefault.unsubscribe("CALL_DELETE", this.handleCallDelete);
  DispatcherDefault.unsubscribe("RTC_CONNECTION_STATE", this.handleRTCConnectionState);
  DispatcherDefault.unsubscribe("GUILD_DELETE", this.handleGuildDelete);
  DispatcherDefault.unsubscribe("CHANNEL_DELETE", this.handleChannelDelete);
  DispatcherDefault.unsubscribe("INTERACTION_QUEUE", this.handleInteractionQueue);
  DispatcherDefault.unsubscribe("INTERACTION_CREATE", this.handleInteractionCreate);
  DispatcherDefault.unsubscribe("INTERACTION_SUCCESS", this.handleInteractionSuccess);
  DispatcherDefault.unsubscribe("INTERACTION_FAILURE", this.handleInteractionFailure);
};
let size = fn(2);
let result = size.fileFinishedImporting("modules/activities/EmbeddedActivitiesManager.tsx");

export default EmbeddedActivitiesManager;
export const trackFrameSessionStart = function trackFrameSessionStart(applicationId, analyticsContext) {
  closure_0 = applicationId;
  let result = analyticsContext;
  let obj = pendingFrameLaunch;
  if (analyticsContext == null) {
    result = obj.consumePendingFrameLaunch(applicationId);
  }
  if (null != result) {
    ({ isStart, channelId, launchId, compositeInstanceId, activitiesInfraVersion } = result);
    const currentUser = UserStore.getCurrentUser();
    if (null != currentUser) {
      let channel = null;
      if (null != channelId) {
        channel = ChannelStore.getChannel(channelId);
      }
      let guildId = result.guildId;
      if (guildId == null) {
        let guildId1;
        if (channel != null) {
          guildId1 = channel.getGuildId();
        }
        guildId = guildId1;
      }
      if (guildId == null) {
        guildId = null;
      }
      const locationKind = result.locationKind;
      if (locationKind == null) {
        if (null != channel) {
          if (null != guildId) {
            let PRIVATE_CHANNEL = EmbeddedActivityLocationKind.EmbeddedActivityLocationKind.GUILD_CHANNEL;
          } else {
            PRIVATE_CHANNEL = EmbeddedActivityLocationKind.EmbeddedActivityLocationKind.PRIVATE_CHANNEL;
          }
        }
      }
      const mediaSessionId = RTCConnectionStore.getMediaSessionId();
      if (null != mediaSessionId) {
        const items = [mediaSessionId];
        let items1 = items;
      } else {
        items1 = [];
      }
      let tmp2Result = v1;
      const v4Result = tmp2Result.v4();
      obj = { activitySessionId: compositeInstanceId, activityUserSessionId: v4Result, launchId, mediaSessionIds: items1, activitiesInfraVersion, connectedSince: null, frameChannelId: null, frameGuildId: null, frameLocationKind: null };
      const _Date = Date;
      obj.connectedSince = Date.now();
      obj.frameChannelId = channelId;
      obj.frameGuildId = guildId;
      obj.frameLocationKind = locationKind;
      closure_18[applicationId] = obj;
      const shelfActivities = EmbeddedActivitiesStore.getShelfActivities(guildId);
      const shelfOrder = ActivityShelfStore.getState().shelfOrder;
      obj = { applicationId, activityConfigs: shelfActivities };
      const tmp18 = getShelfItemDataDefault(obj);
      const sum = 1 + shelfOrder.findIndex((item) => item === closure_0);
      let release_phase;
      if (tmp18 != null) {
        const activity = tmp18.activity;
        if (activity != null) {
          let tmp17Result = getPlatformDefault;
          tmp2Result = PlatformUtils;
          release_phase = activity.client_platform_config[tmp17Result(undefined, tmp2Result.getOS(tmp2Result))].release_phase;
        }
      }
      tmp17Result = ThermalUtilsDefault;
      const rawThermalState = tmp17Result.getRawThermalState();
      let analyticsLocations = result.analyticsLocations;
      if (analyticsLocations == null) {
        let locations;
        if (tmp24 != null) {
          locations = tmp24.locations;
        }
        analyticsLocations = locations;
      }
      let source = result.source;
      if (source == null) {
        source = undefined;
        if (tmp24 != null) {
          source = tmp24.source;
        }
      }
      let interactionId = result.interactionId;
      if (interactionId == null) {
        interactionId = undefined;
        if (tmp24 != null) {
          interactionId = tmp24.interactionId;
        }
      }
      const obj1 = { channel_id: channelId, guild_id: guildId, media_session_id: items1[0], activity_session_id: compositeInstanceId, application_id: applicationId, location_stack: analyticsLocations, user_premium_tier: currentUser.premiumType, raw_thermal_state: rawThermalState, n_participants: null, is_activity_start: null, release_phase: null, shelf_rank: null, shelf_sorted_rank: null, activity_user_session_id: null, channel_type: null, source: null, command_context_type: null, invite_inviter_id: null, interaction_id: null, embedded_activity_location_kind: null };
      let userParticipantCount = null;
      if (null != channel) {
        userParticipantCount = ChannelRTCStore.getUserParticipantCount(channel.id);
      }
      obj1.n_participants = userParticipantCount;
      obj1.is_activity_start = isStart;
      obj1.release_phase = release_phase;
      let shelf_rank;
      if (tmp18 != null) {
        const activity2 = tmp18.activity;
        if (activity2 != null) {
          shelf_rank = activity2.shelf_rank;
        }
      }
      obj1.shelf_rank = shelf_rank;
      let tmp33 = null;
      if (sum > 0) {
        tmp33 = sum;
      }
      obj1.shelf_sorted_rank = tmp33;
      obj1.activity_user_session_id = v4Result;
      let type;
      if (channel != null) {
        type = channel.type;
      }
      obj1.channel_type = type;
      obj1.source = source;
      let commandContextType = null;
      if (null != channel) {
        commandContextType = CommandPermissionContext.computeCommandContextType(channel, applicationId);
        const tmp2Result1 = CommandPermissionContext;
      }
      obj1.command_context_type = commandContextType;
      obj1.invite_inviter_id = result.inviterUserId;
      obj1.interaction_id = interactionId;
      obj1.embedded_activity_location_kind = locationKind;
      AnalyticsUtilsDefault.track(constants.ACTIVITY_SESSION_JOINED, obj1);
      const tmp17Result1 = AnalyticsUtilsDefault;
      const obj2 = { location_stack: analyticsLocations, channel_id: channelId, channel_type: null, guild_id: null, application_id: null, instance_id: null, initial_media_session_id: null, activity_user_session_id: null, raw_thermal_state: null, is_activity_start: null, shelf_rank: null, shelf_sorted_rank: null, activities_infra_version: null, embedded_activity_location_kind: null };
      let type1;
      if (channel != null) {
        type1 = channel.type;
      }
      obj2.channel_type = type1;
      obj2.guild_id = guildId;
      obj2.application_id = applicationId;
      obj2.instance_id = launchId;
      obj2.initial_media_session_id = items1[0];
      obj2.activity_user_session_id = v4Result;
      obj2.raw_thermal_state = rawThermalState;
      obj2.is_activity_start = isStart;
      let shelf_rank1;
      if (tmp18 != null) {
        const activity3 = tmp18.activity;
        if (activity3 != null) {
          shelf_rank1 = activity3.shelf_rank;
        }
      }
      obj2.shelf_rank = shelf_rank1;
      let tmp39 = null;
      if (sum > 0) {
        tmp39 = sum;
      }
      obj2.shelf_sorted_rank = tmp39;
      obj2.activities_infra_version = activitiesInfraVersion;
      obj2.embedded_activity_location_kind = locationKind;
      AnalyticsUtilsDefault.track(constants.ACTIVITY_IFRAME_MOUNT, obj2);
      const tmp17Result2 = AnalyticsUtilsDefault;
    }
  }
};
export const getActiveAnalyticsSessionIDs = function getActiveAnalyticsSessionIDs(id) {
  return dependencyMap[id];
};
export const trackFrameSessionEnd = function trackFrameSessionEnd(applicationId) {
  const currentUser = UserStore.getCurrentUser();
  if (null != dependencyMap[applicationId]) {
    if (null != currentUser) {
      let frameChannelId = tmp3.frameChannelId;
      if (frameChannelId == null) {
        frameChannelId = null;
      }
      let frameGuildId = tmp3.frameGuildId;
      if (frameGuildId == null) {
        frameGuildId = null;
      }
      let channel = null;
      if (null != frameChannelId) {
        channel = ChannelStore.getChannel(frameChannelId);
      }
      const shelfActivities = EmbeddedActivitiesStore.getShelfActivities(frameGuildId);
      let obj = { applicationId, activityConfigs: shelfActivities };
      const tmp13 = getShelfItemDataDefault(obj);
      let release_phase;
      if (tmp13 != null) {
        const activity = tmp13.activity;
        if (activity != null) {
          let tmp11Result = getPlatformDefault;
          const obj2 = PlatformUtils;
          release_phase = activity.client_platform_config[tmp11Result(undefined, obj2.getOS(obj2))].release_phase;
        }
      }
      tmp11Result = ThermalUtilsDefault;
      const rawThermalState = tmp11Result.getRawThermalState();
      let diff = null;
      if (null != tmp3.connectedSince) {
        const _Date = Date;
        diff = Date.now() - tmp3.connectedSince;
      }
      obj = { channel_id: frameChannelId, guild_id: frameGuildId, media_session_id: tmp3.mediaSessionIds[0], activity_session_id: tmp3.activitySessionId, application_id: applicationId, duration_ms: diff, user_premium_tier: currentUser.premiumType, raw_thermal_state: rawThermalState, release_phase, shelf_rank: null, activity_user_session_id: null, channel_type: null, media_session_ids: null, embedded_activity_location_kind: null };
      let shelf_rank;
      if (tmp13 != null) {
        const activity2 = tmp13.activity;
        if (activity2 != null) {
          shelf_rank = activity2.shelf_rank;
        }
      }
      obj.shelf_rank = shelf_rank;
      obj.activity_user_session_id = tmp3.activityUserSessionId;
      let type;
      if (channel != null) {
        type = channel.type;
      }
      obj.channel_type = type;
      ({ mediaSessionIds: obj5.media_session_ids, frameLocationKind: obj5.embedded_activity_location_kind } = tmp3);
      AnalyticsUtilsDefault.track(constants.ACTIVITY_SESSION_LEFT, obj);
      const tmp11Result1 = AnalyticsUtilsDefault;
      obj = { channel_id: frameChannelId, guild_id: frameGuildId, application_id: applicationId, instance_ids: null, media_session_ids: null, activity_user_session_id: null, raw_thermal_state: null, duration_ms: null, embedded_activity_location_kind: null };
      let tmp24;
      if (null != tmp3.launchId) {
        const items = [tmp3.launchId];
        tmp24 = items;
      }
      obj.instance_ids = tmp24;
      ({ mediaSessionIds: obj7.media_session_ids, activityUserSessionId: obj7.activity_user_session_id } = tmp3);
      obj.raw_thermal_state = rawThermalState;
      obj.duration_ms = diff;
      obj.embedded_activity_location_kind = tmp3.frameLocationKind;
      AnalyticsUtilsDefault.track(constants.ACTIVITY_IFRAME_UNMOUNT, obj);
      delete tmp[tmp2];
      const tmp11Result2 = AnalyticsUtilsDefault;
    }
  }
};