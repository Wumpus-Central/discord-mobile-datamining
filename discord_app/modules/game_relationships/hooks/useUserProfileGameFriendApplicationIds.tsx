// === Module 12721: useUserProfileGameFriendApplicationIds ===

// Module 12721 (useUserProfileGameFriendApplicationIds)
import closure_2 from "noop" /* 19 */;
import closure_3 from "markAllUserIdListsStale" /* 4130 */;
import closure_4 from "mergeGuildAvatar" /* 1921 */;

const require = arg1;
let closure_5 = [];
const result = require("set").fileFinishedImporting("modules/game_relationships/hooks/useUserProfileGameFriendApplicationIds.tsx");

export const useUserProfileGameFriendApplicationIds = function useUserProfileGameFriendApplicationIds(userId) {
  userId = userId.userId;
  let stateFromStores;
  let gameFriendsForUser;
  const items = [closure_3, closure_4];
  stateFromStores = userId(stateFromStores[3]).useStateFromStores(items, () => {
    let isFriendResult = closure_1_3.isFriend(userId);
    if (!isFriendResult) {
      const user = closure_1_4.getUser(userId);
      let isProvisional;
      if (user != null) {
        isProvisional = user.isProvisional;
      }
      isFriendResult = isProvisional;
    }
    return isFriendResult;
  });
  const obj = userId(stateFromStores[3]);
  gameFriendsForUser = userId(stateFromStores[4]).useGameFriendsForUser(userId);
  const items1 = [gameFriendsForUser, stateFromStores];
  return gameFriendsForUser.useMemo(() => {
    if (stateFromStores) {
      let mapped = closure_1_5;
    } else {
      mapped = gameFriendsForUser.map((applicationId) => applicationId.applicationId);
    }
    return mapped;
  }, items1);
};