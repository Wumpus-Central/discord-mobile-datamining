// discord_app/modules/video_calls/useChannelVideoLimit.tsx
import closure_2 from "../../stores/GuildStore.tsx";
import closure_3 from "../../stores/views/SortedVoiceStateStore.tsx";
import { ChannelTypes } from "../../Constants.tsx";
import { initialize } from "../../../discord_common/js/packages/flux/index.tsx";

const require = arg1;
let result = require("set").fileFinishedImporting("modules/video_calls/useChannelVideoLimit.tsx");

export default function useChannelVideoLimit(arg0) {
  const _require = arg0;
  const items = [closure_3, closure_2];
  const items1 = [arg0];
  return _initialize.useStateFromStoresObject(items, () => {
    const result = closure_1_3.countVoiceStatesForChannel(guildId.id);
    const guild = closure_1_2.getGuild(guildId.getGuildId());
    if (null == guild) {
      let obj = { reachedLimit: false, limit: -1 };
    } else if (guildId.type === closure_1_4.GUILD_STAGE_VOICE) {
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
  const result = closure_3.countVoiceStatesForChannel(channel.id);
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