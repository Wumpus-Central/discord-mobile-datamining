// discord_app/modules/game_relationships/hooks/useUserProfileGameFriendApplicationIds.tsx
import noop from "../../../../_runtime/metro/00019__.js";
import RelationshipStore from "../../../stores/RelationshipStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";

const require = fn;
let closure_5 = [];
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/game_relationships/hooks/useUserProfileGameFriendApplicationIds.tsx",
);

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
