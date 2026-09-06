// === Module 11979: useTypingText ===

// Module 11979 (useTypingText)
import NicknameUtilsDefault from "NicknameUtils" /* 4712 */;
import _slicedToArray from "module_32" /* 32 */;
import UserStore from "UserStore" /* 1371 */;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/chat/useTypingText.tsx");

export default function useTypingText(channelId) {
  channelId = channelId.channelId;
  const guildId = channelId.guildId;
  const typingUserIds = channelId.typingUserIds;
  let lJ9sZX = channelId;
  let obj = typingUserIds;
  let items = [UserStore];
  const items1 = [channelId, guildId, typingUserIds];
  const obj2 = channelId(typingUserIds[2]);
  [tmp2, tmp3, tmp4] = _slicedToArray(channelId(typingUserIds[2]).useStateFromStoresArray(items, () => {
    const items = [];
    while (tmp2 !== undefined) {
      let user = UserStore.getUser(tmp3);
      if (null != user) {
        let obj = NicknameUtilsDefault;
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
    obj = { a: tmp2 };
    let formatResult = intl4.format(lJ9sZX, obj);
  } else if (null == tmp4) {
    const intl3 = lJ9sZX(obj[4]).intl;
    obj = { a: tmp2, b: tmp3 };
    formatResult = intl3.format(lJ9sZX(obj[4]).t.rB0CUa, obj);
  } else if (null == tmp5) {
    const intl2 = lJ9sZX(obj[4]).intl;
    obj = { a: tmp2, b: tmp3, c: tmp4 };
    formatResult = intl2.format(lJ9sZX(obj[4]).t.StKThj, obj);
  } else {
    const intl = lJ9sZX(obj[4]).intl;
    formatResult = intl.string(lJ9sZX(obj[4]).t.uVDhqZ);
  }
};