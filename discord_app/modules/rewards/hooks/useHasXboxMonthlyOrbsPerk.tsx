// === Module 13558: useHasXboxMonthlyOrbsPerk ===

// Module 13558 (useHasXboxMonthlyOrbsPerk)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import PerksStateUtils from "PerksStateUtils" /* 1383 */;
import user from "user" /* 1385 */;
import PremiumUtils from "PremiumUtils" /* 4534 */;
import UserStore from "UserStore" /* 1377 */;

const PremiumUtilsDefault = PremiumUtils;

require = fn;
const PremiumTypes = fn(1379).PremiumTypes;
const ReactCompilerGating = fn(558);
function hasCrepeMonthlyOrbsPerk(currentUser) {
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
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/rewards/hooks/useHasXboxMonthlyOrbsPerk.tsx");

export { hasCrepeMonthlyOrbsPerk };
export const useHasXboxMonthlyOrbsPerk = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function n() {
      return currentUser.getCurrentUser();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const stateFromStores = initialize.useStateFromStores(tmp4, tmp5);
  if (cResult[2] !== stateFromStores) {
    let flag = false;
    if (obj3.canUseMonthlyOrbs(stateFromStores)) {
      flag = false;
      if (!tmpResult3.isPremiumExactly(stateFromStores, PremiumTypes.TIER_2)) {
        let perks;
        if (stateFromStores != null) {
          perks = stateFromStores.perks;
        }
        const perkSource = PerksStateUtils.getPerkSource(perks, user.Perk.MONTHLY_ORBS);
        let hasItem = null != perkSource;
        if (hasItem) {
          hasItem = perkSource.includes(user.PerkSource.SOURCE_THIRDPARTY_CROISSANT);
        }
        flag = hasItem;
        const tmpResult4 = PerksStateUtils;
      }
      tmpResult3 = PremiumUtils;
    }
    cResult[2] = stateFromStores;
    cResult[3] = flag;
    let tmp8 = flag;
    obj3 = PremiumUtilsDefault;
  } else {
    tmp8 = cResult[3];
  }
  return tmp8;
}) : (() => {
  const items = [UserStore];
  const stateFromStores = initialize.useStateFromStores(items, () => currentUser.getCurrentUser());
  let flag = false;
  if (obj2.canUseMonthlyOrbs(stateFromStores)) {
    flag = false;
    if (!tmpResult.isPremiumExactly(stateFromStores, PremiumTypes.TIER_2)) {
      let perks;
      if (stateFromStores != null) {
        perks = stateFromStores.perks;
      }
      const perkSource = PerksStateUtils.getPerkSource(perks, user.Perk.MONTHLY_ORBS);
      let hasItem = null != perkSource;
      if (hasItem) {
        hasItem = perkSource.includes(user.PerkSource.SOURCE_THIRDPARTY_CROISSANT);
      }
      flag = hasItem;
      const tmpResult2 = PerksStateUtils;
    }
    tmpResult = PremiumUtils;
  }
  return flag;
});