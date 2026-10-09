// === Module 10880: getEmbeddedActivityJoinability ===

// Module 10880 (getEmbeddedActivityJoinability)
import ChannelUtils from "ChannelUtils" /* 5411 */;
import isActivitySupportedOnClientPlatformDefault from "isActivitySupportedOnClientPlatform" /* 10881 */;
import ChannelStore from "ChannelStore" /* 2064 */;
import GuildStore from "GuildStore" /* 2086 */;
import PermissionStore from "PermissionStore" /* 4709 */;
import UserStore from "UserStore" /* 1390 */;
import VoiceStateStore from "VoiceStateStore" /* 5112 */;

require = fn;
function getEmbeddedActivityJoinability(arg0) {
  ({ userId, activity, application, channelId, currentUser, ChannelStore, VoiceStateStore, PermissionStore, GuildStore } = arg0);
  if (null == userId) {
    return obj.NO_USER;
  } else {
    let nsfwAllowed;
    if (currentUser != null) {
      nsfwAllowed = currentUser.nsfwAllowed;
    }
    if (false === nsfwAllowed) {
      let requires_age_gate;
      if (application != null) {
        const embeddedActivityConfig = application.embeddedActivityConfig;
        if (embeddedActivityConfig != null) {
          requires_age_gate = embeddedActivityConfig.requires_age_gate;
        }
      }
      if (true === requires_age_gate) {
        return obj.ACTIVITY_AGE_GATED;
      }
    }
    if (tmp) {
      let supported_platforms;
      if (application != null) {
        const embeddedActivityConfig2 = application.embeddedActivityConfig;
        if (embeddedActivityConfig2 != null) {
          supported_platforms = embeddedActivityConfig2.supported_platforms;
        }
      }
      if (tmp7(supported_platforms)) {
        let tmp10 = channelId;
        if (null == channelId) {
          let session_id;
          if (activity != null) {
            session_id = activity.session_id;
          }
          const voiceStateForSession = VoiceStateStore.getVoiceStateForSession(userId, session_id);
          let channelId1;
          if (voiceStateForSession != null) {
            channelId1 = voiceStateForSession.channelId;
          }
          tmp10 = channelId1;
        }
        if (null == tmp10) {
          return obj.NO_CHANNEL;
        } else {
          const channel = ChannelStore.getChannel(channelId);
          if (null == channel) {
            return obj.NO_CHANNEL;
          } else {
            if (!channel.isPrivate()) {
              const guildId = channel.getGuildId();
              if (null == guildId) {
                return obj.NO_GUILD;
              } else {
                guild = GuildStore.getGuild(guildId);
                let afkChannelId;
                if (guild != null) {
                  afkChannelId = guild.afkChannelId;
                }
                if (afkChannelId === channel.id) {
                  return obj.IS_AFK_CHANNEL;
                } else {
                  const currentClientVoiceChannelId = VoiceStateStore.getCurrentClientVoiceChannelId(channel.getGuildId());
                  const isChannelFullResult = ChannelUtils.isChannelFull(channel, VoiceStateStore, GuildStore);
                  if (PermissionStore.can(Permissions.USE_EMBEDDED_ACTIVITIES, channel)) {
                    if (channel.isVocal()) {
                      if (currentClientVoiceChannelId !== tmp10) {
                        if (isChannelFullResult) {
                          return obj.CHANNEL_FULL;
                        } else if (!canResult) {
                          return obj.NO_CHANNEL_CONNECT_PERMISSION;
                        }
                      }
                    }
                  } else {
                    return obj.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION;
                  }
                  canResult = PermissionStore.can(Permissions.CONNECT, channel);
                }
              }
            }
            return obj.CAN_JOIN;
          }
        }
      } else {
        return obj.ACTIVITY_NOT_SUPPORTED_ON_OS;
      }
      tmp7 = isActivitySupportedOnClientPlatformDefault;
    } else {
      return obj.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS;
    }
  }
}
const Permissions = fn(1085).Permissions;
const EmbeddedActivityJoinability = { CAN_JOIN: 0, [0]: "CAN_JOIN", NO_USE_EMBEDDED_ACTIVITIES_PERMISSION: 1, [1]: "NO_USE_EMBEDDED_ACTIVITIES_PERMISSION", NO_CHANNEL_CONNECT_PERMISSION: 2, [2]: "NO_CHANNEL_CONNECT_PERMISSION", CHANNEL_FULL: 3, [3]: "CHANNEL_FULL", NO_CHANNEL: 4, [4]: "NO_CHANNEL", ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS: 5, [5]: "ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS", ACTIVITY_NOT_SUPPORTED_ON_OS: 6, [6]: "ACTIVITY_NOT_SUPPORTED_ON_OS", ACTIVITY_AGE_GATED: 7, [7]: "ACTIVITY_AGE_GATED", NO_USER: 8, [8]: "NO_USER", IS_AFK_CHANNEL: 9, [9]: "IS_AFK_CHANNEL", NO_GUILD: 10, [10]: "NO_GUILD" };
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/utils/getEmbeddedActivityJoinability.tsx");

export default getEmbeddedActivityJoinability;
export { EmbeddedActivityJoinability };
export const useEmbeddedActivityJoinability = ReactCompilerGating.isReactCompilerEnabled() ? (function useEmbeddedActivityJoinability(userId) {
  const cResult = userId(channelId[9]).c(11);
  userId = userId.userId;
  const activity = userId.activity;
  channelId = userId.channelId;
  const application = userId.application;
  const obj = userId(channelId[9]);
  const isActivitiesEnabledForCurrentPlatform = userId(channelId[10]).useIsActivitiesEnabledForCurrentPlatform();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    class I {
      constructor() {
        return closure_1_6.getCurrentUser();
      }
    }
    cResult[0] = items;
    cResult[1] = I;
    tmp5 = items;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const obj2 = userId(channelId[10]);
  const stateFromStores = userId(channelId[11]).useStateFromStores(tmp5, I);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [application, , , ];
    class I {
      constructor() {
        return closure_1_6.getCurrentUser();
      }
    }
    items1[1] = VoiceStateStore;
    items1[2] = stateFromStores;
    items1[3] = isActivitiesEnabledForCurrentPlatform;
    cResult[2] = items1;
    let tmp9 = items1;
  } else {
    tmp9 = cResult[2];
  }
  if (cResult[3] === activity) {
    if (cResult[4] === application) {
      if (cResult[5] === channelId) {
        if (cResult[6] === stateFromStores) {
          if (cResult[7] === isActivitiesEnabledForCurrentPlatform) {
            if (cResult[8] === userId) {
              let tmp13 = cResult[9];
              let tmp14 = cResult[10];
            }
            return tmp(tmp2[11]).useStateFromStores(tmp9, tmp13, tmp14);
          }
        }
      }
    }
  }
  class T {
    constructor() {
      obj = { userId, activity, application, channelId, currentUser: closure_5, isActivitiesEnabledForCurrentPlatform: closure_4, ChannelStore: closure_3, VoiceStateStore: closure_7, PermissionStore: closure_5, GuildStore: closure_4 };
      return getEmbeddedActivityJoinability(obj);
    }
  }
  const items2 = [activity, application, channelId, stateFromStores, isActivitiesEnabledForCurrentPlatform, userId];
  cResult[3] = activity;
  cResult[4] = application;
  cResult[5] = channelId;
  cResult[6] = stateFromStores;
  cResult[7] = isActivitiesEnabledForCurrentPlatform;
  cResult[8] = userId;
  cResult[9] = T;
  cResult[10] = items2;
  tmp14 = items2;
  tmp13 = T;
  const tmpResult = userId(channelId[11]);
}) : (function useEmbeddedActivityJoinability(userId) {
  userId = userId.userId;
  const activity = userId.activity;
  const channelId = userId.channelId;
  const application = userId.application;
  const isActivitiesEnabledForCurrentPlatform = userId(channelId[10]).useIsActivitiesEnabledForCurrentPlatform();
  const obj = userId(channelId[10]);
  const items = [UserStore];
  const stateFromStores = userId(channelId[11]).useStateFromStores(items, () => currentUser.getCurrentUser());
  const obj2 = userId(channelId[11]);
  const items1 = [application, VoiceStateStore, stateFromStores, isActivitiesEnabledForCurrentPlatform];
  const items2 = [activity, application, channelId, stateFromStores, isActivitiesEnabledForCurrentPlatform, userId];
  return userId(channelId[11]).useStateFromStores(items1, () => getEmbeddedActivityJoinability({ userId, activity, application, channelId, currentUser: stateFromStores, isActivitiesEnabledForCurrentPlatform, ChannelStore, VoiceStateStore, PermissionStore, GuildStore }), items2);
});