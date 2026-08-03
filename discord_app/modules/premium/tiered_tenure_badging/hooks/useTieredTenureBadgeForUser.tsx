// === Module 8435: useTieredTenureBadgeForUser ===

// Module 8435 (useTieredTenureBadgeForUser)
import createUserWidgetFromServer from "createUserWidgetFromServer";

const require = arg1;
const result = require("getTieredTenureBadgeData").fileFinishedImporting("modules/premium/tiered_tenure_badging/hooks/useTieredTenureBadgeForUser.tsx");

export const useTieredTenureBadgeForUser = function useTieredTenureBadgeForUser(id) {
  const _require = id;
  const items = [createUserWidgetFromServer];
  return _require(589).useStateFromStores(items, () => {
    let userProfile = null;
    if (null != closure_0) {
      userProfile = outer1_2.getUserProfile(tmp);
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
              const tieredTenureBadge = outer1_0(outer1_1[2]).getTieredTenureBadge(id.id);
            });
          }
        }
        tmp4 = closure_0;
      }
    }
    return tmp4;
  });
};