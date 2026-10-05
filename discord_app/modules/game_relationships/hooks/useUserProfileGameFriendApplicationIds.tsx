// discord_app/modules/game_relationships/hooks/useUserProfileGameFriendApplicationIds.tsx
import react from "../../../../_runtime/00019_react.js";
import RelationshipStore from "../../../stores/RelationshipStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let userId;

let closure_5 = [];
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (userId) => {
      let first;
      let tmp7;
      let tmp9;
      const obj = userId(576);
      const cResult = obj.c(6);
      userId = userId.userId;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [RelationshipStore, UserStore];
        cResult[0] = items;
        first = items;
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
        tmp7 = fn;
      } else {
        tmp7 = cResult[2];
      }
      const tmpResult = userId(504);
      const stateFromStores = tmpResult.useStateFromStores(first, tmp7);
      const tmpResult2 = userId(12884);
      const gameFriendsForUser = tmpResult2.useGameFriendsForUser(userId);
      if (stateFromStores) {
        tmp9 = closure_5;
      } else if (cResult[3] !== gameFriendsForUser) {
        const _Symbol = Symbol;
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          class I {
            constructor(applicationId) {
              return applicationId.applicationId;
            }
          }
          cResult[5] = I;
        } else {
          class I {
            constructor(applicationId) {
              return applicationId.applicationId;
            }
          }
        }
        const mapped = gameFriendsForUser.map(I);
        cResult[3] = gameFriendsForUser;
        cResult[4] = mapped;
        tmp9 = mapped;
      } else {
        class I {
          constructor(applicationId) {
            return applicationId.applicationId;
          }
        }
      }
      return tmp9;
    }
  : (userId) => {
      userId = userId.userId;
      let stateFromStores;
      const items = [RelationshipStore, UserStore];
      const obj = userId(stateFromStores[5]);
      stateFromStores = obj.useStateFromStores(items, () => {
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
      const obj2 = userId(stateFromStores[6]);
      const gameFriendsForUser = obj2.useGameFriendsForUser(userId);
      const items1 = [gameFriendsForUser, stateFromStores];
      return gameFriendsForUser.useMemo(() => {
        let mapped;
        if (stateFromStores) {
          mapped = closure_5;
        } else {
          mapped = gameFriendsForUser.map((applicationId) => applicationId.applicationId);
        }
        return mapped;
      }, items1);
    };
const result = size.fileFinishedImporting(
  "modules/game_relationships/hooks/useUserProfileGameFriendApplicationIds.tsx",
);

export const useUserProfileGameFriendApplicationIds = tmp2;
