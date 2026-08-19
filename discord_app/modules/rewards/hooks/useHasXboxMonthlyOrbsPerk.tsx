// === Module 13279: hasCrepeMonthlyOrbsPerk ===

// Module 13279 (hasCrepeMonthlyOrbsPerk)
import initialize from "initialize" /* 589 */;
import parseServerPerkConfigKind from "parseServerPerkConfigKind" /* 1938 */;
import create from "create" /* 1940 */;
import getPremiumPlanItem from "getPremiumPlanItem" /* 4039 */;
import mergeGuildAvatar from "mergeGuildAvatar" /* 1922 */;
import { PremiumTypes } from "GuildFeatures" /* 1924 */;

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