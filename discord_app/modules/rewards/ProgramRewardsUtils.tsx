// discord_app/modules/rewards/ProgramRewardsUtils.tsx
import isPastDefault from "../../../_runtime/03816_isPast.js";
import getPremiumPlanItem from "../../utils/PremiumUtils.tsx";
import apexExperiment from "../croissant/crepe/CrepeExperiment.tsx";
import RewardProgram from "ProgramRewardsTypes.tsx";
import PremiumRewardsOrbsTreatment from "../premium/tenure_reward/experiments/PremiumRewardsOrbsExperiment.tsx";
import hasCrepeMonthlyOrbsPerk from "hooks/useHasXboxMonthlyOrbsPerk.tsx";
import mergeGuildAvatar from "../../stores/UserStore.tsx";
import { PremiumTypes } from "../premium/PremiumConstants.tsx";

require = fn;
function canFetchNitroProgramReward(ProgramRewardsUtils) {
  let str = ProgramRewardsUtils;
  if (ProgramRewardsUtils === undefined) {
    str = "ProgramRewardsUtils";
  }
  const NITRO = RewardProgram.RewardProgram.NITRO;
  if (str === undefined) {
    str = "ProgramRewardsUtils";
  }
  if (RewardProgram.RewardProgram.NITRO === NITRO) {
    let tmpResult = PremiumRewardsOrbsTreatment;
    let flag = tmpResult.getPremiumRewardsOrbsExperiment(str).isInTreatment;
  } else {
    flag = false;
    if (RewardProgram.RewardProgram.XBOX === NITRO) {
      tmpResult = apexExperiment;
      flag = tmpResult.getIsCrepeEnabled(str);
    }
  }
  if (flag) {
    const currentUser = authStore.getCurrentUser();
    flag = getPremiumPlanItem.isPremiumExactly(currentUser, PremiumTypes.TIER_2);
    const tmpResult1 = getPremiumPlanItem;
  }
  return flag;
}
function canFetchXboxProgramReward(ProgramRewardsUtils) {
  let str = ProgramRewardsUtils;
  if (ProgramRewardsUtils === undefined) {
    str = "ProgramRewardsUtils";
  }
  const XBOX = RewardProgram.RewardProgram.XBOX;
  if (str === undefined) {
    str = "ProgramRewardsUtils";
  }
  if (RewardProgram.RewardProgram.NITRO === XBOX) {
    let tmpResult = PremiumRewardsOrbsTreatment;
    let flag = tmpResult.getPremiumRewardsOrbsExperiment(str).isInTreatment;
  } else {
    flag = false;
    if (RewardProgram.RewardProgram.XBOX === XBOX) {
      tmpResult = apexExperiment;
      flag = tmpResult.getIsCrepeEnabled(str);
    }
  }
  if (flag) {
    flag = hasCrepeMonthlyOrbsPerk.hasCrepeMonthlyOrbsPerk(authStore.getCurrentUser());
    const tmpResult1 = hasCrepeMonthlyOrbsPerk;
  }
  return flag;
}
let closure_5 = { [fn(13275).RewardProgram.NITRO]: canFetchNitroProgramReward, [fn(13275).RewardProgram.XBOX]: canFetchXboxProgramReward };
const result = require("obj132").fileFinishedImporting("modules/rewards/ProgramRewardsUtils.tsx");

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
    }
    return tmp;
  }
};
export const isEligibleForProgramReward = function isEligibleForProgramReward(arg0, ProgramRewardsUtils) {
  let str = ProgramRewardsUtils;
  if (ProgramRewardsUtils === undefined) {
    str = "ProgramRewardsUtils";
  }
  if (RewardProgram.RewardProgram.NITRO === arg0) {
    let tmpResult = PremiumRewardsOrbsTreatment;
    return tmpResult.getPremiumRewardsOrbsExperiment(str).isInTreatment;
  } else if (RewardProgram.RewardProgram.XBOX === arg0) {
    tmpResult = apexExperiment;
    return tmpResult.getIsCrepeEnabled(str);
  } else {
    return false;
  }
};
export const useIsEligibleForProgramReward = function useIsEligibleForProgramReward(arg0, ProgramRewardsUtils) {
  let str = ProgramRewardsUtils;
  if (ProgramRewardsUtils === undefined) {
    str = "ProgramRewardsUtils";
  }
  const obj = PremiumRewardsOrbsTreatment;
  const isCrepeEnabled = apexExperiment.useIsCrepeEnabled(str);
  if (RewardProgram.RewardProgram.NITRO === arg0) {
    return obj.usePremiumRewardsOrbsExperiment(str).isInTreatment;
  } else if (RewardProgram.RewardProgram.XBOX === arg0) {
    return isCrepeEnabled;
  } else {
    return false;
  }
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
    currentUser = authStore.getCurrentUser();
  }
  return getPremiumPlanItem.isPremiumExactly(currentUser, PremiumTypes.TIER_2);
};