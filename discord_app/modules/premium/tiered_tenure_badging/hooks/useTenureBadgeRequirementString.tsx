// discord_app/modules/premium/tiered_tenure_badging/hooks/useTenureBadgeRequirementString.tsx
import { TieredTenureBadge } from "GuildFeatures";
import { getSystemLocale } from "../../../../intl/index.native.tsx";
import { usePremiumSince } from "useTenureBadging.tsx";

const result = require("getTieredTenureBadgeData").fileFinishedImporting("modules/premium/tiered_tenure_badging/hooks/useTenureBadgeRequirementString.tsx");

export const useTenureBadgeRequirementString = function useTenureBadgeRequirementString() {
  let id;
  let tenureReqNumMonths;
  let obj = usePremiumSince;
  const tieredTenureBadge = obj.useTieredTenureBadge();
  if (null == tieredTenureBadge) {
    return null;
  } else {
    const tieredTenureBadgeData = tmp(5381).getTieredTenureBadgeData(tieredTenureBadge);
    ({ id, tenureReqNumMonths } = tieredTenureBadgeData);
    if (TieredTenureBadge.PREMIUM_TENURE_1_MONTH !== id) {
      if (tmp6.PREMIUM_TENURE_3_MONTH !== id) {
        if (tmp6.PREMIUM_TENURE_6_MONTH !== id) {
          if (tmp6.PREMIUM_TENURE_12_MONTH !== id) {
            if (tmp6.PREMIUM_TENURE_24_MONTH !== id) {
              if (tmp6.PREMIUM_TENURE_36_MONTH !== id) {
                if (tmp6.PREMIUM_TENURE_60_MONTH !== id) {
                  let formatToPlainStringResult = null;
                }
              }
            }
          }
          const intl = tmp(1236).intl;
          obj = { years: null };
          obj[0] = tenureReqNumMonths / 12;
          formatToPlainStringResult = intl.formatToPlainString(tmp(1236).t.qOdyDe, obj);
        }
        return formatToPlainStringResult;
      }
    }
    const intl2 = tmp(1236).intl;
    obj = { months: null };
    obj[0] = tenureReqNumMonths;
    formatToPlainStringResult = intl2.formatToPlainString(tmp(1236).t.erUSmA, obj);
    const tmpResult = tmp(5381);
  }
};
export const getTenureBadgeRequirementString = function getTenureBadgeRequirementString(id, tenureReqNumMonths) {
  if (TieredTenureBadge.PREMIUM_TENURE_1_MONTH !== id) {
    if (tmp.PREMIUM_TENURE_3_MONTH !== id) {
      if (tmp.PREMIUM_TENURE_6_MONTH !== id) {
        if (tmp.PREMIUM_TENURE_12_MONTH !== id) {
          if (tmp.PREMIUM_TENURE_24_MONTH !== id) {
            if (tmp.PREMIUM_TENURE_36_MONTH !== id) {
              if (tmp.PREMIUM_TENURE_60_MONTH !== id) {
                if (tmp.PREMIUM_TENURE_72_MONTH !== id) {
                  return null;
                }
              }
            }
          }
        }
        const intl = getSystemLocale.intl;
        let obj = { years: null };
        obj[0] = tenureReqNumMonths / 12;
        return intl.formatToPlainString(getSystemLocale.t.qOdyDe, obj);
      }
    }
  }
  const intl2 = getSystemLocale.intl;
  obj = { months: tenureReqNumMonths };
  return intl2.formatToPlainString(getSystemLocale.t.erUSmA, obj);
};