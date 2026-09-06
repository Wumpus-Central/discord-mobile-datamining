// === Module 9088: useChannelVideoLimit ===

// Module 9088 (useChannelVideoLimit)
import GuildStore from "GuildStore" /* 1979 */;
import SortedVoiceStateStore from "SortedVoiceStateStore" /* 4584 */;

const require = fn;
const ChannelTypes = fn(1074).ChannelTypes;
const size = fn(2);
let result = size.fileFinishedImporting("modules/video_calls/useChannelVideoLimit.tsx");

export default function useChannelVideoLimit(arg0) {
  _require = arg0;
  const items = [SortedVoiceStateStore, GuildStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStoresObject(items, () => {
    const result = SortedVoiceStateStore.countVoiceStatesForChannel(guildId.id);
    const guild = GuildStore.getGuild(guildId.getGuildId());
    if (null == guild) {
      let obj = { reachedLimit: false, limit: -1 };
    } else if (guildId.type === ChannelTypes.GUILD_STAGE_VOICE) {
      obj = { reachedLimit: result > guild.maxStageVideoChannelUsers, limit: guild.maxStageVideoChannelUsers };
    } else {
      obj = { reachedLimit: guild.maxVideoChannelUsers > 0 && result > guild.maxVideoChannelUsers, limit: guild.maxVideoChannelUsers };
      const tmp5 = guild.maxVideoChannelUsers > 0 && result > guild.maxVideoChannelUsers;
    }
    return obj;
  }, items1);
};
export const getChannelVideoLimit = function getChannelVideoLimit(channel) {
  const result = SortedVoiceStateStore.countVoiceStatesForChannel(channel.id);
  const guild = GuildStore.getGuild(channel.getGuildId());
  if (null == guild) {
    let obj = { reachedLimit: false, limit: -1 };
  } else if (channel.type === ChannelTypes.GUILD_STAGE_VOICE) {
    obj = { reachedLimit: result > guild.maxStageVideoChannelUsers, limit: guild.maxStageVideoChannelUsers };
  } else {
    obj = { reachedLimit: guild.maxVideoChannelUsers > 0 && result > guild.maxVideoChannelUsers, limit: guild.maxVideoChannelUsers };
    const tmp4 = guild.maxVideoChannelUsers > 0 && result > guild.maxVideoChannelUsers;
  }
  return obj;
};