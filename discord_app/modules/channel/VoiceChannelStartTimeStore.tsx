// === Module 10478: _toTimestampMs ===

// Module 10478 (_toTimestampMs)
import initializeDefault from "initialize" /* 589 */;
import setDefault from "set" /* 687 */;
import set2 from "set" /* 692 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import closure_3 from "_handleConnectionOpen" /* 5102 */;
import set from "set" /* 2 */;

require = arg1;
function _toTimestampMs(arg0) {
  return new Date(arg0 * setDefault.Millis.SECOND).getTime();
}
function handleConnectionReset() {
  set.clear();
}
function handleGuildReset(guild) {
  set.delete(guild.guild.id);
}
let set = new Set();
let closure_5 = {};
const Store = initializeDefault.Store;
class VoiceChannelStartTimeStore extends Store {
}
const prototype = VoiceChannelStartTimeStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(closure_3);
};
prototype["getStartTime"] = function getStartTime(guild_id) {
  if (null != guild_id) {
    if (null != guild_id.guild_id) {
      if (guild_id.type === set2.ChannelTypes.GUILD_VOICE) {
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
const voiceChannelStartTimeStore = new VoiceChannelStartTimeStore(dispatcherDefault, {
  GUILD_CREATE: handleGuildReset,
  GUILD_DELETE: handleGuildReset,
  CONNECTION_RESUMED: handleConnectionReset,
  CONNECTION_OPEN: handleConnectionReset,
  VOICE_CHANNEL_START_TIME_UPDATE: function handleVoiceChannelStartTimeUpdate(id) {
    ({ guildId, voiceStartTime } = id);
    if (null == dependencyMap[guildId]) {
      tmp[guildId] = {};
    }
    let time;
    if (null != voiceStartTime) {
      const _Date = Date;
      const date = new Date(voiceStartTime * setDefault.Millis.SECOND);
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
      let tmp3 = dependencyMap;
      let tmp4;
      if (null != voiceStartTime) {
        let tmp5 = _toTimestampMs;
        let tmp6 = voiceStartTime;
        tmp4 = _toTimestampMs(tmp2);
      }
      dependencyMap[guildId][nextResult.id] = tmp4;
      continue;
    }
  },
  FETCH_CHANNEL_INFO: function handleFetchChannelInfo(guildId) {
    set.add(guildId.guildId);
  }
});
const result = set.fileFinishedImporting("modules/channel/VoiceChannelStartTimeStore.tsx");

export default voiceChannelStartTimeStore;