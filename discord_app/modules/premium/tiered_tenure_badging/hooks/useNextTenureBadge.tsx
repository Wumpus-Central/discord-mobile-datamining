// discord_app/modules/premium/tiered_tenure_badging/hooks/useNextTenureBadge.tsx
import GuildFeatures from "GuildFeatures";

let c3;
let obj1;
({ TIERED_TENURE_BADGE_ORDER: obj1, TENURE_BADGES: c3 } = GuildFeatures);
const result = require("set").fileFinishedImporting("modules/premium/tiered_tenure_badging/hooks/useNextTenureBadge.tsx");

export const useNextTenureBadge = function useNextTenureBadge() {
  const tieredTenureBadgeData = require("useTenureBadging.tsx") /* usePremiumSince */.useTieredTenureBadgeData();
  if (null == tieredTenureBadgeData) {
    return null;
  } else if (tieredTenureBadgeData.status === tmp(9428).TieredTenureBadgeStatus.UPCOMING) {
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
  const obj = require("useTenureBadging.tsx") /* usePremiumSince */;
  tmp = require;
};