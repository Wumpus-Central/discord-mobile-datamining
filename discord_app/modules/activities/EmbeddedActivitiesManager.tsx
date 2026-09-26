// === Module 8755: EmbeddedActivitiesManager ===

// Module 8755 (EmbeddedActivitiesManager)
import DispatcherDefault from "Dispatcher" /* 573 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1110 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import v1 from "v1" /* 1255 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import StringUtils from "StringUtils" /* 2011 */;
import embeddedActivityLocationUtils from "embeddedActivityLocationUtils" /* 4458 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 5037 */;
import MonitoringAgentDefault from "MonitoringAgent" /* 5179 */;
import MetricEvents from "MetricEvents" /* 5184 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6603 */;
import ApplicationFlagUtils from "ApplicationFlagUtils" /* 8321 */;
import getURLForApplication from "getURLForApplication" /* 8503 */;
import CommandPermissionContext from "CommandPermissionContext" /* 8596 */;
import getPlatformDefault from "getPlatform" /* 8713 */;
import getShelfItemDataDefault from "getShelfItemData" /* 8757 */;
import ThermalUtilsDefault from "ThermalUtils" /* 8758 */;
import FramesActionCreatorsDefault from "FramesActionCreators" /* 8760 */;
import tryLaunchAsFrame from "tryLaunchAsFrame" /* 8784 */;
import pendingFrameLaunch from "pendingFrameLaunch" /* 8785 */;
import EmbeddedActivityLocationKind from "EmbeddedActivityLocationKind" /* 8786 */;
import isVoiceEmbeddedActivityDefault from "isVoiceEmbeddedActivity" /* 8803 */;
import activityLaunchErrorUtils from "activityLaunchErrorUtils" /* 8811 */;
import QuestMatchingUtils from "QuestMatchingUtils" /* 8813 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import ApplicationStore from "ApplicationStore" /* 5063 */;
import ChannelRTCStore from "ChannelRTCStore" /* 4852 */;
import QuestStore from "QuestStore" /* 7116 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4859 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2099 */;
import UserStore from "UserStore" /* 1372 */;
import ActivityShelfStore from "ActivityShelfStore" /* 8756 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2044 */;
import LifecycleManager from "LifecycleManager" /* 1983 */;

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
    closure_22[applicationId] = obj;
  }
  tmp = null != analyticsLocations || null != source;
}
function handleActivityClose() {
  const self = this;
  const apply = closure_28.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_28 = async function _handleActivityClose(arg0) {
  if (1 === tmp6) {
    if (arg0 === 1) {
      c4 = 3;
      throw value;
    } else if (arg0 === 2) {
      c4 = 3;
      return { value, done: true };
    } else {
      const embeddedActivityDurationMs = closure_130_14.getEmbeddedActivityDurationMs(closure_129_1.id, closure_129_0);
      const sessionId = closure_130_8.getSessionId();
      let tmp9 = null != closure_129_2;
      if (tmp9) {
        tmp9 = null != sessionId;
      }
      if (tmp9) {
        const HTTP = closure_130_0(closure_130_2[15]).HTTP;
        const request = { url: closure_130_17.ACTIVITY_LEAVE(closure_129_0, closure_129_1.id, closure_129_2), body: null, retries: 2, rejectWithError: false };
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
  closure_129_5 = closure_130_21[closure_129_0];
  const embeddedActivityLocationChannelId = closure_130_0(closure_130_2[16]).getEmbeddedActivityLocationChannelId(closure_129_1);
  closure_130_0(closure_130_2[16]);
  const embeddedActivityLocationGuildId = closure_130_0(closure_130_2[16]).getEmbeddedActivityLocationGuildId(closure_129_1);
  const channel = closure_130_9.getChannel(embeddedActivityLocationChannelId);
  const currentUser = closure_130_12.getCurrentUser();
  if (null != closure_129_5) {
    if (null != currentUser) {
      if (null == closure_129_5.connectedSince) {
        const shelfActivities = closure_130_14.getShelfActivities(embeddedActivityLocationGuildId);
        closure_129_11 = closure_130_1(closure_130_2[17])({ applicationId: closure_129_0, activityConfigs: shelfActivities });
        const releasePhase = closure_130_24(closure_129_11).releasePhase;
        const rawThermalState = closure_130_1(closure_130_2[18]).getRawThermalState();
        closure_130_1(closure_130_2[18]);
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
        closure_130_1(closure_130_2[19]).track(closure_130_15.ACTIVITY_SESSION_LEFT, obj11);
        closure_130_1(closure_130_2[19]);
        const obj12 = { channel_id: embeddedActivityLocationChannelId, guild_id: embeddedActivityLocationGuildId, application_id: closure_129_0, instance_ids: null, media_session_ids: null, activity_user_session_id: null, raw_thermal_state: null, duration_ms: null, embedded_activity_location_kind: null };
        let tmp41;
        if (null != closure_129_5.launchId) {
          const items = [closure_129_5.launchId];
          tmp41 = items;
        }
        obj12.instance_ids = tmp41;
        obj12.media_session_ids = closure_129_5.mediaSessionIds;
        obj12.activity_user_session_id = closure_129_5.activityUserSessionId;
        obj12.raw_thermal_state = rawThermalState;
        obj12.duration_ms = embeddedActivityDurationMs;
        obj12.embedded_activity_location_kind = closure_129_1.kind;
        closure_130_1(closure_130_2[19]).track(closure_130_15.ACTIVITY_IFRAME_UNMOUNT, obj12);
        delete tmp3[tmp2];
        closure_130_1(closure_130_2[19]);
      }
    }
  }
  await "HermesInternal";
  closure_1 = tmp3;
  ({ applicationId: closure_129_0, location: closure_129_1, instanceId: closure_129_2 } = closure_0);
  return "flex";
};
function handleOpenEmbeddedActivity(applicationId) {
  applicationId = applicationId.applicationId;
  ({ isStart, participants, embeddedActivity, location: _location, inviterUserId } = applicationId);
  if (true !== embeddedActivity.renderInFramePool) {
    FramesActionCreatorsDefault.clearMainFrameSlot();
  }
  if (obj2.tryLaunchAsFrame({ applicationId })) {
    const obj3 = { isStart, inviterUserId, channelId: null, guildId: null, locationKind: null, launchId: null, compositeInstanceId: null, activitiesInfraVersion: null };
    const tmp4Result = pendingFrameLaunch;
    obj3.channelId = embeddedActivityLocationUtils.getEmbeddedActivityLocationChannelId(_location);
    const tmp4Result9 = embeddedActivityLocationUtils;
    obj3.guildId = embeddedActivityLocationUtils.getEmbeddedActivityLocationGuildId(_location);
    obj3.locationKind = _location.kind;
    ({ launchId: obj18.launchId, compositeInstanceId: obj18.compositeInstanceId } = embeddedActivity);
    let num4 = 1;
    if ("location" in embeddedActivity) {
      num4 = 2;
    }
    obj3.activitiesInfraVersion = num4;
    const result = tmp4Result.stashPendingFrameLaunch(applicationId, obj3);
    const tmp4Result10 = embeddedActivityLocationUtils;
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
            const obj4 = { applicationId, activityConfigs: shelfActivities };
            const tmp55 = getShelfItemDataDefault(obj4);
            const sum = 1 + shelfOrder.findIndex((item) => item === applicationId);
            let release_phase;
            if (tmp55 != null) {
              const activity = tmp55.activity;
              if (activity != null) {
                const tmp4Result14 = PlatformUtils;
                release_phase = activity.client_platform_config[getPlatformDefault(undefined, tmp4Result14.getOS(tmp4Result14))].release_phase;
                const tmp54Result = getPlatformDefault;
              }
            }
            const rawThermalState = ThermalUtilsDefault.getRawThermalState();
            if (null != mediaSessionId) {
              const items = [mediaSessionId];
              let items1 = items;
            } else {
              items1 = [];
            }
            const obj5 = { activitySessionId: compositeInstanceId, activityUserSessionId: v4Result, launchId: embeddedActivity.launchId, mediaSessionIds: items1, activitiesInfraVersion: num2 };
            closure_21[applicationId] = obj5;
            const tmp54Result4 = ThermalUtilsDefault;
            let isNullOrEmptyResult = StringUtils.isNullOrEmpty(found.nonce);
            if (!isNullOrEmptyResult) {
              let nonce;
              if (tmp28 != null) {
                nonce = tmp28.nonce;
              }
              isNullOrEmptyResult = found.nonce === nonce;
            }
            const tmp4Result15 = StringUtils;
            const obj7 = { channel_id: embeddedActivityLocationChannelId, guild_id: embeddedActivityLocationGuildId, media_session_id: items1[0], activity_session_id: compositeInstanceId, application_id: applicationId, location_stack: null, user_premium_tier: null, raw_thermal_state: null, n_participants: null, is_activity_start: null, release_phase: null, shelf_rank: null, shelf_sorted_rank: null, activity_user_session_id: null, channel_type: null, source: null, command_context_type: null, invite_inviter_id: null, interaction_id: null, embedded_activity_location_kind: null };
            let locations;
            if (dependencyMap2[applicationId] != null) {
              locations = tmp28.locations;
            }
            obj7.location_stack = locations;
            obj7.user_premium_tier = currentUser.premiumType;
            obj7.raw_thermal_state = rawThermalState;
            let userParticipantCount = null;
            if (null != channel) {
              userParticipantCount = ChannelRTCStore.getUserParticipantCount(channel.id);
            }
            obj7.n_participants = userParticipantCount;
            obj7.is_activity_start = isStart;
            obj7.release_phase = release_phase;
            let shelf_rank;
            if (tmp55 != null) {
              const activity2 = tmp55.activity;
              if (activity2 != null) {
                shelf_rank = activity2.shelf_rank;
              }
            }
            obj7.shelf_rank = shelf_rank;
            let tmp37 = null;
            if (sum > 0) {
              tmp37 = sum;
            }
            obj7.shelf_sorted_rank = tmp37;
            obj7.activity_user_session_id = v4Result;
            let type;
            if (channel != null) {
              type = channel.type;
            }
            obj7.channel_type = type;
            let source;
            if (dependencyMap2[applicationId] != null) {
              source = tmp28.source;
            }
            obj7.source = source;
            let commandContextType = null;
            if (null != channel) {
              commandContextType = CommandPermissionContext.computeCommandContextType(channel, applicationId);
              const tmp4Result16 = CommandPermissionContext;
            }
            obj7.command_context_type = commandContextType;
            obj7.invite_inviter_id = inviterUserId;
            let interactionId;
            if (dependencyMap2[applicationId] != null) {
              interactionId = tmp28.interactionId;
            }
            obj7.interaction_id = interactionId;
            obj7.embedded_activity_location_kind = _location.kind;
            AnalyticsUtilsDefault.track(constants.ACTIVITY_SESSION_JOINED, obj7);
            const tmp54Result5 = AnalyticsUtilsDefault;
            let locations1;
            if (dependencyMap2[applicationId] != null) {
              locations1 = tmp28.locations;
            }
            const obj8 = { location_stack: locations1, channel_id: embeddedActivityLocationChannelId, channel_type: null, guild_id: null, application_id: null, instance_id: null, initial_media_session_id: null, activity_user_session_id: null, raw_thermal_state: null, is_activity_start: null, shelf_rank: null, shelf_sorted_rank: null, activities_infra_version: null, embedded_activity_location_kind: null };
            let type1;
            if (channel != null) {
              type1 = channel.type;
            }
            obj8.channel_type = type1;
            obj8.guild_id = embeddedActivityLocationGuildId;
            obj8.application_id = applicationId;
            obj8.instance_id = embeddedActivity.launchId;
            obj8.initial_media_session_id = items1[0];
            obj8.activity_user_session_id = v4Result;
            obj8.raw_thermal_state = rawThermalState;
            obj8.is_activity_start = isStart;
            let shelf_rank1;
            if (tmp55 != null) {
              const activity3 = tmp55.activity;
              if (activity3 != null) {
                shelf_rank1 = activity3.shelf_rank;
              }
            }
            obj8.shelf_rank = shelf_rank1;
            let tmp46 = null;
            if (sum > 0) {
              tmp46 = sum;
            }
            obj8.shelf_sorted_rank = tmp46;
            obj8.activities_infra_version = num2;
            obj8.embedded_activity_location_kind = _location.kind;
            AnalyticsUtilsDefault.track(constants.ACTIVITY_IFRAME_MOUNT, obj8);
            const tmp54Result6 = AnalyticsUtilsDefault;
          }
          const tmp4Result13 = v1;
        }
      }
    }
    const tmp4Result12 = embeddedActivityLocationUtils;
  }
  obj2 = tryLaunchAsFrame;
}
function resolveFrameLaunchContext(applicationId, arg1) {
  let result = arg1;
  if (arg1 == null) {
    result = obj.consumePendingFrameLaunch(applicationId);
  }
  if (null != result) {
    const obj2 = {};
    const merged = Object.assign(result);
    let analyticsLocations = result.analyticsLocations;
    if (analyticsLocations == null) {
      let locations;
      if (tmp3 != null) {
        locations = tmp3.locations;
      }
      analyticsLocations = locations;
    }
    obj2.analyticsLocations = analyticsLocations;
    let source = result.source;
    if (source == null) {
      let source1;
      if (tmp3 != null) {
        source1 = tmp3.source;
      }
      source = source1;
    }
    obj2.source = source;
    let interactionId = result.interactionId;
    if (interactionId == null) {
      let interactionId1;
      if (tmp3 != null) {
        interactionId1 = tmp3.interactionId;
      }
      interactionId = interactionId1;
    }
    obj2.interactionId = interactionId;
    return obj2;
  }
  obj = pendingFrameLaunch;
}
function maybeEmitFrameSessionMetricsForQuest(applicationId, name) {
  const application = ApplicationStore.getApplication(applicationId);
  if (obj.hasApplicationFlag(application, constants5.QUEST)) {
    const eligibleQuestsForApplicationId = QuestMatchingUtils.getEligibleQuestsForApplicationId(QuestStore.quests, applicationId, true);
    if (eligibleQuestsForApplicationId.length > 0) {
      const _HermesInternal2 = HermesInternal;
      const items = ["application_id:" + applicationId];
      const found = eligibleQuestsForApplicationId.find((userStatus) => {
        userStatus = userStatus.userStatus;
        let enrolledAt;
        if (userStatus != null) {
          enrolledAt = userStatus.enrolledAt;
        }
        return null != enrolledAt;
      });
      let id;
      if (found != null) {
        id = found.id;
      }
      if (null != id) {
        const _HermesInternal = HermesInternal;
        items.push("quest_id:" + id);
      }
      const obj2 = { name, tags: items };
      MonitoringAgentDefault.increment(obj2);
    }
    const tmp2Result = QuestMatchingUtils;
  }
  obj = ApplicationFlagUtils;
}
let closure_32 = async function _trackFrameSessionStartFailed(arg0) {
  if (c7 === 2) {
    c7 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp5 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj3 = { value, done: true };
      return obj3;
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
          const obj5 = { value, done: true };
          return obj5;
        } else {
          closure_5 = tmp2;
          closure_4 = tmp3;
          closure_132_0 = closure_0;
          closure_132_1 = undefined;
          closure_132_2 = undefined;
          closure_132_3 = undefined;
          closure_132_4 = undefined;
          closure_132_5 = undefined;
          closure_132_6 = undefined;
          closure_132_7 = undefined;
          closure_132_8 = undefined;
          const tmp52 = resolveFrameLaunchContext(closure_0, closure_2);
          if (null != tmp52) {
            ({ isStart: closure_132_1, channelId } = tmp52);
            closure_132_2 = channelId;
            ({ guildId: closure_132_3, locationKind: closure_132_4, analyticsLocations: closure_132_5, source: closure_132_6 } = tmp52);
            let channel = null;
            if (null != channelId) {
              channel = channel.getChannel(channelId);
            }
            closure_132_7 = channel;
            c6 = 1;
            c7 = 1;
            const obj6 = { value: activityLaunchErrorUtils.getActivityLaunchErrorInfo(closure_1, closure_0), done: false };
            return obj6;
          } else {
            c7 = 3;
          }
        }
      } else if (arg0 === 1) {
        c7 = 3;
        throw value;
      } else if (arg0 !== 2) {
        closure_132_8 = value;
        const obj7 = { channel_id: closure_132_2, guild_id: null, application_id: null, raw_thermal_state: null, is_activity_start: null, channel_type: null, location_stack: null, error_type: null, error_status: null, error_code: null, source: null, embedded_activity_location_kind: null };
        let guildId = closure_132_3;
        if (closure_132_3 == null) {
          guildId = undefined;
          if (closure_132_7 != null) {
            guildId = obj.getGuildId();
          }
          obj = closure_132_7;
        }
        obj7.guild_id = guildId;
        obj7.application_id = closure_132_0;
        const obj8 = closure_133_1(closure_133_2[19]);
        obj7.raw_thermal_state = closure_133_1(closure_133_2[18]).getRawThermalState();
        obj7.is_activity_start = closure_132_1;
        let type;
        if (closure_132_7 != null) {
          type = closure_132_7.type;
        }
        obj7.channel_type = type;
        obj7.location_stack = closure_132_5;
        obj7.error_type = closure_132_8.errorType;
        obj7.error_status = closure_132_8.errorStatus;
        obj7.error_code = closure_132_8.errorCode;
        obj7.source = closure_132_6;
        obj7.embedded_activity_location_kind = closure_132_4;
        obj8.track(closure_133_15.ACTIVITY_SESSION_JOIN_FAILED, obj7);
        closure_133_31(closure_132_0, closure_133_0(closure_133_2[31]).MetricEvents.FRAME_SESSION_JOIN_FAILED);
        const obj2 = closure_133_1(closure_133_2[18]);
      }
      c7 = 3;
      const obj9 = { value, done: true };
      return obj9;
    } catch (tmp35) {
      c7 = tmp;
      throw tmp35;
    }
  }
};
const GUILD_VOCAL_CHANNEL_TYPES = fn(2049).GUILD_VOCAL_CHANNEL_TYPES;
const Constants = fn(1074);
({ AnalyticEvents: closure_15, RPCCloseCodes: closure_16, Endpoints: closure_17, RTCConnectionStates: closure_18, ComponentActions: closure_19, ApplicationFlags: closure_20 } = Constants);
let dependencyMap = {};
const dependencyMap2 = {};
let closure_23 = {};
let c33;
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
        let obj2 = applyArgumentsResult(4458);
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
            } else if (null == c33) {
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
      await closure_0(tmp2[32]).getActivityLaunchErrorInfo(closure_130_0, closure_130_4);
      closure_130_8 = value;
      closure_131_1.showLaunchErrorModal(closure_130_8.message);
      const channel2 = channel.getChannel(closure_130_2);
      const rawThermalState = guildId(tmp2[18]).getRawThermalState();
      guildId(tmp2[18]);
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
      guildId(tmp2[19]).track(constants.ACTIVITY_SESSION_JOIN_FAILED, obj10);
      await "HermesInternal";
      ({ error: closure_130_0, nonce: closure_130_1, channelId: closure_130_2, guildId: closure_130_3, applicationId: closure_130_4, isStart: closure_130_5, locationKind: closure_130_6 } = applyArgumentsResult);
      return "flex";
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
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c6 = 2;
          let getChannel = c5;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
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
              c6 = 1;
              return { value: "flex", done: true };
            }
          } else {
            if (1 === getChannel) {
              if (arg0 === 1) {
                c6 = 3;
                throw value;
              } else if (arg0 === 2) {
                c6 = 3;
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
                      c6 = 1;
                      const obj5 = { value: getChannel(6584).fetchApplication(closure_131_1), done: false };
                      return obj5;
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
                const obj6 = { value, done: true };
                return obj6;
              } else {
                closure_131_7 = value;
                if (!obj25.getIsActivitiesEnabledForCurrentPlatform()) {
                  const intl = applyArgumentsResult(1115).intl;
                  closure_132_1.showLaunchErrorModal(intl.string(applyArgumentsResult(1115).t.UXoQTp));
                }
                obj25 = applyArgumentsResult(8801);
              }
            } else {
              if (3 === getChannel) {
                if (arg0 === 1) {
                  c6 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c6 = 3;
                  const obj8 = { value, done: true };
                  return obj8;
                } else {
                  closure_131_9 = value;
                  activityConfigs = closure_131_9.activityConfigs;
                  applications = closure_131_9.applications;
                  const obj9 = { applicationId: closure_131_1, activityConfigs, applications };
                  if (null == getChannel(8757)(obj9)) {
                    const obj11 = { guildId: closure_131_8, force: true };
                    c5 = 4;
                    c6 = 1;
                    const obj12 = { value: applyArgumentsResult(8782).fetchShelf(obj11), done: false };
                    return obj12;
                  }
                }
              } else if (4 === getChannel) {
                if (arg0 === 1) {
                  c6 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c6 = 3;
                  const obj13 = { value, done: true };
                  return obj13;
                } else {
                  closure_131_12 = value;
                  const obj16 = { applicationId: closure_131_1, activityConfigs: closure_131_12.activityConfigs, applications: closure_131_12.applications };
                  getChannel(8757)(obj16);
                }
              } else if (5 === getChannel) {
                if (arg0 === 1) {
                  c6 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c6 = 3;
                  const obj17 = { value, done: true };
                  return obj17;
                }
              } else if (arg0 === 1) {
                c6 = 3;
                throw value;
              } else if (arg0 === 2) {
                c6 = 3;
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
                const obj18 = { channelId: closure_131_0, applicationId: closure_131_1, launchId: null, inputApplication: null, analyticsLocations: null, inviterUserId: null };
                let launchId;
                if (closure_131_13 != null) {
                  launchId = closure_131_13.launchId;
                }
                obj18.launchId = launchId;
                obj18.analyticsLocations = closure_131_2;
                obj18.inviterUserId = closure_131_4;
                c5 = 6;
                c6 = 1;
                const obj20 = { value: applyArgumentsResult(8824).maybeJoinEmbeddedActivity(obj18), done: false };
                return obj20;
              } else {
                const obj21 = { targetApplicationId: closure_131_1, channelId: closure_131_0, analyticsLocations: closure_131_2, commandOrigin: closure_131_3, inviterUserId: closure_131_4 };
                c5 = 5;
                c6 = 1;
                const obj22 = { value: getChannel(10741)(obj21), done: false };
                return obj22;
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
              let guildId;
              if (closure_131_5 != null) {
                guildId = closure_131_5.getGuildId();
              }
              getChannel = guildId;
              closure_131_8 = getChannel;
              const obj23 = { guildId: closure_131_8 };
              c5 = 3;
              c6 = 1;
              const obj24 = { value: applyArgumentsResult(8782).fetchShelf(obj23), done: false };
              return obj24;
            } else {
              const intl2 = applyArgumentsResult(1115).intl;
              closure_132_1.showLaunchErrorModal(intl2.string(applyArgumentsResult(1115).t.uGDCcw));
            }
            tmp56 = getChannel(8823);
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
      if (null == dependencyMap2[data.applicationId]) {
        if (data.interactionType === applyArgumentsResult(1979).InteractionTypes.APPLICATION_COMMAND) {
          const items = [AnalyticsLocationDefault.INTERACTION_APPLICATION_COMMAND];
          let tmp2 = items;
        } else if (data.interactionType === applyArgumentsResult(1979).InteractionTypes.MESSAGE_COMPONENT) {
          const items1 = [AnalyticsLocationDefault.INTERACTION_MESSAGE_COMPONENT];
          tmp2 = items1;
        } else if (data.interactionType === applyArgumentsResult(1979).InteractionTypes.MODAL_SUBMIT) {
          const items2 = [AnalyticsLocationDefault.INTERACTION_MODAL_SUBMIT];
          tmp2 = items2;
        }
        const obj = { applicationId: data.applicationId, nonce, locations: tmp2 };
        ({ locations, source } = obj);
        let flag = null != locations;
        ({ applicationId, nonce: nonce2 } = obj);
        if (!flag) {
          flag = null != source;
        }
        if (flag) {
          const obj2 = { nonce: nonce2, locations, source };
          tmp[applicationId] = obj2;
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
  if (analyticsContext == null) {
    result = obj.consumePendingFrameLaunch(applicationId);
  }
  let tmp4;
  if (null != result) {
    const obj2 = {};
    const merged = Object.assign(result);
    let analyticsLocations = result.analyticsLocations;
    if (analyticsLocations == null) {
      let locations;
      if (tmp6 != null) {
        locations = tmp6.locations;
      }
      analyticsLocations = locations;
    }
    obj2.analyticsLocations = analyticsLocations;
    let source = result.source;
    if (source == null) {
      let source1;
      if (tmp6 != null) {
        source1 = tmp6.source;
      }
      source = source1;
    }
    obj2.source = source;
    let interactionId = result.interactionId;
    if (interactionId == null) {
      let interactionId1;
      if (tmp6 != null) {
        interactionId1 = tmp6.interactionId;
      }
      interactionId = interactionId1;
    }
    obj2.interactionId = interactionId;
    tmp4 = obj2;
  }
  if (null != tmp4) {
    ({ isStart, channelId, launchId, compositeInstanceId, activitiesInfraVersion, analyticsLocations: analyticsLocations2 } = tmp4);
    ({ inviterUserId, source: source2, interactionId: interactionId2 } = tmp4);
    const currentUser = UserStore.getCurrentUser();
    if (null != currentUser) {
      let channel = null;
      if (null != channelId) {
        channel = ChannelStore.getChannel(channelId);
      }
      let guildId = tmp4.guildId;
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
      const locationKind = tmp4.locationKind;
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
      const v4Result = v1.v4();
      const obj3 = { activitySessionId: compositeInstanceId, activityUserSessionId: v4Result, launchId, mediaSessionIds: items1, activitiesInfraVersion, connectedSince: null, frameChannelId: null, frameGuildId: null, frameLocationKind: null };
      const _Date = Date;
      obj3.connectedSince = Date.now();
      obj3.frameChannelId = channelId;
      obj3.frameGuildId = guildId;
      obj3.frameLocationKind = locationKind;
      closure_21[applicationId] = obj3;
      const shelfActivities = EmbeddedActivitiesStore.getShelfActivities(guildId);
      const shelfOrder = ActivityShelfStore.getState().shelfOrder;
      const obj4 = { applicationId, activityConfigs: shelfActivities };
      const tmp27 = getShelfItemDataDefault(obj4);
      const sum = 1 + shelfOrder.findIndex((item) => item === closure_0);
      let release_phase;
      if (tmp27 != null) {
        const activity = tmp27.activity;
        if (activity != null) {
          const tmp2Result5 = PlatformUtils;
          release_phase = activity.client_platform_config[getPlatformDefault(undefined, tmp2Result5.getOS(tmp2Result5))].release_phase;
          const tmp26Result = getPlatformDefault;
        }
      }
      const tmp2Result = v1;
      const rawThermalState = ThermalUtilsDefault.getRawThermalState();
      const tmp26Result5 = ThermalUtilsDefault;
      const obj5 = { channel_id: channelId, guild_id: guildId, media_session_id: items1[0], activity_session_id: compositeInstanceId, application_id: applicationId, location_stack: analyticsLocations2, user_premium_tier: currentUser.premiumType, raw_thermal_state: rawThermalState, n_participants: null, is_activity_start: null, release_phase: null, shelf_rank: null, shelf_sorted_rank: null, activity_user_session_id: null, channel_type: null, source: null, command_context_type: null, invite_inviter_id: null, interaction_id: null, embedded_activity_location_kind: null };
      let userParticipantCount = null;
      if (null != channel) {
        userParticipantCount = ChannelRTCStore.getUserParticipantCount(channel.id);
      }
      obj5.n_participants = userParticipantCount;
      obj5.is_activity_start = isStart;
      obj5.release_phase = release_phase;
      let shelf_rank;
      if (tmp27 != null) {
        const activity2 = tmp27.activity;
        if (activity2 != null) {
          shelf_rank = activity2.shelf_rank;
        }
      }
      obj5.shelf_rank = shelf_rank;
      let tmp37 = null;
      if (sum > 0) {
        tmp37 = sum;
      }
      obj5.shelf_sorted_rank = tmp37;
      obj5.activity_user_session_id = v4Result;
      let type;
      if (channel != null) {
        type = channel.type;
      }
      obj5.channel_type = type;
      obj5.source = source2;
      let commandContextType = null;
      if (null != channel) {
        commandContextType = CommandPermissionContext.computeCommandContextType(channel, applicationId);
        const tmp2Result6 = CommandPermissionContext;
      }
      obj5.command_context_type = commandContextType;
      obj5.invite_inviter_id = inviterUserId;
      obj5.interaction_id = interactionId2;
      obj5.embedded_activity_location_kind = locationKind;
      AnalyticsUtilsDefault.track(constants.ACTIVITY_SESSION_JOINED, obj5);
      const application = ApplicationStore.getApplication(applicationId);
      const tmp26Result6 = AnalyticsUtilsDefault;
      if (tmp2Result7.hasApplicationFlag(application, constants5.QUEST)) {
        const eligibleQuestsForApplicationId = QuestMatchingUtils.getEligibleQuestsForApplicationId(QuestStore.quests, applicationId, true);
        if (eligibleQuestsForApplicationId.length > 0) {
          const _HermesInternal2 = HermesInternal;
          const items2 = ["application_id:" + applicationId];
          const found = eligibleQuestsForApplicationId.find((userStatus) => {
            userStatus = userStatus.userStatus;
            let enrolledAt;
            if (userStatus != null) {
              enrolledAt = userStatus.enrolledAt;
            }
            return null != enrolledAt;
          });
          let id;
          if (found != null) {
            id = found.id;
          }
          if (null != id) {
            const _HermesInternal = HermesInternal;
            items2.push("quest_id:" + id);
          }
          const obj6 = { name: MetricEvents.MetricEvents.FRAME_SESSION_JOIN, tags: items2 };
          MonitoringAgentDefault.increment(obj6);
          const tmp26Result7 = MonitoringAgentDefault;
        }
        const tmp2Result8 = QuestMatchingUtils;
      }
      tmp2Result7 = ApplicationFlagUtils;
      const obj7 = { location_stack: analyticsLocations2, channel_id: channelId, channel_type: null, guild_id: null, application_id: null, instance_id: null, initial_media_session_id: null, activity_user_session_id: null, raw_thermal_state: null, is_activity_start: null, shelf_rank: null, shelf_sorted_rank: null, activities_infra_version: null, embedded_activity_location_kind: null };
      let type1;
      if (channel != null) {
        type1 = channel.type;
      }
      obj7.channel_type = type1;
      obj7.guild_id = guildId;
      obj7.application_id = applicationId;
      obj7.instance_id = launchId;
      obj7.initial_media_session_id = items1[0];
      obj7.activity_user_session_id = v4Result;
      obj7.raw_thermal_state = rawThermalState;
      obj7.is_activity_start = isStart;
      let shelf_rank1;
      if (tmp27 != null) {
        const activity3 = tmp27.activity;
        if (activity3 != null) {
          shelf_rank1 = activity3.shelf_rank;
        }
      }
      obj7.shelf_rank = shelf_rank1;
      let tmp50 = null;
      if (sum > 0) {
        tmp50 = sum;
      }
      obj7.shelf_sorted_rank = tmp50;
      obj7.activities_infra_version = activitiesInfraVersion;
      obj7.embedded_activity_location_kind = locationKind;
      AnalyticsUtilsDefault.track(constants.ACTIVITY_IFRAME_MOUNT, obj7);
      const tmp26Result8 = AnalyticsUtilsDefault;
    }
  }
  obj = pendingFrameLaunch;
};
export const getActiveAnalyticsSessionIDs = function getActiveAnalyticsSessionIDs(id) {
  return dependencyMap[id];
};
export const trackFrameSessionStartFailed = function trackFrameSessionStartFailed() {
  const self = this;
  const apply = closure_32.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
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
      const obj = { applicationId, activityConfigs: shelfActivities };
      const tmp13 = getShelfItemDataDefault(obj);
      let release_phase;
      if (tmp13 != null) {
        const activity = tmp13.activity;
        if (activity != null) {
          const obj2 = PlatformUtils;
          release_phase = activity.client_platform_config[getPlatformDefault(undefined, obj2.getOS(obj2))].release_phase;
          const tmp11Result = getPlatformDefault;
        }
      }
      const rawThermalState = ThermalUtilsDefault.getRawThermalState();
      let diff = null;
      if (null != tmp3.connectedSince) {
        const _Date = Date;
        diff = Date.now() - tmp3.connectedSince;
      }
      const tmp11Result4 = ThermalUtilsDefault;
      const obj3 = { channel_id: frameChannelId, guild_id: frameGuildId, media_session_id: tmp3.mediaSessionIds[0], activity_session_id: tmp3.activitySessionId, application_id: applicationId, duration_ms: diff, user_premium_tier: currentUser.premiumType, raw_thermal_state: rawThermalState, release_phase, shelf_rank: null, activity_user_session_id: null, channel_type: null, media_session_ids: null, embedded_activity_location_kind: null };
      let shelf_rank;
      if (tmp13 != null) {
        const activity2 = tmp13.activity;
        if (activity2 != null) {
          shelf_rank = activity2.shelf_rank;
        }
      }
      obj3.shelf_rank = shelf_rank;
      obj3.activity_user_session_id = tmp3.activityUserSessionId;
      let type;
      if (channel != null) {
        type = channel.type;
      }
      obj3.channel_type = type;
      ({ mediaSessionIds: obj5.media_session_ids, frameLocationKind: obj5.embedded_activity_location_kind } = tmp3);
      AnalyticsUtilsDefault.track(constants.ACTIVITY_SESSION_LEFT, obj3);
      const tmp11Result5 = AnalyticsUtilsDefault;
      const obj4 = { channel_id: frameChannelId, guild_id: frameGuildId, application_id: applicationId, instance_ids: null, media_session_ids: null, activity_user_session_id: null, raw_thermal_state: null, duration_ms: null, embedded_activity_location_kind: null };
      let tmp24;
      if (null != tmp3.launchId) {
        const items = [tmp3.launchId];
        tmp24 = items;
      }
      obj4.instance_ids = tmp24;
      ({ mediaSessionIds: obj7.media_session_ids, activityUserSessionId: obj7.activity_user_session_id } = tmp3);
      obj4.raw_thermal_state = rawThermalState;
      obj4.duration_ms = diff;
      obj4.embedded_activity_location_kind = tmp3.frameLocationKind;
      AnalyticsUtilsDefault.track(constants.ACTIVITY_IFRAME_UNMOUNT, obj4);
      delete tmp[tmp2];
      const tmp11Result6 = AnalyticsUtilsDefault;
    }
  }
};