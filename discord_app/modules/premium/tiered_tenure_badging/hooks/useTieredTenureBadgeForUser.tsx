// === Module 11409: useTieredTenureBadgeForUser ===

// Module 11409 (useTieredTenureBadgeForUser)
import TieredTenureBadgeUtils from "TieredTenureBadgeUtils" /* 7774 */;
import UserProfileStore from "UserProfileStore" /* 7765 */;
import UserStore from "UserStore" /* 1384 */;

const require = globalThis.__r;

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/premium/tiered_tenure_badging/hooks/useTieredTenureBadgeForUser.tsx");

export function useTieredTenureBadgeForUser(id) {
  _require = id;
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
              tieredTenureBadge = tieredTenureBadge(dependencyMap[3]).getTieredTenureBadge(id.id);
            });
          }
        }
        if (null != tieredTenureBadge) {
          return tieredTenureBadge;
        } else {
          const currentUser = UserStore.getCurrentUser();
          id = undefined;
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
}