// === Module 11344: useTenureBadgeRequirementString ===

// Module 11344 (useTenureBadgeRequirementString)
import util from "util" /* 1115 */;
import PremiumConstants from "PremiumConstants" /* 1374 */;
import TieredTenureBadgeUtils from "TieredTenureBadgeUtils" /* 7748 */;
import useTenureBadging from "useTenureBadging" /* 11345 */;
import size from "module_2" /* 2 */;

const TieredTenureBadge = PremiumConstants.TieredTenureBadge;
const result = size.fileFinishedImporting("modules/premium/tiered_tenure_badging/hooks/useTenureBadgeRequirementString.tsx");

export const useTenureBadgeRequirementString = function useTenureBadgeRequirementString() {
  const tieredTenureBadge = useTenureBadging.useTieredTenureBadge();
  if (null == tieredTenureBadge) {
    return null;
  } else {
    const tieredTenureBadgeData = TieredTenureBadgeUtils.getTieredTenureBadgeData(tieredTenureBadge);
    ({ id, tenureReqNumMonths } = tieredTenureBadgeData);
    if (TieredTenureBadge.PREMIUM_TENURE_1_MONTH !== id) {
      if (TieredTenureBadge.PREMIUM_TENURE_3_MONTH !== id) {
        if (TieredTenureBadge.PREMIUM_TENURE_6_MONTH !== id) {
          if (TieredTenureBadge.PREMIUM_TENURE_12_MONTH !== id) {
            if (TieredTenureBadge.PREMIUM_TENURE_24_MONTH !== id) {
              if (TieredTenureBadge.PREMIUM_TENURE_36_MONTH !== id) {
                if (TieredTenureBadge.PREMIUM_TENURE_60_MONTH !== id) {
                  let formatToPlainStringResult = null;
                }
              }
            }
          }
          const intl = util.intl;
          const obj2 = { years: tenureReqNumMonths / 12 };
          formatToPlainStringResult = intl.formatToPlainString(util.t.qOdyDe, obj2);
        }
        return formatToPlainStringResult;
      }
    }
    const intl2 = util.intl;
    const obj3 = { months: tenureReqNumMonths };
    formatToPlainStringResult = intl2.formatToPlainString(util.t.erUSmA, obj3);
    const tmpResult = TieredTenureBadgeUtils;
  }
};
export const getTenureBadgeRequirementString = function getTenureBadgeRequirementString(id, tenureReqNumMonths) {
  if (TieredTenureBadge.PREMIUM_TENURE_1_MONTH !== id) {
    if (TieredTenureBadge.PREMIUM_TENURE_3_MONTH !== id) {
      if (TieredTenureBadge.PREMIUM_TENURE_6_MONTH !== id) {
        if (TieredTenureBadge.PREMIUM_TENURE_12_MONTH !== id) {
          if (TieredTenureBadge.PREMIUM_TENURE_24_MONTH !== id) {
            if (TieredTenureBadge.PREMIUM_TENURE_36_MONTH !== id) {
              if (TieredTenureBadge.PREMIUM_TENURE_60_MONTH !== id) {
                if (TieredTenureBadge.PREMIUM_TENURE_72_MONTH !== id) {
                  return null;
                }
              }
            }
          }
        }
        const intl = util.intl;
        const obj = { years: tenureReqNumMonths / 12 };
        return intl.formatToPlainString(util.t.qOdyDe, obj);
      }
    }
  }
  const intl2 = util.intl;
  return intl2.formatToPlainString(util.t.erUSmA, { months: tenureReqNumMonths });
};