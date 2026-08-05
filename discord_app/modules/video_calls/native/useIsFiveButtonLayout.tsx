// discord_app/modules/video_calls/native/useIsFiveButtonLayout.tsx
import ensureGuildLoaded from "ensureGuildLoaded";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import { initialize } from "../../../../discord_common/js/packages/flux/index.tsx";
import { useIsConnectedToVoiceChannel } from "../../voice_chat/VoiceChatHooks.tsx";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/video_calls/native/useIsFiveButtonLayout.tsx");

export const useIsFiveButtonLayout = function useIsFiveButtonLayout(id) {
  const _require = id;
  const items = [ensureGuildLoaded];
  const stateFromStores = _initialize.useStateFromStores(items, () => outer1_3.getChannel(closure_0));
  const obj = _initialize;
  const tmp = _require;
  let isConnectedToVoiceChannel = _useIsConnectedToVoiceChannel.useIsConnectedToVoiceChannel(stateFromStores);
  let guild_id;
  if (stateFromStores != null) {
    guild_id = stateFromStores.guild_id;
  }
  if (guild_id == null) {
    guild_id = null;
  }
  let guild_id1;
  const obj3 = _useIsConnectedToVoiceChannel;
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
  const tmp6 = guild_id(10553);
  const tmp6Result = guild_id(10553)(guild_id1, id);
  const items1 = [createGuildRecordFromRust];
  const items2 = [guild_id];
  const stateFromStores1 = tmp(589).useStateFromStores(items1, () => outer1_4.getGuild(guild_id), items2);
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
  const tmp5Result = guild_id(10554);
  const tmp5ResultResult = guild_id(10554)(id1);
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