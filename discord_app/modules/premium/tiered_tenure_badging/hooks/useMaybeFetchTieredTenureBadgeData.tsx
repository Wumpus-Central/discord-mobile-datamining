// === Module 13460: useMaybeFetchTieredTenureBadgeData ===

// Module 13460 (useMaybeFetchTieredTenureBadgeData)
import useMountLayoutEffectDefault from "useMountLayoutEffect" /* 4992 */;
import closure_3 from "mergeGuildAvatar" /* 1371 */;
import { PremiumTypes } from "GuildFeatures" /* 1373 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/premium/tiered_tenure_badging/hooks/useMaybeFetchTieredTenureBadgeData.tsx");

export const useMaybeFetchTieredTenureBadgeData = function useMaybeFetchTieredTenureBadgeData() {
  const items = [closure_3];
  _require = _require(504).useStateFromStores(items, () => currentUser.getCurrentUser());
  const obj = _require(504);
  importDefault = _require(11156).useIsPremiumSubscriber(PremiumTypes.TIER_2);
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