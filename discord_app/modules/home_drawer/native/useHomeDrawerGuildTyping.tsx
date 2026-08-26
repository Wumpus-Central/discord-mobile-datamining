// discord_app/modules/home_drawer/native/useHomeDrawerGuildTyping.tsx
import shallowEqual from "../../../../discord_common/js/packages/shallow-equal/shallowEqual.tsx";
import closure_3 from "../../threads/JoinedThreadsStore.tsx";
import { isThread } from "../../../records/ChannelRecord.tsx";
import closure_5 from "../../../stores/ChannelStore.tsx";
import closure_6 from "../../../stores/TypingStore.tsx";

require = arg1;
function areHomeDrawerGuildTypingStatesEqual(typingChannelId, typingChannelId2) {
  let result = typingChannelId.typingChannelId === typingChannelId2.typingChannelId && typingChannelId.typingChannelName === typingChannelId2.typingChannelName;
  if (result) {
    result = shallowEqual.areArraysShallowEqual(typingChannelId.typingUserIds, typingChannelId2.typingUserIds);
    const obj = shallowEqual;
  }
  return result;
}
let closure_7 = { typingChannelId: "Array", typingChannelName: "ct", typingUserIds: [] };
let result = require("set").fileFinishedImporting("modules/home_drawer/native/useHomeDrawerGuildTyping.tsx");

export const useHomeDrawerGuildTyping = function useHomeDrawerGuildTyping(id) {
  const _require = id;
  const isHomeDrawerChannelMuted = _require(isHomeDrawerChannelInChannelList[5]).useIsHomeDrawerChannelMuted();
  let obj = _require(isHomeDrawerChannelInChannelList[5]);
  isHomeDrawerChannelInChannelList = _require(isHomeDrawerChannelInChannelList[6]).useIsHomeDrawerChannelInChannelList();
  const obj2 = _require(isHomeDrawerChannelInChannelList[6]);
  const items = [closure_6, closure_5, closure_3];
  const items1 = [id, isHomeDrawerChannelMuted, isHomeDrawerChannelInChannelList];
  return _require(isHomeDrawerChannelInChannelList[7]).useStateFromStores(items, () => {
    const typingUsersByGuild = closure_1_6.getTypingUsersByGuild(closure_0);
    let obj = isHomeDrawerChannelMuted(isHomeDrawerChannelInChannelList[8]);
    const keys = obj.keys(typingUsersByGuild);
    const found = keys.find((id) => {
      const basicChannel = closure_1_5.getBasicChannel(id);
      let tmp2 = null != basicChannel;
      if (tmp2) {
        tmp2 = !callback(basicChannel);
      }
      if (tmp2) {
        let tmp5 = closure_1_4(basicChannel.type);
        if (tmp5) {
          tmp5 = !closure_1_3.hasJoined(id);
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
      obj = closure_1_7;
    } else {
      obj = { typingChannelId: null, typingChannelName: null, typingUserIds: null };
      obj[0] = found;
      const channel = closure_1_5.getChannel(found);
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