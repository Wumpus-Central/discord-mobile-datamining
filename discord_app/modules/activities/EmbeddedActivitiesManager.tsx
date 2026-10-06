// discord_app/modules/activities/EmbeddedActivitiesManager.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import ComponentDispatchUtils from "../../utils/ComponentDispatchUtils.tsx";
import AnalyticsUtilsDefault from "../../utils/AnalyticsUtils.tsx";
import v1 from "../../../_runtime/01266_v1.js";
import PlatformUtils from "../../utils/PlatformUtils.tsx";
import StringUtils from "../../utils/StringUtils.tsx";
import ChannelRecord from "../../records/ChannelRecord.tsx";
import embeddedActivityLocationUtils from "utils/embeddedActivityLocationUtils.tsx";
import ChannelRTCActionCreatorsDefault from "../../actions/ChannelRTCActionCreators.tsx";
import InteractionTypes from "../../../discord_common/js/shared/shared-constants/InteractionTypes.tsx";
import MonitoringAgentDefault from "../monitoring/MonitoringAgent.tsx";
import MetricEvents from "../../../discord_common/js/shared/shared-constants/MetricEvents.tsx";
import AnalyticsLocationDefault from "../app_analytics/AnalyticsLocation.tsx";
import ApplicationFlagUtils from "../applications/utils/ApplicationFlagUtils.tsx";
import CommandPermissionContext from "../application_commands/CommandPermissionContext.tsx";
import getPlatformDefault from "utils/getPlatform.tsx";
import getURLForApplication from "getURLForApplication.tsx";
import getShelfItemDataDefault from "getShelfItemData.tsx";
import ThermalUtilsDefault from "../device/ThermalUtils.native.tsx";
import FramesActionCreatorsDefault from "../frames/FramesActionCreators.native.tsx";
import tryLaunchAsFrame from "utils/tryLaunchAsFrame.tsx";
import pendingFrameLaunch from "utils/pendingFrameLaunch.tsx";
import EmbeddedActivityLocationKind from "../../../discord_common/js/shared/shared-constants/EmbeddedActivityLocationKind.tsx";
import isVoiceEmbeddedActivityDefault from "utils/isVoiceEmbeddedActivity.tsx";
import activityLaunchErrorUtils from "utils/activityLaunchErrorUtils.tsx";
import QuestMatchingUtils from "../quests/utils/QuestMatchingUtils.tsx";
import _asyncToGenerator from "../../../_runtime/metro/00005__asyncToGenerator.js";
import ApplicationStore from "../applications/ApplicationStore.tsx";
import ChannelRTCStore from "../calls/ChannelRTCStore.tsx";
import QuestStore from "../quests/QuestStore.tsx";
import AuthenticationStore from "../../stores/AuthenticationStore.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import RTCConnectionStore from "../../stores/RTCConnectionStore.tsx";
import SelectedChannelStore from "../../stores/SelectedChannelStore.tsx";
import UserStore from "../../stores/UserStore.tsx";
import ActivityShelfStore from "ActivityShelfStore.tsx";
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore.tsx";
import Constants from "../../Constants.tsx";
import LifecycleManager from "../../lib/LifecycleManager.tsx";
import size_mod from "../../../_runtime/metro/00002__.js";

let closure_12, location_stack, userIds, voiceChannelId;

let closure_15;
let closure_16;
let closure_17;
let closure_18;
let closure_19;
let closure_20;
const f99171 = (userStatus) => {
  userStatus = userStatus.userStatus;
  let enrolledAt;
  if (userStatus != null) {
    enrolledAt = userStatus.enrolledAt;
  }
  return null != enrolledAt;
};
function getShelfItemTrackingProperties(activity) {
  let releasePhase;
  if (activity != null) {
    activity = activity.activity;
    if (activity != null) {
      const client_platform_config = activity.client_platform_config;
      const tmp4 = getPlatformDefault;
      obj = PlatformUtils;
      releasePhase = client_platform_config[tmp4(undefined, obj.getOS(obj))].release_phase;
    }
  }
  return { releasePhase };
}
function clearAwaitingAnalyticsContextImmediate(arg0, arg1) {
  if (null != closure_22[arg0]) {
    if (closure_22[arg0].nonce === arg1) {
      delete tmp2[tmp];
      return closure_22[arg0];
    }
  }
}
function handleActivityLaunchStart(arg0) {
  let analyticsLocations;
  let applicationId;
  let nonce;
  let source;
  ({ analyticsLocations, source } = arg0);
  ({ applicationId, nonce } = arg0);
  const tmp = null != analyticsLocations || null != source;
  if (tmp) {
    obj = { nonce, locations: analyticsLocations, source };
    closure_22[applicationId] = obj;
  }
}
function handleActivityClose() {
  return obj(...arguments);
}
let obj = function _handleActivityClose() {
  obj = _asyncToGenerator(async (arg0) => {
    let c0;
    let c1;
    let c2;
    let closure_2;
    let duration_ms;
    let obj7;
    let shelf_rank;
    let tmp40;
    let closure_0 = arg0;
    if (1 === c3) {
      if (arg0 === 1) {
        let c4 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 3;
        const obj6 = { value, done: true };
        return obj6;
      } else {
        duration_ms = closure_130_14.getEmbeddedActivityDurationMs(user.id, application_id);
        const session_id = closure_130_8.getSessionId();
        const tmp7 = null != c2 && null != session_id;
        if (tmp7) {
          const HTTP = closure_130_0(closure_130_2[15]).HTTP;
          const request = {
            url: closure_130_17.ACTIVITY_LEAVE(application_id, user.id, c2),
            body: obj7,
            retries: 2,
            rejectWithError: false,
          };
          const post = HTTP.post;
          obj7 = { session_id };
          c3 = 2;
          c4 = 1;
          const obj8 = { value: post(request), done: false };
          return obj8;
        }
      }
    } else if (arg0 === 1) {
      c4 = 3;
      throw value;
    } else if (arg0 === 2) {
      c4 = 3;
      obj = { value, done: true };
      return obj;
    }
    let closure_5 = closure_130_21[application_id];
    const obj2 = closure_130_0(closure_130_2[16]);
    const channel_id = obj2.getEmbeddedActivityLocationChannelId(user);
    const obj3 = closure_130_0(closure_130_2[16]);
    const guild_id = obj3.getEmbeddedActivityLocationGuildId(user);
    let type = closure_130_9.getChannel(channel_id);
    const premiumType = closure_130_12.getCurrentUser();
    if (null != closure_5) {
      if (null != premiumType) {
        if (null == closure_5.connectedSince) {
          const activityConfigs = closure_130_14.getShelfActivities(guild_id);
          const obj9 = { applicationId: application_id, activityConfigs };
          let activity = closure_130_1(closure_130_2[17])(obj9);
          const releasePhase = closure_130_24(activity).releasePhase;
          const obj12 = closure_130_1(closure_130_2[18]);
          const raw_thermal_state = obj12.getRawThermalState();
          const obj10 = {
            channel_id,
            guild_id,
            media_session_id: closure_5.mediaSessionIds[0],
            activity_session_id: closure_5.activitySessionId,
            application_id,
            duration_ms,
            user_premium_tier: premiumType.premiumType,
            raw_thermal_state,
            release_phase: releasePhase,
            shelf_rank,
            activity_user_session_id: closure_5.activityUserSessionId,
            channel_type: type,
            media_session_ids: closure_5.mediaSessionIds,
            embedded_activity_location_kind: user.kind,
          };
          shelf_rank = undefined;
          const track2 = closure_130_1(closure_130_2[19]).track;
          const ACTIVITY_SESSION_LEFT = closure_130_15.ACTIVITY_SESSION_LEFT;
          const tmp90 = closure_130_1(closure_130_2[19]);
          if (activity != null) {
            activity = activity.activity;
            if (activity != null) {
              shelf_rank = activity.shelf_rank;
            }
          }
          type = undefined;
          if (type != null) {
            type = type.type;
          }
          track2(ACTIVITY_SESSION_LEFT, obj10);
          const obj11 = {
            channel_id,
            guild_id,
            application_id,
            instance_ids: tmp40,
            media_session_ids: closure_5.mediaSessionIds,
            activity_user_session_id: closure_5.activityUserSessionId,
            raw_thermal_state,
            duration_ms,
            embedded_activity_location_kind: user.kind,
          };
          tmp40 = undefined;
          const track = closure_130_1(closure_130_2[19]).track;
          const ACTIVITY_IFRAME_UNMOUNT = closure_130_15.ACTIVITY_IFRAME_UNMOUNT;
          const tmp34 = closure_130_1(closure_130_2[19]);
          if (null != closure_5.launchId) {
            const items = [closure_5.launchId];
            tmp40 = items;
          }
          track(ACTIVITY_IFRAME_UNMOUNT, obj11);
          delete closure_130_21[application_id];
        }
      }
    }
    await "IconComponent";
    ({ applicationId: c0, location: c1, instanceId: c2 } = closure_0);
    return "Reflect";
  });
  return obj(...arguments);
};
function handleOpenEmbeddedActivity(applicationId) {
  let _location;
  let commandContextType;
  let embeddedActivity;
  let interactionId;
  let inviterUserId;
  let isStart;
  let locations;
  let num4;
  let participants;
  let shelf_rank;
  let shelf_rank1;
  let source;
  let tmp39;
  let tmp49;
  let tmp4Result10;
  let tmp4Result9;
  let type;
  let type1;
  let userParticipantCount;
  applicationId = applicationId.applicationId;
  ({ isStart, participants, embeddedActivity, location: _location, inviterUserId } = applicationId);
  const isFirstActivityInChannel = applicationId.isFirstActivityInChannel;
  if (true !== embeddedActivity.renderInFramePool) {
    obj = FramesActionCreatorsDefault;
    obj.clearMainFrameSlot();
  }
  const obj2 = tryLaunchAsFrame;
  if (obj2.tryLaunchAsFrame({ applicationId })) {
    const obj3 = {
      isStart,
      inviterUserId,
      channelId: tmp4Result9.getEmbeddedActivityLocationChannelId(_location),
      guildId: tmp4Result10.getEmbeddedActivityLocationGuildId(_location),
      locationKind: _location.kind,
      launchId: null,
      compositeInstanceId: null,
      activitiesInfraVersion: num4,
    };
    const stashPendingFrameLaunch = pendingFrameLaunch.stashPendingFrameLaunch;
    pendingFrameLaunch;
    tmp4Result9 = embeddedActivityLocationUtils;
    ({ launchId: obj15.launchId, compositeInstanceId: obj15.compositeInstanceId } = embeddedActivity);
    num4 = 1;
    tmp4Result10 = embeddedActivityLocationUtils;
    if ("location" in embeddedActivity) {
      num4 = 2;
    }
    const result = stashPendingFrameLaunch(applicationId, obj3);
  } else {
    const id = AuthenticationStore.getId();
    const found = participants.find((userId) => userId.userId === closure_1);
    const tmp4Result11 = embeddedActivityLocationUtils;
    const embeddedActivityLocationChannelId = tmp4Result11.getEmbeddedActivityLocationChannelId(_location);
    const tmp4Result12 = embeddedActivityLocationUtils;
    const embeddedActivityLocationGuildId = tmp4Result12.getEmbeddedActivityLocationGuildId(_location);
    const channel = ChannelStore.getChannel(embeddedActivityLocationChannelId);
    const isPrivateResult =
      isStart && null != channel && channel.isPrivate() && isFirstActivityInChannel && null == found;
    if (isPrivateResult) {
      const obj6 = ChannelRTCActionCreatorsDefault;
      const participant = obj6.selectParticipant(channel.id, null);
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
        let isPrivateResult1;
        if (channel != null) {
          isPrivateResult1 = channel.isPrivate();
        }
        tmp19 = false === isPrivateResult1;
      }
      if (null != compositeInstanceId) {
        if (!tmp19) {
          const tmp4Result13 = v1;
          const v4Result = tmp4Result13.v4();
          let num2 = 1;
          if ("location" in embeddedActivity) {
            num2 = 2;
          }
          const currentUser = UserStore.getCurrentUser();
          if (null != currentUser) {
            let items1;
            const shelfActivities = EmbeddedActivitiesStore.getShelfActivities(embeddedActivityLocationGuildId);
            const shelfOrder = ActivityShelfStore.getState().shelfOrder;
            const obj4 = { applicationId, activityConfigs: shelfActivities };
            const tmp59 = getShelfItemDataDefault(obj4);
            const sum = 1 + shelfOrder.findIndex((item) => item === applicationId);
            let release_phase;
            if (tmp59 != null) {
              const activity = tmp59.activity;
              if (activity != null) {
                const client_platform_config = activity.client_platform_config;
                const tmp58Result = getPlatformDefault;
                const tmp4Result14 = PlatformUtils;
                release_phase =
                  client_platform_config[tmp58Result(undefined, tmp4Result14.getOS(tmp4Result14))].release_phase;
              }
            }
            const tmp58Result4 = ThermalUtilsDefault;
            const rawThermalState = tmp58Result4.getRawThermalState();
            if (null != mediaSessionId) {
              const items = [mediaSessionId];
              items1 = items;
            } else {
              items1 = [];
            }
            const obj5 = {
              activitySessionId: compositeInstanceId,
              activityUserSessionId: v4Result,
              launchId: embeddedActivity.launchId,
              mediaSessionIds: items1,
              activitiesInfraVersion: num2,
            };
            closure_21[applicationId] = obj5;
            const tmp4Result15 = StringUtils;
            let isNullOrEmptyResult = tmp4Result15.isNullOrEmpty(found.nonce);
            if (!isNullOrEmptyResult) {
              let nonce1;
              const nonce = found.nonce;
              if (closure_22[applicationId] != null) {
                nonce1 = tmp29.nonce;
              }
              isNullOrEmptyResult = nonce === nonce1;
            }
            const obj7 = {
              channel_id: embeddedActivityLocationChannelId,
              guild_id: embeddedActivityLocationGuildId,
              media_session_id: items1[0],
              activity_session_id: compositeInstanceId,
              application_id: applicationId,
              location_stack: locations,
              user_premium_tier: currentUser.premiumType,
              raw_thermal_state: rawThermalState,
              n_participants: userParticipantCount,
              is_activity_start: isStart,
              release_phase,
              shelf_rank,
              shelf_sorted_rank: tmp39,
              activity_user_session_id: v4Result,
              channel_type: type,
              source,
              command_context_type: commandContextType,
              invite_inviter_id: inviterUserId,
              interaction_id: interactionId,
              embedded_activity_location_kind: _location.kind,
            };
            locations = undefined;
            const track = AnalyticsUtilsDefault.track;
            const ACTIVITY_SESSION_JOINED = constants.ACTIVITY_SESSION_JOINED;
            AnalyticsUtilsDefault;
            if (closure_22[applicationId] != null) {
              locations = tmp29.locations;
            }
            userParticipantCount = null;
            if (null != channel) {
              userParticipantCount = ChannelRTCStore.getUserParticipantCount(channel.id);
            }
            shelf_rank = undefined;
            if (tmp59 != null) {
              const activity2 = tmp59.activity;
              if (activity2 != null) {
                shelf_rank = activity2.shelf_rank;
              }
            }
            tmp39 = null;
            if (sum > 0) {
              tmp39 = sum;
            }
            type = undefined;
            if (channel != null) {
              type = channel.type;
            }
            source = undefined;
            if (closure_22[applicationId] != null) {
              source = tmp29.source;
            }
            commandContextType = null;
            if (null != channel) {
              const tmp4Result16 = CommandPermissionContext;
              commandContextType = tmp4Result16.computeCommandContextType(channel, applicationId);
            }
            interactionId = undefined;
            if (closure_22[applicationId] != null) {
              interactionId = tmp29.interactionId;
            }
            track(ACTIVITY_SESSION_JOINED, obj7);
            let locations1;
            const track2 = AnalyticsUtilsDefault.track;
            const ACTIVITY_IFRAME_MOUNT = constants.ACTIVITY_IFRAME_MOUNT;
            AnalyticsUtilsDefault;
            if (closure_22[applicationId] != null) {
              locations1 = tmp29.locations;
            }
            const obj8 = {
              location_stack: locations1,
              channel_id: embeddedActivityLocationChannelId,
              channel_type: type1,
              guild_id: embeddedActivityLocationGuildId,
              application_id: applicationId,
              instance_id: embeddedActivity.launchId,
              initial_media_session_id: items1[0],
              activity_user_session_id: v4Result,
              raw_thermal_state: rawThermalState,
              is_activity_start: isStart,
              shelf_rank: shelf_rank1,
              shelf_sorted_rank: tmp49,
              activities_infra_version: num2,
              embedded_activity_location_kind: _location.kind,
            };
            type1 = undefined;
            if (channel != null) {
              type1 = channel.type;
            }
            shelf_rank1 = undefined;
            if (tmp59 != null) {
              const activity3 = tmp59.activity;
              if (activity3 != null) {
                shelf_rank1 = activity3.shelf_rank;
              }
            }
            tmp49 = null;
            if (sum > 0) {
              tmp49 = sum;
            }
            track2(ACTIVITY_IFRAME_MOUNT, obj8);
          }
        }
      }
    }
  }
}
function resolveFrameLaunchContext(applicationId, arg1) {
  let analyticsLocations;
  let interactionId;
  let source;
  let result = arg1;
  obj = pendingFrameLaunch;
  if (arg1 == null) {
    result = obj.consumePendingFrameLaunch(applicationId);
  }
  if (null != result) {
    const obj2 = { analyticsLocations, source, interactionId };
    const merged = Object.assign(result);
    analyticsLocations = result.analyticsLocations;
    if (analyticsLocations == null) {
      let locations;
      if (closure_22[applicationId] != null) {
        locations = tmp3.locations;
      }
      analyticsLocations = locations;
    }
    source = result.source;
    if (source == null) {
      let source1;
      if (closure_22[applicationId] != null) {
        source1 = tmp3.source;
      }
      source = source1;
    }
    interactionId = result.interactionId;
    if (interactionId == null) {
      let interactionId1;
      if (closure_22[applicationId] != null) {
        interactionId1 = tmp3.interactionId;
      }
      interactionId = interactionId1;
    }
    return obj2;
  }
}
function maybeEmitFrameSessionMetricsForQuest(applicationId, name) {
  const application = ApplicationStore.getApplication(applicationId);
  obj = ApplicationFlagUtils;
  if (obj.hasApplicationFlag(application, constants5.QUEST)) {
    const tmp2Result = QuestMatchingUtils;
    const eligibleQuestsForApplicationId = tmp2Result.getEligibleQuestsForApplicationId(
      QuestStore.quests,
      applicationId,
      true,
    );
    if (eligibleQuestsForApplicationId.length > 0) {
      const _HermesInternal2 = HermesInternal;
      const items = ["application_id:" + applicationId];
      const found = eligibleQuestsForApplicationId.find(f99171);
      let id;
      if (found != null) {
        id = found.id;
      }
      if (null != id) {
        const _HermesInternal = HermesInternal;
        items.push("quest_id:" + id);
      }
      const obj2 = { name, tags: items };
      const obj3 = MonitoringAgentDefault;
      obj3.increment(obj2);
    }
  }
}
obj = function _trackFrameSessionStartFailed() {
  obj = _asyncToGenerator(async (application_id, is_activity_start, arg2) => {
    let closure_2 = arg2;
    let c6 = 0;
    let c7 = 0;
    return (async (arg0, value, arg2) => {
      let c1;
      let c3;
      let c4;
      let c5;
      let c6;
      let channelId;
      let obj2;
      let obj4;
      let type;
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
          let closure_8;
          c7 = 2;
          if (0 === source) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              return { value, done: true };
            } else {
              let closure_5 = tmp;
              let closure_4 = tmp2;
              is_activity_start = undefined;
              channelId = undefined;
              c3 = undefined;
              embedded_activity_location_kind = undefined;
              location_stack = undefined;
              source = undefined;
              channel = undefined;
              closure_8 = undefined;
              const tmp51 = resolveFrameLaunchContext(application_id, closure_2);
              if (null != tmp51) {
                ({ isStart: c1, channelId } = tmp51);
                ({ guildId: c3, locationKind: c4, analyticsLocations: c5, source: c6 } = tmp51);
                channel = null;
                if (null != channelId) {
                  channel = channel.getChannel(channelId);
                }
                source = 1;
                c7 = 1;
                const obj6 = { value: obj4.getActivityLaunchErrorInfo(closure_1, application_id), done: false };
                obj4 = activityLaunchErrorUtils;
                return obj6;
              }
            }
          } else if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            return { value, done: true };
          } else {
            closure_8 = value;
            const obj8 = {
              channel_id: channelId,
              guild_id: guildId,
              application_id,
              raw_thermal_state: obj2.getRawThermalState(),
              is_activity_start,
              channel_type: type,
              location_stack,
              error_type: closure_8.errorType,
              error_status: closure_8.errorStatus,
              error_code: closure_8.errorCode,
              source,
              embedded_activity_location_kind,
            };
            guildId = c3;
            const track = closure_133_1(closure_133_2[19]).track;
            const ACTIVITY_SESSION_JOIN_FAILED = closure_133_15.ACTIVITY_SESSION_JOIN_FAILED;
            closure_133_1(closure_133_2[19]);
            if (c3 == null) {
              guildId = undefined;
              obj = channel;
              if (channel != null) {
                guildId = obj.getGuildId();
              }
            }
            type = undefined;
            obj2 = closure_133_1(closure_133_2[18]);
            if (channel != null) {
              type = channel.type;
            }
            track(ACTIVITY_SESSION_JOIN_FAILED, obj8);
            closure_133_31(application_id, closure_133_0(closure_133_2[31]).MetricEvents.FRAME_SESSION_JOIN_FAILED);
          }
          c7 = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp34) {
          c7 = 3;
          throw tmp34;
        }
      }
    })();
  });
  return obj(...arguments);
};
const GUILD_VOCAL_CHANNEL_TYPES = ChannelRecord.GUILD_VOCAL_CHANNEL_TYPES;
({
  AnalyticEvents: closure_15,
  RPCCloseCodes: closure_16,
  Endpoints: closure_17,
  RTCConnectionStates: closure_18,
  ComponentActions: closure_19,
  ApplicationFlags: closure_20,
} = Constants);
let closure_21 = {};
let closure_22 = {};
let closure_23 = {};
let c33;
class EmbeddedActivitiesManager extends LifecycleManager {
  constructor() {
    let applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    require = applyArgumentsResult;
    applyArgumentsResult.handleSelectedChannelUpdate = function handleSelectedChannelUpdate() {
      let _location;
      let applicationId;
      let closure_0;
      voiceChannelId = voiceChannelId.getVoiceChannelId();
      const selfEmbeddedActivities = EmbeddedActivitiesStore.getSelfEmbeddedActivities();
      const values = selfEmbeddedActivities.values();
      const iter = values[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        ({ location: _location, applicationId } = nextResult);
        let obj2 = embeddedActivityLocationUtils;
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
          obj = { location: _location, applicationId };
          let leaveActivityResult = require.leaveActivity(obj);
        }
        continue;
      }
      if (null != voiceChannelId) {
        const embeddedActivitiesForChannel = EmbeddedActivitiesStore.getEmbeddedActivitiesForChannel(voiceChannelId);
        require = id.getId();
        const item = embeddedActivitiesForChannel.forEach((userIds) => {
          userIds = userIds.userIds;
          if (userIds.has(closure_0)) {
            obj = embeddedActivityLocationUtils;
            const selfEmbeddedActivityForChannel = EmbeddedActivitiesStore.getSelfEmbeddedActivityForChannel(
              obj.getEmbeddedActivityLocationChannelId(userIds.location),
            );
            if (null == selfEmbeddedActivityForChannel) {
              const obj5 = { location: null, applicationId: null };
              ({ location: obj3.location, applicationId: obj3.applicationId } = userIds);
              require.leaveActivity(obj5);
            } else if (null == c33) {
              const obj6 = { location: null, applicationId: null };
              ({ location: obj2.location, applicationId: obj2.applicationId } = selfEmbeddedActivityForChannel);
              require.hidePIPEmbed(obj6);
            }
          }
        });
      }
    };
    applyArgumentsResult.handleActivityWebViewRelease = function handleActivityWebViewRelease() {
      require.releaseWebView();
    };
    applyArgumentsResult.handleActivityLaunchSuccess = function handleActivityLaunchSuccess(arg0) {
      let closure_129_0;
      let closure_129_1;
      ({ applicationId: closure_129_0, nonce: closure_129_1 } = arg0);
      const timerId = setTimeout(() => {
        let tmp5;
        if (null != closure_2_22[closure_0]) {
          if (closure_2_22[closure_0].nonce === tmp2) {
            delete tmp3[tmp];
            tmp5 = tmp4;
          }
        }
        return tmp5;
      }, 2000);
      obj = getURLForApplication;
      if (obj.isUsingDevShelfActivityUrlOverride()) {
        const result = require.showDevShelfOverrideEnabled();
      }
    };
    applyArgumentsResult = _asyncToGenerator(async (arg0) => {
      let application_id;
      let c0;
      let c1;
      let c2;
      let c3;
      let c4;
      let c5;
      let c6;
      let guildId;
      let is_activity_start;
      let locations;
      let obj3;
      let source;
      let type;
      closure_0 = arg0;
      if (is_activity_start === 2) {
        is_activity_start = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
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
          let channel_id;
          let embedded_activity_location_kind;
          let closure_7;
          let closure_8;
          let channel;
          let raw_thermal_state;
          is_activity_start = 2;
          if (0 === application_id) {
            if (arg0 === 1) {
              is_activity_start = 3;
              throw value;
            } else if (arg0 === 2) {
              is_activity_start = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              let closure_3 = tmp4;
              c0 = undefined;
              c1 = undefined;
              channel_id = undefined;
              c3 = undefined;
              embedded_activity_location_kind = undefined;
              ({
                error: c0,
                nonce: c1,
                channelId: c2,
                guildId: c3,
                applicationId: c4,
                isStart: c5,
                locationKind: c6,
              } = closure_0);
              closure_7 = undefined;
              closure_8 = undefined;
              channel = undefined;
              raw_thermal_state = undefined;
              application_id = 1;
              is_activity_start = 1;
              return { value: "Reflect", done: true };
            }
          } else if (1 === application_id) {
            if (arg0 === 1) {
              is_activity_start = 3;
              throw value;
            } else if (arg0 === 2) {
              is_activity_start = 3;
              const obj5 = { value, done: true };
              return obj5;
            } else {
              closure_7 = closure_1_25(application_id, c1);
              application_id = 2;
              is_activity_start = 1;
              const obj6 = { value: obj3.getActivityLaunchErrorInfo(c0, application_id), done: false };
              obj3 = closure_0(channel_id[32]);
              return obj6;
            }
          } else if (arg0 === 1) {
            is_activity_start = 3;
            throw value;
          } else if (arg0 === 2) {
            is_activity_start = 3;
            const obj7 = { value, done: true };
            return obj7;
          } else {
            closure_8 = value;
            closure_131_1.showLaunchErrorModal(closure_8.message);
            channel = channel.getChannel(channel_id);
            const obj8 = guildId(channel_id[18]);
            raw_thermal_state = obj8.getRawThermalState();
            const obj9 = {
              channel_id,
              guild_id: guildId,
              application_id,
              raw_thermal_state,
              is_activity_start,
              channel_type: type,
              location_stack: locations,
              error_type: closure_8.errorType,
              error_status: closure_8.errorStatus,
              error_code: closure_8.errorCode,
              source,
              embedded_activity_location_kind,
            };
            const tmp46 = guildId(channel_id[19]);
            guildId = c3;
            const track = tmp46.track;
            const ACTIVITY_SESSION_JOIN_FAILED = constants.ACTIVITY_SESSION_JOIN_FAILED;
            if (c3 == null) {
              guildId = undefined;
              obj = channel;
              if (channel != null) {
                guildId = obj.getGuildId();
              }
            }
            type = undefined;
            if (channel != null) {
              type = channel.type;
            }
            locations = undefined;
            if (closure_7 != null) {
              locations = closure_7.locations;
            }
            source = undefined;
            if (closure_7 != null) {
              source = closure_7.source;
            }
            track(ACTIVITY_SESSION_JOIN_FAILED, obj9);
            is_activity_start = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp32) {
          is_activity_start = 3;
          throw tmp32;
        }
      }
    });
    applyArgumentsResult.handleActivityLaunchFail = function () {
      return closure_0(...arguments);
    };
    applyArgumentsResult.handleActivityLaunchCancel = function handleActivityLaunchCancel(applicationId) {
      applicationId = applicationId.applicationId;
      if (null != closure_1_22[applicationId]) {
        if (closure_1_22[applicationId].nonce === tmp) {
          delete tmp2[applicationId];
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
              obj = { location: _location, applicationId: id };
              let leaveActivityResult = require.leaveActivity(obj);
            }
            continue;
          }
          if (reason.code !== constants2.CLOSE_NORMAL) {
            const obj4 = { rpc_close_code: null, rpc_message: null, application_id: id };
            ({ code: obj3.rpc_close_code, message: obj3.rpc_message } = reason);
            const obj2 = AnalyticsUtilsDefault;
            obj2.track(constants.ACTIVITY_CLOSED_RPC_ERROR, obj4);
            require.showErrorModal(reason, id);
          }
        }
      }
    };
    applyArgumentsResult.handleCallDelete = function handleCallDelete(channelId) {
      channelId = channelId.channelId;
      voiceChannelId = SelectedChannelStore.getVoiceChannelId();
      const tmp2 = null != voiceChannelId && voiceChannelId === channelId;
      if (tmp2) {
        require.handleCallEnded(channelId);
      }
    };
    applyArgumentsResult.handleRTCConnectionState = function handleRTCConnectionState(state) {
      if (state.state === constants3.DISCONNECTED) {
        require.handleCallEnded(state.channelId);
      }
    };
    applyArgumentsResult.handleCallEnded = function handleCallEnded(channelId) {
      const selfEmbeddedActivityForChannel = EmbeddedActivitiesStore.getSelfEmbeddedActivityForChannel(channelId);
      if (null != selfEmbeddedActivityForChannel) {
        obj = { location: null, applicationId: null };
        ({ location: obj.location, applicationId: obj.applicationId } = selfEmbeddedActivityForChannel);
        require.leaveActivity(obj);
      }
    };
    applyArgumentsResult = _asyncToGenerator(async (channelId) => {
      let _undefined;
      let analyticsLocations;
      let c0;
      let c1;
      let c2;
      let c3;
      let c4;
      let channel;
      let commandOrigin;
      let launchId;
      let obj14;
      let obj18;
      let obj9;
      let type;
      if (1 === c5) {
        if (channelId === 1) {
          let c6 = 3;
          throw value;
        } else if (channelId === 2) {
          c6 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          type = channel.getChannel(channelId);
          if (undefined !== type) {
            type = undefined;
            const has = closure_1_7.has;
            if (type != null) {
              type = type.type;
            }
            if (!has(type)) {
              closure_1_14.getSelfEmbeddedActivityForChannel(channelId);
              let applicationId;
              if (applicationId != null) {
                applicationId = applicationId.applicationId;
              }
              if (applicationId !== _undefined) {
                c5 = 2;
                c6 = 1;
                const obj5 = { value: obj18.fetchApplication(_undefined), done: false };
                obj18 = _undefined(analyticsLocations[38]);
                return obj5;
              }
            }
          }
        }
      } else {
        let guildId;
        if (2 === c5) {
          if (channelId === 1) {
            c6 = 3;
            throw value;
          } else if (channelId === 2) {
            c6 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            let closure_7 = value;
            const obj24 = channelId(analyticsLocations[39]);
            if (obj24.getIsActivitiesEnabledForCurrentPlatform()) {
              let supported_platforms;
              const tmp56 = _undefined(analyticsLocations[41]);
              if (closure_7 != null) {
                const embedded_activity_config = closure_7.embedded_activity_config;
                if (embedded_activity_config != null) {
                  supported_platforms = embedded_activity_config.supported_platforms;
                }
              }
              if (tmp56(supported_platforms)) {
                guildId = undefined;
                const obj13 = type;
                if (type != null) {
                  guildId = obj13.getGuildId();
                }
                _undefined = guildId;
                if (guildId == null) {
                  _undefined = undefined;
                }
                guildId = _undefined;
                const obj7 = { guildId };
                c5 = 3;
                c6 = 1;
                const obj8 = { value: obj14.fetchShelf(obj7), done: false };
                obj14 = channelId(analyticsLocations[42]);
                return obj8;
              } else {
                const showLaunchErrorModal2 = closure_132_1.showLaunchErrorModal;
                const intl2 = channelId(analyticsLocations[40]).intl;
                const result = showLaunchErrorModal2(intl2.string(channelId(analyticsLocations[40]).t.uGDCcw));
              }
            } else {
              const showLaunchErrorModal = closure_132_1.showLaunchErrorModal;
              const intl = channelId(analyticsLocations[40]).intl;
              showLaunchErrorModal(intl.string(channelId(analyticsLocations[40]).t.UXoQTp));
            }
          }
        } else {
          if (3 === c5) {
            if (channelId === 1) {
              c6 = 3;
              throw value;
            } else if (channelId === 2) {
              c6 = 3;
              const obj10 = { value, done: true };
              return obj10;
            } else {
              channel = value;
              const activityConfigs = channel.activityConfigs;
              const applications = channel.applications;
              const obj11 = { applicationId: _undefined, activityConfigs, applications };
              if (null == _undefined(analyticsLocations[17])(obj11)) {
                const obj12 = { guildId, force: true };
                c5 = 4;
                c6 = 1;
                const obj15 = { value: obj9.fetchShelf(obj12), done: false };
                obj9 = channelId(analyticsLocations[42]);
                return obj15;
              }
            }
          } else if (4 === c5) {
            if (channelId === 1) {
              c6 = 3;
              throw value;
            } else if (channelId === 2) {
              c6 = 3;
              const obj16 = { value, done: true };
              return obj16;
            } else {
              closure_12 = value;
              const obj17 = {
                applicationId: _undefined,
                activityConfigs: closure_12.activityConfigs,
                applications: closure_12.applications,
              };
              _undefined(analyticsLocations[17])(obj17);
            }
          } else if (5 === c5) {
            if (channelId === 1) {
              c6 = 3;
              throw value;
            } else if (channelId === 2) {
              c6 = 3;
              const obj19 = { value, done: true };
              return obj19;
            }
          } else if (channelId === 1) {
            c6 = 3;
            throw value;
          } else if (channelId === 2) {
            c6 = 3;
            obj = { value, done: true };
            return obj;
          }
          const embeddedActivitiesForChannel = closure_1_14.getEmbeddedActivitiesForChannel(channelId);
          let closure_13 = embeddedActivitiesForChannel.find(
            (applicationId) => applicationId.applicationId === _undefined,
          );
          size = undefined;
          if (closure_13 != null) {
            size = closure_13.userIds.size;
          }
          analyticsLocations = size;
          if (size == null) {
            analyticsLocations = 0;
          }
          if (analyticsLocations > 0) {
            const obj20 = {
              channelId,
              applicationId: _undefined,
              launchId,
              inputApplication: null,
              analyticsLocations,
              inviterUserId,
            };
            launchId = undefined;
            const maybeJoinEmbeddedActivity = channelId(analyticsLocations[43]).maybeJoinEmbeddedActivity;
            const tmp33 = channelId(analyticsLocations[43]);
            if (closure_13 != null) {
              launchId = closure_13.launchId;
            }
            c5 = 6;
            c6 = 1;
            const obj21 = { value: maybeJoinEmbeddedActivity(obj20), done: false };
            return obj21;
          } else {
            const obj22 = {
              targetApplicationId: _undefined,
              channelId,
              analyticsLocations,
              commandOrigin,
              inviterUserId,
            };
            c5 = 5;
            c6 = 1;
            const obj23 = { value: _undefined(analyticsLocations[44])(obj22), done: false };
            return obj23;
          }
        }
      }
      await "IconComponent";
      commandOrigin = 0;
      ({ channelId: c0, applicationId: c1, analyticsLocations: c2, commandOrigin: c3, inviterUserId: c4 } = channelId);
      return "Reflect";
    });
    applyArgumentsResult.handleDeferredOpen = function () {
      return closure_0(...arguments);
    };
    applyArgumentsResult.handleGuildDelete = function handleGuildDelete(guild) {
      guild = guild.guild;
      const selfEmbeddedActivities = EmbeddedActivitiesStore.getSelfEmbeddedActivities();
      const item = selfEmbeddedActivities.forEach((location) => {
        const _location = location.location;
        const applicationId = location.applicationId;
        obj = embeddedActivityLocationUtils;
        if (guild.id === obj.getEmbeddedActivityLocationGuildId(_location)) {
          const obj2 = { location: _location, applicationId };
          require.leaveActivity(obj2);
        }
      });
    };
    applyArgumentsResult.handleChannelDelete = function handleChannelDelete(channel) {
      const selfEmbeddedActivityForChannel = EmbeddedActivitiesStore.getSelfEmbeddedActivityForChannel(
        channel.channel.id,
      );
      if (null != selfEmbeddedActivityForChannel) {
        obj = { location: null, applicationId: null };
        ({ location: obj.location, applicationId: obj.applicationId } = selfEmbeddedActivityForChannel);
        require.leaveActivity(obj);
      }
    };
    applyArgumentsResult.handleInteractionQueue = function handleInteractionQueue(arg0) {
      let applicationId;
      let data;
      let locations;
      let nonce;
      let nonce2;
      let source;
      ({ nonce, data } = arg0);
      if (null == closure_1_22[data.applicationId]) {
        let tmp2;
        if (data.interactionType === InteractionTypes.InteractionTypes.APPLICATION_COMMAND) {
          const items = [AnalyticsLocationDefault.INTERACTION_APPLICATION_COMMAND];
          tmp2 = items;
        } else if (data.interactionType === InteractionTypes.InteractionTypes.MESSAGE_COMPONENT) {
          const items1 = [AnalyticsLocationDefault.INTERACTION_MESSAGE_COMPONENT];
          tmp2 = items1;
        } else if (data.interactionType === InteractionTypes.InteractionTypes.MODAL_SUBMIT) {
          const items2 = [AnalyticsLocationDefault.INTERACTION_MODAL_SUBMIT];
          tmp2 = items2;
        }
        obj = { applicationId: data.applicationId, nonce, locations: tmp2 };
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
          closure_1_23[nonce] = data.applicationId;
        }
      }
    };
    applyArgumentsResult.handleInteractionCreate = function handleInteractionCreate(nonce) {
      nonce = nonce.nonce;
      if (null != nonce) {
        if (null != closure_1_23[nonce]) {
          if (null != closure_1_22[closure_1_23[nonce]]) {
            closure_1_22[closure_1_23[nonce]].interactionId = tmp;
          }
        }
      }
    };
    applyArgumentsResult.handleInteractionSuccess = function handleInteractionSuccess(nonce) {
      nonce = nonce.nonce;
      if (null != nonce) {
        const tmp = closure_23[nonce];
        if (null != tmp) {
          delete closure_23[nonce];
          let closure_0 = tmp;
          const tmp2 = globalThis;
          const _setTimeout = setTimeout;
          const timerId = setTimeout(() => {
            let tmp5;
            if (null != closure_2_22[closure_0]) {
              if (closure_2_22[closure_0].nonce === tmp2) {
                delete tmp3[tmp];
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
        if (null != closure_1_23[nonce]) {
          delete closure_1_23[nonce];
          if (null != closure_1_22[closure_1_23[nonce]]) {
            if (closure_1_22[closure_1_23[nonce]].nonce === nonce) {
              delete tmp2[closure_1_23[nonce]];
            }
          }
        }
      }
    };
    return applyArgumentsResult;
  }
  _initialize() {
    SelectedChannelStore.addChangeListener(this.handleSelectedChannelUpdate);
    const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
    const subscription = ComponentDispatch.subscribe(
      constants4.RELEASE_ACTIVITY_WEB_VIEW,
      this.handleActivityWebViewRelease,
    );
    const ComponentDispatch2 = ComponentDispatchUtils.ComponentDispatch;
    const subscription1 = ComponentDispatch2.subscribe(constants4.OPEN_EMBEDDED_ACTIVITY, handleOpenEmbeddedActivity);
    obj = DispatcherDefault;
    const subscription2 = obj.subscribe("EMBEDDED_ACTIVITY_LAUNCH_START", handleActivityLaunchStart);
    const obj2 = DispatcherDefault;
    const subscription3 = obj2.subscribe("EMBEDDED_ACTIVITY_LAUNCH_SUCCESS", this.handleActivityLaunchSuccess);
    const obj3 = DispatcherDefault;
    const subscription4 = obj3.subscribe("EMBEDDED_ACTIVITY_LAUNCH_FAIL", this.handleActivityLaunchFail);
    const obj4 = DispatcherDefault;
    const subscription5 = obj4.subscribe("EMBEDDED_ACTIVITY_LAUNCH_CANCEL", this.handleActivityLaunchCancel);
    const obj5 = DispatcherDefault;
    const subscription6 = obj5.subscribe("EMBEDDED_ACTIVITY_CLOSE", handleActivityClose);
    const obj6 = DispatcherDefault;
    const subscription7 = obj6.subscribe("EMBEDDED_ACTIVITY_DEFERRED_OPEN", this.handleDeferredOpen);
    const obj7 = DispatcherDefault;
    const subscription8 = obj7.subscribe("RPC_APP_DISCONNECTED", this.handleRPCDisconnect);
    const obj8 = DispatcherDefault;
    const subscription9 = obj8.subscribe("CALL_DELETE", this.handleCallDelete);
    const obj9 = DispatcherDefault;
    const subscription10 = obj9.subscribe("RTC_CONNECTION_STATE", this.handleRTCConnectionState);
    const obj10 = DispatcherDefault;
    const subscription11 = obj10.subscribe("GUILD_DELETE", this.handleGuildDelete);
    const obj11 = DispatcherDefault;
    const subscription12 = obj11.subscribe("CHANNEL_DELETE", this.handleChannelDelete);
    const obj12 = DispatcherDefault;
    const subscription13 = obj12.subscribe("INTERACTION_QUEUE", this.handleInteractionQueue);
    const obj13 = DispatcherDefault;
    const subscription14 = obj13.subscribe("INTERACTION_CREATE", this.handleInteractionCreate);
    const obj14 = DispatcherDefault;
    const subscription15 = obj14.subscribe("INTERACTION_SUCCESS", this.handleInteractionSuccess);
    const obj15 = DispatcherDefault;
    const subscription16 = obj15.subscribe("INTERACTION_FAILURE", this.handleInteractionFailure);
  }
  _terminate() {
    SelectedChannelStore.removeChangeListener(this.handleSelectedChannelUpdate);
    const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
    ComponentDispatch.unsubscribe(constants4.RELEASE_ACTIVITY_WEB_VIEW, this.handleActivityWebViewRelease);
    const ComponentDispatch2 = ComponentDispatchUtils.ComponentDispatch;
    ComponentDispatch2.unsubscribe(constants4.OPEN_EMBEDDED_ACTIVITY, handleOpenEmbeddedActivity);
    obj = DispatcherDefault;
    obj.unsubscribe("EMBEDDED_ACTIVITY_LAUNCH_START", handleActivityLaunchStart);
    const obj2 = DispatcherDefault;
    obj2.unsubscribe("EMBEDDED_ACTIVITY_LAUNCH_SUCCESS", this.handleActivityLaunchSuccess);
    const obj3 = DispatcherDefault;
    obj3.unsubscribe("EMBEDDED_ACTIVITY_LAUNCH_FAIL", this.handleActivityLaunchFail);
    const obj4 = DispatcherDefault;
    obj4.unsubscribe("EMBEDDED_ACTIVITY_LAUNCH_CANCEL", this.handleActivityLaunchCancel);
    const obj5 = DispatcherDefault;
    obj5.unsubscribe("EMBEDDED_ACTIVITY_CLOSE", handleActivityClose);
    const obj6 = DispatcherDefault;
    obj6.unsubscribe("EMBEDDED_ACTIVITY_DEFERRED_OPEN", this.handleDeferredOpen);
    const obj7 = DispatcherDefault;
    obj7.unsubscribe("RPC_APP_DISCONNECTED", this.handleRPCDisconnect);
    const obj8 = DispatcherDefault;
    obj8.unsubscribe("CALL_DELETE", this.handleCallDelete);
    const obj9 = DispatcherDefault;
    obj9.unsubscribe("RTC_CONNECTION_STATE", this.handleRTCConnectionState);
    const obj10 = DispatcherDefault;
    obj10.unsubscribe("GUILD_DELETE", this.handleGuildDelete);
    const obj11 = DispatcherDefault;
    obj11.unsubscribe("CHANNEL_DELETE", this.handleChannelDelete);
    const obj12 = DispatcherDefault;
    obj12.unsubscribe("INTERACTION_QUEUE", this.handleInteractionQueue);
    const obj13 = DispatcherDefault;
    obj13.unsubscribe("INTERACTION_CREATE", this.handleInteractionCreate);
    const obj14 = DispatcherDefault;
    obj14.unsubscribe("INTERACTION_SUCCESS", this.handleInteractionSuccess);
    const obj15 = DispatcherDefault;
    obj15.unsubscribe("INTERACTION_FAILURE", this.handleInteractionFailure);
  }
}
const prototype = EmbeddedActivitiesManager.prototype;
let size = size_mod;
let result = size.fileFinishedImporting("modules/activities/EmbeddedActivitiesManager.tsx");

export default EmbeddedActivitiesManager;
export const trackFrameSessionStart = function trackFrameSessionStart(applicationId, analyticsContext) {
  let activitiesInfraVersion;
  let analyticsLocations;
  let analyticsLocations2;
  let channelId;
  let commandContextType;
  let compositeInstanceId;
  let interactionId;
  let interactionId2;
  let inviterUserId;
  let isStart;
  let launchId;
  let shelf_rank;
  let shelf_rank1;
  let source;
  let source2;
  let tmp38;
  let tmp52;
  let type;
  let type1;
  let userParticipantCount;
  let closure_0 = applicationId;
  let result = analyticsContext;
  obj = pendingFrameLaunch;
  if (analyticsContext == null) {
    result = obj.consumePendingFrameLaunch(applicationId);
  }
  let tmp4;
  if (null != result) {
    const obj2 = { analyticsLocations, source, interactionId };
    const merged = Object.assign(result);
    analyticsLocations = result.analyticsLocations;
    if (analyticsLocations == null) {
      let locations;
      if (closure_22[applicationId] != null) {
        locations = tmp6.locations;
      }
      analyticsLocations = locations;
    }
    source = result.source;
    if (source == null) {
      let source1;
      if (closure_22[applicationId] != null) {
        source1 = tmp6.source;
      }
      source = source1;
    }
    interactionId = result.interactionId;
    if (interactionId == null) {
      let interactionId1;
      if (closure_22[applicationId] != null) {
        interactionId1 = tmp6.interactionId;
      }
      interactionId = interactionId1;
    }
    tmp4 = obj2;
  }
  if (null != tmp4) {
    ({
      isStart,
      channelId,
      launchId,
      compositeInstanceId,
      activitiesInfraVersion,
      analyticsLocations: analyticsLocations2,
    } = tmp4);
    ({ inviterUserId, source: source2, interactionId: interactionId2 } = tmp4);
    const currentUser = UserStore.getCurrentUser();
    if (null != currentUser) {
      let items1;
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
      let locationKind = tmp4.locationKind;
      if (locationKind == null) {
        let tmp17;
        if (null != channel) {
          let PRIVATE_CHANNEL;
          if (null != guildId) {
            PRIVATE_CHANNEL = EmbeddedActivityLocationKind.EmbeddedActivityLocationKind.GUILD_CHANNEL;
          } else {
            PRIVATE_CHANNEL = EmbeddedActivityLocationKind.EmbeddedActivityLocationKind.PRIVATE_CHANNEL;
          }
          tmp17 = PRIVATE_CHANNEL;
        }
        locationKind = tmp17;
      }
      const mediaSessionId = RTCConnectionStore.getMediaSessionId();
      if (null != mediaSessionId) {
        const items = [mediaSessionId];
        items1 = items;
      } else {
        items1 = [];
      }
      const tmp2Result = v1;
      const v4Result = tmp2Result.v4();
      const _Date = Date;
      closure_21[applicationId] = {
        activitySessionId: compositeInstanceId,
        activityUserSessionId: v4Result,
        launchId,
        mediaSessionIds: items1,
        activitiesInfraVersion,
        connectedSince: Date.now(),
        frameChannelId: channelId,
        frameGuildId: guildId,
        frameLocationKind: locationKind,
      };
      const obj3 = {
        activitySessionId: compositeInstanceId,
        activityUserSessionId: v4Result,
        launchId,
        mediaSessionIds: items1,
        activitiesInfraVersion,
        connectedSince: Date.now(),
        frameChannelId: channelId,
        frameGuildId: guildId,
        frameLocationKind: locationKind,
      };
      const shelfActivities = EmbeddedActivitiesStore.getShelfActivities(guildId);
      const shelfOrder = ActivityShelfStore.getState().shelfOrder;
      const obj4 = { applicationId, activityConfigs: shelfActivities };
      const tmp27 = getShelfItemDataDefault(obj4);
      const sum = 1 + shelfOrder.findIndex((item) => item === closure_0);
      let release_phase;
      if (tmp27 != null) {
        const activity = tmp27.activity;
        if (activity != null) {
          const client_platform_config = activity.client_platform_config;
          const tmp26Result = getPlatformDefault;
          const tmp2Result5 = PlatformUtils;
          release_phase = client_platform_config[tmp26Result(undefined, tmp2Result5.getOS(tmp2Result5))].release_phase;
        }
      }
      const tmp26Result5 = ThermalUtilsDefault;
      const rawThermalState = tmp26Result5.getRawThermalState();
      const obj5 = {
        channel_id: channelId,
        guild_id: guildId,
        media_session_id: items1[0],
        activity_session_id: compositeInstanceId,
        application_id: applicationId,
        location_stack: analyticsLocations2,
        user_premium_tier: currentUser.premiumType,
        raw_thermal_state: rawThermalState,
        n_participants: userParticipantCount,
        is_activity_start: isStart,
        release_phase,
        shelf_rank,
        shelf_sorted_rank: tmp38,
        activity_user_session_id: v4Result,
        channel_type: type,
        source: source2,
        command_context_type: commandContextType,
        invite_inviter_id: inviterUserId,
        interaction_id: interactionId2,
        embedded_activity_location_kind: locationKind,
      };
      userParticipantCount = null;
      const track = AnalyticsUtilsDefault.track;
      const ACTIVITY_SESSION_JOINED = constants.ACTIVITY_SESSION_JOINED;
      AnalyticsUtilsDefault;
      if (null != channel) {
        userParticipantCount = ChannelRTCStore.getUserParticipantCount(channel.id);
      }
      shelf_rank = undefined;
      if (tmp27 != null) {
        const activity2 = tmp27.activity;
        if (activity2 != null) {
          shelf_rank = activity2.shelf_rank;
        }
      }
      tmp38 = null;
      if (sum > 0) {
        tmp38 = sum;
      }
      type = undefined;
      if (channel != null) {
        type = channel.type;
      }
      commandContextType = null;
      if (null != channel) {
        const tmp2Result6 = CommandPermissionContext;
        commandContextType = tmp2Result6.computeCommandContextType(channel, applicationId);
      }
      track(ACTIVITY_SESSION_JOINED, obj5);
      const FRAME_SESSION_JOIN = MetricEvents.MetricEvents.FRAME_SESSION_JOIN;
      const application = ApplicationStore.getApplication(applicationId);
      const tmp2Result7 = ApplicationFlagUtils;
      if (tmp2Result7.hasApplicationFlag(application, constants5.QUEST)) {
        const tmp2Result8 = QuestMatchingUtils;
        const eligibleQuestsForApplicationId = tmp2Result8.getEligibleQuestsForApplicationId(
          QuestStore.quests,
          applicationId,
          true,
        );
        if (eligibleQuestsForApplicationId.length > 0) {
          const _HermesInternal2 = HermesInternal;
          const items2 = ["application_id:" + applicationId];
          const found = eligibleQuestsForApplicationId.find(f99171);
          let id;
          if (found != null) {
            id = found.id;
          }
          if (null != id) {
            const _HermesInternal = HermesInternal;
            items2.push("quest_id:" + id);
          }
          const obj6 = { name: FRAME_SESSION_JOIN, tags: items2 };
          const tmp26Result7 = MonitoringAgentDefault;
          tmp26Result7.increment(obj6);
        }
      }
      const obj7 = {
        location_stack: analyticsLocations2,
        channel_id: channelId,
        channel_type: type1,
        guild_id: guildId,
        application_id: applicationId,
        instance_id: launchId,
        initial_media_session_id: items1[0],
        activity_user_session_id: v4Result,
        raw_thermal_state: rawThermalState,
        is_activity_start: isStart,
        shelf_rank: shelf_rank1,
        shelf_sorted_rank: tmp52,
        activities_infra_version: activitiesInfraVersion,
        embedded_activity_location_kind: locationKind,
      };
      type1 = undefined;
      const track2 = AnalyticsUtilsDefault.track;
      const ACTIVITY_IFRAME_MOUNT = constants.ACTIVITY_IFRAME_MOUNT;
      AnalyticsUtilsDefault;
      if (channel != null) {
        type1 = channel.type;
      }
      shelf_rank1 = undefined;
      if (tmp27 != null) {
        const activity3 = tmp27.activity;
        if (activity3 != null) {
          shelf_rank1 = activity3.shelf_rank;
        }
      }
      tmp52 = null;
      if (sum > 0) {
        tmp52 = sum;
      }
      track2(ACTIVITY_IFRAME_MOUNT, obj7);
    }
  }
};
export const getActiveAnalyticsSessionIDs = function getActiveAnalyticsSessionIDs(id) {
  return closure_21[id];
};
export const trackFrameSessionStartFailed = function trackFrameSessionStartFailed() {
  return obj(...arguments);
};
export const trackFrameSessionEnd = function trackFrameSessionEnd(applicationId) {
  let shelf_rank;
  let tmp26;
  let type;
  const currentUser = UserStore.getCurrentUser();
  const tmp = applicationId;
  if (null != closure_21[applicationId]) {
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
          const client_platform_config = activity.client_platform_config;
          const tmp11Result = getPlatformDefault;
          const obj2 = PlatformUtils;
          release_phase = client_platform_config[tmp11Result(undefined, obj2.getOS(obj2))].release_phase;
        }
      }
      const tmp11Result4 = ThermalUtilsDefault;
      const rawThermalState = tmp11Result4.getRawThermalState();
      let diff = null;
      if (null != closure_21[applicationId].connectedSince) {
        const _Date = Date;
        diff = Date.now() - tmp3.connectedSince;
      }
      const obj3 = {
        channel_id: frameChannelId,
        guild_id: frameGuildId,
        media_session_id: closure_21[applicationId].mediaSessionIds[0],
        activity_session_id: closure_21[applicationId].activitySessionId,
        application_id: applicationId,
        duration_ms: diff,
        user_premium_tier: currentUser.premiumType,
        raw_thermal_state: rawThermalState,
        release_phase,
        shelf_rank,
        activity_user_session_id: closure_21[applicationId].activityUserSessionId,
        channel_type: type,
        media_session_ids: null,
        embedded_activity_location_kind: null,
      };
      shelf_rank = undefined;
      const track = AnalyticsUtilsDefault.track;
      const ACTIVITY_SESSION_LEFT = constants.ACTIVITY_SESSION_LEFT;
      AnalyticsUtilsDefault;
      if (tmp13 != null) {
        const activity2 = tmp13.activity;
        if (activity2 != null) {
          shelf_rank = activity2.shelf_rank;
        }
      }
      type = undefined;
      if (channel != null) {
        type = channel.type;
      }
      ({ mediaSessionIds: obj4.media_session_ids, frameLocationKind: obj4.embedded_activity_location_kind } =
        closure_21[applicationId]);
      track(ACTIVITY_SESSION_LEFT, obj3);
      const obj7 = {
        channel_id: frameChannelId,
        guild_id: frameGuildId,
        application_id: applicationId,
        instance_ids: tmp26,
        media_session_ids: null,
        activity_user_session_id: null,
        raw_thermal_state: rawThermalState,
        duration_ms: diff,
        embedded_activity_location_kind: closure_21[applicationId].frameLocationKind,
      };
      tmp26 = undefined;
      const track2 = AnalyticsUtilsDefault.track;
      const ACTIVITY_IFRAME_UNMOUNT = constants.ACTIVITY_IFRAME_UNMOUNT;
      AnalyticsUtilsDefault;
      if (null != closure_21[applicationId].launchId) {
        const items = [closure_21[applicationId].launchId];
        tmp26 = items;
      }
      ({ mediaSessionIds: obj5.media_session_ids, activityUserSessionId: obj5.activity_user_session_id } =
        closure_21[applicationId]);
      track2(ACTIVITY_IFRAME_UNMOUNT, obj7);
      delete closure_21[tmp];
    }
  }
};
