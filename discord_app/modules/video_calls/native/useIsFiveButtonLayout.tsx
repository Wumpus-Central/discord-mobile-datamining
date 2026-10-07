// === Module 9115: useIsFiveButtonLayout ===

// Module 9115 (useIsFiveButtonLayout)
import ChannelStore from "ChannelStore" /* 2051 */;
import GuildStore from "GuildStore" /* 2074 */;

const require = globalThis.__r;

const require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/video_calls/native/useIsFiveButtonLayout.tsx");

export const useIsFiveButtonLayout = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(9);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function u() {
      return ChannelStore.getChannel(closure_0);
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(first, tmp6);
  const tmpResult = require("initialize");
  let isConnectedToVoiceChannel = require("VoiceChatHooks").useIsConnectedToVoiceChannel(stateFromStores);
  let guild_id;
  if (stateFromStores != null) {
    guild_id = stateFromStores.guild_id;
  }
  if (guild_id == null) {
    guild_id = null;
  }
  let guild_id1;
  const tmpResult3 = require("VoiceChatHooks");
  if (stateFromStores != null) {
    guild_id1 = stateFromStores.guild_id;
  }
  if (guild_id1 == null) {
    guild_id1 = null;
  }
  let id;
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  const tmp10 = guild_id(9116);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [GuildStore];
    cResult[3] = items1;
    let tmp14 = items1;
  } else {
    tmp14 = cResult[3];
  }
  if (cResult[4] !== guild_id) {
    const fn2 = function _() {
      return GuildStore.getGuild(guild_id);
    };
    const items2 = [guild_id];
    cResult[4] = guild_id;
    cResult[5] = fn2;
    cResult[6] = items2;
    let tmp17 = items2;
    let tmp16 = fn2;
  } else {
    tmp16 = cResult[5];
    tmp17 = cResult[6];
  }
  const tmp10Result = guild_id(9116)(guild_id1, id);
  const stateFromStores1 = require("initialize").useStateFromStores(tmp14, tmp16, tmp17);
  if (stateFromStores1 != null) {
    const afkChannelId = stateFromStores1.afkChannelId;
  }
  if (cResult[7] !== stateFromStores) {
    let flag;
    if (stateFromStores != null) {
      flag = stateFromStores.isGuildVoice();
    }
    if (flag == null) {
      flag = false;
    }
    cResult[7] = stateFromStores;
    cResult[8] = flag;
    let tmp19 = flag;
  } else {
    tmp19 = cResult[8];
  }
  let id1;
  const tmpResult4 = require("initialize");
  if (stateFromStores != null) {
    id1 = stateFromStores.id;
  }
  const tmp9Result = guild_id(9117);
  const tmp9ResultResult = guild_id(9117)(id1);
  if (isConnectedToVoiceChannel) {
    isConnectedToVoiceChannel = tmp10Result;
  }
  if (isConnectedToVoiceChannel) {
    if (!tmp19) {
      tmp19 = tmp9ResultResult;
    }
    isConnectedToVoiceChannel = tmp19;
  }
  if (isConnectedToVoiceChannel) {
    isConnectedToVoiceChannel = !tmp23;
  }
  if (isConnectedToVoiceChannel) {
    isConnectedToVoiceChannel = afkChannelId !== arg0;
  }
  return isConnectedToVoiceChannel;
}) : ((arg0) => {
  _require = arg0;
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
  let id;
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  const tmp6 = guild_id(9116);
  const tmp6Result = guild_id(9116)(guild_id1, id);
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
  const tmp5Result = guild_id(9117);
  const tmp5ResultResult = guild_id(9117)(id1);
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
    isConnectedToVoiceChannel = afkChannelId !== arg0;
  }
  return isConnectedToVoiceChannel;
});