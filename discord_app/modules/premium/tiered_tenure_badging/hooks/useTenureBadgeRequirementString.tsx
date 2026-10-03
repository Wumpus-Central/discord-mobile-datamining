// discord_app/modules/premium/tiered_tenure_badging/hooks/useTenureBadgeRequirementString.tsx
import c from "../../../../../_runtime/00576_c.js";
import util from "../../../../intl/index.native.tsx";
import PremiumConstants from "../../PremiumConstants.tsx";
import useTenureBadging from "useTenureBadging.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const TieredTenureBadgeUtils = erUSmA(7119);
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
        const intl = util.intl;
        const obj = { years: tenureReqNumMonths / 12 };
        return intl.formatToPlainString(util.t.qOdyDe, obj);
      }
    }
  }
  const intl2 = util.intl;
  return intl2.formatToPlainString(util.t.erUSmA, { months: tenureReqNumMonths });
}
const result = size.fileFinishedImporting(
  "modules/premium/tiered_tenure_badging/hooks/useTenureBadgeRequirementString.tsx",
);

export const useTenureBadgeRequirementString = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let erUSmA = require;
      let obj = dependencyMap;
      const cResult = c.c(2);
      const tieredTenureBadge = useTenureBadging.useTieredTenureBadge();
      if (null == tieredTenureBadge) {
        return null;
      } else if (cResult[0] !== tieredTenureBadge) {
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
              const obj4 = { years: tenureReqNumMonths / 12 };
              formatToPlainStringResult = intl.formatToPlainString(util.t.qOdyDe, obj4);
            }
            cResult[0] = tieredTenureBadge;
            cResult[1] = formatToPlainStringResult;
          }
        }
        const intl2 = util.intl;
        erUSmA = util.t.erUSmA;
        obj = { months: tenureReqNumMonths };
        formatToPlainStringResult = intl2.formatToPlainString(erUSmA, obj);
        const erUSmAResult = TieredTenureBadgeUtils;
      } else {
        return cResult[1];
      }
    }
  : () => {
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
export { getTenureBadgeRequirementString };
