// === Module 9011: getEmbeddedActivityLaunchability ===

// Module 9011 (getEmbeddedActivityLaunchability)
import Constants from "Constants" /* 1085 */;
import intl4 from "intl" /* 1126 */;
import Constants2 from "Constants" /* 2011 */;
import useIsActivitiesEnabledForCurrentPlatform from "useIsActivitiesEnabledForCurrentPlatform" /* 9012 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import GuildStore from "GuildStore" /* 2074 */;
import PermissionStore from "PermissionStore" /* 4509 */;
import VoiceStateStore from "VoiceStateStore" /* 4909 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

function getEmbeddedActivityLaunchability(arg0) {
  ({ channelId, ChannelStore, GuildStore, PermissionStore, VoiceStateStore } = arg0);
  const channel = ChannelStore.getChannel(channelId);
  if (null == channel) {
    return obj.NO_CHANNEL;
  } else if (closure_6.includes(channel.type)) {
    const obj2 = useIsActivitiesEnabledForCurrentPlatform;
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
              const canResult = PermissionStore.can(Permissions.CONNECT, channel);
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
            }
          }
        }
      }
      return obj.CAN_LAUNCH;
    } else {
      return obj.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS;
    }
  } else {
    return obj.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_CHANNEL;
  }
}
let closure_6 = Constants2.SUPPORTED_ACTIVITIES_CHANNEL_TYPES;
const Permissions = Constants.Permissions;
const EmbeddedActivityLaunchability = { CAN_LAUNCH: 0, [0]: "CAN_LAUNCH", NO_USE_EMBEDDED_ACTIVITIES_PERMISSION: 1, [1]: "NO_USE_EMBEDDED_ACTIVITIES_PERMISSION", NO_CHANNEL_CONNECT_PERMISSION: 2, [2]: "NO_CHANNEL_CONNECT_PERMISSION", NO_CHANNEL: 3, [3]: "NO_CHANNEL", NO_GUILD: 4, [4]: "NO_GUILD", IS_AFK_CHANNEL: 5, [5]: "IS_AFK_CHANNEL", ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS: 6, [6]: "ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS", ACTIVITIES_FEATURE_NOT_ENABLED_FOR_CHANNEL: 7, [7]: "ACTIVITIES_FEATURE_NOT_ENABLED_FOR_CHANNEL" };
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((channelId) => {
  let first;
  let tmp10;
  const _require = channelId;
  let obj = require("react");
  const cResult = obj.c(4);
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore, GuildStore, PermissionStore, VoiceStateStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channelId) {
    class S {
      constructor() {
        obj = { channelId: closure_0, ChannelStore: closure_2, GuildStore: closure_3, PermissionStore: closure_4, VoiceStateStore: closure_5 };
        return getEmbeddedActivityLaunchability(obj);
      }
    }
    const items1 = [channelId];
    cResult[1] = channelId;
    cResult[2] = S;
    cResult[3] = items1;
    tmp10 = items1;
  } else {
    class S {
      constructor() {
        obj = { channelId: closure_0, ChannelStore: closure_2, GuildStore: closure_3, PermissionStore: closure_4, VoiceStateStore: closure_5 };
        return getEmbeddedActivityLaunchability(obj);
      }
    }
    tmp10 = cResult[3];
  }
  const tmpResult = tmp(504);
  return tmpResult.useStateFromStores(first, S, tmp10);
}) : ((channelId) => {
  const _require = channelId;
  let obj = require("get initialized");
  const items = [ChannelStore, GuildStore, PermissionStore, VoiceStateStore];
  const items1 = [channelId];
  return obj.useStateFromStores(items, () => {
    const obj = { channelId, ChannelStore, GuildStore, PermissionStore, VoiceStateStore };
    return getEmbeddedActivityLaunchability(obj);
  }, items1);
});
const result = size.fileFinishedImporting("modules/activities/utils/getEmbeddedActivityLaunchability.tsx");

export { EmbeddedActivityLaunchability };
export { getEmbeddedActivityLaunchability };
export const getEmbeddedActivityLaunchabilityForChannel = function getEmbeddedActivityLaunchabilityForChannel(channelId) {
  const obj = { channelId, ChannelStore, GuildStore, PermissionStore, VoiceStateStore };
  return getEmbeddedActivityLaunchability(obj);
};
export const useEmbeddedActivityLaunchability = tmp2;
export const getEmbeddedActivityLaunchabilityLabel = function getEmbeddedActivityLaunchabilityLabel(arg0) {
  if (obj.CAN_LAUNCH === arg0) {
    const intl3 = intl4.intl;
    return intl3.string(intl4.t.qJvTKQ);
  } else if (tmp.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION === arg0) {
    const intl2 = intl4.intl;
    return intl2.string(intl4.t.hHGrWz);
  } else {
    const intl = intl4.intl;
    return intl.string(intl4.t.j29zCr);
  }
};