// === Module 16105: useFavoritesGuildAutoAddedThreadsAction ===

// Module 16105 (useFavoritesGuildAutoAddedThreadsAction)
import FavoritesActionCreators from "FavoritesActionCreators" /* 10048 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1377 */;
import FavoriteStore from "FavoriteStore" /* 2054 */;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/favorites/hooks/useFavoritesGuildAutoAddedThreadsAction.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = hasAccess(576).c(13);
  let obj = hasAccess(576);
  hasAccess = hasAccess(10049).useFavoritesAccess("useFavoritesGuildAutoAddedThreadsAction").hasAccess;
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
  const obj2 = hasAccess(10049);
  if (hasAccess) {
    hasAccess = tmpResult.useStateFromStores(tmp4, tmp5);
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [FavoriteStore];
    class A {
      constructor() {
        return closure_1_5.autoAddJoinedThreads;
      }
    }
    cResult[2] = items1;
    cResult[3] = A;
    let tmp8 = A;
    let tmp7 = items1;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  tmpResult = hasAccess(504);
  const stateFromStores = hasAccess(504).useStateFromStores(tmp7, tmp8);
  if (cResult[4] === hasAccess) {
    if (cResult[5] === stateFromStores) {
      let tmp11 = cResult[6];
    }
    const _Symbol = Symbol;
    class A {
      constructor() {
        return closure_1_5.autoAddJoinedThreads;
      }
    }
    if (cResult[9] === hasAccess) {
      if (cResult[10] === stateFromStores) {
        if (cResult[11] === tmp11) {
          let tmp15 = cResult[12];
        }
        return tmp15;
      }
    }
    const obj3 = { isAvailable: hasAccess, isEnabled: stateFromStores, label: tmp13, subLabel: tmp14, toggle: tmp11 };
    cResult[9] = hasAccess;
    cResult[10] = stateFromStores;
    cResult[11] = tmp11;
    cResult[12] = obj3;
    tmp15 = obj3;
  }
  const fn2 = function f() {
    if (hasAccess) {
      const result = FavoritesActionCreators.setFavoritesAutoAddJoinedThreads(!stateFromStores);
    }
  };
  cResult[4] = hasAccess;
  cResult[5] = stateFromStores;
  cResult[6] = fn2;
  tmp11 = fn2;
  const tmpResult2 = hasAccess(504);
}) : (() => {
  hasAccess = hasAccess(10049).useFavoritesAccess("useFavoritesGuildAutoAddedThreadsAction").hasAccess;
  let obj = hasAccess(10049);
  const items = [UserStore];
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
  obj2 = hasAccess(504);
  const items1 = [FavoriteStore];
  const stateFromStores = hasAccess(504).useStateFromStores(items1, () => autoAddJoinedThreads.autoAddJoinedThreads);
  const items2 = [hasAccess, stateFromStores];
  const obj3 = { isAvailable: hasAccess, isEnabled: stateFromStores, label: null, subLabel: null, toggle: null };
  const callback = noop.useCallback(() => {
    if (hasAccess) {
      const result = FavoritesActionCreators.setFavoritesAutoAddJoinedThreads(!stateFromStores);
    }
  }, items2);
  const intl = tmp(1126).intl;
  obj3.label = intl.string(stateFromStores(3395).DIyQIF);
  const intl2 = tmp(1126).intl;
  obj3.subLabel = intl2.string(stateFromStores(3395).g2vHYJ);
  obj3.toggle = callback;
  return obj3;
});