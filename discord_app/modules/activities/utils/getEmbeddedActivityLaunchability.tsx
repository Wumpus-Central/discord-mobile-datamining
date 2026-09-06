// === Module 9582: getEmbeddedActivityLaunchability ===

// Module 9582 (getEmbeddedActivityLaunchability)
import getSystemLocale from "getSystemLocale" /* 1114 */;
import useIsActivitiesEnabledForCurrentPlatform from "useIsActivitiesEnabledForCurrentPlatform" /* 9502 */;
import closure_2 from "ensureGuildLoaded" /* 1957 */;
import closure_3 from "createGuildRecordFromRust" /* 1979 */;
import closure_4 from "getUncachedChannelPermissions" /* 4199 */;
import closure_5 from "updateVoiceState" /* 4579 */;
import { SUPPORTED_ACTIVITIES_CHANNEL_TYPES as closure_6 } from "items3" /* 1920 */;
import { Permissions } from "ME" /* 1074 */;

require = arg1;
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
                const currentClientVoiceChannelId = VoiceStateStore.getCurrentClientVoiceChannelId(channel.getGuildId());
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
const obj = { CAN_LAUNCH: 0, [0]: "CAN_LAUNCH", NO_USE_EMBEDDED_ACTIVITIES_PERMISSION: 1, [1]: "NO_USE_EMBEDDED_ACTIVITIES_PERMISSION", NO_CHANNEL_CONNECT_PERMISSION: 2, [2]: "NO_CHANNEL_CONNECT_PERMISSION", NO_CHANNEL: 3, [3]: "NO_CHANNEL", NO_GUILD: 4, [4]: "NO_GUILD", IS_AFK_CHANNEL: 5, [5]: "IS_AFK_CHANNEL", ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS: 6, [6]: "ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS", ACTIVITIES_FEATURE_NOT_ENABLED_FOR_CHANNEL: 7, [7]: "ACTIVITIES_FEATURE_NOT_ENABLED_FOR_CHANNEL" };
const result = require("set").fileFinishedImporting("modules/activities/utils/getEmbeddedActivityLaunchability.tsx");

export const EmbeddedActivityLaunchability = obj;
export { getEmbeddedActivityLaunchability };
export const getEmbeddedActivityLaunchabilityForChannel = function getEmbeddedActivityLaunchabilityForChannel(channelId) {
  return getEmbeddedActivityLaunchability({ channelId, ChannelStore: closure_2, GuildStore: closure_3, PermissionStore: closure_4, VoiceStateStore: closure_5 });
};
export const useEmbeddedActivityLaunchability = function useEmbeddedActivityLaunchability(channelId) {
  const _require = channelId;
  const items = [closure_2, closure_3, closure_4, closure_5];
  const items1 = [channelId];
  return _require(504).useStateFromStores(items, () => closure_1_9({ channelId: closure_0, ChannelStore: closure_1_2, GuildStore: closure_1_3, PermissionStore: closure_1_4, VoiceStateStore: closure_1_5 }), items1);
};
export const getEmbeddedActivityLaunchabilityLabel = function getEmbeddedActivityLaunchabilityLabel(arg0) {
  if (obj.CAN_LAUNCH === arg0) {
    const intl3 = getSystemLocale.intl;
    return intl3.string(getSystemLocale.t.qJvTKQ);
  } else if (tmp.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION === arg0) {
    const intl2 = getSystemLocale.intl;
    return intl2.string(getSystemLocale.t.hHGrWz);
  } else {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.j29zCr);
  }
};