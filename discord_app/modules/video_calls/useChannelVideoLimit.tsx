// === Module 9305: useChannelVideoLimit ===

// Module 9305 (useChannelVideoLimit)
import GuildStore from "GuildStore" /* 2074 */;
import SortedVoiceStateStore from "SortedVoiceStateStore" /* 4914 */;

const require = globalThis.__r;

const require = fn;
const ChannelTypes = fn(1085).ChannelTypes;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/video_calls/useChannelVideoLimit.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SortedVoiceStateStore, GuildStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function h() {
      const result = SortedVoiceStateStore.countVoiceStatesForChannel(guildId.id);
      guild = GuildStore.getGuild(guildId.getGuildId());
      if (null == guild) {
        let obj = { reachedLimit: false, limit: -1 };
      } else if (guildId.type === ChannelTypes.GUILD_STAGE_VOICE) {
        const obj2 = { reachedLimit: result > guild.maxStageVideoChannelUsers, limit: guild.maxStageVideoChannelUsers };
        obj = obj2;
      } else {
        obj = { reachedLimit: guild.maxVideoChannelUsers > 0 && result > guild.maxVideoChannelUsers, limit: guild.maxVideoChannelUsers };
        const tmp5 = guild.maxVideoChannelUsers > 0 && result > guild.maxVideoChannelUsers;
      }
      return obj;
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp8 = items1;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  let obj = require("c");
  return require("initialize").useStateFromStoresObject(first, tmp7, tmp8);
}) : ((arg0) => {
  _require = arg0;
  const items = [SortedVoiceStateStore, GuildStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStoresObject(items, () => {
    const result = SortedVoiceStateStore.countVoiceStatesForChannel(guildId.id);
    guild = GuildStore.getGuild(guildId.getGuildId());
    if (null == guild) {
      let obj = { reachedLimit: false, limit: -1 };
    } else if (guildId.type === ChannelTypes.GUILD_STAGE_VOICE) {
      const obj2 = { reachedLimit: result > guild.maxStageVideoChannelUsers, limit: guild.maxStageVideoChannelUsers };
      obj = obj2;
    } else {
      obj = { reachedLimit: guild.maxVideoChannelUsers > 0 && result > guild.maxVideoChannelUsers, limit: guild.maxVideoChannelUsers };
      const tmp5 = guild.maxVideoChannelUsers > 0 && result > guild.maxVideoChannelUsers;
    }
    return obj;
  }, items1);
});
export const getChannelVideoLimit = function getChannelVideoLimit(channel) {
  const result = SortedVoiceStateStore.countVoiceStatesForChannel(channel.id);
  guild = GuildStore.getGuild(channel.getGuildId());
  if (null == guild) {
    let obj = { reachedLimit: false, limit: -1 };
  } else if (channel.type === ChannelTypes.GUILD_STAGE_VOICE) {
    const obj2 = { reachedLimit: result > guild.maxStageVideoChannelUsers, limit: guild.maxStageVideoChannelUsers };
    obj = obj2;
  } else {
    obj = { reachedLimit: guild.maxVideoChannelUsers > 0 && result > guild.maxVideoChannelUsers, limit: guild.maxVideoChannelUsers };
    const tmp4 = guild.maxVideoChannelUsers > 0 && result > guild.maxVideoChannelUsers;
  }
  return obj;
};