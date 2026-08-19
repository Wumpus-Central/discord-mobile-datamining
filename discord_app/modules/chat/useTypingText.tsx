// discord_app/modules/chat/useTypingText.tsx
import _slicedToArray from "../../../_runtime/metro/00032__slicedToArray.js";
import mergeGuildAvatar from "../../stores/UserStore.tsx";

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/chat/useTypingText.tsx");

export default function useTypingText(channelId) {
  channelId = channelId.channelId;
  const guildId = channelId.guildId;
  const typingUserIds = channelId.typingUserIds;
  let lJ9sZX = channelId;
  let obj = typingUserIds;
  let items = [closure_4];
  const items1 = [channelId, guildId, typingUserIds];
  const obj2 = channelId(typingUserIds[2]);
  [tmp2, tmp3, tmp4] = callback(channelId(typingUserIds[2]).useStateFromStoresArray(items, () => {
    const items = [];
    while (tmp2 !== undefined) {
      let user = closure_1_4.getUser(tmp3);
      if (null != user) {
        let obj = guildId(typingUserIds[3]);
        let arr = items.push(obj.getName(guildId, channelId, tmp6));
      }
      continue;
    }
    return items;
  }, items1), 4);
  if (null == tmp2) {
    return null;
  } else if (null == tmp3) {
    const intl4 = lJ9sZX(obj[4]).intl;
    lJ9sZX = lJ9sZX(obj[4]).t.lJ9sZX;
    obj = { a: null };
    obj[0] = tmp2;
    let formatResult = intl4.format(lJ9sZX, obj);
  } else if (null == tmp4) {
    const intl3 = lJ9sZX(obj[4]).intl;
    obj = { a: null, b: null };
    obj[0] = tmp2;
    obj[1] = tmp3;
    formatResult = intl3.format(lJ9sZX(obj[4]).t.rB0CUa, obj);
  } else if (null == tmp5) {
    const intl2 = lJ9sZX(obj[4]).intl;
    obj = { a: null, b: null, c: null };
    obj[0] = tmp2;
    obj[1] = tmp3;
    obj[2] = tmp4;
    formatResult = intl2.format(lJ9sZX(obj[4]).t.StKThj, obj);
  } else {
    const intl = lJ9sZX(obj[4]).intl;
    formatResult = intl.string(lJ9sZX(obj[4]).t.uVDhqZ);
  }
};