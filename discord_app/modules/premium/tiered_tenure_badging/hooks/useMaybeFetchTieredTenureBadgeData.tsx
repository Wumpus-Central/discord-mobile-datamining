// === Module 15490: useMaybeFetchTieredTenureBadgeData ===

// Module 15490 (useMaybeFetchTieredTenureBadgeData)
import useMountEffectDefault from "useMountEffect" /* 5716 */;
import maybeFetchUserProfileDefault from "maybeFetchUserProfile" /* 8882 */;
import UserStore from "UserStore" /* 1385 */;

const require = globalThis.__r;

const require = fn;
const PremiumTypes = fn(1387).PremiumTypes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/tiered_tenure_badging/hooks/useMaybeFetchTieredTenureBadgeData.tsx");

export function useMaybeFetchTieredTenureBadgeData() {
  items = [UserStore];
  _require = require("initialize").useStateFromStores(items, () => currentUser.getCurrentUser());
  const obj = require("initialize");
  importDefault = require("useIsPremiumSubscriber").useIsPremiumSubscriber(PremiumTypes.TIER_2);
  useMountEffectDefault(() => {
    let id;
    if (user != null) {
      id = user.id;
    }
    if (tmp3) {
      maybeFetchUserProfileDefault(user.id);
    }
    tmp3 = null != id && closure_1;
  });
}