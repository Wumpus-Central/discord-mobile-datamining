// discord_app/modules/channel/ChannelStatusStore.tsx
import initializeDefault from "initialize" /* 589 */;
import set2 from "set" /* 692 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import closure_2 from "_handleConnectionOpen" /* 4495 */;
import set from "set" /* 2 */;

require = arg1;
function handleConnectionReset() {
  set.clear();
}
function handleGuildReset(guild) {
  set.delete(guild.guild.id);
}
let set = new Set();
let closure_4 = {};
const Store = initializeDefault.Store;
class ChannelStatusStore extends Store {
}
const prototype = ChannelStatusStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(closure_2);
};
prototype["getChannelStatus"] = function getChannelStatus(guild_id) {
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
prototype["hasRequestedStatuses"] = function hasRequestedStatuses(guild_id) {
  return set.has(guild_id);
};
ChannelStatusStore.displayName = "ChannelStatusStore";
const channelStatusStore = new ChannelStatusStore(dispatcherDefault, {
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
      let tmp = dependencyMap;
      dependencyMap[guildId][item10009.id] = item10009.status;
      continue;
    }
  },
  FETCH_CHANNEL_INFO: function handleFetchChannelInfo(guildId) {
    set.add(guildId.guildId);
  }
});
const result = set.fileFinishedImporting("modules/channel/ChannelStatusStore.tsx");

export default channelStatusStore;