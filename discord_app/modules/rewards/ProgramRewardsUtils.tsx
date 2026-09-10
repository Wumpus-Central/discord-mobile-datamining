// === Module 13802: ProgramRewardsUtils ===

// Module 13802 (ProgramRewardsUtils)
import _modDef4037 from "module_4037" /* 4037 */;
import PremiumUtils from "PremiumUtils" /* 4262 */;
import ProgramRewardsTypes from "ProgramRewardsTypes" /* 13803 */;
import PremiumRewardsOrbsExperiment from "PremiumRewardsOrbsExperiment" /* 13806 */;
import useHasXboxMonthlyOrbsPerk from "useHasXboxMonthlyOrbsPerk" /* 13807 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
function canFetchNitroProgramReward() {
  let str = ProgramRewardsUtils;
  if (ProgramRewardsUtils === undefined) {
    str = "ProgramRewardsUtils";
  }
  const NITRO = ProgramRewardsTypes.RewardProgram.NITRO;
  if (str === undefined) {
    str = "ProgramRewardsUtils";
  }
  if (ProgramRewardsTypes.RewardProgram.NITRO === NITRO) {
    let tmpResult = PremiumRewardsOrbsExperiment;
    let flag = tmpResult.getPremiumRewardsOrbsExperiment(str).isInTreatment;
  } else {
    flag = false;
    if (ProgramRewardsTypes.RewardProgram.XBOX === NITRO) {
      flag = true;
    }
  }
  if (flag) {
    const currentUser = UserStore.getCurrentUser();
    tmpResult = PremiumUtils;
    flag = tmpResult.isPremiumExactly(currentUser, PremiumTypes.TIER_2);
  }
  return flag;
}
function canFetchXboxProgramReward() {
  let str = ProgramRewardsUtils;
  if (ProgramRewardsUtils === undefined) {
    str = "ProgramRewardsUtils";
  }
  const XBOX = ProgramRewardsTypes.RewardProgram.XBOX;
  if (str === undefined) {
    str = "ProgramRewardsUtils";
  }
  if (ProgramRewardsTypes.RewardProgram.NITRO === XBOX) {
    let tmpResult = PremiumRewardsOrbsExperiment;
    let flag = tmpResult.getPremiumRewardsOrbsExperiment(str).isInTreatment;
  } else {
    flag = false;
    if (ProgramRewardsTypes.RewardProgram.XBOX === XBOX) {
      flag = true;
    }
  }
  if (flag) {
    tmpResult = useHasXboxMonthlyOrbsPerk;
    flag = tmpResult.hasCrepeMonthlyOrbsPerk(UserStore.getCurrentUser());
  }
  return flag;
}
const PremiumTypes = fn(1373).PremiumTypes;
const dependencyMap = { [fn(13803).RewardProgram.NITRO]: canFetchNitroProgramReward, [fn(13803).RewardProgram.XBOX]: canFetchXboxProgramReward };
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
      tmp = _modDef4037(date);
    }
    return tmp;
  }
};
export const isEligibleForProgramReward = function isEligibleForProgramReward(arg0) {
  let str = ProgramRewardsUtils;
  if (ProgramRewardsUtils === undefined) {
    str = "ProgramRewardsUtils";
  }
  if (ProgramRewardsTypes.RewardProgram.NITRO === arg0) {
    return PremiumRewardsOrbsExperiment.getPremiumRewardsOrbsExperiment(str).isInTreatment;
  } else if (ProgramRewardsTypes.RewardProgram.XBOX === arg0) {
    return true;
  } else {
    return false;
  }
};
export const useIsEligibleForProgramReward = function useIsEligibleForProgramReward(arg0) {
  let str = ProgramRewardsUtils;
  if (ProgramRewardsUtils === undefined) {
    str = "ProgramRewardsUtils";
  }
  if (ProgramRewardsTypes.RewardProgram.NITRO === arg0) {
    return obj.usePremiumRewardsOrbsExperiment(str).isInTreatment;
  } else if (ProgramRewardsTypes.RewardProgram.XBOX === arg0) {
    return true;
  } else {
    return false;
  }
  obj = PremiumRewardsOrbsExperiment;
};
export { canFetchNitroProgramReward };
export { canFetchXboxProgramReward };
export const canFetchAnyProgramReward = function canFetchAnyProgramReward() {
  let str = ProgramRewardsStore;
  if (ProgramRewardsStore === undefined) {
    str = "ProgramRewardsUtils";
  }
  const values = Object.values(ProgramRewardsTypes.RewardProgram);
  for (const item10015 of values) {
    if (typeof item10015 === "number") {
      if (dependencyMap[tmp2](str)) {
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
    currentUser = UserStore.getCurrentUser();
  }
  return PremiumUtils.isPremiumExactly(currentUser, PremiumTypes.TIER_2);
};