// === Module 9712: useGuildsUserCanStartStageIn ===

// Module 9712 (useGuildsUserCanStartStageIn)
import GuildChannelStore from "GuildChannelStore" /* 2012 */;
import PermissionStore from "PermissionStore" /* 4199 */;

const require = fn;
const GUILD_VOCAL_CHANNELS_KEY = fn(2012).GUILD_VOCAL_CHANNELS_KEY;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_scheduled_events/useGuildsUserCanStartStageIn.tsx");

export const useChannelsUserCanStartStageIn = function useChannelsUserCanStartStageIn(guild) {
  let id;
  if (guild != null) {
    id = guild.id;
  }
  if (id == null) {
    id = null;
  }
  const items = [GuildChannelStore, PermissionStore];
  const items1 = [id];
  return id(504).useStateFromStoresArray(items, () => GuildChannelStore.getChannels(id)[GUILD_VOCAL_CHANNELS_KEY].reduce((arr, channel) => {
    channel = channel.channel;
    if (channel.isGuildStageVoice()) {
      const channel2 = channel.channel;
      if (closure_1_4 !== undefined) {
        let canResult = channel2.isGuildStageVoice();
        if (canResult) {
          canResult = closure_1_4.can(id(closure_1_1[2]).MODERATE_STAGE_CHANNEL_PERMISSIONS, channel2);
        }
        if (canResult) {
          arr = arr.push(channel);
        }
      }
    }
    return arr;
  }, []), items1);
};