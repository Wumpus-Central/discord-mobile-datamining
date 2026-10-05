// discord_app/modules/premium/tiered_tenure_badging/hooks/useTenureBadgeRequirementString.tsx
import react from "../../../../../_runtime/00576_react.js";
import intl3 from "../../../../intl/index.native.tsx";
import PremiumConstants from "../../PremiumConstants.tsx";
import TieredTenureBadgeUtils from "../../../user_profile/TieredTenureBadgeUtils.tsx";
import useTenureBadging from "useTenureBadging.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const TieredTenureBadge = PremiumConstants.TieredTenureBadge;
function getTenureBadgeRequirementString(badge, tenureReqNumMonths) {
  if (TieredTenureBadge.PREMIUM_TENURE_1_MONTH !== badge) {
    if (TieredTenureBadge.PREMIUM_TENURE_3_MONTH !== badge) {
      if (TieredTenureBadge.PREMIUM_TENURE_6_MONTH !== badge) {
        if (TieredTenureBadge.PREMIUM_TENURE_12_MONTH !== badge) {
          if (TieredTenureBadge.PREMIUM_TENURE_24_MONTH !== badge) {
            if (TieredTenureBadge.PREMIUM_TENURE_36_MONTH !== badge) {
              if (TieredTenureBadge.PREMIUM_TENURE_60_MONTH !== badge) {
                if (TieredTenureBadge.PREMIUM_TENURE_72_MONTH !== badge) {
                  return null;
                }
              }
            }
          }
        }
        const intl = intl3.intl;
        const obj = { years: tenureReqNumMonths / 12 };
        return intl.formatToPlainString(intl3.t.qOdyDe, obj);
      }
    }
  }
  const intl2 = intl3.intl;
  const obj2 = { months: tenureReqNumMonths };
  return intl2.formatToPlainString(intl3.t.erUSmA, obj2);
}
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let id;
      let tenureReqNumMonths;
      const obj = react;
      const cResult = obj.c(2);
      const obj2 = useTenureBadging;
      const tieredTenureBadge = obj2.useTieredTenureBadge();
      if (null == tieredTenureBadge) {
        return null;
      } else {
        let tmp5;
        if (cResult[0] !== tieredTenureBadge) {
          const tmpResult = TieredTenureBadgeUtils;
          const tieredTenureBadgeData = tmpResult.getTieredTenureBadgeData(tieredTenureBadge);
          ({ id, tenureReqNumMonths } = tieredTenureBadgeData);
          if (TieredTenureBadge.PREMIUM_TENURE_1_MONTH !== id) {
            if (TieredTenureBadge.PREMIUM_TENURE_3_MONTH !== id) {
              let formatToPlainStringResult;
              if (TieredTenureBadge.PREMIUM_TENURE_6_MONTH !== id) {
                if (TieredTenureBadge.PREMIUM_TENURE_12_MONTH !== id) {
                  if (TieredTenureBadge.PREMIUM_TENURE_24_MONTH !== id) {
                    if (TieredTenureBadge.PREMIUM_TENURE_36_MONTH !== id) {
                      if (TieredTenureBadge.PREMIUM_TENURE_60_MONTH !== id) {
                        formatToPlainStringResult = null;
                      }
                    }
                  }
                }
                const intl = intl3.intl;
                const obj3 = { years: tenureReqNumMonths / 12 };
                formatToPlainStringResult = intl.formatToPlainString(intl3.t.qOdyDe, obj3);
              }
              cResult[0] = tieredTenureBadge;
              cResult[1] = formatToPlainStringResult;
              tmp5 = formatToPlainStringResult;
            }
          }
          const intl2 = intl3.intl;
          const obj4 = { months: tenureReqNumMonths };
          formatToPlainStringResult = intl2.formatToPlainString(intl3.t.erUSmA, obj4);
        } else {
          tmp5 = cResult[1];
        }
        return tmp5;
      }
    }
  : () => {
      let id;
      let tenureReqNumMonths;
      const obj = useTenureBadging;
      const tieredTenureBadge = obj.useTieredTenureBadge();
      if (null == tieredTenureBadge) {
        return null;
      } else {
        const tmpResult = TieredTenureBadgeUtils;
        const tieredTenureBadgeData = tmpResult.getTieredTenureBadgeData(tieredTenureBadge);
        ({ id, tenureReqNumMonths } = tieredTenureBadgeData);
        if (TieredTenureBadge.PREMIUM_TENURE_1_MONTH !== id) {
          if (TieredTenureBadge.PREMIUM_TENURE_3_MONTH !== id) {
            let formatToPlainStringResult;
            if (TieredTenureBadge.PREMIUM_TENURE_6_MONTH !== id) {
              if (TieredTenureBadge.PREMIUM_TENURE_12_MONTH !== id) {
                if (TieredTenureBadge.PREMIUM_TENURE_24_MONTH !== id) {
                  if (TieredTenureBadge.PREMIUM_TENURE_36_MONTH !== id) {
                    if (TieredTenureBadge.PREMIUM_TENURE_60_MONTH !== id) {
                      formatToPlainStringResult = null;
                    }
                  }
                }
              }
              const intl = intl3.intl;
              const obj2 = { years: tenureReqNumMonths / 12 };
              formatToPlainStringResult = intl.formatToPlainString(intl3.t.qOdyDe, obj2);
            }
            return formatToPlainStringResult;
          }
        }
        const intl2 = intl3.intl;
        const obj3 = { months: tenureReqNumMonths };
        formatToPlainStringResult = intl2.formatToPlainString(intl3.t.erUSmA, obj3);
      }
    };
const result = size.fileFinishedImporting(
  "modules/premium/tiered_tenure_badging/hooks/useTenureBadgeRequirementString.tsx",
);

export const useTenureBadgeRequirementString = tmp2;
export { getTenureBadgeRequirementString };
