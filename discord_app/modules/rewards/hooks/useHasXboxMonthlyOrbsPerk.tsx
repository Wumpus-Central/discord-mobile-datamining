// discord_app/modules/rewards/hooks/useHasXboxMonthlyOrbsPerk.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import PerksStateUtils from "../../premium/perks_state/PerksStateUtils.tsx";
import user from "../../../../discord_common/js/packages/protos/discord_protos/users/v1/user.tsx";
import PremiumUtils from "../../../utils/PremiumUtils.tsx";
import UserStore from "../../../stores/UserStore.tsx";

require = fn;
const PremiumTypes = fn(1390).PremiumTypes;
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
