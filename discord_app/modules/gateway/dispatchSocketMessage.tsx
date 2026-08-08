// discord_app/modules/gateway/dispatchSocketMessage.tsx
import _objectWithoutProperties from "_objectWithoutProperties";
import { createChannelRecordFromServer as closure_6 } from "createChannelRecord";
import createFromServer from "createFromServer";
import createdAt from "createdAt";
import ensureGuildLoaded from "ensureGuildLoaded";
import { ChannelLoader } from "ensureGuildLoaded";
import trackCommunicationDisabled from "trackCommunicationDisabled";
import mergeGuildAvatar from "mergeGuildAvatar";
import updateVoiceState from "updateVoiceState";
import addSubscriptionPlan from "addSubscriptionPlan";
import reset from "reset";
import { ActivityTypes } from "ME";
import importDefaultResult from "flush";
import importDefaultResult1 from "flush";
import importDefaultResult2 from "flush";
import importDefaultResult3 from "flush";
import { apply } from "../../../_runtime/00012_apply.js";
import { initialize } from "../../../discord_common/js/packages/flux/index.tsx";
import { dispatcher } from "../../Dispatcher.tsx";
import { getPurchaseToken } from "../../utils/PurchaseTokenUtils.tsx";
import { urlUserId } from "../badges/BadgeDirectoryActionCreators.tsx";
import { _deletePaymentSource } from "../billing/actions/BillingActionCreators.tsx";
import { splitAgeRestrictedActivities } from "../presence/splitAgeRestrictedActivities.tsx";
import { convertServerThreadMember } from "../threads/convertServerThreadMember.tsx";
import { serialize } from "../tti_analytics/TTITracker.tsx";

const require = arg1;
function defineSimpleDispatch(arg0, arg1) {
  while (tmp !== undefined) {
    let tmp3 = closure_22;
    let obj = { preload: null, dispatch: null };
    obj[0] = function preload() {
      return null;
    };
    obj[1] = arg1;
    closure_22[tmp2] = obj;
    continue;
  }
}
function definePreloadableDispatch(arg0, arg1, arg2) {
  while (tmp !== undefined) {
    let tmp3 = closure_22;
    let obj = { preload: null, dispatch: null };
    obj[0] = arg1;
    obj[1] = arg2;
    closure_22[tmp2] = obj;
    continue;
  }
}
function dispatchVoiceStateUpdates(items) {
  let self_video;
  items = [];
  const iter = items[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp2 = nextResult;
    if (null != nextResult.member) {
      let tmp3 = dispatchGuildMemberAdd;
      let tmp4 = nextResult;
      let tmp5 = dispatchGuildMemberAdd(tmp2.guild_id, tmp2.member.user, tmp2.member);
    }
    let obj = { userId: null, guildId: null, sessionId: null, channelId: null, mute: null, deaf: null, selfMute: null, selfDeaf: null, selfVideo: null, suppress: null, selfStream: null, requestToSpeakTimestamp: null, discoverable: null, oldChannelId: null, connectedAt: null };
    let tmp6 = nextResult;
    ({ user_id: obj[0], guild_id: obj[1], session_id: obj[2], channel_id: obj[3], mute: obj[4], deaf: obj[5], self_mute: obj[6], self_deaf: obj[7], self_video } = tmp2);
    if (!self_video) {
      self_video = false;
    }
    obj[8] = self_video;
    let tmp7 = nextResult;
    obj[9] = tmp2.suppress;
    obj[10] = tmp2.self_stream || false;
    let tmp8 = nextResult;
    let prop = tmp2.request_to_speak_timestamp;
    if (prop == null) {
      prop = null;
    }
    obj[11] = prop;
    let tmp10 = nextResult;
    let flag = tmp2.discoverable;
    if (flag == null) {
      flag = true;
    }
    obj[12] = flag;
    let tmp11 = userVoiceChannelId;
    let tmp12 = nextResult;
    obj[13] = userVoiceChannelId.getUserVoiceChannelId(tmp2.guild_id, tmp2.user_id);
    obj[14] = tmp2.connected_at;
    let arr = items.push(obj);
    continue;
  }
  dispatchOrResetSocket({ type: "VOICE_STATE_UPDATES", voiceStates: items });
}
function dispatchOrResetSocket(arg0) {
  let closure_0 = arg0;
  const obj = dispatcher;
  dispatcher.dispatch(arg0).catch((error) => {
    outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(outer1_3[13]).socket;
    obj = { error, action: obj.type };
    const result = socket.resetSocketOnDispatchError(obj);
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
  let nick;
  let pending;
  let premium_since;
  let roles;
  let unusual_dm_activity_until;
  ({ roles, nick, avatar, avatar_decoration_data, flags, premium_since, pending, joined_at, communication_disabled_until, unusual_dm_activity_until } = member);
  ({ collectibles, display_name_styles } = member);
  member = member.getMember(guild_id, author.id);
  obj = obj(1881);
  const result = obj.parseServerUserCollectibles(collectibles);
  const result1 = obj(1914).parseServerDisplayNameStyles(display_name_styles);
  let isEqualResult = null != member && member.nick === nick && member.avatar === avatar;
  if (isEqualResult) {
    isEqualResult = apply.isEqual(member.roles, roles);
    const obj3 = apply;
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
    isEqualResult = obj(1880).isEqualAvatarDecoration(avatarDecoration, tmp9);
    const tmp2Result = obj(1880);
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
    isEqualResult = apply.isEqual(collectibles, tmp14);
    const obj5 = apply;
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
    isEqualResult = apply.isEqual(displayNameStyles, tmp17);
    const obj6 = apply;
  }
  if (!isEqualResult) {
    obj = { type: "GUILD_MEMBER_ADD", guildId: null, user: null, roles: null, nick: null, avatar: null, avatarDecoration: null, premiumSince: null, isPending: null, joinedAt: null, communicationDisabledUntil: null, unusualDMActivityUntil: null, flags: null, collectibles: null, displayNameStyles: null };
    obj[1] = guild_id;
    obj[2] = author;
    obj[3] = roles;
    obj[4] = nick;
    obj[5] = avatar;
    obj[6] = avatar_decoration_data;
    obj[7] = premium_since;
    obj[8] = pending;
    obj[9] = joined_at;
    obj[10] = communication_disabled_until;
    obj[11] = unusual_dm_activity_until;
    obj[12] = flags;
    obj[13] = result;
    obj[14] = result1;
    const obj8 = dispatcher;
    dispatcher.dispatch(obj).catch((error) => {
      outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
      const socket = obj(outer1_3[13]).socket;
      obj = { error, action: obj.type };
      const result = socket.resetSocketOnDispatchError(obj);
    });
    const dispatchResult = dispatcher.dispatch(obj);
  }
}
function dispatchPresence(arg0) {
  importDefaultResult3.add(arg0);
}
let closure_4 = ["newly_created"];
let closure_17 = new require("createdAt")("ConnectionStore");
importDefaultResult = new importDefaultResult(require("handleIdentify").socket, (arg0, id) => {
  let tmp = arg0;
  if (arg0 == null) {
    let obj = { type: "CHANNEL_UPDATES", channels: null };
    obj[1] = [];
    tmp = obj;
  }
  const tmp2 = callback2(id);
  const channel = store.getChannel(id.id);
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
importDefaultResult1 = new importDefaultResult1(require("handleIdentify").socket, (arg0, guildId) => {
  let tmp = arg0;
  let closure_0 = guildId;
  if (null == arg0) {
    let obj = { type: "SOUNDBOARD_SOUNDS_RECEIVED", updates: null };
    obj[1] = [];
    tmp = obj;
  }
  const updates = tmp.updates;
  obj = { guildId: guildId.guild_id, sounds: soundboard_sounds.map((name) => ({ name: name.name, soundId: name.sound_id, emojiName: name.emoji_name, emojiId: name.emoji_id, userId: name.user_id, volume: name.volume, available: name.available, guildId: guildId.guild_id })) };
  soundboard_sounds = guildId.soundboard_sounds;
  updates.push(obj);
  return tmp;
}, (arg0) => "SOUNDBOARD_SOUNDS" !== arg0);
importDefaultResult2 = new importDefaultResult2(require("handleIdentify").socket, (arg0, arg1) => {
  let tmp = arg0;
  if (arg0 == null) {
    const obj = { type: "GUILD_MEMBERS_CHUNK_BATCH", chunks: null };
    obj[1] = [];
    tmp = obj;
  }
  const chunks = tmp.chunks;
  chunks.push(arg1);
  return tmp;
}, (arg0) => "GUILD_MEMBERS_CHUNK" !== arg0);
importDefaultResult3 = new importDefaultResult3(require("handleIdentify").socket, (arg0, arg1) => {
  let tmp = arg0;
  if (null == arg0) {
    const obj = { type: "PRESENCE_UPDATES", updates: null };
    obj[1] = [];
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
  let closure_0 = arg0;
  const initialGuild = serialize.initialGuild;
  initialGuild.measure(() => {
    const Emitter = outer1_1(outer1_3[15]).Emitter;
    Emitter.batched(() => {
      let obj = outer1_2(outer1_3[16]);
      const hydrateInitialGuildResult = obj.hydrateInitialGuild(obj, outer1_0(outer1_3[13]).socket.identifyStartTime);
      obj = hydrateInitialGuildResult;
      if (null != outer1_12.getCurrentUser()) {
        obj = { type: "GUILD_CREATE", guild: null };
        obj[1] = hydrateInitialGuildResult;
        const obj3 = outer1_1(tmp[20]);
        outer1_1(tmp[20]).dispatch(obj).catch((error) => {
          outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
          const socket = obj(outer1_3[13]).socket;
          obj = { error, action: obj.type };
          const result = socket.resetSocketOnDispatchError(obj);
        });
        obj = { type: "VOICE_STATE_UPDATES", voiceStates: null };
        const voice_states = hydrateInitialGuildResult.voice_states;
        obj[1] = voice_states.map((userId) => {
          obj = { userId: userId.user_id, guildId: obj.id, sessionId: userId.session_id, channelId: userId.channel_id, mute: userId.mute, deaf: userId.deaf, selfMute: userId.self_mute, selfDeaf: userId.self_deaf, selfVideo: tmp, suppress: userId.suppress, selfStream: tmp2, requestToSpeakTimestamp: null, discoverable: null, connectedAt: null };
          let prop = userId.request_to_speak_timestamp;
          if (prop == null) {
            prop = null;
          }
          obj[11] = prop;
          let flag = userId.discoverable;
          if (flag == null) {
            flag = true;
          }
          obj[12] = flag;
          obj[13] = userId.connected_at;
          return obj;
        });
        const dispatchResult = outer1_1(tmp[20]).dispatch(obj);
        const obj5 = outer1_1(tmp[20]);
        outer1_1(tmp[20]).dispatch(obj).catch((error) => {
          outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
          const socket = obj(outer1_3[13]).socket;
          obj = { error, action: obj.type };
          const result = socket.resetSocketOnDispatchError(obj);
        });
        const _HermesInternal = HermesInternal;
        outer1_17.log("Dispatched INITIAL_GUILD " + obj.id);
        const dispatchResult1 = outer1_1(tmp[20]).dispatch(obj);
      }
    });
  });
});
defineSimpleDispatch(["READY_SUPPLEMENTAL"], (arg0) => {
  let closure_0 = arg0;
  const readySupplemental = serialize.readySupplemental;
  readySupplemental.measure(() => {
    const Emitter = outer1_1(outer1_3[15]).Emitter;
    Emitter.batched(() => {
      const hydrateReadySupplemental = outer1_1(outer1_3[14]).hydrateReadySupplemental;
      const measureResult = hydrateReadySupplemental.measure(() => {
        const obj = callback(items[16]);
        return obj.hydrateReadySupplementalPayload(obj, obj(items[13]).socket.identifyStartTime);
      });
      let obj = measureResult;
      const guilds = measureResult.guilds;
      const found = guilds.filter((unavailable) => true !== unavailable.unavailable);
      obj = found;
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
          const tmp2Result = outer1_1(outer1_3[37])(activities, hidden_activities);
          const tmp = id;
          const tmp2 = outer1_1(outer1_3[37]);
          const activities1 = tmp2Result.activities;
          return { user: activities.user, status: activities.status, clientStatus: activities.client_status, activities: activities1.map(() => { ... }), hiddenActivities: tmp2Result.hiddenActivities, guildId: id, processedAtTimestamp: activities.processed_at_timestamp };
        });
      });
      let presences = obj.presences;
      if (presences == null) {
        presences = [];
      }
      let closure_1 = presences.map((activities) => {
        activities = activities.activities;
        if (activities == null) {
          activities = [];
        }
        let hidden_activities = activities.hidden_activities;
        if (hidden_activities == null) {
          hidden_activities = [];
        }
        const tmp2Result = outer1_1(outer1_3[37])(activities, hidden_activities);
        const tmp = id;
        const tmp2 = outer1_1(outer1_3[37]);
        const activities1 = tmp2Result.activities;
        return {
          user: activities.user,
          status: activities.status,
          clientStatus: activities.client_status,
          activities: activities1.map((timestamps) => {
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
                let obj = {};
                const merged = Object.assign(timestamps);
                obj = {};
                const merged1 = Object.assign(timestamps.timestamps);
                let tmp8 = end > created_at;
                if (tmp8) {
                  tmp8 = timestamps.type !== constants.LISTENING;
                }
                obj.isCountDown = tmp8;
                obj.timestamps = obj;
                tmp2 = obj;
              }
            }
            return tmp2;
          }),
          hiddenActivities: tmp2Result.hiddenActivities,
          guildId: id,
          processedAtTimestamp: activities.processed_at_timestamp
        };
      });
      let prop = obj.lazy_private_channels;
      if (prop == null) {
        prop = [];
      }
      let closure_2 = prop.map((arg0) => callback2(arg0));
      const dispatchReadySupplemental = tmp(tmp2[14]).dispatchReadySupplemental;
      dispatchReadySupplemental.measure(() => {
        obj = { type: "CONNECTION_OPEN_SUPPLEMENTAL", guilds: obj, presences: closure_1, lazyPrivateChannels: closure_2 };
        const obj2 = outer2_1(outer2_3[20]);
        outer2_1(outer2_3[20]).dispatch(obj).catch((error) => {
          outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
          const socket = obj(outer1_3[13]).socket;
          obj = { error, action: obj.type };
          const result = socket.resetSocketOnDispatchError(obj);
        });
      });
      const items = [];
      const item1 = found.forEach((voice_states) => {
        let closure_0 = voice_states;
        voice_states = voice_states.voice_states;
        const item = voice_states.forEach((userId) => {
          const obj = { userId: userId.user_id, guildId: voice_states.id, sessionId: userId.session_id, channelId: userId.channel_id, mute: userId.mute, deaf: userId.deaf, selfMute: userId.self_mute, selfDeaf: userId.self_deaf, selfVideo: null, suppress: null, selfStream: null, requestToSpeakTimestamp: null, discoverable: null, connectedAt: null };
          let flag = userId.self_video;
          if (!flag) {
            flag = false;
          }
          obj[8] = flag;
          obj[9] = userId.suppress;
          obj[10] = userId.self_stream || false;
          let prop = userId.request_to_speak_timestamp;
          if (prop == null) {
            prop = null;
          }
          obj[11] = prop;
          let flag2 = userId.discoverable;
          if (flag2 == null) {
            flag2 = true;
          }
          obj[12] = flag2;
          obj[13] = userId.connected_at;
          outer1_3.push(obj);
        });
      });
      obj = { type: "VOICE_STATE_UPDATES", voiceStates: items, initial: true };
      const tmpResult = outer1_1(outer1_3[20]);
      outer1_1(outer1_3[20]).dispatch(obj).catch((error) => {
        outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
        const socket = obj(outer1_3[13]).socket;
        obj = { error, action: obj.type };
        const result = socket.resetSocketOnDispatchError(obj);
      });
      const localVoiceState = outer1_0(tmp2[13]).localVoiceState;
      localVoiceState.update();
    });
  });
  const timerId = setTimeout(() => {
    const obj = { type: "POST_CONNECTION_OPEN" };
    const obj2 = callback(table[20]);
    callback(table[20]).dispatch(obj).catch((error) => {
      outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
      const socket = obj(outer1_3[13]).socket;
      obj = { error, action: obj.type };
      const result = socket.resetSocketOnDispatchError(obj);
    });
  }, 2000);
});
let result1 = definePreloadableDispatch(["READY"], (guilds) => {
  guilds = guilds.guilds;
  const result = importAll(12945).preloadReadyPayloadData();
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
  const obj = importAll(12945);
  return Promise.all(items).then((arg0) => {
    let tmp;
    [tmp] = arg0;
    return tmp;
  });
}, (user) => {
  let obj = user;
  const importDefault = arg2;
  if (user.user.bot) {
    obj = { type: "LOGOUT" };
    const obj2 = dispatcher;
    dispatcher.dispatch(obj).catch((error) => {
      outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
      const socket = obj(outer1_3[13]).socket;
      obj = { error, action: obj.type };
      const result = socket.resetSocketOnDispatchError(obj);
    });
    let dispatchResult = dispatcher.dispatch(obj);
  } else {
    const ready = serialize.ready;
    ready.measure(() => {
      const Emitter = callback(outer1_3[15]).Emitter;
      Emitter.batched(() => {
        const hydrateReady = outer1_1(outer1_3[14]).hydrateReady;
        const measureResult = hydrateReady.measure(() => {
          const obj = callback(12945);
          return obj.hydrateReadyPayloadPrioritized(obj, obj(12900).socket.identifyStartTime, closure_1);
        });
        let obj = measureResult;
        const private_channels = measureResult.private_channels;
        obj = private_channels.map((arg0) => callback2(arg0));
        const guilds = obj.guilds;
        const found = guilds.filter((unavailable) => true === unavailable.unavailable && true !== unavailable.geo_restricted);
        let closure_1 = found.map((id) => id.id);
        const guilds1 = obj.guilds;
        let closure_2 = guilds1.filter((unavailable) => true !== unavailable.unavailable);
        const guilds2 = obj.guilds;
        let closure_3 = guilds2.filter((geo_restricted) => true === geo_restricted.geo_restricted);
        let result;
        if (null != obj.user_settings_proto) {
          obj = outer1_0(tmp2[17]);
          result = obj.b64ToPreloadedUserSettingsProto(obj.user_settings_proto);
        }
        let closure_4 = result;
        outer1_1(outer1_3[18])("AllGatewayConnectionStores", () => obj(12946));
        const dispatchReady = tmp(tmp2[14]).dispatchReady;
        dispatchReady.measure(() => {
          obj = { type: "CONNECTION_OPEN", sessionId: obj.session_id, authSessionIdHash: obj.auth_session_id_hash, staticAuthSessionId: obj.static_client_session_id, user: obj.user, users: obj.users, guilds: closure_2, initialPrivateChannels: obj, unavailableGuilds: closure_1, readState: obj.read_state, userGuildSettings: obj.user_guild_settings, tutorial: obj.tutorial, relationships: null, gameRelationships: null, friendSuggestionCount: null, analyticsToken: null, experiments: null, connectedAccounts: null, guildExperiments: null, apexExperiments: null, requiredAction: null, consents: null, sessions: null, pendingPayments: null, countryCode: null, guildJoinRequests: null, userSettingsProto: null, apiCodeVersion: null, auth: null, notificationSettings: null, geoRestrictedGuilds: null, explicitContentScanVersion: null, failedStates: null, linkedUsers: null, regionalFeatureConfig: null };
          let relationships = obj.relationships;
          if (relationships == null) {
            relationships = [];
          }
          obj[12] = relationships;
          obj[13] = obj.game_relationships;
          obj[14] = obj.friend_suggestion_count;
          obj[15] = obj.analytics_token;
          obj[16] = obj.experiments;
          obj[17] = obj.connected_accounts;
          obj[18] = obj.guild_experiments;
          const apex_experiments = obj.apex_experiments;
          obj[19] = apex_experiments;
          obj[20] = obj.required_action;
          obj[21] = obj.consents;
          let sessions = obj.sessions;
          if (sessions == null) {
            sessions = [];
          }
          obj[22] = sessions.map((sessionId) => {
            const obj = { sessionId: sessionId.session_id, lastModified: sessionId.last_modified, status: sessionId.status, activities: null, hiddenActivities: null, active: null, clientInfo: null };
            let activities = sessionId.activities;
            if (activities == null) {
              activities = [];
            }
            obj[3] = activities.map(() => { ... });
            let hidden_activities = sessionId.hidden_activities;
            if (hidden_activities == null) {
              hidden_activities = [];
            }
            obj[4] = hidden_activities;
            obj[5] = sessionId.active;
            obj[6] = sessionId.client_info;
            return obj;
          });
          obj[23] = obj.pending_payments;
          const country_code = obj.country_code;
          obj[24] = country_code;
          let guild_join_requests = obj.guild_join_requests;
          if (guild_join_requests == null) {
            guild_join_requests = [];
          }
          obj[25] = guild_join_requests;
          obj[26] = closure_4;
          obj[27] = obj.api_code_version;
          obj[28] = obj.auth;
          obj = { flags: obj.notification_settings.flags };
          obj[29] = obj;
          obj[30] = closure_3;
          obj[31] = obj.explicit_content_scan_version;
          obj[32] = obj.failed_states;
          const linked_users = obj.linked_users;
          obj[33] = linked_users;
          const regional_feature_config = obj.regional_feature_config;
          obj[34] = regional_feature_config;
          const obj3 = outer2_1(outer2_3[20]);
          outer2_1(outer2_3[20]).dispatch(obj).catch((error) => {
            outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
            const socket = obj(outer1_3[13]).socket;
            obj = { error, action: obj.type };
            const result = socket.resetSocketOnDispatchError(obj);
          });
        });
        if (null != obj.auth_token) {
          obj = { type: "UPDATE_TOKEN", token: null, userId: null };
          obj[1] = obj.auth_token;
          obj[2] = obj.user.id;
          let tmpResult = tmp(tmp2[20]);
          tmpResult.dispatch(obj).catch((error) => {
            outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
            const socket = obj(outer1_3[13]).socket;
            obj = { error, action: obj.type };
            const result = socket.resetSocketOnDispatchError(obj);
          });
          const dispatchResult = tmpResult.dispatch(obj);
        }
        if (null != obj.ad_personalization_toggles_disabled) {
          obj = { type: "AD_PERSONALIZATION_TOGGLES_RESTRICTED", disabled: null };
          obj[1] = obj.ad_personalization_toggles_disabled;
          tmpResult = tmp(tmp2[20]);
          tmpResult.dispatch(obj).catch((error) => {
            outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
            const socket = obj(outer1_3[13]).socket;
            obj = { error, action: obj.type };
            const result = socket.resetSocketOnDispatchError(obj);
          });
          const dispatchResult1 = tmpResult.dispatch(obj);
        }
        const localPresenceState = outer1_0(tmp2[13]).localPresenceState;
        localPresenceState.update();
        const localVoiceState = outer1_0(tmp2[13]).localVoiceState;
        localVoiceState.update();
      });
    });
  }
});
defineSimpleDispatch(["STATE_UPDATE"], (apex_experiments) => {
  apex_experiments = apex_experiments.apex_experiments;
  const obj = { type: "CONNECTION_OPEN_STATE_UPDATE", apexExperiments: apex_experiments };
  const obj2 = dispatcher;
  dispatcher.dispatch(obj).catch((error) => {
    outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(outer1_3[13]).socket;
    obj = { error, action: obj.type };
    const result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["EXPERIMENT_SESSION_OVERRIDE_CREATE"], (experimentName) => {
  let obj = dispatcher;
  obj = { type: "APEX_EXPERIMENT_SESSION_OVERRIDE_CREATE", experimentName: experimentName.experiment_name, variantId: experimentName.variant_id };
  obj.dispatch(obj);
});
defineSimpleDispatch(["EXPERIMENT_SESSION_OVERRIDE_DELETE"], (experimentName) => {
  let obj = dispatcher;
  obj = { type: "APEX_EXPERIMENT_SESSION_OVERRIDE_DELETE", experimentName: experimentName.experiment_name };
  obj.dispatch(obj);
});
defineSimpleDispatch(["RESUMED"], () => {
  const localPresenceState = obj(12900).localPresenceState;
  localPresenceState.forceUpdate();
  const localVoiceState = obj(12900).localVoiceState;
  localVoiceState.forceUpdate();
  obj = { type: "CONNECTION_RESUMED" };
  const obj2 = dispatcher;
  dispatcher.dispatch(obj).catch((error) => {
    outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(outer1_3[13]).socket;
    obj = { error, action: obj.type };
    const result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["TYPING_START"], (guildId) => {
  if (null != guildId.member) {
    dispatchGuildMemberAdd(guildId.guild_id, guildId.member.user, guildId.member);
  }
  const obj = { type: "TYPING_START", guildId: guildId.guild_id, channelId: guildId.channel_id, userId: guildId.user_id };
  const obj2 = dispatcher;
  dispatcher.dispatch(obj).catch((error) => {
    outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(outer1_3[13]).socket;
    obj = { error, action: obj.type };
    const result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["GUILD_RING_START"], (ongoingRings) => {
  const obj = { type: "GUILD_RING_START", ongoingRings: ongoingRings.ongoing_rings, channelId: ongoingRings.channel_id, guildId: ongoingRings.guild_id };
  const obj2 = dispatcher;
  dispatcher.dispatch(obj).catch((error) => {
    outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(outer1_3[13]).socket;
    obj = { error, action: obj.type };
    const result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["GUILD_RING_STOP"], (ringing) => {
  const obj = { type: "GUILD_RING_STOP", ringing: ringing.ringing, channelId: ringing.channel_id, guildId: ringing.guild_id };
  const obj2 = dispatcher;
  dispatcher.dispatch(obj).catch((error) => {
    outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(outer1_3[13]).socket;
    obj = { error, action: obj.type };
    const result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["ACTIVITY_START"], (userId) => {
  const obj = { type: "ACTIVITY_START", userId: userId.user_id, activity: userId.activity };
  const obj2 = dispatcher;
  dispatcher.dispatch(obj).catch((error) => {
    outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(outer1_3[13]).socket;
    obj = { error, action: obj.type };
    const result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["ACTIVITY_USER_ACTION"], (actionType) => {
  const obj = { type: "ACTIVITY_USER_ACTION", actionType: actionType.action_type, user: actionType.user, applicationId: actionType.application_id, channelId: actionType.channel_id, messageId: actionType.message_id };
  const obj2 = dispatcher;
  dispatcher.dispatch(obj).catch((error) => {
    outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(outer1_3[13]).socket;
    obj = { error, action: obj.type };
    const result = socket.resetSocketOnDispatchError(obj);
  });
});
const result2 = definePreloadableDispatch(["MESSAGE_CREATE"], (guild_id) => {
  const items = [guild_id.guild_id];
  return ChannelLoader.loadGuildIds(items);
}, (author) => {
  let guild_id;
  let member;
  let mentions;
  ({ member, mentions, guild_id } = author);
  let obj = guild_id;
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
        if (null != obj) {
          delete tmp2[tmp];
          outer1_25(tmp3, member, member.member);
        }
      }
    });
  }
  if (null != author.author) {
    obj = { type: "MESSAGE_CREATE", guildId: null, channelId: null, message: null, optimistic: false, isPushNotification: false };
    ({ guild_id: obj[1], channel_id: obj[2] } = author);
    obj[3] = author;
    const obj2 = dispatcher;
    dispatcher.dispatch(obj).catch((error) => {
      outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
      const socket = obj(outer1_3[13]).socket;
      obj = { error, action: obj.type };
      const result = socket.resetSocketOnDispatchError(obj);
    });
    const dispatchResult = dispatcher.dispatch(obj);
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
  let obj = guild_id;
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
        if (null != obj) {
          delete tmp2[tmp];
          outer1_25(tmp3, member, member.member);
        }
      }
    });
  }
  obj = { type: "MESSAGE_UPDATE", guildId: author.guild_id, message: author };
  const obj2 = dispatcher;
  dispatcher.dispatch(obj).catch((error) => {
    outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(outer1_3[13]).socket;
    obj = { error, action: obj.type };
    const result = socket.resetSocketOnDispatchError(obj);
  });
});
const result4 = definePreloadableDispatch(["MESSAGE_DELETE"], (guild_id) => {
  const items = [guild_id.guild_id];
  return ChannelLoader.loadGuildIds(items);
}, (guildId) => {
  const obj = { type: "MESSAGE_DELETE", guildId: guildId.guild_id, id: guildId.id, channelId: guildId.channel_id };
  const obj2 = dispatcher;
  dispatcher.dispatch(obj).catch((error) => {
    outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(outer1_3[13]).socket;
    obj = { error, action: obj.type };
    const result = socket.resetSocketOnDispatchError(obj);
  });
});
const result5 = definePreloadableDispatch(["MESSAGE_DELETE_BULK"], (guild_id) => {
  const items = [guild_id.guild_id];
  return ChannelLoader.loadGuildIds(items);
}, (guildId) => {
  const obj = { type: "MESSAGE_DELETE_BULK", guildId: guildId.guild_id, ids: guildId.ids, channelId: guildId.channel_id };
  const obj2 = dispatcher;
  dispatcher.dispatch(obj).catch((error) => {
    outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(outer1_3[13]).socket;
    obj = { error, action: obj.type };
    const result = socket.resetSocketOnDispatchError(obj);
  });
});
const result6 = definePreloadableDispatch(["MESSAGE_ACK"], (channel_id) => ChannelLoader.loadGuildFromChannelId(channel_id.channel_id), (channelId) => {
  const obj = { type: "MESSAGE_ACK", channelId: channelId.channel_id, messageId: channelId.message_id, manual: channelId.manual, newMentionCount: channelId.mention_count, version: channelId.version };
  const obj2 = dispatcher;
  dispatcher.dispatch(obj).catch((error) => {
    outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(outer1_3[13]).socket;
    obj = { error, action: obj.type };
    const result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["GUILD_FEATURE_ACK"], (id) => {
  const obj = { type: "GUILD_FEATURE_ACK", id: id.resource_id, ackType: id.ack_type, ackedId: id.entity_id };
  const obj2 = dispatcher;
  dispatcher.dispatch(obj).catch((error) => {
    outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(outer1_3[13]).socket;
    obj = { error, action: obj.type };
    const result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["USER_NON_CHANNEL_ACK"], (ackType) => {
  const obj = { type: "USER_NON_CHANNEL_ACK", ackType: ackType.ack_type, ackedId: ackType.entity_id };
  const obj2 = dispatcher;
  dispatcher.dispatch(obj).catch((error) => {
    outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(outer1_3[13]).socket;
    obj = { error, action: obj.type };
    const result = socket.resetSocketOnDispatchError(obj);
  });
});
const result7 = definePreloadableDispatch(["CHANNEL_PINS_ACK"], (guild_id) => {
  const items = [guild_id.guild_id];
  return ChannelLoader.loadGuildIds(items);
}, (channelId) => {
  const obj = { type: "CHANNEL_PINS_ACK", channelId: channelId.channel_id, timestamp: channelId.timestamp, version: channelId.version };
  const obj2 = dispatcher;
  dispatcher.dispatch(obj).catch((error) => {
    outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(outer1_3[13]).socket;
    obj = { error, action: obj.type };
    const result = socket.resetSocketOnDispatchError(obj);
  });
});
const result8 = definePreloadableDispatch(["CHANNEL_PINS_UPDATE"], (guild_id) => {
  const items = [guild_id.guild_id];
  return ChannelLoader.loadGuildIds(items);
}, (channelId) => {
  const obj = { type: "CHANNEL_PINS_UPDATE", channelId: channelId.channel_id, lastPinTimestamp: channelId.last_pin_timestamp };
  const obj2 = dispatcher;
  dispatcher.dispatch(obj).catch((error) => {
    outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(outer1_3[13]).socket;
    obj = { error, action: obj.type };
    const result = socket.resetSocketOnDispatchError(obj);
  });
});
const result9 = definePreloadableDispatch(["CHANNEL_CREATE", "CHANNEL_DELETE"], (guild_id) => {
  const items = [guild_id.guild_id];
  return ChannelLoader.loadGuildIds(items);
}, (arg0, type) => {
  const obj = { type, channel: callback2(arg0) };
  const obj2 = dispatcher;
  dispatcher.dispatch(obj).catch((error) => {
    outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(outer1_3[13]).socket;
    obj = { error, action: obj.type };
    const result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["VOICE_CHANNEL_STATUS_UPDATE"], (id, type) => {
  const obj = { type, id: id.id, guildId: id.guild_id, status: id.status };
  const obj2 = dispatcher;
  dispatcher.dispatch(obj).catch((error) => {
    outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(outer1_3[13]).socket;
    obj = { error, action: obj.type };
    const result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["VOICE_CHANNEL_START_TIME_UPDATE"], (id, type) => {
  const obj = { type, id: id.id, guildId: id.guild_id, voiceStartTime: null };
  const voice_start_time = id.voice_start_time;
  obj[3] = voice_start_time;
  const obj2 = dispatcher;
  dispatcher.dispatch(obj).catch((error) => {
    outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(outer1_3[13]).socket;
    obj = { error, action: obj.type };
    const result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["CHANNEL_INFO"], (guildId, type) => {
  const obj = { type, guildId: guildId.guild_id, channels: channels.map((id) => ({ id: id.id, status: id.status, voiceStartTime: id.voice_start_time })) };
  channels = guildId.channels;
  const obj2 = dispatcher;
  dispatcher.dispatch(obj).catch((error) => {
    outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(outer1_3[13]).socket;
    obj = { error, action: obj.type };
    const result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["CHANNEL_MEMBER_COUNT_UPDATE"], (guildId, type) => {
  const obj = { type, guildId: guildId.guild_id, channelId: guildId.channel_id, online: guildId.presence_count, total: guildId.member_count };
  const obj2 = dispatcher;
  dispatcher.dispatch(obj).catch((error) => {
    outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(outer1_3[13]).socket;
    obj = { error, action: obj.type };
    const result = socket.resetSocketOnDispatchError(obj);
  });
});
const result10 = definePreloadableDispatch(["CHANNEL_UPDATE"], (guild_id) => {
  const items = [guild_id.guild_id];
  return ChannelLoader.loadGuildIds(items);
}, (arg0) => {
  importDefaultResult.add(arg0);
});
const result11 = definePreloadableDispatch(["THREAD_CREATE", "THREAD_UPDATE", "THREAD_DELETE"], (guild_id) => {
  const items = [guild_id.guild_id];
  return ChannelLoader.loadGuildIds(items);
}, (isNewlyCreated, type) => {
  const obj = { type, isNewlyCreated: isNewlyCreated.newly_created, channel: callback2(callback(isNewlyCreated, closure_4)) };
  const obj2 = dispatcher;
  dispatcher.dispatch(obj).catch((error) => {
    outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(outer1_3[13]).socket;
    obj = { error, action: obj.type };
    const result = socket.resetSocketOnDispatchError(obj);
  });
});
const result12 = definePreloadableDispatch(["THREAD_LIST_SYNC"], (guild_id) => {
  const items = [guild_id.guild_id];
  return ChannelLoader.loadGuildIds(items);
}, (guildId) => {
  const obj = {
    type: "THREAD_LIST_SYNC",
    guildId: guildId.guild_id,
    threads: threads.map((parent_id) => {
      channel = channel.getChannel(parent_id.parent_id);
      if (null != channel) {
        ({ nsfw: parent_id.nsfw, type: parent_id.parentChannelThreadType } = channel);
      }
      return callback(parent_id);
    }),
    mostRecentMessages: guildId.most_recent_messages,
    members: null,
    channelIds: null
  };
  threads = guildId.threads;
  let mapped;
  if (guildId.members) {
    mapped = apply.map(guildId.members, convertServerThreadMember);
    const arr2 = apply;
  }
  obj[4] = mapped;
  obj[5] = guildId.channel_ids;
  const obj2 = dispatcher;
  dispatcher.dispatch(obj).catch((error) => {
    outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(outer1_3[13]).socket;
    obj = { error, action: obj.type };
    const result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["THREAD_MEMBER_UPDATE"], (id) => {
  const obj = { type: "THREAD_MEMBER_UPDATE", id: id.id, guildId: id.guild_id, userId: id.user_id, flags: id.flags, muted: id.muted, muteConfig: id.mute_config, joinTimestamp: id.join_timestamp };
  const obj2 = dispatcher;
  dispatcher.dispatch(obj).catch((error) => {
    outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(outer1_3[13]).socket;
    obj = { error, action: obj.type };
    const result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["THREAD_MEMBERS_UPDATE"], (id) => {
  let obj = id;
  obj = { type: "THREAD_MEMBERS_UPDATE", id: id.id, guildId: id.guild_id, memberCount: id.member_count, addedMembers: null, removedMemberIds: null, memberIdsPreview: null };
  const added_members = id.added_members;
  let mapped;
  if (added_members != null) {
    mapped = added_members.map((id) => {
      obj = { id: id.id, guildId: obj.guild_id, userId: id.user_id, flags: id.flags, joinTimestamp: id.join_timestamp };
      return obj;
    });
  }
  obj[4] = mapped;
  ({ removed_member_ids: obj[5], member_ids_preview: obj[6] } = id);
  const obj2 = dispatcher;
  dispatcher.dispatch(obj).catch((error) => {
    outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(outer1_3[13]).socket;
    obj = { error, action: obj.type };
    const result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["FORUM_UNREADS"], (permission_denied) => {
  let threads;
  if (!permission_denied.permission_denied) {
    const obj = { type: "FORUM_UNREADS", channelId: null, threads: null };
    ({ channel_id: obj[1], threads } = permission_denied);
    obj[2] = threads.map((threadId) => ({ threadId: threadId.thread_id, missing: threadId.missing, count: threadId.count }));
    const obj2 = dispatcher;
    dispatcher.dispatch(obj).catch((error) => {
      outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
      const socket = obj(outer1_3[13]).socket;
      obj = { error, action: obj.type };
      const result = socket.resetSocketOnDispatchError(obj);
    });
    const dispatchResult = dispatcher.dispatch(obj);
  }
});
defineSimpleDispatch(["SOUNDBOARD_SOUNDS"], (arg0) => {
  importDefaultResult1.add(arg0);
});
defineSimpleDispatch(["CHANNEL_RECIPIENT_ADD", "CHANNEL_RECIPIENT_REMOVE"], (channelId, type) => {
  const obj = { type, channelId: channelId.channel_id, user: channelId.user, nick: channelId.nick, isMember: null != store.getBasicChannel(channelId.channel_id) };
  const obj2 = dispatcher;
  dispatcher.dispatch(obj).catch((error) => {
    outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(outer1_3[13]).socket;
    obj = { error, action: obj.type };
    const result = socket.resetSocketOnDispatchError(obj);
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
    let obj = { type: "GUILD_UNAVAILABLE", guildId: null };
    obj[1] = unavailable.id;
    let obj1 = obj;
    const obj7 = dispatcher;
    dispatcher.dispatch(obj).catch((error) => {
      outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
      const socket = obj(outer1_3[13]).socket;
      obj = { error, action: obj.type };
      const result = socket.resetSocketOnDispatchError(obj);
    });
    const dispatchResult = dispatcher.dispatch(obj);
  } else {
    obj = importAll(12945);
    const result = obj.hydratePreviouslyUnavailableGuild(unavailable);
    obj1 = result;
    obj = { type: "GUILD_CREATE", guild: null };
    obj[1] = result;
    obj1 = obj;
    const obj3 = dispatcher;
    dispatcher.dispatch(obj).catch((error) => {
      outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
      const socket = obj(outer1_3[13]).socket;
      obj = { error, action: obj.type };
      const result = socket.resetSocketOnDispatchError(obj);
    });
    obj1 = { type: "VOICE_STATE_UPDATES", voiceStates: null };
    const voice_states = result.voice_states;
    obj1[1] = voice_states.map((userId) => {
      const obj = { userId: userId.user_id, guildId: obj1.id, sessionId: userId.session_id, channelId: userId.channel_id, mute: userId.mute, deaf: userId.deaf, selfMute: userId.self_mute, selfDeaf: userId.self_deaf, selfVideo: tmp, suppress: userId.suppress, selfStream: tmp2, requestToSpeakTimestamp: null, discoverable: null, connectedAt: null };
      let prop = userId.request_to_speak_timestamp;
      if (prop == null) {
        prop = null;
      }
      obj[11] = prop;
      let flag = userId.discoverable;
      if (flag == null) {
        flag = true;
      }
      obj[12] = flag;
      obj[13] = userId.connected_at;
      return obj;
    });
    const dispatchResult1 = dispatcher.dispatch(obj);
    const obj5 = dispatcher;
    dispatcher.dispatch(obj1).catch((error) => {
      outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
      const socket = obj(outer1_3[13]).socket;
      obj = { error, action: obj.type };
      const result = socket.resetSocketOnDispatchError(obj);
    });
    const dispatchResult2 = dispatcher.dispatch(obj1);
  }
});
defineSimpleDispatch(["GUILD_UPDATE"], (guild) => {
  let obj = { type: "GUILD_UPDATE", guild };
  const obj2 = dispatcher;
  const tmp = importDefault;
  dispatcher.dispatch(obj).catch((error) => {
    outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(outer1_3[13]).socket;
    obj = { error, action: obj.type };
    const result = socket.resetSocketOnDispatchError(obj);
  });
  if (guild.unavailable) {
    obj = { type: "GUILD_UNAVAILABLE", guildId: null };
    obj[1] = guild.id;
    const tmpResult = tmp(709);
    tmp(709).dispatch(obj).catch((error) => {
      outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
      const socket = obj(outer1_3[13]).socket;
      obj = { error, action: obj.type };
      const result = socket.resetSocketOnDispatchError(obj);
    });
    const dispatchResult1 = tmp(709).dispatch(obj);
  }
});
defineSimpleDispatch(["GUILD_PRUNE_UPDATE"], (guildId) => {
  obj = { type: "GUILD_PRUNE_UPDATE", guildId: guildId.guild_id, prune: obj };
  obj = { isPreview: guildId.prune.is_preview, isFinished: guildId.prune.is_finished, days: guildId.prune.days, pruneCount: guildId.prune.prune_count, includeRoles: guildId.prune.include_roles };
  const obj3 = dispatcher;
  dispatcher.dispatch(obj).catch((error) => {
    outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(outer1_3[13]).socket;
    obj = { error, action: obj.type };
    const result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["GUILD_BULK_BAN_UPDATE"], (guildId) => {
  let obj = { type: "GUILD_BULK_BAN_UPDATE", guildId: guildId.guild_id, bulkBan: null };
  const bulk_ban = guildId.bulk_ban;
  let banned_users;
  if (bulk_ban != null) {
    banned_users = bulk_ban.banned_users;
  }
  if (banned_users == null) {
    banned_users = [];
  }
  obj = { bannedUsers: banned_users, failedUsers: null };
  const bulk_ban2 = guildId.bulk_ban;
  let failed_users;
  if (bulk_ban2 != null) {
    failed_users = bulk_ban2.failed_users;
  }
  if (failed_users == null) {
    failed_users = [];
  }
  obj[1] = failed_users;
  obj[2] = obj;
  const obj3 = dispatcher;
  dispatcher.dispatch(obj).catch((error) => {
    outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(outer1_3[13]).socket;
    obj = { error, action: obj.type };
    const result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["GUILD_DELETE"], (geo_restricted) => {
  let obj = { type: "GUILD_DELETE", guild: geo_restricted };
  const obj2 = dispatcher;
  dispatcher.dispatch(obj).catch((error) => {
    outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(outer1_3[13]).socket;
    obj = { error, action: obj.type };
    const result = socket.resetSocketOnDispatchError(obj);
  });
  if (geo_restricted.geo_restricted) {
    obj = { type: "GUILD_GEO_RESTRICTED", guildId: null, icon: null, name: null };
    ({ id: obj5[1], icon: obj5[2], name: obj5[3] } = geo_restricted);
    let tmpResult = tmp(709);
    tmpResult.dispatch(obj).catch((error) => {
      outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
      const socket = obj(outer1_3[13]).socket;
      obj = { error, action: obj.type };
      const result = socket.resetSocketOnDispatchError(obj);
    });
    const dispatchResult1 = tmpResult.dispatch(obj);
  } else if (geo_restricted.unavailable) {
    obj = { type: "GUILD_UNAVAILABLE", guildId: null };
    obj[1] = geo_restricted.id;
    tmpResult = tmp(709);
    tmpResult.dispatch(obj).catch((error) => {
      outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
      const socket = obj(outer1_3[13]).socket;
      obj = { error, action: obj.type };
      const result = socket.resetSocketOnDispatchError(obj);
    });
    const dispatchResult2 = tmpResult.dispatch(obj);
  }
});
defineSimpleDispatch(["GUILD_MEMBERS_CHUNK"], (arg0) => {
  let closure_0 = arg0;
  const Emitter = initialize.Emitter;
  Emitter.batched(() => {
    let closure_0;
    let presences;
    outer1_20.add({ guildId: closure_0.guild_id, members: closure_0.members, notFound: closure_0.not_found });
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
        const tmp2Result = outer1_1(outer1_3[37])(activities, hidden_activities);
        const tmp = id;
        const tmp2 = outer1_1(outer1_3[37]);
        const activities1 = tmp2Result.activities;
        return {
          user: activities.user,
          status: activities.status,
          clientStatus: activities.client_status,
          activities: activities1.map((timestamps) => {
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
                let obj = {};
                const merged = Object.assign(timestamps);
                obj = {};
                const merged1 = Object.assign(timestamps.timestamps);
                let tmp8 = end > created_at;
                if (tmp8) {
                  tmp8 = timestamps.type !== constants.LISTENING;
                }
                obj.isCountDown = tmp8;
                obj.timestamps = obj;
                tmp2 = obj;
              }
            }
            return tmp2;
          }),
          hiddenActivities: tmp2Result.hiddenActivities,
          guildId: id,
          processedAtTimestamp: activities.processed_at_timestamp
        };
      });
      const item = mapped.forEach(outer1_26);
    }
    outer1_1(outer1_3[12]).flush("GUILD_MEMBERS_CHUNK");
  });
});
defineSimpleDispatch(["THREAD_MEMBER_LIST_UPDATE"], (arg0) => {
  let closure_0 = arg0;
  const Emitter = initialize.Emitter;
  Emitter.batched(() => {
    let obj;
    let presences;
    obj = { type: "THREAD_MEMBER_LIST_UPDATE", guildId: obj.guild_id, threadId: obj.thread_id, members: obj.members };
    const obj2 = outer1_1(outer1_3[20]);
    const tmp = obj;
    const tmp2 = outer1_1;
    const tmp3 = outer1_3;
    outer1_1(outer1_3[20]).dispatch(obj).catch((error) => {
      outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
      const socket = obj(outer1_3[13]).socket;
      obj = { error, action: obj.type };
      const result = socket.resetSocketOnDispatchError(obj);
    });
    if (null != obj.presences) {
      ({ presences, guild_id: obj } = tmp);
      const mapped = presences.map((activities) => {
        activities = activities.activities;
        if (activities == null) {
          activities = [];
        }
        let hidden_activities = activities.hidden_activities;
        if (hidden_activities == null) {
          hidden_activities = [];
        }
        const tmp2Result = outer1_1(outer1_3[37])(activities, hidden_activities);
        const tmp = id;
        const tmp2 = outer1_1(outer1_3[37]);
        const activities1 = tmp2Result.activities;
        return {
          user: activities.user,
          status: activities.status,
          clientStatus: activities.client_status,
          activities: activities1.map((timestamps) => {
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
                let obj = {};
                const merged = Object.assign(timestamps);
                obj = {};
                const merged1 = Object.assign(timestamps.timestamps);
                let tmp8 = end > created_at;
                if (tmp8) {
                  tmp8 = timestamps.type !== constants.LISTENING;
                }
                obj.isCountDown = tmp8;
                obj.timestamps = obj;
                tmp2 = obj;
              }
            }
            return tmp2;
          }),
          hiddenActivities: tmp2Result.hiddenActivities,
          guildId: id,
          processedAtTimestamp: activities.processed_at_timestamp
        };
      });
      const item = mapped.forEach(outer1_26);
    }
    const dispatchResult = outer1_1(outer1_3[20]).dispatch(obj);
    tmp2(tmp3[12]).flush();
  });
});
defineSimpleDispatch(["GUILD_BAN_ADD", "GUILD_BAN_REMOVE", "GUILD_MEMBER_ADD", "GUILD_MEMBER_UPDATE", "GUILD_MEMBER_REMOVE"], (guildId, type) => {
  const obj = { type, guildId: guildId.guild_id, user: guildId.user, avatar: guildId.avatar, avatarDecoration: guildId.avatar_decoration_data, roles: guildId.roles, nick: guildId.nick, premiumSince: guildId.premium_since, isPending: guildId.pending, joinedAt: guildId.joined_at, communicationDisabledUntil: guildId.communication_disabled_until, unusualDMActivityUntil: guildId.unusual_dm_activity_until, flags: guildId.flags, collectibles: null, displayNameStyles: null };
  obj[13] = obj(1881).parseServerUserCollectibles(guildId.collectibles);
  const obj2 = obj(1881);
  obj[14] = obj(1914).parseServerDisplayNameStyles(guildId.display_name_styles);
  const obj3 = obj(1914);
  const obj4 = dispatcher;
  dispatcher.dispatch(obj).catch((error) => {
    outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(outer1_3[13]).socket;
    obj = { error, action: obj.type };
    const result = socket.resetSocketOnDispatchError(obj);
  });
});
const result14 = definePreloadableDispatch(["GUILD_ROLE_CREATE", "GUILD_ROLE_UPDATE"], (guild_id) => {
  const items = [guild_id.guild_id];
  return ChannelLoader.loadGuildIds(items);
}, (guildId, type) => {
  const obj = { type, guildId: guildId.guild_id, role: guildId.role };
  const obj2 = dispatcher;
  dispatcher.dispatch(obj).catch((error) => {
    outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(outer1_3[13]).socket;
    obj = { error, action: obj.type };
    const result = socket.resetSocketOnDispatchError(obj);
  });
});
const result15 = definePreloadableDispatch(["GUILD_ROLE_DELETE"], (guild_id) => {
  const items = [guild_id.guild_id];
  return ChannelLoader.loadGuildIds(items);
}, (guildId) => {
  const obj = { type: "GUILD_ROLE_DELETE", guildId: guildId.guild_id, roleId: guildId.role_id, version: guildId.version };
  const obj2 = dispatcher;
  dispatcher.dispatch(obj).catch((error) => {
    outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(outer1_3[13]).socket;
    obj = { error, action: obj.type };
    const result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["GUILD_EMOJIS_UPDATE"], (guildId) => {
  const obj = { type: "GUILD_EMOJIS_UPDATE", guildId: guildId.guild_id, emojis: guildId.emojis };
  const obj2 = dispatcher;
  dispatcher.dispatch(obj).catch((error) => {
    outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(outer1_3[13]).socket;
    obj = { error, action: obj.type };
    const result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["GUILD_STICKERS_UPDATE"], (guildId) => {
  const obj = { type: "GUILD_STICKERS_UPDATE", guildId: guildId.guild_id, stickers: guildId.stickers };
  const obj2 = dispatcher;
  dispatcher.dispatch(obj).catch((error) => {
    outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(outer1_3[13]).socket;
    obj = { error, action: obj.type };
    const result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["GUILD_INTEGRATIONS_UPDATE"], (guildId) => {
  const obj = { type: "GUILD_INTEGRATIONS_UPDATE", guildId: guildId.guild_id };
  const obj2 = dispatcher;
  dispatcher.dispatch(obj).catch((error) => {
    outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(outer1_3[13]).socket;
    obj = { error, action: obj.type };
    const result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["INTEGRATION_CREATE"], (application) => {
  const obj = { type: "INTEGRATION_CREATE", application: application.application, guildId: application.guild_id };
  const obj2 = dispatcher;
  dispatcher.dispatch(obj).catch((error) => {
    outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(outer1_3[13]).socket;
    obj = { error, action: obj.type };
    const result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["INTEGRATION_DELETE"], (applicationId) => {
  const obj = { type: "INTEGRATION_DELETE", applicationId: applicationId.application_id, guildId: applicationId.guild_id };
  const obj2 = dispatcher;
  dispatcher.dispatch(obj).catch((error) => {
    outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(outer1_3[13]).socket;
    obj = { error, action: obj.type };
    const result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["USER_UPDATE"], (user) => {
  const obj = { type: "CURRENT_USER_UPDATE", user };
  const obj2 = dispatcher;
  dispatcher.dispatch(obj).catch((error) => {
    outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(outer1_3[13]).socket;
    obj = { error, action: obj.type };
    const result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["USER_SETTINGS_PROTO_UPDATE"], (settings) => {
  obj = obj(1342);
  const b64ToProtoWithTypeResult = obj.b64ToProtoWithType(settings.settings.type, settings.settings.proto);
  if (null != b64ToProtoWithTypeResult) {
    if (typeof b64ToProtoWithTypeResult === "string") {
      const _Error = Error;
      throw Error("UserSettingsProto must not be a string");
    } else {
      obj = { type: "USER_SETTINGS_PROTO_UPDATE", settings: null, partial: null };
      obj = { proto: null, type: null };
      obj[0] = b64ToProtoWithTypeResult;
      obj[1] = settings.settings.type;
      obj[1] = obj;
      obj[2] = settings.partial;
      const obj4 = dispatcher;
      dispatcher.dispatch(obj).catch((error) => {
        outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
        const socket = obj(outer1_3[13]).socket;
        obj = { error, action: obj.type };
        const result = socket.resetSocketOnDispatchError(obj);
      });
      const dispatchResult = dispatcher.dispatch(obj);
    }
  }
});
defineSimpleDispatch(["USER_GUILD_SETTINGS_UPDATE"], (arg0) => {
  const obj = { type: "USER_GUILD_SETTINGS_FULL_UPDATE", userGuildSettings: items };
  items = [arg0];
  const obj2 = dispatcher;
  dispatcher.dispatch(obj).catch((error) => {
    outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(outer1_3[13]).socket;
    obj = { error, action: obj.type };
    const result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["USER_CONNECTIONS_UPDATE"], () => {
  const obj = { type: "USER_CONNECTIONS_UPDATE" };
  const obj2 = dispatcher;
  dispatcher.dispatch(obj).catch((error) => {
    outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(outer1_3[13]).socket;
    obj = { error, action: obj.type };
    const result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["USER_REQUIRED_ACTION_UPDATE"], (requiredAction) => {
  const obj = { type: "USER_REQUIRED_ACTION_UPDATE", requiredAction: requiredAction.required_action };
  const obj2 = dispatcher;
  dispatcher.dispatch(obj).catch((error) => {
    outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(outer1_3[13]).socket;
    obj = { error, action: obj.type };
    const result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["USER_NOTE_UPDATE"], (arg0) => {
  const obj = { type: "USER_NOTE_UPDATE" };
  const merged = Object.assign(arg0);
  const obj2 = dispatcher;
  dispatcher.dispatch(obj).catch((error) => {
    outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(outer1_3[13]).socket;
    obj = { error, action: obj.type };
    const result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["RELATIONSHIP_ADD"], (id) => {
  let obj = { id: id.id, type: id.type, user: id.user, since: id.since, nickname: id.nickname, isSpamRequest: tmp, isStrangerRequest: tmp2, userIgnored: tmp3, originApplicationId: id.origin_application_id, note: id.note };
  obj = { type: "RELATIONSHIP_ADD", relationship: obj, shouldNotify: true === id.should_notify };
  const obj3 = dispatcher;
  tmp = id.is_spam_request || false;
  tmp2 = id.is_stranger_request || false;
  tmp3 = id.user_ignored || false;
  dispatcher.dispatch(obj).catch((error) => {
    outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(outer1_3[13]).socket;
    obj = { error, action: obj.type };
    const result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["RELATIONSHIP_REMOVE"], (relationship) => {
  const obj = { type: "RELATIONSHIP_REMOVE", relationship };
  const obj2 = dispatcher;
  dispatcher.dispatch(obj).catch((error) => {
    outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(outer1_3[13]).socket;
    obj = { error, action: obj.type };
    const result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["RELATIONSHIP_UPDATE"], (id) => {
  let obj = { id: id.id, type: id.type, user: id.user, nickname: id.nickname, since: id.since, isSpamRequest: tmp, isStrangerRequest: tmp2, userIgnored: tmp3, originApplicationId: id.origin_application_id, note: id.note };
  obj = { type: "RELATIONSHIP_UPDATE", relationship: obj };
  const obj3 = dispatcher;
  tmp = id.is_spam_request || false;
  tmp2 = id.is_stranger_request || false;
  tmp3 = id.user_ignored || false;
  dispatcher.dispatch(obj).catch((error) => {
    outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(outer1_3[13]).socket;
    obj = { error, action: obj.type };
    const result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["GAME_RELATIONSHIP_ADD"], (id) => {
  obj = { type: "GAME_RELATIONSHIP_ADD", gameRelationship: obj };
  obj = { id: id.id, applicationId: id.application_id, type: id.type, since: id.since, dmAccessType: id.dm_access_type, user: id.user };
  const obj3 = dispatcher;
  dispatcher.dispatch(obj).catch((error) => {
    outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(outer1_3[13]).socket;
    obj = { error, action: obj.type };
    const result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["GAME_RELATIONSHIP_REMOVE"], (id) => {
  const obj = { type: "GAME_RELATIONSHIP_REMOVE", userId: id.id, applicationId: id.application_id };
  const obj2 = dispatcher;
  dispatcher.dispatch(obj).catch((error) => {
    outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(outer1_3[13]).socket;
    obj = { error, action: obj.type };
    const result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["PRESENCE_UPDATE"], (hidden_activities) => {
  let activities;
  let guild_id;
  ({ guild_id, activities } = hidden_activities);
  if (activities == null) {
    activities = [];
  }
  hidden_activities = hidden_activities.hidden_activities;
  if (hidden_activities == null) {
    hidden_activities = [];
  }
  const tmpResult = splitAgeRestrictedActivities(activities, hidden_activities);
  const tmp = splitAgeRestrictedActivities;
  activities = tmpResult.activities;
  importDefaultResult3.add({
    user: hidden_activities.user,
    status: hidden_activities.status,
    clientStatus: hidden_activities.client_status,
    activities: activities.map((timestamps) => {
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
          let obj = {};
          const merged = Object.assign(timestamps);
          obj = {};
          const merged1 = Object.assign(timestamps.timestamps);
          let tmp8 = end > created_at;
          if (tmp8) {
            tmp8 = timestamps.type !== constants.LISTENING;
          }
          obj.isCountDown = tmp8;
          obj.timestamps = obj;
          tmp2 = obj;
        }
      }
      return tmp2;
    }),
    hiddenActivities: tmpResult.hiddenActivities,
    guildId: guild_id,
    processedAtTimestamp: hidden_activities.processed_at_timestamp
  });
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
      const tmp2Result = outer1_1(outer1_3[37])(activities, hidden_activities);
      const tmp = id;
      const tmp2 = outer1_1(outer1_3[37]);
      const activities1 = tmp2Result.activities;
      return {
        user: activities.user,
        status: activities.status,
        clientStatus: activities.client_status,
        activities: activities1.map((timestamps) => {
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
              let obj = {};
              const merged = Object.assign(timestamps);
              obj = {};
              const merged1 = Object.assign(timestamps.timestamps);
              let tmp8 = end > created_at;
              if (tmp8) {
                tmp8 = timestamps.type !== constants.LISTENING;
              }
              obj.isCountDown = tmp8;
              obj.timestamps = obj;
              tmp2 = obj;
            }
          }
          return tmp2;
        }),
        hiddenActivities: tmp2Result.hiddenActivities,
        guildId: id,
        processedAtTimestamp: activities.processed_at_timestamp
      };
    })
  };
  const obj2 = dispatcher;
  dispatcher.dispatch(obj).catch((error) => {
    outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(outer1_3[13]).socket;
    obj = { error, action: obj.type };
    const result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["SESSIONS_REPLACE"], (arr) => {
  const obj = {
    type: "SESSIONS_REPLACE",
    sessions: arr.map((sessionId) => {
      const obj = { sessionId: sessionId.session_id, lastModified: sessionId.last_modified, status: sessionId.status, activities: null, hiddenActivities: null, active: null, clientInfo: null };
      let activities = sessionId.activities;
      if (activities == null) {
        activities = [];
      }
      obj[3] = activities.map((timestamps) => {
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
            let obj = {};
            const merged = Object.assign(timestamps);
            obj = {};
            const merged1 = Object.assign(timestamps.timestamps);
            let tmp8 = end > created_at;
            if (tmp8) {
              tmp8 = timestamps.type !== constants.LISTENING;
            }
            obj.isCountDown = tmp8;
            obj.timestamps = obj;
            tmp2 = obj;
          }
        }
        return tmp2;
      });
      let hidden_activities = sessionId.hidden_activities;
      if (hidden_activities == null) {
        hidden_activities = [];
      }
      obj[4] = hidden_activities;
      obj[5] = sessionId.active;
      obj[6] = sessionId.client_info;
      return obj;
    })
  };
  const obj2 = dispatcher;
  dispatcher.dispatch(obj).catch((error) => {
    outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(outer1_3[13]).socket;
    obj = { error, action: obj.type };
    const result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["VOICE_STATE_UPDATE"], (arg0) => {
  const items = [arg0];
  dispatchVoiceStateUpdates(items);
});
defineSimpleDispatch(["VOICE_STATE_UPDATE_BATCH"], (voice_states) => {
  dispatchVoiceStateUpdates(voice_states.voice_states);
});
defineSimpleDispatch(["VOICE_SERVER_UPDATE"], (guildId) => {
  const obj = { type: "VOICE_SERVER_UPDATE", guildId: guildId.guild_id, channelId: guildId.channel_id, endpoint: guildId.endpoint, token: guildId.token };
  const obj2 = dispatcher;
  dispatcher.dispatch(obj).catch((error) => {
    outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(outer1_3[13]).socket;
    obj = { error, action: obj.type };
    const result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["CALL_CREATE"], (channelId) => {
  let obj = { type: "CALL_CREATE", channelId: channelId.channel_id, messageId: channelId.message_id, region: channelId.region, ongoingRings: channelId.ongoing_rings };
  const obj2 = dispatcher;
  const tmp = importDefault;
  dispatcher.dispatch(obj).catch((error) => {
    outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(outer1_3[13]).socket;
    obj = { error, action: obj.type };
    const result = socket.resetSocketOnDispatchError(obj);
  });
  const voice_states = channelId.voice_states;
  if (null != voice_states) {
    obj = { type: "VOICE_STATE_UPDATES", voiceStates: null };
    obj[1] = voice_states.map((userId) => {
      const obj = { userId: userId.user_id, guildId: null, sessionId: userId.session_id, channelId: userId.channel_id, mute: userId.mute, deaf: userId.deaf, selfMute: userId.self_mute, selfDeaf: userId.self_deaf, selfVideo: tmp, suppress: userId.suppress, selfStream: tmp2, requestToSpeakTimestamp: null, discoverable: null, connectedAt: null };
      let prop = userId.request_to_speak_timestamp;
      if (prop == null) {
        prop = null;
      }
      obj[11] = prop;
      let flag = userId.discoverable;
      if (flag == null) {
        flag = true;
      }
      obj[12] = flag;
      obj[13] = userId.connected_at;
      return obj;
    });
    const tmpResult = tmp(709);
    tmp(709).dispatch(obj).catch((error) => {
      outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
      const socket = obj(outer1_3[13]).socket;
      obj = { error, action: obj.type };
      const result = socket.resetSocketOnDispatchError(obj);
    });
    const dispatchResult1 = tmp(709).dispatch(obj);
  }
});
defineSimpleDispatch(["CALL_UPDATE"], (channelId) => {
  const obj = { type: "CALL_UPDATE", channelId: channelId.channel_id, messageId: channelId.message_id, region: channelId.region, ongoingRings: channelId.ongoing_rings };
  const obj2 = dispatcher;
  dispatcher.dispatch(obj).catch((error) => {
    outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(outer1_3[13]).socket;
    obj = { error, action: obj.type };
    const result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["CALL_DELETE"], (channelId) => {
  const obj = { type: "CALL_DELETE", channelId: channelId.channel_id, unavailable: channelId.unavailable };
  const obj2 = dispatcher;
  dispatcher.dispatch(obj).catch((error) => {
    outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(outer1_3[13]).socket;
    obj = { error, action: obj.type };
    const result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["OAUTH2_TOKEN_CREATE"], (id) => {
  const obj = { type: "OAUTH2_TOKEN_CREATE", id: id.id, scopes: id.scopes, application: id.application };
  const obj2 = dispatcher;
  dispatcher.dispatch(obj).catch((error) => {
    outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(outer1_3[13]).socket;
    obj = { error, action: obj.type };
    const result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["OAUTH2_TOKEN_DELETE"], (id) => {
  const obj = { type: "OAUTH2_TOKEN_DELETE", id: id.id, applicationId: id.application_id };
  const obj2 = dispatcher;
  dispatcher.dispatch(obj).catch((error) => {
    outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(outer1_3[13]).socket;
    obj = { error, action: obj.type };
    const result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["OAUTH2_TOKEN_REVOKE"], (accessToken) => {
  const obj = { type: "OAUTH2_TOKEN_REVOKE", accessToken: accessToken.access_token };
  const obj2 = dispatcher;
  dispatcher.dispatch(obj).catch((error) => {
    outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(outer1_3[13]).socket;
    obj = { error, action: obj.type };
    const result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["RECENT_MENTION_DELETE"], (id) => {
  const obj = { type: "RECENT_MENTION_DELETE", id: id.message_id };
  const obj2 = dispatcher;
  dispatcher.dispatch(obj).catch((error) => {
    outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(outer1_3[13]).socket;
    obj = { error, action: obj.type };
    const result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["SAVED_MESSAGE_CREATE"], (body) => {
  const obj = { type: "SAVED_MESSAGE_CREATE", savedMessage: null };
  obj[1] = obj(8381).savedMessageCreateObjectToClient(body);
  const obj2 = obj(8381);
  const obj3 = dispatcher;
  dispatcher.dispatch(obj).catch((error) => {
    outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(outer1_3[13]).socket;
    obj = { error, action: obj.type };
    const result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["SAVED_MESSAGE_DELETE"], (channelId) => {
  const obj = { type: "SAVED_MESSAGE_DELETE", savedMessageData: null };
  obj[1] = obj(8381).savedMessageDeleteObjectToClient(channelId);
  const obj2 = obj(8381);
  const obj3 = dispatcher;
  dispatcher.dispatch(obj).catch((error) => {
    outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(outer1_3[13]).socket;
    obj = { error, action: obj.type };
    const result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["FRIEND_SUGGESTION_CREATE"], (suggestion) => {
  const obj = { type: "FRIEND_SUGGESTION_CREATE", suggestion };
  const obj2 = dispatcher;
  dispatcher.dispatch(obj).catch((error) => {
    outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(outer1_3[13]).socket;
    obj = { error, action: obj.type };
    const result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["FRIEND_SUGGESTION_DELETE"], (suggestedUserId) => {
  const obj = { type: "FRIEND_SUGGESTION_DELETE", suggestedUserId: suggestedUserId.suggested_user_id };
  const obj2 = dispatcher;
  dispatcher.dispatch(obj).catch((error) => {
    outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(outer1_3[13]).socket;
    obj = { error, action: obj.type };
    const result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["WEBHOOKS_UPDATE"], (guildId) => {
  const obj = { type: "WEBHOOKS_UPDATE", guildId: guildId.guild_id, channelId: guildId.channel_id };
  const obj2 = dispatcher;
  dispatcher.dispatch(obj).catch((error) => {
    outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(outer1_3[13]).socket;
    obj = { error, action: obj.type };
    const result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["MESSAGE_REACTION_ADD", "MESSAGE_REACTION_REMOVE"], (channelId, type) => {
  const obj = { type, channelId: channelId.channel_id, messageId: channelId.message_id, userId: channelId.user_id, emoji: channelId.emoji, colors: channelId.burst_colors, reactionType: channelId.type, messageAuthorId: channelId.message_author_id };
  const obj2 = dispatcher;
  dispatcher.dispatch(obj).catch((error) => {
    outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(outer1_3[13]).socket;
    obj = { error, action: obj.type };
    const result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["MESSAGE_POLL_VOTE_ADD", "MESSAGE_POLL_VOTE_REMOVE"], (channelId) => {
  let str = "MESSAGE_REACTION_REMOVE";
  if ("MESSAGE_POLL_VOTE_ADD" === arg1) {
    str = "MESSAGE_REACTION_ADD";
  }
  obj = { type: str, channelId: channelId.channel_id, messageId: channelId.message_id, userId: channelId.user_id, emoji: obj, reactionType: obj(7222).ReactionTypes.VOTE };
  obj = { id: channelId.answer_id, name: "" };
  const obj3 = dispatcher;
  dispatcher.dispatch(obj).catch((error) => {
    outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(outer1_3[13]).socket;
    obj = { error, action: obj.type };
    const result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["MESSAGE_POLL_VOTE_ADD_MANY"], (channelId) => {
  let obj = {
    type: "MESSAGE_REACTION_ADD_MANY",
    channelId: channelId.channel_id,
    messageId: channelId.message_id,
    reactions: votes.map((answer_id) => {
      const obj = {};
      const merged = Object.assign(answer_id);
      obj.emoji = { id: answer_id.answer_id, name: "" };
      obj.reactionType = obj(table[26]).ReactionTypes.VOTE;
      return obj;
    })
  };
  votes = channelId.votes;
  const obj2 = dispatcher;
  dispatcher.dispatch(obj).catch((error) => {
    outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(outer1_3[13]).socket;
    obj = { error, action: obj.type };
    const result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["MESSAGE_REACTION_REMOVE_ALL"], (channelId) => {
  const obj = { type: "MESSAGE_REACTION_REMOVE_ALL", channelId: channelId.channel_id, messageId: channelId.message_id };
  const obj2 = dispatcher;
  dispatcher.dispatch(obj).catch((error) => {
    outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(outer1_3[13]).socket;
    obj = { error, action: obj.type };
    const result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["MESSAGE_REACTION_REMOVE_EMOJI"], (channelId) => {
  const obj = { type: "MESSAGE_REACTION_REMOVE_EMOJI", channelId: channelId.channel_id, messageId: channelId.message_id, emoji: channelId.emoji };
  const obj2 = dispatcher;
  dispatcher.dispatch(obj).catch((error) => {
    outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(outer1_3[13]).socket;
    obj = { error, action: obj.type };
    const result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["MESSAGE_REACTION_ADD_MANY"], (channelId) => {
  const obj = { type: "MESSAGE_REACTION_ADD_MANY", channelId: channelId.channel_id, messageId: channelId.message_id, reactions: channelId.reactions };
  const obj2 = dispatcher;
  dispatcher.dispatch(obj).catch((error) => {
    outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(outer1_3[13]).socket;
    obj = { error, action: obj.type };
    const result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["PAYMENT_UPDATE"], (payment) => {
  const obj = { type: "PAYMENT_UPDATE", payment };
  const obj2 = dispatcher;
  dispatcher.dispatch(obj).catch((error) => {
    outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(outer1_3[13]).socket;
    obj = { error, action: obj.type };
    const result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["ENTITLEMENT_CREATE", "ENTITLEMENT_UPDATE", "ENTITLEMENT_DELETE"], (entitlement, type) => {
  const obj = { type, entitlement };
  const obj2 = dispatcher;
  dispatcher.dispatch(obj).catch((error) => {
    outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(outer1_3[13]).socket;
    obj = { error, action: obj.type };
    const result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["USER_PAYMENT_SOURCES_UPDATE"], () => {
  if (obj.isUserSettingsOpen()) {
    const paymentSources = _deletePaymentSource.fetchPaymentSources();
    const tmpResult = _deletePaymentSource;
    const subscriptionPlansBySKUs = importAll(5877).fetchSubscriptionPlansBySKUs(fetchedSKUIDs.getFetchedSKUIDs());
    const obj3 = importAll(5877);
  }
});
defineSimpleDispatch(["USER_SUBSCRIPTIONS_UPDATE"], () => {
  const currentUser = importAll(8309).fetchCurrentUser();
  const obj = importAll(8309);
  const tmp3 = require;
  if (obj2.isUserSettingsOpen()) {
    const subscriptions = tmp3(4623).fetchSubscriptions();
    const tmp3Result = tmp3(4623);
  }
});
defineSimpleDispatch(["WISHLIST_ITEM_PURCHASED"], (recipientId) => {
  const obj = { type: "WISHLIST_ITEM_PURCHASED", recipientId: recipientId.recipient_id, skuId: recipientId.sku_id };
  const obj2 = dispatcher;
  dispatcher.dispatch(obj).catch((error) => {
    outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(outer1_3[13]).socket;
    obj = { error, action: obj.type };
    const result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["USER_BADGE_STATE_UPDATE"], (badge_id) => {
  const badge = urlUserId.fetchBadge(badge_id.badge_id);
});
defineSimpleDispatch(["USER_PREMIUM_GUILD_SUBSCRIPTION_SLOT_CREATE"], (subscription_id) => {
  const obj = { type: "GUILD_BOOST_SLOT_CREATE", guildBoostSlot: createFromServer.createFromServer(subscription_id, store2.getSubscriptionById(subscription_id.subscription_id)) };
  const obj2 = dispatcher;
  dispatcher.dispatch(obj).catch((error) => {
    outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(outer1_3[13]).socket;
    obj = { error, action: obj.type };
    const result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["USER_PREMIUM_GUILD_SUBSCRIPTION_SLOT_UPDATE"], (subscription_id) => {
  const obj = { type: "GUILD_BOOST_SLOT_UPDATE", guildBoostSlot: createFromServer.createFromServer(subscription_id, store2.getSubscriptionById(subscription_id.subscription_id)) };
  const obj2 = dispatcher;
  dispatcher.dispatch(obj).catch((error) => {
    outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(outer1_3[13]).socket;
    obj = { error, action: obj.type };
    const result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["BILLING_POPUP_BRIDGE_CALLBACK"], (paymentSourceType) => {
  const obj = { type: "BILLING_POPUP_BRIDGE_CALLBACK", paymentSourceType: paymentSourceType.payment_source_type, state: paymentSourceType.state, path: paymentSourceType.path, query: paymentSourceType.query };
  const obj2 = dispatcher;
  dispatcher.dispatch(obj).catch((error) => {
    outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(outer1_3[13]).socket;
    obj = { error, action: obj.type };
    const result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["USER_PAYMENT_BROWSER_CHECKOUT_DONE"], (loadId) => {
  const obj = { type: "USER_PAYMENT_BROWSER_CHECKOUT_DONE", loadId: loadId.load_id, skuId: loadId.sku_id, skuSubscriptionPlanId: loadId.sku_subscription_plan_id };
  const obj2 = dispatcher;
  dispatcher.dispatch(obj).catch((error) => {
    outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(outer1_3[13]).socket;
    obj = { error, action: obj.type };
    const result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["USER_PAYMENT_CLIENT_ADD"], (arg0) => {
  const _require = arg0;
  const purchaseTokenHash = _getPurchaseToken.getPurchaseTokenHash();
  purchaseTokenHash.then((arg0) => {
    const purchase_token_hash = obj.purchase_token_hash;
    if (purchase_token_hash === arg0) {
      obj = { type: "USER_PAYMENT_CLIENT_ADD", purchaseTokenHash: null, expiresAt: null };
      obj[1] = purchase_token_hash;
      obj[2] = tmp.expires_at;
      const obj2 = outer1_1(outer1_3[20]);
      outer1_1(outer1_3[20]).dispatch(obj).catch((error) => {
        outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
        const socket = obj(outer1_3[13]).socket;
        obj = { error, action: obj.type };
        const result = socket.resetSocketOnDispatchError(obj);
      });
      const dispatchResult = outer1_1(outer1_3[20]).dispatch(obj);
    }
  });
});
defineSimpleDispatch(["GUILD_MEMBER_LIST_UPDATE"], (arg0) => {
  let closure_0 = arg0;
  const Emitter = initialize.Emitter;
  Emitter.batched(() => {
    let obj = function handleItem(member) {
      if (null != member.member) {
        member = member.member;
        outer1_25(obj.guild_id, member.user, member);
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
          const tmp = outer1_1(outer1_3[37])(activities, hidden_activities);
          obj = { user: null, status: null, clientStatus: null, activities: null, hiddenActivities: null, guildId: null, processedAtTimestamp: null };
          ({ user: obj[0], status: obj[1], client_status: obj[2] } = presence);
          const activities1 = tmp.activities;
          obj[3] = activities1.map((timestamps) => {
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
                let obj = {};
                const merged = Object.assign(timestamps);
                obj = {};
                const merged1 = Object.assign(timestamps.timestamps);
                let tmp8 = end > created_at;
                if (tmp8) {
                  tmp8 = timestamps.type !== constants.LISTENING;
                }
                obj.isCountDown = tmp8;
                obj.timestamps = obj;
                tmp2 = obj;
              }
            }
            return tmp2;
          });
          obj[4] = tmp.hiddenActivities;
          obj[5] = tmp5.guild_id;
          obj[6] = presence.processed_at_timestamp;
          outer1_21.add(obj);
          const tmp9 = outer1_1(outer1_3[37]);
        }
        tmp5 = obj;
      }
    };
    const ops = obj.ops;
    let item = ops.forEach((arg0) => {
      let items;
      let op;
      ({ op, items } = arg0);
      if ("SYNC" === op) {
        const item = items.forEach(obj);
      } else if ("UPDATE" === op) {
        obj(tmp);
      }
    });
    obj = outer1_1(outer1_3[12]);
    obj.flush();
    obj = { type: "GUILD_MEMBER_LIST_UPDATE", guildId: obj.guild_id, id: obj.id, ops: obj.ops, groups: obj.groups, memberCount: obj.member_count, onlineCount: obj.online_count };
    const obj3 = outer1_1(outer1_3[20]);
    outer1_1(outer1_3[20]).dispatch(obj).catch((error) => {
      outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
      const socket = obj(outer1_3[13]).socket;
      obj = { error, action: obj.type };
      const result = socket.resetSocketOnDispatchError(obj);
    });
  });
});
defineSimpleDispatch(["GIFT_CODE_UPDATE"], (uses) => {
  const obj = { type: "GIFT_CODE_UPDATE", uses: uses.uses, code: uses.code };
  const obj2 = dispatcher;
  dispatcher.dispatch(obj).catch((error) => {
    outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(outer1_3[13]).socket;
    obj = { error, action: obj.type };
    const result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["GIFT_CODE_CREATE"], (giftCode) => {
  const obj = { type: "GIFT_CODE_CREATE", giftCode };
  const obj2 = dispatcher;
  dispatcher.dispatch(obj).catch((error) => {
    outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(outer1_3[13]).socket;
    obj = { error, action: obj.type };
    const result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["LIBRARY_APPLICATION_UPDATE"], (libraryApplication) => {
  const obj = { type: "LIBRARY_APPLICATION_UPDATE", libraryApplication };
  const obj2 = dispatcher;
  dispatcher.dispatch(obj).catch((error) => {
    outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(outer1_3[13]).socket;
    obj = { error, action: obj.type };
    const result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["STREAM_CREATE"], (streamKey) => {
  const obj = { type: "STREAM_CREATE", streamKey: streamKey.stream_key, region: streamKey.region, viewerIds: streamKey.viewer_ids, rtcServerId: streamKey.rtc_server_id, rtcChannelId: streamKey.rtc_channel_id, paused: streamKey.paused };
  const obj2 = dispatcher;
  dispatcher.dispatch(obj).catch((error) => {
    outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(outer1_3[13]).socket;
    obj = { error, action: obj.type };
    const result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["STREAM_SERVER_UPDATE"], (streamKey) => {
  const obj = { type: "STREAM_SERVER_UPDATE", streamKey: streamKey.stream_key, endpoint: streamKey.endpoint, token: streamKey.token };
  const obj2 = dispatcher;
  dispatcher.dispatch(obj).catch((error) => {
    outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(outer1_3[13]).socket;
    obj = { error, action: obj.type };
    const result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["STREAM_UPDATE"], (streamKey) => {
  const obj = { type: "STREAM_UPDATE", streamKey: streamKey.stream_key, region: streamKey.region, viewerIds: streamKey.viewer_ids, paused: streamKey.paused };
  const obj2 = dispatcher;
  dispatcher.dispatch(obj).catch((error) => {
    outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(outer1_3[13]).socket;
    obj = { error, action: obj.type };
    const result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["STREAM_DELETE"], (streamKey) => {
  const obj = { type: "STREAM_DELETE", streamKey: streamKey.stream_key, unavailable: streamKey.unavailable, reason: streamKey.reason };
  const obj2 = dispatcher;
  dispatcher.dispatch(obj).catch((error) => {
    outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(outer1_3[13]).socket;
    obj = { error, action: obj.type };
    const result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["GENERIC_PUSH_NOTIFICATION_SENT"], (title) => {
  const obj = { type: "GENERIC_PUSH_NOTIFICATION_SENT", title: title.title, body: title.body, trackingType: title.tracking_type, icon: title.icon, route: title.route, tag: title.tag };
  const obj2 = dispatcher;
  dispatcher.dispatch(obj).catch((error) => {
    outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(outer1_3[13]).socket;
    obj = { error, action: obj.type };
    const result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["REACTION_NOTIFICATION_SENT"], (route) => {
  const obj = { type: "REACTION_NOTIFICATION_SENT", route: route.route, message: route.message, emoji: route.emoji, reactorUserId: route.reactor_user_id, title: route.title, body: route.body, trackingType: route.tracking_type, icon: route.icon };
  const obj2 = dispatcher;
  dispatcher.dispatch(obj).catch((error) => {
    outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(outer1_3[13]).socket;
    obj = { error, action: obj.type };
    const result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["NOTIFICATION_CENTER_ITEM_CREATE"], (item) => {
  const obj = { type: "NOTIFICATION_CENTER_ITEM_CREATE", item };
  const obj2 = dispatcher;
  dispatcher.dispatch(obj).catch((error) => {
    outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(outer1_3[13]).socket;
    obj = { error, action: obj.type };
    const result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["NOTIFICATION_CENTER_ITEM_DELETE"], (id) => {
  const obj = { type: "NOTIFICATION_CENTER_ITEM_DELETE", id: id.id };
  const obj2 = dispatcher;
  dispatcher.dispatch(obj).catch((error) => {
    outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(outer1_3[13]).socket;
    obj = { error, action: obj.type };
    const result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["NOTIFICATION_CENTER_ITEMS_ACK"], (id) => {
  const obj = { type: "NOTIFICATION_CENTER_ITEMS_ACK", ids: items, optimistic: false };
  items = [id.id];
  const obj2 = dispatcher;
  dispatcher.dispatch(obj).catch((error) => {
    outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(outer1_3[13]).socket;
    obj = { error, action: obj.type };
    const result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["NOTIFICATION_CENTER_ITEM_COMPLETED"], (item_enum) => {
  const obj = { type: "NOTIFICATION_CENTER_ITEM_COMPLETED", item_enum: item_enum.item_enum };
  const obj2 = dispatcher;
  dispatcher.dispatch(obj).catch((error) => {
    outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(outer1_3[13]).socket;
    obj = { error, action: obj.type };
    const result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["QUESTS_USER_STATUS_UPDATE"], (user_status) => {
  const obj = { type: "QUESTS_USER_STATUS_UPDATE", user_status: user_status.user_status };
  const obj2 = dispatcher;
  dispatcher.dispatch(obj).catch((error) => {
    outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(outer1_3[13]).socket;
    obj = { error, action: obj.type };
    const result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["QUESTS_USER_COMPLETION_UPDATE"], (quest_enrollment_blocked_until) => {
  const obj = { type: "QUESTS_USER_COMPLETION_UPDATE", quest_enrollment_blocked_until: quest_enrollment_blocked_until.quest_enrollment_blocked_until };
  const obj2 = dispatcher;
  dispatcher.dispatch(obj).catch((error) => {
    outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(outer1_3[13]).socket;
    obj = { error, action: obj.type };
    const result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["QUEST_PREVIEW_UPDATE"], (quest_id) => {
  const obj = { type: "QUEST_PREVIEW_UPDATE", quest_id: quest_id.quest_id };
  const obj2 = dispatcher;
  dispatcher.dispatch(obj).catch((error) => {
    outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(outer1_3[13]).socket;
    obj = { error, action: obj.type };
    const result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["APPLICATION_COMMAND_PERMISSIONS_UPDATE"], (guildId, type) => {
  const obj = { type, guildId: guildId.guild_id };
  const obj2 = dispatcher;
  dispatcher.dispatch(obj).catch((error) => {
    outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(outer1_3[13]).socket;
    obj = { error, action: obj.type };
    const result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["GUILD_APPLICATION_COMMAND_INDEX_UPDATE"], (guildId) => {
  const obj = { type: "GUILD_APPLICATION_COMMAND_INDEX_UPDATE", guildId: guildId.guild_id, version: guildId.version };
  const obj2 = dispatcher;
  dispatcher.dispatch(obj).catch((error) => {
    outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(outer1_3[13]).socket;
    obj = { error, action: obj.type };
    const result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["GUILD_JOIN_REQUEST_CREATE"], (request) => {
  const obj = { type: "GUILD_JOIN_REQUEST_CREATE", request: request.request, status: request.status, guildId: request.guild_id };
  const obj2 = dispatcher;
  dispatcher.dispatch(obj).catch((error) => {
    outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(outer1_3[13]).socket;
    obj = { error, action: obj.type };
    const result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["GUILD_JOIN_REQUEST_UPDATE"], (request) => {
  const obj = { type: "GUILD_JOIN_REQUEST_UPDATE", request: request.request, status: request.status, guildId: request.guild_id };
  const obj2 = dispatcher;
  dispatcher.dispatch(obj).catch((error) => {
    outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(outer1_3[13]).socket;
    obj = { error, action: obj.type };
    const result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["GUILD_JOIN_REQUEST_DELETE"], (id) => {
  const obj = { type: "GUILD_JOIN_REQUEST_DELETE", id: id.id, userId: id.user_id, guildId: id.guild_id };
  const obj2 = dispatcher;
  dispatcher.dispatch(obj).catch((error) => {
    outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(outer1_3[13]).socket;
    obj = { error, action: obj.type };
    const result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["INTERACTION_CREATE"], (id) => {
  const obj = { type: "INTERACTION_CREATE", interactionId: id.id, nonce: id.nonce };
  const obj2 = dispatcher;
  dispatcher.dispatch(obj).catch((error) => {
    outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(outer1_3[13]).socket;
    obj = { error, action: obj.type };
    const result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["INTERACTION_SUCCESS"], (id) => {
  const obj = { type: "INTERACTION_SUCCESS", interactionId: id.id, nonce: id.nonce };
  const obj2 = dispatcher;
  dispatcher.dispatch(obj).catch((error) => {
    outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(outer1_3[13]).socket;
    obj = { error, action: obj.type };
    const result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["INTERACTION_FAILURE"], (id) => {
  const obj = { type: "INTERACTION_FAILURE", interactionId: id.id, nonce: id.nonce, reasonCode: id.reason_code };
  const obj2 = dispatcher;
  dispatcher.dispatch(obj).catch((error) => {
    outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(outer1_3[13]).socket;
    obj = { error, action: obj.type };
    const result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["APPLICATION_COMMAND_AUTOCOMPLETE_RESPONSE"], (choices) => {
  const obj = { type: "APPLICATION_COMMAND_AUTOCOMPLETE_RESPONSE", choices: choices.choices, nonce: choices.nonce };
  const obj2 = dispatcher;
  dispatcher.dispatch(obj).catch((error) => {
    outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(outer1_3[13]).socket;
    obj = { error, action: obj.type };
    const result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["INTERACTION_MODAL_CREATE"], (id) => {
  const obj = { type: "INTERACTION_MODAL_CREATE", id: id.id, channelId: id.channel_id, customId: id.custom_id, application: id.application, title: id.title, components: null, nonce: null, resolved: null };
  obj[6] = obj(4525).transformComponents(id.components);
  ({ nonce: obj[7], resolved: obj[8] } = id);
  const obj2 = obj(4525);
  const obj3 = dispatcher;
  dispatcher.dispatch(obj).catch((error) => {
    outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(outer1_3[13]).socket;
    obj = { error, action: obj.type };
    const result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["INTERACTION_IFRAME_MODAL_CREATE"], (id) => {
  const obj = { type: "INTERACTION_IFRAME_MODAL_CREATE", id: id.id, channelId: id.channel_id, customId: id.custom_id, application: id.application, title: id.title, iframePath: id.iframe_path, modalSize: id.modal_size, nonce: id.nonce };
  const obj2 = dispatcher;
  dispatcher.dispatch(obj).catch((error) => {
    outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(outer1_3[13]).socket;
    obj = { error, action: obj.type };
    const result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["STAGE_INSTANCE_CREATE"], (instance) => {
  const obj = { type: "STAGE_INSTANCE_CREATE", instance };
  const obj2 = dispatcher;
  dispatcher.dispatch(obj).catch((error) => {
    outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(outer1_3[13]).socket;
    obj = { error, action: obj.type };
    const result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["STAGE_INSTANCE_UPDATE"], (instance) => {
  const obj = { type: "STAGE_INSTANCE_UPDATE", instance };
  const obj2 = dispatcher;
  dispatcher.dispatch(obj).catch((error) => {
    outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(outer1_3[13]).socket;
    obj = { error, action: obj.type };
    const result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["STAGE_INSTANCE_DELETE"], (instance) => {
  const obj = { type: "STAGE_INSTANCE_DELETE", instance };
  const obj2 = dispatcher;
  dispatcher.dispatch(obj).catch((error) => {
    outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(outer1_3[13]).socket;
    obj = { error, action: obj.type };
    const result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["GUILD_SCHEDULED_EVENT_CREATE"], (guildScheduledEvent) => {
  const obj = { type: "GUILD_SCHEDULED_EVENT_CREATE", guildScheduledEvent };
  const obj2 = dispatcher;
  dispatcher.dispatch(obj).catch((error) => {
    outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(outer1_3[13]).socket;
    obj = { error, action: obj.type };
    const result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["GUILD_SCHEDULED_EVENT_UPDATE"], (guildScheduledEvent) => {
  const obj = { type: "GUILD_SCHEDULED_EVENT_UPDATE", guildScheduledEvent };
  const obj2 = dispatcher;
  dispatcher.dispatch(obj).catch((error) => {
    outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(outer1_3[13]).socket;
    obj = { error, action: obj.type };
    const result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["GUILD_SCHEDULED_EVENT_DELETE"], (guildScheduledEvent) => {
  const obj = { type: "GUILD_SCHEDULED_EVENT_DELETE", guildScheduledEvent };
  const obj2 = dispatcher;
  dispatcher.dispatch(obj).catch((error) => {
    outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(outer1_3[13]).socket;
    obj = { error, action: obj.type };
    const result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE"], (eventException) => {
  const obj = { type: "GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE", eventException };
  const obj2 = dispatcher;
  dispatcher.dispatch(obj).catch((error) => {
    outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(outer1_3[13]).socket;
    obj = { error, action: obj.type };
    const result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE"], (eventException) => {
  const obj = { type: "GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE", eventException };
  const obj2 = dispatcher;
  dispatcher.dispatch(obj).catch((error) => {
    outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(outer1_3[13]).socket;
    obj = { error, action: obj.type };
    const result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE"], (eventException) => {
  const obj = { type: "GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE", eventException };
  const obj2 = dispatcher;
  dispatcher.dispatch(obj).catch((error) => {
    outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(outer1_3[13]).socket;
    obj = { error, action: obj.type };
    const result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["GUILD_SCHEDULED_EVENT_EXCEPTIONS_DELETE"], (eventId) => {
  const obj = { type: "GUILD_SCHEDULED_EVENT_EXCEPTIONS_DELETE", eventId: eventId.event_id };
  const obj2 = dispatcher;
  dispatcher.dispatch(obj).catch((error) => {
    outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(outer1_3[13]).socket;
    obj = { error, action: obj.type };
    const result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["GUILD_SCHEDULED_EVENT_USER_ADD"], (userId) => {
  const obj = { type: "GUILD_SCHEDULED_EVENT_USER_ADD", userId: userId.user_id, guildId: userId.guild_id, guildEventId: userId.guild_scheduled_event_id, guildEventExceptionId: userId.guild_scheduled_event_exception_id, response: userId.response };
  const obj2 = dispatcher;
  dispatcher.dispatch(obj).catch((error) => {
    outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(outer1_3[13]).socket;
    obj = { error, action: obj.type };
    const result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["GUILD_SCHEDULED_EVENT_USER_REMOVE"], (userId) => {
  const obj = { type: "GUILD_SCHEDULED_EVENT_USER_REMOVE", userId: userId.user_id, guildId: userId.guild_id, guildEventId: userId.guild_scheduled_event_id, guildEventExceptionId: userId.guild_scheduled_event_exception_id, response: userId.response };
  const obj2 = dispatcher;
  dispatcher.dispatch(obj).catch((error) => {
    outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(outer1_3[13]).socket;
    obj = { error, action: obj.type };
    const result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["GUILD_DIRECTORY_ENTRY_CREATE"], (channelId) => {
  const obj = { type: "GUILD_DIRECTORY_ENTRY_CREATE", channelId: channelId.directory_channel_id, entry: channelId };
  const obj2 = dispatcher;
  dispatcher.dispatch(obj).catch((error) => {
    outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(outer1_3[13]).socket;
    obj = { error, action: obj.type };
    const result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["GUILD_DIRECTORY_ENTRY_UPDATE"], (channelId) => {
  const obj = { type: "GUILD_DIRECTORY_ENTRY_UPDATE", channelId: channelId.directory_channel_id, entry: channelId };
  const obj2 = dispatcher;
  dispatcher.dispatch(obj).catch((error) => {
    outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(outer1_3[13]).socket;
    obj = { error, action: obj.type };
    const result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["GUILD_DIRECTORY_ENTRY_DELETE"], (channelId) => {
  const obj = { type: "GUILD_DIRECTORY_ENTRY_DELETE", channelId: channelId.directory_channel_id, guildId: channelId.entity_id };
  const obj2 = dispatcher;
  dispatcher.dispatch(obj).catch((error) => {
    outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(outer1_3[13]).socket;
    obj = { error, action: obj.type };
    const result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["AUTO_MODERATION_MENTION_RAID_DETECTION"], (guildId) => {
  const obj = { type: "AUTO_MODERATION_MENTION_RAID_DETECTION", guildId: guildId.guild_id, decisionId: guildId.decision_id, suspiciousMentionActivityUntil: guildId.suspicious_mention_activity_until };
  const obj2 = dispatcher;
  dispatcher.dispatch(obj).catch((error) => {
    outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(outer1_3[13]).socket;
    obj = { error, action: obj.type };
    const result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["VOICE_CHANNEL_EFFECT_SEND"], (emoji) => {
  const obj = { type: "VOICE_CHANNEL_EFFECT_SEND", emoji: emoji.emoji, channelId: emoji.channel_id, userId: emoji.user_id, animationType: emoji.animation_type, animationId: emoji.animation_id, soundId: emoji.sound_id, soundVolume: emoji.sound_volume };
  const obj2 = dispatcher;
  dispatcher.dispatch(obj).catch((error) => {
    outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(outer1_3[13]).socket;
    obj = { error, action: obj.type };
    const result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["CLIPS_REMOTE_TRIGGER"], (userId) => {
  const obj = { type: "CLIPS_REMOTE_TRIGGER", userId: userId.user_id, applicationId: userId.application_id, partyId: null, remoteClipId: null };
  let party_id = userId.party_id;
  if (party_id == null) {
    party_id = null;
  }
  obj[3] = party_id;
  obj[4] = userId.remote_clip_id;
  const obj2 = dispatcher;
  dispatcher.dispatch(obj).catch((error) => {
    outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(outer1_3[13]).socket;
    obj = { error, action: obj.type };
    const result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["GUILD_SOUNDBOARD_SOUND_CREATE"], (guildId) => {
  let obj = { type: "GUILD_SOUNDBOARD_SOUND_CREATE", sound: null };
  obj = { guildId: guildId.guild_id, name: guildId.name, soundId: guildId.sound_id, user: null, userId: null, volume: null, emojiId: null, emojiName: null, available: null };
  obj[3] = new createdAt(guildId.user);
  ({ user_id: obj2[4], volume: obj2[5], emoji_id: obj2[6], emoji_name: obj2[7], available: obj2[8] } = guildId);
  obj[1] = obj;
  const tmp = new createdAt(guildId.user);
  const obj3 = dispatcher;
  dispatcher.dispatch(obj).catch((error) => {
    outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(outer1_3[13]).socket;
    obj = { error, action: obj.type };
    const result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["GUILD_SOUNDBOARD_SOUND_UPDATE"], (guildId) => {
  let obj = { type: "GUILD_SOUNDBOARD_SOUND_UPDATE", sound: null };
  obj = { guildId: guildId.guild_id, name: guildId.name, soundId: guildId.sound_id, user: null, userId: null, volume: null, emojiId: null, emojiName: null, available: null };
  obj[3] = new createdAt(guildId.user);
  ({ user_id: obj2[4], volume: obj2[5], emoji_id: obj2[6], emoji_name: obj2[7], available: obj2[8] } = guildId);
  obj[1] = obj;
  const tmp = new createdAt(guildId.user);
  const obj3 = dispatcher;
  dispatcher.dispatch(obj).catch((error) => {
    outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(outer1_3[13]).socket;
    obj = { error, action: obj.type };
    const result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["GUILD_SOUNDBOARD_SOUND_DELETE"], (guildId) => {
  const obj = { type: "GUILD_SOUNDBOARD_SOUND_DELETE", guildId: guildId.guild_id, soundId: guildId.sound_id };
  const obj2 = dispatcher;
  dispatcher.dispatch(obj).catch((error) => {
    outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(outer1_3[13]).socket;
    obj = { error, action: obj.type };
    const result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["GUILD_SOUNDBOARD_SOUNDS_UPDATE"], (guildId) => {
  let obj = guildId;
  obj = {
    type: "GUILD_SOUNDBOARD_SOUNDS_UPDATE",
    guildId: guildId.guild_id,
    soundboardSounds: soundboard_sounds.map((name) => {
      obj = { name: name.name, soundId: name.sound_id, emojiName: name.emoji_name, emojiId: name.emoji_id, userId: name.user_id, volume: name.volume, available: name.available, guildId: obj.guild_id };
      return obj;
    })
  };
  soundboard_sounds = guildId.soundboard_sounds;
  const obj2 = dispatcher;
  dispatcher.dispatch(obj).catch((error) => {
    outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(outer1_3[13]).socket;
    obj = { error, action: obj.type };
    const result = socket.resetSocketOnDispatchError(obj);
  });
});
definePreloadableDispatch(["EMBEDDED_ACTIVITY_UPDATE_V2"], (guild_id) => {
  const items = [guild_id.guild_id];
  return ChannelLoader.loadGuildIds(items);
}, (application_id) => {
  let obj = { application_id: application_id.application_id, launch_id: application_id.launch_id, composite_instance_id: application_id.composite_instance_id, location: application_id.location, participants: null, content_classification: null };
  let participants = application_id.participants;
  if (participants == null) {
    participants = [];
  }
  obj = { type: "EMBEDDED_ACTIVITY_UPDATE_V2", instance: obj };
  obj[4] = participants;
  obj[5] = application_id.content_classification;
  const obj3 = dispatcher;
  dispatcher.dispatch(obj).catch((error) => {
    outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(outer1_3[13]).socket;
    obj = { error, action: obj.type };
    const result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["AUTH_SESSION_CHANGE"], (authSessionIdHash) => {
  const obj = { type: "AUTH_SESSION_CHANGE", authSessionIdHash: authSessionIdHash.auth_session_id_hash };
  const obj2 = dispatcher;
  dispatcher.dispatch(obj).catch((error) => {
    outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(outer1_3[13]).socket;
    obj = { error, action: obj.type };
    const result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["USER_CONNECTIONS_LINK_CALLBACK"], (provider) => {
  const obj = { type: "USER_CONNECTIONS_LINK_CALLBACK", provider: provider.provider, callbackCode: provider.callback_code, callbackState: provider.callback_state };
  const obj2 = dispatcher;
  dispatcher.dispatch(obj).catch((error) => {
    outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(outer1_3[13]).socket;
    obj = { error, action: obj.type };
    const result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["USER_CONNECTIONS_CALLBACK"], (provider) => {
  const obj = { type: "USER_CONNECTIONS_CALLBACK", provider: provider.provider, code: provider.code, state: provider.state, openid_params: provider.openid_params };
  const obj2 = dispatcher;
  dispatcher.dispatch(obj).catch((error) => {
    outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(outer1_3[13]).socket;
    obj = { error, action: obj.type };
    const result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["DELETED_ENTITY_IDS"], (arg0) => {
  const obj = { type: "DELETED_ENTITY_IDS" };
  const merged = Object.assign(arg0);
  const obj2 = dispatcher;
  dispatcher.dispatch(obj).catch((error) => {
    outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(outer1_3[13]).socket;
    obj = { error, action: obj.type };
    const result = socket.resetSocketOnDispatchError(obj);
  });
});
definePreloadableDispatch(["CHANNEL_SYNC"], (guild_id) => {
  const items = [guild_id.guild_id];
  return ChannelLoader.loadGuildIds(items);
}, (guild_id) => {
  if (!guild_id.integrity_check) {
    const channels = guild_id.channels;
    const item = channels.forEach((arg0) => {
      set.add(arg0);
    });
  }
  const obj = { type: "CHANNEL_SYNC", guild_id: guild_id.guild_id, channels: guild_id.channels, integrity_check: guild_id.integrity_check };
  const obj2 = dispatcher;
  dispatcher.dispatch(obj).catch((error) => {
    outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(outer1_3[13]).socket;
    obj = { error, action: obj.type };
    const result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["CONSOLE_COMMAND_UPDATE"], (id) => {
  const obj = { type: "CONSOLE_COMMAND_UPDATE", id: id.id, result: id.result, error: id.error };
  const obj2 = dispatcher;
  dispatcher.dispatch(obj).catch((error) => {
    outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(outer1_3[13]).socket;
    obj = { error, action: obj.type };
    const result = socket.resetSocketOnDispatchError(obj);
  });
});
definePreloadableDispatch(["PASSIVE_UPDATE_V2"], (guild_id) => {
  const items = [guild_id.guild_id];
  return ChannelLoader.loadGuildIds(items);
}, (guildId) => {
  let obj = {
    type: "PASSIVE_UPDATE_V2",
    guildId: guildId.guild_id,
    members: guildId.updated_members,
    channels: updated_channels.map((id) => ({ id: id.id, lastMessageId: id.last_message_id, lastPinTimestamp: id.last_pin_timestamp })),
    voiceStates: updated_voice_states.map((channelId) => {
      let discoverable;
      const obj = { channelId: channelId.channel_id, deaf: tmp, mute: tmp2, requestToSpeakTimestamp: null, selfDeaf: null, selfMute: null, selfStream: null, selfVideo: null, sessionId: null, suppress: null, userId: null, discoverable: null, connectedAt: null };
      let prop = channelId.request_to_speak_timestamp;
      if (prop == null) {
        prop = null;
      }
      obj[3] = prop;
      obj[4] = channelId.self_deaf || false;
      obj[5] = channelId.self_mute || false;
      obj[6] = channelId.self_stream || false;
      obj[7] = channelId.self_video || false;
      ({ session_id: obj[8], suppress: obj[9], user_id: obj[10], discoverable } = channelId);
      if (discoverable == null) {
        discoverable = true;
      }
      obj[11] = discoverable;
      obj[12] = channelId.connected_at;
      return obj;
    }),
    removedVoiceStateUsers: guildId.removed_voice_states
  };
  updated_channels = guildId.updated_channels;
  updated_voice_states = guildId.updated_voice_states;
  const obj2 = dispatcher;
  dispatcher.dispatch(obj).catch((error) => {
    outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(outer1_3[13]).socket;
    obj = { error, action: obj.type };
    const result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["CREATOR_MONETIZATION_RESTRICTIONS_UPDATE"], (guildId) => {
  const obj = { type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS", guildId: guildId.guild_id, restrictions: guildId.restrictions };
  const obj2 = dispatcher;
  dispatcher.dispatch(obj).catch((error) => {
    outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(outer1_3[13]).socket;
    obj = { error, action: obj.type };
    const result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["BILLING_REFERRAL_TRIAL_OFFER_UPDATE"], (userTrialOfferId) => {
  const obj = { type: "BILLING_REFERRAL_TRIAL_OFFER_UPDATE", userTrialOfferId: userTrialOfferId.user_trial_offer_id, recipientId: userTrialOfferId.recipient_id };
  const obj2 = dispatcher;
  dispatcher.dispatch(obj).catch((error) => {
    outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(outer1_3[13]).socket;
    obj = { error, action: obj.type };
    const result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["LAST_MESSAGES"], (guildId) => {
  const obj = { type: "MESSAGE_PREVIEWS_LOADED", guildId: guildId.guild_id, messages: guildId.messages };
  const obj2 = dispatcher;
  dispatcher.dispatch(obj).catch((error) => {
    outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(outer1_3[13]).socket;
    obj = { error, action: obj.type };
    const result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["AUTHENTICATOR_UPDATE"], (credential) => {
  const obj = { type: "AUTHENTICATOR_UPDATE", credential };
  const obj2 = dispatcher;
  dispatcher.dispatch(obj).catch((error) => {
    outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(outer1_3[13]).socket;
    obj = { error, action: obj.type };
    const result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["AUTHENTICATOR_CREATE"], (credential) => {
  const obj = { type: "AUTHENTICATOR_CREATE", credential };
  const obj2 = dispatcher;
  dispatcher.dispatch(obj).catch((error) => {
    outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(outer1_3[13]).socket;
    obj = { error, action: obj.type };
    const result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["AUTHENTICATOR_DELETE"], (credential) => {
  const obj = { type: "AUTHENTICATOR_DELETE", credential };
  const obj2 = dispatcher;
  dispatcher.dispatch(obj).catch((error) => {
    outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(outer1_3[13]).socket;
    obj = { error, action: obj.type };
    const result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["NOTIFICATION_SETTINGS_UPDATE"], (flags) => {
  obj = { type: "NOTIFICATION_SETTINGS_UPDATE", settings: obj };
  obj = { flags: flags.flags };
  const obj3 = dispatcher;
  dispatcher.dispatch(obj).catch((error) => {
    outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(outer1_3[13]).socket;
    obj = { error, action: obj.type };
    const result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["CONVERSATION_SUMMARY_UPDATE"], (arg0) => {
  const obj = { type: "CONVERSATION_SUMMARY_UPDATE" };
  const merged = Object.assign(arg0);
  const obj2 = dispatcher;
  dispatcher.dispatch(obj).catch((error) => {
    outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(outer1_3[13]).socket;
    obj = { error, action: obj.type };
    const result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["PREMIUM_MARKETING_PREVIEW"], (data) => {
  const obj = { type: "PREMIUM_MARKETING_PREVIEW", data };
  const obj2 = dispatcher;
  dispatcher.dispatch(obj).catch((error) => {
    outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(outer1_3[13]).socket;
    obj = { error, action: obj.type };
    const result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["USER_APPLICATION_UPDATE"], (applicationId) => {
  const obj = { type: "USER_APPLICATION_UPDATE", applicationId: applicationId.application_id };
  const obj2 = dispatcher;
  dispatcher.dispatch(obj).catch((error) => {
    outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(outer1_3[13]).socket;
    obj = { error, action: obj.type };
    const result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["USER_APPLICATION_REMOVE"], (applicationId) => {
  const obj = { type: "USER_APPLICATION_REMOVE", applicationId: applicationId.application_id };
  const obj2 = dispatcher;
  dispatcher.dispatch(obj).catch((error) => {
    outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(outer1_3[13]).socket;
    obj = { error, action: obj.type };
    const result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["DM_SETTINGS_UPSELL_SHOW"], (guildId) => {
  const obj = { type: "DM_SETTINGS_UPSELL_SHOW", guildId: guildId.guild_id };
  const obj2 = dispatcher;
  dispatcher.dispatch(obj).catch((error) => {
    outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(outer1_3[13]).socket;
    obj = { error, action: obj.type };
    const result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["CONTENT_INVENTORY_INBOX_STALE"], (refreshAfterMs) => {
  const obj = { type: "CONTENT_INVENTORY_INBOX_STALE", refreshAfterMs: refreshAfterMs.refresh_after_ms };
  const obj2 = dispatcher;
  dispatcher.dispatch(obj).catch((error) => {
    outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(outer1_3[13]).socket;
    obj = { error, action: obj.type };
    const result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["VIRTUAL_CURRENCY_BALANCE_UPDATE"], (balance) => {
  const obj = { type: "VIRTUAL_CURRENCY_BALANCE_UPDATE", balance: balance.balance };
  const obj2 = dispatcher;
  dispatcher.dispatch(obj).catch((error) => {
    outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(outer1_3[13]).socket;
    obj = { error, action: obj.type };
    const result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["WALLET_BALANCE_UPDATE"], (paymentSourceId) => {
  const obj = { type: "WALLET_BALANCE_UPDATE", paymentSourceId: paymentSourceId.payment_source_id, balance: paymentSourceId.balance, currency: paymentSourceId.currency };
  const obj2 = dispatcher;
  dispatcher.dispatch(obj).catch((error) => {
    outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(outer1_3[13]).socket;
    obj = { error, action: obj.type };
    const result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["GUILD_POWERUP_ENTITLEMENTS_CREATE", "GUILD_POWERUP_ENTITLEMENTS_DELETE"], (guildId, type) => {
  const obj = { type, guildId: guildId.guild_id, entitlements: guildId.entitlements };
  const obj2 = dispatcher;
  dispatcher.dispatch(obj).catch((error) => {
    outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(outer1_3[13]).socket;
    obj = { error, action: obj.type };
    const result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["GAME_SERVER_CREATE", "GAME_SERVER_UPDATE"], (guildId, type) => {
  const obj = { type, guildId: guildId.guild_id, gameServer: guildId.game_server };
  const obj2 = dispatcher;
  dispatcher.dispatch(obj).catch((error) => {
    outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(outer1_3[13]).socket;
    obj = { error, action: obj.type };
    const result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["GAME_SERVER_DELETE"], (guildId, type) => {
  const obj = { type, guildId: guildId.guild_id, gameServerId: guildId.game_server_id };
  const obj2 = dispatcher;
  dispatcher.dispatch(obj).catch((error) => {
    outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(outer1_3[13]).socket;
    obj = { error, action: obj.type };
    const result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["GUILD_APPLIED_BOOSTS_UPDATE"], (guildId, type) => {
  const obj = { type, guildId: guildId.guild_id };
  const obj2 = dispatcher;
  dispatcher.dispatch(obj).catch((error) => {
    outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(outer1_3[13]).socket;
    obj = { error, action: obj.type };
    const result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["USER_APPLICATION_IDENTITY_UPDATE"], (user_id, type) => {
  const obj = { type, user_id: user_id.user_id, application_id: user_id.application_id, username: user_id.username, avatar_hash: user_id.avatar_hash, metadata: user_id.metadata };
  const obj2 = dispatcher;
  dispatcher.dispatch(obj).catch((error) => {
    outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(outer1_3[13]).socket;
    obj = { error, action: obj.type };
    const result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["USER_APPLICATION_IDENTITY_REMOVE"], (user_id, type) => {
  const obj = { type, user_id: user_id.user_id, application_id: user_id.application_id };
  const obj2 = dispatcher;
  dispatcher.dispatch(obj).catch((error) => {
    outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(outer1_3[13]).socket;
    obj = { error, action: obj.type };
    const result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_RESPONSE"], (interactionId) => {
  const obj = { type: "SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_RESPONSE", interactionId: interactionId.interaction_id, applicationId: interactionId.application_id, skuId: interactionId.sku_id, recipientId: interactionId.recipient_id, eligible: interactionId.eligible, ineligibleReason: interactionId.ineligible_reason };
  const obj2 = dispatcher;
  dispatcher.dispatch(obj).catch((error) => {
    outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(outer1_3[13]).socket;
    obj = { error, action: obj.type };
    const result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["GUILD_ROOM_CONNECT"], (body, type) => {
  const obj = { type, room: null };
  obj[1] = obj(13022).serverGuildRoomToClient(body);
  const obj2 = obj(13022);
  const obj3 = dispatcher;
  dispatcher.dispatch(obj).catch((error) => {
    outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(outer1_3[13]).socket;
    obj = { error, action: obj.type };
    const result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["GUILD_ROOM_DISCONNECT"], (userId, type) => {
  const obj = { type, userId: userId.user_id, roomId: userId.room_id };
  const obj2 = dispatcher;
  dispatcher.dispatch(obj).catch((error) => {
    outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(outer1_3[13]).socket;
    obj = { error, action: obj.type };
    const result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["GUILD_ROOM_UPDATE"], (body, type) => {
  const obj = { type, room: null };
  obj[1] = obj(13022).serverGuildRoomToClient(body);
  const obj2 = obj(13022);
  const obj3 = dispatcher;
  dispatcher.dispatch(obj).catch((error) => {
    outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(outer1_3[13]).socket;
    obj = { error, action: obj.type };
    const result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["HAVEN_CONNECT"], (roomId, type) => {
  const obj = { type, room: null };
  obj[1] = obj(13024).parseRoom(roomId);
  const obj2 = obj(13024);
  const obj3 = dispatcher;
  dispatcher.dispatch(obj).catch((error) => {
    outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(outer1_3[13]).socket;
    obj = { error, action: obj.type };
    const result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["HAVEN_DISCONNECT"], (userId, type) => {
  const obj = { type, userId: userId.user_id, roomId: userId.room_id };
  const obj2 = dispatcher;
  dispatcher.dispatch(obj).catch((error) => {
    outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(outer1_3[13]).socket;
    obj = { error, action: obj.type };
    const result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["HAVEN_UPDATE"], (roomId, type) => {
  const obj = { type, room: null };
  obj[1] = obj(13024).parseRoom(roomId);
  const obj2 = obj(13024);
  const obj3 = dispatcher;
  dispatcher.dispatch(obj).catch((error) => {
    outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(outer1_3[13]).socket;
    obj = { error, action: obj.type };
    const result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["GUILD_OFFICIAL_GAME_APPLICATIONS_UPDATE"], (gameApplicationIds, type) => {
  const obj = { type, gameApplicationIds: gameApplicationIds.game_application_ids, guildId: gameApplicationIds.guild_id };
  const obj2 = dispatcher;
  dispatcher.dispatch(obj).catch((error) => {
    outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(outer1_3[13]).socket;
    obj = { error, action: obj.type };
    const result = socket.resetSocketOnDispatchError(obj);
  });
});
defineSimpleDispatch(["MESSAGE_REQUEST_NOTIFICATION_SENT"], (triggeringUserId) => {
  const obj = { type: "MESSAGE_REQUEST_NOTIFICATION_SENT", triggeringUserId: triggeringUserId.triggering_user_id, numMutualGuilds: triggeringUserId.num_mutual_guilds };
  const obj2 = dispatcher;
  dispatcher.dispatch(obj).catch((error) => {
    outer1_17.error("dispatchOrResetSocket error during " + obj.type + ":", error);
    const socket = obj(outer1_3[13]).socket;
    obj = { error, action: obj.type };
    const result = socket.resetSocketOnDispatchError(obj);
  });
});
let tmp2 = new require("createdAt")("ConnectionStore");
require("createFromServer").fileFinishedImporting("modules/gateway/dispatchSocketMessage.tsx");

export default function getDispatchHandler(type) {
  return table[type];
};