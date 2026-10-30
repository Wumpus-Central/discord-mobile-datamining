// === Module 14880: useBadgeDirectoryNuxPopoverVariant ===

// Module 14880 (useBadgeDirectoryNuxPopoverVariant)
import BadgeDirectoryActionCreators from "BadgeDirectoryActionCreators" /* 8760 */;
import BadgeDirectoryNuxGraphicUtils from "BadgeDirectoryNuxGraphicUtils" /* 14881 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import BadgeDirectoryStore from "BadgeDirectoryStore" /* 8755 */;

require = fn;
function useBadgeDirectoryNuxPopoverState(fetchCatalog) {
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
  stateFromStores = flag(stateFromStores[3]).useStateFromStores(items, () => {
    let hasCatalogForResult = null != currentUserId;
    if (hasCatalogForResult) {
      hasCatalogForResult = BadgeDirectoryStore.hasCatalogFor(tmp);
    }
    return hasCatalogForResult;
  }, items1);
  let obj = flag(stateFromStores[3]);
  const items2 = [ref];
  const items3 = [tmp];
  stateFromStores1 = flag(stateFromStores[3]).useStateFromStores(items2, () => {
    let result = null != currentUserId;
    if (result) {
      result = BadgeDirectoryStore.hasCatalogFetchErrorFor(tmp);
    }
    return result;
  }, items3);
  first = stateFromStores1(first.useState(() => {
    const result = 5 * currentUserId(stateFromStores[5]).Millis.SECOND;
    const tmp = currentUserId(stateFromStores[4]);
    return new currentUserId(stateFromStores[4])(result, 5 * currentUserId(stateFromStores[5]).Millis.MINUTE);
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
            first.fail(() => flag(stateFromStores[6]).fetchBadgeDirectory(currentUserId, { isRetry: true }));
            return () => first.cancel();
          }
        } else if (ref.current !== currentUserId) {
          ref.current = currentUserId;
          const badgeDirectory = BadgeDirectoryActionCreators.fetchBadgeDirectory(currentUserId);
        }
      }
    }
  }, items4);
  let obj2 = flag(stateFromStores[3]);
  const items5 = [ref];
  const items6 = [tmp];
  stateFromStores2 = flag(stateFromStores[3]).useStateFromStores(items5, () => {
    let num = 0;
    if (null != currentUserId) {
      const badges = BadgeDirectoryStore.getBadges(tmp);
      num = badges.filter((badge_id) => {
        const BETA_BADGE_IDS = flag(stateFromStores[7]).BETA_BADGE_IDS;
        return BETA_BADGE_IDS.has(badge_id.badge_id) && badge_id.owned;
      }).length;
    }
    return num;
  }, items6);
  const obj3 = flag(stateFromStores[3]);
  const items7 = [ref];
  const items8 = [tmp];
  stateFromStoresArray = flag(stateFromStores[3]).useStateFromStoresArray(items7, () => {
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
}
const size = fn(2);
let result = size.fileFinishedImporting("modules/badges/useBadgeDirectoryNuxPopoverVariant.tsx");

export { useBadgeDirectoryNuxPopoverState };
export function useBadgeDirectoryNuxPopoverVariant(fetchCatalog) {
  return useBadgeDirectoryNuxPopoverState(fetchCatalog).variantProps;
}