// discord_app/modules/activities/utils/getEmbeddedActivityLaunchability.tsx
import util from "../../../intl/index.native.tsx";
import AgeGateUtils from "../../age_gate/AgeGateUtils.tsx";
import useIsActivitiesEnabledForCurrentPlatform from "../useIsActivitiesEnabledForCurrentPlatform.tsx";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import GuildStore from "../../../stores/GuildStore.tsx";
import PermissionStore from "../../../stores/PermissionStore.tsx";
import VoiceStateStore from "../../../stores/VoiceStateStore.tsx";

const require = globalThis.__r;

require = fn;
function getEmbeddedActivityLaunchability(arg0) {
  ({ channelId, ChannelStore, GuildStore, PermissionStore, VoiceStateStore, isContentGated } = arg0);
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
                const getCurrentClientVoiceChannelId = VoiceStateStore.getCurrentClientVoiceChannelId;
                if (isContentGated) {
                  return obj.CHANNEL_CONTENT_GATED;
                } else if (channel.isVocal()) {
                  if (tmp8 !== channelId) {
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
let closure_6 = fn(2019).SUPPORTED_ACTIVITIES_CHANNEL_TYPES;
const Permissions = fn(1072).Permissions;
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
  CHANNEL_CONTENT_GATED: 8,
  [8]: "CHANNEL_CONTENT_GATED",
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/utils/getEmbeddedActivityLaunchability.tsx");

export { EmbeddedActivityLaunchability };
export { getEmbeddedActivityLaunchability };
export function getEmbeddedActivityLaunchabilityForChannel(channelId) {
  const obj = {
    channelId,
    isContentGated: null,
    ChannelStore: null,
    GuildStore: null,
    PermissionStore: null,
    VoiceStateStore: null,
  };
  const channel = ChannelStore.getChannel(channelId);
  obj.isContentGated = AgeGateUtils.isChannelContentGated(channel);
  obj.ChannelStore = ChannelStore;
  obj.GuildStore = GuildStore;
  obj.PermissionStore = PermissionStore;
  obj.VoiceStateStore = VoiceStateStore;
  return getEmbeddedActivityLaunchability(obj);
}
export function useEmbeddedActivityLaunchability(channelId) {
  _require = channelId;
  const items = [ChannelStore];
  const items1 = [channelId];
  const stateFromStores = require("initialize").useStateFromStores(
    items,
    () => ChannelStore.getChannel(closure_0),
    items1,
  );
  const obj = require("initialize");
  isChannelContentGated = require("AgeGateUtils").useIsChannelContentGated(stateFromStores);
  const obj2 = require("AgeGateUtils");
  const items2 = [ChannelStore, GuildStore, PermissionStore, VoiceStateStore];
  const items3 = [channelId, isChannelContentGated];
  return require("initialize").useStateFromStores(
    items2,
    () =>
      getEmbeddedActivityLaunchability({
        channelId,
        isContentGated: isChannelContentGated,
        ChannelStore,
        GuildStore,
        PermissionStore,
        VoiceStateStore,
      }),
    items3,
  );
}
export function getEmbeddedActivityLaunchabilityLabel(arg0) {
  if (obj.CAN_LAUNCH === arg0) {
    const intl4 = util.intl;
    return intl4.string(util.t.qJvTKQ);
  } else if (obj.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION === arg0) {
    const intl3 = util.intl;
    return intl3.string(util.t.hHGrWz);
  } else if (obj.CHANNEL_CONTENT_GATED === arg0) {
    const intl2 = util.intl;
    return intl2.string(util.t.pKLV22);
  } else {
    const intl = util.intl;
    return intl.string(util.t.j29zCr);
  }
}
