// discord_app/modules/rewards/hooks/useHasXboxMonthlyOrbsPerk.tsx
import get_initialized from "../../../../discord_common/js/packages/flux/index.tsx";
import react from "../../../../_runtime/00576_react.js";
import PremiumConstants from "../../premium/PremiumConstants.tsx";
import PerksStateUtils from "../../premium/perks_state/PerksStateUtils.tsx";
import user from "../../../../discord_common/js/packages/protos/discord_protos/users/v1/user.tsx";
import PremiumUtils from "../../../utils/PremiumUtils.tsx";
import UserStore from "../../../stores/UserStore.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const PremiumUtilsDefault = PremiumUtils;

const PremiumTypes = PremiumConstants.PremiumTypes;
function hasCrepeMonthlyOrbsPerk(currentUser) {
  const obj = PremiumUtilsDefault;
  if (obj.canUseMonthlyOrbs(currentUser)) {
    const obj2 = PremiumUtils;
    if (!obj2.isPremiumExactly(currentUser, PremiumTypes.TIER_2)) {
      let perks;
      const getPerkSource = PerksStateUtils.getPerkSource;
      PerksStateUtils;
      if (currentUser != null) {
        perks = currentUser.perks;
      }
      const perkSource = getPerkSource(perks, user.Perk.MONTHLY_ORBS);
      const hasItem = null != perkSource && perkSource.includes(user.PerkSource.SOURCE_THIRDPARTY_CROISSANT);
      return hasItem;
    }
  }
  return false;
}
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let currentUser;
      let tmp4;
      let tmp5;
      let tmp8;
      const obj = react;
      const cResult = obj.c(4);
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
      const tmpResult = get_initialized;
      const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
      if (cResult[2] !== stateFromStores) {
        let flag = false;
        const obj3 = PremiumUtilsDefault;
        if (obj3.canUseMonthlyOrbs(stateFromStores)) {
          flag = false;
          const tmpResult3 = PremiumUtils;
          if (!tmpResult3.isPremiumExactly(stateFromStores, PremiumTypes.TIER_2)) {
            let perks;
            const getPerkSource = PerksStateUtils.getPerkSource;
            PerksStateUtils;
            if (stateFromStores != null) {
              perks = stateFromStores.perks;
            }
            const perkSource = getPerkSource(perks, user.Perk.MONTHLY_ORBS);
            const hasItem = null != perkSource && perkSource.includes(user.PerkSource.SOURCE_THIRDPARTY_CROISSANT);
            flag = hasItem;
          }
        }
        cResult[2] = stateFromStores;
        cResult[3] = flag;
        tmp8 = flag;
      } else {
        tmp8 = cResult[3];
      }
      return tmp8;
    }
  : () => {
      let currentUser;
      const items = [UserStore];
      const obj = get_initialized;
      const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
      let flag = false;
      const obj2 = PremiumUtilsDefault;
      if (obj2.canUseMonthlyOrbs(stateFromStores)) {
        flag = false;
        const tmpResult = PremiumUtils;
        if (!tmpResult.isPremiumExactly(stateFromStores, PremiumTypes.TIER_2)) {
          let perks;
          const getPerkSource = PerksStateUtils.getPerkSource;
          PerksStateUtils;
          if (stateFromStores != null) {
            perks = stateFromStores.perks;
          }
          const perkSource = getPerkSource(perks, user.Perk.MONTHLY_ORBS);
          const hasItem = null != perkSource && perkSource.includes(user.PerkSource.SOURCE_THIRDPARTY_CROISSANT);
          flag = hasItem;
        }
      }
      return flag;
    };
const result = size.fileFinishedImporting("modules/rewards/hooks/useHasXboxMonthlyOrbsPerk.tsx");

export { hasCrepeMonthlyOrbsPerk };
export const useHasXboxMonthlyOrbsPerk = tmp2;
