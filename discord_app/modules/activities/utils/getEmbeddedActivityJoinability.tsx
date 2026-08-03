// === Module 10683: getEmbeddedActivityJoinability ===

// Module 10683 (getEmbeddedActivityJoinability)
import ensureGuildLoaded from "ensureGuildLoaded";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import mergeGuildAvatar from "mergeGuildAvatar";
import updateVoiceState from "updateVoiceState";
import { Permissions } from "ME";

const require = arg1;
function getEmbeddedActivityJoinability(arg0) {
  let ChannelStore;
  let GuildStore;
  let PermissionStore;
  let VoiceStateStore;
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
          channelId = undefined;
          if (voiceStateForSession != null) {
            channelId = voiceStateForSession.channelId;
          }
          tmp10 = channelId;
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
                  const obj2 = require(4438) /* allowChannelAccess */;
                  const isChannelFullResult = require(4438) /* allowChannelAccess */.isChannelFull(channel, VoiceStateStore, GuildStore);
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
      tmp7 = importDefault(10681);
    } else {
      return obj.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS;
    }
  }
}
let obj = { CAN_JOIN: 0, [0]: "CAN_JOIN", NO_USE_EMBEDDED_ACTIVITIES_PERMISSION: 1, [1]: "NO_USE_EMBEDDED_ACTIVITIES_PERMISSION", NO_CHANNEL_CONNECT_PERMISSION: 2, [2]: "NO_CHANNEL_CONNECT_PERMISSION", CHANNEL_FULL: 3, [3]: "CHANNEL_FULL", NO_CHANNEL: 4, [4]: "NO_CHANNEL", ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS: 5, [5]: "ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS", ACTIVITY_NOT_SUPPORTED_ON_OS: 6, [6]: "ACTIVITY_NOT_SUPPORTED_ON_OS", ACTIVITY_AGE_GATED: 7, [7]: "ACTIVITY_AGE_GATED", NO_USER: 8, [8]: "NO_USER", IS_AFK_CHANNEL: 9, [9]: "IS_AFK_CHANNEL", NO_GUILD: 10, [10]: "NO_GUILD" };
const result = require("getUncachedChannelPermissions").fileFinishedImporting("modules/activities/utils/getEmbeddedActivityJoinability.tsx");

export default getEmbeddedActivityJoinability;
export const EmbeddedActivityJoinability = obj;
export const useEmbeddedActivityJoinability = function useEmbeddedActivityJoinability(userId) {
  userId = userId.userId;
  const activity = userId.activity;
  const channelId = userId.channelId;
  const application = userId.application;
  let isActivitiesEnabledForCurrentPlatform;
  let stateFromStores;
  isActivitiesEnabledForCurrentPlatform = userId(channelId[8]).useIsActivitiesEnabledForCurrentPlatform();
  const obj = userId(channelId[8]);
  const items = [mergeGuildAvatar];
  stateFromStores = userId(channelId[9]).useStateFromStores(items, () => currentUser.getCurrentUser());
  const obj2 = userId(channelId[9]);
  const items1 = [application, updateVoiceState, stateFromStores, isActivitiesEnabledForCurrentPlatform];
  const items2 = [activity, application, channelId, stateFromStores, isActivitiesEnabledForCurrentPlatform, userId];
  return userId(channelId[9]).useStateFromStores(items1, () => outer1_10({ userId, activity, application, channelId, currentUser: stateFromStores, isActivitiesEnabledForCurrentPlatform, ChannelStore: application, VoiceStateStore: outer1_7, PermissionStore: stateFromStores, GuildStore: isActivitiesEnabledForCurrentPlatform }), items2);
};