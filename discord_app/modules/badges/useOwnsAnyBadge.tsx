// discord_app/modules/badges/useOwnsAnyBadge.tsx
import useDisplayProfileDefault from "../user_profile/hooks/useDisplayProfile.tsx";
import useBadgesDefault from "../user_profile/hooks/useBadges.tsx";
import UserStore from "../../stores/UserStore.tsx";
import BadgeDirectoryStore from "BadgeDirectoryStore.tsx";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

let currentUser;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let stateFromStores;
      let tmp10;
      let tmp11;
      let tmp4;
      let tmp5;
      let tmp8;
      const obj = stateFromStores(576);
      const cResult = obj.c(6);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UserStore];
        const fn = function s() {
          currentUser = currentUser.getCurrentUser();
          let id;
          if (currentUser != null) {
            id = currentUser.id;
          }
          return id;
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      const tmpResult = stateFromStores(504);
      stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [BadgeDirectoryStore];
        cResult[2] = items1;
        tmp8 = items1;
      } else {
        tmp8 = cResult[2];
      }
      if (cResult[3] !== stateFromStores) {
        const fn2 = function c() {
          let someResult = null;
          if (null != stateFromStores) {
            someResult = null;
            if (BadgeDirectoryStore.hasCatalogFor(stateFromStores)) {
              const badges = BadgeDirectoryStore.getBadges(stateFromStores);
              someResult = badges.some((owned) => owned.owned);
            }
          }
          return someResult;
        };
        const items2 = [stateFromStores];
        cResult[3] = stateFromStores;
        cResult[4] = fn2;
        cResult[5] = items2;
        tmp11 = items2;
        tmp10 = fn2;
      } else {
        tmp10 = cResult[4];
        tmp11 = cResult[5];
      }
      const tmpResult2 = stateFromStores(504);
      let stateFromStores1 = tmpResult2.useStateFromStores(tmp8, tmp10, tmp11);
      const tmp13 = useDisplayProfileDefault(stateFromStores);
      if (stateFromStores1 == null) {
        stateFromStores1 = useBadgesDefault(tmp13).length > 0;
      }
      return stateFromStores1;
    }
  : () => {
      let stateFromStores;
      const items = [UserStore];
      const obj = stateFromStores(504);
      stateFromStores = obj.useStateFromStores(items, () => {
        currentUser = currentUser.getCurrentUser();
        let id;
        if (currentUser != null) {
          id = currentUser.id;
        }
        return id;
      });
      const items1 = [BadgeDirectoryStore];
      const items2 = [stateFromStores];
      const obj2 = stateFromStores(504);
      let stateFromStores1 = obj2.useStateFromStores(
        items1,
        () => {
          let someResult = null;
          if (null != stateFromStores) {
            someResult = null;
            if (BadgeDirectoryStore.hasCatalogFor(stateFromStores)) {
              const badges = BadgeDirectoryStore.getBadges(stateFromStores);
              someResult = badges.some((owned) => owned.owned);
            }
          }
          return someResult;
        },
        items2,
      );
      const tmp3 = useDisplayProfileDefault(stateFromStores);
      if (stateFromStores1 == null) {
        stateFromStores1 = useBadgesDefault(tmp3).length > 0;
      }
      return stateFromStores1;
    };
const result = size.fileFinishedImporting("modules/badges/useOwnsAnyBadge.tsx");

export default tmp2;
