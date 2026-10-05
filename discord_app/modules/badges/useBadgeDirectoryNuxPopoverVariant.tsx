// discord_app/modules/badges/useBadgeDirectoryNuxPopoverVariant.tsx
import BadgeDirectoryActionCreators from "BadgeDirectoryActionCreators.tsx";
import BadgeDirectoryNuxGraphicUtils from "BadgeDirectoryNuxGraphicUtils.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../_runtime/00019_react.js";
import BadgeDirectoryStore_mod from "BadgeDirectoryStore.tsx";
import ReactCompilerGating_mod from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

let failResult, fetchCatalog, succeedResult, tmp3;

let BadgeDirectoryStore = BadgeDirectoryStore_mod;
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (fetchCatalog) => {
      let currentUserId;
      let enabled;
      let first;
      let first1;
      let ref;
      let stateFromStores;
      let tmp11;
      let tmp13;
      let tmp14;
      let tmp8;
      let tmp9;
      let tmp = fetchCatalog;
      let tmp2 = stateFromStores;
      let obj = fetchCatalog(stateFromStores[4]);
      const cResult = obj.c(30);
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
        let num = 0;
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== tmp5) {
        const fn = function u() {
          const hasCatalogForResult = null != currentUserId && BadgeDirectoryStore.hasCatalogFor(tmp);
          return hasCatalogForResult;
        };
        const items1 = [tmp5];
        cResult[1] = tmp5;
        cResult[2] = fn;
        cResult[3] = items1;
        tmp9 = items1;
        tmp8 = fn;
      } else {
        tmp8 = cResult[2];
        tmp9 = cResult[3];
      }
      const tmpResult = tmp(tmp2[5]);
      stateFromStores = tmpResult.useStateFromStores(first, tmp8, tmp9);
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const items2 = [BadgeDirectoryStore];
        cResult[4] = items2;
        tmp11 = items2;
      } else {
        tmp11 = cResult[4];
      }
      if (cResult[5] !== tmp5) {
        const fn2 = function p() {
          const result = null != currentUserId && BadgeDirectoryStore.hasCatalogFetchErrorFor(tmp);
          return result;
        };
        const items3 = [tmp5];
        cResult[5] = tmp5;
        cResult[6] = fn2;
        cResult[7] = items3;
        tmp14 = items3;
        tmp13 = fn2;
      } else {
        tmp13 = cResult[6];
        tmp14 = cResult[7];
      }
      const tmpResult2 = tmp(tmp2[5]);
      const stateFromStores1 = tmpResult2.useStateFromStores(tmp11, tmp13, tmp14);
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        class F {
          constructor() {
            const tmp = currentUserId(stateFromStores[6]);
            const result = 5 * currentUserId(stateFromStores[7]).Millis.SECOND;
            const tmp2 = new tmp(result, 5 * currentUserId(stateFromStores[7]).Millis.MINUTE);
            return tmp2;
          }
        }
        cResult[8] = F;
      } else {
        class F {
          constructor() {
            const tmp = currentUserId(stateFromStores[6]);
            const result = 5 * currentUserId(stateFromStores[7]).Millis.SECOND;
            const tmp2 = new tmp(result, 5 * currentUserId(stateFromStores[7]).Millis.MINUTE);
            return tmp2;
          }
        }
      }
      first1 = stateFromStores1(first1.useState(F), 1)[0];
      BadgeDirectoryStore = first1.useRef(null);
      if (cResult[9] === tmp4) {
        class F {
          constructor() {
            const tmp = currentUserId(stateFromStores[6]);
            const result = 5 * currentUserId(stateFromStores[7]).Millis.SECOND;
            const tmp2 = new tmp(result, 5 * currentUserId(stateFromStores[7]).Millis.MINUTE);
            return tmp2;
          }
        }
      }
      class I {
        constructor() {
          tmp = currentUserId;
          if (null != currentUserId) {
            tmp10 = fetchCatalog;
            if (tmp10) {
              tmp2 = closure_2;
              if (tmp2) {
                tmp8 = closure_4;
                succeedResult = closure_4.succeed();
              } else {
                tmp3 = closure_3;
                if (tmp3) {
                  obj2 = closure_4;
                  num = 3;
                  if (closure_4.fails >= 3) {
                    return;
                  } else {
                    failResult = obj2.fail(() => {
                      const obj = fetchCatalog(stateFromStores[8]);
                      return obj.fetchBadgeDirectory(currentUserId, { isRetry: true });
                    });
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
    }
  : (fetchCatalog) => {
      let currentUserId;
      let enabled;
      let tmp9;
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
      let obj = flag(stateFromStores[5]);
      const items = [ref];
      const items1 = [tmp];
      stateFromStores = obj.useStateFromStores(
        items,
        () => {
          const hasCatalogForResult = null != currentUserId && BadgeDirectoryStore.hasCatalogFor(tmp);
          return hasCatalogForResult;
        },
        items1,
      );
      let obj2 = flag(stateFromStores[5]);
      const items2 = [ref];
      const items3 = [tmp];
      stateFromStores1 = obj2.useStateFromStores(
        items2,
        () => {
          const result = null != currentUserId && BadgeDirectoryStore.hasCatalogFetchErrorFor(tmp);
          return result;
        },
        items3,
      );
      first = stateFromStores1(
        first.useState(() => {
          const tmp = currentUserId(stateFromStores[6]);
          const result = 5 * currentUserId(stateFromStores[7]).Millis.SECOND;
          const tmp2 = new tmp(result, 5 * currentUserId(stateFromStores[7]).Millis.MINUTE);
          return tmp2;
        }),
        1,
      )[0];
      ref = first.useRef(null);
      const items4 = [tmp, flag, stateFromStores, stateFromStores1, first];
      const effect = first.useEffect(() => {
        if (null != currentUserId) {
          if (flag) {
            if (stateFromStores) {
              first.succeed();
            } else if (stateFromStores1) {
              if (first.fails < 3) {
                first.fail(() => {
                  const obj = flag(stateFromStores[8]);
                  return obj.fetchBadgeDirectory(currentUserId, { isRetry: true });
                });
                return () => first.cancel();
              }
            } else if (ref.current !== currentUserId) {
              ref.current = currentUserId;
              let obj = BadgeDirectoryActionCreators;
              const badgeDirectory = obj.fetchBadgeDirectory(currentUserId);
            }
          }
        }
      }, items4);
      const items5 = [ref];
      const items6 = [tmp];
      const obj3 = flag(stateFromStores[5]);
      stateFromStores2 = obj3.useStateFromStores(
        items5,
        () => {
          let tmp;
          let num = 0;
          if (null != currentUserId) {
            const badges = BadgeDirectoryStore.getBadges(tmp);
            num = badges.filter((badge_id) => {
              const BETA_BADGE_IDS = flag(stateFromStores[9]).BETA_BADGE_IDS;
              const tmp = BETA_BADGE_IDS.has(badge_id.badge_id) && badge_id.owned;
              return tmp;
            }).length;
          }
          return num;
        },
        items6,
      );
      const items7 = [ref];
      const items8 = [tmp];
      const obj4 = flag(stateFromStores[5]);
      stateFromStoresArray = obj4.useStateFromStoresArray(
        items7,
        () => {
          let badgeDirectoryNuxGraphicIconUrls;
          if (null != currentUserId) {
            const obj = BadgeDirectoryNuxGraphicUtils;
            badgeDirectoryNuxGraphicIconUrls = obj.getBadgeDirectoryNuxGraphicIconUrls(
              BadgeDirectoryStore.getBadges(tmp),
            );
          } else {
            badgeDirectoryNuxGraphicIconUrls = [];
          }
          return badgeDirectoryNuxGraphicIconUrls;
        },
        items8,
      );
      const items9 = [tmp, stateFromStores, stateFromStores2, stateFromStoresArray];
      const memo = first.useMemo(() => {
        let tmp = null;
        if (null != currentUserId) {
          tmp = null;
          if (stateFromStores) {
            let obj;
            if (stateFromStores2 > 0) {
              obj = { variant: "progress", newBadgeCount: tmp3, badgeIconUrls: stateFromStoresArray };
              const obj2 = { variant: "progress", newBadgeCount: tmp3, badgeIconUrls: stateFromStoresArray };
            } else {
              obj = { variant: "no-progress" };
            }
            tmp = obj;
          }
        }
        return tmp;
      }, items9);
      if (flag) {
        let num = 3;
        flag = first.fails < 3;
      }
      const obj5 = { variantProps: memo, isPending: tmp9 };
      tmp9 = null != tmp && !stateFromStores;
      if (tmp9) {
        let tmp10 = !stateFromStores1;
        if (stateFromStores1) {
          tmp10 = flag;
        }
        tmp9 = tmp10;
      }
      return obj5;
    };
let closure_6 = tmp2;
ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const result1 = size.fileFinishedImporting("modules/badges/useBadgeDirectoryNuxPopoverVariant.tsx");

export const useBadgeDirectoryNuxPopoverState = tmp2;
export const useBadgeDirectoryNuxPopoverVariant = (arg0) => closure_6(arg0).variantProps;
