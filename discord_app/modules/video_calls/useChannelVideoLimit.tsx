// discord_app/modules/video_calls/useChannelVideoLimit.tsx
import createGuildRecordFromRust from "createGuildRecordFromRust";
import getVoiceStatesForGuild from "getVoiceStatesForGuild";
import { ChannelTypes } from "ME";

const require = arg1;
let result = require("ME").fileFinishedImporting("modules/video_calls/useChannelVideoLimit.tsx");

export default function useChannelVideoLimit(arg0) {
  const _require = arg0;
  const items = [getVoiceStatesForGuild, createGuildRecordFromRust];
  const items1 = [arg0];
  return _require("../../../discord_common/js/packages/flux/index.tsx").useStateFromStoresObject(items, () => {
    const result = outer1_3.countVoiceStatesForChannel(guildId.id);
    const guild = outer1_2.getGuild(guildId.getGuildId());
    if (null == guild) {
      let obj = { reachedLimit: false, limit: -1 };
    } else if (guildId.type === outer1_4.GUILD_STAGE_VOICE) {
      obj = { reachedLimit: null, limit: null };
      obj[0] = result > guild.maxStageVideoChannelUsers;
      obj[1] = guild.maxStageVideoChannelUsers;
    } else {
      obj = { reachedLimit: null, limit: null };
      obj[0] = guild.maxVideoChannelUsers > 0 && result > guild.maxVideoChannelUsers;
      obj[1] = guild.maxVideoChannelUsers;
      const tmp5 = guild.maxVideoChannelUsers > 0 && result > guild.maxVideoChannelUsers;
    }
    return obj;
  }, items1);
};
export const getChannelVideoLimit = function getChannelVideoLimit(channel) {
  const result = getVoiceStatesForGuild.countVoiceStatesForChannel(channel.id);
  guild = guild.getGuild(channel.getGuildId());
  if (null == guild) {
    let obj = { reachedLimit: false, limit: -1 };
  } else if (channel.type === ChannelTypes.GUILD_STAGE_VOICE) {
    obj = { reachedLimit: null, limit: null };
    obj[0] = result > guild.maxStageVideoChannelUsers;
    obj[1] = guild.maxStageVideoChannelUsers;
  } else {
    obj = { reachedLimit: null, limit: null };
    obj[0] = guild.maxVideoChannelUsers > 0 && result > guild.maxVideoChannelUsers;
    obj[1] = guild.maxVideoChannelUsers;
    const tmp4 = guild.maxVideoChannelUsers > 0 && result > guild.maxVideoChannelUsers;
  }
  return obj;
};