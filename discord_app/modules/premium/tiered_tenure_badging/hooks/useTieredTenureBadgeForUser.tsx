// === Module 9657: useTieredTenureBadgeForUser ===

// Module 9657 (useTieredTenureBadgeForUser)
import closure_2 from "createUserWidgetFromServer" /* 7227 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/premium/tiered_tenure_badging/hooks/useTieredTenureBadgeForUser.tsx");

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
            const item = badges.forEach((id) => {
              const tieredTenureBadge = closure_1_0(closure_1_1[2]).getTieredTenureBadge(id.id);
            });
          }
        }
        tmp4 = closure_0;
      }
    }
    return tmp4;
  });
};