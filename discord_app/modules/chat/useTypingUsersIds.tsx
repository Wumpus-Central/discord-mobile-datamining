import upsertRelationship from "upsertRelationship";
import handleTypingStart from "handleTypingStart";
import mergeGuildAvatar from "mergeGuildAvatar";

const require = arg1;
const result = require("mergeGuildAvatar").fileFinishedImporting("modules/chat/useTypingUsersIds.tsx");

export const useTypingUserIds = function useTypingUserIds(id, arg1) {
  const _require = id;
  let MAX_SAFE_INTEGER = arg1;
  if (arg1 === undefined) {
    const _Number = Number;
    MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER;
  }
  let items = [mergeGuildAvatar, handleTypingStart, upsertRelationship];
  const items1 = [id, MAX_SAFE_INTEGER];
  return _require(MAX_SAFE_INTEGER[3]).useStateFromStoresArray(items, () => {
    const currentUser = outer1_4.getCurrentUser();
    if (currentUser != null) {
      const id = currentUser.id;
    }
    const typingUsers = outer1_3.getTypingUsers(closure_0);
    const items = [];
    for (const key10013 in typingUsers) {
      let tmp7 = key10013;
      let tmp8 = MAX_SAFE_INTEGER;
      if (items.length >= MAX_SAFE_INTEGER) {
        break;
      } else {
        let tmp3 = outer1_4;
        let user = outer1_4.getUser(key10013);
        if (null == user) {
          continue;
        } else {
          if (user.id === id) {
            continue;
          } else {
            let tmp5 = outer1_2;
            if (outer1_2.isBlockedOrIgnored(user.id)) {
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