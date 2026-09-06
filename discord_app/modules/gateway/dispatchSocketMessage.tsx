// === Module 13677: dispatchSocketMessage ===

// Module 13677 (dispatchSocketMessage)
import LoggerDefault from "Logger" /* 3 */;
import TTITrackerDefault from "TTITracker" /* 9 */;
import _modDef12 from "module_12" /* 12 */;
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import actions_BillingActionCreators from "actions/BillingActionCreators" /* 4884 */;
import SubscriptionPlanActionCreatorsAll from "SubscriptionPlanActionCreators" /* 7257 */;
import convertServerThreadMemberDefault from "convertServerThreadMember" /* 7782 */;
import UserActionCreatorsAll from "UserActionCreators" /* 8181 */;
import BadgeDirectoryActionCreators from "BadgeDirectoryActionCreators" /* 8197 */;
import ReadyPayloadUtilsAll from "ReadyPayloadUtils" /* 13678 */;
import isUserSettingsOpen from "isUserSettingsOpen" /* 13759 */;
import splitAgeRestrictedActivitiesDefault from "splitAgeRestrictedActivities" /* 13760 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import GuildBoostSlotRecord from "GuildBoostSlotRecord" /* 4460 */;
import UserRecord from "UserRecord" /* 1385 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import GuildMemberStore from "GuildMemberStore" /* 2021 */;
import UserStore from "UserStore" /* 1371 */;
import VoiceStateStore from "VoiceStateStore" /* 4579 */;
import SubscriptionPlanStore from "SubscriptionPlanStore" /* 4223 */;
import SubscriptionStore from "SubscriptionStore" /* 4224 */;
import ActionBatcher from "ActionBatcher" /* 13646 */;

require = fn;
function defineSimpleDispatch(arg0, dispatch) {
  while (tmp !== undefined) {
    let obj = {
      preload() {
          return null;
        },
      dispatch
    };
    closure_22[tmp2] = obj;
    continue;
  }
  tmp = arg0[Symbol.iterator]();
}
function definePreloadableDispatch(arg0, preload, dispatch) {
  while (tmp !== undefined) {
    let obj = { preload, dispatch };
    closure_22[tmp2] = obj;
    continue;
  }
  tmp = arg0[Symbol.iterator]();
}
function dispatchVoiceStateUpdates(items, receivedAt) {
  items = [];
  const iter = items[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp2 = nextResult;
    if (null != nextResult.member) {
      let tmp5 = dispatchGuildMemberAdd(tmp2.guild_id, tmp2.member.user, tmp2.member);
    }
    let obj = { userId: null, guildId: null, sessionId: null, channelId: null, mute: null, deaf: null, selfMute: null, selfDeaf: null, selfVideo: null, suppress: null, selfStream: null, requestToSpeakTimestamp: null, discoverable: null, oldChannelId: null, connectedAt: null };
    ({ user_id: obj.userId, guild_id: obj.guildId, session_id: obj.sessionId, channel_id: obj.channelId, mute: obj.mute, deaf: obj.deaf, self_mute: obj.selfMute, self_deaf: obj.selfDeaf, self_video } = tmp2);
    if (!self_video) {
      self_video = false;
    }
    obj.selfVideo = self_video;
    obj.suppress = tmp2.suppress;
    obj.selfStream = tmp2.self_stream || false;
    let prop = tmp2.request_to_speak_timestamp;
    if (prop == null) {
      prop = null;
    }
    obj.requestToSpeakTimestamp = prop;
    let flag = tmp2.discoverable;
    if (flag == null) {
      flag = true;
    }
    obj.discoverable = flag;
    obj.oldChannelId = VoiceStateStore.getUserVoiceChannelId(tmp2.guild_id, tmp2.user_id);
    obj.connectedAt = tmp2.connected_at;
    let arr = items.push(obj);
    continue;
  }
  obj = { type: "VOICE_STATE_UPDATES", voiceStates: items, receivedAt };
  dispatchOrResetSocket(obj);
}
function dispatchOrResetSocket(arg0) {
  closure_0 = arg0;
  DispatcherDefault.dispatch(arg0).catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(closure_3[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
}
function dispatchGuildMemberAdd(guild_id, author, member) {
  ({ roles, nick, avatar, avatar_decoration_data, flags, premium_since, pending, joined_at, communication_disabled_until, unusual_dm_activity_until } = member);
  ({ collectibles, display_name_styles } = member);
  member = GuildMemberStore.getMember(guild_id, author.id);
  obj = obj(1882);
  const result = obj.parseServerUserCollectibles(collectibles);
  const result1 = obj(1388).parseServerDisplayNameStyles(display_name_styles);
  let isEqualResult = null != member && member.nick === nick && member.avatar === avatar;
  if (isEqualResult) {
    isEqualResult = _modDef12.isEqual(member.roles, roles);
  }
  if (isEqualResult) {
    let avatarDecoration = member.avatarDecoration;
    if (avatarDecoration == null) {
      avatarDecoration = null;
    }
    let tmp9 = avatar_decoration_data;
    if (avatar_decoration_data == null) {
      tmp9 = null;
    }
    isEqualResult = tmp2(1881).isEqualAvatarDecoration(avatarDecoration, tmp9);
    const tmp2Result = tmp2(1881);
  }
  if (isEqualResult) {
    isEqualResult = member.premiumSince === premium_since;
  }
  if (isEqualResult) {
    isEqualResult = member.isPending === pending;
  }
  if (isEqualResult) {
    isEqualResult = member.joinedAt === joined_at;
  }
  if (isEqualResult) {
    isEqualResult = member.communicationDisabledUntil === communication_disabled_until;
  }
  if (isEqualResult) {
    isEqualResult = member.flags === flags;
  }
  if (isEqualResult) {
    let prop = member.unusualDMActivityUntil;
    if (prop == null) {
      prop = null;
    }
    let tmp11 = unusual_dm_activity_until;
    if (unusual_dm_activity_until == null) {
      tmp11 = null;
    }
    isEqualResult = prop === tmp11;
  }
  if (isEqualResult) {
    collectibles = member.collectibles;
    if (collectibles == null) {
      collectibles = null;
    }
    let tmp14 = result;
    if (result == null) {
      tmp14 = null;
    }
    isEqualResult = _modDef12.isEqual(collectibles, tmp14);
  }
  if (isEqualResult) {
    let displayNameStyles = member.displayNameStyles;
    if (displayNameStyles == null) {
      displayNameStyles = null;
    }
    let tmp17 = result1;
    if (result1 == null) {
      tmp17 = null;
    }
    isEqualResult = _modDef12.isEqual(displayNameStyles, tmp17);
  }
  if (!isEqualResult) {
    obj = { type: "GUILD_MEMBER_ADD", guildId: guild_id, user: author, roles, nick, avatar, avatarDecoration: avatar_decoration_data, premiumSince: premium_since, isPending: pending, joinedAt: joined_at, communicationDisabledUntil: communication_disabled_until, unusualDMActivityUntil: unusual_dm_activity_until, flags, collectibles: result, displayNameStyles: result1 };
    DispatcherDefault.dispatch(obj).catch((error) => {
      logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
      const socket = obj(closure_3[13]).socket;
      obj = { error, action: obj.type };
      result = socket.resetSocketOnDispatchError(obj);
    });
    const dispatchResult = DispatcherDefault.dispatch(obj);
  }
  const obj2 = obj(1388);
  tmp2 = obj;
}
function dispatchPresence(arg0) {
  ActionBatcher.add(arg0);
}
let closure_4 = ["newly_created"];
let closure_6 = fn(1961).createChannelRecordFromServer;
const ChannelLoader = fn(1957).ChannelLoader;
const ActivityTypes = fn(1074).ActivityTypes;
let closure_17 = new LoggerDefault("ConnectionStore");
new ActionBatcher(fn(13628).socket, (arg0, id) => {
  let tmp = arg0;
  if (arg0 == null) {
    let obj = { type: "CHANNEL_UPDATES", channels: [] };
    tmp = obj;
  }
  const tmp2 = closure_6(id);
  const channel = ChannelStore.getChannel(id.id);
  let mergeResult;
  if (channel != null) {
    obj = {};
    const merged = Object.assign(tmp2);
    obj.recipients = channel.recipients;
    let bitrate = tmp2.bitrate;
    if (bitrate == null) {
      bitrate = channel.bitrate;
    }
    obj.bitrate = bitrate;
    mergeResult = channel.merge(obj);
  }
  const channels = tmp.channels;
  if (mergeResult == null) {
    mergeResult = tmp2;
  }
  channels.push(mergeResult);
  return tmp;
}, (arg0) => "CHANNEL_UPDATE" !== arg0);
new ActionBatcher(fn(13628).socket, (arg0, guildId) => {
  let tmp = arg0;
  if (null == arg0) {
    let obj = { type: "SOUNDBOARD_SOUNDS_RECEIVED", updates: [] };
    tmp = obj;
  }
  const updates = tmp.updates;
  obj = { guildId: guildId.guild_id, sounds: null };
  const soundboard_sounds = guildId.soundboard_sounds;
  obj.sounds = soundboard_sounds.map((name) => ({ name: name.name, soundId: name.sound_id, emojiName: name.emoji_name, emojiId: name.emoji_id, userId: name.user_id, volume: name.volume, available: name.available, guildId: guildId.guild_id }));
  updates.push(obj);
  return tmp;
}, (arg0) => "SOUNDBOARD_SOUNDS" !== arg0);
new ActionBatcher(fn(13628).socket, (arg0, arg1) => {
  let tmp = arg0;
  if (arg0 == null) {
    const obj = { type: "GUILD_MEMBERS_CHUNK_BATCH", chunks: [] };
    tmp = obj;
  }
  const chunks = tmp.chunks;
  chunks.push(arg1);
  return tmp;
}, (arg0) => "GUILD_MEMBERS_CHUNK" !== arg0);
ActionBatcher = new ActionBatcher(fn(13628).socket, (arg0, arg1) => {
  let tmp = arg0;
  if (null == arg0) {
    const obj = { type: "PRESENCE_UPDATES", updates: [] };
    tmp = obj;
  }
  const updates = tmp.updates;
  updates.push(arg1);
  return tmp;
}, (arg0) => {
  let tmp = "PRESENCE_UPDATE" !== arg0;
  if (tmp) {
    tmp = "GUILD_MEMBERS_CHUNK" !== arg0;
  }
  return tmp;
});
let closure_22 = {};
let result = definePreloadableDispatch(["INITIAL_GUILD"], (data_mode) => {
  let guildIds = null;
  if ("full" !== data_mode.data_mode) {
    const items = [data_mode.id];
    guildIds = ChannelLoader.loadGuildIds(items);
  }
  return guildIds;
}, (arg0) => {
  closure_0 = arg0;
  const initialGuild = TTITrackerDefault.initialGuild;
  initialGuild.measure(() => {
    const Emitter = initializeDefault.Emitter;
    Emitter.batched(() => {
      let obj = ReadyPayloadUtilsAll;
      const hydrateInitialGuildResult = obj.hydrateInitialGuild(closure_1_0, closure_0(13628).socket.identifyStartTime);
      obj = hydrateInitialGuildResult;
      if (null != currentUser.getCurrentUser()) {
        obj = { type: "GUILD_CREATE", guild: hydrateInitialGuildResult };
        DispatcherDefault.dispatch(obj).catch((error) => {
          logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
          const socket = obj(closure_3[13]).socket;
          obj = { error, action: obj.type };
          result = socket.resetSocketOnDispatchError(obj);
        });
        obj = { type: "VOICE_STATE_UPDATES", voiceStates: null };
        const voice_states = hydrateInitialGuildResult.voice_states;
        obj.voiceStates = voice_states.map((userId) => {
          obj = { userId: userId.user_id, guildId: obj.id, sessionId: userId.session_id, channelId: userId.channel_id, mute: userId.mute, deaf: userId.deaf, selfMute: userId.self_mute, selfDeaf: userId.self_deaf, selfVideo: userId.self_video || false, suppress: userId.suppress, selfStream: userId.self_stream || false, requestToSpeakTimestamp: null, discoverable: null, connectedAt: null };
          let prop = userId.request_to_speak_timestamp;
          if (prop == null) {
            prop = null;
          }
          obj.requestToSpeakTimestamp = prop;
          let flag = userId.discoverable;
          if (flag == null) {
            flag = true;
          }
          obj.discoverable = flag;
          obj.connectedAt = userId.connected_at;
          return obj;
        });
        const dispatchResult = DispatcherDefault.dispatch(obj);
        DispatcherDefault.dispatch(obj).catch((error) => {
          logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
          const socket = obj(closure_3[13]).socket;
          obj = { error, action: obj.type };
          result = socket.resetSocketOnDispatchError(obj);
        });
        const _HermesInternal = HermesInternal;
        logger.log("Dispatched INITIAL_GUILD " + closure_1_0.id);
        const dispatchResult1 = DispatcherDefault.dispatch(obj);
      }
    });
  });
});
defineSimpleDispatch(["READY_SUPPLEMENTAL"], (arg0) => {
  closure_0 = arg0;
  const readySupplemental = TTITrackerDefault.readySupplemental;
  readySupplemental.measure(() => {
    const Emitter = initializeDefault.Emitter;
    Emitter.batched(() => {
      const hydrateReadySupplemental = closure_1_1(9).hydrateReadySupplemental;
      const measureResult = hydrateReadySupplemental.measure(() => {
        obj = closure_2_2(13678);
        return obj.hydrateReadySupplementalPayload(obj, closure_2_0(13628).socket.identifyStartTime);
      });
      let guilds = measureResult.guilds;
      const found = guilds.filter((unavailable) => true !== unavailable.unavailable);
      let obj = found;
      let item = found.forEach((presences) => {
        const id = presences.id;
        presences.presences = presences.presences || [].map((activities) => {
          activities = activities.activities;
          if (activities == null) {
            activities = [];
          }
          let hidden_activities = activities.hidden_activities;
          if (hidden_activities == null) {
            hidden_activities = [];
          }
          const tmp2Result = closure_1(items[38])(activities, hidden_activities);
          obj = { user: activities.user, status: activities.status, clientStatus: activities.client_status, activities: null, hiddenActivities: tmp2Result.hiddenActivities, guildId: id, processedAtTimestamp: activities.processed_at_timestamp };
          const activities1 = tmp2Result.activities;
          obj.activities = activities1.map(() => { ... });
          return obj;
        });
      });
      let presences = obj.presences;
      if (presences == null) {
        presences = [];
      }
      presences = presences.map((activities) => {
        activities = activities.activities;
        if (activities == null) {
          activities = [];
        }
        let hidden_activities = activities.hidden_activities;
        if (hidden_activities == null) {
          hidden_activities = [];
        }
        const tmp2Result = closure_1(items[38])(activities, hidden_activities);
        obj = { user: activities.user, status: activities.status, clientStatus: activities.client_status, activities: null, hiddenActivities: tmp2Result.hiddenActivities, guildId: id, processedAtTimestamp: activities.processed_at_timestamp };
        const activities1 = tmp2Result.activities;
        obj.activities = activities1.map((timestamps) => {
          timestamps = timestamps.timestamps;
          let end;
          if (timestamps != null) {
            end = timestamps.end;
          }
          const created_at = timestamps.created_at;
          let tmp2 = timestamps;
          if (null != end) {
            tmp2 = timestamps;
            if (null != created_at) {
              timestamps = {};
              const merged = Object.assign(timestamps);
              timestamps = {};
              const merged1 = Object.assign(timestamps.timestamps);
              let tmp8 = end > created_at;
              if (tmp8) {
                tmp8 = timestamps.type !== constants.LISTENING;
              }
              timestamps.isCountDown = tmp8;
              timestamps.timestamps = timestamps;
              tmp2 = timestamps;
            }
          }
          return tmp2;
        });
        return obj;
      });
      let prop = obj.lazy_private_channels;
      if (prop == null) {
        prop = [];
      }
      const lazyPrivateChannels = prop.map((item) => closure_1_6(item));
      const dispatchReadySupplemental = closure_1_1(9).dispatchReadySupplemental;
      dispatchReadySupplemental.measure(() => {
        guilds = { type: "CONNECTION_OPEN_SUPPLEMENTAL", guilds, presences, lazyPrivateChannels };
        DispatcherDefault.dispatch(guilds).catch((error) => {
          logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
          const socket = obj(closure_3[13]).socket;
          obj = { error, action: obj.type };
          result = socket.resetSocketOnDispatchError(obj);
        });
      });
      const items = [];
      const item1 = found.forEach((voice_states) => {
        voice_states = voice_states.voice_states;
        const item = voice_states.forEach((userId) => {
          obj = { userId: userId.user_id, guildId: voice_states.id, sessionId: userId.session_id, channelId: userId.channel_id, mute: userId.mute, deaf: userId.deaf, selfMute: userId.self_mute, selfDeaf: userId.self_deaf, selfVideo: null, suppress: null, selfStream: null, requestToSpeakTimestamp: null, discoverable: null, connectedAt: null };
          let flag = userId.self_video;
          if (!flag) {
            flag = false;
          }
          obj.selfVideo = flag;
          obj.suppress = userId.suppress;
          obj.selfStream = userId.self_stream || false;
          let prop = userId.request_to_speak_timestamp;
          if (prop == null) {
            prop = null;
          }
          obj.requestToSpeakTimestamp = prop;
          let flag2 = userId.discoverable;
          if (flag2 == null) {
            flag2 = true;
          }
          obj.discoverable = flag2;
          obj.connectedAt = userId.connected_at;
          items.push(obj);
        });
      });
      obj = { type: "VOICE_STATE_UPDATES", voiceStates: items, initial: true };
      const tmpResult = closure_1_1(573);
      closure_1_1(573).dispatch(obj).catch((error) => {
        logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
        const socket = obj(closure_3[13]).socket;
        obj = { error, action: obj.type };
        result = socket.resetSocketOnDispatchError(obj);
      });
      const localVoiceState = closure_1_0(13628).localVoiceState;
      localVoiceState.update();
      const dispatchResult = closure_1_1(573).dispatch(obj);
    });
  });
  const timerId = setTimeout(() => {
    const obj = { type: "POST_CONNECTION_OPEN" };
    const obj2 = closure_1(573);
    closure_1(573).dispatch(obj).catch((error) => {
      logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
      const socket = obj(closure_3[13]).socket;
      obj = { error, action: obj.type };
      result = socket.resetSocketOnDispatchError(obj);
    });
  }, 2000);
});
let result1 = definePreloadableDispatch(["READY"], (guilds) => {
  guilds = guilds.guilds;
  const result = ReadyPayloadUtilsAll.preloadReadyPayloadData();
  const found = guilds.filter((unavailable) => {
    unavailable = unavailable.unavailable;
    let tmp = !unavailable;
    if (!unavailable) {
      let tmp2 = "partial" === unavailable.data_mode;
      if (tmp2) {
        let channels = unavailable.partial_updates.channels;
        if (channels == null) {
          channels = [];
        }
        let tmp4 = channels.length > 0;
        if (!tmp4) {
          let deleted_channel_ids = unavailable.partial_updates.deleted_channel_ids;
          if (deleted_channel_ids == null) {
            deleted_channel_ids = [];
          }
          tmp4 = deleted_channel_ids.length > 0;
        }
        tmp2 = tmp4;
      }
      tmp = tmp2;
    }
    return tmp;
  });
  let guildIds = ChannelLoader.loadGuildIds(found.map((id) => id.id));
  if (guildIds == null) {
    guildIds = Promise.resolve();
  }
  const items = [result, guildIds];
  return Promise.all(items).then((result) => {
    [tmp] = result;
    return tmp;
  });
}, (user, arg1, arg2) => {
  closure_0 = user;
  importDefault = arg2;
  if (user.user.bot) {
    let obj = { type: "LOGOUT" };
    closure_129_0 = obj;
    DispatcherDefault.dispatch(obj).catch((error) => {
      logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
      const socket = obj(closure_3[13]).socket;
      obj = { error, action: obj.type };
      result = socket.resetSocketOnDispatchError(obj);
    });
    let dispatchResult = DispatcherDefault.dispatch(obj);
  } else {
    const ready = TTITrackerDefault.ready;
    ready.measure(() => {
      const Emitter = initializeDefault.Emitter;
      Emitter.batched(() => {
        const hydrateReady = closure_1_1(9).hydrateReady;
        const measureResult = hydrateReady.measure(() => {
          obj = closure_2_2(13678);
          return obj.hydrateReadyPayloadPrioritized(obj, user(13628).socket.identifyStartTime, closure_1);
        });
        const private_channels = measureResult.private_channels;
        let obj = private_channels.map((item) => closure_1_6(item));
        let guilds = obj.guilds;
        const found = guilds.filter((unavailable) => true === unavailable.unavailable && true !== unavailable.geo_restricted);
        const unavailableGuilds = found.map((id) => id.id);
        const guilds1 = obj.guilds;
        guilds = guilds1.filter((unavailable) => true !== unavailable.unavailable);
        const guilds2 = obj.guilds;
        const geoRestrictedGuilds = guilds2.filter((geo_restricted) => true === geo_restricted.geo_restricted);
        let result;
        if (null != obj.user_settings_proto) {
          obj = user(1223);
          result = obj.b64ToPreloadedUserSettingsProto(obj.user_settings_proto);
        }
        const notification_settings = obj.notification_settings;
        let prop;
        if (notification_settings != null) {
          prop = notification_settings.declarative_settings_proto;
        }
        let result1;
        if (null != prop) {
          result1 = user(13679).b64ToDeclarativeSettingsProto(obj.notification_settings.declarative_settings_proto);
          const obj2 = user(13679);
        }
        closure_1_1(7492)("AllGatewayConnectionStores", () => obj(geoRestrictedGuilds[20]));
        const dispatchReady = closure_1_1(9).dispatchReady;
        dispatchReady.measure(() => {
          notificationSettings = { type: "CONNECTION_OPEN", sessionId: user.session_id, authSessionIdHash: user.auth_session_id_hash, staticAuthSessionId: user.static_client_session_id, user: user.user, users: user.users, guilds, initialPrivateChannels: notificationSettings, unavailableGuilds, readState: user.read_state, userGuildSettings: user.user_guild_settings, tutorial: user.tutorial, relationships: null, gameRelationships: null, friendSuggestionCount: null, analyticsToken: null, experiments: null, connectedAccounts: null, guildExperiments: null, apexExperiments: null, requiredAction: null, consents: null, sessions: null, pendingPayments: null, countryCode: null, guildJoinRequests: null, userSettingsProto: null, apiCodeVersion: null, auth: null, notificationSettings: null, geoRestrictedGuilds: null, explicitContentScanVersion: null, failedStates: null, linkedUsers: null, regionalFeatureConfig: null, qosToken: null };
          let relationships = user.relationships;
          if (relationships == null) {
            relationships = [];
          }
          notificationSettings.relationships = relationships;
          notificationSettings.gameRelationships = user.game_relationships;
          notificationSettings.friendSuggestionCount = user.friend_suggestion_count;
          notificationSettings.analyticsToken = user.analytics_token;
          notificationSettings.experiments = user.experiments;
          notificationSettings.connectedAccounts = user.connected_accounts;
          notificationSettings.guildExperiments = user.guild_experiments;
          const apex_experiments = user.apex_experiments;
          notificationSettings.apexExperiments = apex_experiments;
          notificationSettings.requiredAction = user.required_action;
          notificationSettings.consents = user.consents;
          let sessions = user.sessions;
          if (sessions == null) {
            sessions = [];
          }
          notificationSettings.sessions = sessions.map((sessionId) => {
            obj = { sessionId: sessionId.session_id, lastModified: sessionId.last_modified, status: sessionId.status, activities: null, hiddenActivities: null, active: null, clientInfo: null };
            let activities = sessionId.activities;
            if (activities == null) {
              activities = [];
            }
            obj.activities = activities.map(() => { ... });
            let hidden_activities = sessionId.hidden_activities;
            if (hidden_activities == null) {
              hidden_activities = [];
            }
            obj.hiddenActivities = hidden_activities;
            obj.active = sessionId.active;
            obj.clientInfo = sessionId.client_info;
            return obj;
          });
          notificationSettings.pendingPayments = user.pending_payments;
          const country_code = user.country_code;
          notificationSettings.countryCode = country_code;
          let guild_join_requests = user.guild_join_requests;
          if (guild_join_requests == null) {
            guild_join_requests = [];
          }
          notificationSettings.guildJoinRequests = guild_join_requests;
          notificationSettings.userSettingsProto = result;
          notificationSettings.apiCodeVersion = user.api_code_version;
          notificationSettings.auth = user.auth;
          notificationSettings = { flags: user.notification_settings.flags, declarativeSettings: result1 };
          notificationSettings.notificationSettings = notificationSettings;
          notificationSettings.geoRestrictedGuilds = geoRestrictedGuilds;
          notificationSettings.explicitContentScanVersion = user.explicit_content_scan_version;
          notificationSettings.failedStates = user.failed_states;
          const linked_users = user.linked_users;
          notificationSettings.linkedUsers = linked_users;
          const regional_feature_config = user.regional_feature_config;
          notificationSettings.regionalFeatureConfig = regional_feature_config;
          const qos_token = user.qos_token;
          notificationSettings.qosToken = qos_token;
          const obj3 = unavailableGuilds(dependencyMap[21]);
          unavailableGuilds(dependencyMap[21]).dispatch(notificationSettings).catch((error) => {
            logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
            const socket = obj(closure_3[13]).socket;
            obj = { error, action: obj.type };
            result = socket.resetSocketOnDispatchError(obj);
          });
        });
        if (null != obj.auth_token) {
          obj = { type: "UPDATE_TOKEN", token: null, userId: null };
          obj.token = obj.auth_token;
          obj.userId = obj.user.id;
          let tmpResult = closure_1_1(573);
          tmpResult.dispatch(obj).catch((error) => {
            logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
            const socket = obj(closure_3[13]).socket;
            obj = { error, action: obj.type };
            result = socket.resetSocketOnDispatchError(obj);
          });
          const dispatchResult = tmpResult.dispatch(obj);
        }
        if (null != obj.ad_personalization_toggles_disabled) {
          obj = { type: "AD_PERSONALIZATION_TOGGLES_RESTRICTED", disabled: null };
          obj.disabled = obj.ad_personalization_toggles_disabled;
          tmpResult = closure_1_1(573);
          tmpResult.dispatch(obj).catch((error) => {
            logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
            const socket = obj(closure_3[13]).socket;
            obj = { error, action: obj.type };
            result = socket.resetSocketOnDispatchError(obj);
          });
          const dispatchResult1 = tmpResult.dispatch(obj);
        }
        const localPresenceState = user(13628).localPresenceState;
        localPresenceState.update();
        const localVoiceState = user(13628).localVoiceState;
        localVoiceState.update();
      });
    });
  }
});
defineSimpleDispatch(["STATE_UPDATE"], (apex_experiments) => {
  apex_experiments = apex_experiments.apex_experiments;
  const obj = { type: "CONNECTION_OPEN_STATE_UPDATE", apexExperiments: apex_experiments };
  DispatcherDefault.dispatch(obj).catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(closure_3[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["EXPERIMENT_SESSION_OVERRIDE_CREATE"], (experimentName) => {
  const obj = { type: "APEX_EXPERIMENT_SESSION_OVERRIDE_CREATE", experimentName: experimentName.experiment_name, variantId: experimentName.variant_id };
  obj.dispatch(obj);
});
defineSimpleDispatch(["EXPERIMENT_SESSION_OVERRIDE_DELETE"], (experimentName) => {
  const obj = { type: "APEX_EXPERIMENT_SESSION_OVERRIDE_DELETE", experimentName: experimentName.experiment_name };
  obj.dispatch(obj);
});
defineSimpleDispatch(["RESUMED"], () => {
  const localPresenceState = obj(13628).localPresenceState;
  localPresenceState.forceUpdate();
  const localVoiceState = obj(13628).localVoiceState;
  localVoiceState.forceUpdate();
  obj = { type: "CONNECTION_RESUMED" };
  DispatcherDefault.dispatch(obj).catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(closure_3[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["TYPING_START"], (guildId) => {
  if (null != guildId.member) {
    dispatchGuildMemberAdd(guildId.guild_id, guildId.member.user, guildId.member);
  }
  obj = { type: "TYPING_START", guildId: guildId.guild_id, channelId: guildId.channel_id, userId: guildId.user_id, customTypingIndicatorConfig: obj(1392).parseServerTypingIndicatorStyle(guildId.typing_indicator_style) };
  const obj2 = obj(1392);
  DispatcherDefault.dispatch(obj).catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(closure_3[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
  const dispatchResult = DispatcherDefault.dispatch(obj);
});
defineSimpleDispatch(["GUILD_RING_START"], (ongoingRings) => {
  const obj = { type: "GUILD_RING_START", ongoingRings: ongoingRings.ongoing_rings, channelId: ongoingRings.channel_id, guildId: ongoingRings.guild_id };
  DispatcherDefault.dispatch(obj).catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(closure_3[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["GUILD_RING_STOP"], (ringing) => {
  const obj = { type: "GUILD_RING_STOP", ringing: ringing.ringing, channelId: ringing.channel_id, guildId: ringing.guild_id };
  DispatcherDefault.dispatch(obj).catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(closure_3[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["ACTIVITY_START"], (userId) => {
  const obj = { type: "ACTIVITY_START", userId: userId.user_id, activity: userId.activity };
  DispatcherDefault.dispatch(obj).catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(closure_3[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["ACTIVITY_USER_ACTION"], (actionType) => {
  const obj = { type: "ACTIVITY_USER_ACTION", actionType: actionType.action_type, user: actionType.user, applicationId: actionType.application_id, channelId: actionType.channel_id, messageId: actionType.message_id };
  DispatcherDefault.dispatch(obj).catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(closure_3[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
const result2 = definePreloadableDispatch(["MESSAGE_CREATE"], (guild_id) => {
  const items = [guild_id.guild_id];
  return ChannelLoader.loadGuildIds(items);
}, (author) => {
  ({ member, mentions, guild_id } = author);
  let tmp = null != member;
  if (tmp) {
    tmp = null != guild_id;
  }
  if (tmp) {
    dispatchGuildMemberAdd(guild_id, author.author, member);
  }
  if (null != mentions) {
    const item = mentions.forEach((member) => {
      if (null != member.member) {
        if (null != guild_id) {
          delete tmp2[tmp];
          dispatchGuildMemberAdd(tmp3, member, member.member);
        }
      }
    });
  }
  if (null != author.author) {
    const obj = { type: "MESSAGE_CREATE", guildId: null, channelId: null, message: null, optimistic: false, isPushNotification: false };
    ({ guild_id: obj.guildId, channel_id: obj.channelId } = author);
    obj.message = author;
    closure_129_0 = obj;
    DispatcherDefault.dispatch(obj).catch((error) => {
      logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
      const socket = obj(closure_3[13]).socket;
      obj = { error, action: obj.type };
      result = socket.resetSocketOnDispatchError(obj);
    });
    const dispatchResult = DispatcherDefault.dispatch(obj);
  }
});
const result3 = definePreloadableDispatch(["MESSAGE_UPDATE"], (guild_id) => {
  const items = [guild_id.guild_id];
  return ChannelLoader.loadGuildIds(items);
}, (author) => {
  ({ member, mentions, guild_id } = author);
  let tmp = null != member;
  if (tmp) {
    tmp = null != guild_id;
  }
  if (tmp) {
    dispatchGuildMemberAdd(guild_id, author.author, member);
  }
  if (null != mentions) {
    const item = mentions.forEach((member) => {
      if (null != member.member) {
        if (null != guild_id) {
          delete tmp2[tmp];
          dispatchGuildMemberAdd(tmp3, member, member.member);
        }
      }
    });
  }
  const obj = { type: "MESSAGE_UPDATE", guildId: author.guild_id, message: author };
  closure_129_0 = obj;
  DispatcherDefault.dispatch(obj).catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(closure_3[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
  const dispatchResult = DispatcherDefault.dispatch(obj);
});
const result4 = definePreloadableDispatch(["MESSAGE_DELETE"], (guild_id) => {
  const items = [guild_id.guild_id];
  return ChannelLoader.loadGuildIds(items);
}, (guildId) => {
  const obj = { type: "MESSAGE_DELETE", guildId: guildId.guild_id, id: guildId.id, channelId: guildId.channel_id };
  DispatcherDefault.dispatch(obj).catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(closure_3[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
const result5 = definePreloadableDispatch(["MESSAGE_DELETE_BULK"], (guild_id) => {
  const items = [guild_id.guild_id];
  return ChannelLoader.loadGuildIds(items);
}, (guildId) => {
  const obj = { type: "MESSAGE_DELETE_BULK", guildId: guildId.guild_id, ids: guildId.ids, channelId: guildId.channel_id };
  DispatcherDefault.dispatch(obj).catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(closure_3[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
const result6 = definePreloadableDispatch(["MESSAGE_ACK"], (channel_id) => ChannelLoader.loadGuildFromChannelId(channel_id.channel_id), (channelId) => {
  const obj = { type: "MESSAGE_ACK", channelId: channelId.channel_id, messageId: channelId.message_id, manual: channelId.manual, newMentionCount: channelId.mention_count, version: channelId.version };
  DispatcherDefault.dispatch(obj).catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(closure_3[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["GUILD_FEATURE_ACK"], (id) => {
  const obj = { type: "GUILD_FEATURE_ACK", id: id.resource_id, ackType: id.ack_type, ackedId: id.entity_id };
  DispatcherDefault.dispatch(obj).catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(closure_3[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["USER_NON_CHANNEL_ACK"], (ackType) => {
  const obj = { type: "USER_NON_CHANNEL_ACK", ackType: ackType.ack_type, ackedId: ackType.entity_id };
  DispatcherDefault.dispatch(obj).catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(closure_3[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
const result7 = definePreloadableDispatch(["CHANNEL_PINS_ACK"], (guild_id) => {
  const items = [guild_id.guild_id];
  return ChannelLoader.loadGuildIds(items);
}, (channelId) => {
  const obj = { type: "CHANNEL_PINS_ACK", channelId: channelId.channel_id, timestamp: channelId.timestamp, version: channelId.version };
  DispatcherDefault.dispatch(obj).catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(closure_3[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
const result8 = definePreloadableDispatch(["CHANNEL_PINS_UPDATE"], (guild_id) => {
  const items = [guild_id.guild_id];
  return ChannelLoader.loadGuildIds(items);
}, (channelId) => {
  const obj = { type: "CHANNEL_PINS_UPDATE", channelId: channelId.channel_id, lastPinTimestamp: channelId.last_pin_timestamp };
  DispatcherDefault.dispatch(obj).catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(closure_3[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
const result9 = definePreloadableDispatch(["CHANNEL_CREATE", "CHANNEL_DELETE"], (guild_id) => {
  const items = [guild_id.guild_id];
  return ChannelLoader.loadGuildIds(items);
}, (arg0, type) => {
  const obj = { type, channel: closure_6(arg0) };
  DispatcherDefault.dispatch(obj).catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(closure_3[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["VOICE_CHANNEL_STATUS_UPDATE"], (id, type) => {
  const obj = { type, id: id.id, guildId: id.guild_id, status: id.status };
  DispatcherDefault.dispatch(obj).catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(closure_3[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["VOICE_CHANNEL_START_TIME_UPDATE"], (id, type) => {
  const obj = { type, id: id.id, guildId: id.guild_id, voiceStartTime: null };
  const voice_start_time = id.voice_start_time;
  obj.voiceStartTime = voice_start_time;
  DispatcherDefault.dispatch(obj).catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(closure_3[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["CHANNEL_INFO"], (guildId, type) => {
  const obj = { type, guildId: guildId.guild_id, channels: null };
  const channels = guildId.channels;
  obj.channels = channels.map((id) => ({ id: id.id, status: id.status, voiceStartTime: id.voice_start_time }));
  DispatcherDefault.dispatch(obj).catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(closure_3[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["CHANNEL_MEMBER_COUNT_UPDATE"], (guildId, type) => {
  const obj = { type, guildId: guildId.guild_id, channelId: guildId.channel_id, online: guildId.presence_count, total: guildId.member_count };
  DispatcherDefault.dispatch(obj).catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(closure_3[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
const result10 = definePreloadableDispatch(["CHANNEL_UPDATE"], (guild_id) => {
  const items = [guild_id.guild_id];
  return ChannelLoader.loadGuildIds(items);
}, (arg0) => {
  ActionBatcher.add(arg0);
});
const result11 = definePreloadableDispatch(["THREAD_CREATE", "THREAD_UPDATE", "THREAD_DELETE"], (guild_id) => {
  const items = [guild_id.guild_id];
  return ChannelLoader.loadGuildIds(items);
}, (isNewlyCreated, type) => {
  const obj = { type, isNewlyCreated: isNewlyCreated.newly_created, channel: closure_6(_objectWithoutProperties(isNewlyCreated, closure_4)) };
  DispatcherDefault.dispatch(obj).catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(closure_3[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
const result12 = definePreloadableDispatch(["THREAD_LIST_SYNC"], (guild_id) => {
  const items = [guild_id.guild_id];
  return ChannelLoader.loadGuildIds(items);
}, (guildId) => {
  const obj = { type: "THREAD_LIST_SYNC", guildId: guildId.guild_id, threads: null, mostRecentMessages: guildId.most_recent_messages, members: null, channelIds: null };
  const threads = guildId.threads;
  obj.threads = threads.map((parent_id) => {
    channel = channel.getChannel(parent_id.parent_id);
    if (null != channel) {
      ({ nsfw: parent_id.nsfw, type: parent_id.parentChannelThreadType } = channel);
    }
    return closure_1_6(parent_id);
  });
  let mapped;
  if (guildId.members) {
    mapped = _modDef12.map(guildId.members, convertServerThreadMemberDefault);
  }
  obj.members = mapped;
  obj.channelIds = guildId.channel_ids;
  DispatcherDefault.dispatch(obj).catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(closure_3[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
  const dispatchResult = DispatcherDefault.dispatch(obj);
});
defineSimpleDispatch(["THREAD_MEMBER_UPDATE"], (id) => {
  const obj = { type: "THREAD_MEMBER_UPDATE", id: id.id, guildId: id.guild_id, userId: id.user_id, flags: id.flags, muted: id.muted, muteConfig: id.mute_config, joinTimestamp: id.join_timestamp };
  DispatcherDefault.dispatch(obj).catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(closure_3[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["THREAD_MEMBERS_UPDATE"], (id) => {
  let obj = { type: "THREAD_MEMBERS_UPDATE", id: id.id, guildId: id.guild_id, memberCount: id.member_count, addedMembers: null, removedMemberIds: null, memberIdsPreview: null };
  const added_members = id.added_members;
  let mapped;
  if (added_members != null) {
    mapped = added_members.map((id) => {
      obj = { id: id.id, guildId: obj.guild_id, userId: id.user_id, flags: id.flags, joinTimestamp: id.join_timestamp };
      return obj;
    });
  }
  obj.addedMembers = mapped;
  ({ removed_member_ids: obj.removedMemberIds, member_ids_preview: obj.memberIdsPreview } = id);
  DispatcherDefault.dispatch(obj).catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(closure_3[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["FORUM_UNREADS"], (permission_denied) => {
  if (!permission_denied.permission_denied) {
    const obj = { type: "FORUM_UNREADS", channelId: null, threads: null };
    ({ channel_id: obj.channelId, threads } = permission_denied);
    obj.threads = threads.map((threadId) => ({ threadId: threadId.thread_id, missing: threadId.missing, count: threadId.count }));
    DispatcherDefault.dispatch(obj).catch((error) => {
      logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
      const socket = obj(closure_3[13]).socket;
      obj = { error, action: obj.type };
      result = socket.resetSocketOnDispatchError(obj);
    });
    const dispatchResult = DispatcherDefault.dispatch(obj);
  }
});
defineSimpleDispatch(["SOUNDBOARD_SOUNDS"], (arg0) => {
  ActionBatcher.add(arg0);
});
defineSimpleDispatch(["CHANNEL_RECIPIENT_ADD", "CHANNEL_RECIPIENT_REMOVE"], (channelId, type) => {
  const obj = { type, channelId: channelId.channel_id, user: channelId.user, nick: channelId.nick, isMember: null != ChannelStore.getBasicChannel(channelId.channel_id) };
  DispatcherDefault.dispatch(obj).catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(closure_3[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
const result13 = definePreloadableDispatch(["GUILD_CREATE"], (data_mode) => {
  let guildIds = null;
  if ("full" !== data_mode.data_mode) {
    const items = [data_mode.id];
    guildIds = ChannelLoader.loadGuildIds(items);
  }
  return guildIds;
}, (unavailable) => {
  if (unavailable.unavailable) {
    let obj = { type: "GUILD_UNAVAILABLE", guildId: unavailable.id };
    closure_130_0 = obj;
    DispatcherDefault.dispatch(obj).catch((error) => {
      logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
      const socket = obj(closure_3[13]).socket;
      obj = { error, action: obj.type };
      result = socket.resetSocketOnDispatchError(obj);
    });
    const dispatchResult = DispatcherDefault.dispatch(obj);
  } else {
    obj = ReadyPayloadUtilsAll;
    const result = obj.hydratePreviouslyUnavailableGuild(unavailable);
    obj = { type: "GUILD_CREATE", guild: result };
    DispatcherDefault.dispatch(obj).catch((error) => {
      logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
      const socket = obj(closure_3[13]).socket;
      obj = { error, action: obj.type };
      result = socket.resetSocketOnDispatchError(obj);
    });
    const obj1 = { type: "VOICE_STATE_UPDATES", voiceStates: null };
    const voice_states = result.voice_states;
    obj1.voiceStates = voice_states.map((userId) => {
      obj = { userId: userId.user_id, guildId: obj.id, sessionId: userId.session_id, channelId: userId.channel_id, mute: userId.mute, deaf: userId.deaf, selfMute: userId.self_mute, selfDeaf: userId.self_deaf, selfVideo: userId.self_video || false, suppress: userId.suppress, selfStream: userId.self_stream || false, requestToSpeakTimestamp: null, discoverable: null, connectedAt: null };
      let prop = userId.request_to_speak_timestamp;
      if (prop == null) {
        prop = null;
      }
      obj.requestToSpeakTimestamp = prop;
      let flag = userId.discoverable;
      if (flag == null) {
        flag = true;
      }
      obj.discoverable = flag;
      obj.connectedAt = userId.connected_at;
      return obj;
    });
    closure_129_0 = obj1;
    const dispatchResult1 = DispatcherDefault.dispatch(obj);
    DispatcherDefault.dispatch(obj1).catch((error) => {
      logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
      const socket = obj(closure_3[13]).socket;
      obj = { error, action: obj.type };
      result = socket.resetSocketOnDispatchError(obj);
    });
    const dispatchResult2 = DispatcherDefault.dispatch(obj1);
  }
});
defineSimpleDispatch(["GUILD_UPDATE"], (guild) => {
  let obj = { type: "GUILD_UPDATE", guild };
  DispatcherDefault.dispatch(obj).catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(closure_3[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
  if (guild.unavailable) {
    obj = { type: "GUILD_UNAVAILABLE", guildId: guild.id };
    closure_129_0 = obj;
    const tmpResult = DispatcherDefault;
    DispatcherDefault.dispatch(obj).catch((error) => {
      logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
      const socket = obj(closure_3[13]).socket;
      obj = { error, action: obj.type };
      result = socket.resetSocketOnDispatchError(obj);
    });
    const dispatchResult1 = DispatcherDefault.dispatch(obj);
  }
  const dispatchResult = DispatcherDefault.dispatch(obj);
});
defineSimpleDispatch(["GUILD_PRUNE_UPDATE"], (guildId) => {
  const obj = { type: "GUILD_PRUNE_UPDATE", guildId: guildId.guild_id, prune: { isPreview: guildId.prune.is_preview, isFinished: guildId.prune.is_finished, days: guildId.prune.days, pruneCount: guildId.prune.prune_count, includeRoles: guildId.prune.include_roles } };
  DispatcherDefault.dispatch(obj).catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(closure_3[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["GUILD_BULK_BAN_UPDATE"], (guildId) => {
  let bulkBan = { type: "GUILD_BULK_BAN_UPDATE", guildId: guildId.guild_id, bulkBan: null };
  const bulk_ban = guildId.bulk_ban;
  let banned_users;
  if (bulk_ban != null) {
    banned_users = bulk_ban.banned_users;
  }
  if (banned_users == null) {
    banned_users = [];
  }
  bulkBan = { bannedUsers: banned_users, failedUsers: null };
  const bulk_ban2 = guildId.bulk_ban;
  let failed_users;
  if (bulk_ban2 != null) {
    failed_users = bulk_ban2.failed_users;
  }
  if (failed_users == null) {
    failed_users = [];
  }
  bulkBan.failedUsers = failed_users;
  bulkBan.bulkBan = bulkBan;
  DispatcherDefault.dispatch(bulkBan).catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(closure_3[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["GUILD_DELETE"], (guild) => {
  let obj = { type: "GUILD_DELETE", guild };
  DispatcherDefault.dispatch(obj).catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(closure_3[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
  if (guild.geo_restricted) {
    obj = { type: "GUILD_GEO_RESTRICTED", guildId: null, icon: null, name: null };
    ({ id: obj5.guildId, icon: obj5.icon, name: obj5.name } = guild);
    closure_130_0 = obj;
    let tmpResult = DispatcherDefault;
    tmpResult.dispatch(obj).catch((error) => {
      logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
      const socket = obj(closure_3[13]).socket;
      obj = { error, action: obj.type };
      result = socket.resetSocketOnDispatchError(obj);
    });
    const dispatchResult1 = tmpResult.dispatch(obj);
  } else if (guild.unavailable) {
    obj = { type: "GUILD_UNAVAILABLE", guildId: guild.id };
    closure_129_0 = obj;
    tmpResult = DispatcherDefault;
    tmpResult.dispatch(obj).catch((error) => {
      logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
      const socket = obj(closure_3[13]).socket;
      obj = { error, action: obj.type };
      result = socket.resetSocketOnDispatchError(obj);
    });
    const dispatchResult2 = tmpResult.dispatch(obj);
  }
  const dispatchResult = DispatcherDefault.dispatch(obj);
});
defineSimpleDispatch(["GUILD_MEMBERS_CHUNK"], (arg0) => {
  closure_0 = arg0;
  const Emitter = initializeDefault.Emitter;
  Emitter.batched(() => {
    ActionBatcher.add({ guildId: closure_0.guild_id, members: closure_0.members, notFound: closure_0.not_found });
    if (null != closure_0.presences) {
      ({ presences, guild_id: closure_0 } = closure_0);
      const mapped = presences.map((activities) => {
        activities = activities.activities;
        if (activities == null) {
          activities = [];
        }
        let hidden_activities = activities.hidden_activities;
        if (hidden_activities == null) {
          hidden_activities = [];
        }
        const tmp2Result = closure_1(items[38])(activities, hidden_activities);
        obj = { user: activities.user, status: activities.status, clientStatus: activities.client_status, activities: null, hiddenActivities: tmp2Result.hiddenActivities, guildId: id, processedAtTimestamp: activities.processed_at_timestamp };
        const activities1 = tmp2Result.activities;
        obj.activities = activities1.map((timestamps) => {
          timestamps = timestamps.timestamps;
          let end;
          if (timestamps != null) {
            end = timestamps.end;
          }
          const created_at = timestamps.created_at;
          let tmp2 = timestamps;
          if (null != end) {
            tmp2 = timestamps;
            if (null != created_at) {
              timestamps = {};
              const merged = Object.assign(timestamps);
              timestamps = {};
              const merged1 = Object.assign(timestamps.timestamps);
              let tmp8 = end > created_at;
              if (tmp8) {
                tmp8 = timestamps.type !== constants.LISTENING;
              }
              timestamps.isCountDown = tmp8;
              timestamps.timestamps = timestamps;
              tmp2 = timestamps;
            }
          }
          return tmp2;
        });
        return obj;
      });
      const item = mapped.forEach(dispatchPresence);
    }
    ActionBatcher.flush("GUILD_MEMBERS_CHUNK");
    const obj = { guildId: closure_0.guild_id, members: closure_0.members, notFound: closure_0.not_found };
  });
});
defineSimpleDispatch(["THREAD_MEMBER_LIST_UPDATE"], (arg0) => {
  closure_0 = arg0;
  const Emitter = initializeDefault.Emitter;
  Emitter.batched(() => {
    obj = { type: "THREAD_MEMBER_LIST_UPDATE", guildId: closure_0.guild_id, threadId: closure_0.thread_id, members: closure_0.members };
    DispatcherDefault.dispatch({ type: "THREAD_MEMBER_LIST_UPDATE", guildId: closure_0.guild_id, threadId: closure_0.thread_id, members: closure_0.members }).catch((error) => {
      logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
      const socket = obj(closure_3[13]).socket;
      obj = { error, action: obj.type };
      result = socket.resetSocketOnDispatchError(obj);
    });
    if (null != closure_0.presences) {
      ({ presences, guild_id: obj } = closure_0);
      const mapped = presences.map((activities) => {
        activities = activities.activities;
        if (activities == null) {
          activities = [];
        }
        let hidden_activities = activities.hidden_activities;
        if (hidden_activities == null) {
          hidden_activities = [];
        }
        const tmp2Result = closure_1(items[38])(activities, hidden_activities);
        obj = { user: activities.user, status: activities.status, clientStatus: activities.client_status, activities: null, hiddenActivities: tmp2Result.hiddenActivities, guildId: id, processedAtTimestamp: activities.processed_at_timestamp };
        const activities1 = tmp2Result.activities;
        obj.activities = activities1.map((timestamps) => {
          timestamps = timestamps.timestamps;
          let end;
          if (timestamps != null) {
            end = timestamps.end;
          }
          const created_at = timestamps.created_at;
          let tmp2 = timestamps;
          if (null != end) {
            tmp2 = timestamps;
            if (null != created_at) {
              timestamps = {};
              const merged = Object.assign(timestamps);
              timestamps = {};
              const merged1 = Object.assign(timestamps.timestamps);
              let tmp8 = end > created_at;
              if (tmp8) {
                tmp8 = timestamps.type !== constants.LISTENING;
              }
              timestamps.isCountDown = tmp8;
              timestamps.timestamps = timestamps;
              tmp2 = timestamps;
            }
          }
          return tmp2;
        });
        return obj;
      });
      const item = mapped.forEach(dispatchPresence);
    }
    const dispatchResult = DispatcherDefault.dispatch({ type: "THREAD_MEMBER_LIST_UPDATE", guildId: closure_0.guild_id, threadId: closure_0.thread_id, members: closure_0.members });
    ActionBatcher.flush();
    const tmp2Result = ActionBatcher;
  });
});
defineSimpleDispatch(["GUILD_BAN_ADD", "GUILD_BAN_REMOVE", "GUILD_MEMBER_ADD", "GUILD_MEMBER_UPDATE", "GUILD_MEMBER_REMOVE"], (guildId, type) => {
  obj = { type, guildId: guildId.guild_id, user: guildId.user, avatar: guildId.avatar, avatarDecoration: guildId.avatar_decoration_data, roles: guildId.roles, nick: guildId.nick, premiumSince: guildId.premium_since, isPending: guildId.pending, joinedAt: guildId.joined_at, communicationDisabledUntil: guildId.communication_disabled_until, unusualDMActivityUntil: guildId.unusual_dm_activity_until, flags: guildId.flags, collectibles: obj(1882).parseServerUserCollectibles(guildId.collectibles), displayNameStyles: null };
  const obj2 = obj(1882);
  obj.displayNameStyles = obj(1388).parseServerDisplayNameStyles(guildId.display_name_styles);
  const obj3 = obj(1388);
  DispatcherDefault.dispatch(obj).catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(closure_3[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
const result14 = definePreloadableDispatch(["GUILD_ROLE_CREATE", "GUILD_ROLE_UPDATE"], (guild_id) => {
  const items = [guild_id.guild_id];
  return ChannelLoader.loadGuildIds(items);
}, (guildId, type) => {
  const obj = { type, guildId: guildId.guild_id, role: guildId.role };
  DispatcherDefault.dispatch(obj).catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(closure_3[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
const result15 = definePreloadableDispatch(["GUILD_ROLE_DELETE"], (guild_id) => {
  const items = [guild_id.guild_id];
  return ChannelLoader.loadGuildIds(items);
}, (guildId) => {
  const obj = { type: "GUILD_ROLE_DELETE", guildId: guildId.guild_id, roleId: guildId.role_id, version: guildId.version };
  DispatcherDefault.dispatch(obj).catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(closure_3[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["GUILD_EMOJIS_UPDATE"], (guildId) => {
  const obj = { type: "GUILD_EMOJIS_UPDATE", guildId: guildId.guild_id, emojis: guildId.emojis };
  DispatcherDefault.dispatch(obj).catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(closure_3[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["GUILD_STICKERS_UPDATE"], (guildId) => {
  const obj = { type: "GUILD_STICKERS_UPDATE", guildId: guildId.guild_id, stickers: guildId.stickers };
  DispatcherDefault.dispatch(obj).catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(closure_3[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["GUILD_INTEGRATIONS_UPDATE"], (guildId) => {
  const obj = { type: "GUILD_INTEGRATIONS_UPDATE", guildId: guildId.guild_id };
  DispatcherDefault.dispatch(obj).catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(closure_3[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["INTEGRATION_CREATE"], (application) => {
  const obj = { type: "INTEGRATION_CREATE", application: application.application, guildId: application.guild_id };
  DispatcherDefault.dispatch(obj).catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(closure_3[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["INTEGRATION_UPDATE"], (application) => {
  const obj = { type: "INTEGRATION_UPDATE", application: application.application, guildId: application.guild_id };
  DispatcherDefault.dispatch(obj).catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(closure_3[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["INTEGRATION_DELETE"], (applicationId) => {
  const obj = { type: "INTEGRATION_DELETE", applicationId: applicationId.application_id, guildId: applicationId.guild_id };
  DispatcherDefault.dispatch(obj).catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(closure_3[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["USER_UPDATE"], (user) => {
  const obj = { type: "CURRENT_USER_UPDATE", user };
  DispatcherDefault.dispatch(obj).catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(closure_3[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["USER_SETTINGS_PROTO_UPDATE"], (settings) => {
  settings = settings(1223);
  const b64ToProtoWithTypeResult = settings.b64ToProtoWithType(settings.settings.type, settings.settings.proto);
  if (null != b64ToProtoWithTypeResult) {
    if (typeof b64ToProtoWithTypeResult === "string") {
      const _Error = Error;
      throw Error("UserSettingsProto must not be a string");
    } else {
      settings = { type: "USER_SETTINGS_PROTO_UPDATE", settings: null, partial: null };
      settings = { proto: b64ToProtoWithTypeResult, type: null };
      settings.type = settings.settings.type;
      settings.settings = settings;
      settings.partial = settings.partial;
      DispatcherDefault.dispatch(settings).catch((error) => {
        logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
        const socket = obj(closure_3[13]).socket;
        obj = { error, action: obj.type };
        result = socket.resetSocketOnDispatchError(obj);
      });
      const dispatchResult = DispatcherDefault.dispatch(settings);
    }
  }
});
defineSimpleDispatch(["USER_GUILD_SETTINGS_UPDATE"], (arg0) => {
  const obj = { type: "USER_GUILD_SETTINGS_FULL_UPDATE", userGuildSettings: null };
  const items = [arg0];
  obj.userGuildSettings = items;
  DispatcherDefault.dispatch(obj).catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(closure_3[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["USER_CONNECTIONS_UPDATE"], () => {
  const obj = { type: "USER_CONNECTIONS_UPDATE" };
  DispatcherDefault.dispatch(obj).catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(closure_3[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["USER_REQUIRED_ACTION_UPDATE"], (requiredAction) => {
  const obj = { type: "USER_REQUIRED_ACTION_UPDATE", requiredAction: requiredAction.required_action };
  DispatcherDefault.dispatch(obj).catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(closure_3[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["USER_NOTE_UPDATE"], (arg0) => {
  const obj = { type: "USER_NOTE_UPDATE" };
  const merged = Object.assign(arg0);
  DispatcherDefault.dispatch(obj).catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(closure_3[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["RELATIONSHIP_ADD"], (id) => {
  let relationship = { id: id.id, type: id.type, user: id.user, since: id.since, nickname: id.nickname, isSpamRequest: id.is_spam_request || false, isStrangerRequest: id.is_stranger_request || false, userIgnored: null, originApplicationId: id.origin_application_id, note: id.note };
  relationship = { type: "RELATIONSHIP_ADD", relationship, shouldNotify: true === id.should_notify, userIgnored: id.user_ignored || false };
  const tmp = id.user_ignored || false;
  DispatcherDefault.dispatch(relationship).catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(closure_3[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["RELATIONSHIP_REMOVE"], (relationship) => {
  const obj = { type: "RELATIONSHIP_REMOVE", relationship };
  DispatcherDefault.dispatch(obj).catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(closure_3[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["RELATIONSHIP_UPDATE"], (id) => {
  let relationship = { id: id.id, type: id.type, user: id.user, nickname: id.nickname, since: id.since, isSpamRequest: id.is_spam_request || false, isStrangerRequest: id.is_stranger_request || false, userIgnored: null, originApplicationId: id.origin_application_id, note: id.note };
  relationship = { type: "RELATIONSHIP_UPDATE", relationship, userIgnored: id.user_ignored || false };
  const tmp = id.user_ignored || false;
  DispatcherDefault.dispatch(relationship).catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(closure_3[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["GAME_RELATIONSHIP_ADD"], (id) => {
  const obj = { type: "GAME_RELATIONSHIP_ADD", gameRelationship: { id: id.id, applicationId: id.application_id, type: id.type, since: id.since, dmAccessType: id.dm_access_type, user: id.user } };
  DispatcherDefault.dispatch(obj).catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(closure_3[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["GAME_RELATIONSHIP_REMOVE"], (id) => {
  const obj = { type: "GAME_RELATIONSHIP_REMOVE", userId: id.id, applicationId: id.application_id };
  DispatcherDefault.dispatch(obj).catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(closure_3[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["PRESENCE_UPDATE"], (hidden_activities) => {
  ({ guild_id, activities } = hidden_activities);
  if (activities == null) {
    activities = [];
  }
  hidden_activities = hidden_activities.hidden_activities;
  if (hidden_activities == null) {
    hidden_activities = [];
  }
  const tmpResult = splitAgeRestrictedActivitiesDefault(activities, hidden_activities);
  const obj = { user: hidden_activities.user, status: hidden_activities.status, clientStatus: hidden_activities.client_status, activities: null, hiddenActivities: tmpResult.hiddenActivities, guildId: guild_id, processedAtTimestamp: hidden_activities.processed_at_timestamp };
  activities = tmpResult.activities;
  obj.activities = activities.map((timestamps) => {
    timestamps = timestamps.timestamps;
    let end;
    if (timestamps != null) {
      end = timestamps.end;
    }
    const created_at = timestamps.created_at;
    let tmp2 = timestamps;
    if (null != end) {
      tmp2 = timestamps;
      if (null != created_at) {
        timestamps = {};
        const merged = Object.assign(timestamps);
        timestamps = {};
        const merged1 = Object.assign(timestamps.timestamps);
        let tmp8 = end > created_at;
        if (tmp8) {
          tmp8 = timestamps.type !== constants.LISTENING;
        }
        timestamps.isCountDown = tmp8;
        timestamps.timestamps = timestamps;
        tmp2 = timestamps;
      }
    }
    return tmp2;
  });
  ActionBatcher.add(obj);
});
defineSimpleDispatch(["PRESENCES_REPLACE"], (arr) => {
  const obj = {
    type: "PRESENCES_REPLACE",
    presences: arr.map((activities) => {
      activities = activities.activities;
      if (activities == null) {
        activities = [];
      }
      let hidden_activities = activities.hidden_activities;
      if (hidden_activities == null) {
        hidden_activities = [];
      }
      const tmp2Result = closure_1(items[38])(activities, hidden_activities);
      obj = { user: activities.user, status: activities.status, clientStatus: activities.client_status, activities: null, hiddenActivities: tmp2Result.hiddenActivities, guildId: id, processedAtTimestamp: activities.processed_at_timestamp };
      const activities1 = tmp2Result.activities;
      obj.activities = activities1.map((timestamps) => {
        timestamps = timestamps.timestamps;
        let end;
        if (timestamps != null) {
          end = timestamps.end;
        }
        const created_at = timestamps.created_at;
        let tmp2 = timestamps;
        if (null != end) {
          tmp2 = timestamps;
          if (null != created_at) {
            timestamps = {};
            const merged = Object.assign(timestamps);
            timestamps = {};
            const merged1 = Object.assign(timestamps.timestamps);
            let tmp8 = end > created_at;
            if (tmp8) {
              tmp8 = timestamps.type !== constants.LISTENING;
            }
            timestamps.isCountDown = tmp8;
            timestamps.timestamps = timestamps;
            tmp2 = timestamps;
          }
        }
        return tmp2;
      });
      return obj;
    })
  };
  closure_129_0 = obj;
  DispatcherDefault.dispatch(obj).catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(closure_3[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["SESSIONS_REPLACE"], (arr) => {
  const obj = {
    type: "SESSIONS_REPLACE",
    sessions: arr.map((sessionId) => {
      obj = { sessionId: sessionId.session_id, lastModified: sessionId.last_modified, status: sessionId.status, activities: null, hiddenActivities: null, active: null, clientInfo: null };
      let activities = sessionId.activities;
      if (activities == null) {
        activities = [];
      }
      obj.activities = activities.map((timestamps) => {
        timestamps = timestamps.timestamps;
        let end;
        if (timestamps != null) {
          end = timestamps.end;
        }
        const created_at = timestamps.created_at;
        let tmp2 = timestamps;
        if (null != end) {
          tmp2 = timestamps;
          if (null != created_at) {
            timestamps = {};
            const merged = Object.assign(timestamps);
            timestamps = {};
            const merged1 = Object.assign(timestamps.timestamps);
            let tmp8 = end > created_at;
            if (tmp8) {
              tmp8 = timestamps.type !== constants.LISTENING;
            }
            timestamps.isCountDown = tmp8;
            timestamps.timestamps = timestamps;
            tmp2 = timestamps;
          }
        }
        return tmp2;
      });
      let hidden_activities = sessionId.hidden_activities;
      if (hidden_activities == null) {
        hidden_activities = [];
      }
      obj.hiddenActivities = hidden_activities;
      obj.active = sessionId.active;
      obj.clientInfo = sessionId.client_info;
      return obj;
    })
  };
  DispatcherDefault.dispatch(obj).catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(closure_3[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["VOICE_STATE_UPDATE"], (arg0, arg1, arg2, receivedAt) => {
  const items = [arg0];
  dispatchVoiceStateUpdates(items, receivedAt);
});
defineSimpleDispatch(["VOICE_STATE_UPDATE_BATCH"], (voice_states, arg1, arg2, receivedAt) => {
  dispatchVoiceStateUpdates(voice_states.voice_states, receivedAt);
});
defineSimpleDispatch(["VOICE_SERVER_UPDATE"], (guildId) => {
  const obj = { type: "VOICE_SERVER_UPDATE", guildId: guildId.guild_id, channelId: guildId.channel_id, endpoint: guildId.endpoint, token: guildId.token };
  DispatcherDefault.dispatch(obj).catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(closure_3[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["CALL_CREATE"], (channelId) => {
  let obj = { type: "CALL_CREATE", channelId: channelId.channel_id, messageId: channelId.message_id, region: channelId.region, ongoingRings: channelId.ongoing_rings };
  DispatcherDefault.dispatch(obj).catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(closure_3[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
  const voice_states = channelId.voice_states;
  if (null != voice_states) {
    obj = {
      type: "VOICE_STATE_UPDATES",
      voiceStates: voice_states.map((userId) => {
          obj = { userId: userId.user_id, guildId: null, sessionId: userId.session_id, channelId: userId.channel_id, mute: userId.mute, deaf: userId.deaf, selfMute: userId.self_mute, selfDeaf: userId.self_deaf, selfVideo: userId.self_video || false, suppress: userId.suppress, selfStream: userId.self_stream || false, requestToSpeakTimestamp: null, discoverable: null, connectedAt: null };
          let prop = userId.request_to_speak_timestamp;
          if (prop == null) {
            prop = null;
          }
          obj.requestToSpeakTimestamp = prop;
          let flag = userId.discoverable;
          if (flag == null) {
            flag = true;
          }
          obj.discoverable = flag;
          obj.connectedAt = userId.connected_at;
          return obj;
        })
    };
    closure_129_0 = obj;
    const tmpResult = DispatcherDefault;
    DispatcherDefault.dispatch(obj).catch((error) => {
      logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
      const socket = obj(closure_3[13]).socket;
      obj = { error, action: obj.type };
      result = socket.resetSocketOnDispatchError(obj);
    });
    const dispatchResult1 = DispatcherDefault.dispatch(obj);
  }
  const dispatchResult = DispatcherDefault.dispatch(obj);
});
defineSimpleDispatch(["CALL_UPDATE"], (channelId) => {
  const obj = { type: "CALL_UPDATE", channelId: channelId.channel_id, messageId: channelId.message_id, region: channelId.region, ongoingRings: channelId.ongoing_rings };
  DispatcherDefault.dispatch(obj).catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(closure_3[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["CALL_DELETE"], (channelId) => {
  const obj = { type: "CALL_DELETE", channelId: channelId.channel_id, unavailable: channelId.unavailable };
  DispatcherDefault.dispatch(obj).catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(closure_3[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["OAUTH2_TOKEN_CREATE"], (id) => {
  const obj = { type: "OAUTH2_TOKEN_CREATE", id: id.id, scopes: id.scopes, application: id.application };
  DispatcherDefault.dispatch(obj).catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(closure_3[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["OAUTH2_TOKEN_DELETE"], (id) => {
  const obj = { type: "OAUTH2_TOKEN_DELETE", id: id.id, applicationId: id.application_id };
  DispatcherDefault.dispatch(obj).catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(closure_3[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["OAUTH2_TOKEN_REVOKE"], (accessToken) => {
  const obj = { type: "OAUTH2_TOKEN_REVOKE", accessToken: accessToken.access_token };
  DispatcherDefault.dispatch(obj).catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(closure_3[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["RECENT_MENTION_DELETE"], (id) => {
  const obj = { type: "RECENT_MENTION_DELETE", id: id.message_id };
  DispatcherDefault.dispatch(obj).catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(closure_3[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["SAVED_MESSAGE_CREATE"], (body) => {
  obj = { type: "SAVED_MESSAGE_CREATE", savedMessage: obj(7860).savedMessageCreateObjectToClient(body) };
  const obj2 = obj(7860);
  DispatcherDefault.dispatch(obj).catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(closure_3[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["SAVED_MESSAGE_DELETE"], (channelId) => {
  obj = { type: "SAVED_MESSAGE_DELETE", savedMessageData: obj(7860).savedMessageDeleteObjectToClient(channelId) };
  const obj2 = obj(7860);
  DispatcherDefault.dispatch(obj).catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(closure_3[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["FRIEND_SUGGESTION_CREATE"], (suggestion) => {
  const obj = { type: "FRIEND_SUGGESTION_CREATE", suggestion };
  DispatcherDefault.dispatch(obj).catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(closure_3[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["FRIEND_SUGGESTION_DELETE"], (suggestedUserId) => {
  const obj = { type: "FRIEND_SUGGESTION_DELETE", suggestedUserId: suggestedUserId.suggested_user_id };
  DispatcherDefault.dispatch(obj).catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(closure_3[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["WEBHOOKS_UPDATE"], (guildId) => {
  const obj = { type: "WEBHOOKS_UPDATE", guildId: guildId.guild_id, channelId: guildId.channel_id };
  DispatcherDefault.dispatch(obj).catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(closure_3[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["MESSAGE_REACTION_ADD", "MESSAGE_REACTION_REMOVE"], (channelId, type) => {
  const obj = { type, channelId: channelId.channel_id, messageId: channelId.message_id, userId: channelId.user_id, emoji: channelId.emoji, colors: channelId.burst_colors, reactionType: channelId.type, messageAuthorId: channelId.message_author_id };
  DispatcherDefault.dispatch(obj).catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(closure_3[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["MESSAGE_POLL_VOTE_ADD", "MESSAGE_POLL_VOTE_REMOVE"], (channelId, arg1) => {
  let str = "MESSAGE_REACTION_REMOVE";
  if ("MESSAGE_POLL_VOTE_ADD" === arg1) {
    str = "MESSAGE_REACTION_ADD";
  }
  obj = { type: str, channelId: channelId.channel_id, messageId: channelId.message_id, userId: channelId.user_id, emoji: { id: channelId.answer_id, name: "" }, reactionType: obj(7763).ReactionTypes.VOTE };
  DispatcherDefault.dispatch(obj).catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(closure_3[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["MESSAGE_POLL_VOTE_ADD_MANY"], (channelId) => {
  let obj = { type: "MESSAGE_REACTION_ADD_MANY", channelId: channelId.channel_id, messageId: channelId.message_id, reactions: null };
  const votes = channelId.votes;
  obj.reactions = votes.map((answer_id) => {
    obj = {};
    const merged = Object.assign(answer_id);
    obj.emoji = { id: answer_id.answer_id, name: "" };
    obj.reactionType = obj(dependencyMap[28]).ReactionTypes.VOTE;
    return obj;
  });
  DispatcherDefault.dispatch(obj).catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(closure_3[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["MESSAGE_REACTION_REMOVE_ALL"], (channelId) => {
  const obj = { type: "MESSAGE_REACTION_REMOVE_ALL", channelId: channelId.channel_id, messageId: channelId.message_id };
  DispatcherDefault.dispatch(obj).catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(closure_3[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["MESSAGE_REACTION_REMOVE_EMOJI"], (channelId) => {
  const obj = { type: "MESSAGE_REACTION_REMOVE_EMOJI", channelId: channelId.channel_id, messageId: channelId.message_id, emoji: channelId.emoji };
  DispatcherDefault.dispatch(obj).catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(closure_3[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["MESSAGE_REACTION_ADD_MANY"], (channelId) => {
  const obj = { type: "MESSAGE_REACTION_ADD_MANY", channelId: channelId.channel_id, messageId: channelId.message_id, reactions: channelId.reactions };
  DispatcherDefault.dispatch(obj).catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(closure_3[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["PAYMENT_UPDATE"], (payment) => {
  const obj = { type: "PAYMENT_UPDATE", payment };
  DispatcherDefault.dispatch(obj).catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(closure_3[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["ENTITLEMENT_CREATE", "ENTITLEMENT_UPDATE", "ENTITLEMENT_DELETE"], (entitlement, type) => {
  const obj = { type, entitlement };
  DispatcherDefault.dispatch(obj).catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(closure_3[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["USER_PAYMENT_SOURCES_UPDATE"], () => {
  if (obj.isUserSettingsOpen()) {
    const paymentSources = actions_BillingActionCreators.fetchPaymentSources();
    const tmpResult = actions_BillingActionCreators;
    const subscriptionPlansBySKUs = SubscriptionPlanActionCreatorsAll.fetchSubscriptionPlansBySKUs(SubscriptionPlanStore.getFetchedSKUIDs());
  }
  obj = isUserSettingsOpen;
});
defineSimpleDispatch(["USER_SUBSCRIPTIONS_UPDATE"], () => {
  const currentUser = UserActionCreatorsAll.fetchCurrentUser();
  if (obj2.isUserSettingsOpen()) {
    const subscriptions = actions_BillingActionCreators.fetchSubscriptions();
    const tmp3Result = actions_BillingActionCreators;
  }
  obj2 = isUserSettingsOpen;
});
defineSimpleDispatch(["WISHLIST_ITEM_PURCHASED"], (recipientId) => {
  const obj = { type: "WISHLIST_ITEM_PURCHASED", recipientId: recipientId.recipient_id, skuId: recipientId.sku_id };
  DispatcherDefault.dispatch(obj).catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(closure_3[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["USER_BADGE_STATE_UPDATE"], (badge_id) => {
  const badge = BadgeDirectoryActionCreators.fetchBadge(badge_id.badge_id);
});
defineSimpleDispatch(["USER_PREMIUM_GUILD_SUBSCRIPTION_SLOT_CREATE"], (subscription_id) => {
  const obj = { type: "GUILD_BOOST_SLOT_CREATE", guildBoostSlot: GuildBoostSlotRecord.createFromServer(subscription_id, SubscriptionStore.getSubscriptionById(subscription_id.subscription_id)) };
  DispatcherDefault.dispatch(obj).catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(closure_3[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["USER_PREMIUM_GUILD_SUBSCRIPTION_SLOT_UPDATE"], (subscription_id) => {
  const obj = { type: "GUILD_BOOST_SLOT_UPDATE", guildBoostSlot: GuildBoostSlotRecord.createFromServer(subscription_id, SubscriptionStore.getSubscriptionById(subscription_id.subscription_id)) };
  DispatcherDefault.dispatch(obj).catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(closure_3[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["BILLING_POPUP_BRIDGE_CALLBACK"], (paymentSourceType) => {
  const obj = { type: "BILLING_POPUP_BRIDGE_CALLBACK", paymentSourceType: paymentSourceType.payment_source_type, state: paymentSourceType.state, path: paymentSourceType.path, query: paymentSourceType.query };
  DispatcherDefault.dispatch(obj).catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(closure_3[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["USER_PAYMENT_BROWSER_CHECKOUT_DONE"], (loadId) => {
  const obj = { type: "USER_PAYMENT_BROWSER_CHECKOUT_DONE", loadId: loadId.load_id, skuId: loadId.sku_id, skuSubscriptionPlanId: loadId.sku_subscription_plan_id };
  DispatcherDefault.dispatch(obj).catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(closure_3[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["USER_PAYMENT_CLIENT_ADD"], (arg0) => {
  _require = arg0;
  const purchaseTokenHash = require("PurchaseTokenUtils").getPurchaseTokenHash();
  purchaseTokenHash.then((result) => {
    purchase_token_hash = purchase_token_hash.purchase_token_hash;
    if (purchase_token_hash === result) {
      const obj = { type: "USER_PAYMENT_CLIENT_ADD", purchaseTokenHash: purchase_token_hash, expiresAt: tmp.expires_at };
      DispatcherDefault.dispatch(obj).catch((error) => {
        logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
        const socket = obj(closure_3[13]).socket;
        obj = { error, action: obj.type };
        result = socket.resetSocketOnDispatchError(obj);
      });
      const dispatchResult = DispatcherDefault.dispatch(obj);
    }
  });
});
defineSimpleDispatch(["GUILD_MEMBER_LIST_UPDATE"], (arg0) => {
  closure_0 = arg0;
  const Emitter = initializeDefault.Emitter;
  Emitter.batched(() => {
    let timestamps = function handleItem(member) {
      if (null != member.member) {
        member = member.member;
        dispatchGuildMemberAdd(obj.guild_id, member.user, member);
        if (null != member.presence) {
          const presence = member.presence;
          let activities = presence.activities;
          if (activities == null) {
            activities = [];
          }
          let hidden_activities = presence.hidden_activities;
          if (hidden_activities == null) {
            hidden_activities = [];
          }
          const tmp = splitAgeRestrictedActivitiesDefault(activities, hidden_activities);
          obj = { user: null, status: null, clientStatus: null, activities: null, hiddenActivities: null, guildId: null, processedAtTimestamp: null };
          ({ user: obj.user, status: obj.status, client_status: obj.clientStatus } = presence);
          const activities1 = tmp.activities;
          obj.activities = activities1.map((timestamps) => {
            timestamps = timestamps.timestamps;
            let end;
            if (timestamps != null) {
              end = timestamps.end;
            }
            const created_at = timestamps.created_at;
            let tmp2 = timestamps;
            if (null != end) {
              tmp2 = timestamps;
              if (null != created_at) {
                timestamps = {};
                const merged = Object.assign(timestamps);
                timestamps = {};
                const merged1 = Object.assign(timestamps.timestamps);
                let tmp8 = end > created_at;
                if (tmp8) {
                  tmp8 = timestamps.type !== constants.LISTENING;
                }
                timestamps.isCountDown = tmp8;
                timestamps.timestamps = timestamps;
                tmp2 = timestamps;
              }
            }
            return tmp2;
          });
          obj.hiddenActivities = tmp.hiddenActivities;
          obj.guildId = tmp5.guild_id;
          obj.processedAtTimestamp = presence.processed_at_timestamp;
          set.add(obj);
        }
        tmp5 = obj;
      }
    };
    const ops = timestamps.ops;
    let item = ops.forEach((item) => {
      ({ op, items } = item);
      if ("SYNC" === op) {
        item = items.forEach(obj);
      } else if ("UPDATE" === op) {
        obj(tmp);
      }
    });
    timestamps = ActionBatcher;
    timestamps.flush();
    timestamps = { type: "GUILD_MEMBER_LIST_UPDATE", guildId: timestamps.guild_id, id: timestamps.id, ops: timestamps.ops, groups: timestamps.groups, memberCount: timestamps.member_count, onlineCount: timestamps.online_count };
    DispatcherDefault.dispatch(timestamps).catch((error) => {
      logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
      const socket = obj(closure_3[13]).socket;
      obj = { error, action: obj.type };
      result = socket.resetSocketOnDispatchError(obj);
    });
  });
});
defineSimpleDispatch(["GIFT_CODE_UPDATE"], (uses) => {
  const obj = { type: "GIFT_CODE_UPDATE", uses: uses.uses, code: uses.code };
  DispatcherDefault.dispatch(obj).catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(closure_3[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["GIFT_CODE_CREATE"], (giftCode) => {
  const obj = { type: "GIFT_CODE_CREATE", giftCode };
  DispatcherDefault.dispatch(obj).catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(closure_3[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["LIBRARY_APPLICATION_UPDATE"], (libraryApplication) => {
  const obj = { type: "LIBRARY_APPLICATION_UPDATE", libraryApplication };
  DispatcherDefault.dispatch(obj).catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(closure_3[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["STREAM_CREATE"], (streamKey) => {
  const obj = { type: "STREAM_CREATE", streamKey: streamKey.stream_key, region: streamKey.region, viewerIds: streamKey.viewer_ids, rtcServerId: streamKey.rtc_server_id, rtcChannelId: streamKey.rtc_channel_id, paused: streamKey.paused };
  DispatcherDefault.dispatch(obj).catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(closure_3[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["STREAM_SERVER_UPDATE"], (streamKey) => {
  const obj = { type: "STREAM_SERVER_UPDATE", streamKey: streamKey.stream_key, endpoint: streamKey.endpoint, token: streamKey.token };
  DispatcherDefault.dispatch(obj).catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(closure_3[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["STREAM_UPDATE"], (streamKey) => {
  const obj = { type: "STREAM_UPDATE", streamKey: streamKey.stream_key, region: streamKey.region, viewerIds: streamKey.viewer_ids, paused: streamKey.paused };
  DispatcherDefault.dispatch(obj).catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(closure_3[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["STREAM_DELETE"], (streamKey) => {
  const obj = { type: "STREAM_DELETE", streamKey: streamKey.stream_key, unavailable: streamKey.unavailable, reason: streamKey.reason };
  DispatcherDefault.dispatch(obj).catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(closure_3[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["GENERIC_PUSH_NOTIFICATION_SENT"], (title) => {
  const obj = { type: "GENERIC_PUSH_NOTIFICATION_SENT", title: title.title, body: title.body, trackingType: title.tracking_type, icon: title.icon, route: title.route, tag: title.tag };
  DispatcherDefault.dispatch(obj).catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(closure_3[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["REACTION_NOTIFICATION_SENT"], (route) => {
  const obj = { type: "REACTION_NOTIFICATION_SENT", route: route.route, message: route.message, emoji: route.emoji, reactorUserId: route.reactor_user_id, title: route.title, body: route.body, trackingType: route.tracking_type, icon: route.icon };
  DispatcherDefault.dispatch(obj).catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(closure_3[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["NOTIFICATION_CENTER_ITEM_CREATE"], (item) => {
  const obj = { type: "NOTIFICATION_CENTER_ITEM_CREATE", item };
  DispatcherDefault.dispatch(obj).catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(closure_3[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["NOTIFICATION_CENTER_ITEM_DELETE"], (id) => {
  const obj = { type: "NOTIFICATION_CENTER_ITEM_DELETE", id: id.id };
  DispatcherDefault.dispatch(obj).catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(closure_3[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["NOTIFICATION_CENTER_ITEMS_ACK"], (id) => {
  const obj = { type: "NOTIFICATION_CENTER_ITEMS_ACK", ids: null, optimistic: false };
  const items = [id.id];
  obj.ids = items;
  DispatcherDefault.dispatch(obj).catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(closure_3[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["NOTIFICATION_CENTER_ITEM_COMPLETED"], (item_enum) => {
  const obj = { type: "NOTIFICATION_CENTER_ITEM_COMPLETED", item_enum: item_enum.item_enum };
  DispatcherDefault.dispatch(obj).catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(closure_3[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["QUESTS_USER_STATUS_UPDATE"], (user_status) => {
  const obj = { type: "QUESTS_USER_STATUS_UPDATE", user_status: user_status.user_status };
  DispatcherDefault.dispatch(obj).catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(closure_3[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["QUESTS_USER_COMPLETION_UPDATE"], (quest_enrollment_blocked_until) => {
  const obj = { type: "QUESTS_USER_COMPLETION_UPDATE", quest_enrollment_blocked_until: quest_enrollment_blocked_until.quest_enrollment_blocked_until };
  DispatcherDefault.dispatch(obj).catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(closure_3[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["QUEST_PREVIEW_UPDATE"], (quest_id) => {
  const obj = { type: "QUEST_PREVIEW_UPDATE", quest_id: quest_id.quest_id };
  DispatcherDefault.dispatch(obj).catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(closure_3[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["APPLICATION_COMMAND_PERMISSIONS_UPDATE"], (guildId, type) => {
  const obj = { type, guildId: guildId.guild_id };
  DispatcherDefault.dispatch(obj).catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(closure_3[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["GUILD_APPLICATION_COMMAND_INDEX_UPDATE"], (guildId) => {
  const obj = { type: "GUILD_APPLICATION_COMMAND_INDEX_UPDATE", guildId: guildId.guild_id, version: guildId.version };
  DispatcherDefault.dispatch(obj).catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(closure_3[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["GUILD_JOIN_REQUEST_CREATE"], (request) => {
  const obj = { type: "GUILD_JOIN_REQUEST_CREATE", request: request.request, status: request.status, guildId: request.guild_id };
  DispatcherDefault.dispatch(obj).catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(closure_3[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["GUILD_JOIN_REQUEST_UPDATE"], (request) => {
  const obj = { type: "GUILD_JOIN_REQUEST_UPDATE", request: request.request, status: request.status, guildId: request.guild_id };
  DispatcherDefault.dispatch(obj).catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(closure_3[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["GUILD_JOIN_REQUEST_DELETE"], (id) => {
  const obj = { type: "GUILD_JOIN_REQUEST_DELETE", id: id.id, userId: id.user_id, guildId: id.guild_id };
  DispatcherDefault.dispatch(obj).catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(closure_3[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["INTERACTION_CREATE"], (id) => {
  const obj = { type: "INTERACTION_CREATE", interactionId: id.id, nonce: id.nonce };
  DispatcherDefault.dispatch(obj).catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(closure_3[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["INTERACTION_SUCCESS"], (id) => {
  const obj = { type: "INTERACTION_SUCCESS", interactionId: id.id, nonce: id.nonce };
  DispatcherDefault.dispatch(obj).catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(closure_3[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["INTERACTION_FAILURE"], (id) => {
  const obj = { type: "INTERACTION_FAILURE", interactionId: id.id, nonce: id.nonce, reasonCode: id.reason_code };
  DispatcherDefault.dispatch(obj).catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(closure_3[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["APPLICATION_COMMAND_AUTOCOMPLETE_RESPONSE"], (choices) => {
  const obj = { type: "APPLICATION_COMMAND_AUTOCOMPLETE_RESPONSE", choices: choices.choices, nonce: choices.nonce };
  DispatcherDefault.dispatch(obj).catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(closure_3[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["INTERACTION_MODAL_CREATE"], (id) => {
  obj = { type: "INTERACTION_MODAL_CREATE", id: id.id, channelId: id.channel_id, customId: id.custom_id, application: id.application, title: id.title, components: obj(4785).transformComponents(id.components), nonce: null, resolved: null };
  ({ nonce: obj.nonce, resolved: obj.resolved } = id);
  const obj2 = obj(4785);
  DispatcherDefault.dispatch(obj).catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(closure_3[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["INTERACTION_IFRAME_MODAL_CREATE"], (id) => {
  const obj = { type: "INTERACTION_IFRAME_MODAL_CREATE", id: id.id, channelId: id.channel_id, customId: id.custom_id, application: id.application, title: id.title, iframePath: id.iframe_path, modalSize: id.modal_size, nonce: id.nonce };
  DispatcherDefault.dispatch(obj).catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(closure_3[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["STAGE_INSTANCE_CREATE"], (instance) => {
  const obj = { type: "STAGE_INSTANCE_CREATE", instance };
  DispatcherDefault.dispatch(obj).catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(closure_3[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["STAGE_INSTANCE_UPDATE"], (instance) => {
  const obj = { type: "STAGE_INSTANCE_UPDATE", instance };
  DispatcherDefault.dispatch(obj).catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(closure_3[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["STAGE_INSTANCE_DELETE"], (instance) => {
  const obj = { type: "STAGE_INSTANCE_DELETE", instance };
  DispatcherDefault.dispatch(obj).catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(closure_3[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["GUILD_SCHEDULED_EVENT_CREATE"], (guildScheduledEvent) => {
  const obj = { type: "GUILD_SCHEDULED_EVENT_CREATE", guildScheduledEvent };
  DispatcherDefault.dispatch(obj).catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(closure_3[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["GUILD_SCHEDULED_EVENT_UPDATE"], (guildScheduledEvent) => {
  const obj = { type: "GUILD_SCHEDULED_EVENT_UPDATE", guildScheduledEvent };
  DispatcherDefault.dispatch(obj).catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(closure_3[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["GUILD_SCHEDULED_EVENT_DELETE"], (guildScheduledEvent) => {
  const obj = { type: "GUILD_SCHEDULED_EVENT_DELETE", guildScheduledEvent };
  DispatcherDefault.dispatch(obj).catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(closure_3[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE"], (eventException) => {
  const obj = { type: "GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE", eventException };
  DispatcherDefault.dispatch(obj).catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(closure_3[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE"], (eventException) => {
  const obj = { type: "GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE", eventException };
  DispatcherDefault.dispatch(obj).catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(closure_3[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE"], (eventException) => {
  const obj = { type: "GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE", eventException };
  DispatcherDefault.dispatch(obj).catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(closure_3[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["GUILD_SCHEDULED_EVENT_EXCEPTIONS_DELETE"], (eventId) => {
  const obj = { type: "GUILD_SCHEDULED_EVENT_EXCEPTIONS_DELETE", eventId: eventId.event_id };
  DispatcherDefault.dispatch(obj).catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(closure_3[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["GUILD_SCHEDULED_EVENT_USER_ADD"], (userId) => {
  const obj = { type: "GUILD_SCHEDULED_EVENT_USER_ADD", userId: userId.user_id, guildId: userId.guild_id, guildEventId: userId.guild_scheduled_event_id, guildEventExceptionId: userId.guild_scheduled_event_exception_id, response: userId.response };
  DispatcherDefault.dispatch(obj).catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(closure_3[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["GUILD_SCHEDULED_EVENT_USER_REMOVE"], (userId) => {
  const obj = { type: "GUILD_SCHEDULED_EVENT_USER_REMOVE", userId: userId.user_id, guildId: userId.guild_id, guildEventId: userId.guild_scheduled_event_id, guildEventExceptionId: userId.guild_scheduled_event_exception_id, response: userId.response };
  DispatcherDefault.dispatch(obj).catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(closure_3[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["GUILD_DIRECTORY_ENTRY_CREATE"], (channelId) => {
  const obj = { type: "GUILD_DIRECTORY_ENTRY_CREATE", channelId: channelId.directory_channel_id, entry: channelId };
  DispatcherDefault.dispatch(obj).catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(closure_3[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["GUILD_DIRECTORY_ENTRY_UPDATE"], (channelId) => {
  const obj = { type: "GUILD_DIRECTORY_ENTRY_UPDATE", channelId: channelId.directory_channel_id, entry: channelId };
  DispatcherDefault.dispatch(obj).catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(closure_3[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["GUILD_DIRECTORY_ENTRY_DELETE"], (channelId) => {
  const obj = { type: "GUILD_DIRECTORY_ENTRY_DELETE", channelId: channelId.directory_channel_id, guildId: channelId.entity_id };
  DispatcherDefault.dispatch(obj).catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(closure_3[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["AUTO_MODERATION_MENTION_RAID_DETECTION"], (guildId) => {
  const obj = { type: "AUTO_MODERATION_MENTION_RAID_DETECTION", guildId: guildId.guild_id, decisionId: guildId.decision_id, suspiciousMentionActivityUntil: guildId.suspicious_mention_activity_until };
  DispatcherDefault.dispatch(obj).catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(closure_3[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["VOICE_CHANNEL_EFFECT_SEND"], (emoji) => {
  const obj = { type: "VOICE_CHANNEL_EFFECT_SEND", emoji: emoji.emoji, channelId: emoji.channel_id, userId: emoji.user_id, animationType: emoji.animation_type, animationId: emoji.animation_id, soundId: emoji.sound_id, soundVolume: emoji.sound_volume };
  DispatcherDefault.dispatch(obj).catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(closure_3[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["CLIPS_REMOTE_TRIGGER"], (userId) => {
  const obj = { type: "CLIPS_REMOTE_TRIGGER", userId: userId.user_id, applicationId: userId.application_id, partyId: null, remoteClipId: null };
  let party_id = userId.party_id;
  if (party_id == null) {
    party_id = null;
  }
  obj.partyId = party_id;
  obj.remoteClipId = userId.remote_clip_id;
  DispatcherDefault.dispatch(obj).catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(closure_3[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["GUILD_SOUNDBOARD_SOUND_CREATE"], (guildId) => {
  let sound = { type: "GUILD_SOUNDBOARD_SOUND_CREATE", sound: null };
  sound = { guildId: guildId.guild_id, name: guildId.name, soundId: guildId.sound_id, user: new UserRecord(guildId.user), userId: null, volume: null, emojiId: null, emojiName: null, available: null };
  ({ user_id: obj2.userId, volume: obj2.volume, emoji_id: obj2.emojiId, emoji_name: obj2.emojiName, available: obj2.available } = guildId);
  sound.sound = sound;
  const tmp = new UserRecord(guildId.user);
  DispatcherDefault.dispatch(sound).catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(closure_3[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["GUILD_SOUNDBOARD_SOUND_UPDATE"], (guildId) => {
  let sound = { type: "GUILD_SOUNDBOARD_SOUND_UPDATE", sound: null };
  sound = { guildId: guildId.guild_id, name: guildId.name, soundId: guildId.sound_id, user: new UserRecord(guildId.user), userId: null, volume: null, emojiId: null, emojiName: null, available: null };
  ({ user_id: obj2.userId, volume: obj2.volume, emoji_id: obj2.emojiId, emoji_name: obj2.emojiName, available: obj2.available } = guildId);
  sound.sound = sound;
  const tmp = new UserRecord(guildId.user);
  DispatcherDefault.dispatch(sound).catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(closure_3[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["GUILD_SOUNDBOARD_SOUND_DELETE"], (guildId) => {
  const obj = { type: "GUILD_SOUNDBOARD_SOUND_DELETE", guildId: guildId.guild_id, soundId: guildId.sound_id };
  DispatcherDefault.dispatch(obj).catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(closure_3[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["GUILD_SOUNDBOARD_SOUNDS_UPDATE"], (guildId) => {
  let obj = { type: "GUILD_SOUNDBOARD_SOUNDS_UPDATE", guildId: guildId.guild_id, soundboardSounds: null };
  const soundboard_sounds = guildId.soundboard_sounds;
  obj.soundboardSounds = soundboard_sounds.map((name) => {
    obj = { name: name.name, soundId: name.sound_id, emojiName: name.emoji_name, emojiId: name.emoji_id, userId: name.user_id, volume: name.volume, available: name.available, guildId: obj.guild_id };
    return obj;
  });
  DispatcherDefault.dispatch(obj).catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(closure_3[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
const result16 = definePreloadableDispatch(["EMBEDDED_ACTIVITY_UPDATE_V2"], (guild_id) => {
  const items = [guild_id.guild_id];
  return ChannelLoader.loadGuildIds(items);
}, (application_id) => {
  let instance = { application_id: application_id.application_id, launch_id: application_id.launch_id, composite_instance_id: application_id.composite_instance_id, location: application_id.location, participants: null, content_classification: null };
  let participants = application_id.participants;
  if (participants == null) {
    participants = [];
  }
  instance = { type: "EMBEDDED_ACTIVITY_UPDATE_V2", instance, participants, content_classification: application_id.content_classification };
  DispatcherDefault.dispatch(instance).catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(closure_3[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["AUTH_SESSION_CHANGE"], (authSessionIdHash) => {
  const obj = { type: "AUTH_SESSION_CHANGE", authSessionIdHash: authSessionIdHash.auth_session_id_hash };
  DispatcherDefault.dispatch(obj).catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(closure_3[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["USER_CONNECTIONS_LINK_CALLBACK"], (provider) => {
  const obj = { type: "USER_CONNECTIONS_LINK_CALLBACK", provider: provider.provider, callbackCode: provider.callback_code, callbackState: provider.callback_state };
  DispatcherDefault.dispatch(obj).catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(closure_3[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["USER_CONNECTIONS_CALLBACK"], (provider) => {
  const obj = { type: "USER_CONNECTIONS_CALLBACK", provider: provider.provider, code: provider.code, state: provider.state, openid_params: provider.openid_params };
  DispatcherDefault.dispatch(obj).catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(closure_3[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["DELETED_ENTITY_IDS"], (arg0) => {
  const obj = { type: "DELETED_ENTITY_IDS" };
  const merged = Object.assign(arg0);
  DispatcherDefault.dispatch(obj).catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(closure_3[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
const result17 = definePreloadableDispatch(["CHANNEL_SYNC"], (guild_id) => {
  const items = [guild_id.guild_id];
  return ChannelLoader.loadGuildIds(items);
}, (guild_id) => {
  if (!guild_id.integrity_check) {
    const channels = guild_id.channels;
    const item = channels.forEach((item) => {
      set.add(item);
    });
  }
  const obj = { type: "CHANNEL_SYNC", guild_id: guild_id.guild_id, channels: guild_id.channels, integrity_check: guild_id.integrity_check };
  DispatcherDefault.dispatch(obj).catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(closure_3[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["CONSOLE_COMMAND_UPDATE"], (id) => {
  const obj = { type: "CONSOLE_COMMAND_UPDATE", id: id.id, result: id.result, error: id.error };
  DispatcherDefault.dispatch(obj).catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(closure_3[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
const result18 = definePreloadableDispatch(["PASSIVE_UPDATE_V2"], (guild_id) => {
  const items = [guild_id.guild_id];
  return ChannelLoader.loadGuildIds(items);
}, (guildId) => {
  let obj = { type: "PASSIVE_UPDATE_V2", guildId: guildId.guild_id, members: guildId.updated_members, channels: null, voiceStates: null, removedVoiceStateUsers: guildId.removed_voice_states };
  const updated_channels = guildId.updated_channels;
  obj.channels = updated_channels.map((id) => ({ id: id.id, lastMessageId: id.last_message_id, lastPinTimestamp: id.last_pin_timestamp }));
  const updated_voice_states = guildId.updated_voice_states;
  obj.voiceStates = updated_voice_states.map((channelId) => {
    obj = { channelId: channelId.channel_id, deaf: channelId.deaf || false, mute: channelId.mute || false, requestToSpeakTimestamp: null, selfDeaf: null, selfMute: null, selfStream: null, selfVideo: null, sessionId: null, suppress: null, userId: null, discoverable: null, connectedAt: null };
    let prop = channelId.request_to_speak_timestamp;
    if (prop == null) {
      prop = null;
    }
    obj.requestToSpeakTimestamp = prop;
    obj.selfDeaf = channelId.self_deaf || false;
    obj.selfMute = channelId.self_mute || false;
    obj.selfStream = channelId.self_stream || false;
    obj.selfVideo = channelId.self_video || false;
    ({ session_id: obj.sessionId, suppress: obj.suppress, user_id: obj.userId, discoverable } = channelId);
    if (discoverable == null) {
      discoverable = true;
    }
    obj.discoverable = discoverable;
    obj.connectedAt = channelId.connected_at;
    return obj;
  });
  DispatcherDefault.dispatch(obj).catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(closure_3[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["CREATOR_MONETIZATION_RESTRICTIONS_UPDATE"], (guildId) => {
  const obj = { type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS", guildId: guildId.guild_id, restrictions: guildId.restrictions };
  DispatcherDefault.dispatch(obj).catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(closure_3[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["BILLING_REFERRAL_TRIAL_OFFER_UPDATE"], (userTrialOfferId) => {
  const obj = { type: "BILLING_REFERRAL_TRIAL_OFFER_UPDATE", userTrialOfferId: userTrialOfferId.user_trial_offer_id, recipientId: userTrialOfferId.recipient_id };
  DispatcherDefault.dispatch(obj).catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(closure_3[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["LAST_MESSAGES"], (guildId) => {
  const obj = { type: "MESSAGE_PREVIEWS_LOADED", guildId: guildId.guild_id, messages: guildId.messages };
  DispatcherDefault.dispatch(obj).catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(closure_3[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["AUTHENTICATOR_UPDATE"], (credential) => {
  const obj = { type: "AUTHENTICATOR_UPDATE", credential };
  DispatcherDefault.dispatch(obj).catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(closure_3[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["AUTHENTICATOR_CREATE"], (credential) => {
  const obj = { type: "AUTHENTICATOR_CREATE", credential };
  DispatcherDefault.dispatch(obj).catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(closure_3[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["AUTHENTICATOR_DELETE"], (credential) => {
  const obj = { type: "AUTHENTICATOR_DELETE", credential };
  DispatcherDefault.dispatch(obj).catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(closure_3[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["NOTIFICATION_SETTINGS_UPDATE"], (flags) => {
  let prop;
  if (flags != null) {
    prop = flags.declarative_settings_proto;
  }
  let result;
  if (null != prop) {
    obj = obj(13679);
    result = obj.b64ToDeclarativeSettingsProto(flags.declarative_settings_proto);
  }
  obj = { type: "NOTIFICATION_SETTINGS_UPDATE", settings: { flags: flags.flags, declarativeSettings: result } };
  DispatcherDefault.dispatch(obj).catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(closure_3[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
  const dispatchResult = DispatcherDefault.dispatch(obj);
});
defineSimpleDispatch(["CONVERSATION_SUMMARY_UPDATE"], (arg0) => {
  const obj = { type: "CONVERSATION_SUMMARY_UPDATE" };
  const merged = Object.assign(arg0);
  DispatcherDefault.dispatch(obj).catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(closure_3[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["PREMIUM_MARKETING_PREVIEW"], (data) => {
  const obj = { type: "PREMIUM_MARKETING_PREVIEW", data };
  DispatcherDefault.dispatch(obj).catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(closure_3[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["USER_APPLICATION_UPDATE"], (applicationId) => {
  const obj = { type: "USER_APPLICATION_UPDATE", applicationId: applicationId.application_id };
  DispatcherDefault.dispatch(obj).catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(closure_3[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["USER_APPLICATION_REMOVE"], (applicationId) => {
  const obj = { type: "USER_APPLICATION_REMOVE", applicationId: applicationId.application_id };
  DispatcherDefault.dispatch(obj).catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(closure_3[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["DM_SETTINGS_UPSELL_SHOW"], (guildId) => {
  const obj = { type: "DM_SETTINGS_UPSELL_SHOW", guildId: guildId.guild_id };
  DispatcherDefault.dispatch(obj).catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(closure_3[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["CONTENT_INVENTORY_INBOX_STALE"], (refreshAfterMs) => {
  const obj = { type: "CONTENT_INVENTORY_INBOX_STALE", refreshAfterMs: refreshAfterMs.refresh_after_ms };
  DispatcherDefault.dispatch(obj).catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(closure_3[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["VIRTUAL_CURRENCY_BALANCE_UPDATE"], (balance) => {
  const obj = { type: "VIRTUAL_CURRENCY_BALANCE_UPDATE", balance: balance.balance };
  DispatcherDefault.dispatch(obj).catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(closure_3[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["USER_DISCORD_ACHIEVEMENT_STATE_UPDATE"], (payload) => {
  const action = { type: "USER_DISCORD_ACHIEVEMENT_STATE_UPDATE", payload };
  DispatcherDefault.dispatch(action).catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(closure_3[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["WALLET_BALANCE_UPDATE"], (paymentSourceId) => {
  const obj = { type: "WALLET_BALANCE_UPDATE", paymentSourceId: paymentSourceId.payment_source_id, balance: paymentSourceId.balance, currency: paymentSourceId.currency };
  DispatcherDefault.dispatch(obj).catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(closure_3[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["GUILD_POWERUP_ENTITLEMENTS_CREATE", "GUILD_POWERUP_ENTITLEMENTS_DELETE"], (guildId, type) => {
  const obj = { type, guildId: guildId.guild_id, entitlements: guildId.entitlements };
  DispatcherDefault.dispatch(obj).catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(closure_3[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["GAME_SERVER_CREATE", "GAME_SERVER_UPDATE"], (guildId, type) => {
  const obj = { type, guildId: guildId.guild_id, gameServer: guildId.game_server };
  DispatcherDefault.dispatch(obj).catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(closure_3[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["GAME_SERVER_DELETE"], (guildId, type) => {
  const obj = { type, guildId: guildId.guild_id, gameServerId: guildId.game_server_id };
  DispatcherDefault.dispatch(obj).catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(closure_3[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["GUILD_APPLIED_BOOSTS_UPDATE"], (guildId, type) => {
  const obj = { type, guildId: guildId.guild_id };
  DispatcherDefault.dispatch(obj).catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(closure_3[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["USER_APPLICATION_IDENTITY_UPDATE"], (user_id, type) => {
  const obj = { type, user_id: user_id.user_id, application_id: user_id.application_id, username: user_id.username, avatar_hash: user_id.avatar_hash, metadata: user_id.metadata };
  DispatcherDefault.dispatch(obj).catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(closure_3[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["USER_APPLICATION_IDENTITY_REMOVE"], (user_id, type) => {
  const obj = { type, user_id: user_id.user_id, application_id: user_id.application_id };
  DispatcherDefault.dispatch(obj).catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(closure_3[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_RESPONSE"], (interactionId) => {
  const obj = { type: "SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_RESPONSE", interactionId: interactionId.interaction_id, applicationId: interactionId.application_id, skuId: interactionId.sku_id, recipientId: interactionId.recipient_id, eligible: interactionId.eligible, ineligibleReason: interactionId.ineligible_reason };
  DispatcherDefault.dispatch(obj).catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(closure_3[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["GUILD_ROOM_CONNECT"], (body, type) => {
  obj = { type, room: obj(4721).serverGuildRoomToClient(body) };
  const obj2 = obj(4721);
  DispatcherDefault.dispatch(obj).catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(closure_3[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["GUILD_ROOM_DISCONNECT"], (userId, type) => {
  const obj = { type, userId: userId.user_id, roomId: userId.room_id };
  DispatcherDefault.dispatch(obj).catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(closure_3[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["GUILD_ROOM_UPDATE"], (body, type) => {
  obj = { type, room: obj(4721).serverGuildRoomToClient(body) };
  const obj2 = obj(4721);
  DispatcherDefault.dispatch(obj).catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(closure_3[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["GUILD_OFFICIAL_GAME_APPLICATIONS_UPDATE"], (gameApplicationIds, type) => {
  const obj = { type, gameApplicationIds: gameApplicationIds.game_application_ids, guildId: gameApplicationIds.guild_id };
  DispatcherDefault.dispatch(obj).catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(closure_3[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["MESSAGE_REQUEST_NOTIFICATION_SENT"], (triggeringUserId) => {
  const obj = { type: "MESSAGE_REQUEST_NOTIFICATION_SENT", triggeringUserId: triggeringUserId.triggering_user_id, numMutualGuilds: triggeringUserId.num_mutual_guilds };
  DispatcherDefault.dispatch(obj).catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(closure_3[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
const size = fn(2);
const result19 = size.fileFinishedImporting("modules/gateway/dispatchSocketMessage.tsx");

export default function getDispatchHandler(type) {
  return closure_22[type];
};