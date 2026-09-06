// === Module 13066: useUserProfileGameFriendApplicationIds ===

// Module 13066 (useUserProfileGameFriendApplicationIds)
import noop from "module_19" /* 19 */;
import RelationshipStore from "RelationshipStore" /* 4209 */;
import UserStore from "UserStore" /* 1371 */;

const require = fn;
let closure_5 = [];
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_relationships/hooks/useUserProfileGameFriendApplicationIds.tsx");

export const useUserProfileGameFriendApplicationIds = function useUserProfileGameFriendApplicationIds(userId) {
  userId = userId.userId;
  let stateFromStores;
  const items = [RelationshipStore, UserStore];
  stateFromStores = userId(stateFromStores[3]).useStateFromStores(items, () => {
    let isFriendResult = RelationshipStore.isFriend(userId);
    if (!isFriendResult) {
      const user = UserStore.getUser(userId);
      let isProvisional;
      if (user != null) {
        isProvisional = user.isProvisional;
      }
      isFriendResult = isProvisional;
    }
    return isFriendResult;
  });
  const obj = userId(stateFromStores[3]);
  const gameFriendsForUser = userId(stateFromStores[4]).useGameFriendsForUser(userId);
  const items1 = [gameFriendsForUser, stateFromStores];
  return gameFriendsForUser.useMemo(() => {
    if (stateFromStores) {
      let mapped = closure_5;
    } else {
      mapped = gameFriendsForUser.map((applicationId) => applicationId.applicationId);
    }
    return mapped;
  }, items1);
};