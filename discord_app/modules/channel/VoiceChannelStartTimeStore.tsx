// discord_app/modules/channel/VoiceChannelStartTimeStore.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import DurationsDefault from "../../utils/Durations.tsx";
import ChannelTypes from "../../../discord_common/js/shared/shared-constants/ChannelTypes.tsx";
import GatewayConnectionStore from "../gateway/GatewayConnectionStore.tsx";

require = fn;
function _toTimestampMs(arg0) {
  return new Date(arg0 * DurationsDefault.Millis.SECOND).getTime();
}
function handleConnectionReset() {
  set.clear();
}
function handleGuildReset(guild) {
  set.delete(guild.guild.id);
}
const set = new Set();
const dependencyMap = {};
const Store = initializeDefault.Store;
class VoiceChannelStartTimeStore extends Store {}
const prototype = VoiceChannelStartTimeStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(GatewayConnectionStore);
};
prototype["getStartTime"] = function getStartTime(guild_id) {
  if (null != guild_id) {
    if (null != guild_id.guild_id) {
      if (guild_id.type === ChannelTypes.ChannelTypes.GUILD_VOICE) {
        let tmp5;
        if (dependencyMap[guild_id.guild_id] != null) {
          tmp5 = tmp4[guild_id.id];
        }
        return tmp5;
      }
    }
  }
};
prototype["hasRequestedStartTimes"] = function hasRequestedStartTimes(guild_id) {
  return set.has(guild_id);
};
VoiceChannelStartTimeStore.displayName = "VoiceChannelStartTimeStore";
const voiceChannelStartTimeStore = new VoiceChannelStartTimeStore(DispatcherDefault, {
  GUILD_CREATE: handleGuildReset,
  GUILD_DELETE: handleGuildReset,
  CONNECTION_RESUMED: handleConnectionReset,
  CONNECTION_OPEN: handleConnectionReset,
  VOICE_CHANNEL_START_TIME_UPDATE: function handleVoiceChannelStartTimeUpdate(id) {
    ({ guildId, voiceStartTime } = id);
    if (null == dependencyMap[guildId]) {
      dependencyMap[guildId] = {};
    }
    let time;
    if (null != voiceStartTime) {
      const _Date = Date;
      const date = new Date(voiceStartTime * DurationsDefault.Millis.SECOND);
      time = date.getTime();
    }
    dependencyMap[guildId][id.id] = time;
  },
  CHANNEL_INFO: function handleStartTimes(arg0) {
    ({ guildId, channels } = arg0);
    dependencyMap[guildId] = {};
    const iter = channels[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let voiceStartTime = nextResult.voiceStartTime;
      let tmp4;
      if (null != voiceStartTime) {
        tmp4 = _toTimestampMs(tmp2);
      }
      dependencyMap[guildId][nextResult.id] = tmp4;
      continue;
    }
  },
  FETCH_CHANNEL_INFO: function handleFetchChannelInfo(guildId) {
    set.add(guildId.guildId);
  },
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/channel/VoiceChannelStartTimeStore.tsx");

export default voiceChannelStartTimeStore;
