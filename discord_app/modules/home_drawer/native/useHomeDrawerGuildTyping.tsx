// === Module 16660: useHomeDrawerGuildTyping ===

// Module 16660 (useHomeDrawerGuildTyping)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import discord_common_shallowEqual from "discord_common/shallowEqual" /* 558 */;
import JoinedThreadsStore from "JoinedThreadsStore" /* 4397 */;
import ChannelStore from "ChannelStore" /* 2041 */;
import TypingStore from "TypingStore" /* 12218 */;

const require = globalThis.__r;

require = fn;
function areHomeDrawerGuildTypingStatesEqual(typingChannelId, typingChannelId2) {
  let result = typingChannelId.typingChannelId === typingChannelId2.typingChannelId && typingChannelId.typingChannelName === typingChannelId2.typingChannelName;
  if (result) {
    result = discord_common_shallowEqual.areArraysShallowEqual(typingChannelId.typingUserIds, typingChannelId2.typingUserIds);
  }
  return result;
}
const isThread = fn(2045).isThread;
let closure_7 = { typingChannelId: "Array", typingChannelName: "PX_16", typingUserIds: [] };
const size = fn(2);
let result = size.fileFinishedImporting("modules/home_drawer/native/useHomeDrawerGuildTyping.tsx");

export const useHomeDrawerGuildTyping = function useHomeDrawerGuildTyping(id) {
  _require = id;
  const isHomeDrawerChannelMuted = require("isHomeDrawerChannelMuted").useIsHomeDrawerChannelMuted();
  const obj = require("isHomeDrawerChannelMuted");
  isHomeDrawerChannelInChannelList = require("isHomeDrawerChannelInChannelList").useIsHomeDrawerChannelInChannelList();
  let obj2 = require("isHomeDrawerChannelInChannelList");
  const items = [TypingStore, ChannelStore, JoinedThreadsStore];
  const items1 = [id, isHomeDrawerChannelMuted, isHomeDrawerChannelInChannelList];
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
};