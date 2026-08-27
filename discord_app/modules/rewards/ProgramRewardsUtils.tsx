// === Module 13294: canFetchNitroProgramReward ===

// Module 13294 (canFetchNitroProgramReward)
import isPastDefault from "isPast" /* 3884 */;
import getPremiumPlanItem from "getPremiumPlanItem" /* 4107 */;
import apexExperiment from "apexExperiment" /* 7234 */;
import RewardProgram from "RewardProgram" /* 13295 */;
import PremiumRewardsOrbsTreatment from "PremiumRewardsOrbsTreatment" /* 13298 */;
import closure_3 from "mergeGuildAvatar" /* 1922 */;
import { PremiumTypes } from "GuildFeatures" /* 1924 */;

require = arg1;
function canFetchNitroProgramReward(canUseMonthlyOrbs) {
  let str = canUseMonthlyOrbs;
  if (canUseMonthlyOrbs === undefined) {
    str = "ProgramRewardsUtils";
  }
  const NITRO = RewardProgram.RewardProgram.NITRO;
  if (str === undefined) {
    str = "ProgramRewardsUtils";
  }
  if (RewardProgram.RewardProgram.NITRO === NITRO) {
    let tmpResult = tmp(13298);
    let flag = tmpResult.getPremiumRewardsOrbsExperiment(str).isInTreatment;
  } else {
    flag = false;
    if (tmp(13295).RewardProgram.XBOX === NITRO) {
      tmpResult = tmp(7234);
      flag = tmpResult.getIsCrepeEnabled(str);
    }
  }
  if (flag) {
    const currentUser = authStore.getCurrentUser();
    flag = tmp(4107).isPremiumExactly(currentUser, PremiumTypes.TIER_2);
    const tmpResult1 = tmp(4107);
  }
  return flag;
}
function canFetchXboxProgramReward(canUseMonthlyOrbs) {
  let str = canUseMonthlyOrbs;
  if (canUseMonthlyOrbs === undefined) {
    str = "ProgramRewardsUtils";
  }
  const XBOX = RewardProgram.RewardProgram.XBOX;
  if (str === undefined) {
    str = "ProgramRewardsUtils";
  }
  if (RewardProgram.RewardProgram.NITRO === XBOX) {
    let tmpResult = tmp(13298);
    let flag = tmpResult.getPremiumRewardsOrbsExperiment(str).isInTreatment;
  } else {
    flag = false;
    if (tmp(13295).RewardProgram.XBOX === XBOX) {
      tmpResult = tmp(7234);
      flag = tmpResult.getIsCrepeEnabled(str);
    }
  }
  if (flag) {
    flag = tmp(13299).hasCrepeMonthlyOrbsPerk(authStore.getCurrentUser());
    const tmpResult1 = tmp(13299);
  }
  return flag;
}
let closure_5 = { [arg1(13295).RewardProgram.NITRO]: canFetchNitroProgramReward, [arg1(13295).RewardProgram.XBOX]: canFetchXboxProgramReward };
const result = require("set").fileFinishedImporting("modules/rewards/ProgramRewardsUtils.tsx");

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
      tmp = isPastDefault(date);
      const tmp4 = isPastDefault;
    }
    return tmp;
  }
};
export const isEligibleForProgramReward = function isEligibleForProgramReward(arg0, canUseMonthlyOrbs) {
  let str = canUseMonthlyOrbs;
  if (canUseMonthlyOrbs === undefined) {
    str = "ProgramRewardsUtils";
  }
  if (RewardProgram.RewardProgram.NITRO === arg0) {
    let tmpResult = tmp(13298);
    return tmpResult.getPremiumRewardsOrbsExperiment(str).isInTreatment;
  } else if (tmp(13295).RewardProgram.XBOX === arg0) {
    tmpResult = tmp(7234);
    return tmpResult.getIsCrepeEnabled(str);
  } else {
    return false;
  }
};
export const useIsEligibleForProgramReward = function useIsEligibleForProgramReward(arg0, location) {
  let str = location;
  if (location === undefined) {
    str = "ProgramRewardsUtils";
  }
  const obj = PremiumRewardsOrbsTreatment;
  const tmp = require;
  const isCrepeEnabled = apexExperiment.useIsCrepeEnabled(str);
  if (RewardProgram.RewardProgram.NITRO === arg0) {
    return obj.usePremiumRewardsOrbsExperiment(str).isInTreatment;
  } else if (RewardProgram.RewardProgram.XBOX === arg0) {
    return isCrepeEnabled;
  } else {
    return false;
  }
  const obj2 = apexExperiment;
};
export { canFetchNitroProgramReward };
export { canFetchXboxProgramReward };
export const canFetchAnyProgramReward = function canFetchAnyProgramReward(ProgramRewardsStore) {
  let str = ProgramRewardsStore;
  if (ProgramRewardsStore === undefined) {
    str = "ProgramRewardsUtils";
  }
  const values = Object.values(RewardProgram.RewardProgram);
  for (const item10015 of values) {
    if (typeof item10015 === "number") {
      let tmp4 = dependencyMap;
      let tmp5 = item10015;
      if (dependencyMap[tmp2](str)) {
        let tmp3 = obj;
        obj.return();
        let flag = true;
        return true;
      }
    }
    continue;
  }
  return false;
};
export const hasNecessaryPremiumSubscriptionStatus = function hasNecessaryPremiumSubscriptionStatus(currentUser) {
  if (currentUser == null) {
    currentUser = authStore.getCurrentUser();
  }
  return getPremiumPlanItem.isPremiumExactly(currentUser, PremiumTypes.TIER_2);
};