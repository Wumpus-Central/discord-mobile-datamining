// === Module 12905: useBadgeDirectoryNuxPopoverVariant ===

// Module 12905 (useBadgeDirectoryNuxPopoverVariant)
import BadgeDirectoryActionCreators from "BadgeDirectoryActionCreators" /* 7879 */;
import BadgeDirectoryNuxGraphicUtils from "BadgeDirectoryNuxGraphicUtils" /* 12906 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import BadgeDirectoryStore from "BadgeDirectoryStore" /* 7874 */;

require = fn;
let ReactCompilerGating = fn(558);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((fetchCatalog) => {
  const cResult = fetchCatalog(stateFromStores[4]).c(30);
  fetchCatalog = fetchCatalog.fetchCatalog;
  let tmp4 = undefined === fetchCatalog;
  ({ currentUserId, enabled } = fetchCatalog);
  if (!tmp4) {
    tmp4 = fetchCatalog;
  }
  fetchCatalog = tmp4;
  let tmp5 = null;
  if (enabled) {
    tmp5 = currentUserId;
  }
  currentUserId = tmp5;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [BadgeDirectoryStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp5) {
    const fn = function u() {
      let hasCatalogForResult = null != currentUserId;
      if (hasCatalogForResult) {
        hasCatalogForResult = BadgeDirectoryStore.hasCatalogFor(tmp);
      }
      return hasCatalogForResult;
    };
    const items1 = [tmp5];
    cResult[1] = tmp5;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp9 = items1;
    let tmp8 = fn;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  let obj = fetchCatalog(stateFromStores[4]);
  stateFromStores = fetchCatalog(stateFromStores[5]).useStateFromStores(first, tmp8, tmp9);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [BadgeDirectoryStore];
    cResult[4] = items2;
    let tmp11 = items2;
  } else {
    tmp11 = cResult[4];
  }
  if (cResult[5] !== tmp5) {
    const fn2 = function p() {
      let result = null != currentUserId;
      if (result) {
        result = BadgeDirectoryStore.hasCatalogFetchErrorFor(tmp);
      }
      return result;
    };
    const items3 = [tmp5];
    cResult[5] = tmp5;
    cResult[6] = fn2;
    cResult[7] = items3;
    let tmp14 = items3;
    let tmp13 = fn2;
  } else {
    tmp13 = cResult[6];
    tmp14 = cResult[7];
  }
  const tmpResult = fetchCatalog(stateFromStores[5]);
  const stateFromStores1 = fetchCatalog(stateFromStores[5]).useStateFromStores(tmp11, tmp13, tmp14);
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    class F {
      constructor() {
        tmp = currentUserId(closure_2[6]);
        result = 5 * currentUserId(closure_2[7]).Millis.SECOND;
        tmp1 = new tmp(result, 5 * currentUserId(closure_2[7]).Millis.MINUTE);
        return tmp1;
      }
    }
    cResult[8] = F;
  } else {
    class F {
      constructor() {
        tmp = currentUserId(closure_2[6]);
        result = 5 * currentUserId(closure_2[7]).Millis.SECOND;
        tmp1 = new tmp(result, 5 * currentUserId(closure_2[7]).Millis.MINUTE);
        return tmp1;
      }
    }
  }
  first1 = stateFromStores1(first1.useState(F), 1)[0];
  BadgeDirectoryStore = first1.useRef(null);
  if (cResult[9] === tmp4) {
    class F {
      constructor() {
        tmp = currentUserId(closure_2[6]);
        result = 5 * currentUserId(closure_2[7]).Millis.SECOND;
        tmp1 = new tmp(result, 5 * currentUserId(closure_2[7]).Millis.MINUTE);
        return tmp1;
      }
    }
  }
  class I {
    constructor() {
      tmp = currentUserId;
      if (null != currentUserId) {
        tmp10 = fetchCatalog;
        if (fetchCatalog) {
          tmp2 = closure_2;
          if (closure_2) {
            tmp8 = closure_4;
            succeedResult = closure_4.succeed();
          } else {
            tmp3 = closure_3;
            if (closure_3) {
              obj2 = closure_4;
              num = 3;
              if (closure_4.fails >= 3) {
                return;
              } else {
                failResult = obj2.fail(() => fetchCatalog(stateFromStores[8]).fetchBadgeDirectory(currentUserId, { isRetry: true }));
                return () => first1.cancel();
              }
            } else if (closure_5.current !== tmp) {
              closure_5.current = tmp;
              tmp4 = closure_0;
              tmp5 = closure_2;
              obj = closure_0(closure_2[8]);
              badgeDirectory = obj.fetchBadgeDirectory(tmp);
            }
          }
        }
      }
      return;
    }
  }
  const items4 = [tmp5, tmp4, stateFromStores, stateFromStores1, first1];
  cResult[9] = tmp4;
  cResult[10] = stateFromStores;
  cResult[11] = stateFromStores1;
  cResult[12] = first1;
  cResult[13] = tmp5;
  cResult[14] = items4;
  cResult[15] = I;
  const tmpResult2 = fetchCatalog(stateFromStores[5]);
}) : ((fetchCatalog) => {
  let flag = fetchCatalog.fetchCatalog;
  ({ currentUserId, enabled } = fetchCatalog);
  if (flag === undefined) {
    flag = true;
  }
  currentUserId = undefined;
  let stateFromStores;
  let stateFromStores1;
  let first;
  let ref;
  let stateFromStores2;
  let stateFromStoresArray;
  let tmp = null;
  if (enabled) {
    tmp = currentUserId;
  }
  currentUserId = tmp;
  const items = [ref];
  const items1 = [tmp];
  stateFromStores = flag(stateFromStores[5]).useStateFromStores(items, () => {
    let hasCatalogForResult = null != currentUserId;
    if (hasCatalogForResult) {
      hasCatalogForResult = BadgeDirectoryStore.hasCatalogFor(tmp);
    }
    return hasCatalogForResult;
  }, items1);
  let obj = flag(stateFromStores[5]);
  const items2 = [ref];
  const items3 = [tmp];
  stateFromStores1 = flag(stateFromStores[5]).useStateFromStores(items2, () => {
    let result = null != currentUserId;
    if (result) {
      result = BadgeDirectoryStore.hasCatalogFetchErrorFor(tmp);
    }
    return result;
  }, items3);
  first = stateFromStores1(first.useState(() => {
    const result = 5 * currentUserId(stateFromStores[7]).Millis.SECOND;
    const tmp = currentUserId(stateFromStores[6]);
    return new currentUserId(stateFromStores[6])(result, 5 * currentUserId(stateFromStores[7]).Millis.MINUTE);
  }), 1)[0];
  ref = first.useRef(null);
  const items4 = [tmp, flag, stateFromStores, stateFromStores1, first];
  const effect = first.useEffect(() => {
    if (null != currentUserId) {
      if (flag) {
        if (stateFromStores) {
          first.succeed();
        } else if (stateFromStores1) {
          if (first.fails < 3) {
            first.fail(() => flag(stateFromStores[8]).fetchBadgeDirectory(currentUserId, { isRetry: true }));
            return () => first.cancel();
          }
        } else if (ref.current !== currentUserId) {
          ref.current = currentUserId;
          const badgeDirectory = BadgeDirectoryActionCreators.fetchBadgeDirectory(currentUserId);
        }
      }
    }
  }, items4);
  let obj2 = flag(stateFromStores[5]);
  const items5 = [ref];
  const items6 = [tmp];
  stateFromStores2 = flag(stateFromStores[5]).useStateFromStores(items5, () => {
    let num = 0;
    if (null != currentUserId) {
      const badges = BadgeDirectoryStore.getBadges(tmp);
      num = badges.filter((badge_id) => {
        const BETA_BADGE_IDS = flag(stateFromStores[9]).BETA_BADGE_IDS;
        return BETA_BADGE_IDS.has(badge_id.badge_id) && badge_id.owned;
      }).length;
    }
    return num;
  }, items6);
  const obj3 = flag(stateFromStores[5]);
  const items7 = [ref];
  const items8 = [tmp];
  stateFromStoresArray = flag(stateFromStores[5]).useStateFromStoresArray(items7, () => {
    if (null != currentUserId) {
      let badgeDirectoryNuxGraphicIconUrls = BadgeDirectoryNuxGraphicUtils.getBadgeDirectoryNuxGraphicIconUrls(BadgeDirectoryStore.getBadges(tmp));
    } else {
      badgeDirectoryNuxGraphicIconUrls = [];
    }
    return badgeDirectoryNuxGraphicIconUrls;
  }, items8);
  const items9 = [tmp, stateFromStores, stateFromStores2, stateFromStoresArray];
  const memo = first.useMemo(() => {
    let tmp = null;
    if (null != currentUserId) {
      tmp = null;
      if (stateFromStores) {
        if (stateFromStores2 > 0) {
          const obj2 = { variant: "progress", newBadgeCount: tmp3, badgeIconUrls: stateFromStoresArray };
        } else {
          const obj = { variant: "no-progress" };
        }
      }
    }
    return tmp;
  }, items9);
  if (flag) {
    flag = first.fails < 3;
  }
  const obj5 = { variantProps: memo, isPending: null };
  let tmp9 = null != tmp && !stateFromStores;
  if (tmp9) {
    let tmp10 = !stateFromStores1;
    if (stateFromStores1) {
      tmp10 = flag;
    }
    tmp9 = tmp10;
  }
  obj5.isPending = tmp9;
  return obj5;
});
let closure_6 = tmp2;
ReactCompilerGating = fn(558);
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const size = fn(2);
const result1 = size.fileFinishedImporting("modules/badges/useBadgeDirectoryNuxPopoverVariant.tsx");

export const useBadgeDirectoryNuxPopoverState = tmp2;
export const useBadgeDirectoryNuxPopoverVariant = (arg0) => closure_6(arg0).variantProps;