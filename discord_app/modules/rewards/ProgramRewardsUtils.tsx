// === Module 13537: ProgramRewardsUtils ===

// Module 13537 (ProgramRewardsUtils)
import PremiumConstants from "PremiumConstants" /* 1379 */;
import isPastDefault from "isPast" /* 4302 */;
import PremiumUtils from "PremiumUtils" /* 4528 */;
import ProgramRewardsTypes from "ProgramRewardsTypes" /* 13538 */;
import PremiumRewardsOrbsExperiment from "PremiumRewardsOrbsExperiment" /* 13541 */;
import useHasXboxMonthlyOrbsPerk from "useHasXboxMonthlyOrbsPerk" /* 13542 */;
import UserStore from "UserStore" /* 1377 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const PremiumTypes = PremiumConstants.PremiumTypes;
function canFetchNitroProgramReward() {
  let flag;
  let str = ProgramRewardsUtils;
  if (ProgramRewardsUtils === undefined) {
    str = "ProgramRewardsUtils";
  }
  const NITRO = ProgramRewardsTypes.RewardProgram.NITRO;
  if (str === undefined) {
    str = "ProgramRewardsUtils";
  }
  if (ProgramRewardsTypes.RewardProgram.NITRO === NITRO) {
    const tmpResult = PremiumRewardsOrbsExperiment;
    flag = tmpResult.getPremiumRewardsOrbsExperiment(str).isInTreatment;
  } else {
    flag = false;
    if (ProgramRewardsTypes.RewardProgram.XBOX === NITRO) {
      flag = true;
    }
  }
  if (flag) {
    const currentUser = UserStore.getCurrentUser();
    const tmpResult2 = PremiumUtils;
    flag = tmpResult2.isPremiumExactly(currentUser, PremiumTypes.TIER_2);
  }
  return flag;
}
function canFetchXboxProgramReward() {
  let flag;
  let str = ProgramRewardsUtils;
  if (ProgramRewardsUtils === undefined) {
    str = "ProgramRewardsUtils";
  }
  const XBOX = ProgramRewardsTypes.RewardProgram.XBOX;
  if (str === undefined) {
    str = "ProgramRewardsUtils";
  }
  if (ProgramRewardsTypes.RewardProgram.NITRO === XBOX) {
    const tmpResult = PremiumRewardsOrbsExperiment;
    flag = tmpResult.getPremiumRewardsOrbsExperiment(str).isInTreatment;
  } else {
    flag = false;
    if (ProgramRewardsTypes.RewardProgram.XBOX === XBOX) {
      flag = true;
    }
  }
  if (flag) {
    const tmpResult2 = useHasXboxMonthlyOrbsPerk;
    flag = tmpResult2.hasCrepeMonthlyOrbsPerk(UserStore.getCurrentUser());
  }
  return flag;
}
let obj = {};
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  let str = "ProgramRewardsUtils";
  if (undefined !== arg1) {
    str = arg1;
  }
  obj = PremiumRewardsOrbsExperiment;
  const isInTreatment = obj.usePremiumRewardsOrbsExperiment(str).isInTreatment;
  if (ProgramRewardsTypes.RewardProgram.NITRO === arg0) {
    return isInTreatment;
  } else if (ProgramRewardsTypes.RewardProgram.XBOX === arg0) {
    return true;
  } else {
    return false;
  }
}) : ((arg0) => {
  let str = arg1;
  if (arg1 === undefined) {
    str = "ProgramRewardsUtils";
  }
  obj = PremiumRewardsOrbsExperiment;
  const isInTreatment = obj.usePremiumRewardsOrbsExperiment(str).isInTreatment;
  if (ProgramRewardsTypes.RewardProgram.NITRO === arg0) {
    return isInTreatment;
  } else if (ProgramRewardsTypes.RewardProgram.XBOX === arg0) {
    return true;
  } else {
    return false;
  }
});
function isEligibleForProgramReward(arg0) {
  let str = ProgramRewardsUtils;
  if (ProgramRewardsUtils === undefined) {
    str = "ProgramRewardsUtils";
  }
  if (ProgramRewardsTypes.RewardProgram.NITRO === arg0) {
    const tmpResult = PremiumRewardsOrbsExperiment;
    return tmpResult.getPremiumRewardsOrbsExperiment(str).isInTreatment;
  } else if (ProgramRewardsTypes.RewardProgram.XBOX === arg0) {
    return true;
  } else {
    return false;
  }
}
function hasNecessaryPremiumSubscriptionStatus(stateFromStores) {
  let currentUser = stateFromStores;
  if (stateFromStores == null) {
    currentUser = UserStore.getCurrentUser();
  }
  obj = PremiumUtils;
  return obj.isPremiumExactly(currentUser, PremiumTypes.TIER_2);
}
obj[ProgramRewardsTypes.RewardProgram.NITRO] = canFetchNitroProgramReward;
obj[ProgramRewardsTypes.RewardProgram.XBOX] = canFetchXboxProgramReward;
const result = size.fileFinishedImporting("modules/rewards/ProgramRewardsUtils.tsx");

export const isProgramRewardStale = function isProgramRewardStale(next_reward_date) {
  if (null == next_reward_date) {
    return true;
  } else {
    next_reward_date = next_reward_date.next_reward_date;
    let tmp = null != next_reward_date && "" !== next_reward_date;
    if (tmp) {
      const _Date = Date;
      const self = this;
      const self2 = this;
      const tmp4 = isPastDefault;
      const date = new Date(next_reward_date);
      tmp = tmp4(date);
    }
    return tmp;
  }
};
export { isEligibleForProgramReward };
export const useIsEligibleForProgramReward = tmp2;
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
      if (obj[tmp2](str)) {
        obj.return();
        let flag = true;
        return true;
      }
    }
    continue;
  }
  return false;
};
export { hasNecessaryPremiumSubscriptionStatus };