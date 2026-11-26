// === Module 15218: useHasXboxMonthlyOrbsPerk ===

// Module 15218 (useHasXboxMonthlyOrbsPerk)
import initialize from "initialize" /* 504 */;
import PerksStateUtils from "PerksStateUtils" /* 1393 */;
import user from "user" /* 1400 */;
import PremiumUtils from "PremiumUtils" /* 2174 */;
import UserStore from "UserStore" /* 1387 */;

require = fn;
const PremiumTypes = fn(1389).PremiumTypes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/rewards/hooks/useHasXboxMonthlyOrbsPerk.tsx");

export function hasCrepeMonthlyOrbsPerk(currentUser) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = true;
  }
  if (obj.canUseMonthlyOrbs(currentUser)) {
    if (flag) {
      PremiumUtils;
    }
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
  return false;
}
export function useHasXboxMonthlyOrbsPerk() {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = true;
  }
  items = [UserStore];
  const stateFromStores = initialize.useStateFromStores(items, () => currentUser.getCurrentUser());
  if (flag === undefined) {
    flag = true;
  }
  let flag2 = false;
  if (obj2.canUseMonthlyOrbs(stateFromStores)) {
    if (!flag) {
      let perks;
      if (stateFromStores != null) {
        perks = stateFromStores.perks;
      }
      const perkSource = PerksStateUtils.getPerkSource(perks, user.Perk.MONTHLY_ORBS);
      let hasItem = null != perkSource;
      if (hasItem) {
        hasItem = perkSource.includes(user.PerkSource.SOURCE_THIRDPARTY_CROISSANT);
      }
      flag2 = hasItem;
      const tmpResult = PerksStateUtils;
    } else {
      PremiumUtils;
      flag2 = false;
    }
  }
  return flag2;
}