// === Module 17566: useFavoritesGuildAutoAddedThreadsAction ===

// Module 17566 (useFavoritesGuildAutoAddedThreadsAction)
import FavoritesActionCreators from "FavoritesActionCreators" /* 10844 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1392 */;
import FavoriteStore from "FavoriteStore" /* 4826 */;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/favorites/hooks/useFavoritesGuildAutoAddedThreadsAction.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useFavoritesGuildAutoAddedThreadsAction() {
  const cResult = stateFromStores(576).c(13);
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
  let obj = stateFromStores(576);
  stateFromStores = stateFromStores(504).useStateFromStores(tmp4, tmp5);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [FavoriteStore];
    const fn2 = function c() {
      return autoAddJoinedThreads.autoAddJoinedThreads;
    };
    cResult[2] = items1;
    cResult[3] = fn2;
    let tmp9 = fn2;
    let tmp8 = items1;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  const tmpResult = stateFromStores(504);
  const stateFromStores1 = stateFromStores(504).useStateFromStores(tmp8, tmp9);
  if (cResult[4] === stateFromStores) {
    if (cResult[5] === stateFromStores1) {
      let tmp12 = cResult[6];
    }
    const _Symbol = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = tmp(1128).intl;
      const stringResult = intl.string(stateFromStores1(3412).DIyQIF);
      const intl2 = tmp(1128).intl;
      const stringResult1 = intl2.string(stateFromStores1(3412).g2vHYJ);
      cResult[7] = stringResult;
      cResult[8] = stringResult1;
      let tmp14 = stringResult1;
      let tmp13 = stringResult;
    } else {
      tmp13 = cResult[7];
      tmp14 = cResult[8];
    }
    if (cResult[9] === stateFromStores) {
      if (cResult[10] === stateFromStores1) {
        if (cResult[11] === tmp12) {
          let tmp18 = cResult[12];
        }
        return tmp18;
      }
    }
    const obj2 = { isAvailable: stateFromStores, isEnabled: stateFromStores1, label: tmp13, subLabel: tmp14, toggle: tmp12 };
    cResult[9] = stateFromStores;
    cResult[10] = stateFromStores1;
    cResult[11] = tmp12;
    cResult[12] = obj2;
    tmp18 = obj2;
  }
  class A {
    constructor() {
      if (closure_0) {
        tmp = closure_0;
        tmp2 = closure_2;
        obj = closure_0(closure_2[6]);
        tmp3 = closure_1;
        result = obj.setFavoritesAutoAddJoinedThreads(!closure_1);
      }
      return;
    }
  }
  cResult[4] = stateFromStores;
  cResult[5] = stateFromStores1;
  cResult[6] = A;
  tmp12 = A;
  const tmpResult2 = stateFromStores(504);
}) : (function useFavoritesGuildAutoAddedThreadsAction() {
  const items = [UserStore];
  stateFromStores = stateFromStores(504).useStateFromStores(items, () => {
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
  let obj = stateFromStores(504);
  const items1 = [FavoriteStore];
  const stateFromStores1 = stateFromStores(504).useStateFromStores(items1, () => autoAddJoinedThreads.autoAddJoinedThreads);
  const items2 = [stateFromStores, stateFromStores1];
  const obj3 = { isAvailable: stateFromStores, isEnabled: stateFromStores1, label: null, subLabel: null, toggle: null };
  const callback = noop.useCallback(() => {
    if (stateFromStores) {
      const result = FavoritesActionCreators.setFavoritesAutoAddJoinedThreads(!stateFromStores1);
    }
  }, items2);
  const intl = stateFromStores(1128).intl;
  obj3.label = intl.string(stateFromStores1(3412).DIyQIF);
  const intl2 = stateFromStores(1128).intl;
  obj3.subLabel = intl2.string(stateFromStores1(3412).g2vHYJ);
  obj3.toggle = callback;
  return obj3;
});