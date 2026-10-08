// === Module 13850: ProgramRewardsUtils ===

// Module 13850 (ProgramRewardsUtils)
import _modDef4500 from "module_4500" /* 4500 */;
import PremiumUtils from "PremiumUtils" /* 4726 */;
import useHasXboxMonthlyOrbsPerk from "useHasXboxMonthlyOrbsPerk" /* 13851 */;
import ProgramRewardsTypes from "ProgramRewardsTypes" /* 13852 */;
import UserStore from "UserStore" /* 1389 */;

require = fn;
function canFetchNitroProgramReward() {
  const currentUser = UserStore.getCurrentUser();
  return PremiumUtils.isPremiumExactly(currentUser, PremiumTypes.TIER_2);
}
function canFetchXboxProgramReward() {
  return useHasXboxMonthlyOrbsPerk.hasCrepeMonthlyOrbsPerk(UserStore.getCurrentUser());
}
const PremiumTypes = fn(1391).PremiumTypes;
const dependencyMap = { [fn(13852).RewardProgram.NITRO]: canFetchNitroProgramReward, [fn(13852).RewardProgram.XBOX]: canFetchXboxProgramReward };
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
      tmp = _modDef4500(date);
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