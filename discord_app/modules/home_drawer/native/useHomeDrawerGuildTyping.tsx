// === Module 16261: useHomeDrawerGuildTyping ===

// Module 16261 (useHomeDrawerGuildTyping)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import discord_common_shallowEqual from "discord_common/shallowEqual" /* 568 */;
import JoinedThreadsStore from "JoinedThreadsStore" /* 4511 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import TypingStore from "TypingStore" /* 11579 */;

const require = globalThis.__r;

require = fn;
function areHomeDrawerGuildTypingStatesEqual(typingChannelId, typingChannelId2) {
  let result = typingChannelId.typingChannelId === typingChannelId2.typingChannelId && typingChannelId.typingChannelName === typingChannelId2.typingChannelName;
  if (result) {
    result = discord_common_shallowEqual.areArraysShallowEqual(typingChannelId.typingUserIds, typingChannelId2.typingUserIds);
  }
  return result;
}
const isThread = fn(2055).isThread;
let closure_7 = { typingChannelId: "Array", typingChannelName: "Set", typingUserIds: [] };
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/home_drawer/native/useHomeDrawerGuildTyping.tsx");

export const useHomeDrawerGuildTyping = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(6);
  const obj = require("c");
  const tmp = _require;
  let tmp2 = isHomeDrawerChannelInChannelList;
  const isHomeDrawerChannelMuted = require("isHomeDrawerChannelMuted").useIsHomeDrawerChannelMuted();
  let obj2 = require("isHomeDrawerChannelMuted");
  isHomeDrawerChannelInChannelList = require("isHomeDrawerChannelInChannelList").useIsHomeDrawerChannelInChannelList();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [TypingStore, ChannelStore, JoinedThreadsStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === arg0) {
    if (cResult[2] === isHomeDrawerChannelInChannelList) {
      if (cResult[3] === isHomeDrawerChannelMuted) {
        let tmp10 = cResult[4];
        let tmp11 = cResult[5];
      }
      const tmpResult = tmp(tmp2[10]);
      return tmpResult.useStateFromStores(first, tmp10, tmp11, areHomeDrawerGuildTypingStatesEqual);
    }
  }
  const fn = function h() {
    const typingUsersByGuild = TypingStore.getTypingUsersByGuild(closure_0);
    const keys = SnowflakeUtilsDefault.keys(typingUsersByGuild);
    const found = keys.find((item) => {
      basicChannel = basicChannel.getBasicChannel(item);
      let tmp2 = null != basicChannel;
      if (tmp2) {
        tmp2 = !isHomeDrawerChannelMuted(basicChannel);
      }
      if (tmp2) {
        let tmp5 = isThread(basicChannel.type);
        if (tmp5) {
          tmp5 = !JoinedThreadsStore.hasJoined(item);
        }
        let tmp7 = !tmp5;
        if (!tmp5) {
          tmp7 = isHomeDrawerChannelInChannelList(basicChannel);
        }
        tmp2 = tmp7;
      }
      return tmp2;
    });
    if (null == found) {
      let obj2 = closure_7;
    } else {
      obj2 = { typingChannelId: found, typingChannelName: null, typingUserIds: null };
      const channel = ChannelStore.getChannel(found);
      let name;
      if (channel != null) {
        name = channel.name;
      }
      obj2.typingChannelName = name;
      const _Object = Object;
      obj2.typingUserIds = Object.keys(typingUsersByGuild[found]);
    }
    return obj2;
  };
  const items1 = [arg0, isHomeDrawerChannelMuted, isHomeDrawerChannelInChannelList];
  cResult[1] = arg0;
  cResult[2] = isHomeDrawerChannelInChannelList;
  cResult[3] = isHomeDrawerChannelMuted;
  cResult[4] = fn;
  cResult[5] = items1;
  tmp11 = items1;
  tmp10 = fn;
  const obj3 = require("isHomeDrawerChannelInChannelList");
}) : ((arg0) => {
  _require = arg0;
  const isHomeDrawerChannelMuted = require("isHomeDrawerChannelMuted").useIsHomeDrawerChannelMuted();
  const obj = require("isHomeDrawerChannelMuted");
  isHomeDrawerChannelInChannelList = require("isHomeDrawerChannelInChannelList").useIsHomeDrawerChannelInChannelList();
  let obj2 = require("isHomeDrawerChannelInChannelList");
  const items = [TypingStore, ChannelStore, JoinedThreadsStore];
  const items1 = [arg0, isHomeDrawerChannelMuted, isHomeDrawerChannelInChannelList];
  return require("initialize").useStateFromStores(items, () => {
    const typingUsersByGuild = TypingStore.getTypingUsersByGuild(closure_0);
    const keys = SnowflakeUtilsDefault.keys(typingUsersByGuild);
    const found = keys.find((item) => {
      basicChannel = basicChannel.getBasicChannel(item);
      let tmp2 = null != basicChannel;
      if (tmp2) {
        tmp2 = !isHomeDrawerChannelMuted(basicChannel);
      }
      if (tmp2) {
        let tmp5 = isThread(basicChannel.type);
        if (tmp5) {
          tmp5 = !JoinedThreadsStore.hasJoined(item);
        }
        let tmp7 = !tmp5;
        if (!tmp5) {
          tmp7 = isHomeDrawerChannelInChannelList(basicChannel);
        }
        tmp2 = tmp7;
      }
      return tmp2;
    });
    if (null == found) {
      let obj2 = closure_7;
    } else {
      obj2 = { typingChannelId: found, typingChannelName: null, typingUserIds: null };
      const channel = ChannelStore.getChannel(found);
      let name;
      if (channel != null) {
        name = channel.name;
      }
      obj2.typingChannelName = name;
      const _Object = Object;
      obj2.typingUserIds = Object.keys(typingUsersByGuild[found]);
    }
    return obj2;
  }, items1, areHomeDrawerGuildTypingStatesEqual);
});