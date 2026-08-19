// discord_app/modules/premium/tiered_tenure_badging/hooks/useTenureBadgeRequirementString.tsx
import obj132 from "../../../../../_runtime/00002_obj132.js";
import getSystemLocale from "../../../../intl/index.native.tsx";
import GuildFeatures from "../../PremiumConstants.tsx";
import getTieredTenureBadgeData from "../../../user_profile/TieredTenureBadgeUtils.tsx";
import usePremiumSince from "useTenureBadging.tsx";

const TieredTenureBadge = GuildFeatures.TieredTenureBadge;
const result = obj132.fileFinishedImporting("modules/premium/tiered_tenure_badging/hooks/useTenureBadgeRequirementString.tsx");

export const useTenureBadgeRequirementString = function useTenureBadgeRequirementString() {
  let obj = usePremiumSince;
  const tieredTenureBadge = obj.useTieredTenureBadge();
  if (null == tieredTenureBadge) {
    return null;
  } else {
    const tieredTenureBadgeData = getTieredTenureBadgeData.getTieredTenureBadgeData(tieredTenureBadge);
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
          const intl = getSystemLocale.intl;
          obj = { years: null };
          obj[0] = tenureReqNumMonths / 12;
          formatToPlainStringResult = intl.formatToPlainString(getSystemLocale.t.qOdyDe, obj);
        }
        return formatToPlainStringResult;
      }
    }
    const intl2 = getSystemLocale.intl;
    obj = { months: null };
    obj[0] = tenureReqNumMonths;
    formatToPlainStringResult = intl2.formatToPlainString(getSystemLocale.t.erUSmA, obj);
    const tmpResult = getTieredTenureBadgeData;
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