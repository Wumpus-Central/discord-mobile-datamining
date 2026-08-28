// === Module 13050: useMaybeFetchTieredTenureBadgeData ===

// Module 13050 (useMaybeFetchTieredTenureBadgeData)
import useMountLayoutEffectDefault from "useMountLayoutEffect" /* 4910 */;
import closure_3 from "mergeGuildAvatar" /* 1923 */;
import { PremiumTypes } from "GuildFeatures" /* 1925 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/premium/tiered_tenure_badging/hooks/useMaybeFetchTieredTenureBadgeData.tsx");

export const useMaybeFetchTieredTenureBadgeData = function useMaybeFetchTieredTenureBadgeData() {
  const items = [closure_3];
  _require = _require(589).useStateFromStores(items, () => currentUser.getCurrentUser());
  const obj = _require(589);
  importDefault = _require(8878).useIsPremiumSubscriber(PremiumTypes.TIER_2);
  useMountLayoutEffectDefault(() => {
    let id;
    if (closure_0 != null) {
      id = tmp.id;
    }
    if (tmp3) {
      callback(closure_1_2[5])(tmp.id);
    }
  });
};