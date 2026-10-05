// === Module 9046: getEmbeddedActivityJoinability ===

// Module 9046 (getEmbeddedActivityJoinability)
import Constants from "Constants" /* 1085 */;
import ChannelUtils from "ChannelUtils" /* 5035 */;
import isActivitySupportedOnClientPlatformDefault from "isActivitySupportedOnClientPlatform" /* 9044 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import GuildStore from "GuildStore" /* 2074 */;
import PermissionStore from "PermissionStore" /* 4509 */;
import UserStore from "UserStore" /* 1377 */;
import VoiceStateStore from "VoiceStateStore" /* 4909 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

function getEmbeddedActivityJoinability(arg0) {
  let activity;
  let application;
  let channelId;
  let currentUser;
  let userId;
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
      const tmp7 = isActivitySupportedOnClientPlatformDefault;
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
          const getVoiceStateForSession = VoiceStateStore.getVoiceStateForSession;
          if (activity != null) {
            session_id = activity.session_id;
          }
          const voiceStateForSession = getVoiceStateForSession(userId, session_id);
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
                const guild = GuildStore.getGuild(guildId);
                let afkChannelId;
                if (guild != null) {
                  afkChannelId = guild.afkChannelId;
                }
                if (afkChannelId === channel.id) {
                  return obj.IS_AFK_CHANNEL;
                } else {
                  const currentClientVoiceChannelId = VoiceStateStore.getCurrentClientVoiceChannelId(channel.getGuildId());
                  const obj2 = ChannelUtils;
                  const isChannelFullResult = obj2.isChannelFull(channel, VoiceStateStore, GuildStore);
                  const canResult = PermissionStore.can(Permissions.CONNECT, channel);
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
                }
              }
            }
            return obj.CAN_JOIN;
          }
        }
      } else {
        return obj.ACTIVITY_NOT_SUPPORTED_ON_OS;
      }
    } else {
      return obj.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS;
    }
  }
}
const Permissions = Constants.Permissions;
const EmbeddedActivityJoinability = { CAN_JOIN: 0, [0]: "CAN_JOIN", NO_USE_EMBEDDED_ACTIVITIES_PERMISSION: 1, [1]: "NO_USE_EMBEDDED_ACTIVITIES_PERMISSION", NO_CHANNEL_CONNECT_PERMISSION: 2, [2]: "NO_CHANNEL_CONNECT_PERMISSION", CHANNEL_FULL: 3, [3]: "CHANNEL_FULL", NO_CHANNEL: 4, [4]: "NO_CHANNEL", ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS: 5, [5]: "ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS", ACTIVITY_NOT_SUPPORTED_ON_OS: 6, [6]: "ACTIVITY_NOT_SUPPORTED_ON_OS", ACTIVITY_AGE_GATED: 7, [7]: "ACTIVITY_AGE_GATED", NO_USER: 8, [8]: "NO_USER", IS_AFK_CHANNEL: 9, [9]: "IS_AFK_CHANNEL", NO_GUILD: 10, [10]: "NO_GUILD" };
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((userId) => {
  let channelId;
  let currentUser;
  let tmp5;
  let tmp6;
  let tmp9;
  let obj = userId(channelId[9]);
  const cResult = obj.c(11);
  userId = userId.userId;
  const activity = userId.activity;
  channelId = userId.channelId;
  const application = userId.application;
  const obj2 = userId(channelId[10]);
  const isActivitiesEnabledForCurrentPlatform = obj2.useIsActivitiesEnabledForCurrentPlatform();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function l() {
      return currentUser.getCurrentUser();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const tmpResult = userId(channelId[11]);
  const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [application, VoiceStateStore, stateFromStores, isActivitiesEnabledForCurrentPlatform];
    cResult[2] = items1;
    tmp9 = items1;
  } else {
    tmp9 = cResult[2];
  }
  if (cResult[3] === activity) {
    if (cResult[4] === application) {
      if (cResult[5] === channelId) {
        if (cResult[6] === stateFromStores) {
          if (cResult[7] === isActivitiesEnabledForCurrentPlatform) {
            let tmp14;
            let tmp15;
            if (cResult[8] === userId) {
              tmp14 = cResult[9];
              tmp15 = cResult[10];
            }
            const tmpResult2 = userId(channelId[11]);
            return tmpResult2.useStateFromStores(tmp9, tmp14, tmp15);
          }
        }
      }
    }
  }
  class T {
    constructor() {
      const obj = { userId, activity, application, channelId, currentUser: stateFromStores, isActivitiesEnabledForCurrentPlatform, ChannelStore, VoiceStateStore, PermissionStore, GuildStore };
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
  tmp15 = items2;
  tmp14 = T;
}) : ((userId) => {
  let currentUser;
  userId = userId.userId;
  const activity = userId.activity;
  const channelId = userId.channelId;
  const application = userId.application;
  let obj = userId(channelId[10]);
  const isActivitiesEnabledForCurrentPlatform = obj.useIsActivitiesEnabledForCurrentPlatform();
  const items = [UserStore];
  const obj2 = userId(channelId[11]);
  const stateFromStores = obj2.useStateFromStores(items, () => currentUser.getCurrentUser());
  const items1 = [application, VoiceStateStore, stateFromStores, isActivitiesEnabledForCurrentPlatform];
  const items2 = [activity, application, channelId, stateFromStores, isActivitiesEnabledForCurrentPlatform, userId];
  const obj3 = userId(channelId[11]);
  return obj3.useStateFromStores(items1, () => {
    const obj = { userId, activity, application, channelId, currentUser: stateFromStores, isActivitiesEnabledForCurrentPlatform, ChannelStore, VoiceStateStore, PermissionStore, GuildStore };
    return getEmbeddedActivityJoinability(obj);
  }, items2);
});
const result = size.fileFinishedImporting("modules/activities/utils/getEmbeddedActivityJoinability.tsx");

export default getEmbeddedActivityJoinability;
export { EmbeddedActivityJoinability };
export const useEmbeddedActivityJoinability = tmp2;