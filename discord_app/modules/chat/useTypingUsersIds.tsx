// discord_app/modules/chat/useTypingUsersIds.tsx
import RelationshipStore from "../../stores/RelationshipStore.tsx";
import TypingStore from "../../stores/TypingStore.tsx";
import UserStore from "../../stores/UserStore.tsx";

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/chat/useTypingUsersIds.tsx");

export const useTypingUserIds = function useTypingUserIds(id, arg1) {
  _require = id;
  let MAX_SAFE_INTEGER = arg1;
  if (arg1 === undefined) {
    const _Number = Number;
    MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER;
  }
  let items = [UserStore, TypingStore, RelationshipStore];
  const items1 = [id, MAX_SAFE_INTEGER];
  return require("initialize").useStateFromStoresArray(
    items,
    () => {
      const currentUser = UserStore.getCurrentUser();
      if (currentUser != null) {
        id = currentUser.id;
      }
      const typingUsers = TypingStore.getTypingUsers(closure_0);
      const items = [];
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
    },
    items1,
  );
};
