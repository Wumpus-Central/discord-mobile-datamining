// === Module 10889: useTieredTenureBadgeForUser ===

// Module 10889 (useTieredTenureBadgeForUser)
import TieredTenureBadgeUtils from "TieredTenureBadgeUtils" /* 7132 */;
import UserProfileStore from "UserProfileStore" /* 7124 */;
import UserStore from "UserStore" /* 1377 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let first;
  let tmp7;
  _require = arg0;
  let obj = require("react");
  const cResult = obj.c(3);
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserProfileStore, UserStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function s() {
      let premiumSince;
      let tieredTenureBadge;
      let userProfile = null;
      if (null != closure_0) {
        userProfile = UserProfileStore.getUserProfile(closure_0);
      }
      if (userProfile != null) {
        premiumSince = userProfile.premiumSince;
      }
      if (null != userProfile) {
        if (null != premiumSince) {
          if (userProfile != null) {
            const badges = userProfile.badges;
            if (badges != null) {
              const item = badges.forEach((id) => {
                const obj = closure_2_0(closure_2_1[4]);
                tieredTenureBadge = obj.getTieredTenureBadge(id.id);
              });
            }
          }
          if (null != tieredTenureBadge) {
            return tieredTenureBadge;
          } else {
            const currentUser = UserStore.getCurrentUser();
            let id;
            if (currentUser != null) {
              id = currentUser.id;
            }
            let earnedTenureBadge = null;
            if (closure_0 === id) {
              let result;
              if (currentUser != null) {
                result = currentUser.hasPaidTier2Subscription();
              }
              earnedTenureBadge = null;
              if (result) {
                const obj2 = TieredTenureBadgeUtils;
                earnedTenureBadge = obj2.getEarnedTenureBadge(premiumSince);
              }
            }
            return earnedTenureBadge;
          }
        }
      }
      return null;
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const tmpResult = tmp(504);
  return tmpResult.useStateFromStores(first, tmp7);
}) : ((arg0) => {
  let closure_0;
  _require = arg0;
  let obj = require("get initialized");
  const items = [UserProfileStore, UserStore];
  return obj.useStateFromStores(items, () => {
    let premiumSince;
    let tieredTenureBadge;
    let userProfile = null;
    if (null != closure_0) {
      userProfile = UserProfileStore.getUserProfile(closure_0);
    }
    if (userProfile != null) {
      premiumSince = userProfile.premiumSince;
    }
    if (null != userProfile) {
      if (null != premiumSince) {
        if (userProfile != null) {
          const badges = userProfile.badges;
          if (badges != null) {
            const item = badges.forEach((id) => {
              const obj = closure_2_0(closure_2_1[4]);
              tieredTenureBadge = obj.getTieredTenureBadge(id.id);
            });
          }
        }
        if (null != tieredTenureBadge) {
          return tieredTenureBadge;
        } else {
          const currentUser = UserStore.getCurrentUser();
          let id;
          if (currentUser != null) {
            id = currentUser.id;
          }
          let earnedTenureBadge = null;
          if (closure_0 === id) {
            let result;
            if (currentUser != null) {
              result = currentUser.hasPaidTier2Subscription();
            }
            earnedTenureBadge = null;
            if (result) {
              const obj2 = TieredTenureBadgeUtils;
              earnedTenureBadge = obj2.getEarnedTenureBadge(premiumSince);
            }
          }
          return earnedTenureBadge;
        }
      }
    }
    return null;
  });
});
let result = size.fileFinishedImporting("modules/premium/tiered_tenure_badging/hooks/useTieredTenureBadgeForUser.tsx");

export const useTieredTenureBadgeForUser = tmp2;