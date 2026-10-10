// discord_app/modules/rewards/ProgramRewardsUtils.tsx
import _modDef4543 from "../../../_runtime/metro/04543__.js";
import PremiumUtils from "../../utils/PremiumUtils.tsx";
import useHasXboxMonthlyOrbsPerk from "hooks/useHasXboxMonthlyOrbsPerk.tsx";
import ProgramRewardsTypes from "ProgramRewardsTypes.tsx";
import UserStore from "../../stores/UserStore.tsx";

require = fn;
function canFetchNitroProgramReward() {
  const currentUser = UserStore.getCurrentUser();
  return PremiumUtils.isPremiumExactly(currentUser, PremiumTypes.TIER_2);
}
function canFetchXboxProgramReward() {
  return useHasXboxMonthlyOrbsPerk.hasCrepeMonthlyOrbsPerk(UserStore.getCurrentUser());
}
const PremiumTypes = fn(1392).PremiumTypes;
const dependencyMap = {
  [fn(13998).RewardProgram.NITRO]: canFetchNitroProgramReward,
  [fn(13998).RewardProgram.XBOX]: canFetchXboxProgramReward,
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/rewards/ProgramRewardsUtils.tsx");

export const isProgramRewardStale = function isProgramRewardStale(next_reward_date) {
  if (null == next_reward_date) {
    return true;
  } else {
    next_reward_date = next_reward_date.next_reward_date;
    let tmp = null != next_reward_date;
    if (tmp) {
      tmp = "" !== next_reward_date;
    }
    if (tmp) {
      const _Date = Date;
      const date = new Date(next_reward_date);
      tmp = _modDef4543(date);
    }
    return tmp;
  }
};
export { canFetchNitroProgramReward };
export { canFetchXboxProgramReward };
export const canFetchAnyProgramReward = function canFetchAnyProgramReward() {
  const values = Object.values(ProgramRewardsTypes.RewardProgram);
  for (const item10014 of values) {
    if (typeof item10014 === "number") {
      if (dependencyMap[tmp2]()) {
        obj.return();
        let flag = true;
        return true;
      }
    }
    continue;
  }
  return false;
};
export const hasNecessaryPremiumSubscriptionStatus = function hasNecessaryPremiumSubscriptionStatus(stateFromStores) {
  let currentUser = stateFromStores;
  if (stateFromStores == null) {
    currentUser = UserStore.getCurrentUser();
  }
  return PremiumUtils.isPremiumExactly(currentUser, PremiumTypes.TIER_2);
};
