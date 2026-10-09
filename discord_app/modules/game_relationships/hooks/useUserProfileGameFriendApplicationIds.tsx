// discord_app/modules/game_relationships/hooks/useUserProfileGameFriendApplicationIds.tsx
import noop from "../../../../_runtime/metro/00019__.js";
import RelationshipStore from "../../../stores/RelationshipStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";

const require = fn;
let closure_5 = [];
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/game_relationships/hooks/useUserProfileGameFriendApplicationIds.tsx",
);

export const useUserProfileGameFriendApplicationIds = ReactCompilerGating.isReactCompilerEnabled()
  ? function useUserProfileGameFriendApplicationIds(userId) {
      const cResult = userId(576).c(6);
      userId = userId.userId;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [RelationshipStore, UserStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== userId) {
        const fn = function u() {
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
        };
        cResult[1] = userId;
        cResult[2] = fn;
        let tmp7 = fn;
      } else {
        tmp7 = cResult[2];
      }
      const obj = userId(576);
      const stateFromStores = userId(504).useStateFromStores(first, tmp7);
      const tmpResult = userId(504);
      const gameFriendsForUser = userId(13134).useGameFriendsForUser(userId);
      if (stateFromStores) {
        let tmp9 = closure_5;
      } else if (cResult[3] !== gameFriendsForUser) {
        const _Symbol = Symbol;
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          const fn2 = function v(applicationId) {
            return applicationId.applicationId;
          };
          cResult[5] = fn2;
          let tmp10 = fn2;
        } else {
          tmp10 = cResult[5];
        }
        const mapped = gameFriendsForUser.map(tmp10);
        cResult[3] = gameFriendsForUser;
        cResult[4] = mapped;
      } else {
        tmp9 = cResult[4];
      }
      return tmp9;
    }
  : function useUserProfileGameFriendApplicationIds(userId) {
      userId = userId.userId;
      let stateFromStores;
      const items = [RelationshipStore, UserStore];
      stateFromStores = userId(stateFromStores[5]).useStateFromStores(items, () => {
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
      const obj = userId(stateFromStores[5]);
      const gameFriendsForUser = userId(stateFromStores[6]).useGameFriendsForUser(userId);
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
