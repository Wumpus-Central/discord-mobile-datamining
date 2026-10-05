// === Module 13488: dispatchSocketMessage ===

// Module 13488 (dispatchSocketMessage)
import LoggerDefault from "Logger" /* 3 */;
import TTITrackerDefault from "TTITracker" /* 9 */;
import _modDef12 from "module_12" /* 12 */;
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1085 */;
import ChannelStore2 from "ChannelStore" /* 2051 */;
import ChannelRecord from "ChannelRecord" /* 2055 */;
import actions_BillingActionCreators from "actions/BillingActionCreators" /* 5404 */;
import SubscriptionPlanActionCreatorsAll from "SubscriptionPlanActionCreators" /* 6760 */;
import convertServerThreadMemberDefault from "convertServerThreadMember" /* 7410 */;
import UserActionCreatorsAll from "UserActionCreators" /* 7852 */;
import BadgeDirectoryActionCreators from "BadgeDirectoryActionCreators" /* 7868 */;
import GatewaySocketSingleton from "GatewaySocketSingleton" /* 13439 */;
import ReadyPayloadUtilsAll from "ReadyPayloadUtils" /* 13489 */;
import isUserSettingsOpen from "isUserSettingsOpen" /* 13571 */;
import splitAgeRestrictedActivitiesDefault from "splitAgeRestrictedActivities" /* 13572 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import GuildBoostSlotRecord from "GuildBoostSlotRecord" /* 7670 */;
import UserRecord from "UserRecord" /* 1391 */;
import GuildMemberStore from "GuildMemberStore" /* 2112 */;
import UserStore from "UserStore" /* 1377 */;
import VoiceStateStore from "VoiceStateStore" /* 4909 */;
import SubscriptionPlanStore from "SubscriptionPlanStore" /* 4533 */;
import SubscriptionStore from "SubscriptionStore" /* 4534 */;
import ActionBatcher_mod from "ActionBatcher" /* 13457 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const ChannelStore = ChannelStore2;
let _require, importDefault, purchase_token_hash;

const f114840 = (timestamps) => {
  let obj2;
  let tmp8;
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
      const obj = { timestamps: obj2 };
      const merged = Object.assign(timestamps);
      obj2 = { isCountDown: tmp8 };
      const merged1 = Object.assign(timestamps.timestamps);
      tmp2 = obj;
      tmp8 = end > created_at && timestamps.type !== constants.LISTENING;
    }
  }
  return tmp2;
};
const f114844 = (sessionId) => {
  let activities;
  let hidden_activities;
  const obj = { sessionId: sessionId.session_id, lastModified: sessionId.last_modified, status: sessionId.status, activities: activities.map(f114840), hiddenActivities: hidden_activities, active: sessionId.active, clientInfo: sessionId.client_info };
  activities = sessionId.activities;
  if (activities == null) {
    activities = [];
  }
  hidden_activities = sessionId.hidden_activities;
  if (hidden_activities == null) {
    hidden_activities = [];
  }
  return obj;
};
function defineSimpleDispatch(arg0, dispatch) {
  const tmp = arg0[Symbol.iterator]();
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
}
function definePreloadableDispatch(arg0, preload, dispatch) {
  const tmp = arg0[Symbol.iterator]();
  while (tmp !== undefined) {
    let obj = { preload, dispatch };
    closure_22[tmp2] = obj;
    continue;
  }
}
function dispatchVoiceStateUpdates(items, receivedAt) {
  let flag;
  let prop;
  let self_video;
  items = [];
  const iter = items[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp2 = nextResult;
    if (null != nextResult.member) {
      let tmp5 = dispatchGuildMemberAdd(tmp2.guild_id, tmp2.member.user, tmp2.member);
    }
    let obj = { userId: null, guildId: null, sessionId: null, channelId: null, mute: null, deaf: null, selfMute: null, selfDeaf: null, selfVideo: self_video, suppress: tmp2.suppress, selfStream: tmp2.self_stream || false, requestToSpeakTimestamp: prop, discoverable: flag, oldChannelId: VoiceStateStore.getUserVoiceChannelId(tmp2.guild_id, tmp2.user_id), connectedAt: tmp2.connected_at };
    ({ user_id: obj.userId, guild_id: obj.guildId, session_id: obj.sessionId, channel_id: obj.channelId, mute: obj.mute, deaf: obj.deaf, self_mute: obj.selfMute, self_deaf: obj.selfDeaf, self_video } = tmp2);
    let push = items.push;
    if (!self_video) {
      self_video = false;
    }
    prop = tmp2.request_to_speak_timestamp;
    if (prop == null) {
      prop = null;
    }
    flag = tmp2.discoverable;
    if (flag == null) {
      flag = true;
    }
    let arr = push(obj);
    continue;
  }
  const obj2 = { type: "VOICE_STATE_UPDATES", voiceStates: items, receivedAt };
  dispatchOrResetSocket(obj2);
}
function dispatchOrResetSocket(arg0) {
  let closure_0 = arg0;
  const obj = DispatcherDefault;
  const dispatchResult = obj.dispatch(arg0);
  dispatchResult.catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
}
function dispatchGuildMemberAdd(guild_id, author, member) {
  let avatar;
  let avatar_decoration_data;
  let collectibles;
  let communication_disabled_until;
  let display_name_styles;
  let flags;
  let joined_at;
  let member_gaming_leaderboard_data;
  let nick;
  let obj5;
  let pending;
  let premium_since;
  let roles;
  let unusual_dm_activity_until;
  let vad_colors;
  ({ roles, nick, avatar, avatar_decoration_data, flags, premium_since, pending, joined_at, communication_disabled_until, unusual_dm_activity_until, vad_colors } = member);
  ({ collectibles, display_name_styles, member_gaming_leaderboard_data } = member);
  member = GuildMemberStore.getMember(guild_id, author.id);
  const obj = obj5(1973);
  const result = obj.parseServerUserCollectibles(collectibles);
  const obj2 = obj5(1394);
  const result1 = obj2.parseServerDisplayNameStyles(display_name_styles);
  const obj3 = obj5(4497);
  const result2 = obj3.parseServerMemberGamingLeaderboardData(member_gaming_leaderboard_data);
  let isEqualResult = null != member && member.nick === nick && member.avatar === avatar;
  if (isEqualResult) {
    const obj4 = _modDef12;
    isEqualResult = obj4.isEqual(member.roles, roles);
  }
  if (isEqualResult) {
    let avatarDecoration = member.avatarDecoration;
    const isEqualAvatarDecoration = tmp2(1972).isEqualAvatarDecoration;
    obj5(1972);
    if (avatarDecoration == null) {
      avatarDecoration = null;
    }
    let tmp11 = avatar_decoration_data;
    if (avatar_decoration_data == null) {
      tmp11 = null;
    }
    isEqualResult = isEqualAvatarDecoration(avatarDecoration, tmp11);
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
    let tmp13 = unusual_dm_activity_until;
    if (unusual_dm_activity_until == null) {
      tmp13 = null;
    }
    isEqualResult = prop === tmp13;
  }
  if (isEqualResult) {
    let collectibles1 = member.collectibles;
    const isEqual = _modDef12.isEqual;
    _modDef12;
    if (collectibles1 == null) {
      collectibles1 = null;
    }
    let tmp17 = result;
    if (result == null) {
      tmp17 = null;
    }
    isEqualResult = isEqual(collectibles1, tmp17);
  }
  if (isEqualResult) {
    let displayNameStyles = member.displayNameStyles;
    const isEqual2 = _modDef12.isEqual;
    _modDef12;
    if (displayNameStyles == null) {
      displayNameStyles = null;
    }
    let tmp21 = result1;
    if (result1 == null) {
      tmp21 = null;
    }
    isEqualResult = isEqual2(displayNameStyles, tmp21);
  }
  if (isEqualResult) {
    let prop1 = member.gamingLeaderboardData;
    const isEqual3 = _modDef12.isEqual;
    _modDef12;
    if (prop1 == null) {
      prop1 = null;
    }
    let tmp25 = result2;
    if (result2 == null) {
      tmp25 = null;
    }
    isEqualResult = isEqual3(prop1, tmp25);
  }
  if (isEqualResult) {
    let vadColors = member.vadColors;
    const isEqual4 = _modDef12.isEqual;
    _modDef12;
    if (vadColors == null) {
      vadColors = null;
    }
    let tmp29 = vad_colors;
    if (vad_colors == null) {
      tmp29 = null;
    }
    isEqualResult = isEqual4(vadColors, tmp29);
  }
  if (!isEqualResult) {
    obj5 = { type: "GUILD_MEMBER_ADD", guildId: guild_id, user: author, roles, nick, avatar, avatarDecoration: avatar_decoration_data, premiumSince: premium_since, isPending: pending, joinedAt: joined_at, communicationDisabledUntil: communication_disabled_until, unusualDMActivityUntil: unusual_dm_activity_until, flags, collectibles: result, displayNameStyles: result1, gamingLeaderboardData: result2, vadColors: vad_colors };
    const obj6 = DispatcherDefault;
    const dispatchResult = obj6.dispatch(obj5);
    dispatchResult.catch((error) => {
      logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
      const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
      obj = { error, action: obj.type };
      result = socket.resetSocketOnDispatchError(obj);
    });
  }
}
function dispatchPresence(arg0) {
  importDefaultResult31.add(arg0);
}
let closure_4 = ["newly_created"];
let closure_6 = ChannelRecord.createChannelRecordFromServer;
const ChannelLoader = ChannelStore2.ChannelLoader;
const ActivityTypes = Constants.ActivityTypes;
let tmp2 = new LoggerDefault("ConnectionStore");
let closure_17 = tmp2;
let ActionBatcher = ActionBatcher_mod;
const importDefaultResult4 = new ActionBatcher(GatewaySocketSingleton.socket, (arg0, id) => {
  let bitrate;
  let tmp = arg0;
  if (arg0 == null) {
    tmp = { type: "CHANNEL_UPDATES", channels: [] };
    const obj = { type: "CHANNEL_UPDATES", channels: [] };
  }
  const tmp2 = closure_6(id);
  const channel = ChannelStore.getChannel(id.id);
  let mergeResult;
  if (channel != null) {
    const merge = channel.merge;
    const obj2 = { recipients: channel.recipients, bitrate };
    const merged = Object.assign(tmp2);
    bitrate = tmp2.bitrate;
    if (bitrate == null) {
      bitrate = channel.bitrate;
    }
    mergeResult = merge(obj2);
  }
  const channels = tmp.channels;
  const push = channels.push;
  if (mergeResult == null) {
    mergeResult = tmp2;
  }
  push(mergeResult);
  return tmp;
}, (arg0) => "CHANNEL_UPDATE" !== arg0);
ActionBatcher = ActionBatcher_mod;
const importDefaultResult11 = new ActionBatcher(GatewaySocketSingleton.socket, (arg0, guildId) => {
  let soundboard_sounds;
  let tmp = arg0;
  if (null == arg0) {
    tmp = { type: "SOUNDBOARD_SOUNDS_RECEIVED", updates: [] };
    const obj = { type: "SOUNDBOARD_SOUNDS_RECEIVED", updates: [] };
  }
  const updates = tmp.updates;
  const obj2 = { guildId: guildId.guild_id, sounds: soundboard_sounds.map((name) => ({ name: name.name, soundId: name.sound_id, emojiName: name.emoji_name, emojiId: name.emoji_id, userId: name.user_id, volume: name.volume, available: name.available, guildId: guildId.guild_id })) };
  soundboard_sounds = guildId.soundboard_sounds;
  const push = updates.push;
  push(obj2);
  return tmp;
}, (arg0) => "SOUNDBOARD_SOUNDS" !== arg0);
ActionBatcher = ActionBatcher_mod;
const importDefaultResult21 = new ActionBatcher(GatewaySocketSingleton.socket, (arg0, arg1) => {
  let tmp = arg0;
  if (arg0 == null) {
    tmp = { type: "GUILD_MEMBERS_CHUNK_BATCH", chunks: [] };
    const obj = { type: "GUILD_MEMBERS_CHUNK_BATCH", chunks: [] };
  }
  const chunks = tmp.chunks;
  chunks.push(arg1);
  return tmp;
}, (arg0) => "GUILD_MEMBERS_CHUNK" !== arg0);
ActionBatcher = ActionBatcher_mod;
const importDefaultResult31 = new ActionBatcher(GatewaySocketSingleton.socket, (arg0, arg1) => {
  let tmp = arg0;
  if (null == arg0) {
    tmp = { type: "PRESENCE_UPDATES", updates: [] };
    const obj = { type: "PRESENCE_UPDATES", updates: [] };
  }
  const updates = tmp.updates;
  updates.push(arg1);
  return tmp;
}, (arg0) => "PRESENCE_UPDATE" !== arg0 && "GUILD_MEMBERS_CHUNK" !== arg0);
let closure_22 = {};
let result = definePreloadableDispatch(["INITIAL_GUILD"], (data_mode) => {
  let guildIds = null;
  if ("full" !== data_mode.data_mode) {
    const items = [data_mode.id];
    guildIds = ChannelLoader.loadGuildIds(items);
  }
  return guildIds;
}, (arg0) => {
  let currentUser;
  let logger;
  let closure_0 = arg0;
  const initialGuild = TTITrackerDefault.initialGuild;
  initialGuild.measure(() => {
    const Emitter = get_initializedDefault.Emitter;
    Emitter.batched(() => {
      let voice_states;
      let obj = ReadyPayloadUtilsAll;
      const hydrateInitialGuildResult = obj.hydrateInitialGuild(closure_1_0, closure_0(dependencyMap[13]).socket.identifyStartTime);
      if (null != currentUser.getCurrentUser()) {
        const obj2 = { type: "GUILD_CREATE", guild: hydrateInitialGuildResult };
        const obj3 = DispatcherDefault;
        const dispatchResult = obj3.dispatch(obj2);
        dispatchResult.catch((error) => {
          logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
          const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
          obj = { error, action: obj.type };
          result = socket.resetSocketOnDispatchError(obj);
        });
        const obj4 = {
          type: "VOICE_STATE_UPDATES",
          voiceStates: voice_states.map((userId) => {
              let flag;
              let prop;
              const obj = { userId: userId.user_id, guildId: hydrateInitialGuildResult.id, sessionId: userId.session_id, channelId: userId.channel_id, mute: userId.mute, deaf: userId.deaf, selfMute: userId.self_mute, selfDeaf: userId.self_deaf, selfVideo: userId.self_video || false, suppress: userId.suppress, selfStream: userId.self_stream || false, requestToSpeakTimestamp: prop, discoverable: flag, connectedAt: userId.connected_at };
              prop = userId.request_to_speak_timestamp;
              if (prop == null) {
                prop = null;
              }
              flag = userId.discoverable;
              if (flag == null) {
                flag = true;
              }
              return obj;
            })
        };
        voice_states = hydrateInitialGuildResult.voice_states;
        const obj5 = DispatcherDefault;
        const dispatchResult1 = obj5.dispatch(obj4);
        dispatchResult1.catch((error) => {
          logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
          const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
          obj = { error, action: obj.type };
          result = socket.resetSocketOnDispatchError(obj);
        });
        const _HermesInternal = HermesInternal;
        logger.log("Dispatched INITIAL_GUILD " + closure_1_0.id);
      }
    });
  });
});
defineSimpleDispatch(["READY_SUPPLEMENTAL"], (arg0) => {
  let closure_0 = arg0;
  const readySupplemental = TTITrackerDefault.readySupplemental;
  let measureResult = readySupplemental.measure(() => {
    const Emitter = get_initializedDefault.Emitter;
    Emitter.batched(() => {
      const hydrateReadySupplemental = closure_1_1(closure_1_3[14]).hydrateReadySupplemental;
      const measureResult = hydrateReadySupplemental.measure(() => {
        const obj = closure_2_2(closure_2_3[16]);
        return obj.hydrateReadySupplementalPayload(found, closure_2_0(closure_2_3[13]).socket.identifyStartTime);
      });
      const guilds = measureResult.guilds;
      const found = guilds.filter((unavailable) => true !== unavailable.unavailable);
      let item = found.forEach((presences) => {
        const id = presences.id;
        const arr = presences.presences || [];
        presences.presences = arr.map((activities) => {
          let activities1;
          activities = activities.activities;
          const tmp2 = presences(items[40]);
          if (activities == null) {
            activities = [];
          }
          let hidden_activities = activities.hidden_activities;
          if (hidden_activities == null) {
            hidden_activities = [];
          }
          const tmp2Result = tmp2(activities, hidden_activities);
          const obj = { user: activities.user, status: activities.status, clientStatus: activities.client_status, activities: activities1.map(f114840), hiddenActivities: tmp2Result.hiddenActivities, guildId: id, processedAtTimestamp: activities.processed_at_timestamp };
          activities1 = tmp2Result.activities;
          return obj;
        });
      });
      let presences = found.presences;
      if (presences == null) {
        presences = [];
      }
      presences = presences.map((activities) => {
        let activities1;
        activities = activities.activities;
        const tmp2 = presences(items[40]);
        if (activities == null) {
          activities = [];
        }
        let hidden_activities = activities.hidden_activities;
        if (hidden_activities == null) {
          hidden_activities = [];
        }
        const tmp2Result = tmp2(activities, hidden_activities);
        const obj = { user: activities.user, status: activities.status, clientStatus: activities.client_status, activities: activities1.map(f114840), hiddenActivities: tmp2Result.hiddenActivities, guildId: id, processedAtTimestamp: activities.processed_at_timestamp };
        activities1 = tmp2Result.activities;
        return obj;
      });
      let prop = found.lazy_private_channels;
      if (prop == null) {
        prop = [];
      }
      const lazyPrivateChannels = prop.map((item) => closure_1_6(item));
      const dispatchReadySupplemental = closure_1_1(closure_1_3[14]).dispatchReadySupplemental;
      dispatchReadySupplemental.measure(() => {
        const obj = { type: "CONNECTION_OPEN_SUPPLEMENTAL", guilds: found, presences, lazyPrivateChannels };
        const obj2 = DispatcherDefault;
        const dispatchResult = obj2.dispatch(obj);
        dispatchResult.catch((error) => {
          logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
          const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
          obj = { error, action: obj.type };
          result = socket.resetSocketOnDispatchError(obj);
        });
      });
      const items = [];
      const item1 = found.forEach((voice_states) => {
        voice_states = voice_states.voice_states;
        const item = voice_states.forEach((userId) => {
          let flag;
          let flag2;
          let prop;
          const obj = { userId: userId.user_id, guildId: voice_states.id, sessionId: userId.session_id, channelId: userId.channel_id, mute: userId.mute, deaf: userId.deaf, selfMute: userId.self_mute, selfDeaf: userId.self_deaf, selfVideo: flag, suppress: userId.suppress, selfStream: userId.self_stream || false, requestToSpeakTimestamp: prop, discoverable: flag2, connectedAt: userId.connected_at };
          flag = userId.self_video;
          const push = items.push;
          if (!flag) {
            flag = false;
          }
          prop = userId.request_to_speak_timestamp;
          if (prop == null) {
            prop = null;
          }
          flag2 = userId.discoverable;
          if (flag2 == null) {
            flag2 = true;
          }
          push(obj);
        });
      });
      let obj = { type: "VOICE_STATE_UPDATES", voiceStates: items, initial: true };
      const tmpResult = closure_1_1(closure_1_3[22]);
      let dispatchResult = tmpResult.dispatch(obj);
      dispatchResult.catch((error) => {
        logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
        const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
        obj = { error, action: obj.type };
        result = socket.resetSocketOnDispatchError(obj);
      });
      const localVoiceState = closure_1_0(closure_1_3[13]).localVoiceState;
      localVoiceState.update();
    });
  });
  const timerId = setTimeout(() => {
    const obj = { type: "POST_CONNECTION_OPEN" };
    const obj2 = closure_1(closure_3[22]);
    const dispatchResult = obj2.dispatch(obj);
    dispatchResult.catch((error) => {
      logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
      const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
      obj = { error, action: obj.type };
      result = socket.resetSocketOnDispatchError(obj);
    });
  }, 2000);
});
let result1 = definePreloadableDispatch(["READY"], (guilds) => {
  guilds = guilds.guilds;
  const obj = ReadyPayloadUtilsAll;
  const result = obj.preloadReadyPayloadData();
  const found = guilds.filter((unavailable) => {
    let tmp = !unavailable.unavailable;
    if (tmp) {
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
  const allPromises = Promise.all(items);
  return allPromises.then((result) => {
    let tmp;
    [tmp] = result;
    return tmp;
  });
}, (user, arg1, arg2) => {
  let closure_1;
  let closure_0 = user;
  importDefault = arg2;
  if (user.user.bot) {
    let obj = { type: "LOGOUT" };
    let obj2 = DispatcherDefault;
    let dispatchResult = obj2.dispatch(obj);
    const catchPromise = dispatchResult.catch((error) => {
      logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
      const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
      obj = { error, action: obj.type };
      result = socket.resetSocketOnDispatchError(obj);
    });
  } else {
    const ready = TTITrackerDefault.ready;
    let measureResult = ready.measure(() => {
      const Emitter = get_initializedDefault.Emitter;
      Emitter.batched(() => {
        const hydrateReady = closure_1_1(closure_1_3[14]).hydrateReady;
        const measureResult = hydrateReady.measure(() => {
          const obj = closure_2_2(closure_2_3[16]);
          return obj.hydrateReadyPayloadPrioritized(initialPrivateChannels, user(closure_2_3[13]).socket.identifyStartTime, unavailableGuilds);
        });
        const private_channels = measureResult.private_channels;
        const initialPrivateChannels = private_channels.map((item) => closure_1_6(item));
        let guilds = initialPrivateChannels.guilds;
        const found = guilds.filter((unavailable) => true === unavailable.unavailable && true !== unavailable.geo_restricted);
        const unavailableGuilds = found.map((id) => id.id);
        const guilds1 = initialPrivateChannels.guilds;
        guilds = guilds1.filter((unavailable) => true !== unavailable.unavailable);
        const guilds2 = initialPrivateChannels.guilds;
        const geoRestrictedGuilds = guilds2.filter((geo_restricted) => true === geo_restricted.geo_restricted);
        let result;
        if (null != initialPrivateChannels.user_settings_proto) {
          let obj = user(closure_1_3[17]);
          result = obj.b64ToPreloadedUserSettingsProto(initialPrivateChannels.user_settings_proto);
        }
        const notification_settings = initialPrivateChannels.notification_settings;
        let prop;
        if (notification_settings != null) {
          prop = notification_settings.declarative_settings_proto;
        }
        let result1;
        if (null != prop) {
          let obj2 = user(closure_1_3[18]);
          result1 = obj2.b64ToDeclarativeSettingsProto(initialPrivateChannels.notification_settings.declarative_settings_proto);
        }
        closure_1_1(closure_1_3[19])("AllGatewayConnectionStores", () => initialPrivateChannels(geoRestrictedGuilds[20]));
        const dispatchReady = closure_1_1(closure_1_3[14]).dispatchReady;
        dispatchReady.measure(() => {
          let apex_experiments;
          let country_code;
          let guild_join_requests;
          let linked_users;
          let logger;
          let obj2;
          let qos_token;
          let regional_feature_config;
          let relationships;
          let sessions;
          let obj = { type: "CONNECTION_OPEN", sessionId: user.session_id, authSessionIdHash: user.auth_session_id_hash, staticAuthSessionId: user.static_client_session_id, user: user.user, users: user.users, guilds, initialPrivateChannels, unavailableGuilds, readState: user.read_state, userGuildSettings: user.user_guild_settings, tutorial: user.tutorial, relationships, gameRelationships: user.game_relationships, friendSuggestionCount: user.friend_suggestion_count, analyticsToken: user.analytics_token, experiments: user.experiments, connectedAccounts: user.connected_accounts, guildExperiments: user.guild_experiments, apexExperiments: apex_experiments, requiredAction: user.required_action, consents: user.consents, sessions: sessions.map(f114844), pendingPayments: user.pending_payments, countryCode: country_code, guildJoinRequests: guild_join_requests, userSettingsProto: result, apiCodeVersion: user.api_code_version, auth: user.auth, notificationSettings: obj2, geoRestrictedGuilds, explicitContentScanVersion: user.explicit_content_scan_version, failedStates: user.failed_states, linkedUsers: linked_users, regionalFeatureConfig: regional_feature_config, qosToken: qos_token };
          relationships = user.relationships;
          if (relationships == null) {
            relationships = [];
          }
          apex_experiments = user.apex_experiments;
          sessions = user.sessions;
          if (sessions == null) {
            sessions = [];
          }
          country_code = user.country_code;
          guild_join_requests = user.guild_join_requests;
          if (guild_join_requests == null) {
            guild_join_requests = [];
          }
          linked_users = user.linked_users;
          regional_feature_config = user.regional_feature_config;
          qos_token = user.qos_token;
          obj2 = { flags: user.notification_settings.flags, declarativeSettings: result1 };
          const obj3 = unavailableGuilds(dependencyMap[22]);
          const dispatchResult = obj3.dispatch(obj);
          dispatchResult.catch((error) => {
            logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
            const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
            obj = { error, action: obj.type };
            result = socket.resetSocketOnDispatchError(obj);
          });
        });
        if (null != initialPrivateChannels.auth_token) {
          let obj3 = { type: "UPDATE_TOKEN", token: initialPrivateChannels.auth_token, userId: initialPrivateChannels.user.id };
          const tmpResult = closure_1_1(closure_1_3[22]);
          let dispatchResult = tmpResult.dispatch(obj3);
          dispatchResult.catch((error) => {
            logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
            const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
            obj = { error, action: obj.type };
            result = socket.resetSocketOnDispatchError(obj);
          });
        }
        if (null != initialPrivateChannels.ad_personalization_toggles_disabled) {
          const obj4 = { type: "AD_PERSONALIZATION_TOGGLES_RESTRICTED", disabled: initialPrivateChannels.ad_personalization_toggles_disabled };
          const tmpResult3 = closure_1_1(closure_1_3[22]);
          const dispatchResult1 = tmpResult3.dispatch(obj4);
          dispatchResult1.catch((error) => {
            logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
            const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
            obj = { error, action: obj.type };
            result = socket.resetSocketOnDispatchError(obj);
          });
        }
        const obj7 = user(closure_1_3[21]);
        const pinotReadyAction = obj7.getPinotReadyAction(initialPrivateChannels);
        if (null != pinotReadyAction) {
          const tmpResult4 = closure_1_1(closure_1_3[22]);
          const dispatchResult2 = tmpResult4.dispatch(pinotReadyAction);
          dispatchResult2.catch((error) => {
            logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
            const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
            obj = { error, action: obj.type };
            result = socket.resetSocketOnDispatchError(obj);
          });
        }
        const localPresenceState = user(closure_1_3[13]).localPresenceState;
        localPresenceState.update();
        const localVoiceState = user(closure_1_3[13]).localVoiceState;
        localVoiceState.update();
      });
    });
  }
});
defineSimpleDispatch(["STATE_UPDATE"], (apex_experiments) => {
  apex_experiments = apex_experiments.apex_experiments;
  const obj = { type: "CONNECTION_OPEN_STATE_UPDATE", apexExperiments: apex_experiments };
  const obj2 = DispatcherDefault;
  const dispatchResult = obj2.dispatch(obj);
  dispatchResult.catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["EXPERIMENT_SESSION_OVERRIDE_CREATE"], (experimentName) => {
  const obj = DispatcherDefault;
  const obj2 = { type: "APEX_EXPERIMENT_SESSION_OVERRIDE_CREATE", experimentName: experimentName.experiment_name, variantId: experimentName.variant_id };
  obj.dispatch(obj2);
});
defineSimpleDispatch(["EXPERIMENT_SESSION_OVERRIDE_DELETE"], (experimentName) => {
  const obj = DispatcherDefault;
  const obj2 = { type: "APEX_EXPERIMENT_SESSION_OVERRIDE_DELETE", experimentName: experimentName.experiment_name };
  obj.dispatch(obj2);
});
defineSimpleDispatch(["RESUMED"], () => {
  let obj;
  const localPresenceState = obj(13439).localPresenceState;
  localPresenceState.forceUpdate();
  const localVoiceState = obj(13439).localVoiceState;
  localVoiceState.forceUpdate();
  obj = { type: "CONNECTION_RESUMED" };
  const obj2 = DispatcherDefault;
  const dispatchResult = obj2.dispatch(obj);
  dispatchResult.catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["TYPING_START"], (guildId) => {
  let obj2;
  if (null != guildId.member) {
    dispatchGuildMemberAdd(guildId.guild_id, guildId.member.user, guildId.member);
  }
  const obj = { type: "TYPING_START", guildId: guildId.guild_id, channelId: guildId.channel_id, userId: guildId.user_id, customTypingIndicatorConfig: obj2.parseServerTypingIndicatorStyle(guildId.typing_indicator_style) };
  obj2 = obj(1398);
  const obj3 = DispatcherDefault;
  const dispatchResult = obj3.dispatch(obj);
  dispatchResult.catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["ACTIVITY_START"], (userId) => {
  const obj = { type: "ACTIVITY_START", userId: userId.user_id, activity: userId.activity };
  const obj2 = DispatcherDefault;
  const dispatchResult = obj2.dispatch(obj);
  dispatchResult.catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["ACTIVITY_USER_ACTION"], (actionType) => {
  const obj = { type: "ACTIVITY_USER_ACTION", actionType: actionType.action_type, user: actionType.user, applicationId: actionType.application_id, channelId: actionType.channel_id, messageId: actionType.message_id };
  const obj2 = DispatcherDefault;
  const dispatchResult = obj2.dispatch(obj);
  dispatchResult.catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
let result2 = definePreloadableDispatch(["MESSAGE_CREATE"], (guild_id) => {
  const items = [guild_id.guild_id];
  return ChannelLoader.loadGuildIds(items);
}, (author) => {
  let guild_id;
  let member;
  let mentions;
  ({ member, mentions, guild_id } = author);
  let tmp = null != member;
  author = author.author;
  if (tmp) {
    tmp = null != guild_id;
  }
  if (tmp) {
    dispatchGuildMemberAdd(guild_id, author, member);
  }
  if (null != mentions) {
    const item = mentions.forEach((member) => {
      if (null != member.member) {
        if (null != guild_id) {
          member = member.member;
          delete tmp["member"];
          dispatchGuildMemberAdd(tmp2, member, member);
        }
      }
    });
  }
  if (null != author.author) {
    const obj = { type: "MESSAGE_CREATE", guildId: null, channelId: null, message: author, optimistic: false, isPushNotification: false };
    ({ guild_id: obj.guildId, channel_id: obj.channelId } = author);
    const obj2 = DispatcherDefault;
    const dispatchResult = obj2.dispatch(obj);
    dispatchResult.catch((error) => {
      logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
      const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
      obj = { error, action: obj.type };
      result = socket.resetSocketOnDispatchError(obj);
    });
  }
});
const result3 = definePreloadableDispatch(["MESSAGE_UPDATE"], (guild_id) => {
  const items = [guild_id.guild_id];
  return ChannelLoader.loadGuildIds(items);
}, (author) => {
  let guild_id;
  let member;
  let mentions;
  ({ member, mentions, guild_id } = author);
  let tmp = null != member;
  author = author.author;
  if (tmp) {
    tmp = null != guild_id;
  }
  if (tmp) {
    dispatchGuildMemberAdd(guild_id, author, member);
  }
  if (null != mentions) {
    const item = mentions.forEach((member) => {
      if (null != member.member) {
        if (null != guild_id) {
          member = member.member;
          delete tmp["member"];
          dispatchGuildMemberAdd(tmp2, member, member);
        }
      }
    });
  }
  const obj = { type: "MESSAGE_UPDATE", guildId: author.guild_id, message: author };
  const obj2 = DispatcherDefault;
  const dispatchResult = obj2.dispatch(obj);
  dispatchResult.catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
const result4 = definePreloadableDispatch(["MESSAGE_DELETE"], (guild_id) => {
  const items = [guild_id.guild_id];
  return ChannelLoader.loadGuildIds(items);
}, (guildId) => {
  const obj = { type: "MESSAGE_DELETE", guildId: guildId.guild_id, id: guildId.id, channelId: guildId.channel_id };
  const obj2 = DispatcherDefault;
  const dispatchResult = obj2.dispatch(obj);
  dispatchResult.catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
const result5 = definePreloadableDispatch(["MESSAGE_DELETE_BULK"], (guild_id) => {
  const items = [guild_id.guild_id];
  return ChannelLoader.loadGuildIds(items);
}, (guildId) => {
  const obj = { type: "MESSAGE_DELETE_BULK", guildId: guildId.guild_id, ids: guildId.ids, channelId: guildId.channel_id };
  const obj2 = DispatcherDefault;
  const dispatchResult = obj2.dispatch(obj);
  dispatchResult.catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
const result6 = definePreloadableDispatch(["MESSAGE_ACK"], (channel_id) => ChannelLoader.loadGuildFromChannelId(channel_id.channel_id), (channelId) => {
  const obj = { type: "MESSAGE_ACK", channelId: channelId.channel_id, messageId: channelId.message_id, manual: channelId.manual, newMentionCount: channelId.mention_count, version: channelId.version };
  const obj2 = DispatcherDefault;
  const dispatchResult = obj2.dispatch(obj);
  dispatchResult.catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["GUILD_FEATURE_ACK"], (id) => {
  const obj = { type: "GUILD_FEATURE_ACK", id: id.resource_id, ackType: id.ack_type, ackedId: id.entity_id };
  const obj2 = DispatcherDefault;
  const dispatchResult = obj2.dispatch(obj);
  dispatchResult.catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["USER_NON_CHANNEL_ACK"], (ackType) => {
  const obj = { type: "USER_NON_CHANNEL_ACK", ackType: ackType.ack_type, ackedId: ackType.entity_id };
  const obj2 = DispatcherDefault;
  const dispatchResult = obj2.dispatch(obj);
  dispatchResult.catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["CONJURING_TURN_SETTLED"], (projectId) => {
  let nonce;
  const obj = { type: "CONJURE_TURN_SETTLED", projectId: projectId.project_id, guildId: projectId.guild_id, entityId: projectId.entity_id, title: projectId.title, body: projectId.body, nonce };
  nonce = projectId.nonce;
  if (nonce == null) {
    nonce = null;
  }
  const obj2 = DispatcherDefault;
  const dispatchResult = obj2.dispatch(obj);
  dispatchResult.catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
const result7 = definePreloadableDispatch(["CHANNEL_PINS_ACK"], (guild_id) => {
  const items = [guild_id.guild_id];
  return ChannelLoader.loadGuildIds(items);
}, (channelId) => {
  const obj = { type: "CHANNEL_PINS_ACK", channelId: channelId.channel_id, timestamp: channelId.timestamp, version: channelId.version };
  const obj2 = DispatcherDefault;
  const dispatchResult = obj2.dispatch(obj);
  dispatchResult.catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
const result8 = definePreloadableDispatch(["CHANNEL_PINS_UPDATE"], (guild_id) => {
  const items = [guild_id.guild_id];
  return ChannelLoader.loadGuildIds(items);
}, (channelId) => {
  const obj = { type: "CHANNEL_PINS_UPDATE", channelId: channelId.channel_id, lastPinTimestamp: channelId.last_pin_timestamp };
  const obj2 = DispatcherDefault;
  const dispatchResult = obj2.dispatch(obj);
  dispatchResult.catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
const result9 = definePreloadableDispatch(["CHANNEL_CREATE", "CHANNEL_DELETE"], (guild_id) => {
  const items = [guild_id.guild_id];
  return ChannelLoader.loadGuildIds(items);
}, (arg0, type) => {
  const obj = { type, channel: closure_6(arg0) };
  const obj2 = DispatcherDefault;
  const dispatchResult = obj2.dispatch(obj);
  dispatchResult.catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["VOICE_CHANNEL_STATUS_UPDATE"], (id, type) => {
  const obj = { type, id: id.id, guildId: id.guild_id, status: id.status };
  const obj2 = DispatcherDefault;
  const dispatchResult = obj2.dispatch(obj);
  dispatchResult.catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["VOICE_CHANNEL_START_TIME_UPDATE"], (id, type) => {
  let voice_start_time;
  const obj = { type, id: id.id, guildId: id.guild_id, voiceStartTime: voice_start_time };
  voice_start_time = id.voice_start_time;
  const obj2 = DispatcherDefault;
  const dispatchResult = obj2.dispatch(obj);
  dispatchResult.catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["CHANNEL_INFO"], (guildId, type) => {
  let channels;
  const obj = { type, guildId: guildId.guild_id, channels: channels.map((id) => ({ id: id.id, status: id.status, voiceStartTime: id.voice_start_time })) };
  channels = guildId.channels;
  const obj2 = DispatcherDefault;
  const dispatchResult = obj2.dispatch(obj);
  dispatchResult.catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["CHANNEL_MEMBER_COUNT_UPDATE"], (guildId, type) => {
  const obj = { type, guildId: guildId.guild_id, channelId: guildId.channel_id, online: guildId.presence_count, total: guildId.member_count };
  const obj2 = DispatcherDefault;
  const dispatchResult = obj2.dispatch(obj);
  dispatchResult.catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
const result10 = definePreloadableDispatch(["CHANNEL_UPDATE"], (guild_id) => {
  const items = [guild_id.guild_id];
  return ChannelLoader.loadGuildIds(items);
}, (arg0) => {
  importDefaultResult4.add(arg0);
});
const result11 = definePreloadableDispatch(["THREAD_CREATE", "THREAD_UPDATE", "THREAD_DELETE"], (guild_id) => {
  const items = [guild_id.guild_id];
  return ChannelLoader.loadGuildIds(items);
}, (isNewlyCreated, type) => {
  const obj = { type, isNewlyCreated: isNewlyCreated.newly_created, channel: closure_6(_objectWithoutProperties(isNewlyCreated, closure_4)) };
  const obj2 = DispatcherDefault;
  const dispatchResult = obj2.dispatch(obj);
  dispatchResult.catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
const result12 = definePreloadableDispatch(["THREAD_LIST_SYNC"], (guild_id) => {
  const items = [guild_id.guild_id];
  return ChannelLoader.loadGuildIds(items);
}, (guildId) => {
  let mapped;
  let threads;
  const obj = {
    type: "THREAD_LIST_SYNC",
    guildId: guildId.guild_id,
    threads: threads.map((parent_id) => {
      channel = channel.getChannel(parent_id.parent_id);
      if (null != channel) {
        ({ nsfw: parent_id.nsfw, type: parent_id.parentChannelThreadType } = channel);
      }
      return closure_1_6(parent_id);
    }),
    mostRecentMessages: guildId.most_recent_messages,
    members: mapped,
    channelIds: guildId.channel_ids
  };
  threads = guildId.threads;
  mapped = undefined;
  if (guildId.members) {
    const arr2 = _modDef12;
    mapped = arr2.map(guildId.members, convertServerThreadMemberDefault);
  }
  const obj2 = DispatcherDefault;
  const dispatchResult = obj2.dispatch(obj);
  dispatchResult.catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["THREAD_MEMBER_UPDATE"], (id) => {
  const obj = { type: "THREAD_MEMBER_UPDATE", id: id.id, guildId: id.guild_id, userId: id.user_id, flags: id.flags, muted: id.muted, muteConfig: id.mute_config, joinTimestamp: id.join_timestamp };
  const obj2 = DispatcherDefault;
  const dispatchResult = obj2.dispatch(obj);
  dispatchResult.catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["THREAD_MEMBERS_UPDATE"], (id) => {
  let mapped;
  let closure_0 = id;
  const obj = { type: "THREAD_MEMBERS_UPDATE", id: id.id, guildId: id.guild_id, memberCount: id.member_count, addedMembers: mapped, removedMemberIds: null, memberIdsPreview: null };
  const added_members = id.added_members;
  mapped = undefined;
  if (added_members != null) {
    mapped = added_members.map((id) => ({ id: id.id, guildId: guild_id.guild_id, userId: id.user_id, flags: id.flags, joinTimestamp: id.join_timestamp }));
  }
  ({ removed_member_ids: obj.removedMemberIds, member_ids_preview: obj.memberIdsPreview } = id);
  const obj2 = DispatcherDefault;
  const dispatchResult = obj2.dispatch(obj);
  dispatchResult.catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["FORUM_UNREADS"], (permission_denied) => {
  let threads;
  if (!permission_denied.permission_denied) {
    const obj = { type: "FORUM_UNREADS", channelId: null, threads: threads.map((threadId) => ({ threadId: threadId.thread_id, missing: threadId.missing, count: threadId.count })) };
    ({ channel_id: obj.channelId, threads } = permission_denied);
    const obj2 = DispatcherDefault;
    const dispatchResult = obj2.dispatch(obj);
    dispatchResult.catch((error) => {
      logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
      const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
      obj = { error, action: obj.type };
      result = socket.resetSocketOnDispatchError(obj);
    });
  }
});
defineSimpleDispatch(["SOUNDBOARD_SOUNDS"], (arg0) => {
  importDefaultResult11.add(arg0);
});
defineSimpleDispatch(["CHANNEL_RECIPIENT_ADD", "CHANNEL_RECIPIENT_REMOVE"], (channelId, type) => {
  const obj = { type, channelId: channelId.channel_id, user: channelId.user, nick: channelId.nick, isMember: null != ChannelStore.getBasicChannel(channelId.channel_id) };
  const obj2 = DispatcherDefault;
  const dispatchResult = obj2.dispatch(obj);
  dispatchResult.catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
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
  let voice_states;
  if (unavailable.unavailable) {
    const obj2 = { type: "GUILD_UNAVAILABLE", guildId: unavailable.id };
    const obj7 = DispatcherDefault;
    const dispatchResult = obj7.dispatch(obj2);
    dispatchResult.catch((error) => {
      logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
      const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
      obj = { error, action: obj.type };
      result = socket.resetSocketOnDispatchError(obj);
    });
  } else {
    let obj = ReadyPayloadUtilsAll;
    const result = obj.hydratePreviouslyUnavailableGuild(unavailable);
    const obj4 = { type: "GUILD_CREATE", guild: result };
    const obj3 = DispatcherDefault;
    const dispatchResult1 = obj3.dispatch(obj4);
    dispatchResult1.catch((error) => {
      logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
      const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
      obj = { error, action: obj.type };
      result = socket.resetSocketOnDispatchError(obj);
    });
    const obj6 = {
      type: "VOICE_STATE_UPDATES",
      voiceStates: voice_states.map((userId) => {
          let flag;
          let prop;
          const obj = { userId: userId.user_id, guildId: result.id, sessionId: userId.session_id, channelId: userId.channel_id, mute: userId.mute, deaf: userId.deaf, selfMute: userId.self_mute, selfDeaf: userId.self_deaf, selfVideo: userId.self_video || false, suppress: userId.suppress, selfStream: userId.self_stream || false, requestToSpeakTimestamp: prop, discoverable: flag, connectedAt: userId.connected_at };
          prop = userId.request_to_speak_timestamp;
          if (prop == null) {
            prop = null;
          }
          flag = userId.discoverable;
          if (flag == null) {
            flag = true;
          }
          return obj;
        })
    };
    voice_states = result.voice_states;
    const obj5 = DispatcherDefault;
    const dispatchResult2 = obj5.dispatch(obj6);
    dispatchResult2.catch((error) => {
      logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
      const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
      obj = { error, action: obj.type };
      result = socket.resetSocketOnDispatchError(obj);
    });
  }
});
defineSimpleDispatch(["GUILD_UPDATE"], (guild) => {
  const obj = { type: "GUILD_UPDATE", guild };
  const obj2 = DispatcherDefault;
  const dispatchResult = obj2.dispatch(obj);
  dispatchResult.catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
  if (guild.unavailable) {
    const obj3 = { type: "GUILD_UNAVAILABLE", guildId: guild.id };
    const tmpResult = DispatcherDefault;
    const dispatchResult1 = tmpResult.dispatch(obj3);
    dispatchResult1.catch((error) => {
      logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
      const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
      obj = { error, action: obj.type };
      result = socket.resetSocketOnDispatchError(obj);
    });
  }
});
defineSimpleDispatch(["GUILD_PRUNE_UPDATE"], (guildId) => {
  const obj = { type: "GUILD_PRUNE_UPDATE", guildId: guildId.guild_id, prune: { isPreview: guildId.prune.is_preview, isFinished: guildId.prune.is_finished, days: guildId.prune.days, pruneCount: guildId.prune.prune_count, includeRoles: guildId.prune.include_roles } };
  const obj2 = DispatcherDefault;
  const dispatchResult = obj2.dispatch(obj);
  dispatchResult.catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["GUILD_BULK_BAN_UPDATE"], (guildId) => {
  let failed_users;
  let obj2;
  const bulk_ban = guildId.bulk_ban;
  let banned_users;
  const obj = { type: "GUILD_BULK_BAN_UPDATE", guildId: guildId.guild_id, bulkBan: obj2 };
  if (bulk_ban != null) {
    banned_users = bulk_ban.banned_users;
  }
  if (banned_users == null) {
    banned_users = [];
  }
  const bulk_ban2 = guildId.bulk_ban;
  obj2 = { bannedUsers: banned_users, failedUsers: failed_users };
  failed_users = undefined;
  if (bulk_ban2 != null) {
    failed_users = bulk_ban2.failed_users;
  }
  if (failed_users == null) {
    failed_users = [];
  }
  const obj3 = DispatcherDefault;
  const dispatchResult = obj3.dispatch(obj);
  dispatchResult.catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["GUILD_DELETE"], (guild) => {
  const obj = { type: "GUILD_DELETE", guild };
  const obj2 = DispatcherDefault;
  const dispatchResult = obj2.dispatch(obj);
  dispatchResult.catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
  if (guild.geo_restricted) {
    const obj3 = { type: "GUILD_GEO_RESTRICTED", guildId: null, icon: null, name: null };
    ({ id: obj5.guildId, icon: obj5.icon, name: obj5.name } = guild);
    const tmpResult = DispatcherDefault;
    const dispatchResult1 = tmpResult.dispatch(obj3);
    dispatchResult1.catch((error) => {
      logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
      const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
      obj = { error, action: obj.type };
      result = socket.resetSocketOnDispatchError(obj);
    });
  } else if (guild.unavailable) {
    const obj4 = { type: "GUILD_UNAVAILABLE", guildId: guild.id };
    const tmpResult2 = DispatcherDefault;
    const dispatchResult2 = tmpResult2.dispatch(obj4);
    dispatchResult2.catch((error) => {
      logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
      const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
      obj = { error, action: obj.type };
      result = socket.resetSocketOnDispatchError(obj);
    });
  }
});
defineSimpleDispatch(["GUILD_MEMBERS_CHUNK"], (arg0) => {
  let closure_0 = arg0;
  const Emitter = get_initializedDefault.Emitter;
  Emitter.batched(() => {
    let closure_129_0;
    let presences;
    const obj = { guildId: closure_0.guild_id, members: closure_0.members, notFound: closure_0.not_found };
    importDefaultResult21.add(obj);
    if (null != closure_0.presences) {
      ({ presences, guild_id: closure_129_0 } = closure_0);
      const mapped = presences.map((activities) => {
        let activities1;
        activities = activities.activities;
        const tmp2 = presences(items[40]);
        if (activities == null) {
          activities = [];
        }
        let hidden_activities = activities.hidden_activities;
        if (hidden_activities == null) {
          hidden_activities = [];
        }
        const tmp2Result = tmp2(activities, hidden_activities);
        const obj = { user: activities.user, status: activities.status, clientStatus: activities.client_status, activities: activities1.map(f114840), hiddenActivities: tmp2Result.hiddenActivities, guildId: id, processedAtTimestamp: activities.processed_at_timestamp };
        activities1 = tmp2Result.activities;
        return obj;
      });
      const item = mapped.forEach(dispatchPresence);
    }
    const obj2 = ActionBatcher;
    obj2.flush("GUILD_MEMBERS_CHUNK");
  });
});
defineSimpleDispatch(["THREAD_MEMBER_LIST_UPDATE"], (arg0) => {
  let closure_0 = arg0;
  const Emitter = get_initializedDefault.Emitter;
  Emitter.batched(() => {
    let closure_130_0;
    let presences;
    const obj = { type: "THREAD_MEMBER_LIST_UPDATE", guildId: closure_0.guild_id, threadId: closure_0.thread_id, members: closure_0.members };
    const obj2 = DispatcherDefault;
    const dispatchResult = obj2.dispatch(obj);
    dispatchResult.catch((error) => {
      logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
      const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
      obj = { error, action: obj.type };
      result = socket.resetSocketOnDispatchError(obj);
    });
    if (null != closure_0.presences) {
      ({ presences, guild_id: closure_130_0 } = closure_0);
      const mapped = presences.map((activities) => {
        let activities1;
        activities = activities.activities;
        const tmp2 = presences(items[40]);
        if (activities == null) {
          activities = [];
        }
        let hidden_activities = activities.hidden_activities;
        if (hidden_activities == null) {
          hidden_activities = [];
        }
        const tmp2Result = tmp2(activities, hidden_activities);
        const obj = { user: activities.user, status: activities.status, clientStatus: activities.client_status, activities: activities1.map(f114840), hiddenActivities: tmp2Result.hiddenActivities, guildId: id, processedAtTimestamp: activities.processed_at_timestamp };
        activities1 = tmp2Result.activities;
        return obj;
      });
      const item = mapped.forEach(dispatchPresence);
    }
    const tmp2Result = ActionBatcher;
    tmp2Result.flush();
  });
});
defineSimpleDispatch(["GUILD_BAN_ADD", "GUILD_BAN_REMOVE", "GUILD_MEMBER_ADD", "GUILD_MEMBER_UPDATE", "GUILD_MEMBER_REMOVE"], (guildId, type) => {
  let obj2;
  let obj3;
  let obj4;
  let vad_colors;
  const obj = { type, guildId: guildId.guild_id, user: guildId.user, avatar: guildId.avatar, avatarDecoration: guildId.avatar_decoration_data, roles: guildId.roles, nick: guildId.nick, premiumSince: guildId.premium_since, isPending: guildId.pending, joinedAt: guildId.joined_at, communicationDisabledUntil: guildId.communication_disabled_until, unusualDMActivityUntil: guildId.unusual_dm_activity_until, flags: guildId.flags, collectibles: obj2.parseServerUserCollectibles(guildId.collectibles), displayNameStyles: obj3.parseServerDisplayNameStyles(guildId.display_name_styles), gamingLeaderboardData: obj4.parseServerMemberGamingLeaderboardData(guildId.member_gaming_leaderboard_data), vadColors: vad_colors };
  obj2 = obj(1973);
  obj3 = obj(1394);
  vad_colors = guildId.vad_colors;
  obj4 = obj(4497);
  if (vad_colors == null) {
    vad_colors = null;
  }
  const obj5 = DispatcherDefault;
  const dispatchResult = obj5.dispatch(obj);
  dispatchResult.catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
const result14 = definePreloadableDispatch(["GUILD_ROLE_CREATE", "GUILD_ROLE_UPDATE"], (guild_id) => {
  const items = [guild_id.guild_id];
  return ChannelLoader.loadGuildIds(items);
}, (guildId, type) => {
  const obj = { type, guildId: guildId.guild_id, role: guildId.role };
  const obj2 = DispatcherDefault;
  const dispatchResult = obj2.dispatch(obj);
  dispatchResult.catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
const result15 = definePreloadableDispatch(["GUILD_ROLE_DELETE"], (guild_id) => {
  const items = [guild_id.guild_id];
  return ChannelLoader.loadGuildIds(items);
}, (guildId) => {
  const obj = { type: "GUILD_ROLE_DELETE", guildId: guildId.guild_id, roleId: guildId.role_id, version: guildId.version };
  const obj2 = DispatcherDefault;
  const dispatchResult = obj2.dispatch(obj);
  dispatchResult.catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["GUILD_EMOJIS_UPDATE"], (guildId) => {
  const obj = { type: "GUILD_EMOJIS_UPDATE", guildId: guildId.guild_id, emojis: guildId.emojis };
  const obj2 = DispatcherDefault;
  const dispatchResult = obj2.dispatch(obj);
  dispatchResult.catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["GUILD_STICKERS_UPDATE"], (guildId) => {
  const obj = { type: "GUILD_STICKERS_UPDATE", guildId: guildId.guild_id, stickers: guildId.stickers };
  const obj2 = DispatcherDefault;
  const dispatchResult = obj2.dispatch(obj);
  dispatchResult.catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["GUILD_INTEGRATIONS_UPDATE"], (guildId) => {
  const obj = { type: "GUILD_INTEGRATIONS_UPDATE", guildId: guildId.guild_id };
  const obj2 = DispatcherDefault;
  const dispatchResult = obj2.dispatch(obj);
  dispatchResult.catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["INTEGRATION_CREATE"], (application) => {
  const obj = { type: "INTEGRATION_CREATE", application: application.application, guildId: application.guild_id };
  const obj2 = DispatcherDefault;
  const dispatchResult = obj2.dispatch(obj);
  dispatchResult.catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["INTEGRATION_UPDATE"], (application) => {
  const obj = { type: "INTEGRATION_UPDATE", application: application.application, guildId: application.guild_id };
  const obj2 = DispatcherDefault;
  const dispatchResult = obj2.dispatch(obj);
  dispatchResult.catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["INTEGRATION_DELETE"], (applicationId) => {
  const obj = { type: "INTEGRATION_DELETE", applicationId: applicationId.application_id, guildId: applicationId.guild_id };
  const obj2 = DispatcherDefault;
  const dispatchResult = obj2.dispatch(obj);
  dispatchResult.catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["USER_UPDATE"], (user) => {
  const obj = { type: "CURRENT_USER_UPDATE", user };
  const obj2 = DispatcherDefault;
  const dispatchResult = obj2.dispatch(obj);
  dispatchResult.catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["USER_SETTINGS_PROTO_UPDATE"], (settings) => {
  let obj2;
  let obj3;
  const obj = obj2(1233);
  const b64ToProtoWithTypeResult = obj.b64ToProtoWithType(settings.settings.type, settings.settings.proto);
  if (null != b64ToProtoWithTypeResult) {
    if (typeof b64ToProtoWithTypeResult === "string") {
      const _Error = Error;
      throw Error("UserSettingsProto must not be a string");
    } else {
      obj2 = { type: "USER_SETTINGS_PROTO_UPDATE", settings: obj3, partial: settings.partial };
      obj3 = { proto: b64ToProtoWithTypeResult, type: settings.settings.type };
      const obj4 = DispatcherDefault;
      const dispatchResult = obj4.dispatch(obj2);
      dispatchResult.catch((error) => {
        logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
        const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
        obj = { error, action: obj.type };
        result = socket.resetSocketOnDispatchError(obj);
      });
    }
  }
});
defineSimpleDispatch(["USER_GUILD_SETTINGS_UPDATE"], (arg0) => {
  let items;
  const obj = { type: "USER_GUILD_SETTINGS_FULL_UPDATE", userGuildSettings: items };
  items = [arg0];
  const obj2 = DispatcherDefault;
  const dispatchResult = obj2.dispatch(obj);
  dispatchResult.catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["USER_CONNECTIONS_UPDATE"], () => {
  const obj = { type: "USER_CONNECTIONS_UPDATE" };
  const obj2 = DispatcherDefault;
  const dispatchResult = obj2.dispatch(obj);
  dispatchResult.catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["USER_REQUIRED_ACTION_UPDATE"], (requiredAction) => {
  const obj = { type: "USER_REQUIRED_ACTION_UPDATE", requiredAction: requiredAction.required_action };
  const obj2 = DispatcherDefault;
  const dispatchResult = obj2.dispatch(obj);
  dispatchResult.catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["USER_NOTE_UPDATE"], (arg0) => {
  const obj = { type: "USER_NOTE_UPDATE" };
  const merged = Object.assign(arg0);
  const obj2 = DispatcherDefault;
  const dispatchResult = obj2.dispatch(obj);
  dispatchResult.catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["RELATIONSHIP_ADD"], (id) => {
  let tmp;
  const obj2 = { type: "RELATIONSHIP_ADD", relationship: { id: id.id, type: id.type, user: id.user, since: id.since, nickname: id.nickname, isSpamRequest: id.is_spam_request || false, isStrangerRequest: id.is_stranger_request || false, userIgnored: tmp, originApplicationId: id.origin_application_id, note: id.note }, shouldNotify: true === id.should_notify };
  tmp = id.user_ignored || false;
  const obj3 = DispatcherDefault;
  const dispatchResult = obj3.dispatch(obj2);
  dispatchResult.catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["RELATIONSHIP_REMOVE"], (relationship) => {
  const obj = { type: "RELATIONSHIP_REMOVE", relationship };
  const obj2 = DispatcherDefault;
  const dispatchResult = obj2.dispatch(obj);
  dispatchResult.catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["RELATIONSHIP_UPDATE"], (id) => {
  let tmp;
  const obj2 = { type: "RELATIONSHIP_UPDATE", relationship: { id: id.id, type: id.type, user: id.user, nickname: id.nickname, since: id.since, isSpamRequest: id.is_spam_request || false, isStrangerRequest: id.is_stranger_request || false, userIgnored: tmp, originApplicationId: id.origin_application_id, note: id.note } };
  tmp = id.user_ignored || false;
  const obj3 = DispatcherDefault;
  const dispatchResult = obj3.dispatch(obj2);
  dispatchResult.catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["GAME_RELATIONSHIP_ADD"], (id) => {
  const obj = { type: "GAME_RELATIONSHIP_ADD", gameRelationship: { id: id.id, applicationId: id.application_id, type: id.type, since: id.since, dmAccessType: id.dm_access_type, user: id.user } };
  const obj2 = DispatcherDefault;
  const dispatchResult = obj2.dispatch(obj);
  dispatchResult.catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["GAME_RELATIONSHIP_REMOVE"], (id) => {
  const obj = { type: "GAME_RELATIONSHIP_REMOVE", userId: id.id, applicationId: id.application_id };
  const obj2 = DispatcherDefault;
  const dispatchResult = obj2.dispatch(obj);
  dispatchResult.catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["PRESENCE_UPDATE"], (hidden_activities) => {
  let activities;
  let activities1;
  let guild_id;
  ({ guild_id, activities } = hidden_activities);
  const tmp = splitAgeRestrictedActivitiesDefault;
  if (activities == null) {
    activities = [];
  }
  hidden_activities = hidden_activities.hidden_activities;
  if (hidden_activities == null) {
    hidden_activities = [];
  }
  const tmpResult = tmp(activities, hidden_activities);
  const obj = { user: hidden_activities.user, status: hidden_activities.status, clientStatus: hidden_activities.client_status, activities: activities1.map(f114840), hiddenActivities: tmpResult.hiddenActivities, guildId: guild_id, processedAtTimestamp: hidden_activities.processed_at_timestamp };
  activities1 = tmpResult.activities;
  importDefaultResult31.add(obj);
});
defineSimpleDispatch(["PRESENCES_REPLACE"], (arr) => {
  const obj = {
    type: "PRESENCES_REPLACE",
    presences: arr.map((activities) => {
      let activities1;
      activities = activities.activities;
      const tmp2 = presences(items[40]);
      if (activities == null) {
        activities = [];
      }
      let hidden_activities = activities.hidden_activities;
      if (hidden_activities == null) {
        hidden_activities = [];
      }
      const tmp2Result = tmp2(activities, hidden_activities);
      const obj = { user: activities.user, status: activities.status, clientStatus: activities.client_status, activities: activities1.map(f114840), hiddenActivities: tmp2Result.hiddenActivities, guildId: id, processedAtTimestamp: activities.processed_at_timestamp };
      activities1 = tmp2Result.activities;
      return obj;
    })
  };
  const obj2 = DispatcherDefault;
  const dispatchResult = obj2.dispatch(obj);
  dispatchResult.catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["SESSIONS_REPLACE"], (arr) => {
  const obj = { type: "SESSIONS_REPLACE", sessions: arr.map(f114844) };
  const obj2 = DispatcherDefault;
  const dispatchResult = obj2.dispatch(obj);
  dispatchResult.catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
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
  const obj2 = DispatcherDefault;
  const dispatchResult = obj2.dispatch(obj);
  dispatchResult.catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["CALL_CREATE"], (channelId) => {
  let obj = { type: "CALL_CREATE", channelId: channelId.channel_id, messageId: channelId.message_id, region: channelId.region, ongoingRings: channelId.ongoing_rings };
  const obj2 = DispatcherDefault;
  const dispatchResult = obj2.dispatch(obj);
  dispatchResult.catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
  const voice_states = channelId.voice_states;
  if (null != voice_states) {
    const obj3 = {
      type: "VOICE_STATE_UPDATES",
      voiceStates: voice_states.map((userId) => {
          let flag;
          let prop;
          obj = { userId: userId.user_id, guildId: null, sessionId: userId.session_id, channelId: userId.channel_id, mute: userId.mute, deaf: userId.deaf, selfMute: userId.self_mute, selfDeaf: userId.self_deaf, selfVideo: userId.self_video || false, suppress: userId.suppress, selfStream: userId.self_stream || false, requestToSpeakTimestamp: prop, discoverable: flag, connectedAt: userId.connected_at };
          prop = userId.request_to_speak_timestamp;
          if (prop == null) {
            prop = null;
          }
          flag = userId.discoverable;
          if (flag == null) {
            flag = true;
          }
          return obj;
        })
    };
    const tmpResult = DispatcherDefault;
    const dispatchResult1 = tmpResult.dispatch(obj3);
    dispatchResult1.catch((error) => {
      logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
      const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
      obj = { error, action: obj.type };
      result = socket.resetSocketOnDispatchError(obj);
    });
  }
});
defineSimpleDispatch(["CALL_UPDATE"], (channelId) => {
  const obj = { type: "CALL_UPDATE", channelId: channelId.channel_id, messageId: channelId.message_id, region: channelId.region, ongoingRings: channelId.ongoing_rings };
  const obj2 = DispatcherDefault;
  const dispatchResult = obj2.dispatch(obj);
  dispatchResult.catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["CALL_DELETE"], (channelId) => {
  const obj = { type: "CALL_DELETE", channelId: channelId.channel_id, unavailable: channelId.unavailable };
  const obj2 = DispatcherDefault;
  const dispatchResult = obj2.dispatch(obj);
  dispatchResult.catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["OAUTH2_TOKEN_CREATE"], (id) => {
  const obj = { type: "OAUTH2_TOKEN_CREATE", id: id.id, scopes: id.scopes, application: id.application };
  const obj2 = DispatcherDefault;
  const dispatchResult = obj2.dispatch(obj);
  dispatchResult.catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["OAUTH2_TOKEN_DELETE"], (id) => {
  const obj = { type: "OAUTH2_TOKEN_DELETE", id: id.id, applicationId: id.application_id };
  const obj2 = DispatcherDefault;
  const dispatchResult = obj2.dispatch(obj);
  dispatchResult.catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["OAUTH2_TOKEN_REVOKE"], (accessToken) => {
  const obj = { type: "OAUTH2_TOKEN_REVOKE", accessToken: accessToken.access_token };
  const obj2 = DispatcherDefault;
  const dispatchResult = obj2.dispatch(obj);
  dispatchResult.catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["RECENT_MENTION_DELETE"], (id) => {
  const obj = { type: "RECENT_MENTION_DELETE", id: id.message_id };
  const obj2 = DispatcherDefault;
  const dispatchResult = obj2.dispatch(obj);
  dispatchResult.catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["SAVED_MESSAGE_CREATE"], (body) => {
  let obj2;
  const obj = { type: "SAVED_MESSAGE_CREATE", savedMessage: obj2.savedMessageCreateObjectToClient(body) };
  obj2 = obj(7495);
  const obj3 = DispatcherDefault;
  const dispatchResult = obj3.dispatch(obj);
  dispatchResult.catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["SAVED_MESSAGE_DELETE"], (channelId) => {
  let obj2;
  const obj = { type: "SAVED_MESSAGE_DELETE", savedMessageData: obj2.savedMessageDeleteObjectToClient(channelId) };
  obj2 = obj(7495);
  const obj3 = DispatcherDefault;
  const dispatchResult = obj3.dispatch(obj);
  dispatchResult.catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["FRIEND_SUGGESTION_CREATE"], (suggestion) => {
  const obj = { type: "FRIEND_SUGGESTION_CREATE", suggestion };
  const obj2 = DispatcherDefault;
  const dispatchResult = obj2.dispatch(obj);
  dispatchResult.catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["FRIEND_SUGGESTION_DELETE"], (suggestedUserId) => {
  const obj = { type: "FRIEND_SUGGESTION_DELETE", suggestedUserId: suggestedUserId.suggested_user_id };
  const obj2 = DispatcherDefault;
  const dispatchResult = obj2.dispatch(obj);
  dispatchResult.catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["WEBHOOKS_UPDATE"], (guildId) => {
  const obj = { type: "WEBHOOKS_UPDATE", guildId: guildId.guild_id, channelId: guildId.channel_id };
  const obj2 = DispatcherDefault;
  const dispatchResult = obj2.dispatch(obj);
  dispatchResult.catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["MESSAGE_REACTION_ADD", "MESSAGE_REACTION_REMOVE"], (channelId, type) => {
  const obj = { type, channelId: channelId.channel_id, messageId: channelId.message_id, userId: channelId.user_id, emoji: channelId.emoji, colors: channelId.burst_colors, reactionType: channelId.type, messageAuthorId: channelId.message_author_id };
  const obj2 = DispatcherDefault;
  const dispatchResult = obj2.dispatch(obj);
  dispatchResult.catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["MESSAGE_POLL_VOTE_ADD", "MESSAGE_POLL_VOTE_REMOVE"], (channelId, arg1) => {
  let obj;
  let str = "MESSAGE_REACTION_REMOVE";
  if ("MESSAGE_POLL_VOTE_ADD" === arg1) {
    str = "MESSAGE_REACTION_ADD";
  }
  obj = { type: str, channelId: channelId.channel_id, messageId: channelId.message_id, userId: channelId.user_id, emoji: { id: channelId.answer_id, name: "" }, reactionType: obj(7259).ReactionTypes.VOTE };
  const obj2 = DispatcherDefault;
  const dispatchResult = obj2.dispatch(obj);
  dispatchResult.catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["MESSAGE_POLL_VOTE_ADD_MANY"], (channelId) => {
  let votes;
  let obj = {
    type: "MESSAGE_REACTION_ADD_MANY",
    channelId: channelId.channel_id,
    messageId: channelId.message_id,
    reactions: votes.map((answer_id) => {
      obj = { emoji: { id: answer_id.answer_id, name: "" }, reactionType: obj(dependencyMap[30]).ReactionTypes.VOTE };
      const merged = Object.assign(answer_id);
      return obj;
    })
  };
  votes = channelId.votes;
  const obj2 = DispatcherDefault;
  const dispatchResult = obj2.dispatch(obj);
  dispatchResult.catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["MESSAGE_REACTION_REMOVE_ALL"], (channelId) => {
  const obj = { type: "MESSAGE_REACTION_REMOVE_ALL", channelId: channelId.channel_id, messageId: channelId.message_id };
  const obj2 = DispatcherDefault;
  const dispatchResult = obj2.dispatch(obj);
  dispatchResult.catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["MESSAGE_REACTION_REMOVE_EMOJI"], (channelId) => {
  const obj = { type: "MESSAGE_REACTION_REMOVE_EMOJI", channelId: channelId.channel_id, messageId: channelId.message_id, emoji: channelId.emoji };
  const obj2 = DispatcherDefault;
  const dispatchResult = obj2.dispatch(obj);
  dispatchResult.catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["MESSAGE_REACTION_ADD_MANY"], (channelId) => {
  const obj = { type: "MESSAGE_REACTION_ADD_MANY", channelId: channelId.channel_id, messageId: channelId.message_id, reactions: channelId.reactions };
  const obj2 = DispatcherDefault;
  const dispatchResult = obj2.dispatch(obj);
  dispatchResult.catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["PAYMENT_UPDATE"], (payment) => {
  const obj = { type: "PAYMENT_UPDATE", payment };
  const obj2 = DispatcherDefault;
  const dispatchResult = obj2.dispatch(obj);
  dispatchResult.catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["ORDER_UPDATE"], (orderId) => {
  const obj = { type: "ORDER_UPDATE", orderId: orderId.order_id, revision: orderId.revision };
  const obj2 = DispatcherDefault;
  const dispatchResult = obj2.dispatch(obj);
  dispatchResult.catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["ENTITLEMENT_CREATE", "ENTITLEMENT_UPDATE", "ENTITLEMENT_DELETE"], (entitlement, type) => {
  const obj = { type, entitlement };
  const obj2 = DispatcherDefault;
  const dispatchResult = obj2.dispatch(obj);
  dispatchResult.catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["USER_PAYMENT_SOURCES_UPDATE"], () => {
  const obj = isUserSettingsOpen;
  if (obj.isUserSettingsOpen()) {
    const tmpResult = actions_BillingActionCreators;
    const paymentSources = tmpResult.fetchPaymentSources();
    const obj3 = SubscriptionPlanActionCreatorsAll;
    const subscriptionPlansBySKUs = obj3.fetchSubscriptionPlansBySKUs(SubscriptionPlanStore.getFetchedSKUIDs());
  }
});
defineSimpleDispatch(["USER_SUBSCRIPTIONS_UPDATE"], () => {
  const obj = UserActionCreatorsAll;
  const currentUser = obj.fetchCurrentUser();
  const obj2 = isUserSettingsOpen;
  if (obj2.isUserSettingsOpen()) {
    const tmp3Result = actions_BillingActionCreators;
    const subscriptions = tmp3Result.fetchSubscriptions();
  }
});
defineSimpleDispatch(["WISHLIST_ITEM_PURCHASED"], (recipientId) => {
  const obj = { type: "WISHLIST_ITEM_PURCHASED", recipientId: recipientId.recipient_id, skuId: recipientId.sku_id };
  const obj2 = DispatcherDefault;
  const dispatchResult = obj2.dispatch(obj);
  dispatchResult.catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["USER_BADGE_STATE_UPDATE"], (badge_id) => {
  const obj = BadgeDirectoryActionCreators;
  const badge = obj.fetchBadge(badge_id.badge_id);
});
defineSimpleDispatch(["USER_PREMIUM_GUILD_SUBSCRIPTION_SLOT_CREATE"], (subscription_id) => {
  const obj = { type: "GUILD_BOOST_SLOT_CREATE", guildBoostSlot: GuildBoostSlotRecord.createFromServer(subscription_id, SubscriptionStore.getSubscriptionById(subscription_id.subscription_id)) };
  const obj2 = DispatcherDefault;
  const dispatchResult = obj2.dispatch(obj);
  dispatchResult.catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["USER_PREMIUM_GUILD_SUBSCRIPTION_SLOT_UPDATE"], (subscription_id) => {
  const obj = { type: "GUILD_BOOST_SLOT_UPDATE", guildBoostSlot: GuildBoostSlotRecord.createFromServer(subscription_id, SubscriptionStore.getSubscriptionById(subscription_id.subscription_id)) };
  const obj2 = DispatcherDefault;
  const dispatchResult = obj2.dispatch(obj);
  dispatchResult.catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["BILLING_POPUP_BRIDGE_CALLBACK"], (paymentSourceType) => {
  const obj = { type: "BILLING_POPUP_BRIDGE_CALLBACK", paymentSourceType: paymentSourceType.payment_source_type, state: paymentSourceType.state, path: paymentSourceType.path, query: paymentSourceType.query };
  const obj2 = DispatcherDefault;
  const dispatchResult = obj2.dispatch(obj);
  dispatchResult.catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["USER_PAYMENT_BROWSER_CHECKOUT_DONE"], (loadId) => {
  const obj = { type: "USER_PAYMENT_BROWSER_CHECKOUT_DONE", loadId: loadId.load_id, skuId: loadId.sku_id, skuSubscriptionPlanId: loadId.sku_subscription_plan_id };
  const obj2 = DispatcherDefault;
  const dispatchResult = obj2.dispatch(obj);
  dispatchResult.catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["USER_PAYMENT_CLIENT_ADD"], (arg0) => {
  _require = arg0;
  let obj = require("PurchaseTokenUtils");
  const purchaseTokenHash = obj.getPurchaseTokenHash();
  purchaseTokenHash.then((result) => {
    purchase_token_hash = purchase_token_hash.purchase_token_hash;
    if (purchase_token_hash === result) {
      const obj = { type: "USER_PAYMENT_CLIENT_ADD", purchaseTokenHash: purchase_token_hash, expiresAt: tmp.expires_at };
      const obj2 = DispatcherDefault;
      const dispatchResult = obj2.dispatch(obj);
      dispatchResult.catch((error) => {
        logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
        const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
        obj = { error, action: obj.type };
        result = socket.resetSocketOnDispatchError(obj);
      });
    }
  });
});
defineSimpleDispatch(["GUILD_MEMBER_LIST_UPDATE"], (arg0) => {
  let closure_0 = arg0;
  const Emitter = get_initializedDefault.Emitter;
  Emitter.batched(() => {
    function handleItem(member) {
      let activities1;
      if (null != member.member) {
        member = member.member;
        dispatchGuildMemberAdd(handleItem.guild_id, member.user, member);
        if (null != member.presence) {
          const presence = member.presence;
          const guild_id = handleItem.guild_id;
          let activities = presence.activities;
          const tmp9 = splitAgeRestrictedActivitiesDefault;
          if (activities == null) {
            activities = [];
          }
          let hidden_activities = presence.hidden_activities;
          if (hidden_activities == null) {
            hidden_activities = [];
          }
          const tmp = tmp9(activities, hidden_activities);
          let obj = { user: null, status: null, clientStatus: null, activities: activities1.map(f114840), hiddenActivities: tmp.hiddenActivities, guildId: guild_id, processedAtTimestamp: presence.processed_at_timestamp };
          ({ user: obj.user, status: obj.status, client_status: obj.clientStatus } = presence);
          activities1 = tmp.activities;
          set.add(obj);
        }
      }
    }
    const ops = handleItem.ops;
    let item = ops.forEach((item) => {
      let items;
      let op;
      ({ op, items } = item);
      if ("SYNC" === op) {
        item = items.forEach(handleItem);
      } else if ("UPDATE" === op) {
        handleItem(tmp);
      }
    });
    let obj = ActionBatcher;
    obj.flush();
    let obj2 = { type: "GUILD_MEMBER_LIST_UPDATE", guildId: handleItem.guild_id, id: handleItem.id, ops: handleItem.ops, groups: handleItem.groups, memberCount: handleItem.member_count, onlineCount: handleItem.online_count };
    const obj3 = DispatcherDefault;
    const dispatchResult = obj3.dispatch(obj2);
    dispatchResult.catch((error) => {
      logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
      const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
      obj = { error, action: obj.type };
      result = socket.resetSocketOnDispatchError(obj);
    });
  });
});
defineSimpleDispatch(["GIFT_CODE_UPDATE"], (uses) => {
  const obj = { type: "GIFT_CODE_UPDATE", uses: uses.uses, code: uses.code };
  const obj2 = DispatcherDefault;
  const dispatchResult = obj2.dispatch(obj);
  dispatchResult.catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["GIFT_CODE_CREATE"], (giftCode) => {
  const obj = { type: "GIFT_CODE_CREATE", giftCode };
  const obj2 = DispatcherDefault;
  const dispatchResult = obj2.dispatch(obj);
  dispatchResult.catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["LIBRARY_APPLICATION_UPDATE"], (libraryApplication) => {
  const obj = { type: "LIBRARY_APPLICATION_UPDATE", libraryApplication };
  const obj2 = DispatcherDefault;
  const dispatchResult = obj2.dispatch(obj);
  dispatchResult.catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["STREAM_CREATE"], (streamKey) => {
  const obj = { type: "STREAM_CREATE", streamKey: streamKey.stream_key, region: streamKey.region, viewerIds: streamKey.viewer_ids, rtcServerId: streamKey.rtc_server_id, rtcChannelId: streamKey.rtc_channel_id, paused: streamKey.paused };
  const obj2 = DispatcherDefault;
  const dispatchResult = obj2.dispatch(obj);
  dispatchResult.catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["STREAM_SERVER_UPDATE"], (streamKey) => {
  const obj = { type: "STREAM_SERVER_UPDATE", streamKey: streamKey.stream_key, endpoint: streamKey.endpoint, token: streamKey.token };
  const obj2 = DispatcherDefault;
  const dispatchResult = obj2.dispatch(obj);
  dispatchResult.catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["STREAM_UPDATE"], (streamKey) => {
  const obj = { type: "STREAM_UPDATE", streamKey: streamKey.stream_key, region: streamKey.region, viewerIds: streamKey.viewer_ids, paused: streamKey.paused };
  const obj2 = DispatcherDefault;
  const dispatchResult = obj2.dispatch(obj);
  dispatchResult.catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["STREAM_DELETE"], (streamKey) => {
  const obj = { type: "STREAM_DELETE", streamKey: streamKey.stream_key, unavailable: streamKey.unavailable, reason: streamKey.reason };
  const obj2 = DispatcherDefault;
  const dispatchResult = obj2.dispatch(obj);
  dispatchResult.catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["GENERIC_PUSH_NOTIFICATION_SENT"], (title) => {
  const obj = { type: "GENERIC_PUSH_NOTIFICATION_SENT", title: title.title, body: title.body, trackingType: title.tracking_type, icon: title.icon, route: title.route, tag: title.tag };
  const obj2 = DispatcherDefault;
  const dispatchResult = obj2.dispatch(obj);
  dispatchResult.catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["REACTION_NOTIFICATION_SENT"], (route) => {
  const obj = { type: "REACTION_NOTIFICATION_SENT", route: route.route, message: route.message, emoji: route.emoji, reactorUserId: route.reactor_user_id, title: route.title, body: route.body, trackingType: route.tracking_type, icon: route.icon };
  const obj2 = DispatcherDefault;
  const dispatchResult = obj2.dispatch(obj);
  dispatchResult.catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["NOTIFICATION_CENTER_ITEM_CREATE"], (item) => {
  const obj = { type: "NOTIFICATION_CENTER_ITEM_CREATE", item };
  const obj2 = DispatcherDefault;
  const dispatchResult = obj2.dispatch(obj);
  dispatchResult.catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["NOTIFICATION_CENTER_ITEM_DELETE"], (id) => {
  const obj = { type: "NOTIFICATION_CENTER_ITEM_DELETE", id: id.id };
  const obj2 = DispatcherDefault;
  const dispatchResult = obj2.dispatch(obj);
  dispatchResult.catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["NOTIFICATION_CENTER_ITEMS_ACK"], (id) => {
  let items;
  const obj = { type: "NOTIFICATION_CENTER_ITEMS_ACK", ids: items, optimistic: false };
  items = [id.id];
  const obj2 = DispatcherDefault;
  const dispatchResult = obj2.dispatch(obj);
  dispatchResult.catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["NOTIFICATION_CENTER_ITEM_COMPLETED"], (item_enum) => {
  const obj = { type: "NOTIFICATION_CENTER_ITEM_COMPLETED", item_enum: item_enum.item_enum };
  const obj2 = DispatcherDefault;
  const dispatchResult = obj2.dispatch(obj);
  dispatchResult.catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["QUESTS_USER_STATUS_UPDATE"], (user_status) => {
  const obj = { type: "QUESTS_USER_STATUS_UPDATE", user_status: user_status.user_status };
  const obj2 = DispatcherDefault;
  const dispatchResult = obj2.dispatch(obj);
  dispatchResult.catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["QUESTS_USER_COMPLETION_UPDATE"], (quest_enrollment_blocked_until) => {
  const obj = { type: "QUESTS_USER_COMPLETION_UPDATE", quest_enrollment_blocked_until: quest_enrollment_blocked_until.quest_enrollment_blocked_until };
  const obj2 = DispatcherDefault;
  const dispatchResult = obj2.dispatch(obj);
  dispatchResult.catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["QUEST_PREVIEW_UPDATE"], (quest_id) => {
  const obj = { type: "QUEST_PREVIEW_UPDATE", quest_id: quest_id.quest_id };
  const obj2 = DispatcherDefault;
  const dispatchResult = obj2.dispatch(obj);
  dispatchResult.catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["APPLICATION_COMMAND_PERMISSIONS_UPDATE"], (guildId, type) => {
  const obj = { type, guildId: guildId.guild_id };
  const obj2 = DispatcherDefault;
  const dispatchResult = obj2.dispatch(obj);
  dispatchResult.catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["GUILD_APPLICATION_COMMAND_INDEX_UPDATE"], (guildId) => {
  const obj = { type: "GUILD_APPLICATION_COMMAND_INDEX_UPDATE", guildId: guildId.guild_id, version: guildId.version };
  const obj2 = DispatcherDefault;
  const dispatchResult = obj2.dispatch(obj);
  dispatchResult.catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["GUILD_JOIN_REQUEST_CREATE"], (request) => {
  const obj = { type: "GUILD_JOIN_REQUEST_CREATE", request: request.request, status: request.status, guildId: request.guild_id };
  const obj2 = DispatcherDefault;
  const dispatchResult = obj2.dispatch(obj);
  dispatchResult.catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["GUILD_JOIN_REQUEST_UPDATE"], (request) => {
  const obj = { type: "GUILD_JOIN_REQUEST_UPDATE", request: request.request, status: request.status, guildId: request.guild_id };
  const obj2 = DispatcherDefault;
  const dispatchResult = obj2.dispatch(obj);
  dispatchResult.catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["GUILD_JOIN_REQUEST_DELETE"], (id) => {
  const obj = { type: "GUILD_JOIN_REQUEST_DELETE", id: id.id, userId: id.user_id, guildId: id.guild_id };
  const obj2 = DispatcherDefault;
  const dispatchResult = obj2.dispatch(obj);
  dispatchResult.catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["INTERACTION_CREATE"], (id) => {
  const obj = { type: "INTERACTION_CREATE", interactionId: id.id, nonce: id.nonce };
  const obj2 = DispatcherDefault;
  const dispatchResult = obj2.dispatch(obj);
  dispatchResult.catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["INTERACTION_SUCCESS"], (id) => {
  const obj = { type: "INTERACTION_SUCCESS", interactionId: id.id, nonce: id.nonce };
  const obj2 = DispatcherDefault;
  const dispatchResult = obj2.dispatch(obj);
  dispatchResult.catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["INTERACTION_FAILURE"], (id) => {
  const obj = { type: "INTERACTION_FAILURE", interactionId: id.id, nonce: id.nonce, reasonCode: id.reason_code };
  const obj2 = DispatcherDefault;
  const dispatchResult = obj2.dispatch(obj);
  dispatchResult.catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["APPLICATION_COMMAND_AUTOCOMPLETE_RESPONSE"], (choices) => {
  const obj = { type: "APPLICATION_COMMAND_AUTOCOMPLETE_RESPONSE", choices: choices.choices, nonce: choices.nonce };
  const obj2 = DispatcherDefault;
  const dispatchResult = obj2.dispatch(obj);
  dispatchResult.catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["INTERACTION_MODAL_CREATE"], (id) => {
  let obj2;
  const obj = { type: "INTERACTION_MODAL_CREATE", id: id.id, channelId: id.channel_id, customId: id.custom_id, application: id.application, title: id.title, components: obj2.transformComponents(id.components), nonce: null, resolved: null };
  ({ nonce: obj.nonce, resolved: obj.resolved } = id);
  obj2 = obj(5114);
  const obj3 = DispatcherDefault;
  const dispatchResult = obj3.dispatch(obj);
  dispatchResult.catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["INTERACTION_IFRAME_MODAL_CREATE"], (id) => {
  const obj = { type: "INTERACTION_IFRAME_MODAL_CREATE", id: id.id, channelId: id.channel_id, customId: id.custom_id, application: id.application, title: id.title, iframePath: id.iframe_path, modalSize: id.modal_size, nonce: id.nonce };
  const obj2 = DispatcherDefault;
  const dispatchResult = obj2.dispatch(obj);
  dispatchResult.catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["STAGE_INSTANCE_CREATE"], (instance) => {
  const obj = { type: "STAGE_INSTANCE_CREATE", instance };
  const obj2 = DispatcherDefault;
  const dispatchResult = obj2.dispatch(obj);
  dispatchResult.catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["STAGE_INSTANCE_UPDATE"], (instance) => {
  const obj = { type: "STAGE_INSTANCE_UPDATE", instance };
  const obj2 = DispatcherDefault;
  const dispatchResult = obj2.dispatch(obj);
  dispatchResult.catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["STAGE_INSTANCE_DELETE"], (instance) => {
  const obj = { type: "STAGE_INSTANCE_DELETE", instance };
  const obj2 = DispatcherDefault;
  const dispatchResult = obj2.dispatch(obj);
  dispatchResult.catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["GUILD_SCHEDULED_EVENT_CREATE"], (guildScheduledEvent) => {
  const obj = { type: "GUILD_SCHEDULED_EVENT_CREATE", guildScheduledEvent };
  const obj2 = DispatcherDefault;
  const dispatchResult = obj2.dispatch(obj);
  dispatchResult.catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["GUILD_SCHEDULED_EVENT_UPDATE"], (guildScheduledEvent) => {
  const obj = { type: "GUILD_SCHEDULED_EVENT_UPDATE", guildScheduledEvent };
  const obj2 = DispatcherDefault;
  const dispatchResult = obj2.dispatch(obj);
  dispatchResult.catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["GUILD_SCHEDULED_EVENT_DELETE"], (guildScheduledEvent) => {
  const obj = { type: "GUILD_SCHEDULED_EVENT_DELETE", guildScheduledEvent };
  const obj2 = DispatcherDefault;
  const dispatchResult = obj2.dispatch(obj);
  dispatchResult.catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE"], (eventException) => {
  const obj = { type: "GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE", eventException };
  const obj2 = DispatcherDefault;
  const dispatchResult = obj2.dispatch(obj);
  dispatchResult.catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE"], (eventException) => {
  const obj = { type: "GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE", eventException };
  const obj2 = DispatcherDefault;
  const dispatchResult = obj2.dispatch(obj);
  dispatchResult.catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE"], (eventException) => {
  const obj = { type: "GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE", eventException };
  const obj2 = DispatcherDefault;
  const dispatchResult = obj2.dispatch(obj);
  dispatchResult.catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["GUILD_SCHEDULED_EVENT_EXCEPTIONS_DELETE"], (eventId) => {
  const obj = { type: "GUILD_SCHEDULED_EVENT_EXCEPTIONS_DELETE", eventId: eventId.event_id };
  const obj2 = DispatcherDefault;
  const dispatchResult = obj2.dispatch(obj);
  dispatchResult.catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["GUILD_SCHEDULED_EVENT_USER_ADD"], (userId) => {
  const obj = { type: "GUILD_SCHEDULED_EVENT_USER_ADD", userId: userId.user_id, guildId: userId.guild_id, guildEventId: userId.guild_scheduled_event_id, guildEventExceptionId: userId.guild_scheduled_event_exception_id, response: userId.response };
  const obj2 = DispatcherDefault;
  const dispatchResult = obj2.dispatch(obj);
  dispatchResult.catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["GUILD_SCHEDULED_EVENT_USER_REMOVE"], (userId) => {
  const obj = { type: "GUILD_SCHEDULED_EVENT_USER_REMOVE", userId: userId.user_id, guildId: userId.guild_id, guildEventId: userId.guild_scheduled_event_id, guildEventExceptionId: userId.guild_scheduled_event_exception_id, response: userId.response };
  const obj2 = DispatcherDefault;
  const dispatchResult = obj2.dispatch(obj);
  dispatchResult.catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["GUILD_DIRECTORY_ENTRY_CREATE"], (channelId) => {
  const obj = { type: "GUILD_DIRECTORY_ENTRY_CREATE", channelId: channelId.directory_channel_id, entry: channelId };
  const obj2 = DispatcherDefault;
  const dispatchResult = obj2.dispatch(obj);
  dispatchResult.catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["GUILD_DIRECTORY_ENTRY_UPDATE"], (channelId) => {
  const obj = { type: "GUILD_DIRECTORY_ENTRY_UPDATE", channelId: channelId.directory_channel_id, entry: channelId };
  const obj2 = DispatcherDefault;
  const dispatchResult = obj2.dispatch(obj);
  dispatchResult.catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["GUILD_DIRECTORY_ENTRY_DELETE"], (channelId) => {
  const obj = { type: "GUILD_DIRECTORY_ENTRY_DELETE", channelId: channelId.directory_channel_id, guildId: channelId.entity_id };
  const obj2 = DispatcherDefault;
  const dispatchResult = obj2.dispatch(obj);
  dispatchResult.catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["AUTO_MODERATION_MENTION_RAID_DETECTION"], (guildId) => {
  const obj = { type: "AUTO_MODERATION_MENTION_RAID_DETECTION", guildId: guildId.guild_id, decisionId: guildId.decision_id, suspiciousMentionActivityUntil: guildId.suspicious_mention_activity_until };
  const obj2 = DispatcherDefault;
  const dispatchResult = obj2.dispatch(obj);
  dispatchResult.catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["AUTO_MODERATION_CONTENT_DELETED"], (guildId) => {
  const obj = { type: "AUTO_MODERATION_CONTENT_DELETED", guildId: guildId.guild_id, channelId: guildId.channel_id, notice: guildId.notice, message: guildId.message, thread: guildId.thread };
  const obj2 = DispatcherDefault;
  const dispatchResult = obj2.dispatch(obj);
  dispatchResult.catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["VOICE_CHANNEL_EFFECT_SEND"], (emoji) => {
  const obj = { type: "VOICE_CHANNEL_EFFECT_SEND", emoji: emoji.emoji, channelId: emoji.channel_id, userId: emoji.user_id, animationType: emoji.animation_type, animationId: emoji.animation_id, soundId: emoji.sound_id, soundVolume: emoji.sound_volume, soundName: emoji.name, sourceGuildId: emoji.source_guild_id, isEcho: emoji.is_echo, authorId: emoji.author_id };
  const obj2 = DispatcherDefault;
  const dispatchResult = obj2.dispatch(obj);
  dispatchResult.catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["CLIPS_REMOTE_TRIGGER"], (userId) => {
  let party_id;
  const obj = { type: "CLIPS_REMOTE_TRIGGER", userId: userId.user_id, applicationId: userId.application_id, partyId: party_id, remoteClipId: userId.remote_clip_id };
  party_id = userId.party_id;
  if (party_id == null) {
    party_id = null;
  }
  const obj2 = DispatcherDefault;
  const dispatchResult = obj2.dispatch(obj);
  dispatchResult.catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["GUILD_SOUNDBOARD_SOUND_CREATE"], (guildId) => {
  let obj4;
  const obj = { type: "GUILD_SOUNDBOARD_SOUND_CREATE", sound: obj4 };
  ({ user_id: obj2.userId, volume: obj2.volume, emoji_id: obj2.emojiId, emoji_name: obj2.emojiName, available: obj2.available } = guildId);
  obj4 = { guildId: guildId.guild_id, name: guildId.name, soundId: guildId.sound_id, user: new UserRecord(guildId.user), userId: null, volume: null, emojiId: null, emojiName: null, available: null };
  new UserRecord(guildId.user);
  const obj3 = DispatcherDefault;
  const dispatchResult = obj3.dispatch(obj);
  dispatchResult.catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["GUILD_SOUNDBOARD_SOUND_UPDATE"], (guildId) => {
  let obj4;
  const obj = { type: "GUILD_SOUNDBOARD_SOUND_UPDATE", sound: obj4 };
  ({ user_id: obj2.userId, volume: obj2.volume, emoji_id: obj2.emojiId, emoji_name: obj2.emojiName, available: obj2.available } = guildId);
  obj4 = { guildId: guildId.guild_id, name: guildId.name, soundId: guildId.sound_id, user: new UserRecord(guildId.user), userId: null, volume: null, emojiId: null, emojiName: null, available: null };
  new UserRecord(guildId.user);
  const obj3 = DispatcherDefault;
  const dispatchResult = obj3.dispatch(obj);
  dispatchResult.catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["GUILD_SOUNDBOARD_SOUND_DELETE"], (guildId) => {
  const obj = { type: "GUILD_SOUNDBOARD_SOUND_DELETE", guildId: guildId.guild_id, soundId: guildId.sound_id };
  const obj2 = DispatcherDefault;
  const dispatchResult = obj2.dispatch(obj);
  dispatchResult.catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["GUILD_SOUNDBOARD_SOUNDS_UPDATE"], (guildId) => {
  let soundboard_sounds;
  let closure_0 = guildId;
  const obj = { type: "GUILD_SOUNDBOARD_SOUNDS_UPDATE", guildId: guildId.guild_id, soundboardSounds: soundboard_sounds.map((name) => ({ name: name.name, soundId: name.sound_id, emojiName: name.emoji_name, emojiId: name.emoji_id, userId: name.user_id, volume: name.volume, available: name.available, guildId: guild_id.guild_id })) };
  soundboard_sounds = guildId.soundboard_sounds;
  const obj2 = DispatcherDefault;
  const dispatchResult = obj2.dispatch(obj);
  dispatchResult.catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
const result16 = definePreloadableDispatch(["EMBEDDED_ACTIVITY_UPDATE_V2"], (guild_id) => {
  const items = [guild_id.guild_id];
  return ChannelLoader.loadGuildIds(items);
}, (application_id) => {
  let participants;
  const obj = { application_id: application_id.application_id, launch_id: application_id.launch_id, composite_instance_id: application_id.composite_instance_id, location: application_id.location, participants, content_classification: application_id.content_classification };
  participants = application_id.participants;
  if (participants == null) {
    participants = [];
  }
  const obj2 = { type: "EMBEDDED_ACTIVITY_UPDATE_V2", instance: obj };
  const obj3 = DispatcherDefault;
  const dispatchResult = obj3.dispatch(obj2);
  dispatchResult.catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["AUTH_SESSION_CHANGE"], (authSessionIdHash) => {
  const obj = { type: "AUTH_SESSION_CHANGE", authSessionIdHash: authSessionIdHash.auth_session_id_hash };
  const obj2 = DispatcherDefault;
  const dispatchResult = obj2.dispatch(obj);
  dispatchResult.catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["USER_CONNECTIONS_LINK_CALLBACK"], (provider) => {
  const obj = { type: "USER_CONNECTIONS_LINK_CALLBACK", provider: provider.provider, callbackCode: provider.callback_code, callbackState: provider.callback_state };
  const obj2 = DispatcherDefault;
  const dispatchResult = obj2.dispatch(obj);
  dispatchResult.catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["USER_CONNECTIONS_CALLBACK"], (provider) => {
  const obj = { type: "USER_CONNECTIONS_CALLBACK", provider: provider.provider, code: provider.code, state: provider.state, openid_params: provider.openid_params };
  const obj2 = DispatcherDefault;
  const dispatchResult = obj2.dispatch(obj);
  dispatchResult.catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["DELETED_ENTITY_IDS"], (arg0) => {
  const obj = { type: "DELETED_ENTITY_IDS" };
  const merged = Object.assign(arg0);
  const obj2 = DispatcherDefault;
  const dispatchResult = obj2.dispatch(obj);
  dispatchResult.catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
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
  const obj2 = DispatcherDefault;
  const dispatchResult = obj2.dispatch(obj);
  dispatchResult.catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["CONSOLE_COMMAND_UPDATE"], (id) => {
  const obj = { type: "CONSOLE_COMMAND_UPDATE", id: id.id, result: id.result, error: id.error };
  const obj2 = DispatcherDefault;
  const dispatchResult = obj2.dispatch(obj);
  dispatchResult.catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
const result18 = definePreloadableDispatch(["PASSIVE_UPDATE_V2"], (guild_id) => {
  const items = [guild_id.guild_id];
  return ChannelLoader.loadGuildIds(items);
}, (guildId) => {
  let updated_channels;
  let updated_voice_states;
  let obj = {
    type: "PASSIVE_UPDATE_V2",
    guildId: guildId.guild_id,
    members: guildId.updated_members,
    channels: updated_channels.map((id) => ({ id: id.id, lastMessageId: id.last_message_id, lastPinTimestamp: id.last_pin_timestamp })),
    voiceStates: updated_voice_states.map((channelId) => {
      let discoverable;
      let prop;
      obj = { channelId: channelId.channel_id, deaf: channelId.deaf || false, mute: channelId.mute || false, requestToSpeakTimestamp: prop, selfDeaf: channelId.self_deaf || false, selfMute: channelId.self_mute || false, selfStream: channelId.self_stream || false, selfVideo: channelId.self_video || false, sessionId: null, suppress: null, userId: null, discoverable, connectedAt: channelId.connected_at };
      prop = channelId.request_to_speak_timestamp;
      if (prop == null) {
        prop = null;
      }
      ({ session_id: obj.sessionId, suppress: obj.suppress, user_id: obj.userId, discoverable } = channelId);
      if (discoverable == null) {
        discoverable = true;
      }
      return obj;
    }),
    removedVoiceStateUsers: guildId.removed_voice_states
  };
  updated_channels = guildId.updated_channels;
  updated_voice_states = guildId.updated_voice_states;
  const obj2 = DispatcherDefault;
  const dispatchResult = obj2.dispatch(obj);
  dispatchResult.catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["CREATOR_MONETIZATION_RESTRICTIONS_UPDATE"], (guildId) => {
  const obj = { type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS", guildId: guildId.guild_id, restrictions: guildId.restrictions };
  const obj2 = DispatcherDefault;
  const dispatchResult = obj2.dispatch(obj);
  dispatchResult.catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["BILLING_REFERRAL_TRIAL_OFFER_UPDATE"], (userTrialOfferId) => {
  const obj = { type: "BILLING_REFERRAL_TRIAL_OFFER_UPDATE", userTrialOfferId: userTrialOfferId.user_trial_offer_id, recipientId: userTrialOfferId.recipient_id };
  const obj2 = DispatcherDefault;
  const dispatchResult = obj2.dispatch(obj);
  dispatchResult.catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["LAST_MESSAGES"], (guildId) => {
  const obj = { type: "MESSAGE_PREVIEWS_LOADED", guildId: guildId.guild_id, messages: guildId.messages };
  const obj2 = DispatcherDefault;
  const dispatchResult = obj2.dispatch(obj);
  dispatchResult.catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["AUTHENTICATOR_UPDATE"], (credential) => {
  const obj = { type: "AUTHENTICATOR_UPDATE", credential };
  const obj2 = DispatcherDefault;
  const dispatchResult = obj2.dispatch(obj);
  dispatchResult.catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["AUTHENTICATOR_CREATE"], (credential) => {
  const obj = { type: "AUTHENTICATOR_CREATE", credential };
  const obj2 = DispatcherDefault;
  const dispatchResult = obj2.dispatch(obj);
  dispatchResult.catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["AUTHENTICATOR_DELETE"], (credential) => {
  const obj = { type: "AUTHENTICATOR_DELETE", credential };
  const obj2 = DispatcherDefault;
  const dispatchResult = obj2.dispatch(obj);
  dispatchResult.catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["NOTIFICATION_SETTINGS_UPDATE"], (flags) => {
  let obj2;
  let prop;
  if (flags != null) {
    prop = flags.declarative_settings_proto;
  }
  let result;
  if (null != prop) {
    const obj = obj2(13490);
    result = obj.b64ToDeclarativeSettingsProto(flags.declarative_settings_proto);
  }
  obj2 = { type: "NOTIFICATION_SETTINGS_UPDATE", settings: { flags: flags.flags, declarativeSettings: result } };
  const obj3 = DispatcherDefault;
  const dispatchResult = obj3.dispatch(obj2);
  dispatchResult.catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["CONVERSATION_SUMMARY_UPDATE"], (arg0) => {
  const obj = { type: "CONVERSATION_SUMMARY_UPDATE" };
  const merged = Object.assign(arg0);
  const obj2 = DispatcherDefault;
  const dispatchResult = obj2.dispatch(obj);
  dispatchResult.catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["PREMIUM_MARKETING_PREVIEW"], (data) => {
  const obj = { type: "PREMIUM_MARKETING_PREVIEW", data };
  const obj2 = DispatcherDefault;
  const dispatchResult = obj2.dispatch(obj);
  dispatchResult.catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["USER_APPLICATION_UPDATE"], (applicationId) => {
  const obj = { type: "USER_APPLICATION_UPDATE", applicationId: applicationId.application_id };
  const obj2 = DispatcherDefault;
  const dispatchResult = obj2.dispatch(obj);
  dispatchResult.catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["USER_APPLICATION_REMOVE"], (applicationId) => {
  const obj = { type: "USER_APPLICATION_REMOVE", applicationId: applicationId.application_id };
  const obj2 = DispatcherDefault;
  const dispatchResult = obj2.dispatch(obj);
  dispatchResult.catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["DM_SETTINGS_UPSELL_SHOW"], (guildId) => {
  const obj = { type: "DM_SETTINGS_UPSELL_SHOW", guildId: guildId.guild_id };
  const obj2 = DispatcherDefault;
  const dispatchResult = obj2.dispatch(obj);
  dispatchResult.catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["CONTENT_INVENTORY_INBOX_STALE"], (refreshAfterMs) => {
  const obj = { type: "CONTENT_INVENTORY_INBOX_STALE", refreshAfterMs: refreshAfterMs.refresh_after_ms };
  const obj2 = DispatcherDefault;
  const dispatchResult = obj2.dispatch(obj);
  dispatchResult.catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["VIRTUAL_CURRENCY_BALANCE_UPDATE"], (balance) => {
  const obj = { type: "VIRTUAL_CURRENCY_BALANCE_UPDATE", balance: balance.balance, totalRedeemed: balance.total_redeemed };
  const obj2 = DispatcherDefault;
  const dispatchResult = obj2.dispatch(obj);
  dispatchResult.catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["USER_DISCORD_ACHIEVEMENT_STATE_UPDATE"], (payload) => {
  const action = { type: "USER_DISCORD_ACHIEVEMENT_STATE_UPDATE", payload };
  const obj2 = DispatcherDefault;
  const dispatchResult = obj2.dispatch(action);
  dispatchResult.catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["WALLET_BALANCE_UPDATE"], (paymentSourceId) => {
  const obj = { type: "WALLET_BALANCE_UPDATE", paymentSourceId: paymentSourceId.payment_source_id, balance: paymentSourceId.balance, currency: paymentSourceId.currency };
  const obj2 = DispatcherDefault;
  const dispatchResult = obj2.dispatch(obj);
  dispatchResult.catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["GUILD_POWERUP_ENTITLEMENTS_CREATE", "GUILD_POWERUP_ENTITLEMENTS_DELETE"], (guildId, type) => {
  const obj = { type, guildId: guildId.guild_id, entitlements: guildId.entitlements };
  const obj2 = DispatcherDefault;
  const dispatchResult = obj2.dispatch(obj);
  dispatchResult.catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["GAME_SERVER_CREATE", "GAME_SERVER_UPDATE"], (guildId, type) => {
  const obj = { type, guildId: guildId.guild_id, gameServer: guildId.game_server };
  const obj2 = DispatcherDefault;
  const dispatchResult = obj2.dispatch(obj);
  dispatchResult.catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["GAME_SERVER_DELETE"], (guildId, type) => {
  const obj = { type, guildId: guildId.guild_id, gameServerId: guildId.game_server_id };
  const obj2 = DispatcherDefault;
  const dispatchResult = obj2.dispatch(obj);
  dispatchResult.catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["GUILD_APPLIED_BOOSTS_UPDATE"], (guildId, type) => {
  const obj = { type, guildId: guildId.guild_id };
  const obj2 = DispatcherDefault;
  const dispatchResult = obj2.dispatch(obj);
  dispatchResult.catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["USER_APPLICATION_IDENTITY_UPDATE"], (user_id, type) => {
  const obj = { type, user_id: user_id.user_id, application_id: user_id.application_id, username: user_id.username, avatar_hash: user_id.avatar_hash, metadata: user_id.metadata };
  const obj2 = DispatcherDefault;
  const dispatchResult = obj2.dispatch(obj);
  dispatchResult.catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["USER_APPLICATION_IDENTITY_REMOVE"], (user_id, type) => {
  const obj = { type, user_id: user_id.user_id, application_id: user_id.application_id };
  const obj2 = DispatcherDefault;
  const dispatchResult = obj2.dispatch(obj);
  dispatchResult.catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_RESPONSE"], (interactionId) => {
  const obj = { type: "SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_RESPONSE", interactionId: interactionId.interaction_id, applicationId: interactionId.application_id, skuId: interactionId.sku_id, recipientId: interactionId.recipient_id, eligible: interactionId.eligible, ineligibleReason: interactionId.ineligible_reason };
  const obj2 = DispatcherDefault;
  const dispatchResult = obj2.dispatch(obj);
  dispatchResult.catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["GUILD_ROOM_CONNECT"], (body, type) => {
  let obj2;
  const obj = { type, room: obj2.serverGuildRoomToClient(body) };
  obj2 = obj(5051);
  const obj3 = DispatcherDefault;
  const dispatchResult = obj3.dispatch(obj);
  dispatchResult.catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["GUILD_ROOM_DISCONNECT"], (userId, type) => {
  const obj = { type, userId: userId.user_id, roomId: userId.room_id };
  const obj2 = DispatcherDefault;
  const dispatchResult = obj2.dispatch(obj);
  dispatchResult.catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["GUILD_ROOM_UPDATE"], (body, type) => {
  let obj2;
  const obj = { type, room: obj2.serverGuildRoomToClient(body) };
  obj2 = obj(5051);
  const obj3 = DispatcherDefault;
  const dispatchResult = obj3.dispatch(obj);
  dispatchResult.catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["GUILD_OFFICIAL_GAME_APPLICATIONS_UPDATE"], (gameApplicationIds, type) => {
  const obj = { type, gameApplicationIds: gameApplicationIds.game_application_ids, guildId: gameApplicationIds.guild_id };
  const obj2 = DispatcherDefault;
  const dispatchResult = obj2.dispatch(obj);
  dispatchResult.catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["MESSAGE_REQUEST_NOTIFICATION_SENT"], (triggeringUserId) => {
  const obj = { type: "MESSAGE_REQUEST_NOTIFICATION_SENT", triggeringUserId: triggeringUserId.triggering_user_id, numMutualGuilds: triggeringUserId.num_mutual_guilds };
  const obj2 = DispatcherDefault;
  const dispatchResult = obj2.dispatch(obj);
  dispatchResult.catch((error) => {
    logger.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = initialPrivateChannels(geoRestrictedGuilds[13]).socket;
    obj = { error, action: obj.type };
    result = socket.resetSocketOnDispatchError(obj);
  });
});
const result19 = size.fileFinishedImporting("modules/gateway/dispatchSocketMessage.tsx");

export default function getDispatchHandler(type) {
  return closure_22[type];
};