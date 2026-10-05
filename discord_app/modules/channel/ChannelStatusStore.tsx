// === Module 7040: ChannelStatusStore ===

// Module 7040 (ChannelStatusStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import ChannelTypes from "ChannelTypes" /* 1106 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 5436 */;
import size from "module_2" /* 2 */;

function handleConnectionReset() {
  set.clear();
}
function handleGuildReset(guild) {
  set.delete(guild.guild.id);
}
const set = new Set();
const React3 = {};
const Store = get_initializedDefault.Store;
class ChannelStatusStore extends Store {
  initialize() {
    this.waitFor(GatewayConnectionStore);
  }
  getChannelStatus(guild_id) {
    if (null != guild_id) {
      if (null != guild_id.guild_id) {
        if (guild_id.type === ChannelTypes.ChannelTypes.GUILD_VOICE) {
          let tmp5;
          if (closure_4[guild_id.guild_id] != null) {
            tmp5 = tmp4[guild_id.id];
          }
          return tmp5;
        }
      }
    }
  }
  hasRequestedStatuses(guild_id) {
    return set.has(guild_id);
  }
}
const prototype = ChannelStatusStore.prototype;
ChannelStatusStore.displayName = "ChannelStatusStore";
const obj = {
  GUILD_CREATE: handleGuildReset,
  GUILD_DELETE: handleGuildReset,
  CONNECTION_RESUMED: handleConnectionReset,
  CONNECTION_OPEN: handleConnectionReset,
  VOICE_CHANNEL_STATUS_UPDATE: function handleVoiceChannelStatusUpdate(guildId) {
    if (null == closure_4[guildId.guildId]) {
      closure_4[guildId.guildId] = {};
    }
    closure_4[guildId.guildId][guildId.id] = guildId.status;
  },
  CHANNEL_INFO: function handleChannelInfo(arg0) {
    let channels;
    let guildId;
    ({ guildId, channels } = arg0);
    closure_4[guildId] = {};
    for (const item10009 of channels) {
      closure_4[guildId][item10009.id] = item10009.status;
      continue;
    }
  },
  FETCH_CHANNEL_INFO: function handleFetchChannelInfo(guildId) {
    set.add(guildId.guildId);
  }
};
const channelStatusStore = new ChannelStatusStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/channel/ChannelStatusStore.tsx");

export default channelStatusStore;