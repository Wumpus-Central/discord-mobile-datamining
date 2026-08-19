// === Module 12298: useUserProfileGameFriendApplicationIds ===

// Module 12298 (useUserProfileGameFriendApplicationIds)
import noop from "noop" /* 19 */;
import markAllUserIdListsStale from "markAllUserIdListsStale" /* 4030 */;
import mergeGuildAvatar from "mergeGuildAvatar" /* 1922 */;

const require = fn;
let closure_5 = [];
const result = require("obj132").fileFinishedImporting("modules/game_relationships/hooks/useUserProfileGameFriendApplicationIds.tsx");

export const useUserProfileGameFriendApplicationIds = function useUserProfileGameFriendApplicationIds(userId) {
  userId = userId.userId;
  let stateFromStores;
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
  const gameFriendsForUser = userId(stateFromStores[4]).useGameFriendsForUser(userId);
  const items1 = [gameFriendsForUser, stateFromStores];
  return gameFriendsForUser.useMemo(() => {
    if (stateFromStores) {
      let mapped = closure_1_5;
    } else {
      mapped = gameFriendsForUser.map((item, index) => item.applicationId);
    }
    return mapped;
  }, items1);
};