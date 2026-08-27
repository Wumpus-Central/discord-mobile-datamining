// discord_app/modules/activities/EmbeddedActivitiesManager.tsx
import set2 from "../../utils/PlatformUtils.tsx";
import expandEventPropertiesDefault from "../../utils/AnalyticsUtils.tsx";
import dispatcherDefault from "../../Dispatcher.tsx";
import ComponentDispatcher from "../../utils/ComponentDispatchUtils.tsx";
import initializeDefault from "../../lib/LifecycleManager.tsx";
import _modDef4674 from "../../actions/ChannelRTCActionCreators.tsx";
import getPlatformDefault from "utils/getPlatform.tsx";
import getShelfItemDataDefault from "getShelfItemData.tsx";
import _launchFrameOnNativeDefault from "../frames/FramesActionCreators.native.tsx";
import closure_3 from "../../../_runtime/00005_asyncGeneratorStep.js";
import closure_4 from "../calls/ChannelRTCStore.tsx";
import { GUILD_VOCAL_CHANNEL_TYPES } from "../../records/ChannelRecord.tsx";
import closure_6 from "../../stores/AuthenticationStore.tsx";
import closure_7 from "../../stores/ChannelStore.tsx";
import closure_8 from "../../stores/RTCConnectionStore.tsx";
import closure_9 from "../../stores/SelectedChannelStore.tsx";
import closure_10 from "../../stores/UserStore.tsx";
import closure_11 from "ActivityShelfStore.tsx";
import closure_12 from "EmbeddedActivitiesStore.tsx";
import ME from "../../Constants.tsx";
import { stashPendingFrameLaunch } from "utils/pendingFrameLaunch.tsx";

require = arg1;
function getShelfItemTrackingProperties(activity) {
  let releasePhase;
  if (activity != null) {
    activity = activity.activity;
    if (activity != null) {
      const obj = set2;
      releasePhase = activity.client_platform_config[getPlatformDefault(undefined, obj.getOS(obj))].release_phase;
      const tmp4 = getPlatformDefault;
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
    const obj = { nonce: null, locations: null, source: null };
    obj[0] = nonce;
    obj[1] = analyticsLocations;
    obj[2] = source;
    closure_19[applicationId] = obj;
  }
}
function handleActivityClose() {
  const self = this;
  const apply = _handleActivityClose.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _handleActivityClose() {
  const self = this;
  let tmp = callback((arg0) => {
    closure_0 = arg0;
    c3 = 0;
    c4 = 0;
    const iter = (function*(arg0) {
      if (sessionId2 === 2) {
        sessionId2 = 3;
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
          sessionId2 = 2;
          if (0 === embeddedActivityDurationMs) {
            if (arg0 === 1) {
              sessionId2 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              sessionId2 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              dependencyMap = tmp6;
              let lib = tmp3;
              let callback;
              lib = undefined;
              dependencyMap = undefined;
              let tmp = callback;
              ({ applicationId: c0, location: c1, instanceId: c2 } = callback);
              embeddedActivityDurationMs = undefined;
              sessionId2 = undefined;
              closure_5 = undefined;
              let sessionId;
              let channel;
              let type;
              let premiumType;
              let currentUser;
              let activity;
              let releasePhase;
              let constants;
              embeddedActivityDurationMs = 1;
              sessionId2 = 1;
              return { value: "ct", done: true };
            }
          } else {
            if (1 === tmp6) {
              if (arg0 === 1) {
                sessionId2 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                sessionId2 = 3;
                obj1 = { value: null, done: true };
                obj1[0] = arg1;
                return obj1;
              } else {
                embeddedActivityDurationMs = releasePhase.getEmbeddedActivityDurationMs(lib.id, callback);
                sessionId2 = sessionId.getSessionId();
                let tmp9 = null != dependencyMap;
                if (tmp9) {
                  tmp9 = null != sessionId2;
                }
                if (tmp9) {
                  const HTTP = callback(530).HTTP;
                  let obj2 = { url: null, body: null, retries: 2, rejectWithError: false };
                  obj2[0] = closure_15.ACTIVITY_LEAVE(callback, lib.id, dependencyMap);
                  let obj3 = { session_id: null };
                  obj3[0] = sessionId2;
                  obj2[1] = obj3;
                  embeddedActivityDurationMs = 2;
                  sessionId2 = 1;
                  const obj4 = { value: null, done: false };
                  obj4[0] = HTTP.post(obj2);
                  return obj4;
                }
              }
            } else if (arg0 === 1) {
              sessionId2 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              sessionId2 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            }
            closure_5 = table[callback];
            obj1 = callback(4079);
            sessionId = obj1.getEmbeddedActivityLocationChannelId(lib);
            obj2 = callback(4079);
            channel = obj2.getEmbeddedActivityLocationGuildId(lib);
            type = channel.getChannel(sessionId);
            premiumType = currentUser.getCurrentUser();
            if (null != closure_5) {
              if (null != premiumType) {
                if (null == closure_5.connectedSince) {
                  currentUser = releasePhase.getShelfActivities(channel);
                  const obj5 = { applicationId: null, activityConfigs: null };
                  obj5[0] = callback;
                  obj5[1] = currentUser;
                  activity = lib(9379)(obj5);
                  releasePhase = callback2(activity).releasePhase;
                  constants = lib(9380).getRawThermalState();
                  const obj13 = lib(9380);
                  const obj6 = { channel_id: null, guild_id: null, media_session_id: null, activity_session_id: null, application_id: null, duration_ms: null, user_premium_tier: null, raw_thermal_state: null, release_phase: null, shelf_rank: null, activity_user_session_id: null, channel_type: null, media_session_ids: null, embedded_activity_location_kind: null };
                  obj6[0] = sessionId;
                  obj6[1] = channel;
                  obj6[2] = closure_5.mediaSessionIds[0];
                  obj6[3] = closure_5.activitySessionId;
                  tmp = callback;
                  obj6[4] = callback;
                  tmp = embeddedActivityDurationMs;
                  obj6[5] = embeddedActivityDurationMs;
                  tmp = premiumType;
                  obj6[6] = premiumType.premiumType;
                  tmp = constants;
                  obj6[7] = constants;
                  tmp = releasePhase;
                  obj6[8] = releasePhase;
                  let shelf_rank;
                  if (activity != null) {
                    activity = activity.activity;
                    if (activity != null) {
                      shelf_rank = activity.shelf_rank;
                    }
                  }
                  obj6[9] = shelf_rank;
                  obj6[10] = closure_5.activityUserSessionId;
                  type = undefined;
                  if (type != null) {
                    type = type.type;
                  }
                  obj6[11] = type;
                  obj6[12] = closure_5.mediaSessionIds;
                  obj6[13] = lib.kind;
                  lib(698).track(constants.ACTIVITY_SESSION_LEFT, obj6);
                  obj3 = lib(698);
                  const obj7 = { channel_id: null, guild_id: null, application_id: null, instance_ids: null, media_session_ids: null, activity_user_session_id: null, raw_thermal_state: null, duration_ms: null, embedded_activity_location_kind: null };
                  obj7[0] = sessionId;
                  obj7[1] = channel;
                  obj7[2] = callback;
                  let tmp41;
                  if (null != closure_5.launchId) {
                    const items = [closure_5.launchId];
                    tmp41 = items;
                  }
                  obj7[3] = tmp41;
                  obj7[4] = closure_5.mediaSessionIds;
                  obj7[5] = closure_5.activityUserSessionId;
                  obj7[6] = constants;
                  obj7[7] = embeddedActivityDurationMs;
                  obj7[8] = lib.kind;
                  obj3.track(constants.ACTIVITY_IFRAME_UNMOUNT, obj7);
                  delete tmp3[tmp2];
                  const obj14 = lib(698);
                }
              }
            }
            sessionId2 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp63) {
          sessionId2 = tmp;
          throw tmp63;
        }
      }
    })();
    iter.next();
    return iter;
  });
  closure_25 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function handleOpenEmbeddedActivity(applicationId) {
  applicationId = applicationId.applicationId;
  ({ isStart, participants, embeddedActivity, location: _location, inviterUserId } = applicationId);
  if (true !== embeddedActivity.renderInFramePool) {
    let obj = _launchFrameOnNativeDefault;
    obj.clearMainFrameSlot();
  }
  obj1 = applicationId(9392);
  if (obj1.tryLaunchAsFrame({ applicationId })) {
    let tmp4Result = tmp4(9393);
    obj = { isStart: null, inviterUserId: null, channelId: null, guildId: null, locationKind: null, launchId: null, compositeInstanceId: null, activitiesInfraVersion: null };
    obj[0] = isStart;
    obj[1] = inviterUserId;
    tmp4Result = tmp4(4079);
    obj[2] = tmp4Result.getEmbeddedActivityLocationChannelId(_location);
    obj[3] = tmp4(4079).getEmbeddedActivityLocationGuildId(_location);
    obj[4] = _location.kind;
    ({ launchId: obj18[5], compositeInstanceId: obj18[6] } = embeddedActivity);
    let num4 = 1;
    if ("location" in embeddedActivity) {
      num4 = 2;
    }
    obj[7] = num4;
    const result = tmp4Result.stashPendingFrameLaunch(applicationId, obj);
    const tmp4Result1 = tmp4(4079);
  } else {
    importDefault = id.getId();
    const found = participants.find((userId) => userId.userId === closure_1);
    const embeddedActivityLocationChannelId = tmp4(4079).getEmbeddedActivityLocationChannelId(_location);
    const tmp4Result2 = tmp4(4079);
    const embeddedActivityLocationGuildId = tmp4(4079).getEmbeddedActivityLocationGuildId(_location);
    const channel = store.getChannel(embeddedActivityLocationChannelId);
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
      const participant = _modDef4674.selectParticipant(channel.id, null);
      const obj6 = _modDef4674;
    }
    if (null != found) {
      const mediaSessionId = store2.getMediaSessionId();
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
          const v4Result = tmp4(514).v4();
          let num2 = 1;
          if ("location" in embeddedActivity) {
            num2 = 2;
          }
          const currentUser = authStore2.getCurrentUser();
          if (null != currentUser) {
            const shelfActivities = store4.getShelfActivities(embeddedActivityLocationGuildId);
            const shelfOrder = store3.getState().shelfOrder;
            obj = { applicationId: null, activityConfigs: null };
            obj[0] = applicationId;
            obj[1] = shelfActivities;
            const tmp55 = getShelfItemDataDefault(obj);
            const sum = 1 + shelfOrder.findIndex((arg0) => arg0 === applicationId);
            let release_phase;
            if (tmp55 != null) {
              const activity = tmp55.activity;
              if (activity != null) {
                let tmp54Result = tmp54(8369);
                const tmp4Result5 = tmp4(500);
                release_phase = activity.client_platform_config[tmp54Result(undefined, tmp4Result5.getOS(tmp4Result5))].release_phase;
              }
            }
            tmp54Result = tmp54(9380);
            const rawThermalState = tmp54Result.getRawThermalState();
            if (null != mediaSessionId) {
              const items = [mediaSessionId];
              let items1 = items;
            } else {
              items1 = [];
            }
            obj1 = { activitySessionId: null, activityUserSessionId: null, launchId: null, mediaSessionIds: null, activitiesInfraVersion: null };
            obj1[0] = compositeInstanceId;
            obj1[1] = v4Result;
            obj1[2] = embeddedActivity.launchId;
            obj1[3] = items1;
            obj1[4] = num2;
            closure_18[applicationId] = obj1;
            let isNullOrEmptyResult = tmp4(1903).isNullOrEmpty(found.nonce);
            if (!isNullOrEmptyResult) {
              let nonce;
              if (tmp28 != null) {
                nonce = tmp28.nonce;
              }
              isNullOrEmptyResult = found.nonce === nonce;
            }
            const tmp4Result6 = tmp4(1903);
            const obj2 = { channel_id: null, guild_id: null, media_session_id: null, activity_session_id: null, application_id: null, location_stack: null, user_premium_tier: null, raw_thermal_state: null, n_participants: null, is_activity_start: null, release_phase: null, shelf_rank: null, shelf_sorted_rank: null, activity_user_session_id: null, channel_type: null, source: null, command_context_type: null, invite_inviter_id: null, interaction_id: null, embedded_activity_location_kind: null };
            obj2[0] = embeddedActivityLocationChannelId;
            obj2[1] = embeddedActivityLocationGuildId;
            obj2[2] = items1[0];
            obj2[3] = compositeInstanceId;
            obj2[4] = applicationId;
            let locations;
            if (dependencyMap2[applicationId] != null) {
              locations = tmp28.locations;
            }
            obj2[5] = locations;
            obj2[6] = currentUser.premiumType;
            obj2[7] = rawThermalState;
            let userParticipantCount = null;
            if (null != channel) {
              userParticipantCount = authStore.getUserParticipantCount(channel.id);
            }
            obj2[8] = userParticipantCount;
            obj2[9] = isStart;
            obj2[10] = release_phase;
            let shelf_rank;
            if (tmp55 != null) {
              const activity2 = tmp55.activity;
              if (activity2 != null) {
                shelf_rank = activity2.shelf_rank;
              }
            }
            obj2[11] = shelf_rank;
            let tmp37 = null;
            if (sum > 0) {
              tmp37 = sum;
            }
            obj2[12] = tmp37;
            obj2[13] = v4Result;
            let type;
            if (channel != null) {
              type = channel.type;
            }
            obj2[14] = type;
            let source;
            if (dependencyMap2[applicationId] != null) {
              source = tmp28.source;
            }
            obj2[15] = source;
            let commandContextType = null;
            if (null != channel) {
              commandContextType = tmp4(8083).computeCommandContextType(channel, applicationId);
              const tmp4Result7 = tmp4(8083);
            }
            obj2[16] = commandContextType;
            obj2[17] = inviterUserId;
            let interactionId;
            if (dependencyMap2[applicationId] != null) {
              interactionId = tmp28.interactionId;
            }
            obj2[18] = interactionId;
            obj2[19] = _location.kind;
            expandEventPropertiesDefault.track(constants.ACTIVITY_SESSION_JOINED, obj2);
            const tmp31 = constants;
            const tmp54Result1 = expandEventPropertiesDefault;
            let locations1;
            if (dependencyMap2[applicationId] != null) {
              locations1 = tmp28.locations;
            }
            const obj3 = { location_stack: null, channel_id: null, channel_type: null, guild_id: null, application_id: null, instance_id: null, initial_media_session_id: null, activity_user_session_id: null, raw_thermal_state: null, is_activity_start: null, shelf_rank: null, shelf_sorted_rank: null, activities_infra_version: null, embedded_activity_location_kind: null };
            obj3[0] = locations1;
            obj3[1] = embeddedActivityLocationChannelId;
            let type1;
            if (channel != null) {
              type1 = channel.type;
            }
            obj3[2] = type1;
            obj3[3] = embeddedActivityLocationGuildId;
            obj3[4] = applicationId;
            obj3[5] = embeddedActivity.launchId;
            obj3[6] = items1[0];
            obj3[7] = v4Result;
            obj3[8] = rawThermalState;
            obj3[9] = isStart;
            let shelf_rank1;
            if (tmp55 != null) {
              const activity3 = tmp55.activity;
              if (activity3 != null) {
                shelf_rank1 = activity3.shelf_rank;
              }
            }
            obj3[10] = shelf_rank1;
            let tmp46 = null;
            if (sum > 0) {
              tmp46 = sum;
            }
            obj3[11] = tmp46;
            obj3[12] = num2;
            obj3[13] = _location.kind;
            expandEventPropertiesDefault.track(tmp31.ACTIVITY_IFRAME_MOUNT, obj3);
            const tmp54Result2 = expandEventPropertiesDefault;
          }
          const tmp4Result4 = tmp4(514);
        }
      }
    }
    const tmp4Result3 = tmp4(4079);
  }
}
({ AnalyticEvents: map1, RPCCloseCodes: closure_14, Endpoints: closure_15, RTCConnectionStates: closure_16, ComponentActions: closure_17 } = ME);
let closure_18 = {};
let closure_19 = {};
let closure_20 = {};
let c27;
initializeDefault;
class EmbeddedActivitiesManager extends tmp3 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    applyArgumentsResult.handleSelectedChannelUpdate = function handleSelectedChannelUpdate() {
      voiceChannelId = closure_1_9.getVoiceChannelId();
      const selfEmbeddedActivities = closure_1_12.getSelfEmbeddedActivities();
      const values = selfEmbeddedActivities.values();
      const iter = values[Symbol.iterator]();
      while (iter !== undefined) {
        ({ location: _location, applicationId } = nextResult);
        let tmp5 = lib;
        let tmp4 = _location;
        let tmp6 = closure_1_2;
        let obj2 = lib(closure_1_2[14]);
        let embeddedActivityLocationChannelId = obj2.getEmbeddedActivityLocationChannelId(_location);
        let tmp8 = embeddedActivityLocationChannelId;
        let tmp9 = null != embeddedActivityLocationChannelId;
        if (tmp9) {
          let tmp10 = applyArgumentsResult;
          let tmp11 = embeddedActivityLocationChannelId;
          tmp9 = applyArgumentsResult(tmp6[28])(tmp8);
        }
        if (tmp9) {
          let tmp12 = embeddedActivityLocationChannelId;
          tmp9 = tmp8 !== voiceChannelId;
        }
        if (tmp9) {
          let tmp13 = lib;
          let obj = { location: null, applicationId: null };
          let tmp14 = _location;
          obj[0] = tmp4;
          let tmp15 = applicationId;
          obj[1] = applicationId;
          let leaveActivityResult = lib.leaveActivity(obj);
        }
        continue;
      }
      if (null != voiceChannelId) {
        const embeddedActivitiesForChannel = closure_1_12.getEmbeddedActivitiesForChannel(voiceChannelId);
        lib = closure_1_6.getId();
        const item = embeddedActivitiesForChannel.forEach((userIds) => {
          userIds = userIds.userIds;
          if (userIds.has(lib)) {
            let obj = lib(closure_2_2[14]);
            const selfEmbeddedActivityForChannel = closure_2_12.getSelfEmbeddedActivityForChannel(obj.getEmbeddedActivityLocationChannelId(userIds.location));
            if (null == selfEmbeddedActivityForChannel) {
              obj = { location: null, applicationId: null };
              ({ location: obj3[0], applicationId: obj3[1] } = userIds);
              lib.leaveActivity(obj);
            } else if (null == voiceChannelId) {
              obj = { location: null, applicationId: null };
              ({ location: obj2[0], applicationId: obj2[1] } = selfEmbeddedActivityForChannel);
              lib.hidePIPEmbed(obj);
            }
          }
        });
      }
    };
    applyArgumentsResult.handleActivityWebViewRelease = function handleActivityWebViewRelease() {
      lib.releaseWebView();
    };
    applyArgumentsResult.handleActivityLaunchSuccess = function handleActivityLaunchSuccess(arg0) {
      ({ applicationId: closure_0, nonce: closure_1 } = arg0);
      const timerId = setTimeout(() => {
        let tmp5;
        if (null != closure_1_19[closure_0]) {
          if (tmp4.nonce === tmp3) {
            delete tmp[tmp2];
            tmp5 = tmp4;
          }
        }
        return tmp5;
      }, 2000);
      if (obj.isUsingDevShelfActivityUrlOverride()) {
        const result = lib.showDevShelfOverrideEnabled();
      }
    };
    closure_0 = undefined;
    closure_1 = applyArgumentsResult;
    closure_0 = closure_3((arg0) => {
      closure_0 = arg0;
      c4 = 0;
      c5 = 0;
      const iter = (function*(arg0) {
        if (c5 === 2) {
          c5 = 3;
          HermesBuiltin.throwTypeError();
        } else if (tmp4 === 3) {
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
            c5 = 2;
            if (0 === c4) {
              if (arg0 === 1) {
                c5 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c5 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                c3 = tmp5;
                c2 = tmp2;
                c0 = undefined;
                guildId = undefined;
                c2 = undefined;
                c3 = undefined;
                c4 = undefined;
                c5 = undefined;
                c6 = undefined;
                ({ error: c0, nonce: guildId, channelId: c2, guildId: c3, applicationId: c4, isStart: c5, locationKind: c6 } = c0);
                let channel;
                closure_8 = undefined;
                let type;
                let rawThermalState;
                c4 = 1;
                c5 = 1;
                return { value: "ct", done: true };
              }
            } else if (1 === tmp5) {
              if (arg0 === 1) {
                c5 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c5 = 3;
                obj1 = { value: null, done: true };
                obj1[0] = arg1;
                return obj1;
              } else {
                channel = closure_1_22(c4, closure_1_1);
                let obj2 = callback(closure_1_2[30]);
                c4 = 2;
                c5 = 1;
                obj2 = { value: null, done: false };
                obj2[0] = obj2.getActivityLaunchErrorInfo(callback, c4);
                return obj2;
              }
            } else if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj3 = { value: null, done: true };
              obj3[0] = arg1;
              return obj3;
            } else {
              closure_8 = arg1;
              guildId.showLaunchErrorModal(closure_8.message);
              type = channel.getChannel(c2);
              rawThermalState = closure_1_1(closure_1_2[16]).getRawThermalState();
              const obj8 = closure_1_1(closure_1_2[16]);
              const obj4 = { channel_id: null, guild_id: null, application_id: null, raw_thermal_state: null, is_activity_start: null, channel_type: null, location_stack: null, error_type: null, error_status: null, error_code: null, source: null, embedded_activity_location_kind: null };
              obj4[0] = c2;
              guildId = c3;
              if (c3 == null) {
                obj = type;
                guildId = undefined;
                if (type != null) {
                  guildId = obj.getGuildId();
                }
              }
              obj4[1] = guildId;
              obj4[2] = c4;
              obj4[3] = rawThermalState;
              obj4[4] = c5;
              type = undefined;
              if (type != null) {
                type = type.type;
              }
              obj4[5] = type;
              let locations;
              if (channel != null) {
                locations = channel.locations;
              }
              obj4[6] = locations;
              obj4[7] = closure_8.errorType;
              obj4[8] = closure_8.errorStatus;
              obj4[9] = closure_8.errorCode;
              let source;
              if (channel != null) {
                source = channel.source;
              }
              obj4[10] = source;
              obj4[11] = c6;
              closure_1_1(closure_1_2[17]).track(closure_1_13.ACTIVITY_SESSION_JOIN_FAILED, obj4);
              c5 = 3;
              return { value: "HermesInternal", done: null };
            }
          } catch (tmp33) {
            c5 = tmp;
            throw tmp33;
          }
        }
      })();
      iter.next();
      return iter;
    });
    applyArgumentsResult.handleActivityLaunchFail = function() {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    applyArgumentsResult.handleActivityLaunchCancel = function handleActivityLaunchCancel(arg0) {
      if (null != dependencyMap[arg0.applicationId]) {
        if (tmp4.nonce === tmp3) {
          delete tmp[tmp2];
        }
      }
    };
    applyArgumentsResult.superHandleRPCDisconnect = function superHandleRPCDisconnect(reason) {
      reason = reason.reason;
      const id = reason.application.id;
      if (null != id) {
        if (null != reason) {
          const selfEmbeddedActivities = closure_1_12.getSelfEmbeddedActivities();
          const values = selfEmbeddedActivities.values();
          for (const item10008 of values) {
            let _location = item10008.location;
            if (item10008.applicationId === id) {
              let tmp2 = lib;
              let obj = { location: null, applicationId: null };
              let tmp3 = _location;
              obj[0] = _location;
              obj[1] = id;
              let leaveActivityResult = lib.leaveActivity(obj);
            }
            continue;
          }
          if (reason.code !== closure_1_14.CLOSE_NORMAL) {
            obj = { rpc_close_code: null, rpc_message: null, application_id: null };
            ({ code: obj3[0], message: obj3[1] } = reason);
            obj[2] = id;
            applyArgumentsResult(closure_1_2[17]).track(closure_1_13.ACTIVITY_CLOSED_RPC_ERROR, obj);
            lib.showErrorModal(reason, id);
            const obj2 = applyArgumentsResult(closure_1_2[17]);
          }
        }
      }
    };
    applyArgumentsResult.handleCallDelete = function handleCallDelete(channelId) {
      channelId = channelId.channelId;
      voiceChannelId = closure_1_9.getVoiceChannelId();
      if (tmp2) {
        lib.handleCallEnded(channelId);
      }
    };
    applyArgumentsResult.handleRTCConnectionState = function handleRTCConnectionState(state) {
      if (state.state === closure_1_16.DISCONNECTED) {
        lib.handleCallEnded(state.channelId);
      }
    };
    applyArgumentsResult.handleCallEnded = function handleCallEnded(channelId) {
      const selfEmbeddedActivityForChannel = closure_1_12.getSelfEmbeddedActivityForChannel(channelId);
      if (null != selfEmbeddedActivityForChannel) {
        const obj = { location: null, applicationId: null };
        ({ location: obj[0], applicationId: obj[1] } = selfEmbeddedActivityForChannel);
        lib.leaveActivity(obj);
      }
    };
    closure_0 = undefined;
    closure_1 = applyArgumentsResult;
    closure_0 = closure_3((arg0) => {
      closure_0 = arg0;
      closure_5 = 0;
      closure_6 = 0;
      const iter = (function*(arg0) {
        if (c6 === 2) {
          c6 = 3;
          HermesBuiltin.throwTypeError();
        } else if (tmp4 === 3) {
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
            c6 = 2;
            getChannel = c5;
            if (0 === c5) {
              if (arg0 === 1) {
                c6 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c6 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                c4 = tmp2;
                c3 = 0;
                c0 = undefined;
                getChannel = undefined;
                c2 = undefined;
                c3 = undefined;
                c4 = undefined;
                let tmp = c0;
                ({ channelId: c0, applicationId: getChannel, analyticsLocations: c2, commandOrigin: c3, inviterUserId: c4 } = c0);
                c5 = undefined;
                c6 = undefined;
                closure_7 = undefined;
                c8 = undefined;
                closure_9 = undefined;
                let activityConfigs;
                let applications;
                closure_12 = undefined;
                c13 = undefined;
                c5 = 1;
                c6 = 1;
                return { value: "ct", done: true };
              }
            } else {
              if (1 === getChannel) {
                if (arg0 === 1) {
                  c6 = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  c6 = 3;
                  obj1 = { value: null, done: true };
                  obj1[0] = arg1;
                  return obj1;
                } else {
                  tmp = c3;
                  tmp = c4;
                  tmp = closure_1_7;
                  getChannel = closure_1_7.getChannel;
                  tmp = callback;
                  const set = getChannel(callback);
                  tmp = set;
                  if (undefined !== set) {
                    tmp = c3;
                    tmp = c4;
                    tmp = null;
                    let type;
                    tmp = set;
                    if (set != null) {
                      type = set.type;
                    }
                    if (!set.has(type)) {
                      const applicationId = closure_1_12.getSelfEmbeddedActivityForChannel(callback);
                      getChannel = undefined;
                      if (applicationId != null) {
                        getChannel = applicationId.applicationId;
                      }
                      if (getChannel !== closure_1_1) {
                        c5 = 2;
                        c6 = 1;
                        const obj2 = { value: null, done: false };
                        obj2[0] = closure_1_1(closure_1_2[31]).fetchApplication(closure_1_1);
                        return obj2;
                      }
                    } else {
                      getChannel = closure_1_9.getVoiceChannelId();
                    }
                  }
                  c6 = 3;
                }
              } else if (2 === getChannel) {
                if (arg0 === 1) {
                  c6 = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  c6 = 3;
                  const obj3 = { value: null, done: true };
                  obj3[0] = arg1;
                  return obj3;
                } else {
                  tmp = c3;
                  tmp = c4;
                  closure_7 = arg1;
                  tmp = callback;
                  tmp = closure_1_2;
                  if (!obj25.getIsActivitiesEnabledForCurrentPlatform()) {
                    const intl = callback(closure_1_2[33]).intl;
                    closure_1_1.showLaunchErrorModal(intl.string(callback(closure_1_2[33]).t.UXoQTp));
                  }
                  obj25 = callback(closure_1_2[32]);
                }
              } else {
                if (3 === getChannel) {
                  if (arg0 === 1) {
                    c6 = 3;
                    throw arg1;
                  } else if (arg0 === 2) {
                    c6 = 3;
                    const obj4 = { value: null, done: true };
                    obj4[0] = arg1;
                    return obj4;
                  } else {
                    closure_9 = arg1;
                    activityConfigs = closure_9.activityConfigs;
                    applications = closure_9.applications;
                    tmp = closure_1_2;
                    const obj5 = { applicationId: null, activityConfigs: null, applications: null };
                    tmp = getChannel;
                    obj5[0] = getChannel;
                    tmp = activityConfigs;
                    obj5[1] = activityConfigs;
                    tmp = applications;
                    obj5[2] = applications;
                    tmp = null;
                    if (null == closure_1_1(closure_1_2[15])(obj5)) {
                      let obj9 = callback(closure_1_2[35]);
                      let obj6 = { guildId: null, force: true };
                      obj6[0] = closure_8;
                      c5 = 4;
                      c6 = 1;
                      const obj7 = { value: null, done: false };
                      obj7[0] = obj9.fetchShelf(obj6);
                      return obj7;
                    }
                  }
                } else if (4 === getChannel) {
                  if (arg0 === 1) {
                    c6 = 3;
                    throw arg1;
                  } else if (arg0 === 2) {
                    c6 = 3;
                    const obj8 = { value: null, done: true };
                    obj8[0] = arg1;
                    return obj8;
                  } else {
                    closure_12 = arg1;
                    obj9 = { applicationId: null, activityConfigs: null, applications: null };
                    obj9[0] = getChannel;
                    obj9[1] = closure_12.activityConfigs;
                    obj9[2] = closure_12.applications;
                    closure_1_1(closure_1_2[15])(obj9);
                  }
                } else if (5 === getChannel) {
                  if (arg0 === 1) {
                    c6 = 3;
                    throw arg1;
                  } else if (arg0 === 2) {
                    c6 = 3;
                    const obj10 = { value: null, done: true };
                    obj10[0] = arg1;
                    return obj10;
                  }
                } else if (arg0 === 1) {
                  c6 = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  c6 = 3;
                  obj = { value: null, done: true };
                  obj[0] = arg1;
                  return obj;
                }
                const embeddedActivitiesForChannel = closure_1_12.getEmbeddedActivitiesForChannel(callback);
                closure_13 = embeddedActivitiesForChannel.find((applicationId) => applicationId.applicationId === getChannel);
                let size;
                if (closure_13 != null) {
                  size = closure_13.userIds.size;
                }
                c2 = size;
                if (size == null) {
                  c2 = 0;
                }
                if (c2 > 0) {
                  obj6 = callback(closure_1_2[36]);
                  const obj11 = { channelId: null, applicationId: null, launchId: null, inputApplication: null, analyticsLocations: null, inviterUserId: null };
                  obj11[0] = c0;
                  obj11[1] = getChannel;
                  let launchId;
                  if (c13 != null) {
                    launchId = c13.launchId;
                  }
                  obj11[2] = launchId;
                  obj11[4] = c2;
                  obj11[5] = c4;
                  c5 = 6;
                  c6 = 1;
                  const obj12 = { value: null, done: false };
                  obj12[0] = obj6.maybeJoinEmbeddedActivity(obj11);
                  return obj12;
                } else {
                  let obj13 = { targetApplicationId: null, channelId: null, analyticsLocations: null, commandOrigin: null, inviterUserId: null };
                  obj13[0] = closure_1_1;
                  obj13[1] = callback;
                  obj13[2] = closure_1_2;
                  obj13[3] = closure_1_3;
                  obj13[4] = closure_1_4;
                  c5 = 5;
                  c6 = 1;
                  let obj14 = { value: null, done: false };
                  obj14[0] = closure_1_1(closure_1_2[37])(obj13);
                  return obj14;
                }
              }
              let supported_platforms;
              if (closure_1_7 != null) {
                const embedded_activity_config = closure_1_7.embedded_activity_config;
                if (embedded_activity_config != null) {
                  supported_platforms = embedded_activity_config.supported_platforms;
                }
              }
              if (tmp56(supported_platforms)) {
                obj13 = set;
                let guildId;
                if (set != null) {
                  guildId = obj13.getGuildId();
                }
                getChannel = guildId;
                closure_8 = getChannel;
                obj14 = callback(closure_1_2[35]);
                const obj15 = { guildId: null };
                obj15[0] = closure_8;
                c5 = 3;
                c6 = 1;
                const obj16 = { value: null, done: false };
                obj16[0] = obj14.fetchShelf(obj15);
                return obj16;
              } else {
                const intl2 = callback(closure_1_2[33]).intl;
                closure_1_1.showLaunchErrorModal(intl2.string(callback(closure_1_2[33]).t.uGDCcw));
              }
              tmp56 = closure_1_1(closure_1_2[34]);
            }
          } catch (tmp89) {
            c6 = tmp;
            throw tmp89;
          }
        }
      })();
      iter.next();
      return iter;
    });
    applyArgumentsResult.handleDeferredOpen = function() {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    applyArgumentsResult.handleGuildDelete = function handleGuildDelete(guild) {
      guild = guild.guild;
      const selfEmbeddedActivities = closure_1_12.getSelfEmbeddedActivities();
      const item = selfEmbeddedActivities.forEach((location) => {
        const _location = location.location;
        let obj = guild(closure_2_2[14]);
        if (guild.id === obj.getEmbeddedActivityLocationGuildId(_location)) {
          obj = { location: null, applicationId: null };
          obj[0] = _location;
          obj[1] = location.applicationId;
          guild.leaveActivity(obj);
        }
      });
    };
    applyArgumentsResult.handleChannelDelete = function handleChannelDelete(channel) {
      const selfEmbeddedActivityForChannel = closure_1_12.getSelfEmbeddedActivityForChannel(channel.channel.id);
      if (null != selfEmbeddedActivityForChannel) {
        const obj = { location: null, applicationId: null };
        ({ location: obj[0], applicationId: obj[1] } = selfEmbeddedActivityForChannel);
        lib.leaveActivity(obj);
      }
    };
    applyArgumentsResult.handleInteractionQueue = function handleInteractionQueue(arg0) {
      ({ nonce, data } = arg0);
      if (null == dependencyMap[data.applicationId]) {
        if (data.interactionType === lib(table[38]).InteractionTypes.APPLICATION_COMMAND) {
          const items = [applyArgumentsResult(tmp8[39]).INTERACTION_APPLICATION_COMMAND];
          let tmp2 = items;
        } else if (data.interactionType === tmp7(tmp8[38]).InteractionTypes.MESSAGE_COMPONENT) {
          const items1 = [applyArgumentsResult(tmp8[39]).INTERACTION_MESSAGE_COMPONENT];
          tmp2 = items1;
        } else if (data.interactionType === tmp7(tmp8[38]).InteractionTypes.MODAL_SUBMIT) {
          const items2 = [applyArgumentsResult(tmp8[39]).INTERACTION_MODAL_SUBMIT];
          tmp2 = items2;
        }
        let obj = { applicationId: null, nonce: null, locations: null };
        obj[0] = data.applicationId;
        obj[1] = nonce;
        obj[2] = tmp2;
        ({ locations, source } = obj);
        let flag = null != locations;
        ({ applicationId, nonce: nonce2 } = obj);
        if (!flag) {
          flag = null != source;
        }
        if (flag) {
          obj = { nonce: null, locations: null, source: null };
          obj[0] = nonce2;
          obj[1] = locations;
          obj[2] = source;
          tmp[applicationId] = obj;
          flag = true;
        }
        if (flag) {
          closure_20[nonce] = data.applicationId;
        }
      }
    };
    applyArgumentsResult.handleInteractionCreate = function handleInteractionCreate(nonce) {
      nonce = nonce.nonce;
      if (null != nonce) {
        if (null != dependencyMap2[nonce]) {
          if (null != dependencyMap[tmp3]) {
            tmp5.interactionId = tmp;
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
            let tmp5;
            if (null != closure_1_19[closure_0]) {
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
        if (null != dependencyMap2[nonce]) {
          delete tmp3[tmp4];
          if (null != dependencyMap[tmp6]) {
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
  closure_9.addChangeListener(this.handleSelectedChannelUpdate);
  const ComponentDispatch = ComponentDispatcher.ComponentDispatch;
  const subscription = ComponentDispatch.subscribe(constants2.RELEASE_ACTIVITY_WEB_VIEW, this.handleActivityWebViewRelease);
  const ComponentDispatch2 = ComponentDispatcher.ComponentDispatch;
  const subscription1 = ComponentDispatch2.subscribe(constants2.OPEN_EMBEDDED_ACTIVITY, handleOpenEmbeddedActivity);
  const subscription2 = dispatcherDefault.subscribe("EMBEDDED_ACTIVITY_LAUNCH_START", handleActivityLaunchStart);
  const obj = dispatcherDefault;
  const subscription3 = dispatcherDefault.subscribe("EMBEDDED_ACTIVITY_LAUNCH_SUCCESS", this.handleActivityLaunchSuccess);
  const obj2 = dispatcherDefault;
  const subscription4 = dispatcherDefault.subscribe("EMBEDDED_ACTIVITY_LAUNCH_FAIL", this.handleActivityLaunchFail);
  const obj3 = dispatcherDefault;
  const subscription5 = dispatcherDefault.subscribe("EMBEDDED_ACTIVITY_LAUNCH_CANCEL", this.handleActivityLaunchCancel);
  const obj4 = dispatcherDefault;
  const subscription6 = dispatcherDefault.subscribe("EMBEDDED_ACTIVITY_CLOSE", handleActivityClose);
  const obj5 = dispatcherDefault;
  const subscription7 = dispatcherDefault.subscribe("EMBEDDED_ACTIVITY_DEFERRED_OPEN", this.handleDeferredOpen);
  const obj6 = dispatcherDefault;
  const subscription8 = dispatcherDefault.subscribe("RPC_APP_DISCONNECTED", this.handleRPCDisconnect);
  const obj7 = dispatcherDefault;
  const subscription9 = dispatcherDefault.subscribe("CALL_DELETE", this.handleCallDelete);
  const obj8 = dispatcherDefault;
  const subscription10 = dispatcherDefault.subscribe("RTC_CONNECTION_STATE", this.handleRTCConnectionState);
  const obj9 = dispatcherDefault;
  const subscription11 = dispatcherDefault.subscribe("GUILD_DELETE", this.handleGuildDelete);
  const obj10 = dispatcherDefault;
  const subscription12 = dispatcherDefault.subscribe("CHANNEL_DELETE", this.handleChannelDelete);
  const obj11 = dispatcherDefault;
  const subscription13 = dispatcherDefault.subscribe("INTERACTION_QUEUE", this.handleInteractionQueue);
  const obj12 = dispatcherDefault;
  const subscription14 = dispatcherDefault.subscribe("INTERACTION_CREATE", this.handleInteractionCreate);
  const obj13 = dispatcherDefault;
  const subscription15 = dispatcherDefault.subscribe("INTERACTION_SUCCESS", this.handleInteractionSuccess);
  const obj14 = dispatcherDefault;
  const subscription16 = dispatcherDefault.subscribe("INTERACTION_FAILURE", this.handleInteractionFailure);
};
prototype["_terminate"] = function _terminate() {
  closure_9.removeChangeListener(this.handleSelectedChannelUpdate);
  const ComponentDispatch = ComponentDispatcher.ComponentDispatch;
  ComponentDispatch.unsubscribe(constants2.RELEASE_ACTIVITY_WEB_VIEW, this.handleActivityWebViewRelease);
  const ComponentDispatch2 = ComponentDispatcher.ComponentDispatch;
  ComponentDispatch2.unsubscribe(constants2.OPEN_EMBEDDED_ACTIVITY, handleOpenEmbeddedActivity);
  dispatcherDefault.unsubscribe("EMBEDDED_ACTIVITY_LAUNCH_START", handleActivityLaunchStart);
  const obj = dispatcherDefault;
  dispatcherDefault.unsubscribe("EMBEDDED_ACTIVITY_LAUNCH_SUCCESS", this.handleActivityLaunchSuccess);
  const obj2 = dispatcherDefault;
  dispatcherDefault.unsubscribe("EMBEDDED_ACTIVITY_LAUNCH_FAIL", this.handleActivityLaunchFail);
  const obj3 = dispatcherDefault;
  dispatcherDefault.unsubscribe("EMBEDDED_ACTIVITY_LAUNCH_CANCEL", this.handleActivityLaunchCancel);
  const obj4 = dispatcherDefault;
  dispatcherDefault.unsubscribe("EMBEDDED_ACTIVITY_CLOSE", handleActivityClose);
  const obj5 = dispatcherDefault;
  dispatcherDefault.unsubscribe("EMBEDDED_ACTIVITY_DEFERRED_OPEN", this.handleDeferredOpen);
  const obj6 = dispatcherDefault;
  dispatcherDefault.unsubscribe("RPC_APP_DISCONNECTED", this.handleRPCDisconnect);
  const obj7 = dispatcherDefault;
  dispatcherDefault.unsubscribe("CALL_DELETE", this.handleCallDelete);
  const obj8 = dispatcherDefault;
  dispatcherDefault.unsubscribe("RTC_CONNECTION_STATE", this.handleRTCConnectionState);
  const obj9 = dispatcherDefault;
  dispatcherDefault.unsubscribe("GUILD_DELETE", this.handleGuildDelete);
  const obj10 = dispatcherDefault;
  dispatcherDefault.unsubscribe("CHANNEL_DELETE", this.handleChannelDelete);
  const obj11 = dispatcherDefault;
  dispatcherDefault.unsubscribe("INTERACTION_QUEUE", this.handleInteractionQueue);
  const obj12 = dispatcherDefault;
  dispatcherDefault.unsubscribe("INTERACTION_CREATE", this.handleInteractionCreate);
  const obj13 = dispatcherDefault;
  dispatcherDefault.unsubscribe("INTERACTION_SUCCESS", this.handleInteractionSuccess);
  const obj14 = dispatcherDefault;
  dispatcherDefault.unsubscribe("INTERACTION_FAILURE", this.handleInteractionFailure);
};
let result = require("set").fileFinishedImporting("modules/activities/EmbeddedActivitiesManager.tsx");

export default EmbeddedActivitiesManager;
export const trackFrameSessionStart = function trackFrameSessionStart(applicationId) {
  const _require = applicationId;
  let obj = stashPendingFrameLaunch;
  const result = obj.consumePendingFrameLaunch(applicationId);
  if (null != result) {
    ({ isStart, channelId, guildId, locationKind, launchId, compositeInstanceId, activitiesInfraVersion } = result);
    const currentUser = authStore2.getCurrentUser();
    if (null != currentUser) {
      let channel = null;
      if (null != channelId) {
        channel = store.getChannel(channelId);
      }
      const mediaSessionId = store2.getMediaSessionId();
      if (null != mediaSessionId) {
        const items = [mediaSessionId];
        let items1 = items;
      } else {
        items1 = [];
      }
      let tmpResult = tmp(514);
      const v4Result = tmpResult.v4();
      obj = { activitySessionId: null, activityUserSessionId: null, launchId: null, mediaSessionIds: null, activitiesInfraVersion: null, connectedSince: null, frameChannelId: null, frameGuildId: null, frameLocationKind: null };
      obj[0] = compositeInstanceId;
      obj[1] = v4Result;
      obj[2] = launchId;
      obj[3] = items1;
      obj[4] = activitiesInfraVersion;
      const _Date = Date;
      obj[5] = Date.now();
      obj[6] = channelId;
      obj[7] = guildId;
      obj[8] = locationKind;
      closure_18[applicationId] = obj;
      const shelfActivities = store4.getShelfActivities(guildId);
      const shelfOrder = store3.getState().shelfOrder;
      obj = { applicationId: null, activityConfigs: null };
      obj[0] = applicationId;
      obj[1] = shelfActivities;
      const tmp15 = getShelfItemDataDefault(obj);
      const sum = 1 + shelfOrder.findIndex((arg0) => arg0 === closure_0);
      let release_phase;
      if (tmp15 != null) {
        const activity = tmp15.activity;
        if (activity != null) {
          let tmp14Result = tmp14(8369);
          tmpResult = tmp(500);
          release_phase = activity.client_platform_config[tmp14Result(undefined, tmpResult.getOS(tmpResult))].release_phase;
        }
      }
      tmp14Result = tmp14(9380);
      const rawThermalState = tmp14Result.getRawThermalState();
      obj1 = { channel_id: null, guild_id: null, media_session_id: null, activity_session_id: null, application_id: null, location_stack: null, user_premium_tier: null, raw_thermal_state: null, n_participants: null, is_activity_start: null, release_phase: null, shelf_rank: null, shelf_sorted_rank: null, activity_user_session_id: null, channel_type: null, source: null, command_context_type: null, invite_inviter_id: null, interaction_id: null, embedded_activity_location_kind: null };
      obj1[0] = channelId;
      obj1[1] = guildId;
      obj1[2] = items1[0];
      obj1[3] = compositeInstanceId;
      obj1[4] = applicationId;
      let locations;
      if (dependencyMap2[applicationId] != null) {
        locations = tmp21.locations;
      }
      obj1[5] = locations;
      obj1[6] = currentUser.premiumType;
      obj1[7] = rawThermalState;
      let userParticipantCount = null;
      if (null != channel) {
        userParticipantCount = authStore.getUserParticipantCount(channel.id);
      }
      obj1[8] = userParticipantCount;
      obj1[9] = isStart;
      obj1[10] = release_phase;
      let shelf_rank;
      if (tmp15 != null) {
        const activity2 = tmp15.activity;
        if (activity2 != null) {
          shelf_rank = activity2.shelf_rank;
        }
      }
      obj1[11] = shelf_rank;
      let tmp28 = null;
      if (sum > 0) {
        tmp28 = sum;
      }
      obj1[12] = tmp28;
      obj1[13] = v4Result;
      let type;
      if (channel != null) {
        type = channel.type;
      }
      obj1[14] = type;
      let source;
      if (dependencyMap2[applicationId] != null) {
        source = tmp21.source;
      }
      obj1[15] = source;
      let commandContextType = null;
      if (null != channel) {
        commandContextType = tmp(8083).computeCommandContextType(channel, applicationId);
        const tmpResult1 = tmp(8083);
      }
      obj1[16] = commandContextType;
      obj1[17] = result.inviterUserId;
      let interactionId;
      if (dependencyMap2[applicationId] != null) {
        interactionId = tmp21.interactionId;
      }
      obj1[18] = interactionId;
      obj1[19] = locationKind;
      expandEventPropertiesDefault.track(constants.ACTIVITY_SESSION_JOINED, obj1);
      const tmp14Result1 = expandEventPropertiesDefault;
      const tmp22 = constants;
      let locations1;
      if (dependencyMap2[applicationId] != null) {
        locations1 = tmp21.locations;
      }
      const obj2 = { location_stack: null, channel_id: null, channel_type: null, guild_id: null, application_id: null, instance_id: null, initial_media_session_id: null, activity_user_session_id: null, raw_thermal_state: null, is_activity_start: null, shelf_rank: null, shelf_sorted_rank: null, activities_infra_version: null, embedded_activity_location_kind: null };
      obj2[0] = locations1;
      obj2[1] = channelId;
      let type1;
      if (channel != null) {
        type1 = channel.type;
      }
      obj2[2] = type1;
      obj2[3] = guildId;
      obj2[4] = applicationId;
      obj2[5] = launchId;
      obj2[6] = items1[0];
      obj2[7] = v4Result;
      obj2[8] = rawThermalState;
      obj2[9] = isStart;
      let shelf_rank1;
      if (tmp15 != null) {
        const activity3 = tmp15.activity;
        if (activity3 != null) {
          shelf_rank1 = activity3.shelf_rank;
        }
      }
      obj2[10] = shelf_rank1;
      let tmp37 = null;
      if (sum > 0) {
        tmp37 = sum;
      }
      obj2[11] = tmp37;
      obj2[12] = activitiesInfraVersion;
      obj2[13] = locationKind;
      expandEventPropertiesDefault.track(tmp22.ACTIVITY_IFRAME_MOUNT, obj2);
      const tmp14Result2 = expandEventPropertiesDefault;
    }
  }
};
export const getActiveAnalyticsSessionIDs = function getActiveAnalyticsSessionIDs(id) {
  return dependencyMap[id];
};
export const trackFrameSessionEnd = function trackFrameSessionEnd(applicationId) {
  const currentUser = authStore2.getCurrentUser();
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
        channel = store.getChannel(frameChannelId);
      }
      const shelfActivities = store4.getShelfActivities(frameGuildId);
      let obj = { applicationId: null, activityConfigs: null };
      obj[0] = applicationId;
      obj[1] = shelfActivities;
      const tmp13 = getShelfItemDataDefault(obj);
      let release_phase;
      if (tmp13 != null) {
        const activity = tmp13.activity;
        if (activity != null) {
          let tmp11Result = tmp11(8369);
          const obj2 = set2;
          release_phase = activity.client_platform_config[tmp11Result(undefined, obj2.getOS(obj2))].release_phase;
        }
      }
      tmp11Result = tmp11(9380);
      const rawThermalState = tmp11Result.getRawThermalState();
      let diff = null;
      if (null != tmp3.connectedSince) {
        const _Date = Date;
        diff = Date.now() - tmp3.connectedSince;
      }
      obj = { channel_id: null, guild_id: null, media_session_id: null, activity_session_id: null, application_id: null, duration_ms: null, user_premium_tier: null, raw_thermal_state: null, release_phase: null, shelf_rank: null, activity_user_session_id: null, channel_type: null, media_session_ids: null, embedded_activity_location_kind: null };
      obj[0] = frameChannelId;
      obj[1] = frameGuildId;
      obj[2] = tmp3.mediaSessionIds[0];
      obj[3] = tmp3.activitySessionId;
      obj[4] = applicationId;
      obj[5] = diff;
      obj[6] = currentUser.premiumType;
      obj[7] = rawThermalState;
      obj[8] = release_phase;
      let shelf_rank;
      if (tmp13 != null) {
        const activity2 = tmp13.activity;
        if (activity2 != null) {
          shelf_rank = activity2.shelf_rank;
        }
      }
      obj[9] = shelf_rank;
      obj[10] = tmp3.activityUserSessionId;
      let type;
      if (channel != null) {
        type = channel.type;
      }
      obj[11] = type;
      ({ mediaSessionIds: obj5[12], frameLocationKind: obj5[13] } = tmp3);
      expandEventPropertiesDefault.track(constants.ACTIVITY_SESSION_LEFT, obj);
      const tmp11Result1 = expandEventPropertiesDefault;
      const tmp20 = constants;
      obj = { channel_id: null, guild_id: null, application_id: null, instance_ids: null, media_session_ids: null, activity_user_session_id: null, raw_thermal_state: null, duration_ms: null, embedded_activity_location_kind: null };
      obj[0] = frameChannelId;
      obj[1] = frameGuildId;
      obj[2] = applicationId;
      let tmp24;
      if (null != tmp3.launchId) {
        const items = [tmp3.launchId];
        tmp24 = items;
      }
      obj[3] = tmp24;
      ({ mediaSessionIds: obj7[4], activityUserSessionId: obj7[5] } = tmp3);
      obj[6] = rawThermalState;
      obj[7] = diff;
      obj[8] = tmp3.frameLocationKind;
      expandEventPropertiesDefault.track(tmp20.ACTIVITY_IFRAME_UNMOUNT, obj);
      delete tmp[tmp2];
      const tmp11Result2 = expandEventPropertiesDefault;
    }
  }
};