// discord_app/modules/activities/utils/getEmbeddedActivityLaunchability.tsx
import util from "../../../intl/index.native.tsx";
import useIsActivitiesEnabledForCurrentPlatform from "../useIsActivitiesEnabledForCurrentPlatform.tsx";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import GuildStore from "../../../stores/GuildStore.tsx";
import PermissionStore from "../../../stores/PermissionStore.tsx";
import VoiceStateStore from "../../../stores/VoiceStateStore.tsx";

require = fn;
function getEmbeddedActivityLaunchability(arg0) {
  ({ channelId, ChannelStore, GuildStore, PermissionStore, VoiceStateStore } = arg0);
  const channel = ChannelStore.getChannel(channelId);
  if (null == channel) {
    return obj.NO_CHANNEL;
  } else if (closure_6.includes(channel.type)) {
    if (obj2.getIsActivitiesEnabledForCurrentPlatform()) {
      if (null != channel) {
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
              if (PermissionStore.can(Permissions.USE_EMBEDDED_ACTIVITIES, channel)) {
                const currentClientVoiceChannelId = VoiceStateStore.getCurrentClientVoiceChannelId(
                  channel.getGuildId(),
                );
                if (channel.isVocal()) {
                  if (currentClientVoiceChannelId !== channelId) {
                    if (!canResult) {
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
      }
      return obj.CAN_LAUNCH;
    } else {
      return obj.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS;
    }
    obj2 = useIsActivitiesEnabledForCurrentPlatform;
  } else {
    return obj.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_CHANNEL;
  }
}
let closure_6 = fn(1920).SUPPORTED_ACTIVITIES_CHANNEL_TYPES;
const Permissions = fn(1074).Permissions;
const EmbeddedActivityLaunchability = {
  CAN_LAUNCH: 0,
  [0]: "CAN_LAUNCH",
  NO_USE_EMBEDDED_ACTIVITIES_PERMISSION: 1,
  [1]: "NO_USE_EMBEDDED_ACTIVITIES_PERMISSION",
  NO_CHANNEL_CONNECT_PERMISSION: 2,
  [2]: "NO_CHANNEL_CONNECT_PERMISSION",
  NO_CHANNEL: 3,
  [3]: "NO_CHANNEL",
  NO_GUILD: 4,
  [4]: "NO_GUILD",
  IS_AFK_CHANNEL: 5,
  [5]: "IS_AFK_CHANNEL",
  ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS: 6,
  [6]: "ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS",
  ACTIVITIES_FEATURE_NOT_ENABLED_FOR_CHANNEL: 7,
  [7]: "ACTIVITIES_FEATURE_NOT_ENABLED_FOR_CHANNEL",
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/utils/getEmbeddedActivityLaunchability.tsx");

export { EmbeddedActivityLaunchability };
export { getEmbeddedActivityLaunchability };
export const getEmbeddedActivityLaunchabilityForChannel = function getEmbeddedActivityLaunchabilityForChannel(
  channelId,
) {
  return getEmbeddedActivityLaunchability({ channelId, ChannelStore, GuildStore, PermissionStore, VoiceStateStore });
};
export const useEmbeddedActivityLaunchability = function useEmbeddedActivityLaunchability(channelId) {
  _require = channelId;
  const items = [ChannelStore, GuildStore, PermissionStore, VoiceStateStore];
  const items1 = [channelId];
  return require("initialize").useStateFromStores(
    items,
    () => getEmbeddedActivityLaunchability({ channelId, ChannelStore, GuildStore, PermissionStore, VoiceStateStore }),
    items1,
  );
};
export const getEmbeddedActivityLaunchabilityLabel = function getEmbeddedActivityLaunchabilityLabel(arg0) {
  if (obj.CAN_LAUNCH === arg0) {
    const intl3 = util.intl;
    return intl3.string(util.t.qJvTKQ);
  } else if (tmp.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION === arg0) {
    const intl2 = util.intl;
    return intl2.string(util.t.hHGrWz);
  } else {
    const intl = util.intl;
    return intl.string(util.t.j29zCr);
  }
};
