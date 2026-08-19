// === Module 12892: useMaybeFetchTieredTenureBadgeData ===

// Module 12892 (useMaybeFetchTieredTenureBadgeData)
import useMountLayoutEffectDefault from "useMountLayoutEffect" /* 4761 */;
import mergeGuildAvatar from "mergeGuildAvatar" /* 1922 */;
import { PremiumTypes } from "GuildFeatures" /* 1924 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/premium/tiered_tenure_badging/hooks/useMaybeFetchTieredTenureBadgeData.tsx");

export const useMaybeFetchTieredTenureBadgeData = function useMaybeFetchTieredTenureBadgeData() {
  const items = [closure_3];
  _require = _require(589).useStateFromStores(items, () => currentUser.getCurrentUser());
  const obj = _require(589);
  importDefault = _require(9468).useIsPremiumSubscriber(PremiumTypes.TIER_2);
  useMountLayoutEffectDefault(() => {
    let id;
    if (user != null) {
      id = user.id;
    }
    if (tmp3) {
      callback(dependencyMap[5])(user.id);
    }
    tmp3 = null != id && callback;
  });
};