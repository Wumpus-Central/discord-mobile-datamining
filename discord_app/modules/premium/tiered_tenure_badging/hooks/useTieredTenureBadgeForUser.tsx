// === Module 10889: useTieredTenureBadgeForUser ===

// Module 10889 (useTieredTenureBadgeForUser)
import TieredTenureBadgeUtils from "TieredTenureBadgeUtils" /* 7132 */;
import UserProfileStore from "UserProfileStore" /* 7124 */;
import UserStore from "UserStore" /* 1377 */;

const require = globalThis.__r;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/premium/tiered_tenure_badging/hooks/useTieredTenureBadgeForUser.tsx");

export const useTieredTenureBadgeForUser = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(3);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserProfileStore, UserStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function s() {
      let userProfile = null;
      if (null != tieredTenureBadge) {
        userProfile = UserProfileStore.getUserProfile(tieredTenureBadge);
      }
      if (userProfile != null) {
        const premiumSince = userProfile.premiumSince;
      }
      if (null != userProfile) {
        if (null != premiumSince) {
          if (userProfile != null) {
            const badges = userProfile.badges;
            if (badges != null) {
              const item = badges.forEach((id) => {
                tieredTenureBadge = tieredTenureBadge(dependencyMap[4]).getTieredTenureBadge(id.id);
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
            if (tieredTenureBadge === id) {
              let result;
              if (currentUser != null) {
                result = currentUser.hasPaidTier2Subscription();
              }
              earnedTenureBadge = null;
              if (result) {
                earnedTenureBadge = TieredTenureBadgeUtils.getEarnedTenureBadge(premiumSince);
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
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const obj = require("c");
  return require("initialize").useStateFromStores(first, tmp7);
}) : ((arg0) => {
  _require = arg0;
  const items = [UserProfileStore, UserStore];
  return require("initialize").useStateFromStores(items, () => {
    let userProfile = null;
    if (null != tieredTenureBadge) {
      userProfile = UserProfileStore.getUserProfile(tieredTenureBadge);
    }
    if (userProfile != null) {
      const premiumSince = userProfile.premiumSince;
    }
    if (null != userProfile) {
      if (null != premiumSince) {
        if (userProfile != null) {
          const badges = userProfile.badges;
          if (badges != null) {
            const item = badges.forEach((id) => {
              tieredTenureBadge = tieredTenureBadge(dependencyMap[4]).getTieredTenureBadge(id.id);
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
          if (tieredTenureBadge === id) {
            let result;
            if (currentUser != null) {
              result = currentUser.hasPaidTier2Subscription();
            }
            earnedTenureBadge = null;
            if (result) {
              earnedTenureBadge = TieredTenureBadgeUtils.getEarnedTenureBadge(premiumSince);
            }
          }
          return earnedTenureBadge;
        }
      }
    }
    return null;
  });
});