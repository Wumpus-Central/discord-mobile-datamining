// === Module 9603: useChannelsUserCanStartStageIn ===

// Module 9603 (useChannelsUserCanStartStageIn)
import closure_2 from "comparator" /* 1982 */;
import { GUILD_VOCAL_CHANNELS_KEY } from "comparator" /* 1982 */;
import closure_4 from "getUncachedChannelPermissions" /* 4089 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/guild_scheduled_events/useGuildsUserCanStartStageIn.tsx");

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
  return id(589).useStateFromStoresArray(items, () => closure_1_2.getChannels(id)[closure_1_3].reduce((arr, channel) => {
    channel = channel.channel;
    if (channel.isGuildStageVoice()) {
      const channel2 = channel.channel;
      if (closure_4 !== undefined) {
        let canResult = channel2.isGuildStageVoice();
        if (canResult) {
          canResult = obj.can(callback(table[2]).MODERATE_STAGE_CHANNEL_PERMISSIONS, channel2);
        }
        if (canResult) {
          arr.push(channel);
        }
      }
      obj = closure_4;
    }
    return arr;
  }, []), items1);
};