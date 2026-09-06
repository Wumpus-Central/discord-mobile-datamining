// === Module 16320: useHomeDrawerGuildTyping ===

// Module 16320 (useHomeDrawerGuildTyping)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import discord_common_shallowEqual from "discord_common/shallowEqual" /* 558 */;
import JoinedThreadsStore from "JoinedThreadsStore" /* 4201 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import TypingStore from "TypingStore" /* 11965 */;

require = fn;
function areHomeDrawerGuildTypingStatesEqual(typingChannelId, typingChannelId2) {
  let result = typingChannelId.typingChannelId === typingChannelId2.typingChannelId && typingChannelId.typingChannelName === typingChannelId2.typingChannelName;
  if (result) {
    result = discord_common_shallowEqual.areArraysShallowEqual(typingChannelId.typingUserIds, typingChannelId2.typingUserIds);
  }
  return result;
}
const isThread = fn(1961).isThread;
let obj = { typingChannelId: "Array", typingChannelName: "isArray", typingUserIds: [] };
const size = fn(2);
let result = size.fileFinishedImporting("modules/home_drawer/native/useHomeDrawerGuildTyping.tsx");

export const useHomeDrawerGuildTyping = function useHomeDrawerGuildTyping(id) {
  _require = id;
  const isHomeDrawerChannelMuted = require("isHomeDrawerChannelMuted").useIsHomeDrawerChannelMuted();
  obj = require("isHomeDrawerChannelMuted");
  isHomeDrawerChannelInChannelList = require("isHomeDrawerChannelInChannelList").useIsHomeDrawerChannelInChannelList();
  const obj2 = require("isHomeDrawerChannelInChannelList");
  const items = [TypingStore, ChannelStore, JoinedThreadsStore];
  const items1 = [id, isHomeDrawerChannelMuted, isHomeDrawerChannelInChannelList];
  return require("initialize").useStateFromStores(items, () => {
    const typingUsersByGuild = TypingStore.getTypingUsersByGuild(closure_0);
    obj = SnowflakeUtilsDefault;
    const keys = obj.keys(typingUsersByGuild);
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
    if (null != found) {
      obj = { typingChannelId: found, typingChannelName: null, typingUserIds: null };
      const channel = ChannelStore.getChannel(found);
      let name;
      if (channel != null) {
        name = channel.name;
      }
      obj.typingChannelName = name;
      const _Object = Object;
      obj.typingUserIds = Object.keys(typingUsersByGuild[found]);
    }
    return obj;
  }, items1, areHomeDrawerGuildTypingStatesEqual);
};