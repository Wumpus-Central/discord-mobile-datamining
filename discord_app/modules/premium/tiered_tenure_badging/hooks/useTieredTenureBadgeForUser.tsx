// === Module 9497: useTieredTenureBadgeForUser ===

// Module 9497 (useTieredTenureBadgeForUser)
import createUserWidgetFromServer from "createUserWidgetFromServer" /* 5365 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/premium/tiered_tenure_badging/hooks/useTieredTenureBadgeForUser.tsx");

export const useTieredTenureBadgeForUser = function useTieredTenureBadgeForUser(id) {
  const _require = id;
  const items = [closure_2];
  return _require(589).useStateFromStores(items, () => {
    let userProfile = null;
    if (null != closure_0) {
      userProfile = closure_1_2.getUserProfile(tmp);
    }
    if (userProfile != null) {
      const premiumSince = userProfile.premiumSince;
    }
    let tmp4 = null;
    if (null != userProfile) {
      tmp4 = null;
      if (null != premiumSince) {
        if (userProfile != null) {
          const badges = userProfile.badges;
          if (badges != null) {
            const item = badges.forEach((item, index) => {
              const tieredTenureBadge = id(closure_1_1[2]).getTieredTenureBadge(item.id);
            });
          }
        }
        tmp4 = closure_0;
      }
    }
    return tmp4;
  });
};