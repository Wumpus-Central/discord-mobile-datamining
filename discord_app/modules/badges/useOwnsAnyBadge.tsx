// === Module 17283: useOwnsAnyBadge ===

// Module 17283 (useOwnsAnyBadge)
import useBadgesDefault from "useBadges" /* 8344 */;
import UserStore from "UserStore" /* 1389 */;
import BadgeDirectoryStore from "BadgeDirectoryStore" /* 8292 */;

const require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/badges/useOwnsAnyBadge.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useOwnsAnyBadge() {
  const cResult = stateFromStores(576).c(6);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function o() {
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
  const obj = stateFromStores(576);
  stateFromStores = stateFromStores(504).useStateFromStores(tmp4, tmp5);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [BadgeDirectoryStore];
    cResult[2] = items1;
    let tmp8 = items1;
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
    let tmp11 = items2;
    let tmp10 = fn2;
  } else {
    tmp10 = cResult[4];
    tmp11 = cResult[5];
  }
  const tmpResult = stateFromStores(504);
  let stateFromStores1 = stateFromStores(504).useStateFromStores(tmp8, tmp10, tmp11);
  const tmpResult2 = stateFromStores(504);
  if (stateFromStores1 == null) {
    stateFromStores1 = useBadgesDefault(tmp13).length > 0;
  }
  return stateFromStores1;
}) : (function useOwnsAnyBadge() {
  const items = [UserStore];
  stateFromStores = stateFromStores(504).useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    return id;
  });
  const obj = stateFromStores(504);
  const items1 = [BadgeDirectoryStore];
  const items2 = [stateFromStores];
  let stateFromStores1 = stateFromStores(504).useStateFromStores(items1, () => {
    let someResult = null;
    if (null != stateFromStores) {
      someResult = null;
      if (BadgeDirectoryStore.hasCatalogFor(stateFromStores)) {
        const badges = BadgeDirectoryStore.getBadges(stateFromStores);
        someResult = badges.some((owned) => owned.owned);
      }
    }
    return someResult;
  }, items2);
  const obj2 = stateFromStores(504);
  if (stateFromStores1 == null) {
    stateFromStores1 = useBadgesDefault(tmp3).length > 0;
  }
  return stateFromStores1;
});