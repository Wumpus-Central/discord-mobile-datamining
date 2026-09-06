// === Module 11183: useTenureBadgeRequirementString ===

// Module 11183 (useTenureBadgeRequirementString)
import util from "util" /* 1114 */;
import PremiumConstants from "PremiumConstants" /* 1373 */;
import useTenureBadging from "useTenureBadging" /* 11184 */;
import size from "module_2" /* 2 */;

const TieredTenureBadge = PremiumConstants.TieredTenureBadge;
const result = size.fileFinishedImporting("modules/premium/tiered_tenure_badging/hooks/useTenureBadgeRequirementString.tsx");

export const useTenureBadgeRequirementString = function useTenureBadgeRequirementString() {
  let obj = useTenureBadging;
  const tieredTenureBadge = obj.useTieredTenureBadge();
  if (null == tieredTenureBadge) {
    return null;
  } else {
    const tieredTenureBadgeData = tmp(7634).getTieredTenureBadgeData(tieredTenureBadge);
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
          const intl = tmp(1114).intl;
          obj = { years: tenureReqNumMonths / 12 };
          formatToPlainStringResult = intl.formatToPlainString(tmp(1114).t.qOdyDe, obj);
        }
        return formatToPlainStringResult;
      }
    }
    const intl2 = tmp(1114).intl;
    obj = { months: tenureReqNumMonths };
    formatToPlainStringResult = intl2.formatToPlainString(tmp(1114).t.erUSmA, obj);
    const tmpResult = tmp(7634);
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
        const intl = util.intl;
        let obj = { years: tenureReqNumMonths / 12 };
        return intl.formatToPlainString(util.t.qOdyDe, obj);
      }
    }
  }
  const intl2 = util.intl;
  obj = { months: tenureReqNumMonths };
  return intl2.formatToPlainString(util.t.erUSmA, obj);
};