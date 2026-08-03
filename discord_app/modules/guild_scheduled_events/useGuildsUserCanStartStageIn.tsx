// === Module 8252: useChannelsUserCanStartStageIn ===

// Module 8252 (useChannelsUserCanStartStageIn)
import comparator from "comparator";
import { GUILD_VOCAL_CHANNELS_KEY } from "comparator";
import getUncachedChannelPermissions from "getUncachedChannelPermissions";

const require = arg1;
const result = require("Permissions").fileFinishedImporting("modules/guild_scheduled_events/useGuildsUserCanStartStageIn.tsx");

export const useChannelsUserCanStartStageIn = function useChannelsUserCanStartStageIn(guild) {
  let id;
  if (guild != null) {
    id = guild.id;
  }
  if (id == null) {
    id = null;
  }
  const items = [comparator, getUncachedChannelPermissions];
  const items1 = [id];
  return id(589).useStateFromStoresArray(items, () => outer1_2.getChannels(id)[outer1_3].reduce((arr, channel) => {
    channel = channel.channel;
    if (channel.isGuildStageVoice()) {
      const channel2 = channel.channel;
      if (getUncachedChannelPermissions !== undefined) {
        let canResult = channel2.isGuildStageVoice();
        if (canResult) {
          canResult = obj.can(callback(table[2]).MODERATE_STAGE_CHANNEL_PERMISSIONS, channel2);
        }
        if (canResult) {
          arr.push(channel);
        }
      }
      obj = getUncachedChannelPermissions;
    }
    return arr;
  }, []), items1);
};