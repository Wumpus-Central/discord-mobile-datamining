// === Module 11190: useTypingUserIds ===

// Module 11190 (useTypingUserIds)
import closure_2 from "markAllUserIdListsStale" /* 4033 */;
import closure_3 from "handleTypingStart" /* 11191 */;
import closure_4 from "mergeGuildAvatar" /* 1922 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/chat/useTypingUsersIds.tsx");

export const useTypingUserIds = function useTypingUserIds(id, arg1) {
  const _require = id;
  let MAX_SAFE_INTEGER = arg1;
  if (arg1 === undefined) {
    const _Number = Number;
    MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER;
  }
  let items = [closure_4, closure_3, closure_2];
  const items1 = [id, MAX_SAFE_INTEGER];
  return _require(MAX_SAFE_INTEGER[3]).useStateFromStoresArray(items, () => {
    const currentUser = closure_1_4.getCurrentUser();
    if (currentUser != null) {
      id = currentUser.id;
    }
    const typingUsers = closure_1_3.getTypingUsers(closure_0);
    const items = [];
    for (const key10013 in typingUsers) {
      let tmp7 = key10013;
      let tmp8 = MAX_SAFE_INTEGER;
      if (items.length >= MAX_SAFE_INTEGER) {
        break;
      } else {
        let tmp3 = closure_1_4;
        let user = closure_1_4.getUser(key10013);
        if (null == user) {
          continue;
        } else {
          if (user.id === id) {
            continue;
          } else {
            let tmp5 = closure_1_2;
            if (closure_1_2.isBlockedOrIgnored(user.id)) {
              continue;
            } else {
              let arr = items.push(user.id);
              continue;
            }
            continue;
          }
          continue;
        }
        continue;
      }
    }
    return items;
  }, items1);
};