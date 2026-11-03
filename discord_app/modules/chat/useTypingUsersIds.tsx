// === Module 13861: useTypingUsersIds ===

// Module 13861 (useTypingUsersIds)
import RelationshipStore from "RelationshipStore" /* 5083 */;
import TypingStore from "TypingStore" /* 13860 */;
import UserStore from "UserStore" /* 1385 */;

const require = globalThis.__r;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/chat/useTypingUsersIds.tsx");

export function useTypingUserIds(id, arg1) {
  _require = id;
  let MAX_SAFE_INTEGER = arg1;
  if (arg1 === undefined) {
    const _Number = Number;
    MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER;
  }
  items = [UserStore, TypingStore, RelationshipStore];
  const items1 = [id, MAX_SAFE_INTEGER];
  return require("initialize").useStateFromStoresArray(items, () => {
    const currentUser = UserStore.getCurrentUser();
    if (currentUser != null) {
      id = currentUser.id;
    }
    const typingUsers = TypingStore.getTypingUsers(closure_0);
    items = [];
    for (const key10013 in typingUsers) {
      if (items.length >= MAX_SAFE_INTEGER) {
        break;
      } else {
        let user = UserStore.getUser(key10013);
        if (null == user) {
          continue;
        } else {
          if (user.id === id) {
            continue;
          } else {
            if (RelationshipStore.isBlockedOrIgnored(user.id)) {
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
}