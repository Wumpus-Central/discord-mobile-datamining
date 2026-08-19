// discord_app/modules/premium/tiered_tenure_badging/hooks/useNextTenureBadge.tsx
import obj132 from "../../../../../_runtime/00002_obj132.js";
import usePremiumSince from "useTenureBadging.tsx";
import GuildFeatures from "../../PremiumConstants.tsx";

({ TIERED_TENURE_BADGE_ORDER: obj1, TENURE_BADGES: c3 } = GuildFeatures);
const result = obj132.fileFinishedImporting("modules/premium/tiered_tenure_badging/hooks/useNextTenureBadge.tsx");

export const useNextTenureBadge = function useNextTenureBadge() {
  const tieredTenureBadgeData = usePremiumSince.useTieredTenureBadgeData();
  if (null == tieredTenureBadgeData) {
    return null;
  } else if (tieredTenureBadgeData.status === usePremiumSince.TieredTenureBadgeStatus.UPCOMING) {
    return tieredTenureBadgeData;
  } else {
    const index = closure_2.indexOf(tieredTenureBadgeData.id);
    let tmp7 = null;
    if (null != closure_2[index + 1]) {
      tmp7 = null;
      if (-1 !== index) {
        tmp7 = table[tmp6];
      }
    }
    return tmp7;
  }
};