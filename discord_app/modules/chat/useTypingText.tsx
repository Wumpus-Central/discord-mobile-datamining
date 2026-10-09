// === Module 11594: useTypingText ===

// Module 11594 (useTypingText)
import NicknameUtilsDefault from "NicknameUtils" /* 5406 */;
import _slicedToArray from "module_32" /* 32 */;
import UserStore from "UserStore" /* 1390 */;

const require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/chat/useTypingText.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useTypingText(channelId) {
  let lJ9sZX = channelId;
  let formatResult2 = typingUserIds;
  const cResult = channelId(typingUserIds[3]).c(16);
  channelId = channelId.channelId;
  const guildId = channelId.guildId;
  typingUserIds = channelId.typingUserIds;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [UserStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === channelId) {
    if (cResult[2] === guildId) {
      if (cResult[3] === typingUserIds) {
        let tmp5 = cResult[4];
        let tmp6 = cResult[5];
      }
      const lJ9sZXResult = lJ9sZX(formatResult2[5]);
      [tmp9, tmp10, tmp11] = lJ9sZX(formatResult2[5]).useStateFromStoresArray(first, tmp5, tmp6);
      if (null == tmp9) {
        return null;
      } else {
        if (null != tmp10) {
          if (null == tmp11) {
            if (cResult[8] === tmp9) {
            }
            const intl3 = lJ9sZX(formatResult2[6]).intl;
            const obj2 = { a: tmp9, b: tmp10 };
            const formatResult = intl3.format(lJ9sZX(formatResult2[6]).t.rB0CUa, obj2);
            cResult[8] = tmp9;
            cResult[9] = tmp10;
            cResult[10] = formatResult;
          } else if (null == tmp12) {
            if (cResult[11] === tmp9) {
              if (cResult[12] === tmp10) {
              }
            }
            const intl2 = lJ9sZX(formatResult2[6]).intl;
            const obj3 = { a: tmp9, b: tmp10, c: tmp11 };
            const formatResult1 = intl2.format(lJ9sZX(formatResult2[6]).t.StKThj, obj3);
            cResult[11] = tmp9;
            cResult[12] = tmp10;
            cResult[13] = tmp11;
            cResult[14] = formatResult1;
          } else {
            const _Symbol = Symbol;
            if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
              const intl = lJ9sZX(formatResult2[6]).intl;
              const stringResult = intl.string(lJ9sZX(formatResult2[6]).t.uVDhqZ);
              cResult[15] = stringResult;
            }
          }
        }
        if (cResult[6] !== tmp9) {
          const intl4 = lJ9sZX(formatResult2[6]).intl;
          lJ9sZX = lJ9sZX(formatResult2[6]).t.lJ9sZX;
          const obj4 = { a: tmp9 };
          formatResult2 = intl4.format(lJ9sZX, obj4);
          cResult[6] = tmp9;
          cResult[7] = formatResult2;
        }
      }
      const tmp8 = _slicedToArray(lJ9sZX(formatResult2[5]).useStateFromStoresArray(first, tmp5, tmp6), 4);
    }
  }
  const fn = function u() {
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
  };
  const items1 = [channelId, guildId, typingUserIds];
  cResult[1] = channelId;
  cResult[2] = guildId;
  cResult[3] = typingUserIds;
  cResult[4] = fn;
  cResult[5] = items1;
  tmp6 = items1;
  tmp5 = fn;
  let obj = channelId(typingUserIds[3]);
}) : (function useTypingText(channelId) {
  channelId = channelId.channelId;
  const guildId = channelId.guildId;
  const typingUserIds = channelId.typingUserIds;
  let lJ9sZX = channelId;
  let obj = typingUserIds;
  let items = [UserStore];
  const items1 = [channelId, guildId, typingUserIds];
  const obj2 = channelId(typingUserIds[5]);
  [tmp2, tmp3, tmp4] = channelId(typingUserIds[5]).useStateFromStoresArray(items, () => {
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
  }, items1);
  if (null == tmp2) {
    return null;
  } else if (null == tmp3) {
    const intl4 = lJ9sZX(obj[6]).intl;
    lJ9sZX = lJ9sZX(obj[6]).t.lJ9sZX;
    obj = { a: tmp2 };
    let formatResult = intl4.format(lJ9sZX, obj);
  } else if (null == tmp4) {
    const intl3 = lJ9sZX(obj[6]).intl;
    const obj3 = { a: tmp2, b: tmp3 };
    formatResult = intl3.format(lJ9sZX(obj[6]).t.rB0CUa, obj3);
  } else if (null == tmp5) {
    const intl2 = lJ9sZX(obj[6]).intl;
    const obj4 = { a: tmp2, b: tmp3, c: tmp4 };
    formatResult = intl2.format(lJ9sZX(obj[6]).t.StKThj, obj4);
  } else {
    const intl = lJ9sZX(obj[6]).intl;
    formatResult = intl.string(lJ9sZX(obj[6]).t.uVDhqZ);
  }
});