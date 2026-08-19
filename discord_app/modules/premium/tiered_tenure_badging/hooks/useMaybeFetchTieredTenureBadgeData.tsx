// discord_app/modules/premium/tiered_tenure_badging/hooks/useMaybeFetchTieredTenureBadgeData.tsx
import useMountLayoutEffectDefault from "../../../../hooks/useMountEffect.tsx";
import mergeGuildAvatar from "../../../../stores/UserStore.tsx";
import { PremiumTypes } from "../../PremiumConstants.tsx";
import { initialize } from "../../../../../discord_common/js/packages/flux/index.tsx";

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/premium/tiered_tenure_badging/hooks/useMaybeFetchTieredTenureBadgeData.tsx");

export const useMaybeFetchTieredTenureBadgeData = function useMaybeFetchTieredTenureBadgeData() {
  const items = [closure_3];
  _require = require("../../../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items, () => currentUser.getCurrentUser());
  const obj = initialize;
  importDefault = require("../../useIsPremiumSubscriber.tsx").useIsPremiumSubscriber(PremiumTypes.TIER_2);
  useMountLayoutEffectDefault(() => {
    let id;
    if (user != null) {
      id = user.id;
    }
    if (tmp3) {
      callback(dependencyMap[5])(user.id);
    }
    tmp3 = null != id && callback;
  });
};