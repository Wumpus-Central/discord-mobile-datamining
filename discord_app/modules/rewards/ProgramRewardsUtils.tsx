// discord_app/modules/rewards/ProgramRewardsUtils.tsx
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
const PremiumTypes = fn(1389).PremiumTypes;
const dependencyMap = {
  [fn(15219).RewardProgram.NITRO]: canFetchNitroProgramReward,
  [fn(15219).RewardProgram.XBOX]: canFetchXboxProgramReward,
};
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
      const _Date2 = Date;
      const time = date.getTime();
      tmp = time < Date.now();
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
