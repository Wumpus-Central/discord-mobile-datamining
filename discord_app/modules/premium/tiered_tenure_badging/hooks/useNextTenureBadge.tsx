// === Module 13441: useNextTenureBadge ===

// Module 13441 (useNextTenureBadge)
import useTenureBadging from "useTenureBadging" /* 11184 */;
import PremiumConstants from "PremiumConstants" /* 1373 */;
import size from "module_2" /* 2 */;

({ TIERED_TENURE_BADGE_ORDER: c2, TENURE_BADGES: c3 } = PremiumConstants);
const result = size.fileFinishedImporting("modules/premium/tiered_tenure_badging/hooks/useNextTenureBadge.tsx");

export const useNextTenureBadge = function useNextTenureBadge() {
  const tieredTenureBadgeData = useTenureBadging.useTieredTenureBadgeData();
  if (null == tieredTenureBadgeData) {
    return null;
  } else if (tieredTenureBadgeData.status === useTenureBadging.TieredTenureBadgeStatus.UPCOMING) {
    return tieredTenureBadgeData;
  } else {
    const index = React2.indexOf(tieredTenureBadgeData.id);
    let tmp7 = null;
    if (null != React2[index + 1]) {
      tmp7 = null;
      if (-1 !== index) {
        tmp7 = React3[tmp6];
      }
    }
    return tmp7;
  }
};