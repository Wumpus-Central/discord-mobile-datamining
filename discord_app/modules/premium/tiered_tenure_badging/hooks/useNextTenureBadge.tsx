// === Module 13698: useNextTenureBadge ===

// Module 13698 (useNextTenureBadge)
import useTenureBadging from "useTenureBadging" /* 10563 */;
import PremiumConstants from "PremiumConstants" /* 1392 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

({ TIERED_TENURE_BADGE_ORDER: c2, TENURE_BADGES: c3 } = PremiumConstants);
const result = size.fileFinishedImporting("modules/premium/tiered_tenure_badging/hooks/useNextTenureBadge.tsx");

export const useNextTenureBadge = ReactCompilerGating.isReactCompilerEnabled() ? (function useNextTenureBadge() {
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
        tmp7 = dependencyMap[tmp6];
      }
    }
    return tmp7;
  }
}) : (function useNextTenureBadge() {
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
        tmp7 = dependencyMap[tmp6];
      }
    }
    return tmp7;
  }
});