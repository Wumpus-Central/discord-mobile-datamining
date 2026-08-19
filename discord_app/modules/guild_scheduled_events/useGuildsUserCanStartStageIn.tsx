// === Module 8823: useChannelsUserCanStartStageIn ===

// Module 8823 (useChannelsUserCanStartStageIn)
import comparator from "comparator" /* 1980 */;
import { GUILD_VOCAL_CHANNELS_KEY } from "comparator" /* 1980 */;
import getUncachedChannelPermissions from "getUncachedChannelPermissions" /* 4021 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/guild_scheduled_events/useGuildsUserCanStartStageIn.tsx");

export const useChannelsUserCanStartStageIn = function useChannelsUserCanStartStageIn(guild) {
  let id;
  if (guild != null) {
    id = guild.id;
  }
  if (id == null) {
    id = null;
  }
  const items = [closure_2, closure_4];
  const items1 = [id];
  return id(589).useStateFromStoresArray(items, () => closure_1_2.getChannels(id)[GUILD_VOCAL_CHANNELS_KEY].reduce((acc, item, index) => {
    const channel = item.channel;
    if (channel.isGuildStageVoice()) {
      const channel2 = item.channel;
      if (closure_4 !== undefined) {
        let canResult = channel2.isGuildStageVoice();
        if (canResult) {
          canResult = closure_4.can(callback(table[2]).MODERATE_STAGE_CHANNEL_PERMISSIONS, channel2);
        }
        if (canResult) {
          acc.push(channel);
        }
      }
    }
    return acc;
  }, []), items1);
};