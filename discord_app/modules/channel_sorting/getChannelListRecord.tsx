// discord_app/modules/channel_sorting/getChannelListRecord.tsx
import FavoritesUtils from "../favorites/FavoritesUtils.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import GuildChannelStore_mod from "../../stores/GuildChannelStore.tsx";

require = fn;
let GuildChannelStore = fn(4748);
({ GUILD_SELECTABLE_CHANNELS_KEY: c3, GUILD_VOCAL_CHANNELS_KEY: closure_4 } = GuildChannelStore);
let GuildChannelStore = GuildChannelStore_mod;
const ChannelTypes = fn(1085).ChannelTypes;
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
}
