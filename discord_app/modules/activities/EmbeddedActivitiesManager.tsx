// === Module 15836: EmbeddedActivitiesManager ===

// Module 15836 (EmbeddedActivitiesManager)
import DispatcherDefault from "Dispatcher" /* 584 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1120 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1264 */;
import v1 from "v1" /* 1278 */;
import StringUtils from "StringUtils" /* 2030 */;
import embeddedActivityLocationUtils from "embeddedActivityLocationUtils" /* 4893 */;
import getURLForApplication from "getURLForApplication" /* 5624 */;
import isVoiceEmbeddedActivityDefault from "isVoiceEmbeddedActivity" /* 5630 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 5711 */;
import ThermalUtilsDefault from "ThermalUtils" /* 5905 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7280 */;
import CommandPermissionContext from "CommandPermissionContext" /* 9657 */;
import FramesActionCreatorsDefault from "FramesActionCreators" /* 10770 */;
import canLaunchContextlessFrame from "canLaunchContextlessFrame" /* 11398 */;
import tryLaunchAsFrame from "tryLaunchAsFrame" /* 11400 */;
import pendingFrameLaunch from "pendingFrameLaunch" /* 11404 */;
import getShelfItemDataDefault from "getShelfItemData" /* 11412 */;
import ActivitySessionAnalytics from "ActivitySessionAnalytics" /* 15756 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import ApplicationStore from "ApplicationStore" /* 2042 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6773 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 4824 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5715 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4875 */;
import UserStore from "UserStore" /* 1389 */;
import ActivityShelfStore from "ActivityShelfStore" /* 15757 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 4823 */;
import LifecycleManager from "LifecycleManager" /* 2001 */;

require = fn;
function clearAwaitingAnalyticsContextImmediate(arg0, arg1) {
  const tmp5 = ActivitySessionAnalytics.awaitingAnalyticsContext[arg0];
  if (null != tmp5) {
    if (tmp5.nonce === arg1) {
      const awaitingAnalyticsContext = ActivitySessionAnalytics.awaitingAnalyticsContext;
      delete tmp[tmp2];
      return tmp5;
    }
  }
}
function handleActivityLaunchStart(arg0) {
  ({ analyticsLocations, source } = arg0);
  ({ applicationId, nonce } = arg0);
  if (tmp) {
    const obj = { nonce, locations: analyticsLocations, source };
    ActivitySessionAnalytics.awaitingAnalyticsContext[applicationId] = obj;
  }
  tmp = null != analyticsLocations || null != source;
}
function handleActivityClose() {
  const self = this;
  const apply = closure_23.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_23 = async function _handleActivityClose(arg0) {
  if (1 === tmp6) {
    if (arg0 === 1) {
      c4 = 3;
      throw value;
    } else if (arg0 === 2) {
      c4 = 3;
      return { value, done: true };
    } else {
      const embeddedActivityDurationMs = closure_130_13.getEmbeddedActivityDurationMs(closure_129_1.id, closure_129_0);
      const sessionId = closure_130_7.getSessionId();
      let tmp9 = null != closure_129_2;
      if (tmp9) {
        tmp9 = null != sessionId;
      }
      if (tmp9) {
        const HTTP = closure_130_0(closure_130_2[13]).HTTP;
        const request = { url: closure_130_16.ACTIVITY_LEAVE(closure_129_0, closure_129_1.id, closure_129_2), body: null, retries: 2, rejectWithError: false };
        request.body = { session_id: sessionId };
        c3 = 2;
        c4 = 1;
        return { value: HTTP.post(request), done: false };
      }
    }
  } else if (arg0 === 1) {
    c4 = 3;
    throw value;
  } else if (arg0 === 2) {
    c4 = 3;
    return { value, done: true };
  }
  closure_129_5 = closure_130_0(closure_130_2[12]).activeSessionIds[closure_129_0];
  const embeddedActivityLocationChannelId = closure_130_0(closure_130_2[14]).getEmbeddedActivityLocationChannelId(closure_129_1);
  closure_130_0(closure_130_2[14]);
  const embeddedActivityLocationGuildId = closure_130_0(closure_130_2[14]).getEmbeddedActivityLocationGuildId(closure_129_1);
  const channel = closure_130_8.getChannel(embeddedActivityLocationChannelId);
  const currentUser = closure_130_11.getCurrentUser();
  if (null != closure_129_5) {
    if (null != currentUser) {
      if (null == closure_129_5.connectedSince) {
        const shelfActivities = closure_130_13.getShelfActivities(embeddedActivityLocationGuildId);
        closure_129_11 = closure_130_1(closure_130_2[15])({ applicationId: closure_129_0, activityConfigs: shelfActivities });
        const releasePhase = closure_130_0(closure_130_2[12]).getShelfItemTrackingProperties(closure_129_11).releasePhase;
        closure_130_0(closure_130_2[12]);
        const rawThermalState = closure_130_1(closure_130_2[16]).getRawThermalState();
        closure_130_1(closure_130_2[16]);
        const obj11 = { channel_id: embeddedActivityLocationChannelId, guild_id: embeddedActivityLocationGuildId, media_session_id: closure_129_5.mediaSessionIds[0], activity_session_id: closure_129_5.activitySessionId, application_id: closure_129_0, duration_ms: embeddedActivityDurationMs, user_premium_tier: currentUser.premiumType, raw_thermal_state: rawThermalState, release_phase: releasePhase, shelf_rank: null, activity_user_session_id: null, channel_type: null, media_session_ids: null, embedded_activity_location_kind: null };
        let shelf_rank;
        if (closure_129_11 != null) {
          const activity = closure_129_11.activity;
          if (activity != null) {
            shelf_rank = activity.shelf_rank;
          }
        }
        obj11.shelf_rank = shelf_rank;
        obj11.activity_user_session_id = closure_129_5.activityUserSessionId;
        let type;
        if (channel != null) {
          type = channel.type;
        }
        obj11.channel_type = type;
        obj11.media_session_ids = closure_129_5.mediaSessionIds;
        obj11.embedded_activity_location_kind = closure_129_1.kind;
        closure_130_1(closure_130_2[17]).track(closure_130_14.ACTIVITY_SESSION_LEFT, obj11);
        closure_130_1(closure_130_2[17]);
        const obj12 = { channel_id: embeddedActivityLocationChannelId, guild_id: embeddedActivityLocationGuildId, application_id: closure_129_0, instance_ids: null, media_session_ids: null, activity_user_session_id: null, raw_thermal_state: null, duration_ms: null, embedded_activity_location_kind: null };
        let tmp42;
        if (null != closure_129_5.launchId) {
          const items = [closure_129_5.launchId];
          tmp42 = items;
        }
        obj12.instance_ids = tmp42;
        obj12.media_session_ids = closure_129_5.mediaSessionIds;
        obj12.activity_user_session_id = closure_129_5.activityUserSessionId;
        obj12.raw_thermal_state = rawThermalState;
        obj12.duration_ms = embeddedActivityDurationMs;
        obj12.embedded_activity_location_kind = closure_129_1.kind;
        closure_130_1(closure_130_2[17]).track(closure_130_14.ACTIVITY_IFRAME_UNMOUNT, obj12);
        const activeSessionIds = closure_130_0(closure_130_2[12]).activeSessionIds;
        delete tmp3[tmp2];
        closure_130_1(closure_130_2[17]);
      }
    }
  }
  await "IconComponent";
  closure_1 = tmp3;
  ({ applicationId: closure_129_0, location: closure_129_1, instanceId: closure_129_2 } = closure_0);
  return "Reflect";
};
function handleOpenEmbeddedActivity(applicationId) {
  applicationId = applicationId.applicationId;
  ({ isStart, participants, embeddedActivity, location: _location, inviterUserId } = applicationId);
  if (true !== embeddedActivity.renderInFramePool) {
    FramesActionCreatorsDefault.clearMainFrameSlot();
  }
  const result = canLaunchContextlessFrame.canLaunchContextlessFrame(ApplicationStore.getApplication(applicationId));
  if (obj3.tryLaunchAsFrame({ applicationId })) {
    if (result) {
      const obj4 = { isStart, inviterUserId, channelId: null, guildId: null, locationKind: null, launchId: null, compositeInstanceId: null, activitiesInfraVersion: null };
      const tmp4Result = pendingFrameLaunch;
      obj4.channelId = embeddedActivityLocationUtils.getEmbeddedActivityLocationChannelId(_location);
      const tmp4Result9 = embeddedActivityLocationUtils;
      obj4.guildId = embeddedActivityLocationUtils.getEmbeddedActivityLocationGuildId(_location);
      obj4.locationKind = _location.kind;
      ({ launchId: obj17.launchId, compositeInstanceId: obj17.compositeInstanceId } = embeddedActivity);
      let num4 = 1;
      if ("location" in embeddedActivity) {
        num4 = 2;
      }
      obj4.activitiesInfraVersion = num4;
      const result1 = tmp4Result.stashPendingFrameLaunch(applicationId, obj4);
      const tmp4Result10 = embeddedActivityLocationUtils;
    }
  } else {
    const id = AuthenticationStore.getId();
    const found = participants.find((userId) => userId.userId === closure_1);
    const embeddedActivityLocationChannelId = embeddedActivityLocationUtils.getEmbeddedActivityLocationChannelId(_location);
    const tmp4Result11 = embeddedActivityLocationUtils;
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
      let tmp19 = null == mediaSessionId;
      if (tmp19) {
        let isVocalResult;
        if (channel != null) {
          isVocalResult = channel.isVocal();
        }
        tmp19 = true === isVocalResult;
      }
      if (tmp19) {
        let isPrivateResult;
        if (channel != null) {
          isPrivateResult = channel.isPrivate();
        }
        tmp19 = false === isPrivateResult;
      }
      if (null != compositeInstanceId) {
        if (!tmp19) {
          const v4Result = v1.v4();
          let num2 = 1;
          if ("location" in embeddedActivity) {
            num2 = 2;
          }
          const currentUser = UserStore.getCurrentUser();
          if (null != currentUser) {
            const shelfActivities = EmbeddedActivitiesStore.getShelfActivities(embeddedActivityLocationGuildId);
            const shelfOrder = ActivityShelfStore.getState().shelfOrder;
            const obj5 = { applicationId, activityConfigs: shelfActivities };
            const tmp51 = getShelfItemDataDefault(obj5);
            const sum = 1 + shelfOrder.findIndex((item) => item === applicationId);
            const tmp4Result14 = ActivitySessionAnalytics;
            const rawThermalState = ThermalUtilsDefault.getRawThermalState();
            if (null != mediaSessionId) {
              const items = [mediaSessionId];
              let items1 = items;
            } else {
              items1 = [];
            }
            const obj6 = { activitySessionId: compositeInstanceId, activityUserSessionId: v4Result, launchId: embeddedActivity.launchId, mediaSessionIds: items1, activitiesInfraVersion: num2 };
            ActivitySessionAnalytics.activeSessionIds[applicationId] = obj6;
            const tmp24 = ActivitySessionAnalytics.awaitingAnalyticsContext[applicationId];
            let isNullOrEmptyResult = StringUtils.isNullOrEmpty(found.nonce);
            if (!isNullOrEmptyResult) {
              let nonce;
              if (tmp24 != null) {
                nonce = tmp24.nonce;
              }
              isNullOrEmptyResult = found.nonce === nonce;
            }
            const tmp4Result15 = StringUtils;
            const obj8 = { channel_id: embeddedActivityLocationChannelId, guild_id: embeddedActivityLocationGuildId, media_session_id: items1[0], activity_session_id: compositeInstanceId, application_id: applicationId, location_stack: null, user_premium_tier: null, raw_thermal_state: null, n_participants: null, is_activity_start: null, release_phase: null, shelf_rank: null, shelf_sorted_rank: null, activity_user_session_id: null, channel_type: null, source: null, command_context_type: null, invite_inviter_id: null, interaction_id: null, embedded_activity_location_kind: null };
            let locations;
            if (tmp24 != null) {
              locations = tmp24.locations;
            }
            obj8.location_stack = locations;
            obj8.user_premium_tier = currentUser.premiumType;
            obj8.raw_thermal_state = rawThermalState;
            let userParticipantCount = null;
            if (null != channel) {
              userParticipantCount = ChannelRTCStore.getUserParticipantCount(channel.id);
            }
            obj8.n_participants = userParticipantCount;
            obj8.is_activity_start = isStart;
            obj8.release_phase = tmp4Result14.getShelfItemTrackingProperties(tmp51).releasePhase;
            let shelf_rank;
            if (tmp51 != null) {
              const activity = tmp51.activity;
              if (activity != null) {
                shelf_rank = activity.shelf_rank;
              }
            }
            obj8.shelf_rank = shelf_rank;
            let tmp33 = null;
            if (sum > 0) {
              tmp33 = sum;
            }
            obj8.shelf_sorted_rank = tmp33;
            obj8.activity_user_session_id = v4Result;
            let type;
            if (channel != null) {
              type = channel.type;
            }
            obj8.channel_type = type;
            let source;
            if (tmp24 != null) {
              source = tmp24.source;
            }
            obj8.source = source;
            let commandContextType = null;
            if (null != channel) {
              commandContextType = CommandPermissionContext.computeCommandContextType(channel, applicationId);
              const tmp4Result16 = CommandPermissionContext;
            }
            obj8.command_context_type = commandContextType;
            obj8.invite_inviter_id = inviterUserId;
            let interactionId;
            if (tmp24 != null) {
              interactionId = tmp24.interactionId;
            }
            obj8.interaction_id = interactionId;
            obj8.embedded_activity_location_kind = _location.kind;
            AnalyticsUtilsDefault.track(constants.ACTIVITY_SESSION_JOINED, obj8);
            const tmp50Result = AnalyticsUtilsDefault;
            let locations1;
            if (tmp24 != null) {
              locations1 = tmp24.locations;
            }
            const obj9 = { location_stack: locations1, channel_id: embeddedActivityLocationChannelId, channel_type: null, guild_id: null, application_id: null, instance_id: null, initial_media_session_id: null, activity_user_session_id: null, raw_thermal_state: null, is_activity_start: null, shelf_rank: null, shelf_sorted_rank: null, activities_infra_version: null, embedded_activity_location_kind: null };
            let type1;
            if (channel != null) {
              type1 = channel.type;
            }
            obj9.channel_type = type1;
            obj9.guild_id = embeddedActivityLocationGuildId;
            obj9.application_id = applicationId;
            obj9.instance_id = embeddedActivity.launchId;
            obj9.initial_media_session_id = items1[0];
            obj9.activity_user_session_id = v4Result;
            obj9.raw_thermal_state = rawThermalState;
            obj9.is_activity_start = isStart;
            let shelf_rank1;
            if (tmp51 != null) {
              const activity2 = tmp51.activity;
              if (activity2 != null) {
                shelf_rank1 = activity2.shelf_rank;
              }
            }
            obj9.shelf_rank = shelf_rank1;
            let tmp42 = null;
            if (sum > 0) {
              tmp42 = sum;
            }
            obj9.shelf_sorted_rank = tmp42;
            obj9.activities_infra_version = num2;
            obj9.embedded_activity_location_kind = _location.kind;
            AnalyticsUtilsDefault.track(constants.ACTIVITY_IFRAME_MOUNT, obj9);
            const tmp50Result2 = AnalyticsUtilsDefault;
          }
          const tmp4Result13 = v1;
        }
      }
    }
    const tmp4Result12 = embeddedActivityLocationUtils;
  }
  obj3 = tryLaunchAsFrame;
}
const GUILD_VOCAL_CHANNEL_TYPES = fn(4828).GUILD_VOCAL_CHANNEL_TYPES;
const Constants = fn(1084);
({ AnalyticEvents: closure_14, RPCCloseCodes: closure_15, Endpoints: closure_16, RTCConnectionStates: closure_17, ComponentActions: closure_18 } = Constants);
let closure_19 = {};
let c25;
class EmbeddedActivitiesManager extends tmp3 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    applyArgumentsResult.handleLeave = function handleLeave(location) {
      applyArgumentsResult.leaveActivity({ location: location.location, applicationId: location.applicationId, showFeedback: location.showFeedback, shouldClosePopout: location.shouldClosePopout });
    };
    applyArgumentsResult.handleSelectedChannelUpdate = function handleSelectedChannelUpdate() {
      voiceChannelId = voiceChannelId.getVoiceChannelId();
      const selfEmbeddedActivities = EmbeddedActivitiesStore.getSelfEmbeddedActivities();
      const values = selfEmbeddedActivities.values();
      const iter = values[Symbol.iterator]();
      while (iter !== undefined) {
        ({ location: _location, applicationId } = nextResult);
        let obj2 = applyArgumentsResult(4893);
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
            const selfEmbeddedActivityForChannel = EmbeddedActivitiesStore.getSelfEmbeddedActivityForChannel(embeddedActivityLocationUtils.getEmbeddedActivityLocationChannelId(userIds.location));
            if (null == selfEmbeddedActivityForChannel) {
              ({ location: obj3.location, applicationId: obj3.applicationId } = userIds);
              applyArgumentsResult.leaveActivity({ location: null, applicationId: null });
              const obj5 = { location: null, applicationId: null };
            } else if (null == c25) {
              ({ location: obj2.location, applicationId: obj2.applicationId } = selfEmbeddedActivityForChannel);
              applyArgumentsResult.hidePIPEmbed({ location: null, applicationId: null });
              const obj6 = { location: null, applicationId: null };
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
        const tmp6 = applyArgumentsResult(15756).awaitingAnalyticsContext[closure_0];
        let tmp7;
        if (null != tmp6) {
          if (tmp6.nonce === nonce) {
            const awaitingAnalyticsContext = applyArgumentsResult(15756).awaitingAnalyticsContext;
            delete tmp[tmp2];
            tmp7 = tmp6;
          }
        }
        return tmp7;
      }, 2000);
      if (obj.isUsingDevShelfActivityUrlOverride()) {
        const result = applyArgumentsResult.showDevShelfOverrideEnabled();
      }
      obj = getURLForApplication;
    };
    closure_129_0 = undefined;
    closure_129_0 = closure_3(async (arg0) => {
      closure_130_7 = clearAwaitingAnalyticsContextImmediate(closure_130_4, closure_130_1);
      await closure_0(tmp2[31]).getActivityLaunchErrorInfo(closure_130_0, closure_130_4);
      closure_130_8 = value;
      guildId(tmp2[32])(closure_130_8.message);
      const channel2 = channel.getChannel(closure_130_2);
      const rawThermalState = guildId(tmp2[16]).getRawThermalState();
      guildId(tmp2[16]);
      const obj10 = { channel_id: closure_130_2, guild_id: null, application_id: null, raw_thermal_state: null, is_activity_start: null, channel_type: null, location_stack: null, error_type: null, error_status: null, error_code: null, source: null, embedded_activity_location_kind: null };
      guildId = closure_130_3;
      if (closure_130_3 == null) {
        guildId = undefined;
        if (channel2 != null) {
          guildId = obj.getGuildId();
        }
        obj = channel2;
      }
      obj10.guild_id = guildId;
      obj10.application_id = closure_130_4;
      obj10.raw_thermal_state = rawThermalState;
      obj10.is_activity_start = closure_130_5;
      if (channel2 != null) {
        const type = channel2.type;
      }
      obj10.channel_type = type;
      if (closure_130_7 != null) {
        const locations = closure_130_7.locations;
      }
      obj10.location_stack = locations;
      obj10.error_type = closure_130_8.errorType;
      obj10.error_status = closure_130_8.errorStatus;
      obj10.error_code = closure_130_8.errorCode;
      if (closure_130_7 != null) {
        const source = closure_130_7.source;
      }
      obj10.source = source;
      obj10.embedded_activity_location_kind = closure_130_6;
      guildId(tmp2[17]).track(constants.ACTIVITY_SESSION_JOIN_FAILED, obj10);
      await "IconComponent";
      ({ error: closure_130_0, nonce: closure_130_1, channelId: closure_130_2, guildId: closure_130_3, applicationId: closure_130_4, isStart: closure_130_5, locationKind: closure_130_6 } = applyArgumentsResult);
      return "Reflect";
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
      ({ nonce, applicationId } = arg0);
      const tmp5 = applyArgumentsResult(15756).awaitingAnalyticsContext[applicationId];
      if (null != tmp5) {
        if (tmp5.nonce === nonce) {
          const awaitingAnalyticsContext = applyArgumentsResult(15756).awaitingAnalyticsContext;
          delete tmp[tmp2];
        }
      }
    };
    applyArgumentsResult.handleRPCDisconnect = function handleRPCDisconnect(reason) {
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
            const obj4 = { rpc_close_code: null, rpc_message: null, application_id: null };
            ({ code: obj3.rpc_close_code, message: obj3.rpc_message } = reason);
            obj4.application_id = id;
            AnalyticsUtilsDefault.track(constants.ACTIVITY_CLOSED_RPC_ERROR, obj4);
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
    closure_130_0 = closure_3(async (arg0) => {
      if (set === 2) {
        set = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
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
          set = 2;
          let getChannel = c5;
          if (0 === c5) {
            if (arg0 === 1) {
              set = 3;
              throw value;
            } else if (arg0 === 2) {
              set = 3;
              const obj3 = { value, done: true };
              return obj3;
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
              c5 = 1;
              set = 1;
              return { value: "Reflect", done: true };
            }
          } else {
            if (1 === getChannel) {
              if (arg0 === 1) {
                set = 3;
                throw value;
              } else if (arg0 === 2) {
                set = 3;
                const obj4 = { value, done: true };
                return obj4;
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
                      c5 = 2;
                      set = 1;
                      const obj6 = { value: getChannel(6811).fetchApplication(closure_131_1), done: false };
                      return obj6;
                    }
                  } else {
                    getChannel = voiceChannelId.getVoiceChannelId();
                  }
                }
                set = 3;
              }
            } else if (2 === getChannel) {
              if (arg0 === 1) {
                set = 3;
                throw value;
              } else if (arg0 === 2) {
                set = 3;
                const obj7 = { value, done: true };
                return obj7;
              } else {
                closure_131_7 = value;
                if (!obj26.getIsActivitiesEnabledForCurrentPlatform()) {
                  const intl = applyArgumentsResult(1125).intl;
                  getChannel(10786)(intl.string(applyArgumentsResult(1125).t.UXoQTp));
                  const tmp48 = getChannel(10786);
                }
                obj26 = applyArgumentsResult(11390);
              }
            } else {
              if (3 === getChannel) {
                if (arg0 === 1) {
                  set = 3;
                  throw value;
                } else if (arg0 === 2) {
                  set = 3;
                  const obj9 = { value, done: true };
                  return obj9;
                } else {
                  closure_131_9 = value;
                  activityConfigs = closure_131_9.activityConfigs;
                  applications = closure_131_9.applications;
                  const obj10 = { applicationId: closure_131_1, activityConfigs, applications };
                  if (null == getChannel(11412)(obj10)) {
                    const obj12 = { guildId: closure_131_8, force: true };
                    c5 = 4;
                    set = 1;
                    const obj13 = { value: applyArgumentsResult(11392).fetchShelf(obj12), done: false };
                    return obj13;
                  }
                }
              } else if (4 === getChannel) {
                if (arg0 === 1) {
                  set = 3;
                  throw value;
                } else if (arg0 === 2) {
                  set = 3;
                  const obj14 = { value, done: true };
                  return obj14;
                } else {
                  closure_131_12 = value;
                  const obj17 = { applicationId: closure_131_1, activityConfigs: closure_131_12.activityConfigs, applications: closure_131_12.applications };
                  getChannel(11412)(obj17);
                }
              } else if (5 === getChannel) {
                if (arg0 === 1) {
                  set = 3;
                  throw value;
                } else if (arg0 === 2) {
                  set = 3;
                  const obj18 = { value, done: true };
                  return obj18;
                }
              } else if (arg0 === 1) {
                set = 3;
                throw value;
              } else if (arg0 === 2) {
                set = 3;
                const obj = { value, done: true };
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
                const obj19 = { channelId: closure_131_0, applicationId: closure_131_1, launchId: null, inputApplication: null, analyticsLocations: null, inviterUserId: null };
                let launchId;
                if (closure_131_13 != null) {
                  launchId = closure_131_13.launchId;
                }
                obj19.launchId = launchId;
                obj19.analyticsLocations = closure_131_2;
                obj19.inviterUserId = closure_131_4;
                c5 = 6;
                set = 1;
                const obj21 = { value: applyArgumentsResult(11462).maybeJoinEmbeddedActivity(obj19), done: false };
                return obj21;
              } else {
                const obj22 = { applicationId: closure_131_1, channelId: closure_131_0, analyticsLocations: closure_131_2, commandOrigin: closure_131_3, inviterUserId: closure_131_4 };
                c5 = 5;
                set = 1;
                const obj23 = { value: getChannel(11364).launch(obj22), done: false };
                return obj23;
              }
            }
            let supported_platforms;
            if (closure_131_7 != null) {
              const embedded_activity_config = closure_131_7.embedded_activity_config;
              if (embedded_activity_config != null) {
                supported_platforms = embedded_activity_config.supported_platforms;
              }
            }
            if (tmp58(supported_platforms)) {
              let guildId;
              if (closure_131_5 != null) {
                guildId = closure_131_5.getGuildId();
              }
              getChannel = guildId;
              closure_131_8 = getChannel;
              const obj24 = { guildId: closure_131_8 };
              c5 = 3;
              set = 1;
              const obj25 = { value: applyArgumentsResult(11392).fetchShelf(obj24), done: false };
              return obj25;
            } else {
              const intl2 = applyArgumentsResult(1125).intl;
              getChannel(10786)(intl2.string(applyArgumentsResult(1125).t.uGDCcw));
              const tmp64 = getChannel(10786);
            }
            tmp58 = getChannel(11460);
          }
        } catch (tmp93) {
          set = tmp;
          throw tmp93;
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
        if (guild.id === obj.getEmbeddedActivityLocationGuildId(_location)) {
          const obj2 = { location: _location, applicationId: location.applicationId };
          applyArgumentsResult.leaveActivity(obj2);
        }
        obj = embeddedActivityLocationUtils;
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
      if (null == applyArgumentsResult(15756).awaitingAnalyticsContext[data.applicationId]) {
        if (data.interactionType === applyArgumentsResult(6020).InteractionTypes.APPLICATION_COMMAND) {
          const items = [AnalyticsLocationDefault.INTERACTION_APPLICATION_COMMAND];
          let tmp3 = items;
        } else if (data.interactionType === applyArgumentsResult(6020).InteractionTypes.MESSAGE_COMPONENT) {
          const items1 = [AnalyticsLocationDefault.INTERACTION_MESSAGE_COMPONENT];
          tmp3 = items1;
        } else if (data.interactionType === applyArgumentsResult(6020).InteractionTypes.MODAL_SUBMIT) {
          const items2 = [AnalyticsLocationDefault.INTERACTION_MODAL_SUBMIT];
          tmp3 = items2;
        }
        const obj = { applicationId: data.applicationId, nonce, locations: tmp3 };
        ({ locations, source } = obj);
        let flag = null != locations;
        ({ applicationId, nonce: nonce2 } = obj);
        if (!flag) {
          flag = null != source;
        }
        if (flag) {
          const obj2 = { nonce: nonce2, locations, source };
          applyArgumentsResult(15756).awaitingAnalyticsContext[applicationId] = obj2;
          flag = true;
        }
        if (flag) {
          dependencyMap2[nonce] = data.applicationId;
        }
      }
    };
    applyArgumentsResult.handleInteractionCreate = function handleInteractionCreate(nonce) {
      nonce = nonce.nonce;
      if (null != nonce) {
        if (null != dependencyMap2[nonce]) {
          const tmp6 = applyArgumentsResult(15756).awaitingAnalyticsContext[tmp3];
          if (null != tmp6) {
            tmp6.interactionId = tmp;
          }
        }
      }
    };
    applyArgumentsResult.handleInteractionSuccess = function handleInteractionSuccess(nonce) {
      nonce = nonce.nonce;
      if (null != nonce) {
        if (null != dependencyMap2[nonce]) {
          delete tmp[tmp2];
          closure_0 = tmp4;
          const _setTimeout = setTimeout;
          const timerId = setTimeout(() => {
            const tmp6 = applyArgumentsResult(15756).awaitingAnalyticsContext[closure_0];
            let tmp7;
            if (null != tmp6) {
              if (tmp6.nonce === nonce) {
                const awaitingAnalyticsContext = applyArgumentsResult(15756).awaitingAnalyticsContext;
                delete tmp[tmp2];
                tmp7 = tmp6;
              }
            }
            return tmp7;
          }, 2000);
        }
      }
    };
    applyArgumentsResult.handleInteractionFailure = function handleInteractionFailure(nonce) {
      nonce = nonce.nonce;
      if (null != nonce) {
        if (null != dependencyMap2[nonce]) {
          delete tmp3[tmp4];
          const tmp9 = applyArgumentsResult(15756).awaitingAnalyticsContext[tmp6];
          if (null != tmp9) {
            if (tmp9.nonce === nonce) {
              const awaitingAnalyticsContext = applyArgumentsResult(15756).awaitingAnalyticsContext;
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
  const subscription8 = DispatcherDefault.subscribe("EMBEDDED_ACTIVITY_LEAVE", this.handleLeave);
  const subscription9 = DispatcherDefault.subscribe("RPC_APP_DISCONNECTED", this.handleRPCDisconnect);
  const subscription10 = DispatcherDefault.subscribe("CALL_DELETE", this.handleCallDelete);
  const subscription11 = DispatcherDefault.subscribe("RTC_CONNECTION_STATE", this.handleRTCConnectionState);
  const subscription12 = DispatcherDefault.subscribe("GUILD_DELETE", this.handleGuildDelete);
  const subscription13 = DispatcherDefault.subscribe("CHANNEL_DELETE", this.handleChannelDelete);
  const subscription14 = DispatcherDefault.subscribe("INTERACTION_QUEUE", this.handleInteractionQueue);
  const subscription15 = DispatcherDefault.subscribe("INTERACTION_CREATE", this.handleInteractionCreate);
  const subscription16 = DispatcherDefault.subscribe("INTERACTION_SUCCESS", this.handleInteractionSuccess);
  const subscription17 = DispatcherDefault.subscribe("INTERACTION_FAILURE", this.handleInteractionFailure);
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
  DispatcherDefault.unsubscribe("EMBEDDED_ACTIVITY_LEAVE", this.handleLeave);
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