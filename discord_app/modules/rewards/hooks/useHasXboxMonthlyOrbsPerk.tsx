// discord_app/modules/rewards/hooks/useHasXboxMonthlyOrbsPerk.tsx
import mergeGuildAvatar from "mergeGuildAvatar";
import { PremiumTypes } from "GuildFeatures";

const require = arg1;
const result = require("getPremiumPlanItem").fileFinishedImporting("modules/rewards/hooks/useHasXboxMonthlyOrbsPerk.tsx");

export const hasCrepeMonthlyOrbsPerk = function hasCrepeMonthlyOrbsPerk(currentUser) {
  if (obj.canUseMonthlyOrbs(currentUser)) {
    if (!obj2.isPremiumExactly(currentUser, PremiumTypes.TIER_2)) {
      let perks;
      if (currentUser != null) {
        perks = currentUser.perks;
      }
      const perkSource = tmp2(1890).getPerkSource(perks, tmp2(1892).Perk.MONTHLY_ORBS);
      let hasItem = null != perkSource;
      if (hasItem) {
        hasItem = perkSource.includes(tmp2(1892).PerkSource.SOURCE_THIRDPARTY_CROISSANT);
      }
      return hasItem;
    }
    obj2 = require("../../../utils/PremiumUtils.tsx") /* getPremiumPlanItem */;
  }
  return false;
};
export const useHasXboxMonthlyOrbsPerk = function useHasXboxMonthlyOrbsPerk() {
  const items = [mergeGuildAvatar];
  const stateFromStores = require("../../../../discord_common/js/packages/flux/index.tsx") /* initialize */.useStateFromStores(items, () => currentUser.getCurrentUser());
  const obj = require("../../../../discord_common/js/packages/flux/index.tsx") /* initialize */;
  let flag = false;
  if (obj2.canUseMonthlyOrbs(stateFromStores)) {
    let tmpResult = tmp(3931);
    flag = false;
    if (!tmpResult.isPremiumExactly(stateFromStores, PremiumTypes.TIER_2)) {
      tmpResult = tmp(1890);
      let perks;
      if (stateFromStores != null) {
        perks = stateFromStores.perks;
      }
      const perkSource = tmpResult.getPerkSource(perks, tmp(1892).Perk.MONTHLY_ORBS);
      let hasItem = null != perkSource;
      if (hasItem) {
        hasItem = perkSource.includes(tmp(1892).PerkSource.SOURCE_THIRDPARTY_CROISSANT);
      }
      flag = hasItem;
    }
  }
  return flag;
};