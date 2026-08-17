// discord_app/modules/premium/tiered_tenure_badging/hooks/useMaybeFetchTieredTenureBadgeData.tsx
import useMountLayoutEffectDefault from "useMountLayoutEffect" /* 4761 */;
import closure_3 from "mergeGuildAvatar" /* 1922 */;
import { PremiumTypes } from "GuildFeatures" /* 1924 */;
import { initialize } from "../../../../../discord_common/js/packages/flux/index.tsx";
import { useIsPremiumSubscriber } from "../../useIsPremiumSubscriber.tsx";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/premium/tiered_tenure_badging/hooks/useMaybeFetchTieredTenureBadgeData.tsx");

export const useMaybeFetchTieredTenureBadgeData = function useMaybeFetchTieredTenureBadgeData() {
  const items = [closure_3];
  _require = _initialize.useStateFromStores(items, () => currentUser.getCurrentUser());
  const obj = _initialize;
  importDefault = _useIsPremiumSubscriber.useIsPremiumSubscriber(PremiumTypes.TIER_2);
  useMountLayoutEffectDefault(() => {
    let id;
    if (closure_0 != null) {
      id = tmp.id;
    }
    if (tmp3) {
      callback(closure_1_2[5])(tmp.id);
    }
  });
};