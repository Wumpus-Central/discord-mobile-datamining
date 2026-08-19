// discord_app/modules/rewards/hooks/useHasXboxMonthlyOrbsPerk.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import parseServerPerkConfigKind from "../../premium/perks_state/PerksStateUtils.tsx";
import create from "../../../../discord_common/js/packages/protos/discord_protos/users/v1/user.tsx";
import getPremiumPlanItem from "../../../utils/PremiumUtils.tsx";
import mergeGuildAvatar from "../../../stores/UserStore.tsx";
import { PremiumTypes } from "../../premium/PremiumConstants.tsx";

require = fn;
const result = require("obj132").fileFinishedImporting("modules/rewards/hooks/useHasXboxMonthlyOrbsPerk.tsx");

export const hasCrepeMonthlyOrbsPerk = function hasCrepeMonthlyOrbsPerk(currentUser) {
  if (obj.canUseMonthlyOrbs(currentUser)) {
    if (!obj2.isPremiumExactly(currentUser, PremiumTypes.TIER_2)) {
      let perks;
      if (currentUser != null) {
        perks = currentUser.perks;
      }
      const perkSource = parseServerPerkConfigKind.getPerkSource(perks, create.Perk.MONTHLY_ORBS);
      let hasItem = null != perkSource;
      if (hasItem) {
        hasItem = perkSource.includes(create.PerkSource.SOURCE_THIRDPARTY_CROISSANT);
      }
      return hasItem;
    }
    obj2 = getPremiumPlanItem;
  }
  return false;
};
export const useHasXboxMonthlyOrbsPerk = function useHasXboxMonthlyOrbsPerk() {
  const items = [closure_3];
  const stateFromStores = initialize.useStateFromStores(items, () => currentUser.getCurrentUser());
  let flag = false;
  if (obj2.canUseMonthlyOrbs(stateFromStores)) {
    let tmpResult = getPremiumPlanItem;
    flag = false;
    if (!tmpResult.isPremiumExactly(stateFromStores, PremiumTypes.TIER_2)) {
      tmpResult = parseServerPerkConfigKind;
      let perks;
      if (stateFromStores != null) {
        perks = stateFromStores.perks;
      }
      const perkSource = tmpResult.getPerkSource(perks, create.Perk.MONTHLY_ORBS);
      let hasItem = null != perkSource;
      if (hasItem) {
        hasItem = perkSource.includes(create.PerkSource.SOURCE_THIRDPARTY_CROISSANT);
      }
      flag = hasItem;
    }
  }
  return flag;
};