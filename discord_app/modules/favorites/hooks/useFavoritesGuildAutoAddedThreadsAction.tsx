// discord_app/modules/favorites/hooks/useFavoritesGuildAutoAddedThreadsAction.tsx
import FavoritesActionCreators from "../FavoritesActionCreators.tsx";
import react from "../../../../_runtime/00019_react.js";
import UserStore from "../../../stores/UserStore.tsx";
import FavoriteStore from "../FavoriteStore.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let currentUser;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let autoAddJoinedThreads;
      let hasAccess;
      let tmp4;
      let tmp5;
      let tmp7;
      let tmp8;
      let obj = hasAccess(576);
      const cResult = obj.c(13);
      const obj2 = hasAccess(10049);
      hasAccess = obj2.useFavoritesAccess("useFavoritesGuildAutoAddedThreadsAction").hasAccess;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UserStore];
        const fn = function n() {
          currentUser = currentUser.getCurrentUser();
          let flag;
          if (currentUser != null) {
            flag = currentUser.isStaff();
          }
          if (flag == null) {
            flag = false;
          }
          return flag;
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      const tmpResult = hasAccess(504);
      if (hasAccess) {
        hasAccess = tmpResult.useStateFromStores(tmp4, tmp5);
      }
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [FavoriteStore];
        class A {
          constructor() {
            return autoAddJoinedThreads.autoAddJoinedThreads;
          }
        }
        cResult[2] = items1;
        cResult[3] = A;
        tmp8 = A;
        tmp7 = items1;
      } else {
        tmp7 = cResult[2];
        tmp8 = cResult[3];
      }
      const tmpResult2 = hasAccess(504);
      const stateFromStores = tmpResult2.useStateFromStores(tmp7, tmp8);
      if (cResult[4] === hasAccess) {
        let tmp11;
        if (cResult[5] === stateFromStores) {
          tmp11 = cResult[6];
        }
        const _Symbol = Symbol;
        class A {
          constructor() {
            return autoAddJoinedThreads.autoAddJoinedThreads;
          }
        }
        if (cResult[9] === hasAccess) {
          if (cResult[10] === stateFromStores) {
            let tmp15;
            if (cResult[11] === tmp11) {
              tmp15 = cResult[12];
            }
            return tmp15;
          }
        }
        const obj3 = {
          isAvailable: hasAccess,
          isEnabled: stateFromStores,
          label: tmp13,
          subLabel: tmp14,
          toggle: tmp11,
        };
        cResult[9] = hasAccess;
        cResult[10] = stateFromStores;
        cResult[11] = tmp11;
        cResult[12] = obj3;
        tmp15 = obj3;
      }
      const fn2 = function f() {
        if (hasAccess) {
          const obj = FavoritesActionCreators;
          const result = obj.setFavoritesAutoAddJoinedThreads(!stateFromStores);
        }
      };
      cResult[4] = hasAccess;
      cResult[5] = stateFromStores;
      cResult[6] = fn2;
      tmp11 = fn2;
    }
  : () => {
      let autoAddJoinedThreads;
      let callback;
      let hasAccess;
      let intl;
      let intl2;
      let obj = hasAccess(10049);
      hasAccess = obj.useFavoritesAccess("useFavoritesGuildAutoAddedThreadsAction").hasAccess;
      const items = [UserStore];
      const obj2 = hasAccess(504);
      if (hasAccess) {
        hasAccess = obj2.useStateFromStores(items, () => {
          currentUser = currentUser.getCurrentUser();
          let flag;
          if (currentUser != null) {
            flag = currentUser.isStaff();
          }
          if (flag == null) {
            flag = false;
          }
          return flag;
        });
      }
      const items1 = [FavoriteStore];
      const tmpResult = hasAccess(504);
      const stateFromStores = tmpResult.useStateFromStores(items1, () => autoAddJoinedThreads.autoAddJoinedThreads);
      const items2 = [hasAccess, stateFromStores];
      const obj3 = {
        isAvailable: hasAccess,
        isEnabled: stateFromStores,
        label: intl.string(stateFromStores(3395).DIyQIF),
        subLabel: intl2.string(stateFromStores(3395).g2vHYJ),
        toggle: callback,
      };
      callback = react.useCallback(() => {
        if (hasAccess) {
          const obj = FavoritesActionCreators;
          const result = obj.setFavoritesAutoAddJoinedThreads(!stateFromStores);
        }
      }, items2);
      intl = tmp(1126).intl;
      intl2 = tmp(1126).intl;
      return obj3;
    };
let result = size.fileFinishedImporting("modules/favorites/hooks/useFavoritesGuildAutoAddedThreadsAction.tsx");

export default tmp2;
