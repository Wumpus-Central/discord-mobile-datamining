// === Module 10920: getEmbeddedActivityJoinability ===

// Module 10920 (getEmbeddedActivityJoinability)
import ChannelUtils from "ChannelUtils" /* 5414 */;
import isActivitySupportedOnClientPlatformDefault from "isActivitySupportedOnClientPlatform" /* 10921 */;
import ChannelStore from "ChannelStore" /* 2065 */;
import GuildStore from "GuildStore" /* 2087 */;
import PermissionStore from "PermissionStore" /* 4750 */;
import UserStore from "UserStore" /* 1390 */;
import VoiceStateStore from "VoiceStateStore" /* 5113 */;

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
    if (tmp2) {
      let supported_platforms;
      if (application != null) {
        const embeddedActivityConfig2 = application.embeddedActivityConfig;
        if (embeddedActivityConfig2 != null) {
          supported_platforms = embeddedActivityConfig2.supported_platforms;
        }
      }
      if (tmp8(supported_platforms)) {
        let tmp11 = channelId;
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
          tmp11 = channelId1;
        }
        if (null == tmp11) {
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
                    if (tmp) {
                      return obj.CHANNEL_CONTENT_GATED;
                    } else if (channel.isVocal()) {
                      if (currentClientVoiceChannelId !== tmp11) {
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
      tmp8 = isActivitySupportedOnClientPlatformDefault;
    } else {
      return obj.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS;
    }
  }
}
const Permissions = fn(1085).Permissions;
const EmbeddedActivityJoinability = { CAN_JOIN: 0, [0]: "CAN_JOIN", NO_USE_EMBEDDED_ACTIVITIES_PERMISSION: 1, [1]: "NO_USE_EMBEDDED_ACTIVITIES_PERMISSION", NO_CHANNEL_CONNECT_PERMISSION: 2, [2]: "NO_CHANNEL_CONNECT_PERMISSION", CHANNEL_FULL: 3, [3]: "CHANNEL_FULL", NO_CHANNEL: 4, [4]: "NO_CHANNEL", ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS: 5, [5]: "ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS", ACTIVITY_NOT_SUPPORTED_ON_OS: 6, [6]: "ACTIVITY_NOT_SUPPORTED_ON_OS", ACTIVITY_AGE_GATED: 7, [7]: "ACTIVITY_AGE_GATED", NO_USER: 8, [8]: "NO_USER", IS_AFK_CHANNEL: 9, [9]: "IS_AFK_CHANNEL", NO_GUILD: 10, [10]: "NO_GUILD", CHANNEL_CONTENT_GATED: 11, [11]: "CHANNEL_CONTENT_GATED" };
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/utils/getEmbeddedActivityJoinability.tsx");

export default getEmbeddedActivityJoinability;
export { EmbeddedActivityJoinability };
export const useEmbeddedActivityJoinability = ReactCompilerGating.isReactCompilerEnabled() ? (function useEmbeddedActivityJoinability(userId) {
  const cResult = userId(channelId[9]).c(16);
  userId = userId.userId;
  const activity = userId.activity;
  channelId = userId.channelId;
  const application = userId.application;
  const obj = userId(channelId[9]);
  const isActivitiesEnabledForCurrentPlatform = userId(channelId[10]).useIsActivitiesEnabledForCurrentPlatform();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [isChannelContentGated];
    const fn = function s() {
      return isChannelContentGated.getCurrentUser();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const obj2 = userId(channelId[10]);
  const stateFromStores = userId(channelId[11]).useStateFromStores(tmp5, tmp6);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [application];
    cResult[2] = items1;
    let tmp9 = items1;
  } else {
    tmp9 = cResult[2];
  }
  if (cResult[3] !== channelId) {
    class T {
      constructor() {
        return closure_3.getChannel(channelId);
      }
    }
    const items2 = [channelId];
    cResult[3] = channelId;
    cResult[4] = T;
    cResult[5] = items2;
    let tmp12 = items2;
  } else {
    class T {
      constructor() {
        return closure_3.getChannel(channelId);
      }
    }
    tmp12 = cResult[5];
  }
  const tmpResult = userId(channelId[11]);
  const stateFromStores1 = userId(channelId[11]).useStateFromStores(tmp9, T, tmp12);
  const tmpResult3 = userId(channelId[11]);
  isChannelContentGated = userId(channelId[12]).useIsChannelContentGated(stateFromStores1);
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    class T {
      constructor() {
        return closure_3.getChannel(channelId);
      }
    }
    const items3 = [application, VoiceStateStore, stateFromStores, isActivitiesEnabledForCurrentPlatform];
    cResult[6] = items3;
  } else {
    class T {
      constructor() {
        return closure_3.getChannel(channelId);
      }
    }
  }
  if (cResult[7] === activity) {
    class T {
      constructor() {
        return closure_3.getChannel(channelId);
      }
    }
  }
  const fn2 = function y() {
    return getEmbeddedActivityJoinability({ userId, activity, application, channelId, currentUser: stateFromStores, isContentGated: isChannelContentGated, isActivitiesEnabledForCurrentPlatform, ChannelStore, VoiceStateStore, PermissionStore, GuildStore });
  };
  const items4 = [activity, application, channelId, stateFromStores, isChannelContentGated, isActivitiesEnabledForCurrentPlatform, userId];
  cResult[7] = activity;
  cResult[8] = application;
  cResult[9] = channelId;
  cResult[10] = stateFromStores;
  cResult[11] = isActivitiesEnabledForCurrentPlatform;
  cResult[12] = isChannelContentGated;
  cResult[13] = userId;
  cResult[14] = fn2;
  cResult[15] = items4;
  const tmpResult4 = userId(channelId[12]);
}) : (function useEmbeddedActivityJoinability(userId) {
  userId = userId.userId;
  const activity = userId.activity;
  const channelId = userId.channelId;
  const application = userId.application;
  let isChannelContentGated;
  const isActivitiesEnabledForCurrentPlatform = userId(channelId[10]).useIsActivitiesEnabledForCurrentPlatform();
  const obj = userId(channelId[10]);
  const items = [isChannelContentGated];
  const stateFromStores = userId(channelId[11]).useStateFromStores(items, () => isChannelContentGated.getCurrentUser());
  const obj2 = userId(channelId[11]);
  const items1 = [application];
  const items2 = [channelId];
  const stateFromStores1 = userId(channelId[11]).useStateFromStores(items1, () => ChannelStore.getChannel(channelId), items2);
  const obj3 = userId(channelId[11]);
  isChannelContentGated = userId(channelId[12]).useIsChannelContentGated(stateFromStores1);
  const obj4 = userId(channelId[12]);
  const items3 = [application, VoiceStateStore, stateFromStores, isActivitiesEnabledForCurrentPlatform];
  const items4 = [activity, application, channelId, stateFromStores, isChannelContentGated, isActivitiesEnabledForCurrentPlatform, userId];
  return userId(channelId[11]).useStateFromStores(items3, () => getEmbeddedActivityJoinability({ userId, activity, application, channelId, currentUser: stateFromStores, isContentGated: isChannelContentGated, isActivitiesEnabledForCurrentPlatform, ChannelStore, VoiceStateStore, PermissionStore, GuildStore }), items4);
});