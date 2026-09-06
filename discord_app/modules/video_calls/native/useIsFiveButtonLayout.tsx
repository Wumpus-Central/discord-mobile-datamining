// === Module 9500: useIsFiveButtonLayout ===

// Module 9500 (useIsFiveButtonLayout)
import ChannelStore from "ChannelStore" /* 1957 */;
import GuildStore from "GuildStore" /* 1979 */;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/video_calls/native/useIsFiveButtonLayout.tsx");

export const useIsFiveButtonLayout = function useIsFiveButtonLayout(id) {
  _require = id;
  const items = [ChannelStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => ChannelStore.getChannel(closure_0));
  const obj = require("initialize");
  const tmp = _require;
  let isConnectedToVoiceChannel = require("VoiceChatHooks").useIsConnectedToVoiceChannel(stateFromStores);
  let guild_id;
  if (stateFromStores != null) {
    guild_id = stateFromStores.guild_id;
  }
  if (guild_id == null) {
    guild_id = null;
  }
  let guild_id1;
  const obj3 = require("VoiceChatHooks");
  if (stateFromStores != null) {
    guild_id1 = stateFromStores.guild_id;
  }
  if (guild_id1 == null) {
    guild_id1 = null;
  }
  id = undefined;
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  const tmp6 = guild_id(9501);
  const tmp6Result = guild_id(9501)(guild_id1, id);
  const items1 = [GuildStore];
  const items2 = [guild_id];
  const stateFromStores1 = tmp(504).useStateFromStores(items1, () => GuildStore.getGuild(guild_id), items2);
  if (stateFromStores1 != null) {
    const afkChannelId = stateFromStores1.afkChannelId;
  }
  let flag;
  if (stateFromStores != null) {
    flag = stateFromStores.isGuildVoice();
  }
  if (flag == null) {
    flag = false;
  }
  let id1;
  const tmpResult = tmp(504);
  if (stateFromStores != null) {
    id1 = stateFromStores.id;
  }
  const tmp5Result = guild_id(9503);
  const tmp5ResultResult = guild_id(9503)(id1);
  if (isConnectedToVoiceChannel) {
    isConnectedToVoiceChannel = tmp6Result;
  }
  if (isConnectedToVoiceChannel) {
    if (!flag) {
      flag = tmp5ResultResult;
    }
    isConnectedToVoiceChannel = flag;
  }
  if (isConnectedToVoiceChannel) {
    isConnectedToVoiceChannel = !tmp14;
  }
  if (isConnectedToVoiceChannel) {
    isConnectedToVoiceChannel = afkChannelId !== id;
  }
  return isConnectedToVoiceChannel;
};