// discord_app/modules/premium/tiered_tenure_badging/hooks/useNextTenureBadge.tsx
import useTenureBadging from "useTenureBadging.tsx";
import PremiumConstants from "../../PremiumConstants.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

({ TIERED_TENURE_BADGE_ORDER: c2, TENURE_BADGES: c3 } = PremiumConstants);
const result = size.fileFinishedImporting("modules/premium/tiered_tenure_badging/hooks/useNextTenureBadge.tsx");

export const useNextTenureBadge = ReactCompilerGating.isReactCompilerEnabled()
  ? function useNextTenureBadge() {
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
    }
  : function useNextTenureBadge() {
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
    };
