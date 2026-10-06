// === Module 16301: useHomeDrawerGuildTyping ===

// Module 16301 (useHomeDrawerGuildTyping)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import shallowEqual from "shallowEqual" /* 568 */;
import ChannelRecord from "ChannelRecord" /* 2055 */;
import JoinedThreadsStore from "JoinedThreadsStore" /* 4517 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import TypingStore from "TypingStore" /* 11592 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, basicChannel;

function areHomeDrawerGuildTypingStatesEqual(typingChannelId, typingChannelId2) {
  let result = typingChannelId.typingChannelId === typingChannelId2.typingChannelId && typingChannelId.typingChannelName === typingChannelId2.typingChannelName;
  if (result) {
    const obj = shallowEqual;
    result = obj.areArraysShallowEqual(typingChannelId.typingUserIds, typingChannelId2.typingUserIds);
  }
  return result;
}
const isThread = ChannelRecord.isThread;
let closure_7 = { typingChannelId: "Array", typingChannelName: "Reflect", typingUserIds: [] };
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let first;
  let isHomeDrawerChannelInChannelList;
  _require = arg0;
  let tmp2 = isHomeDrawerChannelInChannelList;
  let obj = require("react");
  const cResult = obj.c(6);
  let obj2 = require("isHomeDrawerChannelMuted");
  const isHomeDrawerChannelMuted = obj2.useIsHomeDrawerChannelMuted();
  const obj3 = require("isHomeDrawerChannelInChannelList");
  isHomeDrawerChannelInChannelList = obj3.useIsHomeDrawerChannelInChannelList();
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [TypingStore, ChannelStore, JoinedThreadsStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === arg0) {
    if (cResult[2] === isHomeDrawerChannelInChannelList) {
      let tmp10;
      let tmp11;
      if (cResult[3] === isHomeDrawerChannelMuted) {
        tmp10 = cResult[4];
        tmp11 = cResult[5];
      }
      const tmpResult = tmp(tmp2[10]);
      return tmpResult.useStateFromStores(first, tmp10, tmp11, areHomeDrawerGuildTypingStatesEqual);
    }
  }
  const fn = function h() {
    let name;
    let obj2;
    const typingUsersByGuild = TypingStore.getTypingUsersByGuild(closure_0);
    const obj = SnowflakeUtilsDefault;
    const keys = obj.keys(typingUsersByGuild);
    const found = keys.find((item) => {
      basicChannel = basicChannel.getBasicChannel(item);
      let tmp2 = null != basicChannel && !isHomeDrawerChannelMuted(basicChannel);
      if (tmp2) {
        const tmp5 = isThread(basicChannel.type) && !JoinedThreadsStore.hasJoined(item);
        tmp2 = !tmp5 && isHomeDrawerChannelInChannelList(basicChannel);
        const tmp7 = !tmp5 && isHomeDrawerChannelInChannelList(basicChannel);
      }
      return tmp2;
    });
    if (null == found) {
      obj2 = closure_7;
    } else {
      obj2 = { typingChannelId: found, typingChannelName: name, typingUserIds: Object.keys(typingUsersByGuild[found]) };
      const channel = ChannelStore.getChannel(found);
      name = undefined;
      if (channel != null) {
        name = channel.name;
      }
      const _Object = Object;
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
}) : ((arg0) => {
  let closure_0;
  let isHomeDrawerChannelInChannelList;
  _require = arg0;
  let obj = require("isHomeDrawerChannelMuted");
  const isHomeDrawerChannelMuted = obj.useIsHomeDrawerChannelMuted();
  let obj2 = require("isHomeDrawerChannelInChannelList");
  isHomeDrawerChannelInChannelList = obj2.useIsHomeDrawerChannelInChannelList();
  const items = [TypingStore, ChannelStore, JoinedThreadsStore];
  const items1 = [arg0, isHomeDrawerChannelMuted, isHomeDrawerChannelInChannelList];
  const obj3 = require("get initialized");
  return obj3.useStateFromStores(items, () => {
    let name;
    let obj2;
    const typingUsersByGuild = TypingStore.getTypingUsersByGuild(closure_0);
    const obj = SnowflakeUtilsDefault;
    const keys = obj.keys(typingUsersByGuild);
    const found = keys.find((item) => {
      basicChannel = basicChannel.getBasicChannel(item);
      let tmp2 = null != basicChannel && !isHomeDrawerChannelMuted(basicChannel);
      if (tmp2) {
        const tmp5 = isThread(basicChannel.type) && !JoinedThreadsStore.hasJoined(item);
        tmp2 = !tmp5 && isHomeDrawerChannelInChannelList(basicChannel);
        const tmp7 = !tmp5 && isHomeDrawerChannelInChannelList(basicChannel);
      }
      return tmp2;
    });
    if (null == found) {
      obj2 = closure_7;
    } else {
      obj2 = { typingChannelId: found, typingChannelName: name, typingUserIds: Object.keys(typingUsersByGuild[found]) };
      const channel = ChannelStore.getChannel(found);
      name = undefined;
      if (channel != null) {
        name = channel.name;
      }
      const _Object = Object;
    }
    return obj2;
  }, items1, areHomeDrawerGuildTypingStatesEqual);
});
let result = size.fileFinishedImporting("modules/home_drawer/native/useHomeDrawerGuildTyping.tsx");

export const useHomeDrawerGuildTyping = tmp2;