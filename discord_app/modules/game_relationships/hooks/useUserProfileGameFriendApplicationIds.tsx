// discord_app/modules/game_relationships/hooks/useUserProfileGameFriendApplicationIds.tsx
import noop from "../../../../_runtime/00019_noop.js";
import markAllUserIdListsStale from "../../../stores/RelationshipStore.tsx";
import mergeGuildAvatar from "../../../stores/UserStore.tsx";

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