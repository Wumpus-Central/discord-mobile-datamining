// discord_app/modules/activities/utils/getEmbeddedActivityJoinability.tsx
import ChannelUtils from "../../../utils/ChannelUtils.tsx";
import isActivitySupportedOnClientPlatformDefault from "isActivitySupportedOnClientPlatform.tsx";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import GuildStore from "../../../stores/GuildStore.tsx";
import PermissionStore from "../../../stores/PermissionStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";
import VoiceStateStore from "../../../stores/VoiceStateStore.tsx";

require = fn;
function getEmbeddedActivityJoinability(arg0) {
  ({
    userId,
    activity,
    application,
    channelId,
    currentUser,
    ChannelStore,
    VoiceStateStore,
    PermissionStore,
    GuildStore,
  } = arg0);
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
                  const currentClientVoiceChannelId = VoiceStateStore.getCurrentClientVoiceChannelId(
                    channel.getGuildId(),
                  );
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
const Permissions = fn(1074).Permissions;
const EmbeddedActivityJoinability = {
  CAN_JOIN: 0,
  [0]: "CAN_JOIN",
  NO_USE_EMBEDDED_ACTIVITIES_PERMISSION: 1,
  [1]: "NO_USE_EMBEDDED_ACTIVITIES_PERMISSION",
  NO_CHANNEL_CONNECT_PERMISSION: 2,
  [2]: "NO_CHANNEL_CONNECT_PERMISSION",
  CHANNEL_FULL: 3,
  [3]: "CHANNEL_FULL",
  NO_CHANNEL: 4,
  [4]: "NO_CHANNEL",
  ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS: 5,
  [5]: "ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS",
  ACTIVITY_NOT_SUPPORTED_ON_OS: 6,
  [6]: "ACTIVITY_NOT_SUPPORTED_ON_OS",
  ACTIVITY_AGE_GATED: 7,
  [7]: "ACTIVITY_AGE_GATED",
  NO_USER: 8,
  [8]: "NO_USER",
  IS_AFK_CHANNEL: 9,
  [9]: "IS_AFK_CHANNEL",
  NO_GUILD: 10,
  [10]: "NO_GUILD",
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/utils/getEmbeddedActivityJoinability.tsx");

export default getEmbeddedActivityJoinability;
export { EmbeddedActivityJoinability };
export const useEmbeddedActivityJoinability = function useEmbeddedActivityJoinability(userId) {
  userId = userId.userId;
  const activity = userId.activity;
  const channelId = userId.channelId;
  const application = userId.application;
  const isActivitiesEnabledForCurrentPlatform = userId(channelId[8]).useIsActivitiesEnabledForCurrentPlatform();
  const obj = userId(channelId[8]);
  const items = [UserStore];
  const stateFromStores = userId(channelId[9]).useStateFromStores(items, () => currentUser.getCurrentUser());
  const obj2 = userId(channelId[9]);
  const items1 = [application, VoiceStateStore, stateFromStores, isActivitiesEnabledForCurrentPlatform];
  const items2 = [activity, application, channelId, stateFromStores, isActivitiesEnabledForCurrentPlatform, userId];
  return userId(channelId[9]).useStateFromStores(
    items1,
    () =>
      getEmbeddedActivityJoinability({
        userId,
        activity,
        application,
        channelId,
        currentUser: stateFromStores,
        isActivitiesEnabledForCurrentPlatform,
        ChannelStore,
        VoiceStateStore,
        PermissionStore,
        GuildStore,
      }),
    items2,
  );
};
