// === Module 13603: canFetchNitroProgramReward ===

// Module 13603 (canFetchNitroProgramReward)
import isPastDefault from "isPast" /* 3915 */;
import getPremiumPlanItem from "getPremiumPlanItem" /* 4139 */;
import apexExperiment from "apexExperiment" /* 7310 */;
import RewardProgram from "RewardProgram" /* 13604 */;
import PremiumRewardsOrbsTreatment from "PremiumRewardsOrbsTreatment" /* 13607 */;
import closure_3 from "mergeGuildAvatar" /* 1921 */;
import { PremiumTypes } from "GuildFeatures" /* 1923 */;

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
    let tmpResult = tmp(13607);
    let flag = tmpResult.getPremiumRewardsOrbsExperiment(str).isInTreatment;
  } else {
    flag = false;
    if (tmp(13604).RewardProgram.XBOX === NITRO) {
      tmpResult = tmp(7310);
      flag = tmpResult.getIsXboxGamePassPerksEnabled(str);
    }
  }
  if (flag) {
    const currentUser = authStore.getCurrentUser();
    flag = tmp(4139).isPremiumExactly(currentUser, PremiumTypes.TIER_2);
    const tmpResult1 = tmp(4139);
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
    let tmpResult = tmp(13607);
    let flag = tmpResult.getPremiumRewardsOrbsExperiment(str).isInTreatment;
  } else {
    flag = false;
    if (tmp(13604).RewardProgram.XBOX === XBOX) {
      tmpResult = tmp(7310);
      flag = tmpResult.getIsXboxGamePassPerksEnabled(str);
    }
  }
  if (flag) {
    flag = tmp(13608).hasCrepeMonthlyOrbsPerk(authStore.getCurrentUser());
    const tmpResult1 = tmp(13608);
  }
  return flag;
}
let closure_5 = { [arg1(13604).RewardProgram.NITRO]: canFetchNitroProgramReward, [arg1(13604).RewardProgram.XBOX]: canFetchXboxProgramReward };
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
    let tmpResult = tmp(13607);
    return tmpResult.getPremiumRewardsOrbsExperiment(str).isInTreatment;
  } else if (tmp(13604).RewardProgram.XBOX === arg0) {
    tmpResult = tmp(7310);
    return tmpResult.getIsXboxGamePassPerksEnabled(str);
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
  const isXboxGamePassPerksEnabled = apexExperiment.useIsXboxGamePassPerksEnabled(str);
  if (RewardProgram.RewardProgram.NITRO === arg0) {
    return obj.usePremiumRewardsOrbsExperiment(str).isInTreatment;
  } else if (RewardProgram.RewardProgram.XBOX === arg0) {
    return isXboxGamePassPerksEnabled;
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