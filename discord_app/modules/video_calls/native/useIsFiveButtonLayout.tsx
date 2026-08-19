// === Module 8697: useIsFiveButtonLayout ===

// Module 8697 (useIsFiveButtonLayout)
import ensureGuildLoaded from "ensureGuildLoaded" /* 1391 */;
import createGuildRecordFromRust from "createGuildRecordFromRust" /* 1910 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/video_calls/native/useIsFiveButtonLayout.tsx");

export const useIsFiveButtonLayout = function useIsFiveButtonLayout(id) {
  const _require = id;
  const items = [closure_3];
  const stateFromStores = _require(589).useStateFromStores(items, () => closure_1_3.getChannel(closure_0));
  const obj = _require(589);
  const tmp = _require;
  let isConnectedToVoiceChannel = _require(8675).useIsConnectedToVoiceChannel(stateFromStores);
  let guild_id;
  if (stateFromStores != null) {
    guild_id = stateFromStores.guild_id;
  }
  if (guild_id == null) {
    guild_id = null;
  }
  let guild_id1;
  const obj3 = _require(8675);
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
  const tmp6 = guild_id(8698);
  const tmp6Result = guild_id(8698)(guild_id1, id);
  const items1 = [closure_4];
  const items2 = [guild_id];
  const stateFromStores1 = tmp(589).useStateFromStores(items1, () => closure_1_4.getGuild(guild_id), items2);
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
  const tmpResult = tmp(589);
  if (stateFromStores != null) {
    id1 = stateFromStores.id;
  }
  const tmp5Result = guild_id(8700);
  const tmp5ResultResult = guild_id(8700)(id1);
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