// discord_app/modules/activities/utils/getEmbeddedActivityLaunchability.tsx
import ensureGuildLoaded from "ensureGuildLoaded";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import updateVoiceState from "updateVoiceState";
import { SUPPORTED_ACTIVITIES_CHANNEL_TYPES as closure_6 } from "items3";
import { Permissions } from "ME";

const require = arg1;
function getEmbeddedActivityLaunchability(arg0) {
  let ChannelStore;
  let GuildStore;
  let PermissionStore;
  let VoiceStateStore;
  let channelId;
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
    obj2 = require(10547) /* useIsActivitiesEnabledForCurrentPlatform */;
  } else {
    return obj.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_CHANNEL;
  }
}
const obj = { CAN_LAUNCH: 0, [0]: "CAN_LAUNCH", NO_USE_EMBEDDED_ACTIVITIES_PERMISSION: 1, [1]: "NO_USE_EMBEDDED_ACTIVITIES_PERMISSION", NO_CHANNEL_CONNECT_PERMISSION: 2, [2]: "NO_CHANNEL_CONNECT_PERMISSION", NO_CHANNEL: 3, [3]: "NO_CHANNEL", NO_GUILD: 4, [4]: "NO_GUILD", IS_AFK_CHANNEL: 5, [5]: "IS_AFK_CHANNEL", ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS: 6, [6]: "ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS", ACTIVITIES_FEATURE_NOT_ENABLED_FOR_CHANNEL: 7, [7]: "ACTIVITIES_FEATURE_NOT_ENABLED_FOR_CHANNEL" };
const result = require("getUncachedChannelPermissions").fileFinishedImporting("modules/activities/utils/getEmbeddedActivityLaunchability.tsx");

export const EmbeddedActivityLaunchability = obj;
export { getEmbeddedActivityLaunchability };
export const getEmbeddedActivityLaunchabilityForChannel = function getEmbeddedActivityLaunchabilityForChannel(channelId) {
  return getEmbeddedActivityLaunchability({ channelId, ChannelStore: ensureGuildLoaded, GuildStore: createGuildRecordFromRust, PermissionStore: getUncachedChannelPermissions, VoiceStateStore: updateVoiceState });
};
export const useEmbeddedActivityLaunchability = function useEmbeddedActivityLaunchability(channelId) {
  const _require = channelId;
  const items = [ensureGuildLoaded, createGuildRecordFromRust, getUncachedChannelPermissions, updateVoiceState];
  const items1 = [channelId];
  return _require(589).useStateFromStores(items, () => outer1_9({ channelId: closure_0, ChannelStore: outer1_2, GuildStore: outer1_3, PermissionStore: outer1_4, VoiceStateStore: outer1_5 }), items1);
};
export const getEmbeddedActivityLaunchabilityLabel = function getEmbeddedActivityLaunchabilityLabel(arg0) {
  if (obj.CAN_LAUNCH === arg0) {
    const intl3 = require(1236) /* getSystemLocale */.intl;
    return intl3.string(require(1236) /* getSystemLocale */.t.qJvTKQ);
  } else if (tmp.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION === arg0) {
    const intl2 = require(1236) /* getSystemLocale */.intl;
    return intl2.string(require(1236) /* getSystemLocale */.t.hHGrWz);
  } else {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.j29zCr);
  }
};