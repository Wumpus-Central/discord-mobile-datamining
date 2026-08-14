// discord_app/modules/home_drawer/native/useHomeDrawerGuildTyping.tsx
import storeThread from "storeThread";
import { isThread } from "createChannelRecord";
import ensureGuildLoaded from "ensureGuildLoaded";
import handleTypingStart from "handleTypingStart";
import { shallowEqual } from "../../../../discord_common/js/packages/shallow-equal/shallowEqual.tsx";

const require = arg1;
function areHomeDrawerGuildTypingStatesEqual(typingChannelId, typingChannelId2) {
  let result = typingChannelId.typingChannelId === typingChannelId2.typingChannelId && typingChannelId.typingChannelName === typingChannelId2.typingChannelName;
  if (result) {
    result = shallowEqual.areArraysShallowEqual(typingChannelId.typingUserIds, typingChannelId2.typingUserIds);
    const obj = shallowEqual;
  }
  return result;
}
let obj = { typingChannelId: "Array", typingChannelName: "isArray", typingUserIds: "a" };
obj[2] = [];
let result = require("ensureGuildLoaded").fileFinishedImporting("modules/home_drawer/native/useHomeDrawerGuildTyping.tsx");

export const useHomeDrawerGuildTyping = function useHomeDrawerGuildTyping(id) {
  const _require = id;
  const isHomeDrawerChannelMuted = _require(isHomeDrawerChannelInChannelList[5]).useIsHomeDrawerChannelMuted();
  let obj = _require(isHomeDrawerChannelInChannelList[5]);
  isHomeDrawerChannelInChannelList = _require(isHomeDrawerChannelInChannelList[6]).useIsHomeDrawerChannelInChannelList();
  const obj2 = _require(isHomeDrawerChannelInChannelList[6]);
  const items = [handleTypingStart, ensureGuildLoaded, storeThread];
  const items1 = [id, isHomeDrawerChannelMuted, isHomeDrawerChannelInChannelList];
  return _require(isHomeDrawerChannelInChannelList[7]).useStateFromStores(items, () => {
    const typingUsersByGuild = outer1_6.getTypingUsersByGuild(closure_0);
    let obj = isHomeDrawerChannelMuted(isHomeDrawerChannelInChannelList[8]);
    const keys = obj.keys(typingUsersByGuild);
    const found = keys.find((id) => {
      const basicChannel = outer1_5.getBasicChannel(id);
      let tmp2 = null != basicChannel;
      if (tmp2) {
        tmp2 = !callback(basicChannel);
      }
      if (tmp2) {
        let tmp5 = outer1_4(basicChannel.type);
        if (tmp5) {
          tmp5 = !outer1_3.hasJoined(id);
        }
        let tmp7 = !tmp5;
        if (!tmp5) {
          tmp7 = callback2(basicChannel);
        }
        tmp2 = tmp7;
      }
      return tmp2;
    });
    if (null == found) {
      obj = outer1_7;
    } else {
      obj = { typingChannelId: null, typingChannelName: null, typingUserIds: null };
      obj[0] = found;
      const channel = outer1_5.getChannel(found);
      let name;
      if (channel != null) {
        name = channel.name;
      }
      obj[1] = name;
      const _Object = Object;
      obj[2] = Object.keys(typingUsersByGuild[found]);
    }
    return obj;
  }, items1, areHomeDrawerGuildTypingStatesEqual);
};