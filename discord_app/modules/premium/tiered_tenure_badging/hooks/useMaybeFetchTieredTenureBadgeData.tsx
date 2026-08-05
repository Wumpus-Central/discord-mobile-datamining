import { initialize } from "../../../../../discord_common/js/packages/flux/index.tsx";
import { useMountLayoutEffect } from "../../../../hooks/useMountEffect.tsx";
import { useIsPremiumSubscriber } from "../../useIsPremiumSubscriber.tsx";
// discord_app/modules/premium/tiered_tenure_badging/hooks/useMaybeFetchTieredTenureBadgeData.tsx
import mergeGuildAvatar from "mergeGuildAvatar";
import { PremiumTypes } from "GuildFeatures";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/premium/tiered_tenure_badging/hooks/useMaybeFetchTieredTenureBadgeData.tsx");

export const useMaybeFetchTieredTenureBadgeData = function useMaybeFetchTieredTenureBadgeData() {
  const items = [mergeGuildAvatar];
  _require = _initialize.useStateFromStores(items, () => currentUser.getCurrentUser());
  const obj = _initialize;
  const importDefault = _useIsPremiumSubscriber.useIsPremiumSubscriber(PremiumTypes.TIER_2);
  useMountLayoutEffect(() => {
    let id;
    if (closure_0 != null) {
      id = tmp.id;
    }
    if (tmp3) {
      callback(outer1_2[5])(tmp.id);
    }
  });
};