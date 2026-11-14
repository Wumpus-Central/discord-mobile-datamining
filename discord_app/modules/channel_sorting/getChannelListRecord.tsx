// === Module 15162: getChannelListRecord ===

// Module 15162 (getChannelListRecord)
import FavoritesUtils from "FavoritesUtils" /* 5180 */;
import ChannelStore from "ChannelStore" /* 5155 */;
import GuildChannelStore_mod from "GuildChannelStore" /* 5236 */;

require = fn;
let GuildChannelStore = fn(5236);
({ GUILD_SELECTABLE_CHANNELS_KEY: c3, GUILD_VOCAL_CHANNELS_KEY: closure_4 } = GuildChannelStore);
let GuildChannelStore = GuildChannelStore_mod;
const ChannelTypes = fn(1072).ChannelTypes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/channel_sorting/getChannelListRecord.tsx");

export default function getChannelListRecord(guildId, id) {
  closure_0 = id;
  if (null != guildId) {
    if (null != id) {
      if (obj.isFavoritesGuildId(guildId)) {
        const channels = GuildChannelStore.getChannels(guildId);
        let found = channels[React3].find((channel) => channel.channel.id === closure_0);
        if (found == null) {
          found = channels[React4].find((channel) => channel.channel.id === closure_0);
        }
        if (found == null) {
          found = channels[ChannelTypes.GUILD_CATEGORY].find((channel) => channel.channel.id === closure_0);
        }
        let channel;
        if (found != null) {
          channel = found.channel;
        }
        return channel;
      } else {
        return ChannelStore.getChannel(id);
      }
      obj = FavoritesUtils;
    }
  }
  return null;
};