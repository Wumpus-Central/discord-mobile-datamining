// === Module 14650: ActivitySessionAnalytics ===

// Module 14650 (ActivitySessionAnalytics)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1265 */;
import v1 from "v1" /* 1279 */;
import PlatformUtils from "PlatformUtils" /* 1382 */;
import ThermalUtilsDefault from "ThermalUtils" /* 5295 */;
import MonitoringAgentDefault from "MonitoringAgent" /* 5726 */;
import MetricEvents from "MetricEvents" /* 5731 */;
import ApplicationFlagUtils from "ApplicationFlagUtils" /* 9205 */;
import CommandPermissionContext from "CommandPermissionContext" /* 9225 */;
import pendingFrameLaunch from "pendingFrameLaunch" /* 10781 */;
import EmbeddedActivityLocationKind from "EmbeddedActivityLocationKind" /* 10782 */;
import getShelfItemDataDefault from "getShelfItemData" /* 10795 */;
import activityLaunchErrorUtils from "activityLaunchErrorUtils" /* 10806 */;
import getPlatformDefault from "getPlatform" /* 11670 */;
import QuestMatchingUtils from "QuestMatchingUtils" /* 12919 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import ApplicationStore from "ApplicationStore" /* 5437 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6043 */;
import QuestStore from "QuestStore" /* 7384 */;
import ChannelStore from "ChannelStore" /* 2064 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5109 */;
import UserStore from "UserStore" /* 1390 */;
import ActivityShelfStore from "ActivityShelfStore" /* 14651 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2063 */;

require = fn;
function resolveFrameLaunchContext(applicationId, arg1) {
  let result = arg1;
  if (arg1 == null) {
    result = obj.consumePendingFrameLaunch(applicationId);
  }
  if (null != result) {
    obj2 = {};
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
  if (obj.hasApplicationFlag(application, constants2.QUEST)) {
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
      obj2 = { name, tags: items };
      MonitoringAgentDefault.increment(obj2);
    }
    const tmp2Result = QuestMatchingUtils;
  }
  obj = ApplicationFlagUtils;
}
let closure_18 = async function _trackFrameSessionStartFailed(arg0) {
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
        const obj8 = closure_133_1(closure_133_2[20]);
        obj7.raw_thermal_state = closure_133_1(closure_133_2[19]).getRawThermalState();
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
        obj8.track(closure_133_12.ACTIVITY_SESSION_JOIN_FAILED, obj7);
        closure_133_17(closure_132_0, closure_133_0(closure_133_2[22]).MetricEvents.FRAME_SESSION_JOIN_FAILED);
        obj2 = closure_133_1(closure_133_2[19]);
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
const Constants = fn(1085);
({ AnalyticEvents: closure_12, ApplicationFlags: map1 } = Constants);
const activeSessionIds = {};
let obj2 = {};
const size = fn(2);
let result = size.fileFinishedImporting("modules/activities/ActivitySessionAnalytics.tsx");

export { activeSessionIds };
export const awaitingAnalyticsContext = obj2;
export const getShelfItemTrackingProperties = function getShelfItemTrackingProperties(activity) {
  let releasePhase;
  if (activity != null) {
    activity = activity.activity;
    if (activity != null) {
      const obj = PlatformUtils;
      releasePhase = activity.client_platform_config[getPlatformDefault(undefined, obj.getOS(obj))].release_phase;
    }
  }
  return { releasePhase };
};
export const trackFrameSessionStart = function trackFrameSessionStart(applicationId, analyticsContext) {
  closure_0 = applicationId;
  let result = analyticsContext;
  const obj = pendingFrameLaunch;
  if (analyticsContext == null) {
    result = obj.consumePendingFrameLaunch(applicationId);
  }
  let tmp4;
  if (null != result) {
    obj2 = {};
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
      obj[applicationId] = obj3;
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
      if (tmp2Result7.hasApplicationFlag(application, constants2.QUEST)) {
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
};
export const getActiveAnalyticsSessionIDs = function getActiveAnalyticsSessionIDs(id) {
  return obj[id];
};
export const trackFrameSessionStartFailed = function trackFrameSessionStartFailed() {
  const self = this;
  const apply = closure_18.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const trackFrameSessionEnd = function trackFrameSessionEnd(applicationId) {
  const currentUser = UserStore.getCurrentUser();
  if (null != obj[applicationId]) {
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
      obj = { applicationId, activityConfigs: shelfActivities };
      const tmp13 = getShelfItemDataDefault(obj);
      let release_phase;
      if (tmp13 != null) {
        const activity = tmp13.activity;
        if (activity != null) {
          obj2 = PlatformUtils;
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