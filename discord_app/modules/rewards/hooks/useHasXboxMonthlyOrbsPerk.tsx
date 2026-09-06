// === Module 13731: useHasXboxMonthlyOrbsPerk ===

// Module 13731 (useHasXboxMonthlyOrbsPerk)
import initialize from "initialize" /* 504 */;
import PerksStateUtils from "PerksStateUtils" /* 1377 */;
import user from "user" /* 1379 */;
import PremiumUtils from "PremiumUtils" /* 4218 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
const PremiumTypes = fn(1373).PremiumTypes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/rewards/hooks/useHasXboxMonthlyOrbsPerk.tsx");

export const hasCrepeMonthlyOrbsPerk = function hasCrepeMonthlyOrbsPerk(currentUser) {
  if (obj.canUseMonthlyOrbs(currentUser)) {
    if (!obj2.isPremiumExactly(currentUser, PremiumTypes.TIER_2)) {
      let perks;
      if (currentUser != null) {
        perks = currentUser.perks;
      }
      const perkSource = PerksStateUtils.getPerkSource(perks, user.Perk.MONTHLY_ORBS);
      let hasItem = null != perkSource;
      if (hasItem) {
        hasItem = perkSource.includes(user.PerkSource.SOURCE_THIRDPARTY_CROISSANT);
      }
      return hasItem;
    }
    obj2 = PremiumUtils;
  }
  return false;
};
export const useHasXboxMonthlyOrbsPerk = function useHasXboxMonthlyOrbsPerk() {
  const items = [UserStore];
  const stateFromStores = initialize.useStateFromStores(items, () => currentUser.getCurrentUser());
  let flag = false;
  if (obj2.canUseMonthlyOrbs(stateFromStores)) {
    let tmpResult = PremiumUtils;
    flag = false;
    if (!tmpResult.isPremiumExactly(stateFromStores, PremiumTypes.TIER_2)) {
      tmpResult = PerksStateUtils;
      let perks;
      if (stateFromStores != null) {
        perks = stateFromStores.perks;
      }
      const perkSource = tmpResult.getPerkSource(perks, user.Perk.MONTHLY_ORBS);
      let hasItem = null != perkSource;
      if (hasItem) {
        hasItem = perkSource.includes(user.PerkSource.SOURCE_THIRDPARTY_CROISSANT);
      }
      flag = hasItem;
    }
  }
  return flag;
};