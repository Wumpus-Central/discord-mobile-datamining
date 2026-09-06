// === Module 7529: ChannelStatusStore ===

// Module 7529 (ChannelStatusStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import ChannelTypes from "ChannelTypes" /* 1094 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 5277 */;

require = fn;
function handleConnectionReset() {
  set.clear();
}
function handleGuildReset(guild) {
  set.delete(guild.guild.id);
}
const set = new Set();
const dependencyMap = {};
const Store = initializeDefault.Store;
class ChannelStatusStore extends Store {
}
const prototype = ChannelStatusStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(GatewayConnectionStore);
};
prototype["getChannelStatus"] = function getChannelStatus(guild_id) {
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
prototype["hasRequestedStatuses"] = function hasRequestedStatuses(guild_id) {
  return set.has(guild_id);
};
ChannelStatusStore.displayName = "ChannelStatusStore";
const channelStatusStore = new ChannelStatusStore(DispatcherDefault, {
  GUILD_CREATE: handleGuildReset,
  GUILD_DELETE: handleGuildReset,
  CONNECTION_RESUMED: handleConnectionReset,
  CONNECTION_OPEN: handleConnectionReset,
  VOICE_CHANNEL_STATUS_UPDATE: function handleVoiceChannelStatusUpdate(guildId) {
    if (null == dependencyMap[guildId.guildId]) {
      tmp[guildId.guildId] = {};
    }
    dependencyMap[guildId.guildId][guildId.id] = guildId.status;
  },
  CHANNEL_INFO: function handleChannelInfo(arg0) {
    ({ guildId, channels } = arg0);
    dependencyMap[guildId] = {};
    for (const item10009 of channels) {
      dependencyMap[guildId][item10009.id] = item10009.status;
      continue;
    }
  },
  FETCH_CHANNEL_INFO: function handleFetchChannelInfo(guildId) {
    set.add(guildId.guildId);
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/channel/ChannelStatusStore.tsx");

export default channelStatusStore;