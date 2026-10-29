// === Module 15533: ProgramRewardsUtils ===

// Module 15533 (ProgramRewardsUtils)
import PremiumUtils from "PremiumUtils" /* 2051 */;
import _modDef4632 from "module_4632" /* 4632 */;
import useHasXboxMonthlyOrbsPerk from "useHasXboxMonthlyOrbsPerk" /* 15534 */;
import ProgramRewardsTypes from "ProgramRewardsTypes" /* 15535 */;
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
const dependencyMap = { [fn(15535).RewardProgram.NITRO]: canFetchNitroProgramReward, [fn(15535).RewardProgram.XBOX]: canFetchXboxProgramReward };
const size = fn(2);
const result = size.fileFinishedImporting("modules/rewards/ProgramRewardsUtils.tsx");

export function isProgramRewardStale(next_reward_date) {
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
      tmp = _modDef4632(date);
    }
    return tmp;
  }
}
export { canFetchNitroProgramReward };
export { canFetchXboxProgramReward };
export function canFetchAnyProgramReward() {
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
}
export function hasNecessaryPremiumSubscriptionStatus(currentUser) {
  if (currentUser == null) {
    currentUser = UserStore.getCurrentUser();
  }
  return PremiumUtils.isPremiumExactly(currentUser, PremiumTypes.TIER_2);
}